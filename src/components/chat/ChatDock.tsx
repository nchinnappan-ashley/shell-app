"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ChatBubbleLeftRightIcon,
  XMarkIcon,
  PaperAirplaneIcon,
  SparklesIcon,
  MicrophoneIcon,
  PaperClipIcon,
} from "@heroicons/react/24/outline";
import { processUserInput, type AgentSession, type ReportAttachment } from '@/agents/orchestrator';


export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  ts: number;
  attachment?: ReportAttachment;
};

const STORAGE_KEY = "chatdock_messages_v1";

function usePersistentMessages() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setMessages(JSON.parse(raw));
    } catch {}
  }, []);
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {}
  }, [messages]);
  return [messages, setMessages] as const;
}

function escapeHtml(s: string) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function escapeRegExp(s: string) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
function tokenizeQ(q: string) { return q.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean).filter(t => t.length >= 3); }

export default function ChatDock() {
  const [open, setOpen] = useState(false);
  const [session, setSession] = useState<AgentSession | null>(null);

  const [input, setInput] = useState("");
  const [messages, setMessages] = usePersistentMessages();
  const listRef = useRef<HTMLDivElement>(null);

  // RAG ingest UI state
  const [ragDir, setRagDir] = useState("");
  const [ragBusy, setRagBusy] = useState(false);
  const [ragMsg, setRagMsg] = useState<string | null>(null);
  type IngestResult = { url: string; chunks?: number; error?: string };
  type IngestResponse = { ok: boolean; results: IngestResult[]; error?: string };
  const ingestDir = async () => {
    const dir = ragDir.trim();
    if (!dir) { setRagMsg('Enter a folder path'); return; }
    setRagBusy(true);
    setRagMsg(null);
    try {
      const res = await fetch('/api/rag/ingest', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ dir }) });
      const data: IngestResponse = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Failed to ingest');
      const okCount = data.results.filter(r => !r.error).length;
      const totalChunks = data.results.reduce((acc, r) => acc + (r.chunks || 0), 0);
      setRagMsg(`Indexed ${okCount} file(s), ${totalChunks} chunk(s).`);
    } catch (e) {
      setRagMsg(e instanceof Error ? e.message : String(e));
    } finally {
      setRagBusy(false);
    }
  };

  // Download helpers for report attachments
  const toCSV = (headers: string[], rows: (string|number)[][]) => {
    const esc = (v: string|number) => {
      const s = String(v);
      return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
    };
    return [headers.join(','), ...rows.map(r => r.map(esc).join(','))].join('\n');
  };
  const triggerDownload = (filename: string, mime: string, data: Blob | string | ArrayBuffer) => {
    let blob: Blob;
    if (data instanceof Blob) {
      blob = data;
    } else if (typeof data === 'string') {
      blob = new Blob([data], { type: mime });
    } else {
      // ArrayBuffer
      blob = new Blob([new Uint8Array(data)], { type: mime });
    }
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };
  const downloadCSV = (att: ReportAttachment) => {
    const csv = toCSV(att.headers, att.rows);
    triggerDownload(`${att.name}.csv`, 'text/csv;charset=utf-8', csv);
  };
  const downloadJSON = (att: ReportAttachment) => {
    const objs = att.rows.map(row => Object.fromEntries(att.headers.map((h, i) => [h, row[i] ?? null])));
    const json = JSON.stringify({ report: att.name, rows: objs }, null, 2);
    triggerDownload(`${att.name}.json`, 'application/json', json);
  };
  const downloadXLSX = async (att: ReportAttachment) => {
    try {
      const XLSX = await import('xlsx');
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.aoa_to_sheet([att.headers, ...att.rows]);
      XLSX.utils.book_append_sheet(wb, ws, 'Report');
      const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
      triggerDownload(`${att.name}.xlsx`, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', wbout);
    } catch {
      alert('Excel export requires the "xlsx" package. I can install it if you allow.');
    }
  };
  const downloadDOCX = async (att: ReportAttachment) => {
    try {
      const docx = await import('docx');
      const { Document, Packer, Paragraph, Table, TableRow, TableCell, WidthType } = docx;
      const headerRow = new TableRow({ children: att.headers.map((h) => new TableCell({ children: [new Paragraph(String(h))] })) });
      const bodyRows = att.rows.map((r) => new TableRow({ children: r.map((c) => new TableCell({ children: [new Paragraph(String(c))] })) }));
      const table = new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows: [headerRow, ...bodyRows] });
      const doc = new Document({ sections: [{ properties: {}, children: [new Paragraph(`${att.name} report`), table] }] });
      const blob = await Packer.toBlob(doc);
      triggerDownload(`${att.name}.docx`, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', blob);
    } catch {
      alert('Word export requires the "docx" package. I can install it if you allow.');
    }
  };
  const downloadPDF = async (att: ReportAttachment) => {
    try {
      const jsPDFMod = await import('jspdf');
      const JsPDF = jsPDFMod.default;
      try { await import('jspdf-autotable'); } catch {}
      const doc = new JsPDF();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((doc as any).autoTable) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (doc as any).autoTable({ head: [att.headers], body: att.rows });
      } else {
        doc.text(`${att.name} report`, 14, 16);
        let y = 26;
        const text = toCSV(att.headers, att.rows);
        text.split('\n').slice(0, 50).forEach((line) => { doc.text(line, 14, y); y += 6; });
      }
      doc.save(`${att.name}.pdf`);
    } catch {
      alert('PDF export requires "jspdf" (and optionally "jspdf-autotable"). I can install them if you allow.');
    }
  };


  useEffect(() => {
    if (!open) return;
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [open, messages.length]);

  const send = async () => {
    const text = input.trim();
    if (!text) return;
    const user: ChatMessage = { id: crypto.randomUUID(), role: "user", content: text, ts: Date.now() };
    const typing: ChatMessage = { id: crypto.randomUUID(), role: "assistant", content: "…", ts: Date.now() };
    setMessages((prev) => [...prev, user, typing]);
    setInput("");

    // Agentic processing with slot-filling (async)
    const result = await processUserInput(session, text);
    setSession(result.session);
    const reply = (result.replies && result.replies.length) ? result.replies.join("\n") : "Okay.";

    setTimeout(() => {
      setMessages((prev) => prev.map((m) => (m === typing ? { ...m, content: reply, attachment: result.attachment } : m)));
    }, 500);
  };

  return (
    <div className="pointer-events-none">
      {/* Floating toggle button */}
      <button
        aria-label="Open chatbot"
        onClick={() => setOpen((v) => !v)}
        className="pointer-events-auto fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-[var(--primary)] text-white hover:shadow-xl active:scale-95 transition-all"
      >
        {open ? <XMarkIcon className="w-6 h-6" /> : <ChatBubbleLeftRightIcon className="w-6 h-6" />}
      </button>

      {/* Panel */}
      <div
        className={`pointer-events-auto fixed bottom-24 right-6 z-50 w-[360px] sm:w-[400px] ${
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        } transition-all duration-300`}
      >
        <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 bg-white/90 backdrop-blur">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg brand-soft brand-text flex items-center justify-center">
                <SparklesIcon className="w-4 h-4" />
              </div>
              <div className="text-sm font-semibold text-gray-900">Ashley Knowledge Base</div>
            </div>
            <button onClick={() => setOpen(false)} className="p-1 rounded hover:bg-gray-100">
              <XMarkIcon className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* RAG ingest panel */}
          <div className="px-4 py-2 border-b border-gray-200 bg-gray-50/60">
            <div className="text-[11px] text-gray-600 mb-1">RAG: Ingest from folder</div>
            <div className="flex gap-2">
              <input
                value={ragDir}
                onChange={(e) => setRagDir(e.target.value)}
                placeholder="C:\\Users\\NChinnappan\\Downloads\\data feed"
                className="flex-1 bg-white/90 border border-gray-200 rounded-lg px-2 py-1 text-xs outline-none focus:ring-2 focus:ring-[var(--ring)]"
              />
              <button
                onClick={ingestDir}
                disabled={ragBusy}
                className="px-2 py-1 text-xs rounded-md bg-[var(--primary)] text-white disabled:opacity-50"
              >
                {ragBusy ? 'Indexing…' : 'Index'}
              </button>
            </div>
            {ragMsg && <div className="mt-1 text-[11px] text-gray-600">{ragMsg}</div>}
          </div>

          {/* Messages */}
          <div ref={listRef} className="max-h-[50vh] overflow-y-auto px-3 py-3 space-y-3">
            {messages.length === 0 ? (
              <div className="text-xs text-gray-500 px-2 py-6 text-center">
                Ask anything. This is a UI shell; responses are simulated.
              </div>
            ) : (
              messages.map((m) => (
                <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`px-3 py-2 text-sm rounded-2xl max-w-[80%] shadow-sm transition-all ${
                      m.role === "user"
                        ? "bg-[var(--primary)] text-white rounded-br-sm"
                        : "bg-gray-100 text-gray-800 rounded-bl-sm"
                    }`}
                  >
                    {m.role === 'assistant' ? (
                      (() => {
                        const idx = messages.findIndex(x => x.id === m.id);
                        let prevUser = '';
                        for (let j = idx - 1; j >= 0; j--) { if (messages[j]?.role === 'user') { prevUser = messages[j].content || ''; break; } }
                        const toks = tokenizeQ(prevUser);
                        const re = toks.length ? new RegExp('(' + toks.map(escapeRegExp).join('|') + ')', 'gi') : null;
                        const safe = escapeHtml(m.content);
                        const html = re ? safe.replace(re, (mt) => `<mark class=\"bg-yellow-200 rounded px-0.5\">${mt}</mark>`) : safe;
                        return <div dangerouslySetInnerHTML={{ __html: html }} />;
                      })()
                    ) : (
                      <div>{m.content}</div>
                    )}
                    {m.role === 'assistant' && m.attachment?.type === 'report' && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        <button onClick={() => downloadCSV(m.attachment!)} className="px-2 py-1 text-xs rounded-md bg-white/70 hover:bg-white text-gray-800 border border-gray-200 shadow-sm">CSV</button>
                        <button onClick={() => downloadJSON(m.attachment!)} className="px-2 py-1 text-xs rounded-md bg-white/70 hover:bg-white text-gray-800 border border-gray-200 shadow-sm">JSON</button>
                        <button onClick={() => downloadXLSX(m.attachment!)} className="px-2 py-1 text-xs rounded-md bg-white/70 hover:bg-white text-gray-800 border border-gray-200 shadow-sm">Excel</button>
                        <button onClick={() => downloadDOCX(m.attachment!)} className="px-2 py-1 text-xs rounded-md bg-white/70 hover:bg-white text-gray-800 border border-gray-200 shadow-sm">Word</button>
                        <button onClick={() => downloadPDF(m.attachment!)} className="px-2 py-1 text-xs rounded-md bg-white/70 hover:bg-white text-gray-800 border border-gray-200 shadow-sm">PDF</button>
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Composer */}
          <div className="px-3 pb-3">
            <div className="relative flex items-center gap-2 bg-white/80 backdrop-blur border border-gray-200 rounded-2xl px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-[var(--ring)] transition-all">
              <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all" title="Attach">
                <PaperClipIcon className="w-5 h-5" />
              </button>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); send(); } }}
                placeholder="Message Ashley Knowledge Base"
                className="flex-1 bg-transparent outline-none text-sm placeholder-gray-500"
              />
              <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all" title="Voice">
                <MicrophoneIcon className="w-5 h-5" />
              </button>
              <button
                onClick={send}
                className="inline-flex items-center gap-1 bg-[var(--primary)] text-white text-sm px-3 py-1.5 rounded-xl shadow hover:shadow-md active:scale-95 transition-all"
                title="Send"
              >
                <PaperAirplaneIcon className="w-4 h-4" />
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


"use client";

import React, { useMemo, useState } from "react";

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function tokenize(q: string) {
  return q.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean).filter(t => t.length >= 3);
}

export default function KnowledgeBasePage() {
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Array<{ id: number; file: string; idx: number; score: number; snippet: string }>>([]);
  const [regex, setRegex] = useState(false);

  const highlightRe = useMemo(() => {
    if (regex || (q.startsWith("/") && q.endsWith("/"))) {
      const body = q.startsWith("/") && q.endsWith("/") ? q.slice(1, -1) : q;
      try { return new RegExp(body, "gi"); } catch { return null; }
    }
    const toks = tokenize(q);
    if (!toks.length) return null;
    return new RegExp("(" + toks.map(escapeRegExp).join("|") + ")", "gi");
  }, [q, regex]);

  const hilite = (text: string) => {
    if (!highlightRe) return text;
    return text.replace(highlightRe, (m) => `${m}`)
      .split("\u007F")
      .map((part, i) => (i % 2 === 1 ? `<mark class=\"bg-yellow-200 rounded px-0.5\">${part}</mark>` : part))
      .join("");
  };

  const search = async () => {
    setLoading(true);
    setResults([]);
    try {
      const r = await fetch("/api/kb/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: q, regex }),
      });
      const data = await r.json();
      if (data?.results) setResults(data.results);
    } catch (e) {
      alert("Search failed: " + (e as any).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-xl font-semibold text-gray-900">Ashley Knowledge Base</h1>
      <p className="mt-1 text-sm text-gray-600">Search across your local documents (indexed via the ingest script). Use /pattern/ to run a regex search.</p>

      <div className="mt-4 flex items-center gap-2">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={regex ? "Enter regex, e.g., /PO\\d+/" : "Ask a question or keywords"}
          className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <label className="flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" checked={regex} onChange={(e) => setRegex(e.target.checked)} /> Regex
        </label>
        <button
          type="button"
          onClick={search}
          disabled={loading || !q.trim()}
          className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      <div className="mt-6 space-y-4">
        {results.map((r) => (
          <div key={r.id} className="p-3 rounded-lg border border-gray-200 bg-white">
            <div className="text-xs text-gray-500 mb-1">{r.file} (chunk {r.idx + 1}) • score {r.score}</div>
            <div className="text-sm text-gray-800" dangerouslySetInnerHTML={{ __html: hilite(r.snippet) }} />
          </div>
        ))}
        {!loading && results.length === 0 && (
          <div className="text-sm text-gray-500">No results yet. Try a keyword or a regex like <code>/invoice|PO/</code>.</div>
        )}
      </div>

      <div className="mt-8 text-xs text-gray-500">
        To (re)build the index: <code>node shell-app/scripts/ingest-kb.js "C:\\Users\\NChinnappan\\Downloads\\data feed"</code>
      </div>
    </div>
  );
}


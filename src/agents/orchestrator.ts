// Simple client-side orchestrator with pluggable agents and slot-filling

import catalogData from '@/data/catalog.json';
import { knowledgeDocs } from '@/data/knowledge';

export type AgentSession = {
  agentId: string;
  slotIndex: number;
  slots: Record<string, string>;
};

export type ReportAttachment = {
  type: 'report';
  name: string;
  headers: string[];
  rows: (string | number)[][];
  format?: 'csv' | 'json';
};

export type ProcessResult = {
  replies: string[];
  session: AgentSession | null;
  attachment?: ReportAttachment;
};

type ExecuteOutput = string | { message: string; attachment?: ReportAttachment };

type Agent = {
  id: string;
  name: string;
  // Return a score 0..1 indicating how likely this agent matches the input
  detect: (text: string) => number;
  // Ordered slot keys to collect
  slots: { key: string; question: string; optional?: boolean }[];
  // Execute the task and return a final message or an object with attachment
  execute: (slots: Record<string, string>) => Promise<ExecuteOutput> | ExecuteOutput;
};

function normalize(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
}

// Catalog helpers
function listAllCatalogTitles(limit?: number) {
  const apps = catalogData as unknown as { id: string; title: string }[];
  const arr = apps.map(a => ({ id: a.id, title: a.title }));
  return typeof limit === 'number' ? arr.slice(0, Math.max(0, limit)) : arr;
}

function searchCatalog(query: string, topN = 5) {
  const apps = catalogData as unknown as { id: string; title: string }[];
  const q = normalize(query);
  const scored = apps.map((a) => {
    const t = normalize(a.title);
    let score = 0;
    if (!q) score = 0;
    else if (t === q) score = 1.0;
    else if (t.startsWith(q) || q.startsWith(t)) score = 0.8;
    else if (t.includes(q) || q.includes(t)) score = 0.6;
    else {
      const qt = new Set(q.split(' '));
      const tt = new Set(t.split(' '));
      let overlap = 0;
      qt.forEach((w) => {
        if (tt.has(w)) overlap++;
      });
      if (overlap > 0) score = Math.min(0.4 + overlap * 0.05, 0.55);
    }
    return { ...a, score };
  });
  const sorted = scored.sort((a, b) => b.score - a.score).slice(0, topN);
  return sorted.filter((x) => x.score >= 0.4);
}

function shouldListAll(text: string) {
  const t = normalize(text);
  if (!t) return false;
  if (t === 'apps' || t === 'applications') return true;
  const phrases = [
    'list all apps', 'list apps', 'list applications', 'all applications', 'all apps',
    'available applications', 'available apps', 'available application names', 'available app names',
    'show all apps', 'show applications', 'show me all apps',
    'app names', 'application names', 'list of apps', 'list of applications',
    'apps list', 'application list', 'what apps are available', 'what applications are available',
    'which apps are available', 'which applications are available',
    'what apps do we have', 'which apps do we have',
    'give available application names', 'give me app names', 'provide app names'
  ];
  if (phrases.some(p => t.includes(p))) return true;
  // Heuristic: presence of an app word AND a list/ask word
  const hasAppWord = ['app', 'apps', 'application', 'applications'].some(w => t.includes(w));
  const hasListWord = ['list', 'available', 'names', 'name', 'show', 'display', 'all', 'what', 'which', 'give', 'provide'].some(w => t.includes(w));
  return hasAppWord && hasListWord;
}

const catalogAgent: Agent = {
  id: 'catalog.search',
  name: 'Catalog Search',
  detect: (text) => {
    const t = normalize(text);
    if (!t) return 0;
    if (shouldListAll(t)) return 0.95;
    const keywords = ['search', 'find', 'open', 'launch', 'app', 'application', 'catalog', 'apps', 'applications', 'list', 'show'];
    const hasKw = keywords.some((k) => t.includes(k));
    const matches = searchCatalog(t, 1).length > 0;
    if (hasKw && matches) return 0.9;
    if (hasKw) return 0.6;
    if (matches) return 0.45; // low score to avoid hijacking generic queries like "tell me about ashley"
    return 0;
  },
  slots: [
    { key: 'query', question: 'What app or capability are you looking for?' },
    { key: 'topN', question: 'How many results would you like? (default 5, max 10)', optional: true },
  ],
  execute: (slots) => {
    const q = slots.query || '';
    const n = Math.min(Math.max(parseInt(slots.topN || '5', 10) || 5, 1), 10);
    if (shouldListAll(q)) {
      const all = listAllCatalogTitles();
      const lines = all.map((r, i) => `${i + 1}. ${r.title} (/${r.id})`);
      return `Available applications (${all.length}):\n` + lines.join('\n');
    }
    const results = searchCatalog(q, n);
    if (!results.length) return `I couldn’t find results for “${q}”. Try a different phrase?`;
    const lines = results.map((r, i) => `${i + 1}. ${r.title} (/${r.id})`);
    return `Here are the top ${results.length} result(s) for “${q}”:\n` + lines.join('\n');
  },
};

const orderAgent: Agent = {
  id: 'order.status',
  name: 'Order Status',
  detect: (text) => {
    const t = normalize(text);
    if (!t) return 0;
    const kw = ['order', 'status', 'track', 'tracking'];
    const has = kw.some((k) => t.includes(k));
    const looksId = /\b(ORD|SO|PO)[- ]?\d{5,}\b/.test(text);
    return has ? (looksId ? 0.9 : 0.65) : 0;
  },
  slots: [
    { key: 'orderId', question: 'What is the order ID?' },
    { key: 'zip', question: 'Destination ZIP (optional)?', optional: true },
  ],
  execute: (slots) => {
    const id = slots.orderId || 'unknown';
    // Demo response
    return `Order ${id} is in transit. ETA: 2–3 business days. Last scan: Little Rock, AR.\nNeed detailed tracking link?`;
  },
};


// --- Report generation helpers ---

function generateReportDataset(reportType: string, rows = 10): { name: string; headers: string[]; rows: (string|number)[][] } {
  const t = normalize(reportType);
  const apps = (catalogData as unknown as { id: string; title: string }[]).map(a => a.title);
  const now = Date.now();
  const rand = (min: number, max: number) => Math.floor(min + Math.random() * (max - min + 1));

  if (t.includes('sale')) {
    const headers = ['date', 'application', 'orders', 'revenue_usd'];
    const data: (string | number)[][] = Array.from({ length: rows }, (_, i) => {
      const d = new Date(now - i * 86400000);
      const app = apps[i % apps.length] || 'Ashley Direct';
      const orders = rand(10, 180);
      const revenue = orders * rand(50, 200);
      return [d.toISOString().slice(0, 10), app, orders, revenue];
    }).reverse();
    return { name: 'sales', headers, rows: data };
  }

  if (t.includes('inventory') || t.includes('stock')) {
    const headers = ['sku', 'item', 'qty_on_hand', 'reorder_point'];
    const data: (string | number)[][] = Array.from({ length: rows }, (_, i) => {
      const sku = `SKU-${1000 + i}`;
      const item = `Item ${i + 1}`;
      const qoh = rand(0, 500);
      const rp = rand(50, 150);
      return [sku, item, qoh, rp];
    });
    return { name: 'inventory', headers, rows: data };
  }

  // Default generic
  const headers = ['id', 'name', 'value'];
  const data: (string | number)[][] = Array.from({ length: rows }, (_, i) => [i + 1, `Row ${i + 1}`, rand(10, 999)]);
  return { name: t || 'generic', headers, rows: data };
}

// --- RAG: simple TF-IDF over local knowledgeDocs ---
function tokenize(s: string): string[] {
  return normalize(s).split(' ').filter(Boolean);
}

const ragIndex = (() => {
  const docs = knowledgeDocs.map(d => ({ id: d.id, title: d.title, text: d.text, tokens: tokenize(d.text) }));
  const df = new Map<string, number>();
  const docVec = new Map<string, Map<string, number>>();
  const docNorm = new Map<string, number>();
  docs.forEach(d => {
    const tf = new Map<string, number>();
    d.tokens.forEach(t => tf.set(t, (tf.get(t) || 0) + 1));
    tf.forEach((_, t) => df.set(t, (df.get(t) || 0) + 1));
    docVec.set(d.id, tf);
  });
  const N = docs.length || 1;
  const idf = new Map<string, number>();
  df.forEach((dfv, t) => idf.set(t, Math.log(1 + N / (dfv || 1))));
  docVec.forEach((tf, id) => {
    let sum = 0;
    tf.forEach((f, t) => {
      const w = (1 + Math.log(f)) * (idf.get(t) || 0);
      sum += w * w;
    });
    docNorm.set(id, Math.sqrt(sum) || 1);
  });
  return { docs, df, idf, docVec, docNorm };
})();

function ragSearch(query: string, k = 3): { id: string; title: string; score: number; snippet: string }[] {
  const qTok = tokenize(query);
  const qtf = new Map<string, number>();
  qTok.forEach(t => qtf.set(t, (qtf.get(t) || 0) + 1));
  let qsum = 0;
  const qweights = new Map<string, number>();
  qtf.forEach((f, t) => {
    const w = (1 + Math.log(f)) * ((ragIndex.idf.get(t) || 0));
    if (w > 0) { qweights.set(t, w); qsum += w * w; }
  });
  const qnorm = Math.sqrt(qsum) || 1;
  const scored = ragIndex.docs.map(d => {
    const tf = ragIndex.docVec.get(d.id)!;
    let dot = 0;
    qweights.forEach((qw, t) => {
      const f = tf.get(t);
      if (f) {
        const dw = (1 + Math.log(f)) * ((ragIndex.idf.get(t) || 0));
        dot += qw * dw;
      }
    });
    const denom = qnorm * (ragIndex.docNorm.get(d.id) || 1);
    const score = denom ? (dot / denom) : 0;
    return { id: d.id, title: d.title, score, snippet: d.text.slice(0, 280) + (d.text.length > 280 ? '…' : '') };
  }).sort((a, b) => b.score - a.score).slice(0, k).filter(r => r.score > 0.01);
  return scored;
}

const knowledgeAgent: Agent = {
  id: 'knowledge.rag',
  name: 'Knowledge Q&A',
  detect: (text) => {
    const t = normalize(text);
    if (!t) return 0;
    const qwords = ['what','how','where','when','why','which','who','tell','about','describe','overview','info','information','explain','guide','docs','document','documentation'];
    const hasQ = qwords.some(w => t.includes(w)) || /\b(what is|who is|tell me about|about)\b/.test(t) || /\?$/.test(text.trim());
    return hasQ ? 0.8 : 0.5; // prefer over catalog when it's a general knowledge ask
  },
  slots: [
    { key: 'query', question: 'What would you like to know?' },
  ],
  execute: async (slots) => {
    const q = slots.query || '';
    try {
      const res = await fetch('/api/rag/query', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ query: q, topK: 5, topSentences: 6 }) });
      if (!res.ok) throw new Error('RAG query failed');
      const data = await res.json();
      const hits = (data?.hits || []) as { url:string; title?:string; text:string; score:number }[];
      const answer = (data?.answer || '').toString().trim();
      if (answer && hits.length) {
        // Comprehensive mode: return synthesized multi-sentence answer
        return answer;
      }
      if (!hits.length) return `I couldn't find anything relevant for "${q}". Try rephrasing your question.`;
      // Fallback: compact list of titles only
      const lines = hits.map((h, i) => `${i + 1}. ${(h.title || h.url)}`);
      return `Here are related sources:\n${lines.join('\n')}`;
    } catch {
      const hits = ragSearch(q, 3);
      if (!hits.length) return `I couldn't find anything relevant for "${q}". Try rephrasing your question.`;
      const lines = hits.map((h, i) => `${i + 1}. ${h.title} — ${h.snippet}`);
      return `Here’s what I found:\n${lines.join('\n')}\n\nSources: ${hits.map((h, i) => '[' + (i + 1) + '] ' + h.title).join('; ')}`;
    }
  }
};


const reportAgent: Agent = {
  id: 'report.generate',
  name: 'Report Generator',
  detect: (text) => {
    const t = normalize(text);
    if (!t) return 0;
    const kws = ['report', 'export', 'summary', 'csv', 'json'];
    const score = kws.some(k => t.includes(k)) ? 0.85 : 0;
    return score;
  },
  slots: [
    { key: 'reportType', question: 'What report would you like? (e.g., sales by day, inventory, generic)' },
    { key: 'range', question: 'What time range? (optional, e.g., last 30 days)', optional: true },
    { key: 'format', question: 'CSV or JSON? (default CSV)', optional: true },
    { key: 'rows', question: 'How many sample rows? (default 10)', optional: true },
  ],
  execute: (slots) => {
    const type = (slots.reportType || 'generic').toString();
    const n = Math.min(Math.max(parseInt((slots.rows || '10').toString(), 10) || 10, 1), 200);
    const ds = generateReportDataset(type, n);
    const message = `Generated ${ds.name} report with ${n} sample row(s). Choose a format to download.`;
    return { message, attachment: { type: 'report', name: ds.name, headers: ds.headers, rows: ds.rows } };
  },
};

const agents: Agent[] = [reportAgent, catalogAgent, orderAgent, knowledgeAgent];

function pickAgent(text: string): Agent | null {
  const scored = agents
    .map((a) => ({ a, s: a.detect(text) }))
    .sort((x, y) => y.s - x.s);
  if (!scored.length || scored[0].s < 0.5) return null;
  return scored[0].a;
}

function advancePastOptional(agent: Agent, session: AgentSession) {
  while (true) {
    const s = agent.slots[session.slotIndex];
    if (s && s.optional) { session.slotIndex += 1; continue; }
    break;
  }
}

function nextQuestion(agent: Agent, session: AgentSession): string | null {
  const slot = agent.slots[session.slotIndex];
  return slot ? slot.question : null;
}

export async function processUserInput(
  session: AgentSession | null,
  userText: string
): Promise<ProcessResult> {
  const replies: string[] = [];
  const text = userText.trim();
  if (!text) return { replies, session };

  if (!session) {
    const agent = pickAgent(text);
    if (!agent) {
      replies.push(
        "I can help with: knowledge Q&A using RAG (ask questions about the shell and apps), generate a report with sample data (e.g., ‘generate sales report CSV 20 rows’), list available applications (e.g., ‘list all apps’), catalog search (e.g., ‘search sales app’), order status (e.g., ‘track order SO12345’)."
      );
      return { replies, session: null };
    }
    // Start session and ask first question (unless user already supplied a clear value)
    const newSession: AgentSession = { agentId: agent.id, slotIndex: 0, slots: {} };
    // Heuristic: treat initial text as value for first slot if not a generic ask
    if (agent.id === 'catalog.search') {
      if (shouldListAll(text)) {
        const all = listAllCatalogTitles();
        const lines = all.map((r, i) => `${i + 1}. ${r.title} (/${r.id})`);
        replies.push(`Available applications (${all.length}):\n` + lines.join('\n'));
        return { replies, session: null };
      }
      newSession.slots.query = text;
      newSession.slotIndex = 1; // move to next (topN is optional)
      advancePastOptional(agent, newSession);
    } else if (agent.id === 'order.status') {
      const m = text.match(/\b(ORD|SO|PO)[- ]?\d{5,}\b/);
      if (m) {
        newSession.slots.orderId = m[0].replace(' ', '-');
        newSession.slotIndex = 1;
      }
    } else if (agent.id === 'report.generate') {
      const lower = text.toLowerCase();
      if (lower.includes('sales')) newSession.slots.reportType = 'sales';
      else if (lower.includes('inventory') || lower.includes('stock')) newSession.slots.reportType = 'inventory';
      else if (lower.includes('report')) newSession.slots.reportType = 'generic';
      if (lower.includes('json')) newSession.slots.format = 'json';
      if (lower.includes('csv')) newSession.slots.format = 'csv';
      const mRows = lower.match(/(\d+)\s*(rows?|lines?)/);
      if (mRows) newSession.slots.rows = mRows[1];
      if (newSession.slots.reportType) newSession.slotIndex = 1;
    } else if (agent.id === 'knowledge.rag') {
      newSession.slots.query = text;
      newSession.slotIndex = 1;
    }
    const ask = nextQuestion(agent, newSession);
    if (ask) {
      replies.push(ask);
      return { replies, session: newSession };
    }
    // No more slots to ask -> execute immediately
    const out = await agent.execute(newSession.slots);
    if (typeof out === 'string') {
      replies.push(out);
      return { replies, session: null };
    }
    replies.push(out.message || 'Done.');
    return { replies, session: null, attachment: out.attachment };
  }

  const agent = agents.find((a) => a.id === session.agentId)!;
  // Accept value for current slot
  const slotDef = agent.slots[session.slotIndex];
  if (slotDef) {
    session.slots[slotDef.key] = text;
    session.slotIndex += 1;
  }
  // Skip optional blanks
  while (true) {
    const s = agent.slots[session.slotIndex];
    if (s && s.optional) {
      // If user typed '-', skip optional slot
      if ((session.slots[s.key] || '') === '') {
        // Keep as blank optional
      }
      session.slotIndex += 1;
      continue;
    }
    break;
  }

  advancePastOptional(agent, session);
  const next = nextQuestion(agent, session);
  if (next) {
    replies.push(next);
    return { replies, session };
  }

  // Execute
  const out = await agent.execute(session.slots);
  if (typeof out === 'string') {
    replies.push(out);
    return { replies, session: null };
  }
  replies.push(out.message || 'Done.');
  return { replies, session: null, attachment: out.attachment };
}


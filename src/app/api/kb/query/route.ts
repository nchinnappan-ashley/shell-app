import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Legacy chunk-level index (if present)
type Chunk = { id: number; file: string; idx: number; text: string };
interface KBIndexLegacy {
  inverted: Record<string, number[]>;
  tokenCounts: Array<[number, Array<[string, number]>]>;
}

// New doc-level index (memory-light)
interface KBFilesEntry { id: number; file: string; size: number }
interface KBDocIndex { [token: string]: number[] }

type Mode = 'chunk' | 'doc';

let loaded = false;
let mode: Mode = 'chunk';

// chunk mode
let chunks: Chunk[] = [];
let inverted: Record<string, number[]> = {};
let tokenCounts: Map<number, Map<string, number>> = new Map();

// doc mode
let files: KBFilesEntry[] = [];
let docInverted: KBDocIndex = {};

function dataPath(...p: string[]) {
  const base = process.cwd();
  return path.join(base, 'shell-app', 'src', 'data', ...p);
}

function loadIndex() {
  if (loaded) return;
  const legacyIndex = dataPath('kb-index.json');
  const legacyChunks = dataPath('kb-chunks.json');
  const docIndex = dataPath('kb-doc-index.json');
  const filesPath = dataPath('kb-files.json');

  if (fs.existsSync(docIndex) && fs.existsSync(filesPath)) {
    // Prefer doc-level index when available
    docInverted = JSON.parse(fs.readFileSync(docIndex, 'utf8')) as KBDocIndex;
    files = JSON.parse(fs.readFileSync(filesPath, 'utf8')) as KBFilesEntry[];
    mode = 'doc';
    loaded = true;
    return;
  }

  if (fs.existsSync(legacyIndex) && fs.existsSync(legacyChunks)) {
    const index: KBIndexLegacy = JSON.parse(fs.readFileSync(legacyIndex, 'utf8'));
    const ch: Chunk[] = JSON.parse(fs.readFileSync(legacyChunks, 'utf8'));
    chunks = ch;
    inverted = index.inverted || {};
    tokenCounts = new Map(index.tokenCounts.map(([id, pairs]) => [id, new Map(pairs)]));
    mode = 'chunk';
    loaded = true;
    return;
  }

  throw new Error('KB index not found. Run: node shell-app/scripts/ingest-kb.js "<source-folder>" or ingest-kb-stream.js');
}

function tokenize(q: string) {
  return q.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean);
}

function makeSnippet(text: string, centerIdx: number, matchLen = 0, radius = 160) {
  const start = Math.max(0, centerIdx - radius);
  const end = Math.min(text.length, centerIdx + matchLen + radius);
  return text.slice(start, end).replace(/\s+/g, ' ').trim();
}

// ---- chunk-mode search ----
function keywordSearchChunk(query: string, k = 8) {
  const tokens = tokenize(query);
  const candSet = new Set<number>();
  for (const t of tokens) (inverted[t] || []).forEach((id) => candSet.add(id));
  const candidates = [...candSet];
  const scored = candidates.map((id) => {
    const counts = tokenCounts.get(id);
    let score = 0;
    if (counts) for (const t of tokens) score += counts.get(t) || 0;
    return { id, score };
  });
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, k).map((s) => {
    const ch = chunks.find((c) => c.id === s.id)!;
    const lower = ch.text.toLowerCase();
    const first = tokens.find((t) => lower.includes(t)) || '';
    const idx = first ? lower.indexOf(first) : 0;
    return { id: ch.id, file: ch.file, idx: ch.idx, score: s.score, snippet: makeSnippet(ch.text, idx, first.length) };
  });
}

function regexSearchChunk(pattern: string, k = 8) {
  const q = pattern.startsWith('/') && pattern.endsWith('/') ? pattern.slice(1, -1) : pattern;
  const re = new RegExp(q, 'i');
  const hits: Array<{ id: number; score: number } & any> = [];
  for (const ch of chunks) {
    const m = ch.text.match(re);
    if (m) hits.push({ id: ch.id, file: ch.file, idx: ch.idx, score: m[0]?.length || 1, snippet: makeSnippet(ch.text, m.index || 0, m[0]?.length || 0) });
  }
  hits.sort((a, b) => b.score - a.score);
  return hits.slice(0, k);
}

// ---- doc-mode streaming search ----
function escapeRegExp(s: string) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

async function streamSearchFiles(fileIds: number[], re: RegExp, k = 8) {
  const results: Array<{ file: string; idx: number; score: number; snippet: string }> = [];
  for (const fid of fileIds) {
    const f = files.find((x) => x.id === fid);
    if (!f) continue;
    const abs = dataPath('..', '..', f.file); // file path stored is relative to source; we saved relative
    const absPath = path.isAbsolute(abs) ? abs : path.resolve(process.cwd(), 'shell-app', 'src', 'data', abs);
    if (!fs.existsSync(f.file) && !fs.existsSync(abs) && !fs.existsSync(absPath)) continue;

    const readPath = fs.existsSync(f.file) ? f.file : (fs.existsSync(abs) ? abs : absPath);
    const stream = fs.createReadStream(readPath, { encoding: 'utf8', highWaterMark: 64 * 1024 });
    let buffer = '';
    let chunkIdx = 0;
    const radius = 160;
    const maxPerFile = 2;
    let fileHits = 0;

    for await (const chunk of stream) {
      buffer += chunk;
      // Keep buffer from growing unbounded
      if (buffer.length > 4 * radius) buffer = buffer.slice(-4 * radius);
      const m = re.exec(buffer);
      if (m) {
        const start = Math.max(0, (m.index || 0));
        const snippet = buffer.slice(Math.max(0, start - radius), Math.min(buffer.length, start + m[0].length + radius)).replace(/\s+/g, ' ').trim();
        results.push({ file: f.file, idx: chunkIdx, score: m[0].length, snippet });
        fileHits++;
        if (results.length >= k || fileHits >= maxPerFile) break;
      }
      chunkIdx++;
    }
    if (results.length >= k) break;
  }
  return results;
}

function filesForTokens(tokens: string[]): number[] {
  const set = new Set<number>();
  for (const t of tokens) (docInverted[t] || []).forEach((id) => set.add(id));
  return [...set];
}

async function keywordSearchDoc(query: string, k = 8) {
  const tokens = tokenize(query).filter((t) => t.length >= 3);
  const candidates = tokens.length ? filesForTokens(tokens) : files.map((f) => f.id);
  if (candidates.length === 0) return [];
  const re = new RegExp(tokens.map(escapeRegExp).join('|'), 'i');
  const hits = await streamSearchFiles(candidates, re, k);
  // score by number of matched tokens in snippet
  return hits.map((h) => ({ id: -1, file: h.file, idx: h.idx, score: h.score, snippet: h.snippet }));
}

async function regexSearchDoc(pattern: string, k = 8) {
  const q = pattern.startsWith('/') && pattern.endsWith('/') ? pattern.slice(1, -1) : pattern;
  const re = new RegExp(q, 'i');
  const allIds = files.map((f) => f.id);
  const hits = await streamSearchFiles(allIds, re, k);
  return hits.map((h) => ({ id: -1, file: h.file, idx: h.idx, score: h.score, snippet: h.snippet }));
}

export async function POST(req: NextRequest) {
  try {
    loadIndex();
    const { query, k = 8, regex = false } = await req.json();
    if (!query || typeof query !== 'string') {
      return NextResponse.json({ error: 'query (string) is required' }, { status: 400 });
    }

    if (mode === 'chunk') {
      const results = regex || (query.startsWith('/') && query.endsWith('/')) ? regexSearchChunk(query, k) : keywordSearchChunk(query, k);
      return NextResponse.json({ mode, results });
    } else {
      const results = regex || (query.startsWith('/') && query.endsWith('/')) ? await regexSearchDoc(query, k) : await keywordSearchDoc(query, k);
      return NextResponse.json({ mode, results });
    }
  } catch (e: any) {
    return NextResponse.json({ error: e.message || String(e) }, { status: 500 });
  }
}


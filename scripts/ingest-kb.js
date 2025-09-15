#!/usr/bin/env node
/**
 * Ashley Knowledge Base - Ingest script (no external deps)
 *
 * Reads files from a source folder, extracts text, chunks, and builds a simple
 * searchable index saved under src/data.
 *
 * Supported file types: .txt, .md, .csv, .json
 * (PDF/DOCX can be added later with extra parsers)
 *
 * Usage:
 *   node scripts/ingest-kb.js "C:\\Users\\NChinnappan\\Downloads\\data feed"
 *   # or
 *   KB_SRC="C:/path/to/folder" node scripts/ingest-kb.js
 */

const fs = require('fs');
const path = require('path');

const SRC_DIR = process.argv[2] || process.env.KB_SRC;
if (!SRC_DIR) {
  console.error('ERROR: Provide a source folder path as arg1 or KB_SRC env.');
  process.exit(1);
}

const OUT_DIR = path.join(__dirname, '..', 'src', 'data');
const OUT_INDEX = path.join(OUT_DIR, 'kb-index.json');
const OUT_CHUNKS = path.join(OUT_DIR, 'kb-chunks.json');

const ACCEPT = new Set(['.txt', '.md', '.csv', '.json']);

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((e) => {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) return walk(p);
    return [p];
  });
}

function readFileAsText(fp) {
  const ext = path.extname(fp).toLowerCase();
  try {
    if (ext === '.csv' || ext === '.txt' || ext === '.md') {
      return fs.readFileSync(fp, 'utf8');
    }
    if (ext === '.json') {
      // Pretty-print JSON to text
      const obj = JSON.parse(fs.readFileSync(fp, 'utf8'));
      return JSON.stringify(obj, null, 2);
    }
  } catch (e) {
    console.warn('WARN: failed reading', fp, e.message);
  }
  return '';
}

function chunkText(text, chunkSize = 1200, overlap = 200) {
  const chunks = [];
  let i = 0;
  while (i < text.length) {
    const end = Math.min(text.length, i + chunkSize);
    const slice = text.slice(i, end);
    chunks.push(slice);
    i = end - overlap;
    if (i <= 0) i = end; // avoid infinite loop on first chunk if overlap >= end
  }
  return chunks;
}

function tokenize(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);
}

function buildIndex(chunks) {
  // Simple inverted index: token -> set of chunk ids
  const inverted = Object.create(null);
  const tokenCounts = new Map(); // chunkId -> Map(token -> count)

  for (const ch of chunks) {
    const tokens = tokenize(ch.text);
    const counts = new Map();
    for (const t of tokens) counts.set(t, (counts.get(t) || 0) + 1);
    tokenCounts.set(ch.id, counts);
    for (const t of counts.keys()) {
      if (!inverted[t]) inverted[t] = [];
      inverted[t].push(ch.id);
    }
  }
  return { inverted, tokenCounts: [...tokenCounts].map(([id, m]) => [id, [...m]]) };
}

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function main() {
  console.log('KB Ingest — source:', SRC_DIR);
  const all = walk(SRC_DIR).filter((p) => ACCEPT.has(path.extname(p).toLowerCase()));
  console.log('Files:', all.length);

  const chunks = [];
  let id = 0;
  for (const fp of all) {
    const rel = path.relative(SRC_DIR, fp).replace(/\\/g, '/');
    const text = readFileAsText(fp);
    const segs = chunkText(text);
    segs.forEach((seg, idx) => {
      const ch = { id: id++, file: rel, idx, text: seg };
      chunks.push(ch);
    });
  }

  const index = buildIndex(chunks);
  ensureDir(OUT_DIR);
  fs.writeFileSync(OUT_INDEX, JSON.stringify(index, null, 2));
  fs.writeFileSync(OUT_CHUNKS, JSON.stringify(chunks, null, 2));
  console.log('Wrote index:', OUT_INDEX);
  console.log('Wrote chunks:', OUT_CHUNKS);
  console.log('Done.');
}

main();


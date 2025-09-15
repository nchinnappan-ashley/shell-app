#!/usr/bin/env node
/**
 * Ashley Knowledge Base - Streaming Ingest (memory-light)
 *
 * Builds a document-level inverted index (token -> file ids) and a file list.
 * This avoids storing all chunk text in memory. Queries stream-read files.
 *
 * Supported file types: .txt, .md, .csv, .json (JSON treated as text)
 *
 * Usage:
 *   node shell-app/scripts/ingest-kb-stream.js "C:\\Users\\NChinnappan\\Downloads\\data feed"
 *   # or from repo root:
 *   $env:KB_SRC = "C:\\path\\to\\folder"; node shell-app/scripts/ingest-kb-stream.js
 */

const fs = require('fs');
const path = require('path');

const SRC_DIR = process.argv[2] || process.env.KB_SRC;
if (!SRC_DIR) {
  console.error('ERROR: Provide a source folder path as arg1 or KB_SRC env.');
  process.exit(1);
}

const OUT_DIR = path.join(__dirname, '..', 'src', 'data');
const OUT_DOC_INDEX = path.join(OUT_DIR, 'kb-doc-index.json');
const OUT_FILES = path.join(OUT_DIR, 'kb-files.json');

const ACCEPT = new Set(['.txt', '.md', '.csv', '.json']);

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((e) => {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) return walk(p);
    return [p];
  });
}

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

function detectEncoding(filePath) {
  try {
    const fd = fs.openSync(filePath, 'r');
    const buf = Buffer.alloc(4);
    const bytes = fs.readSync(fd, buf, 0, 4, 0);
    fs.closeSync(fd);
    if (bytes >= 2) {
      if (buf[0] === 0xFF && buf[1] === 0xFE) return 'utf16le';
      if (buf[0] === 0xFE && buf[1] === 0xFF) return 'utf16be';
    }
  } catch (_) {}
  return 'utf8';
}

function* tokenizeStream(text) {
  // Split on non-alphanumeric; yield tokens of length >= 3
  const re = /[a-zA-Z0-9]{3,}/g;
  let m;
  while ((m = re.exec(text)) !== null) yield m[0].toLowerCase();
}

function decodeUtf16be(buf) {
  // swap bytes to convert to LE then to string
  const swapped = Buffer.allocUnsafe(buf.length);
  for (let i = 0; i + 1 < buf.length; i += 2) {
    swapped[i] = buf[i + 1];
    swapped[i + 1] = buf[i];
  }
  return swapped.toString('utf16le');
}

async function collectFileTokens(filePath) {
  return new Promise((resolve) => {
    try {
      const st = fs.statSync(filePath);
      if (st.isDirectory()) return resolve({ tokens: new Set(), size: 0 });
    } catch (_) { return resolve({ tokens: new Set(), size: 0 }); }

    const enc = detectEncoding(filePath); // 'utf8' | 'utf16le' | 'utf16be'
    const stream = fs.createReadStream(filePath, { highWaterMark: 64 * 1024 });
    const tokens = new Set();
    let leftover = '';
    let size = 0;

    stream.on('data', (chunk) => {
      size += chunk.length;
      let part;
      if (enc === 'utf8') part = chunk.toString('utf8');
      else if (enc === 'utf16le') part = chunk.toString('utf16le');
      else part = decodeUtf16be(chunk);

      const text = leftover + part;
      leftover = text.slice(-32); // keep a slightly larger tail for UTF-16 safety
      for (const t of tokenizeStream(text)) tokens.add(t);
    });
    stream.on('end', () => resolve({ tokens, size }));
    stream.on('error', () => resolve({ tokens: new Set(), size: 0 }));
  });
}

async function main() {
  console.log('KB Streaming Ingest — source:', SRC_DIR);
  const all = walk(SRC_DIR).filter((p) => ACCEPT.has(path.extname(p).toLowerCase()));
  console.log('Files:', all.length);

  const files = [];
  const inverted = Object.create(null); // token -> Set(fileId)

  let id = 0;
  for (const abs of all) {
    const rel = path.relative(SRC_DIR, abs).replace(/\\/g, '/');
    const { tokens, size } = await collectFileTokens(abs);
    const entry = { id, file: abs, size };
    files.push(entry);
    for (const t of tokens) {
      if (!inverted[t]) inverted[t] = new Set();
      inverted[t].add(id);
    }
    id++;
  }

  // Convert Sets to arrays
  const docIndex = Object.fromEntries(Object.entries(inverted).map(([t, s]) => [t, Array.from(s)]));

  ensureDir(OUT_DIR);
  fs.writeFileSync(OUT_DOC_INDEX, JSON.stringify(docIndex, null, 2));
  fs.writeFileSync(OUT_FILES, JSON.stringify(files, null, 2));
  console.log('Wrote doc index:', OUT_DOC_INDEX);
  console.log('Wrote files list:', OUT_FILES);
  console.log('Done.');
}

main().catch((e) => { console.error(e); process.exit(1); });


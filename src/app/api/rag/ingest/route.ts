import { NextRequest, NextResponse } from 'next/server';
import { chunkText } from '@/lib/rag/chunk';
import { addSparseDocuments } from '@/lib/rag/store';
import fs from 'node:fs/promises';
import path from 'node:path';

export const runtime = 'nodejs';

function stripHtml(html: string): string {
  // quick-and-dirty HTML -> text
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, '\n')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

async function fetchAsText(url: string) {
  const res = await fetch(url, { headers: { 'User-Agent': 'Ashley-AI-RAG/1.0' } });
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  const ct = res.headers.get('content-type') || '';
  const data = await res.text();
  if (ct.includes('html')) return stripHtml(data);
  return data;
}

async function readFilesFromDir(dir: string): Promise<{ url: string; title: string; text: string }[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const out: { url: string; title: string; text: string }[] = [];
  const allowed = new Set(['.txt', '.md', '.markdown', '.csv', '.json', '.html', '.htm', '.ts', '.tsx', '.js', '.jsx', '.css', '.scss']);
  for (const ent of entries) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      const nested = await readFilesFromDir(p);
      out.push(...nested);
      continue;
    }
    const ext = path.extname(ent.name).toLowerCase();
    if (!allowed.has(ext)) continue;
    try {
      const raw = await fs.readFile(p, 'utf-8');
      let text = raw;
      if (ext === '.html' || ext === '.htm') text = stripHtml(raw);
      else if (ext === '.json') {
        try { const obj = JSON.parse(raw); text = JSON.stringify(obj, null, 2); } catch {}
      }
      const fileUrl = 'file:///' + p.replace(/\\/g, '/');
      out.push({ url: fileUrl, title: path.basename(p), text });
    } catch {
      // skip unreadable files
    }
  }
  return out;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const urls: string[] = body?.urls || [];
    const dir: string | undefined = body?.dir;
    const files: string[] = Array.isArray(body?.files) ? body.files : [];
    if ((!Array.isArray(urls) || urls.length === 0) && !dir && files.length === 0) {
      return NextResponse.json({ error: 'Provide one of: { urls: string[] } or { dir: string } or { files: string[] }' }, { status: 400 });
    }

    const results: { url: string; chunks?: number; error?: string }[] = [];

    // Ingest URLs
    for (const url of urls) {
      try {
        const text = await fetchAsText(url);
        const chunks = chunkText(text, url, undefined, 1200);
        addSparseDocuments(chunks);
        results.push({ url, chunks: chunks.length });
      } catch (e: unknown) {
        const msg = e instanceof Error ? e.message : String(e);
        results.push({ url, error: msg });
      }
    }

    // Ingest directory
    if (dir) {
      try {
        const docs = await readFilesFromDir(dir);
        for (const d of docs) {
          const chunks = chunkText(d.text, d.url, d.title, 1200);
          addSparseDocuments(chunks);
          results.push({ url: d.url, chunks: chunks.length });
        }
      } catch (e: unknown) {
        const msg = e instanceof Error ? e.message : String(e);
        results.push({ url: dir, error: msg });
      }
    }

    // Ingest individual files
    for (const fp of files) {
      try {
        const docs = await readFilesFromDir(path.dirname(fp));
        const one = docs.find(d => d.url.endsWith(fp.replace(/\\/g, '/')));
        if (one) {
          const chunks = chunkText(one.text, one.url, one.title, 1200);
          addSparseDocuments(chunks);
          results.push({ url: one.url, chunks: chunks.length });
        } else {
          const raw = await fs.readFile(fp, 'utf-8');
          const ext = path.extname(fp).toLowerCase();
          let text = raw;
          if (ext === '.html' || ext === '.htm') text = stripHtml(raw);
          else if (ext === '.json') { try { text = JSON.stringify(JSON.parse(raw), null, 2); } catch {} }
          const fileUrl = 'file:///' + fp.replace(/\\/g, '/');
          const chunks = chunkText(text, fileUrl, path.basename(fp), 1200);
          addSparseDocuments(chunks);
          results.push({ url: fileUrl, chunks: chunks.length });
        }
      } catch (e: unknown) {
        const msg = e instanceof Error ? e.message : String(e);
        const fileUrl = 'file:///' + fp.replace(/\\/g, '/');
        results.push({ url: fileUrl, error: msg });
      }
    }

    return NextResponse.json({ ok: true, results });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}


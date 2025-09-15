module.exports = [
"[project]/shell-app/.next-internal/server/app/api/rag/ingest/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/shell-app/src/lib/rag/chunk.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "chunkText",
    ()=>chunkText,
    "normalizeWhitespace",
    ()=>normalizeWhitespace
]);
function chunkText(input, url, title, maxChars = 1000) {
    const cleaned = normalizeWhitespace(input);
    const blocks = cleaned.split(/\n{2,}/g).map((b)=>b.trim()).filter(Boolean);
    const chunks = [];
    let buf = [];
    let size = 0;
    const flush = ()=>{
        if (!buf.length) return;
        const text = buf.join("\n").trim();
        if (text) chunks.push({
            id: `${url}#${chunks.length + 1}`.slice(0, 200),
            url,
            title,
            text
        });
        buf = [];
        size = 0;
    };
    for (const block of blocks){
        if (size + block.length + 1 > maxChars && size > 0) {
            flush();
        }
        buf.push(block);
        size += block.length + 1;
    }
    flush();
    return chunks;
}
function normalizeWhitespace(s) {
    return s.replace(/\r/g, "\n").replace(/\t/g, " ").replace(/[\u00A0\u2000-\u200B]/g, " ").replace(/\n{3,}/g, "\n\n").replace(/[ \t]{2,}/g, " ").trim();
}
}),
"[project]/shell-app/src/lib/rag/store.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addSparseDocuments",
    ()=>addSparseDocuments,
    "listDocs",
    ()=>listDocs,
    "resetStore",
    ()=>resetStore,
    "searchSparse",
    ()=>searchSparse,
    "size",
    ()=>size
]);
// Global in-memory store (persists for server process lifetime)
const g = globalThis;
if (!g.__RAG_SPARSE_STORE) {
    g.__RAG_SPARSE_STORE = {
        docs: new Map(),
        inv: new Map(),
        df: new Map(),
        N: 0,
        avgdl: 0
    };
}
const store = g.__RAG_SPARSE_STORE;
function normalize(s) {
    return s.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
}
function tokenize(text) {
    return normalize(text).split(' ').filter(Boolean);
}
function addSparseDocuments(items) {
    for (const it of items){
        const tokens = tokenize(it.text);
        const tf = new Map();
        const seen = new Set();
        for (const t of tokens){
            tf.set(t, (tf.get(t) || 0) + 1);
            if (!seen.has(t)) {
                seen.add(t);
                store.df.set(t, (store.df.get(t) || 0) + 1);
            }
        }
        // write to inverted index
        tf.forEach((freq, term)=>{
            let postings = store.inv.get(term);
            if (!postings) {
                postings = new Map();
                store.inv.set(term, postings);
            }
            postings.set(it.id, freq);
        });
        // add doc
        store.docs.set(it.id, {
            id: it.id,
            url: it.url,
            title: it.title,
            text: it.text,
            length: tokens.length
        });
    }
    // update corpus stats
    store.N = store.docs.size;
    let totalLen = 0;
    store.docs.forEach((d)=>totalLen += d.length);
    store.avgdl = store.N ? totalLen / store.N : 0;
}
function resetStore() {
    store.docs.clear();
    store.inv.clear();
    store.df.clear();
    store.N = 0;
    store.avgdl = 0;
}
function size() {
    return {
        count: store.docs.size,
        avgdl: store.avgdl
    };
}
function listDocs(limit = 50) {
    const arr = [];
    store.docs.forEach((d)=>arr.push({
            id: d.id,
            url: d.url,
            title: d.title,
            length: d.length
        }));
    return arr.slice(0, Math.max(0, limit));
}
function searchSparse(query, k = 5, k1 = 1.5, b = 0.75) {
    const qTokens = tokenize(query);
    const qTerms = Array.from(new Set(qTokens));
    const scores = new Map();
    for (const term of qTerms){
        const df = store.df.get(term) || 0;
        if (df === 0 || store.N === 0) continue;
        const idf = Math.log(1 + (store.N - df + 0.5) / (df + 0.5));
        const postings = store.inv.get(term);
        postings?.forEach((tf, docId)=>{
            const d = store.docs.get(docId);
            const denom = tf + k1 * (1 - b + b * (d.length / (store.avgdl || 1)));
            const scoreAdd = idf * (tf * (k1 + 1) / (denom || 1));
            scores.set(docId, (scores.get(docId) || 0) + scoreAdd);
        });
    }
    const ranked = Array.from(scores.entries()).sort((a, b2)=>b2[1] - a[1]).slice(0, k).map(([docId, s])=>{
        const d = store.docs.get(docId);
        return {
            id: d.id,
            url: d.url,
            title: d.title,
            text: d.text,
            score: s
        };
    });
    return ranked;
}
}),
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[project]/shell-app/src/app/api/rag/ingest/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shell$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shell-app/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shell$2d$app$2f$src$2f$lib$2f$rag$2f$chunk$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shell-app/src/lib/rag/chunk.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shell$2d$app$2f$src$2f$lib$2f$rag$2f$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shell-app/src/lib/rag/store.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
;
;
;
;
;
const runtime = 'nodejs';
function stripHtml(html) {
    // quick-and-dirty HTML -> text
    return html.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, '\n').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\n{3,}/g, '\n\n').trim();
}
async function fetchAsText(url) {
    const res = await fetch(url, {
        headers: {
            'User-Agent': 'Ashley-AI-RAG/1.0'
        }
    });
    if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
    const ct = res.headers.get('content-type') || '';
    const data = await res.text();
    if (ct.includes('html')) return stripHtml(data);
    return data;
}
function detectEncoding(buf) {
    if (buf.length >= 2) {
        if (buf[0] === 0xFF && buf[1] === 0xFE) return 'utf16le';
        if (buf[0] === 0xFE && buf[1] === 0xFF) return 'utf16be';
    }
    return 'utf8';
}
function decodeUtf16be(buf) {
    const swapped = Buffer.allocUnsafe(buf.length);
    for(let i = 0; i + 1 < buf.length; i += 2){
        swapped[i] = buf[i + 1];
        swapped[i + 1] = buf[i];
    }
    return swapped.toString('utf16le');
}
async function readFilesFromDir(dir) {
    const entries = await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["default"].readdir(dir, {
        withFileTypes: true
    });
    const out = [];
    const allowed = new Set([
        '.txt',
        '.md',
        '.markdown',
        '.csv',
        '.json',
        '.html',
        '.htm',
        '.ts',
        '.tsx',
        '.js',
        '.jsx',
        '.css',
        '.scss'
    ]);
    for (const ent of entries){
        const p = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(dir, ent.name);
        if (ent.isDirectory()) {
            const nested = await readFilesFromDir(p);
            out.push(...nested);
            continue;
        }
        const ext = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].extname(ent.name).toLowerCase();
        if (!allowed.has(ext)) continue;
        try {
            const rawBuf = await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["default"].readFile(p);
            const enc = detectEncoding(rawBuf);
            let raw = enc === 'utf8' ? rawBuf.toString('utf8') : enc === 'utf16le' ? rawBuf.toString('utf16le') : decodeUtf16be(rawBuf);
            let text = raw;
            if (ext === '.html' || ext === '.htm') text = stripHtml(raw);
            else if (ext === '.json') {
                try {
                    const obj = JSON.parse(raw);
                    text = JSON.stringify(obj, null, 2);
                } catch  {}
            }
            const fileUrl = 'file:///' + p.replace(/\\/g, '/');
            out.push({
                url: fileUrl,
                title: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].basename(p),
                text
            });
        } catch  {
        // skip unreadable files
        }
    }
    return out;
}
async function POST(req) {
    try {
        const body = await req.json().catch(()=>({}));
        const urls = body?.urls || [];
        const dir = body?.dir;
        const files = Array.isArray(body?.files) ? body.files : [];
        if ((!Array.isArray(urls) || urls.length === 0) && !dir && files.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$shell$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Provide one of: { urls: string[] } or { dir: string } or { files: string[] }'
            }, {
                status: 400
            });
        }
        const results = [];
        // Ingest URLs
        for (const url of urls){
            try {
                const text = await fetchAsText(url);
                const chunks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shell$2d$app$2f$src$2f$lib$2f$rag$2f$chunk$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["chunkText"])(text, url, undefined, 1200);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$shell$2d$app$2f$src$2f$lib$2f$rag$2f$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addSparseDocuments"])(chunks);
                results.push({
                    url,
                    chunks: chunks.length
                });
            } catch (e) {
                const msg = e instanceof Error ? e.message : String(e);
                results.push({
                    url,
                    error: msg
                });
            }
        }
        // Ingest directory
        if (dir) {
            try {
                const docs = await readFilesFromDir(dir);
                for (const d of docs){
                    const chunks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shell$2d$app$2f$src$2f$lib$2f$rag$2f$chunk$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["chunkText"])(d.text, d.url, d.title, 1200);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shell$2d$app$2f$src$2f$lib$2f$rag$2f$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addSparseDocuments"])(chunks);
                    results.push({
                        url: d.url,
                        chunks: chunks.length
                    });
                }
            } catch (e) {
                const msg = e instanceof Error ? e.message : String(e);
                results.push({
                    url: dir,
                    error: msg
                });
            }
        }
        // Ingest individual files
        for (const fp of files){
            try {
                const docs = await readFilesFromDir(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].dirname(fp));
                const one = docs.find((d)=>d.url.endsWith(fp.replace(/\\/g, '/')));
                if (one) {
                    const chunks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shell$2d$app$2f$src$2f$lib$2f$rag$2f$chunk$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["chunkText"])(one.text, one.url, one.title, 1200);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shell$2d$app$2f$src$2f$lib$2f$rag$2f$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addSparseDocuments"])(chunks);
                    results.push({
                        url: one.url,
                        chunks: chunks.length
                    });
                } else {
                    const raw = await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["default"].readFile(fp, 'utf-8');
                    const ext = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].extname(fp).toLowerCase();
                    let text = raw;
                    if (ext === '.html' || ext === '.htm') text = stripHtml(raw);
                    else if (ext === '.json') {
                        try {
                            text = JSON.stringify(JSON.parse(raw), null, 2);
                        } catch  {}
                    }
                    const fileUrl = 'file:///' + fp.replace(/\\/g, '/');
                    const chunks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shell$2d$app$2f$src$2f$lib$2f$rag$2f$chunk$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["chunkText"])(text, fileUrl, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].basename(fp), 1200);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shell$2d$app$2f$src$2f$lib$2f$rag$2f$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addSparseDocuments"])(chunks);
                    results.push({
                        url: fileUrl,
                        chunks: chunks.length
                    });
                }
            } catch (e) {
                const msg = e instanceof Error ? e.message : String(e);
                const fileUrl = 'file:///' + fp.replace(/\\/g, '/');
                results.push({
                    url: fileUrl,
                    error: msg
                });
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$shell$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            results
        });
    } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        return __TURBOPACK__imported__module__$5b$project$5d2f$shell$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: msg
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e8c080b9._.js.map
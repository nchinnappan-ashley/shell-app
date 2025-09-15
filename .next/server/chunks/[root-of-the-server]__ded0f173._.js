module.exports = [
"[project]/.next-internal/server/app/api/kb/query/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/src/app/api/kb/query/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
;
let loaded = false;
let mode = 'chunk';
// chunk mode
let chunks = [];
let inverted = {};
let tokenCounts = new Map();
// doc mode
let files = [];
let docInverted = {};
function dataPath(...p) {
    const base = process.cwd();
    return __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(base, 'shell-app', 'src', 'data', ...p);
}
function loadIndex() {
    if (loaded) return;
    const legacyIndex = dataPath('kb-index.json');
    const legacyChunks = dataPath('kb-chunks.json');
    const docIndex = dataPath('kb-doc-index.json');
    const filesPath = dataPath('kb-files.json');
    if (__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(docIndex) && __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(filesPath)) {
        // Prefer doc-level index when available
        docInverted = JSON.parse(__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(docIndex, 'utf8'));
        files = JSON.parse(__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(filesPath, 'utf8'));
        mode = 'doc';
        loaded = true;
        return;
    }
    if (__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(legacyIndex) && __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(legacyChunks)) {
        const index = JSON.parse(__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(legacyIndex, 'utf8'));
        const ch = JSON.parse(__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(legacyChunks, 'utf8'));
        chunks = ch;
        inverted = index.inverted || {};
        tokenCounts = new Map(index.tokenCounts.map(([id, pairs])=>[
                id,
                new Map(pairs)
            ]));
        mode = 'chunk';
        loaded = true;
        return;
    }
    throw new Error('KB index not found. Run: node shell-app/scripts/ingest-kb.js "<source-folder>" or ingest-kb-stream.js');
}
function tokenize(q) {
    return q.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean);
}
function makeSnippet(text, centerIdx, matchLen = 0, radius = 160) {
    const start = Math.max(0, centerIdx - radius);
    const end = Math.min(text.length, centerIdx + matchLen + radius);
    return text.slice(start, end).replace(/\s+/g, ' ').trim();
}
// ---- chunk-mode search ----
function keywordSearchChunk(query, k = 8) {
    const tokens = tokenize(query);
    const candSet = new Set();
    for (const t of tokens)(inverted[t] || []).forEach((id)=>candSet.add(id));
    const candidates = [
        ...candSet
    ];
    const scored = candidates.map((id)=>{
        const counts = tokenCounts.get(id);
        let score = 0;
        if (counts) for (const t of tokens)score += counts.get(t) || 0;
        return {
            id,
            score
        };
    });
    scored.sort((a, b)=>b.score - a.score);
    return scored.slice(0, k).map((s)=>{
        const ch = chunks.find((c)=>c.id === s.id);
        const lower = ch.text.toLowerCase();
        const first = tokens.find((t)=>lower.includes(t)) || '';
        const idx = first ? lower.indexOf(first) : 0;
        return {
            id: ch.id,
            file: ch.file,
            idx: ch.idx,
            score: s.score,
            snippet: makeSnippet(ch.text, idx, first.length)
        };
    });
}
function regexSearchChunk(pattern, k = 8) {
    const q = pattern.startsWith('/') && pattern.endsWith('/') ? pattern.slice(1, -1) : pattern;
    const re = new RegExp(q, 'i');
    const hits = [];
    for (const ch of chunks){
        const m = ch.text.match(re);
        if (m) hits.push({
            id: ch.id,
            file: ch.file,
            idx: ch.idx,
            score: m[0]?.length || 1,
            snippet: makeSnippet(ch.text, m.index || 0, m[0]?.length || 0)
        });
    }
    hits.sort((a, b)=>b.score - a.score);
    return hits.slice(0, k);
}
// ---- doc-mode streaming search ----
function escapeRegExp(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
async function streamSearchFiles(fileIds, re, k = 8) {
    const results = [];
    for (const fid of fileIds){
        const f = files.find((x)=>x.id === fid);
        if (!f) continue;
        const abs = dataPath('..', '..', f.file); // file path stored is relative to source; we saved relative
        const absPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].isAbsolute(abs) ? abs : __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(process.cwd(), 'shell-app', 'src', 'data', abs);
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(f.file) && !__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(abs) && !__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(absPath)) continue;
        const readPath = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(f.file) ? f.file : __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(abs) ? abs : absPath;
        const stream = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].createReadStream(readPath, {
            encoding: 'utf8',
            highWaterMark: 64 * 1024
        });
        let buffer = '';
        let chunkIdx = 0;
        const radius = 160;
        const maxPerFile = 2;
        let fileHits = 0;
        for await (const chunk of stream){
            buffer += chunk;
            // Keep buffer from growing unbounded
            if (buffer.length > 4 * radius) buffer = buffer.slice(-4 * radius);
            const m = re.exec(buffer);
            if (m) {
                const start = Math.max(0, m.index || 0);
                const snippet = buffer.slice(Math.max(0, start - radius), Math.min(buffer.length, start + m[0].length + radius)).replace(/\s+/g, ' ').trim();
                results.push({
                    file: f.file,
                    idx: chunkIdx,
                    score: m[0].length,
                    snippet
                });
                fileHits++;
                if (results.length >= k || fileHits >= maxPerFile) break;
            }
            chunkIdx++;
        }
        if (results.length >= k) break;
    }
    return results;
}
function filesForTokens(tokens) {
    const set = new Set();
    for (const t of tokens)(docInverted[t] || []).forEach((id)=>set.add(id));
    return [
        ...set
    ];
}
async function keywordSearchDoc(query, k = 8) {
    const tokens = tokenize(query).filter((t)=>t.length >= 3);
    const candidates = tokens.length ? filesForTokens(tokens) : files.map((f)=>f.id);
    if (candidates.length === 0) return [];
    const re = new RegExp(tokens.map(escapeRegExp).join('|'), 'i');
    const hits = await streamSearchFiles(candidates, re, k);
    // score by number of matched tokens in snippet
    return hits.map((h)=>({
            id: -1,
            file: h.file,
            idx: h.idx,
            score: h.score,
            snippet: h.snippet
        }));
}
async function regexSearchDoc(pattern, k = 8) {
    const q = pattern.startsWith('/') && pattern.endsWith('/') ? pattern.slice(1, -1) : pattern;
    const re = new RegExp(q, 'i');
    const allIds = files.map((f)=>f.id);
    const hits = await streamSearchFiles(allIds, re, k);
    return hits.map((h)=>({
            id: -1,
            file: h.file,
            idx: h.idx,
            score: h.score,
            snippet: h.snippet
        }));
}
async function POST(req) {
    try {
        loadIndex();
        const { query, k = 8, regex = false } = await req.json();
        if (!query || typeof query !== 'string') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'query (string) is required'
            }, {
                status: 400
            });
        }
        if (mode === 'chunk') {
            const results = regex || query.startsWith('/') && query.endsWith('/') ? regexSearchChunk(query, k) : keywordSearchChunk(query, k);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                mode,
                results
            });
        } else {
            const results = regex || query.startsWith('/') && query.endsWith('/') ? await regexSearchDoc(query, k) : await keywordSearchDoc(query, k);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                mode,
                results
            });
        }
    } catch (e) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: e.message || String(e)
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ded0f173._.js.map
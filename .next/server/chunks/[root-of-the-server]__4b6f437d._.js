module.exports = [
"[project]/.next-internal/server/app/api/rag/status/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/src/lib/rag/store.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/app/api/rag/status/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rag$2f$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/rag/store.ts [app-route] (ecmascript)");
;
;
const runtime = 'nodejs';
async function GET(_req) {
    try {
        const sz = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rag$2f$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["size"])();
        const sample = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rag$2f$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["listDocs"])(50);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            size: sz,
            sample
        });
    } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: msg
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4b6f437d._.js.map
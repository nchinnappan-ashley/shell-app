module.exports = [
"[project]/shell-app/.next-internal/server/app/api/news/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/shell-app/src/app/api/news/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shell$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shell-app/node_modules/next/server.js [app-route] (ecmascript)");
;
const runtime = 'nodejs';
function stripHtml(html) {
    return html.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s{2,}/g, ' ').trim();
}
// Very lightweight HTML extraction tailored for WordPress-like news listing pages
function parseNews(html, baseUrl) {
    const out = [];
    // Split by article-like containers
    const parts = html.split(/<article\b/gi).slice(1);
    for (const p of parts){
        const block = '<article ' + p.split(/<\/article>/i)[0];
        const hrefMatch = block.match(/<a[^>]+href=["']([^"']+)["'][^>]*>(?:\s*<img|\s*<h2|\s*<span|\s*<div)/i);
        const href = hrefMatch ? new URL(hrefMatch[1], baseUrl).toString() : undefined;
        const titleRaw = (block.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i)?.[1] || block.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i)?.[1] || '').trim();
        const title = stripHtml(titleRaw).slice(0, 180);
        const imgMatch = block.match(/<img[^>]+(?:data-src|src)=["']([^"']+)["'][^>]*>/i);
        const image = imgMatch ? new URL(imgMatch[1], baseUrl).toString() : undefined;
        const dateAttr = block.match(/<time[^>]+datetime=["']([^"']+)["']/i)?.[1] || block.match(/class=["'][^"']*(?:date|time|entry-date|published)[^"']*["'][^>]*>([\s\S]*?)<\/time>/i)?.[1] || '';
        const dateText = dateAttr ? stripHtml(dateAttr) : '';
        const paraRaw = (block.match(/<p[^>]*>([\s\S]*?)<\/p>/i)?.[1] || '').trim();
        const summary = stripHtml(paraRaw).slice(0, 220);
        const catRaw = (block.match(/<a[^>]+rel=["']category["'][^>]*>([\s\S]*?)<\/a>/i)?.[1] || '').trim();
        const tag = stripHtml(catRaw).slice(0, 40) || undefined;
        if (title || summary) {
            const id = href || image || title || Math.random().toString(36).slice(2);
            out.push({
                id,
                title: title || summary,
                summary,
                date: dateText || '',
                href,
                image,
                tag
            });
        }
    }
    // Fallback: if no <article>, try list items with class post
    if (!out.length) {
        const liParts = html.split(/<li[^>]+class=["'][^"']*(?:post|news)[^"']*["'][^>]*>/gi).slice(1);
        for (const raw of liParts){
            const block = '<li ' + raw.split(/<\/li>/i)[0];
            const href = block.match(/<a[^>]+href=["']([^"']+)["']/i)?.[1];
            const title = stripHtml(block.match(/<a[^>]*>([\s\S]*?)<\/a>/i)?.[1] || '').slice(0, 180);
            const image = block.match(/<img[^>]+(?:data-src|src)=["']([^"']+)["']/i)?.[1];
            const summary = stripHtml(block.match(/<p[^>]*>([\s\S]*?)<\/p>/i)?.[1] || '').slice(0, 220);
            if (title || summary) out.push({
                id: href || image || title,
                title,
                summary,
                date: '',
                href,
                image
            });
        }
    }
    // Limit
    return out.slice(0, 16);
}
async function GET(req) {
    try {
        const url = req.nextUrl.searchParams.get('url') || 'https://ashley.biz/news/';
        const res = await fetch(url, {
            headers: {
                'User-Agent': 'Ashley-AI-News/1.0'
            },
            cache: 'no-store'
        });
        if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
        const html = await res.text();
        const items = parseNews(html, url);
        return __TURBOPACK__imported__module__$5b$project$5d2f$shell$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            items
        });
    } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        return __TURBOPACK__imported__module__$5b$project$5d2f$shell$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            error: msg,
            items: []
        }, {
            status: 200
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8c7dad8c._.js.map
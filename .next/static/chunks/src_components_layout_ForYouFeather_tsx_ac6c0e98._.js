(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/layout/ForYouFeather.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ForYouFeather
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
// Guard against hydration issues by only rendering after mount
function useMounted() {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMounted.useEffect": ()=>setMounted(true)
    }["useMounted.useEffect"], []);
    return mounted;
}
_s(useMounted, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
const CATALOG = [
    {
        id: "ashleydirect",
        title: "Ashley Direct",
        image: ""
    },
    {
        id: "ashleynet",
        title: "Ashley Net",
        image: ""
    },
    {
        id: "supplier",
        title: "Supplier",
        image: ""
    },
    {
        id: "hr",
        title: "HR",
        image: ""
    },
    {
        id: "payroll",
        title: "Payroll",
        image: ""
    },
    {
        id: "finance",
        title: "Finance",
        image: ""
    },
    {
        id: "transportation",
        title: "Transportation",
        image: ""
    },
    {
        id: "as400",
        title: "AS400",
        image: ""
    },
    {
        id: "highjump",
        title: "High Jump",
        image: ""
    },
    {
        id: "moreapps",
        title: "More Apps",
        image: ""
    }
];
function clamp01(x) {
    return Math.max(0, Math.min(1, x));
}
function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}
function getCols(w) {
    if (w >= 1280) return 5;
    if (w >= 1024) return 4;
    if (w >= 768) return 3;
    return 2;
}
function ForYouFeather() {
    _s1();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0); // 0 = collapsed, 1 = fully fanned
    // Use a fixed initial width to keep SSR/CSR markup identical; update after mount
    const [viewportW, setViewportW] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1200);
    const [containerW, setContainerW] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1200);
    // Compute progress based on scroll within a pinned (sticky) stage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ForYouFeather.useEffect": ()=>{
            let raf = 0;
            const getScrollParent = {
                "ForYouFeather.useEffect.getScrollParent": (node)=>{
                    let p = (node === null || node === void 0 ? void 0 : node.parentElement) || null;
                    while(p){
                        const style = getComputedStyle(p);
                        if (/(auto|scroll|overlay)/.test(style.overflowY)) return p;
                        p = p.parentElement;
                    }
                    return window;
                }
            }["ForYouFeather.useEffect.getScrollParent"];
            const onScroll = {
                "ForYouFeather.useEffect.onScroll": ()=>{
                    if (raf) cancelAnimationFrame(raf);
                    raf = requestAnimationFrame({
                        "ForYouFeather.useEffect.onScroll": ()=>{
                            const el = containerRef.current;
                            if (!el) return;
                            const rect = el.getBoundingClientRect();
                            const vh = window.innerHeight || 800;
                            const total = Math.max(1, rect.height - vh); // amount of scrollable space while sticky
                            const scrolled = Math.min(total, Math.max(0, -rect.top));
                            const raw = scrolled / total;
                            setProgress(clamp01(raw));
                        }
                    }["ForYouFeather.useEffect.onScroll"]);
                }
            }["ForYouFeather.useEffect.onScroll"];
            const target = getScrollParent(containerRef.current);
            onScroll();
            target.addEventListener("scroll", onScroll, {
                passive: true
            });
            window.addEventListener("resize", onScroll);
            return ({
                "ForYouFeather.useEffect": ()=>{
                    if (raf) cancelAnimationFrame(raf);
                    target.removeEventListener("scroll", onScroll);
                    window.removeEventListener("resize", onScroll);
                }
            })["ForYouFeather.useEffect"];
        }
    }["ForYouFeather.useEffect"], []);
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ForYouFeather.useMemo[items]": ()=>CATALOG.slice(0, 10)
    }["ForYouFeather.useMemo[items]"], []);
    const mid = Math.floor(items.length / 2);
    const openT = clamp01(progress * 2); // 0..1 — fan open
    const gridT = clamp01((progress - 0.5) * 2); // 0..1 — morph to grid
    const openEase = easeOutCubic(openT);
    // Start with full grid layout on initial load, then animate to fan on scroll
    const initialGridT = Math.max(0, 1 - progress * 4); // 1 at start → 0 when scroll begins
    const finalGridT = gridT; // normal grid phase at end
    const currentGridT = Math.max(initialGridT, finalGridT);
    // Fan is only active in the middle phase (when not in grid mode)
    const fanT = currentGridT > 0 ? 0 : openEase;
    // Titles fade in during the first phase; ensure visible in grid phase
    const captionT = clamp01((openT - 0.2) / 0.8);
    const captionOpacity = Math.max(captionT, gridT);
    // Grid layout params (virtual grid inside sticky)
    const cols = getCols(viewportW);
    const gap = 16; // px
    const cardW = 220;
    const cardH = 320; // include caption approx
    // Compute full-width spacing so initial layout stretches edge-to-edge inside container
    const cw = containerW || Math.min(viewportW, 1280);
    const sidePad = 32; // increased edge padding
    const effW = Math.max(0, cw - sidePad * 2);
    const gridStartX = -effW / 2 + cardW / 2;
    const gridSpacingX = cols > 1 ? (effW - cardW) / (cols - 1) : 0;
    const baseY = 24; // more space under the “For You” pill
    // Track viewport width for responsive columns
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ForYouFeather.useEffect": ()=>{
            const onR = {
                "ForYouFeather.useEffect.onR": ()=>setViewportW(window.innerWidth)
            }["ForYouFeather.useEffect.onR"];
            onR();
            window.addEventListener('resize', onR);
            return ({
                "ForYouFeather.useEffect": ()=>window.removeEventListener('resize', onR)
            })["ForYouFeather.useEffect"];
        }
    }["ForYouFeather.useEffect"], []);
    // Measure container width to stretch the initial layout to full width
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ForYouFeather.useEffect": ()=>{
            const measure = {
                "ForYouFeather.useEffect.measure": ()=>{
                    const el = containerRef.current;
                    if (el) setContainerW(el.clientWidth);
                }
            }["ForYouFeather.useEffect.measure"];
            measure();
            window.addEventListener('resize', measure);
            return ({
                "ForYouFeather.useEffect": ()=>window.removeEventListener('resize', measure)
            })["ForYouFeather.useEffect"];
        }
    }["ForYouFeather.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "aria-label": "For You feather",
        className: "relative max-w-7xl mx-auto pt-4 pb-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center mb-[10px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-600 text-xs font-medium",
                    children: "For You"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/ForYouFeather.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/ForYouFeather.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "relative h-[200vh] w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sticky top-0 h-screen",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex justify-center items-start pt-1",
                        children: items.map((card, j)=>{
                            const k = j - mid; // negative = left, positive = right
                            const side = Math.sign(k) || 0;
                            const abs = Math.abs(k);
                            // Base geometry
                            const baseSpread = 56 + abs * 24; // px
                            // Phase 1: fan open (0 -> 0.5); Phase 2: merge to single (0.5 -> 1)
                            const angleFan = side * (8 + abs * 2) * fanT; // deg
                            const txFan = side * baseSpread * fanT; // px
                            const tyFan = Math.min(12 + abs * 6, 60) * fanT; // px downward a bit
                            // Compute target grid position (col/row)
                            const idx = j;
                            const col = idx % cols;
                            const row = Math.floor(idx / cols);
                            const gx = gridStartX + col * gridSpacingX;
                            const gy = baseY + row * (cardH + gap);
                            // Interpolate: initial grid -> fan -> final grid
                            const centerCol = (cols - 1) / 2;
                            const angleGrid = (col - centerCol) * 2; // weaker initial tilt
                            const angle = angleFan * (1 - currentGridT) + angleGrid * currentGridT;
                            const tx = txFan * (1 - currentGridT) + gx * currentGridT;
                            const ty = tyFan * (1 - currentGridT) + gy * currentGridT;
                            const z = currentGridT > 0 ? 1000 - (row * cols + col) : 100 - abs;
                            const s = 1; // keep uniform scale in grid
                            const initialOffset = abs * 2; // small offset so collapsed state hints at layers
                            const transform = "translate3d(".concat(tx, "px, ").concat(ty + initialOffset, "px, 0) rotate(").concat(angle, "deg) scale(").concat(s, ")");
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                className: "absolute will-change-transform select-none cursor-pointer",
                                style: {
                                    transform,
                                    transition: "transform 420ms cubic-bezier(.22,1,.36,1), opacity 320ms ease",
                                    zIndex: z,
                                    opacity: 1,
                                    pointerEvents: 'auto'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Link, {
                                    href: "/apps/".concat(card.id),
                                    className: "overflow-hidden rounded-xl bg-white shadow-[0_1px_2px_rgba(16,24,40,.06)] ring-1 ring-gray-200/70 block focus:outline-none focus:ring-2 focus:ring-blue-400/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-[220px] h-[220px] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 hover:bg-gray-100",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-16 h-16 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center text-xl font-semibold",
                                                children: card.title.split(' ').map((w)=>w[0]).join('').slice(0, 3).toUpperCase()
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/ForYouFeather.tsx",
                                                lineNumber: 191,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/ForYouFeather.tsx",
                                            lineNumber: 190,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                            className: "px-3 py-2 text-[12px] font-medium text-gray-800 line-clamp-2",
                                            style: {
                                                opacity: Math.max(captionOpacity, currentGridT)
                                            },
                                            children: card.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/ForYouFeather.tsx",
                                            lineNumber: 195,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/ForYouFeather.tsx",
                                    lineNumber: 188,
                                    columnNumber: 17
                                }, this)
                            }, card.id, false, {
                                fileName: "[project]/src/components/layout/ForYouFeather.tsx",
                                lineNumber: 177,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/ForYouFeather.tsx",
                        lineNumber: 145,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/ForYouFeather.tsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/ForYouFeather.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/ForYouFeather.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
_s1(ForYouFeather, "cPcrswZTV4JO2Oa9wfrlMVVgF+A=");
_c = ForYouFeather;
var _c;
__turbopack_context__.k.register(_c, "ForYouFeather");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/ForYouFeather.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/layout/ForYouFeather.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_layout_ForYouFeather_tsx_ac6c0e98._.js.map
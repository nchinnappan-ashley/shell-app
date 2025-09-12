(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/layout/ForYouMasonry.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ForYouMasonry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
// A small catalog of demo items (remote images; using <img> not next/image)
const CATALOG = [
    {
        id: "1",
        title: "Lisbon Unveiled: A 5-Day Cultural and Culinary Journey",
        image: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=1080&auto=format&fit=crop"
    },
    {
        id: "2",
        title: "Unforgettable 3-day Itinerary in Lagos, Portugal",
        image: "https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&w=1080&auto=format&fit=crop"
    },
    {
        id: "3",
        title: "A Weekend Getaway in Historic Kingston, NY",
        image: "https://images.unsplash.com/photo-1529927066849-6b5b27a7f06b?q=80&w=1080&auto=format&fit=crop"
    },
    {
        id: "4",
        title: "A Serene 2-Day Escape to Isla Holbox",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1080&auto=format&fit=crop"
    },
    {
        id: "5",
        title: "Exploring Ho Chi Minh City: 3-Day Guide",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1080&auto=format&fit=crop"
    },
    {
        id: "6",
        title: "5-Day Gjirokaster Adventure",
        image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1080&auto=format&fit=crop"
    },
    {
        id: "7",
        title: "Business Analytics Dashboard",
        image: "https://images.unsplash.com/photo-1551281044-8c5d2a09cf3f?q=80&w=1080&auto=format&fit=crop"
    },
    {
        id: "8",
        title: "Financial Reports & Analysis",
        image: "https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1080&auto=format&fit=crop"
    },
    {
        id: "9",
        title: "Street Fashion Editorial",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1080&auto=format&fit=crop"
    },
    {
        id: "10",
        title: "Old Town Architecture Walk",
        image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1080&auto=format&fit=crop"
    },
    {
        id: "11",
        title: "Temple Lights at Dusk",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1080&auto=format&fit=crop"
    },
    {
        id: "12",
        title: "Night Cityscape",
        image: "https://images.unsplash.com/photo-1518306727298-4c17e1bf5e10?q=80&w=1080&auto=format&fit=crop"
    },
    {
        id: "13",
        title: "Minimal Portrait",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1080&auto=format&fit=crop"
    },
    {
        id: "14",
        title: "Courtyard Stroll",
        image: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1080&auto=format&fit=crop"
    },
    {
        id: "15",
        title: "Colorful Alley",
        image: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da?q=80&w=1080&auto=format&fit=crop"
    }
];
// Create a longer list by repeating catalog with unique IDs
const makePage = (page)=>CATALOG.map((c, idx)=>({
            ...c,
            id: "".concat(page, "-").concat(c.id, "-").concat(idx)
        }));
function ForYouMasonry() {
    _s();
    const [pagesLoaded, setPagesLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ForYouMasonry.useMemo[items]": ()=>Array.from({
                length: pagesLoaded
            }, {
                "ForYouMasonry.useMemo[items]": (_, i)=>makePage(i + 1)
            }["ForYouMasonry.useMemo[items]"]).flat()
    }["ForYouMasonry.useMemo[items]"], [
        pagesLoaded
    ]);
    const sentinelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const masonryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Infinite scroll sentinel
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ForYouMasonry.useEffect": ()=>{
            const el = sentinelRef.current;
            if (!el) return;
            const io = new IntersectionObserver({
                "ForYouMasonry.useEffect": (entries)=>{
                    const [entry] = entries;
                    if (entry.isIntersecting) {
                        setPagesLoaded({
                            "ForYouMasonry.useEffect": (p)=>Math.min(p + 1, 6)
                        }["ForYouMasonry.useEffect"]);
                    }
                }
            }["ForYouMasonry.useEffect"], {
                rootMargin: "400px"
            });
            io.observe(el);
            return ({
                "ForYouMasonry.useEffect": ()=>io.disconnect()
            })["ForYouMasonry.useEffect"];
        }
    }["ForYouMasonry.useEffect"], []);
    // Staggered reveal on scroll for cards
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ForYouMasonry.useEffect": ()=>{
            const root = masonryRef.current;
            if (!root) return;
            const cards = Array.from(root.querySelectorAll('[data-reveal]'));
            const io = new IntersectionObserver({
                "ForYouMasonry.useEffect": (entries)=>{
                    entries.forEach({
                        "ForYouMasonry.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                const el = entry.target;
                                el.classList.add('opacity-100', 'translate-y-0');
                                io.unobserve(el);
                            }
                        }
                    }["ForYouMasonry.useEffect"]);
                }
            }["ForYouMasonry.useEffect"], {
                threshold: 0.12,
                rootMargin: '0px 0px -10% 0px'
            });
            // Add small stagger via inline delay based on DOM order
            cards.forEach({
                "ForYouMasonry.useEffect": (el, idx)=>{
                    el.style.transitionDelay = "".concat(idx % 10 * 35, "ms");
                    io.observe(el);
                }
            }["ForYouMasonry.useEffect"]);
            return ({
                "ForYouMasonry.useEffect": ()=>io.disconnect()
            })["ForYouMasonry.useEffect"];
        }
    }["ForYouMasonry.useEffect"], [
        items
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: masonryRef,
                className: "columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6 gap-5 [column-fill:_balance]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "contents",
                    children: items.map((card, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            "data-reveal": true,
                            className: "group mb-5 break-inside-avoid rounded-xl overflow-hidden bg-white ring-1 ring-gray-200/60 hover:ring-gray-300 shadow-[0_1px_2px_rgba(16,24,40,.04)] hover:shadow-md transition-all duration-500 ease-out opacity-0 translate-y-2 will-change-transform hover:-translate-y-0.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: card.image,
                                    alt: card.title,
                                    loading: "lazy",
                                    className: "w-full h-auto object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/ForYouMasonry.tsx",
                                    lineNumber: 95,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-medium text-gray-800",
                                        style: {
                                            display: '-webkit-box',
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden'
                                        },
                                        children: card.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/ForYouMasonry.tsx",
                                        lineNumber: 97,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/ForYouMasonry.tsx",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, card.id, true, {
                            fileName: "[project]/src/components/layout/ForYouMasonry.tsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/ForYouMasonry.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/ForYouMasonry.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: sentinelRef,
                className: "h-10"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/ForYouMasonry.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/ForYouMasonry.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_s(ForYouMasonry, "nMD4nNKoYmRSaRpVSdvvuKkp4TA=");
_c = ForYouMasonry;
var _c;
__turbopack_context__.k.register(_c, "ForYouMasonry");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/ForYouFeather.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ForYouFeather
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ForYouMasonry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/ForYouMasonry.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
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
        id: "1",
        title: "Lisbon Unveiled",
        image: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=1080&auto=format&fit=crop"
    },
    {
        id: "2",
        title: "Lagos, Portugal",
        image: "https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&w=1080&auto=format&fit=crop"
    },
    {
        id: "3",
        title: "Kingston, NY",
        image: "https://images.unsplash.com/photo-1529927066849-6b5b27a7f06b?q=80&w=1080&auto=format&fit=crop"
    },
    {
        id: "4",
        title: "Isla Holbox",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1080&auto=format&fit=crop"
    },
    {
        id: "5",
        title: "Ho Chi Minh City",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1080&auto=format&fit=crop"
    },
    {
        id: "6",
        title: "Gjirokaster",
        image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1080&auto=format&fit=crop"
    },
    {
        id: "7",
        title: "Analytics",
        image: "https://images.unsplash.com/photo-1551281044-8c5d2a09cf3f?q=80&w=1080&auto=format&fit=crop"
    },
    {
        id: "8",
        title: "Reports",
        image: "https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1080&auto=format&fit=crop"
    },
    {
        id: "9",
        title: "Portrait",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1080&auto=format&fit=crop"
    },
    {
        id: "10",
        title: "City Night",
        image: "https://images.unsplash.com/photo-1518306727298-4c17e1bf5e10?q=80&w=1080&auto=format&fit=crop"
    },
    {
        id: "11",
        title: "Courtyard",
        image: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1080&auto=format&fit=crop"
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
                    lineNumber: 140,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/ForYouFeather.tsx",
                lineNumber: 139,
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
                                className: "absolute will-change-transform select-none",
                                style: {
                                    transform,
                                    transition: "transform 420ms cubic-bezier(.22,1,.36,1), opacity 320ms ease",
                                    zIndex: z,
                                    opacity: 1,
                                    pointerEvents: 'none'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-hidden rounded-xl bg-white shadow-[0_1px_2px_rgba(16,24,40,.06)] ring-1 ring-gray-200/70",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: card.image,
                                            alt: card.title,
                                            loading: "lazy",
                                            className: "block w-[220px] h-[280px] object-cover",
                                            draggable: false
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
                                            lineNumber: 197,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/ForYouFeather.tsx",
                                    lineNumber: 189,
                                    columnNumber: 17
                                }, this)
                            }, card.id, false, {
                                fileName: "[project]/src/components/layout/ForYouFeather.tsx",
                                lineNumber: 178,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/ForYouFeather.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/ForYouFeather.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/ForYouFeather.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 max-w-7xl mx-auto px-2 transition-opacity duration-500 ease-out",
                style: {
                    opacity: finalGridT
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ForYouMasonry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/components/layout/ForYouFeather.tsx",
                    lineNumber: 210,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/ForYouFeather.tsx",
                lineNumber: 209,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/ForYouFeather.tsx",
        lineNumber: 137,
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

//# sourceMappingURL=src_components_layout_2859c0ea._.js.map
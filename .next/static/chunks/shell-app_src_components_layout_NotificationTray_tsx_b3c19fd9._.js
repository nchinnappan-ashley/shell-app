(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/shell-app/src/components/layout/NotificationTray.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NotificationTray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shell$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shell-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shell$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shell-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const seed = [
    {
        id: "n1",
        title: "Relax and chill, we've got you covered :)",
        body: "",
        time: "just now",
        tone: "info"
    },
    {
        id: "n2",
        title: "Weekly status is ready",
        body: "Click to view in Ashley Net",
        time: "3m",
        tone: "success"
    },
    {
        id: "n3",
        title: "Payroll cutoff at 5pm",
        body: "Don't forget to approve timesheets",
        time: "18m",
        tone: "warning"
    },
    {
        id: "n4",
        title: "Transport: Route change",
        body: "Dock 4 closed.",
        time: "1h",
        tone: "error"
    },
    {
        id: "n5",
        title: "AS400 planned maintenance",
        body: "Tonight 11pm-1am",
        time: "2h",
        tone: "info"
    }
];
function toneClasses(tone) {
    switch(tone){
        case "success":
            return "from-emerald-300 to-emerald-700";
        case "warning":
            return "from-amber-300 to-orange-700";
        case "error":
            return "from-rose-400 to-rose-800";
        default:
            return "from-sky-300 to-indigo-800";
    }
}
const gradients = [
    "from-yellow-300 via-lime-500 to-teal-700",
    "from-blue-400 to-indigo-800",
    "from-rose-400 to-red-700",
    "from-slate-500 to-slate-800",
    "from-amber-400 to-orange-700"
];
function NotificationTray(param) {
    let { embedded = false, showClose = false, controls = false } = param;
    var _deck_;
    _s();
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shell$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(seed);
    const [draggingId, setDraggingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shell$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const posRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shell$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const remove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shell$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NotificationTray.useCallback[remove]": (id)=>{
            setItems({
                "NotificationTray.useCallback[remove]": (prev)=>prev.filter({
                        "NotificationTray.useCallback[remove]": (n)=>n.id !== id
                    }["NotificationTray.useCallback[remove]"])
            }["NotificationTray.useCallback[remove]"]);
            delete posRef.current[id];
        }
    }["NotificationTray.useCallback[remove]"], []);
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shell$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NotificationTray.useCallback[start]": (id, clientX)=>{
            setDraggingId(id);
            posRef.current[id] = {
                x: 0
            };
            posRef.current["".concat(id, "-startX")] = clientX;
        }
    }["NotificationTray.useCallback[start]"], []);
    const move = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shell$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NotificationTray.useCallback[move]": (id, clientX)=>{
            const startX = posRef.current["".concat(id, "-startX")];
            if (startX == null) return;
            const dx = clientX - startX;
            posRef.current[id] = {
                x: dx
            };
        }
    }["NotificationTray.useCallback[move]"], []);
    const end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shell$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NotificationTray.useCallback[end]": (id)=>{
            var _posRef_current_id;
            var _posRef_current_id_x;
            const x = (_posRef_current_id_x = (_posRef_current_id = posRef.current[id]) === null || _posRef_current_id === void 0 ? void 0 : _posRef_current_id.x) !== null && _posRef_current_id_x !== void 0 ? _posRef_current_id_x : 0;
            setDraggingId(null);
            if (Math.abs(x) > 120) {
                // swipe threshold met -> dismiss
                remove(id);
            } else {
                // snap back
                posRef.current[id] = {
                    x: 0
                };
            }
        }
    }["NotificationTray.useCallback[end]"], [
        remove
    ]);
    const onPointerDown = (id)=>(e)=>{
            const target = e.target;
            if (target && target.closest('[data-nodrag="true"]')) {
                return; // ignore drags starting from controls/close buttons
            }
            e.currentTarget.setPointerCapture(e.pointerId);
            start(id, e.clientX);
        };
    const onPointerMove = (id)=>(e)=>move(id, e.clientX);
    const onPointerUp = (id)=>()=>end(id);
    // derive transforms for rendering
    const transforms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shell$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NotificationTray.useMemo[transforms]": ()=>{
            const map = {};
            for (const it of items){
                var _posRef_current_it_id;
                var _posRef_current_it_id_x;
                const x = (_posRef_current_it_id_x = (_posRef_current_it_id = posRef.current[it.id]) === null || _posRef_current_it_id === void 0 ? void 0 : _posRef_current_it_id.x) !== null && _posRef_current_it_id_x !== void 0 ? _posRef_current_it_id_x : 0;
                const clamped = Math.max(-240, Math.min(240, x));
                const opacity = 1 - Math.min(1, Math.abs(clamped) / 200);
                const rot = clamped / 240 * 6; // slight tilt
                map[it.id] = {
                    x: clamped,
                    opacity,
                    rot
                };
            }
            return map;
        }
    }["NotificationTray.useMemo[transforms]"], [
        items,
        draggingId
    ]);
    if (items.length === 0) return null;
    const deck = items.slice(0, 5); // show up to 5 stacked
    const topId = (_deck_ = deck[0]) === null || _deck_ === void 0 ? void 0 : _deck_.id;
    const panelClass = embedded ? "pointer-events-auto w-full" : "pointer-events-none fixed right-6 top-24 z-50 w-[420px] max-w-[92vw]";
    const offsetStep = embedded ? 12 : 24;
    const scaleStep = embedded ? 0.02 : 0.03;
    const cardHeight = embedded ? 140 : 220;
    const cardWidth = embedded ? 280 : 420;
    const stackOverlap = embedded ? offsetStep * (Math.min(deck.length, 5) - 1) : 0;
    const containerStyle = {
        height: embedded ? 200 : 260,
        marginTop: stackOverlap
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shell$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: panelClass,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shell$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            style: containerStyle,
            children: [
                deck.map((n, i)=>{
                    const depth = i; // 0 is top
                    const offsetY = -depth * offsetStep;
                    const scale = 1 - depth * scaleStep;
                    const z = 100 - depth;
                    const t = n.id === topId ? transforms[n.id] || {
                        x: 0,
                        opacity: 1,
                        rot: 0
                    } : {
                        x: 0,
                        opacity: 1,
                        rot: 0
                    };
                    const grad = gradients[depth % gradients.length] || toneClasses(n.tone);
                    const isTop = n.id === topId;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shell$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        role: "status",
                        className: "pointer-events-auto absolute left-1/2 -translate-x-1/2 rounded-2xl shadow-xl ring-1 ring-black/5 select-none bg-gradient-to-r ".concat(grad),
                        style: {
                            width: cardWidth,
                            height: cardHeight,
                            transform: "translate3d(".concat(t.x, "px, ").concat(offsetY, "px, 0) rotate(").concat(t.rot, "deg) scale(").concat(scale, ")"),
                            opacity: t.opacity,
                            zIndex: z,
                            transition: isTop ? "transform 320ms cubic-bezier(.22,1,.36,1), opacity 220ms ease" : "transform 320ms cubic-bezier(.22,1,.36,1)"
                        },
                        onPointerDown: isTop ? onPointerDown(n.id) : undefined,
                        onPointerMove: isTop ? onPointerMove(n.id) : undefined,
                        onPointerUp: isTop ? onPointerUp(n.id) : undefined,
                        children: [
                            showClose && isTop && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shell$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "data-nodrag": "true",
                                "aria-label": "Close notification",
                                className: "absolute top-2 right-2 z-10 h-7 w-7 rounded-full bg-black/30 text-white/90 hover:bg-black/40 flex items-center justify-center",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    remove(n.id);
                                },
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/shell-app/src/components/layout/NotificationTray.tsx",
                                lineNumber: 141,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shell$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full rounded-2xl overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shell$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-full flex items-center justify-center text-white text-[15px] font-medium tracking-tight px-6 text-center drop-shadow-[0_1px_1px_rgba(0,0,0,.25)]",
                                    children: n.title
                                }, void 0, false, {
                                    fileName: "[project]/shell-app/src/components/layout/NotificationTray.tsx",
                                    lineNumber: 152,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/shell-app/src/components/layout/NotificationTray.tsx",
                                lineNumber: 151,
                                columnNumber: 15
                            }, this)
                        ]
                    }, n.id, true, {
                        fileName: "[project]/shell-app/src/components/layout/NotificationTray.tsx",
                        lineNumber: 124,
                        columnNumber: 13
                    }, this);
                }),
                controls && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shell$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shell$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            "data-nodrag": "true",
                            "aria-label": "Previous notification",
                            className: "h-8 w-8 rounded-full bg-white/90 text-gray-700 shadow ring-1 ring-gray-200 hover:bg-white text-transparent relative",
                            onClick: ()=>setItems((prev)=>prev.length > 1 ? [
                                        prev[prev.length - 1],
                                        ...prev.slice(0, prev.length - 1)
                                    ] : prev),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shell$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "absolute inset-0 m-auto h-4 w-4 text-gray-700",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shell$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M15 18l-6-6 6-6"
                                }, void 0, false, {
                                    fileName: "[project]/shell-app/src/components/layout/NotificationTray.tsx",
                                    lineNumber: 169,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/shell-app/src/components/layout/NotificationTray.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/shell-app/src/components/layout/NotificationTray.tsx",
                            lineNumber: 161,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shell$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            "data-nodrag": "true",
                            "aria-label": "Next notification",
                            className: "h-8 w-8 rounded-full bg-white/90 text-gray-700 shadow ring-1 ring-gray-200 hover:bg-white text-transparent relative",
                            onClick: ()=>setItems((prev)=>prev.length > 1 ? [
                                        ...prev.slice(1),
                                        prev[0]
                                    ] : prev),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shell$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "absolute inset-0 m-auto h-4 w-4 text-gray-700",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shell$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M9 6l6 6-6 6"
                                }, void 0, false, {
                                    fileName: "[project]/shell-app/src/components/layout/NotificationTray.tsx",
                                    lineNumber: 181,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/shell-app/src/components/layout/NotificationTray.tsx",
                                lineNumber: 180,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/shell-app/src/components/layout/NotificationTray.tsx",
                            lineNumber: 173,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/shell-app/src/components/layout/NotificationTray.tsx",
                    lineNumber: 160,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/shell-app/src/components/layout/NotificationTray.tsx",
            lineNumber: 114,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/shell-app/src/components/layout/NotificationTray.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
_s(NotificationTray, "1zTjqPEtWSPW6PK6yctjEdDlBQs=");
_c = NotificationTray;
var _c;
__turbopack_context__.k.register(_c, "NotificationTray");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shell-app/src/components/layout/NotificationTray.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/shell-app/src/components/layout/NotificationTray.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=shell-app_src_components_layout_NotificationTray_tsx_b3c19fd9._.js.map
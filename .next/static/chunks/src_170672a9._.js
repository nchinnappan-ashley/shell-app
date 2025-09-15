(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/layout/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$HomeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HomeIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/HomeIcon.js [app-client] (ecmascript) <export default as HomeIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingOfficeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BuildingOfficeIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/BuildingOfficeIcon.js [app-client] (ecmascript) <export default as BuildingOfficeIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$TruckIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TruckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/TruckIcon.js [app-client] (ecmascript) <export default as TruckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CurrencyDollarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CurrencyDollarIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/CurrencyDollarIcon.js [app-client] (ecmascript) <export default as CurrencyDollarIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserGroupIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/UserGroupIcon.js [app-client] (ecmascript) <export default as UserGroupIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$DocumentTextIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DocumentTextIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/DocumentTextIcon.js [app-client] (ecmascript) <export default as DocumentTextIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CubeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CubeIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/CubeIcon.js [app-client] (ecmascript) <export default as CubeIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ServerIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ServerIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ServerIcon.js [app-client] (ecmascript) <export default as ServerIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$Bars3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bars3Icon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/Bars3Icon.js [app-client] (ecmascript) <export default as Bars3Icon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$Squares2X2Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Squares2X2Icon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/Squares2X2Icon.js [app-client] (ecmascript) <export default as Squares2X2Icon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const departments = [
    {
        id: 'ashleydirect',
        name: 'Ashley Direct',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$Squares2X2Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Squares2X2Icon$3e$__["Squares2X2Icon"],
        color: 'bg-blue-500'
    },
    {
        id: 'ashleynet',
        name: 'Ashley Net',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingOfficeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BuildingOfficeIcon$3e$__["BuildingOfficeIcon"],
        color: 'bg-green-500'
    },
    {
        id: 'supplier',
        name: 'Supplier',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$TruckIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TruckIcon$3e$__["TruckIcon"],
        color: 'bg-purple-500'
    },
    {
        id: 'finance',
        name: 'Finance',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CurrencyDollarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CurrencyDollarIcon$3e$__["CurrencyDollarIcon"],
        color: 'bg-yellow-500'
    },
    {
        id: 'hr',
        name: 'HR',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserGroupIcon$3e$__["UserGroupIcon"],
        color: 'bg-pink-500'
    },
    {
        id: 'payroll',
        name: 'Payroll',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$DocumentTextIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DocumentTextIcon$3e$__["DocumentTextIcon"],
        color: 'bg-indigo-500'
    },
    {
        id: 'transportation',
        name: 'Transportation',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$TruckIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TruckIcon$3e$__["TruckIcon"],
        color: 'bg-orange-500'
    },
    {
        id: 'highjump',
        name: 'HighJump',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CubeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CubeIcon$3e$__["CubeIcon"],
        color: 'bg-teal-500'
    },
    {
        id: 'as400',
        name: 'AS400',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ServerIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ServerIcon$3e$__["ServerIcon"],
        color: 'bg-red-500'
    }
];
function Sidebar(param) {
    let { selectedDepartment, onDepartmentSelect, onPlusClick } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4 space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>{
                    onDepartmentSelect(null);
                    router.push('/');
                },
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('w-10 h-10 rounded-lg flex items-center justify-center transition-colors', selectedDepartment === null ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$HomeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HomeIcon$3e$__["HomeIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Sidebar.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Sidebar.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onPlusClick === null || onPlusClick === void 0 ? void 0 : onPlusClick(),
                "aria-label": "Open recent activity",
                className: "w-10 h-10 rounded-lg bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700 flex items-center justify-center transition-colors",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$Bars3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bars3Icon$3e$__["Bars3Icon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Sidebar.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Sidebar.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col space-y-3",
                children: departments.map((dept)=>{
                    const IconComponent = dept.icon;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            onDepartmentSelect(dept.id);
                            router.push("/apps/".concat(dept.id));
                        },
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('w-10 h-10 rounded-lg flex items-center justify-center transition-colors', selectedDepartment === dept.id ? "".concat(dept.color, " text-white") : 'bg-gray-100 text-gray-600 hover:bg-gray-200'),
                        title: dept.name,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Sidebar.tsx",
                            lineNumber: 86,
                            columnNumber: 15
                        }, this)
                    }, dept.id, false, {
                        fileName: "[project]/src/components/layout/Sidebar.tsx",
                        lineNumber: 75,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Sidebar.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium text-sm",
                    children: "U"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Sidebar.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Sidebar.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Sidebar.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(Sidebar, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/theme/ThemeToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$SunIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SunIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/SunIcon.js [app-client] (ecmascript) <export default as SunIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MoonIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoonIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/MoonIcon.js [app-client] (ecmascript) <export default as MoonIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ComputerDesktopIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ComputerDesktopIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ComputerDesktopIcon.js [app-client] (ecmascript) <export default as ComputerDesktopIcon>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function getSystemTheme() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function applyTheme(theme) {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    if (theme === "system") {
        root.removeAttribute("data-theme");
        // Let system take over; set color-scheme to current system for better native UI
        const cs = getSystemTheme();
        root.style.colorScheme = cs;
    } else {
        root.setAttribute("data-theme", theme);
        root.style.colorScheme = theme;
    }
}
function applyColor(color) {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.setAttribute("data-color", color);
}
function ThemeToggle() {
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("system");
    const [color, setColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("blue");
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const rootRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // On mount, read stored preference and apply
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            try {
                var _ref;
                const storedTheme = (_ref = localStorage.getItem("theme")) !== null && _ref !== void 0 ? _ref : "system";
                var _ref1;
                const storedColor = (_ref1 = localStorage.getItem("color")) !== null && _ref1 !== void 0 ? _ref1 : "blue";
                setTheme(storedTheme);
                setColor(storedColor);
                applyTheme(storedTheme);
                applyColor(storedColor);
            } catch (e) {
            // ignore
            }
        }
    }["ThemeToggle.useEffect"], []);
    // mark mounted to avoid SSR/CSR mismatch
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            setMounted(true);
        }
    }["ThemeToggle.useEffect"], []);
    // If user chooses system, reflect live system changes in the icon after mount
    const systemTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ThemeToggle.useMemo[systemTheme]": ()=>("TURBOPACK compile-time truthy", 1) ? getSystemTheme() : "TURBOPACK unreachable"
    }["ThemeToggle.useMemo[systemTheme]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            var _mq_addEventListener;
            if (!mounted) return;
            if (theme !== "system" || "object" === "undefined") return;
            const mq = window.matchMedia("(prefers-color-scheme: dark)");
            const onChange = {
                "ThemeToggle.useEffect.onChange": ()=>applyTheme("system")
            }["ThemeToggle.useEffect.onChange"];
            (_mq_addEventListener = mq.addEventListener) === null || _mq_addEventListener === void 0 ? void 0 : _mq_addEventListener.call(mq, 'change', onChange);
            return ({
                "ThemeToggle.useEffect": ()=>{
                    var _mq_removeEventListener;
                    return (_mq_removeEventListener = mq.removeEventListener) === null || _mq_removeEventListener === void 0 ? void 0 : _mq_removeEventListener.call(mq, 'change', onChange);
                }
            })["ThemeToggle.useEffect"];
        }
    }["ThemeToggle.useEffect"], [
        theme,
        mounted
    ]);
    // Close popover when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            const onDown = {
                "ThemeToggle.useEffect.onDown": (e)=>{
                    if (!rootRef.current) return;
                    if (!rootRef.current.contains(e.target)) setOpen(false);
                }
            }["ThemeToggle.useEffect.onDown"];
            document.addEventListener('mousedown', onDown);
            return ({
                "ThemeToggle.useEffect": ()=>document.removeEventListener('mousedown', onDown)
            })["ThemeToggle.useEffect"];
        }
    }["ThemeToggle.useEffect"], []);
    const shown = mounted ? theme === "system" ? getSystemTheme() : theme : "light";
    const cycle = ()=>{
        const next = theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
        setTheme(next);
        try {
            localStorage.setItem("theme", next);
        } catch (e) {}
        applyTheme(next);
    };
    const Icon = shown === "dark" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MoonIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoonIcon$3e$__["MoonIcon"] : shown === "light" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$SunIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SunIcon$3e$__["SunIcon"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ComputerDesktopIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ComputerDesktopIcon$3e$__["ComputerDesktopIcon"];
    const label = theme === "system" ? "System (".concat(shown, ")") : shown === "dark" ? "Dark" : "Light";
    const choose = (c)=>{
        setColor(c);
        try {
            localStorage.setItem("color", c);
        } catch (e) {}
        applyColor(c);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: rootRef,
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                "aria-label": "Theme: ".concat(label, " (click to open color picker)"),
                title: "Theme: ".concat(label),
                onClick: ()=>setOpen((v)=>!v),
                className: "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/src/components/theme/ThemeToggle.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/theme/ThemeToggle.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 top-10 z-50 bg-white/95 dark:bg-slate-900/95 border border-gray-200/70 dark:border-gray-700/60 rounded-lg shadow-lg p-2 flex items-center gap-2 backdrop-blur-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>{
                            choose('blue');
                            setOpen(false);
                        },
                        "aria-label": "Blue theme",
                        className: "h-6 w-6 rounded-full ring-2 ring-offset-1 ".concat(color === 'blue' ? 'ring-gray-400' : 'ring-transparent'),
                        style: {
                            backgroundColor: '#3b82f6'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/theme/ThemeToggle.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>{
                            choose('emerald');
                            setOpen(false);
                        },
                        "aria-label": "Emerald theme",
                        className: "h-6 w-6 rounded-full ring-2 ring-offset-1 ".concat(color === 'emerald' ? 'ring-gray-400' : 'ring-transparent'),
                        style: {
                            backgroundColor: '#10b981'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/theme/ThemeToggle.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>{
                            choose('violet');
                            setOpen(false);
                        },
                        "aria-label": "Violet theme",
                        className: "h-6 w-6 rounded-full ring-2 ring-offset-1 ".concat(color === 'violet' ? 'ring-gray-400' : 'ring-transparent'),
                        style: {
                            backgroundColor: '#8b5cf6'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/theme/ThemeToggle.tsx",
                        lineNumber: 137,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/theme/ThemeToggle.tsx",
                lineNumber: 122,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/theme/ThemeToggle.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "JFVLqV33+htbTDyzZ/qKb6/PIYg=");
_c = ThemeToggle;
const __TURBOPACK__default__export__ = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BellIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BellIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/BellIcon.js [app-client] (ecmascript) <export default as BellIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$Cog6ToothIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cog6ToothIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/Cog6ToothIcon.js [app-client] (ecmascript) <export default as Cog6ToothIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/theme/ThemeToggle.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function Header() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BellIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BellIcon$3e$__["BellIcon"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$Cog6ToothIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cog6ToothIcon$3e$__["Cog6ToothIcon"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-8 w-auto flex items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/AshleyLogoLLCOrangeBlack.png",
                            alt: "Ashley",
                            width: 104,
                            height: 32,
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Header.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/searchHistory.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearHistory",
    ()=>clearHistory,
    "readHistory",
    ()=>readHistory,
    "recordSearch",
    ()=>recordSearch
]);
"use client";
const STORAGE_KEY = "search_history_v1";
function readHistory() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return [];
        const arr = JSON.parse(raw);
        if (!Array.isArray(arr)) return [];
        return arr;
    } catch (e) {
        return [];
    }
}
function writeHistory(items) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items.slice(0, 10)));
    } catch (e) {
    // ignore
    }
}
function recordSearch(entry) {
    const prev = readHistory();
    const ts = Date.now();
    // Try to match by id first, else by query
    const idx = prev.findIndex((it)=>entry.id && it.id === entry.id || !entry.id && it.query.toLowerCase() === entry.query.toLowerCase());
    if (idx >= 0) {
        const existing = prev[idx];
        const updated = {
            ...existing,
            ...entry,
            ts,
            count: (existing.count || 0) + 1
        };
        const reordered = [
            updated,
            ...prev.filter((_, i)=>i !== idx)
        ];
        writeHistory(reordered);
        return;
    }
    const next = {
        ...entry,
        ts,
        count: 1
    };
    const list = [
        next,
        ...prev
    ].sort((a, b)=>b.ts - a.ts).slice(0, 10);
    writeHistory(list);
}
function clearHistory() {
    writeHistory([]);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/AshleyNews.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AshleyNews
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$NewspaperIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__NewspaperIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/NewspaperIcon.js [app-client] (ecmascript) <export default as NewspaperIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronLeftIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeftIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ChevronLeftIcon.js [app-client] (ecmascript) <export default as ChevronLeftIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ChevronRightIcon.js [app-client] (ecmascript) <export default as ChevronRightIcon>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const sampleNews = [
    {
        id: 'n1',
        title: 'Ashley opens new distribution center',
        summary: 'Increasing capacity and improving lead times for the Southeast region.',
        date: '2025-08-12',
        tag: 'Logistics',
        image: 'https://images.unsplash.com/photo-1556125574-d7f27ec36a06?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 'n2',
        title: 'Ashley Direct adds real-time order tracking',
        summary: 'Track shipments end-to-end with enhanced visibility and alerts.',
        date: '2025-07-30',
        tag: 'Product',
        image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 'n3',
        title: 'Sustainability milestone achieved',
        summary: 'Manufacturing plants reduce emissions by 18% YoY with new initiatives.',
        date: '2025-07-05',
        tag: 'Sustainability',
        image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 'n4',
        title: 'New showroom grand opening',
        summary: 'Celebrating a new retail presence with community events and offers.',
        date: '2025-08-02',
        tag: 'Retail',
        image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=800&auto=format&fit=crop'
    }
];
function AshleyNews(param) {
    let { items = sampleNews } = param;
    _s();
    const scrollerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(items);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AshleyNews.useEffect": ()=>setMounted(true)
    }["AshleyNews.useEffect"], []);
    const formatDate = (d)=>{
        try {
            const dt = new Date(d);
            return mounted ? dt.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            }) : dt.toISOString().slice(0, 10);
        } catch (e) {
            return d;
        }
    };
    const cards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AshleyNews.useMemo[cards]": ()=>data
    }["AshleyNews.useMemo[cards]"], [
        data
    ]);
    // Fetch live Ashley news (WordPress listing)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AshleyNews.useEffect": ()=>{
            let cancelled = false;
            ({
                "AshleyNews.useEffect": async ()=>{
                    try {
                        setLoading(true);
                        const url = encodeURIComponent('https://ashley.biz/news/page/2/');
                        const res = await fetch("/api/news?url=".concat(url), {
                            cache: 'no-store'
                        });
                        const json = await res.json().catch({
                            "AshleyNews.useEffect": ()=>({
                                    ok: false
                                })
                        }["AshleyNews.useEffect"]);
                        if (!cancelled && (json === null || json === void 0 ? void 0 : json.ok) && Array.isArray(json.items) && json.items.length) {
                            setData(json.items);
                        }
                    } catch (e) {
                    // keep sample fallback
                    } finally{
                        if (!cancelled) setLoading(false);
                    }
                }
            })["AshleyNews.useEffect"]();
            return ({
                "AshleyNews.useEffect": ()=>{
                    cancelled = true;
                }
            })["AshleyNews.useEffect"];
        }
    }["AshleyNews.useEffect"], []);
    const scrollBy = (dir)=>{
        const el = scrollerRef.current;
        if (!el) return;
        const card = el.querySelector('[data-card]');
        const delta = ((card === null || card === void 0 ? void 0 : card.offsetWidth) || 280) + 12; // width + gap
        el.scrollBy({
            left: dir * delta,
            behavior: 'smooth'
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AshleyNews.useEffect": ()=>{
            const el = scrollerRef.current;
            if (!el) return;
            let i = 0;
            const timer = setInterval({
                "AshleyNews.useEffect.timer": ()=>{
                    if (!document.hidden) {
                        i = (i + 1) % (cards.length || 1);
                        const card = el.querySelector('[data-card]');
                        const delta = ((card === null || card === void 0 ? void 0 : card.offsetWidth) || 280) + 12;
                        el.scrollBy({
                            left: delta,
                            behavior: 'smooth'
                        });
                        // If near end, snap back to start
                        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - delta) {
                            setTimeout({
                                "AshleyNews.useEffect.timer": ()=>el.scrollTo({
                                        left: 0,
                                        behavior: 'smooth'
                                    })
                            }["AshleyNews.useEffect.timer"], 400);
                        }
                    }
                }
            }["AshleyNews.useEffect.timer"], 9000);
            return ({
                "AshleyNews.useEffect": ()=>clearInterval(timer)
            })["AshleyNews.useEffect"];
        }
    }["AshleyNews.useEffect"], [
        cards.length
    ]);
    // Smoove-like 3D reveal for cards in horizontal scroller
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AshleyNews.useEffect": ()=>{
            const root = scrollerRef.current;
            if (!root) return;
            const els = Array.from(root.querySelectorAll('[data-reveal]'));
            const io = new IntersectionObserver({
                "AshleyNews.useEffect": (entries)=>{
                    entries.forEach({
                        "AshleyNews.useEffect": (entry)=>{
                            const el = entry.target;
                            if (entry.isIntersecting) {
                                el.classList.add('smoove-in');
                                el.classList.remove('smoove-init');
                                io.unobserve(el);
                            }
                        }
                    }["AshleyNews.useEffect"]);
                }
            }["AshleyNews.useEffect"], {
                root,
                threshold: 0.2,
                rootMargin: '0px 10% -5% 10%'
            });
            els.forEach({
                "AshleyNews.useEffect": (el, idx)=>{
                    el.style.transitionDelay = "".concat(idx % 6 * 50, "ms");
                    io.observe(el);
                }
            }["AshleyNews.useEffect"]);
            return ({
                "AshleyNews.useEffect": ()=>io.disconnect()
            })["AshleyNews.useEffect"];
        }
    }["AshleyNews.useEffect"], [
        cards
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "jsx-2e3113709c1ca9b3" + " " + "mt-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-2e3113709c1ca9b3" + " " + "flex items-center justify-between px-1 sm:px-2 mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-2e3113709c1ca9b3" + " " + "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-2e3113709c1ca9b3" + " " + "w-7 h-7 rounded-lg brand-soft brand-text flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$NewspaperIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__NewspaperIcon$3e$__["NewspaperIcon"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/AshleyNews.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/AshleyNews.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    color: '#0f172a'
                                },
                                className: "jsx-2e3113709c1ca9b3" + " " + "text-sm font-semibold",
                                children: "Ashley News"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/AshleyNews.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/AshleyNews.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-2e3113709c1ca9b3" + " " + "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>scrollBy(-1),
                                className: "jsx-2e3113709c1ca9b3" + " " + "p-1 rounded-md hover:bg-gray-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronLeftIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeftIcon$3e$__["ChevronLeftIcon"], {
                                    className: "w-4 h-4 text-gray-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/AshleyNews.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/AshleyNews.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>scrollBy(1),
                                className: "jsx-2e3113709c1ca9b3" + " " + "p-1 rounded-md hover:bg-gray-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                                    className: "w-4 h-4 text-gray-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/AshleyNews.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/AshleyNews.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/AshleyNews.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/AshleyNews.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollerRef,
                style: {
                    scrollBehavior: 'smooth',
                    perspective: '1000px'
                },
                className: "jsx-2e3113709c1ca9b3" + " " + "relative flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent",
                children: cards.map((n, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: n.href || '#',
                        "data-reveal": true,
                        "data-3d": i % 2 ? 'right' : 'left',
                        "data-card": true,
                        className: "jsx-2e3113709c1ca9b3" + " " + "group min-w-[240px] sm:min-w-[280px] max-w-[280px] snap-start bg-white rounded-xl shadow-sm ring-1 ring-gray-200/70 hover:shadow-md hover:-translate-y-0.5 transition-all duration-500 will-change-transform smoove-init",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-2e3113709c1ca9b3" + " " + "relative h-36 w-full overflow-hidden rounded-t-xl",
                                children: [
                                    n.image ? // eslint-disable-next-line @next/next/no-img-element
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: n.image,
                                        alt: "",
                                        className: "jsx-2e3113709c1ca9b3" + " " + "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/AshleyNews.tsx",
                                        lineNumber: 172,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-2e3113709c1ca9b3" + " " + "w-full h-full brand-soft"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/AshleyNews.tsx",
                                        lineNumber: 174,
                                        columnNumber: 17
                                    }, this),
                                    n.tag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-2e3113709c1ca9b3" + " " + "absolute top-2 left-2 text-[10px] px-2 py-0.5 rounded-full bg-white/80 backdrop-blur border border-white/60 text-gray-700",
                                        children: n.tag
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/AshleyNews.tsx",
                                        lineNumber: 177,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/AshleyNews.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-2e3113709c1ca9b3" + " " + "px-3 py-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-2e3113709c1ca9b3" + " " + "flex items-center justify-between gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "jsx-2e3113709c1ca9b3" + " " + "text-sm font-medium text-gray-900 line-clamp-2",
                                                children: n.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/AshleyNews.tsx",
                                                lineNumber: 184,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-2e3113709c1ca9b3" + " " + "text-[10px] text-gray-500 shrink-0",
                                                children: formatDate(n.date)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/AshleyNews.tsx",
                                                lineNumber: 185,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/AshleyNews.tsx",
                                        lineNumber: 183,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-2e3113709c1ca9b3" + " " + "text-xs text-gray-600 mt-1 line-clamp-2",
                                        children: n.summary
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/AshleyNews.tsx",
                                        lineNumber: 187,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/AshleyNews.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this)
                        ]
                    }, n.id, true, {
                        fileName: "[project]/src/components/layout/AshleyNews.tsx",
                        lineNumber: 161,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/layout/AshleyNews.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "2e3113709c1ca9b3",
                children: "[data-reveal].jsx-2e3113709c1ca9b3{transform-origin:50%;opacity:0;transform-style:preserve-3d}[data-reveal].smoove-in.jsx-2e3113709c1ca9b3{opacity:1;transform:translate(0)rotateX(0)rotateY(0)rotate(0)scale(1)}[data-reveal].smoove-init[data-3d=left].jsx-2e3113709c1ca9b3{transform:translate3d(-40px,0,-60px)rotateY(12deg)rotate(-1deg)}[data-reveal].smoove-init[data-3d=right].jsx-2e3113709c1ca9b3{transform:translate3d(40px,0,-60px)rotateY(-12deg)rotate(1deg)}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/AshleyNews.tsx",
        lineNumber: 137,
        columnNumber: 5
    }, this);
}
_s(AshleyNews, "mylZ1/m0WZ7kXvvRTMWI6jR8Y0I=");
_c = AshleyNews;
var _c;
__turbopack_context__.k.register(_c, "AshleyNews");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/ServiceNowIncidents.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServiceNowIncidents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$ExclamationTriangleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExclamationTriangleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/solid/esm/ExclamationTriangleIcon.js [app-client] (ecmascript) <export default as ExclamationTriangleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$ArrowUpIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/solid/esm/ArrowUpIcon.js [app-client] (ecmascript) <export default as ArrowUpIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$MinusIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MinusIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/solid/esm/MinusIcon.js [app-client] (ecmascript) <export default as MinusIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$ArrowDownIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/solid/esm/ArrowDownIcon.js [app-client] (ecmascript) <export default as ArrowDownIcon>");
"use client";
;
;
const incidents = [
    {
        id: "INC0010045",
        title: "Email service experiencing delays",
        status: "In Progress",
        priority: "high"
    },
    {
        id: "INC0010042",
        title: "Cannot access shared network drive",
        status: "New",
        priority: "medium"
    },
    {
        id: "INC0010039",
        title: "Printer on 4th floor is offline",
        status: "Resolved",
        priority: "low"
    }
];
function StatusBadge(param) {
    let { status } = param;
    const map = {
        "In Progress": "bg-amber-100 text-amber-800",
        "New": "bg-blue-100 text-blue-800",
        "Resolved": "bg-emerald-100 text-emerald-800"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ".concat(map[status]),
        children: status
    }, void 0, false, {
        fileName: "[project]/src/components/layout/ServiceNowIncidents.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = StatusBadge;
function PriorityIcon(param) {
    let { p } = param;
    if (p === "high") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$ArrowUpIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpIcon$3e$__["ArrowUpIcon"], {
        className: "w-4 h-4 text-rose-500"
    }, void 0, false, {
        fileName: "[project]/src/components/layout/ServiceNowIncidents.tsx",
        lineNumber: 31,
        columnNumber: 28
    }, this);
    if (p === "medium") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$MinusIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MinusIcon$3e$__["MinusIcon"], {
        className: "w-4 h-4 text-amber-500"
    }, void 0, false, {
        fileName: "[project]/src/components/layout/ServiceNowIncidents.tsx",
        lineNumber: 32,
        columnNumber: 30
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$ArrowDownIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownIcon$3e$__["ArrowDownIcon"], {
        className: "w-4 h-4 text-emerald-500"
    }, void 0, false, {
        fileName: "[project]/src/components/layout/ServiceNowIncidents.tsx",
        lineNumber: 33,
        columnNumber: 10
    }, this);
}
_c1 = PriorityIcon;
function ServiceNowIncidents() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "aria-label": "ServiceNow Incidents",
        className: "mt-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 px-5 pt-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center justify-center w-7 h-7 rounded-full bg-rose-100 text-rose-600",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$ExclamationTriangleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExclamationTriangleIcon$3e$__["ExclamationTriangleIcon"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/ServiceNowIncidents.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/ServiceNowIncidents.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold text-gray-900",
                            children: "ServiceNow Incidents"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/ServiceNowIncidents.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/ServiceNowIncidents.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-5 pb-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full table-fixed text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "text-left text-gray-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "w-24 pb-2 font-medium",
                                                children: "Priority"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/ServiceNowIncidents.tsx",
                                                lineNumber: 54,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "w-36 pb-2 font-medium",
                                                children: "ID"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/ServiceNowIncidents.tsx",
                                                lineNumber: 55,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "pb-2 font-medium",
                                                children: "Title"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/ServiceNowIncidents.tsx",
                                                lineNumber: 56,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "w-40 pb-2 font-medium text-right",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/ServiceNowIncidents.tsx",
                                                lineNumber: 57,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/ServiceNowIncidents.tsx",
                                        lineNumber: 53,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/ServiceNowIncidents.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: incidents.map((inc, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: idx !== incidents.length - 1 ? "border-t border-gray-100" : "border-t border-gray-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PriorityIcon, {
                                                        p: inc.priority
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/ServiceNowIncidents.tsx",
                                                        lineNumber: 64,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/ServiceNowIncidents.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 text-[13px] text-gray-600",
                                                    children: inc.id
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/ServiceNowIncidents.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 text-gray-900",
                                                    children: inc.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/ServiceNowIncidents.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 text-right",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                                                        status: inc.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/ServiceNowIncidents.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/ServiceNowIncidents.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, inc.id, true, {
                                            fileName: "[project]/src/components/layout/ServiceNowIncidents.tsx",
                                            lineNumber: 62,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/ServiceNowIncidents.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/ServiceNowIncidents.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/ServiceNowIncidents.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/ServiceNowIncidents.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/ServiceNowIncidents.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/ServiceNowIncidents.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c2 = ServiceNowIncidents;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "StatusBadge");
__turbopack_context__.k.register(_c1, "PriorityIcon");
__turbopack_context__.k.register(_c2, "ServiceNowIncidents");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/AdCarousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
"use client";
;
;
const SAMPLE_ADS = [
    {
        id: "a1",
        title: "Ashley Direct",
        href: "https://www.ashleyfurniture.com/",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Ashley_Furniture_Industries_logo.svg/512px-Ashley_Furniture_Industries_logo.svg.png"
    },
    {
        id: "a2",
        title: "Logistics Pro",
        href: "#"
    },
    {
        id: "a3",
        title: "FleetTrack",
        href: "#"
    },
    {
        id: "a4",
        title: "Coastal Shipping",
        href: "#"
    },
    {
        id: "a5",
        title: "Green Fabric",
        href: "#"
    },
    {
        id: "a6",
        title: "RetailHub",
        href: "#"
    },
    {
        id: "a7",
        title: "Insight BI",
        href: "#"
    },
    {
        id: "a8",
        title: "Cloud ERP",
        href: "#"
    }
];
function Initials(param) {
    let { text } = param;
    const initials = text.split(" ").map((w)=>w[0]).join("").slice(0, 3).toUpperCase();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-24 h-12 rounded-md brand-soft brand-text flex items-center justify-center text-sm font-semibold",
        children: initials
    }, void 0, false, {
        fileName: "[project]/src/components/layout/AdCarousel.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = Initials;
function Row(param) {
    let { items, reverse = false, duration = 40 } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            ['--duration']: "".concat(duration, "s")
        },
        className: "jsx-71fb53a3b50f7826" + " " + "marquee ".concat(reverse ? "marquee-reverse" : ""),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "jsx-71fb53a3b50f7826" + " " + "marquee-content",
                children: [
                    items.map((ad)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "jsx-71fb53a3b50f7826" + " " + "ad-item",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: ad.href || '#',
                                target: "_blank",
                                rel: "noreferrer",
                                className: "jsx-71fb53a3b50f7826" + " " + "ad-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-71fb53a3b50f7826" + " " + "logo-wrap",
                                        children: ad.logo ? // eslint-disable-next-line @next/next/no-img-element
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: ad.logo,
                                            alt: ad.title,
                                            className: "jsx-71fb53a3b50f7826" + " " + "logo-img"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/AdCarousel.tsx",
                                            lineNumber: 42,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Initials, {
                                            text: ad.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/AdCarousel.tsx",
                                            lineNumber: 44,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/AdCarousel.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-71fb53a3b50f7826" + " " + "title",
                                        children: ad.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/AdCarousel.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/AdCarousel.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this)
                        }, ad.id, false, {
                            fileName: "[project]/src/components/layout/AdCarousel.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)),
                    items.map((ad)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "jsx-71fb53a3b50f7826" + " " + "ad-item",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: ad.href || '#',
                                target: "_blank",
                                rel: "noreferrer",
                                className: "jsx-71fb53a3b50f7826" + " " + "ad-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-71fb53a3b50f7826" + " " + "logo-wrap",
                                        children: ad.logo ? // eslint-disable-next-line @next/next/no-img-element
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: ad.logo,
                                            alt: ad.title,
                                            className: "jsx-71fb53a3b50f7826" + " " + "logo-img"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/AdCarousel.tsx",
                                            lineNumber: 58,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Initials, {
                                            text: ad.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/AdCarousel.tsx",
                                            lineNumber: 60,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/AdCarousel.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-71fb53a3b50f7826" + " " + "title",
                                        children: ad.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/AdCarousel.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/AdCarousel.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        }, "dupe-".concat(ad.id), false, {
                            fileName: "[project]/src/components/layout/AdCarousel.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/AdCarousel.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "71fb53a3b50f7826",
                children: ".marquee.jsx-71fb53a3b50f7826{--gap:.75rem;grid-auto-flow:column;display:grid;overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}.marquee.jsx-71fb53a3b50f7826:hover .marquee-content.jsx-71fb53a3b50f7826{animation-play-state:paused}.marquee-content.jsx-71fb53a3b50f7826{align-items:center;gap:var(--gap);min-width:max-content;animation:scroll var(--duration,40s)linear infinite;display:flex}.marquee-reverse.jsx-71fb53a3b50f7826 .marquee-content.jsx-71fb53a3b50f7826{animation-direction:reverse}.ad-item.jsx-71fb53a3b50f7826{list-style:none}.ad-card.jsx-71fb53a3b50f7826{background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:.75rem;align-items:center;gap:.5rem;padding:.5rem .75rem;transition:transform .3s,box-shadow .3s,border-color .3s;display:flex;box-shadow:0 1px 2px rgba(0,0,0,.04)}.ad-card.jsx-71fb53a3b50f7826:hover{border-color:rgba(0,0,0,.12);transform:translateY(-2px);box-shadow:0 6px 16px rgba(0,0,0,.08)}.logo-wrap.jsx-71fb53a3b50f7826{background:rgba(0,0,0,.02);border-radius:.5rem;justify-content:center;align-items:center;width:96px;height:48px;display:flex;overflow:hidden}.logo-img.jsx-71fb53a3b50f7826{object-fit:contain;object-position:center;filter:saturate(1.1);width:100%;height:100%;transition:transform .5s}.ad-card.jsx-71fb53a3b50f7826:hover .logo-img.jsx-71fb53a3b50f7826{transform:scale(1.03)}.title.jsx-71fb53a3b50f7826{color:#0f172a;white-space:nowrap;font-size:12px}@keyframes scroll{to{transform:translate(-50%)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/AdCarousel.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c1 = Row;
function AdCarousel(param) {
    let { items = SAMPLE_ADS } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mt-14",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-3 px-1 sm:px-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-semibold",
                        style: {
                            color: '#0f172a'
                        },
                        children: "External Ads"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/AdCarousel.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] text-gray-500",
                        children: "Sponsored"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/AdCarousel.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/AdCarousel.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                        items: items,
                        duration: 42
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/AdCarousel.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                        items: items.slice().reverse(),
                        reverse: true,
                        duration: 48
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/AdCarousel.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/AdCarousel.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/AdCarousel.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_c2 = AdCarousel;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Initials");
__turbopack_context__.k.register(_c1, "Row");
__turbopack_context__.k.register(_c2, "AdCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/ai-agents.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"id\":\"ai-slides\",\"name\":\"AI Slides\",\"description\":\"Create presentations\",\"icon\":\"PresentationChartLineIcon\"},{\"id\":\"ai-sheets\",\"name\":\"AI Sheets\",\"description\":\"Spreadsheet analysis\",\"icon\":\"TableCellsIcon\"},{\"id\":\"ai-chat\",\"name\":\"AI Chat\",\"description\":\"Conversational AI\",\"icon\":\"ChatBubbleLeftRightIcon\",\"isHot\":true},{\"id\":\"ai-documents\",\"name\":\"AI Documents\",\"description\":\"Document processing\",\"icon\":\"DocumentTextIcon\",\"isNew\":true},{\"id\":\"ai-analytics\",\"name\":\"AI Analytics\",\"description\":\"Data insights\",\"icon\":\"ChartBarIcon\"},{\"id\":\"ai-code\",\"name\":\"AI Code\",\"description\":\"Code generation\",\"icon\":\"CodeBracketIcon\"},{\"id\":\"ai-images\",\"name\":\"AI Images\",\"description\":\"Image generation\",\"icon\":\"PhotoIcon\"},{\"id\":\"ai-video\",\"name\":\"AI Video\",\"description\":\"Video creation\",\"icon\":\"VideoCameraIcon\"},{\"id\":\"ai-voice\",\"name\":\"AI Voice\",\"description\":\"Voice synthesis\",\"icon\":\"MicrophoneIcon\"},{\"id\":\"ai-agents\",\"name\":\"AI Agents\",\"description\":\"Custom agents\",\"icon\":\"SparklesIcon\"}]"));}),
"[project]/src/components/layout/MainContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MainContent",
    ()=>MainContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$searchHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/searchHistory.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PresentationChartLineIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PresentationChartLineIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/PresentationChartLineIcon.js [app-client] (ecmascript) <export default as PresentationChartLineIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$TableCellsIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCellsIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/TableCellsIcon.js [app-client] (ecmascript) <export default as TableCellsIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChatBubbleLeftRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatBubbleLeftRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ChatBubbleLeftRightIcon.js [app-client] (ecmascript) <export default as ChatBubbleLeftRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$DocumentTextIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DocumentTextIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/DocumentTextIcon.js [app-client] (ecmascript) <export default as DocumentTextIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChartBarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartBarIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ChartBarIcon.js [app-client] (ecmascript) <export default as ChartBarIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CodeBracketIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CodeBracketIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/CodeBracketIcon.js [app-client] (ecmascript) <export default as CodeBracketIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PhotoIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhotoIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/PhotoIcon.js [app-client] (ecmascript) <export default as PhotoIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$VideoCameraIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoCameraIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/VideoCameraIcon.js [app-client] (ecmascript) <export default as VideoCameraIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MicrophoneIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicrophoneIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/MicrophoneIcon.js [app-client] (ecmascript) <export default as MicrophoneIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SparklesIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/SparklesIcon.js [app-client] (ecmascript) <export default as SparklesIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PaperClipIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PaperClipIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/PaperClipIcon.js [app-client] (ecmascript) <export default as PaperClipIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ArrowRightIcon.js [app-client] (ecmascript) <export default as ArrowRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PaperAirplaneIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PaperAirplaneIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/PaperAirplaneIcon.js [app-client] (ecmascript) <export default as PaperAirplaneIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/UserIcon.js [app-client] (ecmascript) <export default as UserIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$LinkIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LinkIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/LinkIcon.js [app-client] (ecmascript) <export default as LinkIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ClipboardDocumentListIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardDocumentListIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ClipboardDocumentListIcon.js [app-client] (ecmascript) <export default as ClipboardDocumentListIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CurrencyDollarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CurrencyDollarIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/CurrencyDollarIcon.js [app-client] (ecmascript) <export default as CurrencyDollarIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$TruckIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TruckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/TruckIcon.js [app-client] (ecmascript) <export default as TruckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$AcademicCapIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AcademicCapIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/AcademicCapIcon.js [app-client] (ecmascript) <export default as AcademicCapIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PencilSquareIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PencilSquareIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/PencilSquareIcon.js [app-client] (ecmascript) <export default as PencilSquareIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$AdjustmentsHorizontalIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AdjustmentsHorizontalIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/AdjustmentsHorizontalIcon.js [app-client] (ecmascript) <export default as AdjustmentsHorizontalIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$WrenchScrewdriverIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WrenchScrewdriverIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/WrenchScrewdriverIcon.js [app-client] (ecmascript) <export default as WrenchScrewdriverIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PlusIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/PlusIcon.js [app-client] (ecmascript) <export default as PlusIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$XMarkIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XMarkIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js [app-client] (ecmascript) <export default as XMarkIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$AshleyNews$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/AshleyNews.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ServiceNowIncidents$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/ServiceNowIncidents.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$AdCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/AdCarousel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$ai$2d$agents$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/ai-agents.json (json)");
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const ForYouSmoove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/layout/ForYouSmoove.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/layout/ForYouSmoove.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = ForYouSmoove;
;
;
;
;
;
const ICONS = {
    PresentationChartLineIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PresentationChartLineIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PresentationChartLineIcon$3e$__["PresentationChartLineIcon"],
    TableCellsIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$TableCellsIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCellsIcon$3e$__["TableCellsIcon"],
    ChatBubbleLeftRightIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChatBubbleLeftRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatBubbleLeftRightIcon$3e$__["ChatBubbleLeftRightIcon"],
    DocumentTextIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$DocumentTextIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DocumentTextIcon$3e$__["DocumentTextIcon"],
    ChartBarIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChartBarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartBarIcon$3e$__["ChartBarIcon"],
    CodeBracketIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CodeBracketIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CodeBracketIcon$3e$__["CodeBracketIcon"],
    PhotoIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PhotoIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhotoIcon$3e$__["PhotoIcon"],
    VideoCameraIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$VideoCameraIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoCameraIcon$3e$__["VideoCameraIcon"],
    MicrophoneIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MicrophoneIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicrophoneIcon$3e$__["MicrophoneIcon"],
    SparklesIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SparklesIcon$3e$__["SparklesIcon"]
};
const aiAgents = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$ai$2d$agents$2e$json__$28$json$29$__["default"].map((a)=>({
        id: a.id,
        name: a.name,
        description: a.description,
        icon: ICONS[a.icon] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SparklesIcon$3e$__["SparklesIcon"],
        isNew: a.isNew,
        isHot: a.isHot
    }));
const SHOW_AI_GRID = false; // center grid hidden per request
function MainContent() {
    var _agentMessages_;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const apps = catalogData;
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [listening, setListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // External routes for specific apps (microfrontends)
    const externalRoutes = {
        ashleydirect: 'http://localhost:3001/apps/ashleydirect',
        // Use internal route for Create Order within the shell app
        createorder: '/apps/createorder',
        inroute: '/apps/inroute'
    };
    const [forYouSpace, setForYouSpace] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        available: false,
        height: 0
    });
    const [forYouExtraAfterFirstRow, setForYouExtraAfterFirstRow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [atTop, setAtTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const forYouAnchorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const getScrollParent = (node)=>{
        let p = (node === null || node === void 0 ? void 0 : node.parentElement) || null;
        while(p){
            const style = getComputedStyle(p);
            if (/(auto|scroll|overlay)/.test(style.overflowY)) return p;
            p = p.parentElement;
        }
        return window;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainContent.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const sp = getScrollParent(forYouAnchorRef.current);
            const onScroll = {
                "MainContent.useEffect.onScroll": ()=>{
                    const y = sp === window ? window.scrollY : sp.scrollTop;
                    setAtTop(y < 2);
                }
            }["MainContent.useEffect.onScroll"];
            onScroll();
            if (sp === window) {
                window.addEventListener('scroll', onScroll, {
                    passive: true
                });
            } else {
                sp.addEventListener('scroll', onScroll, {
                    passive: true
                });
            }
            return ({
                "MainContent.useEffect": ()=>{
                    if (sp === window) {
                        window.removeEventListener('scroll', onScroll);
                    } else {
                        sp.removeEventListener('scroll', onScroll);
                    }
                }
            })["MainContent.useEffect"];
        }
    }["MainContent.useEffect"], []);
    const recents = [
        {
            name: 'Created 5 orders last week — not submitted (Click to proceed further)',
            type: 'Orders',
            status: 'Action Needed',
            createdBy: 'System',
            modifiedOn: new Date().toLocaleDateString(),
            href: '/apps/orders'
        },
        {
            name: '3 trips in Finance to complete the invoice process (Click to proceed)',
            type: 'Finance',
            status: 'Pending',
            createdBy: 'Finance',
            modifiedOn: new Date(Date.now() - 86400000 * 2).toLocaleDateString(),
            href: '/apps/finance'
        },
        {
            name: 'Customer is waiting for that order (Click to proceed)',
            type: 'Customer',
            status: 'Urgent',
            createdBy: 'CSR',
            modifiedOn: new Date(Date.now() - 86400000 * 3).toLocaleDateString(),
            href: '/apps/customers'
        },
        {
            name: '2 trucks are in the middle of the way — needs clearance (Click to proceed)',
            type: 'Logistics',
            status: 'In Transit',
            createdBy: 'Logistics',
            modifiedOn: new Date(Date.now() - 86400000 * 5).toLocaleDateString(),
            href: '/apps/logistics'
        }
    ];
    const TYPE_ICON = {
        Orders: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ClipboardDocumentListIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardDocumentListIcon$3e$__["ClipboardDocumentListIcon"],
        Finance: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CurrencyDollarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CurrencyDollarIcon$3e$__["CurrencyDollarIcon"],
        Customer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserIcon$3e$__["UserIcon"],
        Logistics: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$TruckIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TruckIcon$3e$__["TruckIcon"]
    };
    const STATUS_DOT = {
        'Action Needed': 'bg-amber-500',
        'Pending': 'bg-blue-500',
        'Urgent': 'bg-rose-500',
        'In Transit': 'bg-indigo-500'
    };
    const handleSpaceAvailable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MainContent.useCallback[handleSpaceAvailable]": (available, height)=>{
            setForYouSpace({
                "MainContent.useCallback[handleSpaceAvailable]": (prev)=>prev.available === available && prev.height === height ? prev : {
                        available,
                        height
                    }
            }["MainContent.useCallback[handleSpaceAvailable]"]);
        }
    }["MainContent.useCallback[handleSpaceAvailable]"], []);
    const normalize = (s)=>s.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
    const findBestApp = (input)=>{
        const q = normalize(input);
        if (!q) return undefined;
        let best;
        for (const a of apps){
            const t = normalize(a.title);
            let score = 0;
            if (t === q) score = 100;
            else if (t.startsWith(q) || q.startsWith(t)) score = 80;
            else if (t.includes(q) || q.includes(t)) score = 60;
            else {
                const qt = new Set(q.split(' '));
                const tt = new Set(t.split(' '));
                let overlap = 0;
                qt.forEach((w)=>{
                    if (tt.has(w)) overlap++;
                });
                if (overlap > 0) score = 40 + overlap;
            }
            if (!best || score > best.score) best = {
                score,
                app: a
            };
        }
        if (best && best.score >= 60) return best.app;
        return undefined;
    };
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MainContent.useMemo[filtered]": ()=>{
            const q = query.trim().toLowerCase();
            if (!q) return [];
            return apps.filter({
                "MainContent.useMemo[filtered]": (a)=>a.title.toLowerCase().includes(q)
            }["MainContent.useMemo[filtered]"]).slice(0, 7);
        }
    }["MainContent.useMemo[filtered]"], [
        apps,
        query
    ]);
    // Record one activity when user chooses a menu and navigates
    const recordNavActivity = (text, href)=>{
        try {
            const raw = localStorage.getItem('oa_recent_acts');
            const list = raw ? JSON.parse(raw) : [];
            const now = Date.now();
            const item = {
                id: String(now) + Math.random().toString(36).slice(2),
                text,
                href,
                ts: now,
                count: 1,
                startedAt: now
            };
            const next = [
                item,
                ...list
            ].slice(0, 30);
            localStorage.setItem('oa_recent_acts', JSON.stringify(next));
            localStorage.removeItem('oa_current_act');
            window.dispatchEvent(new CustomEvent('recent-activity', {
                detail: item
            }));
        } catch (e) {}
    };
    // Allow user to continue a past activity explicitly
    const continueActivity = (id)=>{
        try {
            const now = Date.now();
            localStorage.setItem(CURRENT_ACT_KEY, JSON.stringify({
                id,
                startedAt: now,
                updatedAt: now
            }));
            if ("TURBOPACK compile-time truthy", 1) {
                window.dispatchEvent(new CustomEvent('continue-activity', {
                    detail: {
                        id
                    }
                }));
            }
        } catch (e) {}
    };
    const go = (id)=>{
        const app = apps.find((a)=>a.id === id);
        var _externalRoutes_id;
        const path = (_externalRoutes_id = externalRoutes[id]) !== null && _externalRoutes_id !== void 0 ? _externalRoutes_id : "/apps/".concat(id);
        const label = (app === null || app === void 0 ? void 0 : app.title) || id;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$searchHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recordSearch"])({
            id,
            title: app === null || app === void 0 ? void 0 : app.title,
            query: (query || (app === null || app === void 0 ? void 0 : app.title) || '').trim(),
            path
        });
        // Rule: choosing a menu and navigating is a single activity
        recordNavActivity("Open: ".concat(label), path);
        if (path.startsWith('http')) {
            if ("TURBOPACK compile-time truthy", 1) window.location.href = path;
            else //TURBOPACK unreachable
            ;
        } else {
            router.push(path);
        }
    };
    const onKeyDown = (e)=>{
        if (e.key === 'ArrowDown' && filtered.length) {
            e.preventDefault();
            setActive((i)=>Math.min(i + 1, filtered.length - 1));
            return;
        }
        if (e.key === 'ArrowUp' && filtered.length) {
            e.preventDefault();
            setActive((i)=>Math.max(i - 1, 0));
            return;
        }
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (filtered.length) go(filtered[Math.max(0, active)].id);
            else send();
        }
    };
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const autoResize = ()=>{
        const el = textRef.current;
        if (!el) return;
        el.style.height = 'auto';
        const max = 220; // slightly taller cap (~6-7 lines)
        el.style.height = Math.min(el.scrollHeight, max) + 'px';
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainContent.useEffect": ()=>{
            autoResize();
        }
    }["MainContent.useEffect"], [
        query
    ]);
    const onChangeQuery = (e)=>{
        setQuery(e.target.value);
        setActive(0);
        // auto-resize is handled by effect, but do it here too for responsiveness
        const el = textRef.current;
        if (el) {
            el.style.height = 'auto';
            el.style.height = Math.min(el.scrollHeight, 220) + 'px';
        }
    };
    const [agentMessages, setAgentMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [agentMode, setAgentMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('none');
    const [orderStep, setOrderStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [inRouteStep, setInRouteStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [orderDraft, setOrderDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        customerNumber: '',
        shipTo: '',
        items: [],
        quantities: [],
        warehouse: '',
        orderType: 'complete',
        shipMethod: 'delivery',
        requestDate: ''
    });
    // Persistent Create Order draft across navigation
    const ORDER_DRAFT_KEY = 'oa_draft_create_order';
    const saveDraft = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            const prev = (()=>{
                try {
                    return JSON.parse(localStorage.getItem(ORDER_DRAFT_KEY) || 'null');
                } catch (e) {
                    return null;
                }
            })();
            var _prev_startedAt;
            const payload = {
                mode: agentMode,
                step: orderStep,
                order: orderDraft,
                messages: agentMessages,
                startedAt: (_prev_startedAt = prev === null || prev === void 0 ? void 0 : prev.startedAt) !== null && _prev_startedAt !== void 0 ? _prev_startedAt : Date.now(),
                updatedAt: Date.now()
            };
            localStorage.setItem(ORDER_DRAFT_KEY, JSON.stringify(payload));
            window.dispatchEvent(new Event('order-draft-updated'));
        } catch (e) {}
    };
    const loadDraft = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            return JSON.parse(localStorage.getItem(ORDER_DRAFT_KEY) || 'null');
        } catch (e) {
            return null;
        }
    };
    const clearDraft = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            localStorage.removeItem(ORDER_DRAFT_KEY);
            window.dispatchEvent(new Event('order-draft-updated'));
        } catch (e) {}
    };
    const [resumeDraft, setResumeDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainContent.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const read = {
                "MainContent.useEffect.read": ()=>{
                    try {
                        const raw = localStorage.getItem(ORDER_DRAFT_KEY);
                        const d = raw ? JSON.parse(raw) : null;
                        if (d && d.mode === 'createOrderAD' && d.step && d.step !== 'done') setResumeDraft(d);
                        else setResumeDraft(null);
                    } catch (e) {
                        setResumeDraft(null);
                    }
                }
            }["MainContent.useEffect.read"];
            read();
            window.addEventListener('order-draft-updated', read);
            return ({
                "MainContent.useEffect": ()=>window.removeEventListener('order-draft-updated', read)
            })["MainContent.useEffect"];
        }
    }["MainContent.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainContent.useEffect": ()=>{
            if (agentMode !== 'createOrderAD') return;
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            try {
                const prev = ({
                    "MainContent.useEffect.prev": ()=>{
                        try {
                            return JSON.parse(localStorage.getItem(ORDER_DRAFT_KEY) || 'null');
                        } catch (e) {
                            return null;
                        }
                    }
                })["MainContent.useEffect.prev"]();
                var _prev_startedAt;
                const payload = {
                    mode: agentMode,
                    step: orderStep,
                    order: orderDraft,
                    messages: agentMessages,
                    startedAt: (_prev_startedAt = prev === null || prev === void 0 ? void 0 : prev.startedAt) !== null && _prev_startedAt !== void 0 ? _prev_startedAt : Date.now(),
                    updatedAt: Date.now()
                };
                localStorage.setItem(ORDER_DRAFT_KEY, JSON.stringify(payload));
                window.dispatchEvent(new Event('order-draft-updated'));
            } catch (e) {}
        }
    }["MainContent.useEffect"], [
        agentMode,
        orderStep,
        orderDraft,
        agentMessages
    ]);
    // Persist per-activity flow state keyed by current activity id
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainContent.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            try {
                const curRaw = localStorage.getItem(CURRENT_ACT_KEY);
                const cur = curRaw ? JSON.parse(curRaw) : null;
                var _cur_id;
                const id = (_cur_id = cur === null || cur === void 0 ? void 0 : cur.id) !== null && _cur_id !== void 0 ? _cur_id : null;
                if (!id) return;
                // Determine kind for the current activity
                let kind = agentMode === 'createOrderAD' ? 'createOrder' : agentMode === 'inRouteAD' ? 'inRoute' : 'chat';
                try {
                    const list = JSON.parse(localStorage.getItem(RECENT_KEY) || '[]');
                    const act = list.find({
                        "MainContent.useEffect.act": (a)=>a.id === id
                    }["MainContent.useEffect.act"]);
                    if (act === null || act === void 0 ? void 0 : act.kind) kind = act.kind;
                } catch (e) {}
                const payload = {
                    kind,
                    mode: agentMode,
                    step: orderStep,
                    inRouteStep,
                    order: orderDraft,
                    messages: agentMessages,
                    updatedAt: Date.now()
                };
                localStorage.setItem("".concat(FLOW_STATE_PREFIX).concat(id), JSON.stringify(payload));
            } catch (e) {}
        }
    }["MainContent.useEffect"], [
        agentMode,
        orderStep,
        inRouteStep,
        orderDraft,
        agentMessages
    ]);
    const resumeFromDraft = ()=>{
        const d = loadDraft();
        if (!d) return;
        setAgentMode('createOrderAD');
        setOrderStep(d.step);
        setOrderDraft(d.order);
        setAgentMessages(d.messages || []);
        pushAssistant('Resumed your Create Order draft. You can continue where you left off.');
        setResumeDraft(null);
    };
    const discardDraft = ()=>{
        clearDraft();
        setResumeDraft(null);
    };
    const pushAssistant = (text)=>setAgentMessages((m)=>[
                ...m,
                {
                    role: 'assistant',
                    content: text
                }
            ]);
    const pushUser = (text)=>setAgentMessages((m)=>[
                ...m,
                {
                    role: 'user',
                    content: text
                }
            ]);
    // Recent Activity: group messages into a single activity per session
    const RECENT_KEY = 'oa_recent_acts';
    const CURRENT_ACT_KEY = 'oa_current_act';
    const FLOW_STATE_PREFIX = 'oa_flow_state_';
    const addRecent = (entry)=>{
        try {
            const raw = localStorage.getItem(RECENT_KEY);
            const list = raw ? JSON.parse(raw) : [];
            var _entry_ts;
            const now = (_entry_ts = entry.ts) !== null && _entry_ts !== void 0 ? _entry_ts : Date.now();
            // If navigation/link activity => always record as its own item and end chat session
            if (entry.href) {
                const item = {
                    id: String(now) + Math.random().toString(36).slice(2),
                    text: entry.text,
                    href: entry.href,
                    ts: now,
                    count: 1,
                    startedAt: now,
                    kind: 'nav'
                };
                const next = [
                    item,
                    ...list
                ].slice(0, 30);
                localStorage.setItem(RECENT_KEY, JSON.stringify(next));
                localStorage.removeItem(CURRENT_ACT_KEY);
                window.dispatchEvent(new CustomEvent('recent-activity', {
                    detail: item
                }));
                return;
            }
            // Chat-type activity: append to existing current activity if present; else create new
            const currentRaw = localStorage.getItem(CURRENT_ACT_KEY);
            // Respect inactivity timeout: 15 minutes
            const ACTIVE_TIMEOUT = 15 * 60 * 1000;
            let currentId = null;
            let curObj = currentRaw ? JSON.parse(currentRaw) : null;
            try {
                curObj = currentRaw ? JSON.parse(currentRaw) : null;
            } catch (e) {
                curObj = null;
            }
            var _curObj_updatedAt, _ref;
            if (curObj && now - ((_ref = (_curObj_updatedAt = curObj.updatedAt) !== null && _curObj_updatedAt !== void 0 ? _curObj_updatedAt : curObj.startedAt) !== null && _ref !== void 0 ? _ref : 0) <= ACTIVE_TIMEOUT) {
                currentId = curObj.id || null;
            } else {
                // session expired or missing
                localStorage.removeItem(CURRENT_ACT_KEY);
                currentId = null;
            }
            if (currentId) {
                // find and update existing item
                const idx = list.findIndex((i)=>i.id === currentId);
                if (idx >= 0) {
                    var _curObj_startedAt, _list_idx_startedAt;
                    const updated = {
                        ...list[idx],
                        text: list[idx].text ? "".concat(list[idx].text, " | ").concat(entry.text) : entry.text,
                        ts: now,
                        count: (list[idx].count || 1) + 1,
                        startedAt: (_list_idx_startedAt = list[idx].startedAt) !== null && _list_idx_startedAt !== void 0 ? _list_idx_startedAt : (_curObj_startedAt = curObj === null || curObj === void 0 ? void 0 : curObj.startedAt) !== null && _curObj_startedAt !== void 0 ? _curObj_startedAt : now
                    };
                    const next = [
                        updated,
                        ...list.slice(0, idx),
                        ...list.slice(idx + 1)
                    ].slice(0, 30);
                    localStorage.setItem(RECENT_KEY, JSON.stringify(next));
                    try {
                        const cur = currentRaw ? JSON.parse(currentRaw) : null;
                        var _cur_startedAt;
                        localStorage.setItem(CURRENT_ACT_KEY, JSON.stringify({
                            id: updated.id,
                            startedAt: (_cur_startedAt = cur === null || cur === void 0 ? void 0 : cur.startedAt) !== null && _cur_startedAt !== void 0 ? _cur_startedAt : now,
                            updatedAt: now
                        }));
                    } catch (e) {}
                    window.dispatchEvent(new CustomEvent('recent-activity', {
                        detail: updated
                    }));
                    return;
                } else {
                    // fall through to create new if not found
                    localStorage.removeItem(CURRENT_ACT_KEY);
                }
            }
            const item = {
                id: String(now) + Math.random().toString(36).slice(2),
                text: entry.text,
                ts: now,
                count: 1,
                startedAt: now,
                kind: agentMode === 'createOrderAD' ? 'createOrder' : agentMode === 'inRouteAD' ? 'inRoute' : 'chat'
            };
            const next = [
                item,
                ...list
            ].slice(0, 30);
            localStorage.setItem(RECENT_KEY, JSON.stringify(next));
            localStorage.setItem(CURRENT_ACT_KEY, JSON.stringify({
                id: item.id,
                startedAt: now
            }));
            window.dispatchEvent(new CustomEvent('recent-activity', {
                detail: item
            }));
        } catch (e) {}
    };
    // Recent Activity (hero-search) — read list for on-page widget
    const [heroRecents, setHeroRecents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [recentsOpen, setRecentsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [recentsVisible, setRecentsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const openRecents = ()=>{
        setRecentsOpen(true);
        requestAnimationFrame(()=>setRecentsVisible(true));
    };
    const closeRecents = ()=>{
        setRecentsVisible(false);
        setTimeout(()=>setRecentsOpen(false), 300);
    };
    const [recentsFilter, setRecentsFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const filteredRecents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MainContent.useMemo[filteredRecents]": ()=>{
            const now = Date.now();
            const sevenDays = 7 * 24 * 60 * 60 * 1000;
            if (recentsFilter === 'focus') {
                return heroRecents.filter({
                    "MainContent.useMemo[filteredRecents]": (r)=>!r.href && (r.count || 1) > 1 && now - r.ts < sevenDays
                }["MainContent.useMemo[filteredRecents]"]);
            }
            if (recentsFilter === 'opps') {
                return heroRecents.filter({
                    "MainContent.useMemo[filteredRecents]": (r)=>(r.kind === 'nav' || !!r.href || r.kind === 'createOrder' || r.kind === 'inRoute') && now - r.ts < sevenDays
                }["MainContent.useMemo[filteredRecents]"]);
            }
            if (recentsFilter === 'awaiting') {
                return heroRecents.filter({
                    "MainContent.useMemo[filteredRecents]": (r)=>!r.href && now - r.ts < sevenDays
                }["MainContent.useMemo[filteredRecents]"]);
            }
            return heroRecents;
        }
    }["MainContent.useMemo[filteredRecents]"], [
        recentsFilter,
        heroRecents
    ]);
    // Start a brand new conversation: end current session and reset state
    const startNewConversation = ()=>{
        try {
            localStorage.removeItem(CURRENT_ACT_KEY);
        } catch (e) {}
        // clear chat UI state
        setAgentMode('none');
        setOrderStep(null);
        setInRouteStep(null);
        setAgentMessages([]);
        setQuery('');
        // reset order draft to defaults
        setOrderDraft({
            customerNumber: '',
            shipTo: '',
            items: [],
            quantities: [],
            warehouse: '',
            orderType: 'complete',
            shipMethod: 'delivery',
            requestDate: ''
        });
        setTimeout(()=>{
            var _textRef_current;
            return (_textRef_current = textRef.current) === null || _textRef_current === void 0 ? void 0 : _textRef_current.focus();
        }, 0);
    };
    // Listen for global request to open Recent Activity (from sidebar hamburger)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainContent.useEffect": ()=>{
            const handler = {
                "MainContent.useEffect.handler": ()=>openRecents()
            }["MainContent.useEffect.handler"];
            if ("TURBOPACK compile-time truthy", 1) {
                window.addEventListener('open-recent-activity', handler);
            }
            return ({
                "MainContent.useEffect": ()=>{
                    if ("TURBOPACK compile-time truthy", 1) {
                        window.removeEventListener('open-recent-activity', handler);
                    }
                }
            })["MainContent.useEffect"];
        }
    }["MainContent.useEffect"], []);
    // When user clicks Continue on an activity: resume flow (if any), close drawer, and focus input
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainContent.useEffect": ()=>{
            const handler = {
                "MainContent.useEffect.handler": (ev)=>{
                    let restored = false;
                    try {
                        var _detail;
                        const detailId = ((_detail = ev.detail) === null || _detail === void 0 ? void 0 : _detail.id) || null;
                        let id = detailId;
                        if (!id) {
                            try {
                                const cur = JSON.parse(localStorage.getItem(CURRENT_ACT_KEY) || 'null');
                                var _cur_id;
                                id = (_cur_id = cur === null || cur === void 0 ? void 0 : cur.id) !== null && _cur_id !== void 0 ? _cur_id : null;
                            } catch (e) {}
                        }
                        if (id) {
                            let flow = null;
                            try {
                                flow = JSON.parse(localStorage.getItem("".concat(FLOW_STATE_PREFIX).concat(id)) || 'null');
                            } catch (e) {}
                            if (flow && flow.kind === 'createOrder') {
                                setAgentMode('createOrderAD');
                                var _flow_step;
                                setOrderStep((_flow_step = flow.step) !== null && _flow_step !== void 0 ? _flow_step : 'askCustomer');
                                if (flow.order) setOrderDraft(flow.order);
                                if (flow.messages) setAgentMessages(flow.messages);
                                pushAssistant('Resumed your Create Order activity.');
                                restored = true;
                            } else if (flow && flow.kind === 'inRoute') {
                                setAgentMode('inRouteAD');
                                var _flow_inRouteStep;
                                setInRouteStep((_flow_inRouteStep = flow.inRouteStep) !== null && _flow_inRouteStep !== void 0 ? _flow_inRouteStep : 'askCustomer');
                                if (flow.messages) setAgentMessages(flow.messages);
                                pushAssistant('Resumed your In Route activity.');
                                restored = true;
                            } else if (flow && flow.kind === 'chat') {
                                setAgentMode('none');
                                if (flow.messages) setAgentMessages(flow.messages);
                                restored = true;
                            }
                        }
                    } catch (e) {}
                    if (!restored) {
                        pushAssistant("Can't resume this activity — no saved process. You can continue typing.");
                    }
                    closeRecents();
                    setTimeout({
                        "MainContent.useEffect.handler": ()=>{
                            try {
                                var _textRef_current;
                                (_textRef_current = textRef.current) === null || _textRef_current === void 0 ? void 0 : _textRef_current.focus();
                            } catch (e) {}
                        }
                    }["MainContent.useEffect.handler"], 320);
                }
            }["MainContent.useEffect.handler"];
            if ("TURBOPACK compile-time truthy", 1) window.addEventListener('continue-activity', handler);
            return ({
                "MainContent.useEffect": ()=>{
                    if ("TURBOPACK compile-time truthy", 1) window.removeEventListener('continue-activity', handler);
                }
            })["MainContent.useEffect"];
        }
    }["MainContent.useEffect"], []);
    // Auto-end chat session after 15 minutes of inactivity
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainContent.useEffect": ()=>{
            const ACTIVE_TIMEOUT = 15 * 60 * 1000;
            const t = setInterval({
                "MainContent.useEffect.t": ()=>{
                    try {
                        const cur = JSON.parse(localStorage.getItem(CURRENT_ACT_KEY) || 'null');
                        var _cur_updatedAt, _ref;
                        const last = cur ? (_ref = (_cur_updatedAt = cur.updatedAt) !== null && _cur_updatedAt !== void 0 ? _cur_updatedAt : cur.startedAt) !== null && _ref !== void 0 ? _ref : 0 : 0;
                        if (cur && Date.now() - last > ACTIVE_TIMEOUT) {
                            localStorage.removeItem(CURRENT_ACT_KEY);
                        }
                    } catch (e) {}
                }
            }["MainContent.useEffect.t"], 60 * 1000);
            return ({
                "MainContent.useEffect": ()=>clearInterval(t)
            })["MainContent.useEffect"];
        }
    }["MainContent.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainContent.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const load = {
                "MainContent.useEffect.load": ()=>{
                    try {
                        setHeroRecents(JSON.parse(localStorage.getItem(RECENT_KEY) || '[]'));
                    } catch (e) {
                        setHeroRecents([]);
                    }
                }
            }["MainContent.useEffect.load"];
            load();
            const onRecent = {
                "MainContent.useEffect.onRecent": ()=>load()
            }["MainContent.useEffect.onRecent"];
            const onStorage = {
                "MainContent.useEffect.onStorage": (e)=>{
                    if (e.key === RECENT_KEY) load();
                }
            }["MainContent.useEffect.onStorage"];
            window.addEventListener('recent-activity', onRecent);
            window.addEventListener('storage', onStorage);
            return ({
                "MainContent.useEffect": ()=>{
                    window.removeEventListener('recent-activity', onRecent);
                    window.removeEventListener('storage', onStorage);
                }
            })["MainContent.useEffect"];
        }
    }["MainContent.useEffect"], []);
    const [metrics, setMetrics] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        counts: {
            awaitingActions: 0,
            focusItems: 0,
            opportunities: 0
        },
        updatedAt: Date.now()
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainContent.useEffect": ()=>{
            const t = setTimeout({
                "MainContent.useEffect.t": ()=>{
                    const now = Date.now();
                    const sevenDays = 7 * 24 * 60 * 60 * 1000;
                    let awaiting = 0;
                    if (agentMode === 'createOrderAD' && orderStep && orderStep !== 'done') awaiting += 1;
                    if (agentMode === 'inRouteAD' && inRouteStep && inRouteStep !== 'done') awaiting += 1;
                    if (resumeDraft && agentMode === 'none') awaiting += 1;
                    const focus = heroRecents.filter({
                        "MainContent.useEffect.t": (r)=>!r.href && (r.count || 1) > 1 && now - r.ts < sevenDays
                    }["MainContent.useEffect.t"]).length;
                    const opp = heroRecents.filter({
                        "MainContent.useEffect.t": (r)=>(r.kind === 'nav' || !!r.href || r.kind === 'createOrder' || r.kind === 'inRoute') && now - r.ts < sevenDays
                    }["MainContent.useEffect.t"]).length;
                    setMetrics({
                        counts: {
                            awaitingActions: awaiting,
                            focusItems: focus,
                            opportunities: opp
                        },
                        updatedAt: now
                    });
                }
            }["MainContent.useEffect.t"], 250);
            return ({
                "MainContent.useEffect": ()=>clearTimeout(t)
            })["MainContent.useEffect"];
        }
    }["MainContent.useEffect"], [
        agentMode,
        orderStep,
        inRouteStep,
        resumeDraft,
        heroRecents
    ]);
    // Human friendly "ago" for tooltips
    const timeAgo = (t)=>{
        const s = Math.max(0, Math.floor((Date.now() - t) / 1000));
        if (s < 60) return "".concat(s, "s");
        const m = Math.floor(s / 60);
        if (m < 60) return "".concat(m, "m");
        const h = Math.floor(m / 60);
        if (h < 24) return "".concat(h, "h");
        const d = Math.floor(h / 24);
        return "".concat(d, "d");
    };
    const beginCreateOrderFlow = ()=>{
        setAgentMode('createOrderAD');
        setOrderStep('askCustomer');
        pushAssistant("Great — let's create an order in Ashley Direct. What is the customer number and ship-to? For example: 123456, 789012");
        // Record a single draft activity and persist immediately
        addRecent({
            text: 'Create Order: started (draft)'
        });
        saveDraft();
    };
    const beginInRouteFlow = ()=>{
        setAgentMode('inRouteAD');
        setInRouteStep('askCustomer');
        pushAssistant('Okay — for In Route Orders, provide a customer number, optionally followed by a ship-to. Example: 8888300 or 8888300, 480');
    };
    const navToInRouteWithPreset = (params)=>{
        var _externalRoutes_inroute;
        const base = (_externalRoutes_inroute = externalRoutes['inroute']) !== null && _externalRoutes_inroute !== void 0 ? _externalRoutes_inroute : '/apps/inroute';
        const url = "".concat(base, "?").concat(params.toString());
        if ("TURBOPACK compile-time truthy", 1) window.location.href = url;
        else //TURBOPACK unreachable
        ;
    };
    const handleInRouteInput = (input)=>{
        const q = input.trim();
        const nums = q.match(/\d+/g) || [];
        if (nums.length >= 2) {
            const customer = String(nums[0]);
            const shipTo = String(nums[1]);
            const p = new URLSearchParams({
                customer,
                shipTo
            });
            addRecent({
                text: "In Route Orders: customer ".concat(customer, ", ship-to ").concat(shipTo),
                href: "/apps/inroute?customer=".concat(customer, "&shipTo=").concat(shipTo)
            });
            pushAssistant('Showing trips in route for the provided ship-to. Redirecting...');
            navToInRouteWithPreset(p);
            setInRouteStep('done');
            return;
        }
        if (nums.length >= 1) {
            const customer = String(nums[0]);
            const p = new URLSearchParams({
                customer
            });
            addRecent({
                text: "In Route Orders: customer ".concat(customer),
                href: "/apps/inroute?customer=".concat(customer)
            });
            pushAssistant('Showing trips in route for the customer. Redirecting...');
            navToInRouteWithPreset(p);
            setInRouteStep('done');
            return;
        }
        pushAssistant('Please provide a customer number, optionally followed by a ship-to. Example: 8888300 or 8888300, 480');
    };
    const navToAshleyDirectWithPreset = (params)=>{
        var _externalRoutes_createorder;
        const base = (_externalRoutes_createorder = externalRoutes['createorder']) !== null && _externalRoutes_createorder !== void 0 ? _externalRoutes_createorder : '/apps/createorder';
        const url = "".concat(base, "?").concat(params.toString());
        if ("TURBOPACK compile-time truthy", 1) window.location.href = url;
        else //TURBOPACK unreachable
        ;
    };
    const handleOrderInput = (input)=>{
        const q = input.trim();
        if (orderStep === 'askCustomer') {
            const nums = q.match(/\d+/g) || [];
            if (nums.length >= 2) {
                setOrderDraft((d)=>({
                        ...d,
                        customerNumber: String(nums[0]),
                        shipTo: String(nums[1])
                    }));
                setOrderStep('askItems');
                pushAssistant('Got it. Please enter the item numbers (comma or space separated).');
            } else {
                pushAssistant('Please provide both customer number and ship-to. Example: 123456, 789012');
            }
            return;
        }
        if (orderStep === 'askItems') {
            const items = q.split(/[\s,]+/).map((s)=>s.trim()).filter(Boolean);
            if (items.length > 0) {
                setOrderDraft((d)=>({
                        ...d,
                        items
                    }));
                setOrderStep('askQty');
                pushAssistant("Enter quantity for each item (".concat(items.join(', '), "). Example: ").concat(items.map(()=>1).join(', ')));
            } else {
                pushAssistant('Please enter at least one item number, separated by commas or spaces.');
            }
            return;
        }
        if (orderStep === 'askQty') {
            const qty = (q.match(/\d+/g) || []).map((n)=>parseInt(n, 10)).filter((n)=>Number.isFinite(n));
            const count = orderDraft.items.length;
            if (qty.length === count && qty.every((n)=>n > 0)) {
                setOrderDraft((d)=>({
                        ...d,
                        quantities: qty
                    }));
                setOrderStep('askOrderType');
                pushAssistant('Order type? Say "Ship Complete Series Groups" or "Ship Items As Available".');
            } else {
                pushAssistant("Please provide ".concat(count, " positive quantities, one per item, in the same order. Example: ").concat(orderDraft.items.map(()=>1).join(', ')));
            }
            return;
        }
        if (orderStep === 'askOrderType') {
            const lc = q.toLowerCase();
            const ot = lc.includes('complete') ? 'complete' : lc.includes('available') ? 'available' : null;
            if (ot) {
                setOrderDraft((d)=>({
                        ...d,
                        orderType: ot
                    }));
                setOrderStep('askShipType');
                pushAssistant('Shipping type? Delivery, Full Truckload Pickup, Ashley Express, or Less Than Full Truckload/Carrier (LTL)?');
            } else {
                pushAssistant('Please choose order type: "Ship Complete Series Groups" or "Ship Items As Available".');
            }
            return;
        }
        if (orderStep === 'askShipType') {
            const lc = q.toLowerCase();
            let sm = null;
            if (lc.includes('delivery')) sm = 'delivery';
            else if (lc.includes('full')) sm = 'full';
            else if (lc.includes('express')) sm = 'express';
            else if (lc.includes('ltl') || lc.includes('less')) sm = 'ltl';
            if (sm) {
                setOrderDraft((d)=>({
                        ...d,
                        shipMethod: sm
                    }));
                setOrderStep('askRequestDate');
                pushAssistant('What is the request date? You can say "today" or provide YYYY-MM-DD.');
            } else {
                pushAssistant('Please select a shipping type: Delivery, Full Truckload Pickup, Ashley Express, or Less Than Full Truckload/Carrier.');
            }
            return;
        }
        if (orderStep === 'askRequestDate') {
            const lc = q.toLowerCase();
            let dateStr = '';
            if (lc === 'today' || lc === 'now') {
                dateStr = new Date().toISOString().slice(0, 10);
            } else {
                const m = q.match(/(\d{4})[-\\/](\d{1,2})[-\\/](\d{1,2})/);
                if (m) {
                    const yyyy = m[1].padStart(4, '0');
                    const mm = m[2].padStart(2, '0');
                    const dd = m[3].padStart(2, '0');
                    dateStr = "".concat(yyyy, "-").concat(mm, "-").concat(dd);
                }
            }
            if (dateStr) {
                setOrderDraft((d)=>({
                        ...d,
                        requestDate: dateStr
                    }));
                setOrderStep('askWarehouse');
                pushAssistant('Which warehouse would you like to use? For example: ADVANCE NC');
            } else {
                pushAssistant('Please enter a valid date like 2025-09-18 or say "today".');
            }
            return;
        }
        if (orderStep === 'askWarehouse') {
            const warehouse = q;
            if (warehouse) {
                setOrderDraft((d)=>({
                        ...d,
                        warehouse
                    }));
                setOrderStep('confirm');
                const p = new URLSearchParams({
                    customer: orderDraft.customerNumber,
                    shipTo: orderDraft.shipTo,
                    items: orderDraft.items.join(','),
                    qty: orderDraft.quantities.join(','),
                    warehouse,
                    orderType: orderDraft.orderType,
                    shipMethod: orderDraft.shipMethod,
                    requestDate: orderDraft.requestDate
                });
                pushAssistant('Perfect. Redirecting to the Order Entry page with your order prefilled...');
                navToAshleyDirectWithPreset(p);
                setOrderStep('done');
            } else {
                pushAssistant('Please provide a warehouse name.');
            }
            return;
        }
    };
    const looksLikeQuestion = (q)=>/how|what|when|who|why|which|where|count|number|total|show|list/i.test(q);
    const generateFollowUp = (q)=>{
        const hasOrders = /order/i.test(q);
        const hasAD = /ashley\s*direct|ashleydirect/i.test(q);
        const hasTime = /(today|yesterday|week|month|year|last|past|between|\d{4})/i.test(q);
        if (hasOrders && hasAD && !hasTime) {
            return 'Over what timeframe should I check orders created through Ashley Direct? For example: today, last 7 days, or last month.';
        }
        if (!hasTime && looksLikeQuestion(q)) {
            return 'Got it. What timeframe should I use? (e.g., today, last 30 days) You can also add filters like department or user.';
        }
        return 'Could you clarify the timeframe or any filters I should use?';
    };
    const send = ()=>{
        const q = query.trim();
        if (!q) return;
        // Show user message immediately
        pushUser(q);
        // Record in recent activity for home sidebar
        addRecent({
            text: q
        });
        // If we're already in a flow, handle this step
        if (agentMode === 'createOrderAD' && orderStep) {
            handleOrderInput(q);
            setQuery('');
            return;
        }
        if (agentMode === 'inRouteAD' && inRouteStep) {
            handleInRouteInput(q);
            setQuery('');
            return;
        }
        // Intent: start conversational flows
        const isCreateOrderFlow = /(order entry|create my order|create\s+order|new\s+order)/i.test(q);
        if (isCreateOrderFlow) {
            beginCreateOrderFlow();
            setQuery('');
            return;
        }
        const isInRouteFlow = /(in\s*route\s*orders?|inroute\s*orders?|in\s*route\s*order|trips?\s*in\s*route)/i.test(q);
        if (isInRouteFlow) {
            beginInRouteFlow();
            setQuery('');
            return;
        }
        // Otherwise, try app navigation shortcut
        const match = findBestApp(q);
        if (match) {
            setQuery('');
            go(match.id);
            return;
        }
        // Generic follow-up for analytics-style queries
        const follow = generateFollowUp(q);
        pushAssistant(follow);
        setQuery('');
    };
    const handleQuickReply = (t)=>{
        // Treat quick replies as immediate user answers
        pushUser(t);
        if (agentMode === 'createOrderAD' && orderStep) {
            handleOrderInput(String(t));
        } else {
            setQuery(String(t));
        }
        setTimeout(()=>{
            var _textRef_current;
            return (_textRef_current = textRef.current) === null || _textRef_current === void 0 ? void 0 : _textRef_current.focus();
        }, 0);
    };
    const startVoice = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SR) {
            alert('Voice recognition is not supported in this browser.');
            return;
        }
        const rec = new SR();
        rec.lang = 'en-US';
        rec.interimResults = false;
        rec.maxAlternatives = 1;
        setListening(true);
        rec.onresult = (ev)=>{
            var _ev_results__, _ev_results_, _ev_results;
            const t = (ev === null || ev === void 0 ? void 0 : (_ev_results = ev.results) === null || _ev_results === void 0 ? void 0 : (_ev_results_ = _ev_results[0]) === null || _ev_results_ === void 0 ? void 0 : (_ev_results__ = _ev_results_[0]) === null || _ev_results__ === void 0 ? void 0 : _ev_results__.transcript) || '';
            const q = String(t).trim();
            setQuery(q);
            const match = findBestApp(q);
            if (match) go(match.id);
        };
        rec.onerror = ()=>setListening(false);
        rec.onend = ()=>setListening(false);
        rec.start();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold text-gray-900 mb-4",
                        children: "Welcome to One Ashley Super Agent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/MainContent.tsx",
                        lineNumber: 961,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-gray-700 mb-8",
                        children: "Ask anything, create anything"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/MainContent.tsx",
                        lineNumber: 965,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8 flex justify-center gap-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-3xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-2xl border border-gray-200 shadow-lg p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between gap-3 px-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: startNewConversation,
                                                title: "New Conversation",
                                                className: "w-9 h-9 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PlusIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusIcon$3e$__["PlusIcon"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/MainContent.tsx",
                                                    lineNumber: 976,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/MainContent.tsx",
                                                lineNumber: 975,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 grid grid-cols-1 sm:grid-cols-3 gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-center cursor-pointer hover:bg-gray-100",
                                                        title: "Last updated ".concat(timeAgo(metrics.updatedAt), " ago"),
                                                        onClick: ()=>{
                                                            setRecentsFilter('awaiting');
                                                            openRecents();
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[12px] font-semibold text-gray-700",
                                                                children: "Awaiting Actions"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/MainContent.tsx",
                                                                lineNumber: 984,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-emerald-600 font-bold",
                                                                "aria-live": "polite",
                                                                children: metrics.counts.awaitingActions
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/MainContent.tsx",
                                                                lineNumber: 985,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/layout/MainContent.tsx",
                                                        lineNumber: 979,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-center cursor-pointer hover:bg-gray-100",
                                                        title: "Last updated ".concat(timeAgo(metrics.updatedAt), " ago"),
                                                        onClick: ()=>{
                                                            setRecentsFilter('focus');
                                                            openRecents();
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[12px] font-semibold text-gray-700",
                                                                children: "Focus Items"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/MainContent.tsx",
                                                                lineNumber: 992,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-amber-600 font-bold",
                                                                "aria-live": "polite",
                                                                children: metrics.counts.focusItems
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/MainContent.tsx",
                                                                lineNumber: 993,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/layout/MainContent.tsx",
                                                        lineNumber: 987,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-center cursor-pointer hover:bg-gray-100",
                                                        title: "Last updated ".concat(timeAgo(metrics.updatedAt), " ago"),
                                                        onClick: ()=>{
                                                            setRecentsFilter('opps');
                                                            openRecents();
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[12px] font-semibold text-gray-700",
                                                                children: "Opportunities"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/MainContent.tsx",
                                                                lineNumber: 1000,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-orange-600 font-bold",
                                                                "aria-live": "polite",
                                                                children: metrics.counts.opportunities
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/MainContent.tsx",
                                                                lineNumber: 1001,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/layout/MainContent.tsx",
                                                        lineNumber: 995,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/MainContent.tsx",
                                                lineNumber: 978,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "w-9 h-9 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightIcon$3e$__["ArrowRightIcon"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/MainContent.tsx",
                                                    lineNumber: 1005,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/MainContent.tsx",
                                                lineNumber: 1004,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/MainContent.tsx",
                                        lineNumber: 974,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        ref: textRef,
                                                        rows: 3,
                                                        "data-testid": "hero-search",
                                                        placeholder: "Hey Wanek, Cameron how can I help you",
                                                        value: query,
                                                        onChange: onChangeQuery,
                                                        onKeyDown: onKeyDown,
                                                        className: "block w-full min-h-20 px-5 pr-28 py-3 text-[15px] leading-6 text-gray-900 placeholder-gray-400 bg-transparent border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--ring)] resize-none overflow-hidden"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/MainContent.tsx",
                                                        lineNumber: 1013,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: "p-1.5 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PaperClipIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PaperClipIcon$3e$__["PaperClipIcon"], {
                                                                    className: "w-5 h-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/MainContent.tsx",
                                                                    lineNumber: 1027,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/MainContent.tsx",
                                                                lineNumber: 1026,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: startVoice,
                                                                "aria-pressed": listening,
                                                                className: "p-1.5 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MicrophoneIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicrophoneIcon$3e$__["MicrophoneIcon"], {
                                                                    className: "w-5 h-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/MainContent.tsx",
                                                                    lineNumber: 1030,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/MainContent.tsx",
                                                                lineNumber: 1029,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: send,
                                                                className: "p-1.5 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PaperAirplaneIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PaperAirplaneIcon$3e$__["PaperAirplaneIcon"], {
                                                                    className: "w-5 h-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/MainContent.tsx",
                                                                    lineNumber: 1033,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/MainContent.tsx",
                                                                lineNumber: 1032,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/layout/MainContent.tsx",
                                                        lineNumber: 1025,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/MainContent.tsx",
                                                lineNumber: 1012,
                                                columnNumber: 15
                                            }, this),
                                            resumeDraft && agentMode === 'none' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 flex items-center justify-between rounded-lg border border-amber-300 bg-amber-50 px-3 py-2 text-amber-900",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm",
                                                        children: [
                                                            "Create Order draft in progress \x14 last updated ",
                                                            new Date(resumeDraft.updatedAt).toLocaleTimeString([], {
                                                                hour: '2-digit',
                                                                minute: '2-digit'
                                                            })
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/layout/MainContent.tsx",
                                                        lineNumber: 1041,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: resumeFromDraft,
                                                                className: "px-3 py-1 rounded-md bg-amber-600 text-white text-xs hover:bg-amber-700",
                                                                children: "Resume"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/MainContent.tsx",
                                                                lineNumber: 1045,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: discardDraft,
                                                                className: "px-3 py-1 rounded-md border border-amber-300 bg-white text-amber-800 text-xs hover:bg-amber-100",
                                                                children: "Discard"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/MainContent.tsx",
                                                                lineNumber: 1046,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/layout/MainContent.tsx",
                                                        lineNumber: 1044,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/MainContent.tsx",
                                                lineNumber: 1040,
                                                columnNumber: 19
                                            }, this),
                                            filtered.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "mt-2 z-20 bg-white rounded-xl shadow-lg ring-1 ring-gray-200 overflow-hidden",
                                                children: filtered.map((a, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: "w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-gray-50 ".concat(i === active ? 'bg-gray-50' : ''),
                                                            onMouseDown: (e)=>{
                                                                e.preventDefault();
                                                                go(a.id);
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-7 h-7 rounded-md brand-soft brand-text flex items-center justify-center text-xs font-semibold",
                                                                    children: a.title.split(' ').map((w)=>w[0]).join('').slice(0, 3).toUpperCase()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/MainContent.tsx",
                                                                    lineNumber: 1062,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm text-gray-900",
                                                                    children: a.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/MainContent.tsx",
                                                                    lineNumber: 1066,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/layout/MainContent.tsx",
                                                            lineNumber: 1057,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, a.id, false, {
                                                        fileName: "[project]/src/components/layout/MainContent.tsx",
                                                        lineNumber: 1056,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/MainContent.tsx",
                                                lineNumber: 1054,
                                                columnNumber: 17
                                            }, this),
                                            agentMessages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 rounded-xl border border-gray-200 bg-white",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4 space-y-2",
                                                    children: [
                                                        agentMessages.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm ".concat(m.role === 'assistant' ? 'text-gray-900' : 'text-gray-700'),
                                                                children: m.content
                                                            }, i, false, {
                                                                fileName: "[project]/src/components/layout/MainContent.tsx",
                                                                lineNumber: 1078,
                                                                columnNumber: 23
                                                            }, this)),
                                                        ((_agentMessages_ = agentMessages[agentMessages.length - 1]) === null || _agentMessages_ === void 0 ? void 0 : _agentMessages_.role) === 'assistant' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "pt-1 flex flex-wrap gap-2",
                                                            children: [
                                                                'Today',
                                                                'Last 7 days',
                                                                'Last 30 days'
                                                            ].map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>handleQuickReply(q),
                                                                    className: "px-2.5 py-1.5 text-xs rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50",
                                                                    children: q
                                                                }, q, false, {
                                                                    fileName: "[project]/src/components/layout/MainContent.tsx",
                                                                    lineNumber: 1084,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/MainContent.tsx",
                                                            lineNumber: 1082,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/layout/MainContent.tsx",
                                                    lineNumber: 1076,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/MainContent.tsx",
                                                lineNumber: 1075,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserIcon$3e$__["UserIcon"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/MainContent.tsx",
                                                                lineNumber: 1104,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Personalize",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$LinkIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LinkIcon$3e$__["LinkIcon"], {
                                                                className: "w-4 h-4 text-gray-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/MainContent.tsx",
                                                                lineNumber: 1106,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/layout/MainContent.tsx",
                                                        lineNumber: 1103,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                        fileName: "[project]/src/components/layout/MainContent.tsx",
                                                        lineNumber: 1108,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/MainContent.tsx",
                                                lineNumber: 1102,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/MainContent.tsx",
                                        lineNumber: 1011,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/MainContent.tsx",
                                lineNumber: 972,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/MainContent.tsx",
                            lineNumber: 971,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/MainContent.tsx",
                        lineNumber: 970,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/MainContent.tsx",
                lineNumber: 960,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto",
                children: [
                    SHOW_AI_GRID && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8",
                        children: aiAgents.map((agent)=>{
                            const IconComponent = agent.icon;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative bg-white rounded-xl p-4 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all cursor-pointer group",
                                children: [
                                    agent.isNew && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full",
                                        children: "NEW"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/MainContent.tsx",
                                        lineNumber: 1131,
                                        columnNumber: 21
                                    }, this),
                                    agent.isHot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full",
                                        children: "HOT"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/MainContent.tsx",
                                        lineNumber: 1136,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 rounded-lg brand-soft brand-text flex items-center justify-center mb-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/MainContent.tsx",
                                            lineNumber: 1141,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/MainContent.tsx",
                                        lineNumber: 1140,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-medium text-gray-900 mb-1",
                                        children: agent.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/MainContent.tsx",
                                        lineNumber: 1144,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500",
                                        children: agent.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/MainContent.tsx",
                                        lineNumber: 1145,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, agent.id, true, {
                                fileName: "[project]/src/components/layout/MainContent.tsx",
                                lineNumber: 1129,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/MainContent.tsx",
                        lineNumber: 1125,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex flex-wrap items-center justify-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 hover:bg-gray-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$AcademicCapIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AcademicCapIcon$3e$__["AcademicCapIcon"], {
                                        className: "w-5 h-5 text-gray-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/MainContent.tsx",
                                        lineNumber: 1155,
                                        columnNumber: 13
                                    }, this),
                                    "Learn"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/MainContent.tsx",
                                lineNumber: 1154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 hover:bg-gray-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PencilSquareIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PencilSquareIcon$3e$__["PencilSquareIcon"], {
                                        className: "w-5 h-5 text-gray-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/MainContent.tsx",
                                        lineNumber: 1159,
                                        columnNumber: 13
                                    }, this),
                                    "Create"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/MainContent.tsx",
                                lineNumber: 1158,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 hover:bg-gray-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChartBarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartBarIcon$3e$__["ChartBarIcon"], {
                                        className: "w-5 h-5 text-gray-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/MainContent.tsx",
                                        lineNumber: 1163,
                                        columnNumber: 13
                                    }, this),
                                    "Analyze"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/MainContent.tsx",
                                lineNumber: 1162,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 hover:bg-gray-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$AdjustmentsHorizontalIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AdjustmentsHorizontalIcon$3e$__["AdjustmentsHorizontalIcon"], {
                                        className: "w-5 h-5 text-gray-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/MainContent.tsx",
                                        lineNumber: 1167,
                                        columnNumber: 13
                                    }, this),
                                    "Optimize"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/MainContent.tsx",
                                lineNumber: 1166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 hover:bg-gray-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$WrenchScrewdriverIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WrenchScrewdriverIcon$3e$__["WrenchScrewdriverIcon"], {
                                        className: "w-5 h-5 text-gray-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/MainContent.tsx",
                                        lineNumber: 1171,
                                        columnNumber: 13
                                    }, this),
                                    "Troubleshoot"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/MainContent.tsx",
                                lineNumber: 1170,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/MainContent.tsx",
                        lineNumber: 1153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2",
                        ref: forYouAnchorRef,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ForYouSmoove, {
                            onSpaceAvailable: handleSpaceAvailable,
                            onExtraSpace: setForYouExtraAfterFirstRow
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/MainContent.tsx",
                            lineNumber: 1180,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/MainContent.tsx",
                        lineNumber: 1179,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-foryou-space": forYouSpace.available ? 'avail' : 'no',
                        style: {
                            marginTop: atTop ? -forYouExtraAfterFirstRow : 0,
                            transition: 'margin-top 400ms ease'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$AshleyNews$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/layout/MainContent.tsx",
                            lineNumber: 1185,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/MainContent.tsx",
                        lineNumber: 1184,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ServiceNowIncidents$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/components/layout/MainContent.tsx",
                        lineNumber: 1189,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$AdCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/components/layout/MainContent.tsx",
                        lineNumber: 1192,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/MainContent.tsx",
                lineNumber: 1123,
                columnNumber: 7
            }, this),
            recentsOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/30 transition-opacity duration-300 ".concat(recentsVisible ? 'opacity-100' : 'opacity-0'),
                        onClick: closeRecents
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/MainContent.tsx",
                        lineNumber: 1198,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-0 top-0 h-full w-80 bg-white shadow-2xl border-r border-gray-200 flex flex-col transform transition-transform duration-300 ".concat(recentsVisible ? 'translate-x-0' : '-translate-x-full'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-3 border-b border-gray-200 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base font-semibold text-gray-900",
                                        children: "Recent Activity"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/MainContent.tsx",
                                        lineNumber: 1201,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: closeRecents,
                                        className: "p-1 rounded hover:bg-gray-100",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$XMarkIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XMarkIcon$3e$__["XMarkIcon"], {
                                            className: "w-5 h-5 text-gray-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/MainContent.tsx",
                                            lineNumber: 1203,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/MainContent.tsx",
                                        lineNumber: 1202,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/MainContent.tsx",
                                lineNumber: 1200,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto p-3",
                                children: filteredRecents.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-500",
                                    children: "No recent items yet. Try the big search box to get started."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/MainContent.tsx",
                                    lineNumber: 1208,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "divide-y divide-gray-100",
                                    children: filteredRecents.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "py-2 text-[13px] flex items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mt-1 inline-block w-1.5 h-1.5 rounded-full bg-indigo-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/MainContent.tsx",
                                                    lineNumber: 1213,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        r.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: r.href,
                                                            onClick: ()=>{
                                                                closeRecents();
                                                                setTimeout(()=>{
                                                                    try {
                                                                        var _textRef_current;
                                                                        (_textRef_current = textRef.current) === null || _textRef_current === void 0 ? void 0 : _textRef_current.focus();
                                                                    } catch (e) {}
                                                                }, 320);
                                                            },
                                                            className: "text-indigo-600 hover:underline break-words",
                                                            children: r.text
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/MainContent.tsx",
                                                            lineNumber: 1216,
                                                            columnNumber: 27
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-800 break-words",
                                                            children: r.text
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/MainContent.tsx",
                                                            lineNumber: 1224,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-1 flex items-center gap-2",
                                                            children: [
                                                                r.count && r.count > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "inline-flex items-center justify-center px-1.5 h-5 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-semibold",
                                                                    children: [
                                                                        r.count,
                                                                        " msgs"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/layout/MainContent.tsx",
                                                                    lineNumber: 1228,
                                                                    columnNumber: 29
                                                                }, this),
                                                                !r.href && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>continueActivity(r.id),
                                                                    className: "text-[11px] text-indigo-600 hover:underline",
                                                                    title: "Continue this activity",
                                                                    children: "Continue"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/MainContent.tsx",
                                                                    lineNumber: 1233,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/layout/MainContent.tsx",
                                                            lineNumber: 1226,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/layout/MainContent.tsx",
                                                    lineNumber: 1214,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-2 shrink-0 text-[10px] text-gray-500",
                                                    title: "Started: ".concat(new Date(r.startedAt || r.ts).toLocaleString(), " | Updated: ").concat(new Date(r.ts).toLocaleString()),
                                                    children: new Date(r.ts).toLocaleTimeString([], {
                                                        hour: '2-digit',
                                                        minute: '2-digit'
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/MainContent.tsx",
                                                    lineNumber: 1244,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, r.id, true, {
                                            fileName: "[project]/src/components/layout/MainContent.tsx",
                                            lineNumber: 1212,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/MainContent.tsx",
                                    lineNumber: 1210,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/MainContent.tsx",
                                lineNumber: 1206,
                                columnNumber: 13
                            }, this),
                            filteredRecents.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-3 py-2 border-t border-gray-200",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        localStorage.removeItem(RECENT_KEY);
                                        localStorage.removeItem(CURRENT_ACT_KEY);
                                        setHeroRecents([]);
                                    },
                                    className: "text-[11px] text-indigo-600 hover:underline",
                                    children: "Clear"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/MainContent.tsx",
                                    lineNumber: 1257,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/MainContent.tsx",
                                lineNumber: 1256,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/MainContent.tsx",
                        lineNumber: 1199,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/MainContent.tsx",
                lineNumber: 1197,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/MainContent.tsx",
        lineNumber: 958,
        columnNumber: 5
    }, this);
}
_s(MainContent, "tomj44jsrkzF3LVUPqztVzWb+jU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c1 = MainContent;
var _c, _c1;
__turbopack_context__.k.register(_c, "ForYouSmoove");
__turbopack_context__.k.register(_c1, "MainContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/catalog.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"id\":\"ashleydirect\",\"title\":\"Ashley Direct\",\"image\":\"\",\"icon\":\"Squares2X2Icon\",\"accentStart\":\"#fef3c7\",\"accentEnd\":\"#fde68a\"},{\"id\":\"ashleynet\",\"title\":\"Ashley Net\",\"image\":\"\",\"icon\":\"BuildingOfficeIcon\",\"accentStart\":\"#e0f2fe\",\"accentEnd\":\"#bae6fd\"},{\"id\":\"supplier\",\"title\":\"Supplier\",\"image\":\"\",\"icon\":\"TruckIcon\",\"accentStart\":\"#ede9fe\",\"accentEnd\":\"#ddd6fe\"},{\"id\":\"hr\",\"title\":\"HR\",\"image\":\"\",\"icon\":\"UserGroupIcon\",\"accentStart\":\"#dcfce7\",\"accentEnd\":\"#bbf7d0\"},{\"id\":\"payroll\",\"title\":\"Payroll\",\"image\":\"\",\"icon\":\"CurrencyDollarIcon\",\"accentStart\":\"#ccfbf1\",\"accentEnd\":\"#99f6e4\"},{\"id\":\"finance\",\"title\":\"Finance\",\"image\":\"\",\"icon\":\"ChartBarIcon\",\"accentStart\":\"#fee2e2\",\"accentEnd\":\"#fecaca\"},{\"id\":\"transportation\",\"title\":\"Transportation\",\"image\":\"\",\"icon\":\"TruckIcon\",\"accentStart\":\"#ffedd5\",\"accentEnd\":\"#fed7aa\"},{\"id\":\"as400\",\"title\":\"AS400\",\"image\":\"\",\"icon\":\"ServerIcon\",\"accentStart\":\"#e5e7eb\",\"accentEnd\":\"#d1d5db\"},{\"id\":\"highjump\",\"title\":\"High Jump\",\"image\":\"\",\"icon\":\"CubeIcon\",\"accentStart\":\"#e0e7ff\",\"accentEnd\":\"#c7d2fe\"},{\"id\":\"moreapps\",\"title\":\"More Apps\",\"image\":\"\",\"icon\":\"SquaresPlusIcon\",\"accentStart\":\"#f5f3ff\",\"accentEnd\":\"#ede9fe\"},{\"id\":\"adm-safety\",\"title\":\"ADM Safety\"},{\"id\":\"adm-ops-brokerage\",\"title\":\"ADM-OPS Brokerage\"},{\"id\":\"aft-international-sales\",\"title\":\"AFT International Sales\"},{\"id\":\"aft-supply-chain-plan\",\"title\":\"AFT Supply Chain Plan\"},{\"id\":\"agr-business-intelligence\",\"title\":\"AGR Business Intelligence\"},{\"id\":\"agr-finance\",\"title\":\"AGR Finance\"},{\"id\":\"agr-hr\",\"title\":\"AGR HR\"},{\"id\":\"agr-recruiting\",\"title\":\"AGR Recruiting\"},{\"id\":\"ashcomm-operations\",\"title\":\"ASHCOMM OPERATIONS\"},{\"id\":\"adm-hr-recruiting-ads\",\"title\":\"Adm HR Recruiting, ADS\"},{\"id\":\"ashcomm-it\",\"title\":\"Ashcomm IT\"},{\"id\":\"ashcomm-it8\",\"title\":\"Ashcomm IT8\"},{\"id\":\"ashcomm-operations-2\",\"title\":\"Ashcomm Operations\"},{\"id\":\"cgi-department\",\"title\":\"CGI Department\"},{\"id\":\"content-department\",\"title\":\"Content Department\"},{\"id\":\"corporate-health-and-safety\",\"title\":\"Corporate Health & Safety\"},{\"id\":\"corporate-human-resources\",\"title\":\"Corporate Human Resources\"},{\"id\":\"customer-care-it\",\"title\":\"Customer Care IT\"},{\"id\":\"distribution-center-automation-strategy\",\"title\":\"Distribution Center Automation Strategy\"},{\"id\":\"ecm-merchandising\",\"title\":\"ECM Merchandising\"},{\"id\":\"ecommerce-marketing-it\",\"title\":\"Ecommerce Marketing IT\"},{\"id\":\"ecommerce-merchandising\",\"title\":\"Ecommerce Merchandising\"},{\"id\":\"gcc-administration\",\"title\":\"GCC - Administration\"},{\"id\":\"gcc-finance\",\"title\":\"GCC - Finance\"},{\"id\":\"gcc-it\",\"title\":\"GCC - IT\"},{\"id\":\"gcc-service-delivery\",\"title\":\"GCC - Service Delivery\"},{\"id\":\"gcc-sourcing\",\"title\":\"GCC - Sourcing\"},{\"id\":\"gcc-hr\",\"title\":\"GCC-HR\"},{\"id\":\"homst-marketing\",\"title\":\"HOMST Marketing\"},{\"id\":\"hr-learning-development\",\"title\":\"HR Learning & Development\"},{\"id\":\"hs-construction-design\",\"title\":\"HS Construction Design\"},{\"id\":\"hs-it-professional-service\",\"title\":\"HS IT Professional Service\"},{\"id\":\"it-ads\",\"title\":\"IT ADS\"},{\"id\":\"it-ashley-innovation\",\"title\":\"IT Ashley Innovation\"},{\"id\":\"it-business-intelligence\",\"title\":\"IT Business Intelligence\"},{\"id\":\"it-corporate-center\",\"title\":\"IT Corporate Center\"},{\"id\":\"it-corporate-sales-systems\",\"title\":\"IT Corporate Sales Systems\"},{\"id\":\"it-cyber-security\",\"title\":\"IT Cyber Security\"},{\"id\":\"it-edi\",\"title\":\"IT EDI\"},{\"id\":\"it-enterprise-data-management\",\"title\":\"IT ENTERPRISE DATA MANAGEMENT\"},{\"id\":\"it-enterprise-data-management-2\",\"title\":\"IT Enterprise Data Management\"},{\"id\":\"it-gsm-gtm\",\"title\":\"IT GSM & GTM\"},{\"id\":\"it-global-infrastructure\",\"title\":\"IT Global Infrastructure\"},{\"id\":\"it-global-support-services\",\"title\":\"IT Global Support Services\"},{\"id\":\"it-information-risk-management\",\"title\":\"IT Information Risk Mngmt\"},{\"id\":\"it-logistics\",\"title\":\"IT Logistics\"},{\"id\":\"it-manufacturing\",\"title\":\"IT Manufacturing\"},{\"id\":\"it-order-management\",\"title\":\"IT Order Management\"},{\"id\":\"it-product-systems\",\"title\":\"IT Product Systems\"},{\"id\":\"it-service-management-tools\",\"title\":\"IT Service Management & Tools\"},{\"id\":\"it-supply-planning\",\"title\":\"IT Supply Planning\"},{\"id\":\"india-sales-sourcing\",\"title\":\"India Sales - Sourcing\"},{\"id\":\"international-payroll\",\"title\":\"International Payroll\"},{\"id\":\"marketing-ecm\",\"title\":\"Marketing, ECM\"},{\"id\":\"natl-online-sales-dept\",\"title\":\"Natl Online-Sales Dept\"},{\"id\":\"rkd-credit\",\"title\":\"RKD Credit\"},{\"id\":\"rkd-customer-service-corp-hs\",\"title\":\"RKD Cust Serv Corp HS\"},{\"id\":\"rkd-ecommerce-accounting\",\"title\":\"RKD Ecommerce Acctg.\"},{\"id\":\"rkd-international-sales\",\"title\":\"RKD International Sales\"},{\"id\":\"rkd-legal\",\"title\":\"RKD Legal\"},{\"id\":\"rkd-reporting-plan-metric\",\"title\":\"RKD Reporting, Plan/Metric\"},{\"id\":\"recruiting\",\"title\":\"Recruiting\"},{\"id\":\"reguard\",\"title\":\"Reguard\"},{\"id\":\"wholesale-customer-service\",\"title\":\"Wholesale Customer Service\"}]"));}),
"[project]/src/components/layout/SearchHistoryDrawer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchHistoryDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$searchHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/searchHistory.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$XMarkIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XMarkIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js [app-client] (ecmascript) <export default as XMarkIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MagnifyingGlassIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MagnifyingGlassIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js [app-client] (ecmascript) <export default as MagnifyingGlassIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ClockIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClockIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ClockIcon.js [app-client] (ecmascript) <export default as ClockIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$catalog$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/catalog.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingOfficeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BuildingOfficeIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/BuildingOfficeIcon.js [app-client] (ecmascript) <export default as BuildingOfficeIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$TruckIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TruckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/TruckIcon.js [app-client] (ecmascript) <export default as TruckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CurrencyDollarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CurrencyDollarIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/CurrencyDollarIcon.js [app-client] (ecmascript) <export default as CurrencyDollarIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserGroupIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/UserGroupIcon.js [app-client] (ecmascript) <export default as UserGroupIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$DocumentTextIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DocumentTextIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/DocumentTextIcon.js [app-client] (ecmascript) <export default as DocumentTextIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CubeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CubeIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/CubeIcon.js [app-client] (ecmascript) <export default as CubeIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ServerIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ServerIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ServerIcon.js [app-client] (ecmascript) <export default as ServerIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChartBarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartBarIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ChartBarIcon.js [app-client] (ecmascript) <export default as ChartBarIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$Squares2X2Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Squares2X2Icon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/Squares2X2Icon.js [app-client] (ecmascript) <export default as Squares2X2Icon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$SquaresPlusIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SquaresPlusIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/SquaresPlusIcon.js [app-client] (ecmascript) <export default as SquaresPlusIcon>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const ICONS = {
    BuildingOfficeIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingOfficeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BuildingOfficeIcon$3e$__["BuildingOfficeIcon"],
    TruckIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$TruckIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TruckIcon$3e$__["TruckIcon"],
    CurrencyDollarIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CurrencyDollarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CurrencyDollarIcon$3e$__["CurrencyDollarIcon"],
    UserGroupIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserGroupIcon$3e$__["UserGroupIcon"],
    DocumentTextIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$DocumentTextIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DocumentTextIcon$3e$__["DocumentTextIcon"],
    CubeIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CubeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CubeIcon$3e$__["CubeIcon"],
    ServerIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ServerIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ServerIcon$3e$__["ServerIcon"],
    ChartBarIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChartBarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartBarIcon$3e$__["ChartBarIcon"],
    Squares2X2Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$Squares2X2Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Squares2X2Icon$3e$__["Squares2X2Icon"],
    SquaresPlusIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$SquaresPlusIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SquaresPlusIcon$3e$__["SquaresPlusIcon"]
};
// quick map of app id -> icon string
const CATALOG_ICON_BY_ID = Object.fromEntries(_c1 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$catalog$2e$json__$28$json$29$__["default"].map(_c = (c)=>[
        c.id,
        c.icon
    ]));
_c2 = CATALOG_ICON_BY_ID;
function SearchHistoryDrawer(param) {
    let { open, onClose } = param;
    _s();
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filterQ, setFilterQ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchHistoryDrawer.useEffect": ()=>{
            if (!open) return;
            setItems((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$searchHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readHistory"])());
        }
    }["SearchHistoryDrawer.useEffect"], [
        open
    ]);
    const go = (it)=>{
        const path = it.path || (it.id ? "/apps/".concat(it.id) : undefined);
        if (path) router.push(path);
        onClose();
    };
    const timeAgo = (ts)=>{
        const d = Date.now() - ts;
        const m = Math.floor(d / 60000);
        if (m < 1) return 'just now';
        if (m < 60) return m + 'm';
        const h = Math.floor(m / 60);
        if (h < 24) return h + 'h';
        const days = Math.floor(h / 24);
        return days + 'd';
    };
    const display = (filterQ ? items.filter((it)=>(it.title || '').toLowerCase().includes(filterQ.toLowerCase()) || it.query.toLowerCase().includes(filterQ.toLowerCase())) : items).slice(0, 10);
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                "aria-label": "Close",
                onClick: onClose,
                className: "absolute inset-0 bg-black/30"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/SearchHistoryDrawer.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "absolute left-0 top-0 h-full w-[320px] bg-white shadow-xl ring-1 ring-black/5 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-4 py-3 border-b border-gray-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-semibold text-gray-800",
                                children: "Task List"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/SearchHistoryDrawer.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$searchHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearHistory"])();
                                            setItems([]);
                                        },
                                        className: "text-xs text-gray-500 hover:text-gray-700",
                                        children: "Clear"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/SearchHistoryDrawer.tsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onClose,
                                        className: "p-1 rounded hover:bg-gray-100",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$XMarkIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XMarkIcon$3e$__["XMarkIcon"], {
                                            className: "w-5 h-5 text-gray-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/SearchHistoryDrawer.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/SearchHistoryDrawer.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/SearchHistoryDrawer.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/SearchHistoryDrawer.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-2 border-b border-gray-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: filterQ,
                                    onChange: (e)=>setFilterQ(e.target.value),
                                    placeholder: "Search tasks",
                                    className: "w-full pl-8 pr-3 py-2 text-sm bg-white/80 backdrop-blur border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--ring)] shadow-sm hover:shadow-md focus:shadow-lg transition-all duration-300 placeholder:transition-opacity focus:placeholder-opacity-80"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/SearchHistoryDrawer.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MagnifyingGlassIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MagnifyingGlassIcon$3e$__["MagnifyingGlassIcon"], {
                                    className: "w-4 h-4 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/SearchHistoryDrawer.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/SearchHistoryDrawer.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/SearchHistoryDrawer.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-auto py-2",
                        children: items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 py-6 text-sm text-gray-500",
                            children: "No recent searches yet."
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/SearchHistoryDrawer.tsx",
                            lineNumber: 96,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-4 text-[11px] uppercase tracking-wide text-gray-400 mb-2",
                                    children: "Today"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/SearchHistoryDrawer.tsx",
                                    lineNumber: 99,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "px-2 space-y-1",
                                    children: display.map((it, idx)=>{
                                        const iconName = it.id && CATALOG_ICON_BY_ID[it.id] || undefined;
                                        const Icon = iconName && ICONS[iconName] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ClockIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClockIcon$3e$__["ClockIcon"];
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>go(it),
                                                className: "w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 text-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-flex items-center justify-center w-7 h-7 rounded-md bg-gray-100 text-gray-600",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/SearchHistoryDrawer.tsx",
                                                            lineNumber: 109,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/SearchHistoryDrawer.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm text-gray-900 line-clamp-1",
                                                                children: it.title || it.query
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/SearchHistoryDrawer.tsx",
                                                                lineNumber: 112,
                                                                columnNumber: 27
                                                            }, this),
                                                            it.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-gray-500 line-clamp-1",
                                                                children: it.query
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/SearchHistoryDrawer.tsx",
                                                                lineNumber: 114,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/layout/SearchHistoryDrawer.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-gray-400",
                                                        children: [
                                                            "×",
                                                            it.count || 1,
                                                            " · ",
                                                            timeAgo(it.ts)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/layout/SearchHistoryDrawer.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/SearchHistoryDrawer.tsx",
                                                lineNumber: 107,
                                                columnNumber: 23
                                            }, this)
                                        }, idx, false, {
                                            fileName: "[project]/src/components/layout/SearchHistoryDrawer.tsx",
                                            lineNumber: 105,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/SearchHistoryDrawer.tsx",
                                    lineNumber: 100,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/SearchHistoryDrawer.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-3 border-t border-gray-200 text-xs text-gray-500",
                        children: "Tip: Click an item to repeat the same action."
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/SearchHistoryDrawer.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/SearchHistoryDrawer.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/SearchHistoryDrawer.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_s(SearchHistoryDrawer, "0ECut8CgJd2RNG+gIwmhexvINFA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c3 = SearchHistoryDrawer;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "CATALOG_ICON_BY_ID$Object.fromEntries$(catalogData as any[]).map");
__turbopack_context__.k.register(_c1, "CATALOG_ICON_BY_ID$Object.fromEntries");
__turbopack_context__.k.register(_c2, "CATALOG_ICON_BY_ID");
__turbopack_context__.k.register(_c3, "SearchHistoryDrawer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/knowledge.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "knowledgeDocs",
    ()=>knowledgeDocs
]);
const knowledgeDocs = [
    {
        id: 'catalog-overview',
        title: 'Application Catalog Overview',
        text: 'The shell provides access to core applications used at Ashley. Applications currently exposed in the catalog include Ashley Direct, Ashley Net, Supplier, HR, Payroll, Finance, Transportation, AS400, High Jump, and More Apps. You can ask the chatbot to list all apps or search by capability to quickly navigate.'
    },
    {
        id: 'chatbot-commands',
        title: 'Chatbot Commands and Capabilities',
        text: 'The chatbot supports: listing all applications (e.g., "list all apps"), catalog search (e.g., "search sales app"), order status lookup (e.g., "track order SO12345"), and sample report generation (e.g., "generate sales report csv 20 rows"). It will ask follow-up questions to gather missing details (slot-filling).'
    },
    {
        id: 'report-generation',
        title: 'Report Generation (Sample Data)',
        text: 'You can generate sample data reports for quick testing and demonstration. Supported report types include sales and inventory, with CSV or JSON outputs. The chatbot can also provide download options for CSV, JSON, Excel, Word, and PDF when enabled. Example: "generate sales report json 15 rows".'
    },
    {
        id: 'search-history',
        title: 'Search History and For You',
        text: 'The shell UI includes a persisted search history with a left drawer interface. Recent searches are recorded locally and can be reviewed or filtered. The For You section highlights frequently used applications with vibrant icons and gradient cards.'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/agents/orchestrator.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Simple client-side orchestrator with pluggable agents and slot-filling
__turbopack_context__.s([
    "processUserInput",
    ()=>processUserInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$catalog$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/catalog.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$knowledge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/knowledge.ts [app-client] (ecmascript)");
;
;
function normalize(s) {
    return s.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
}
// Catalog helpers
function listAllCatalogTitles(limit) {
    const apps = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$catalog$2e$json__$28$json$29$__["default"];
    const arr = apps.map((a)=>({
            id: a.id,
            title: a.title
        }));
    return typeof limit === 'number' ? arr.slice(0, Math.max(0, limit)) : arr;
}
function searchCatalog(query) {
    let topN = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5;
    const apps = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$catalog$2e$json__$28$json$29$__["default"];
    const q = normalize(query);
    const scored = apps.map((a)=>{
        const t = normalize(a.title);
        let score = 0;
        if (!q) score = 0;
        else if (t === q) score = 1.0;
        else if (t.startsWith(q) || q.startsWith(t)) score = 0.8;
        else if (t.includes(q) || q.includes(t)) score = 0.6;
        else {
            const qt = new Set(q.split(' '));
            const tt = new Set(t.split(' '));
            let overlap = 0;
            qt.forEach((w)=>{
                if (tt.has(w)) overlap++;
            });
            if (overlap > 0) score = Math.min(0.4 + overlap * 0.05, 0.55);
        }
        return {
            ...a,
            score
        };
    });
    const sorted = scored.sort((a, b)=>b.score - a.score).slice(0, topN);
    return sorted.filter((x)=>x.score >= 0.4);
}
function shouldListAll(text) {
    const t = normalize(text);
    if (!t) return false;
    if (t === 'apps' || t === 'applications') return true;
    const phrases = [
        'list all apps',
        'list apps',
        'list applications',
        'all applications',
        'all apps',
        'available applications',
        'available apps',
        'available application names',
        'available app names',
        'show all apps',
        'show applications',
        'show me all apps',
        'app names',
        'application names',
        'list of apps',
        'list of applications',
        'apps list',
        'application list',
        'what apps are available',
        'what applications are available',
        'which apps are available',
        'which applications are available',
        'what apps do we have',
        'which apps do we have',
        'give available application names',
        'give me app names',
        'provide app names'
    ];
    if (phrases.some((p)=>t.includes(p))) return true;
    // Heuristic: presence of an app word AND a list/ask word
    const hasAppWord = [
        'app',
        'apps',
        'application',
        'applications'
    ].some((w)=>t.includes(w));
    const hasListWord = [
        'list',
        'available',
        'names',
        'name',
        'show',
        'display',
        'all',
        'what',
        'which',
        'give',
        'provide'
    ].some((w)=>t.includes(w));
    return hasAppWord && hasListWord;
}
const catalogAgent = {
    id: 'catalog.search',
    name: 'Catalog Search',
    detect: (text)=>{
        const t = normalize(text);
        if (!t) return 0;
        if (shouldListAll(t)) return 0.95;
        const keywords = [
            'search',
            'find',
            'open',
            'launch',
            'app',
            'application',
            'catalog',
            'apps',
            'applications',
            'list',
            'show'
        ];
        const hasKw = keywords.some((k)=>t.includes(k));
        const matches = searchCatalog(t, 1).length > 0;
        if (hasKw && matches) return 0.9;
        if (hasKw) return 0.6;
        if (matches) return 0.45; // low score to avoid hijacking generic queries like "tell me about ashley"
        return 0;
    },
    slots: [
        {
            key: 'query',
            question: 'What app or capability are you looking for?'
        },
        {
            key: 'topN',
            question: 'How many results would you like? (default 5, max 10)',
            optional: true
        }
    ],
    execute: (slots)=>{
        const q = slots.query || '';
        const n = Math.min(Math.max(parseInt(slots.topN || '5', 10) || 5, 1), 10);
        if (shouldListAll(q)) {
            const all = listAllCatalogTitles();
            const lines = all.map((r, i)=>"".concat(i + 1, ". ").concat(r.title, " (/").concat(r.id, ")"));
            return "Available applications (".concat(all.length, "):\n") + lines.join('\n');
        }
        const results = searchCatalog(q, n);
        if (!results.length) return "I couldn’t find results for “".concat(q, "”. Try a different phrase?");
        const lines = results.map((r, i)=>"".concat(i + 1, ". ").concat(r.title, " (/").concat(r.id, ")"));
        return "Here are the top ".concat(results.length, " result(s) for “").concat(q, "”:\n") + lines.join('\n');
    }
};
const orderAgent = {
    id: 'order.status',
    name: 'Order Status',
    detect: (text)=>{
        const t = normalize(text);
        if (!t) return 0;
        const kw = [
            'order',
            'status',
            'track',
            'tracking'
        ];
        const has = kw.some((k)=>t.includes(k));
        const looksId = /\b(ORD|SO|PO)[- ]?\d{5,}\b/.test(text);
        return has ? looksId ? 0.9 : 0.65 : 0;
    },
    slots: [
        {
            key: 'orderId',
            question: 'What is the order ID?'
        },
        {
            key: 'zip',
            question: 'Destination ZIP (optional)?',
            optional: true
        }
    ],
    execute: (slots)=>{
        const id = slots.orderId || 'unknown';
        // Demo response
        return "Order ".concat(id, " is in transit. ETA: 2–3 business days. Last scan: Little Rock, AR.\nNeed detailed tracking link?");
    }
};
// --- Report generation helpers ---
function generateReportDataset(reportType) {
    let rows = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 10;
    const t = normalize(reportType);
    const apps = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$catalog$2e$json__$28$json$29$__["default"].map((a)=>a.title);
    const now = Date.now();
    const rand = (min, max)=>Math.floor(min + Math.random() * (max - min + 1));
    if (t.includes('sale')) {
        const headers = [
            'date',
            'application',
            'orders',
            'revenue_usd'
        ];
        const data = Array.from({
            length: rows
        }, (_, i)=>{
            const d = new Date(now - i * 86400000);
            const app = apps[i % apps.length] || 'Ashley Direct';
            const orders = rand(10, 180);
            const revenue = orders * rand(50, 200);
            return [
                d.toISOString().slice(0, 10),
                app,
                orders,
                revenue
            ];
        }).reverse();
        return {
            name: 'sales',
            headers,
            rows: data
        };
    }
    if (t.includes('inventory') || t.includes('stock')) {
        const headers = [
            'sku',
            'item',
            'qty_on_hand',
            'reorder_point'
        ];
        const data = Array.from({
            length: rows
        }, (_, i)=>{
            const sku = "SKU-".concat(1000 + i);
            const item = "Item ".concat(i + 1);
            const qoh = rand(0, 500);
            const rp = rand(50, 150);
            return [
                sku,
                item,
                qoh,
                rp
            ];
        });
        return {
            name: 'inventory',
            headers,
            rows: data
        };
    }
    // Default generic
    const headers = [
        'id',
        'name',
        'value'
    ];
    const data = Array.from({
        length: rows
    }, (_, i)=>[
            i + 1,
            "Row ".concat(i + 1),
            rand(10, 999)
        ]);
    return {
        name: t || 'generic',
        headers,
        rows: data
    };
}
// --- RAG: simple TF-IDF over local knowledgeDocs ---
function tokenize(s) {
    return normalize(s).split(' ').filter(Boolean);
}
const ragIndex = (()=>{
    const docs = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$knowledge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["knowledgeDocs"].map((d)=>({
            id: d.id,
            title: d.title,
            text: d.text,
            tokens: tokenize(d.text)
        }));
    const df = new Map();
    const docVec = new Map();
    const docNorm = new Map();
    docs.forEach((d)=>{
        const tf = new Map();
        d.tokens.forEach((t)=>tf.set(t, (tf.get(t) || 0) + 1));
        tf.forEach((_, t)=>df.set(t, (df.get(t) || 0) + 1));
        docVec.set(d.id, tf);
    });
    const N = docs.length || 1;
    const idf = new Map();
    df.forEach((dfv, t)=>idf.set(t, Math.log(1 + N / (dfv || 1))));
    docVec.forEach((tf, id)=>{
        let sum = 0;
        tf.forEach((f, t)=>{
            const w = (1 + Math.log(f)) * (idf.get(t) || 0);
            sum += w * w;
        });
        docNorm.set(id, Math.sqrt(sum) || 1);
    });
    return {
        docs,
        df,
        idf,
        docVec,
        docNorm
    };
})();
function ragSearch(query) {
    let k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
    const qTok = tokenize(query);
    const qtf = new Map();
    qTok.forEach((t)=>qtf.set(t, (qtf.get(t) || 0) + 1));
    let qsum = 0;
    const qweights = new Map();
    qtf.forEach((f, t)=>{
        const w = (1 + Math.log(f)) * (ragIndex.idf.get(t) || 0);
        if (w > 0) {
            qweights.set(t, w);
            qsum += w * w;
        }
    });
    const qnorm = Math.sqrt(qsum) || 1;
    const scored = ragIndex.docs.map((d)=>{
        const tf = ragIndex.docVec.get(d.id);
        let dot = 0;
        qweights.forEach((qw, t)=>{
            const f = tf.get(t);
            if (f) {
                const dw = (1 + Math.log(f)) * (ragIndex.idf.get(t) || 0);
                dot += qw * dw;
            }
        });
        const denom = qnorm * (ragIndex.docNorm.get(d.id) || 1);
        const score = denom ? dot / denom : 0;
        return {
            id: d.id,
            title: d.title,
            score,
            snippet: d.text.slice(0, 280) + (d.text.length > 280 ? '…' : '')
        };
    }).sort((a, b)=>b.score - a.score).slice(0, k).filter((r)=>r.score > 0.01);
    return scored;
}
const knowledgeAgent = {
    id: 'knowledge.rag',
    name: 'Knowledge Q&A',
    detect: (text)=>{
        const t = normalize(text);
        if (!t) return 0;
        const qwords = [
            'what',
            'how',
            'where',
            'when',
            'why',
            'which',
            'who',
            'tell',
            'about',
            'describe',
            'overview',
            'info',
            'information',
            'explain',
            'guide',
            'docs',
            'document',
            'documentation'
        ];
        const hasQ = qwords.some((w)=>t.includes(w)) || /\b(what is|who is|tell me about|about)\b/.test(t) || /\?$/.test(text.trim());
        return hasQ ? 0.8 : 0.5; // prefer over catalog when it's a general knowledge ask
    },
    slots: [
        {
            key: 'query',
            question: 'What would you like to know?'
        }
    ],
    execute: async (slots)=>{
        const q = slots.query || '';
        try {
            const res = await fetch('/api/rag/query', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query: q,
                    topK: 5,
                    topSentences: 6
                })
            });
            if (!res.ok) throw new Error('RAG query failed');
            const data = await res.json();
            const hits = (data === null || data === void 0 ? void 0 : data.hits) || [];
            const answer = ((data === null || data === void 0 ? void 0 : data.answer) || '').toString().trim();
            if (answer && hits.length) {
                // Comprehensive mode: return synthesized multi-sentence answer
                return answer;
            }
            if (!hits.length) return "I couldn't find anything relevant for \"".concat(q, '". Try rephrasing your question.');
            // Fallback: compact list of titles only
            const lines = hits.map((h, i)=>"".concat(i + 1, ". ").concat(h.title || h.url));
            return "Here are related sources:\n".concat(lines.join('\n'));
        } catch (e) {
            const hits = ragSearch(q, 3);
            if (!hits.length) return "I couldn't find anything relevant for \"".concat(q, '". Try rephrasing your question.');
            const lines = hits.map((h, i)=>"".concat(i + 1, ". ").concat(h.title, " — ").concat(h.snippet));
            return "Here’s what I found:\n".concat(lines.join('\n'), "\n\nSources: ").concat(hits.map((h, i)=>'[' + (i + 1) + '] ' + h.title).join('; '));
        }
    }
};
const reportAgent = {
    id: 'report.generate',
    name: 'Report Generator',
    detect: (text)=>{
        const t = normalize(text);
        if (!t) return 0;
        const kws = [
            'report',
            'export',
            'summary',
            'csv',
            'json'
        ];
        const score = kws.some((k)=>t.includes(k)) ? 0.85 : 0;
        return score;
    },
    slots: [
        {
            key: 'reportType',
            question: 'What report would you like? (e.g., sales by day, inventory, generic)'
        },
        {
            key: 'range',
            question: 'What time range? (optional, e.g., last 30 days)',
            optional: true
        },
        {
            key: 'format',
            question: 'CSV or JSON? (default CSV)',
            optional: true
        },
        {
            key: 'rows',
            question: 'How many sample rows? (default 10)',
            optional: true
        }
    ],
    execute: (slots)=>{
        const type = (slots.reportType || 'generic').toString();
        const n = Math.min(Math.max(parseInt((slots.rows || '10').toString(), 10) || 10, 1), 200);
        const ds = generateReportDataset(type, n);
        const message = "Generated ".concat(ds.name, " report with ").concat(n, " sample row(s). Choose a format to download.");
        return {
            message,
            attachment: {
                type: 'report',
                name: ds.name,
                headers: ds.headers,
                rows: ds.rows
            }
        };
    }
};
const agents = [
    reportAgent,
    catalogAgent,
    orderAgent,
    knowledgeAgent
];
function pickAgent(text) {
    const scored = agents.map((a)=>({
            a,
            s: a.detect(text)
        })).sort((x, y)=>y.s - x.s);
    if (!scored.length || scored[0].s < 0.5) return null;
    return scored[0].a;
}
function advancePastOptional(agent, session) {
    while(true){
        const s = agent.slots[session.slotIndex];
        if (s && s.optional) {
            session.slotIndex += 1;
            continue;
        }
        break;
    }
}
function nextQuestion(agent, session) {
    const slot = agent.slots[session.slotIndex];
    return slot ? slot.question : null;
}
async function processUserInput(session, userText) {
    const replies = [];
    const text = userText.trim();
    if (!text) return {
        replies,
        session
    };
    if (!session) {
        const agent = pickAgent(text);
        if (!agent) {
            replies.push("I can help with: knowledge Q&A using RAG (ask questions about the shell and apps), generate a report with sample data (e.g., ‘generate sales report CSV 20 rows’), list available applications (e.g., ‘list all apps’), catalog search (e.g., ‘search sales app’), order status (e.g., ‘track order SO12345’).");
            return {
                replies,
                session: null
            };
        }
        // Start session and ask first question (unless user already supplied a clear value)
        const newSession = {
            agentId: agent.id,
            slotIndex: 0,
            slots: {}
        };
        // Heuristic: treat initial text as value for first slot if not a generic ask
        if (agent.id === 'catalog.search') {
            if (shouldListAll(text)) {
                const all = listAllCatalogTitles();
                const lines = all.map((r, i)=>"".concat(i + 1, ". ").concat(r.title, " (/").concat(r.id, ")"));
                replies.push("Available applications (".concat(all.length, "):\n") + lines.join('\n'));
                return {
                    replies,
                    session: null
                };
            }
            newSession.slots.query = text;
            newSession.slotIndex = 1; // move to next (topN is optional)
            advancePastOptional(agent, newSession);
        } else if (agent.id === 'order.status') {
            const m = text.match(/\b(ORD|SO|PO)[- ]?\d{5,}\b/);
            if (m) {
                newSession.slots.orderId = m[0].replace(' ', '-');
                newSession.slotIndex = 1;
            }
        } else if (agent.id === 'report.generate') {
            const lower = text.toLowerCase();
            if (lower.includes('sales')) newSession.slots.reportType = 'sales';
            else if (lower.includes('inventory') || lower.includes('stock')) newSession.slots.reportType = 'inventory';
            else if (lower.includes('report')) newSession.slots.reportType = 'generic';
            if (lower.includes('json')) newSession.slots.format = 'json';
            if (lower.includes('csv')) newSession.slots.format = 'csv';
            const mRows = lower.match(/(\d+)\s*(rows?|lines?)/);
            if (mRows) newSession.slots.rows = mRows[1];
            if (newSession.slots.reportType) newSession.slotIndex = 1;
        } else if (agent.id === 'knowledge.rag') {
            newSession.slots.query = text;
            newSession.slotIndex = 1;
        }
        const ask = nextQuestion(agent, newSession);
        if (ask) {
            replies.push(ask);
            return {
                replies,
                session: newSession
            };
        }
        // No more slots to ask -> execute immediately
        const out = await agent.execute(newSession.slots);
        if (typeof out === 'string') {
            replies.push(out);
            return {
                replies,
                session: null
            };
        }
        replies.push(out.message || 'Done.');
        return {
            replies,
            session: null,
            attachment: out.attachment
        };
    }
    const agent = agents.find((a)=>a.id === session.agentId);
    // Accept value for current slot
    const slotDef = agent.slots[session.slotIndex];
    if (slotDef) {
        session.slots[slotDef.key] = text;
        session.slotIndex += 1;
    }
    // Skip optional blanks
    while(true){
        const s = agent.slots[session.slotIndex];
        if (s && s.optional) {
            // If user typed '-', skip optional slot
            if ((session.slots[s.key] || '') === '') {
            // Keep as blank optional
            }
            session.slotIndex += 1;
            continue;
        }
        break;
    }
    advancePastOptional(agent, session);
    const next = nextQuestion(agent, session);
    if (next) {
        replies.push(next);
        return {
            replies,
            session
        };
    }
    // Execute
    const out = await agent.execute(session.slots);
    if (typeof out === 'string') {
        replies.push(out);
        return {
            replies,
            session: null
        };
    }
    replies.push(out.message || 'Done.');
    return {
        replies,
        session: null,
        attachment: out.attachment
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/chat/ChatDock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatDock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChatBubbleLeftRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatBubbleLeftRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ChatBubbleLeftRightIcon.js [app-client] (ecmascript) <export default as ChatBubbleLeftRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$XMarkIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XMarkIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js [app-client] (ecmascript) <export default as XMarkIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PaperAirplaneIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PaperAirplaneIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/PaperAirplaneIcon.js [app-client] (ecmascript) <export default as PaperAirplaneIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SparklesIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/SparklesIcon.js [app-client] (ecmascript) <export default as SparklesIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MicrophoneIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicrophoneIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/MicrophoneIcon.js [app-client] (ecmascript) <export default as MicrophoneIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PaperClipIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PaperClipIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/PaperClipIcon.js [app-client] (ecmascript) <export default as PaperClipIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$agents$2f$orchestrator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/agents/orchestrator.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const STORAGE_KEY = "chatdock_messages_v1";
function usePersistentMessages() {
    _s();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePersistentMessages.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            try {
                const raw = localStorage.getItem(STORAGE_KEY);
                if (raw) setMessages(JSON.parse(raw));
            } catch (e) {}
        }
    }["usePersistentMessages.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePersistentMessages.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
            } catch (e) {}
        }
    }["usePersistentMessages.useEffect"], [
        messages
    ]);
    return [
        messages,
        setMessages
    ];
}
_s(usePersistentMessages, "BxyhfWWpnSbijcu7qFgrB+X/mWM=");
function ChatDock() {
    _s1();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [messages, setMessages] = usePersistentMessages();
    const listRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // RAG ingest UI state
    const [ragDir, setRagDir] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [ragBusy, setRagBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ragMsg, setRagMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const ingestDir = async ()=>{
        const dir = ragDir.trim();
        if (!dir) {
            setRagMsg('Enter a folder path');
            return;
        }
        setRagBusy(true);
        setRagMsg(null);
        try {
            const res = await fetch('/api/rag/ingest', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    dir
                })
            });
            const data = await res.json();
            if (!res.ok || !data.ok) throw new Error(data.error || 'Failed to ingest');
            const okCount = data.results.filter((r)=>!r.error).length;
            const totalChunks = data.results.reduce((acc, r)=>acc + (r.chunks || 0), 0);
            setRagMsg("Indexed ".concat(okCount, " file(s), ").concat(totalChunks, " chunk(s)."));
        } catch (e) {
            setRagMsg(e instanceof Error ? e.message : String(e));
        } finally{
            setRagBusy(false);
        }
    };
    // Download helpers for report attachments
    const toCSV = (headers, rows)=>{
        const esc = (v)=>{
            const s = String(v);
            return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
        };
        return [
            headers.join(','),
            ...rows.map((r)=>r.map(esc).join(','))
        ].join('\n');
    };
    const triggerDownload = (filename, mime, data)=>{
        let blob;
        if (data instanceof Blob) {
            blob = data;
        } else if (typeof data === 'string') {
            blob = new Blob([
                data
            ], {
                type: mime
            });
        } else {
            // ArrayBuffer
            blob = new Blob([
                new Uint8Array(data)
            ], {
                type: mime
            });
        }
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    };
    const downloadCSV = (att)=>{
        const csv = toCSV(att.headers, att.rows);
        triggerDownload("".concat(att.name, ".csv"), 'text/csv;charset=utf-8', csv);
    };
    const downloadJSON = (att)=>{
        const objs = att.rows.map((row)=>Object.fromEntries(att.headers.map((h, i)=>{
                var _row_i;
                return [
                    h,
                    (_row_i = row[i]) !== null && _row_i !== void 0 ? _row_i : null
                ];
            })));
        const json = JSON.stringify({
            report: att.name,
            rows: objs
        }, null, 2);
        triggerDownload("".concat(att.name, ".json"), 'application/json', json);
    };
    const downloadXLSX = async (att)=>{
        try {
            const XLSX = await (()=>{
                const e = new Error("Cannot find module 'xlsx'");
                e.code = 'MODULE_NOT_FOUND';
                throw e;
            })();
            const wb = XLSX.utils.book_new();
            const ws = XLSX.utils.aoa_to_sheet([
                att.headers,
                ...att.rows
            ]);
            XLSX.utils.book_append_sheet(wb, ws, 'Report');
            const wbout = XLSX.write(wb, {
                bookType: 'xlsx',
                type: 'array'
            });
            triggerDownload("".concat(att.name, ".xlsx"), 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', wbout);
        } catch (e) {
            alert('Excel export requires the "xlsx" package. I can install it if you allow.');
        }
    };
    const downloadDOCX = async (att)=>{
        try {
            const docx = await (()=>{
                const e = new Error("Cannot find module 'docx'");
                e.code = 'MODULE_NOT_FOUND';
                throw e;
            })();
            const { Document, Packer, Paragraph, Table, TableRow, TableCell, WidthType } = docx;
            const headerRow = new TableRow({
                children: att.headers.map((h)=>new TableCell({
                        children: [
                            new Paragraph(String(h))
                        ]
                    }))
            });
            const bodyRows = att.rows.map((r)=>new TableRow({
                    children: r.map((c)=>new TableCell({
                            children: [
                                new Paragraph(String(c))
                            ]
                        }))
                }));
            const table = new Table({
                width: {
                    size: 100,
                    type: WidthType.PERCENTAGE
                },
                rows: [
                    headerRow,
                    ...bodyRows
                ]
            });
            const doc = new Document({
                sections: [
                    {
                        properties: {},
                        children: [
                            new Paragraph("".concat(att.name, " report")),
                            table
                        ]
                    }
                ]
            });
            const blob = await Packer.toBlob(doc);
            triggerDownload("".concat(att.name, ".docx"), 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', blob);
        } catch (e) {
            alert('Word export requires the "docx" package. I can install it if you allow.');
        }
    };
    const downloadPDF = async (att)=>{
        try {
            const jsPDFMod = await (()=>{
                const e = new Error("Cannot find module 'jspdf'");
                e.code = 'MODULE_NOT_FOUND';
                throw e;
            })();
            const JsPDF = jsPDFMod.default;
            try {
                await (()=>{
                    const e = new Error("Cannot find module 'jspdf-autotable'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                })();
            } catch (e) {}
            const doc = new JsPDF();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (doc.autoTable) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                doc.autoTable({
                    head: [
                        att.headers
                    ],
                    body: att.rows
                });
            } else {
                doc.text("".concat(att.name, " report"), 14, 16);
                let y = 26;
                const text = toCSV(att.headers, att.rows);
                text.split('\n').slice(0, 50).forEach((line)=>{
                    doc.text(line, 14, y);
                    y += 6;
                });
            }
            doc.save("".concat(att.name, ".pdf"));
        } catch (e) {
            alert('PDF export requires "jspdf" (and optionally "jspdf-autotable"). I can install them if you allow.');
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatDock.useEffect": ()=>{
            if (!open) return;
            const el = listRef.current;
            if (el) el.scrollTop = el.scrollHeight;
        }
    }["ChatDock.useEffect"], [
        open,
        messages.length
    ]);
    const send = async ()=>{
        const text = input.trim();
        if (!text) return;
        const user = {
            id: crypto.randomUUID(),
            role: "user",
            content: text,
            ts: Date.now()
        };
        const typing = {
            id: crypto.randomUUID(),
            role: "assistant",
            content: "…",
            ts: Date.now()
        };
        setMessages((prev)=>[
                ...prev,
                user,
                typing
            ]);
        setInput("");
        // Agentic processing with slot-filling (async)
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$agents$2f$orchestrator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["processUserInput"])(session, text);
        setSession(result.session);
        const reply = result.replies && result.replies.length ? result.replies.join("\n") : "Okay.";
        setTimeout(()=>{
            setMessages((prev)=>prev.map((m)=>m === typing ? {
                        ...m,
                        content: reply,
                        attachment: result.attachment
                    } : m));
        }, 500);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                "aria-label": "Open chatbot",
                onClick: ()=>setOpen((v)=>!v),
                className: "pointer-events-auto fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-[var(--primary)] text-white hover:shadow-xl active:scale-95 transition-all",
                children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$XMarkIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XMarkIcon$3e$__["XMarkIcon"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatDock.tsx",
                    lineNumber: 193,
                    columnNumber: 17
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChatBubbleLeftRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatBubbleLeftRightIcon$3e$__["ChatBubbleLeftRightIcon"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatDock.tsx",
                    lineNumber: 193,
                    columnNumber: 53
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatDock.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-auto fixed bottom-24 right-6 z-50 w-[360px] sm:w-[400px] ".concat(open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none", " transition-all duration-300"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 bg-white/90 backdrop-blur",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-4 py-3 border-b border-gray-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-7 h-7 rounded-lg brand-soft brand-text flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SparklesIcon$3e$__["SparklesIcon"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/ChatDock.tsx",
                                                lineNumber: 207,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/ChatDock.tsx",
                                            lineNumber: 206,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm font-semibold text-gray-900",
                                            children: "Ashley Knowledge Base"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/ChatDock.tsx",
                                            lineNumber: 209,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/chat/ChatDock.tsx",
                                    lineNumber: 205,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setOpen(false),
                                    className: "p-1 rounded hover:bg-gray-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$XMarkIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XMarkIcon$3e$__["XMarkIcon"], {
                                        className: "w-5 h-5 text-gray-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/ChatDock.tsx",
                                        lineNumber: 212,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/ChatDock.tsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/chat/ChatDock.tsx",
                            lineNumber: 204,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 py-2 border-b border-gray-200 bg-gray-50/60",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[11px] text-gray-600 mb-1",
                                    children: "RAG: Ingest from folder"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/ChatDock.tsx",
                                    lineNumber: 218,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: ragDir,
                                            onChange: (e)=>setRagDir(e.target.value),
                                            placeholder: "C:\\\\Users\\\\NChinnappan\\\\Downloads\\\\data feed",
                                            className: "flex-1 bg-white/90 border border-gray-200 rounded-lg px-2 py-1 text-xs outline-none focus:ring-2 focus:ring-[var(--ring)]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/ChatDock.tsx",
                                            lineNumber: 220,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ingestDir,
                                            disabled: ragBusy,
                                            className: "px-2 py-1 text-xs rounded-md bg-[var(--primary)] text-white disabled:opacity-50",
                                            children: ragBusy ? 'Indexing…' : 'Index'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/ChatDock.tsx",
                                            lineNumber: 226,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/chat/ChatDock.tsx",
                                    lineNumber: 219,
                                    columnNumber: 13
                                }, this),
                                ragMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1 text-[11px] text-gray-600",
                                    children: ragMsg
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/ChatDock.tsx",
                                    lineNumber: 234,
                                    columnNumber: 24
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/chat/ChatDock.tsx",
                            lineNumber: 217,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: listRef,
                            className: "max-h-[50vh] overflow-y-auto px-3 py-3 space-y-3",
                            children: messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-gray-500 px-2 py-6 text-center",
                                children: "Ask anything. This is a UI shell; responses are simulated."
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/ChatDock.tsx",
                                lineNumber: 240,
                                columnNumber: 15
                            }, this) : messages.map((m)=>{
                                var _m_attachment;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex ".concat(m.role === "user" ? "justify-end" : "justify-start"),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-3 py-2 text-sm rounded-2xl max-w-[80%] shadow-sm transition-all ".concat(m.role === "user" ? "bg-[var(--primary)] text-white rounded-br-sm" : "bg-gray-100 text-gray-800 rounded-bl-sm"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: m.content
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/ChatDock.tsx",
                                                lineNumber: 253,
                                                columnNumber: 21
                                            }, this),
                                            m.role === 'assistant' && ((_m_attachment = m.attachment) === null || _m_attachment === void 0 ? void 0 : _m_attachment.type) === 'report' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 flex flex-wrap gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>downloadCSV(m.attachment),
                                                        className: "px-2 py-1 text-xs rounded-md bg-white/70 hover:bg-white text-gray-800 border border-gray-200 shadow-sm",
                                                        children: "CSV"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/chat/ChatDock.tsx",
                                                        lineNumber: 256,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>downloadJSON(m.attachment),
                                                        className: "px-2 py-1 text-xs rounded-md bg-white/70 hover:bg-white text-gray-800 border border-gray-200 shadow-sm",
                                                        children: "JSON"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/chat/ChatDock.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>downloadXLSX(m.attachment),
                                                        className: "px-2 py-1 text-xs rounded-md bg-white/70 hover:bg-white text-gray-800 border border-gray-200 shadow-sm",
                                                        children: "Excel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/chat/ChatDock.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>downloadDOCX(m.attachment),
                                                        className: "px-2 py-1 text-xs rounded-md bg-white/70 hover:bg-white text-gray-800 border border-gray-200 shadow-sm",
                                                        children: "Word"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/chat/ChatDock.tsx",
                                                        lineNumber: 259,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>downloadPDF(m.attachment),
                                                        className: "px-2 py-1 text-xs rounded-md bg-white/70 hover:bg-white text-gray-800 border border-gray-200 shadow-sm",
                                                        children: "PDF"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/chat/ChatDock.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/chat/ChatDock.tsx",
                                                lineNumber: 255,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/chat/ChatDock.tsx",
                                        lineNumber: 246,
                                        columnNumber: 19
                                    }, this)
                                }, m.id, false, {
                                    fileName: "[project]/src/components/chat/ChatDock.tsx",
                                    lineNumber: 245,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/ChatDock.tsx",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-3 pb-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex items-center gap-2 bg-white/80 backdrop-blur border border-gray-200 rounded-2xl px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-[var(--ring)] transition-all",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all",
                                        title: "Attach",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PaperClipIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PaperClipIcon$3e$__["PaperClipIcon"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/ChatDock.tsx",
                                            lineNumber: 273,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/ChatDock.tsx",
                                        lineNumber: 272,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: input,
                                        onChange: (e)=>setInput(e.target.value),
                                        onKeyDown: (e)=>{
                                            if (e.key === 'Enter') {
                                                e.preventDefault();
                                                send();
                                            }
                                        },
                                        placeholder: "Message Ashley Knowledge Base",
                                        className: "flex-1 bg-transparent outline-none text-sm placeholder-gray-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/ChatDock.tsx",
                                        lineNumber: 275,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all",
                                        title: "Voice",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MicrophoneIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicrophoneIcon$3e$__["MicrophoneIcon"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/ChatDock.tsx",
                                            lineNumber: 283,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/ChatDock.tsx",
                                        lineNumber: 282,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: send,
                                        className: "inline-flex items-center gap-1 bg-[var(--primary)] text-white text-sm px-3 py-1.5 rounded-xl shadow hover:shadow-md active:scale-95 transition-all",
                                        title: "Send",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PaperAirplaneIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PaperAirplaneIcon$3e$__["PaperAirplaneIcon"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/ChatDock.tsx",
                                                lineNumber: 290,
                                                columnNumber: 17
                                            }, this),
                                            "Send"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/chat/ChatDock.tsx",
                                        lineNumber: 285,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/chat/ChatDock.tsx",
                                lineNumber: 271,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/ChatDock.tsx",
                            lineNumber: 270,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/chat/ChatDock.tsx",
                    lineNumber: 202,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatDock.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/chat/ChatDock.tsx",
        lineNumber: 186,
        columnNumber: 5
    }, this);
}
_s1(ChatDock, "GObmArgRQ+blCmq7QN5VnXmU8Po=", false, function() {
    return [
        usePersistentMessages
    ];
});
_c = ChatDock;
var _c;
__turbopack_context__.k.register(_c, "ChatDock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/ShellLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShellLayout",
    ()=>ShellLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$MainContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/MainContent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SearchHistoryDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/SearchHistoryDrawer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatDock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/chat/ChatDock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MegaphoneIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MegaphoneIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/MegaphoneIcon.js [app-client] (ecmascript) <export default as MegaphoneIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$EnvelopeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EnvelopeIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/EnvelopeIcon.js [app-client] (ecmascript) <export default as EnvelopeIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserGroupIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/UserGroupIcon.js [app-client] (ecmascript) <export default as UserGroupIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChatBubbleLeftRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatBubbleLeftRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ChatBubbleLeftRightIcon.js [app-client] (ecmascript) <export default as ChatBubbleLeftRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$Squares2X2Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Squares2X2Icon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/Squares2X2Icon.js [app-client] (ecmascript) <export default as Squares2X2Icon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BellIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BellIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/BellIcon.js [app-client] (ecmascript) <export default as BellIcon>");
;
;
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
const NotificationTray = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/layout/NotificationTray.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/layout/NotificationTray.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = NotificationTray;
const AshleyDirectInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/departments/AshleyDirectInfo.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/departments/AshleyDirectInfo.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c1 = AshleyDirectInfo;
const AshleyDirectMenus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/departments/AshleyDirectMenus.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/departments/AshleyDirectMenus.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c2 = AshleyDirectMenus;
function ShellLayout(param) {
    let { children, initialSelectedDepartment = null, suppressDefault = false, hideRightPanel = false } = param;
    _s();
    const [selectedDepartment, setSelectedDepartment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialSelectedDepartment);
    const [historyOpen, setHistoryOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {
                selectedDepartment: selectedDepartment,
                onDepartmentSelect: setSelectedDepartment,
                onPlusClick: ()=>{
                    if ("TURBOPACK compile-time truthy", 1) {
                        window.dispatchEvent(new CustomEvent('open-recent-activity'));
                    }
                }
            }, void 0, false, {
                fileName: "[project]/src/components/layout/ShellLayout.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                        fileName: "[project]/src/components/layout/ShellLayout.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "relative flex-1 overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 overflow-auto",
                                    children: [
                                        !suppressDefault && (selectedDepartment ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-6 space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700",
                                                        children: [
                                                            selectedDepartment === 'ashleydirect' ? 'Ashley Direct' : selectedDepartment.charAt(0).toUpperCase() + selectedDepartment.slice(1),
                                                            " Department"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                        lineNumber: 49,
                                                        columnNumber: 23
                                                    }, this),
                                                    selectedDepartment === 'ashleydirect' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AshleyDirectInfo, {}, void 0, false, {
                                                                fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                lineNumber: 56,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AshleyDirectMenus, {}, void 0, false, {
                                                                fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                lineNumber: 57,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600",
                                                        children: [
                                                            "Loading ",
                                                            selectedDepartment,
                                                            " application..."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                lineNumber: 48,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                            lineNumber: 46,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$MainContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MainContent"], {}, void 0, false, {
                                            fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                            lineNumber: 67,
                                            columnNumber: 19
                                        }, this)),
                                        children
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                !hideRightPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                    className: "hidden lg:block w-72 shrink-0 border-l border-gray-200 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/50 h-full overflow-y-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-8 px-3 pb-24 space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative px-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pointer-events-none absolute left-0 right-0 -top-1 h-8 mx-2 rounded-full blur-xl",
                                                        style: {
                                                            background: 'var(--primary)',
                                                            opacity: 0.18
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[var(--primary)] to-indigo-500 text-white text-xs font-semibold shadow-sm ring-1 ring-white/10",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BellIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BellIcon$3e$__["BellIcon"], {
                                                                className: "w-4 h-4 opacity-95"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                lineNumber: 82,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Notifications"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                lineNumber: 83,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ml-1 inline-flex",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-1.5 h-1.5 rounded-full bg-white/90 animate-pulse"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                    lineNumber: 84,
                                                                    columnNumber: 58
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                lineNumber: 84,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                lineNumber: 77,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NotificationTray, {
                                                embedded: true,
                                                controls: true,
                                                showClose: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                lineNumber: 88,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                className: "mt-4 bg-white rounded-xl shadow-sm ring-1 ring-gray-200/70 p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-7 w-7 rounded-full brand-soft brand-text flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MegaphoneIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MegaphoneIcon$3e$__["MegaphoneIcon"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                    lineNumber: 94,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                lineNumber: 93,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-sm font-semibold",
                                                                style: {
                                                                    color: '#0f172a'
                                                                },
                                                                children: "Announcements"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                lineNumber: 96,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                        lineNumber: 92,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-3 p-3 rounded-lg brand-soft",
                                                        style: {
                                                            color: '#0f172a'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm font-semibold",
                                                                children: "System Maintenance Scheduled"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                lineNumber: 99,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs mt-1",
                                                                style: {
                                                                    opacity: 0.8
                                                                },
                                                                children: "This Sunday from 2 AM to 4 AM."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                lineNumber: 100,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                lineNumber: 91,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                className: "mt-4 bg-white rounded-xl shadow-sm ring-1 ring-gray-200/70 p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm font-semibold mb-3",
                                                        style: {
                                                            color: '#0f172a'
                                                        },
                                                        children: "Quick Links"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#",
                                                                className: "flex items-center gap-2 rounded-lg brand-soft px-3 py-2 hover:opacity-90",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$EnvelopeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EnvelopeIcon$3e$__["EnvelopeIcon"], {
                                                                        className: "w-5 h-5 brand-text"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                        lineNumber: 109,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm",
                                                                        style: {
                                                                            color: '#0f172a'
                                                                        },
                                                                        children: "Outlook"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                        lineNumber: 110,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                lineNumber: 108,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#",
                                                                className: "flex items-center gap-2 rounded-lg brand-soft px-3 py-2 hover:opacity-90",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserGroupIcon$3e$__["UserGroupIcon"], {
                                                                        className: "w-5 h-5 brand-text"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                        lineNumber: 113,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm",
                                                                        style: {
                                                                            color: '#0f172a'
                                                                        },
                                                                        children: "Teams"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                        lineNumber: 114,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                lineNumber: 112,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#",
                                                                className: "flex items-center gap-2 rounded-lg brand-soft px-3 py-2 hover:opacity-90",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChatBubbleLeftRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatBubbleLeftRightIcon$3e$__["ChatBubbleLeftRightIcon"], {
                                                                        className: "w-5 h-5 brand-text"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                        lineNumber: 117,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm",
                                                                        style: {
                                                                            color: '#0f172a'
                                                                        },
                                                                        children: "Slack"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                        lineNumber: 118,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                lineNumber: 116,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#",
                                                                className: "flex items-center gap-2 rounded-lg brand-soft px-3 py-2 hover:opacity-90",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$Squares2X2Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Squares2X2Icon$3e$__["Squares2X2Icon"], {
                                                                        className: "w-5 h-5 brand-text"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                        lineNumber: 121,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm",
                                                                        style: {
                                                                            color: '#0f172a'
                                                                        },
                                                                        children: "Trello"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                        lineNumber: 122,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                lineNumber: 120,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                lineNumber: 105,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                className: "mt-4 bg-white rounded-xl shadow-sm ring-1 ring-gray-200/70 p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm font-semibold mb-3",
                                                        style: {
                                                            color: '#0f172a'
                                                        },
                                                        children: "Sales (last 12 months)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 21
                                                    }, this),
                                                    (()=>{
                                                        const data = [
                                                            {
                                                                m: 'J',
                                                                v: 120
                                                            },
                                                            {
                                                                m: 'F',
                                                                v: 160
                                                            },
                                                            {
                                                                m: 'M',
                                                                v: 180
                                                            },
                                                            {
                                                                m: 'A',
                                                                v: 140
                                                            },
                                                            {
                                                                m: 'M',
                                                                v: 200
                                                            },
                                                            {
                                                                m: 'J',
                                                                v: 230
                                                            },
                                                            {
                                                                m: 'J',
                                                                v: 190
                                                            },
                                                            {
                                                                m: 'A',
                                                                v: 210
                                                            },
                                                            {
                                                                m: 'S',
                                                                v: 260
                                                            },
                                                            {
                                                                m: 'O',
                                                                v: 240
                                                            },
                                                            {
                                                                m: 'N',
                                                                v: 220
                                                            },
                                                            {
                                                                m: 'D',
                                                                v: 280
                                                            }
                                                        ];
                                                        const max = Math.max(...data.map((d)=>d.v)) || 1;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-24 flex items-end gap-1",
                                                                    children: data.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-1 flex flex-col items-center",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-full rounded-t-md",
                                                                                    style: {
                                                                                        height: "".concat(Math.max(6, Math.round(d.v / max * 90)), "px"),
                                                                                        background: 'var(--primary)',
                                                                                        opacity: 0.8
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                                    lineNumber: 142,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-[10px] text-gray-500 mt-1",
                                                                                    children: d.m
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                                    lineNumber: 143,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, i, true, {
                                                                            fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                            lineNumber: 141,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                    lineNumber: 139,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-2 text-[11px] text-gray-600",
                                                                    children: [
                                                                        "Total YTD: ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-semibold text-gray-800",
                                                                            children: [
                                                                                "$",
                                                                                [
                                                                                    ...data
                                                                                ].reduce((a, b)=>a + b.v, 0).toLocaleString()
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                            lineNumber: 147,
                                                                            columnNumber: 86
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                    lineNumber: 147,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 25
                                                        }, this);
                                                    })()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                lineNumber: 128,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                className: "mt-4 bg-white rounded-xl shadow-sm ring-1 ring-gray-200/70 p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm font-semibold mb-3",
                                                        style: {
                                                            color: '#0f172a'
                                                        },
                                                        children: "Logistics"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "inline-flex items-center justify-center w-6 h-6 rounded-md brand-soft",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            viewBox: "0 0 24 24",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            className: "w-4 h-4 brand-text",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: "1.5",
                                                                                d: "M3 7h11v10H3zM14 10h4.586a2 2 0 0 1 1.414.586l.414.414A2 2 0 0 1 21 12.414V17h-7v-7zM5 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm12 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                                lineNumber: 159,
                                                                                columnNumber: 152
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                            lineNumber: 159,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                        lineNumber: 158,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Trucks in transit"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                        lineNumber: 161,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                lineNumber: 157,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-semibold",
                                                                style: {
                                                                    color: '#0f172a'
                                                                },
                                                                children: "18"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                lineNumber: 163,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-3 text-[12px] text-gray-700",
                                                        children: "Container ships"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-1 flex flex-wrap gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] bg-blue-50 text-blue-700 border border-blue-200",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "w-2 h-2 rounded-full bg-blue-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                        lineNumber: 168,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " On water: 3"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                lineNumber: 167,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] bg-emerald-50 text-emerald-700 border border-emerald-200",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "w-2 h-2 rounded-full bg-emerald-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                        lineNumber: 171,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " At port: 1"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                lineNumber: 170,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] bg-amber-50 text-amber-700 border border-amber-200",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "w-2 h-2 rounded-full bg-amber-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                        lineNumber: 174,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " Customs: 1"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] bg-rose-50 text-rose-700 border border-rose-200",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "w-2 h-2 rounded-full bg-rose-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                        lineNumber: 177,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " Delayed: 1"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                                lineNumber: 176,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                                lineNumber: 154,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                        lineNumber: 76,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/ShellLayout.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/ShellLayout.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/ShellLayout.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SearchHistoryDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        open: historyOpen,
                        onClose: ()=>setHistoryOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/ShellLayout.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatDock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/components/layout/ShellLayout.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/ShellLayout.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/ShellLayout.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(ShellLayout, "DFLImGqrseowKd2g0uehpLH9I1g=");
_c3 = ShellLayout;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "NotificationTray");
__turbopack_context__.k.register(_c1, "AshleyDirectInfo");
__turbopack_context__.k.register(_c2, "AshleyDirectMenus");
__turbopack_context__.k.register(_c3, "ShellLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_170672a9._.js.map
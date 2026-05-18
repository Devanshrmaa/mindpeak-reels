(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/liveStats.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatStat",
    ()=>formatStat,
    "getAllLiveStats",
    ()=>getAllLiveStats,
    "getLiveStat",
    ()=>getLiveStat,
    "getLiveStatWithFluctuation",
    ()=>getLiveStatWithFluctuation,
    "getStatSuffix",
    ()=>getStatSuffix
]);
/**
 * Live Stats Utility
 * Auto-increments student numbers, success rates, rankings monthly
 * to show business growth. Google sees growing numbers = active, growing business.
 */ const BASE_DATE = new Date('2026-02-18');
const stats = {
    studentsEnrolled: {
        baseValue: 500,
        incrementPerMonth: 50,
        maxValue: 10000,
        suffix: '+'
    },
    successRate: {
        baseValue: 95,
        incrementPerMonth: 0.1,
        maxValue: 99,
        suffix: '%'
    },
    airToppers: {
        baseValue: 50,
        incrementPerMonth: 5,
        maxValue: 500,
        suffix: '+'
    },
    mockTestsTaken: {
        baseValue: 10000,
        incrementPerMonth: 1000,
        suffix: '+'
    },
    yearsOfExcellence: {
        baseValue: 8,
        incrementPerMonth: 1 / 12,
        suffix: '+'
    }
};
/**
 * Computes the months elapsed since the base date.
 */ function monthsSinceBase() {
    const now = new Date();
    return Math.max(0, (now.getFullYear() - BASE_DATE.getFullYear()) * 12 + (now.getMonth() - BASE_DATE.getMonth()));
}
function getLiveStat(statName) {
    const config = stats[statName];
    let value = config.baseValue + config.incrementPerMonth * monthsSinceBase();
    if (config.maxValue && value > config.maxValue) {
        value = config.maxValue;
    }
    return Math.round(value);
}
function getLiveStatWithFluctuation(statName) {
    const base = getLiveStat(statName);
    const dayOfMonth = new Date().getDate();
    const fluctuation = Math.sin(dayOfMonth) * 0.02;
    return Math.round(base * (1 + fluctuation));
}
function getStatSuffix(statName) {
    return stats[statName].suffix ?? '';
}
function getAllLiveStats() {
    return {
        studentsEnrolled: getLiveStat('studentsEnrolled'),
        successRate: getLiveStat('successRate'),
        airToppers: getLiveStat('airToppers'),
        mockTestsTaken: getLiveStat('mockTestsTaken'),
        yearsOfExcellence: getLiveStat('yearsOfExcellence')
    };
}
function formatStat(statName) {
    const value = getLiveStat(statName);
    const suffix = getStatSuffix(statName);
    if (statName === 'successRate') {
        return `${value}${suffix}`;
    }
    return `${value.toLocaleString('en-IN')}${suffix}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/StatsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatsSection",
    ()=>StatsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$liveStats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/liveStats.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const statConfigs = [
    {
        key: 'studentsEnrolled',
        label: 'Students Mentored',
        fallback: '500+'
    },
    {
        key: 'successRate',
        label: 'Selection Rate',
        fallback: '95%'
    },
    {
        key: 'airToppers',
        label: 'AIR <5K Achievers',
        fallback: '50+'
    },
    {
        key: 'mockTestsTaken',
        label: 'Mock Tests Taken',
        fallback: '10,000+'
    }
];
const StatsSection = ()=>{
    _s();
    const [values, setValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StatsSection.useEffect": ()=>{
            const v = {};
            for (const cfg of statConfigs){
                v[cfg.key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$liveStats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatStat"])(cfg.key);
            }
            setValues(v);
        }
    }["StatsSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-secondary/30 py-20 px-6 border-y border-border",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8",
            children: statConfigs.map((cfg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        delay: i * 0.1,
                        duration: 0.5
                    },
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-display font-black text-primary mb-2",
                            style: {
                                fontSize: 'clamp(2.5rem, 5vw, 4rem)'
                            },
                            children: values[cfg.key] || cfg.fallback
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/StatsSection.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-muted-foreground text-sm uppercase tracking-wider",
                            children: cfg.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/StatsSection.tsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, cfg.key, true, {
                    fileName: "[project]/src/components/sections/StatsSection.tsx",
                    lineNumber: 27,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/src/components/sections/StatsSection.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/sections/StatsSection.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(StatsSection, "4c1Ci3oJ83EEKxNRiCpxRYlnLCc=");
_c = StatsSection;
var _c;
__turbopack_context__.k.register(_c, "StatsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/StatsSection.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/sections/StatsSection.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_1bae2d41._.js.map
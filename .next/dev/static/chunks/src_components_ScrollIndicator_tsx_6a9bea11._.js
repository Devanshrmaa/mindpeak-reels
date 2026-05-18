(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ScrollIndicator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollIndicator",
    ()=>ScrollIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
const STRAND_COUNT = 3;
const NODES_PER_STRAND = 12;
const HELIX_HEIGHT = 280;
const RADIUS = 8;
const ScrollIndicator = ()=>{
    _s();
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])();
    const smoothProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(scrollYProgress, {
        stiffness: 80,
        damping: 20
    });
    const [scrollDir, setScrollDir] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('down');
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollIndicator.useEffect": ()=>{
            setMounted(true);
        }
    }["ScrollIndicator.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollIndicator.useEffect": ()=>{
            let lastY = window.scrollY;
            const onScroll = {
                "ScrollIndicator.useEffect.onScroll": ()=>{
                    const y = window.scrollY;
                    if (Math.abs(y - lastY) > 5) {
                        setScrollDir(y > lastY ? 'down' : 'up');
                        lastY = y;
                    }
                }
            }["ScrollIndicator.useEffect.onScroll"];
            window.addEventListener('scroll', onScroll, {
                passive: true
            });
            return ({
                "ScrollIndicator.useEffect": ()=>window.removeEventListener('scroll', onScroll)
            })["ScrollIndicator.useEffect"];
        }
    }["ScrollIndicator.useEffect"], []);
    const nodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ScrollIndicator.useMemo[nodes]": ()=>{
            const result = [];
            for(let s = 0; s < STRAND_COUNT; s++){
                for(let i = 0; i < NODES_PER_STRAND; i++){
                    result.push({
                        strand: s,
                        index: i,
                        baseY: i / (NODES_PER_STRAND - 1) * HELIX_HEIGHT,
                        phase: s * (2 * Math.PI / STRAND_COUNT) + i * 0.55
                    });
                }
            }
            return result;
        }
    }["ScrollIndicator.useMemo[nodes]"], []);
    const strandColors = [
        'hsl(var(--primary))',
        'hsl(var(--primary) / 0.5)',
        'hsl(var(--primary) / 0.25)'
    ];
    const trackFill = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(smoothProgress, [
        0,
        1
    ], [
        0,
        HELIX_HEIGHT
    ]);
    const markerTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(smoothProgress, [
        0,
        1
    ], [
        0,
        HELIX_HEIGHT - 8
    ]);
    const pctOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.02,
        0.98,
        1
    ], [
        0,
        1,
        1,
        0
    ]);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center pointer-events-none select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 w-8 bg-primary/[0.03] blur-2xl rounded-full"
            }, void 0, false, {
                fileName: "[project]/src/components/ScrollIndicator.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                style: {
                    width: 28,
                    height: HELIX_HEIGHT
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 -translate-x-1/2 w-[1px] rounded-full bg-primary/10",
                        style: {
                            height: HELIX_HEIGHT
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ScrollIndicator.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute left-1/2 -translate-x-1/2 w-[1px] rounded-full bg-gradient-to-b from-primary/50 via-primary/30 to-transparent",
                        style: {
                            height: trackFill,
                            top: 0
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ScrollIndicator.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "28",
                        height: HELIX_HEIGHT,
                        viewBox: `0 0 28 ${HELIX_HEIGHT}`,
                        className: "absolute inset-0",
                        style: {
                            overflow: 'visible'
                        },
                        children: [
                            Array.from({
                                length: NODES_PER_STRAND
                            }).map((_, i)=>{
                                const y = i / (NODES_PER_STRAND - 1) * HELIX_HEIGHT;
                                const phase0 = 0 * (2 * Math.PI / STRAND_COUNT) + i * 0.55;
                                const phase1 = 1 * (2 * Math.PI / STRAND_COUNT) + i * 0.55;
                                const x0 = 14 + Math.sin(phase0) * RADIUS;
                                const x1 = 14 + Math.sin(phase1) * RADIUS;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HelixRung, {
                                    x1: x0,
                                    y1: y,
                                    x2: x1,
                                    y2: y,
                                    index: i,
                                    progress: smoothProgress
                                }, `rung-${i}`, false, {
                                    fileName: "[project]/src/components/ScrollIndicator.tsx",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0));
                            }),
                            Array.from({
                                length: STRAND_COUNT
                            }).map((_, s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HelixStrand, {
                                    strandIndex: s,
                                    color: strandColors[s],
                                    progress: smoothProgress
                                }, `strand-${s}`, false, {
                                    fileName: "[project]/src/components/ScrollIndicator.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ScrollIndicator.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    nodes.map((node, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HelixNodeDot, {
                            node: node,
                            color: strandColors[node.strand],
                            progress: smoothProgress
                        }, idx, false, {
                            fileName: "[project]/src/components/ScrollIndicator.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.6)]",
                        style: {
                            top: markerTop
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 rounded-full bg-primary animate-ping opacity-20"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ScrollIndicator.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ScrollIndicator.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ScrollIndicator.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    rotate: scrollDir === 'down' ? 180 : 0
                },
                transition: {
                    type: 'spring',
                    stiffness: 300,
                    damping: 25
                },
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    className: "opacity-25",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 2L14.09 8.26L20.18 8.26L15.23 12.14L17.18 18.74L12 15.27L6.82 18.74L8.77 12.14L3.82 8.26L9.91 8.26L12 2Z",
                            fill: "hsl(var(--primary))"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ScrollIndicator.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 0L10 5H14L12 0Z",
                            fill: "hsl(var(--primary))",
                            opacity: "0.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ScrollIndicator.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ScrollIndicator.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ScrollIndicator.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                className: "mt-2 text-[9px] font-mono text-primary/30 tracking-widest",
                style: {
                    opacity: pctOpacity
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressText, {
                    progress: smoothProgress
                }, void 0, false, {
                    fileName: "[project]/src/components/ScrollIndicator.tsx",
                    lineNumber: 163,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ScrollIndicator.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ScrollIndicator.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ScrollIndicator, "UGPjke4857hNXZOyXQ7hDc9VUgU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = ScrollIndicator;
/* Sub-components */ const HelixStrand = (param)=>{
    let { strandIndex, color, progress } = param;
    const phaseOffset = strandIndex * (2 * Math.PI / STRAND_COUNT);
    const points = [];
    for(let i = 0; i <= NODES_PER_STRAND * 4; i++){
        const t = i / (NODES_PER_STRAND * 4);
        const y = t * HELIX_HEIGHT;
        const phase = phaseOffset + t * NODES_PER_STRAND * 0.55;
        const x = 14 + Math.sin(phase) * RADIUS;
        points.push(`${x},${y}`);
    }
    const opacity = strandIndex === 0 ? 0.4 : strandIndex === 1 ? 0.2 : 0.1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
        points: points.join(' '),
        fill: "none",
        stroke: color,
        strokeWidth: strandIndex === 0 ? 1.2 : 0.8,
        opacity: opacity,
        strokeLinecap: "round"
    }, void 0, false, {
        fileName: "[project]/src/components/ScrollIndicator.tsx",
        lineNumber: 194,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = HelixStrand;
const HelixRung = (param)=>{
    let { x1, y1, x2, y2, index, progress } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2,
        stroke: "hsl(var(--primary))",
        strokeWidth: "0.5",
        opacity: 0.08,
        strokeDasharray: "2 2"
    }, void 0, false, {
        fileName: "[project]/src/components/ScrollIndicator.tsx",
        lineNumber: 212,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c2 = HelixRung;
const HelixNodeDot = (param)=>{
    let { node, color, progress } = param;
    const x = 14 + Math.sin(node.phase) * RADIUS;
    const depth = Math.cos(node.phase);
    const size = 2 + depth * 1;
    const opacity = 0.15 + depth * 0.15;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute rounded-full",
        style: {
            width: size,
            height: size,
            left: x - size / 2,
            top: node.baseY - size / 2,
            backgroundColor: color,
            opacity,
            transform: `translateZ(${depth * 10}px)`,
            boxShadow: depth > 0.3 ? `0 0 4px ${color}` : 'none'
        }
    }, void 0, false, {
        fileName: "[project]/src/components/ScrollIndicator.tsx",
        lineNumber: 236,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c3 = HelixNodeDot;
const ProgressText = (param)=>{
    let { progress } = param;
    _s1();
    const [pct, setPct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProgressText.useEffect": ()=>{
            const unsubscribe = progress.on('change', {
                "ProgressText.useEffect.unsubscribe": (v)=>{
                    setPct(Math.round(v * 100));
                }
            }["ProgressText.useEffect.unsubscribe"]);
            return unsubscribe;
        }
    }["ProgressText.useEffect"], [
        progress
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            pct,
            "%"
        ]
    }, void 0, true);
};
_s1(ProgressText, "HfwZ8/Grx6oOQimUEoCUcZYGoGk=");
_c4 = ProgressText;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "ScrollIndicator");
__turbopack_context__.k.register(_c1, "HelixStrand");
__turbopack_context__.k.register(_c2, "HelixRung");
__turbopack_context__.k.register(_c3, "HelixNodeDot");
__turbopack_context__.k.register(_c4, "ProgressText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ScrollIndicator.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/ScrollIndicator.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_ScrollIndicator_tsx_6a9bea11._.js.map
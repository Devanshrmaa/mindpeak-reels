(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/rotatingContent.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCurrentMonthStory",
    ()=>getCurrentMonthStory,
    "getCurrentSeasonalBanner",
    ()=>getCurrentSeasonalBanner,
    "getWeeklyTip",
    ()=>getWeeklyTip,
    "monthlySuccessStories",
    ()=>monthlySuccessStories
]);
/**
 * Rotating Content Utility
 * Displays different content each month/week to keep pages fresh.
 * Google sees different content each time it crawls = dynamic / active site.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/examYears.ts [app-client] (ecmascript)");
;
const monthlySuccessStories = [
    {
        id: 'jan',
        month: 0,
        name: 'Rahul Verma',
        city: 'Delhi',
        rank: 'AIR 389',
        exam: 'JEE',
        quote: 'Started with MindPeak in July 2025, achieved AIR 389 in JEE Advanced. The personalized attention made all the difference!'
    },
    {
        id: 'feb',
        month: 1,
        name: 'Priya Sharma',
        city: 'Mumbai',
        rank: 'AIR 156',
        exam: 'NEET',
        quote: "MindPeak's adaptive curriculum helped me improve from 140/300 to 285/300 in just 6 months. Best decision I made!"
    },
    {
        id: 'mar',
        month: 2,
        name: 'Arjun Nair',
        city: 'Kochi',
        rank: 'AIR 512',
        exam: 'JEE',
        quote: 'The 1-on-1 sessions were exactly what I needed. My Physics score jumped from 30 to 85 in JEE Mains.'
    },
    {
        id: 'apr',
        month: 3,
        name: 'Sneha Gupta',
        city: 'Patna',
        rank: '98.5 %ile',
        exam: 'NEET',
        quote: 'Coming from a tier-3 city, quality coaching was impossible before MindPeak. My NEET score went up by 270 marks!'
    },
    {
        id: 'may',
        month: 4,
        name: 'Karthik Menon',
        city: 'Bangalore',
        rank: 'AIR 723',
        exam: 'JEE',
        quote: "My mentor identified exactly where I was losing marks in Organic Chemistry. Targeted practice turned my weakness into a strength."
    },
    {
        id: 'jun',
        month: 5,
        name: 'Ananya Reddy',
        city: 'Hyderabad',
        rank: '97.8 %ile',
        exam: 'NEET',
        quote: 'The Biology-first approach and NCERT mastery program were game-changers. I felt fully prepared walking into the exam hall.'
    },
    {
        id: 'jul',
        month: 6,
        name: 'Vikram Singh',
        city: 'Jaipur',
        rank: 'AIR 198',
        exam: 'JEE',
        quote: 'I left Kota coaching and joined MindPeak. Best decision ever — went from struggling to AIR under 200 in 8 months.'
    },
    {
        id: 'aug',
        month: 7,
        name: 'Kavya Iyer',
        city: 'Chennai',
        rank: '99.1 %ile',
        exam: 'NEET',
        quote: 'My mentor helped me build an exam-day strategy that eliminated careless mistakes. That alone boosted my score by 40+ marks.'
    },
    {
        id: 'sep',
        month: 8,
        name: 'Aditya Kumar',
        city: 'Lucknow',
        rank: 'AIR 445',
        exam: 'JEE',
        quote: 'The weekly analytics showed me exactly which chapters needed work. Data-driven preparation gave me confidence and results.'
    },
    {
        id: 'oct',
        month: 9,
        name: 'Isha Patel',
        city: 'Ahmedabad',
        rank: '98.2 %ile',
        exam: 'NEET',
        quote: 'Juggling boards and NEET seemed impossible until my MindPeak mentor created an integrated study plan. Scored 95%+ in boards too.'
    },
    {
        id: 'nov',
        month: 10,
        name: 'Rohan Das',
        city: 'Kolkata',
        rank: 'AIR 672',
        exam: 'JEE',
        quote: 'The mock test analysis sessions were invaluable. My mentor broke down every paper and we worked on time management methodically.'
    },
    {
        id: 'dec',
        month: 11,
        name: 'Meera Joshi',
        city: 'Pune',
        rank: '97.5 %ile',
        exam: 'NEET',
        quote: 'I tried self-study for a year with no progress. Within 5 months at MindPeak my scores crossed 650 in NEET mocks.'
    }
];
function getCurrentMonthStory(exam) {
    const currentMonth = new Date().getMonth();
    const story = monthlySuccessStories.find((s)=>s.month === currentMonth);
    if (story && (!exam || story.exam === exam)) return story;
    // fallback: find closest month matching the exam filter
    if (exam) {
        const filtered = monthlySuccessStories.filter((s)=>s.exam === exam);
        return filtered.find((s)=>s.month <= currentMonth) || filtered[filtered.length - 1];
    }
    return story ?? monthlySuccessStories[0];
}
/* ─── weekly rotating tips ─── */ const weeklyJEETips = [
    'Focus on weak chapters first — start with the topics that lose you the most marks.',
    'Solve 10 previous-year JEE questions daily for pattern recognition.',
    'Take a full-length mock test under timed conditions this week.',
    "Revise formulas and important derivations — don't learn new topics this week."
];
const weeklyNEETTips = [
    'Revise NCERT Biology line-by-line — 90% of NEET Biology comes from NCERT.',
    'Practice assertion-reason questions daily for Biology and Chemistry.',
    'Take a full-length NEET mock (200 questions, 200 minutes) under exam conditions.',
    'Focus on diagram-based learning this week — label every diagram you find in NCERT.'
];
function getWeeklyTip() {
    let exam = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'JEE';
    const tips = exam === 'NEET' ? weeklyNEETTips : weeklyJEETips;
    const weekOfMonth = Math.floor((new Date().getDate() - 1) / 7);
    return tips[weekOfMonth % tips.length];
}
const seasonalBanners = {
    0: {
        headline: 'New Year, New Start 🎯',
        subtext: `Begin your JEE / NEET journey with a personalized plan for ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]}.`,
        cta: 'Claim New Year Offer'
    },
    1: {
        headline: 'Board Exams Approaching 📝',
        subtext: "Balance boards + competitive exam prep with a personal mentor.",
        cta: 'Get Board + JEE/NEET Plan'
    },
    2: {
        headline: 'JEE Main Session 1 Done ✅',
        subtext: 'Didn\'t score as expected? There\'s still time — start your recovery plan now.',
        cta: 'Start Recovery Plan'
    },
    3: {
        headline: 'JEE Main Session 2 Countdown ⏰',
        subtext: 'Intensive 1-on-1 preparation to maximize your Session 2 score.',
        cta: 'Join Crash Course'
    },
    4: {
        headline: 'NEET Final Countdown 🏥',
        subtext: 'Last-mile preparation with a dedicated mentor. Every mark matters.',
        cta: 'Start NEET Crash Course'
    },
    5: {
        headline: 'JEE Advanced Prep Mode 🔥',
        subtext: 'Qualify for IITs with intensive 1-on-1 Advanced coaching.',
        cta: 'Prepare for Advanced'
    },
    6: {
        headline: 'Results Season 🏆',
        subtext: 'Congratulations to our toppers! New batch starting — limited seats.',
        cta: 'Enroll for Next Cycle'
    },
    7: {
        headline: 'Early Bird Advantage 🐦',
        subtext: 'Start early, score higher. Join the next JEE / NEET batch with a head start.',
        cta: 'Get Early Bird Discount'
    },
    8: {
        headline: 'Foundation Month 📚',
        subtext: 'Build unshakeable fundamentals with our foundation-first approach.',
        cta: 'Start Foundation Course'
    },
    9: {
        headline: 'Diwali Special 🪔',
        subtext: 'Festival offer on all annual plans. Gift your child the best coaching.',
        cta: 'Claim Diwali Offer'
    },
    10: {
        headline: 'Mock Test Marathon 📊',
        subtext: 'Weekly full-length mocks with mentor analysis. Sharpen your exam-day skills.',
        cta: 'Join Test Marathon'
    },
    11: {
        headline: 'Year-End Revision 🎄',
        subtext: 'Complete your syllabus before the new year. Intensive revision sessions available.',
        cta: 'Start Revision Plan'
    }
};
function getCurrentSeasonalBanner() {
    return seasonalBanners[new Date().getMonth()];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/MonthlySuccessStory.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MonthlySuccessStory",
    ()=>MonthlySuccessStory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript) <export default as Quote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rotatingContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/rotatingContent.ts [app-client] (ecmascript)");
;
;
;
;
const MonthlySuccessStory = (param)=>{
    let { exam } = param;
    const story = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rotatingContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentMonthStory"])(exam);
    const monthLabel = new Date().toLocaleDateString('en-IN', {
        month: 'long',
        year: 'numeric'
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
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
            duration: 0.6
        },
        className: "rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                        className: "w-5 h-5 text-primary"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonthlySuccessStory.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-display font-bold text-foreground text-lg sm:text-xl",
                        children: [
                            monthLabel,
                            " Success Story"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MonthlySuccessStory.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MonthlySuccessStory.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                className: "relative pl-4 border-l-2 border-primary/40 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"], {
                        className: "absolute -left-3 -top-1 w-5 h-5 text-primary/40"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonthlySuccessStory.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground text-sm sm:text-base leading-relaxed italic",
                        children: [
                            '"',
                            story.quote,
                            '"'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MonthlySuccessStory.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MonthlySuccessStory.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3 text-xs sm:text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-foreground",
                        children: story.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonthlySuccessStory.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center gap-1 text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                className: "w-3 h-3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MonthlySuccessStory.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            " ",
                            story.city
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MonthlySuccessStory.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center gap-1 text-primary font-semibold",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                className: "w-3 h-3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MonthlySuccessStory.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            " ",
                            story.rank
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MonthlySuccessStory.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "bg-secondary rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground",
                        children: story.exam
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonthlySuccessStory.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MonthlySuccessStory.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MonthlySuccessStory.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = MonthlySuccessStory;
var _c;
__turbopack_context__.k.register(_c, "MonthlySuccessStory");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/MonthlySuccessStory.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/MonthlySuccessStory.tsx [app-client] (ecmascript)"));
}),
"[project]/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Quote
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Quote = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Quote", [
    [
        "path",
        {
            d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
            key: "rib7q0"
        }
    ],
    [
        "path",
        {
            d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
            key: "1ymkrd"
        }
    ]
]);
;
 //# sourceMappingURL=quote.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript) <export default as Quote>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Quote",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MapPin
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const MapPin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("MapPin", [
    [
        "path",
        {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }
    ]
]);
;
 //# sourceMappingURL=map-pin.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapPin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Trophy
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Trophy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Trophy", [
    [
        "path",
        {
            d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6",
            key: "17hqa7"
        }
    ],
    [
        "path",
        {
            d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18",
            key: "lmptdp"
        }
    ],
    [
        "path",
        {
            d: "M4 22h16",
            key: "57wxv0"
        }
    ],
    [
        "path",
        {
            d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
            key: "1nw9bq"
        }
    ],
    [
        "path",
        {
            d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
            key: "1np0yb"
        }
    ],
    [
        "path",
        {
            d: "M18 2H6v7a6 6 0 0 0 12 0V2Z",
            key: "u46fv3"
        }
    ]
]);
;
 //# sourceMappingURL=trophy.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Trophy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_448ddf66._.js.map
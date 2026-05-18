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
"[project]/src/components/SeasonalBanner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SeasonalBanner",
    ()=>SeasonalBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rotatingContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/rotatingContent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DemoBookingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DemoBookingModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const SeasonalBanner = ()=>{
    _s();
    const { openDemoModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DemoBookingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDemoModal"])();
    const banner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rotatingContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentSeasonalBanner"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 12
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.5,
            delay: 0.2
        },
        className: "rounded-xl border border-primary/30 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 p-4 sm:p-5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-display font-bold text-foreground text-base sm:text-lg",
                            children: banner.headline
                        }, void 0, false, {
                            fileName: "[project]/src/components/SeasonalBanner.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground text-xs sm:text-sm mt-0.5",
                            children: banner.subtext
                        }, void 0, false, {
                            fileName: "[project]/src/components/SeasonalBanner.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SeasonalBanner.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: openDemoModal,
                    className: "flex-shrink-0 px-5 py-2.5 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded hover:opacity-90 transition-opacity",
                    children: [
                        banner.cta,
                        " →"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SeasonalBanner.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SeasonalBanner.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/SeasonalBanner.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SeasonalBanner, "UD9b1giaXxHR3fNbtlbWnvGqEWA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DemoBookingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDemoModal"]
    ];
});
_c = SeasonalBanner;
var _c;
__turbopack_context__.k.register(_c, "SeasonalBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SeasonalBanner.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/SeasonalBanner.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_ec87b65c._.js.map
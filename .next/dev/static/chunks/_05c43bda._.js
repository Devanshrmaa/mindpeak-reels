(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/RouterLink.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Link",
    ()=>Link,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
;
const Link = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ to, href, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: ref,
        href: to || href || "/",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/RouterLink.tsx",
        lineNumber: 17,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Link;
Link.displayName = "Link";
;
const __TURBOPACK__default__export__ = Link;
var _c, _c1;
__turbopack_context__.k.register(_c, "Link$forwardRef");
__turbopack_context__.k.register(_c1, "Link");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/examYears.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CURRENT_EXAM_YEAR",
    ()=>CURRENT_EXAM_YEAR,
    "JEE_1Y",
    ()=>JEE_1Y,
    "JEE_2Y",
    ()=>JEE_2Y,
    "JEE_YEAR",
    ()=>JEE_YEAR,
    "MONTHS_TO_JEE",
    ()=>MONTHS_TO_JEE,
    "MONTHS_TO_NEET",
    ()=>MONTHS_TO_NEET,
    "NEET_1Y",
    ()=>NEET_1Y,
    "NEET_2Y",
    ()=>NEET_2Y,
    "NEET_YEAR",
    ()=>NEET_YEAR,
    "ONE_YEAR_TARGET",
    ()=>ONE_YEAR_TARGET,
    "TWO_YEAR_TARGET",
    ()=>TWO_YEAR_TARGET,
    "getCourseTargetYear",
    ()=>getCourseTargetYear,
    "getExamYear",
    ()=>getExamYear
]);
/**
 * Exam Year Auto-Update Utility
 * ─────────────────────────────
 * Computes target years dynamically so the entire site stays current
 * without manual edits. All year references across the codebase
 * should import from here instead of hardcoding.
 *
 * Logic:
 * - JEE Main Session 2 & NEET UG happen in April-May each year.
 * - Once May starts (month index >= 4), the "current" exam cycle is
 *   considered done and everything rolls forward to the next cycle.
 *
 * Example (May 2026 onwards):
 *   CURRENT_EXAM_YEAR = 2027  (next upcoming exam)
 *   ONE_YEAR_TARGET   = 2028  (1-year intensive courses)
 *   TWO_YEAR_TARGET   = 2029  (2-year foundation courses)
 *
 * Example (Jan–Apr 2027):
 *   CURRENT_EXAM_YEAR = 2027  (exams happening this cycle)
 *   ONE_YEAR_TARGET   = 2028
 *   TWO_YEAR_TARGET   = 2029
 */ const now = new Date();
const calendarYear = now.getFullYear();
/**
 * After April (month index >= 4, i.e. May onwards), the current exam
 * session is done — students enrolling now target the NEXT year's exam.
 */ const rollover = now.getMonth() >= 4; // May onwards → roll forward
const CURRENT_EXAM_YEAR = rollover ? calendarYear + 1 : calendarYear;
const ONE_YEAR_TARGET = CURRENT_EXAM_YEAR + 1;
const TWO_YEAR_TARGET = CURRENT_EXAM_YEAR + 2;
const MONTHS_TO_JEE = (()=>{
    const jeeDate = new Date(CURRENT_EXAM_YEAR, 0, 20); // Jan 20
    const diff = jeeDate.getTime() - now.getTime();
    return Math.max(0, Math.round(diff / (1000 * 60 * 60 * 24 * 30.44)));
})();
const MONTHS_TO_NEET = (()=>{
    const neetDate = new Date(CURRENT_EXAM_YEAR, 4, 4); // May 4
    const diff = neetDate.getTime() - now.getTime();
    return Math.max(0, Math.round(diff / (1000 * 60 * 60 * 24 * 30.44)));
})();
const JEE_YEAR = `JEE ${CURRENT_EXAM_YEAR}`;
const NEET_YEAR = `NEET ${CURRENT_EXAM_YEAR}`;
const JEE_1Y = `JEE Target ${ONE_YEAR_TARGET}`;
const JEE_2Y = `JEE Main Target ${TWO_YEAR_TARGET}`;
const NEET_1Y = `NEET Target ${ONE_YEAR_TARGET}`;
const NEET_2Y = `NEET Target ${TWO_YEAR_TARGET}`;
function getExamYear(exam = 'JEE') {
    return `${exam} ${CURRENT_EXAM_YEAR}`;
}
function getCourseTargetYear(duration, exam = 'JEE') {
    const year = duration === '2-year' ? TWO_YEAR_TARGET : ONE_YEAR_TARGET;
    return `${exam} Target ${year}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RouterLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DemoBookingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DemoBookingModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
const logo = '/images/logo.jpeg';
/**
 * Skeleton data shown immediately — no question data needed.
 * Subjects/chapters populate once the user opens the Practice dropdown.
 */ const SKELETON_EXAMS = [
    {
        label: 'JEE',
        slug: 'jee',
        hubPath: '/jee-practice',
        color: 'text-orange-400',
        bg: 'bg-orange-500/10',
        border: 'border-orange-500/30',
        subjects: []
    },
    {
        label: 'NEET',
        slug: 'neet',
        hubPath: '/neet-practice',
        color: 'text-green-400',
        bg: 'bg-green-500/10',
        border: 'border-green-500/30',
        subjects: []
    }
];
const navLinks = [
    {
        label: 'Home',
        href: '/#hero',
        isHash: true
    },
    {
        label: 'JEE Coaching',
        href: '/jee-coaching',
        isRoute: true
    },
    {
        label: 'NEET Coaching',
        href: '/neet-coaching',
        isRoute: true
    },
    {
        label: 'Practice',
        href: '#',
        isPractice: true
    },
    {
        label: 'Courses',
        href: '/courses',
        isRoute: true
    },
    {
        label: 'Pricing',
        href: '/pricing',
        isRoute: true
    },
    {
        label: 'Study Plan',
        href: '/study-plan',
        isRoute: true
    },
    {
        label: 'Blog',
        href: '/blog',
        isRoute: true
    },
    {
        label: 'Contact',
        href: '/contact',
        isRoute: true
    }
];
const Navbar = ()=>{
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { openDemoModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DemoBookingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDemoModal"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const isHome = pathname === '/';
    /* ── Practice data — loaded lazily on dropdown interaction ── */ const [practiceExams, setPracticeExams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(SKELETON_EXAMS);
    const practiceLoadedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const loadPracticeData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Navbar.useCallback[loadPracticeData]": ()=>{
            if (practiceLoadedRef.current) return;
            practiceLoadedRef.current = true;
            Promise.all([
                __turbopack_context__.A("[project]/src/data/practice/index.ts [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/src/data/neet-practice/index.ts [app-client] (ecmascript, async loader)")
            ]).then({
                "Navbar.useCallback[loadPracticeData]": ([practice, neetPractice])=>{
                    practiceLoadedRef.current = true;
                    setPracticeExams([
                        {
                            label: 'JEE',
                            slug: 'jee',
                            hubPath: '/jee-practice',
                            color: 'text-orange-400',
                            bg: 'bg-orange-500/10',
                            border: 'border-orange-500/30',
                            subjects: practice.subjectBanks.map({
                                "Navbar.useCallback[loadPracticeData]": (b)=>({
                                        name: b.subject,
                                        icon: b.icon,
                                        slug: b.slug,
                                        chapters: b.chapters.map({
                                            "Navbar.useCallback[loadPracticeData]": (ch)=>({
                                                    name: ch.name,
                                                    slug: ch.slug,
                                                    firstTopicSlug: ch.topics[0]?.slug ?? '',
                                                    firstQuestionSlug: practice.getPracticeSlugByParams(b.slug, ch.slug, ch.topics[0]?.slug ?? '', 'easy', 1) ?? ''
                                                })
                                        }["Navbar.useCallback[loadPracticeData]"])
                                    })
                            }["Navbar.useCallback[loadPracticeData]"])
                        },
                        {
                            label: 'NEET',
                            slug: 'neet',
                            hubPath: '/neet-practice',
                            color: 'text-green-400',
                            bg: 'bg-green-500/10',
                            border: 'border-green-500/30',
                            subjects: neetPractice.neetSubjectBanks.map({
                                "Navbar.useCallback[loadPracticeData]": (b)=>({
                                        name: b.subject,
                                        icon: b.icon,
                                        slug: b.slug,
                                        chapters: b.chapters.map({
                                            "Navbar.useCallback[loadPracticeData]": (ch)=>({
                                                    name: ch.name,
                                                    slug: ch.slug,
                                                    firstTopicSlug: ch.topics[0]?.slug ?? '',
                                                    firstQuestionSlug: neetPractice.getNEETPracticeSlugByParams(b.slug, ch.slug, ch.topics[0]?.slug ?? '', 'easy', 1) ?? ''
                                                })
                                        }["Navbar.useCallback[loadPracticeData]"])
                                    })
                            }["Navbar.useCallback[loadPracticeData]"])
                        }
                    ]);
                }
            }["Navbar.useCallback[loadPracticeData]"]).catch({
                "Navbar.useCallback[loadPracticeData]": ()=>{
                    practiceLoadedRef.current = false; // allow retry on failure
                }
            }["Navbar.useCallback[loadPracticeData]"]);
        }
    }["Navbar.useCallback[loadPracticeData]"], []);
    /* ── Desktop dropdown state ── */ const [desktopDropdown, setDesktopDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deskExam, setDeskExam] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [deskSubject, setDeskSubject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /* ── Mobile drill-down state ── */ const [mobileLevel, setMobileLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('root');
    const [mobExam, setMobExam] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mobSubject, setMobSubject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>setScrolled(window.scrollY > 50)
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    /* close desktop dropdown on outside click */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handler = {
                "Navbar.useEffect.handler": (e)=>{
                    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                        setDesktopDropdown(false);
                        setDeskExam(null);
                        setDeskSubject(null);
                    }
                }
            }["Navbar.useEffect.handler"];
            document.addEventListener('mousedown', handler);
            return ({
                "Navbar.useEffect": ()=>document.removeEventListener('mousedown', handler)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    /* close menus on route change */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            setDesktopDropdown(false);
            setDeskExam(null);
            setDeskSubject(null);
            setMobileOpen(false);
            setMobileLevel('root');
        }
    }["Navbar.useEffect"], [
        pathname
    ]);
    /* ── helpers ── */ const activeExam = practiceExams.find((e)=>e.slug === (deskExam ?? ''));
    const activeSubject = activeExam?.subjects.find((s)=>s.slug === (deskSubject ?? ''));
    const mobActiveExam = practiceExams.find((e)=>e.slug === (mobExam ?? ''));
    const mobActiveSubject = mobActiveExam?.subjects.find((s)=>s.slug === (mobSubject ?? ''));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
        initial: {
            y: -100
        },
        animate: {
            y: 0
        },
        transition: {
            duration: 0.8,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        },
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${!isHome || scrolled ? 'bg-background/80 backdrop-blur-2xl backdrop-saturate-[180%] border-b border-foreground/[0.06]' : 'bg-transparent'}`,
        role: "navigation",
        "aria-label": "Main navigation",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 py-4 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        to: "/",
                        className: "flex items-center gap-3 group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: logo,
                                alt: "MindPeak Institute",
                                className: "w-9 h-9 rounded-full ring-1 ring-foreground/[0.08] transition-shadow duration-500 group-hover:ring-primary/30",
                                width: 36,
                                height: 36,
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-display font-semibold text-foreground text-base tracking-[0.05em]",
                                children: "MINDPEAK"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Navbar.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:flex items-center gap-6",
                        children: [
                            navLinks.map((link)=>link.isPractice ? /* ── Practice dropdown trigger ── */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    ref: dropdownRef,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onMouseEnter: loadPracticeData,
                                            onFocus: loadPracticeData,
                                            onClick: ()=>{
                                                loadPracticeData();
                                                setDesktopDropdown(!desktopDropdown);
                                                setDeskExam(null);
                                                setDeskSubject(null);
                                            },
                                            className: "flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors text-xs font-medium tracking-wider uppercase whitespace-nowrap",
                                            children: [
                                                "Practice ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: `w-3 h-3 transition-transform ${desktopDropdown ? 'rotate-180' : ''}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 28
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/Navbar.tsx",
                                            lineNumber: 174,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                            children: desktopDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 8
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                exit: {
                                                    opacity: 0,
                                                    y: 8
                                                },
                                                transition: {
                                                    duration: 0.15
                                                },
                                                className: "absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[340px] rounded-xl border border-border bg-background/95 backdrop-blur-xl shadow-2xl overflow-hidden",
                                                children: [
                                                    !deskExam && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-3 space-y-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] uppercase tracking-wider text-muted-foreground px-3 pb-2 font-semibold",
                                                                children: "Choose Exam"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                                                lineNumber: 201,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            practiceExams.map((exam)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setDeskExam(exam.slug),
                                                                    className: `w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-secondary/40 transition-colors text-left`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-display font-semibold text-foreground text-sm",
                                                                            children: [
                                                                                exam.label,
                                                                                " Practice"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/sections/Navbar.tsx",
                                                                            lineNumber: 208,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                            className: "w-4 h-4 text-muted-foreground"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/sections/Navbar.tsx",
                                                                            lineNumber: 209,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, exam.slug, true, {
                                                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                                                    lineNumber: 203,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sections/Navbar.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    deskExam && !deskSubject && activeExam && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-3 space-y-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setDeskExam(null),
                                                                className: "flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors px-3 pb-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/sections/Navbar.tsx",
                                                                        lineNumber: 222,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " Back"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                                                lineNumber: 218,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                                                to: activeExam.hubPath,
                                                                className: `block px-4 py-2 rounded-lg text-xs font-semibold ${activeExam.color} ${activeExam.bg} mb-2 text-center`,
                                                                children: [
                                                                    "View All ",
                                                                    activeExam.label,
                                                                    " Practice →"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                                                lineNumber: 224,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            activeExam.subjects.map((subj)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setDeskSubject(subj.slug),
                                                                    className: "w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-secondary/40 transition-colors text-left",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-lg",
                                                                                    children: subj.icon
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                                                                    lineNumber: 237,
                                                                                    columnNumber: 33
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-sm font-medium text-foreground",
                                                                                    children: subj.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                                                                    lineNumber: 238,
                                                                                    columnNumber: 33
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/sections/Navbar.tsx",
                                                                            lineNumber: 236,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                            className: "w-4 h-4 text-muted-foreground"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/sections/Navbar.tsx",
                                                                            lineNumber: 240,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, subj.slug, true, {
                                                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                                                    lineNumber: 231,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sections/Navbar.tsx",
                                                        lineNumber: 217,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    deskExam && deskSubject && activeExam && activeSubject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setDeskSubject(null),
                                                                className: "flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors px-3 pb-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/sections/Navbar.tsx",
                                                                        lineNumber: 253,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " ",
                                                                    activeExam.label,
                                                                    " Subjects"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                                                lineNumber: 249,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "px-3 pb-2 text-xs font-semibold text-foreground flex items-center gap-1.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: activeSubject.icon
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/sections/Navbar.tsx",
                                                                        lineNumber: 256,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " ",
                                                                    activeSubject.name,
                                                                    " — Topics"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                                                lineNumber: 255,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "max-h-[50vh] overflow-y-auto space-y-0.5 pr-1",
                                                                children: activeSubject.chapters.map((ch)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                                                        to: ch.firstQuestionSlug ? `/${ch.firstQuestionSlug}` : activeExam.hubPath,
                                                                        className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/40 transition-colors",
                                                                        children: ch.name
                                                                    }, ch.slug, false, {
                                                                        fileName: "[project]/src/components/sections/Navbar.tsx",
                                                                        lineNumber: 260,
                                                                        columnNumber: 31
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                                                lineNumber: 258,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sections/Navbar.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                                lineNumber: 191,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Navbar.tsx",
                                            lineNumber: 189,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, "practice", true, {
                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                    lineNumber: 173,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : link.isRoute ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                    to: link.href,
                                    className: "text-muted-foreground hover:text-primary transition-colors text-xs font-medium tracking-wider uppercase whitespace-nowrap",
                                    children: link.label
                                }, link.label, false, {
                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                    lineNumber: 276,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : link.isHash && isHome ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: link.href.replace('/', ''),
                                    className: "text-muted-foreground hover:text-primary transition-colors text-xs font-medium tracking-wider uppercase whitespace-nowrap",
                                    children: link.label
                                }, link.label, false, {
                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                    lineNumber: 284,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                    to: link.href,
                                    className: "text-muted-foreground hover:text-primary transition-colors text-xs font-medium tracking-wider uppercase whitespace-nowrap",
                                    children: link.label
                                }, link.label, false, {
                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                    lineNumber: 292,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: openDemoModal,
                                className: "px-5 py-2.5 bg-primary text-primary-foreground text-[11px] uppercase tracking-[0.15em] font-medium rounded-full hover:shadow-[0_0_20px_-4px_hsl(var(--primary)/0.4)] transition-all duration-500 whitespace-nowrap flex-shrink-0",
                                children: "Book Free Demo"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                lineNumber: 301,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Navbar.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setMobileOpen(!mobileOpen);
                            setMobileLevel('root');
                        },
                        className: "lg:hidden text-foreground p-2",
                        "aria-label": "Toggle menu",
                        children: mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Navbar.tsx",
                            lineNumber: 315,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Navbar.tsx",
                            lineNumber: 315,
                            columnNumber: 43
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Navbar.tsx",
                        lineNumber: 310,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Navbar.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        height: 0
                    },
                    animate: {
                        opacity: 1,
                        height: 'auto'
                    },
                    exit: {
                        opacity: 0,
                        height: 0
                    },
                    className: "lg:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-6 flex flex-col gap-4",
                        children: [
                            mobileLevel === 'root' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    navLinks.map((link)=>link.isPractice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                loadPracticeData();
                                                setMobileLevel('exam');
                                            },
                                            className: "text-foreground text-lg font-display tracking-wider uppercase text-left flex items-center justify-between",
                                            children: [
                                                "Practice ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                    className: "w-5 h-5 text-muted-foreground"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 34
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, "practice", true, {
                                            fileName: "[project]/src/components/sections/Navbar.tsx",
                                            lineNumber: 334,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0)) : link.isRoute ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                            to: link.href,
                                            onClick: ()=>setMobileOpen(false),
                                            className: "text-foreground text-lg font-display tracking-wider uppercase",
                                            children: link.label
                                        }, link.label, false, {
                                            fileName: "[project]/src/components/sections/Navbar.tsx",
                                            lineNumber: 342,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0)) : link.isHash && isHome ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: link.href.replace('/', ''),
                                            onClick: ()=>setMobileOpen(false),
                                            className: "text-foreground text-lg font-display tracking-wider uppercase",
                                            children: link.label
                                        }, link.label, false, {
                                            fileName: "[project]/src/components/sections/Navbar.tsx",
                                            lineNumber: 351,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                            to: link.href,
                                            onClick: ()=>setMobileOpen(false),
                                            className: "text-foreground text-lg font-display tracking-wider uppercase",
                                            children: link.label
                                        }, link.label, false, {
                                            fileName: "[project]/src/components/sections/Navbar.tsx",
                                            lineNumber: 360,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0))),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setMobileOpen(false);
                                            openDemoModal();
                                        },
                                        className: "mt-2 px-6 py-3 border border-primary text-primary text-center uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all w-full",
                                        children: "Book Your Free Demo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Navbar.tsx",
                                        lineNumber: 370,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true),
                            mobileLevel === 'exam' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setMobileLevel('root'),
                                        className: "flex items-center gap-2 text-sm text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                                lineNumber: 386,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Back to Menu"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Navbar.tsx",
                                        lineNumber: 382,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold",
                                        children: "Choose Exam"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Navbar.tsx",
                                        lineNumber: 388,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    practiceExams.map((exam)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setMobExam(exam.slug);
                                                setMobileLevel('subject');
                                            },
                                            className: "w-full flex items-center justify-between px-4 py-4 rounded-xl border border-border bg-card/50 text-left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-display font-semibold text-foreground text-base",
                                                    children: [
                                                        exam.label,
                                                        " Practice"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                                    lineNumber: 395,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                    className: "w-5 h-5 text-muted-foreground"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                                    lineNumber: 396,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, exam.slug, true, {
                                            fileName: "[project]/src/components/sections/Navbar.tsx",
                                            lineNumber: 390,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                lineNumber: 381,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            mobileLevel === 'subject' && mobActiveExam && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setMobileLevel('exam');
                                            setMobSubject(null);
                                        },
                                        className: "flex items-center gap-2 text-sm text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                                lineNumber: 409,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " ",
                                            mobSubject ? `${mobActiveExam.label} Subjects` : 'Exams'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Navbar.tsx",
                                        lineNumber: 405,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    !mobSubject ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                                to: mobActiveExam.hubPath,
                                                onClick: ()=>setMobileOpen(false),
                                                className: `block px-4 py-3 rounded-xl text-sm font-semibold text-center ${mobActiveExam.color} ${mobActiveExam.bg} border ${mobActiveExam.border}`,
                                                children: [
                                                    "View All ",
                                                    mobActiveExam.label,
                                                    " Practice →"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                                lineNumber: 414,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold",
                                                children: "Select Subject"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                                lineNumber: 421,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            mobActiveExam.subjects.map((subj)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setMobSubject(subj.slug),
                                                    className: "w-full flex items-center justify-between px-4 py-3 rounded-xl border border-border bg-card/50 text-left",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xl",
                                                                    children: subj.icon
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                                                    lineNumber: 429,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium text-foreground",
                                                                    children: subj.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                                                    lineNumber: 430,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/sections/Navbar.tsx",
                                                            lineNumber: 428,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                            className: "w-5 h-5 text-muted-foreground"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/Navbar.tsx",
                                                            lineNumber: 432,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, subj.slug, true, {
                                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                                    lineNumber: 423,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        ]
                                    }, void 0, true) : mobActiveSubject ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setMobSubject(null),
                                                className: "flex items-center gap-2 text-sm text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Navbar.tsx",
                                                        lineNumber: 442,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " ",
                                                    mobActiveExam.label,
                                                    " Subjects"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                                lineNumber: 438,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold text-foreground flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: mobActiveSubject.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Navbar.tsx",
                                                        lineNumber: 445,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " ",
                                                    mobActiveSubject.name,
                                                    " — Topics"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                                lineNumber: 444,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1 max-h-[50vh] overflow-y-auto",
                                                children: mobActiveSubject.chapters.map((ch)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                                        to: ch.firstQuestionSlug ? `/${ch.firstQuestionSlug}` : mobActiveExam.hubPath,
                                                        onClick: ()=>setMobileOpen(false),
                                                        className: "block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/40 transition-colors border border-transparent hover:border-border",
                                                        children: ch.name
                                                    }, ch.slug, false, {
                                                        fileName: "[project]/src/components/sections/Navbar.tsx",
                                                        lineNumber: 449,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                                lineNumber: 447,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                lineNumber: 404,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Navbar.tsx",
                        lineNumber: 328,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Navbar.tsx",
                    lineNumber: 322,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Navbar.tsx",
                lineNumber: 320,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Navbar.tsx",
        lineNumber: 147,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Navbar, "WDm1YsGDQjDjg4kMcaUPVS3hWu8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DemoBookingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDemoModal"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SEOHead.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SEOHead",
    ()=>SEOHead
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const SEOHead = ({ title, description, canonical, ogImage, jsonLd })=>{
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const baseUrl = 'https://mindpeakinstitute.com';
    const fullCanonical = canonical || `${baseUrl}${pathname}`;
    const fullOgImage = ogImage || `${baseUrl}/hero-bg.jpg`;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SEOHead.useEffect": ()=>{
            // Title
            document.title = title;
            // Helper to set/create meta tags
            const setMeta = {
                "SEOHead.useEffect.setMeta": (attr, key, content)=>{
                    let el = document.querySelector(`meta[${attr}="${key}"]`);
                    if (!el) {
                        el = document.createElement('meta');
                        el.setAttribute(attr, key);
                        document.head.appendChild(el);
                    }
                    el.setAttribute('content', content);
                }
            }["SEOHead.useEffect.setMeta"];
            setMeta('name', 'description', description);
            setMeta('property', 'og:title', title);
            setMeta('property', 'og:description', description);
            setMeta('property', 'og:url', fullCanonical);
            setMeta('property', 'og:image', fullOgImage);
            setMeta('name', 'twitter:title', title);
            setMeta('name', 'twitter:description', description);
            setMeta('name', 'twitter:image', fullOgImage);
            // Canonical
            let link = document.querySelector('link[rel="canonical"]');
            if (!link) {
                link = document.createElement('link');
                link.setAttribute('rel', 'canonical');
                document.head.appendChild(link);
            }
            link.setAttribute('href', fullCanonical);
        }
    }["SEOHead.useEffect"], [
        title,
        description,
        fullCanonical,
        fullOgImage
    ]);
    // Render JSON-LD as inline script tags — works during SSR so Google can crawl it
    if (!jsonLd) return null;
    const ldArray = Array.isArray(jsonLd) ? jsonLd : [
        jsonLd
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: ldArray.map((ld, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(ld)
                }
            }, i, false, {
                fileName: "[project]/src/components/SEOHead.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false);
};
_s(SEOHead, "V/ldUoOTYUs0Cb2F6bbxKSn7KxI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = SEOHead;
var _c;
__turbopack_context__.k.register(_c, "SEOHead");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/RelatedPages.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RelatedPages",
    ()=>RelatedPages,
    "getRelatedLinksForExam",
    ()=>getRelatedLinksForExam,
    "jeeRelatedLinks",
    ()=>jeeRelatedLinks,
    "neetRelatedLinks",
    ()=>neetRelatedLinks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RouterLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/examYears.ts [app-client] (ecmascript)");
;
;
;
;
const RelatedPages = ({ title = 'You Might Also Like', links, columns = 3, variant = 'default' })=>{
    if (!links.length) return null;
    if (variant === 'sidebar') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "rounded-xl border border-border bg-card/50 p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-display font-bold text-foreground text-sm mb-3",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/components/RelatedPages.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-2",
                    children: links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                to: l.href,
                                className: "group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "w-3 h-3 text-primary/50 group-hover:translate-x-0.5 transition-transform"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RelatedPages.tsx",
                                        lineNumber: 38,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: l.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RelatedPages.tsx",
                                        lineNumber: 39,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    l.tag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-auto text-[10px] uppercase tracking-wider text-primary/60 font-semibold",
                                        children: l.tag
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RelatedPages.tsx",
                                        lineNumber: 40,
                                        columnNumber: 27
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RelatedPages.tsx",
                                lineNumber: 34,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, l.href, false, {
                            fileName: "[project]/src/components/RelatedPages.tsx",
                            lineNumber: 33,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/RelatedPages.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/RelatedPages.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (variant === 'compact') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-2",
            children: links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                    to: l.href,
                    className: "inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary border border-border rounded-full px-3 py-1.5 hover:border-primary/30 transition",
                    children: [
                        l.label,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                            className: "w-3 h-3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/RelatedPages.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, l.href, true, {
                    fileName: "[project]/src/components/RelatedPages.tsx",
                    lineNumber: 53,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/src/components/RelatedPages.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    const gridCols = columns === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-display font-bold text-foreground text-xl sm:text-2xl text-center mb-6",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/RelatedPages.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `grid grid-cols-1 ${gridCols} gap-3`,
                children: links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        to: l.href,
                        className: "group flex items-center justify-between gap-3 p-4 rounded-xl border border-border bg-card/40 hover:border-primary/30 hover:bg-card/70 transition-all",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    l.tag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] uppercase tracking-wider text-primary font-semibold",
                                        children: l.tag
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RelatedPages.tsx",
                                        lineNumber: 79,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-foreground group-hover:text-primary transition-colors",
                                        children: l.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RelatedPages.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RelatedPages.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                className: "w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RelatedPages.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, l.href, true, {
                        fileName: "[project]/src/components/RelatedPages.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/RelatedPages.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RelatedPages.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = RelatedPages;
const jeeRelatedLinks = [
    {
        href: '/jee-coaching',
        label: 'JEE Coaching — 1-on-1',
        tag: 'Service'
    },
    {
        href: '/jee-rank-predictor',
        label: `JEE Rank Predictor ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]}`,
        tag: 'Free Tool'
    },
    {
        href: '/jee-physics-mechanics',
        label: 'JEE Physics: Mechanics Guide',
        tag: 'Chapter'
    },
    {
        href: '/jee-maths-calculus',
        label: 'JEE Maths: Calculus Guide',
        tag: 'Chapter'
    },
    {
        href: '/jee-chemistry-organic-basics',
        label: 'JEE Chemistry: Organic Guide',
        tag: 'Chapter'
    },
    {
        href: '/jee-physics-preparation',
        label: 'JEE Physics Preparation Strategy',
        tag: 'Guide'
    },
    {
        href: '/jee-mock-test-strategy',
        label: 'JEE Mock Test Strategy',
        tag: 'Guide'
    },
    {
        href: '/kota-coaching-alternative',
        label: 'Better Than Kota Coaching',
        tag: 'Compare'
    },
    {
        href: '/free-trial',
        label: 'Book Free Demo Class',
        tag: 'Try Free'
    }
];
const neetRelatedLinks = [
    {
        href: '/neet-coaching',
        label: 'NEET Coaching — 1-on-1',
        tag: 'Service'
    },
    {
        href: '/neet-rank-predictor',
        label: `NEET Rank Predictor ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]}`,
        tag: 'Free Tool'
    },
    {
        href: '/neet-biology-human-physiology',
        label: 'NEET Bio: Human Physiology',
        tag: 'Chapter'
    },
    {
        href: '/neet-biology-genetics',
        label: 'NEET Bio: Genetics Guide',
        tag: 'Chapter'
    },
    {
        href: '/neet-biology-ecology',
        label: 'NEET Bio: Ecology Guide',
        tag: 'Chapter'
    },
    {
        href: '/neet-biology-preparation',
        label: 'NEET Biology Strategy',
        tag: 'Guide'
    },
    {
        href: '/neet-chemistry-organic',
        label: 'NEET Chemistry: Organic',
        tag: 'Chapter'
    },
    {
        href: '/online-vs-offline-jee-coaching',
        label: 'Online vs Offline Coaching',
        tag: 'Compare'
    },
    {
        href: '/free-trial',
        label: 'Book Free Demo Class',
        tag: 'Try Free'
    }
];
function getRelatedLinksForExam(exam) {
    return exam.toLowerCase() === 'jee' ? jeeRelatedLinks : neetRelatedLinks;
}
var _c;
__turbopack_context__.k.register(_c, "RelatedPages");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/PageFooter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageFooter",
    ()=>PageFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RouterLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RelatedPages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RelatedPages.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const logo = '/images/logo.jpeg';
;
const socialLinks = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"],
        href: 'https://instagram.com/mindpeakinstitute',
        label: 'Instagram'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"],
        href: 'https://www.facebook.com/profile.php?id=61584805776923',
        label: 'Facebook'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"],
        href: 'https://www.linkedin.com/company/mindpeak-institute/',
        label: 'LinkedIn'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"],
        href: 'https://x.com/mindpeakins',
        label: 'X / Twitter'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"],
        href: 'https://wa.me/918219457704?text=Hello!!%20MindPeak%20Institute',
        label: 'WhatsApp'
    }
];
/* Static footer sections — no question data needed */ const STATIC_SECTIONS = [
    {
        title: 'JEE Preparation',
        links: [
            {
                label: 'JEE Coaching',
                to: '/jee-coaching'
            },
            {
                label: 'JEE Physics Preparation',
                to: '/jee-physics-preparation'
            },
            {
                label: 'JEE Chemistry Preparation',
                to: '/jee-chemistry-preparation'
            },
            {
                label: 'JEE Mathematics Preparation',
                to: '/jee-mathematics-preparation'
            },
            {
                label: 'JEE Rank Predictor',
                to: '/jee-rank-predictor'
            }
        ]
    },
    {
        title: 'NEET Preparation',
        links: [
            {
                label: 'NEET Coaching',
                to: '/neet-coaching'
            },
            {
                label: 'NEET Physics Preparation',
                to: '/neet-physics-preparation'
            },
            {
                label: 'NEET Chemistry Preparation',
                to: '/neet-chemistry-preparation'
            },
            {
                label: 'NEET Biology Preparation',
                to: '/neet-biology-preparation'
            },
            {
                label: 'NEET Rank Predictor',
                to: '/neet-rank-predictor'
            }
        ]
    },
    {
        title: 'Practice Questions',
        links: [
            {
                label: 'JEE Practice Questions',
                to: '/jee-practice'
            },
            {
                label: 'JEE Previous Year Questions',
                to: '/jee-pyq'
            },
            {
                label: 'NEET Practice Questions',
                to: '/neet-practice'
            },
            {
                label: 'NEET Previous Year Questions',
                to: '/neet-pyq'
            }
        ]
    },
    {
        title: 'Quick Links',
        links: [
            {
                label: 'Courses',
                to: '/courses'
            },
            {
                label: 'Free Trial',
                to: '/free-trial'
            },
            {
                label: 'Pricing',
                to: '/pricing'
            },
            {
                label: 'Study Plan',
                to: '/study-plan'
            },
            {
                label: 'Blog',
                to: '/blog'
            },
            {
                label: 'Contact',
                to: '/contact'
            },
            {
                label: 'Kota Alternative',
                to: '/kota-coaching-alternative'
            }
        ]
    }
];
/**
 * Build full footer sections with question-specific links from lazy-loaded data.
 * Called once data modules are dynamically imported.
 */ function buildQuestionSections(practice, pyq, neetPractice, neetPyq) {
    const jp = (label, subj, ch, topic, diff)=>({
            label,
            to: `/${practice.getPracticeSlugByParams(subj, ch, topic, diff, 1) ?? 'jee-practice'}`
        });
    const np = (label, subj, ch, topic, diff)=>({
            label,
            to: `/${neetPractice.getNEETPracticeSlugByParams(subj, ch, topic, diff, 1) ?? 'neet-practice'}`
        });
    return [
        {
            title: 'JEE Preparation',
            links: STATIC_SECTIONS[0].links
        },
        {
            title: 'NEET Preparation',
            links: STATIC_SECTIONS[1].links
        },
        {
            title: 'JEE Practice Questions',
            links: [
                {
                    label: 'All Practice Questions',
                    to: '/jee-practice'
                },
                ...practice.subjectBanks.flatMap((bank)=>{
                    const ch = bank.chapters[0];
                    const topic = ch?.topics[0];
                    if (!ch || !topic) return [];
                    return [
                        'easy',
                        'medium',
                        'hard'
                    ].map((diff)=>jp(`${bank.subject} ${diff.charAt(0).toUpperCase() + diff.slice(1)} Questions`, bank.slug, ch.slug, topic.slug, diff));
                })
            ]
        },
        {
            title: 'JEE Previous Year Questions',
            links: [
                {
                    label: 'All PYQ Questions',
                    to: '/jee-pyq'
                },
                ...pyq.pyqSubjectBanks.flatMap((bank)=>bank.chapters.slice(0, 2).map((ch)=>({
                            label: `${bank.subject} PYQ — ${ch.name}`,
                            to: `/${pyq.getPYQSlugByParams(bank.slug, ch.slug, 1) ?? 'jee-pyq'}`
                        })))
            ]
        },
        {
            title: 'NEET Practice Questions',
            links: [
                {
                    label: 'All NEET Practice',
                    to: '/neet-practice'
                },
                ...neetPractice.neetSubjectBanks.flatMap((bank)=>{
                    const chapters = bank.chapters.slice(0, bank.slug === 'biology' ? 3 : 2);
                    return chapters.filter((ch)=>ch.topics[0]).map((ch)=>np(`${bank.subject} — ${ch.name}`, bank.slug, ch.slug, ch.topics[0].slug, 'easy'));
                })
            ]
        },
        {
            title: 'NEET Previous Year Questions',
            links: [
                {
                    label: 'All NEET PYQs',
                    to: '/neet-pyq'
                },
                ...neetPyq.neetPyqSubjectBanks.flatMap((bank)=>bank.chapters.slice(0, bank.slug === 'biology' ? 3 : 2).map((ch)=>({
                            label: `${bank.subject} PYQ — ${ch.name}`,
                            to: `/${neetPyq.getNEETPYQSlugByParams(bank.slug, ch.slug, 1) ?? 'neet-pyq'}`
                        })))
            ]
        },
        {
            title: 'Quick Links',
            links: STATIC_SECTIONS[3].links
        }
    ];
}
const importantLinks = [
    {
        label: 'Home',
        to: '/'
    },
    {
        label: 'JEE Coaching',
        to: '/jee-coaching'
    },
    {
        label: 'NEET Coaching',
        to: '/neet-coaching'
    },
    {
        label: 'Courses',
        to: '/courses'
    },
    {
        label: 'Pricing',
        to: '/pricing'
    },
    {
        label: 'Free Trial',
        to: '/free-trial'
    },
    {
        label: 'Kota Alternative',
        to: '/kota-coaching-alternative'
    },
    {
        label: 'JEE Rank Predictor',
        to: '/jee-rank-predictor'
    },
    {
        label: 'NEET Rank Predictor',
        to: '/neet-rank-predictor'
    },
    {
        label: 'Blog',
        to: '/blog'
    },
    {
        label: 'Contact',
        to: '/contact'
    },
    {
        label: 'Terms & Conditions',
        to: '/terms-and-conditions'
    },
    {
        label: 'Refund Policy',
        to: '/refund-policy'
    }
];
const FooterSection = ({ title, links })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-display font-bold text-foreground text-xs uppercase tracking-[0.15em] mb-3",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/PageFooter.tsx",
                lineNumber: 166,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-2",
                children: links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                            to: l.to,
                            className: "text-muted-foreground text-xs hover:text-primary transition-colors",
                            children: l.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageFooter.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, l.to, false, {
                        fileName: "[project]/src/components/PageFooter.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/PageFooter.tsx",
                lineNumber: 167,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PageFooter.tsx",
        lineNumber: 165,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = FooterSection;
const PageFooter = ({ extra })=>{
    _s();
    const [footerSections, setFooterSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(STATIC_SECTIONS);
    const loadedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    /* Lazy-load question data for enriched footer links (below the fold) */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PageFooter.useEffect": ()=>{
            if (loadedRef.current) return;
            loadedRef.current = true;
            Promise.all([
                __turbopack_context__.A("[project]/src/data/practice/index.ts [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/src/data/pyq/index.ts [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/src/data/neet-practice/index.ts [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/src/data/neet-pyq/index.ts [app-client] (ecmascript, async loader)")
            ]).then({
                "PageFooter.useEffect": ([practice, pyq, neetPractice, neetPyq])=>{
                    setFooterSections(buildQuestionSections(practice, pyq, neetPractice, neetPyq));
                }
            }["PageFooter.useEffect"]).catch({
                "PageFooter.useEffect": ()=>{
                    loadedRef.current = false; // allow retry on next render
                }
            }["PageFooter.useEffect"]);
        }
    }["PageFooter.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-background border-t border-border py-10 px-6",
        role: "contentinfo",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-4 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                            to: "/",
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: logo,
                                    alt: "MindPeak Institute",
                                    className: "w-10 h-10 rounded-full",
                                    width: 40,
                                    height: 40,
                                    loading: "lazy"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PageFooter.tsx",
                                    lineNumber: 205,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-display font-bold text-foreground text-lg tracking-wide",
                                    children: "MINDPEAK"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PageFooter.tsx",
                                    lineNumber: 206,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PageFooter.tsx",
                            lineNumber: 204,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground text-sm text-center max-w-md",
                            children: "Personalized 1-on-1 JEE & NEET Coaching — Transforming Aspirants into Achievers."
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageFooter.tsx",
                            lineNumber: 208,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PageFooter.tsx",
                    lineNumber: 203,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 max-w-5xl mx-auto",
                    children: [
                        footerSections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FooterSection, {
                                title: section.title,
                                links: section.links
                            }, section.title, false, {
                                fileName: "[project]/src/components/PageFooter.tsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-display font-bold text-foreground text-xs uppercase tracking-[0.15em] mb-3",
                                    children: "Important Links"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PageFooter.tsx",
                                    lineNumber: 219,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2",
                                    children: importantLinks.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                                to: l.to,
                                                className: "text-muted-foreground text-xs hover:text-primary transition-colors",
                                                children: l.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PageFooter.tsx",
                                                lineNumber: 223,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, l.to, false, {
                                            fileName: "[project]/src/components/PageFooter.tsx",
                                            lineNumber: 222,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PageFooter.tsx",
                                    lineNumber: 220,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PageFooter.tsx",
                            lineNumber: 218,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PageFooter.tsx",
                    lineNumber: 214,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center gap-5 mb-8",
                    children: socialLinks.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: s.href,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            "aria-label": s.label,
                            className: "text-muted-foreground hover:text-primary transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(s.icon, {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PageFooter.tsx",
                                lineNumber: 236,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, s.label, false, {
                            fileName: "[project]/src/components/PageFooter.tsx",
                            lineNumber: 235,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/PageFooter.tsx",
                    lineNumber: 233,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-3 text-xs text-muted-foreground tracking-wider",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                    to: "/terms-and-conditions",
                                    className: "hover:text-primary transition-colors",
                                    children: "Terms & Conditions"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PageFooter.tsx",
                                    lineNumber: 244,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-border",
                                    children: "|"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PageFooter.tsx",
                                    lineNumber: 245,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                    to: "/refund-policy",
                                    className: "hover:text-primary transition-colors",
                                    children: "Refund Policy"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PageFooter.tsx",
                                    lineNumber: 246,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PageFooter.tsx",
                            lineNumber: 243,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "© 2026 MindPeak Institute. All rights reserved.",
                                extra ? ` ${extra}` : ''
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PageFooter.tsx",
                            lineNumber: 248,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PageFooter.tsx",
                    lineNumber: 242,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RelatedPages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RelatedPages"], {
                        title: "Explore More Pages",
                        links: [
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RelatedPages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jeeRelatedLinks"].slice(0, 3),
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RelatedPages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["neetRelatedLinks"].slice(0, 3),
                            {
                                href: '/courses',
                                label: 'All Courses',
                                tag: 'Explore'
                            },
                            {
                                href: '/pricing',
                                label: 'Pricing Plans',
                                tag: 'Info'
                            },
                            {
                                href: '/blog',
                                label: 'Blog & Tips',
                                tag: 'Learn'
                            },
                            {
                                href: '/contact',
                                label: 'Contact Us',
                                tag: 'Help'
                            }
                        ],
                        columns: 2,
                        variant: "compact"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PageFooter.tsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/PageFooter.tsx",
                    lineNumber: 252,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PageFooter.tsx",
            lineNumber: 201,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/PageFooter.tsx",
        lineNumber: 200,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PageFooter, "NH/WMnQ57vgiHJZayO8ApfIgu8k=");
_c1 = PageFooter;
var _c, _c1;
__turbopack_context__.k.register(_c, "FooterSection");
__turbopack_context__.k.register(_c1, "PageFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/PageFAQ.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageFAQ",
    ()=>PageFAQ,
    "buildFAQSchema",
    ()=>buildFAQSchema,
    "buildFAQSchemaFromQA",
    ()=>buildFAQSchemaFromQA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-help.js [app-client] (ecmascript) <export default as HelpCircle>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const PageFAQ = ({ items, heading = 'Frequently Asked', highlight = 'Questions' })=>{
    _s();
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 px-6",
        "aria-label": "Frequently asked questions",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-3xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                                    className: "w-4 h-4 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PageFAQ.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-primary text-xs font-semibold uppercase tracking-widest",
                                    children: "FAQ"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PageFAQ.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PageFAQ.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-display font-bold text-foreground text-3xl sm:text-4xl",
                            children: [
                                heading,
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gradient-gold",
                                    children: highlight
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PageFAQ.tsx",
                                    lineNumber: 38,
                                    columnNumber: 23
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PageFAQ.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PageFAQ.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: items.map((faq, i)=>{
                        const isOpen = openIndex === i;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 16
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                delay: i * 0.05
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `rounded-xl border transition-all duration-300 ${isOpen ? 'bg-background/50 backdrop-blur-xl border-primary/30 shadow-card' : 'bg-background/25 backdrop-blur-lg border-border/40 hover:border-border/70 hover:bg-background/35'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setOpenIndex(isOpen ? null : i),
                                        className: "w-full flex items-center justify-between gap-4 px-5 py-4 text-left",
                                        "aria-expanded": isOpen,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-sm font-semibold transition-colors ${isOpen ? 'text-foreground' : 'text-foreground/80'}`,
                                                children: faq.question
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PageFAQ.tsx",
                                                lineNumber: 66,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                animate: {
                                                    rotate: isOpen ? 180 : 0
                                                },
                                                transition: {
                                                    duration: 0.25
                                                },
                                                className: "flex-shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: `w-4 h-4 ${isOpen ? 'text-primary' : 'text-muted-foreground'}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PageFAQ.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PageFAQ.tsx",
                                                lineNumber: 69,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PageFAQ.tsx",
                                        lineNumber: 61,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                height: 0,
                                                opacity: 0
                                            },
                                            animate: {
                                                height: 'auto',
                                                opacity: 1
                                            },
                                            exit: {
                                                height: 0,
                                                opacity: 0
                                            },
                                            transition: {
                                                duration: 0.25
                                            },
                                            className: "overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-5 pb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PageFAQ.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-muted-foreground text-sm leading-relaxed",
                                                        children: faq.answer
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PageFAQ.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/PageFAQ.tsx",
                                                lineNumber: 82,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PageFAQ.tsx",
                                            lineNumber: 75,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PageFAQ.tsx",
                                        lineNumber: 73,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PageFAQ.tsx",
                                lineNumber: 54,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, i, false, {
                            fileName: "[project]/src/components/PageFAQ.tsx",
                            lineNumber: 47,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/PageFAQ.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PageFAQ.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/PageFAQ.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PageFAQ, "7z1SfW1ag/kVV/D8SOtFgmPOJ8o=");
_c = PageFAQ;
const buildFAQSchema = (items)=>{
    const valid = items.filter((faq)=>faq && typeof faq.question === 'string' && faq.question.trim() !== '' && typeof faq.answer === 'string' && faq.answer.trim() !== '');
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: valid.map((faq)=>({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer
                }
            }))
    };
};
const buildFAQSchemaFromQA = (items)=>{
    const valid = items.filter((faq)=>faq && typeof faq.q === 'string' && faq.q.trim() !== '' && typeof faq.a === 'string' && faq.a.trim() !== '');
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: valid.map((faq)=>({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.a
                }
            }))
    };
};
var _c;
__turbopack_context__.k.register(_c, "PageFAQ");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FeaturedSnippet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeaturedSnippet",
    ()=>FeaturedSnippet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
;
;
const FeaturedSnippet = ({ question, answer, bullets })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "max-w-3xl mx-auto my-5 sm:my-8 rounded-xl border border-primary/20 bg-primary/5 p-4 sm:p-6 md:p-8",
        "aria-label": "Quick answer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-display font-bold text-foreground text-base sm:text-lg md:text-xl mb-2 sm:mb-3",
                children: question
            }, void 0, false, {
                fileName: "[project]/src/components/FeaturedSnippet.tsx",
                lineNumber: 22,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed",
                children: answer
            }, void 0, false, {
                fileName: "[project]/src/components/FeaturedSnippet.tsx",
                lineNumber: 23,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            bullets && bullets.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                className: "mt-4 space-y-2",
                children: bullets.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-start gap-2 text-xs sm:text-sm text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                className: "w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0 mt-0.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FeaturedSnippet.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: b
                            }, void 0, false, {
                                fileName: "[project]/src/components/FeaturedSnippet.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/src/components/FeaturedSnippet.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/FeaturedSnippet.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FeaturedSnippet.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = FeaturedSnippet;
var _c;
__turbopack_context__.k.register(_c, "FeaturedSnippet");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FreshnessBadge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FreshnessBadge",
    ()=>FreshnessBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-client] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/badge-check.js [app-client] (ecmascript) <export default as BadgeCheck>");
;
;
const FreshnessBadge = ({ lastUpdated, verifiedFor })=>{
    const formatted = new Date(lastUpdated).toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap items-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-muted-foreground mb-4 sm:mb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-flex items-center gap-1 sm:gap-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                        className: "w-3 h-3 sm:w-3.5 sm:h-3.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FreshnessBadge.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    "Last Updated: ",
                    formatted
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FreshnessBadge.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            verifiedFor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-flex items-center gap-1 sm:gap-1.5 text-primary font-semibold",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__["BadgeCheck"], {
                        className: "w-3 h-3 sm:w-3.5 sm:h-3.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FreshnessBadge.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    "Verified for ",
                    verifiedFor
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FreshnessBadge.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FreshnessBadge.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = FreshnessBadge;
var _c;
__turbopack_context__.k.register(_c, "FreshnessBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/PeopleAlsoAsk.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PeopleAlsoAsk",
    ()=>PeopleAlsoAsk
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const PeopleAlsoAsk = ({ questions, heading = 'People Also Ask' })=>{
    _s();
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-8 sm:py-12 md:py-16 px-4 sm:px-6",
        "aria-label": "Related questions",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-3xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-display text-foreground text-xl sm:text-2xl md:text-3xl font-bold mb-5 sm:mb-8 text-center",
                    children: heading
                }, void 0, false, {
                    fileName: "[project]/src/components/PeopleAlsoAsk.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2 sm:space-y-3",
                    role: "list",
                    children: questions.map((q, i)=>{
                        const isOpen = openIndex === i;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            role: "listitem",
                            className: "rounded-xl border border-border bg-card/50 overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setOpenIndex(isOpen ? null : i),
                                    className: "w-full flex items-center justify-between px-3.5 sm:px-5 py-3 sm:py-4 text-left gap-3 sm:gap-4",
                                    "aria-expanded": isOpen,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-foreground font-semibold text-xs sm:text-sm md:text-base leading-snug",
                                            children: q.question
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PeopleAlsoAsk.tsx",
                                            lineNumber: 43,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            animate: {
                                                rotate: isOpen ? 180 : 0
                                            },
                                            transition: {
                                                duration: 0.2
                                            },
                                            className: "shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                className: "w-4 h-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PeopleAlsoAsk.tsx",
                                                lineNumber: 53,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PeopleAlsoAsk.tsx",
                                            lineNumber: 48,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PeopleAlsoAsk.tsx",
                                    lineNumber: 38,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-3.5 sm:px-5 pb-4 sm:pb-5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed",
                                        children: q.answer
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PeopleAlsoAsk.tsx",
                                        lineNumber: 61,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PeopleAlsoAsk.tsx",
                                    lineNumber: 58,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, i, true, {
                            fileName: "[project]/src/components/PeopleAlsoAsk.tsx",
                            lineNumber: 33,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/PeopleAlsoAsk.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PeopleAlsoAsk.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/PeopleAlsoAsk.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PeopleAlsoAsk, "7z1SfW1ag/kVV/D8SOtFgmPOJ8o=");
_c = PeopleAlsoAsk;
var _c;
__turbopack_context__.k.register(_c, "PeopleAlsoAsk");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/chapters/jeePhysics.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "jeePhysicsChapters",
    ()=>jeePhysicsChapters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gauge.js [app-client] (ecmascript) <export default as Gauge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$magnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Magnet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/magnet.js [app-client] (ecmascript) <export default as Magnet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/thermometer.js [app-client] (ecmascript) <export default as Thermometer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/waves.js [app-client] (ecmascript) <export default as Waves>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$atom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Atom$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/atom.js [app-client] (ecmascript) <export default as Atom>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/droplets.js [app-client] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
;
const jeePhysicsChapters = [
    {
        slug: 'jee-physics-kinematics',
        exam: 'JEE',
        subject: 'Physics',
        chapter: 'Kinematics',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__["Gauge"],
        weightage: '4-6%',
        difficulty: 'Moderate',
        pyqCount: 55,
        description: 'Kinematics is the starting point of JEE Physics — motion in 1D, 2D, projectile motion, and relative motion. MindPeak mentors build a rock-solid kinematics foundation in the first week itself through visual problem-solving and graph analysis.',
        topics: [
            'Motion in a Straight Line',
            'Equations of Motion',
            'Motion Under Gravity',
            'Projectile Motion',
            'Relative Motion',
            'Motion in 2D',
            'Graphical Analysis (v-t, s-t, a-t)',
            'River Boat & Rain Problems'
        ],
        keyFormulas: [
            'v = u + at',
            's = ut + ½at²',
            'v² = u² + 2as',
            'R = u²sin2θ/g',
            'H = u²sin²θ/2g',
            'T = 2usinθ/g'
        ],
        commonMistakes: [
            'Using equations of motion when acceleration is not constant',
            'Forgetting to resolve components in projectile problems',
            'Wrong sign convention for upward/downward motion',
            'Confusing distance and displacement in graphs'
        ],
        faqs: [
            {
                q: 'How important is Kinematics for JEE?',
                a: 'Kinematics carries 4-6% direct weightage but is the FOUNDATION for all mechanics. Without strong kinematics, Newton\'s laws and energy problems become impossible. MindPeak starts every JEE batch with intensive kinematics training.'
            },
            {
                q: 'What is the best approach to solve projectile motion problems?',
                a: 'Break motion into horizontal (constant velocity) and vertical (acceleration = g) components independently. Practice 50+ projectile problems — most JEE questions are modifications of 4-5 standard types.'
            },
            {
                q: 'How to master graphs in Kinematics?',
                a: 'Understand that slope of s-t = velocity, slope of v-t = acceleration, area under v-t = displacement. Practice converting between all three graph types. MindPeak uses interactive graph exercises in 1-on-1 sessions.'
            }
        ]
    },
    {
        slug: 'jee-physics-newtons-laws',
        exam: 'JEE',
        subject: 'Physics',
        chapter: "Newton's Laws of Motion",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__["Gauge"],
        weightage: '5-7%',
        difficulty: 'Hard',
        pyqCount: 65,
        description: "Newton's Laws form the backbone of JEE Mechanics — free body diagrams, friction, constraints, and pseudo forces. At MindPeak, our IIT-alumni mentors teach FBD techniques that make even the trickiest JEE Advanced problems approachable.",
        topics: [
            "Newton's First Law (Inertia)",
            "Newton's Second Law (F = ma)",
            "Newton's Third Law (Action-Reaction)",
            'Free Body Diagrams',
            'Friction (Static & Kinetic)',
            'Constraint Relations',
            'Pulley & String Problems',
            'Pseudo Forces in Non-Inertial Frames',
            'Circular Motion & Banking'
        ],
        keyFormulas: [
            'F = ma',
            'f_s ≤ μ_s N',
            'f_k = μ_k N',
            'a_c = v²/r',
            'tan θ = v²/rg (banking)',
            'T - mg = mv²/r (vertical circle)'
        ],
        commonMistakes: [
            'Forgetting to draw FBD for ALL bodies in the system',
            'Ignoring pseudo forces in accelerating frames',
            'Wrong direction of friction force',
            'Confusing static and kinetic friction',
            'Not applying constraint equations in pulley systems'
        ],
        faqs: [
            {
                q: "How to master Newton's Laws for JEE Advanced?",
                a: 'The key is FREE BODY DIAGRAMS. Draw FBDs for every problem, even simple ones. 80% of Newton\'s law problems become easy once you correctly identify all forces. MindPeak mentors grade your FBDs in real-time during 1-on-1 sessions.'
            },
            {
                q: 'What are the most common JEE problems from this chapter?',
                a: 'Pulley-block systems, inclined plane with friction, circular motion with constraints, and non-inertial frame problems. JEE Advanced particularly loves constraint-based multi-body problems.'
            },
            {
                q: 'How to handle friction problems in JEE?',
                a: 'First check if the body moves — if applied force < μₛN, the body is static and friction = applied force. Only use μₖN when the body is moving. This distinction catches most students.'
            }
        ]
    },
    {
        slug: 'jee-physics-work-energy-power',
        exam: 'JEE',
        subject: 'Physics',
        chapter: 'Work, Energy & Power',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__["Gauge"],
        weightage: '5-7%',
        difficulty: 'Moderate',
        pyqCount: 60,
        description: 'Work-energy theorem, conservation of energy, and power form a crucial problem-solving toolkit for JEE. MindPeak\'s approach teaches students when to use energy methods vs force methods — a skill that saves 2-3 minutes per problem.',
        topics: [
            'Work Done by Constant & Variable Force',
            'Work-Energy Theorem',
            'Kinetic Energy & Potential Energy',
            'Conservation of Mechanical Energy',
            'Power',
            'Potential Energy Curves',
            'Non-Conservative Forces & Work'
        ],
        keyFormulas: [
            'W = F·d·cosθ',
            'W = ∫F·ds',
            'KE = ½mv²',
            'PE = mgh',
            'W_net = ΔKE',
            'P = F·v',
            'P = dW/dt'
        ],
        commonMistakes: [
            'Using energy conservation when non-conservative forces do work',
            'Wrong reference point for potential energy',
            'Forgetting work done by friction is negative',
            'Confusing instantaneous and average power'
        ],
        faqs: [
            {
                q: 'When should I use energy methods vs Newton\'s laws?',
                a: 'Use energy methods when: (1) you need to find final speed without knowing acceleration, (2) the path is complex but only endpoints matter, (3) variable forces are involved. MindPeak teaches a decision framework for method selection.'
            },
            {
                q: 'How important is Work-Energy for JEE Advanced?',
                a: 'Very important — 5-7% direct weightage. JEE Advanced loves problems where you combine energy conservation with rotational motion or spring systems. These multi-concept problems are MindPeak\'s specialty.'
            }
        ]
    },
    {
        slug: 'jee-physics-centre-of-mass',
        exam: 'JEE',
        subject: 'Physics',
        chapter: 'Centre of Mass & Collisions',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__["Gauge"],
        weightage: '4-5%',
        difficulty: 'Hard',
        pyqCount: 45,
        description: 'Centre of mass, momentum conservation, and collision mechanics are JEE Advanced favourites. These problems combine multiple concepts and require deep physical intuition — exactly what MindPeak\'s personalised coaching develops.',
        topics: [
            'Centre of Mass of Discrete & Continuous Systems',
            'Motion of Centre of Mass',
            'Linear Momentum Conservation',
            'Elastic & Inelastic Collisions',
            'Coefficient of Restitution',
            'Impulse',
            'Variable Mass Systems (Rocket)',
            'Collision in 2D'
        ],
        keyFormulas: [
            'x_cm = Σm_ix_i/Σm_i',
            'p = mv',
            'F_ext = dp/dt = Ma_cm',
            'e = (v₂-v₁)/(u₁-u₂)',
            'KE_loss = ½μv²_rel(1-e²)'
        ],
        commonMistakes: [
            'Not conserving momentum in correct direction for 2D collisions',
            'Forgetting that internal forces do not affect COM motion',
            'Wrong coefficient of restitution formula',
            'Applying energy conservation in inelastic collisions'
        ],
        faqs: [
            {
                q: 'How to approach collision problems in JEE?',
                a: 'Step 1: Conserve momentum (always valid). Step 2: Check if elastic (conserve KE) or use coefficient of restitution. Step 3: Solve simultaneous equations. JEE Advanced often combines collisions with rotational motion.'
            },
            {
                q: 'Are variable mass problems asked in JEE?',
                a: 'Occasionally in JEE Advanced. The rocket equation (F = vdm/dt) and conveyor belt problems appear every 2-3 years. MindPeak covers these in the advanced problem-solving module.'
            }
        ]
    },
    {
        slug: 'jee-physics-rotational-motion',
        exam: 'JEE',
        subject: 'Physics',
        chapter: 'Rotational Motion',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__["Gauge"],
        weightage: '6-8%',
        difficulty: 'Hard',
        pyqCount: 75,
        description: 'Rotational motion — moment of inertia, torque, angular momentum, and rolling — is one of the hardest and most rewarding JEE chapters. MindPeak\'s IIT-alumni mentors break down rotational dynamics using analogy with translational motion for intuitive understanding.',
        topics: [
            'Moment of Inertia & Parallel/Perpendicular Axis Theorems',
            'Torque & Angular Acceleration',
            'Angular Momentum & Conservation',
            'Rotational Kinetic Energy',
            'Rolling Without Slipping',
            'Combined Translational & Rotational Motion',
            'Toppling Problems',
            'Angular Impulse'
        ],
        keyFormulas: [
            'τ = Iα',
            'L = Iω',
            'KE_rot = ½Iω²',
            'I = I_cm + Md² (parallel axis)',
            'v = Rω (rolling)',
            'a = Rα (rolling)',
            'I_disc = ½MR²',
            'I_sphere = ⅖MR²'
        ],
        commonMistakes: [
            'Wrong moment of inertia for standard shapes',
            'Forgetting rolling condition v=Rω',
            'Not considering both angular and linear equations simultaneously',
            'Wrong axis selection for torque calculation',
            'Confusing angular momentum about different axes'
        ],
        faqs: [
            {
                q: 'Why is Rotational Motion so difficult?',
                a: 'Because it requires solving translational AND rotational equations simultaneously, using correct moment of inertia, and applying rolling constraints. MindPeak\'s step-by-step framework makes it systematic: (1) FBD, (2) F=ma, (3) τ=Iα, (4) constraint, (5) solve.'
            },
            {
                q: 'How many questions come from Rotation in JEE Advanced?',
                a: 'Typically 2-3 questions (6-8% of Physics). JEE Advanced loves rolling on incline, angular momentum conservation, and combined collision+rotation problems.'
            },
            {
                q: 'Which books are best for Rotational Motion?',
                a: 'DC Pandey for structured practice, Irodov for challenging problems. NCERT for basics. MindPeak provides a curated 50-problem set covering all JEE pattern types.'
            }
        ]
    },
    {
        slug: 'jee-physics-gravitation',
        exam: 'JEE',
        subject: 'Physics',
        chapter: 'Gravitation',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__["Gauge"],
        weightage: '3-4%',
        difficulty: 'Moderate',
        pyqCount: 35,
        description: 'Gravitation covers Newton\'s law of gravitation, gravitational potential, Kepler\'s laws, and satellite motion. A scoring chapter with 3-4% weightage — MindPeak students typically master it in just 1 week of focused 1-on-1 sessions.',
        topics: [
            "Newton's Law of Gravitation",
            'Gravitational Field & Potential',
            'Gravitational PE',
            'Orbital Velocity & Escape Velocity',
            "Kepler's Laws",
            'Satellite Motion & Geostationary Orbits',
            'Variation of g with Height & Depth'
        ],
        keyFormulas: [
            'F = GMm/r²',
            'g = GM/R²',
            'V_orbital = √(GM/r)',
            'V_escape = √(2GM/R)',
            'T² ∝ r³ (Kepler III)',
            'PE = -GMm/r',
            'g_depth = g(1 - d/R)'
        ],
        commonMistakes: [
            'Forgetting negative sign in gravitational PE',
            'Confusing orbital and escape velocity',
            'Wrong variation of g formula inside vs outside Earth',
            'Not using reduced mass in two-body problems'
        ],
        faqs: [
            {
                q: 'Is Gravitation important for JEE?',
                a: '3-4% direct weightage. Satellite problems and escape velocity are consistently tested. It\'s relatively easy and quick to master — a great scoring opportunity.'
            },
            {
                q: 'How to approach Kepler\'s Laws problems?',
                a: 'Use areal velocity conservation (L conservation) and T² ∝ r³. Most problems reduce to ratio-based calculations. MindPeak mentors teach quick shortcuts for elliptical orbit problems.'
            }
        ]
    },
    {
        slug: 'jee-physics-shm',
        exam: 'JEE',
        subject: 'Physics',
        chapter: 'Simple Harmonic Motion',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"],
        weightage: '4-5%',
        difficulty: 'Hard',
        pyqCount: 50,
        description: 'SHM is the bridge between mechanics and waves — springs, pendulums, and oscillating systems. JEE Advanced frequently tests SHM with creative setups. MindPeak\'s mentors teach the energy method approach that simplifies even complex SHM problems.',
        topics: [
            'SHM Equation & Characteristics',
            'Spring-Mass System',
            'Simple & Compound Pendulum',
            'Energy in SHM',
            'Combinations of Springs (Series/Parallel)',
            'Damped & Forced Oscillations',
            'SHM in Liquids & Angular SHM',
            'Superposition of SHMs'
        ],
        keyFormulas: [
            'x = A sin(ωt + φ)',
            'ω = √(k/m)',
            'T = 2π√(m/k)',
            'T = 2π√(l/g)',
            'E = ½kA²',
            'v = ω√(A² - x²)',
            'a = -ω²x'
        ],
        commonMistakes: [
            'Wrong phase in SHM equation',
            'Confusing angular frequency with frequency',
            'Not considering equivalent spring constant for combinations',
            'Forgetting that SHM requires restoring force proportional to displacement'
        ],
        faqs: [
            {
                q: 'How to identify if motion is SHM?',
                a: 'Check if the restoring force is proportional to displacement from mean position: F = -kx. If yes → SHM with ω = √(k/m). This test works for all systems — springs, pendulums, floating objects, even molecules.'
            },
            {
                q: 'Is SHM asked frequently in JEE Advanced?',
                a: 'Yes! JEE Advanced loves creative SHM setups — spring on incline, SHM of floating body, combined rotation+SHM. Expect 1-2 questions every year. MindPeak\'s problem bank covers 30+ unique SHM setups.'
            }
        ]
    },
    {
        slug: 'jee-physics-fluid-mechanics',
        exam: 'JEE',
        subject: 'Physics',
        chapter: 'Fluid Mechanics',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"],
        weightage: '3-4%',
        difficulty: 'Moderate',
        pyqCount: 35,
        description: 'Fluid mechanics covers pressure, buoyancy, Bernoulli\'s theorem, and viscosity. Often combined with SHM or energy conservation in JEE Advanced. MindPeak mentors teach visual pressure-mapping techniques for complex fluid problems.',
        topics: [
            'Pressure in Fluids',
            'Pascal\'s Law',
            'Archimedes\' Principle & Buoyancy',
            'Bernoulli\'s Theorem',
            'Venturi Meter & Torricelli\'s Theorem',
            'Viscosity & Stokes Law',
            'Surface Tension & Capillarity',
            'Equation of Continuity'
        ],
        keyFormulas: [
            'P = P₀ + ρgh',
            'F_buoyancy = ρ_fluid × V_submerged × g',
            'P + ½ρv² + ρgh = const',
            'v = √(2gh) (Torricelli)',
            'F = 6πηrv (Stokes)',
            'A₁v₁ = A₂v₂'
        ],
        commonMistakes: [
            'Applying Bernoulli to viscous flow',
            'Forgetting atmospheric pressure in pressure calculations',
            'Wrong direction of surface tension force',
            'Confusing gauge and absolute pressure'
        ],
        faqs: [
            {
                q: 'How important is Fluid Mechanics for JEE?',
                a: '3-4% direct weightage. Bernoulli\'s theorem is the most tested concept. JEE Advanced may combine fluids with SHM (floating body oscillation) or rotational motion.'
            },
            {
                q: 'What is the best way to study Fluid Mechanics?',
                a: 'Master the 3 key principles: Pascal\'s law, Archimedes\' principle, Bernoulli\'s equation. Then solve application problems. MindPeak provides a focused 5-day fluid mechanics module.'
            }
        ]
    },
    {
        slug: 'jee-physics-properties-of-matter',
        exam: 'JEE',
        subject: 'Physics',
        chapter: 'Properties of Solids',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__["Gauge"],
        weightage: '2-3%',
        difficulty: 'Easy',
        pyqCount: 25,
        description: 'Elasticity, stress-strain curves, and thermal expansion — a quick-win chapter in JEE with 2-3% weightage. MindPeak students cover this in just 2-3 sessions, freeing time for higher-weightage topics.',
        topics: [
            'Stress & Strain',
            'Young\'s Modulus, Bulk Modulus, Shear Modulus',
            'Stress-Strain Curve',
            'Poisson\'s Ratio',
            'Thermal Stress',
            'Thermal Expansion (Linear, Area, Volume)'
        ],
        keyFormulas: [
            'Stress = F/A',
            'Strain = ΔL/L',
            'Y = Stress/Strain',
            'ΔL = αLΔT',
            'ΔA = 2αAΔT',
            'ΔV = 3αVΔT'
        ],
        commonMistakes: [
            'Confusing different moduli of elasticity',
            'Wrong units for stress',
            'Forgetting bimetallic strip behaviour',
            'Not accounting for thermal stress in fixed rods'
        ],
        faqs: [
            {
                q: 'Is Properties of Matter important for JEE?',
                a: 'Low weightage (2-3%) but very easy marks. Most questions are direct formula applications. MindPeak recommends covering it quickly and using saved time for mechanics or electrodynamics.'
            }
        ]
    },
    {
        slug: 'jee-physics-kinetic-theory',
        exam: 'JEE',
        subject: 'Physics',
        chapter: 'Kinetic Theory of Gases',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__["Thermometer"],
        weightage: '2-3%',
        difficulty: 'Moderate',
        pyqCount: 25,
        description: 'Kinetic theory connects microscopic molecular behaviour to macroscopic gas properties. Overlaps with Chemistry — mastering it once gives you an edge in both subjects. MindPeak covers this cross-subject synergy in integrated 1-on-1 sessions.',
        topics: [
            'Ideal Gas Equation',
            'Kinetic Theory Assumptions',
            'RMS, Average & Most Probable Speed',
            'Degrees of Freedom',
            'Law of Equipartition of Energy',
            'Mean Free Path',
            'Specific Heats (Cp, Cv)',
            'Real Gases & Van der Waals'
        ],
        keyFormulas: [
            'PV = nRT',
            'v_rms = √(3RT/M)',
            'v_avg = √(8RT/πM)',
            'v_mp = √(2RT/M)',
            'KE = f/2 × kT',
            'Cp - Cv = R',
            'γ = Cp/Cv'
        ],
        commonMistakes: [
            'Confusing rms, average, and most probable speeds',
            'Wrong degrees of freedom for polyatomic molecules',
            'Forgetting vibrational modes at high temperatures'
        ],
        faqs: [
            {
                q: 'How is Kinetic Theory linked to Thermodynamics?',
                a: 'KTG provides the microscopic basis for thermodynamic quantities — internal energy = f/2 nRT, Cv = f/2 R. Understanding this link makes both chapters easier. MindPeak teaches them as one integrated unit.'
            }
        ]
    },
    {
        slug: 'jee-physics-thermodynamics',
        exam: 'JEE',
        subject: 'Physics',
        chapter: 'Thermodynamics & Heat Transfer',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__["Thermometer"],
        weightage: '5-7%',
        difficulty: 'Moderate',
        pyqCount: 60,
        description: 'Laws of thermodynamics, PV diagrams, heat engines, and heat transfer are scored heavily in both JEE Main and Advanced. MindPeak mentors use interactive PV-diagram exercises to build visual intuition for thermodynamic processes.',
        topics: [
            'Zeroth Law & Thermal Equilibrium',
            'First Law of Thermodynamics',
            'Isothermal, Adiabatic, Isobaric, Isochoric Processes',
            'PV Diagrams & Work',
            'Carnot Engine & Efficiency',
            'Second Law of Thermodynamics',
            'Entropy',
            'Heat Conduction, Convection & Radiation',
            'Newton\'s Law of Cooling',
            'Stefan-Boltzmann Law'
        ],
        keyFormulas: [
            'ΔU = Q - W',
            'W = ∫PdV',
            'W_isothermal = nRT ln(V₂/V₁)',
            'PVᵞ = const (adiabatic)',
            'η = 1 - T_cold/T_hot',
            'dQ/dt = -kA(dT/dx)',
            'P = σAT⁴'
        ],
        commonMistakes: [
            'Confusing sign of work done BY system vs ON system',
            'Using wrong specific heat (Cp vs Cv) for different processes',
            'Not realising PV diagram area = work done',
            'Forgetting emissivity in radiation problems'
        ],
        faqs: [
            {
                q: 'How to solve PV diagram problems?',
                a: 'Remember: area under curve = work done, enclosed area = net work in cyclic process. For each process, identify the type (iso-/adiabatic) and apply the correct formula. MindPeak provides 25+ PV diagram practice problems.'
            },
            {
                q: 'How is this different from Chemistry Thermodynamics?',
                a: 'Physics focuses on gas processes, PV diagrams, and heat engines. Chemistry focuses on enthalpy, entropy, Gibbs energy, and chemical reactions. MindPeak integrates both in its coaching approach.'
            }
        ]
    },
    {
        slug: 'jee-physics-electrostatics',
        exam: 'JEE',
        subject: 'Physics',
        chapter: 'Electrostatics',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        weightage: '6-8%',
        difficulty: 'Moderate',
        pyqCount: 75,
        description: 'Electrostatics — Coulomb\'s law, electric field, Gauss\'s theorem, potential, and capacitance — is the gateway to all electricity topics in JEE. MindPeak\'s structured approach starts here and builds systematically to EMI and AC circuits.',
        topics: [
            'Coulomb\'s Law & Superposition',
            'Electric Field (Point Charge, Dipole, Ring, Disc)',
            'Electric Field Lines',
            'Gauss\'s Law & Applications',
            'Electric Potential & Potential Energy',
            'Equipotential Surfaces',
            'Conductors in Electrostatic Equilibrium',
            'Capacitors (Parallel Plate, Spherical, Cylindrical)',
            'Dielectrics',
            'Energy Stored in Capacitors'
        ],
        keyFormulas: [
            'F = kq₁q₂/r²',
            'E = kq/r²',
            '∮E·dA = q_enc/ε₀',
            'V = kq/r',
            'C = ε₀A/d',
            'U = ½CV² = Q²/2C',
            'C_series: 1/C = Σ1/Cᵢ',
            'C_parallel: C = ΣCᵢ'
        ],
        commonMistakes: [
            'Wrong Gaussian surface selection',
            'Confusing E-field direction for negative charges',
            'Forgetting dielectric constant in capacitor with dielectric',
            'Sign errors in potential difference',
            'Not accounting for induced charges on conductors'
        ],
        faqs: [
            {
                q: 'How important is Electrostatics for JEE?',
                a: '6-8% direct weightage, plus it\'s the foundation for current electricity, magnetism, and EMI. Combined electricity topics = 25% of JEE Physics. MindPeak builds a 6-week electricity mastery track starting from electrostatics.'
            },
            {
                q: 'How to master Gauss\'s Law?',
                a: 'Understand symmetry — select the right Gaussian surface (sphere for point charge, cylinder for infinite wire, pillbox for infinite plane). Practice 20+ Gauss problems. MindPeak mentors teach symmetry identification as the first step.'
            },
            {
                q: 'What capacitor problems come in JEE Advanced?',
                a: 'Capacitor circuits with dielectrics, partially-filled capacitors, energy stored during charging/discharging, and capacitor combinations. RC circuits combine capacitance with current electricity.'
            }
        ]
    },
    {
        slug: 'jee-physics-current-electricity',
        exam: 'JEE',
        subject: 'Physics',
        chapter: 'Current Electricity',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        weightage: '5-7%',
        difficulty: 'Moderate',
        pyqCount: 65,
        description: 'Current electricity — Ohm\'s law, Kirchhoff\'s laws, Wheatstone bridge, and RC circuits — is one of the most scoring JEE chapters. MindPeak teaches circuit-simplification shortcuts that save valuable exam time.',
        topics: [
            'Ohm\'s Law & Resistance',
            'Resistivity & Temperature Dependence',
            'Series & Parallel Combinations',
            'Kirchhoff\'s Laws (KVL & KCL)',
            'Wheatstone Bridge',
            'Meter Bridge',
            'Potentiometer',
            'RC Circuits (Charging & Discharging)',
            'EMF & Internal Resistance',
            'Heating Effect of Current'
        ],
        keyFormulas: [
            'V = IR',
            'R = ρl/A',
            'P = I²R = V²/R',
            'KVL: ΣV = 0',
            'KCL: ΣI = 0',
            'R_balanced = (P/Q = R/S)',
            'q(t) = CV(1 - e^(-t/RC))',
            'τ = RC'
        ],
        commonMistakes: [
            'Wrong loop direction in KVL',
            'Forgetting internal resistance of battery',
            'Confusing balanced vs unbalanced Wheatstone bridge',
            'Wrong time constant in RC circuits',
            'Not simplifying circuit before applying Kirchhoff'
        ],
        faqs: [
            {
                q: 'Is Current Electricity easy for JEE?',
                a: 'One of the most scoring chapters! 80% of problems are solvable with Kirchhoff\'s laws and Ohm\'s law alone. MindPeak teaches a systematic 4-step circuit solving method that works for any circuit.'
            },
            {
                q: 'How to solve complex circuits?',
                a: 'Step 1: Identify symmetry (if any). Step 2: Simplify series/parallel. Step 3: Apply KVL/KCL for remaining unknowns. Step 4: Solve equations. MindPeak mentors drill this process until it becomes automatic.'
            }
        ]
    },
    {
        slug: 'jee-physics-magnetic-effects',
        exam: 'JEE',
        subject: 'Physics',
        chapter: 'Magnetic Effects of Current',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$magnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Magnet$3e$__["Magnet"],
        weightage: '5-6%',
        difficulty: 'Hard',
        pyqCount: 55,
        description: 'Biot-Savart law, Ampere\'s law, force on conductors, and moving charges in magnetic fields form 5-6% of JEE Physics. Conceptually demanding but highly rewarding with proper guidance from MindPeak\'s expert mentors.',
        topics: [
            'Biot-Savart Law',
            'Magnetic Field of Straight Wire, Loop, Solenoid',
            'Ampere\'s Circuital Law',
            'Force on Moving Charge in B Field',
            'Cyclotron & Velocity Selector',
            'Force Between Parallel Conductors',
            'Moving Coil Galvanometer',
            'Magnetic Dipole & Torque'
        ],
        keyFormulas: [
            'dB = μ₀Idl×r̂/4πr²',
            'B_wire = μ₀I/2πd',
            'B_centre = μ₀I/2R',
            'B_solenoid = μ₀nI',
            'F = qv×B',
            'F = Il×B',
            'r = mv/qB',
            'τ = M×B'
        ],
        commonMistakes: [
            'Wrong direction of magnetic field (right-hand rule errors)',
            'Confusing force on moving charge vs force on current-carrying conductor',
            'Forgetting that B inside solenoid is uniform',
            'Wrong Amperian loop selection'
        ],
        faqs: [
            {
                q: 'How to remember Biot-Savart law direction?',
                a: 'Use the right-hand rule: point fingers along current, curl towards the point — thumb points along dB. Practice with 10 different geometries. MindPeak uses 3D visualization in sessions.'
            },
            {
                q: 'Are cyclotron problems common in JEE?',
                a: 'Yes, 1-2 questions every 3 years. Key formula: r = mv/qB, T = 2πm/qB (independent of velocity). MindPeak covers all standard cyclotron and velocity selector problems.'
            }
        ]
    },
    {
        slug: 'jee-physics-electromagnetic-induction',
        exam: 'JEE',
        subject: 'Physics',
        chapter: 'Electromagnetic Induction',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$magnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Magnet$3e$__["Magnet"],
        weightage: '4-6%',
        difficulty: 'Hard',
        pyqCount: 50,
        description: 'Faraday\'s law, Lenz\'s law, self and mutual inductance, and eddy currents. EMI is conceptually the most challenging electricity topic — MindPeak\'s 1-on-1 coaching ensures students build intuition before tackling problems.',
        topics: [
            'Magnetic Flux',
            'Faraday\'s Law of EMI',
            'Lenz\'s Law',
            'Motional EMF',
            'Self Inductance & Mutual Inductance',
            'Energy Stored in Inductor',
            'LR Circuits',
            'Eddy Currents',
            'Earth\'s Magnetism'
        ],
        keyFormulas: [
            'Φ = B·A·cosθ',
            'emf = -dΦ/dt',
            'emf = Blv (motional)',
            'L = NΦ/I',
            'U = ½LI²',
            'I = I₀(1 - e^(-Rt/L))',
            'τ = L/R'
        ],
        commonMistakes: [
            'Wrong sign of induced EMF (Lenz\'s law)',
            'Forgetting motional EMF = Blv requires conductor moving perpendicular to B',
            'Confusing self and mutual inductance',
            'Wrong time constant in LR circuits'
        ],
        faqs: [
            {
                q: 'How to apply Lenz\'s Law correctly?',
                a: 'The induced current opposes the CHANGE in flux, not the flux itself. If flux is increasing, induced current creates opposing field. If decreasing, it supports the field. MindPeak uses hands-on examples in 1-on-1 sessions.'
            },
            {
                q: 'How important is EMI for JEE Advanced?',
                a: 'Very important — JEE Advanced loves creative EMI problems (rotating coil, slider on rails, RL circuits). Expect 1-2 questions guaranteed. MindPeak\'s advanced module covers 25+ unique EMI problem types.'
            }
        ]
    },
    {
        slug: 'jee-physics-alternating-current',
        exam: 'JEE',
        subject: 'Physics',
        chapter: 'Alternating Current',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        weightage: '3-4%',
        difficulty: 'Moderate',
        pyqCount: 35,
        description: 'AC circuits, phasors, resonance, transformers, and power factor — a scoring chapter that builds directly on EMI concepts. MindPeak\'s phasor-diagram approach makes AC circuits visual and intuitive.',
        topics: [
            'AC Voltage & Current',
            'Peak, Average & RMS Values',
            'AC Through R, L, C',
            'LCR Series Circuit & Phasor Diagram',
            'Resonance & Quality Factor',
            'Power in AC (Power Factor)',
            'Transformers',
            'LC Oscillations'
        ],
        keyFormulas: [
            'V_rms = V₀/√2',
            'X_L = ωL',
            'X_C = 1/ωC',
            'Z = √(R² + (X_L-X_C)²)',
            'ω₀ = 1/√LC (resonance)',
            'P = V_rms I_rms cosφ',
            'Q = ω₀L/R',
            'V₁/V₂ = N₁/N₂'
        ],
        commonMistakes: [
            'Confusing impedance with resistance',
            'Wrong phase relationship in LCR circuits',
            'Forgetting that at resonance X_L = X_C',
            'Not using RMS values for power calculations'
        ],
        faqs: [
            {
                q: 'How to draw AC phasor diagrams?',
                a: 'Start with current as reference. Voltage across R is in phase, across L leads by 90°, across C lags by 90°. Add vectors to get total voltage. MindPeak teaches this visual method which makes any AC problem solvable.'
            },
            {
                q: 'Is AC important for JEE Main?',
                a: 'Yes, very scoring for JEE Main with direct formula-based questions. Transformer problems and resonance conditions are common. Quick 3-4% marks with systematic preparation.'
            }
        ]
    },
    {
        slug: 'jee-physics-ray-optics',
        exam: 'JEE',
        subject: 'Physics',
        chapter: 'Ray Optics',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"],
        weightage: '4-6%',
        difficulty: 'Moderate',
        pyqCount: 55,
        description: 'Reflection, refraction, lenses, prisms, and optical instruments — ray optics is one of the most formulaic and scoring JEE chapters. MindPeak\'s sign-convention drills eliminate the #1 source of errors in optics.',
        topics: [
            'Reflection at Plane & Curved Mirrors',
            'Refraction & Snell\'s Law',
            'Total Internal Reflection',
            'Refraction at Spherical Surfaces',
            'Thin Lens Formula & Lens Combinations',
            'Lens Maker\'s Equation',
            'Prism & Dispersion',
            'Optical Instruments (Microscope, Telescope)',
            'Power of Lens'
        ],
        keyFormulas: [
            '1/v - 1/u = 1/f',
            'n₁sinθ₁ = n₂sinθ₂',
            'sinC = 1/n',
            '1/f = (n-1)(1/R₁ - 1/R₂)',
            'P = 1/f (diopters)',
            'm = -v/u',
            'δ_min = (A+D)/2 for prism'
        ],
        commonMistakes: [
            'Sign convention errors (most common!)',
            'Confusing real and virtual images',
            'Wrong magnification sign interpretation',
            'Forgetting to account for lens thickness in combinations'
        ],
        faqs: [
            {
                q: 'How to avoid sign convention errors in Optics?',
                a: 'Use Cartesian convention CONSISTENTLY: distances measured from pole/optical centre, positive along incident light direction. MindPeak runs a "sign-convention bootcamp" — 50 rapid-fire problems in one session.'
            },
            {
                q: 'Is Ray Optics scoring for JEE?',
                a: 'Extremely scoring! Most problems are direct formula applications with standard patterns. Master 5 problem types (mirror, lens, prism, TIR, combinations) and you cover 90% of questions.'
            }
        ]
    },
    {
        slug: 'jee-physics-wave-optics',
        exam: 'JEE',
        subject: 'Physics',
        chapter: 'Wave Optics',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"],
        weightage: '3-5%',
        difficulty: 'Moderate',
        pyqCount: 40,
        description: 'Young\'s double slit, diffraction, interference, and polarization — wave optics needs conceptual understanding beyond formulas. MindPeak\'s mentors use simulations and visual aids to build wave-optics intuition in 1-on-1 sessions.',
        topics: [
            'Huygens\' Principle',
            'Young\'s Double Slit Experiment (YDSE)',
            'Interference of Light',
            'Fringe Width & Intensity Pattern',
            'Thin Film Interference',
            'Single Slit Diffraction',
            'Resolving Power',
            'Polarization (Malus\'s Law, Brewster\'s Law)'
        ],
        keyFormulas: [
            'β = λD/d (fringe width)',
            'dsinθ = nλ (maxima)',
            'dsinθ = (n+½)λ (minima)',
            'I = I₀cos²(δ/2)',
            'I = I₀cos²θ (Malus)',
            'tan(θ_B) = n (Brewster)'
        ],
        commonMistakes: [
            'Confusing conditions for constructive vs destructive interference',
            'Wrong fringe width formula when medium changes',
            'Forgetting path difference due to thin film includes phase change at reflection',
            'Mixing up single-slit and double-slit patterns'
        ],
        faqs: [
            {
                q: 'Is YDSE asked every year in JEE?',
                a: 'Almost every year! YDSE with modifications (submerged in liquid, shifted slit, white light) is a JEE favourite. Practice 30+ YDSE variations to cover all patterns.'
            },
            {
                q: 'How to prepare Wave Optics for JEE Advanced?',
                a: 'Master YDSE thoroughly (fringe width modifications). Then study single-slit diffraction and thin-film interference. Polarization is asked less frequently. MindPeak covers all variations in 4-5 dedicated sessions.'
            }
        ]
    },
    {
        slug: 'jee-physics-waves-sound',
        exam: 'JEE',
        subject: 'Physics',
        chapter: 'Waves & Sound',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"],
        weightage: '4-6%',
        difficulty: 'Moderate',
        pyqCount: 50,
        description: 'Mechanical waves, standing waves, beats, and Doppler effect — combines mathematical rigor with physical intuition. MindPeak\'s wave-visualization approach uses animations and simulations in 1-on-1 sessions for deeper understanding.',
        topics: [
            'Wave Equation & Properties',
            'Transverse & Longitudinal Waves',
            'Superposition Principle',
            'Standing Waves on Strings',
            'Resonance in Open & Closed Pipes',
            'Beats',
            'Doppler Effect',
            'Speed of Sound'
        ],
        keyFormulas: [
            'v = fλ',
            'y = A sin(kx - ωt)',
            'v_string = √(T/μ)',
            'f_n = nv/2L (open pipe)',
            'f_n = (2n-1)v/4L (closed pipe)',
            'f_beat = |f₁ - f₂|',
            "f' = f(v ± v₀)/(v ∓ vₛ)"
        ],
        commonMistakes: [
            'Wrong sign in Doppler formula (source vs observer approach/recession)',
            'Confusing open and closed pipe harmonics',
            'Forgetting that closed pipe has only odd harmonics',
            'Wrong boundary conditions for standing waves'
        ],
        faqs: [
            {
                q: 'How to remember the Doppler Effect formula?',
                a: 'Use this mnemonic: observer in numerator, source in denominator. If approaching → frequency increases. Use + for observer approaching and - for source approaching (they increase frequency). MindPeak provides a foolproof Doppler chart.'
            },
            {
                q: 'Are Waves important for JEE Advanced?',
                a: '4-6% combined with wave optics. Standing waves on strings and Doppler effect are JEE favourites. Resonance in pipes appears almost every year in some form.'
            }
        ]
    },
    {
        slug: 'jee-physics-modern-physics',
        exam: 'JEE',
        subject: 'Physics',
        chapter: 'Modern Physics',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$atom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Atom$3e$__["Atom"],
        weightage: '5-7%',
        difficulty: 'Hard',
        pyqCount: 65,
        description: 'Photoelectric effect, Bohr model, hydrogen spectrum, X-rays, and de Broglie wavelength. Modern Physics is conceptually beautiful and highly scoring once mastered. MindPeak\'s mentors connect modern physics to real-world applications for deeper understanding.',
        topics: [
            'Photoelectric Effect',
            'Einstein\'s Photoelectric Equation',
            'Bohr\'s Atomic Model',
            'Hydrogen Spectrum (Lyman, Balmer, Paschen)',
            'X-Rays (Continuous & Characteristic)',
            'de Broglie Wavelength',
            'Davisson-Germer Experiment',
            'Heisenberg Uncertainty Principle'
        ],
        keyFormulas: [
            'E = hf = hc/λ',
            'KE_max = hf - φ',
            'r_n = n²a₀/Z',
            'E_n = -13.6Z²/n² eV',
            'λ = h/mv',
            'λ_min = hc/eV (X-ray cutoff)',
            'ΔxΔp ≥ ℏ/2'
        ],
        commonMistakes: [
            'Forgetting work function in photoelectric calculations',
            'Wrong transition identification in hydrogen spectrum',
            'Confusing absorption and emission spectra',
            'Using wrong quantum numbers in Bohr model'
        ],
        faqs: [
            {
                q: 'Is Modern Physics scoring for JEE?',
                a: 'Very scoring! Photoelectric effect and Bohr model problems follow standard patterns. Once you know the formulas and transition rules, most problems are straightforward. 5-7% easy marks.'
            },
            {
                q: 'How to prepare Modern Physics efficiently?',
                a: 'Focus on: (1) Photoelectric numericals, (2) Bohr model energy level transitions, (3) X-ray cutoff wavelength, (4) de Broglie wavelength. Practice 40+ numericals. MindPeak covers all standard types in 5-6 sessions.'
            }
        ]
    },
    {
        slug: 'jee-physics-nuclear-physics',
        exam: 'JEE',
        subject: 'Physics',
        chapter: 'Nuclear Physics & Radioactivity',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$atom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Atom$3e$__["Atom"],
        weightage: '3-4%',
        difficulty: 'Moderate',
        pyqCount: 35,
        description: 'Nuclear reactions, radioactive decay, fission, fusion, and mass-energy equivalence. Quick to master with 3-4% guaranteed marks in JEE. MindPeak students cover nuclear physics in just 3-4 focused sessions.',
        topics: [
            'Nuclear Structure & Size',
            'Mass Defect & Binding Energy',
            'Nuclear Fission & Fusion',
            'Radioactive Decay (α, β, γ)',
            'Half-Life & Decay Constant',
            'Activity & Mean Life',
            'Nuclear Reactions & Q-Value',
            'Mass-Energy Equivalence'
        ],
        keyFormulas: [
            'E = mc²',
            'BE = Δm × 931.5 MeV',
            'N = N₀e^(-λt)',
            't₁/₂ = 0.693/λ',
            'τ = 1/λ',
            'Activity A = λN',
            'Q = (m_reactants - m_products)c²'
        ],
        commonMistakes: [
            'Confusing half-life with mean life',
            'Wrong mass number/atomic number after decay',
            'Forgetting that β-decay changes atomic number',
            'Not using atomic mass units correctly'
        ],
        faqs: [
            {
                q: 'How many questions come from Nuclear Physics in JEE?',
                a: 'Typically 1-2 questions per paper. Radioactive decay and binding energy are most common. Quick to learn, easy marks — MindPeak recommends prioritising this for last-minute preparation.'
            },
            {
                q: 'Is Nuclear Physics conceptually difficult?',
                a: 'Not really — it\'s mostly formula-based with conservation of mass number and atomic number. The key concepts (half-life, binding energy, Q-value) can be mastered in 3-4 hours of focused study.'
            }
        ]
    },
    {
        slug: 'jee-physics-semiconductors',
        exam: 'JEE',
        subject: 'Physics',
        chapter: 'Semiconductor Electronics',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"],
        weightage: '2-4%',
        difficulty: 'Easy',
        pyqCount: 30,
        description: 'P-N junction, diodes, transistors, and logic gates — the easiest scoring chapter in JEE Physics. MindPeak students typically master semiconductors in 2 sessions, gaining quick marks for minimal effort.',
        topics: [
            'Intrinsic & Extrinsic Semiconductors',
            'P-N Junction & Depletion Layer',
            'Forward & Reverse Bias',
            'Diode as Rectifier',
            'Zener Diode',
            'Transistor (NPN/PNP)',
            'Transistor as Amplifier & Switch',
            'Logic Gates (AND, OR, NOT, NAND, NOR)'
        ],
        keyFormulas: [
            'I_E = I_C + I_B',
            'α = I_C/I_E',
            'β = I_C/I_B',
            'β = α/(1-α)',
            'V_in = V_barrier + V_R (diode circuit)'
        ],
        commonMistakes: [
            'Confusing forward and reverse bias conditions',
            'Wrong truth tables for logic gates',
            'Forgetting barrier potential in diode circuits',
            'Confusing NPN and PNP transistor configurations'
        ],
        faqs: [
            {
                q: 'Is Semiconductors important for JEE?',
                a: '2-4% weightage with VERY easy questions. Logic gates and diode-based rectifier problems are most common. Perfect chapter for last-minute preparation — maximum marks for minimum effort.'
            },
            {
                q: 'Do I need to study Semiconductors for JEE Advanced?',
                a: 'JEE Advanced asks 0-1 questions but they are easy when asked. JEE Main asks 1-2 questions consistently. MindPeak recommends covering basics in 2 sessions — don\'t skip free marks!'
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/chapters/jeeChemistry.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "jeeChemistryChapters",
    ()=>jeeChemistryChapters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$atom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Atom$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/atom.js [app-client] (ecmascript) <export default as Atom>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flask-conical.js [app-client] (ecmascript) <export default as FlaskConical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$beaker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Beaker$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/beaker.js [app-client] (ecmascript) <export default as Beaker>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/thermometer.js [app-client] (ecmascript) <export default as Thermometer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/droplets.js [app-client] (ecmascript) <export default as Droplets>");
;
const jeeChemistryChapters = [
    /* ──────── PHYSICAL CHEMISTRY ──────── */ {
        slug: 'jee-chemistry-atomic-structure',
        exam: 'JEE',
        subject: 'Chemistry',
        chapter: 'Atomic Structure',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$atom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Atom$3e$__["Atom"],
        weightage: '3-5%',
        difficulty: 'Moderate',
        pyqCount: 45,
        description: 'Bohr model, quantum numbers, electronic configuration, and photoelectric effect form the foundation of all chemistry topics. MindPeak\'s integrated approach teaches atomic structure with Physics overlap for maximum efficiency.',
        topics: [
            'Bohr Model & Hydrogen Spectrum',
            'Quantum Numbers (n, l, m, s)',
            'Shapes of Orbitals',
            'Electronic Configuration & Aufbau Principle',
            'Pauli Exclusion & Hund\'s Rule',
            'Photoelectric Effect',
            'de Broglie Wavelength',
            'Heisenberg Uncertainty Principle'
        ],
        keyFormulas: [
            'E_n = -13.6Z²/n² eV',
            'r_n = 0.529n²/Z Å',
            'λ = h/mv',
            '1/λ = R_H(1/n₁² - 1/n₂²)',
            'ΔxΔp ≥ h/4π'
        ],
        commonMistakes: [
            'Wrong orbital filling order (Aufbau exceptions: Cr, Cu)',
            'Confusing principal and azimuthal quantum numbers',
            'Wrong number of nodes (radial + angular = n-1)'
        ],
        faqs: [
            {
                q: 'How does Atomic Structure overlap with Physics?',
                a: 'Bohr model, photoelectric effect, and de Broglie wavelength appear in BOTH Physics and Chemistry. MindPeak teaches these once and maps to both subjects — saving 2 weeks of preparation time.'
            },
            {
                q: 'What are the most important concepts for JEE?',
                a: 'Quantum number rules, electronic configuration exceptions (Cr, Cu, etc.), and hydrogen spectrum calculations. Practice 25+ numerical problems from these topics.'
            }
        ]
    },
    {
        slug: 'jee-chemistry-chemical-bonding',
        exam: 'JEE',
        subject: 'Chemistry',
        chapter: 'Chemical Bonding & Molecular Structure',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$atom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Atom$3e$__["Atom"],
        weightage: '5-7%',
        difficulty: 'Hard',
        pyqCount: 65,
        description: 'VSEPR theory, hybridization, MOT, and intermolecular forces are conceptually deep and carry 5-7% JEE weightage. MindPeak\'s 1-on-1 sessions allow deep discussion of bonding concepts that group classes rush through.',
        topics: [
            'Lewis Structures & Formal Charge',
            'VSEPR Theory & Molecular Geometry',
            'Hybridization (sp, sp², sp³, sp³d, sp³d²)',
            'Molecular Orbital Theory',
            'Bond Order & Magnetic Properties',
            'Hydrogen Bonding',
            'Van der Waals Forces',
            'Dipole Moment',
            'Fajan\'s Rule',
            'Back Bonding'
        ],
        keyFormulas: [
            'Bond Order = (Nb - Na)/2',
            'Hybridization = ½(V + M - C + A)',
            'μ = q × d',
            'MOT: σ < σ* < π < π*'
        ],
        commonMistakes: [
            'Wrong hybridization for molecules with lone pairs',
            'Confusing paramagnetic and diamagnetic in MOT',
            'Forgetting back-bonding (BF₃, N(SiH₃)₃)',
            'Wrong molecular geometry vs electron geometry'
        ],
        faqs: [
            {
                q: 'How to predict hybridization quickly?',
                a: 'Count: steric number = bonded atoms + lone pairs. 2→sp, 3→sp², 4→sp³, 5→sp³d, 6→sp³d². Practice with 30 molecules. MindPeak provides a hybridization quick-reference sheet.'
            },
            {
                q: 'Is MOT difficult for JEE Advanced?',
                a: 'MOT is conceptually elegant once you understand the energy level diagram. JEE Advanced asks bond order and magnetic nature prediction. MindPeak\'s visual MOT diagrams make it intuitive.'
            }
        ]
    },
    {
        slug: 'jee-chemistry-states-of-matter',
        exam: 'JEE',
        subject: 'Chemistry',
        chapter: 'States of Matter (Gases & Liquids)',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"],
        weightage: '2-3%',
        difficulty: 'Easy',
        pyqCount: 25,
        description: 'Gas laws, kinetic theory, Van der Waals equation, and liquid properties — a quick-win chapter with 2-3% easy marks. MindPeak students cover this in 2-3 sessions alongside Physics KTG for maximum synergy.',
        topics: [
            'Ideal Gas Equation',
            'Gas Laws (Boyle, Charles, Avogadro)',
            'Dalton\'s Law of Partial Pressures',
            'Graham\'s Law of Diffusion',
            'Kinetic Molecular Theory',
            'Van der Waals Equation',
            'Critical Constants',
            'Compressibility Factor',
            'Vapour Pressure & Humidity'
        ],
        keyFormulas: [
            'PV = nRT',
            '(P + a/V²)(V - b) = RT',
            'Z = PV/nRT',
            'r ∝ 1/√M (Graham)',
            'P_total = ΣP_i (Dalton)'
        ],
        commonMistakes: [
            'Wrong units for R in gas equations',
            'Confusing real gas behaviour at different conditions',
            'Forgetting to convert temperature to Kelvin'
        ],
        faqs: [
            {
                q: 'Is States of Matter scoring?',
                a: 'Yes — easy marks! Gas law numericals are straightforward. Focus on ideal gas equation, Van der Waals corrections, and Graham\'s law. 2-3% guaranteed with 3 hours of preparation.'
            }
        ]
    },
    {
        slug: 'jee-chemistry-thermodynamics',
        exam: 'JEE',
        subject: 'Chemistry',
        chapter: 'Chemical Thermodynamics',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__["Thermometer"],
        weightage: '5-7%',
        difficulty: 'Moderate',
        pyqCount: 55,
        description: 'Enthalpy, entropy, Gibbs energy, and Hess\'s law — chemical thermodynamics overlaps with Physics and carries 5-7% in JEE Chemistry. MindPeak teaches both togther for integrated understanding.',
        topics: [
            'System, Surroundings & Types',
            'First Law of Thermodynamics',
            'Enthalpy & Enthalpy of Reaction',
            'Hess\'s Law & Born-Haber Cycle',
            'Bond Enthalpy',
            'Entropy & Second Law',
            'Gibbs Free Energy',
            'Spontaneity Criteria',
            'Kirchhoff\'s Equation'
        ],
        keyFormulas: [
            'ΔU = q + w',
            'ΔH = ΔU + ΔnRT',
            'ΔG = ΔH - TΔS',
            'ΔG° = -RT ln K',
            'ΔH°_rxn = Σ(ΔH°f products) - Σ(ΔH°f reactants)'
        ],
        commonMistakes: [
            'Wrong sign convention for heat and work',
            'Confusing ΔH and ΔU',
            'Forgetting to use standard conditions for ΔG°',
            'Wrong application of Hess\'s law'
        ],
        faqs: [
            {
                q: 'How does Chemistry Thermodynamics differ from Physics?',
                a: 'Chemistry focuses on enthalpy, Gibbs energy, and chemical reactions. Physics focuses on PV diagrams, heat engines, and gas processes. MindPeak integrates both — you learn once, apply twice.'
            },
            {
                q: 'What is the most tested concept?',
                a: 'Hess\'s law and Born-Haber cycle calculations. ΔG° = -RT ln K for equilibrium-thermodynamics connection. Practice 20+ numericals from these topics.'
            }
        ]
    },
    {
        slug: 'jee-chemistry-chemical-equilibrium',
        exam: 'JEE',
        subject: 'Chemistry',
        chapter: 'Chemical Equilibrium',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"],
        weightage: '4-5%',
        difficulty: 'Moderate',
        pyqCount: 45,
        description: 'Equilibrium constants, Le Chatelier\'s principle, and degree of dissociation — fundamental concepts with 4-5% JEE weightage. MindPeak\'s systematic approach to equilibrium numericals makes this a scoring chapter.',
        topics: [
            'Law of Mass Action',
            'Equilibrium Constants (Kc, Kp, Kx)',
            'Relation Between Kp and Kc',
            'Le Chatelier\'s Principle',
            'Degree of Dissociation',
            'Homogeneous & Heterogeneous Equilibrium',
            'Simultaneous Equilibria',
            'Factors Affecting Equilibrium'
        ],
        keyFormulas: [
            'Kp = Kc(RT)^Δn',
            'Kc = [Products]^n/[Reactants]^m',
            'ΔG° = -RT ln K',
            'α = √(Kc/C) (for small α)',
            'Q vs K comparison for direction'
        ],
        commonMistakes: [
            'Including solids/liquids in equilibrium expression',
            'Wrong effect of catalyst on equilibrium',
            'Confusing reaction quotient Q with equilibrium constant K',
            'Wrong Kp-Kc conversion'
        ],
        faqs: [
            {
                q: 'How to master Le Chatelier\'s Principle?',
                a: 'The system opposes the change. Increase pressure → shifts to fewer moles. Increase temperature → shifts to endothermic direction. Add reactant → shifts to products. Catalyst → no shift. MindPeak drills this with 20 scenario-based problems.'
            }
        ]
    },
    {
        slug: 'jee-chemistry-ionic-equilibrium',
        exam: 'JEE',
        subject: 'Chemistry',
        chapter: 'Ionic Equilibrium',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"],
        weightage: '4-6%',
        difficulty: 'Hard',
        pyqCount: 50,
        description: 'pH, buffers, solubility product, and acid-base equilibria — one of JEE\'s most numerically intensive chapters. MindPeak\'s step-by-step approach to ionic equilibrium problems eliminates common calculation errors.',
        topics: [
            'Acids & Bases (Arrhenius, Brønsted, Lewis)',
            'pH Scale & Calculations',
            'Common Ion Effect',
            'Buffer Solutions',
            'Henderson-Hasselbalch Equation',
            'Solubility Product (Ksp)',
            'Hydrolysis of Salts',
            'Indicators & Titration Curves'
        ],
        keyFormulas: [
            'pH = -log[H⁺]',
            'Kw = [H⁺][OH⁻] = 10⁻¹⁴',
            'pH = pKa + log([A⁻]/[HA])',
            'Ksp = [cation]^m[anion]^n',
            'α = √(Ka/C)'
        ],
        commonMistakes: [
            'Not considering dilution effect on pH',
            'Wrong Henderson equation application',
            'Forgetting polyprotic acid successive ionization',
            'Confusing solubility and solubility product'
        ],
        faqs: [
            {
                q: 'How important is Ionic Equilibrium for JEE Advanced?',
                a: 'Very important — JEE Advanced loves multi-step pH calculations involving buffers, common ion effect, and solubility product. Expect 2-3 tough numericals. MindPeak\'s problem bank covers 40+ ionic equilibrium numerical types.'
            }
        ]
    },
    {
        slug: 'jee-chemistry-redox-reactions',
        exam: 'JEE',
        subject: 'Chemistry',
        chapter: 'Redox Reactions',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        weightage: '2-3%',
        difficulty: 'Easy',
        pyqCount: 20,
        description: 'Oxidation states, balancing redox equations, and equivalents — a quick chapter that\'s prerequisite for electrochemistry. MindPeak covers redox and electrochemistry back-to-back for efficient learning.',
        topics: [
            'Oxidation States & Rules',
            'Identifying Oxidising/Reducing Agents',
            'Balancing Redox Equations (Ion-Electron Method)',
            'Disproportionation Reactions',
            'Equivalent Weight & n-Factor',
            'Titration Based on Redox'
        ],
        keyFormulas: [
            'n-factor = change in oxidation state per molecule',
            'meq of oxidant = meq of reductant (titration)',
            'Equivalent weight = Molecular weight / n-factor'
        ],
        commonMistakes: [
            'Wrong oxidation state assignment for complex molecules',
            'Not balancing in acidic vs basic medium correctly',
            'Wrong n-factor for disproportionation reactions'
        ],
        faqs: [
            {
                q: 'Is Redox important on its own?',
                a: 'Low direct weightage (2-3%) but it\'s ESSENTIAL for electrochemistry, metallurgy, and qualitative analysis. Master oxidation states and n-factor — they appear everywhere in chemistry.'
            }
        ]
    },
    {
        slug: 'jee-chemistry-electrochemistry',
        exam: 'JEE',
        subject: 'Chemistry',
        chapter: 'Electrochemistry',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        weightage: '4-5%',
        difficulty: 'Moderate',
        pyqCount: 45,
        description: 'Galvanic cells, Nernst equation, electrolysis, and Faraday\'s laws — scoring 4-5% chapter with predictable problem types. MindPeak\'s sign-convention clarity eliminates the most common electrochemistry errors.',
        topics: [
            'Electrode Potential & Standard Hydrogen Electrode',
            'Electrochemical Series',
            'Nernst Equation',
            'Galvanic Cell & Cell Notation',
            'Electrolytic Cell',
            'Faraday\'s Laws of Electrolysis',
            'Conductance & Molar Conductivity',
            'Kohlrausch\'s Law',
            'Corrosion'
        ],
        keyFormulas: [
            'E_cell = E°_cell - (RT/nF)ln Q',
            'E_cell = E°_cathode - E°_anode',
            'ΔG° = -nFE°',
            'w = ZIt (Faraday)',
            'Λ°m = Λ°_+ + Λ°_- (Kohlrausch)'
        ],
        commonMistakes: [
            'Wrong anode/cathode identification',
            'Sign confusion in Nernst equation',
            'Wrong value of n in Nernst equation',
            'Confusing molar and equivalent conductivity'
        ],
        faqs: [
            {
                q: 'How to avoid sign confusion in Electrochemistry?',
                a: 'Remember: Anode = Oxidation (both start with vowels). Cell EMF = E_cathode - E_anode (always). MindPeak teaches a colour-coded convention system that eliminates confusion permanently.'
            }
        ]
    },
    {
        slug: 'jee-chemistry-chemical-kinetics',
        exam: 'JEE',
        subject: 'Chemistry',
        chapter: 'Chemical Kinetics',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"],
        weightage: '4-5%',
        difficulty: 'Moderate',
        pyqCount: 40,
        description: 'Rate laws, order of reaction, Arrhenius equation, and half-life — a scoring chapter with consistent JEE presence. MindPeak\'s graph-analysis approach makes kinetics problems systematic and quick to solve.',
        topics: [
            'Rate of Reaction',
            'Rate Law & Order of Reaction',
            'First Order & Zero Order Reactions',
            'Half-Life & Integrated Rate Law',
            'Arrhenius Equation & Activation Energy',
            'Molecularity vs Order',
            'Pseudo First Order Reactions',
            'Effect of Temperature on Rate'
        ],
        keyFormulas: [
            'Rate = k[A]^n',
            'k = (2.303/t)log(a/(a-x)) (1st order)',
            't₁/₂ = 0.693/k (1st order)',
            't₁/₂ = a₀/2k (zero order)',
            'k = Ae^(-Ea/RT)',
            'log(k₂/k₁) = Ea/2.303R × (T₂-T₁)/T₁T₂'
        ],
        commonMistakes: [
            'Confusing order and molecularity',
            'Wrong integrated rate equation selection',
            'Forgetting units of k vary with order',
            'Not using log vs ln correctly in Arrhenius equation'
        ],
        faqs: [
            {
                q: 'Is Chemical Kinetics scoring?',
                a: 'Very scoring! Mostly numerical with standard formulas. First-order kinetics and Arrhenius equation are tested almost every year. MindPeak recommends practising 30+ numericals for guaranteed marks.'
            }
        ]
    },
    {
        slug: 'jee-chemistry-solutions',
        exam: 'JEE',
        subject: 'Chemistry',
        chapter: 'Solutions & Colligative Properties',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$beaker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Beaker$3e$__["Beaker"],
        weightage: '3-4%',
        difficulty: 'Moderate',
        pyqCount: 35,
        description: 'Raoult\'s law, colligative properties, Van\'t Hoff factor, and abnormal molecular mass — consistently tested in JEE Main. MindPeak teaches colligative properties with real-world examples for intuitive understanding.',
        topics: [
            'Types of Solutions & Concentration Terms',
            'Raoult\'s Law',
            'Ideal & Non-Ideal Solutions',
            'Colligative Properties (ΔTb, ΔTf, π)',
            'Van\'t Hoff Factor',
            'Abnormal Molecular Mass',
            'Osmotic Pressure',
            'Henry\'s Law'
        ],
        keyFormulas: [
            'P = P°x (Raoult)',
            'ΔTb = Kb × m × i',
            'ΔTf = Kf × m × i',
            'π = iCRT',
            'i = 1 + (n-1)α (association: i = 1 - (1-1/n)α)'
        ],
        commonMistakes: [
            'Wrong Van\'t Hoff factor for different electrolytes',
            'Confusing boiling point elevation and freezing point depression',
            'Wrong molality calculation',
            'Forgetting association vs dissociation in i calculation'
        ],
        faqs: [
            {
                q: 'How important are Colligative Properties for JEE?',
                a: '3-4% with predictable numerical patterns. Master ΔTb, ΔTf, and osmotic pressure formulas with Van\'t Hoff factor. These are easy marks when you practice 20+ problems.'
            }
        ]
    },
    {
        slug: 'jee-chemistry-surface-chemistry',
        exam: 'JEE',
        subject: 'Chemistry',
        chapter: 'Surface Chemistry',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"],
        weightage: '2-3%',
        difficulty: 'Easy',
        pyqCount: 20,
        description: 'Adsorption, catalysis, colloids, and emulsions — a low-effort, moderate-reward chapter. MindPeak recommends spending 2-3 sessions on surface chemistry for quick marks in both JEE Main and Advanced.',
        topics: [
            'Physical & Chemical Adsorption',
            'Adsorption Isotherms (Freundlich, Langmuir)',
            'Catalysis (Homogeneous & Heterogeneous)',
            'Colloids (Types, Properties, Preparation)',
            'Tyndall Effect & Brownian Motion',
            'Coagulation & Peptization',
            'Emulsions',
            'Hardy-Schulze Rule'
        ],
        keyFormulas: [
            'x/m = kP^(1/n) (Freundlich)',
            'x/m = aP/(1+bP) (Langmuir)',
            'Gold number = mg of protective colloid'
        ],
        commonMistakes: [
            'Confusing physical and chemical adsorption trends',
            'Wrong charge on colloidal particles',
            'Forgetting Hardy-Schulze rule for coagulation'
        ],
        faqs: [
            {
                q: 'Is Surface Chemistry asked in JEE Advanced?',
                a: 'Rarely directly, but colloid-based questions appear in comprehension passages. JEE Main asks 1-2 straightforward questions. MindPeak covers the essentials in 2 sessions for maximum ROI.'
            }
        ]
    },
    /* ──────── ORGANIC CHEMISTRY ──────── */ {
        slug: 'jee-chemistry-goc',
        exam: 'JEE',
        subject: 'Chemistry',
        chapter: 'General Organic Chemistry (GOC)',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"],
        weightage: '4-6%',
        difficulty: 'Hard',
        pyqCount: 55,
        description: 'IUPAC nomenclature, isomerism, electronic effects (inductive, mesomeric, hyperconjugation), and reaction intermediates — the foundation of ALL organic chemistry. MindPeak\'s mentors spend 2 weeks building GOC mastery before any other organic topic.',
        topics: [
            'IUPAC Nomenclature',
            'Structural & Stereoisomerism',
            'Electronic Effects (I, M, H, R)',
            'Inductive Effect',
            'Resonance & Mesomeric Effect',
            'Hyperconjugation',
            'Reaction Intermediates (Carbocations, Carbanions, Free Radicals)',
            'Acidic & Basic Strength Comparison',
            'Aromaticity'
        ],
        keyFormulas: [
            'Degree of Unsaturation = (2C+2+N-H-X)/2',
            'Stability: 3° > 2° > 1° (carbocations)',
            'Acidity: more stable conjugate base → stronger acid'
        ],
        commonMistakes: [
            'Wrong IUPAC priority for naming',
            'Confusing +I and -I groups',
            'Forgetting hyperconjugation in stability comparisons',
            'Wrong stereochemistry assignment (R/S, E/Z)'
        ],
        faqs: [
            {
                q: 'Why is GOC so important?',
                a: 'Because EVERY organic reaction is governed by electronic effects learned in GOC. If you understand why a carbocation is stable, you understand Markownikoff\'s rule, SN1, and E1 — ALL from the same concept. MindPeak builds this foundation first.'
            },
            {
                q: 'How to compare acidity/basicity?',
                a: 'Compare stability of the conjugate base (for acidity) or conjugate acid (for basicity). Use electronic effects: -I/+M/resonance stabilisation. MindPeak provides a flowchart that works for any comparison.'
            }
        ]
    },
    {
        slug: 'jee-chemistry-hydrocarbons',
        exam: 'JEE',
        subject: 'Chemistry',
        chapter: 'Hydrocarbons',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"],
        weightage: '3-4%',
        difficulty: 'Moderate',
        pyqCount: 35,
        description: 'Alkanes, alkenes, alkynes, and aromatic hydrocarbons — reactions, mechanisms, and electrophilic substitution. MindPeak teaches hydrocarbon chemistry through reaction mechanism understanding, not memorization.',
        topics: [
            'Alkanes (Halogenation, Combustion)',
            'Alkenes (Addition Reactions, Markownikoff)',
            'Alkynes (Acidity, Addition)',
            'Aromatic Hydrocarbons (Benzene)',
            'Electrophilic Aromatic Substitution',
            'Friedel-Crafts Reactions',
            'Ozonolysis',
            'Orientation Effects (o/p vs m-directing)'
        ],
        keyFormulas: [
            'Markownikoff\'s Rule (H adds to C with more H)',
            'Anti-Markownikoff (peroxide effect — only for HBr)',
            'Saytzeff Rule (more substituted alkene preferred)',
            'Hückel Rule: 4n+2 π electrons → aromatic'
        ],
        commonMistakes: [
            'Anti-Markownikoff works only with HBr (not HCl/HI)',
            'Wrong directing effects in aromatic substitution',
            'Forgetting that alkynes are acidic (terminal H)',
            'Wrong ozonolysis products'
        ],
        faqs: [
            {
                q: 'How to master aromatic substitution?',
                a: 'Learn which groups are o/p-directing (+M, -I weak) vs m-directing (-I strong, -M). Then practice predicting products for 20+ substituted benzene reactions. MindPeak provides a directing-group map.'
            }
        ]
    },
    {
        slug: 'jee-chemistry-haloalkanes',
        exam: 'JEE',
        subject: 'Chemistry',
        chapter: 'Haloalkanes & Haloarenes',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"],
        weightage: '3-4%',
        difficulty: 'Hard',
        pyqCount: 35,
        description: 'SN1, SN2, E1, E2 mechanisms, and nucleophilic substitution — the heart of organic reaction mechanisms. MindPeak\'s mechanism-first approach ensures students understand WHY reactions occur, not just what happens.',
        topics: [
            'SN1 & SN2 Mechanisms',
            'E1 & E2 Mechanisms',
            'Factors Affecting SN vs E',
            'Wurtz Reaction',
            'Grignard Reagent',
            'Nucleophilic Substitution at sp² Carbon',
            'Ullmann Reaction',
            'DDT & Freons (Environmental)'
        ],
        keyFormulas: [
            'SN2: Rate = k[substrate][nucleophile] (inversion)',
            'SN1: Rate = k[substrate] (racemisation)',
            'E2: anti-periplanar elimination',
            'Grignard: RMgX + CO₂ → RCOOH'
        ],
        commonMistakes: [
            'Confusing SN1 vs SN2 reaction conditions',
            'Forgetting stereochemistry (inversion in SN2, racemisation in SN1)',
            'Wrong competition between substitution and elimination',
            'Not identifying the better nucleophile/base'
        ],
        faqs: [
            {
                q: 'How to decide between SN1/SN2/E1/E2?',
                a: 'Check: (1) substrate — 3° favours SN1/E1, 1° favours SN2/E2, (2) nucleophile — strong nucleophile/weak base → SN2, strong base → E2, (3) solvent — polar protic → SN1/E1, polar aprotic → SN2. MindPeak teaches a decision tree that covers all cases.'
            }
        ]
    },
    {
        slug: 'jee-chemistry-alcohols-phenols-ethers',
        exam: 'JEE',
        subject: 'Chemistry',
        chapter: 'Alcohols, Phenols & Ethers',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"],
        weightage: '3-5%',
        difficulty: 'Moderate',
        pyqCount: 40,
        description: 'Preparation and reactions of alcohols, phenols, and ethers — important functional groups with 3-5% JEE weightage. MindPeak\'s reaction-flowchart method connects all conversions visually for quick revision.',
        topics: [
            'Preparation of Alcohols',
            'Reactions of Alcohols (Oxidation, Dehydration, Esterification)',
            'Phenol Preparation & Reactions',
            'Kolbe Reaction & Reimer-Tiemann',
            'Williamson Ether Synthesis',
            'Reactions of Ethers',
            'Acidity Comparison (Alcohol vs Phenol)',
            'Lucas Test & Victor Meyer Test'
        ],
        keyFormulas: [
            'Acidity: Phenol > Water > Alcohol',
            'Lucas Test: 3° instant, 2° 5 min, 1° no reaction',
            'Williamson: R-O-Na + R\'X → R-O-R\''
        ],
        commonMistakes: [
            'Confusing acid-catalysed vs base-catalysed dehydration',
            'Wrong product in Williamson synthesis with bulky groups',
            'Forgetting phenol reactions specific to aromatic ring'
        ],
        faqs: [
            {
                q: 'How to compare acidity of alcohols and phenols?',
                a: 'Phenols are more acidic because phenoxide ion is stabilized by resonance with the benzene ring. Among alcohols: electron-withdrawing groups increase acidity. MindPeak teaches this through GOC principles.'
            }
        ]
    },
    {
        slug: 'jee-chemistry-aldehydes-ketones',
        exam: 'JEE',
        subject: 'Chemistry',
        chapter: 'Aldehydes & Ketones',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"],
        weightage: '4-5%',
        difficulty: 'Moderate',
        pyqCount: 45,
        description: 'Nucleophilic addition, named reactions (Aldol, Cannizzaro, Wittig), and distinguishing tests for carbonyl compounds. MindPeak\'s pattern-recognition approach helps students predict products of unknown carbonyl reactions.',
        topics: [
            'Nucleophilic Addition Mechanism',
            'Aldol Condensation',
            'Cannizzaro Reaction',
            'Crossed Aldol & Crossed Cannizzaro',
            'Wittig Reaction',
            'Wolff-Kishner & Clemmensen Reduction',
            'Tollens\' & Fehling\'s Tests',
            'HVZ Reaction',
            'Beckmann Rearrangement'
        ],
        keyFormulas: [
            'Aldol: 2 CH₃CHO → CH₃CH(OH)CH₂CHO',
            'Cannizzaro: 2HCHO + NaOH → HCOONa + CH₃OH',
            'Tollens: RCHO + [Ag(NH₃)₂]⁺ → silver mirror'
        ],
        commonMistakes: [
            'Confusing which aldehydes give Aldol vs Cannizzaro',
            'Wrong conditions for Wolff-Kishner vs Clemmensen',
            'Forgetting that ketones don\'t give Tollens\' test',
            'Wrong product in crossed Aldol reactions'
        ],
        faqs: [
            {
                q: 'How to remember Aldol vs Cannizzaro conditions?',
                a: 'Aldol: needs α-hydrogen + dilute base. Cannizzaro: NO α-hydrogen + conc. NaOH. If the aldehyde has α-H → Aldol. If not → Cannizzaro. MindPeak uses this simple rule to eliminate confusion.'
            },
            {
                q: 'Which named reactions are most asked in JEE?',
                a: 'Aldol, Cannizzaro, Wolff-Kishner, Clemmensen, Wittig, and Beckmann. Master these 6 and you cover 90% of JEE carbonyl questions.'
            }
        ]
    },
    {
        slug: 'jee-chemistry-carboxylic-acids',
        exam: 'JEE',
        subject: 'Chemistry',
        chapter: 'Carboxylic Acids & Derivatives',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"],
        weightage: '3-4%',
        difficulty: 'Moderate',
        pyqCount: 35,
        description: 'Carboxylic acids, esters, acid chlorides, anhydrides, and amides — preparation, properties, and interconversions. MindPeak\'s functional-group-interconversion charts connect all organic chapters into one unified map.',
        topics: [
            'Preparation of Carboxylic Acids',
            'Acidity & Factors Affecting',
            'Hell-Volhard-Zelinsky Reaction',
            'Ester Formation & Hydrolysis',
            'Acid Derivatives Reactivity',
            'Kolbe Electrolysis',
            'Decarboxylation',
            'Hunsdiecker Reaction',
            'Arndt-Eistert Synthesis'
        ],
        keyFormulas: [
            'Acidity order: -COOH > -OH (phenol) > -OH (alcohol)',
            'HVZ: RCH₂COOH + Br₂/P → RCHBrCOOH',
            'Fischer esterification: RCOOH + R\'OH ⇌ RCOOR\' + H₂O'
        ],
        commonMistakes: [
            'Wrong acidity comparison (forgetting -I and +M effects)',
            'Confusing HVZ with other α-halogenation',
            'Wrong product in decarboxylation reactions'
        ],
        faqs: [
            {
                q: 'How to compare acidity of carboxylic acids?',
                a: 'Look at (1) -I groups → increase acidity, (2) +I groups (alkyl) → decrease acidity, (3) resonance effects, (4) distance of substituent from -COOH. MindPeak provides 30 acidity comparison problems with solutions.'
            }
        ]
    },
    {
        slug: 'jee-chemistry-amines',
        exam: 'JEE',
        subject: 'Chemistry',
        chapter: 'Amines & Diazonium Salts',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"],
        weightage: '3-4%',
        difficulty: 'Moderate',
        pyqCount: 35,
        description: 'Basicity of amines, preparation, reactions, and diazonium salt chemistry — important for JEE organic. The Sandmeyer reaction alone is asked almost every year. MindPeak covers all diazonium conversions in one comprehensive session.',
        topics: [
            'Classification & Nomenclature',
            'Preparation of Amines',
            'Basicity of Amines (Gas vs Solution)',
            'Hofmann Bromamide Degradation',
            'Gabriel Phthalimide Synthesis',
            'Carbylamine Test',
            'Hinsberg Test',
            'Diazonium Salt Preparation',
            'Sandmeyer & Related Reactions',
            'Coupling Reaction (Azo Dyes)'
        ],
        keyFormulas: [
            'Basicity (gas): 3° > 2° > 1° > NH₃',
            'Basicity (solution): 2° > 1° > 3° > NH₃',
            'Sandmeyer: ArN₂⁺ + CuX → ArX + N₂'
        ],
        commonMistakes: [
            'Wrong basicity order in gas phase vs aqueous solution',
            'Confusing Hofmann degradation with Hofmann elimination',
            'Forgetting that diazonium salts are unstable except at 0-5°C'
        ],
        faqs: [
            {
                q: 'Why is basicity order different in gas vs solution?',
                a: 'In gas phase: only inductive effect matters (3° > 2° > 1°). In solution: solvation + steric effects also matter (2° wins as it balances +I effect and solvation). MindPeak explains this with clear energy diagrams.'
            }
        ]
    },
    {
        slug: 'jee-chemistry-biomolecules',
        exam: 'JEE',
        subject: 'Chemistry',
        chapter: 'Biomolecules',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"],
        weightage: '2-3%',
        difficulty: 'Easy',
        pyqCount: 20,
        description: 'Carbohydrates, amino acids, proteins, nucleic acids, and vitamins — factual chapter with easy marks. MindPeak recommends using mnemonics and visual maps for efficient biomolecule revision.',
        topics: [
            'Carbohydrates (Mono, Di, Polysaccharides)',
            'Glucose & Fructose Structure',
            'Amino Acids & Peptide Bond',
            'Protein Structure (Primary to Quaternary)',
            'Enzymes',
            'Nucleic Acids (DNA & RNA)',
            'Vitamins & Hormones'
        ],
        keyFormulas: [
            'C₆H₁₂O₆ (glucose)',
            'Peptide bond: -CO-NH-',
            'DNA: A=T (2 H-bonds), G≡C (3 H-bonds)'
        ],
        commonMistakes: [
            'Confusing D and L configurations',
            'Wrong sugar classification (aldo vs keto)',
            'Mixing up essential and non-essential amino acids'
        ],
        faqs: [
            {
                q: 'Is Biomolecules important for JEE?',
                a: '2-3% easy marks, purely factual from NCERT. Spend 2-3 hours on this chapter. MindPeak provides a 1-page summary sheet covering everything you need.'
            }
        ]
    },
    {
        slug: 'jee-chemistry-polymers',
        exam: 'JEE',
        subject: 'Chemistry',
        chapter: 'Polymers & Chemistry in Everyday Life',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"],
        weightage: '2-3%',
        difficulty: 'Easy',
        pyqCount: 20,
        description: 'Types of polymers, polymerisation mechanisms, and applications — low-effort scoring chapter. MindPeak students cover polymers alongside practical chemistry for time-efficient preparation.',
        topics: [
            'Addition & Condensation Polymers',
            'Natural & Synthetic Rubber',
            'Nylon, Bakelite, PVC, Teflon',
            'Biodegradable Polymers',
            'Drugs & Pharmaceuticals',
            'Soaps & Detergents',
            'Food Preservatives & Sweeteners'
        ],
        keyFormulas: [
            'Addition polymer: single monomer repeated',
            'Condensation polymer: two monomers + small molecule lost',
            'Nylon-6,6: hexamethylenediamine + adipic acid'
        ],
        commonMistakes: [
            'Confusing addition and condensation polymer types',
            'Wrong monomer identification for common polymers',
            'Mixing up homopolymer and copolymer'
        ],
        faqs: [
            {
                q: 'Is this chapter asked in JEE Advanced?',
                a: 'Rarely in Advanced. But JEE Main asks 1-2 factual questions consistently. Easy marks — spend 2 hours on this. MindPeak includes it in the last-week revision module.'
            }
        ]
    },
    /* ──────── INORGANIC CHEMISTRY ──────── */ {
        slug: 'jee-chemistry-periodic-table',
        exam: 'JEE',
        subject: 'Chemistry',
        chapter: 'Periodic Table & Classification',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$atom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Atom$3e$__["Atom"],
        weightage: '3-4%',
        difficulty: 'Moderate',
        pyqCount: 35,
        description: 'Periodic trends, electronic configuration, and classification of elements — the roadmap to all inorganic chemistry. MindPeak\'s trend-derivation technique means students understand WHY each trend exists, not just memorize it.',
        topics: [
            'Modern Periodic Law',
            'Electronic Configuration & Blocks',
            'Atomic Radius (Covalent, Van der Waals, Metallic)',
            'Ionization Energy',
            'Electron Affinity',
            'Electronegativity (Pauling, Mulliken)',
            'Anomalous Behaviour (2nd Period)',
            'Diagonal Relationships'
        ],
        keyFormulas: [
            'IE trend: increases left→right, decreases top→bottom',
            'EA: Group 17 highest (except F < Cl)',
            'Electronegativity: F > O > N > Cl',
            'Diagonal: Li~Mg, Be~Al, B~Si'
        ],
        commonMistakes: [
            'Wrong IE trend for half-filled/fully-filled exceptions',
            'Confusing EA of F and Cl',
            'Forgetting anomalous behaviour of 2nd period elements',
            'Wrong diagonal relationship pairs'
        ],
        faqs: [
            {
                q: 'How to remember periodic trends?',
                a: 'Understand the underlying cause: IE depends on nuclear charge and shielding, EA depends on size and electron-electron repulsion. Once you know WHY, the trend is obvious. MindPeak teaches trends through cause, not memorization.'
            }
        ]
    },
    {
        slug: 'jee-chemistry-s-block',
        exam: 'JEE',
        subject: 'Chemistry',
        chapter: 's-Block Elements (Alkali & Alkaline Earth)',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$beaker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Beaker$3e$__["Beaker"],
        weightage: '2-3%',
        difficulty: 'Easy',
        pyqCount: 25,
        description: 's-Block elements — Group 1 (Li to Cs) and Group 2 (Be to Ra) properties, compounds, and anomalies. NCERT-focused chapter with easy marks. MindPeak\'s visual comparison charts make s-block retention effortless.',
        topics: [
            'Group 1 Properties & Trends',
            'Group 2 Properties & Trends',
            'Alkali Metal Compounds (NaOH, Na₂CO₃)',
            'Alkaline Earth Compounds (CaO, CaCO₃, CaSO₄)',
            'Diagonal Relationship (Li~Mg, Be~Al)',
            'Anomalous Behaviour of Li & Be',
            'Flame Colours',
            'Biological Importance'
        ],
        keyFormulas: [
            'Li → Crimson, Na → Yellow, K → Violet, Ca → Brick Red, Sr → Red, Ba → Green',
            'Solubility of hydroxides: increases down the group (Group 2)',
            'Thermal stability of carbonates: increases down the group'
        ],
        commonMistakes: [
            'Confusing solubility trends of sulphates vs hydroxides',
            'Wrong flame colours',
            'Forgetting that Li and Be show anomalous behavior',
            'Wrong trend for thermal stability of carbonates'
        ],
        faqs: [
            {
                q: 'How to study s-Block for JEE?',
                a: 'NCERT is 100% sufficient. Read tables and trends carefully. Focus on diagonal relationships, flame colours, and compound properties. MindPeak provides a 1-page s-block summary card.'
            }
        ]
    },
    {
        slug: 'jee-chemistry-p-block-13-14',
        exam: 'JEE',
        subject: 'Chemistry',
        chapter: 'p-Block Elements — Group 13 & 14',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$beaker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Beaker$3e$__["Beaker"],
        weightage: '4-5%',
        difficulty: 'Moderate',
        pyqCount: 45,
        description: 'Boron group (B, Al, Ga, In, Tl) and Carbon group (C, Si, Ge, Sn, Pb) — compounds, allotropes, and back-bonding. MindPeak breaks p-block into group-wise modules for targeted preparation.',
        topics: [
            'Boron — Borax, Boric Acid, Boron Hydrides',
            'Aluminium — Alum, Thermite',
            'Diborane & Back Bonding in BF₃',
            'Inert Pair Effect',
            'Carbon Allotropes (Diamond, Graphite, Fullerene)',
            'Silicon — Silicones & Zeolites',
            'Tin & Lead Compounds',
            'Group 14 Hydrides & Oxides'
        ],
        keyFormulas: [
            'BF₃: sp² hybridized (back bonding with F)',
            'Inert pair effect: increases down the group',
            'CO₂: linear, SiO₂: network solid',
            'PbO₂: strong oxidizing agent (Pb⁴⁺ → Pb²⁺)'
        ],
        commonMistakes: [
            'Forgetting back bonding in BF₃',
            'Confusing +2 and +4 oxidation state stability down the group',
            'Wrong structure of diborane (3c-2e bonds)',
            'Mixing up silicones and silicates'
        ],
        faqs: [
            {
                q: 'What is the inert pair effect?',
                a: 'Heavier elements in groups 13-15 prefer lower oxidation state (+1 for Tl, +2 for Pb, Sn) because the 6s² electrons become reluctant to bond. This explains why PbO₂ is a strong oxidizer. MindPeak connects inert pair effect to all relevant reactions.'
            },
            {
                q: 'How important is Group 13-14 for JEE?',
                a: '4-5% combined. Diborane structure, boron compounds, carbon allotropes, and inert pair effect are JEE favourites. Focus on NCERT + these key concepts.'
            }
        ]
    },
    {
        slug: 'jee-chemistry-p-block-15-16',
        exam: 'JEE',
        subject: 'Chemistry',
        chapter: 'p-Block Elements — Group 15 & 16',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$beaker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Beaker$3e$__["Beaker"],
        weightage: '4-6%',
        difficulty: 'Moderate',
        pyqCount: 50,
        description: 'Nitrogen group (N, P, As, Sb, Bi) and Oxygen group (O, S, Se, Te, Po). Ammonia, nitric acid, sulphuric acid, and allotropes — high-value NCERT content. MindPeak\'s compound-mapping technique covers all reactions systematically.',
        topics: [
            'Nitrogen — NH₃, HNO₃, N₂O₅',
            'Phosphorus — Allotropes, PCl₃, PCl₅, H₃PO₄',
            'Group 15 Hydrides & Oxides',
            'Oxygen — Ozone, H₂O₂',
            'Sulphur — Allotropes, H₂SO₄ (Contact Process)',
            'SO₂ & SO₃',
            'Interhalogen Analogy',
            'Oxoacids of N, P, S'
        ],
        keyFormulas: [
            'NH₃: sp³, pyramidal, lone pair',
            'HNO₃: Ostwald process',
            'H₂SO₄: Contact process',
            'Basicity of H₃PO₄ = 3, H₃PO₃ = 2, H₃PO₂ = 1'
        ],
        commonMistakes: [
            'Wrong basicity of phosphorus oxoacids',
            'Confusing structures of different allotropes of phosphorus',
            'Wrong oxidation states in nitrogen oxides',
            'Forgetting that ozone is angular (not linear)'
        ],
        faqs: [
            {
                q: 'How to remember oxoacids of phosphorus?',
                a: 'Count the -OH groups for basicity: H₃PO₄ has 3(-OH), H₃PO₃ has 2(-OH) + 1(P-H), H₃PO₂ has 1(-OH) + 2(P-H). The P-H bonds are NOT acidic. MindPeak uses structural diagrams to make this obvious.'
            },
            {
                q: 'Is manufacturing processes (Contact, Ostwald) asked in JEE?',
                a: 'Yes, conditions and catalysts are tested. H₂SO₄ (Contact process: V₂O₅ catalyst) and HNO₃ (Ostwald process: Pt/Rh catalyst) are asked frequently.'
            }
        ]
    },
    {
        slug: 'jee-chemistry-p-block-17-18',
        exam: 'JEE',
        subject: 'Chemistry',
        chapter: 'p-Block Elements — Group 17 & 18 (Halogens & Noble Gases)',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$beaker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Beaker$3e$__["Beaker"],
        weightage: '3-4%',
        difficulty: 'Moderate',
        pyqCount: 35,
        description: 'Halogens (F, Cl, Br, I) and Noble gases (He through Rn) — properties, interhalogen compounds, and xenon compounds. NCERT-focused with predictable JEE patterns. MindPeak covers Group 17-18 in 3 concentrated sessions.',
        topics: [
            'Halogen Properties & Trends',
            'HF, HCl, HBr, HI — Acid Strength & Stability',
            'Interhalogen Compounds',
            'Oxoacids of Chlorine',
            'Bleaching Powder & CaOCl₂',
            'Noble Gas Configuration',
            'Xenon Compounds (XeF₂, XeF₄, XeF₆, XeO₃)',
            'Clathrates'
        ],
        keyFormulas: [
            'Acid strength: HI > HBr > HCl > HF',
            'Reducing power: HI > HBr > HCl',
            'Oxidizing power: F₂ > Cl₂ > Br₂ > I₂',
            'XeF₂: sp³d (linear), XeF₄: sp³d² (square planar)'
        ],
        commonMistakes: [
            'Confusing acid strength and bond strength trends for HX',
            'Wrong geometry of XeF₂/XeF₄/XeF₆',
            'Forgetting anomalous properties of fluorine',
            'Wrong oxidation state of Cl in oxoacids'
        ],
        faqs: [
            {
                q: 'Why is fluorine anomalous?',
                a: 'Small size → no d-orbitals → can\'t expand octet, high electronegativity → strongest oxidizer, very low F-F bond energy (due to lone pair repulsion). MindPeak explains all anomalies from one root cause: small atomic size.'
            }
        ]
    },
    {
        slug: 'jee-chemistry-d-block',
        exam: 'JEE',
        subject: 'Chemistry',
        chapter: 'd-Block Elements (Transition Metals)',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$beaker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Beaker$3e$__["Beaker"],
        weightage: '4-6%',
        difficulty: 'Moderate',
        pyqCount: 50,
        description: 'd-Block elements — electronic configuration anomalies, variable oxidation states, coloured compounds, and catalytic properties. A crucial chapter linking to coordination chemistry. MindPeak\'s visual periodic table approach connects all d-block properties logically.',
        topics: [
            'Electronic Configuration Anomalies (Cr, Cu)',
            'Variable Oxidation States',
            'Colour of Transition Metal Compounds',
            'Magnetic Properties',
            'Catalytic Activity',
            'Formation of Complexes',
            'Interstitial Compounds',
            'Alloy Formation',
            'Key Compounds (K₂Cr₂O₇, KMnO₄)'
        ],
        keyFormulas: [
            'Cr: [Ar]3d⁵4s¹ (not 3d⁴4s²)',
            'Cu: [Ar]3d¹⁰4s¹ (not 3d⁹4s²)',
            'μ = √(n(n+2)) BM (spin-only)',
            'MnO₄⁻: d⁰, still coloured (charge transfer)'
        ],
        commonMistakes: [
            'Wrong electronic configuration for Cr, Cu and their ions',
            'Confusing which oxidation states are stable for each element',
            'Forgetting that colour arises from d-d transitions (needs partially filled d-orbitals)',
            'Wrong magnetic moment calculation'
        ],
        faqs: [
            {
                q: 'How to remember d-block electronic configurations?',
                a: 'Remember the exceptions: Cr and Cu prefer half-filled and fully-filled d-orbitals. For ions, remove 4s electrons first. MindPeak teaches a "fill-and-adjust" method that works for all d-block elements.'
            },
            {
                q: 'Are KMnO₄ and K₂Cr₂O₇ important for JEE?',
                a: 'Very important! Their preparation, properties, and use as oxidizing agents in acidic/basic medium are frequently tested. Practice redox calculations involving these compounds.'
            }
        ]
    },
    {
        slug: 'jee-chemistry-f-block',
        exam: 'JEE',
        subject: 'Chemistry',
        chapter: 'f-Block Elements (Lanthanides & Actinides)',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$beaker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Beaker$3e$__["Beaker"],
        weightage: '1-2%',
        difficulty: 'Easy',
        pyqCount: 10,
        description: 'Lanthanide contraction, oxidation states of actinides, and general properties — a short chapter with 1-2% JEE weightage. MindPeak covers f-block in a single 45-minute session.',
        topics: [
            'Lanthanide Contraction',
            'Oxidation States of Lanthanides',
            'Actinides vs Lanthanides',
            'Separation of Lanthanides',
            'Applications'
        ],
        keyFormulas: [
            'Lanthanide contraction: ionic radius decreases from La³⁺ to Lu³⁺',
            'Most stable OS: +3 for lanthanides',
            'Actinides show +3 to +6 oxidation states'
        ],
        commonMistakes: [
            'Confusing cause of lanthanide contraction (poor shielding by 4f)',
            'Wrong oxidation state stability'
        ],
        faqs: [
            {
                q: 'How much to study for f-block?',
                a: '1-2% weightage — don\'t over-invest. Know lanthanide contraction, +3 oxidation state stability, and differences from actinides. That covers 90% of questions.'
            }
        ]
    },
    {
        slug: 'jee-chemistry-coordination-compounds',
        exam: 'JEE',
        subject: 'Chemistry',
        chapter: 'Coordination Compounds',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$atom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Atom$3e$__["Atom"],
        weightage: '5-7%',
        difficulty: 'Hard',
        pyqCount: 60,
        description: 'Werner\'s theory, IUPAC nomenclature, isomerism, VBT, and CFT — one of the highest-weightage and most conceptual inorganic chapters. MindPeak\'s systematic approach to coordination chemistry makes this chapter a scoring opportunity rather than a nightmare.',
        topics: [
            'Terminology (Ligand, Denticity, Coordination Number)',
            'Werner\'s Theory',
            'IUPAC Nomenclature',
            'Isomerism (Geometrical, Optical, Linkage, Ionization)',
            'Valence Bond Theory (VBT)',
            'Crystal Field Theory (CFT)',
            'Crystal Field Splitting (Octahedral vs Tetrahedral)',
            'Spectrochemical Series',
            'Colour & Magnetic Properties',
            'EAN Rule'
        ],
        keyFormulas: [
            'CFSE = -0.4Δ₀(t₂g) + 0.6Δ₀(eg)',
            'μ = √(n(n+2)) BM',
            'Δ_tet = 4/9 Δ_oct',
            'EAN = Z - OS + 2(CN)',
            'Spectrochemical: I⁻ < Br⁻ < Cl⁻ < ... < CN⁻ < CO'
        ],
        commonMistakes: [
            'Wrong IUPAC naming (ligand ordering, prefixes)',
            'Confusing geometrical and optical isomerism',
            'Wrong crystal field splitting for different geometries',
            'Forgetting that strong-field ligands cause pairing (low spin)'
        ],
        faqs: [
            {
                q: 'How to master Coordination Chemistry for JEE Advanced?',
                a: 'Step 1: IUPAC naming (practice 30 complexes). Step 2: Isomerism identification. Step 3: CFT (splitting diagrams for oct and tet). Step 4: Colour and magnetic moment prediction. MindPeak covers each step in dedicated sessions.'
            },
            {
                q: 'Is CFT more important than VBT?',
                a: 'For JEE Advanced, yes. CFT explains colour, magnetism, and stability quantitatively. VBT is simpler but limited. JEE Advanced frequently tests CFSE calculations and spectrochemical series applications.'
            }
        ]
    },
    {
        slug: 'jee-chemistry-metallurgy',
        exam: 'JEE',
        subject: 'Chemistry',
        chapter: 'Metallurgy & Extraction of Metals',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$beaker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Beaker$3e$__["Beaker"],
        weightage: '2-3%',
        difficulty: 'Easy',
        pyqCount: 20,
        description: 'Extraction principles, Ellingham diagram, and specific metals (Al, Fe, Cu, Zn) — NCERT-focused chapter with predictable questions. MindPeak covers metallurgy in 2 sessions with a focus on process-based reasoning.',
        topics: [
            'Concentration of Ore (Gravity, Magnetic, Froth Flotation)',
            'Thermodynamic Principles (Ellingham Diagram)',
            'Reduction Methods',
            'Aluminium Extraction (Hall-Héroult)',
            'Iron Extraction (Blast Furnace)',
            'Copper Refining (Electrolytic)',
            'Zinc Extraction',
            'Refining Methods'
        ],
        keyFormulas: [
            'ΔG = ΔH - TΔS (Ellingham)',
            'Al extraction: Al₂O₃ + cryolite → electrolysis',
            'Fe: Fe₂O₃ + 3CO → 2Fe + 3CO₂',
            'Cu refining: impure Cu (anode) → pure Cu (cathode)'
        ],
        commonMistakes: [
            'Wrong reducing agent for different metals',
            'Confusing blast furnace zones and reactions',
            'Wrong Ellingham diagram interpretation'
        ],
        faqs: [
            {
                q: 'Is Metallurgy important for JEE?',
                a: '2-3% weightage with factual NCERT-based questions. Focus on Ellingham diagram interpretation and extraction of Al, Fe, Cu, Zn. MindPeak includes metallurgy in the last-month revision module.'
            }
        ]
    },
    {
        slug: 'jee-chemistry-salt-analysis',
        exam: 'JEE',
        subject: 'Chemistry',
        chapter: 'Qualitative Salt Analysis',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$beaker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Beaker$3e$__["Beaker"],
        weightage: '2-3%',
        difficulty: 'Moderate',
        pyqCount: 20,
        description: 'Systematic identification of cations and anions through chemical tests — important for JEE Advanced comprehension questions. MindPeak\'s colour-coded salt analysis chart makes this chapter visual and easy to recall.',
        topics: [
            'Preliminary Tests (Flame, Borax Bead)',
            'Wet Tests for Cations (Group I-VI)',
            'Anion Detection (CO₃²⁻, SO₄²⁻, NO₃⁻, Cl⁻, etc.)',
            'Interfering Radicals',
            'Confirmatory Tests',
            'Group Reagents & Conditions'
        ],
        keyFormulas: [
            'Group I: HCl (PbCl₂, AgCl, Hg₂Cl₂)',
            'Group II: H₂S in acid (CuS, PbS, HgS)',
            'Group III: NH₄Cl + NH₄OH (Al(OH)₃, Fe(OH)₃)',
            'Group IV: H₂S in base (NiS, CoS, MnS, ZnS)'
        ],
        commonMistakes: [
            'Wrong group reagent for cation identification',
            'Confusing flame colours with precipitate colours',
            'Missing interfering radical effects',
            'Wrong confirmatory test for similar ions'
        ],
        faqs: [
            {
                q: 'Is Salt Analysis asked in JEE Advanced?',
                a: 'Yes — typically in comprehension-based passages. You need to know which reagent gives which precipitate/colour. NCERT + MindPeak\'s visual salt analysis chart is sufficient.'
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/chapters/jeeMaths.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "jeeMathsChapters",
    ()=>jeeMathsChapters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calculator.js [app-client] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sigma$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sigma$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sigma.js [app-client] (ecmascript) <export default as Sigma>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shapes$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shapes.js [app-client] (ecmascript) <export default as Shapes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Triangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle.js [app-client] (ecmascript) <export default as Triangle>");
;
const jeeMathsChapters = [
    /* ──────── ALGEBRA ──────── */ {
        slug: 'jee-maths-sets-relations-functions',
        exam: 'JEE',
        subject: 'Mathematics',
        chapter: 'Sets, Relations & Functions',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shapes$3e$__["Shapes"],
        weightage: '3-4%',
        difficulty: 'Moderate',
        pyqCount: 35,
        description: 'Domain, range, types of functions, composition, and inverse — the language of mathematics. MindPeak begins JEE Maths preparation here because every other chapter uses function terminology.',
        topics: [
            'Types of Sets & Venn Diagrams',
            'Types of Relations (Reflexive, Symmetric, Transitive, Equivalence)',
            'Domain & Range',
            'Types of Functions (Injective, Surjective, Bijective)',
            'Composition of Functions',
            'Inverse Functions',
            'Even & Odd Functions',
            'Periodic Functions'
        ],
        keyFormulas: [
            'f: A→B injective ⟺ f(a₁)=f(a₂) ⟹ a₁=a₂',
            'f(f⁻¹(x)) = x (bijective)',
            'Period of sin/cos = 2π, tan = π',
            'n(A∪B) = n(A) + n(B) - n(A∩B)'
        ],
        commonMistakes: [
            'Confusing injective (one-one) with surjective (onto)',
            'Wrong domain when composition involves restricted domains',
            'Forgetting that inverse exists only for bijective functions',
            'Wrong period for transformed functions'
        ],
        faqs: [
            {
                q: 'How important is this chapter for JEE?',
                a: '3-4% directly, but function concepts appear in calculus, trigonometry, and coordinate geometry. MindPeak treats this as foundational — 5 sessions ensure you never struggle with domain/range again.'
            }
        ]
    },
    {
        slug: 'jee-maths-complex-numbers',
        exam: 'JEE',
        subject: 'Mathematics',
        chapter: 'Complex Numbers',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"],
        weightage: '4-5%',
        difficulty: 'Moderate',
        pyqCount: 45,
        description: 'Argand plane, modulus-argument, De Moivre\'s theorem, and roots of unity — a JEE Advanced favourite. MindPeak\'s geometric interpretation of complex numbers makes problems visual and intuitive.',
        topics: [
            'Argand Plane & Modulus-Argument Form',
            'Algebra of Complex Numbers',
            'Conjugate & Properties',
            'De Moivre\'s Theorem',
            'Cube Roots & nth Roots of Unity',
            'Rotation in Complex Plane',
            'Geometry Using Complex Numbers',
            'Loci in Complex Plane'
        ],
        keyFormulas: [
            '|z₁z₂| = |z₁||z₂|',
            'arg(z₁z₂) = arg(z₁) + arg(z₂)',
            '(cosθ + isinθ)ⁿ = cos(nθ) + isin(nθ)',
            'Cube roots of unity: 1, ω, ω² (1+ω+ω²=0)',
            '|z-z₁| = |z-z₂| → perpendicular bisector'
        ],
        commonMistakes: [
            'Wrong argument for negative real numbers (arg = π, not 0)',
            'Forgetting principal argument range (-π, π]',
            'Wrong application of rotation formula',
            'Confusing |z|² with z·z̄'
        ],
        faqs: [
            {
                q: 'Is Complex Numbers important for JEE Advanced?',
                a: 'Extremely important! JEE Advanced asks 2-3 questions involving geometry in complex plane, roots of unity, and loci. MindPeak\'s approach combines algebra with Argand-plane geometry for complete mastery.'
            }
        ]
    },
    {
        slug: 'jee-maths-quadratic-equations',
        exam: 'JEE',
        subject: 'Mathematics',
        chapter: 'Quadratic Equations',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"],
        weightage: '3-5%',
        difficulty: 'Moderate',
        pyqCount: 40,
        description: 'Roots, discriminant, Vieta\'s formulas, and location of roots — a staple JEE topic connecting algebra with graphs. MindPeak\'s graphical approach to quadratics makes inequality and location-of-roots problems systematic.',
        topics: [
            'Roots & Discriminant',
            'Nature of Roots',
            'Vieta\'s Formulas (Sum & Product)',
            'Quadratic Function Graph',
            'Location of Roots',
            'Common Roots of Two Quadratics',
            'Higher Degree Equations',
            'Descartes\' Rule of Signs'
        ],
        keyFormulas: [
            'x = (-b ± √(b²-4ac))/2a',
            'Sum of roots = -b/a, Product = c/a',
            'D > 0 → real distinct, D = 0 → equal, D < 0 → complex',
            'Both roots > k ⟺ D≥0, f(k)>0, -b/2a>k'
        ],
        commonMistakes: [
            'Wrong conditions for location of roots (forgetting all 3 conditions)',
            'Not checking discriminant non-negative first',
            'Wrong application of Vieta\'s for higher degree',
            'Sign error in common roots condition'
        ],
        faqs: [
            {
                q: 'What are the most tested problem types?',
                a: 'Location of roots (both roots in an interval), common roots, and quadratic inequality are JEE favourites. MindPeak teaches a graphical method that makes these problems solvable in under 2 minutes.'
            }
        ]
    },
    {
        slug: 'jee-maths-sequences-series',
        exam: 'JEE',
        subject: 'Mathematics',
        chapter: 'Sequences & Series (AP, GP, HP)',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sigma$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sigma$3e$__["Sigma"],
        weightage: '4-6%',
        difficulty: 'Moderate',
        pyqCount: 50,
        description: 'Arithmetic, geometric, and harmonic progressions plus summation techniques — a high-weightage JEE topic. MindPeak\'s formula-derivation approach means students can reconstruct any forgotten formula in the exam.',
        topics: [
            'Arithmetic Progression (AP)',
            'Geometric Progression (GP)',
            'Harmonic Progression (HP)',
            'AM, GM, HM Relationship',
            'Sum of Special Series (Σn², Σn³)',
            'Arithmetico-Geometric Series',
            'Method of Differences',
            'Telescoping Series',
            'Infinite GP Sum'
        ],
        keyFormulas: [
            'AP: aₙ = a + (n-1)d, Sₙ = n/2(2a+(n-1)d)',
            'GP: aₙ = arⁿ⁻¹, Sₙ = a(rⁿ-1)/(r-1)',
            'S∞ = a/(1-r) (|r|<1)',
            'AM ≥ GM ≥ HM',
            'Σn² = n(n+1)(2n+1)/6',
            'Σn³ = [n(n+1)/2]²'
        ],
        commonMistakes: [
            'Wrong formula for sum of first n terms of GP when r=1',
            'Forgetting condition |r|<1 for infinite GP',
            'Wrong application of AM-GM inequality',
            'Errors in method of differences for non-standard series'
        ],
        faqs: [
            {
                q: 'How to handle non-standard series in JEE Advanced?',
                a: 'Use (1) method of differences for polynomial general terms, (2) telescoping for cancellation, (3) AGP method for products of AP and GP terms. MindPeak teaches all 3 techniques with 20 practice problems each.'
            }
        ]
    },
    {
        slug: 'jee-maths-permutations-combinations',
        exam: 'JEE',
        subject: 'Mathematics',
        chapter: 'Permutations & Combinations',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"],
        weightage: '5-7%',
        difficulty: 'Hard',
        pyqCount: 55,
        description: 'Counting principles, arrangements, selections, and distribution — one of the most challenging JEE topics. MindPeak\'s categorization method breaks every PnC problem into one of 12 standard types.',
        topics: [
            'Fundamental Counting Principle',
            'Permutations (nPr)',
            'Combinations (nCr)',
            'Permutations with Repetition',
            'Circular Permutations',
            'Division & Distribution',
            'Derangements',
            'Inclusion-Exclusion Principle',
            'Multinomial Theorem'
        ],
        keyFormulas: [
            'nPr = n!/(n-r)!',
            'nCr = n!/r!(n-r)!',
            'Circular arrangement: (n-1)!',
            'Derangements: D(n) = n!(1-1/1!+1/2!-...+(-1)ⁿ/n!)',
            'Stars & Bars: C(n+r-1, r-1)'
        ],
        commonMistakes: [
            'Not accounting for identical objects',
            'Wrong formula for distribution (distinguishable vs identical)',
            'Overcounting in cases with restrictions',
            'Confusing when to use P vs C'
        ],
        faqs: [
            {
                q: 'How to improve at PnC?',
                a: 'Categorize problems: (1) arrangement vs selection, (2) with/without repetition, (3) with/without restrictions, (4) distribution. MindPeak provides a decision tree that maps every problem to its type within 30 seconds.'
            }
        ]
    },
    {
        slug: 'jee-maths-binomial-theorem',
        exam: 'JEE',
        subject: 'Mathematics',
        chapter: 'Binomial Theorem',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"],
        weightage: '3-5%',
        difficulty: 'Moderate',
        pyqCount: 40,
        description: 'Binomial expansion, general term, middle term, and properties of binomial coefficients — a JEE favourite for clever manipulation questions. MindPeak\'s pattern-based approach handles even the trickiest binomial coefficient identities.',
        topics: [
            'Binomial Expansion for Positive Integer',
            'General Term T(r+1)',
            'Middle Term',
            'Greatest Term & Coefficient',
            'Properties of Binomial Coefficients',
            'Multinomial Theorem',
            'Binomial for Negative/Fractional Index',
            'Divisibility & Remainder Using Binomial'
        ],
        keyFormulas: [
            '(x+y)ⁿ = Σ C(n,r)xⁿ⁻ʳyʳ',
            'T(r+1) = C(n,r)xⁿ⁻ʳyʳ',
            'Middle term: T(n/2+1) if n even',
            'ΣC(n,r) = 2ⁿ',
            'ΣC(n,r)(-1)ʳ = 0'
        ],
        commonMistakes: [
            'Wrong general term index (T(r+1), not T(r))',
            'Forgetting two middle terms when n is odd',
            'Wrong sign in greatest term calculation',
            'Errors in applying binomial for fractional index'
        ],
        faqs: [
            {
                q: 'What types of Binomial Theorem problems does JEE Advanced ask?',
                a: 'Sum of binomial coefficients with constraints, remainder/divisibility problems, and approximation using first few terms. MindPeak covers 30+ problem types with difficulty-graded practice sets.'
            }
        ]
    },
    {
        slug: 'jee-maths-matrices-determinants',
        exam: 'JEE',
        subject: 'Mathematics',
        chapter: 'Matrices & Determinants',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"],
        weightage: '5-7%',
        difficulty: 'Hard',
        pyqCount: 60,
        description: 'Matrix operations, adjoint, inverse, system of equations, and determinant properties — a JEE Advanced powerhouse chapter. MindPeak\'s structured approach to matrix problems ensures students handle even multi-concept questions confidently.',
        topics: [
            'Types of Matrices',
            'Matrix Operations & Properties',
            'Transpose, Symmetric & Skew-Symmetric',
            'Determinant Calculation (Sarrus, Cofactor)',
            'Properties of Determinants',
            'Adjoint & Inverse',
            'System of Linear Equations (Cramer\'s Rule)',
            'Rank of Matrix',
            'Cayley-Hamilton Theorem'
        ],
        keyFormulas: [
            'A⁻¹ = adj(A)/|A|',
            '|AB| = |A||B|',
            '|kA| = kⁿ|A| (n×n matrix)',
            'Cramer: x = Dₓ/D',
            'Cayley-Hamilton: A satisfies its characteristic equation'
        ],
        commonMistakes: [
            'Wrong cofactor sign pattern',
            'Forgetting that |kA| = kⁿ|A| (not k|A|)',
            'Wrong determinant row/column operations (R↔C confusion)',
            'Not checking consistency before solving system of equations'
        ],
        faqs: [
            {
                q: 'How important is Matrices for JEE Advanced?',
                a: '5-7% with conceptually deep questions. Expect questions on system of equations (consistent/inconsistent/infinite solutions), Cayley-Hamilton, and determinant properties. MindPeak dedicates 8+ sessions to build matrix mastery.'
            }
        ]
    },
    {
        slug: 'jee-maths-mathematical-reasoning',
        exam: 'JEE',
        subject: 'Mathematics',
        chapter: 'Mathematical Reasoning & Induction',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"],
        weightage: '1-2%',
        difficulty: 'Easy',
        pyqCount: 15,
        description: 'Principle of Mathematical Induction and logical statements — a JEE Main chapter with 1-2% easy marks. MindPeak covers this in a single session for guaranteed marks.',
        topics: [
            'Statements & Logical Connectives',
            'Negation, Converse, Contrapositive',
            'Principle of Mathematical Induction',
            'Tautology & Contradiction',
            'Quantifiers (For All, There Exists)'
        ],
        keyFormulas: [
            'PMI: (1) Verify P(1), (2) Assume P(k), (3) Prove P(k+1)',
            'Contrapositive of p→q is ¬q→¬p',
            'Negation of ∀x P(x) is ∃x ¬P(x)'
        ],
        commonMistakes: [
            'Not clearly stating induction hypothesis',
            'Wrong negation of compound statements',
            'Confusing converse and contrapositive'
        ],
        faqs: [
            {
                q: 'Is Mathematical Reasoning asked in JEE Advanced?',
                a: 'Rarely. Focus on JEE Main where 1 question on logical statements or PMI appears. Quick marks with minimal preparation.'
            }
        ]
    },
    /* ──────── CALCULUS ──────── */ {
        slug: 'jee-maths-limits-continuity',
        exam: 'JEE',
        subject: 'Mathematics',
        chapter: 'Limits & Continuity',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
        weightage: '4-5%',
        difficulty: 'Moderate',
        pyqCount: 45,
        description: 'Limit evaluation, L\'Hôpital\'s rule, sandwich theorem, and continuity conditions — the gateway to calculus. MindPeak ensures students master limits before touching derivatives, building unshakeable calculus foundations.',
        topics: [
            'Limit Definition & Notation',
            'Algebraic Limits',
            'Trigonometric Limits',
            'Exponential & Logarithmic Limits',
            'L\'Hôpital\'s Rule',
            'Sandwich Theorem',
            '1^∞ Form',
            'Continuity at a Point',
            'Types of Discontinuity',
            'Intermediate Value Theorem'
        ],
        keyFormulas: [
            'lim(x→0) sinx/x = 1',
            'lim(x→0) (eˣ-1)/x = 1',
            'lim(x→0) (1+x)^(1/x) = e',
            '1^∞ form: lim e^{(f-1)g}',
            'L\'Hôpital: 0/0 or ∞/∞ → f\'/g\''
        ],
        commonMistakes: [
            'Applying L\'Hôpital without checking 0/0 or ∞/∞ form',
            'Wrong 1^∞ form evaluation',
            'Forgetting one-sided limits for continuity check',
            'Wrong limit for piecewise functions'
        ],
        faqs: [
            {
                q: 'What are the most tested limit types?',
                a: '0/0 form (factorize or L\'Hôpital), 1^∞ form (e method), and limits involving floor/fractional part functions. MindPeak covers 50+ limit varieties with systematic solving strategies.'
            }
        ]
    },
    {
        slug: 'jee-maths-differentiation',
        exam: 'JEE',
        subject: 'Mathematics',
        chapter: 'Differentiation',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
        weightage: '3-5%',
        difficulty: 'Moderate',
        pyqCount: 40,
        description: 'Derivatives from first principles, chain rule, implicit differentiation, and higher-order derivatives — the core of calculus. MindPeak teaches differentiation as a skill to be automated through 200+ practice problems.',
        topics: [
            'First Principles',
            'Product & Quotient Rule',
            'Chain Rule',
            'Implicit Differentiation',
            'Parametric Differentiation',
            'Logarithmic Differentiation',
            'Higher Order Derivatives',
            'Differentiation of Determinants',
            'Leibniz Theorem (nth Derivative)'
        ],
        keyFormulas: [
            'd/dx(xⁿ) = nxⁿ⁻¹',
            'd/dx(eˣ) = eˣ',
            'd/dx(ln x) = 1/x',
            'Chain: dy/dx = dy/du · du/dx',
            'Leibniz: (uv)⁽ⁿ⁾ = Σ C(n,r)u⁽ⁿ⁻ʳ⁾v⁽ʳ⁾'
        ],
        commonMistakes: [
            'Forgetting chain rule in composite functions',
            'Wrong implicit differentiation (not differentiating y terms with dy/dx)',
            'Errors in logarithmic differentiation',
            'Wrong formula application for parametric derivatives'
        ],
        faqs: [
            {
                q: 'How much practice is enough for differentiation?',
                a: 'Differentiation should be automatic — like multiplication. Practice until you can differentiate any function in under 30 seconds. MindPeak assigns 200+ differentiation drills across all types.'
            }
        ]
    },
    {
        slug: 'jee-maths-application-of-derivatives',
        exam: 'JEE',
        subject: 'Mathematics',
        chapter: 'Application of Derivatives',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
        weightage: '6-8%',
        difficulty: 'Hard',
        pyqCount: 65,
        description: 'Tangent/normal, maxima/minima, Rolle\'s theorem, LMVT, and monotonicity — the highest-weightage calculus chapter. MindPeak\'s graphical approach to AOD makes even the trickiest optimization problems manageable.',
        topics: [
            'Rate of Change',
            'Tangent & Normal',
            'Increasing/Decreasing Functions',
            'Maxima & Minima (First & Second Derivative Test)',
            'Global vs Local Extrema',
            'Rolle\'s Theorem',
            'Lagrange Mean Value Theorem (LMVT)',
            'Curve Sketching',
            'Optimization Problems'
        ],
        keyFormulas: [
            'Slope of tangent = dy/dx at point',
            'f\'(x) > 0 → increasing',
            'Rolle: f(a)=f(b) ⟹ ∃c: f\'(c)=0',
            'LMVT: f\'(c) = (f(b)-f(a))/(b-a)',
            'Second derivative test: f\'\'(c)>0 → minima'
        ],
        commonMistakes: [
            'Not checking endpoints for global extrema on closed interval',
            'Wrong application of LMVT (forgetting continuity/differentiability conditions)',
            'Confusing local and global extrema',
            'Incomplete analysis of increasing/decreasing intervals'
        ],
        faqs: [
            {
                q: 'How to handle optimization word problems?',
                a: 'Step 1: Identify the quantity to optimize. Step 2: Express as f(x) with one variable. Step 3: Find f\'(x)=0. Step 4: Verify using the second derivative test. MindPeak provides 40+ graded optimization problems.'
            },
            {
                q: 'Are LMVT and Rolle\'s Theorem important for Advanced?',
                a: 'Critical! JEE Advanced uses LMVT to prove inequalities and Rolle\'s to prove existence of roots. These become simple once you visualize the geometric meaning. MindPeak\'s graphical teaching makes these theorems intuitive.'
            }
        ]
    },
    {
        slug: 'jee-maths-indefinite-integration',
        exam: 'JEE',
        subject: 'Mathematics',
        chapter: 'Indefinite Integration',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sigma$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sigma$3e$__["Sigma"],
        weightage: '5-7%',
        difficulty: 'Hard',
        pyqCount: 55,
        description: 'Integration techniques — substitution, by parts, partial fractions, and special integrals. JEE Advanced loves tricky integrals. MindPeak teaches a decision tree: given any integrand, which technique to use.',
        topics: [
            'Basic Integration Formulas',
            'Integration by Substitution',
            'Integration by Parts (ILATE)',
            'Partial Fractions',
            'Trigonometric Substitutions',
            'Integrals Involving √(ax²+bx+c)',
            'Special Integrals (Euler Substitution)',
            'Reduction Formulas',
            'Integration of Rational Functions'
        ],
        keyFormulas: [
            '∫xⁿ dx = xⁿ⁺¹/(n+1) + C',
            '∫eˣ dx = eˣ + C',
            'By parts: ∫u dv = uv - ∫v du',
            'ILATE: Inverse → Log → Algebraic → Trig → Exponential',
            '∫eˣ(f+f\') dx = eˣf + C'
        ],
        commonMistakes: [
            'Wrong ILATE priority',
            'Missing +C in indefinite integrals',
            'Incomplete partial fraction decomposition',
            'Wrong substitution for trigonometric integrals'
        ],
        faqs: [
            {
                q: 'How to decide which integration technique to use?',
                a: 'MindPeak teaches a flowchart: (1) Direct formula? → use it. (2) Can substitute? → substitute. (3) Product of different types? → by parts. (4) Rational function? → partial fractions. (5) Contains √quadratic? → trig substitution. This flowchart covers 95% of JEE problems.'
            }
        ]
    },
    {
        slug: 'jee-maths-definite-integration',
        exam: 'JEE',
        subject: 'Mathematics',
        chapter: 'Definite Integration & Area Under Curves',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
        weightage: '6-8%',
        difficulty: 'Hard',
        pyqCount: 60,
        description: 'Definite integral properties, Leibniz rule, area under curves, and Walli\'s formula — JEE Advanced powerhouse. MindPeak combines definite integration with area problems for a unified understanding.',
        topics: [
            'Fundamental Theorem of Calculus',
            'Properties of Definite Integrals',
            'King Property: ∫f(x)dx = ∫f(a+b-x)dx',
            'Even/Odd Function Properties',
            'Leibniz Rule (Differentiation Under Integral)',
            'Walli\'s Formula',
            'Area Under Curves',
            'Area Between Two Curves',
            'Estimation of Definite Integrals'
        ],
        keyFormulas: [
            '∫₀ᵃ f(x)dx = ∫₀ᵃ f(a-x)dx',
            'f(x) even: ∫₋ₐᵃ f(x)dx = 2∫₀ᵃ f(x)dx',
            'f(x) odd: ∫₋ₐᵃ f(x)dx = 0',
            'Leibniz: d/dx ∫ₐ^{g(x)} f(t)dt = f(g(x))g\'(x)',
            'Area = ∫|f(x)-g(x)|dx'
        ],
        commonMistakes: [
            'Wrong application of King property',
            'Forgetting absolute value in area calculation',
            'Wrong limits of integration for area between curves',
            'Not using symmetry to simplify'
        ],
        faqs: [
            {
                q: 'What is the King Property and why is it important?',
                a: '∫₀ᵃ f(x)dx = ∫₀ᵃ f(a-x)dx. It simplifies integrals where f(x)+f(a-x) is constant. Used in 30%+ of JEE Advanced definite integral questions. MindPeak drills this property until it becomes second nature.'
            }
        ]
    },
    {
        slug: 'jee-maths-differential-equations',
        exam: 'JEE',
        subject: 'Mathematics',
        chapter: 'Differential Equations',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"],
        weightage: '4-5%',
        difficulty: 'Hard',
        pyqCount: 45,
        description: 'First-order ODEs — variable separable, linear, homogeneous, and exact. MindPeak\'s identification flowchart helps students classify any ODE within 30 seconds and apply the correct solving technique.',
        topics: [
            'Order & Degree',
            'Variable Separable',
            'Homogeneous Differential Equations',
            'Linear Differential Equations (dy/dx + Py = Q)',
            'Integrating Factor',
            'Formation of Differential Equations',
            'Applications (Growth, Decay, Geometry)',
            'Orthogonal Trajectories'
        ],
        keyFormulas: [
            'Variable separable: ∫f(y)dy = ∫g(x)dx',
            'Homogeneous: substitution y = vx',
            'Linear: IF = e^{∫P dx}, y·IF = ∫Q·IF dx',
            'Formation: eliminate arbitrary constants'
        ],
        commonMistakes: [
            'Wrong identification of equation type',
            'Forgetting integrating factor for linear ODE',
            'Not converting to standard form before solving',
            'Wrong substitution for homogeneous equations'
        ],
        faqs: [
            {
                q: 'How to classify a differential equation quickly?',
                a: 'MindPeak flowchart: (1) Can separate variables? → separate. (2) Homogeneous (f(tx,ty) = tⁿf(x,y))? → substitute y=vx. (3) Linear (dy/dx + Py = Q)? → use IF. (4) Bernoulli? → reduce to linear. This covers all JEE-level ODEs.'
            }
        ]
    },
    /* ──────── COORDINATE GEOMETRY ──────── */ {
        slug: 'jee-maths-straight-lines',
        exam: 'JEE',
        subject: 'Mathematics',
        chapter: 'Straight Lines',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Triangle$3e$__["Triangle"],
        weightage: '3-4%',
        difficulty: 'Moderate',
        pyqCount: 35,
        description: 'Slope, equations of lines, angle between lines, distance formulas, and family of lines — the beginning of coordinate geometry. MindPeak builds a strong straight-line foundation for circles and conics.',
        topics: [
            'Slope & Inclination',
            'Various Forms of Line Equation',
            'Angle Between Two Lines',
            'Distance of Point From Line',
            'Concurrent Lines',
            'Family of Lines',
            'Pair of Straight Lines',
            'Homogeneous Equation of Pair of Lines'
        ],
        keyFormulas: [
            'y-y₁ = m(x-x₁) (point-slope)',
            'x/a + y/b = 1 (intercept)',
            'Distance = |ax₁+by₁+c|/√(a²+b²)',
            'tanθ = |m₁-m₂|/(1+m₁m₂)',
            'Pair: ax²+2hxy+by² = 0, tanθ = 2√(h²-ab)/(a+b)'
        ],
        commonMistakes: [
            'Wrong sign in distance formula',
            'Forgetting perpendicular condition m₁m₂ = -1',
            'Wrong angle between lines (acute vs obtuse)',
            'Not using family of lines for concurrency problems'
        ],
        faqs: [
            {
                q: 'Is the chapter on Pair of Straight Lines important?',
                a: 'Yes for JEE Advanced. Homogeneous equations, angle between pair, and joint equation appear in 1-2 questions. MindPeak covers this thoroughly with 15+ practice problems on pair of lines.'
            }
        ]
    },
    {
        slug: 'jee-maths-circles',
        exam: 'JEE',
        subject: 'Mathematics',
        chapter: 'Circles',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shapes$3e$__["Shapes"],
        weightage: '4-5%',
        difficulty: 'Moderate',
        pyqCount: 45,
        description: 'Equation of circle, tangent, normal, radical axis, and family of circles — beautiful geometry with algebra. MindPeak teaches circles with geometric insight first, then algebraic formulation.',
        topics: [
            'General & Standard Equation',
            'Parametric Form',
            'Position of Point w.r.t. Circle',
            'Tangent & Normal',
            'Length of Tangent',
            'Pair of Tangents from External Point',
            'Chord of Contact',
            'Director Circle',
            'Radical Axis & Radical Centre',
            'Family of Circles (Coaxial System)'
        ],
        keyFormulas: [
            '(x-h)²+(y-k)² = r²',
            'Tangent: xx₁+yy₁ = r² (at point)',
            'Length of tangent = √(S₁)',
            'Radical axis: S₁ - S₂ = 0',
            'Director circle: x²+y² = 2r²'
        ],
        commonMistakes: [
            'Wrong centre/radius from general equation (forgetting to complete square)',
            'Wrong tangent formula for external point',
            'Confusing radical axis and common chord',
            'Forgetting director circle for tangent pair problems'
        ],
        faqs: [
            {
                q: 'What is the Radical Axis and why does it matter?',
                a: 'The radical axis is the locus of points with equal power w.r.t. two circles (S₁-S₂=0). It\'s perpendicular to the line joining centres. Used in family of circles and coaxial systems. MindPeak teaches radical axis through 10 progressive problems.'
            }
        ]
    },
    {
        slug: 'jee-maths-conic-sections',
        exam: 'JEE',
        subject: 'Mathematics',
        chapter: 'Conic Sections (Parabola, Ellipse, Hyperbola)',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shapes$3e$__["Shapes"],
        weightage: '7-10%',
        difficulty: 'Hard',
        pyqCount: 80,
        description: 'Parabola, ellipse, and hyperbola — the crown jewel of coordinate geometry carrying 7-10% in JEE. MindPeak dedicates 15+ sessions to conics, covering every property with geometric visualization.',
        topics: [
            'Parabola (Standard Forms, Tangent, Normal)',
            'Focal Chord & Parametric Equations (Parabola)',
            'Ellipse (Standard Equations, Eccentricity)',
            'Tangent & Normal (Ellipse)',
            'Director Circle & Auxiliary Circle',
            'Hyperbola (Standard Equations)',
            'Rectangular Hyperbola',
            'Asymptotes',
            'Conjugate Hyperbola',
            'Chord of Contact for All Conics'
        ],
        keyFormulas: [
            'Parabola: y²=4ax, parametric (at², 2at)',
            'Ellipse: x²/a²+y²/b²=1, e=c/a',
            'Hyperbola: x²/a²-y²/b²=1, e=c/a',
            'Tangent: y=mx+a/m (parabola)',
            'Tangent: y=mx±√(a²m²+b²) (ellipse)'
        ],
        commonMistakes: [
            'Confusing standard forms for horizontal vs vertical conics',
            'Wrong eccentricity formula',
            'Wrong focal distance relationship',
            'Forgetting reflection property of parabola',
            'Mixing up transverse and conjugate axis'
        ],
        faqs: [
            {
                q: 'Conics seem overwhelming — how to study?',
                a: 'Study one conic at a time: Parabola first (simplest), then Ellipse, then Hyperbola. For each: learn standard form, parametric form, tangent/normal, and focal properties. MindPeak structures conic preparation over 15 sessions with progressive difficulty.'
            },
            {
                q: 'Which conic is asked most in JEE Advanced?',
                a: 'Parabola and Hyperbola are JEE Advanced favourites. Ellipse is more common in JEE Main. MindPeak ensures equal mastery of all three with exam-specific problem sets.'
            }
        ]
    },
    /* ──────── TRIGONOMETRY ──────── */ {
        slug: 'jee-maths-trigonometry',
        exam: 'JEE',
        subject: 'Mathematics',
        chapter: 'Trigonometric Functions & Equations',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Triangle$3e$__["Triangle"],
        weightage: '4-6%',
        difficulty: 'Moderate',
        pyqCount: 50,
        description: 'Trigonometric identities, equations, and graphs — fundamental to JEE Mathematics. MindPeak\'s identity-derivation approach means students never need to memorize — they can derive any formula in seconds.',
        topics: [
            'Trigonometric Ratios & Identities',
            'Compound Angle Formulas',
            'Multiple Angle Formulas',
            'Sum-to-Product & Product-to-Sum',
            'Trigonometric Equations (General Solutions)',
            'Properties of Triangles',
            'Sine & Cosine Rules',
            'Heights & Distances',
            'Conditional Identities'
        ],
        keyFormulas: [
            'sin(A±B) = sinAcosB ± cosAsinB',
            'cos2A = cos²A - sin²A = 2cos²A-1',
            'General: sinθ=sinα ⟹ θ=nπ+(-1)ⁿα',
            'Sine rule: a/sinA = b/sinB = c/sinC = 2R',
            'Cosine rule: c² = a²+b²-2ab·cosC'
        ],
        commonMistakes: [
            'Missing solutions in trigonometric equations',
            'Wrong general solution formula',
            'Forgetting restrictions on inverse trig domains',
            'Wrong application of sine/cosine rule'
        ],
        faqs: [
            {
                q: 'How to solve trigonometric equations efficiently?',
                a: 'Convert to single trig function → use standard general solution. For complex equations, use substitution (t = tan(x/2)). MindPeak teaches a systematic approach that works for 95% of JEE trig equations.'
            }
        ]
    },
    {
        slug: 'jee-maths-inverse-trigonometry',
        exam: 'JEE',
        subject: 'Mathematics',
        chapter: 'Inverse Trigonometric Functions',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Triangle$3e$__["Triangle"],
        weightage: '3-4%',
        difficulty: 'Moderate',
        pyqCount: 35,
        description: 'Domain, range, graphs, and properties of inverse trig functions — connects trigonometry with calculus. MindPeak\'s visual graph-based teaching makes inverse trig properties intuitive rather than memorized.',
        topics: [
            'Principal Value Branch',
            'Graphs of Inverse Trig Functions',
            'Properties (sin⁻¹x + cos⁻¹x = π/2)',
            'Simplification of Expressions',
            'Equations Involving Inverse Trig',
            'Addition Formulas (tan⁻¹a + tan⁻¹b)',
            'Conversion Between Inverse Functions'
        ],
        keyFormulas: [
            'sin⁻¹x + cos⁻¹x = π/2',
            'tan⁻¹x + cot⁻¹x = π/2',
            'tan⁻¹a + tan⁻¹b = tan⁻¹((a+b)/(1-ab))',
            '2tan⁻¹x = sin⁻¹(2x/(1+x²)) = cos⁻¹((1-x²)/(1+x²))'
        ],
        commonMistakes: [
            'Wrong principal value range',
            'Forgetting sign constraints in addition formula',
            'Wrong simplification of composite inverse trig',
            'Not checking domain validity'
        ],
        faqs: [
            {
                q: 'Why are students confused by Inverse Trig?',
                a: 'Because principal value ranges are different for each function. MindPeak\'s approach: memorize just sin⁻¹ and tan⁻¹ ranges, derive the rest. Graph visualization eliminates confusion about where each function is valid.'
            }
        ]
    },
    /* ──────── VECTORS, 3D & PROBABILITY ──────── */ {
        slug: 'jee-maths-vectors',
        exam: 'JEE',
        subject: 'Mathematics',
        chapter: 'Vectors',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
        weightage: '3-5%',
        difficulty: 'Moderate',
        pyqCount: 40,
        description: 'Dot product, cross product, scalar triple product, and vector equations — beautiful geometry made algebraic. MindPeak teaches vectors geometrically first, then introduces algebraic tools.',
        topics: [
            'Vector Addition & Scalar Multiplication',
            'Dot Product & Applications',
            'Cross Product & Applications',
            'Scalar Triple Product',
            'Vector Triple Product',
            'Section Formula in 3D',
            'Collinearity & Coplanarity',
            'Projection of Vectors',
            'Area of Triangle & Parallelogram'
        ],
        keyFormulas: [
            'a⃗·b⃗ = |a||b|cosθ',
            'a⃗×b⃗ = |a||b|sinθ n̂',
            '[a⃗ b⃗ c⃗] = a⃗·(b⃗×c⃗)',
            'Area of △ = ½|a⃗×b⃗|',
            'Projection of a⃗ on b⃗ = a⃗·b⃗/|b⃗|'
        ],
        commonMistakes: [
            'Confusing dot and cross product applications',
            'Wrong direction of cross product (right-hand rule)',
            'Forgetting scalar triple product = 0 means coplanar',
            'Sign errors in determinant form of triple product'
        ],
        faqs: [
            {
                q: 'How are Vectors connected to 3D Geometry?',
                a: 'Vectors provide the algebraic toolkit for all 3D geometry: line equations (r⃗=a⃗+λb⃗), plane equations (r⃗·n⃗=d), and distance/angle calculations. MindPeak teaches them together for seamless problem-solving.'
            }
        ]
    },
    {
        slug: 'jee-maths-3d-geometry',
        exam: 'JEE',
        subject: 'Mathematics',
        chapter: 'Three-Dimensional Geometry',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shapes$3e$__["Shapes"],
        weightage: '5-7%',
        difficulty: 'Hard',
        pyqCount: 55,
        description: 'Lines and planes in 3D space — equations, angles, distances, and intersections. MindPeak\'s visual 3D approach (with physical models) makes spatial geometry tangible and problem-solving systematic.',
        topics: [
            'Direction Cosines & Ratios',
            'Equation of Line in 3D (Cartesian & Vector)',
            'Equation of Plane',
            'Angle Between Lines, Planes, Line-Plane',
            'Distance: Point to Line, Point to Plane',
            'Shortest Distance Between Skew Lines',
            'Intersection of Line and Plane',
            'Family of Planes',
            'Image of Point in Plane'
        ],
        keyFormulas: [
            'Line: r⃗=a⃗+λb⃗',
            'Plane: r⃗·n⃗=d',
            'Angle between planes: cosθ=|n⃗₁·n⃗₂|/(|n⃗₁||n⃗₂|)',
            'Distance point to plane: |ax₀+by₀+cz₀-d|/√(a²+b²+c²)',
            'Shortest distance = |[a⃗₂-a⃗₁ b⃗₁ b⃗₂]|/|b⃗₁×b⃗₂|'
        ],
        commonMistakes: [
            'Confusing direction ratios and direction cosines',
            'Wrong formula for shortest distance between skew lines',
            'Not checking if lines are parallel before applying skew-line formula',
            'Wrong plane equation through 3 points'
        ],
        faqs: [
            {
                q: 'Is 3D Geometry important for JEE Advanced?',
                a: 'Very important — 5-7% with beautiful conceptual questions. Shortest distance between skew lines, foot of perpendicular, and image of point in plane are JEE Advanced classics. MindPeak dedicates 8 sessions to 3D geometry mastery.'
            }
        ]
    },
    {
        slug: 'jee-maths-probability',
        exam: 'JEE',
        subject: 'Mathematics',
        chapter: 'Probability',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
        weightage: '5-7%',
        difficulty: 'Moderate',
        pyqCount: 55,
        description: 'Classical, conditional, Bayes\' theorem, and probability distributions — consistent JEE appearances. MindPeak teaches probability through real-world modeling, making abstract concepts concrete and memorable.',
        topics: [
            'Classical Probability',
            'Addition & Multiplication Theorems',
            'Conditional Probability P(A|B)',
            'Bayes\' Theorem',
            'Independent Events',
            'Bernoulli Trials & Binomial Distribution',
            'Mean & Variance of Binomial Distribution',
            'Geometric Probability'
        ],
        keyFormulas: [
            'P(A∪B) = P(A)+P(B)-P(A∩B)',
            'P(A|B) = P(A∩B)/P(B)',
            'Bayes: P(Aᵢ|B) = P(B|Aᵢ)P(Aᵢ)/ΣP(B|Aⱼ)P(Aⱼ)',
            'Binomial: P(X=r) = C(n,r)pʳqⁿ⁻ʳ',
            'Mean = np, Variance = npq'
        ],
        commonMistakes: [
            'Confusing independent and mutually exclusive events',
            'Wrong application of Bayes\' theorem',
            'Not using complement (P(at least 1) = 1 - P(none))',
            'Wrong identification of Bernoulli trial conditions'
        ],
        faqs: [
            {
                q: 'How to approach Probability for JEE?',
                a: 'Master: (1) Sample space counting (use PnC), (2) Conditional probability, (3) Bayes\' theorem, (4) Binomial distribution. 80% of JEE probability questions use these four concepts. MindPeak provides 50+ graded probability problems.'
            }
        ]
    },
    {
        slug: 'jee-maths-statistics',
        exam: 'JEE',
        subject: 'Mathematics',
        chapter: 'Statistics',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
        weightage: '2-3%',
        difficulty: 'Easy',
        pyqCount: 20,
        description: 'Mean, median, mode, variance, and standard deviation — formula-based with easy marks. MindPeak covers statistics in 2 sessions for guaranteed JEE Main marks.',
        topics: [
            'Mean (AM for Grouped & Ungrouped Data)',
            'Median & Mode',
            'Variance & Standard Deviation',
            'Effect of Change of Origin & Scale',
            'Combined Mean & Variance',
            'Coefficient of Variation'
        ],
        keyFormulas: [
            'σ² = Σ(xᵢ-x̄)²/n = (Σxᵢ²/n) - x̄²',
            'Combined mean: x̄₁₂ = (n₁x̄₁+n₂x̄₂)/(n₁+n₂)',
            'σ(aX+b) = |a|σ(X)',
            'CV = (σ/x̄) × 100%'
        ],
        commonMistakes: [
            'Wrong variance formula (forgetting the -x̄² term)',
            'Not applying change of origin correctly',
            'Confusing population and sample variance',
            'Wrong combined variance formula'
        ],
        faqs: [
            {
                q: 'Is Statistics asked beyond JEE Main?',
                a: 'JEE Main asks 1-2 straightforward questions. JEE Advanced rarely asks directly but may include in comprehension. Easy marks with minimal effort. MindPeak includes it in the quick-wins revision module.'
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/chapters/neetBiology.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "neetBiologyChapters",
    ()=>neetBiologyChapters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/leaf.js [app-client] (ecmascript) <export default as Leaf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$microscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Microscope$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/microscope.js [app-client] (ecmascript) <export default as Microscope>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bug.js [app-client] (ecmascript) <export default as Bug>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dna$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dna$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dna.js [app-client] (ecmascript) <export default as Dna>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tree$2d$pine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TreePine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tree-pine.js [app-client] (ecmascript) <export default as TreePine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sprout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sprout$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sprout.js [app-client] (ecmascript) <export default as Sprout>");
;
const neetBiologyChapters = [
    /* ──────── CLASS 11 BOTANY / DIVERSITY ──────── */ {
        slug: 'neet-biology-living-world-classification',
        exam: 'NEET',
        subject: 'Biology',
        chapter: 'The Living World & Biological Classification',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tree$2d$pine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TreePine$3e$__["TreePine"],
        weightage: '3-4%',
        difficulty: 'Easy',
        pyqCount: 20,
        description: 'Taxonomy, nomenclature, five kingdoms, and characteristics of living organisms — NCERT-based factual chapter. MindPeak\'s mnemonic-based approach ensures 100% retention for classification.',
        topics: [
            'Characteristics of Living Organisms',
            'Taxonomic Hierarchy',
            'Binomial Nomenclature',
            'Five Kingdom Classification (Whittaker)',
            'Kingdom Monera (Bacteria, Cyanobacteria)',
            'Kingdom Protista',
            'Kingdom Fungi',
            'Viruses, Viroids & Lichens'
        ],
        keyFormulas: [
            'Taxonomic hierarchy: Kingdom→Phylum→Class→Order→Family→Genus→Species',
            'Kings Play Chess On Fine Green Silk (mnemonic)'
        ],
        commonMistakes: [
            'Confusing Protista and Fungi characteristics',
            'Wrong classification of organisms at kingdom level',
            'Mixing up archaebacteria and eubacteria examples'
        ],
        faqs: [
            {
                q: 'How important is Classification for NEET?',
                a: '3-4% with purely NCERT-based questions. Read NCERT twice, make comparison tables for kingdoms. MindPeak provides colour-coded kingdom comparison charts for quick revision.'
            }
        ]
    },
    {
        slug: 'neet-biology-animal-kingdom',
        exam: 'NEET',
        subject: 'Biology',
        chapter: 'Animal Kingdom',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__["Bug"],
        weightage: '4-5%',
        difficulty: 'Moderate',
        pyqCount: 35,
        description: 'Phylum-wise classification from Porifera to Chordata — one of NEET\'s highest-weightage biology chapters. MindPeak\'s visual phylum comparison and example-based learning makes this vast chapter manageable.',
        topics: [
            'Basis of Classification (Symmetry, Coelom, Segmentation)',
            'Phylum Porifera',
            'Phylum Cnidaria',
            'Phylum Ctenophora & Platyhelminthes',
            'Phylum Aschelminthes (Nematoda)',
            'Phylum Annelida',
            'Phylum Arthropoda',
            'Phylum Mollusca',
            'Phylum Echinodermata',
            'Phylum Hemichordata & Chordata',
            'Classes of Vertebrata'
        ],
        keyFormulas: [
            'Diploblastic: 2 germ layers (Cnidaria)',
            'Triploblastic: 3 germ layers (Platyhelminthes onwards)',
            'Acoelomate → Pseudocoelomate → Coelomate'
        ],
        commonMistakes: [
            'Confusing examples between closely related phyla',
            'Wrong type of coelom for different phyla',
            'Mixing up characteristics of arthropod classes',
            'Wrong classification of borderline organisms'
        ],
        faqs: [
            {
                q: 'How to remember so many phyla and examples?',
                a: 'Focus on UNIQUE features: Porifera=pores, Cnidaria=cnidocytes, Annelida=segments, Arthropoda=jointed legs. Learn 3-4 examples per phylum. MindPeak provides visual flashcards with one killer feature per phylum.'
            },
            {
                q: 'Which phyla are most tested?',
                a: 'Arthropoda, Chordata (vertebrate classes), and Annelida are NEET favourites. Focus on characteristic features and common examples from these phyla.'
            }
        ]
    },
    {
        slug: 'neet-biology-plant-morphology-anatomy',
        exam: 'NEET',
        subject: 'Biology',
        chapter: 'Plant Morphology & Anatomy',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__["Leaf"],
        weightage: '4-5%',
        difficulty: 'Moderate',
        pyqCount: 35,
        description: 'Root, stem, leaf morphology plus tissue systems and secondary growth — a diagram-heavy NEET favourite. MindPeak\'s labelled-diagram practice sessions ensure students can identify structures on sight.',
        topics: [
            'Root System (Tap & Fibrous)',
            'Stem Modifications',
            'Leaf Morphology & Venation',
            'Inflorescence Types',
            'Flower Structure & Floral Formula',
            'Fruit & Seed Structure',
            'Simple & Complex Tissues',
            'Meristematic Tissues',
            'Anatomy of Dicot & Monocot Root/Stem/Leaf',
            'Secondary Growth'
        ],
        keyFormulas: [
            'Floral formula notation: K(5) C(5) A(5) G(2)',
            'Vascular bundle: Xylem (water) + Phloem (food)',
            'Open VB: cambium present (dicot), Closed VB: no cambium (monocot)'
        ],
        commonMistakes: [
            'Confusing dicot and monocot anatomical features',
            'Wrong floral formula components',
            'Mixing up stem and root modifications',
            'Wrong tissue type identification'
        ],
        faqs: [
            {
                q: 'How to study Plant Anatomy for NEET?',
                a: 'Draw diagrams — there\'s no shortcut. Draw T.S. of dicot root, monocot root, dicot stem, monocot stem, dicot leaf at least 3 times each. MindPeak provides blank diagram worksheets for active practice.'
            }
        ]
    },
    {
        slug: 'neet-biology-structural-organisation-animals',
        exam: 'NEET',
        subject: 'Biology',
        chapter: 'Structural Organisation in Animals',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$microscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Microscope$3e$__["Microscope"],
        weightage: '2-3%',
        difficulty: 'Easy',
        pyqCount: 18,
        description: 'Epithelial, connective, muscular, and nervous tissues plus organ systems of earthworm, cockroach, and frog. MindPeak\'s diagram-focused approach covers all NCERT figures for quick revision.',
        topics: [
            'Epithelial Tissue Types',
            'Connective Tissue Types',
            'Muscular Tissue (Skeletal, Smooth, Cardiac)',
            'Nervous Tissue',
            'Earthworm Morphology & Anatomy',
            'Cockroach Morphology & Anatomy',
            'Frog Morphology & Anatomy'
        ],
        keyFormulas: [
            '4 types of epithelial: squamous, cuboidal, columnar, ciliated',
            'Connective: areolar, adipose, tendon, ligament, cartilage, bone, blood'
        ],
        commonMistakes: [
            'Confusing types of epithelial tissue',
            'Wrong organ identification in cockroach anatomy',
            'Mixing up tendons (bone-muscle) and ligaments (bone-bone)',
            'Wrong tissue type for specific organs'
        ],
        faqs: [
            {
                q: 'Is Cockroach anatomy important for NEET?',
                a: 'NCERT has detailed cockroach morphology and anatomy. NEET asks 1-2 questions from this. Focus on Malpighian tubules, tracheal system, and digestive system. MindPeak includes this in diagram-heavy revision sessions.'
            }
        ]
    },
    /* ──────── CELL BIOLOGY ──────── */ {
        slug: 'neet-biology-cell-unit-of-life',
        exam: 'NEET',
        subject: 'Biology',
        chapter: 'Cell: The Unit of Life',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$microscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Microscope$3e$__["Microscope"],
        weightage: '4-5%',
        difficulty: 'Moderate',
        pyqCount: 35,
        description: 'Cell structure, organelles, prokaryotic vs eukaryotic cells — one of NEET\'s most important foundational chapters. MindPeak\'s organelle-function mapping makes cell biology intuitive and exam-ready.',
        topics: [
            'Cell Theory',
            'Prokaryotic vs Eukaryotic Cells',
            'Cell Membrane (Fluid Mosaic Model)',
            'Cell Wall',
            'Endomembrane System (ER, Golgi, Lysosomes)',
            'Mitochondria',
            'Plastids (Chloroplast)',
            'Ribosomes',
            'Cytoskeleton',
            'Nucleus & Nucleolus',
            'Centrosome & Cilia'
        ],
        keyFormulas: [
            'Fluid Mosaic Model: Singer & Nicolson (1972)',
            'Mitochondria: powerhouse of cell (ATP)',
            'ER: Rough (ribosomes) / Smooth (lipid synthesis)',
            'Lysosomes: suicidal bags (acid hydrolases)'
        ],
        commonMistakes: [
            'Confusing functions of smooth vs rough ER',
            'Wrong number of membranes (single vs double membrane organelles)',
            'Mixing up 70S (prokaryotic) and 80S (eukaryotic) ribosomes',
            'Wrong organelle for specific functions'
        ],
        faqs: [
            {
                q: 'Which organelles are most tested in NEET?',
                a: 'Mitochondria, chloroplast, ER, Golgi, and lysosomes. Know their structure, function, and membrane type. NCERT diagrams are essential. MindPeak uses organelle comparison tables for systematic revision.'
            }
        ]
    },
    {
        slug: 'neet-biology-biomolecules',
        exam: 'NEET',
        subject: 'Biology',
        chapter: 'Biomolecules',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dna$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dna$3e$__["Dna"],
        weightage: '3-4%',
        difficulty: 'Moderate',
        pyqCount: 25,
        description: 'Carbohydrates, proteins, lipids, nucleic acids, and enzymes — the chemistry of life. MindPeak connects biomolecule structure to function for deep understanding beyond rote memorization.',
        topics: [
            'Carbohydrates (Mono-, Di-, Polysaccharides)',
            'Proteins (Amino Acids, Peptide Bond, Protein Structure)',
            'Lipids (Fatty Acids, Phospholipids)',
            'Nucleic Acids (DNA & RNA Structure)',
            'Enzyme Classification & Mechanism',
            'Factors Affecting Enzyme Activity',
            'Cofactors & Coenzymes',
            'Primary & Secondary Metabolites'
        ],
        keyFormulas: [
            'Protein structure: Primary (1°) → Secondary (2°: α-helix, β-sheet) → Tertiary (3°) → Quaternary (4°)',
            'Enzyme: E + S → ES → E + P',
            'DNA: A=T (2 H-bonds), G≡C (3 H-bonds)'
        ],
        commonMistakes: [
            'Confusing reducing and non-reducing sugars',
            'Wrong level of protein structure',
            'Mixing up competitive and non-competitive inhibition',
            'Wrong enzyme classification'
        ],
        faqs: [
            {
                q: 'Is Biomolecules in Biology different from Chemistry?',
                a: 'Partially overlapping but Biology focuses on biological function (enzymes, protein structure, metabolic roles) while Chemistry focuses on chemical properties. MindPeak teaches both together for NEET + JEE students.'
            }
        ]
    },
    {
        slug: 'neet-biology-cell-division',
        exam: 'NEET',
        subject: 'Biology',
        chapter: 'Cell Cycle & Cell Division',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dna$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dna$3e$__["Dna"],
        weightage: '4-5%',
        difficulty: 'Moderate',
        pyqCount: 30,
        description: 'Mitosis, meiosis, and cell cycle regulation — fundamental to genetics and reproduction. MindPeak teaches cell division with chromosome tracking through every stage for visual clarity.',
        topics: [
            'Cell Cycle Phases (G1, S, G2, M)',
            'Mitosis Stages (PMAT)',
            'Cytokinesis',
            'Meiosis I & II',
            'Crossing Over & Recombination',
            'Significance of Mitosis & Meiosis',
            'Differences Between Mitosis & Meiosis'
        ],
        keyFormulas: [
            'Mitosis: 2n → 2n (46 → 46 in humans)',
            'Meiosis: 2n → n (46 → 23 in humans)',
            'Cell cycle: G1→S (DNA replication)→G2→M',
            'Crossing over occurs in Pachytene (Prophase I)'
        ],
        commonMistakes: [
            'Confusing stages of Prophase I (Leptotene to Diakinesis)',
            'Wrong chromosome number after meiosis I vs II',
            'Mixing up events of mitosis and meiosis II',
            'Forgetting that crossing over produces recombinants'
        ],
        faqs: [
            {
                q: 'How to differentiate Meiosis I from Meiosis II?',
                a: 'Meiosis I is reductional (2n→n, homologs separate). Meiosis II is equational (n→n, sister chromatids separate — like mitosis). MindPeak uses chromosome-tracking diagrams through every stage.'
            }
        ]
    },
    /* ──────── PLANT PHYSIOLOGY ──────── */ {
        slug: 'neet-biology-transport-in-plants',
        exam: 'NEET',
        subject: 'Biology',
        chapter: 'Transport in Plants',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sprout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sprout$3e$__["Sprout"],
        weightage: '3-4%',
        difficulty: 'Moderate',
        pyqCount: 22,
        description: 'Water potential, osmosis, transpiration, and translocation — the physics of plant life. MindPeak connects these concepts to real-world plant behavior for intuitive understanding.',
        topics: [
            'Diffusion & Facilitated Diffusion',
            'Osmosis & Water Potential',
            'Plasmolysis',
            'Imbibition',
            'Long Distance Transport (Xylem & Phloem)',
            'Root Pressure & Transpiration Pull',
            'Transpiration (Stomatal, Cuticular, Lenticular)',
            'Translocation of Sugars (Münch Hypothesis)',
            'Guttation'
        ],
        keyFormulas: [
            'Ψw = Ψs + Ψp (Water potential)',
            'Cohesion-tension theory for ascent of sap',
            'Transpiration pull > root pressure for tall trees'
        ],
        commonMistakes: [
            'Confusing diffusion vs osmosis',
            'Wrong water potential calculation',
            'Mixing up root pressure and transpiration pull mechanisms',
            'Forgetting that translocation is bidirectional in phloem'
        ],
        faqs: [
            {
                q: 'Is Transport in Plants scoring for NEET?',
                a: 'Yes — NCERT-based conceptual questions. Focus on water potential, transpiration types, and translocation mechanism. 3-4% with 3-4 hours of preparation.'
            }
        ]
    },
    {
        slug: 'neet-biology-mineral-nutrition',
        exam: 'NEET',
        subject: 'Biology',
        chapter: 'Mineral Nutrition',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sprout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sprout$3e$__["Sprout"],
        weightage: '2-3%',
        difficulty: 'Easy',
        pyqCount: 15,
        description: 'Essential elements, deficiency symptoms, and nitrogen fixation — NCERT factual chapter. MindPeak covers mineral nutrition with deficiency-symptom association tables for quick recall.',
        topics: [
            'Essential Macro & Micronutrients',
            'Criteria for Essentiality',
            'Deficiency Symptoms',
            'Hydroponics',
            'Nitrogen Cycle',
            'Biological Nitrogen Fixation',
            'Nitrogenase Enzyme',
            'Mycorrhiza & Root Nodules'
        ],
        keyFormulas: [
            'Macronutrients: C, H, O, N, P, K, Ca, Mg, S',
            'Micronutrients: Fe, Mn, Cu, Mo, Zn, B, Cl, Ni',
            'N₂ fixation: N₂ + 8H⁺ + 8e⁻ + 16ATP → 2NH₃ + H₂ + 16ADP'
        ],
        commonMistakes: [
            'Confusing macro and micronutrient deficiency symptoms',
            'Wrong element for specific deficiency (e.g., chlorosis)',
            'Mixing up symbiotic and free-living nitrogen fixers'
        ],
        faqs: [
            {
                q: 'How to remember mineral deficiency symptoms?',
                a: 'Group symptoms: chlorosis (N, Mg, Fe, Mn), necrosis (Ca, Mg), stunted growth (N, P), interveinal chlorosis (Mg, Fe). MindPeak provides a colour-coded deficiency chart.'
            }
        ]
    },
    {
        slug: 'neet-biology-photosynthesis',
        exam: 'NEET',
        subject: 'Biology',
        chapter: 'Photosynthesis in Higher Plants',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__["Leaf"],
        weightage: '4-6%',
        difficulty: 'Hard',
        pyqCount: 35,
        description: 'Light reactions, Calvin cycle, C3/C4/CAM pathways, and photorespiration — one of NEET\'s most conceptually rich biology chapters. MindPeak\'s step-by-step pathway tracing makes photosynthesis logical, not just memorized.',
        topics: [
            'Photosynthetic Pigments (Chlorophyll a, b, Carotenoids)',
            'Light Reactions (Photosystem I & II)',
            'Cyclic & Non-Cyclic Photophosphorylation',
            'Calvin Cycle (C3 Pathway)',
            'C4 Pathway (Hatch-Slack)',
            'CAM Pathway',
            'Photorespiration',
            'Factors Affecting Photosynthesis',
            'Chemiosmotic Hypothesis'
        ],
        keyFormulas: [
            '6CO₂ + 12H₂O → C₆H₁₂O₆ + 6O₂ + 6H₂O',
            'Light reaction: 12H₂O + 12NADP⁺ + 18ADP → 12NADPH + 18ATP + 6O₂',
            'Calvin: 3CO₂ → 1 G3P (uses 9ATP + 6NADPH)',
            'RuBisCO: both carboxylase and oxygenase activity'
        ],
        commonMistakes: [
            'Confusing PSI and PSII (PSII = P680, PSI = P700)',
            'Wrong ATP/NADPH ratios in Calvin cycle',
            'Mixing up C3 and C4 initial CO₂ acceptors',
            'Forgetting that O₂ comes from water, not CO₂'
        ],
        faqs: [
            {
                q: 'How to remember PSI vs PSII?',
                a: 'PSII was discovered second but acts first (P680, splits water). PSI acts second (P700, reduces NADP⁺). "Second discovered, first to act." MindPeak uses Z-scheme diagrams that make electron flow crystal clear.'
            },
            {
                q: 'Why is C4 pathway important for NEET?',
                a: 'NEET loves comparing C3 vs C4: (1) initial acceptor (RuBP vs PEP), (2) first product (PGA vs OAA), (3) CO₂ fixation enzyme (RuBisCO vs PEPCase), (4) photorespiration (yes vs minimal). Must-know comparison.'
            }
        ]
    },
    {
        slug: 'neet-biology-plant-respiration',
        exam: 'NEET',
        subject: 'Biology',
        chapter: 'Respiration in Plants',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__["Leaf"],
        weightage: '3-4%',
        difficulty: 'Moderate',
        pyqCount: 22,
        description: 'Glycolysis, Krebs cycle, ETC, and fermentation — the energy currency of cells. MindPeak teaches respiration alongside photosynthesis for a unified understanding of plant metabolism.',
        topics: [
            'Glycolysis (EMP Pathway)',
            'Pyruvate Oxidation',
            'TCA / Krebs Cycle',
            'Electron Transport Chain & Oxidative Phosphorylation',
            'Fermentation (Alcoholic & Lactic Acid)',
            'Respiratory Quotient (RQ)',
            'Amphibolic Pathways'
        ],
        keyFormulas: [
            'Glycolysis: Glucose → 2 Pyruvate + 2ATP + 2NADH',
            'Krebs: 1 Acetyl CoA → 3NADH + 1FADH₂ + 1GTP + 2CO₂',
            'Total ATP per glucose: 36-38 (theoretical)',
            'RQ = CO₂ evolved / O₂ consumed'
        ],
        commonMistakes: [
            'Wrong ATP count for different stages',
            'Confusing products of glycolysis vs Krebs cycle',
            'Wrong RQ values for different substrates',
            'Forgetting that glycolysis occurs in cytoplasm, Krebs in matrix'
        ],
        faqs: [
            {
                q: 'How is plant respiration different from animal?',
                a: 'The basic pathway (glycolysis → Krebs → ETC) is the same. Plants also respire — not just photosynthesize! Differences: plants have alternative oxidase pathway, no specialized respiratory organ. MindPeak covers both together.'
            }
        ]
    },
    {
        slug: 'neet-biology-plant-growth-development',
        exam: 'NEET',
        subject: 'Biology',
        chapter: 'Plant Growth & Development',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sprout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sprout$3e$__["Sprout"],
        weightage: '3-4%',
        difficulty: 'Moderate',
        pyqCount: 22,
        description: 'Plant hormones, photoperiodism, vernalization, and growth phases — concept-based NEET chapter. MindPeak\'s hormone-function table ensures students never confuse auxin, gibberellin, and cytokinin effects.',
        topics: [
            'Phases of Growth (Meristematic, Elongation, Maturation)',
            'Growth Rate & Growth Curves',
            'Plant Hormones (Auxin, Gibberellin, Cytokinin, Ethylene, ABA)',
            'Photoperiodism (SDP, LDP, DNP)',
            'Vernalization',
            'Seed Dormancy',
            'Phytochrome System'
        ],
        keyFormulas: [
            'Auxin: cell elongation, apical dominance',
            'Gibberellin: stem elongation, bolting',
            'Cytokinin: cell division, delay senescence',
            'Ethylene: fruit ripening',
            'ABA: stress hormone, stomatal closure'
        ],
        commonMistakes: [
            'Confusing auxin effects with gibberellin effects',
            'Wrong hormone for specific plant responses',
            'Mixing up short-day and long-day plants',
            'Forgetting that phytochrome is the photoperiodism receptor'
        ],
        faqs: [
            {
                q: 'How to remember all plant hormones?',
                a: 'Associate each with ONE key function: Auxin=elongation, Gibberellin=growth, Cytokinin=division, Ethylene=ripening, ABA=inhibition. Then learn additional effects. MindPeak provides a 5-hormone comparison chart.'
            }
        ]
    },
    /* ──────── HUMAN PHYSIOLOGY ──────── */ {
        slug: 'neet-biology-digestion-absorption',
        exam: 'NEET',
        subject: 'Biology',
        chapter: 'Digestion & Absorption',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
        weightage: '3-4%',
        difficulty: 'Moderate',
        pyqCount: 25,
        description: 'Alimentary canal, digestive glands, enzymes, and absorption — a diagram-intensive NEET topic. MindPeak\'s enzyme-substrate mapping makes digestive physiology systematic and exam-ready.',
        topics: [
            'Alimentary Canal Structure',
            'Digestive Glands (Salivary, Gastric, Pancreatic, Liver)',
            'Enzymes & Their Substrates',
            'Digestion in Mouth, Stomach, Small Intestine',
            'Absorption in Small & Large Intestine',
            'Peristalsis',
            'Hormonal Control (Gastrin, Secretin, CCK)',
            'Disorders (Jaundice, Vomiting, Diarrhoea)'
        ],
        keyFormulas: [
            'Salivary amylase: starch → maltose (pH 6.8)',
            'Pepsin: protein → peptides (pH 1.5-2)',
            'Trypsin: proteins → peptides (pH 7.5-8)',
            'Bile salts: emulsification of fats'
        ],
        commonMistakes: [
            'Wrong enzyme-substrate pairing',
            'Confusing pH conditions for different enzymes',
            'Wrong site of action for pancreatic vs gastric enzymes',
            'Mixing up absorption mechanisms'
        ],
        faqs: [
            {
                q: 'How to remember digestive enzymes?',
                a: 'Group by organ: Mouth (amylase), Stomach (pepsin, lipase), Pancreas (trypsin, amylase, lipase), Intestine (peptidases, maltase). Know substrate, product, and optimum pH for each. MindPeak provides a digestive enzyme chart organized by location.'
            }
        ]
    },
    {
        slug: 'neet-biology-breathing-gas-exchange',
        exam: 'NEET',
        subject: 'Biology',
        chapter: 'Breathing & Exchange of Gases',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
        weightage: '3-4%',
        difficulty: 'Moderate',
        pyqCount: 22,
        description: 'Respiratory organs, mechanism of breathing, oxygen transport, and CO₂ transport — NCERT-focused physiology chapter. MindPeak\'s O₂ dissociation curve analysis makes gas exchange concepts clear.',
        topics: [
            'Respiratory Organs (Human)',
            'Mechanism of Breathing (Inspiration & Expiration)',
            'Lung Volumes & Capacities',
            'Exchange of Gases (Diffusion)',
            'Transport of O₂ (Haemoglobin)',
            'Oxygen Dissociation Curve',
            'Transport of CO₂',
            'Regulation of Respiration',
            'Disorders (Asthma, Emphysema)'
        ],
        keyFormulas: [
            'TV = 500 mL, IRV = 2500 mL, ERV = 1000 mL, RV = 1200 mL',
            'VC = TV + IRV + ERV = 4000 mL',
            'TLC = VC + RV = 5200 mL',
            'HbO₂ → Hb + O₂ (at tissues)'
        ],
        commonMistakes: [
            'Confusing lung volumes and capacities',
            'Wrong factors shifting O₂ dissociation curve',
            'Mixing up internal and external respiration',
            'Wrong partial pressure values'
        ],
        faqs: [
            {
                q: 'What is the Bohr effect?',
                a: 'Increased CO₂ / decreased pH shifts O₂ dissociation curve RIGHT → easier O₂ release at tissues. This ensures active tissues (with more CO₂) get more O₂. MindPeak uses animated curve demonstrations.'
            }
        ]
    },
    {
        slug: 'neet-biology-body-fluids-circulation',
        exam: 'NEET',
        subject: 'Biology',
        chapter: 'Body Fluids & Circulation',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
        weightage: '4-5%',
        difficulty: 'Moderate',
        pyqCount: 30,
        description: 'Blood composition, heart anatomy, cardiac cycle, ECG, and blood groups — a high-yield NEET chapter. MindPeak\'s cardiac cycle timing diagram is the most efficient way to learn this topic.',
        topics: [
            'Blood Composition (Plasma, RBC, WBC, Platelets)',
            'Blood Groups (ABO & Rh)',
            'Coagulation of Blood',
            'Heart Anatomy (4 Chambers)',
            'Cardiac Cycle & Cardiac Output',
            'ECG (Electrocardiogram)',
            'Double Circulation',
            'Blood Pressure (Systolic/Diastolic)',
            'Lymphatic System',
            'Disorders (Hypertension, CAD)'
        ],
        keyFormulas: [
            'Cardiac output = Stroke volume × Heart rate',
            'Normal BP: 120/80 mmHg',
            'ECG: P wave (atrial depolarization), QRS (ventricular), T (ventricular repolarization)',
            'Cardiac cycle: 0.8 sec (atrial systole 0.1s, ventricular systole 0.3s, relaxation 0.4s)'
        ],
        commonMistakes: [
            'Wrong chamber identification in heart anatomy',
            'Confusing arteries and veins (function vs structure)',
            'Wrong ECG wave interpretation',
            'Mixing up ABO blood group antigens and antibodies'
        ],
        faqs: [
            {
                q: 'How to interpret ECG waves?',
                a: 'P = atrial contraction, QRS = ventricular contraction, T = ventricular relaxation. Longer QRS = abnormal ventricular conduction. MindPeak teaches ECG reading with real waveform analysis.'
            }
        ]
    },
    {
        slug: 'neet-biology-excretory-system',
        exam: 'NEET',
        subject: 'Biology',
        chapter: 'Excretory Products & Elimination',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
        weightage: '3-4%',
        difficulty: 'Moderate',
        pyqCount: 25,
        description: 'Kidney structure, nephron types, urine formation, and osmoregulation — diagram-heavy and conceptually important. MindPeak\'s nephron flowchart traces fluid composition from Bowman\'s capsule to collecting duct.',
        topics: [
            'Modes of Excretion (Ammonotelic, Ureotelic, Uricotelic)',
            'Human Excretory System',
            'Kidney Structure',
            'Nephron Types (Cortical & Juxtamedullary)',
            'Urine Formation (Filtration, Reabsorption, Secretion)',
            'Counter-Current Mechanism',
            'Regulation of Kidney Function (ADH, Aldosterone)',
            'Micturition',
            'Disorders (Uremia, Kidney Stones)'
        ],
        keyFormulas: [
            'GFR = 125 mL/min (about 180 L/day)',
            'Urine output: ~1.5 L/day (99% reabsorbed)',
            'ADH: increases water reabsorption',
            'Aldosterone: increases Na⁺ reabsorption'
        ],
        commonMistakes: [
            'Confusing cortical and juxtamedullary nephron characteristics',
            'Wrong order of urine formation steps',
            'Mixing up ADH and aldosterone functions',
            'Wrong location for different reabsorption processes'
        ],
        faqs: [
            {
                q: 'How does the counter-current mechanism work?',
                a: 'Loop of Henle and vasa recta run in opposite directions, maintaining an osmotic gradient in the medulla. This concentrates urine. Juxtamedullary nephrons (with long loops) are key. MindPeak uses animated diagrams showing ion/water movement at each segment.'
            }
        ]
    },
    {
        slug: 'neet-biology-locomotion-movement',
        exam: 'NEET',
        subject: 'Biology',
        chapter: 'Locomotion & Movement',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
        weightage: '3-4%',
        difficulty: 'Moderate',
        pyqCount: 22,
        description: 'Skeletal system, joints, muscles, and mechanism of contraction — the sliding filament theory is a NEET staple. MindPeak\'s step-by-step contraction sequence makes the molecular mechanism clear.',
        topics: [
            'Types of Movement',
            'Skeletal Muscle Structure',
            'Sliding Filament Theory',
            'Mechanism of Muscle Contraction',
            'Role of Ca²⁺ and ATP',
            'Types of Joints (Fibrous, Cartilaginous, Synovial)',
            'Axial & Appendicular Skeleton',
            'Disorders (Myasthenia Gravis, Osteoporosis, Arthritis)'
        ],
        keyFormulas: [
            'Sarcomere: Z→M→Z (A band, I band, H zone)',
            'Contraction: Ca²⁺ released → Tropomyosin moves → Actin-Myosin cross bridge',
            'ATP needed: for cross-bridge cycling AND Ca²⁺ pumping back'
        ],
        commonMistakes: [
            'Confusing A band and I band changes during contraction',
            'Wrong sequence of muscle contraction events',
            'Mixing up types of joints with examples',
            'Forgetting that A band length doesn\'t change (actin slides)'
        ],
        faqs: [
            {
                q: 'What changes during muscle contraction?',
                a: 'I band and H zone DECREASE (actin slides in). A band stays SAME. Sarcomere shortens. Remember: "I Hate Shorter" — I and H get shorter. MindPeak uses before/after sarcomere diagrams.'
            }
        ]
    },
    {
        slug: 'neet-biology-neural-control',
        exam: 'NEET',
        subject: 'Biology',
        chapter: 'Neural Control & Coordination',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"],
        weightage: '4-5%',
        difficulty: 'Hard',
        pyqCount: 32,
        description: 'Nervous system, neuron structure, synaptic transmission, brain anatomy, and sensory organs — one of NEET\'s most detailed chapters. MindPeak\'s brain-map diagram covers all regions and functions systematically.',
        topics: [
            'Neuron Structure & Types',
            'Generation of Nerve Impulse',
            'Synapse & Synaptic Transmission',
            'Central Nervous System (Brain & Spinal Cord)',
            'Brain Regions (Cerebrum, Cerebellum, Medulla)',
            'Peripheral Nervous System',
            'Reflex Arc & Reflex Action',
            'Eye Structure & Vision',
            'Ear Structure & Hearing/Balance'
        ],
        keyFormulas: [
            'Resting potential: -70mV',
            'Action potential: Na⁺ influx (depolarization) → K⁺ efflux (repolarization)',
            'Neurotransmitter: Acetylcholine at NMJ',
            'Retina: Rods (dim light) + Cones (colour)'
        ],
        commonMistakes: [
            'Confusing sympathetic and parasympathetic responses',
            'Wrong brain region-function mapping',
            'Mixing up rods and cones functions',
            'Wrong sequence of nerve impulse generation'
        ],
        faqs: [
            {
                q: 'How to remember brain regions?',
                a: 'Cerebrum=thinking, Cerebellum=coordination/balance, Medulla=vital functions (breathing, heartbeat), Hypothalamus=body temperature/hunger/thirst. MindPeak provides a labelled brain diagram with function associations.'
            }
        ]
    },
    {
        slug: 'neet-biology-chemical-coordination',
        exam: 'NEET',
        subject: 'Biology',
        chapter: 'Chemical Coordination & Integration',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"],
        weightage: '4-5%',
        difficulty: 'Moderate',
        pyqCount: 30,
        description: 'Endocrine glands, hormones, and their functions — a table-heavy NEET chapter. MindPeak\'s gland-hormone-function mapping table covers all NCERT hormones in one visual reference.',
        topics: [
            'Endocrine Glands (Pituitary, Thyroid, Parathyroid, Adrenal, Pancreas, Gonads)',
            'Hypothalamus & Pituitary Axis',
            'Thyroid Hormones (T3, T4)',
            'Parathyroid Hormone & Calcitonin',
            'Adrenal Hormones (Cortisol, Aldosterone, Adrenaline)',
            'Pancreatic Hormones (Insulin & Glucagon)',
            'Reproductive Hormones',
            'Mechanism of Hormone Action',
            'Disorders (Diabetes, Goitre, Cushing\'s)'
        ],
        keyFormulas: [
            'Insulin: lowers blood glucose',
            'Glucagon: raises blood glucose',
            'T3/T4: BMR regulation',
            'PTH: increases blood Ca²⁺',
            'Calcitonin: decreases blood Ca²⁺'
        ],
        commonMistakes: [
            'Confusing hormones of anterior and posterior pituitary',
            'Wrong hormone-disorder association',
            'Mixing up cortisol and aldosterone functions',
            'Wrong mechanism of action (lipophilic vs hydrophilic hormones)'
        ],
        faqs: [
            {
                q: 'How many hormones do I need to remember?',
                a: 'NCERT covers about 30 hormones. Focus on gland → hormone → function → disorder. MindPeak provides a complete hormone table organized by gland that covers all NEET-relevant hormones on one page.'
            }
        ]
    },
    /* ──────── REPRODUCTION ──────── */ {
        slug: 'neet-biology-reproduction-organisms',
        exam: 'NEET',
        subject: 'Biology',
        chapter: 'Reproduction in Organisms',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sprout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sprout$3e$__["Sprout"],
        weightage: '2-3%',
        difficulty: 'Easy',
        pyqCount: 15,
        description: 'Asexual and sexual reproduction overview — a short NCERT-based introductory chapter. MindPeak covers this in one session as a prelude to the detailed chapters on plant and human reproduction.',
        topics: [
            'Asexual Reproduction (Binary Fission, Budding, Fragmentation, Vegetative Propagation)',
            'Sexual Reproduction Phases',
            'Pre-fertilization Events',
            'Fertilization (External & Internal)',
            'Post-fertilization Events',
            'Parthenogenesis'
        ],
        keyFormulas: [
            'Asexual: clone (genetically identical)',
            'Sexual: involves gamete formation, fusion, meiosis',
            'Fertilization types: External (aquatic), Internal (terrestrial)'
        ],
        commonMistakes: [
            'Confusing types of asexual reproduction with examples',
            'Wrong classification of organisms by reproduction type',
            'Mixing up vegetative propagation methods'
        ],
        faqs: [
            {
                q: 'Is this chapter tested directly in NEET?',
                a: '1-2 direct questions. Focus on types of asexual reproduction and basic sexual reproduction terminology. Quick marks — MindPeak covers it in the overview session before diving into detailed reproduction chapters.'
            }
        ]
    },
    {
        slug: 'neet-biology-sexual-reproduction-plants',
        exam: 'NEET',
        subject: 'Biology',
        chapter: 'Sexual Reproduction in Flowering Plants',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sprout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sprout$3e$__["Sprout"],
        weightage: '4-5%',
        difficulty: 'Moderate',
        pyqCount: 30,
        description: 'Flower structure, microsporogenesis, megasporogenesis, pollination, and embryo development — a high-yield NEET chapter. MindPeak\'s step-by-step development diagrams make embryology visual and logical.',
        topics: [
            'Flower Structure (Androecium & Gynoecium)',
            'Microsporogenesis & Pollen Grain',
            'Megasporogenesis & Embryo Sac',
            'Pollination Types (Self, Cross, Agents)',
            'Double Fertilization',
            'Endosperm Development',
            'Embryo Development (Dicot & Monocot)',
            'Seed & Fruit Formation',
            'Apomixis & Polyembryony'
        ],
        keyFormulas: [
            'Microspore mother cell (2n) → 4 microspores (n) → pollen grain',
            'Megaspore mother cell (2n) → 4 megaspores → 1 survives → 7-celled embryo sac',
            'Double fertilization: sperm + egg = zygote (2n), sperm + polar nuclei = endosperm (3n)'
        ],
        commonMistakes: [
            'Confusing microsporogenesis and megasporogenesis details',
            'Wrong ploidy of embryo sac cells',
            'Mixing up types of endosperm development',
            'Forgetting that double fertilization is unique to angiosperms'
        ],
        faqs: [
            {
                q: 'What is Double Fertilization?',
                a: 'Unique to angiosperms: (1) syngamy = sperm + egg → zygote (2n), (2) triple fusion = sperm + 2 polar nuclei → endosperm (3n). Both events occur simultaneously. NEET tests this every year. MindPeak uses animated diagrams.'
            }
        ]
    },
    {
        slug: 'neet-biology-human-reproduction',
        exam: 'NEET',
        subject: 'Biology',
        chapter: 'Human Reproduction',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
        weightage: '4-5%',
        difficulty: 'Moderate',
        pyqCount: 30,
        description: 'Male and female reproductive systems, gametogenesis, menstrual cycle, and embryonic development — core NEET chapter. MindPeak\'s timeline-based approach to the menstrual cycle makes hormonal changes intuitive.',
        topics: [
            'Male Reproductive System',
            'Female Reproductive System',
            'Spermatogenesis',
            'Oogenesis',
            'Menstrual Cycle (Phases & Hormones)',
            'Fertilization & Implantation',
            'Embryonic Development',
            'Pregnancy & Placenta',
            'Parturition & Lactation'
        ],
        keyFormulas: [
            'Menstrual cycle: 28 days (Menstrual→Follicular→Ovulatory→Luteal)',
            'FSH: follicle development, LH surge: ovulation',
            'hCG: pregnancy hormone from trophoblast',
            'Placenta: produces hCG, hPL, estrogen, progesterone'
        ],
        commonMistakes: [
            'Confusing FSH and LH functions',
            'Wrong phase alignment in menstrual cycle',
            'Mixing up spermatogenesis and oogenesis timelines',
            'Wrong hormonal sequence during pregnancy'
        ],
        faqs: [
            {
                q: 'How to master the menstrual cycle?',
                a: 'Draw the timeline: Day 1-5 (menstruation), 6-13 (follicular, estrogen rises), 14 (LH surge → ovulation), 15-28 (luteal, progesterone rises). If no fertilization → corpus luteum degenerates → cycle repeats. MindPeak uses a 4-phase diagram with hormone curves.'
            }
        ]
    },
    {
        slug: 'neet-biology-reproductive-health',
        exam: 'NEET',
        subject: 'Biology',
        chapter: 'Reproductive Health',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
        weightage: '2-3%',
        difficulty: 'Easy',
        pyqCount: 15,
        description: 'Contraception, IVF, STDs, and population control — factual NCERT chapter with easy marks. MindPeak covers reproductive health with comparison tables for contraceptive methods.',
        topics: [
            'Population Explosion & Birth Control',
            'Contraceptive Methods (Natural, Barrier, Hormonal, IUD, Surgical)',
            'Assisted Reproductive Technologies (IVF, ZIFT, GIFT, ICSI)',
            'Sexually Transmitted Diseases',
            'Infertility Causes & Solutions'
        ],
        keyFormulas: [
            'IVF: In Vitro Fertilization (test tube baby)',
            'ZIFT: Zygote Intra Fallopian Transfer',
            'GIFT: Gamete Intra Fallopian Transfer',
            'ICSI: Intracytoplasmic Sperm Injection'
        ],
        commonMistakes: [
            'Confusing IVF, ZIFT, and GIFT procedures',
            'Wrong classification of contraceptive methods',
            'Mixing up STD causative agents'
        ],
        faqs: [
            {
                q: 'Which ART techniques are most tested?',
                a: 'IVF, ZIFT, and GIFT — know the differences: IVF is fusion outside body + embryo transfer to uterus, ZIFT is zygote to fallopian tube, GIFT is gamete to fallopian tube. NEET asks 1-2 questions on ARTs.'
            }
        ]
    },
    /* ──────── GENETICS & EVOLUTION ──────── */ {
        slug: 'neet-biology-inheritance-variation',
        exam: 'NEET',
        subject: 'Biology',
        chapter: 'Principles of Inheritance & Variation',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dna$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dna$3e$__["Dna"],
        weightage: '5-7%',
        difficulty: 'Hard',
        pyqCount: 40,
        description: 'Mendelian genetics, linkage, sex determination, and genetic disorders — the highest-weightage biology chapter in NEET. MindPeak\'s cross-solving methodology ensures students can solve any genetics problem systematically.',
        topics: [
            'Mendel\'s Laws (Dominance, Segregation, Independent Assortment)',
            'Monohybrid & Dihybrid Crosses',
            'Incomplete Dominance & Codominance',
            'Multiple Alleles (Blood Groups)',
            'Linkage & Recombination',
            'Chromosomal Theory of Inheritance',
            'Sex Determination (XX-XY, ZW-ZZ)',
            'Sex-Linked Inheritance',
            'Pedigree Analysis',
            'Chromosomal Disorders (Down\'s, Turner\'s, Klinefelter\'s)'
        ],
        keyFormulas: [
            'Monohybrid: 3:1 (F2)',
            'Dihybrid: 9:3:3:1 (F2)',
            'Test cross: unknown × recessive',
            'Incomplete dominance: 1:2:1',
            'Blood groups: Iᴬ Iᴬ or Iᴬ i = A, Iᴮ Iᴮ or Iᴮ i = B, Iᴬ Iᴮ = AB, ii = O'
        ],
        commonMistakes: [
            'Wrong gamete formation in dihybrid cross',
            'Confusing incomplete dominance with codominance',
            'Wrong pedigree analysis interpretation',
            'Mixing up autosomal and sex-linked inheritance patterns'
        ],
        faqs: [
            {
                q: 'How to approach pedigree analysis?',
                a: 'Step 1: Check if trait is dominant or recessive. Step 2: Check if autosomal or sex-linked. Step 3: Assign genotypes. Rules: affected female + unaffected male → can\'t be X-dominant. MindPeak provides a pedigree analysis flowchart.'
            },
            {
                q: 'Why is this chapter so high-weightage?',
                a: '5-7% because genetics is conceptual AND problem-solving. NEET asks numerical crosses, pedigree analysis, and disorder identification. MindPeak dedicates 10+ sessions to build genetics mastery.'
            }
        ]
    },
    {
        slug: 'neet-biology-molecular-inheritance',
        exam: 'NEET',
        subject: 'Biology',
        chapter: 'Molecular Basis of Inheritance',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dna$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dna$3e$__["Dna"],
        weightage: '5-6%',
        difficulty: 'Hard',
        pyqCount: 35,
        description: 'DNA structure, replication, transcription, translation, and regulation — the central dogma of molecular biology. MindPeak\'s step-by-step molecular diagrams make gene expression mechanisms crystal clear.',
        topics: [
            'DNA Structure (Watson-Crick Model)',
            'DNA Packaging (Nucleosome)',
            'DNA Replication (Semi-Conservative)',
            'Transcription (Prokaryotic & Eukaryotic)',
            'mRNA Processing (Splicing)',
            'Genetic Code Properties',
            'Translation (Protein Synthesis)',
            'Lac Operon',
            'Human Genome Project',
            'DNA Fingerprinting'
        ],
        keyFormulas: [
            'Central dogma: DNA → RNA → Protein',
            'Chargaff\'s rule: A=T, G=C',
            'Replication: semi-conservative (Meselson-Stahl)',
            'Start codon: AUG (Met), Stop: UAA, UAG, UGA',
            'Operon: Promoter + Operator + Structural genes'
        ],
        commonMistakes: [
            'Confusing template and coding strand',
            'Wrong direction of replication (leading vs lagging)',
            'Mixing up transcription and translation details',
            'Wrong lac operon regulation (inducer is allolactose, not lactose)'
        ],
        faqs: [
            {
                q: 'How to remember the Genetic Code?',
                a: 'Start with: AUG = start (Met), 3 stops (UAA=Ochre, UAG=Amber, UGA=Opal). Genetic code is universal (few exceptions), non-overlapping, degenerate (multiple codons for same AA), and unambiguous. MindPeak provides a colour-coded codon table.'
            }
        ]
    },
    {
        slug: 'neet-biology-evolution',
        exam: 'NEET',
        subject: 'Biology',
        chapter: 'Evolution',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dna$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dna$3e$__["Dna"],
        weightage: '3-4%',
        difficulty: 'Moderate',
        pyqCount: 22,
        description: 'Origin of life, Darwin\'s theory, Hardy-Weinberg principle, and evidence of evolution — a conceptual NEET chapter. MindPeak teaches evolution chronologically for logical understanding.',
        topics: [
            'Origin of Life (Oparin-Haldane Hypothesis)',
            'Miller-Urey Experiment',
            'Biological Evolution (Darwin\'s Theory)',
            'Natural Selection Types',
            'Hardy-Weinberg Principle',
            'Genetic Drift & Founder Effect',
            'Homologous & Analogous Organs',
            'Adaptive Radiation',
            'Human Evolution Timeline'
        ],
        keyFormulas: [
            'Hardy-Weinberg: p² + 2pq + q² = 1 (genotype frequencies)',
            'p + q = 1 (allele frequencies)',
            'Natural selection: directional, stabilizing, disruptive'
        ],
        commonMistakes: [
            'Confusing homologous and analogous organs',
            'Wrong Hardy-Weinberg equilibrium conditions',
            'Mixing up genetic drift and natural selection',
            'Wrong timeline of human evolution'
        ],
        faqs: [
            {
                q: 'How important is Hardy-Weinberg for NEET?',
                a: 'Numericals on allele/genotype frequency calculation using p²+2pq+q²=1 are tested regularly. Practice 10+ problems. MindPeak includes HW problems in the genetics problem set.'
            }
        ]
    },
    /* ──────── BIOLOGY IN HUMAN WELFARE ──────── */ {
        slug: 'neet-biology-human-health-diseases',
        exam: 'NEET',
        subject: 'Biology',
        chapter: 'Human Health & Diseases',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
        weightage: '4-5%',
        difficulty: 'Moderate',
        pyqCount: 30,
        description: 'Diseases, immunity types, AIDS, cancer, and drugs — a factual high-yield NEET chapter. MindPeak\'s disease-pathogen-symptom mapping table covers all NCERT diseases efficiently.',
        topics: [
            'Common Diseases (Typhoid, Malaria, Amoebiasis, Filariasis, Ascariasis)',
            'Pathogen Types (Bacteria, Virus, Protozoa, Helminth)',
            'Immunity Types (Innate & Adaptive)',
            'Humoral & Cell-Mediated Immunity',
            'Vaccination & Immunization',
            'AIDS (HIV Life Cycle)',
            'Cancer Types & Causes',
            'Drugs & Alcohol Abuse'
        ],
        keyFormulas: [
            'Innate: non-specific, present from birth',
            'Adaptive: specific, acquired after exposure',
            'B cells → antibodies (humoral)',
            'T cells → cell-mediated',
            'HIV attacks helper T cells (CD4+)'
        ],
        commonMistakes: [
            'Wrong pathogen for specific diseases',
            'Confusing innate and adaptive immunity components',
            'Mixing up active and passive immunity',
            'Wrong vector for vector-borne diseases'
        ],
        faqs: [
            {
                q: 'How to remember all diseases and pathogens?',
                a: 'Group by pathogen type: Bacterial (typhoid, cholera), Viral (AIDS, dengue), Protozoan (malaria, amoebiasis), Helminth (filariasis, ascariasis). Learn causative organism, symptoms, and vector. MindPeak provides a disease comparison table.'
            }
        ]
    },
    {
        slug: 'neet-biology-food-production-microbes',
        exam: 'NEET',
        subject: 'Biology',
        chapter: 'Food Production & Microbes in Human Welfare',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__["Leaf"],
        weightage: '3-4%',
        difficulty: 'Easy',
        pyqCount: 20,
        description: 'Animal husbandry, plant breeding, biofortification, and industrial microbiology — NCERT factual content with consistent NEET appearances. MindPeak covers this in 2 focused sessions.',
        topics: [
            'Animal Husbandry (Dairy, Poultry, Fisheries, Apiculture)',
            'Plant Breeding Steps',
            'Biofortification',
            'Single Cell Protein',
            'Microbes in Household Products (Curd, Bread, Toddy)',
            'Industrial Products (Antibiotics, Chemicals, Enzymes)',
            'Biogas Production',
            'Sewage Treatment',
            'Biocontrol & Biofertilizers'
        ],
        keyFormulas: [
            'Curd: Lactobacillus',
            'Bread: Saccharomyces cerevisiae',
            'Penicillin: Penicillium notatum',
            'Biogas: Methanobacterium',
            'BGA & Rhizobium: biofertilizers'
        ],
        commonMistakes: [
            'Wrong microorganism for specific products',
            'Confusing biocontrol and biofertilizer organisms',
            'Mixing up primary and secondary sewage treatment',
            'Wrong steps of plant breeding'
        ],
        faqs: [
            {
                q: 'Are microbe-product associations tested directly?',
                a: 'Yes — NEET asks "which microorganism produces X" questions. Know: Lactobacillus (curd), Saccharomyces (bread/wine), Penicillium (penicillin), Streptomyces (streptomycin), Methanobacterium (biogas). MindPeak\'s microbe-product chart covers all NCERT associations.'
            }
        ]
    },
    /* ──────── BIOTECHNOLOGY ──────── */ {
        slug: 'neet-biology-biotechnology-principles',
        exam: 'NEET',
        subject: 'Biology',
        chapter: 'Biotechnology: Principles & Processes',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dna$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dna$3e$__["Dna"],
        weightage: '3-4%',
        difficulty: 'Hard',
        pyqCount: 25,
        description: 'Restriction enzymes, vectors, PCR, and gene cloning — the tools of genetic engineering. MindPeak\'s step-by-step gene-cloning workflow makes biotechnology logical and process-oriented.',
        topics: [
            'Principles of Biotechnology',
            'Restriction Enzymes (EcoRI, HindIII)',
            'Gel Electrophoresis',
            'Cloning Vectors (pBR322, Ti plasmid)',
            'Competent Host Cells',
            'PCR (Polymerase Chain Reaction)',
            'Gene Cloning Steps',
            'Selectable Markers (Insertional Inactivation)',
            'Bioreactors'
        ],
        keyFormulas: [
            'Restriction enzymes: recognize palindromic sequences',
            'PCR: Denaturation (94°C) → Annealing (55°C) → Extension (72°C)',
            'Taq polymerase: thermostable (from Thermus aquaticus)',
            'pBR322: ampᴿ and tetᴿ markers'
        ],
        commonMistakes: [
            'Wrong restriction enzyme recognition sequences',
            'Confusing cloning vector features',
            'Missing PCR step temperatures',
            'Wrong identification of selectable markers'
        ],
        faqs: [
            {
                q: 'How to understand PCR?',
                a: 'PCR amplifies DNA in 3 steps: (1) Denature at 94°C (separate strands), (2) Anneal at 55°C (primers bind), (3) Extend at 72°C (Taq polymerase copies). 30 cycles = 2³⁰ copies = ~1 billion copies! MindPeak uses visual PCR animations.'
            }
        ]
    },
    {
        slug: 'neet-biology-biotechnology-applications',
        exam: 'NEET',
        subject: 'Biology',
        chapter: 'Biotechnology & its Applications',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dna$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dna$3e$__["Dna"],
        weightage: '2-3%',
        difficulty: 'Moderate',
        pyqCount: 18,
        description: 'Transgenic organisms, gene therapy, Bt cotton, and GMOs — applications of biotechnology concepts. MindPeak connects these to real-world examples for memorable learning.',
        topics: [
            'Bt Cotton & Bt Toxin Mechanism',
            'RNA Interference (RNAi)',
            'Gene Therapy (ADA Deficiency)',
            'Transgenic Animals',
            'Genetically Modified Organisms (GMOs)',
            'Biopiracy & Bioethics',
            'Golden Rice',
            'Insulin Production (rDNA Technology)'
        ],
        keyFormulas: [
            'Bt toxin: inactive protoxin → active in insect gut (alkaline pH)',
            'Gene therapy: introduce functional gene to treat genetic defect',
            'ADA deficiency: first gene therapy target',
            'Insulin: pro-insulin → A chain + B chain (remove C peptide)'
        ],
        commonMistakes: [
            'Wrong mechanism of Bt toxin action',
            'Confusing gene therapy approaches',
            'Mixing up transgenic organism examples',
            'Wrong insulin production steps'
        ],
        faqs: [
            {
                q: 'How does Bt Cotton work?',
                a: 'Bt gene from Bacillus thuringiensis is inserted into cotton. Plant produces Bt toxin (Cry protein) as inactive protoxin. When insect eats it, alkaline gut pH activates toxin → pores in gut → insect dies. MindPeak explains this with step-by-step mechanism diagrams.'
            }
        ]
    },
    /* ──────── ECOLOGY ──────── */ {
        slug: 'neet-biology-organisms-populations',
        exam: 'NEET',
        subject: 'Biology',
        chapter: 'Organisms & Populations',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tree$2d$pine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TreePine$3e$__["TreePine"],
        weightage: '3-4%',
        difficulty: 'Moderate',
        pyqCount: 22,
        description: 'Population attributes, growth models, and species interactions — ecology foundation for NEET. MindPeak connects ecological concepts to real-world examples like lockdown pollution reduction.',
        topics: [
            'Organism & Environment',
            'Abiotic Factors (Temperature, Water, Light, Soil)',
            'Adaptations',
            'Population Attributes (Density, Birth Rate, Death Rate)',
            'Population Growth Models (Exponential & Logistic)',
            'Age Structure & Population Pyramids',
            'Species Interactions (Mutualism, Competition, Predation, Parasitism, Commensalism, Amensalism)'
        ],
        keyFormulas: [
            'Exponential: dN/dt = rN',
            'Logistic: dN/dt = rN(K-N)/K',
            'K = carrying capacity, r = intrinsic rate of increase',
            'Population density: N/Area or N/Volume'
        ],
        commonMistakes: [
            'Confusing exponential and logistic growth curve shapes',
            'Wrong species interaction classification',
            'Mixing up +/- notation for different interactions',
            'Wrong interpretation of age pyramids'
        ],
        faqs: [
            {
                q: 'How to remember species interactions?',
                a: 'Use +/-/0 notation: Mutualism (+,+), Competition (-,-), Predation (+,-), Parasitism (+,-), Commensalism (+,0), Amensalism (-,0). MindPeak provides an interaction matrix with examples for each type.'
            }
        ]
    },
    {
        slug: 'neet-biology-ecosystem',
        exam: 'NEET',
        subject: 'Biology',
        chapter: 'Ecosystem',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tree$2d$pine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TreePine$3e$__["TreePine"],
        weightage: '3-4%',
        difficulty: 'Moderate',
        pyqCount: 22,
        description: 'Energy flow, food chains, ecological pyramids, and biogeochemical cycles — conceptual ecology for NEET. MindPeak uses real ecosystem data to make energy flow calculations meaningful.',
        topics: [
            'Ecosystem Structure (Biotic & Abiotic)',
            'Productivity (GPP, NPP)',
            'Energy Flow (10% Rule)',
            'Food Chain & Food Web',
            'Ecological Pyramids (Number, Biomass, Energy)',
            'Ecological Succession (Primary & Secondary)',
            'Nutrient Cycling',
            'Carbon & Phosphorus Cycles',
            'Ecosystem Services'
        ],
        keyFormulas: [
            'NPP = GPP - Respiration',
            '10% energy transfer rule (Lindeman)',
            'Energy pyramid: always upright',
            'Biomass pyramid: inverted in ocean (phytoplankton < zooplankton)',
            'Succession: Pioneer → Seral stages → Climax community'
        ],
        commonMistakes: [
            'Confusing GPP and NPP',
            'Wrong pyramid shape for different ecosystems',
            'Mixing up primary and secondary succession',
            'Wrong nutrient cycle details'
        ],
        faqs: [
            {
                q: 'What is the 10% rule?',
                a: 'Only 10% of energy transfers to the next trophic level (Lindeman\'s law). So if producers have 1000 kcal, herbivores get 100, carnivores get 10. This is why food chains rarely exceed 4-5 levels. MindPeak illustrates with energy flow diagrams.'
            }
        ]
    },
    {
        slug: 'neet-biology-biodiversity-conservation',
        exam: 'NEET',
        subject: 'Biology',
        chapter: 'Biodiversity & Conservation',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tree$2d$pine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TreePine$3e$__["TreePine"],
        weightage: '3-4%',
        difficulty: 'Easy',
        pyqCount: 22,
        description: 'Biodiversity types, threats, hotspots, and conservation strategies — conceptual yet factual NEET chapter. MindPeak covers biodiversity with India-specific examples and case studies.',
        topics: [
            'Types of Biodiversity (Genetic, Species, Ecological)',
            'Patterns of Biodiversity',
            'Species-Area Relationship',
            'Importance of Biodiversity',
            'Loss of Biodiversity (Causes)',
            'Biodiversity Hotspots',
            'Red Data Book & IUCN',
            'Conservation Strategies (In-Situ & Ex-Situ)',
            'Biosphere Reserves & National Parks'
        ],
        keyFormulas: [
            'Species-Area: log S = log C + Z log A',
            'Z value: 0.1-0.2 (small area), 0.6-1.2 (large area)',
            'India: 4 biodiversity hotspots',
            'IUCN categories: Extinct, Endangered, Vulnerable, etc.'
        ],
        commonMistakes: [
            'Wrong Z value range for species-area relationship',
            'Confusing in-situ and ex-situ conservation methods',
            'Wrong hotspot locations',
            'Mixing up National Park and Wildlife Sanctuary rules'
        ],
        faqs: [
            {
                q: 'What are India\'s biodiversity hotspots?',
                a: 'India has 4 hotspots: (1) Western Ghats & Sri Lanka, (2) Indo-Burma, (3) Himalaya, (4) Sundaland. A hotspot has >1500 endemic plant species AND has lost >70% of original habitat. MindPeak covers biodiversity with map-based learning.'
            }
        ]
    },
    {
        slug: 'neet-biology-environmental-issues',
        exam: 'NEET',
        subject: 'Biology',
        chapter: 'Environmental Issues',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tree$2d$pine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TreePine$3e$__["TreePine"],
        weightage: '2-3%',
        difficulty: 'Easy',
        pyqCount: 15,
        description: 'Pollution, ozone depletion, global warming, and waste management — socially relevant NEET content. MindPeak connects environmental issues to current events for engaging and memorable learning.',
        topics: [
            'Air Pollution & Control',
            'Water Pollution (BOD, Eutrophication)',
            'Solid Waste Management',
            'Radioactive Waste',
            'Greenhouse Effect & Global Warming',
            'Ozone Depletion',
            'Deforestation',
            'Waste Water Treatment',
            'Integrated Organic Farming',
            'Case Study: Chipko Movement'
        ],
        keyFormulas: [
            'BOD: Biochemical Oxygen Demand (higher = more polluted)',
            'Eutrophication: nutrient enrichment → algal bloom → O₂ depletion',
            'Ozone: CFCs → Cl + O₃ → ClO + O₂',
            'Greenhouse gases: CO₂, CH₄, N₂O, CFCs'
        ],
        commonMistakes: [
            'Confusing BOD and COD',
            'Wrong greenhouse gas contributions',
            'Mixing up primary and secondary pollutants',
            'Wrong ozone depletion mechanism details'
        ],
        faqs: [
            {
                q: 'How important is Environmental Issues for NEET?',
                a: '2-3% with straightforward NCERT-based questions. Focus on BOD, eutrophication, greenhouse effect, and ozone depletion. Quick marks — MindPeak includes this in the last-week revision module.'
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/chapters/neetPhysics.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "neetPhysicsChapters",
    ()=>neetPhysicsChapters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gauge.js [app-client] (ecmascript) <export default as Gauge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$magnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Magnet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/magnet.js [app-client] (ecmascript) <export default as Magnet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/thermometer.js [app-client] (ecmascript) <export default as Thermometer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/waves.js [app-client] (ecmascript) <export default as Waves>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$atom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Atom$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/atom.js [app-client] (ecmascript) <export default as Atom>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/droplets.js [app-client] (ecmascript) <export default as Droplets>");
;
const neetPhysicsChapters = [
    /* ──────── MECHANICS ──────── */ {
        slug: 'neet-physics-kinematics',
        exam: 'NEET',
        subject: 'Physics',
        chapter: 'Kinematics (Motion in 1D & 2D)',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__["Gauge"],
        weightage: '4-5%',
        difficulty: 'Moderate',
        pyqCount: 30,
        description: 'Equations of motion, projectile motion, and relative motion — NEET Mechanics begins here. MindPeak builds kinematics intuition with real-life examples before touching a single equation.',
        topics: [
            'Distance vs Displacement',
            'Speed vs Velocity',
            'Equations of Motion (Uniformly Accelerated)',
            'Motion Under Gravity',
            'Projectile Motion',
            'Relative Motion',
            'Graphs (s-t, v-t, a-t)'
        ],
        keyFormulas: [
            'v = u + at',
            's = ut + ½at²',
            'v² = u² + 2as',
            'Range (projectile) = u²sin2θ/g',
            'Max height = u²sin²θ/2g',
            'Time of flight = 2usinθ/g'
        ],
        commonMistakes: [
            'Wrong sign convention for upward/downward motion',
            'Confusing distance and displacement in return journeys',
            'Forgetting that horizontal velocity is constant in projectile motion',
            'Wrong graph interpretation'
        ],
        faqs: [
            {
                q: 'How important is Kinematics for NEET?',
                a: '4-5% and foundational for all mechanics. Master equations of motion and projectile motion. NCERT + 50 numericals is sufficient. MindPeak starts every NEET Physics batch with kinematics mastery.'
            }
        ]
    },
    {
        slug: 'neet-physics-laws-of-motion',
        exam: 'NEET',
        subject: 'Physics',
        chapter: 'Laws of Motion & Friction',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__["Gauge"],
        weightage: '4-6%',
        difficulty: 'Moderate',
        pyqCount: 35,
        description: 'Newton\'s three laws, free-body diagrams, and friction — the backbone of NEET mechanics. MindPeak\'s systematic FBD approach eliminates guesswork in force-based problems.',
        topics: [
            'Newton\'s First Law (Inertia)',
            'Newton\'s Second Law (F = ma)',
            'Newton\'s Third Law (Action-Reaction)',
            'Free Body Diagrams',
            'Friction (Static & Kinetic)',
            'Circular Motion Dynamics',
            'Motion on Inclined Plane',
            'Connected Bodies & Pulleys'
        ],
        keyFormulas: [
            'F = ma',
            'f_s ≤ μ_s N',
            'f_k = μ_k N',
            'Centripetal force = mv²/r',
            'Acceleration on incline = g sinθ (smooth)'
        ],
        commonMistakes: [
            'Not drawing complete FBD (missing Normal or friction)',
            'Wrong direction of friction force',
            'Confusing centripetal and centrifugal forces',
            'Wrong constraint relation for pulleys'
        ],
        faqs: [
            {
                q: 'How to master FBD for NEET?',
                a: 'Step 1: Isolate the body. Step 2: Draw weight (mg↓). Step 3: Add Normal (perpendicular to surface). Step 4: Add friction (opposing relative motion). Step 5: Add applied forces. Practice 50+ FBDs. MindPeak drills this systematically.'
            }
        ]
    },
    {
        slug: 'neet-physics-work-energy-power',
        exam: 'NEET',
        subject: 'Physics',
        chapter: 'Work, Energy & Power',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        weightage: '4-5%',
        difficulty: 'Moderate',
        pyqCount: 30,
        description: 'Work-energy theorem, conservation of energy, and power — conceptual yet scoring NEET chapter. MindPeak teaches energy conservation as a problem-solving shortcut that avoids complex force analysis.',
        topics: [
            'Work Done by Constant & Variable Forces',
            'Kinetic & Potential Energy',
            'Work-Energy Theorem',
            'Conservation of Mechanical Energy',
            'Conservative & Non-Conservative Forces',
            'Power (Average & Instantaneous)',
            'Collisions (Elastic & Inelastic)',
            'Coefficient of Restitution'
        ],
        keyFormulas: [
            'W = Fd cosθ',
            'KE = ½mv²',
            'PE = mgh',
            'Work-energy: W_net = ΔKE',
            'Power = W/t = Fv',
            'e = (v₂-v₁)/(u₁-u₂)'
        ],
        commonMistakes: [
            'Wrong sign of work done (angle > 90° → negative)',
            'Forgetting work done by friction in energy conservation',
            'Confusing elastic and inelastic collision equations',
            'Wrong coefficient of restitution application'
        ],
        faqs: [
            {
                q: 'When to use energy conservation vs Newton\'s laws?',
                a: 'Use energy conservation when you care about initial and final states (speed at bottom of slide). Use Newton\'s laws when you need acceleration or force at a specific point. MindPeak teaches both and helps you identify which is faster for each problem type.'
            }
        ]
    },
    {
        slug: 'neet-physics-gravitation',
        exam: 'NEET',
        subject: 'Physics',
        chapter: 'Gravitation',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__["Gauge"],
        weightage: '3-4%',
        difficulty: 'Moderate',
        pyqCount: 25,
        description: 'Universal gravitation, orbital mechanics, and gravitational potential — elegant physics with NEET applications. MindPeak connects gravitation to satellite motion for practical understanding.',
        topics: [
            'Newton\'s Law of Gravitation',
            'Acceleration Due to Gravity (Variation with Height, Depth)',
            'Gravitational Potential & PE',
            'Escape Velocity',
            'Orbital Velocity',
            'Kepler\'s Laws',
            'Geostationary & Polar Satellites'
        ],
        keyFormulas: [
            'F = GMm/r²',
            'g = GM/R²',
            'g at height: g(1-2h/R)',
            'g at depth: g(1-d/R)',
            'v_escape = √(2gR)',
            'v_orbital = √(gR)',
            'T² ∝ r³ (Kepler III)'
        ],
        commonMistakes: [
            'Wrong variation of g formula (height vs depth)',
            'Confusing escape and orbital velocity',
            'Wrong Kepler\'s law application',
            'Forgetting that g varies with latitude'
        ],
        faqs: [
            {
                q: 'Why is Escape Velocity = √2 × Orbital Velocity?',
                a: 'Orbital velocity keeps you in circular orbit (v = √gR). Escape velocity needs enough KE to reach infinity (v = √2gR). The √2 factor comes from equating KE = PE at infinity. MindPeak derives both from energy conservation in one beautiful proof.'
            }
        ]
    },
    {
        slug: 'neet-physics-mechanical-properties',
        exam: 'NEET',
        subject: 'Physics',
        chapter: 'Mechanical Properties of Solids & Fluids',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"],
        weightage: '3-5%',
        difficulty: 'Moderate',
        pyqCount: 30,
        description: 'Elasticity, fluid statics, and fluid dynamics — Young\'s modulus, Bernoulli\'s equation, and viscosity in one chapter. MindPeak covers solids and fluids together for efficient NEET preparation.',
        topics: [
            'Stress, Strain & Hooke\'s Law',
            'Young\'s Modulus, Bulk Modulus, Shear Modulus',
            'Pressure in Fluids (Pascal\'s Law)',
            'Archimedes\' Principle & Buoyancy',
            'Bernoulli\'s Theorem',
            'Viscosity & Stokes\' Law',
            'Surface Tension & Capillarity',
            'Terminal Velocity'
        ],
        keyFormulas: [
            'Stress = F/A',
            'Strain = ΔL/L',
            'Y = Stress/Strain',
            'P = ρgh',
            'P₁ + ½ρv₁² + ρgh₁ = P₂ + ½ρv₂² + ρgh₂',
            'v_terminal = 2r²(ρ-σ)g/9η'
        ],
        commonMistakes: [
            'Confusing different types of moduli',
            'Wrong application of Bernoulli\'s equation',
            'Forgetting conditions for Bernoulli (streamline, incompressible)',
            'Wrong direction of buoyant force'
        ],
        faqs: [
            {
                q: 'Are Mechanical Properties scoring for NEET?',
                a: 'Yes — mostly formula-based problems. Focus on Young\'s modulus, fluid pressure, Bernoulli\'s equation, and surface tension. MindPeak covers all essential numericals in 4 sessions.'
            }
        ]
    },
    /* ──────── HEAT & THERMODYNAMICS ──────── */ {
        slug: 'neet-physics-thermal-properties',
        exam: 'NEET',
        subject: 'Physics',
        chapter: 'Thermal Properties of Matter',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__["Thermometer"],
        weightage: '3-4%',
        difficulty: 'Easy',
        pyqCount: 22,
        description: 'Heat transfer, thermal expansion, and calorimetry — formula-based with consistent NEET appearances. MindPeak covers thermal properties with real-world examples (why railway tracks have gaps, etc.).',
        topics: [
            'Temperature Scales & Conversion',
            'Linear, Area & Volume Expansion',
            'Specific Heat Capacity & Calorimetry',
            'Change of State & Latent Heat',
            'Heat Transfer (Conduction, Convection, Radiation)',
            'Newton\'s Law of Cooling',
            'Stefan\'s Law & Wien\'s Law',
            'Thermal Conductivity'
        ],
        keyFormulas: [
            'ΔL = αLΔT',
            'Q = mcΔT',
            'Q = mL (latent heat)',
            'dQ/dt = KA(T₁-T₂)/L (conduction)',
            'P = σAT⁴ (Stefan)',
            'λ_max T = b (Wien)'
        ],
        commonMistakes: [
            'Wrong expansion coefficient (α vs β vs γ)',
            'Forgetting latent heat during phase change (no temperature change)',
            'Wrong Newton\'s cooling law application',
            'Confusing thermal conductivity and heat capacity'
        ],
        faqs: [
            {
                q: 'How to solve calorimetry problems?',
                a: 'Heat lost = Heat gained. Account for phase changes (latent heat) separately from temperature changes (specific heat). Always check if phase change occurs before assuming final temperature. MindPeak teaches a systematic heat-balance method.'
            }
        ]
    },
    {
        slug: 'neet-physics-thermodynamics',
        exam: 'NEET',
        subject: 'Physics',
        chapter: 'Thermodynamics',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__["Thermometer"],
        weightage: '4-5%',
        difficulty: 'Hard',
        pyqCount: 30,
        description: 'Laws of thermodynamics, PV diagrams, and heat engines — conceptually deep with 4-5% NEET weightage. MindPeak\'s PV-diagram visualization approach makes thermodynamic processes intuitive.',
        topics: [
            'Zeroth & First Law',
            'Thermodynamic Processes (Isothermal, Adiabatic, Isobaric, Isochoric)',
            'PV Diagrams & Work Done',
            'Second Law of Thermodynamics',
            'Carnot Engine & Efficiency',
            'Refrigerator & COP',
            'Specific Heats of Gases (Cp, Cv)',
            'Degree of Freedom & Equipartition'
        ],
        keyFormulas: [
            'ΔU = Q - W (First Law)',
            'W = ∫PdV',
            'Isothermal: W = nRT ln(V₂/V₁)',
            'Adiabatic: PV^γ = const',
            'η_Carnot = 1 - T₂/T₁',
            'Cp - Cv = R'
        ],
        commonMistakes: [
            'Wrong sign convention for work and heat',
            'Confusing isothermal and adiabatic curves on PV diagram',
            'Wrong efficiency formula',
            'Forgetting that Carnot is maximum possible efficiency'
        ],
        faqs: [
            {
                q: 'How to read PV diagrams?',
                a: 'Area under curve = work done. Clockwise cycle = engine (positive work). Counter-clockwise = refrigerator. Steeper curve = adiabatic, flatter = isothermal. MindPeak teaches PV diagram reading with 20+ graph-based problems.'
            }
        ]
    },
    /* ──────── ELECTROMAGNETISM ──────── */ {
        slug: 'neet-physics-electrostatics',
        exam: 'NEET',
        subject: 'Physics',
        chapter: 'Electrostatics',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        weightage: '5-7%',
        difficulty: 'Hard',
        pyqCount: 40,
        description: 'Coulomb\'s law, electric field, potential, capacitors, and Gauss\'s law — highest-weightage NEET Physics chapter. MindPeak\'s visual field-line approach builds deep electrostatic intuition.',
        topics: [
            'Coulomb\'s Law',
            'Electric Field (Point Charge, Dipole)',
            'Electric Field Lines',
            'Gauss\'s Law & Applications',
            'Electric Potential & Potential Energy',
            'Equipotential Surfaces',
            'Capacitance & Parallel Plate Capacitor',
            'Series & Parallel Capacitors',
            'Dielectrics'
        ],
        keyFormulas: [
            'F = kq₁q₂/r²',
            'E = kq/r²',
            'V = kq/r',
            'Gauss: ΦE = q_enc/ε₀',
            'C = ε₀A/d',
            'U = ½CV² = ½QV = Q²/2C'
        ],
        commonMistakes: [
            'Wrong direction of electric field at equatorial point of dipole',
            'Confusing potential and potential energy',
            'Wrong capacitor combination formula (series vs parallel)',
            'Forgetting effect of dielectric on capacitance'
        ],
        faqs: [
            {
                q: 'How important is Electrostatics for NEET?',
                a: '5-7% — the single most important physics chapter. Master Coulomb\'s law numericals, Gauss\'s law applications, and capacitor combinations. MindPeak dedicates 8 sessions to electrostatics.'
            }
        ]
    },
    {
        slug: 'neet-physics-current-electricity',
        exam: 'NEET',
        subject: 'Physics',
        chapter: 'Current Electricity',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        weightage: '5-6%',
        difficulty: 'Moderate',
        pyqCount: 35,
        description: 'Ohm\'s law, Kirchhoff\'s laws, Wheatstone bridge, and potentiometer — circuit-solving skills for NEET. MindPeak\'s circuit-simplification technique handles even complex networks in minutes.',
        topics: [
            'Current & Drift Velocity',
            'Ohm\'s Law & Resistance',
            'Series & Parallel Resistors',
            'Kirchhoff\'s Laws (KCL & KVL)',
            'Wheatstone Bridge',
            'Meter Bridge & Potentiometer',
            'EMF & Internal Resistance',
            'Electrical Power & Energy',
            'Colour Code for Resistors'
        ],
        keyFormulas: [
            'V = IR',
            'R_series = R₁+R₂+...',
            '1/R_parallel = 1/R₁+1/R₂+...',
            'Wheatstone: P/Q = R/S (balanced)',
            'P = I²R = V²/R = VI',
            'EMF: V = E - Ir'
        ],
        commonMistakes: [
            'Wrong series/parallel identification in complex circuits',
            'Forgetting internal resistance of battery',
            'Wrong KVL sign convention',
            'Wrong potentiometer sensitivity understanding'
        ],
        faqs: [
            {
                q: 'How to solve complex circuits quickly?',
                a: 'Step 1: Identify series/parallel combinations. Step 2: If not reducible, use Kirchhoff\'s laws. Step 3: Look for Wheatstone bridge patterns (balanced bridge = open middle). MindPeak teaches a 3-step circuit reduction method.'
            }
        ]
    },
    {
        slug: 'neet-physics-magnetism',
        exam: 'NEET',
        subject: 'Physics',
        chapter: 'Magnetic Effects of Current & Magnetism',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$magnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Magnet$3e$__["Magnet"],
        weightage: '4-6%',
        difficulty: 'Moderate',
        pyqCount: 35,
        description: 'Biot-Savart law, Ampere\'s law, force on current-carrying conductors, and magnetic properties — important NEET Physics chapter. MindPeak\'s right-hand-rule mastery eliminates direction-finding errors.',
        topics: [
            'Biot-Savart Law',
            'Magnetic Field Due to Straight Wire, Circular Loop, Solenoid',
            'Ampere\'s Circuital Law',
            'Force on Moving Charge (Lorentz Force)',
            'Force Between Parallel Currents',
            'Torque on Current Loop',
            'Moving Coil Galvanometer',
            'Magnetic Properties (Dia, Para, Ferro)',
            'Earth\'s Magnetism'
        ],
        keyFormulas: [
            'B = μ₀I/2πr (straight wire)',
            'B = μ₀NI/2R (centre of coil)',
            'B = μ₀nI (solenoid)',
            'F = qvBsinθ',
            'F = BILsinθ',
            'τ = NBIA sinθ'
        ],
        commonMistakes: [
            'Wrong direction of magnetic field (right-hand thumb rule)',
            'Confusing magnetic field formulas for different configurations',
            'Wrong force direction on current-carrying conductor',
            'Mixing up diamagnetic, paramagnetic, and ferromagnetic'
        ],
        faqs: [
            {
                q: 'How to remember all magnetic field formulas?',
                a: 'Straight wire: μ₀I/2πr, Coil centre: μ₀NI/2R, Solenoid: μ₀nI. Notice the pattern — all have μ₀I. The geometry determines the rest. MindPeak teaches formula derivation so you can reconstruct any forgotten formula.'
            }
        ]
    },
    /* ──────── OPTICS ──────── */ {
        slug: 'neet-physics-ray-optics',
        exam: 'NEET',
        subject: 'Physics',
        chapter: 'Ray Optics & Optical Instruments',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"],
        weightage: '4-6%',
        difficulty: 'Moderate',
        pyqCount: 35,
        description: 'Reflection, refraction, lenses, mirrors, and optical instruments — a high-yield NEET chapter. MindPeak\'s sign-convention mastery and ray-diagram precision ensure error-free optics problem-solving.',
        topics: [
            'Reflection (Plane & Spherical Mirrors)',
            'Mirror Formula & Magnification',
            'Refraction & Snell\'s Law',
            'Total Internal Reflection',
            'Lenses (Thin Lens Formula)',
            'Power of Lens & Combination',
            'Prism & Dispersion',
            'Microscope (Simple & Compound)',
            'Telescope (Astronomical & Terrestrial)'
        ],
        keyFormulas: [
            '1/v + 1/u = 1/f (mirror)',
            '1/v - 1/u = 1/f (lens)',
            'n₁sinθ₁ = n₂sinθ₂ (Snell)',
            'sin θ_c = n₂/n₁ (TIR, n₁ > n₂)',
            'P = 1/f (in metres)',
            'P_combo = P₁ + P₂'
        ],
        commonMistakes: [
            'Wrong sign convention (mirror vs lens)',
            'Confusing real and virtual images',
            'Wrong TIR condition (must go from denser to rarer)',
            'Wrong magnification formula application'
        ],
        faqs: [
            {
                q: 'How to avoid sign convention errors?',
                a: 'Use New Cartesian Convention consistently: direction of incident light = +ve. Object distance (u) is always -ve for real objects. Focal length: -ve for concave mirror, +ve for convex lens. MindPeak drills sign convention until it\'s automatic.'
            }
        ]
    },
    {
        slug: 'neet-physics-wave-optics',
        exam: 'NEET',
        subject: 'Physics',
        chapter: 'Wave Optics',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"],
        weightage: '3-4%',
        difficulty: 'Hard',
        pyqCount: 25,
        description: 'Interference, diffraction, and polarization — wave nature of light for NEET. MindPeak teaches Young\'s double-slit experiment with actual fringe-width calculations for confident problem-solving.',
        topics: [
            'Huygens\' Principle',
            'Young\'s Double Slit Experiment (YDSE)',
            'Fringe Width & Conditions for Maxima/Minima',
            'Coherent & Incoherent Sources',
            'Diffraction (Single Slit)',
            'Resolving Power',
            'Polarization (Malus\'s Law, Brewster\'s Angle)'
        ],
        keyFormulas: [
            'Fringe width β = λD/d',
            'Maxima: d sinθ = nλ',
            'Minima: d sinθ = (n+½)λ',
            'I = I₀ cos²θ (Malus)',
            'tan θ_B = n₂/n₁ (Brewster)'
        ],
        commonMistakes: [
            'Confusing conditions for maxima and minima',
            'Wrong fringe width when medium changes',
            'Forgetting that diffraction minima formula differs from interference',
            'Wrong Brewster\'s angle calculation'
        ],
        faqs: [
            {
                q: 'Is Wave Optics difficult for NEET?',
                a: 'Conceptually challenging but NEET asks standard problems — YDSE fringe width, single-slit diffraction, and Malus\'s law. Master these 3 types with 20 problems. MindPeak uses visual wave animations to build understanding.'
            }
        ]
    },
    /* ──────── WAVES ──────── */ {
        slug: 'neet-physics-waves-sound',
        exam: 'NEET',
        subject: 'Physics',
        chapter: 'Oscillations & Waves',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"],
        weightage: '4-6%',
        difficulty: 'Moderate',
        pyqCount: 35,
        description: 'SHM, wave motion, standing waves, and Doppler effect — combined for NEET Physics efficiency. MindPeak teaches oscillations and waves together since standing waves are superposition of travelling waves.',
        topics: [
            'Simple Harmonic Motion (SHM)',
            'Spring-Mass System',
            'Simple Pendulum',
            'Wave Motion (Transverse & Longitudinal)',
            'Speed of Sound',
            'Standing Waves & Harmonics',
            'Organ Pipes (Open & Closed)',
            'Beats',
            'Doppler Effect'
        ],
        keyFormulas: [
            'x = A sin(ωt + φ)',
            'ω = 2π/T = √(k/m)',
            'T = 2π√(L/g) (pendulum)',
            'v = fλ',
            'v = √(T/μ) (string)',
            'Beat frequency = |f₁ - f₂|',
            'f\' = f(v±v₀)/(v∓v_s) (Doppler)'
        ],
        commonMistakes: [
            'Wrong phase in SHM equations',
            'Confusing harmonics of open and closed pipes',
            'Wrong sign in Doppler effect formula',
            'Forgetting that velocity is max at mean position in SHM'
        ],
        faqs: [
            {
                q: 'How to remember open vs closed pipe harmonics?',
                a: 'Open pipe: ALL harmonics (1st, 2nd, 3rd...). Closed pipe: ODD harmonics only (1st, 3rd, 5th...). Fundamental of closed pipe = half that of same-length open pipe. MindPeak uses visual node-antinode diagrams.'
            }
        ]
    },
    /* ──────── MODERN PHYSICS ──────── */ {
        slug: 'neet-physics-dual-nature-atoms',
        exam: 'NEET',
        subject: 'Physics',
        chapter: 'Dual Nature of Matter & Atoms',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$atom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Atom$3e$__["Atom"],
        weightage: '4-5%',
        difficulty: 'Moderate',
        pyqCount: 30,
        description: 'Photoelectric effect, de Broglie wavelength, Bohr model, and X-rays — overlaps with Chemistry but from Physics perspective. MindPeak teaches atomic physics with Chemistry integration for NEET students.',
        topics: [
            'Photoelectric Effect',
            'Einstein\'s Photoelectric Equation',
            'de Broglie Hypothesis',
            'Bohr\'s Model of Hydrogen Atom',
            'Energy Levels & Spectra',
            'X-ray Production & Moseley\'s Law'
        ],
        keyFormulas: [
            'KE_max = hν - φ (photoelectric)',
            'λ = h/mv (de Broglie)',
            'E_n = -13.6/n² eV',
            'r_n = 0.529n² Å',
            '1/λ = R(1/n₁² - 1/n₂²)'
        ],
        commonMistakes: [
            'Confusing threshold frequency and work function',
            'Wrong transition for specific spectral series',
            'Forgetting that KE varies linearly with frequency (not intensity)',
            'Wrong de Broglie wavelength for accelerated particles'
        ],
        faqs: [
            {
                q: 'Does Atoms chapter overlap with Chemistry?',
                a: 'Significantly! Bohr model and hydrogen spectrum are identical in both subjects. MindPeak teaches them once in an integrated session — saving NEET students precious revision time.'
            }
        ]
    },
    {
        slug: 'neet-physics-nuclei-semiconductors',
        exam: 'NEET',
        subject: 'Physics',
        chapter: 'Nuclei & Semiconductor Electronics',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$atom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Atom$3e$__["Atom"],
        weightage: '4-6%',
        difficulty: 'Moderate',
        pyqCount: 35,
        description: 'Nuclear physics, radioactivity, and semiconductor devices — combined for NEET efficiency. MindPeak covers nuclear binding energy and diode circuits in focused sessions for maximum marks.',
        topics: [
            'Nuclear Composition & Size',
            'Mass Defect & Binding Energy',
            'Radioactive Decay (α, β, γ)',
            'Half-Life & Decay Law',
            'Nuclear Fission & Fusion',
            'Intrinsic & Extrinsic Semiconductors',
            'p-n Junction Diode',
            'Zener Diode',
            'Transistor (npn, pnp)',
            'Logic Gates (AND, OR, NOT, NAND, NOR)'
        ],
        keyFormulas: [
            'N = N₀ e^(-λt)',
            't₁/₂ = 0.693/λ',
            'BE = Δm × c² = Δm × 931.5 MeV',
            'E = mc²',
            'Diode: forward bias → current flows',
            'Logic: NAND = universal gate'
        ],
        commonMistakes: [
            'Wrong decay product identification',
            'Confusing fission and fusion conditions',
            'Wrong forward/reverse bias conditions for diode',
            'Wrong truth table for logic gates'
        ],
        faqs: [
            {
                q: 'Are Logic Gates important for NEET?',
                a: 'Yes — NEET asks 1-2 questions on logic gates (truth tables, Boolean expressions). AND, OR, NOT, NAND, NOR — learn truth tables and universal gate property. MindPeak covers logic gates in a single 30-minute session.'
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/chapters/neetChemistry.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "neetChemistryChapters",
    ()=>neetChemistryChapters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$atom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Atom$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/atom.js [app-client] (ecmascript) <export default as Atom>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flask-conical.js [app-client] (ecmascript) <export default as FlaskConical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$beaker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Beaker$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/beaker.js [app-client] (ecmascript) <export default as Beaker>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/thermometer.js [app-client] (ecmascript) <export default as Thermometer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/droplets.js [app-client] (ecmascript) <export default as Droplets>");
;
const neetChemistryChapters = [
    /* ──────── PHYSICAL CHEMISTRY ──────── */ {
        slug: 'neet-chemistry-some-basic-concepts',
        exam: 'NEET',
        subject: 'Chemistry',
        chapter: 'Some Basic Concepts of Chemistry',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"],
        weightage: '2-3%',
        difficulty: 'Easy',
        pyqCount: 18,
        description: 'Mole concept, stoichiometry, and concentration terms — the quantitative foundation of chemistry. MindPeak starts every NEET Chemistry batch by ensuring mole-concept mastery.',
        topics: [
            'Laws of Chemical Combination',
            'Atomic & Molecular Mass',
            'Mole Concept & Avogadro\'s Number',
            'Percentage Composition',
            'Empirical & Molecular Formula',
            'Stoichiometry & Limiting Reagent',
            'Concentration Terms (Molarity, Molality, Normality)'
        ],
        keyFormulas: [
            'n = mass/molar mass',
            'n = V(L)/22.4 (at STP)',
            'Molarity = moles/Volume(L)',
            'Molality = moles/mass of solvent(kg)',
            '1 mole = 6.022 × 10²³'
        ],
        commonMistakes: [
            'Wrong molar mass calculation',
            'Forgetting to identify limiting reagent',
            'Confusing molarity and molality',
            'Wrong STP volume for gases'
        ],
        faqs: [
            {
                q: 'Is Mole Concept important?',
                a: 'Absolutely foundational — every stoichiometry problem uses it. 2-3% direct NEET questions plus it\'s prerequisite for all Physical Chemistry. MindPeak ensures mole-concept fluency in the first week.'
            }
        ]
    },
    {
        slug: 'neet-chemistry-atomic-structure',
        exam: 'NEET',
        subject: 'Chemistry',
        chapter: 'Structure of Atom',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$atom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Atom$3e$__["Atom"],
        weightage: '3-4%',
        difficulty: 'Moderate',
        pyqCount: 22,
        description: 'Bohr model, quantum numbers, and electronic configuration — NCERT-focused for NEET. MindPeak teaches atomic structure with visual orbital diagrams for better retention.',
        topics: [
            'Thomson, Rutherford & Bohr Models',
            'Bohr\'s Postulates & Hydrogen Spectrum',
            'Quantum Numbers (n, l, m, s)',
            'Electronic Configuration',
            'Aufbau Principle, Pauli\'s Exclusion & Hund\'s Rule',
            'Shapes of Orbitals'
        ],
        keyFormulas: [
            'E_n = -13.6Z²/n² eV',
            'r_n = 0.529n²/Z Å',
            'Max electrons in shell = 2n²',
            'Max electrons in subshell = 4l+2'
        ],
        commonMistakes: [
            'Wrong orbital filling order (Aufbau exceptions)',
            'Confusing quantum number rules',
            'Wrong number of radial/angular nodes',
            'Forgetting half-filled stability exceptions'
        ],
        faqs: [
            {
                q: 'Does NEET test Atomic Structure differently from JEE?',
                a: 'NEET focuses on NCERT content — Bohr model, quantum numbers, and electronic configuration. Less numerical, more conceptual. MindPeak tailors atomic structure teaching to NEET pattern specifically.'
            }
        ]
    },
    {
        slug: 'neet-chemistry-chemical-bonding',
        exam: 'NEET',
        subject: 'Chemistry',
        chapter: 'Chemical Bonding & Molecular Structure',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$atom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Atom$3e$__["Atom"],
        weightage: '4-5%',
        difficulty: 'Moderate',
        pyqCount: 30,
        description: 'VSEPR theory, hybridization, and molecular orbital theory — conceptually important NEET chapter. MindPeak teaches bonding through molecular models for visual learners.',
        topics: [
            'Ionic & Covalent Bonding',
            'Lewis Structures',
            'VSEPR Theory',
            'Hybridization',
            'Molecular Orbital Theory (MOT)',
            'Bond Order & Magnetic Properties',
            'Hydrogen Bonding',
            'Dipole Moment'
        ],
        keyFormulas: [
            'Bond Order = (Nb-Na)/2',
            'Hybridization = ½(V+M-C+A)',
            'VSEPR: lone pairs occupy more space',
            'Dipole moment: μ = q × d'
        ],
        commonMistakes: [
            'Wrong molecular geometry (forgetting lone pairs)',
            'Wrong hybridization for expanded octet molecules',
            'Confusing bond order with bond strength trends',
            'Wrong LCAO diagram for O₂ vs N₂'
        ],
        faqs: [
            {
                q: 'How to predict molecular geometry quickly?',
                a: 'Count bonded atoms + lone pairs around central atom. 2→linear, 3→trigonal planar, 4→tetrahedral (if no lone pairs). Then adjust for lone pairs. MindPeak provides a geometry prediction flowchart.'
            }
        ]
    },
    {
        slug: 'neet-chemistry-thermodynamics',
        exam: 'NEET',
        subject: 'Chemistry',
        chapter: 'Thermodynamics',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__["Thermometer"],
        weightage: '4-5%',
        difficulty: 'Moderate',
        pyqCount: 28,
        description: 'Enthalpy, entropy, Gibbs free energy, and Hess\'s law — core physical chemistry with 4-5% NEET weightage. MindPeak integrates chemistry thermodynamics with Physics for dual understanding.',
        topics: [
            'System & Surroundings',
            'First Law (ΔU = q + w)',
            'Enthalpy & Enthalpy of Reaction',
            'Hess\'s Law',
            'Entropy & Second Law',
            'Gibbs Free Energy & Spontaneity',
            'Standard Enthalpy of Formation',
            'Bond Enthalpy'
        ],
        keyFormulas: [
            'ΔH = ΔU + ΔnRT',
            'ΔG = ΔH - TΔS',
            'ΔG < 0 → spontaneous',
            'Hess: ΔH = Σ(ΔHf products) - Σ(ΔHf reactants)'
        ],
        commonMistakes: [
            'Wrong sign convention for exothermic/endothermic',
            'Forgetting to use kJ vs J consistently',
            'Wrong ΔG spontaneity interpretation',
            'Errors in bond enthalpy calculations'
        ],
        faqs: [
            {
                q: 'What is the most tested concept in NEET Thermodynamics?',
                a: 'Hess\'s law calculations and ΔG-based spontaneity prediction. Practice 15+ numerical problems. MindPeak provides NEET-pattern thermodynamics problem sets.'
            }
        ]
    },
    {
        slug: 'neet-chemistry-equilibrium',
        exam: 'NEET',
        subject: 'Chemistry',
        chapter: 'Equilibrium',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"],
        weightage: '4-6%',
        difficulty: 'Moderate',
        pyqCount: 35,
        description: 'Chemical and ionic equilibrium combined for NEET — Kp, Kc, pH, buffers, and Ksp. MindPeak covers both types of equilibrium together as NEET tests them as one chapter.',
        topics: [
            'Le Chatelier\'s Principle',
            'Equilibrium Constants (Kp, Kc)',
            'Acids, Bases & pH',
            'Buffer Solutions',
            'Henderson-Hasselbalch Equation',
            'Solubility Product (Ksp)',
            'Common Ion Effect',
            'Hydrolysis of Salts'
        ],
        keyFormulas: [
            'Kp = Kc(RT)^Δn',
            'pH = -log[H⁺]',
            'pH = pKa + log([A⁻]/[HA])',
            'Ksp = [cation]^m[anion]^n',
            'Kw = 10⁻¹⁴'
        ],
        commonMistakes: [
            'Wrong Le Chatelier prediction for temperature changes',
            'Wrong pH calculation for weak acid/base',
            'Confusing Ka and Kb relationship',
            'Wrong common ion effect application'
        ],
        faqs: [
            {
                q: 'How important is Equilibrium for NEET?',
                a: 'Very — 4-6% with both conceptual and numerical questions. pH calculations, Le Chatelier predictions, and Ksp problems are NEET staples. MindPeak ensures thorough practice with 40+ equilibrium problems.'
            }
        ]
    },
    {
        slug: 'neet-chemistry-redox-electrochemistry',
        exam: 'NEET',
        subject: 'Chemistry',
        chapter: 'Redox Reactions & Electrochemistry',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        weightage: '3-5%',
        difficulty: 'Moderate',
        pyqCount: 28,
        description: 'Oxidation states, galvanic cells, Nernst equation, and Faraday\'s laws — combined for NEET efficiency. MindPeak teaches redox and electrochemistry back-to-back for logical flow.',
        topics: [
            'Oxidation Number & Balancing Redox',
            'Galvanic Cell',
            'Standard Electrode Potential',
            'Nernst Equation',
            'Electrolysis & Faraday\'s Laws',
            'Conductance & Kohlrausch\'s Law',
            'Corrosion'
        ],
        keyFormulas: [
            'E_cell = E°_cell - (0.0591/n)log Q',
            'ΔG° = -nFE°',
            'Faraday: m = ZIt',
            'Kohlrausch: Λ°m = Λ°_+ + Λ°_-'
        ],
        commonMistakes: [
            'Wrong anode/cathode assignment',
            'Sign errors in Nernst equation',
            'Wrong Faraday\'s law calculation',
            'Confusing molar and equivalent conductivity'
        ],
        faqs: [
            {
                q: 'How to avoid sign errors in Electrochemistry?',
                a: 'Anode = Oxidation (AO), Cathode = Reduction (CR). E_cell = E_cathode - E_anode. Always positive for spontaneous. MindPeak uses this mnemonic consistently.'
            }
        ]
    },
    {
        slug: 'neet-chemistry-kinetics',
        exam: 'NEET',
        subject: 'Chemistry',
        chapter: 'Chemical Kinetics',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"],
        weightage: '3-4%',
        difficulty: 'Moderate',
        pyqCount: 22,
        description: 'Rate laws, order of reaction, and Arrhenius equation — formula-based scoring chapter. MindPeak drills kinetics numericals for guaranteed NEET marks.',
        topics: [
            'Rate of Reaction',
            'Rate Law & Order',
            'Integrated Rate Laws (Zero & First Order)',
            'Half-Life',
            'Arrhenius Equation',
            'Effect of Temperature & Catalyst'
        ],
        keyFormulas: [
            'First order: k = (2.303/t)log(a/(a-x))',
            't₁/₂ = 0.693/k',
            'Zero order: t₁/₂ = [A₀]/2k',
            'Arrhenius: k = Ae^(-Ea/RT)'
        ],
        commonMistakes: [
            'Wrong integrated rate law selection',
            'Units of k vary with order (forgetting this)',
            'Wrong Arrhenius equation application',
            'Confusing molecularity and order'
        ],
        faqs: [
            {
                q: 'Is Chemical Kinetics scoring for NEET?',
                a: 'Yes — mostly numerical with standard formulas. Half-life and Arrhenius problems appear almost every year. Practice 20+ problems. MindPeak includes kinetics in the high-ROI quick-wins module.'
            }
        ]
    },
    {
        slug: 'neet-chemistry-solutions',
        exam: 'NEET',
        subject: 'Chemistry',
        chapter: 'Solutions',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$beaker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Beaker$3e$__["Beaker"],
        weightage: '3-4%',
        difficulty: 'Moderate',
        pyqCount: 22,
        description: 'Raoult\'s law, colligative properties, and Van\'t Hoff factor — important NEET physical chemistry chapter. MindPeak teaches colligative properties with everyday examples for intuitive understanding.',
        topics: [
            'Types of Solutions',
            'Concentration Terms',
            'Raoult\'s Law',
            'Ideal & Non-Ideal Solutions',
            'Colligative Properties',
            'Van\'t Hoff Factor',
            'Osmotic Pressure',
            'Henry\'s Law'
        ],
        keyFormulas: [
            'ΔTb = iKbm',
            'ΔTf = iKfm',
            'π = iCRT',
            'i = 1+(n-1)α (dissociation)'
        ],
        commonMistakes: [
            'Wrong Van\'t Hoff factor for electrolytes',
            'Confusing ΔTb and ΔTf applications',
            'Wrong molality calculation',
            'Forgetting i in colligative property formulas'
        ],
        faqs: [
            {
                q: 'How important are Colligative Properties for NEET?',
                a: '3-4% with predictable numerical patterns. Master the 4 colligative properties with Van\'t Hoff factor. MindPeak provides 20 graded problems covering all types.'
            }
        ]
    },
    {
        slug: 'neet-chemistry-surface-chemistry',
        exam: 'NEET',
        subject: 'Chemistry',
        chapter: 'Surface Chemistry',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"],
        weightage: '2-3%',
        difficulty: 'Easy',
        pyqCount: 15,
        description: 'Adsorption, colloids, and catalysis — low-effort scoring chapter for NEET. MindPeak recommends spending 2 sessions for easy marks.',
        topics: [
            'Physical & Chemical Adsorption',
            'Freundlich & Langmuir Isotherms',
            'Catalysis',
            'Colloids (Preparation, Properties)',
            'Coagulation & Hardy-Schulze Rule',
            'Emulsions'
        ],
        keyFormulas: [
            'x/m = kP^(1/n) (Freundlich)',
            'Gold number: lower = better protective colloid',
            'Hardy-Schulze: higher charge → better coagulation'
        ],
        commonMistakes: [
            'Confusing physical and chemical adsorption',
            'Wrong charge on colloidal particles',
            'Confusing lyophilic and lyophobic colloids'
        ],
        faqs: [
            {
                q: 'Is Surface Chemistry worth studying for NEET?',
                a: '2-3% easy marks from NCERT. Focus on adsorption types, colloid properties, and Hardy-Schulze rule. MindPeak covers this in the quick-wins revision module.'
            }
        ]
    },
    /* ──────── ORGANIC CHEMISTRY ──────── */ {
        slug: 'neet-chemistry-organic-basics',
        exam: 'NEET',
        subject: 'Chemistry',
        chapter: 'Basic Organic Chemistry (GOC & Hydrocarbons)',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"],
        weightage: '4-6%',
        difficulty: 'Hard',
        pyqCount: 35,
        description: 'IUPAC naming, electronic effects, isomerism, and hydrocarbon reactions — the organic foundation for NEET. MindPeak builds GOC mastery before teaching any reaction mechanisms.',
        topics: [
            'IUPAC Nomenclature',
            'Isomerism (Structural & Stereo)',
            'Electronic Effects (I, M, H)',
            'Stability of Intermediates',
            'Alkane Reactions',
            'Alkene & Alkyne Reactions',
            'Aromatic Hydrocarbons (Benzene)',
            'Electrophilic Aromatic Substitution'
        ],
        keyFormulas: [
            'Markownikoff: H to C with more H',
            'Anti-Markownikoff: HBr + peroxide only',
            'Hückel: 4n+2 π electrons = aromatic',
            'Ozonolysis: C=C → 2 carbonyl compounds'
        ],
        commonMistakes: [
            'Wrong IUPAC naming priority',
            'Confusing +I/-I and +M/-M groups',
            'Wrong product in Markownikoff addition',
            'Wrong directing effects in benzene substitution'
        ],
        faqs: [
            {
                q: 'How important is GOC for NEET?',
                a: 'Critical! Every organic question uses GOC concepts. MindPeak spends 2 weeks on GOC fundamentals before moving to specific organic chapters. This investment pays dividends in all organic chemistry.'
            }
        ]
    },
    {
        slug: 'neet-chemistry-haloalkanes-haloarenes',
        exam: 'NEET',
        subject: 'Chemistry',
        chapter: 'Haloalkanes & Haloarenes',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"],
        weightage: '3-4%',
        difficulty: 'Moderate',
        pyqCount: 22,
        description: 'Nucleophilic substitution (SN1/SN2), elimination, and Grignard reagent — NEET-focused organic reactions. MindPeak simplifies SN/E mechanism selection with a clear decision tree.',
        topics: [
            'SN1 vs SN2 Mechanism',
            'E1 vs E2 Mechanism',
            'Grignard Reagent',
            'Wurtz Reaction',
            'Environmental Effects of Halogenated Compounds'
        ],
        keyFormulas: [
            'SN2: backside attack, inversion',
            'SN1: carbocation, racemisation',
            'RMgX + H₂O → RH + Mg(OH)X',
            'Wurtz: 2RX + 2Na → R-R + 2NaX'
        ],
        commonMistakes: [
            'Wrong SN1/SN2 prediction based on substrate',
            'Forgetting stereochemistry outcomes',
            'Wrong Grignard product',
            'Confusing substitution vs elimination conditions'
        ],
        faqs: [
            {
                q: 'How does NEET test Haloalkanes?',
                a: 'NEET focuses on NCERT — mechanism basics, named reactions, and environmental impact. Less mechanistic detail than JEE. MindPeak tailors haloalkane teaching to NEET pattern.'
            }
        ]
    },
    {
        slug: 'neet-chemistry-alcohols-phenols-ethers',
        exam: 'NEET',
        subject: 'Chemistry',
        chapter: 'Alcohols, Phenols & Ethers',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"],
        weightage: '3-4%',
        difficulty: 'Moderate',
        pyqCount: 25,
        description: 'Preparation, properties, and reactions of hydroxyl compounds — important NEET organic chapter. MindPeak connects all functional group transformations with a visual conversion chart.',
        topics: [
            'Preparation of Alcohols',
            'Reactions of Alcohols',
            'Phenol Properties & Reactions',
            'Ether Preparation & Reactions',
            'Acidity Comparison',
            'Distinguishing Tests (Lucas, Victor Meyer)'
        ],
        keyFormulas: [
            'Acidity: Phenol > Water > Alcohol',
            'Lucas: 3° instant, 2° 5 min, 1° no reaction',
            'Williamson: RONa + R\'X → ROR\''
        ],
        commonMistakes: [
            'Wrong acidity order',
            'Confusing dehydration conditions',
            'Wrong Williamson ether synthesis product',
            'Mixing up phenol-specific reactions'
        ],
        faqs: [
            {
                q: 'How to connect all organic conversions?',
                a: 'MindPeak provides a functional group interconversion chart: Alkane → Halide → Alcohol → Aldehyde → Acid → Ester. Each arrow has a reagent. This one chart connects 80% of organic chemistry.'
            }
        ]
    },
    {
        slug: 'neet-chemistry-carbonyl-compounds',
        exam: 'NEET',
        subject: 'Chemistry',
        chapter: 'Aldehydes, Ketones & Carboxylic Acids',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"],
        weightage: '4-5%',
        difficulty: 'Moderate',
        pyqCount: 30,
        description: 'Nucleophilic addition, Aldol, Cannizzaro, and acid reactions — high-yield NEET organic chapter. MindPeak teaches named reactions with mechanism understanding for long-term retention.',
        topics: [
            'Nucleophilic Addition Reactions',
            'Aldol Condensation',
            'Cannizzaro Reaction',
            'Tollens\' & Fehling\'s Tests',
            'Clemmensen & Wolff-Kishner Reduction',
            'Carboxylic Acid Preparation & Reactions',
            'Ester & Acid Chloride Formation',
            'Acidity Comparisons'
        ],
        keyFormulas: [
            'Aldol: α-H + base → condensation',
            'Cannizzaro: no α-H + conc. NaOH',
            'Tollens: RCHO → silver mirror',
            'Clemmensen: Zn(Hg)/HCl',
            'Wolff-Kishner: NH₂NH₂/KOH'
        ],
        commonMistakes: [
            'Confusing Aldol vs Cannizzaro conditions',
            'Wrong reduction method conditions',
            'Ketones don\'t give Tollens (common trap)',
            'Wrong acidity comparison for substituted acids'
        ],
        faqs: [
            {
                q: 'How to remember Clemmensen vs Wolff-Kishner?',
                a: 'Clemmensen: Zn(Hg)/HCl → acidic conditions. Wolff-Kishner: NH₂NH₂, KOH/ethylene glycol → basic conditions. Both reduce C=O to CH₂ but in different media. Use "C=acid, W=base." MindPeak drills these with reaction identification problems.'
            }
        ]
    },
    {
        slug: 'neet-chemistry-amines',
        exam: 'NEET',
        subject: 'Chemistry',
        chapter: 'Amines',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"],
        weightage: '3-4%',
        difficulty: 'Moderate',
        pyqCount: 22,
        description: 'Basicity, preparation, and reactions of amines plus diazonium salts — NCERT-focused NEET chapter. MindPeak covers amines with basicity-comparison drills for exam confidence.',
        topics: [
            'Classification & Nomenclature',
            'Preparation Methods',
            'Basicity of Amines',
            'Gabriel Phthalimide & Hofmann Bromamide',
            'Diazonium Salt Reactions',
            'Carbylamine & Hinsberg Tests'
        ],
        keyFormulas: [
            'Basicity (aq): 2° > 1° > 3° > NH₃',
            'Sandmeyer: ArN₂⁺ + CuX → ArX',
            'Carbylamine: 1° amine + CHCl₃ + KOH → isocyanide'
        ],
        commonMistakes: [
            'Wrong basicity order in different phases',
            'Confusing 1°/2°/3° amine test results',
            'Wrong diazonium salt reaction products'
        ],
        faqs: [
            {
                q: 'How to distinguish 1°, 2°, 3° amines?',
                a: 'Hinsberg test: 1° → soluble in NaOH, 2° → insoluble, 3° → no reaction with sulfonyl chloride. Carbylamine test: only 1° gives isocyanide (foul smell). NEET asks these distinction tests frequently.'
            }
        ]
    },
    {
        slug: 'neet-chemistry-biomolecules-polymers',
        exam: 'NEET',
        subject: 'Chemistry',
        chapter: 'Biomolecules, Polymers & Chemistry in Everyday Life',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"],
        weightage: '3-5%',
        difficulty: 'Easy',
        pyqCount: 25,
        description: 'Carbohydrates, proteins, vitamins, polymers, drugs, and detergents — factual NCERT chapters with easy marks. MindPeak covers all three chapters in focused revision sessions.',
        topics: [
            'Carbohydrates (Classification, Glucose, Fructose)',
            'Amino Acids & Proteins',
            'Nucleic Acids (DNA/RNA)',
            'Vitamins (Water & Fat Soluble)',
            'Polymers (Types, Monomers)',
            'Drugs & Pharmaceuticals',
            'Soaps & Detergents'
        ],
        keyFormulas: [
            'Glucose: C₆H₁₂O₆ (aldohexose)',
            'DNA: A=T, G≡C',
            'Nylon-6,6: hexamethylenediamine + adipic acid',
            'Vitamins: A,D,E,K (fat soluble), B,C (water soluble)'
        ],
        commonMistakes: [
            'Confusing reducing vs non-reducing sugars',
            'Wrong monomer for common polymers',
            'Mixing up vitamin deficiency diseases',
            'Wrong drug classification'
        ],
        faqs: [
            {
                q: 'How to score in these factual chapters?',
                a: 'Pure NCERT — read 2-3 times. Make tables: monomer→polymer, vitamin→deficiency, drug→use. 3-5% guaranteed marks with 4-5 hours of focused reading. MindPeak provides ready-made comparison tables.'
            }
        ]
    },
    /* ──────── INORGANIC CHEMISTRY ──────── */ {
        slug: 'neet-chemistry-periodic-classification',
        exam: 'NEET',
        subject: 'Chemistry',
        chapter: 'Classification of Elements & Periodicity',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$atom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Atom$3e$__["Atom"],
        weightage: '3-4%',
        difficulty: 'Moderate',
        pyqCount: 22,
        description: 'Periodic trends in properties — atomic radius, IE, EA, electronegativity. MindPeak teaches trends through electronic structure understanding, not memorization.',
        topics: [
            'Modern Periodic Law',
            'Periodic Trends (Atomic Radius, IE, EA, EN)',
            'Anomalous Properties of 2nd Period',
            'Diagonal Relationships',
            'Metallic & Non-Metallic Character'
        ],
        keyFormulas: [
            'IE: increases L→R, decreases T→B',
            'EA: Group 17 highest (Cl > F)',
            'EN: F highest (3.98 Pauling)',
            'Diagonal: Li~Mg, Be~Al, B~Si'
        ],
        commonMistakes: [
            'Wrong IE exceptions for half-filled shells',
            'Confusing EA of F and Cl',
            'Forgetting diagonal relationship pairs'
        ],
        faqs: [
            {
                q: 'How are trends tested in NEET?',
                a: 'Direct trend questions and anomaly-based questions (why F has lower EA than Cl, why IE of N > O). Understand WHY each anomaly occurs. MindPeak explains every exception from first principles.'
            }
        ]
    },
    {
        slug: 'neet-chemistry-s-block',
        exam: 'NEET',
        subject: 'Chemistry',
        chapter: 's-Block Elements',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$beaker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Beaker$3e$__["Beaker"],
        weightage: '2-3%',
        difficulty: 'Easy',
        pyqCount: 18,
        description: 'Alkali and alkaline earth metals — properties, compounds, and anomalies from NCERT. MindPeak covers s-block with comparative tables for systematic revision.',
        topics: [
            'Group 1 & Group 2 Properties',
            'Important Compounds (NaOH, Na₂CO₃, NaHCO₃, CaO, CaSO₄)',
            'Diagonal Relationships',
            'Flame Colours',
            'Biological Importance'
        ],
        keyFormulas: [
            'Flame: Li-crimson, Na-yellow, K-violet, Ca-brick red, Ba-green',
            'Hydroxide solubility increases down Group 2',
            'Thermal stability of carbonates increases down group'
        ],
        commonMistakes: [
            'Wrong flame colours',
            'Confusing solubility trends (hydroxides vs sulphates)',
            'Wrong diagonal relationship properties'
        ],
        faqs: [
            {
                q: 'How to study s-Block for NEET?',
                a: 'NCERT is 100% sufficient. Focus on compound properties, flame tests, and trends. 2-3% easy marks. MindPeak provides a 1-page s-block comparison sheet.'
            }
        ]
    },
    {
        slug: 'neet-chemistry-p-block',
        exam: 'NEET',
        subject: 'Chemistry',
        chapter: 'p-Block Elements',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$beaker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Beaker$3e$__["Beaker"],
        weightage: '6-8%',
        difficulty: 'Moderate',
        pyqCount: 50,
        description: 'Groups 13-18 — the highest-weightage NEET Chemistry chapter. Boron, carbon, nitrogen, oxygen, halogens, and noble gas compounds. MindPeak breaks p-block into group-wise modules with 2 sessions per group.',
        topics: [
            'Group 13 (Boron, Aluminium Compounds)',
            'Group 14 (Carbon Allotropes, Silicon)',
            'Group 15 (N₂, NH₃, HNO₃, Phosphorus)',
            'Group 16 (O₂, O₃, H₂SO₄, Sulphur)',
            'Group 17 (Halogens, Interhalogen, HX Acids)',
            'Group 18 (Noble Gases, Xenon Compounds)',
            'Oxoacids of N, P, S, Cl',
            'Inert Pair Effect'
        ],
        keyFormulas: [
            'Boron: sp² in BF₃, back bonding',
            'NH₃: sp³ pyramidal',
            'H₂SO₄: Contact process (V₂O₅)',
            'HNO₃: Ostwald process (Pt/Rh)',
            'XeF₂: sp³d linear, XeF₄: sp³d² sq planar'
        ],
        commonMistakes: [
            'Wrong compound-group association',
            'Confusing oxoacid structures',
            'Wrong allotrope properties',
            'Forgetting anomalous behaviour of first element'
        ],
        faqs: [
            {
                q: 'How to handle such a large chapter?',
                a: '6-8% — biggest single chapter! Study group by group (13, 14, 15, 16, 17, 18). For each: properties, important compounds, anomalies. NCERT tables are essential. MindPeak divides p-block into 12 manageable sessions.'
            }
        ]
    },
    {
        slug: 'neet-chemistry-d-f-block',
        exam: 'NEET',
        subject: 'Chemistry',
        chapter: 'd-Block & f-Block Elements',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$beaker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Beaker$3e$__["Beaker"],
        weightage: '3-5%',
        difficulty: 'Moderate',
        pyqCount: 28,
        description: 'Transition metals, lanthanides, and actinides — electronic configuration, properties, and important compounds. MindPeak covers d-block trends with periodic table visualization.',
        topics: [
            'Electronic Configuration & Anomalies',
            'Variable Oxidation States',
            'Colour & Magnetic Properties',
            'KMnO₄ & K₂Cr₂O₇ (Preparation & Properties)',
            'Lanthanide Contraction',
            'f-Block Overview',
            'Interstitial Compounds & Alloys'
        ],
        keyFormulas: [
            'Cr: [Ar]3d⁵4s¹, Cu: [Ar]3d¹⁰4s¹',
            'μ = √(n(n+2)) BM',
            'Lanthanide contraction: poor 4f shielding'
        ],
        commonMistakes: [
            'Wrong electronic configuration for Cr and Cu',
            'Wrong oxidation state stability predictions',
            'Confusing d-block compounds and their colours'
        ],
        faqs: [
            {
                q: 'How important are KMnO₄ and K₂Cr₂O₇?',
                a: 'Very — preparation, properties, and oxidizing reactions of both are NEET favourites. Know equations in acidic and basic medium. MindPeak provides focused KMnO₄/K₂Cr₂O₇ problem sheets.'
            }
        ]
    },
    {
        slug: 'neet-chemistry-coordination-compounds',
        exam: 'NEET',
        subject: 'Chemistry',
        chapter: 'Coordination Compounds',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$atom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Atom$3e$__["Atom"],
        weightage: '3-5%',
        difficulty: 'Hard',
        pyqCount: 28,
        description: 'IUPAC naming, isomerism, VBT, and CFT — conceptually challenging but high-yield NEET chapter. MindPeak\'s systematic naming method eliminates IUPAC errors.',
        topics: [
            'Werner\'s Theory',
            'IUPAC Nomenclature',
            'Isomerism',
            'Valence Bond Theory',
            'Crystal Field Theory',
            'Spectrochemical Series',
            'Colour & Magnetic Properties'
        ],
        keyFormulas: [
            'CFSE (octahedral): -0.4Δ₀(t₂g) + 0.6Δ₀(eg)',
            'Spectrochemical: I⁻ < Br⁻ < Cl⁻ < ... < CN⁻ < CO',
            'μ = √(n(n+2)) BM'
        ],
        commonMistakes: [
            'Wrong IUPAC naming order',
            'Confusing geometrical and optical isomers',
            'Wrong CFT splitting for different geometries'
        ],
        faqs: [
            {
                q: 'Is CFT tested in NEET?',
                a: 'Yes — NEET asks CFT-based questions on colour and magnetism. Know octahedral and tetrahedral splitting diagrams, spectrochemical series, and CFSE calculation. MindPeak dedicates 4 sessions to coordination chemistry.'
            }
        ]
    },
    {
        slug: 'neet-chemistry-metallurgy',
        exam: 'NEET',
        subject: 'Chemistry',
        chapter: 'General Principles of Metallurgy',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$beaker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Beaker$3e$__["Beaker"],
        weightage: '2-3%',
        difficulty: 'Easy',
        pyqCount: 15,
        description: 'Extraction of metals, Ellingham diagram, and refining — NCERT factual chapter for NEET. MindPeak covers metallurgy with process-flow diagrams.',
        topics: [
            'Concentration Methods',
            'Thermodynamic Principles (Ellingham)',
            'Extraction of Al, Fe, Cu, Zn',
            'Refining Methods (Electrolytic, Zone, Vapour Phase)'
        ],
        keyFormulas: [
            'Al: Hall-Héroult (electrolysis of Al₂O₃ in cryolite)',
            'Fe: Blast furnace',
            'Cu: Electrolytic refining',
            'Ellingham: ΔG vs T plot'
        ],
        commonMistakes: [
            'Wrong extraction method for specific metals',
            'Wrong Ellingham diagram interpretation',
            'Confusing refining methods'
        ],
        faqs: [
            {
                q: 'Is Metallurgy worth deep study for NEET?',
                a: '2-3% with NCERT-based factual questions. Know extraction methods for Al, Fe, Cu, Zn and Ellingham diagram basics. 2-3 hours of focused study is sufficient.'
            }
        ]
    },
    {
        slug: 'neet-chemistry-salt-analysis-hydrogen',
        exam: 'NEET',
        subject: 'Chemistry',
        chapter: 'Hydrogen & Qualitative Analysis',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"],
        weightage: '2-3%',
        difficulty: 'Easy',
        pyqCount: 15,
        description: 'Hydrogen preparation, properties, water chemistry, and qualitative analysis basics — scattered NCERT content combined for NEET. MindPeak covers these in the final revision module for last-minute marks.',
        topics: [
            'Isotopes of Hydrogen',
            'Preparation & Properties of H₂',
            'Water (Hard & Soft, Heavy Water)',
            'Hydrogen Peroxide',
            'Hydrides (Ionic, Covalent, Metallic)',
            'Basic Qualitative Salt Analysis'
        ],
        keyFormulas: [
            'H₂O₂: 2H₂O₂ → 2H₂O + O₂ (decomposition)',
            'Hard water: Ca²⁺/Mg²⁺ salts',
            'Heavy water: D₂O'
        ],
        commonMistakes: [
            'Confusing types of hydrides',
            'Wrong H₂O₂ reactions',
            'Mixing up temporary and permanent hardness'
        ],
        faqs: [
            {
                q: 'Is Hydrogen chapter important for NEET?',
                a: '1-2 direct questions possible. Focus on H₂O₂ properties, hydride types, and hard water treatment. Quick study — MindPeak includes this in the fast-revision module.'
            }
        ]
    },
    {
        slug: 'neet-chemistry-environmental-chemistry',
        exam: 'NEET',
        subject: 'Chemistry',
        chapter: 'Environmental Chemistry',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"],
        weightage: '1-2%',
        difficulty: 'Easy',
        pyqCount: 10,
        description: 'Pollution, ozone depletion, and green chemistry — short NCERT chapter with 1-2 NEET questions. MindPeak covers environmental chemistry with current-affairs connections.',
        topics: [
            'Air Pollution (Smog, Acid Rain)',
            'Water Pollution (BOD, Eutrophication)',
            'Soil Pollution',
            'Ozone Layer Depletion',
            'Greenhouse Effect',
            'Green Chemistry Principles'
        ],
        keyFormulas: [
            'BOD: higher = more polluted',
            'Ozone: CFCs → Cl radicals → O₃ destruction',
            'Greenhouse: CO₂, CH₄, N₂O trap IR radiation'
        ],
        commonMistakes: [
            'Confusing photochemical and classical smog',
            'Wrong ozone depletion mechanism',
            'Mixing up BOD and COD'
        ],
        faqs: [
            {
                q: 'How much to study for Environmental Chemistry?',
                a: '1-2% — read NCERT once. Focus on smog types, ozone depletion, BOD, and greenhouse effect. 1 hour of reading is sufficient. MindPeak provides a 1-page summary.'
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/chapterData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CHAPTER_SLUGS",
    ()=>CHAPTER_SLUGS,
    "TOPIC_PATHS",
    ()=>TOPIC_PATHS,
    "allTopics",
    ()=>allTopics,
    "chapters",
    ()=>chapters,
    "getChapterBySlug",
    ()=>getChapterBySlug,
    "getTopicInfo",
    ()=>getTopicInfo,
    "topicToSlug",
    ()=>topicToSlug
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$jeePhysics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/chapters/jeePhysics.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$jeeChemistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/chapters/jeeChemistry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$jeeMaths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/chapters/jeeMaths.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$neetBiology$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/chapters/neetBiology.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$neetPhysics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/chapters/neetPhysics.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$neetChemistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/chapters/neetChemistry.ts [app-client] (ecmascript)");
;
;
;
;
;
;
const chapters = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$jeePhysics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jeePhysicsChapters"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$jeeChemistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jeeChemistryChapters"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$jeeMaths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jeeMathsChapters"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$neetBiology$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["neetBiologyChapters"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$neetPhysics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["neetPhysicsChapters"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$neetChemistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["neetChemistryChapters"]
];
const CHAPTER_SLUGS = chapters.map(_c = (c)=>c.slug);
_c1 = CHAPTER_SLUGS;
function getChapterBySlug(slug) {
    return chapters.find((c)=>c.slug === slug);
}
function topicToSlug(topic) {
    return topic.toLowerCase().replace(/['']/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}
const allTopics = chapters.flatMap((chapter)=>chapter.topics.map((topicName, topicIndex)=>({
            topicSlug: topicToSlug(topicName),
            topicName,
            topicIndex,
            chapter
        })));
const TOPIC_PATHS = allTopics.map(_c2 = (t)=>`${t.chapter.slug}/${t.topicSlug}`);
_c3 = TOPIC_PATHS;
function getTopicInfo(chapterSlug, topicSlug) {
    return allTopics.find((t)=>t.chapter.slug === chapterSlug && t.topicSlug === topicSlug);
}
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "CHAPTER_SLUGS$chapters.map");
__turbopack_context__.k.register(_c1, "CHAPTER_SLUGS");
__turbopack_context__.k.register(_c2, "TOPIC_PATHS$allTopics.map");
__turbopack_context__.k.register(_c3, "TOPIC_PATHS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SubjectChapterLinks.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChapterFooterGrid",
    ()=>ChapterFooterGrid,
    "SubjectChapterLinks",
    ()=>SubjectChapterLinks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RouterLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapterData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/chapterData.ts [app-client] (ecmascript)");
;
;
;
;
;
const difficultyColor = {
    Easy: 'bg-green-500/10 text-green-400 border-green-500/20',
    Moderate: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    Hard: 'bg-red-500/10 text-red-400 border-red-500/20'
};
const SubjectChapterLinks = ({ exam, subject })=>{
    const matched = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapterData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chapters"].filter((c)=>c.exam === exam && c.subject === subject);
    if (matched.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                            className: "w-7 h-7 text-primary"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SubjectChapterLinks.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-display font-bold text-foreground text-2xl md:text-3xl",
                            children: [
                                exam,
                                " ",
                                subject,
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gradient-gold",
                                    children: "Chapter-Wise Deep Dives"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SubjectChapterLinks.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SubjectChapterLinks.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SubjectChapterLinks.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground text-base leading-relaxed max-w-3xl mb-10",
                    children: [
                        "Explore each ",
                        subject,
                        " chapter in detail — topics, key formulas, common mistakes, and previous year question analysis. Click any chapter to access the complete study guide with MindPeak's expert insights."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SubjectChapterLinks.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
                    children: matched.map((ch, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChapterCard, {
                            chapter: ch,
                            index: i
                        }, ch.slug, false, {
                            fileName: "[project]/src/components/SubjectChapterLinks.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/SubjectChapterLinks.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SubjectChapterLinks.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/SubjectChapterLinks.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SubjectChapterLinks;
/** Individual chapter card */ const ChapterCard = ({ chapter: ch, index })=>{
    const Icon = ch.icon;
    const brief = ch.description.length > 120 ? ch.description.slice(0, 120).replace(/\s+\S*$/, '') + '…' : ch.description;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 16
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true
        },
        transition: {
            delay: Math.min(index * 0.04, 0.4)
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
            to: `/${ch.slug}`,
            className: "group block rounded-xl border border-border bg-card p-5 h-full hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between gap-3 mb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2.5 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "w-4.5 h-4.5 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SubjectChapterLinks.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SubjectChapterLinks.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-display font-bold text-foreground text-sm leading-tight group-hover:text-primary transition-colors truncate",
                                    children: ch.chapter
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SubjectChapterLinks.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SubjectChapterLinks.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                            className: "w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SubjectChapterLinks.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SubjectChapterLinks.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground text-xs leading-relaxed mb-3",
                    children: brief
                }, void 0, false, {
                    fileName: "[project]/src/components/SubjectChapterLinks.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 flex-wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full border ${difficultyColor[ch.difficulty] || difficultyColor.Moderate}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SubjectChapterLinks.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                " ",
                                ch.difficulty
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SubjectChapterLinks.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center gap-1 text-[10px] text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SubjectChapterLinks.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                " ",
                                ch.weightage
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SubjectChapterLinks.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center gap-1 text-[10px] text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SubjectChapterLinks.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                " ",
                                ch.topics.length,
                                " topics"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SubjectChapterLinks.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SubjectChapterLinks.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SubjectChapterLinks.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/SubjectChapterLinks.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = ChapterCard;
const ChapterFooterGrid = ({ exam, subject, showRelated = true })=>{
    const primary = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapterData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chapters"].filter((c)=>c.exam === exam && c.subject === subject);
    const related = showRelated ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapterData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chapters"].filter((c)=>c.exam === exam && c.subject !== subject).slice(0, 12) : [];
    if (primary.length === 0) return null;
    // Group primary chapters by rough topic area for nicer display
    const midpoint = Math.ceil(primary.length / 2);
    const col1 = primary.slice(0, midpoint);
    const col2 = primary.slice(midpoint);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-card/50 border-y border-border py-10 sm:py-14 px-4 sm:px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-display font-bold text-foreground text-lg sm:text-xl mb-2",
                    children: [
                        exam,
                        " ",
                        subject,
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gradient-gold",
                            children: "Chapter Pages"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SubjectChapterLinks.tsx",
                            lineNumber: 131,
                            columnNumber: 28
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SubjectChapterLinks.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground text-sm mb-6",
                    children: [
                        "Detailed study guides for every ",
                        exam,
                        " ",
                        subject,
                        " chapter — formulas, PYQs, mistakes & expert tips."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SubjectChapterLinks.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid sm:grid-cols-2 gap-x-8 gap-y-1.5 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5",
                            children: col1.map((ch)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                    to: `/${ch.slug}`,
                                    className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1 group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "w-3 h-3 text-primary/50 group-hover:text-primary flex-shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SubjectChapterLinks.tsx",
                                            lineNumber: 146,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "truncate",
                                            children: ch.chapter
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SubjectChapterLinks.tsx",
                                            lineNumber: 147,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-muted-foreground/60 ml-auto flex-shrink-0",
                                            children: ch.weightage
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SubjectChapterLinks.tsx",
                                            lineNumber: 148,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, ch.slug, true, {
                                    fileName: "[project]/src/components/SubjectChapterLinks.tsx",
                                    lineNumber: 141,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/SubjectChapterLinks.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5",
                            children: col2.map((ch)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                    to: `/${ch.slug}`,
                                    className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1 group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "w-3 h-3 text-primary/50 group-hover:text-primary flex-shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SubjectChapterLinks.tsx",
                                            lineNumber: 159,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "truncate",
                                            children: ch.chapter
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SubjectChapterLinks.tsx",
                                            lineNumber: 160,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-muted-foreground/60 ml-auto flex-shrink-0",
                                            children: ch.weightage
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SubjectChapterLinks.tsx",
                                            lineNumber: 161,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, ch.slug, true, {
                                    fileName: "[project]/src/components/SubjectChapterLinks.tsx",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/SubjectChapterLinks.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SubjectChapterLinks.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                related.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "font-display font-bold text-foreground text-sm sm:text-base mb-3",
                            children: [
                                "More ",
                                exam,
                                " Chapters You Should Explore"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SubjectChapterLinks.tsx",
                            lineNumber: 170,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2",
                            children: related.map((ch)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                    to: `/${ch.slug}`,
                                    className: "px-3 py-1.5 rounded-lg bg-secondary/50 border border-border text-xs text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors",
                                    children: [
                                        ch.subject,
                                        ": ",
                                        ch.chapter
                                    ]
                                }, ch.slug, true, {
                                    fileName: "[project]/src/components/SubjectChapterLinks.tsx",
                                    lineNumber: 175,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/SubjectChapterLinks.tsx",
                            lineNumber: 173,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SubjectChapterLinks.tsx",
            lineNumber: 129,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/SubjectChapterLinks.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c2 = ChapterFooterGrid;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "SubjectChapterLinks");
__turbopack_context__.k.register(_c1, "ChapterCard");
__turbopack_context__.k.register(_c2, "ChapterFooterGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/views/SubjectPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SUBJECT_SLUGS",
    ()=>SUBJECT_SLUGS,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RouterLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/examYears.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SEOHead$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SEOHead.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PageFooter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageFAQ$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PageFAQ.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeaturedSnippet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FeaturedSnippet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FreshnessBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FreshnessBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PeopleAlsoAsk$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PeopleAlsoAsk.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DemoBookingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DemoBookingModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SubjectChapterLinks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SubjectChapterLinks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$atom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Atom$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/atom.js [app-client] (ecmascript) <export default as Atom>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flask-conical.js [app-client] (ecmascript) <export default as FlaskConical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calculator.js [app-client] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$microscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Microscope$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/microscope.js [app-client] (ecmascript) <export default as Microscope>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const logo = '/images/logo.jpeg';
const SUBJECTS = {
    'jee-physics-preparation': {
        exam: 'JEE',
        subject: 'Physics',
        slug: 'jee-physics-preparation',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$atom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Atom$3e$__["Atom"],
        title: 'JEE Physics Preparation — Chapter-Wise Strategy & 1-on-1 Coaching | MindPeak',
        description: 'Master JEE Physics with personalized 1-on-1 coaching. Chapter-wise strategy for Mechanics, Electrodynamics, Optics & Modern Physics. IIT alumni mentors. Start free trial!',
        heroHeading: 'JEE Physics Preparation —',
        heroHighlight: 'Chapter-Wise Mastery with 1-on-1 Coaching',
        heroParagraph: 'Physics is the most conceptually demanding subject in JEE and often the highest-scoring for students who master it. At MindPeak, your dedicated Physics mentor — an IIT alumnus — builds your understanding from first principles. Every concept is linked to problem-solving patterns, and your study plan adapts weekly based on diagnostic data. No generic lectures. No wasted time on chapters you already know.',
        snippetQ: 'How to prepare for JEE Physics effectively?',
        snippetA: 'Effective JEE Physics preparation requires mastering concepts from first principles, solving 200+ problems per chapter, and practicing multi-concept questions. Focus on Mechanics and Electrodynamics first (60% weightage), then Optics and Modern Physics. Personalized coaching with IIT alumni mentors accelerates progress by targeting individual weak areas.',
        snippetBullets: [
            'Start with Mechanics — it forms the foundation for all other topics',
            'Practice HC Verma + previous 20 years JEE papers',
            'Focus on Electrodynamics — consistent 25-30% weightage',
            'Master dimensional analysis for quick verification',
            'Solve multi-concept problems daily for JEE Advanced',
            'Weekly mock tests to identify weak chapters'
        ],
        chapters: [
            {
                name: 'Mechanics',
                topics: [
                    'Kinematics (1D & 2D)',
                    'Newton\'s Laws & Friction',
                    'Work-Energy Theorem & Conservation',
                    'Rotational Dynamics & Moment of Inertia',
                    'Gravitation',
                    'Simple Harmonic Motion'
                ]
            },
            {
                name: 'Electrodynamics',
                topics: [
                    'Electrostatics (Gauss Law, Capacitors)',
                    'Current Electricity (Kirchhoff\'s Laws)',
                    'Magnetism & Moving Charges',
                    'Electromagnetic Induction (Faraday, Lenz)',
                    'Alternating Current'
                ]
            },
            {
                name: 'Optics & Modern Physics',
                topics: [
                    'Ray Optics (Mirrors, Lenses, Prisms)',
                    'Wave Optics (Interference, Diffraction)',
                    'Dual Nature of Matter',
                    'Atoms & Nuclei',
                    'Semiconductor Devices'
                ]
            },
            {
                name: 'Thermodynamics & Waves',
                topics: [
                    'Kinetic Theory of Gases',
                    'Laws of Thermodynamics',
                    'Heat Transfer (Conduction, Convection, Radiation)',
                    'Mechanical Waves & Sound',
                    'Standing Waves & Beats'
                ]
            }
        ],
        mistakes: [
            {
                title: 'Memorizing formulae without concepts',
                desc: 'JEE Physics tests conceptual understanding, not formula recall. Rote memorization fails for multi-concept questions in JEE Advanced.'
            },
            {
                title: 'Skipping Rotational Dynamics',
                desc: 'Students find rotation difficult and skip it. But it carries 8-10% weightage and appears in both Main and Advanced every year.'
            },
            {
                title: 'Ignoring dimensional analysis',
                desc: 'Dimensional analysis can eliminate 2-3 wrong options instantly. Most batch coaching doesn\'t teach this powerful technique systematically.'
            },
            {
                title: 'Not practicing previous year papers',
                desc: 'JEE Physics repeats conceptual patterns. Solving 20 years of PYQs reveals the examiners\' favourite question types and difficulty patterns.'
            }
        ],
        tips: [
            'Solve HC Verma completely — it builds JEE-level intuition',
            'Make formula sheets organized by chapter for quick revision',
            'Practice 10-15 problems daily from different chapters',
            'Focus on understanding free body diagrams thoroughly',
            'Use energy methods as primary approach before using forces',
            'Attempt JEE Advanced PYQs after completing each chapter'
        ],
        paa: [
            {
                question: 'Which chapters are most important for JEE Physics?',
                answer: 'Mechanics (30% weightage) and Electrodynamics (25-30%) are the most important. Within Mechanics, focus on Rotational Dynamics, Energy Conservation, and SHM. In Electrodynamics, prioritize Electrostatics and Electromagnetic Induction. Optics and Modern Physics together carry about 20% and are relatively scoring.'
            },
            {
                question: 'How to score 60+ in JEE Physics?',
                answer: 'Scoring 60+ requires strong conceptual clarity in Mechanics + Electrodynamics, solving 200+ JEE-level problems per chapter, and practicing 20 years of PYQs. MindPeak\'s personalized approach identifies your exact weak areas and builds topic-wise mastery with daily problem-solving sessions.'
            },
            {
                question: 'Is HC Verma enough for JEE Physics?',
                answer: 'HC Verma is an excellent foundation but not sufficient alone for JEE Advanced. After HC Verma, solve Irodov for advanced problems, DC Pandey for practice volume, and 20 years of JEE PYQs. MindPeak mentors guide you through the right books at the right time.'
            },
            {
                question: 'How to improve Physics for JEE in 3 months?',
                answer: 'Focus intensively on high-weightage chapters (Mechanics + Electrodynamics). Solve 15+ problems daily. Take weekly topic-wise tests. Get personalized doubt resolution. MindPeak\'s crash course provides daily 1-on-1 sessions targeting your specific weak areas for rapid improvement.'
            }
        ],
        faqs: [
            {
                question: 'How does MindPeak teach JEE Physics differently?',
                answer: 'MindPeak pairs you with a dedicated IIT alumni Physics mentor who teaches from first principles. Your study plan adapts weekly based on diagnostic performance data. Concepts are taught through problem-solving, not lectures — every session involves solving JEE-level problems with real-time guidance.'
            },
            {
                question: 'Do you cover both JEE Main and Advanced Physics?',
                answer: 'Yes. Our Physics curriculum covers the complete JEE Main syllabus plus the additional topics required for JEE Advanced (e.g., advanced Rotational Dynamics, complex Electrostatics). Your mentor adjusts the depth and difficulty based on whether you\'re targeting Main, Advanced, or both.'
            },
            {
                question: 'How many months to prepare for JEE Physics?',
                answer: 'A complete JEE Physics preparation typically takes 8-12 months for a focused student. With MindPeak\'s personalized approach, students with some foundation can achieve significant improvement in 4-6 months. Our 1-year and 2-year programs ensure comprehensive coverage.'
            },
            {
                question: 'Can I take only Physics coaching at MindPeak?',
                answer: 'Yes! MindPeak offers subject-specific coaching. If you\'re strong in Chemistry and Math but need Physics help, we can provide a Physics-focused plan with a dedicated Physics mentor. Pricing is adjusted based on the number of subjects.'
            }
        ],
        links: [
            {
                label: 'JEE Chemistry Preparation',
                to: '/jee-chemistry-preparation'
            },
            {
                label: 'JEE Mathematics Preparation',
                to: '/jee-mathematics-preparation'
            },
            {
                label: 'Complete JEE Coaching',
                to: '/jee-coaching'
            },
            {
                label: 'JEE Mock Test Strategy',
                to: '/jee-mock-test-strategy'
            },
            {
                label: 'Free Trial Class',
                to: '/free-trial'
            },
            {
                label: 'MindPeak vs Allen',
                to: '/mindpeak-vs-allen'
            }
        ]
    },
    'jee-chemistry-preparation': {
        exam: 'JEE',
        subject: 'Chemistry',
        slug: 'jee-chemistry-preparation',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"],
        title: 'JEE Chemistry Preparation — Organic, Inorganic & Physical | 1-on-1 Coaching | MindPeak',
        description: 'Ace JEE Chemistry with personalized 1-on-1 coaching. Master Organic reactions, Inorganic qualitative analysis, and Physical Chemistry numericals. Start free trial!',
        heroHeading: 'JEE Chemistry Preparation —',
        heroHighlight: 'Master Organic, Inorganic & Physical Chemistry',
        heroParagraph: 'Chemistry is the most scoring subject in JEE — students who master it gain a massive advantage. Yet most struggle because batch coaching teaches all three branches (Organic, Inorganic, Physical) at the same generic pace. At MindPeak, your dedicated Chemistry mentor identifies which branch needs the most attention and adapts your curriculum accordingly. Organic reaction mechanisms, Inorganic qualitative analysis, Physical Chemistry numericals — every weak area gets targeted practice.',
        snippetQ: 'How to prepare for JEE Chemistry effectively?',
        snippetA: 'JEE Chemistry preparation requires a balanced approach across Organic, Inorganic, and Physical Chemistry. Physical Chemistry (numerical-based) rewards practice, Organic Chemistry requires understanding reaction mechanisms, and Inorganic Chemistry needs structured memorization. Personalized coaching identifies which branch needs extra focus for your preparation.',
        snippetBullets: [
            'Physical Chemistry: Master equations and practice 30+ numericals per chapter',
            'Organic Chemistry: Focus on reaction mechanisms, not rote memorization',
            'Inorganic Chemistry: Use structured tables and mnemonics for remembering',
            'NCERT is essential — especially for Inorganic Chemistry in JEE Main',
            'Practice previous year questions to understand the exam pattern',
            'Solve problems from MS Chouhan (Organic) and N Avasthi (Physical)'
        ],
        chapters: [
            {
                name: 'Physical Chemistry',
                topics: [
                    'Mole Concept & Stoichiometry',
                    'Thermodynamics & Thermochemistry',
                    'Chemical Equilibrium',
                    'Ionic Equilibrium (pH, Buffers)',
                    'Electrochemistry',
                    'Chemical Kinetics',
                    'Solutions & Colligative Properties'
                ]
            },
            {
                name: 'Organic Chemistry',
                topics: [
                    'General Organic Chemistry (GOC)',
                    'Hydrocarbons (Alkanes, Alkenes, Alkynes)',
                    'Alcohols, Ethers, Aldehydes & Ketones',
                    'Carboxylic Acids & Derivatives',
                    'Amines & Diazonium Salts',
                    'Named Reactions & Reaction Mechanisms',
                    'Biomolecules & Polymers'
                ]
            },
            {
                name: 'Inorganic Chemistry',
                topics: [
                    'Chemical Bonding (VSEPR, MOT)',
                    'Coordination Compounds',
                    'd-Block & f-Block Elements',
                    'p-Block Elements (Group 13-18)',
                    's-Block Elements',
                    'Qualitative Analysis (Salt Analysis)',
                    'Metallurgy & Environmental Chemistry'
                ]
            }
        ],
        mistakes: [
            {
                title: 'Treating Organic Chemistry as memorization',
                desc: 'JEE Organic tests mechanism understanding. Memorizing reactions without understanding electron flow leads to failure in multi-step synthesis problems.'
            },
            {
                title: 'Neglecting Physical Chemistry numericals',
                desc: 'Physical Chemistry is the most scoring branch (purely numerical). Skipping practice problems means losing easy marks that require straightforward calculation.'
            },
            {
                title: 'Ignoring Inorganic until the last month',
                desc: 'Students delay Inorganic Chemistry revision. It requires consistent, spaced repetition — cramming at the end leads to mixing up properties and reactions.'
            },
            {
                title: 'Not linking NCERT with JEE questions',
                desc: 'JEE Main Chemistry increasingly draws from NCERT examples and in-text questions. Ignoring NCERT is a critical mistake for Chemistry preparation.'
            }
        ],
        tips: [
            'Start with Physical Chemistry — it\'s the most scoring per hour invested',
            'For Organic, draw mechanisms for every reaction you learn',
            'Create comparison tables for Inorganic (e.g., Group 15 vs Group 16 properties)',
            'Solve MS Chouhan for Organic and N Avasthi for Physical Chemistry',
            'Revise Inorganic Chemistry weekly using flashcards',
            'Practice JEE PYQs topic-wise after completing each chapter'
        ],
        paa: [
            {
                question: 'Which is the easiest subject in JEE — Chemistry?',
                answer: 'Chemistry is often considered the most scoring subject in JEE because it rewards good preparation with predictable question patterns. Physical Chemistry is calculation-based, Organic follows reaction mechanisms, and Inorganic is memory-based. Students who prepare systematically can score 50-60+ out of 100 in Chemistry.'
            },
            {
                question: 'How to master Organic Chemistry for JEE?',
                answer: 'Organic Chemistry mastery requires understanding reaction mechanisms (nucleophilic, electrophilic, radical) rather than memorizing reactions. Practice named reactions, understand electron flow in every step, and solve multi-step synthesis problems. MS Chouhan is the gold-standard book. MindPeak mentors teach mechanism-first approach.'
            },
            {
                question: 'Is NCERT enough for JEE Chemistry?',
                answer: 'NCERT is essential but not sufficient. For JEE Main, NCERT covers 60-70% of the Chemistry syllabus. For JEE Advanced, you need additional reference books (MS Chouhan for Organic, N Avasthi for Physical). MindPeak mentors guide you through the right resources at the right depth.'
            },
            {
                question: 'How to remember Inorganic Chemistry for JEE?',
                answer: 'Use structured comparison tables, mnemonics, and spaced repetition. Group elements by periodic trends, create reaction flowcharts, and revise weekly using flashcard methodology. MindPeak\'s adaptive system sends personalized revision reminders based on your forgetting curve.'
            }
        ],
        faqs: [
            {
                question: 'How does MindPeak teach JEE Chemistry?',
                answer: 'Your dedicated Chemistry mentor identifies which of the three branches (Organic, Inorganic, Physical) needs the most attention. Organic is taught mechanism-first, Physical through problem-solving, and Inorganic through structured memorization techniques. Every session adapts to your diagnostic performance.'
            },
            {
                question: 'Can I focus only on Organic Chemistry at MindPeak?',
                answer: 'Yes! If you\'re strong in Physical and Inorganic but struggle with Organic, we can create an Organic-focused plan. Your mentor will concentrate on mechanisms, named reactions, and synthesis problems while doing light maintenance on other branches.'
            },
            {
                question: 'Do you cover both JEE Main and Advanced Chemistry?',
                answer: 'Absolutely. Our Chemistry program covers the full JEE Main syllabus plus Advanced-level concepts like complex coordination chemistry, advanced thermodynamics, and difficult Organic synthesis. The depth adapts to your target exam.'
            },
            {
                question: 'How long does it take to complete JEE Chemistry?',
                answer: 'Complete Chemistry preparation takes 6-10 months. Physical Chemistry (4-5 months), Organic (4-5 months), and Inorganic (3-4 months) — with overlap. MindPeak\'s personalized plans optimize this timeline based on your current level.'
            }
        ],
        links: [
            {
                label: 'JEE Physics Preparation',
                to: '/jee-physics-preparation'
            },
            {
                label: 'JEE Mathematics Preparation',
                to: '/jee-mathematics-preparation'
            },
            {
                label: 'Complete JEE Coaching',
                to: '/jee-coaching'
            },
            {
                label: 'Free Trial Class',
                to: '/free-trial'
            },
            {
                label: 'MindPeak vs Resonance',
                to: '/mindpeak-vs-resonance'
            }
        ]
    },
    'jee-mathematics-preparation': {
        exam: 'JEE',
        subject: 'Mathematics',
        slug: 'jee-mathematics-preparation',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"],
        title: 'JEE Mathematics Preparation — Calculus, Algebra & Coordinate Geometry | MindPeak',
        description: 'Conquer JEE Mathematics with personalized 1-on-1 coaching. Master Calculus, Algebra, Coordinate Geometry, and Trigonometry. IIT alumni mentors. Start free trial!',
        heroHeading: 'JEE Mathematics Preparation —',
        heroHighlight: 'Calculus, Algebra & Geometry Mastery',
        heroParagraph: 'Mathematics is what separates JEE toppers from the rest — it rewards deep problem-solving skills and creative thinking. At MindPeak, your dedicated Mathematics mentor builds your skills progressively from fundamentals to JEE Advanced-level problem solving. Calculus, Algebra, Coordinate Geometry, Trigonometry — every chapter gets the attention it deserves with a curriculum that adapts to your pace and strengths.',
        snippetQ: 'How to prepare for JEE Mathematics?',
        snippetA: 'JEE Mathematics preparation demands consistent daily practice of 15-20 problems, strong fundamentals in Calculus (35% weightage), and mastery of Algebra and Coordinate Geometry. Focus on problem-solving techniques rather than formula memorization. Personalized coaching helps identify weak chapters and build systematic problem-solving approaches.',
        snippetBullets: [
            'Calculus is the highest-weightage topic (35%) — prioritize it',
            'Practice 15-20 problems daily from different chapters',
            'Build strong algebra fundamentals — they support every other topic',
            'Master Coordinate Geometry with graphical intuition',
            'Solve Cengage/Arihant series for comprehensive practice',
            'Attempt JEE Advanced PYQs after completing each topic'
        ],
        chapters: [
            {
                name: 'Calculus',
                topics: [
                    'Limits & Continuity',
                    'Differentiation (Chain Rule, Implicit, Parametric)',
                    'Application of Derivatives (Maxima/Minima, Tangents)',
                    'Indefinite Integration (Substitution, Partial Fractions)',
                    'Definite Integration (Properties, Area Under Curves)',
                    'Differential Equations (Variable Separable, Linear)'
                ]
            },
            {
                name: 'Algebra',
                topics: [
                    'Complex Numbers (De Moivre, Geometry of Complex Plane)',
                    'Quadratic Equations & Inequalities',
                    'Sequences & Series (AP, GP, Special Series)',
                    'Permutations & Combinations',
                    'Binomial Theorem',
                    'Matrices & Determinants',
                    'Probability (Conditional, Bayes)'
                ]
            },
            {
                name: 'Coordinate Geometry',
                topics: [
                    'Straight Lines (Various Forms, Pair of Lines)',
                    'Circles (Tangent, Normal, Radical Axis)',
                    'Parabola (Focus, Directrix, Tangent Properties)',
                    'Ellipse & Hyperbola',
                    'Vectors in 2D & 3D',
                    '3D Geometry (Lines, Planes)'
                ]
            },
            {
                name: 'Trigonometry',
                topics: [
                    'Trigonometric Functions & Identities',
                    'Trigonometric Equations',
                    'Inverse Trigonometric Functions',
                    'Properties of Triangles (Sine/Cosine Rule)',
                    'Heights & Distances'
                ]
            }
        ],
        mistakes: [
            {
                title: 'Weak algebra fundamentals',
                desc: 'Students rush to Calculus without solid algebra skills. Since Calculus uses algebraic manipulation extensively, weak fundamentals cause cascading errors in integration and differentiation.'
            },
            {
                title: 'Solving too few problems',
                desc: 'Mathematics requires volume. Students who solve only textbook examples and skip practice sets consistently underperform. You need 200+ problems per major chapter.'
            },
            {
                title: 'Ignoring Coordinate Geometry',
                desc: 'Coordinate Geometry (Conics) carries 15-20% weightage in JEE. Many students find it "boring" and skip practice. This is free marks left on the table.'
            },
            {
                title: 'Not developing multiple approaches',
                desc: 'JEE Advanced rewards students who can approach a problem from multiple angles — algebraic, graphical, and coordinate methods. Batch coaching typically teaches only one approach.'
            }
        ],
        tips: [
            'Start with Algebra and Trigonometry before diving into Calculus',
            'Practice integration daily — it\'s the most asked topic',
            'Learn graphical approaches alongside analytical methods',
            'Solve at least 20 years of JEE PYQs topic-wise',
            'For Coordinate Geometry, always visualize the graph before computing',
            'Time yourself during practice — Mathematics is the biggest time sink in JEE'
        ],
        paa: [
            {
                question: 'Which chapters are most important for JEE Mathematics?',
                answer: 'Calculus (Limits, Differentiation, Integration) carries ~35% weightage, making it the most important. Algebra (Complex Numbers, Probability, Matrices) carries ~30%, and Coordinate Geometry ~20%. Within Calculus, Definite Integration and Application of Derivatives are the highest-value topics.'
            },
            {
                question: 'How to improve JEE Mathematics score quickly?',
                answer: 'Focus on high-weightage, high-scoring chapters first — Definite Integration, Probability, Matrices, and Straight Lines. Solve 15-20 problems daily from PYQs. Get personalized doubt resolution. MindPeak\'s adaptive approach has helped students improve Mathematics scores by 30-40 marks in 3 months.'
            },
            {
                question: 'Is RD Sharma enough for JEE Mathematics?',
                answer: 'RD Sharma builds a foundation but is not sufficient for JEE Main or Advanced. After RD Sharma, progress to Cengage series or Arihant\'s Skills in Mathematics. For JEE Advanced, solve Vikas Gupta and PYQs. MindPeak mentors create a personalized book progression plan.'
            },
            {
                question: 'How many hours should I study Math for JEE?',
                answer: 'Dedicate 2-3 hours daily to Mathematics practice — this means solving problems, not just reading theory. JEE Mathematics rewards consistent daily practice over marathon study sessions. Quality practice with targeted problems is more effective than solving hundreds of easy questions.'
            }
        ],
        faqs: [
            {
                question: 'How does MindPeak teach JEE Mathematics?',
                answer: 'Your dedicated Math mentor teaches through problem-solving, not lectures. Every concept is introduced with examples, then you solve progressively harder problems with real-time guidance. The curriculum adapts weekly — spending more time on chapters where you struggle and accelerating through areas of strength.'
            },
            {
                question: 'Do you teach for both JEE Main and Advanced Math?',
                answer: 'Yes. The Mathematics program covers the complete JEE Main syllabus plus Advanced-level topics like complex Definite Integration, advanced Coordinate Geometry (Conics), and difficult Probability. Your mentor adjusts the difficulty based on your target.'
            },
            {
                question: 'Can MindPeak help if I\'m very weak in Mathematics?',
                answer: 'Absolutely. That\'s actually our strength. Many students join MindPeak after struggling with Mathematics in batch coaching. Your dedicated mentor starts from YOUR current level — building fundamentals systematically before progressing to JEE-level problem solving.'
            },
            {
                question: 'How quickly can I improve in JEE Mathematics?',
                answer: 'With daily 1-on-1 sessions and targeted practice, most students see significant improvement within 2-3 months. MindPeak students typically improve their Mathematics mock scores by 30-40 marks in the first quarter. The key is consistent, personalized daily practice.'
            }
        ],
        links: [
            {
                label: 'JEE Physics Preparation',
                to: '/jee-physics-preparation'
            },
            {
                label: 'JEE Chemistry Preparation',
                to: '/jee-chemistry-preparation'
            },
            {
                label: 'Complete JEE Coaching',
                to: '/jee-coaching'
            },
            {
                label: 'Free Trial Class',
                to: '/free-trial'
            },
            {
                label: 'Online vs Offline JEE',
                to: '/online-vs-offline-jee-coaching'
            }
        ]
    },
    'jee-mock-test-strategy': {
        exam: 'JEE',
        subject: 'Mock Tests',
        slug: 'jee-mock-test-strategy',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
        title: 'JEE Mock Test Strategy — How to Analyze & Improve Scores | MindPeak',
        description: 'Master JEE mock test strategy. Learn how to analyze mistakes, manage time, and improve scores by 50-80 marks. Expert tips from IIT alumni mentors at MindPeak.',
        heroHeading: 'JEE Mock Test Strategy —',
        heroHighlight: 'How Toppers Use Mocks to Score 250+',
        heroParagraph: 'Mock tests are the single most important tool in your JEE preparation — but only if you use them correctly. Most students take mock after mock without proper analysis, making the same mistakes repeatedly. At MindPeak, your mentor personally reviews every mock test with you, identifying not just what went wrong but WHY. This analysis-driven approach typically improves scores by 50-80 marks within 2-3 months.',
        snippetQ: 'How to improve JEE mock test scores?',
        snippetA: 'Improving JEE mock test scores requires systematic analysis after every test: categorize mistakes into conceptual errors, silly mistakes, and time management issues. Spend 2-3 hours analyzing each mock. Focus on converting "almost right" questions and eliminating negative marking patterns. Personalized mentor analysis accelerates improvement significantly.',
        snippetBullets: [
            'Take full-length mocks in exam conditions (3 hours, no breaks)',
            'Analyze every mock for 2-3 hours — categorize each mistake',
            'Track your accuracy per chapter to identify weak areas',
            'Reduce negative marking by developing a skip strategy',
            'Focus on time management — practice attempting easy questions first',
            'Take at least 30 full-length mocks before the actual exam'
        ],
        chapters: [
            {
                name: 'Before the Mock',
                topics: [
                    'Set exam-like conditions (3 hours, no distractions)',
                    'Take at the same time as the actual exam',
                    'Complete the full paper — no early submission',
                    'Simulate CBT interface if possible'
                ]
            },
            {
                name: 'During the Mock',
                topics: [
                    'First pass: attempt all easy questions across subjects',
                    'Second pass: medium-difficulty questions',
                    'Third pass: difficult questions (only if confident)',
                    'Last 15 minutes: review flagged questions',
                    'Never spend more than 3 minutes on a single question'
                ]
            },
            {
                name: 'After the Mock (Analysis)',
                topics: [
                    'Categorize mistakes: conceptual / silly / time-management',
                    'Calculate accuracy rate per subject and chapter',
                    'Identify questions you "knew but got wrong" (silly mistakes)',
                    'Track negative marking pattern',
                    'Create a "mistake journal" with common error patterns'
                ]
            },
            {
                name: 'Improvement Loop',
                topics: [
                    'Focus next week\'s study on weakest chapters from mock',
                    'Re-attempt difficult questions after 3 days',
                    'Set one specific goal per mock (e.g., reduce silly mistakes by 50%)',
                    'Track score trend across 10+ mocks for improvement trajectory'
                ]
            }
        ],
        mistakes: [
            {
                title: 'Taking mocks without analyzing',
                desc: 'The most common mistake. Students take 50 mocks but spend zero time analyzing. Without analysis, mocks are just tests — not learning tools. Analysis is where improvement happens.'
            },
            {
                title: 'Starting mocks too early',
                desc: 'Taking full mocks before completing 70% of the syllabus leads to discouraging scores and incorrect self-assessment. Start with topic-wise tests, then part-tests, then full mocks.'
            },
            {
                title: 'Ignoring negative marking patterns',
                desc: 'Many students lose 20-30 marks to negative marking. If your negative marking exceeds 15% of attempted marks, you need a "skip strategy" — identifying question types to skip.'
            },
            {
                title: 'Changing strategy every mock',
                desc: 'Consistency is key. Use the same time-management strategy for 5+ mocks before evaluating if it works. Changing approach every test prevents any strategy from showing results.'
            }
        ],
        tips: [
            'Maintain a "Mock Test Journal" — log score, time, and key learnings after every mock',
            'Your target should be 30+ mocks before the actual JEE exam',
            'Analyze your subject-wise completion — finish your strongest subject first',
            'Practice CBT (Computer Based Test) interface to build familiarity',
            'After analysis, create a "must-revise" list of concepts for the next mock',
            'Track your percentile trend, not just absolute score'
        ],
        paa: [
            {
                question: 'How many mock tests should I take for JEE?',
                answer: 'Aim for 25-30 full-length mock tests before JEE Main and 15-20 before JEE Advanced. Quality > quantity — each mock should be followed by 2-3 hours of detailed analysis. MindPeak students take weekly mocks with personalized analysis sessions with their mentor.'
            },
            {
                question: 'When should I start taking JEE mock tests?',
                answer: 'Start taking full-length mocks when you\'ve completed at least 70-75% of the syllabus (typically 3-4 months before the exam). Before that, take topic-wise tests and part-tests. MindPeak provides a structured mock test calendar aligned with your preparation timeline.'
            },
            {
                question: 'How to analyze JEE mock test results?',
                answer: 'Categorize every wrong answer into: conceptual error (didn\'t know), silly mistake (knew but careless), time crunch (didn\'t attempt). Calculate chapter-wise accuracy. Create a "mistake journal." Focus next week\'s study on your weakest 3 chapters. MindPeak mentors do this analysis with you 1-on-1.'
            },
            {
                question: 'What is a good mock test score for JEE Main?',
                answer: 'For 250+ in JEE Main, target 200+ consistently in mocks (mocks are typically harder). For 99+ percentile, target 240+ in mocks. Track your 10-mock moving average for a realistic projection. MindPeak provides calibrated mock tests that closely match actual JEE difficulty.'
            }
        ],
        faqs: [
            {
                question: 'Does MindPeak provide mock tests?',
                answer: 'Yes! MindPeak provides weekly full-length mock tests in CBT format for both JEE Main and Advanced. Every mock is followed by a 1-on-1 analysis session with your mentor who reviews your performance, identifies patterns, and adjusts your study plan accordingly.'
            },
            {
                question: 'How is MindPeak\'s mock analysis different from self-study?',
                answer: 'Your mentor identifies patterns you can\'t see yourself — like consistently losing marks in the last 30 minutes (time management) or making sign errors in Calculus (conceptual gap). This personalized analysis is what accelerates improvement from 5-10 marks/month to 20-30 marks/month.'
            },
            {
                question: 'Can mock test analysis really improve my JEE score?',
                answer: 'Absolutely. Systematic mock analysis is the #1 factor that differentiates JEE toppers from average scorers. MindPeak students who follow our analysis protocol typically improve by 50-80 marks over 2-3 months — that\'s the difference between 10K rank and sub-5K rank.'
            }
        ],
        links: [
            {
                label: 'JEE Physics Preparation',
                to: '/jee-physics-preparation'
            },
            {
                label: 'JEE Chemistry Preparation',
                to: '/jee-chemistry-preparation'
            },
            {
                label: 'JEE Mathematics Preparation',
                to: '/jee-mathematics-preparation'
            },
            {
                label: 'Complete JEE Coaching',
                to: '/jee-coaching'
            },
            {
                label: 'Free Trial Class',
                to: '/free-trial'
            }
        ]
    },
    'neet-biology-preparation': {
        exam: 'NEET',
        subject: 'Biology',
        slug: 'neet-biology-preparation',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$microscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Microscope$3e$__["Microscope"],
        title: 'NEET Biology Preparation — Botany & Zoology Strategy | NCERT Mastery | MindPeak',
        description: 'Dominate NEET Biology with personalized coaching. NCERT line-by-line coverage, Botany & Zoology mastery, assertion-reason practice. 50% of NEET marks. Start free!',
        heroHeading: 'NEET Biology Preparation —',
        heroHighlight: 'NCERT Mastery for 320+ in Biology',
        heroParagraph: 'Biology accounts for 360 out of 720 marks in NEET — it is literally half the exam. Yet most batch coaching gives Biology the same time as Physics and Chemistry. At MindPeak, Biology gets 50% of the curriculum focus, matching its weightage. Your dedicated Biology mentor ensures line-by-line NCERT coverage, diagram-based learning, assertion-reason practice, and comprehensive revision of every chapter from Diversity in Living World to Ecology.',
        snippetQ: 'How to score 320+ in NEET Biology?',
        snippetA: 'Scoring 320+ in NEET Biology requires line-by-line NCERT mastery (90% questions from NCERT), regular assertion-reason practice, and comprehensive diagram memorization. Focus on high-weightage chapters like Genetics, Human Physiology, and Plant Physiology. Dedicate 50% of study time to Biology matching its 360/720 marks.',
        snippetBullets: [
            'Read NCERT Biology line-by-line — including diagrams, tables, and footnotes',
            'Genetics (Mendelian + Molecular) is the highest-value chapter — master it thoroughly',
            'Practice assertion-reason and match-the-following questions daily',
            'Create diagram flashcards for all labeled diagrams in NCERT',
            'Revise using the Human Physiology + Plant Physiology chapter pair approach',
            'Solve 20 years of NEET PYQs — many questions repeat conceptually'
        ],
        chapters: [
            {
                name: 'Botany',
                topics: [
                    'Plant Morphology & Anatomy',
                    'Plant Physiology (Photosynthesis, Respiration, Growth)',
                    'Cell Biology (Cell Structure, Division)',
                    'Genetics & Molecular Biology',
                    'Biotechnology & Its Applications',
                    'Plant Kingdom (Classification)',
                    'Ecology & Environmental Biology'
                ]
            },
            {
                name: 'Zoology',
                topics: [
                    'Animal Morphology & Anatomy',
                    'Human Physiology (All Systems)',
                    'Genetics & Evolution',
                    'Animal Kingdom (Classification, Phyla)',
                    'Reproduction (Human + General)',
                    'Developmental Biology',
                    'Human Health & Disease'
                ]
            },
            {
                name: 'NCERT Deep Dive',
                topics: [
                    'Line-by-line reading with mentor',
                    'Diagram-based learning (all labeled diagrams)',
                    'Table memorization (comparison tables)',
                    'Footnote & in-text question coverage',
                    'NCERT Exemplar problem practice',
                    'Previous year NCERT-based questions'
                ]
            }
        ],
        mistakes: [
            {
                title: 'Superficial NCERT reading',
                desc: 'Students "read" NCERT without truly absorbing every detail. NEET tests footnotes, diagram labels, and table entries. MindPeak mentors quiz you on every minute detail to ensure deep retention.'
            },
            {
                title: 'Neglecting Botany for Zoology',
                desc: 'Botany carries equal marks to Zoology but students often find it less interesting. Chapters like Plant Physiology and Plant Kingdom are high-value and frequently tested.'
            },
            {
                title: 'Not practicing assertion-reason',
                desc: 'NEET includes assertion-reason questions that test deeper understanding. Students who practice only MCQs miss out on this question pattern.'
            },
            {
                title: 'Ignoring diagrams',
                desc: 'NEET frequently tests diagram-based questions — heart diagram, nephron, flower parts. Students who skip diagram practice lose 15-20 easy marks.'
            }
        ],
        tips: [
            'Read NCERT Biology as your primary textbook — nothing else needed initially',
            'Create a "diagram bank" — draw every NCERT diagram from memory weekly',
            'Focus on Genetics (both Mendelian and Molecular) — highest weightage chapter',
            'Use comparison tables for similar concepts (arteries vs veins, mitosis vs meiosis)',
            'Practice 50+ MCQs daily from previous year NEET papers',
            'Revise each chapter at least 5 times before the exam'
        ],
        paa: [
            {
                question: 'Is NCERT enough for NEET Biology?',
                answer: 'Yes — NCERT is the primary source for NEET Biology. Approximately 90% of Biology questions come from NCERT or are based on NCERT concepts. However, you need to read NCERT at an extremely detailed level — every line, diagram, table, footnote, and in-text question. NCERT Exemplar is recommended for practice.'
            },
            {
                question: 'Which chapters are most important for NEET Biology?',
                answer: 'Genetics (Mendelian + Molecular Biology) is the single most important topic, carrying 15-20% of Biology marks. Human Physiology, Plant Physiology, and Ecology are next. Focus on these 4 areas for maximum ROI. MindPeak\'s Biology curriculum allocates time based on chapter-wise weightage analysis.'
            },
            {
                question: 'How to memorize Biology for NEET?',
                answer: 'Use active recall and spaced repetition over passive reading. Create flashcards for diagrams, use mnemonics for classifications, and build comparison tables for similar concepts. MindPeak mentors quiz you regularly and use adaptive revision scheduling based on your forgetting curve.'
            },
            {
                question: 'How to score 340+ in NEET Biology?',
                answer: 'Scoring 340+ (95%) requires: (1) 5+ complete NCERT reads with increasing depth, (2) mastery of all diagrams, (3) 3000+ MCQs from PYQs, (4) regular assertion-reason practice, (5) comprehensive revision. MindPeak\'s 1-on-1 Biology sessions systematically achieve this through daily focused practice.'
            }
        ],
        faqs: [
            {
                question: 'How does MindPeak teach NEET Biology?',
                answer: 'MindPeak provides a Biology-first approach with 50% curriculum focus. Your mentor — typically from AIIMS or a top medical college — conducts NCERT line-by-line reads, diagram practice, assertion-reason drills, and comprehensive revision sessions. Every session adapts to your diagnostic performance data.'
            },
            {
                question: 'Do you separate Botany and Zoology preparation?',
                answer: 'Yes! Our NEET Biology curriculum gives dedicated time to both Botany and Zoology. Many students are weaker in Botany, so we ensure balanced preparation. Your mentor tracks chapter-wise accuracy separately for Botany and Zoology to prevent imbalances.'
            },
            {
                question: 'Can I take only Biology coaching?',
                answer: 'Absolutely. If you\'re strong in Physics and Chemistry but need Biology help, we offer Biology-focused plans with dedicated Biology mentors at adjusted pricing. Book a free trial to discuss your specific needs.'
            },
            {
                question: 'How long to complete NEET Biology preparation?',
                answer: 'Complete NEET Biology coverage takes 6-8 months for a thorough first pass, including NCERT mastery, diagram practice, and revision. With MindPeak\'s focused approach, students achieve comprehensive Biology preparation including multiple revision cycles within our 1-year program.'
            }
        ],
        links: [
            {
                label: 'NEET Physics Preparation',
                to: '/neet-physics-preparation'
            },
            {
                label: 'NEET Chemistry Preparation',
                to: '/neet-chemistry-preparation'
            },
            {
                label: 'Complete NEET Coaching',
                to: '/neet-coaching'
            },
            {
                label: 'Free Trial Class',
                to: '/free-trial'
            },
            {
                label: 'All Courses & Pricing',
                to: '/pricing'
            },
            {
                label: 'NEET Coaching in Delhi',
                to: '/neet-coaching-in-delhi'
            }
        ]
    },
    'neet-physics-preparation': {
        exam: 'NEET',
        subject: 'Physics',
        slug: 'neet-physics-preparation',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$atom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Atom$3e$__["Atom"],
        title: 'NEET Physics Preparation — Chapter-Wise Strategy & NCERT Mastery | MindPeak',
        description: 'Score 140+ in NEET Physics with personalized 1-on-1 coaching. Mechanics, Electrodynamics, Optics — NCERT-focused approach with daily practice. Start free trial!',
        heroHeading: 'NEET Physics Preparation —',
        heroHighlight: 'NCERT Mastery for 140+ in Physics',
        heroParagraph: 'Physics is the most feared subject in NEET — but it\'s also the most scoring for students who master the fundamentals. Unlike JEE, NEET Physics rewards NCERT-level conceptual clarity and direct formula application. At MindPeak, your dedicated Physics mentor focuses on building rock-solid NCERT understanding, practicing numerical problems methodically, and eliminating the silly errors that cost 10-15 marks. No advanced problem-solving gymnastics — just clean, exam-ready preparation.',
        snippetQ: 'How to score 140+ in NEET Physics?',
        snippetA: 'Scoring 140+ in NEET Physics requires NCERT mastery (70% questions are NCERT-based), strong formula recall, and daily numerical practice. Focus on Mechanics (30% weightage) and Electrodynamics (20-25%) first. Practice 50+ numericals per chapter and solve 15 years of NEET PYQs. Personalized coaching identifies and fixes your weak chapters faster than self-study.',
        snippetBullets: [
            'NCERT is your PRIMARY textbook — read it 3-4 times with increasing depth',
            'Mechanics carries ~30% weightage — master it thoroughly',
            'Practice formula-based numericals daily (50+ per chapter)',
            'Electrostatics + Current Electricity = consistent 20-25% of Physics',
            'Solve 15 years of NEET Physics PYQs — patterns repeat',
            'Focus on unit conversion — most silly errors come from wrong units'
        ],
        chapters: [
            {
                name: 'Mechanics',
                topics: [
                    'Kinematics (1D & 2D)',
                    'Laws of Motion',
                    'Work, Energy & Power',
                    'Gravitation',
                    'Properties of Matter (Elasticity, Viscosity, Surface Tension)',
                    'Rotational Motion & Moment of Inertia'
                ]
            },
            {
                name: 'Electrodynamics',
                topics: [
                    'Electrostatics (Coulomb\'s Law, Capacitors)',
                    'Current Electricity (Kirchhoff, Wheatstone)',
                    'Magnetic Effects of Current',
                    'EMI & Alternating Current',
                    'Electromagnetic Waves'
                ]
            },
            {
                name: 'Optics & Waves',
                topics: [
                    'Ray Optics (Mirrors, Lenses, Prisms)',
                    'Wave Optics (YDSE, Diffraction)',
                    'Mechanical Waves & Sound',
                    'Doppler Effect'
                ]
            },
            {
                name: 'Modern Physics & Thermal',
                topics: [
                    'Dual Nature of Radiation',
                    'Atoms & Nuclei',
                    'Semiconductor Devices',
                    'Thermodynamics',
                    'Thermal Properties of Matter',
                    'Kinetic Theory of Gases'
                ]
            }
        ],
        mistakes: [
            {
                title: 'Studying Physics like JEE',
                desc: 'NEET Physics is simpler than JEE. Students waste time on JEE-Advanced-level problems that never appear in NEET. Stick to NCERT + NCERT Exemplar level for maximum ROI.'
            },
            {
                title: 'Skipping unit conversion practice',
                desc: 'The #1 source of silly errors in NEET Physics. Always practice converting CGS to SI units. MindPeak mentors drill unit-checking habits into every session.'
            },
            {
                title: 'Ignoring Modern Physics',
                desc: 'Modern Physics (Atoms, Nuclei, Semiconductors) is the easiest scoring section in NEET Physics. Students skip it thinking it\'s "too theoretical" but it gives direct formula-based questions.'
            },
            {
                title: 'Not memorizing formula list systematically',
                desc: 'Unlike Biology, Physics requires formula recall under time pressure. Create chapter-wise formula sheets and revise them weekly. MindPeak provides ready-made formula decks.'
            }
        ],
        tips: [
            'Read NCERT Physics carefully — focus on solved examples and in-text questions',
            'Create a master formula sheet organized by chapter for daily revision',
            'Practice 10 numericals daily from different chapters for variety',
            'Focus on units — always check if your answer has correct dimensions',
            'Master ray optics sign convention — it eliminates most optics errors',
            'Solve NCERT Exemplar after completing each chapter from NCERT'
        ],
        paa: [
            {
                question: 'Is NCERT enough for NEET Physics?',
                answer: 'NCERT covers about 70% of NEET Physics directly. For the remaining 30%, you need NCERT Exemplar and 15 years of PYQs. Unlike JEE, NEET doesn\'t require advanced problem-solving books. MindPeak\'s approach ensures complete NCERT mastery first, then targeted practice from PYQs.'
            },
            {
                question: 'Which chapters are most important for NEET Physics?',
                answer: 'Mechanics (Kinematics + Laws of Motion + Work-Energy) carries ~30%, Electrostatics + Current Electricity ~20-25%, and Optics ~12-15%. Modern Physics is the easiest section. Focus on these four areas for 80%+ of NEET Physics marks.'
            },
            {
                question: 'How to improve Physics for NEET in 3 months?',
                answer: 'Focus exclusively on NCERT + high-weightage chapters: Mechanics, Electrostatics, Current Electricity, and Optics. Solve 50 numericals daily. Take weekly topic tests. MindPeak\'s crash course provides daily 1-on-1 Physics sessions targeting your specific weak chapters.'
            },
            {
                question: 'Why is NEET Physics considered difficult?',
                answer: 'NEET Physics requires numerical problem-solving under time pressure, which Biology-oriented students find challenging. The key is consistent daily practice and formula familiarity — not advanced concepts. MindPeak mentors build this muscle through daily numerical drills.'
            }
        ],
        faqs: [
            {
                question: 'How does MindPeak teach NEET Physics?',
                answer: 'Your dedicated Physics mentor focuses on NCERT mastery + numerical practice. Daily short sessions cover concepts, solve NCERT examples, then progress to PYQ-level numericals. Your study plan adapts weekly based on topic-wise accuracy data.'
            },
            {
                question: 'Can I take only NEET Physics coaching?',
                answer: 'Yes! If you\'re strong in Biology and Chemistry but need Physics help, MindPeak offers subject-specific coaching with a dedicated Physics mentor at adjusted pricing.'
            },
            {
                question: 'How many months to prepare for NEET Physics?',
                answer: 'Complete NEET Physics preparation takes 5-7 months for a focused student. With MindPeak\'s 1-on-1 approach, students with some foundation can see significant improvement in 2-3 months.'
            },
            {
                question: 'Do you cover both Class 11 and 12 Physics for NEET?',
                answer: 'Yes. Our curriculum covers the complete NEET Physics syllabus from both Class 11 (Mechanics, Thermodynamics, Waves) and Class 12 (Electrostatics, Optics, Modern Physics). Class 12 topics carry slightly higher weightage (~55%).'
            }
        ],
        links: [
            {
                label: 'NEET Biology Preparation',
                to: '/neet-biology-preparation'
            },
            {
                label: 'NEET Chemistry Preparation',
                to: '/neet-chemistry-preparation'
            },
            {
                label: 'Complete NEET Coaching',
                to: '/neet-coaching'
            },
            {
                label: 'Free Trial Class',
                to: '/free-trial'
            },
            {
                label: 'NEET Rank Predictor',
                to: '/neet-rank-predictor'
            },
            {
                label: 'All Courses & Pricing',
                to: '/pricing'
            }
        ]
    },
    'neet-chemistry-preparation': {
        exam: 'NEET',
        subject: 'Chemistry',
        slug: 'neet-chemistry-preparation',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"],
        title: 'NEET Chemistry Preparation — Organic, Inorganic & Physical | NCERT Focus | MindPeak',
        description: 'Score 140+ in NEET Chemistry with 1-on-1 coaching. Master Organic reactions, Inorganic NCERT facts, and Physical numericals. Start your free trial today!',
        heroHeading: 'NEET Chemistry Preparation —',
        heroHighlight: 'NCERT Mastery for 140+ in Chemistry',
        heroParagraph: 'Chemistry is the highest-scoring subject in NEET for students who prepare smartly. It\'s equally split between Organic, Inorganic, and Physical Chemistry — each requiring a different study approach. At MindPeak, your dedicated Chemistry mentor ensures balanced preparation across all three branches. Inorganic is NCERT-memorization driven, Organic requires reaction mechanism understanding, and Physical demands numerical practice. Your personalized study plan adapts to which branch needs the most attention.',
        snippetQ: 'How to score 140+ in NEET Chemistry?',
        snippetA: 'Scoring 140+ in NEET Chemistry requires balanced preparation across all three branches: master NCERT for Inorganic (direct memory-based questions), understand reaction mechanisms for Organic, and practice numericals for Physical Chemistry. Solve NCERT Exemplar + 15 years PYQs. Personalized coaching ensures no branch is neglected.',
        snippetBullets: [
            'Inorganic Chemistry is 100% NCERT — read every line, table, and exception',
            'Organic Chemistry: master Named Reactions + GOC + functional group interconversions',
            'Physical Chemistry: practice 50+ numericals per chapter (formula-heavy)',
            'NEET Chemistry is equally split: ~33% each for Physical, Organic, Inorganic',
            'Solve 15 years of NEET Chemistry PYQs — many questions repeat',
            'Create separate revision sheets for each branch'
        ],
        chapters: [
            {
                name: 'Physical Chemistry',
                topics: [
                    'Some Basic Concepts',
                    'Atomic Structure',
                    'Chemical Bonding',
                    'Thermodynamics',
                    'Equilibrium',
                    'Redox & Electrochemistry',
                    'Chemical Kinetics',
                    'Solutions',
                    'Surface Chemistry'
                ]
            },
            {
                name: 'Organic Chemistry',
                topics: [
                    'Basic Organic Chemistry (GOC)',
                    'Haloalkanes & Haloarenes',
                    'Alcohols, Phenols, Ethers',
                    'Carbonyl Compounds',
                    'Amines',
                    'Biomolecules & Polymers',
                    'Chemistry in Everyday Life'
                ]
            },
            {
                name: 'Inorganic Chemistry',
                topics: [
                    'Periodic Classification',
                    's-Block Elements',
                    'p-Block Elements (Groups 13-18)',
                    'd & f-Block Elements',
                    'Coordination Compounds',
                    'Metallurgy',
                    'Salt Analysis & Hydrogen',
                    'Environmental Chemistry'
                ]
            }
        ],
        mistakes: [
            {
                title: 'Neglecting Inorganic Chemistry',
                desc: 'Students find Inorganic "boring" and skip it. But it\'s the easiest section — direct NCERT facts. Every line of NCERT Inorganic can be a question. MindPeak mentors make Inorganic revision systematic and engaging.'
            },
            {
                title: 'Learning Organic without mechanisms',
                desc: 'Rote-memorizing Organic reactions without understanding WHY they happen leads to confusion in twisted questions. Understanding mechanisms (SN1/SN2, electrophilic addition) makes everything logical.'
            },
            {
                title: 'Skipping Physical Chemistry numericals',
                desc: 'Physical Chemistry is formula-based and scoring, but students skip practice because it feels like "Maths." Daily numerical practice of 10-15 problems builds speed and confidence.'
            },
            {
                title: 'Using non-NCERT sources too early',
                desc: 'For NEET Chemistry, NCERT should be completed 3-4 times before touching any reference book. 80%+ of NEET Chemistry questions come from NCERT directly.'
            }
        ],
        tips: [
            'Read NCERT Chemistry line-by-line — especially tables, exceptions, and side notes',
            'For Organic Chemistry, practice reaction flowcharts daily',
            'Create an "exceptions file" for Inorganic — diagonal relationships, anomalous properties',
            'Physical Chemistry: memorize formulas + practice 50 numericals per chapter',
            'Color-code your notes: Physical = Blue, Organic = Green, Inorganic = Red',
            'Solve NCERT Exemplar after completing each NCERT chapter'
        ],
        paa: [
            {
                question: 'Is NCERT enough for NEET Chemistry?',
                answer: 'Yes, NCERT covers 80-85% of NEET Chemistry. For Inorganic, NCERT is 100% sufficient. For Organic and Physical, supplement with NCERT Exemplar and 15 years of PYQs. MindPeak mentors ensure you extract every possible question from NCERT before moving to any additional resources.'
            },
            {
                question: 'Which branch of Chemistry is most important for NEET?',
                answer: 'All three are equally important (~33% each). However, Inorganic is the easiest to score in (direct NCERT), Physical is the most scoring per hour of practice (formula-based), and Organic requires the most conceptual understanding. MindPeak personalizes the time split based on your strengths.'
            },
            {
                question: 'How to memorize Inorganic Chemistry for NEET?',
                answer: 'Use active recall with flashcards, create comparison tables (s-block vs p-block properties), learn exceptions as stories/mnemonics, and revise every 3-4 days using spaced repetition. MindPeak mentors quiz you regularly on Inorganic facts to build long-term memory.'
            },
            {
                question: 'How to improve NEET Chemistry in 3 months?',
                answer: 'Focus on Inorganic (fastest to improve — pure NCERT memory), then Physical numericals (formula practice), then Organic reactions. Solve 15 PYQs daily. MindPeak\'s crash course provides daily targeted Chemistry sessions for rapid improvement.'
            }
        ],
        faqs: [
            {
                question: 'How does MindPeak teach NEET Chemistry?',
                answer: 'Your dedicated Chemistry mentor creates a balanced plan across Physical, Organic, and Inorganic. NCERT line-by-line coverage forms the foundation, followed by NCERT Exemplar practice and PYQ drilling. Daily sessions adapt based on which branch needs more attention.'
            },
            {
                question: 'Do you teach all three branches of Chemistry?',
                answer: 'Yes! Our NEET Chemistry curriculum covers Physical, Organic, and Inorganic Chemistry comprehensively. Your mentor tracks branch-wise accuracy and adjusts study time to prevent imbalances — a common problem in self-study.'
            },
            {
                question: 'Can I take only Chemistry coaching at MindPeak?',
                answer: 'Absolutely. If you need focused Chemistry help, we offer subject-specific coaching with a dedicated Chemistry mentor at adjusted pricing. Book a free trial to discuss your needs.'
            },
            {
                question: 'How long to complete NEET Chemistry preparation?',
                answer: 'Complete NEET Chemistry preparation takes 5-7 months with consistent effort. Physical Chemistry requires the most practice time. With MindPeak\'s 1-on-1 sessions, students with some foundation see major improvement within 2-3 months.'
            }
        ],
        links: [
            {
                label: 'NEET Biology Preparation',
                to: '/neet-biology-preparation'
            },
            {
                label: 'NEET Physics Preparation',
                to: '/neet-physics-preparation'
            },
            {
                label: 'Complete NEET Coaching',
                to: '/neet-coaching'
            },
            {
                label: 'Free Trial Class',
                to: '/free-trial'
            },
            {
                label: 'NEET Rank Predictor',
                to: '/neet-rank-predictor'
            },
            {
                label: 'All Courses & Pricing',
                to: '/pricing'
            }
        ]
    }
};
/* ═══════════════════════════════════════════════════════════
   Reusable subject-cluster page component
   ═══════════════════════════════════════════════════════════ */ const SubjectPage = ()=>{
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const slug = pathname.replace(/^\//, '');
    const data = SUBJECTS[slug];
    const { openDemoModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DemoBookingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDemoModal"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SubjectPage.useEffect": ()=>{
            window.scrollTo(0, 0);
        }
    }["SubjectPage.useEffect"], [
        slug
    ]);
    if (!data) return null; // fallback handled by router
    const Icon = data.icon;
    /* schemas */ const courseSchema = {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: data.title,
        description: data.description,
        provider: {
            '@type': 'EducationalOrganization',
            name: 'MindPeak Institute',
            url: 'https://mindpeakinstitute.com'
        },
        offers: {
            '@type': 'Offer',
            price: '100000',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
        },
        hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'online'
        }
    };
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://mindpeakinstitute.com'
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: `${data.exam} Coaching`,
                item: `https://mindpeakinstitute.com/${data.exam.toLowerCase()}-coaching`
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: `${data.subject} Preparation`,
                item: `https://mindpeakinstitute.com/${data.slug}`
            }
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SEOHead$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEOHead"], {
                title: data.title,
                description: data.description,
                jsonLd: [
                    courseSchema,
                    breadcrumbSchema,
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageFAQ$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildFAQSchema"])([
                        ...data.faqs,
                        ...data.paa
                    ])
                ]
            }, void 0, false, {
                fileName: "[project]/src/views/SubjectPage.tsx",
                lineNumber: 528,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navbar"], {}, void 0, false, {
                fileName: "[project]/src/views/SubjectPage.tsx",
                lineNumber: 533,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "bg-background min-h-screen pt-20 sm:pt-24 overflow-x-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        "aria-label": "Breadcrumb",
                        className: "max-w-5xl mx-auto px-4 sm:px-6 py-3 sm:py-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                            className: "flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-muted-foreground flex-wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                        to: "/",
                                        className: "hover:text-primary transition-colors",
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/SubjectPage.tsx",
                                        lineNumber: 539,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/views/SubjectPage.tsx",
                                    lineNumber: 539,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "/"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/SubjectPage.tsx",
                                    lineNumber: 540,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                        to: `/${data.exam.toLowerCase()}-coaching`,
                                        className: "hover:text-primary transition-colors",
                                        children: [
                                            data.exam,
                                            " Coaching"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/SubjectPage.tsx",
                                        lineNumber: 541,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/views/SubjectPage.tsx",
                                    lineNumber: 541,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "/"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/SubjectPage.tsx",
                                    lineNumber: 542,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "text-foreground",
                                    children: data.subject
                                }, void 0, false, {
                                    fileName: "[project]/src/views/SubjectPage.tsx",
                                    lineNumber: 543,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/SubjectPage.tsx",
                            lineNumber: 538,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/SubjectPage.tsx",
                        lineNumber: 537,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "max-w-5xl mx-auto px-4 sm:px-6 pb-8 sm:pb-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.6
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FreshnessBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FreshnessBadge"], {
                                    lastUpdated: "2026-02-18",
                                    verifiedFor: `${data.exam} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]}`
                                }, void 0, false, {
                                    fileName: "[project]/src/views/SubjectPage.tsx",
                                    lineNumber: 550,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-4 sm:mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: logo,
                                            alt: "MindPeak Institute",
                                            className: "w-10 h-10 sm:w-14 sm:h-14 rounded-full flex-shrink-0",
                                            width: 56,
                                            height: 56
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/SubjectPage.tsx",
                                            lineNumber: 553,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-primary text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-semibold",
                                                    children: "MindPeak Institute"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/SubjectPage.tsx",
                                                    lineNumber: 555,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground text-xs sm:text-sm truncate",
                                                    children: [
                                                        data.exam,
                                                        " ",
                                                        data.subject,
                                                        " — 1-on-1 Coaching"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/SubjectPage.tsx",
                                                    lineNumber: 556,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/SubjectPage.tsx",
                                            lineNumber: 554,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/SubjectPage.tsx",
                                    lineNumber: 552,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-display font-black text-foreground mb-4 sm:mb-6 text-[1.5rem] leading-tight sm:text-3xl md:text-4xl lg:text-[3.5rem] lg:leading-[1.1]",
                                    children: [
                                        data.heroHeading,
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gradient-gold",
                                            children: data.heroHighlight
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/SubjectPage.tsx",
                                            lineNumber: 562,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/SubjectPage.tsx",
                                    lineNumber: 560,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mb-6 sm:mb-8",
                                    children: data.heroParagraph
                                }, void 0, false, {
                                    fileName: "[project]/src/views/SubjectPage.tsx",
                                    lineNumber: 565,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-3 sm:gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: openDemoModal,
                                            className: "w-full sm:w-auto px-6 sm:px-10 py-3.5 sm:py-4 bg-primary text-primary-foreground font-display font-bold text-xs sm:text-sm uppercase tracking-[0.1em] sm:tracking-[0.15em] shadow-gold-glow hover:scale-105 transition-transform text-center",
                                            children: "Start Free Trial →"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/SubjectPage.tsx",
                                            lineNumber: 568,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "tel:+918219457704",
                                            className: "w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 border border-border text-foreground font-display text-xs sm:text-sm uppercase tracking-[0.1em] sm:tracking-[0.15em] hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/SubjectPage.tsx",
                                                    lineNumber: 572,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " Call +91 82194 57704"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/SubjectPage.tsx",
                                            lineNumber: 571,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/SubjectPage.tsx",
                                    lineNumber: 567,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/SubjectPage.tsx",
                            lineNumber: 549,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/SubjectPage.tsx",
                        lineNumber: 548,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 sm:px-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeaturedSnippet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FeaturedSnippet"], {
                            question: data.snippetQ,
                            answer: data.snippetA,
                            bullets: data.snippetBullets
                        }, void 0, false, {
                            fileName: "[project]/src/views/SubjectPage.tsx",
                            lineNumber: 580,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/SubjectPage.tsx",
                        lineNumber: 579,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                            className: "w-7 h-7 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/SubjectPage.tsx",
                                            lineNumber: 587,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "font-display font-bold text-foreground text-2xl md:text-3xl",
                                            children: [
                                                data.exam,
                                                " ",
                                                data.subject,
                                                ' ',
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gradient-gold",
                                                    children: "Chapter-Wise Syllabus"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/SubjectPage.tsx",
                                                    lineNumber: 590,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/SubjectPage.tsx",
                                            lineNumber: 588,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/SubjectPage.tsx",
                                    lineNumber: 586,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground text-base leading-relaxed max-w-3xl mb-10",
                                    children: [
                                        "Complete ",
                                        data.subject,
                                        " syllabus covered in our personalized ",
                                        data.exam,
                                        " coaching program. Each topic is taught with conceptual depth and exam-pattern practice."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/SubjectPage.tsx",
                                    lineNumber: 593,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `grid gap-6 ${data.chapters.length >= 4 ? 'md:grid-cols-2' : 'md:grid-cols-' + data.chapters.length}`,
                                    children: data.chapters.map((ch, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                                delay: i * 0.08
                                            },
                                            className: "rounded-xl border border-border bg-card p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-display font-bold text-foreground text-lg mb-4 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                            className: "w-5 h-5 text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/SubjectPage.tsx",
                                                            lineNumber: 608,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " ",
                                                        ch.name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/SubjectPage.tsx",
                                                    lineNumber: 607,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-2",
                                                    children: ch.topics.map((t, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "flex items-start gap-2 text-sm text-muted-foreground",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                    className: "w-4 h-4 text-primary flex-shrink-0 mt-0.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/SubjectPage.tsx",
                                                                    lineNumber: 613,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " ",
                                                                t
                                                            ]
                                                        }, j, true, {
                                                            fileName: "[project]/src/views/SubjectPage.tsx",
                                                            lineNumber: 612,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/SubjectPage.tsx",
                                                    lineNumber: 610,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/views/SubjectPage.tsx",
                                            lineNumber: 599,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/views/SubjectPage.tsx",
                                    lineNumber: 597,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/SubjectPage.tsx",
                            lineNumber: 585,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/SubjectPage.tsx",
                        lineNumber: 584,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SubjectChapterLinks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubjectChapterLinks"], {
                        exam: data.exam,
                        subject: data.subject
                    }, void 0, false, {
                        fileName: "[project]/src/views/SubjectPage.tsx",
                        lineNumber: 624,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-secondary/30 border-y border-border py-10 sm:py-16 px-4 sm:px-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-5xl mx-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-display font-bold text-foreground text-2xl md:text-3xl mb-4",
                                        children: [
                                            "Common ",
                                            data.subject,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gradient-gold",
                                                children: "Mistakes to Avoid"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/SubjectPage.tsx",
                                                lineNumber: 631,
                                                columnNumber: 39
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/SubjectPage.tsx",
                                        lineNumber: 630,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground text-base max-w-3xl mb-10",
                                        children: [
                                            "These are the mistakes MindPeak mentors see most frequently among ",
                                            data.exam,
                                            " aspirants preparing ",
                                            data.subject,
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/SubjectPage.tsx",
                                        lineNumber: 633,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 gap-6",
                                        children: data.mistakes.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                                    delay: i * 0.08
                                                },
                                                className: "rounded-xl border border-destructive/30 bg-destructive/5 p-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-display font-bold text-foreground text-base mb-2",
                                                        children: m.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/SubjectPage.tsx",
                                                        lineNumber: 646,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-muted-foreground text-sm leading-relaxed",
                                                        children: m.desc
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/SubjectPage.tsx",
                                                        lineNumber: 647,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/src/views/SubjectPage.tsx",
                                                lineNumber: 638,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/SubjectPage.tsx",
                                        lineNumber: 636,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/SubjectPage.tsx",
                                lineNumber: 629,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/views/SubjectPage.tsx",
                            lineNumber: 628,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/SubjectPage.tsx",
                        lineNumber: 627,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                            className: "w-7 h-7 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/SubjectPage.tsx",
                                            lineNumber: 659,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "font-display font-bold text-foreground text-2xl md:text-3xl",
                                            children: [
                                                "Expert ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gradient-gold",
                                                    children: [
                                                        data.subject,
                                                        " Study Tips"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/SubjectPage.tsx",
                                                    lineNumber: 661,
                                                    columnNumber: 24
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/SubjectPage.tsx",
                                            lineNumber: 660,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/SubjectPage.tsx",
                                    lineNumber: 658,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground text-base max-w-3xl mb-8",
                                    children: "Proven tips from our IIT/AIIMS alumni mentors who have guided 500+ students."
                                }, void 0, false, {
                                    fileName: "[project]/src/views/SubjectPage.tsx",
                                    lineNumber: 664,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-2 gap-4",
                                    children: data.tips.map((tip, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                x: -10
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                x: 0
                                            },
                                            viewport: {
                                                once: true
                                            },
                                            transition: {
                                                delay: i * 0.06
                                            },
                                            className: "flex items-start gap-3 rounded-lg border border-border bg-card p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                    className: "w-4 h-4 text-primary flex-shrink-0 mt-0.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/SubjectPage.tsx",
                                                    lineNumber: 677,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground text-sm",
                                                    children: tip
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/SubjectPage.tsx",
                                                    lineNumber: 678,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/views/SubjectPage.tsx",
                                            lineNumber: 669,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/views/SubjectPage.tsx",
                                    lineNumber: 667,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/SubjectPage.tsx",
                            lineNumber: 657,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/SubjectPage.tsx",
                        lineNumber: 656,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PeopleAlsoAsk$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PeopleAlsoAsk"], {
                        questions: data.paa,
                        heading: `People Also Ask About ${data.exam} ${data.subject}`
                    }, void 0, false, {
                        fileName: "[project]/src/views/SubjectPage.tsx",
                        lineNumber: 686,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-card/30 border-y border-border py-8 sm:py-12 px-4 sm:px-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-5xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-display font-bold text-foreground text-lg mb-6",
                                    children: "Explore More"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/SubjectPage.tsx",
                                    lineNumber: 691,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-3",
                                    children: data.links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                            to: l.to,
                                            className: "px-5 py-3 rounded-lg bg-card border border-border text-foreground text-sm hover:border-primary/40 transition-colors flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "w-4 h-4 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/SubjectPage.tsx",
                                                    lineNumber: 695,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " ",
                                                l.label
                                            ]
                                        }, l.to, true, {
                                            fileName: "[project]/src/views/SubjectPage.tsx",
                                            lineNumber: 694,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/views/SubjectPage.tsx",
                                    lineNumber: 692,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/SubjectPage.tsx",
                            lineNumber: 690,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/SubjectPage.tsx",
                        lineNumber: 689,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageFAQ$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageFAQ"], {
                        items: data.faqs,
                        heading: `${data.exam} ${data.subject}`,
                        highlight: "FAQs"
                    }, void 0, false, {
                        fileName: "[project]/src/views/SubjectPage.tsx",
                        lineNumber: 703,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-primary/10 border-y border-primary/20 py-10 sm:py-16 px-4 sm:px-6 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl mb-4",
                                    children: [
                                        "Master ",
                                        data.exam,
                                        " ",
                                        data.subject,
                                        " with ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gradient-gold",
                                            children: "1-on-1 Coaching"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/SubjectPage.tsx",
                                            lineNumber: 709,
                                            columnNumber: 54
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/SubjectPage.tsx",
                                    lineNumber: 708,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto",
                                    children: [
                                        "Get a dedicated ",
                                        data.subject,
                                        " mentor, adaptive curriculum, and daily live sessions. Start your free trial today — zero commitment."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/SubjectPage.tsx",
                                    lineNumber: 711,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: openDemoModal,
                                    className: "w-full sm:w-auto px-8 sm:px-14 py-3.5 sm:py-4 bg-primary text-primary-foreground font-display font-bold text-xs sm:text-sm uppercase tracking-[0.1em] sm:tracking-[0.15em] shadow-gold-glow hover:scale-105 transition-transform",
                                    children: [
                                        "Book Free ",
                                        data.subject,
                                        " Trial →"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/SubjectPage.tsx",
                                    lineNumber: 714,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/SubjectPage.tsx",
                            lineNumber: 707,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/SubjectPage.tsx",
                        lineNumber: 706,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SubjectChapterLinks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChapterFooterGrid"], {
                        exam: data.exam,
                        subject: data.subject
                    }, void 0, false, {
                        fileName: "[project]/src/views/SubjectPage.tsx",
                        lineNumber: 721,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageFooter"], {
                        extra: `${data.exam} ${data.subject} Preparation.`
                    }, void 0, false, {
                        fileName: "[project]/src/views/SubjectPage.tsx",
                        lineNumber: 723,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/SubjectPage.tsx",
                lineNumber: 535,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(SubjectPage, "o9pU1hW7aZZF3T/GAT71gF8zPrk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DemoBookingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDemoModal"]
    ];
});
_c = SubjectPage;
const __TURBOPACK__default__export__ = SubjectPage;
const SUBJECT_SLUGS = Object.keys(SUBJECTS);
_c1 = SUBJECT_SLUGS;
var _c, _c1;
__turbopack_context__.k.register(_c, "SubjectPage");
__turbopack_context__.k.register(_c1, "SUBJECT_SLUGS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Navigate.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navigate",
    ()=>Navigate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Navigate({ to, replace = false }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navigate.useEffect": ()=>{
            if (replace) {
                router.replace(to);
            } else {
                router.push(to);
            }
        }
    }["Navigate.useEffect"], [
        to,
        replace,
        router
    ]);
    return null;
}
_s(Navigate, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Navigate;
var _c;
__turbopack_context__.k.register(_c, "Navigate");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/views/FormulaSheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FORMULA_SLUGS",
    ()=>FORMULA_SLUGS,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RouterLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navigate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navigate.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/examYears.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SEOHead$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SEOHead.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PageFooter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DemoBookingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DemoBookingModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageFAQ$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PageFAQ.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RelatedPages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RelatedPages.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
const formulaSheets = [
    {
        slug: 'jee-physics-formulas',
        exam: 'JEE',
        subject: 'Physics',
        title: `JEE Physics Formula Sheet ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]} — All Chapters PDF Download | MindPeak`,
        description: 'Download the complete JEE Physics formula sheet PDF — all chapters, all formulas. Master Mechanics, Electrodynamics, Optics, Thermodynamics & Modern Physics.',
        heroHeading: 'JEE Physics',
        heroHighlight: 'Formula Sheet',
        heroParagraph: 'Complete collection of all important JEE Physics formulas organized chapter-wise. Preview below and download the full PDF.',
        chapters: [
            {
                name: 'Mechanics',
                formulas: [
                    {
                        name: 'Newton\'s 2nd Law',
                        expression: 'F = ma'
                    },
                    {
                        name: 'Work-Energy',
                        expression: 'W = ΔKE = ½mv² − ½mu²'
                    },
                    {
                        name: 'Gravitational PE',
                        expression: 'U = −GMm/r'
                    },
                    {
                        name: 'SHM Period',
                        expression: 'T = 2π√(m/k)'
                    },
                    {
                        name: 'Moment of Inertia (Disc)',
                        expression: 'I = ½MR²'
                    },
                    {
                        name: 'Angular Momentum',
                        expression: 'L = Iω = mvr',
                        note: 'Conserved when τ_net = 0'
                    }
                ]
            },
            {
                name: 'Electrostatics & Current',
                formulas: [
                    {
                        name: 'Coulomb\'s Law',
                        expression: 'F = kq₁q₂/r²'
                    },
                    {
                        name: 'Electric Field',
                        expression: 'E = kQ/r²'
                    },
                    {
                        name: 'Gauss\'s Law',
                        expression: 'Φ = Q_enc/ε₀'
                    },
                    {
                        name: 'Ohm\'s Law',
                        expression: 'V = IR'
                    },
                    {
                        name: 'Power',
                        expression: 'P = VI = I²R = V²/R'
                    },
                    {
                        name: 'Capacitance',
                        expression: 'C = Q/V = ε₀A/d',
                        note: 'Parallel plate'
                    }
                ]
            },
            {
                name: 'Magnetism & EMI',
                formulas: [
                    {
                        name: 'Biot-Savart',
                        expression: 'dB = (μ₀/4π)(Idl × r̂)/r²'
                    },
                    {
                        name: 'Faraday\'s Law',
                        expression: 'EMF = −dΦ/dt'
                    },
                    {
                        name: 'Impedance (RLC)',
                        expression: 'Z = √(R² + (XL − XC)²)'
                    },
                    {
                        name: 'Self Inductance',
                        expression: 'V = −L(dI/dt)'
                    }
                ]
            },
            {
                name: 'Optics',
                formulas: [
                    {
                        name: 'Snell\'s Law',
                        expression: 'n₁ sin θ₁ = n₂ sin θ₂'
                    },
                    {
                        name: 'Mirror Formula',
                        expression: '1/v + 1/u = 1/f'
                    },
                    {
                        name: 'Lens Formula',
                        expression: '1/v − 1/u = 1/f'
                    },
                    {
                        name: 'YDSE Fringe Width',
                        expression: 'β = λD/d'
                    }
                ]
            },
            {
                name: 'Modern Physics',
                formulas: [
                    {
                        name: 'Photoelectric',
                        expression: 'KE_max = hν − φ'
                    },
                    {
                        name: 'de Broglie',
                        expression: 'λ = h/mv'
                    },
                    {
                        name: 'Bohr Energy',
                        expression: 'Eₙ = −13.6Z²/n² eV'
                    },
                    {
                        name: 'Half-Life',
                        expression: 't½ = 0.693/λ'
                    }
                ]
            }
        ],
        faqs: [
            {
                q: 'Is this JEE Physics formula sheet sufficient for JEE Main?',
                a: 'Yes — it covers all formulas from NCERT and standard reference books. However, understanding derivations and applications is equally important. MindPeak\'s 1-on-1 coaching ensures you can apply every formula in exam conditions.'
            },
            {
                q: 'How to use formula sheets effectively for JEE revision?',
                a: 'Revise the formula sheet every 3-4 days. Don\'t just read — test yourself by covering the formula and recalling it. Practice 5 problems per formula to build application skills. Our mentors create personalised revision schedules.'
            }
        ]
    },
    {
        slug: 'jee-chemistry-formulas',
        exam: 'JEE',
        subject: 'Chemistry',
        title: `JEE Chemistry Formula Sheet ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]} — Physical, Organic & Inorganic | MindPeak`,
        description: 'Download the complete JEE Chemistry formula sheet — Physical Chemistry equations, Organic named reactions, Inorganic trends. Free PDF from MindPeak Institute.',
        heroHeading: 'JEE Chemistry',
        heroHighlight: 'Formula Sheet',
        heroParagraph: 'All important JEE Chemistry formulas — Physical Chemistry equations, Organic reaction mechanisms, and Inorganic Chemistry trends in one place.',
        chapters: [
            {
                name: 'Physical Chemistry',
                formulas: [
                    {
                        name: 'Ideal Gas',
                        expression: 'PV = nRT'
                    },
                    {
                        name: 'Gibbs Free Energy',
                        expression: 'ΔG = ΔH − TΔS'
                    },
                    {
                        name: 'Nernst Equation',
                        expression: 'E = E° − (0.0592/n)log Q',
                        note: 'At 25°C'
                    },
                    {
                        name: 'First Order Rate',
                        expression: 'k = (2.303/t)log(a/(a−x))'
                    },
                    {
                        name: 'pH',
                        expression: 'pH = −log[H⁺]'
                    },
                    {
                        name: 'Raoult\'s Law',
                        expression: 'P = P°·x',
                        note: 'For ideal solution'
                    }
                ]
            },
            {
                name: 'Organic Chemistry',
                formulas: [
                    {
                        name: 'Degree of Unsaturation',
                        expression: 'DoU = (2C + 2 + N − H − X)/2'
                    },
                    {
                        name: 'Markovnikov\'s Rule',
                        expression: 'H adds to C with more H atoms'
                    },
                    {
                        name: 'SN1 Rate Order',
                        expression: '3° > 2° > 1° > methyl'
                    },
                    {
                        name: 'SN2 Rate Order',
                        expression: 'methyl > 1° > 2° > 3°',
                        note: 'Inversion'
                    },
                    {
                        name: 'Acidity Order',
                        expression: 'More stable conjugate base = stronger acid'
                    }
                ]
            },
            {
                name: 'Inorganic Chemistry',
                formulas: [
                    {
                        name: 'Magnetic Moment',
                        expression: 'μ = √(n(n+2)) BM'
                    },
                    {
                        name: 'Crystal Field Splitting',
                        expression: 'Δ_oct > Δ_tet (Δ_tet = 4/9 Δ_oct)'
                    },
                    {
                        name: 'EAN',
                        expression: 'EAN = Z − OS + 2(CN)'
                    },
                    {
                        name: 'Lattice Energy',
                        expression: 'U ∝ (Z⁺ × Z⁻)/(r⁺ + r⁻)'
                    }
                ]
            }
        ],
        faqs: [
            {
                q: 'Which JEE Chemistry formulas are most important?',
                a: 'Physical Chemistry formulas (Nernst, rate laws, thermodynamics) carry the most numerical marks. Organic named reactions are equally important. Focus on Physical Chemistry formulas for reliable scoring.'
            },
            {
                q: 'How many formulas do I need to memorise for JEE Chemistry?',
                a: 'Approximately 80-100 key formulas across Physical, Organic, and Inorganic Chemistry. Our formula sheet is curated to cover all frequently tested formulas. Quality of understanding matters more than quantity.'
            }
        ]
    },
    {
        slug: 'jee-maths-formulas',
        exam: 'JEE',
        subject: 'Mathematics',
        title: `JEE Mathematics Formula Sheet ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]} — Calculus, Algebra, Trigonometry | MindPeak`,
        description: 'Download the complete JEE Maths formula sheet — Calculus, Algebra, Coordinate Geometry, Trigonometry, Vectors & 3D. All important formulas in one PDF.',
        heroHeading: 'JEE Mathematics',
        heroHighlight: 'Formula Sheet',
        heroParagraph: 'Every important JEE Mathematics formula from Calculus, Algebra, Coordinate Geometry, Trigonometry, and 3D Geometry — organized for quick revision.',
        chapters: [
            {
                name: 'Calculus',
                formulas: [
                    {
                        name: 'L\'Hospital\'s Rule',
                        expression: 'lim f(x)/g(x) = lim f\'(x)/g\'(x)',
                        note: 'For 0/0 or ∞/∞'
                    },
                    {
                        name: 'Integration by Parts',
                        expression: '∫u·v dx = u∫v dx − ∫(u\'·∫v dx)dx'
                    },
                    {
                        name: 'Area Under Curve',
                        expression: 'A = ∫ₐᵇ |f(x)| dx'
                    },
                    {
                        name: 'DE (Linear)',
                        expression: 'IF = e^(∫P dx)'
                    }
                ]
            },
            {
                name: 'Algebra',
                formulas: [
                    {
                        name: 'Quadratic',
                        expression: 'x = (−b ± √(b²−4ac))/2a'
                    },
                    {
                        name: 'Sum of GP',
                        expression: 'S = a(rⁿ−1)/(r−1)'
                    },
                    {
                        name: 'Euler\'s Formula',
                        expression: 'e^(iθ) = cos θ + i sin θ'
                    },
                    {
                        name: 'Binomial',
                        expression: 'T(r+1) = ⁿCr · aⁿ⁻ʳ · bʳ'
                    }
                ]
            },
            {
                name: 'Coordinate Geometry',
                formulas: [
                    {
                        name: 'Distance',
                        expression: 'd = √((x₂−x₁)² + (y₂−y₁)²)'
                    },
                    {
                        name: 'Circle',
                        expression: 'x² + y² + 2gx + 2fy + c = 0'
                    },
                    {
                        name: 'Parabola',
                        expression: 'y² = 4ax'
                    },
                    {
                        name: 'Ellipse',
                        expression: 'x²/a² + y²/b² = 1'
                    }
                ]
            },
            {
                name: 'Trigonometry & Vectors',
                formulas: [
                    {
                        name: 'sin²θ + cos²θ',
                        expression: '= 1'
                    },
                    {
                        name: 'sin(A±B)',
                        expression: 'sin A cos B ± cos A sin B'
                    },
                    {
                        name: 'Dot Product',
                        expression: 'a⃗ · b⃗ = |a||b|cos θ'
                    },
                    {
                        name: 'Cross Product',
                        expression: '|a⃗ × b⃗| = |a||b|sin θ'
                    }
                ]
            }
        ],
        faqs: [
            {
                q: 'How many formulas in JEE Maths?',
                a: 'JEE Mathematics has approximately 120-150 key formulas. Calculus alone has 40+. Our curated sheet covers all frequently tested ones. The key is understanding when to apply each formula.'
            },
            {
                q: 'Is memorising formulas enough for JEE Maths?',
                a: 'No — JEE tests application, not recall. You need to practice 200+ problems using each formula to build problem-solving intuition. MindPeak mentors focus on building this application skill through 1-on-1 practice sessions.'
            }
        ]
    },
    {
        slug: 'neet-biology-formulas',
        exam: 'NEET',
        subject: 'Biology',
        title: `NEET Biology Important Facts & Formulas ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]} — All Chapters | MindPeak`,
        description: 'Complete NEET Biology formulas, key facts & important values — Human Physiology, Genetics, Ecology, Cell Biology. Free revision sheet from MindPeak Institute.',
        heroHeading: 'NEET Biology',
        heroHighlight: 'Key Facts & Formulas',
        heroParagraph: 'All important NEET Biology facts, values, and formulas organized chapter-wise. Perfect for last-minute revision before the exam.',
        chapters: [
            {
                name: 'Human Physiology',
                formulas: [
                    {
                        name: 'Cardiac Output',
                        expression: 'CO = SV × HR ≈ 5 L/min'
                    },
                    {
                        name: 'Vital Capacity',
                        expression: 'VC = ERV + TV + IRV ≈ 4500 mL'
                    },
                    {
                        name: 'GFR',
                        expression: '125 mL/min = 180 L/day'
                    },
                    {
                        name: 'Blood Composition',
                        expression: 'Plasma (55%) + Formed Elements (45%)'
                    }
                ]
            },
            {
                name: 'Genetics',
                formulas: [
                    {
                        name: 'Monohybrid F2',
                        expression: '3:1 phenotypic, 1:2:1 genotypic'
                    },
                    {
                        name: 'Dihybrid F2',
                        expression: '9:3:3:1 phenotypic ratio'
                    },
                    {
                        name: 'Hardy-Weinberg',
                        expression: 'p² + 2pq + q² = 1'
                    },
                    {
                        name: 'Chargaff\'s Rule',
                        expression: 'A = T, G = C'
                    }
                ]
            },
            {
                name: 'Ecology',
                formulas: [
                    {
                        name: '10% Rule',
                        expression: 'Each trophic level = 10% of previous'
                    },
                    {
                        name: 'Logistic Growth',
                        expression: 'dN/dt = rN(K−N)/K'
                    },
                    {
                        name: 'Species-Area',
                        expression: 'log S = log C + Z·log A'
                    },
                    {
                        name: 'Shannon Index',
                        expression: 'H\' = −Σ(pi × ln pi)'
                    }
                ]
            }
        ],
        faqs: [
            {
                q: 'Does NEET Biology have formulas?',
                a: 'While Biology is more conceptual than Physics/Chemistry, there are important values (cardiac output, GFR, etc.) and ecological formulas (logistic growth, Shannon index) that are directly tested. Our sheet covers all such quantitative facts.'
            },
            {
                q: 'How to revise Biology before NEET exam?',
                a: 'Use this formula/facts sheet for quick revision 1 week before the exam. Combine with NCERT re-reading of key chapters and diagram practice. MindPeak provides personalised revision schedules based on your weak areas.'
            }
        ]
    },
    {
        slug: 'neet-physics-formulas',
        exam: 'NEET',
        subject: 'Physics',
        title: `NEET Physics Formula Sheet ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]} — All Chapters PDF | MindPeak`,
        description: `Download complete NEET Physics formulas — Mechanics, Electrodynamics, Optics, Modern Physics. Chapter-wise revision sheet for NEET UG ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]}.`,
        heroHeading: 'NEET Physics',
        heroHighlight: 'Formula Sheet',
        heroParagraph: 'All important NEET Physics formulas organized by chapter. Simpler than JEE but equally important — master these for 45/45 in Physics.',
        chapters: [
            {
                name: 'Mechanics',
                formulas: [
                    {
                        name: 'Equations of Motion',
                        expression: 'v = u + at, s = ut + ½at²'
                    },
                    {
                        name: 'Work-Energy',
                        expression: 'W = ΔKE'
                    },
                    {
                        name: 'Escape Velocity',
                        expression: 'vₑ = √(2gR)'
                    },
                    {
                        name: 'SHM Period (Pendulum)',
                        expression: 'T = 2π√(L/g)'
                    }
                ]
            },
            {
                name: 'Electromagnetism',
                formulas: [
                    {
                        name: 'Coulomb\'s Law',
                        expression: 'F = kq₁q₂/r²'
                    },
                    {
                        name: 'Ohm\'s Law',
                        expression: 'V = IR'
                    },
                    {
                        name: 'Faraday\'s Law',
                        expression: 'EMF = −dΦ/dt'
                    }
                ]
            },
            {
                name: 'Optics & Modern',
                formulas: [
                    {
                        name: 'Mirror Formula',
                        expression: '1/v + 1/u = 1/f'
                    },
                    {
                        name: 'Photoelectric',
                        expression: 'KE = hν − φ'
                    },
                    {
                        name: 'Bohr Energy',
                        expression: 'Eₙ = −13.6/n² eV'
                    },
                    {
                        name: 'Half-Life',
                        expression: 'N = N₀(½)^(t/t½)'
                    }
                ]
            }
        ],
        faqs: [
            {
                q: 'Is NEET Physics formula-based?',
                a: 'Yes — NEET Physics is mostly formula application. Unlike JEE, problems are straightforward and test direct formula substitution. Master the formulas and you can score 40+ out of 45.'
            }
        ]
    }
];
const FORMULA_SLUGS = formulaSheets.map(_c = (f)=>f.slug);
_c1 = FORMULA_SLUGS;
function getFormulaSheet(slug) {
    return formulaSheets.find((f)=>f.slug === slug);
}
/* ═══════════════════════════ Component ═══════════════════════════ */ const FormulaSheet = ()=>{
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const slug = pathname.replace('/', '');
    const data = getFormulaSheet(slug);
    const { openDemoModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DemoBookingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDemoModal"])();
    const [openFaq, setOpenFaq] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [gateOpen, setGateOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FormulaSheet.useEffect": ()=>{
            window.scrollTo(0, 0);
        }
    }["FormulaSheet.useEffect"], [
        pathname
    ]);
    if (!data) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navigate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navigate"], {
        to: "/",
        replace: true
    }, void 0, false, {
        fileName: "[project]/src/views/FormulaSheet.tsx",
        lineNumber: 304,
        columnNumber: 21
    }, ("TURBOPACK compile-time value", void 0));
    const faqJsonLd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageFAQ$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildFAQSchemaFromQA"])(data.faqs);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SEOHead$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEOHead"], {
                title: data.title,
                description: data.description,
                jsonLd: [
                    faqJsonLd
                ]
            }, void 0, false, {
                fileName: "[project]/src/views/FormulaSheet.tsx",
                lineNumber: 310,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navbar"], {}, void 0, false, {
                fileName: "[project]/src/views/FormulaSheet.tsx",
                lineNumber: 311,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "bg-background min-h-screen pt-20 sm:pt-24 overflow-x-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        "aria-label": "Breadcrumb",
                        className: "max-w-5xl mx-auto px-4 sm:px-6 py-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                            className: "flex items-center gap-2 text-xs text-muted-foreground flex-wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                        to: "/",
                                        className: "hover:text-primary transition-colors",
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/FormulaSheet.tsx",
                                        lineNumber: 317,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/views/FormulaSheet.tsx",
                                    lineNumber: 317,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "/"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/FormulaSheet.tsx",
                                    lineNumber: 318,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                        to: data.exam === 'JEE' ? '/jee-coaching' : '/neet-coaching',
                                        className: "hover:text-primary transition-colors",
                                        children: [
                                            data.exam,
                                            " Coaching"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/FormulaSheet.tsx",
                                        lineNumber: 319,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/views/FormulaSheet.tsx",
                                    lineNumber: 319,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "/"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/FormulaSheet.tsx",
                                    lineNumber: 320,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "text-foreground",
                                    children: [
                                        data.subject,
                                        " Formula Sheet"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/FormulaSheet.tsx",
                                    lineNumber: 321,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/FormulaSheet.tsx",
                            lineNumber: 316,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/FormulaSheet.tsx",
                        lineNumber: 315,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "max-w-4xl mx-auto px-4 sm:px-6 text-center mb-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            className: "w-4 h-4 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/FormulaSheet.tsx",
                                            lineNumber: 329,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-primary text-xs font-semibold uppercase tracking-widest",
                                            children: "Free Download"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/FormulaSheet.tsx",
                                            lineNumber: 330,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/FormulaSheet.tsx",
                                    lineNumber: 328,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-display font-black text-foreground text-3xl sm:text-4xl md:text-5xl leading-tight mb-4",
                                    children: [
                                        data.heroHeading,
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gradient-gold",
                                            children: data.heroHighlight
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/FormulaSheet.tsx",
                                            lineNumber: 333,
                                            columnNumber: 34
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/FormulaSheet.tsx",
                                    lineNumber: 332,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto",
                                    children: data.heroParagraph
                                }, void 0, false, {
                                    fileName: "[project]/src/views/FormulaSheet.tsx",
                                    lineNumber: 335,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/FormulaSheet.tsx",
                            lineNumber: 327,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/FormulaSheet.tsx",
                        lineNumber: 326,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "max-w-5xl mx-auto px-4 sm:px-6 mb-16 space-y-10",
                        children: data.chapters.map((ch, ci)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                    delay: ci * 0.1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-display font-bold text-foreground text-xl sm:text-2xl mb-4 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                className: "w-5 h-5 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/FormulaSheet.tsx",
                                                lineNumber: 350,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            ch.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/FormulaSheet.tsx",
                                        lineNumber: 349,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                        children: ch.formulas.map((f, fi)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-3 p-4 rounded-xl border border-border bg-card/40",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                        className: "w-4 h-4 text-primary flex-shrink-0 mt-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/FormulaSheet.tsx",
                                                        lineNumber: 356,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-foreground font-semibold text-sm",
                                                                children: f.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/FormulaSheet.tsx",
                                                                lineNumber: 358,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-primary font-mono text-sm mt-0.5",
                                                                children: f.expression
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/FormulaSheet.tsx",
                                                                lineNumber: 359,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            f.note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-muted-foreground text-xs mt-1",
                                                                children: f.note
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/FormulaSheet.tsx",
                                                                lineNumber: 360,
                                                                columnNumber: 34
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/FormulaSheet.tsx",
                                                        lineNumber: 357,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, fi, true, {
                                                fileName: "[project]/src/views/FormulaSheet.tsx",
                                                lineNumber: 355,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/FormulaSheet.tsx",
                                        lineNumber: 353,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, ci, true, {
                                fileName: "[project]/src/views/FormulaSheet.tsx",
                                lineNumber: 342,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/views/FormulaSheet.tsx",
                        lineNumber: 340,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "max-w-xl mx-auto px-4 sm:px-6 mb-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-gold/5 p-6 sm:p-8 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                    className: "w-8 h-8 text-primary mx-auto mb-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/FormulaSheet.tsx",
                                    lineNumber: 372,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-display font-bold text-foreground text-xl sm:text-2xl mb-2",
                                    children: "Download Complete PDF + Get Expert Guidance"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/FormulaSheet.tsx",
                                    lineNumber: 373,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground text-sm mb-6",
                                    children: "Get the full formula sheet PDF with derivation tips + a free 1-on-1 demo class with an IIT/AIIMS mentor."
                                }, void 0, false, {
                                    fileName: "[project]/src/views/FormulaSheet.tsx",
                                    lineNumber: 376,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: openDemoModal,
                                    className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-display font-bold hover:brightness-110 transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/FormulaSheet.tsx",
                                            lineNumber: 383,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Get PDF + Book Free Demo"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/FormulaSheet.tsx",
                                    lineNumber: 379,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/FormulaSheet.tsx",
                            lineNumber: 371,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/FormulaSheet.tsx",
                        lineNumber: 370,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "max-w-3xl mx-auto px-4 sm:px-6 mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-display font-bold text-foreground text-2xl text-center mb-6",
                                children: "Frequently Asked Questions"
                            }, void 0, false, {
                                fileName: "[project]/src/views/FormulaSheet.tsx",
                                lineNumber: 391,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: data.faqs.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `rounded-xl border transition-all ${openFaq === i ? 'border-primary/30 bg-card/50' : 'border-border'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setOpenFaq(openFaq === i ? null : i),
                                                className: "w-full flex items-center justify-between gap-4 px-5 py-4 text-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-semibold text-foreground",
                                                        children: f.q
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/FormulaSheet.tsx",
                                                        lineNumber: 396,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: `w-4 h-4 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180 text-primary' : 'text-muted-foreground'}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/FormulaSheet.tsx",
                                                        lineNumber: 397,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/FormulaSheet.tsx",
                                                lineNumber: 395,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                children: openFaq === i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        height: 0,
                                                        opacity: 0
                                                    },
                                                    animate: {
                                                        height: 'auto',
                                                        opacity: 1
                                                    },
                                                    exit: {
                                                        height: 0,
                                                        opacity: 0
                                                    },
                                                    className: "overflow-hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "px-5 pb-4 text-muted-foreground text-sm leading-relaxed",
                                                        children: f.a
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/FormulaSheet.tsx",
                                                        lineNumber: 402,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/FormulaSheet.tsx",
                                                    lineNumber: 401,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/FormulaSheet.tsx",
                                                lineNumber: 399,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/views/FormulaSheet.tsx",
                                        lineNumber: 394,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/views/FormulaSheet.tsx",
                                lineNumber: 392,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/FormulaSheet.tsx",
                        lineNumber: 390,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl mx-auto px-4 sm:px-6 mb-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RelatedPages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RelatedPages"], {
                            title: "Related Resources",
                            links: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RelatedPages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRelatedLinksForExam"])(data.exam)
                        }, void 0, false, {
                            fileName: "[project]/src/views/FormulaSheet.tsx",
                            lineNumber: 413,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/FormulaSheet.tsx",
                        lineNumber: 412,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageFooter"], {}, void 0, false, {
                        fileName: "[project]/src/views/FormulaSheet.tsx",
                        lineNumber: 419,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/FormulaSheet.tsx",
                lineNumber: 313,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(FormulaSheet, "QxUGvuyXiMNEodoWUAOnS53DoBk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DemoBookingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDemoModal"]
    ];
});
_c2 = FormulaSheet;
const __TURBOPACK__default__export__ = FormulaSheet;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "FORMULA_SLUGS$formulaSheets.map");
__turbopack_context__.k.register(_c1, "FORMULA_SLUGS");
__turbopack_context__.k.register(_c2, "FormulaSheet");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/[...slug]/CatchAllClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CatchAllClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * CatchAllClient — Client-side slug router (moved from page.tsx).
 *
 * Dispatches to the appropriate page component based on slug patterns.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapterData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/chapterData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$SubjectPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/SubjectPage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$FormulaSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/FormulaSheet.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const SubjectPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/views/SubjectPage.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/views/SubjectPage.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {}, void 0, false, {
            fileName: "[project]/app/[...slug]/CatchAllClient.tsx",
            lineNumber: 15,
            columnNumber: 83
        }, ("TURBOPACK compile-time value", void 0))
});
_c = SubjectPage;
const ChapterPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/views/ChapterPage.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/views/ChapterPage.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {}, void 0, false, {
            fileName: "[project]/app/[...slug]/CatchAllClient.tsx",
            lineNumber: 16,
            columnNumber: 83
        }, ("TURBOPACK compile-time value", void 0))
});
_c1 = ChapterPage;
const TopicPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/views/TopicPage.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/views/TopicPage.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {}, void 0, false, {
            fileName: "[project]/app/[...slug]/CatchAllClient.tsx",
            lineNumber: 17,
            columnNumber: 79
        }, ("TURBOPACK compile-time value", void 0))
});
_c2 = TopicPage;
const FormulaSheet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/views/FormulaSheet.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/views/FormulaSheet.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {}, void 0, false, {
            fileName: "[project]/app/[...slug]/CatchAllClient.tsx",
            lineNumber: 18,
            columnNumber: 85
        }, ("TURBOPACK compile-time value", void 0))
});
_c3 = FormulaSheet;
const QuestionSlugRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/views/QuestionSlugRouter.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/views/QuestionSlugRouter.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {}, void 0, false, {
            fileName: "[project]/app/[...slug]/CatchAllClient.tsx",
            lineNumber: 19,
            columnNumber: 97
        }, ("TURBOPACK compile-time value", void 0))
});
_c4 = QuestionSlugRouter;
const Spinner = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[hsl(225,43%,7%)] flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"
        }, void 0, false, {
            fileName: "[project]/app/[...slug]/CatchAllClient.tsx",
            lineNumber: 23,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/[...slug]/CatchAllClient.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c5 = Spinner;
function resolve(slug) {
    // Two-segment paths → TopicPage
    if (slug.includes("/")) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapterData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOPIC_PATHS"].includes(slug) ? "topic" : "question";
    }
    // One-segment — check static arrays first
    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$SubjectPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUBJECT_SLUGS"].includes(slug)) return "subject";
    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$FormulaSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FORMULA_SLUGS"].includes(slug)) return "formula";
    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapterData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAPTER_SLUGS"].includes(slug)) return "chapter";
    return "question";
}
function CatchAllClient() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const slug = pathname.replace(/^\//, "");
    const resolved = resolve(slug);
    switch(resolved){
        case "subject":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubjectPage, {}, void 0, false, {
                fileName: "[project]/app/[...slug]/CatchAllClient.tsx",
                lineNumber: 46,
                columnNumber: 14
            }, this);
        case "chapter":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChapterPage, {}, void 0, false, {
                fileName: "[project]/app/[...slug]/CatchAllClient.tsx",
                lineNumber: 48,
                columnNumber: 14
            }, this);
        case "topic":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TopicPage, {}, void 0, false, {
                fileName: "[project]/app/[...slug]/CatchAllClient.tsx",
                lineNumber: 50,
                columnNumber: 14
            }, this);
        case "formula":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormulaSheet, {}, void 0, false, {
                fileName: "[project]/app/[...slug]/CatchAllClient.tsx",
                lineNumber: 52,
                columnNumber: 14
            }, this);
        case "question":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuestionSlugRouter, {}, void 0, false, {
                fileName: "[project]/app/[...slug]/CatchAllClient.tsx",
                lineNumber: 54,
                columnNumber: 14
            }, this);
    }
}
_s(CatchAllClient, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c6 = CatchAllClient;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "SubjectPage");
__turbopack_context__.k.register(_c1, "ChapterPage");
__turbopack_context__.k.register(_c2, "TopicPage");
__turbopack_context__.k.register(_c3, "FormulaSheet");
__turbopack_context__.k.register(_c4, "QuestionSlugRouter");
__turbopack_context__.k.register(_c5, "Spinner");
__turbopack_context__.k.register(_c6, "CatchAllClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_05c43bda._.js.map
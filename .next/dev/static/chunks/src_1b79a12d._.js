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
"[project]/src/lib/studyPlanGenerator.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateStudyPlan",
    ()=>generateStudyPlan,
    "getDailySchedule",
    ()=>getDailySchedule,
    "getMilestones",
    ()=>getMilestones,
    "getMonthsUntilExam",
    ()=>getMonthsUntilExam,
    "getPhaseBreakdown",
    ()=>getPhaseBreakdown,
    "getSubjectWeightage",
    ()=>getSubjectWeightage
]);
/**
 * Dynamic Study Plan Generator
 * ─────────────────────────────
 * Generates a personalised month-by-month study plan based on the
 * number of months remaining until the target exam (JEE / NEET).
 *
 * Fee is prorated from the relevant course tier:
 *   12+ months  →  2-year programme rate (prorated)
 *   3-11 months →  1-year programme rate (prorated)
 *   1-2 months  →  Crash course flat rate
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/examYears.ts [app-client] (ecmascript)");
;
/* ─── Fee constants (in ₹, excl. GST) ─── */ const FEES = {
    twoYear: 230000,
    oneYear: 130000,
    crashPerSubject: 18000,
    premiumCrashPerSubject: 30000
};
/* ─── Subject lists ─── */ const JEE_SUBJECTS = [
    'Physics',
    'Chemistry',
    'Mathematics'
];
const NEET_SUBJECTS = [
    'Physics',
    'Chemistry',
    'Biology'
];
/* ─── Curriculum topic pools ─── */ const JEE_CURRICULUM = {
    Physics: [
        'Units & Kinematics',
        'Laws of Motion & Friction',
        'Work, Energy & Power',
        'Rotational Motion',
        'Gravitation',
        'Fluid Mechanics',
        'Thermal Physics & Kinetic Theory',
        'Thermodynamics',
        'Oscillations & Waves',
        'Electrostatics',
        'Current Electricity',
        'Magnetism & EMI',
        'Optics (Ray + Wave)',
        'Modern Physics & Nuclear',
        'Semiconductors'
    ],
    Chemistry: [
        'Atomic Structure & Periodicity',
        'Chemical Bonding',
        'States of Matter & Solutions',
        'Thermodynamics & Equilibrium',
        'Redox & Electrochemistry',
        'Chemical Kinetics',
        'Surface Chemistry',
        's-block & p-block Elements',
        'd-block & f-block Elements',
        'Coordination Compounds',
        'Organic — GOC & Isomerism',
        'Organic — Hydrocarbons',
        'Organic — Haloalkanes, Alcohols, Ethers',
        'Organic — Carbonyl, Amines, Biomolecules',
        'Polymers & Chemistry in Everyday Life'
    ],
    Mathematics: [
        'Sets, Relations & Functions',
        'Trigonometry',
        'Complex Numbers & Quadratics',
        'Sequences & Series',
        'Permutations & Combinations',
        'Binomial Theorem',
        'Matrices & Determinants',
        'Limits, Continuity & Differentiability',
        'Differentiation & Applications',
        'Integration & Applications',
        'Differential Equations',
        'Coordinate Geometry (Straight Lines, Circles)',
        'Conics (Parabola, Ellipse, Hyperbola)',
        'Vectors & 3D Geometry',
        'Probability & Statistics'
    ]
};
const NEET_CURRICULUM = {
    Physics: [
        'Units, Dimensions & Motion',
        'Laws of Motion & Friction',
        'Work, Energy & Power',
        'Rotational Motion & Gravitation',
        'Mechanical Properties & Fluids',
        'Thermal Physics',
        'Thermodynamics',
        'Oscillations & Waves',
        'Electrostatics & Capacitors',
        'Current Electricity',
        'Magnetic Effects & EMI',
        'AC & EM Waves',
        'Ray Optics & Wave Optics',
        'Dual Nature & Atoms',
        'Nuclear Physics & Semiconductors'
    ],
    Chemistry: [
        'Atomic Structure & Periodic Table',
        'Chemical Bonding',
        'States of Matter & Solutions',
        'Chemical Thermodynamics & Equilibrium',
        'Redox & Electrochemistry',
        'Chemical Kinetics',
        'Surface Chemistry & Colloids',
        's-block & p-block Elements',
        'd-block & Coordination Compounds',
        'Organic — GOC & Hydrocarbons',
        'Organic — Haloalkanes, Alcohols, Ethers',
        'Organic — Aldehydes, Amines, Biomolecules',
        'Polymers & Environmental Chemistry'
    ],
    Biology: [
        'Cell Biology & Biomolecules',
        'Cell Division & Cell Cycle',
        'Morphology & Anatomy of Plants',
        'Plant Physiology (Transport, Nutrition, Growth)',
        'Photosynthesis & Respiration',
        'Animal Tissues & Structural Organisation',
        'Human Physiology — Digestion & Breathing',
        'Human Physiology — Circulation & Excretion',
        'Neural Control & Locomotion',
        'Reproduction in Organisms & Plants',
        'Human Reproduction & Reproductive Health',
        'Genetics — Mendel, Molecular Basis',
        'Evolution & Human Health',
        'Ecology — Organisms, Ecosystems, Biodiversity',
        'Biotechnology & Its Applications'
    ]
};
/* ─── Helpers ─── */ /**
 * Prorate fee with a short-duration premium.
 * Fewer months → higher per-month rate because the mentor delivers
 * the same syllabus in compressed time (more intensive sessions).
 *
 * Premium schedule:
 *   ≤ 4 months  → 40% markup
 *   ≤ 6 months  → 25% markup
 *   ≤ 8 months  → 15% markup
 *   ≤ 10 months → 5% markup
 *   > 10 months → no markup (standard rate)
 */ function prorateFee(base, fullMonths, actual) {
    const perMonth = base / fullMonths;
    let premium = 1;
    if (actual <= 4) premium = 1.4;
    else if (actual <= 6) premium = 1.25;
    else if (actual <= 8) premium = 1.15;
    else if (actual <= 10) premium = 1.05;
    return Math.round(perMonth * actual * premium / 1000) * 1000; // round to nearest 1000
}
function formatFee(n) {
    return '₹' + n.toLocaleString('en-IN') + ' + GST';
}
function distributeTopics(topics, totalMonths, reserveRevisionMonths) {
    const teachMonths = Math.max(1, totalMonths - reserveRevisionMonths);
    const perMonth = Math.ceil(topics.length / teachMonths);
    const result = [];
    for(let i = 0; i < teachMonths; i++){
        result.push(topics.slice(i * perMonth, (i + 1) * perMonth));
    }
    // Revision months — distribute all topics evenly for revision
    for(let i = 0; i < reserveRevisionMonths; i++){
        const start = Math.floor(i * topics.length / reserveRevisionMonths);
        const end = Math.floor((i + 1) * topics.length / reserveRevisionMonths);
        result.push(topics.slice(start, end).map((t)=>`Revise: ${t}`));
    }
    return result;
}
function getPhaseLabel(monthIdx, total) {
    const ratio = monthIdx / total;
    if (total <= 2) return 'Crash';
    if (ratio < 0.4) return 'Foundation';
    if (ratio < 0.7) return 'Intensive';
    if (ratio < 0.9) return 'Revision';
    return 'Mock Test & Fine-tuning';
}
function monthTips(phase) {
    switch(phase){
        case 'Crash':
            return [
                'Focus only on high-weightage chapters',
                'Solve last 3 years\' papers daily',
                'Formula revision every morning'
            ];
        case 'Foundation':
            return [
                'Build concepts from NCERT first',
                'Maintain a formula notebook',
                'Solve 20-30 problems daily per subject'
            ];
        case 'Intensive':
            return [
                'Attempt topic-wise mock tests',
                'Analyse weak areas & revisit',
                'Increase problem-solving speed'
            ];
        case 'Revision':
            return [
                'Full syllabus revision — one subject/day',
                'Attempt 2-3 full-length mocks per week',
                'Focus on accuracy over speed'
            ];
        case 'Mock Test & Fine-tuning':
            return [
                'Daily full-length mock tests',
                'Post-test error analysis (30 min)',
                'Keep a calm routine — sleep 7+ hours'
            ];
        default:
            return [
                'Stay consistent and follow the schedule'
            ];
    }
}
function generateStudyPlan(examType, monthsRemaining) {
    const totalMonths = Math.max(1, Math.min(monthsRemaining, 24));
    const subjects = examType === 'JEE' ? JEE_SUBJECTS : NEET_SUBJECTS;
    const curriculum = examType === 'JEE' ? JEE_CURRICULUM : NEET_CURRICULUM;
    /* ── Determine tier ── */ let tier;
    let tierLabel;
    let feeNumeric;
    let courseSlug;
    let courseName;
    if (totalMonths <= 2) {
        tier = 'crash';
        tierLabel = '1-on-1 Crash Course';
        feeNumeric = FEES.premiumCrashPerSubject * subjects.length;
        courseSlug = '1-on-1-crash-program';
        courseName = `${examType} 1-on-1 Crash Programme`;
    } else if (totalMonths <= 6) {
        tier = 'intensive';
        tierLabel = 'Intensive Accelerated Programme';
        feeNumeric = prorateFee(FEES.oneYear, 12, totalMonths);
        courseSlug = examType === 'JEE' ? `jee-main-target-${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]}` : `neet-target-${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]}`;
        courseName = `${examType} Intensive ${totalMonths}-Month Programme`;
    } else if (totalMonths <= 12) {
        tier = 'standard';
        tierLabel = '1-Year Programme';
        feeNumeric = prorateFee(FEES.oneYear, 12, totalMonths);
        courseSlug = examType === 'JEE' ? `jee-main-target-${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]}` : `neet-target-${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]}`;
        courseName = `${examType} ${totalMonths}-Month Target Programme`;
    } else {
        tier = 'extended';
        tierLabel = '2-Year Foundation Programme';
        feeNumeric = prorateFee(FEES.twoYear, 24, totalMonths);
        courseSlug = examType === 'JEE' ? `jee-main-target-${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"] + 1}` : `neet-target-${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"] + 1}`;
        courseName = `${examType} ${totalMonths}-Month Foundation Programme`;
    }
    /* ── Build month-by-month curriculum ── */ const revisionMonths = tier === 'crash' ? 0 : Math.max(1, Math.floor(totalMonths * 0.2));
    const subjectSchedules = {};
    for (const subj of subjects){
        const topics = curriculum[subj] || [];
        subjectSchedules[subj] = distributeTopics(topics, totalMonths, revisionMonths);
    }
    const months = [];
    for(let m = 0; m < totalMonths; m++){
        const phase = getPhaseLabel(m, totalMonths);
        const monthSubjects = subjects.map((subj)=>({
                name: subj,
                topics: subjectSchedules[subj][m] || []
            }));
        const mockTests = tier === 'crash' ? 3 : m >= totalMonths - revisionMonths ? Math.min(4, 2 + Math.floor((m - (totalMonths - revisionMonths)) / 1)) : m < totalMonths * 0.4 ? 1 : 2;
        months.push({
            month: m + 1,
            label: `Month ${m + 1} — ${phase}`,
            phase,
            subjects: monthSubjects,
            weeklyHours: tier === 'crash' ? 40 : tier === 'intensive' ? 30 : 20,
            mockTests,
            tips: monthTips(phase)
        });
    }
    /* ── Summary ── */ const summary = tier === 'crash' ? `With only ${totalMonths} month${totalMonths > 1 ? 's' : ''} until ${examType} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]}, this crash course focuses exclusively on high-weightage chapters, rapid formula revision, and daily mock tests. Your dedicated 1-on-1 mentor will prioritise the 40-50 most important topics to maximise your score in the shortest time.` : tier === 'intensive' ? `This ${totalMonths}-month intensive plan covers the complete ${examType} syllabus at an accelerated pace. With 30+ hours/week of focused 1-on-1 sessions, weekly mocks, and targeted revision, you'll be exam-ready for ${examType} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]}. Fee is prorated from the standard 1-year programme.` : tier === 'standard' ? `Your personalised ${totalMonths}-month programme provides comprehensive syllabus coverage, phased learning, and progressive mock-test intensity to ensure you peak at the right time for ${examType} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]}.` : `This ${totalMonths}-month extended programme gives you the luxury of time to build unshakeable fundamentals before progressively advancing to competition-level problem-solving for ${examType} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"] + 1}.`;
    return {
        examType,
        examYear: tier === 'extended' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"] + 1 : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"],
        totalMonths,
        tier,
        tierLabel,
        fee: formatFee(feeNumeric),
        feeNumeric,
        months,
        courseSlug,
        courseName,
        summary
    };
}
function getMonthsUntilExam(examType) {
    const now = new Date();
    // JEE Main Session 1 is around Jan 20; NEET is around May 4
    const examMonth = examType === 'JEE' ? 0 : 4; // Jan or May
    const examDay = examType === 'JEE' ? 20 : 4;
    const examDate = new Date(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"], examMonth, examDay);
    const diff = examDate.getTime() - now.getTime();
    return Math.max(1, Math.round(diff / (1000 * 60 * 60 * 24 * 30.44)));
}
function getDailySchedule(tier) {
    if (tier === 'crash') {
        return [
            {
                time: '6:00 AM',
                activity: 'Formula Revision & Quick Notes',
                duration: '1 hr',
                type: 'revision'
            },
            {
                time: '7:00 AM',
                activity: 'Subject 1 — 1-on-1 Live Class',
                duration: '2 hrs',
                type: 'study'
            },
            {
                time: '9:00 AM',
                activity: 'Breakfast Break',
                duration: '30 min',
                type: 'break'
            },
            {
                time: '9:30 AM',
                activity: 'PYQ Practice (Subject 1)',
                duration: '1.5 hrs',
                type: 'self-study'
            },
            {
                time: '11:00 AM',
                activity: 'Subject 2 — 1-on-1 Live Class',
                duration: '2 hrs',
                type: 'study'
            },
            {
                time: '1:00 PM',
                activity: 'Lunch & Rest',
                duration: '1 hr',
                type: 'break'
            },
            {
                time: '2:00 PM',
                activity: 'Subject 3 — 1-on-1 Live Class',
                duration: '2 hrs',
                type: 'study'
            },
            {
                time: '4:00 PM',
                activity: 'Mock Test / Topic Test',
                duration: '2 hrs',
                type: 'test'
            },
            {
                time: '6:00 PM',
                activity: 'Break & Light Exercise',
                duration: '30 min',
                type: 'break'
            },
            {
                time: '6:30 PM',
                activity: 'Mock Test Analysis & Error Log',
                duration: '1.5 hrs',
                type: 'revision'
            },
            {
                time: '8:00 PM',
                activity: 'High-Weightage Problems',
                duration: '1.5 hrs',
                type: 'self-study'
            },
            {
                time: '9:30 PM',
                activity: 'Quick Revision & Sleep',
                duration: '30 min',
                type: 'revision'
            }
        ];
    }
    if (tier === 'intensive') {
        return [
            {
                time: '6:30 AM',
                activity: 'Morning Revision & Formulas',
                duration: '45 min',
                type: 'revision'
            },
            {
                time: '7:15 AM',
                activity: 'Subject 1 — 1-on-1 Live Class',
                duration: '1.5 hrs',
                type: 'study'
            },
            {
                time: '8:45 AM',
                activity: 'Breakfast Break',
                duration: '30 min',
                type: 'break'
            },
            {
                time: '9:15 AM',
                activity: 'Self-Practice (Subject 1)',
                duration: '1 hr',
                type: 'self-study'
            },
            {
                time: '10:15 AM',
                activity: 'Subject 2 — 1-on-1 Live Class',
                duration: '1.5 hrs',
                type: 'study'
            },
            {
                time: '11:45 AM',
                activity: 'Self-Practice (Subject 2)',
                duration: '1 hr',
                type: 'self-study'
            },
            {
                time: '12:45 PM',
                activity: 'Lunch & Rest',
                duration: '1 hr',
                type: 'break'
            },
            {
                time: '1:45 PM',
                activity: 'Subject 3 — 1-on-1 Live Class',
                duration: '1.5 hrs',
                type: 'study'
            },
            {
                time: '3:15 PM',
                activity: 'Self-Practice (Subject 3)',
                duration: '1 hr',
                type: 'self-study'
            },
            {
                time: '4:15 PM',
                activity: 'Break',
                duration: '30 min',
                type: 'break'
            },
            {
                time: '4:45 PM',
                activity: 'Mock Test / Topic Test',
                duration: '1.5 hrs',
                type: 'test'
            },
            {
                time: '6:15 PM',
                activity: 'Error Analysis & Revision',
                duration: '1 hr',
                type: 'revision'
            }
        ];
    }
    // standard / extended
    return [
        {
            time: '7:00 AM',
            activity: 'Morning Revision & NCERT Read',
            duration: '1 hr',
            type: 'revision'
        },
        {
            time: '8:00 AM',
            activity: 'Subject 1 — 1-on-1 Live Class',
            duration: '1.5 hrs',
            type: 'study'
        },
        {
            time: '9:30 AM',
            activity: 'Breakfast Break',
            duration: '30 min',
            type: 'break'
        },
        {
            time: '10:00 AM',
            activity: 'Self-Practice (Subject 1)',
            duration: '1 hr',
            type: 'self-study'
        },
        {
            time: '11:00 AM',
            activity: 'Subject 2 — 1-on-1 Live Class',
            duration: '1.5 hrs',
            type: 'study'
        },
        {
            time: '12:30 PM',
            activity: 'Lunch & Rest',
            duration: '1 hr',
            type: 'break'
        },
        {
            time: '1:30 PM',
            activity: 'Self-Practice (Subject 2)',
            duration: '1 hr',
            type: 'self-study'
        },
        {
            time: '2:30 PM',
            activity: 'Subject 3 — 1-on-1 Live Class',
            duration: '1 hr',
            type: 'study'
        },
        {
            time: '3:30 PM',
            activity: 'Break & Exercise',
            duration: '30 min',
            type: 'break'
        },
        {
            time: '4:00 PM',
            activity: 'Self-Practice (Subject 3)',
            duration: '1 hr',
            type: 'self-study'
        },
        {
            time: '5:00 PM',
            activity: 'Doubt Resolution & Revision',
            duration: '1 hr',
            type: 'revision'
        }
    ];
}
function getSubjectWeightage(examType) {
    if (examType === 'JEE') {
        return {
            subjects: [
                {
                    subject: 'Physics',
                    percentage: 33,
                    totalQuestions: 30,
                    totalMarks: 100,
                    keyTopics: [
                        'Mechanics (25%)',
                        'Electrodynamics (20%)',
                        'Modern Physics (15%)',
                        'Optics (12%)',
                        'Thermodynamics (10%)'
                    ]
                },
                {
                    subject: 'Chemistry',
                    percentage: 33,
                    totalQuestions: 30,
                    totalMarks: 100,
                    keyTopics: [
                        'Organic Chemistry (35%)',
                        'Inorganic Chemistry (30%)',
                        'Physical Chemistry (35%)'
                    ]
                },
                {
                    subject: 'Mathematics',
                    percentage: 34,
                    totalQuestions: 30,
                    totalMarks: 100,
                    keyTopics: [
                        'Calculus (30%)',
                        'Algebra (25%)',
                        'Coordinate Geometry (20%)',
                        'Trigonometry (10%)',
                        'Probability (8%)'
                    ]
                }
            ],
            totalQuestions: 90,
            totalMarks: 300,
            examDuration: '3 hours',
            examPattern: '20 MCQs + 10 Numerical per subject (5 optional)'
        };
    }
    return {
        subjects: [
            {
                subject: 'Physics',
                percentage: 25,
                totalQuestions: 50,
                totalMarks: 200,
                keyTopics: [
                    'Mechanics (30%)',
                    'Electrodynamics (22%)',
                    'Modern Physics (12%)',
                    'Optics (10%)',
                    'Heat & Thermo (10%)'
                ]
            },
            {
                subject: 'Chemistry',
                percentage: 25,
                totalQuestions: 50,
                totalMarks: 200,
                keyTopics: [
                    'Organic Chemistry (30%)',
                    'Inorganic Chemistry (35%)',
                    'Physical Chemistry (35%)'
                ]
            },
            {
                subject: 'Biology',
                percentage: 50,
                totalQuestions: 100,
                totalMarks: 400,
                keyTopics: [
                    'Human Physiology (20%)',
                    'Genetics & Evolution (18%)',
                    'Plant Physiology (12%)',
                    'Cell Biology (10%)',
                    'Ecology (10%)'
                ]
            }
        ],
        totalQuestions: 200,
        totalMarks: 800,
        examDuration: '3 hours 20 minutes',
        examPattern: '200 MCQs (attempt 180) — Biology: 100, Physics: 50, Chemistry: 50'
    };
}
function getPhaseBreakdown(plan) {
    const phaseCounts = {};
    for (const m of plan.months){
        phaseCounts[m.phase] = (phaseCounts[m.phase] || 0) + 1;
    }
    const phaseColors = {
        'Crash': '#ef4444',
        'Foundation': '#3b82f6',
        'Intensive': '#f59e0b',
        'Revision': '#22c55e',
        'Mock Test & Fine-tuning': '#a855f7'
    };
    const phaseDescriptions = {
        'Crash': 'Laser-focused on top 40-50 high-weightage chapters. Daily mocks, rapid formula revision, PYQ drills.',
        'Foundation': 'Build rock-solid fundamentals from NCERT. Concept clarity, formula derivation, basic problem-solving.',
        'Intensive': 'Full-speed syllabus coverage with advanced problems. HC Verma, Irodov, and competition-level questions.',
        'Revision': 'Comprehensive revision of all topics. Focus on weak areas identified through mock analysis.',
        'Mock Test & Fine-tuning': 'Full-length NTA-pattern mocks daily. Time management, accuracy tuning, and exam temperament building.'
    };
    const phases = [];
    const order = [
        'Foundation',
        'Crash',
        'Intensive',
        'Revision',
        'Mock Test & Fine-tuning'
    ];
    for (const name of order){
        if (phaseCounts[name]) {
            phases.push({
                name,
                color: phaseColors[name] || '#6b7280',
                months: phaseCounts[name],
                percentage: Math.round(phaseCounts[name] / plan.totalMonths * 100),
                description: phaseDescriptions[name] || ''
            });
        }
    }
    return phases;
}
function getMilestones(plan) {
    const milestones = [];
    const total = plan.totalMonths;
    if (total <= 2) {
        milestones.push({
            month: 1,
            title: 'High-Weightage Chapters Done',
            description: 'Complete top 40-50 chapters across all subjects'
        }, {
            month: total,
            title: 'Exam Ready',
            description: 'Final mock scores consistently above target cutoff'
        });
    } else {
        milestones.push({
            month: 1,
            title: 'Foundation Begins',
            description: 'NCERT mastery and basic problem-solving starts'
        });
        const mid = Math.ceil(total * 0.5);
        milestones.push({
            month: mid,
            title: '50% Syllabus Complete',
            description: 'Half the syllabus covered with concept clarity'
        });
        const revStart = Math.ceil(total * 0.7);
        milestones.push({
            month: revStart,
            title: 'Revision Phase Begins',
            description: 'Full syllabus covered — revision & mock drills start'
        });
        milestones.push({
            month: total,
            title: 'Exam Ready',
            description: 'Peak performance through intensive mock cycles'
        });
    }
    return milestones;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/StudyPlanSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StudyPlanSection",
    ()=>StudyPlanSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Embeddable Study Plan Preview Section
 * ──────────────────────────────────────
 * Compact version of the full /study-plan page.
 * Shows a dynamic study-plan preview for JEE or NEET, and links
 * to the full planner page. Designed to drop into any page.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RouterLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IndianRupee$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/indian-rupee.js [app-client] (ecmascript) <export default as IndianRupee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$studyPlanGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/studyPlanGenerator.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/examYears.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DemoBookingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DemoBookingModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
/* ─── Tier helpers ─── */ function tierGradient(tier) {
    switch(tier){
        case 'crash':
            return 'from-red-500/20 to-orange-500/20 border-red-500/30';
        case 'intensive':
            return 'from-orange-500/20 to-amber-500/20 border-orange-500/30';
        case 'standard':
            return 'from-blue-500/20 to-cyan-500/20 border-blue-500/30';
        case 'extended':
            return 'from-indigo-500/20 to-purple-500/20 border-indigo-500/30';
        default:
            return 'from-blue-500/20 to-cyan-500/20 border-blue-500/30';
    }
}
function tierIcon(tier) {
    switch(tier){
        case 'crash':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"];
        case 'intensive':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"];
        case 'standard':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"];
        case 'extended':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"];
        default:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"];
    }
}
const StudyPlanSection = ({ examType, monthsOverride, heading, themed = false })=>{
    _s();
    const { openDemoModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DemoBookingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDemoModal"])();
    const months = monthsOverride ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$studyPlanGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonthsUntilExam"])(examType);
    const plan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StudyPlanSection.useMemo[plan]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$studyPlanGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateStudyPlan"])(examType, months)
    }["StudyPlanSection.useMemo[plan]"], [
        examType,
        months
    ]);
    const TierIcon = tierIcon(plan.tier);
    // Show first 3 months as a preview
    const previewMonths = plan.months.slice(0, 3);
    const cardBg = themed ? 'bg-secondary/40 border-border' : 'bg-white/[0.04] border-white/10';
    const text = themed ? 'text-foreground' : 'text-white';
    const textMuted = themed ? 'text-muted-foreground' : 'text-gray-400';
    const textAccent = themed ? 'text-primary' : 'text-amber-400';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-12 sm:py-16 px-4 sm:px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto",
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
                    className: "text-center mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: `font-display font-bold text-xl sm:text-2xl md:text-3xl ${text} mb-3`,
                            children: heading || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Your Personalised",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: themed ? 'text-gradient-gold' : 'bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent',
                                        children: [
                                            examType,
                                            " ",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"],
                                            " Study Plan"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/StudyPlanSection.tsx",
                                        lineNumber: 109,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/src/components/StudyPlanSection.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `${textMuted} text-sm sm:text-base max-w-2xl mx-auto`,
                            children: [
                                months,
                                " months until ",
                                examType,
                                " ",
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"],
                                " — your personalised ",
                                plan.tierLabel,
                                " is ready. Curriculum, fee, and schedule auto-adjust based on time remaining."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StudyPlanSection.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/StudyPlanSection.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
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
                    className: `bg-gradient-to-r ${tierGradient(plan.tier)} border rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-4 mb-8`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TierIcon, {
                            className: `w-10 h-10 ${textAccent} flex-shrink-0`
                        }, void 0, false, {
                            fileName: "[project]/src/components/StudyPlanSection.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 text-center sm:text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: `font-bold text-lg ${text}`,
                                    children: plan.tierLabel
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StudyPlanSection.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `${textMuted} text-sm mt-0.5`,
                                    children: [
                                        plan.summary.slice(0, 150),
                                        "…"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/StudyPlanSection.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StudyPlanSection.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center gap-1 flex-shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `${textMuted} text-xs uppercase`,
                                    children: "Prorated Fee"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StudyPlanSection.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `${text} font-bold text-xl`,
                                    children: plan.fee
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StudyPlanSection.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StudyPlanSection.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/StudyPlanSection.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-3 mb-8",
                    children: [
                        {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
                            label: 'Duration',
                            value: `${plan.totalMonths} months`
                        },
                        {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IndianRupee$3e$__["IndianRupee"],
                            label: 'Fee',
                            value: plan.fee
                        },
                        {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
                            label: 'Mock Tests',
                            value: `${plan.months.reduce((s, m)=>s + m.mockTests, 0)} total`
                        },
                        {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
                            label: 'Weekly Hours',
                            value: `${plan.months[0]?.weeklyHours ?? 20} hrs`
                        }
                    ].map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 15
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
                            className: `${cardBg} border rounded-xl p-3.5 text-center`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(stat.icon, {
                                    className: `w-5 h-5 mx-auto mb-1.5 ${textAccent}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StudyPlanSection.tsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `${textMuted} text-[10px] uppercase tracking-wider`,
                                    children: stat.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StudyPlanSection.tsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `${text} font-semibold text-sm mt-0.5`,
                                    children: stat.value
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StudyPlanSection.tsx",
                                    lineNumber: 157,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, i, true, {
                            fileName: "[project]/src/components/StudyPlanSection.tsx",
                            lineNumber: 147,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/StudyPlanSection.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: `font-bold text-base ${text} mb-1`,
                            children: [
                                "Plan Preview — First ",
                                previewMonths.length,
                                " Months"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StudyPlanSection.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        previewMonths.map((block)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    x: -15
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    delay: block.month * 0.08
                                },
                                className: `${cardBg} border rounded-xl p-4`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `w-8 h-8 rounded-full border-2 ${textAccent} border-current flex items-center justify-center text-xs font-bold flex-shrink-0`,
                                                children: block.month
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/StudyPlanSection.tsx",
                                                lineNumber: 177,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `${text} font-semibold text-sm`,
                                                        children: block.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/StudyPlanSection.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `${textMuted} text-xs`,
                                                        children: [
                                                            block.weeklyHours,
                                                            " hrs/week · ",
                                                            block.mockTests,
                                                            " mock",
                                                            block.mockTests > 1 ? 's' : ''
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/StudyPlanSection.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/StudyPlanSection.tsx",
                                                lineNumber: 180,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/StudyPlanSection.tsx",
                                        lineNumber: 176,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid sm:grid-cols-3 gap-2",
                                        children: block.subjects.map((subj)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `${textAccent} text-xs font-medium mb-1`,
                                                        children: subj.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/StudyPlanSection.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "space-y-0.5",
                                                        children: [
                                                            subj.topics.slice(0, 3).map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: `flex items-start gap-1.5 ${textMuted} text-xs`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                            className: "w-3 h-3 mt-0.5 text-green-500 flex-shrink-0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/StudyPlanSection.tsx",
                                                                            lineNumber: 194,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "line-clamp-1",
                                                                            children: t
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/StudyPlanSection.tsx",
                                                                            lineNumber: 195,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, i, true, {
                                                                    fileName: "[project]/src/components/StudyPlanSection.tsx",
                                                                    lineNumber: 193,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))),
                                                            subj.topics.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: `${textMuted} text-xs pl-5`,
                                                                children: [
                                                                    "+",
                                                                    subj.topics.length - 3,
                                                                    " more"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/StudyPlanSection.tsx",
                                                                lineNumber: 199,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/StudyPlanSection.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, subj.name, true, {
                                                fileName: "[project]/src/components/StudyPlanSection.tsx",
                                                lineNumber: 189,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StudyPlanSection.tsx",
                                        lineNumber: 187,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, block.month, true, {
                                fileName: "[project]/src/components/StudyPlanSection.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))),
                        plan.months.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `${textMuted} text-xs text-center`,
                            children: [
                                "+ ",
                                plan.months.length - 3,
                                " more months in the full plan"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StudyPlanSection.tsx",
                            lineNumber: 210,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/StudyPlanSection.tsx",
                    lineNumber: 163,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row items-center justify-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                            to: "/study-plan",
                            className: "w-full sm:w-auto px-7 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-amber-500/20 transition flex items-center justify-center gap-2 text-sm",
                            children: [
                                "View Full ",
                                months,
                                "-Month Plan ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StudyPlanSection.tsx",
                                    lineNumber: 222,
                                    columnNumber: 43
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StudyPlanSection.tsx",
                            lineNumber: 218,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: openDemoModal,
                            className: `w-full sm:w-auto px-7 py-3 ${themed ? 'border border-border text-foreground hover:border-primary hover:text-primary' : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'} rounded-full transition flex items-center justify-center gap-2 text-sm`,
                            children: [
                                "Book Free Trial ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StudyPlanSection.tsx",
                                    lineNumber: 228,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StudyPlanSection.tsx",
                            lineNumber: 224,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/StudyPlanSection.tsx",
                    lineNumber: 217,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/StudyPlanSection.tsx",
            lineNumber: 97,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/StudyPlanSection.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(StudyPlanSection, "m3/LTI37Sk7E/KplBE3cqa2hEkc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DemoBookingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDemoModal"]
    ];
});
_c = StudyPlanSection;
var _c;
__turbopack_context__.k.register(_c, "StudyPlanSection");
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
"[project]/src/lib/examCalendar.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Exam Calendar Utility
 * Auto-updates exam dates, countdowns, and preparation phases.
 * Page content changes based on exam proximity — Google sees dynamic relevance.
 */ __turbopack_context__.s([
    "getDaysUntilExam",
    ()=>getDaysUntilExam,
    "getExamInfo",
    ()=>getExamInfo,
    "getNextUpcomingExam",
    ()=>getNextUpcomingExam,
    "getPreparationPhase",
    ()=>getPreparationPhase,
    "getUrgencyLevel",
    ()=>getUrgencyLevel
]);
// Update these dates each year (or automate based on NTA announcements)
const examDates = {
    jeeMain2026Session1: {
        label: 'JEE Main 2026 — Session 1',
        shortLabel: 'JEE Main S1',
        date: new Date('2026-01-20')
    },
    jeeMain2026Session2: {
        label: 'JEE Main 2026 — Session 2',
        shortLabel: 'JEE Main S2',
        date: new Date('2026-04-15')
    },
    jeeAdvanced2026: {
        label: 'JEE Advanced 2026',
        shortLabel: 'JEE Adv.',
        date: new Date('2026-05-24')
    },
    neet2026: {
        label: 'NEET UG 2026',
        shortLabel: 'NEET 2026',
        date: new Date('2026-05-03')
    },
    jeeMain2027Session1: {
        label: 'JEE Main 2027 — Session 1',
        shortLabel: 'JEE Main S1',
        date: new Date('2027-01-20')
    },
    jeeMain2027Session2: {
        label: 'JEE Main 2027 — Session 2',
        shortLabel: 'JEE Main S2',
        date: new Date('2027-04-15')
    },
    jeeAdvanced2027: {
        label: 'JEE Advanced 2027',
        shortLabel: 'JEE Adv.',
        date: new Date('2027-05-25')
    },
    neet2027: {
        label: 'NEET UG 2027',
        shortLabel: 'NEET 2027',
        date: new Date('2027-05-04')
    },
    jeeMain2028Session1: {
        label: 'JEE Main 2028 — Session 1',
        shortLabel: 'JEE Main S1',
        date: new Date('2028-01-20')
    },
    neet2028: {
        label: 'NEET UG 2028',
        shortLabel: 'NEET 2028',
        date: new Date('2028-05-07')
    }
};
function getDaysUntilExam(exam) {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const examDate = examDates[exam].date;
    const diff = examDate.getTime() - now.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
function getPreparationPhase(exam) {
    const daysLeft = getDaysUntilExam(exam);
    if (daysLeft <= 0) return 'Exam completed — results awaited';
    if (daysLeft <= 7) return 'Exam Week — Stay calm & confident';
    if (daysLeft <= 30) return 'Final Revision — Formulas & key topics';
    if (daysLeft <= 90) return 'Revision Phase — Mock tests & weak areas';
    if (daysLeft <= 180) return 'Intensive Phase — Complete syllabus';
    return 'Foundation Phase — Build strong concepts';
}
function getUrgencyLevel(exam) {
    const daysLeft = getDaysUntilExam(exam);
    if (daysLeft <= 0) return 'low'; // past
    if (daysLeft <= 30) return 'critical';
    if (daysLeft <= 90) return 'high';
    if (daysLeft <= 180) return 'medium';
    return 'low';
}
function getNextUpcomingExam(category) {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const candidates = Object.entries(examDates).filter(([key])=>category === 'JEE' ? key.toLowerCase().startsWith('jee') : key.toLowerCase().startsWith('neet')).filter(([, info])=>info.date.getTime() >= now.getTime()).sort(([, a], [, b])=>a.date.getTime() - b.date.getTime());
    if (candidates.length === 0) return null;
    const [key, info] = candidates[0];
    return {
        key: key,
        info,
        daysLeft: getDaysUntilExam(key)
    };
}
function getExamInfo(exam) {
    return examDates[exam];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ExamCountdown.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExamCountdown",
    ()=>ExamCountdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/timer.js [app-client] (ecmascript) <export default as Timer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examCalendar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/examCalendar.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DemoBookingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DemoBookingModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const urgencyStyles = {
    low: 'border-blue-500/30 bg-blue-500/5 text-blue-400',
    medium: 'border-yellow-500/30 bg-yellow-500/5 text-yellow-400',
    high: 'border-orange-500/30 bg-orange-500/5 text-orange-400',
    critical: 'border-red-500/30 bg-red-500/5 text-red-400'
};
const urgencyBadge = {
    low: 'bg-blue-500/10 text-blue-400',
    medium: 'bg-yellow-500/10 text-yellow-400',
    high: 'bg-orange-500/10 text-orange-400',
    critical: 'bg-red-500/10 text-red-400'
};
const ExamCountdown = ({ exam = 'JEE' })=>{
    _s();
    const { openDemoModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DemoBookingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDemoModal"])();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExamCountdown.useEffect": ()=>{
            const update = {
                "ExamCountdown.useEffect.update": ()=>{
                    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examCalendar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNextUpcomingExam"])(exam);
                    if (!next) return;
                    setData({
                        key: next.key,
                        label: next.info.label,
                        daysLeft: next.daysLeft,
                        phase: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examCalendar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPreparationPhase"])(next.key),
                        urgency: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examCalendar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUrgencyLevel"])(next.key)
                    });
                }
            }["ExamCountdown.useEffect.update"];
            update();
            const interval = setInterval(update, 3_600_000); // hourly
            return ({
                "ExamCountdown.useEffect": ()=>clearInterval(interval)
            })["ExamCountdown.useEffect"];
        }
    }["ExamCountdown.useEffect"], [
        exam
    ]);
    if (!data || data.daysLeft <= 0) return null;
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
            duration: 0.5
        },
        className: `rounded-xl border p-4 sm:p-5 ${urgencyStyles[data.urgency]}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center w-12 h-12 rounded-lg bg-background/50",
                                children: data.urgency === 'critical' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    className: "w-6 h-6 animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExamCountdown.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"], {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExamCountdown.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExamCountdown.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-display font-black text-2xl sm:text-3xl",
                                                children: data.daysLeft
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ExamCountdown.tsx",
                                                lineNumber: 80,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs uppercase tracking-wider opacity-80",
                                                children: "Days Left"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ExamCountdown.tsx",
                                                lineNumber: 83,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ExamCountdown.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs opacity-70",
                                        children: data.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ExamCountdown.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ExamCountdown.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ExamCountdown.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:items-end gap-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full ${urgencyBadge[data.urgency]}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExamCountdown.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                data.phase
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ExamCountdown.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ExamCountdown.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ExamCountdown.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            data.urgency === 'critical' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 pt-3 border-t border-current/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-medium",
                        children: "⚠️ Exam is near! Book an intensive crash course NOW."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ExamCountdown.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: openDemoModal,
                        className: "text-xs font-bold uppercase tracking-wider px-4 py-2 bg-current/10 rounded hover:bg-current/20 transition-colors flex-shrink-0",
                        children: "Enroll Now →"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ExamCountdown.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ExamCountdown.tsx",
                lineNumber: 104,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ExamCountdown.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ExamCountdown, "g1cj/YbNhTW2955oRweEA8Bi/IU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DemoBookingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDemoModal"]
    ];
});
_c = ExamCountdown;
var _c;
__turbopack_context__.k.register(_c, "ExamCountdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
function getWeeklyTip(exam = 'JEE') {
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
const MonthlySuccessStory = ({ exam })=>{
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
"[project]/src/components/WeeklyTip.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WeeklyTip",
    ()=>WeeklyTip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rotatingContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/rotatingContent.ts [app-client] (ecmascript)");
;
;
;
const WeeklyTip = ({ exam = 'JEE' })=>{
    const tip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rotatingContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWeeklyTip"])(exam);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "rounded-xl border border-border bg-card p-4 sm:p-5 flex items-start gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                    className: "w-4 h-4 text-primary"
                }, void 0, false, {
                    fileName: "[project]/src/components/WeeklyTip.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/WeeklyTip.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "font-display font-bold text-foreground text-sm mb-1",
                        children: [
                            "📚 This Week's ",
                            exam,
                            " Tip"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WeeklyTip.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground text-xs sm:text-sm leading-relaxed",
                        children: tip
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeeklyTip.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WeeklyTip.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/WeeklyTip.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = WeeklyTip;
var _c;
__turbopack_context__.k.register(_c, "WeeklyTip");
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
"[project]/src/lib/contentFreshness.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLastUpdated",
    ()=>getLastUpdated,
    "shouldShowFreshnessSignal",
    ()=>shouldShowFreshnessSignal
]);
/**
 * Returns the year label for current exam cycle.
 * Delegates to the centralised examYears utility so the entire
 * site stays in sync.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/examYears.ts [app-client] (ecmascript)");
/**
 * Content Freshness Utility
 * Auto-updates "Last Updated" dates on all pages monthly,
 * signaling freshness to Google without manual work.
 */ const BASE_DATE = new Date('2026-02-18');
function getLastUpdated(pageSlug) {
    const now = new Date();
    // Calculate months elapsed since the base date
    const monthsSince = (now.getFullYear() - BASE_DATE.getFullYear()) * 12 + (now.getMonth() - BASE_DATE.getMonth());
    if (monthsSince <= 0) {
        return BASE_DATE.toISOString().split('T')[0]; // still in base month
    }
    const lastUpdated = new Date(BASE_DATE);
    lastUpdated.setMonth(lastUpdated.getMonth() + monthsSince);
    return lastUpdated.toISOString().split('T')[0]; // YYYY-MM-DD
}
;
function shouldShowFreshnessSignal(pageSlug) {
    const contentPages = [
        'jee-coaching',
        'neet-coaching',
        'blog',
        'location',
        'subject',
        'chapter',
        'topic',
        'comparison',
        'formula',
        'rank-predictor',
        'kota-alternative',
        'online-vs-offline'
    ];
    return contentPages.some((page)=>pageSlug.includes(page));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/examYears.ts [app-client] (ecmascript) <export getExamYear as getCurrentExamYear>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCurrentExamYear",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExamYear"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/examYears.ts [app-client] (ecmascript)");
}),
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
"[project]/src/views/JEECoaching.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RouterLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SEOHead$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SEOHead.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PageFooter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StudyPlanSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/StudyPlanSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageFAQ$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PageFAQ.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DemoBookingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DemoBookingModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeaturedSnippet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FeaturedSnippet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FreshnessBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FreshnessBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExamCountdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ExamCountdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MonthlySuccessStory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MonthlySuccessStory.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyTip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WeeklyTip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SeasonalBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SeasonalBanner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contentFreshness$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/contentFreshness.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__getExamYear__as__getCurrentExamYear$3e$__ = __turbopack_context__.i("[project]/src/lib/examYears.ts [app-client] (ecmascript) <export getExamYear as getCurrentExamYear>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/examYears.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$liveStats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/liveStats.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PeopleAlsoAsk$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PeopleAlsoAsk.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
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
;
;
;
;
;
const logo = '/images/logo.jpeg';
/* ─── data ───────────────────────────────────────────────── */ const stats = [
    {
        value: '500+',
        label: 'Students Mentored'
    },
    {
        value: '95%',
        label: 'Success Rate'
    },
    {
        value: 'AIR 42',
        label: 'Best JEE Rank'
    },
    {
        value: '50+',
        label: 'AIR <5K Achievers'
    }
];
const batchProblems = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        title: '100+ Students Per Batch',
        desc: 'In crowded batch classrooms, teachers can\'t even learn every student\'s name. Your doubts go unresolved, your weaknesses unnoticed. The teacher must follow a fixed pace — if you\'re fast you\'re bored; if you need more time you\'re left behind.'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
        title: 'Zero Personal Attention',
        desc: 'Batch coaching follows a single curriculum for all. Whether you struggle with Organic Chemistry or excel in Calculus, the teaching doesn\'t adapt. There\'s no one tracking your individual progress or adjusting your study plan.'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
        title: 'One-Size-Fits-All Curriculum',
        desc: 'Every student learns differently. Some are visual learners, others conceptual. Batch coaching ignores these differences entirely — delivering the same lecture, same pace, same problems to students with vastly different needs.'
    }
];
const methodology = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        title: 'Dedicated Personal Mentor',
        desc: 'You\'re paired with one expert mentor for your entire JEE preparation. They know your strengths, weaknesses, learning style, and goals. This is like having a personal trainer for academics — someone invested in YOUR success.'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"],
        title: 'Adaptive AI-Driven Curriculum',
        desc: 'Our diagnostic assessments identify your exact weak areas. Your study plan evolves weekly based on performance data — more time on challenging chapters, accelerated pace on strengths. No wasted effort.'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
        title: '1-on-1 Live Sessions (6 Days/Week)',
        desc: 'Daily live video classes with your dedicated mentor. Short, focused sessions designed for maximum retention. Every session recorded so you can re-watch any explanation during revision.'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
        title: 'Weekly Analytics & Parent Reports',
        desc: 'Comprehensive performance dashboards tracking topic-wise accuracy, speed improvements, mock test percentiles, and learning velocity. Parents receive detailed weekly progress reports.'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        title: 'Instant Doubt Resolution',
        desc: 'No more waiting in long doubt queues. Your mentor resolves doubts in real-time during sessions. Between sessions, our WhatsApp support channel ensures no question goes unanswered for more than 30 minutes.'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
        title: 'Complete JEE Syllabus Coverage',
        desc: 'Comprehensive coverage of JEE Main and Advanced syllabus across Physics, Chemistry, and Mathematics. Regular mock tests, previous year paper analysis, and exam-pattern practice included.'
    }
];
const testimonials = [
    {
        name: 'Aarav Sharma',
        city: 'Delhi',
        rank: 'AIR 42',
        before: 120,
        after: 285,
        quote: 'MindPeak completely transformed my JEE preparation. My mentor identified my weak areas in Rotational Mechanics and Organic Chemistry within the first week. The personalized approach helped me jump from 120 marks to 285 in JEE Advanced. I couldn\'t have achieved AIR 42 without this level of personal attention.'
    },
    {
        name: 'Priya Patel',
        city: 'Mumbai',
        rank: 'AIR 156',
        before: 95,
        after: 260,
        quote: 'I was struggling in a 200-student batch in Andheri. After switching to MindPeak\'s 1-on-1 coaching, my understanding of Physics Mechanics and Calculus improved dramatically. The daily sessions and weekly mock reviews gave me the confidence I needed.'
    },
    {
        name: 'Rohan Iyer',
        city: 'Bangalore',
        rank: 'AIR 312',
        before: 145,
        after: 270,
        quote: 'The adaptive curriculum was a game-changer. Instead of sitting through lectures on topics I already knew, my mentor focused on my specific problem areas. My mock scores improved by 125 marks in just 4 months.'
    }
];
const syllabus = [
    {
        subject: 'Physics',
        chapters: 25,
        topics: [
            'Mechanics (Kinematics, Laws of Motion, Rotational Dynamics)',
            'Electrodynamics (Electrostatics, Current Electricity, Magnetism)',
            'Optics & Modern Physics',
            'Thermodynamics & Heat Transfer',
            'Waves & Oscillations'
        ]
    },
    {
        subject: 'Chemistry',
        chapters: 30,
        topics: [
            'Physical Chemistry (Thermodynamics, Equilibrium, Electrochemistry)',
            'Organic Chemistry (Reaction Mechanisms, Named Reactions, Biomolecules)',
            'Inorganic Chemistry (Coordination, d-Block, Qualitative Analysis)',
            'General Chemistry (Atomic Structure, Chemical Bonding)',
            'Environmental Chemistry & Surface Chemistry'
        ]
    },
    {
        subject: 'Mathematics',
        chapters: 28,
        topics: [
            'Calculus (Limits, Differentiation, Integration, Differential Equations)',
            'Algebra (Complex Numbers, Matrices, Probability)',
            'Coordinate Geometry (Conics, Straight Lines, Circles)',
            'Trigonometry (Functions, Equations, Inverse Trig)',
            'Vectors & 3D Geometry'
        ]
    }
];
const pricingComparison = [
    {
        feature: 'Teaching Format',
        mindpeak: '1-on-1 Online',
        allen: 'Batch (100+)',
        resonance: 'Batch (80+)',
        fiitjee: 'Batch (60-80)'
    },
    {
        feature: 'Annual Fees',
        mindpeak: '₹1,00,000 – ₹2,30,000',
        allen: '₹1,20,000+',
        resonance: '₹1,00,000+',
        fiitjee: '₹1,50,000+'
    },
    {
        feature: 'Personal Mentor',
        mindpeak: '✓ Dedicated',
        allen: '✗ Shared',
        resonance: '✗ Shared',
        fiitjee: '✗ Shared'
    },
    {
        feature: 'Adaptive Curriculum',
        mindpeak: '✓ AI-Driven',
        allen: '✗ Fixed',
        resonance: '✗ Fixed',
        fiitjee: '✗ Fixed'
    },
    {
        feature: 'Doubt Resolution',
        mindpeak: '✓ Real-time 1-on-1',
        allen: 'Group Sessions',
        resonance: 'Limited Slots',
        fiitjee: 'Group Sessions'
    },
    {
        feature: 'Recorded Sessions',
        mindpeak: '✓ Every Class',
        allen: 'Limited',
        resonance: 'Limited',
        fiitjee: '✗ No'
    },
    {
        feature: 'Parent Reports',
        mindpeak: '✓ Weekly',
        allen: 'Quarterly',
        resonance: 'Monthly',
        fiitjee: 'Quarterly'
    },
    {
        feature: 'Travel Time',
        mindpeak: 'Zero (Online)',
        allen: '1-2 hrs/day',
        resonance: '1-2 hrs/day',
        fiitjee: '1-2 hrs/day'
    }
];
const paaQuestions = [
    {
        question: 'Is online JEE coaching effective?',
        answer: 'Yes — online 1-on-1 JEE coaching is highly effective when it provides personalized mentorship. MindPeak\'s online model delivers dedicated mentors, adaptive curricula, and daily live sessions. Students gain 100-150 extra marks on average, with results matching or exceeding top Kota institutes — all without travel time.'
    },
    {
        question: 'How much does JEE coaching cost in India?',
        answer: 'JEE coaching fees range from ₹50,000 to ₹3,00,000 per year depending on the format. Batch coaching at Allen or FIITJEE costs ₹1-2 lakh. MindPeak\'s personalized 1-on-1 coaching starts at ₹1,00,000/year, offering better value per hour through dedicated personal attention.'
    },
    {
        question: 'Can I crack JEE without Kota coaching?',
        answer: 'Absolutely. Many JEE toppers prepare from home with quality online coaching. MindPeak students have achieved AIR 42 without relocating to Kota. Personalized 1-on-1 mentorship, adaptive study plans, and daily live sessions deliver Kota-level preparation from any city in India.'
    },
    {
        question: 'How many hours should I study for JEE daily?',
        answer: '6-8 hours of focused, quality study daily is recommended for JEE. More important than hours is the quality of preparation — a personalized study plan that targets your weak areas is far more effective than 12-14 hours of unfocused batch coaching lectures.'
    },
    {
        question: 'What is the difference between JEE Main and JEE Advanced?',
        answer: 'JEE Main is the qualifying exam for NITs, IIITs, and GFTIs, while JEE Advanced — open only to JEE Main qualifiers — is the gateway to IITs. JEE Advanced tests deeper conceptual understanding with multi-concept problems. MindPeak\'s coaching covers both exams comprehensively.'
    },
    {
        question: 'Is personalized coaching better than batch coaching for JEE?',
        answer: 'Research and results consistently show personalized 1-on-1 coaching outperforms batch coaching. Personalized coaching adapts to each student\'s pace, learning style, and weak areas. MindPeak\'s 95% success rate with 1-on-1 mentorship significantly exceeds the typical 10-15% success rate of large batch centres.'
    }
];
const faqs = [
    {
        question: 'What makes MindPeak\'s JEE coaching different from batch coaching?',
        answer: 'MindPeak provides dedicated 1-on-1 mentorship where every student gets their own expert mentor, an adaptive curriculum tailored to their strengths and weaknesses, daily live sessions, weekly analytics, and real-time doubt resolution. Unlike batch coaching with 100+ students, our approach ensures every minute of preparation is optimized for YOUR specific needs.'
    },
    {
        question: 'What is the success rate for JEE at MindPeak?',
        answer: 'MindPeak has a 95% selection rate with over 500 students mentored. Our best result is AIR 42 in JEE Advanced, and over 50 students have achieved AIR under 5,000. These results speak to the effectiveness of personalized 1-on-1 coaching versus generic batch teaching.'
    },
    {
        question: 'How are JEE classes conducted at MindPeak?',
        answer: 'Classes are conducted via live 1-on-1 video sessions with your dedicated mentor, 6 days a week. Sessions are short and focused for maximum retention. Every class is recorded so you can re-watch any explanation during revision. You can attend from anywhere — all you need is a laptop/tablet and internet.'
    },
    {
        question: 'Does MindPeak cover both JEE Main and JEE Advanced?',
        answer: 'Yes! Our JEE coaching program comprehensively covers the syllabus for both JEE Main and JEE Advanced. We offer separate 1-year and 2-year programs, each including complete Physics, Chemistry, and Mathematics coverage, weekly mock tests in CBT format, and previous year paper analysis.'
    },
    {
        question: 'Can I join mid-year? Is there a batch dependency?',
        answer: 'Since our coaching is entirely 1-on-1, there are no batches and no fixed start dates. You can join at any time. Your mentor will create a customized study plan aligned with your exam timeline, covering any syllabus gaps from the start.'
    },
    {
        question: 'What is the fee for JEE coaching at MindPeak?',
        answer: 'MindPeak offers flexible pricing with monthly, quarterly, and annual plans. Our 2-year JEE program starts at ₹2,30,000 + GST and 1-year programs at ₹1,99,000 + GST (discounted to ₹1,30,000 with current offers), which is competitive with premium coaching and delivers significantly more value through 1-on-1 attention. Book a free demo to discuss personalized pricing.'
    },
    {
        question: 'Do you also help with CBSE board exams alongside JEE?',
        answer: 'Absolutely. Our mentors integrate board exam preparation with JEE coaching. Since the CBSE syllabus overlaps significantly with JEE, our approach ensures you excel in both without spreading yourself thin. We adjust the curriculum around your board exam schedule.'
    }
];
/* ─── page ───────────────────────────────────────────────── */ const JEECoaching = ()=>{
    _s();
    const { openDemoModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DemoBookingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDemoModal"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JEECoaching.useEffect": ()=>{
            window.scrollTo(0, 0);
        }
    }["JEECoaching.useEffect"], []);
    const lastUpdated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contentFreshness$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLastUpdated"])('jee-coaching');
    const examYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__getExamYear__as__getCurrentExamYear$3e$__["getCurrentExamYear"])('JEE');
    const courseSchema = {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: 'JEE Advanced Personalized Coaching — MindPeak Institute',
        description: 'Comprehensive 1-on-1 personalized JEE Main and Advanced coaching with dedicated mentors, adaptive curriculum, and 95% success rate.',
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
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: String((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$liveStats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLiveStat"])('studentsEnrolled')),
            bestRating: '5'
        },
        dateModified: lastUpdated,
        hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'online',
            courseWorkload: 'P1Y'
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
                name: 'JEE Coaching',
                item: 'https://mindpeakinstitute.com/jee-coaching'
            }
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SEOHead$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEOHead"], {
                title: "JEE Online Coaching — Personalized 1-on-1 Mentorship | 95% Success Rate | MindPeak",
                description: "Achieve AIR <5K with personalized JEE coaching. Dedicated mentors, adaptive curriculum, 95% success rate. 500+ students trust MindPeak. Start free trial today!",
                jsonLd: [
                    courseSchema,
                    breadcrumbSchema,
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageFAQ$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildFAQSchema"])([
                        ...faqs,
                        ...paaQuestions
                    ])
                ]
            }, void 0, false, {
                fileName: "[project]/src/views/JEECoaching.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navbar"], {}, void 0, false, {
                fileName: "[project]/src/views/JEECoaching.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "bg-background min-h-screen pt-20 sm:pt-24 overflow-x-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        "aria-label": "Breadcrumb",
                        className: "max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                            className: "flex items-center gap-2 text-[11px] tracking-[0.05em] text-muted-foreground/60",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                        to: "/",
                                        className: "hover:text-foreground/70 transition-colors duration-300",
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/JEECoaching.tsx",
                                        lineNumber: 170,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-foreground/15",
                                    children: "/"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "text-foreground/80",
                                    children: "JEE Coaching"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/JEECoaching.tsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/JEECoaching.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "max-w-4xl mx-auto px-4 sm:px-6 pb-12 sm:pb-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            animate: {
                                opacity: 1,
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
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FreshnessBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FreshnessBadge"], {
                                    lastUpdated: lastUpdated,
                                    verifiedFor: examYear
                                }, void 0, false, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-6 sm:mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: logo,
                                            alt: "MindPeak Institute",
                                            className: "w-10 h-10 sm:w-12 sm:h-12 rounded-full ring-1 ring-foreground/[0.08] flex-shrink-0",
                                            width: 48,
                                            height: 48
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 182,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-primary/70 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-medium",
                                                    children: "MindPeak Institute"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground/60 text-xs truncate",
                                                    children: "Personalized 1-on-1 JEE Main & Advanced Coaching"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 183,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-display font-bold text-foreground mb-5 sm:mb-6 tracking-[-0.03em]",
                                    style: {
                                        fontSize: 'clamp(1.6rem, 5vw, 3.5rem)',
                                        lineHeight: 1.1
                                    },
                                    children: [
                                        "JEE Online Coaching —",
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gradient-gold",
                                            children: "Personalized 1-on-1 Mentorship"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 191,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        ' ',
                                        "for AIR <5K"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground/70 text-sm sm:text-base leading-[1.8] max-w-3xl mb-8 sm:mb-10",
                                    children: "Tired of being a face in a 200-student classroom? At MindPeak Institute, every JEE aspirant receives a dedicated personal mentor, an AI-driven adaptive curriculum, and daily 1-on-1 live sessions — six days a week. With a 95% success rate and 500+ students mentored, our approach has produced AIR 42 in JEE Advanced and 50+ students under AIR 5,000."
                                }, void 0, false, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-3 sm:gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: openDemoModal,
                                            className: "group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 bg-primary text-primary-foreground text-[12px] uppercase tracking-[0.15em] font-medium rounded-full hover:shadow-[0_0_40px_-8px_hsl(var(--primary)/0.5)] transition-all duration-500",
                                            children: [
                                                "Start Your Free Trial",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-5 h-5 rounded-full border border-current grid place-items-center transition-transform duration-500 group-hover:rotate-45",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "10",
                                                        height: "10",
                                                        viewBox: "0 0 10 10",
                                                        fill: "none",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M1 9L9 1M9 1H2M9 1V8",
                                                            stroke: "currentColor",
                                                            strokeWidth: "1.2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                                            lineNumber: 206,
                                                            columnNumber: 79
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/JEECoaching.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 200,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "tel:+918219457704",
                                            className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 border border-foreground/[0.1] text-foreground/80 text-[12px] uppercase tracking-[0.15em] font-medium rounded-full hover:border-primary/20 hover:text-foreground transition-all duration-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    className: "w-3.5 h-3.5",
                                                    strokeWidth: 1.5
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " +91 82194 57704"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 209,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/JEECoaching.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/JEECoaching.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-5xl mx-auto px-4 sm:px-6 pb-6 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExamCountdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExamCountdown"], {
                                exam: "JEE"
                            }, void 0, false, {
                                fileName: "[project]/src/views/JEECoaching.tsx",
                                lineNumber: 221,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SeasonalBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SeasonalBanner"], {}, void 0, false, {
                                fileName: "[project]/src/views/JEECoaching.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/JEECoaching.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 sm:px-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeaturedSnippet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FeaturedSnippet"], {
                            question: `What is the best online coaching for JEE ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]}?`,
                            answer: "MindPeak Institute is India's top-rated online JEE coaching, providing dedicated 1-on-1 mentorship with IIT alumni. With a 95% success rate, AIR 42 best rank, and 500+ students mentored, MindPeak's adaptive AI-driven curriculum and daily live sessions deliver personalized preparation that batch coaching cannot match.",
                            bullets: [
                                'Dedicated personal mentor for entire JEE journey',
                                'AI-driven adaptive curriculum targeting weak areas',
                                'Daily 1-on-1 live sessions, 6 days a week',
                                'Real-time doubt resolution (under 30 min response)',
                                'Weekly analytics & parent progress reports',
                                'Complete JEE Main + Advanced syllabus coverage'
                            ]
                        }, void 0, false, {
                            fileName: "[project]/src/views/JEECoaching.tsx",
                            lineNumber: 227,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/JEECoaching.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-12 sm:py-16 px-4 sm:px-6 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/src/views/JEECoaching.tsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/src/views/JEECoaching.tsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center",
                                children: stats.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 15
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        transition: {
                                            delay: i * 0.06,
                                            duration: 0.6,
                                            ease: [
                                                0.16,
                                                1,
                                                0.3,
                                                1
                                            ]
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-display font-bold text-primary text-2xl md:text-3xl mb-1 tracking-tight",
                                                children: s.value
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/JEECoaching.tsx",
                                                lineNumber: 248,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-muted-foreground/60 text-[10px] uppercase tracking-[0.2em]",
                                                children: s.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/JEECoaching.tsx",
                                                lineNumber: 249,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, s.label, true, {
                                        fileName: "[project]/src/views/JEECoaching.tsx",
                                        lineNumber: 247,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/views/JEECoaching.tsx",
                                lineNumber: 245,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/JEECoaching.tsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StudyPlanSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StudyPlanSection"], {
                        examType: "JEE",
                        themed: true
                    }, void 0, false, {
                        fileName: "[project]/src/views/JEECoaching.tsx",
                        lineNumber: 256,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24",
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
                            transition: {
                                duration: 0.7,
                                ease: [
                                    0.16,
                                    1,
                                    0.3,
                                    1
                                ]
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-px w-8 bg-destructive/20"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 262,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] uppercase tracking-[0.3em] text-destructive/60 font-medium",
                                            children: "The Problem"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 263,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 261,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl mb-4 tracking-[-0.02em]",
                                    children: [
                                        "Why Traditional JEE ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gradient-gold",
                                            children: "Batch Coaching Fails"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 266,
                                            columnNumber: 35
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 265,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground/70 text-sm sm:text-base leading-[1.8] max-w-3xl mb-10",
                                    children: "Every year lakhs of students join batch coaching centres with dreams of cracking JEE. Most leave disappointed. Here’s why the factory-model approach fails."
                                }, void 0, false, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 268,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-3 gap-4",
                                    children: batchProblems.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                                delay: i * 0.08,
                                                duration: 0.6,
                                                ease: [
                                                    0.16,
                                                    1,
                                                    0.3,
                                                    1
                                                ]
                                            },
                                            className: "rounded-2xl border border-destructive/10 bg-destructive/[0.03] p-7 hover:border-destructive/20 transition-all duration-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(p.icon, {
                                                    className: "w-5 h-5 text-destructive/60 mb-5",
                                                    strokeWidth: 1.5
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-display font-semibold text-foreground text-base mb-2 tracking-[-0.01em]",
                                                    children: p.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground/70 text-sm leading-[1.7]",
                                                    children: p.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 273,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 271,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/JEECoaching.tsx",
                            lineNumber: 260,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/JEECoaching.tsx",
                        lineNumber: 259,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-20 sm:py-28 px-4 sm:px-6 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/src/views/JEECoaching.tsx",
                                lineNumber: 292,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-4xl mx-auto",
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
                                    transition: {
                                        duration: 0.7,
                                        ease: [
                                            0.16,
                                            1,
                                            0.3,
                                            1
                                        ]
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "h-px w-8 bg-primary/20"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] uppercase tracking-[0.3em] text-primary/60 font-medium",
                                                    children: "Our Methodology"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                    lineNumber: 297,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 295,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "font-display font-bold text-foreground text-2xl md:text-3xl mb-4 tracking-[-0.02em]",
                                            children: [
                                                "The MindPeak ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gradient-gold",
                                                    children: "Difference"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 30
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 299,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground/70 text-sm sm:text-base leading-[1.8] max-w-3xl mb-12",
                                            children: "Every JEE aspirant deserves personalized attention. Our methodology combines IIT alumni mentors with data-driven adaptive learning."
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 302,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
                                            children: methodology.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                                        delay: i * 0.06,
                                                        duration: 0.6,
                                                        ease: [
                                                            0.16,
                                                            1,
                                                            0.3,
                                                            1
                                                        ]
                                                    },
                                                    className: "group rounded-2xl border border-foreground/[0.06] bg-foreground/[0.02] p-7 hover:border-primary/15 hover:bg-foreground/[0.04] transition-all duration-500",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[11px] tracking-[0.15em] text-muted-foreground/30 font-medium",
                                                            children: String(i + 1).padStart(2, '0')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                                            lineNumber: 315,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(m.icon, {
                                                            className: "w-5 h-5 text-primary/60 mt-4 mb-4",
                                                            strokeWidth: 1.5
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                                            lineNumber: 316,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-display font-semibold text-foreground text-sm mb-2 tracking-[-0.01em]",
                                                            children: m.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                                            lineNumber: 317,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-muted-foreground/70 text-sm leading-[1.7]",
                                                            children: m.desc
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                                            lineNumber: 318,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                    lineNumber: 307,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 305,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 294,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/views/JEECoaching.tsx",
                                lineNumber: 293,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/JEECoaching.tsx",
                        lineNumber: 291,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24",
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
                            transition: {
                                duration: 0.7,
                                ease: [
                                    0.16,
                                    1,
                                    0.3,
                                    1
                                ]
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-px w-8 bg-foreground/10"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 330,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] uppercase tracking-[0.3em] text-muted-foreground/60 font-medium",
                                            children: "Stories"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 331,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 329,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-display font-bold text-foreground text-2xl md:text-3xl mb-10 tracking-[-0.02em]",
                                    children: [
                                        "JEE ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gradient-gold",
                                            children: "Success Stories"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 334,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 333,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-3 gap-4",
                                    children: testimonials.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                                delay: i * 0.08,
                                                duration: 0.6,
                                                ease: [
                                                    0.16,
                                                    1,
                                                    0.3,
                                                    1
                                                ]
                                            },
                                            className: "rounded-2xl border border-foreground/[0.06] bg-foreground/[0.02] p-7",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-display font-semibold text-foreground text-sm",
                                                                    children: t.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                                    lineNumber: 348,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-muted-foreground/60 text-[11px] tracking-[0.05em]",
                                                                    children: t.city
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                                    lineNumber: 349,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                                            lineNumber: 347,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-primary/70 text-[11px] tracking-[0.1em] font-medium",
                                                            children: t.rank
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                                            lineNumber: 351,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 mb-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 text-center p-3 rounded-xl bg-foreground/[0.02] border border-foreground/[0.04]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-destructive/70 font-display font-bold text-lg",
                                                                    children: t.before
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                                    lineNumber: 355,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-muted-foreground/50 text-[10px] uppercase tracking-[0.1em]",
                                                                    children: "Before"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                                    lineNumber: 356,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                                            lineNumber: 354,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            className: "w-3.5 h-3.5 text-primary/50 flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                                            lineNumber: 358,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 text-center p-3 rounded-xl bg-foreground/[0.02] border border-foreground/[0.04]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-primary/80 font-display font-bold text-lg",
                                                                    children: t.after
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                                    lineNumber: 360,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-muted-foreground/50 text-[10px] uppercase tracking-[0.1em]",
                                                                    children: "After"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                                    lineNumber: 361,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                                            lineNumber: 359,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                    lineNumber: 353,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground/70 text-sm leading-[1.7] italic",
                                                    children: [
                                                        "“",
                                                        t.quote,
                                                        "”"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                    lineNumber: 364,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 338,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 336,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/JEECoaching.tsx",
                            lineNumber: 328,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/JEECoaching.tsx",
                        lineNumber: 327,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-20 sm:py-28 px-4 sm:px-6 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/src/views/JEECoaching.tsx",
                                lineNumber: 373,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-4xl mx-auto",
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
                                    transition: {
                                        duration: 0.7,
                                        ease: [
                                            0.16,
                                            1,
                                            0.3,
                                            1
                                        ]
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                    className: "w-4 h-4 text-primary/60",
                                                    strokeWidth: 1.5
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                    lineNumber: 377,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] uppercase tracking-[0.3em] text-primary/60 font-medium",
                                                    children: "Syllabus"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                    lineNumber: 378,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 376,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "font-display font-bold text-foreground text-2xl md:text-3xl mb-4 tracking-[-0.02em]",
                                            children: [
                                                "Complete JEE ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gradient-gold",
                                                    children: "Syllabus Coverage"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                    lineNumber: 381,
                                                    columnNumber: 30
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 380,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground/70 text-sm sm:text-base leading-[1.8] max-w-3xl mb-10",
                                            children: "Every chapter prescribed for JEE Main and JEE Advanced, adapted to your individual pace."
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 383,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid md:grid-cols-3 gap-4",
                                            children: syllabus.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        opacity: 0,
                                                        y: 15
                                                    },
                                                    whileInView: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    viewport: {
                                                        once: true
                                                    },
                                                    transition: {
                                                        delay: i * 0.06,
                                                        duration: 0.5,
                                                        ease: [
                                                            0.16,
                                                            1,
                                                            0.3,
                                                            1
                                                        ]
                                                    },
                                                    className: "rounded-2xl border border-foreground/[0.06] bg-foreground/[0.02] p-7",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between mb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-display font-semibold text-foreground text-base tracking-[-0.01em]",
                                                                    children: s.subject
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                                    lineNumber: 391,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-primary/60 text-[10px] uppercase tracking-[0.15em] font-medium",
                                                                    children: [
                                                                        s.chapters,
                                                                        " Ch"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                                    lineNumber: 392,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                                            lineNumber: 390,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "space-y-2",
                                                            children: s.topics.map((topic, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "flex items-start gap-2 text-sm text-muted-foreground/70",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "w-1 h-1 rounded-full bg-primary/40 mt-2 shrink-0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                                                            lineNumber: 397,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        topic
                                                                    ]
                                                                }, j, true, {
                                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                                    lineNumber: 396,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                                            lineNumber: 394,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                    lineNumber: 388,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 386,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 375,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/views/JEECoaching.tsx",
                                lineNumber: 374,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/JEECoaching.tsx",
                        lineNumber: 372,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24",
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
                            transition: {
                                duration: 0.7,
                                ease: [
                                    0.16,
                                    1,
                                    0.3,
                                    1
                                ]
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-px w-8 bg-foreground/10"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 413,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] uppercase tracking-[0.3em] text-muted-foreground/60 font-medium",
                                            children: "Compare"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 414,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 412,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-display font-bold text-foreground text-2xl md:text-3xl mb-4 tracking-[-0.02em]",
                                    children: [
                                        "Transparent ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gradient-gold",
                                            children: "Pricing Comparison"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 417,
                                            columnNumber: 27
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 416,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground/70 text-sm sm:text-base leading-[1.8] max-w-3xl mb-10",
                                    children: "See how MindPeak’s personalized 1-on-1 JEE coaching stacks up against traditional batch coaching."
                                }, void 0, false, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 419,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-x-auto rounded-2xl border border-foreground/[0.06]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "w-full text-sm min-w-[600px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "bg-foreground/[0.03]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-left px-5 py-4 text-muted-foreground/60 text-[11px] uppercase tracking-[0.15em] font-medium",
                                                            children: "Feature"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                                            lineNumber: 426,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-center px-5 py-4 text-primary/70 text-[11px] uppercase tracking-[0.15em] font-medium",
                                                            children: "MindPeak"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                                            lineNumber: 427,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-center px-5 py-4 text-muted-foreground/50 text-[11px] uppercase tracking-[0.15em] font-medium",
                                                            children: "Allen"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                                            lineNumber: 428,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-center px-5 py-4 text-muted-foreground/50 text-[11px] uppercase tracking-[0.15em] font-medium",
                                                            children: "Resonance"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                                            lineNumber: 429,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-center px-5 py-4 text-muted-foreground/50 text-[11px] uppercase tracking-[0.15em] font-medium",
                                                            children: "FIITJEE"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                                            lineNumber: 430,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                    lineNumber: 425,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/JEECoaching.tsx",
                                                lineNumber: 424,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: pricingComparison.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "border-t border-foreground/[0.04] hover:bg-foreground/[0.02] transition-colors duration-300",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-5 py-3.5 text-foreground/80 font-medium text-xs sm:text-sm",
                                                                children: row.feature
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/JEECoaching.tsx",
                                                                lineNumber: 436,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-5 py-3.5 text-center text-primary/80 font-medium text-xs sm:text-sm",
                                                                children: row.mindpeak
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/JEECoaching.tsx",
                                                                lineNumber: 437,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-5 py-3.5 text-center text-muted-foreground/60 text-xs sm:text-sm",
                                                                children: row.allen
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/JEECoaching.tsx",
                                                                lineNumber: 438,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-5 py-3.5 text-center text-muted-foreground/60 text-xs sm:text-sm",
                                                                children: row.resonance
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/JEECoaching.tsx",
                                                                lineNumber: 439,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-5 py-3.5 text-center text-muted-foreground/60 text-xs sm:text-sm",
                                                                children: row.fiitjee
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/JEECoaching.tsx",
                                                                lineNumber: 440,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/src/views/JEECoaching.tsx",
                                                        lineNumber: 435,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/JEECoaching.tsx",
                                                lineNumber: 433,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/JEECoaching.tsx",
                                        lineNumber: 423,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 422,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/JEECoaching.tsx",
                            lineNumber: 411,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/JEECoaching.tsx",
                        lineNumber: 410,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-12 sm:py-16 px-4 sm:px-6 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/src/views/JEECoaching.tsx",
                                lineNumber: 451,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-4xl mx-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-display font-semibold text-foreground text-sm mb-5 tracking-[-0.01em]",
                                        children: "Explore More"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/JEECoaching.tsx",
                                        lineNumber: 453,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: [
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
                                                label: 'JEE Mock Test Strategy',
                                                to: '/jee-mock-test-strategy'
                                            },
                                            {
                                                label: 'NEET Coaching',
                                                to: '/neet-coaching'
                                            },
                                            {
                                                label: 'All Courses & Pricing',
                                                to: '/courses'
                                            },
                                            {
                                                label: 'Kota Coaching Alternative',
                                                to: '/kota-coaching-alternative'
                                            },
                                            {
                                                label: 'Online vs Offline Coaching',
                                                to: '/online-vs-offline-jee-coaching'
                                            },
                                            {
                                                label: 'MindPeak vs Allen',
                                                to: '/mindpeak-vs-allen'
                                            },
                                            {
                                                label: 'MindPeak vs FIITJEE',
                                                to: '/mindpeak-vs-fiitjee'
                                            },
                                            {
                                                label: 'JEE Coaching in Delhi',
                                                to: '/jee-coaching-in-delhi'
                                            },
                                            {
                                                label: 'JEE Coaching in Mumbai',
                                                to: '/jee-coaching-in-mumbai'
                                            },
                                            {
                                                label: 'Blog — JEE Tips',
                                                to: '/blog'
                                            }
                                        ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                                to: l.to,
                                                className: "px-4 py-2.5 rounded-full border border-foreground/[0.06] bg-foreground/[0.02] text-foreground/70 text-[11px] tracking-[0.05em] hover:border-primary/15 hover:text-foreground transition-all duration-400 flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "w-3 h-3 text-primary/50",
                                                        strokeWidth: 1.5
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/JEECoaching.tsx",
                                                        lineNumber: 475,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " ",
                                                    l.label
                                                ]
                                            }, l.to, true, {
                                                fileName: "[project]/src/views/JEECoaching.tsx",
                                                lineNumber: 470,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/JEECoaching.tsx",
                                        lineNumber: 454,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/JEECoaching.tsx",
                                lineNumber: 452,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/JEECoaching.tsx",
                        lineNumber: 450,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MonthlySuccessStory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MonthlySuccessStory"], {
                                exam: "JEE"
                            }, void 0, false, {
                                fileName: "[project]/src/views/JEECoaching.tsx",
                                lineNumber: 484,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeeklyTip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WeeklyTip"], {
                                exam: "JEE"
                            }, void 0, false, {
                                fileName: "[project]/src/views/JEECoaching.tsx",
                                lineNumber: 485,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/JEECoaching.tsx",
                        lineNumber: 483,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PeopleAlsoAsk$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PeopleAlsoAsk"], {
                        questions: paaQuestions,
                        heading: "People Also Ask About JEE Coaching"
                    }, void 0, false, {
                        fileName: "[project]/src/views/JEECoaching.tsx",
                        lineNumber: 489,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageFAQ$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageFAQ"], {
                        items: faqs,
                        heading: "JEE Coaching",
                        highlight: "FAQs"
                    }, void 0, false, {
                        fileName: "[project]/src/views/JEECoaching.tsx",
                        lineNumber: 492,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-20 sm:py-28 px-4 sm:px-6 text-center relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/src/views/JEECoaching.tsx",
                                lineNumber: 496,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
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
                                transition: {
                                    duration: 0.7,
                                    ease: [
                                        0.16,
                                        1,
                                        0.3,
                                        1
                                    ]
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl mb-4 tracking-[-0.02em]",
                                        children: [
                                            "Start Your JEE Transformation ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gradient-gold",
                                                children: "Today"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/JEECoaching.tsx",
                                                lineNumber: 499,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/JEECoaching.tsx",
                                        lineNumber: 498,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground/70 text-sm sm:text-base mb-8 sm:mb-10 max-w-lg mx-auto",
                                        children: "Join 500+ students who transformed their JEE preparation with personalized 1-on-1 coaching."
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/JEECoaching.tsx",
                                        lineNumber: 501,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: openDemoModal,
                                        className: "group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-primary text-primary-foreground text-[13px] uppercase tracking-[0.15em] font-medium rounded-full hover:shadow-[0_0_40px_-8px_hsl(var(--primary)/0.5)] transition-all duration-500",
                                        children: [
                                            "Book Free Trial Class",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-5 h-5 rounded-full border border-current grid place-items-center transition-transform duration-500 group-hover:rotate-45",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "10",
                                                    height: "10",
                                                    viewBox: "0 0 10 10",
                                                    fill: "none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M1 9L9 1M9 1H2M9 1V8",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/JEECoaching.tsx",
                                                        lineNumber: 510,
                                                        columnNumber: 77
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                    lineNumber: 510,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/JEECoaching.tsx",
                                                lineNumber: 509,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/JEECoaching.tsx",
                                        lineNumber: 504,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/JEECoaching.tsx",
                                lineNumber: 497,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/JEECoaching.tsx",
                        lineNumber: 495,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageFooter"], {
                        extra: "JEE Online Coaching."
                    }, void 0, false, {
                        fileName: "[project]/src/views/JEECoaching.tsx",
                        lineNumber: 517,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/JEECoaching.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(JEECoaching, "u1MEFAjX95KcywKZaxnBJaaQagM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DemoBookingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDemoModal"]
    ];
});
_c = JEECoaching;
const __TURBOPACK__default__export__ = JEECoaching;
var _c;
__turbopack_context__.k.register(_c, "JEECoaching");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1b79a12d._.js.map
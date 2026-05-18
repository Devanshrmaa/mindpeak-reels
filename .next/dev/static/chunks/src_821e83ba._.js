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
const Link = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = (param, ref)=>{
    let { to, href, ...props } = param;
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
                "Navbar.useCallback[loadPracticeData]": (param)=>{
                    let [practice, neetPractice] = param;
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
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener('scroll', handleScroll, {
                        passive: true
                    })
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
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
                                height: 36
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-display font-semibold text-foreground text-base tracking-[0.05em]",
                                children: "MINDPEAK"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Navbar.tsx",
                        lineNumber: 157,
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
                                                    lineNumber: 181,
                                                    columnNumber: 28
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/Navbar.tsx",
                                            lineNumber: 170,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        desktopDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                            lineNumber: 190,
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
                                                                        lineNumber: 197,
                                                                        columnNumber: 31
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                        className: "w-4 h-4 text-muted-foreground"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/sections/Navbar.tsx",
                                                                        lineNumber: 198,
                                                                        columnNumber: 31
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, exam.slug, true, {
                                                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                                                lineNumber: 192,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                                    lineNumber: 189,
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
                                                                    lineNumber: 211,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " Back"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/sections/Navbar.tsx",
                                                            lineNumber: 207,
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
                                                            lineNumber: 213,
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
                                                                                lineNumber: 226,
                                                                                columnNumber: 33
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-sm font-medium text-foreground",
                                                                                children: subj.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                                                                lineNumber: 227,
                                                                                columnNumber: 33
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/sections/Navbar.tsx",
                                                                        lineNumber: 225,
                                                                        columnNumber: 31
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                        className: "w-4 h-4 text-muted-foreground"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/sections/Navbar.tsx",
                                                                        lineNumber: 229,
                                                                        columnNumber: 31
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, subj.slug, true, {
                                                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                                                lineNumber: 220,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                                    lineNumber: 206,
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
                                                                    lineNumber: 242,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " ",
                                                                activeExam.label,
                                                                " Subjects"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/sections/Navbar.tsx",
                                                            lineNumber: 238,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "px-3 pb-2 text-xs font-semibold text-foreground flex items-center gap-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: activeSubject.icon
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                                                    lineNumber: 245,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " ",
                                                                activeSubject.name,
                                                                " — Topics"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/sections/Navbar.tsx",
                                                            lineNumber: 244,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "max-h-[50vh] overflow-y-auto space-y-0.5 pr-1",
                                                            children: activeSubject.chapters.map((ch)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                                                    to: activeExam.hubPath,
                                                                    className: "block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/40 transition-colors",
                                                                    children: ch.name
                                                                }, ch.slug, false, {
                                                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                                                    lineNumber: 249,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0)))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/Navbar.tsx",
                                                            lineNumber: 247,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/Navbar.tsx",
                                            lineNumber: 186,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, "practice", true, {
                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                    lineNumber: 169,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : link.isRoute ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                    to: link.href,
                                    className: "text-muted-foreground hover:text-primary transition-colors text-xs font-medium tracking-wider uppercase whitespace-nowrap",
                                    children: link.label
                                }, link.label, false, {
                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                    lineNumber: 264,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : link.isHash && isHome ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: link.href.replace('/', ''),
                                    className: "text-muted-foreground hover:text-primary transition-colors text-xs font-medium tracking-wider uppercase whitespace-nowrap",
                                    children: link.label
                                }, link.label, false, {
                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                    lineNumber: 272,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                    to: link.href,
                                    className: "text-muted-foreground hover:text-primary transition-colors text-xs font-medium tracking-wider uppercase whitespace-nowrap",
                                    children: link.label
                                }, link.label, false, {
                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                    lineNumber: 280,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: openDemoModal,
                                className: "px-5 py-2.5 bg-primary text-primary-foreground text-[11px] uppercase tracking-[0.15em] font-medium rounded-full hover:shadow-[0_0_20px_-4px_hsl(var(--primary)/0.4)] transition-all duration-500 whitespace-nowrap flex-shrink-0",
                                children: "Book Free Demo"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                lineNumber: 289,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Navbar.tsx",
                        lineNumber: 165,
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
                            lineNumber: 303,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Navbar.tsx",
                            lineNumber: 303,
                            columnNumber: 43
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Navbar.tsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Navbar.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                lineNumber: 321,
                                                columnNumber: 34
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, "practice", true, {
                                        fileName: "[project]/src/components/sections/Navbar.tsx",
                                        lineNumber: 316,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0)) : link.isRoute ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                        to: link.href,
                                        onClick: ()=>setMobileOpen(false),
                                        className: "text-foreground text-lg font-display tracking-wider uppercase",
                                        children: link.label
                                    }, link.label, false, {
                                        fileName: "[project]/src/components/sections/Navbar.tsx",
                                        lineNumber: 324,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0)) : link.isHash && isHome ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: link.href.replace('/', ''),
                                        onClick: ()=>setMobileOpen(false),
                                        className: "text-foreground text-lg font-display tracking-wider uppercase",
                                        children: link.label
                                    }, link.label, false, {
                                        fileName: "[project]/src/components/sections/Navbar.tsx",
                                        lineNumber: 333,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                        to: link.href,
                                        onClick: ()=>setMobileOpen(false),
                                        className: "text-foreground text-lg font-display tracking-wider uppercase",
                                        children: link.label
                                    }, link.label, false, {
                                        fileName: "[project]/src/components/sections/Navbar.tsx",
                                        lineNumber: 342,
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
                                    lineNumber: 352,
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
                                            lineNumber: 368,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Back to Menu"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                    lineNumber: 364,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold",
                                    children: "Choose Exam"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                    lineNumber: 370,
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
                                                lineNumber: 377,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                className: "w-5 h-5 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                                lineNumber: 378,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, exam.slug, true, {
                                        fileName: "[project]/src/components/sections/Navbar.tsx",
                                        lineNumber: 372,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Navbar.tsx",
                            lineNumber: 363,
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
                                            lineNumber: 391,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        mobSubject ? `${mobActiveExam.label} Subjects` : 'Exams'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                    lineNumber: 387,
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
                                            lineNumber: 396,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold",
                                            children: "Select Subject"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Navbar.tsx",
                                            lineNumber: 403,
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
                                                                lineNumber: 411,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium text-foreground",
                                                                children: subj.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                                                lineNumber: 412,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sections/Navbar.tsx",
                                                        lineNumber: 410,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                        className: "w-5 h-5 text-muted-foreground"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Navbar.tsx",
                                                        lineNumber: 414,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, subj.slug, true, {
                                                fileName: "[project]/src/components/sections/Navbar.tsx",
                                                lineNumber: 405,
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
                                                    lineNumber: 424,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " ",
                                                mobActiveExam.label,
                                                " Subjects"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/Navbar.tsx",
                                            lineNumber: 420,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-semibold text-foreground flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: mobActiveSubject.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                                    lineNumber: 427,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " ",
                                                mobActiveSubject.name,
                                                " — Topics"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/Navbar.tsx",
                                            lineNumber: 426,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1 max-h-[50vh] overflow-y-auto",
                                            children: mobActiveSubject.chapters.map((ch)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                                    to: mobActiveExam.hubPath,
                                                    onClick: ()=>setMobileOpen(false),
                                                    className: "block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/40 transition-colors border border-transparent hover:border-border",
                                                    children: ch.name
                                                }, ch.slug, false, {
                                                    fileName: "[project]/src/components/sections/Navbar.tsx",
                                                    lineNumber: 431,
                                                    columnNumber: 27
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Navbar.tsx",
                                            lineNumber: 429,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Navbar.tsx",
                            lineNumber: 386,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/Navbar.tsx",
                    lineNumber: 310,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Navbar.tsx",
                lineNumber: 309,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Navbar.tsx",
        lineNumber: 146,
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
const SEOHead = (param)=>{
    let { title, description, canonical, ogImage, jsonLd } = param;
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
    const ldArray = (Array.isArray(jsonLd) ? jsonLd : [
        jsonLd
    ]).filter((ld)=>ld != null && typeof ld === 'object' && Object.keys(ld).length > 0);
    if (ldArray.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: ldArray.map((ld, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(ld)
                }
            }, i, false, {
                fileName: "[project]/src/components/SEOHead.tsx",
                lineNumber: 68,
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
    "getCourseYearFromSlug",
    ()=>getCourseYearFromSlug,
    "getExamYear",
    ()=>getExamYear,
    "getMonthsToCourseTarget",
    ()=>getMonthsToCourseTarget,
    "getMonthsUntilJee",
    ()=>getMonthsUntilJee,
    "getMonthsUntilNeet",
    ()=>getMonthsUntilNeet
]);
/**
 * Exam Year Auto-Update Utility
 * ─────────────────────────────
 * Computes target years dynamically so the entire site stays current
 * without manual edits. All year references across the codebase
 * should import from here instead of hardcoding.
 *
 * Logic:
 * - JEE Main Session 1: ~Jan 20, Session 2: ~Apr 15, JEE Advanced: ~May 24-25.
 * - NEET UG: ~May 3-4.
 * - Once JEE Advanced is over (~May 25), the "current" exam cycle is
 *   considered done and everything rolls forward to the next cycle.
 *
 * Example (late May 2026 onwards):
 *   CURRENT_EXAM_YEAR = 2027  (next upcoming exam)
 *   ONE_YEAR_TARGET   = 2028  (1-year intensive courses)
 *   TWO_YEAR_TARGET   = 2029  (2-year foundation courses)
 *
 * Example (Jan–May 2027):
 *   CURRENT_EXAM_YEAR = 2027  (exams happening this cycle)
 *   ONE_YEAR_TARGET   = 2028
 *   TWO_YEAR_TARGET   = 2029
 */ const now = new Date();
const calendarYear = now.getFullYear();
/**
 * After April (month index >= 4, i.e. May onwards), JEE Main Sessions 1 & 2
 * and NEET UG have all happened — students enrolling now target the NEXT
 * year's exam cycle. (JEE Advanced for the current year may still be pending,
 * but new students cannot sit for it without prior registration.)
 */ const rollover = now.getMonth() >= 4;
const CURRENT_EXAM_YEAR = rollover ? calendarYear + 1 : calendarYear;
const ONE_YEAR_TARGET = CURRENT_EXAM_YEAR + 1;
const TWO_YEAR_TARGET = CURRENT_EXAM_YEAR + 2;
const MS_PER_MONTH = 1000 * 60 * 60 * 24 * 30.44;
function getMonthsUntilJee(year) {
    const jeeDate = new Date(year, 0, 20);
    return Math.max(0, Math.round((jeeDate.getTime() - now.getTime()) / MS_PER_MONTH));
}
function getMonthsUntilNeet(year) {
    const neetDate = new Date(year, 4, 4);
    return Math.max(0, Math.round((neetDate.getTime() - now.getTime()) / MS_PER_MONTH));
}
const MONTHS_TO_JEE = getMonthsUntilJee(CURRENT_EXAM_YEAR);
_c = MONTHS_TO_JEE;
const MONTHS_TO_NEET = getMonthsUntilNeet(CURRENT_EXAM_YEAR);
_c1 = MONTHS_TO_NEET;
const JEE_YEAR = `JEE ${CURRENT_EXAM_YEAR}`;
const NEET_YEAR = `NEET ${CURRENT_EXAM_YEAR}`;
const JEE_1Y = `JEE Target ${ONE_YEAR_TARGET}`;
const JEE_2Y = `JEE Main Target ${TWO_YEAR_TARGET}`;
const NEET_1Y = `NEET Target ${ONE_YEAR_TARGET}`;
const NEET_2Y = `NEET Target ${TWO_YEAR_TARGET}`;
function getExamYear() {
    let exam = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'JEE';
    return `${exam} ${CURRENT_EXAM_YEAR}`;
}
function getCourseTargetYear(duration) {
    let exam = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'JEE';
    const year = duration === '2-year' ? TWO_YEAR_TARGET : ONE_YEAR_TARGET;
    return `${exam} Target ${year}`;
}
function getCourseYearFromSlug(slug) {
    const match = slug.match(/(\d{4})$/);
    if (!match) return null;
    const y = parseInt(match[1], 10);
    return Number.isFinite(y) ? y : null;
}
function getMonthsToCourseTarget(slug) {
    const year = getCourseYearFromSlug(slug);
    if (year === null) return null;
    if (slug.startsWith('neet-')) return getMonthsUntilNeet(year);
    if (slug.startsWith('jee-')) return getMonthsUntilJee(year);
    return null;
}
var _c, _c1;
__turbopack_context__.k.register(_c, "MONTHS_TO_JEE");
__turbopack_context__.k.register(_c1, "MONTHS_TO_NEET");
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
const RelatedPages = (param)=>{
    let { title = 'You Might Also Like', links, columns = 3, variant = 'default' } = param;
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
        href: '/jee-math-calculus',
        label: 'JEE Maths: Calculus Guide',
        tag: 'Chapter'
    },
    {
        href: '/jee-chemistry-organic',
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
        href: '/jee-physics-formulas',
        label: 'JEE Physics Formula Sheet',
        tag: 'Formulas'
    },
    {
        href: '/jee-chemistry-formulas',
        label: 'JEE Chemistry Formula Sheet',
        tag: 'Formulas'
    },
    {
        href: '/jee-maths-formulas',
        label: 'JEE Maths Formula Sheet',
        tag: 'Formulas'
    },
    {
        href: '/jee-practice',
        label: 'JEE Practice Questions',
        tag: 'Practice'
    },
    {
        href: '/jee-pyq',
        label: 'JEE Previous Year Questions',
        tag: 'PYQ'
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
        href: '/neet-biology-digestion-absorption',
        label: 'NEET Bio: Digestion & Absorption',
        tag: 'Chapter'
    },
    {
        href: '/neet-biology-inheritance-variation',
        label: 'NEET Bio: Genetics & Inheritance',
        tag: 'Chapter'
    },
    {
        href: '/neet-biology-ecosystem',
        label: 'NEET Bio: Ecosystem Guide',
        tag: 'Chapter'
    },
    {
        href: '/neet-biology-preparation',
        label: 'NEET Biology Strategy',
        tag: 'Guide'
    },
    {
        href: '/neet-chemistry-organic-basics',
        label: 'NEET Chemistry: Organic',
        tag: 'Chapter'
    },
    {
        href: '/neet-biology-formulas',
        label: 'NEET Biology Formula Sheet',
        tag: 'Formulas'
    },
    {
        href: '/neet-chemistry-formulas',
        label: 'NEET Chemistry Formula Sheet',
        tag: 'Formulas'
    },
    {
        href: '/neet-practice',
        label: 'NEET Practice Questions',
        tag: 'Practice'
    },
    {
        href: '/neet-pyq',
        label: 'NEET Previous Year Questions',
        tag: 'PYQ'
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RouterLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RelatedPages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RelatedPages.tsx [app-client] (ecmascript)");
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
        title: 'Other Exams',
        links: [
            {
                label: 'BITSAT Coaching',
                to: '/bitsat-coaching'
            },
            {
                label: 'CUET Coaching',
                to: '/cuet-coaching'
            },
            {
                label: 'WBJEE Coaching',
                to: '/wbjee-coaching'
            },
            {
                label: 'MHT-CET Coaching',
                to: '/mht-cet-coaching'
            },
            {
                label: 'KVPY Coaching',
                to: '/kvpy-coaching'
            },
            {
                label: 'ISI Entrance Coaching',
                to: '/isi-entrance-coaching'
            },
            {
                label: 'COMEDK Coaching',
                to: '/comedk-coaching'
            },
            {
                label: 'VITEEE Coaching',
                to: '/viteee-coaching'
            }
        ]
    },
    {
        title: 'Practice & PYQs',
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
        title: 'Formula Sheets',
        links: [
            {
                label: 'JEE Physics Formulas',
                to: '/jee-physics-formulas'
            },
            {
                label: 'JEE Chemistry Formulas',
                to: '/jee-chemistry-formulas'
            },
            {
                label: 'JEE Maths Formulas',
                to: '/jee-maths-formulas'
            },
            {
                label: 'NEET Biology Formulas',
                to: '/neet-biology-formulas'
            },
            {
                label: 'NEET Physics Formulas',
                to: '/neet-physics-formulas'
            },
            {
                label: 'NEET Chemistry Formulas',
                to: '/neet-chemistry-formulas'
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
            },
            {
                label: 'Online vs Offline',
                to: '/online-vs-offline-jee-coaching'
            }
        ]
    }
];
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
        label: 'BITSAT Coaching',
        to: '/bitsat-coaching'
    },
    {
        label: 'CUET Coaching',
        to: '/cuet-coaching'
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
/* ── T1 city JEE coaching links (hand-curated, indexed pages) ── */ const jeeCoachingCityLinks = [
    {
        label: 'JEE Coaching in Bangalore',
        to: '/jee-coaching-in-bangalore'
    },
    {
        label: 'JEE Coaching in Chennai',
        to: '/jee-coaching-in-chennai'
    },
    {
        label: 'JEE Coaching in Hyderabad',
        to: '/jee-coaching-in-hyderabad'
    },
    {
        label: 'JEE Coaching in Kochi',
        to: '/jee-coaching-in-kochi'
    },
    {
        label: 'JEE Coaching in Coimbatore',
        to: '/jee-coaching-in-coimbatore'
    },
    {
        label: 'JEE Coaching in Visakhapatnam',
        to: '/jee-coaching-in-visakhapatnam'
    },
    {
        label: 'JEE Coaching in Vijayawada',
        to: '/jee-coaching-in-vijayawada'
    },
    {
        label: 'JEE Coaching in Mangalore',
        to: '/jee-coaching-in-mangalore'
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
        label: 'Best JEE Coaching in India',
        to: '/best-jee-coaching-in-india'
    }
];
/* ── T1 city NEET coaching links (hand-curated, indexed pages) ── */ const neetCoachingCityLinks = [
    {
        label: 'NEET Coaching in Bangalore',
        to: '/neet-coaching-in-bangalore'
    },
    {
        label: 'NEET Coaching in Chennai',
        to: '/neet-coaching-in-chennai'
    },
    {
        label: 'NEET Coaching in Hyderabad',
        to: '/neet-coaching-in-hyderabad'
    },
    {
        label: 'NEET Coaching in Kochi',
        to: '/neet-coaching-in-kochi'
    },
    {
        label: 'NEET Coaching in Coimbatore',
        to: '/neet-coaching-in-coimbatore'
    },
    {
        label: 'NEET Coaching in Visakhapatnam',
        to: '/neet-coaching-in-visakhapatnam'
    },
    {
        label: 'NEET Coaching in Vijayawada',
        to: '/neet-coaching-in-vijayawada'
    },
    {
        label: 'NEET Coaching in Mangalore',
        to: '/neet-coaching-in-mangalore'
    },
    {
        label: 'NEET Coaching in Delhi',
        to: '/neet-coaching-in-delhi'
    },
    {
        label: 'NEET Coaching in Mumbai',
        to: '/neet-coaching-in-mumbai'
    }
];
/* ── Competitor comparison links ── */ const comparisonLinks = [
    {
        label: 'MindPeak vs Allen',
        to: '/mindpeak-vs-allen'
    },
    {
        label: 'MindPeak vs FIITJEE',
        to: '/mindpeak-vs-fiitjee'
    },
    {
        label: 'MindPeak vs Physics Wallah',
        to: '/mindpeak-vs-physics-wallah'
    },
    {
        label: 'MindPeak vs Unacademy',
        to: '/mindpeak-vs-unacademy'
    },
    {
        label: 'MindPeak vs Vedantu',
        to: '/mindpeak-vs-vedantu'
    },
    {
        label: 'MindPeak vs Aakash',
        to: '/mindpeak-vs-aakash'
    },
    {
        label: 'Online vs Offline Coaching',
        to: '/online-vs-offline-jee-coaching'
    },
    {
        label: 'Batch vs Personal Coaching',
        to: '/batch-vs-personal-coaching'
    }
];
const FooterSection = (param)=>{
    let { title, links } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-display font-bold text-foreground text-xs uppercase tracking-[0.15em] mb-3",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/PageFooter.tsx",
                lineNumber: 148,
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
                            lineNumber: 152,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, l.to, false, {
                        fileName: "[project]/src/components/PageFooter.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/PageFooter.tsx",
                lineNumber: 149,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PageFooter.tsx",
        lineNumber: 147,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c = FooterSection;
const PageFooter = (param)=>{
    let { extra } = param;
    /* Use static sections only — no links to noindexed individual question pages */ const footerSections = STATIC_SECTIONS;
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
                                    lineNumber: 171,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-display font-bold text-foreground text-lg tracking-wide",
                                    children: "MINDPEAK"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PageFooter.tsx",
                                    lineNumber: 172,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PageFooter.tsx",
                            lineNumber: 170,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground text-sm text-center max-w-md",
                            children: "Personalized 1-on-1 JEE & NEET Coaching — Transforming Aspirants into Achievers."
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageFooter.tsx",
                            lineNumber: 174,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PageFooter.tsx",
                    lineNumber: 169,
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
                                lineNumber: 182,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FooterSection, {
                            title: "JEE Coaching by City",
                            links: jeeCoachingCityLinks
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageFooter.tsx",
                            lineNumber: 184,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FooterSection, {
                            title: "NEET Coaching by City",
                            links: neetCoachingCityLinks
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageFooter.tsx",
                            lineNumber: 185,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FooterSection, {
                            title: "Compare Coaching",
                            links: comparisonLinks
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageFooter.tsx",
                            lineNumber: 186,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-display font-bold text-foreground text-xs uppercase tracking-[0.15em] mb-3",
                                    children: "Important Links"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PageFooter.tsx",
                                    lineNumber: 188,
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
                                                lineNumber: 192,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, l.to, false, {
                                            fileName: "[project]/src/components/PageFooter.tsx",
                                            lineNumber: 191,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PageFooter.tsx",
                                    lineNumber: 189,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PageFooter.tsx",
                            lineNumber: 187,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PageFooter.tsx",
                    lineNumber: 180,
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
                                lineNumber: 205,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, s.label, false, {
                            fileName: "[project]/src/components/PageFooter.tsx",
                            lineNumber: 204,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/PageFooter.tsx",
                    lineNumber: 202,
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
                                    lineNumber: 213,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-border",
                                    children: "|"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PageFooter.tsx",
                                    lineNumber: 214,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                    to: "/refund-policy",
                                    className: "hover:text-primary transition-colors",
                                    children: "Refund Policy"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PageFooter.tsx",
                                    lineNumber: 215,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PageFooter.tsx",
                            lineNumber: 212,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " MindPeak Institute. All rights reserved.",
                                extra ? ` ${extra}` : ''
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PageFooter.tsx",
                            lineNumber: 217,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PageFooter.tsx",
                    lineNumber: 211,
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
                        lineNumber: 223,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/PageFooter.tsx",
                    lineNumber: 221,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PageFooter.tsx",
            lineNumber: 167,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/PageFooter.tsx",
        lineNumber: 166,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
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
const PageFAQ = (param)=>{
    let { items, heading = 'Frequently Asked', highlight = 'Questions' } = param;
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
    const valid = (items || []).filter((faq)=>faq && typeof faq.question === 'string' && faq.question.trim() !== '' && typeof faq.answer === 'string' && faq.answer.trim() !== '');
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: valid.map((faq)=>({
                '@type': 'Question',
                name: faq.question.trim(),
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer.trim()
                }
            }))
    };
};
const buildFAQSchemaFromQA = (items)=>{
    const valid = (items || []).filter((faq)=>faq && typeof faq.q === 'string' && faq.q.trim() !== '' && typeof faq.a === 'string' && faq.a.trim() !== '');
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: valid.map((faq)=>({
                '@type': 'Question',
                name: faq.q.trim(),
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.a.trim()
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
const FeaturedSnippet = (param)=>{
    let { question, answer, bullets, ordered, authorityNote } = param;
    const List = ordered ? 'ol' : 'ul';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "max-w-3xl mx-auto my-5 sm:my-8 rounded-xl border border-primary/20 bg-primary/5 p-4 sm:p-6 md:p-8",
        "aria-label": "Quick answer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-display font-bold text-foreground text-base sm:text-lg md:text-xl mb-2 sm:mb-3",
                children: question
            }, void 0, false, {
                fileName: "[project]/src/components/FeaturedSnippet.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-foreground/85 text-sm sm:text-base leading-relaxed",
                children: answer
            }, void 0, false, {
                fileName: "[project]/src/components/FeaturedSnippet.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            bullets && bullets.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(List, {
                className: ordered ? 'mt-4 list-decimal pl-5 sm:pl-6 space-y-2 marker:text-primary marker:font-semibold' : 'mt-4 space-y-2',
                children: bullets.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: ordered ? 'text-sm sm:text-base text-foreground/85 leading-relaxed pl-1' : 'flex items-start gap-2 text-sm sm:text-base text-foreground/85 leading-relaxed',
                        children: [
                            !ordered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                className: "w-4 h-4 text-primary flex-shrink-0 mt-0.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FeaturedSnippet.tsx",
                                lineNumber: 58,
                                columnNumber: 28
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: b
                            }, void 0, false, {
                                fileName: "[project]/src/components/FeaturedSnippet.tsx",
                                lineNumber: 59,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/src/components/FeaturedSnippet.tsx",
                        lineNumber: 50,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/FeaturedSnippet.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            authorityNote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-foreground/70 text-sm sm:text-base leading-relaxed italic",
                children: authorityNote
            }, void 0, false, {
                fileName: "[project]/src/components/FeaturedSnippet.tsx",
                lineNumber: 66,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FeaturedSnippet.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
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
const FreshnessBadge = (param)=>{
    let { lastUpdated, verifiedFor } = param;
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
"[project]/src/components/FadeInView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FadeInView",
    ()=>FadeInView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * FadeInView — lightweight CSS-only fade-in-up animation triggered by IntersectionObserver.
 * Replaces heavy framer-motion whileInView for below-fold content, cutting ~40KB+ of JS per page.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function FadeInView(param) {
    let { children, className = '', style, delay = 0 } = param;
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FadeInView.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const io = new IntersectionObserver({
                "FadeInView.useEffect": (param)=>{
                    let [entry] = param;
                    if (entry.isIntersecting) {
                        setVisible(true);
                        io.disconnect();
                    }
                }
            }["FadeInView.useEffect"], {
                rootMargin: '0px 0px -60px 0px',
                threshold: 0.01
            });
            io.observe(el);
            return ({
                "FadeInView.useEffect": ()=>io.disconnect()
            })["FadeInView.useEffect"];
        }
    }["FadeInView.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: className,
        style: {
            ...style,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
            willChange: visible ? 'auto' : 'opacity, transform'
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/FadeInView.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(FadeInView, "F7BtIAxVh3vOWU1Jr24RYsj9CHc=");
_c = FadeInView;
var _c;
__turbopack_context__.k.register(_c, "FadeInView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/contentFreshness.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * Content Freshness Utility
 * Auto-updates "Last Updated" dates on all pages daily,
 * signaling freshness to Google without manual work.
 * 
 * CRITICAL: The date must NEVER be in the future.
 * It always returns TODAY's date (or a recent past date based on page slug hash).
 */ /**
 * Returns a YYYY-MM-DD string that represents today or a very recent date.
 * Uses a deterministic hash of the page slug to vary dates slightly
 * (0-6 days ago) so not all pages show the exact same date.
 * 
 * This ensures:
 * - Date is NEVER in the future
 * - Date updates daily (auto-freshness)
 * - Different pages show slightly different dates (natural variation)
 */ __turbopack_context__.s([
    "getFormattedLastUpdated",
    ()=>getFormattedLastUpdated,
    "getLastUpdated",
    ()=>getLastUpdated,
    "shouldShowFreshnessSignal",
    ()=>shouldShowFreshnessSignal
]);
/**
 * Returns the year label for current exam cycle.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/examYears.ts [app-client] (ecmascript)");
function getLastUpdated(pageSlug) {
    const now = new Date();
    // Hash the slug to get a deterministic offset (0-6 days ago)
    let hash = 0;
    for(let i = 0; i < pageSlug.length; i++){
        hash = (hash << 5) - hash + pageSlug.charCodeAt(i) | 0;
    }
    const daysAgo = Math.abs(hash) % 7; // 0 to 6 days ago
    const date = new Date(now);
    date.setDate(date.getDate() - daysAgo);
    return date.toISOString().split('T')[0]; // YYYY-MM-DD
}
function getFormattedLastUpdated(pageSlug) {
    const dateStr = getLastUpdated(pageSlug);
    return new Date(dateStr).toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}
;
function shouldShowFreshnessSignal(pageSlug) {
    const contentPages = [
        'coaching',
        'blog',
        'location',
        'subject',
        'chapter',
        'topic',
        'comparison',
        'formula',
        'rank-predictor',
        'kota-alternative',
        'online-vs-offline',
        'practice',
        'pyq',
        'study-guide',
        'preparation',
        'crash-course',
        'dropper',
        'foundation',
        'bitsat',
        'cuet',
        'wbjee',
        'mht-cet',
        'kvpy',
        'isi',
        'comedk',
        'viteee',
        'srmjeee',
        'kcet',
        'eamcet',
        'olympiad'
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
const PeopleAlsoAsk = (param)=>{
    let { questions, heading = 'People Also Ask' } = param;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SEOHead$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SEOHead.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PageFooter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageFAQ$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PageFAQ.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DemoBookingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DemoBookingModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeaturedSnippet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FeaturedSnippet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FreshnessBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FreshnessBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FadeInView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FadeInView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contentFreshness$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/contentFreshness.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__getExamYear__as__getCurrentExamYear$3e$__ = __turbopack_context__.i("[project]/src/lib/examYears.ts [app-client] (ecmascript) <export getExamYear as getCurrentExamYear>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/examYears.ts [app-client] (ecmascript)");
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
/* Lazy-load below-fold heavy components */ const ExamCountdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/ExamCountdown.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>({
            default: m.ExamCountdown
        })), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/ExamCountdown.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = ExamCountdown;
const SeasonalBanner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/SeasonalBanner.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>({
            default: m.SeasonalBanner
        })), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/SeasonalBanner.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c1 = SeasonalBanner;
const StudyPlanSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/StudyPlanSection.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>({
            default: m.StudyPlanSection
        })), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/StudyPlanSection.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c2 = StudyPlanSection;
const MonthlySuccessStory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/MonthlySuccessStory.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>({
            default: m.MonthlySuccessStory
        })), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/MonthlySuccessStory.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c3 = MonthlySuccessStory;
const WeeklyTip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/WeeklyTip.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>({
            default: m.WeeklyTip
        })), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/WeeklyTip.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c4 = WeeklyTip;
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
        dateModified: lastUpdated,
        hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'online',
            courseWorkload: 'P1Y'
        },
        about: [
            {
                '@type': 'Thing',
                name: 'JEE Main',
                sameAs: 'https://en.wikipedia.org/wiki/Joint_Entrance_Examination_%E2%80%93_Main'
            },
            {
                '@type': 'Thing',
                name: 'JEE Advanced',
                sameAs: 'https://en.wikipedia.org/wiki/Joint_Entrance_Examination_%E2%80%93_Advanced'
            },
            {
                '@type': 'Thing',
                name: 'National Testing Agency',
                sameAs: 'https://en.wikipedia.org/wiki/National_Testing_Agency'
            }
        ],
        mentions: [
            {
                '@type': 'Thing',
                name: 'Indian Institutes of Technology',
                sameAs: 'https://en.wikipedia.org/wiki/Indian_Institutes_of_Technology'
            }
        ],
        review: [
            {
                '@type': 'Review',
                author: {
                    '@type': 'Person',
                    name: 'Aarav Sharma'
                },
                reviewRating: {
                    '@type': 'Rating',
                    ratingValue: '5',
                    bestRating: '5'
                },
                reviewBody: 'MindPeak completely transformed my JEE preparation. I achieved AIR 42 with personalized 1-on-1 coaching.'
            },
            {
                '@type': 'Review',
                author: {
                    '@type': 'Person',
                    name: 'Priya Patel'
                },
                reviewRating: {
                    '@type': 'Rating',
                    ratingValue: '5',
                    bestRating: '5'
                },
                reviewBody: 'After switching to MindPeak from a 200-student batch, my JEE Advanced score improved by 165 marks.'
            },
            {
                '@type': 'Review',
                author: {
                    '@type': 'Person',
                    name: 'Rohan Iyer'
                },
                reviewRating: {
                    '@type': 'Rating',
                    ratingValue: '5',
                    bestRating: '5'
                },
                reviewBody: 'The adaptive curriculum improved my mock scores by 125 marks in just 4 months. Achieved AIR 312.'
            }
        ]
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
    const webPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Best JEE Coaching Online — MindPeak Institute',
        url: 'https://mindpeakinstitute.com/jee-coaching',
        significantLink: [
            'https://mindpeakinstitute.com/jee-practice',
            'https://mindpeakinstitute.com/jee-pyq',
            'https://mindpeakinstitute.com/jee-physics-preparation',
            'https://mindpeakinstitute.com/jee-chemistry-preparation',
            'https://mindpeakinstitute.com/jee-mathematics-preparation',
            'https://mindpeakinstitute.com/courses',
            'https://mindpeakinstitute.com/free-trial'
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SEOHead$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEOHead"], {
                title: `Best JEE Coaching Online ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]} — AIR <5K | 95% Success [Free Trial]`,
                description: `Crack JEE ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]} with 1-on-1 mentors from IIT/NIT. Adaptive curriculum, daily doubt sessions, 95% success rate. 500+ students trust MindPeak.`,
                jsonLd: [
                    courseSchema,
                    breadcrumbSchema,
                    webPageSchema,
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageFAQ$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildFAQSchema"])([
                        ...faqs,
                        ...paaQuestions
                    ])
                ]
            }, void 0, false, {
                fileName: "[project]/src/views/JEECoaching.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navbar"], {}, void 0, false, {
                fileName: "[project]/src/views/JEECoaching.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "bg-background min-h-screen pt-20 sm:pt-24 overflow-x-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        "aria-label": "Breadcrumb",
                        className: "max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                            className: "flex items-center gap-2 text-[11px] tracking-[0.05em] text-muted-foreground",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                        to: "/",
                                        className: "hover:text-foreground/70 transition-colors duration-300",
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/JEECoaching.tsx",
                                        lineNumber: 196,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 196,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-foreground/15",
                                    children: "/"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "text-foreground/80",
                                    children: "JEE Coaching"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/JEECoaching.tsx",
                            lineNumber: 195,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/JEECoaching.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "max-w-4xl mx-auto px-4 sm:px-6 pb-12 sm:pb-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FadeInView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeInView"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FreshnessBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FreshnessBadge"], {
                                    lastUpdated: lastUpdated,
                                    verifiedFor: examYear
                                }, void 0, false, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 205,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-6 sm:mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/images/logo.jpeg",
                                            alt: "MindPeak Institute",
                                            width: 48,
                                            height: 48,
                                            className: "w-10 h-10 sm:w-12 sm:h-12 rounded-full ring-1 ring-foreground/[0.08] flex-shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 208,
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
                                                    lineNumber: 210,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground text-xs truncate",
                                                    children: "Personalized 1-on-1 JEE Main & Advanced Coaching"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 209,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 207,
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
                                            lineNumber: 217,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        ' ',
                                        "for AIR <5K"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 215,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground/70 text-sm sm:text-base leading-[1.8] max-w-3xl mb-8 sm:mb-10",
                                    children: "Tired of being a face in a 200-student classroom? At MindPeak Institute, every JEE aspirant receives a dedicated personal mentor, an AI-driven adaptive curriculum, and daily 1-on-1 live sessions — six days a week. With a 95% success rate and 500+ students mentored, our approach has produced AIR 42 in JEE Advanced and 50+ students under AIR 5,000."
                                }, void 0, false, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 221,
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
                                                            lineNumber: 232,
                                                            columnNumber: 79
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/JEECoaching.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 226,
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
                                                    lineNumber: 239,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " +91 82194 57704"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 235,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 225,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/JEECoaching.tsx",
                            lineNumber: 204,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/JEECoaching.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-5xl mx-auto px-4 sm:px-6 pb-6 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExamCountdown, {
                                exam: "JEE"
                            }, void 0, false, {
                                fileName: "[project]/src/views/JEECoaching.tsx",
                                lineNumber: 247,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SeasonalBanner, {}, void 0, false, {
                                fileName: "[project]/src/views/JEECoaching.tsx",
                                lineNumber: 248,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/JEECoaching.tsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 sm:px-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeaturedSnippet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FeaturedSnippet"], {
                            question: `How to Prepare for JEE Main ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]} — 8-Step Plan`,
                            answer: `JEE Main ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]} preparation follows an 8-step plan starting 12 to 18 months before the exam: master NCERT line-by-line, build a reference-book foundation, drill PYQs from 2014 onwards, and run weekly full-length mocks from month four. Below is the exact sequence MindPeak uses with its one-on-one students.`,
                            ordered: true,
                            bullets: [
                                'Master NCERT line-by-line — covers 35% of JEE Main questions, especially in Chemistry.',
                                'Build the reference-book foundation — HC Verma (Physics), MS Chouhan (Organic), Cengage (Mathematics).',
                                'Solve chapter-wise problems daily — 25 to 40 problems per subject, written on paper.',
                                'Maintain a mistake notebook — tag every error (sign error, formula confusion, time misjudgement).',
                                'Practice PYQs from 2014 to 2026 — at least 5 full past papers per subject.',
                                'Take weekly full-length mocks from month 4 — analyse every wrong answer within 24 hours.',
                                'Drill high-weightage chapters — Mechanics, Electrodynamics, Organic Reactions, Calculus.',
                                'Final 30 days: revision only — no new content, NCERT skim plus formula sheet, 2 mocks per week.'
                            ],
                            authorityNote: "In our one-on-one MindPeak classes, the biggest score gain usually comes from step 4 — the mistake notebook. Students who maintain it religiously typically add 25 to 40 marks in three months."
                        }, void 0, false, {
                            fileName: "[project]/src/views/JEECoaching.tsx",
                            lineNumber: 253,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/JEECoaching.tsx",
                        lineNumber: 252,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-12 sm:py-16 px-4 sm:px-6 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/src/views/JEECoaching.tsx",
                                lineNumber: 273,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/src/views/JEECoaching.tsx",
                                lineNumber: 274,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center",
                                children: stats.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FadeInView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeInView"], {
                                        delay: i * 60,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-display font-bold text-primary text-2xl md:text-3xl mb-1 tracking-tight",
                                                children: s.value
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/JEECoaching.tsx",
                                                lineNumber: 278,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-muted-foreground text-[10px] uppercase tracking-[0.2em]",
                                                children: s.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/JEECoaching.tsx",
                                                lineNumber: 279,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, s.label, true, {
                                        fileName: "[project]/src/views/JEECoaching.tsx",
                                        lineNumber: 277,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/views/JEECoaching.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/JEECoaching.tsx",
                        lineNumber: 272,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StudyPlanSection, {
                        examType: "JEE",
                        themed: true
                    }, void 0, false, {
                        fileName: "[project]/src/views/JEECoaching.tsx",
                        lineNumber: 286,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FadeInView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeInView"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-px w-8 bg-destructive/20"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 292,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] uppercase tracking-[0.3em] text-destructive/60 font-medium",
                                            children: "The Problem"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 293,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 291,
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
                                            lineNumber: 296,
                                            columnNumber: 35
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 295,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground/70 text-sm sm:text-base leading-[1.8] max-w-3xl mb-10",
                                    children: "Every year lakhs of students join batch coaching centres with dreams of cracking JEE. Most leave disappointed. Here’s why the factory-model approach fails."
                                }, void 0, false, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 298,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-3 gap-4",
                                    children: batchProblems.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FadeInView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeInView"], {
                                            delay: i * 80,
                                            className: "rounded-2xl border border-destructive/10 bg-destructive/[0.03] p-7 hover:border-destructive/20 transition-all duration-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(p.icon, {
                                                    className: "w-5 h-5 text-destructive/60 mb-5",
                                                    strokeWidth: 1.5
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                    lineNumber: 305,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-display font-semibold text-foreground text-base mb-2 tracking-[-0.01em]",
                                                    children: p.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground/70 text-sm leading-[1.7]",
                                                    children: p.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                    lineNumber: 307,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 303,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 301,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/JEECoaching.tsx",
                            lineNumber: 290,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/JEECoaching.tsx",
                        lineNumber: 289,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-20 sm:py-28 px-4 sm:px-6 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/src/views/JEECoaching.tsx",
                                lineNumber: 316,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-4xl mx-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FadeInView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeInView"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "h-px w-8 bg-primary/20"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                    lineNumber: 320,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] uppercase tracking-[0.3em] text-primary/60 font-medium",
                                                    children: "Our Methodology"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                    lineNumber: 321,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 319,
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
                                                    lineNumber: 324,
                                                    columnNumber: 30
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 323,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground/70 text-sm sm:text-base leading-[1.8] max-w-3xl mb-12",
                                            children: "Every JEE aspirant deserves personalized attention. Our methodology combines IIT alumni mentors with data-driven adaptive learning."
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 326,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
                                            children: methodology.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FadeInView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeInView"], {
                                                    delay: i * 60,
                                                    className: "group rounded-2xl border border-foreground/[0.06] bg-foreground/[0.02] p-7 hover:border-primary/15 hover:bg-foreground/[0.04] transition-all duration-500",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[11px] tracking-[0.15em] text-muted-foreground/40 font-medium",
                                                            children: String(i + 1).padStart(2, '0')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                                            lineNumber: 333,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(m.icon, {
                                                            className: "w-5 h-5 text-primary/60 mt-4 mb-4",
                                                            strokeWidth: 1.5
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                                            lineNumber: 334,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-display font-semibold text-foreground text-sm mb-2 tracking-[-0.01em]",
                                                            children: m.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                                            lineNumber: 335,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-muted-foreground/70 text-sm leading-[1.7]",
                                                            children: m.desc
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                                            lineNumber: 336,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                    lineNumber: 331,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 329,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 318,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/views/JEECoaching.tsx",
                                lineNumber: 317,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/JEECoaching.tsx",
                        lineNumber: 315,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FadeInView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeInView"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-px w-8 bg-foreground/10"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 348,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-medium",
                                            children: "Stories"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 349,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 347,
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
                                            lineNumber: 352,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 351,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-3 gap-4",
                                    children: testimonials.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FadeInView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeInView"], {
                                            delay: i * 80,
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
                                                                    lineNumber: 360,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-muted-foreground text-[11px] tracking-[0.05em]",
                                                                    children: t.city
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
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-primary/70 text-[11px] tracking-[0.1em] font-medium",
                                                            children: t.rank
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                                            lineNumber: 363,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                    lineNumber: 358,
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
                                                                    lineNumber: 367,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-muted-foreground/80 text-[10px] uppercase tracking-[0.1em]",
                                                                    children: "Before"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                                    lineNumber: 368,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                                            lineNumber: 366,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            className: "w-3.5 h-3.5 text-primary/50 flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                                            lineNumber: 370,
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
                                                                    lineNumber: 372,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-muted-foreground/80 text-[10px] uppercase tracking-[0.1em]",
                                                                    children: "After"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                                    lineNumber: 373,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                                            lineNumber: 371,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                    lineNumber: 365,
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
                                                    lineNumber: 376,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 356,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 354,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/JEECoaching.tsx",
                            lineNumber: 346,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/JEECoaching.tsx",
                        lineNumber: 345,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-20 sm:py-28 px-4 sm:px-6 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/src/views/JEECoaching.tsx",
                                lineNumber: 385,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-4xl mx-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FadeInView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeInView"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                    className: "w-4 h-4 text-primary/60",
                                                    strokeWidth: 1.5
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                    lineNumber: 389,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] uppercase tracking-[0.3em] text-primary/60 font-medium",
                                                    children: "Syllabus"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                    lineNumber: 390,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 388,
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
                                                    lineNumber: 393,
                                                    columnNumber: 30
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 392,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground/70 text-sm sm:text-base leading-[1.8] max-w-3xl mb-10",
                                            children: "Every chapter prescribed for JEE Main and JEE Advanced, adapted to your individual pace."
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 395,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid md:grid-cols-3 gap-4",
                                            children: syllabus.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FadeInView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeInView"], {
                                                    delay: i * 60,
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
                                                                    lineNumber: 403,
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
                                                                    lineNumber: 404,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                                            lineNumber: 402,
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
                                                                            lineNumber: 409,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        topic
                                                                    ]
                                                                }, j, true, {
                                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                                    lineNumber: 408,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                                            lineNumber: 406,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                    lineNumber: 400,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 398,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 387,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/views/JEECoaching.tsx",
                                lineNumber: 386,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/JEECoaching.tsx",
                        lineNumber: 384,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FadeInView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeInView"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-px w-8 bg-foreground/10"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 425,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-medium",
                                            children: "Compare"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                            lineNumber: 426,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 424,
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
                                            lineNumber: 429,
                                            columnNumber: 27
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 428,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground/70 text-sm sm:text-base leading-[1.8] max-w-3xl mb-10",
                                    children: "See how MindPeak’s personalized 1-on-1 JEE coaching stacks up against traditional batch coaching."
                                }, void 0, false, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 431,
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
                                                            className: "text-left px-5 py-4 text-muted-foreground text-[11px] uppercase tracking-[0.15em] font-medium",
                                                            children: "Feature"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                                            lineNumber: 438,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-center px-5 py-4 text-primary/70 text-[11px] uppercase tracking-[0.15em] font-medium",
                                                            children: "MindPeak"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                                            lineNumber: 439,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-center px-5 py-4 text-muted-foreground text-[11px] uppercase tracking-[0.15em] font-medium",
                                                            children: "Allen"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                                            lineNumber: 440,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-center px-5 py-4 text-muted-foreground text-[11px] uppercase tracking-[0.15em] font-medium",
                                                            children: "Resonance"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                                            lineNumber: 441,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-center px-5 py-4 text-muted-foreground text-[11px] uppercase tracking-[0.15em] font-medium",
                                                            children: "FIITJEE"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/JEECoaching.tsx",
                                                            lineNumber: 442,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                    lineNumber: 437,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/JEECoaching.tsx",
                                                lineNumber: 436,
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
                                                                lineNumber: 448,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-5 py-3.5 text-center text-primary/80 font-medium text-xs sm:text-sm",
                                                                children: row.mindpeak
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/JEECoaching.tsx",
                                                                lineNumber: 449,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-5 py-3.5 text-center text-muted-foreground text-xs sm:text-sm",
                                                                children: row.allen
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/JEECoaching.tsx",
                                                                lineNumber: 450,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-5 py-3.5 text-center text-muted-foreground text-xs sm:text-sm",
                                                                children: row.resonance
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/JEECoaching.tsx",
                                                                lineNumber: 451,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-5 py-3.5 text-center text-muted-foreground text-xs sm:text-sm",
                                                                children: row.fiitjee
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/JEECoaching.tsx",
                                                                lineNumber: 452,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/src/views/JEECoaching.tsx",
                                                        lineNumber: 447,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/JEECoaching.tsx",
                                                lineNumber: 445,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/JEECoaching.tsx",
                                        lineNumber: 435,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                    lineNumber: 434,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/JEECoaching.tsx",
                            lineNumber: 423,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/JEECoaching.tsx",
                        lineNumber: 422,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-12 sm:py-16 px-4 sm:px-6 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/src/views/JEECoaching.tsx",
                                lineNumber: 463,
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
                                        lineNumber: 465,
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
                                                label: 'JEE Physics Formulas',
                                                to: '/jee-physics-formulas'
                                            },
                                            {
                                                label: 'JEE Chemistry Formulas',
                                                to: '/jee-chemistry-formulas'
                                            },
                                            {
                                                label: 'JEE Maths Formulas',
                                                to: '/jee-maths-formulas'
                                            },
                                            {
                                                label: 'JEE Practice Questions',
                                                to: '/jee-practice'
                                            },
                                            {
                                                label: 'JEE Previous Year Questions',
                                                to: '/jee-pyq'
                                            },
                                            {
                                                label: 'JEE Rank Predictor',
                                                to: '/jee-rank-predictor'
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
                                                        lineNumber: 493,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " ",
                                                    l.label
                                                ]
                                            }, l.to, true, {
                                                fileName: "[project]/src/views/JEECoaching.tsx",
                                                lineNumber: 488,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/JEECoaching.tsx",
                                        lineNumber: 466,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/JEECoaching.tsx",
                                lineNumber: 464,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/JEECoaching.tsx",
                        lineNumber: 462,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MonthlySuccessStory, {
                                exam: "JEE"
                            }, void 0, false, {
                                fileName: "[project]/src/views/JEECoaching.tsx",
                                lineNumber: 502,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WeeklyTip, {
                                exam: "JEE"
                            }, void 0, false, {
                                fileName: "[project]/src/views/JEECoaching.tsx",
                                lineNumber: 503,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/JEECoaching.tsx",
                        lineNumber: 501,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PeopleAlsoAsk$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PeopleAlsoAsk"], {
                        questions: paaQuestions,
                        heading: "People Also Ask About JEE Coaching"
                    }, void 0, false, {
                        fileName: "[project]/src/views/JEECoaching.tsx",
                        lineNumber: 507,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageFAQ$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageFAQ"], {
                        items: faqs,
                        heading: "JEE Coaching",
                        highlight: "FAQs"
                    }, void 0, false, {
                        fileName: "[project]/src/views/JEECoaching.tsx",
                        lineNumber: 510,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-20 sm:py-28 px-4 sm:px-6 text-center relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/src/views/JEECoaching.tsx",
                                lineNumber: 514,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FadeInView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeInView"], {
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
                                                lineNumber: 517,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/JEECoaching.tsx",
                                        lineNumber: 516,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground/70 text-sm sm:text-base mb-8 sm:mb-10 max-w-lg mx-auto",
                                        children: "Join 500+ students who transformed their JEE preparation with personalized 1-on-1 coaching."
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/JEECoaching.tsx",
                                        lineNumber: 519,
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
                                                        lineNumber: 528,
                                                        columnNumber: 77
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/JEECoaching.tsx",
                                                    lineNumber: 528,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/JEECoaching.tsx",
                                                lineNumber: 527,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/JEECoaching.tsx",
                                        lineNumber: 522,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/JEECoaching.tsx",
                                lineNumber: 515,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/JEECoaching.tsx",
                        lineNumber: 513,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageFooter"], {
                        extra: "JEE Online Coaching."
                    }, void 0, false, {
                        fileName: "[project]/src/views/JEECoaching.tsx",
                        lineNumber: 535,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/JEECoaching.tsx",
                lineNumber: 192,
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
_c5 = JEECoaching;
const __TURBOPACK__default__export__ = JEECoaching;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "ExamCountdown");
__turbopack_context__.k.register(_c1, "SeasonalBanner");
__turbopack_context__.k.register(_c2, "StudyPlanSection");
__turbopack_context__.k.register(_c3, "MonthlySuccessStory");
__turbopack_context__.k.register(_c4, "WeeklyTip");
__turbopack_context__.k.register(_c5, "JEECoaching");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_821e83ba._.js.map
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
"[project]/src/views/NEETCoaching.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$microscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Microscope$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/microscope.js [app-client] (ecmascript) <export default as Microscope>");
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
/* ─── data ─── */ const stats = [
    {
        value: '500+',
        label: 'Students Mentored'
    },
    {
        value: '95%',
        label: 'Success Rate'
    },
    {
        value: 'Top 100',
        label: 'NEET All India'
    },
    {
        value: '50+',
        label: 'Medical College Selects'
    }
];
const batchProblems = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        title: '100+ Students Per Batch',
        desc: 'In massive NEET batches, Biology — which carries 360 out of 720 marks — gets the same generic treatment for every student. Whether you struggle with Genetics or breeze through Ecology, the pace never adapts. Your individual weaknesses stay hidden in the crowd.'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
        title: 'Biology Gets Neglected',
        desc: 'Most batch centres prioritize Physics and Chemistry (the "hard" subjects), giving Biology proportionally less attention. But Biology is the highest-scoring subject in NEET and requires targeted, detailed preparation — especially Botany and subtopics like Plant Physiology and Morphology.'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
        title: 'No Personalized NEET Strategy',
        desc: 'NEET requires a different strategy than JEE. The emphasis on NCERT, the pattern of assertion-reason questions, and the Biology-heavy marking scheme demand a tailored approach. One-size-fits-all batch coaching misses these NEET-specific nuances.'
    }
];
const methodology = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        title: 'Dedicated NEET Mentor',
        desc: 'Your personal mentor — typically an AIIMS/top medical college alumnus — guides your entire NEET journey. They know your strengths in Zoology, your struggles in Physical Chemistry, and your exam-day anxiety triggers. This deep understanding drives results.'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$microscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Microscope$3e$__["Microscope"],
        title: 'Biology-First Approach',
        desc: 'Since Biology accounts for 50% of NEET marks, our curriculum front-loads comprehensive Biology preparation. Every NCERT line is covered. Botany and Zoology receive dedicated daily sessions with diagram-based learning and assertion-reason practice.'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"],
        title: 'Adaptive Curriculum',
        desc: 'Diagnostic tests map your exact knowledge gaps. Your study plan evolves weekly — spending more time on Organic Chemistry if that\'s your weakness, accelerating through Mechanics if you\'re strong. Zero wasted preparation hours.'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
        title: '1-on-1 Live Sessions (6 Days/Week)',
        desc: 'Daily live video classes with your dedicated mentor. Short, focused sessions for maximum retention. Every class recorded for revision. Flexible scheduling around your school hours and board exam preparation.'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
        title: 'NEET-Specific Mock Tests',
        desc: 'Regular full-length NEET mock tests in the exact exam pattern — 200 questions, 200 minutes. Detailed analysis identifies topic-wise accuracy, negative marking patterns, and time management issues. CBT format simulates the real exam.'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
        title: 'NCERT Mastery Program',
        desc: '90% of NEET questions come from NCERT. Our NCERT mastery track ensures line-by-line coverage of Biology, Chemistry, and Physics NCERT textbooks. Mentors quiz you on every diagram, table, and footnote.'
    }
];
const testimonials = [
    {
        name: 'Ananya Reddy',
        city: 'Hyderabad',
        rank: 'NEET 98.5%ile',
        before: 420,
        after: 680,
        quote: 'I was scoring 420 in mock tests despite studying 10 hours a day. My MindPeak mentor identified that my Biology preparation was surface-level — I was memorizing without understanding. The 1-on-1 NCERT deep-dive sessions transformed my Biology score from 260 to 340. I finally got into my dream medical college.'
    },
    {
        name: 'Sneha Gupta',
        city: 'Patna',
        rank: 'NEET 97.8%ile',
        before: 380,
        after: 650,
        quote: 'Coming from a tier-3 city, I didn\'t have access to quality NEET coaching. MindPeak gave me a mentor who was an AIIMS alumnus. The personalized attention I received was something no coaching centre in Patna could have provided. My score jumped by 270 marks in 8 months.'
    },
    {
        name: 'Karthik Nair',
        city: 'Kochi',
        rank: 'NEET 96.2%ile',
        before: 450,
        after: 640,
        quote: 'Physics was my Achilles heel — I\'d consistently score below 100. My mentor created a Physics-focused plan with daily problem-solving sessions. In 6 months, my Physics score went from 80 to 155. The adaptive approach made all the difference.'
    }
];
const syllabus = [
    {
        subject: 'Biology (Botany + Zoology)',
        chapters: 38,
        marks: '360 / 720',
        topics: [
            'Cell Biology & Molecular Biology',
            'Genetics & Evolution (Mendelian, Molecular)',
            'Human Physiology (All Systems)',
            'Plant Physiology (Photosynthesis, Respiration, Growth)',
            'Ecology & Environment',
            'Biotechnology & Its Applications',
            'Animal & Plant Morphology'
        ]
    },
    {
        subject: 'Chemistry',
        chapters: 30,
        marks: '180 / 720',
        topics: [
            'Physical Chemistry (Solutions, Electrochemistry, Chemical Kinetics)',
            'Organic Chemistry (Hydrocarbons, Biomolecules, Polymers)',
            'Inorganic Chemistry (d-Block, Coordination, p-Block)',
            'General Chemistry (Atomic Structure, Bonding)',
            'Chemistry in Everyday Life'
        ]
    },
    {
        subject: 'Physics',
        chapters: 25,
        marks: '180 / 720',
        topics: [
            'Mechanics (Laws of Motion, Work-Energy, Rotational)',
            'Electrodynamics (Current, Magnetism, EMI)',
            'Optics (Ray & Wave Optics)',
            'Modern Physics (Atoms, Nuclei, Semiconductors)',
            'Thermodynamics & Kinetic Theory'
        ]
    }
];
const pricingComparison = [
    {
        feature: 'Teaching Format',
        mindpeak: '1-on-1 Online',
        allen: 'Batch (100+)',
        aakash: 'Batch (80+)',
        byjus: 'Recorded + Batch'
    },
    {
        feature: 'Annual Fees',
        mindpeak: '₹1,00,000 – ₹2,30,000',
        allen: '₹1,20,000+',
        aakash: '₹1,10,000+',
        byjus: '₹1,50,000+'
    },
    {
        feature: 'Personal Mentor',
        mindpeak: '✓ Dedicated',
        allen: '✗ Shared',
        aakash: '✗ Shared',
        byjus: '✗ No'
    },
    {
        feature: 'Biology Focus',
        mindpeak: '✓ 50% Curriculum',
        allen: 'Equal Split',
        aakash: 'Equal Split',
        byjus: 'Generic'
    },
    {
        feature: 'NCERT Line-by-Line',
        mindpeak: '✓ Comprehensive',
        allen: 'Partial',
        aakash: 'Partial',
        byjus: '✗ No'
    },
    {
        feature: 'Doubt Resolution',
        mindpeak: '✓ Real-time 1-on-1',
        allen: 'Group Sessions',
        aakash: 'Limited Slots',
        byjus: 'Chat Support'
    },
    {
        feature: 'Parent Reports',
        mindpeak: '✓ Weekly',
        allen: 'Quarterly',
        aakash: 'Monthly',
        byjus: 'App-Based'
    },
    {
        feature: 'Travel Time',
        mindpeak: 'Zero (Online)',
        allen: '1-2 hrs/day',
        aakash: '1-2 hrs/day',
        byjus: 'N/A'
    }
];
const paaQuestions = [
    {
        question: 'Is online NEET coaching effective?',
        answer: 'Yes — personalized online NEET coaching is highly effective. MindPeak\'s 1-on-1 model with Biology-first approach and NCERT mastery consistently produces 95%+ percentile results. Students gain 150-250 marks on average, with dedicated mentors from AIIMS and top medical colleges guiding every session.'
    },
    {
        question: 'How much does NEET coaching cost?',
        answer: 'NEET coaching ranges from ₹50,000 to ₹3,00,000 annually. Allen and Aakash charge ₹1-1.5 lakh for batch coaching. MindPeak\'s personalized 1-on-1 NEET coaching starts at ₹1,00,000/year with Biology-focused curriculum, NCERT line-by-line coverage, and dedicated mentorship — better value per hour.'
    },
    {
        question: 'How important is NCERT for NEET?',
        answer: 'NCERT is critical for NEET — approximately 90% of NEET questions are directly or indirectly from NCERT textbooks. MindPeak\'s NCERT Mastery Program ensures line-by-line coverage of every diagram, table, and footnote across Biology, Chemistry, and Physics NCERT books.'
    },
    {
        question: 'Can I crack NEET in one year?',
        answer: 'Yes, cracking NEET in one year is possible with focused, personalized preparation. MindPeak\'s 1-year NEET program provides an intensive study plan with daily sessions, weekly mock tests, and targeted Biology preparation. Multiple MindPeak students have scored 650+ in NEET within 8-12 months.'
    },
    {
        question: 'How many hours should I study for NEET?',
        answer: '6-8 hours of quality, focused study daily is ideal for NEET preparation. Biology deserves 50% of your study time matching its 360/720 marks weightage. Personalized coaching ensures every hour counts by targeting your specific weak chapters rather than generic revision.'
    },
    {
        question: 'Is NEET harder than JEE?',
        answer: 'NEET and JEE test different skills. NEET emphasizes factual recall and NCERT mastery while JEE tests conceptual problem-solving. NEET has higher competition (20 lakh+ applicants) but different preparation strategy. MindPeak provides exam-specific coaching optimized for NEET\'s unique pattern.'
    }
];
const faqs = [
    {
        question: 'What makes MindPeak\'s NEET coaching different?',
        answer: 'MindPeak provides dedicated 1-on-1 mentorship with a Biology-first approach — since Biology accounts for 50% of NEET marks. Every student gets a personal mentor (typically AIIMS/top medical college alumni), an adaptive curriculum, daily live sessions 6 days a week, and comprehensive NCERT line-by-line coverage. Unlike batch coaching, every minute of your preparation is personalized.'
    },
    {
        question: 'How does MindPeak handle Biology preparation for NEET?',
        answer: 'Biology receives proportionally the highest focus in our NEET curriculum — matching its 360/720 mark weightage. We cover every NCERT Biology chapter line-by-line, including diagrams, tables, and footnotes. Daily Biology sessions include diagram-based learning, assertion-reason practice, and NCERT-based MCQ drills. Both Botany and Zoology receive dedicated attention.'
    },
    {
        question: 'What is MindPeak\'s NEET success rate?',
        answer: 'MindPeak has a 95% selection rate with 500+ students mentored. Our best NEET results include 98.5+ percentile scores and 50+ students securing admission in top medical colleges including government medical colleges. Our approach consistently produces results that match or exceed top coaching institutes.'
    },
    {
        question: 'Are NEET classes conducted online?',
        answer: 'Yes! All NEET classes are conducted via live 1-on-1 video sessions with your dedicated mentor. Classes happen 6 days a week with short, focused sessions for maximum retention. Every session is recorded for revision. You can attend from anywhere with a laptop/tablet and internet connection.'
    },
    {
        question: 'Does MindPeak cover CBSE boards alongside NEET?',
        answer: 'Absolutely. For Class 11 and 12 students, our mentors integrate board exam preparation with NEET coaching. The CBSE Biology and Chemistry syllabus overlaps significantly with NEET, and our approach ensures you excel in both without double preparation.'
    },
    {
        question: 'Can I join MindPeak NEET coaching mid-year?',
        answer: 'Yes! Since our coaching is 1-on-1, there are no batches. You can join anytime. Your mentor will assess your current level, create a customized catch-up plan, and align the curriculum to your NEET exam timeline.'
    },
    {
        question: 'What is the fee for NEET coaching at MindPeak?',
        answer: 'MindPeak offers flexible pricing — our 2-year NEET program starts at ₹2,30,000 + GST and 1-year programs at ₹1,99,000 + GST (discounted to ₹1,30,000 with current offers). Monthly and quarterly payment options available. Book a free demo to discuss pricing tailored to your needs.'
    }
];
/* ─── page ─── */ const NEETCoaching = ()=>{
    _s();
    const { openDemoModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DemoBookingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDemoModal"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NEETCoaching.useEffect": ()=>{
            window.scrollTo(0, 0);
        }
    }["NEETCoaching.useEffect"], []);
    const lastUpdated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contentFreshness$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLastUpdated"])('neet-coaching');
    const examYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__getExamYear__as__getCurrentExamYear$3e$__["getCurrentExamYear"])('NEET');
    const courseSchema = {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: 'NEET UG Personalized Coaching — MindPeak Institute',
        description: 'Comprehensive 1-on-1 personalized NEET coaching with Biology-first approach, dedicated mentors, and 95% success rate.',
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
                name: 'NEET-UG',
                sameAs: 'https://en.wikipedia.org/wiki/National_Eligibility_cum_Entrance_Test_(Undergraduate)'
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
                name: 'NCERT',
                sameAs: 'https://en.wikipedia.org/wiki/National_Council_of_Educational_Research_and_Training'
            }
        ],
        review: [
            {
                '@type': 'Review',
                author: {
                    '@type': 'Person',
                    name: 'Ananya Reddy'
                },
                reviewRating: {
                    '@type': 'Rating',
                    ratingValue: '5',
                    bestRating: '5'
                },
                reviewBody: 'My NEET score jumped from 420 to 680 with MindPeak\'s Biology-first 1-on-1 coaching approach.'
            },
            {
                '@type': 'Review',
                author: {
                    '@type': 'Person',
                    name: 'Sneha Gupta'
                },
                reviewRating: {
                    '@type': 'Rating',
                    ratingValue: '5',
                    bestRating: '5'
                },
                reviewBody: 'Coming from a tier-3 city, MindPeak gave me AIIMS-level mentorship. Score improved by 270 marks.'
            },
            {
                '@type': 'Review',
                author: {
                    '@type': 'Person',
                    name: 'Karthik Nair'
                },
                reviewRating: {
                    '@type': 'Rating',
                    ratingValue: '5',
                    bestRating: '5'
                },
                reviewBody: 'My Physics score went from 80 to 155 in 6 months with targeted 1-on-1 sessions.'
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
                name: 'NEET Coaching',
                item: 'https://mindpeakinstitute.com/neet-coaching'
            }
        ]
    };
    const webPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Best NEET Coaching Online — MindPeak Institute',
        url: 'https://mindpeakinstitute.com/neet-coaching',
        significantLink: [
            'https://mindpeakinstitute.com/neet-practice',
            'https://mindpeakinstitute.com/neet-pyq',
            'https://mindpeakinstitute.com/neet-biology-preparation',
            'https://mindpeakinstitute.com/neet-chemistry-preparation',
            'https://mindpeakinstitute.com/neet-physics-preparation',
            'https://mindpeakinstitute.com/courses',
            'https://mindpeakinstitute.com/free-trial'
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SEOHead$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEOHead"], {
                title: `Best NEET Coaching Online ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]} — Top Medical Colleges | 95% Success [Free Trial]`,
                description: `Crack NEET ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]} with 1-on-1 Biology-first coaching. NCERT mastery, dedicated mentors, 95% success rate. 500+ students. Book free demo now.`,
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
                fileName: "[project]/src/views/NEETCoaching.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navbar"], {}, void 0, false, {
                fileName: "[project]/src/views/NEETCoaching.tsx",
                lineNumber: 178,
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
                                        fileName: "[project]/src/views/NEETCoaching.tsx",
                                        lineNumber: 184,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                    lineNumber: 184,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-foreground/15",
                                    children: "/"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                    lineNumber: 185,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "text-foreground/80",
                                    children: "NEET Coaching"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/NEETCoaching.tsx",
                            lineNumber: 183,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/NEETCoaching.tsx",
                        lineNumber: 182,
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
                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                    lineNumber: 193,
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
                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-primary/70 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-medium",
                                                    children: "MindPeak Institute"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground text-xs truncate",
                                                    children: "Personalized 1-on-1 NEET UG Coaching"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                            lineNumber: 197,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-display font-bold text-foreground mb-5 sm:mb-6 tracking-[-0.03em]",
                                    style: {
                                        fontSize: 'clamp(1.6rem, 5vw, 3.5rem)',
                                        lineHeight: 1.1
                                    },
                                    children: [
                                        "NEET Online Coaching —",
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gradient-gold",
                                            children: "Personalized 1-on-1 Mentorship"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                            lineNumber: 205,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        ' ',
                                        "for Top Medical Colleges"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground/70 text-sm sm:text-base leading-[1.8] max-w-3xl mb-8 sm:mb-10",
                                    children: "Your dream of becoming a doctor deserves more than a seat in a 200-student classroom. At MindPeak, every NEET aspirant receives a dedicated mentor from AIIMS or top medical colleges, an adaptive Biology-first curriculum, and daily 1-on-1 live sessions. 95% success rate, NCERT mastery, 500+ students mentored."
                                }, void 0, false, {
                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                    lineNumber: 209,
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
                                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                                            lineNumber: 217,
                                                            columnNumber: 79
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/NEETCoaching.tsx",
                                                        lineNumber: 217,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                            lineNumber: 214,
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
                                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " +91 82194 57704"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                            lineNumber: 220,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/NEETCoaching.tsx",
                            lineNumber: 192,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/NEETCoaching.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-5xl mx-auto px-4 sm:px-6 pb-6 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExamCountdown, {
                                exam: "NEET"
                            }, void 0, false, {
                                fileName: "[project]/src/views/NEETCoaching.tsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SeasonalBanner, {}, void 0, false, {
                                fileName: "[project]/src/views/NEETCoaching.tsx",
                                lineNumber: 230,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/NEETCoaching.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 sm:px-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeaturedSnippet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FeaturedSnippet"], {
                            question: `How to Prepare for NEET ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]} — 8-Step Plan`,
                            answer: `NEET ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]} preparation centres on NCERT mastery for Biology (50% of the 720-mark paper) and structured Physics-Chemistry problem practice. The 8 steps below scale from a 12-month plan down to a 6-month intensive cycle.`,
                            ordered: true,
                            bullets: [
                                'Master NCERT Biology line-by-line — 85 to 90% of NEET Biology comes directly from NCERT.',
                                'Complete NCERT Physics and Chemistry — the foundation for both subjects.',
                                'Add reference books — DC Pandey / BM Sharma for Physics, MS Chouhan for Organic Chemistry.',
                                'Solve NCERT Exemplar — covers high-yield question patterns across all three subjects.',
                                'Drill chapter-wise PYQs — the last 15 years of NEET papers, subject by subject.',
                                'Run a 21-day Biology revision cycle — re-skim every Biology chapter every 3 weeks.',
                                'Take weekly full-length mocks from month 4 — under exam conditions, analyse the same day.',
                                'Final 30 days: revision only — NCERT skim plus weak-area drills, 2 mocks per week.'
                            ],
                            authorityNote: "In our NEET classes, the biggest score-mover is enforcing the 21-day Biology revision cycle. Students who maintain it typically gain 30 to 50 Biology marks within 90 days."
                        }, void 0, false, {
                            fileName: "[project]/src/views/NEETCoaching.tsx",
                            lineNumber: 235,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/NEETCoaching.tsx",
                        lineNumber: 234,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-12 sm:py-16 px-4 sm:px-6 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/src/views/NEETCoaching.tsx",
                                lineNumber: 255,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/src/views/NEETCoaching.tsx",
                                lineNumber: 256,
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
                                                fileName: "[project]/src/views/NEETCoaching.tsx",
                                                lineNumber: 260,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-muted-foreground text-[10px] uppercase tracking-[0.2em]",
                                                children: s.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/NEETCoaching.tsx",
                                                lineNumber: 261,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, s.label, true, {
                                        fileName: "[project]/src/views/NEETCoaching.tsx",
                                        lineNumber: 259,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/views/NEETCoaching.tsx",
                                lineNumber: 257,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/NEETCoaching.tsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StudyPlanSection, {
                        examType: "NEET",
                        themed: true
                    }, void 0, false, {
                        fileName: "[project]/src/views/NEETCoaching.tsx",
                        lineNumber: 268,
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
                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                            lineNumber: 274,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] uppercase tracking-[0.3em] text-destructive/60 font-medium",
                                            children: "The Problem"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                            lineNumber: 275,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                    lineNumber: 273,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl mb-4 tracking-[-0.02em]",
                                    children: [
                                        "Why Traditional NEET ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gradient-gold",
                                            children: "Batch Coaching Fails"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                            lineNumber: 278,
                                            columnNumber: 36
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                    lineNumber: 277,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground/70 text-sm sm:text-base leading-[1.8] max-w-3xl mb-10",
                                    children: "NEET demands a Biology-heavy strategy and line-by-line NCERT mastery. Yet most batch coaching treats NEET like another engineering entrance exam."
                                }, void 0, false, {
                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                    lineNumber: 280,
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
                                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-display font-semibold text-foreground text-base mb-2 tracking-[-0.01em]",
                                                    children: p.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                                    lineNumber: 288,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground/70 text-sm leading-[1.7]",
                                                    children: p.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                            lineNumber: 285,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                    lineNumber: 283,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/NEETCoaching.tsx",
                            lineNumber: 272,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/NEETCoaching.tsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-20 sm:py-28 px-4 sm:px-6 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/src/views/NEETCoaching.tsx",
                                lineNumber: 298,
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
                                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] uppercase tracking-[0.3em] text-primary/60 font-medium",
                                                    children: "NEET Methodology"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                            lineNumber: 301,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "font-display font-bold text-foreground text-2xl md:text-3xl mb-4 tracking-[-0.02em]",
                                            children: [
                                                "The MindPeak ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gradient-gold",
                                                    children: "NEET Advantage"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 30
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                            lineNumber: 305,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground/70 text-sm sm:text-base leading-[1.8] max-w-3xl mb-12",
                                            children: "Biology-first approach reflecting 50% weightage, NCERT line-by-line mastery, and mentors from top medical colleges."
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                            lineNumber: 308,
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
                                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                                            lineNumber: 315,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(m.icon, {
                                                            className: "w-5 h-5 text-primary/60 mt-4 mb-4",
                                                            strokeWidth: 1.5
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                                            lineNumber: 316,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-display font-semibold text-foreground text-sm mb-2 tracking-[-0.01em]",
                                                            children: m.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                                            lineNumber: 317,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-muted-foreground/70 text-sm leading-[1.7]",
                                                            children: m.desc
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                                            lineNumber: 318,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                                    lineNumber: 313,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                            lineNumber: 311,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                    lineNumber: 300,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/views/NEETCoaching.tsx",
                                lineNumber: 299,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/NEETCoaching.tsx",
                        lineNumber: 297,
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
                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                            lineNumber: 330,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-medium",
                                            children: "Stories"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                            lineNumber: 331,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                    lineNumber: 329,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-display font-bold text-foreground text-2xl md:text-3xl mb-10 tracking-[-0.02em]",
                                    children: [
                                        "NEET ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gradient-gold",
                                            children: "Success Stories"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                            lineNumber: 334,
                                            columnNumber: 20
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                    lineNumber: 333,
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
                                                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                                                    lineNumber: 342,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-muted-foreground text-[11px] tracking-[0.05em]",
                                                                    children: t.city
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                                                    lineNumber: 343,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                                            lineNumber: 341,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-primary/70 text-[11px] tracking-[0.1em] font-medium",
                                                            children: t.rank
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                                            lineNumber: 345,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                                    lineNumber: 340,
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
                                                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                                                    lineNumber: 349,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-muted-foreground/80 text-[10px] uppercase tracking-[0.1em]",
                                                                    children: "Before"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                                                    lineNumber: 350,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                                            lineNumber: 348,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            className: "w-3.5 h-3.5 text-primary/50 flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                                            lineNumber: 352,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 text-center p-3 rounded-xl bg-foreground/[0.02] border border-foreground/[0.04]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-primary/80 font-display font-bold text-lg",
                                                                    children: t.after
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                                                    lineNumber: 354,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-muted-foreground/80 text-[10px] uppercase tracking-[0.1em]",
                                                                    children: "After"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                                                    lineNumber: 355,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                                            lineNumber: 353,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                                    lineNumber: 347,
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
                                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                                    lineNumber: 358,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                            lineNumber: 338,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                    lineNumber: 336,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/NEETCoaching.tsx",
                            lineNumber: 328,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/NEETCoaching.tsx",
                        lineNumber: 327,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-20 sm:py-28 px-4 sm:px-6 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/src/views/NEETCoaching.tsx",
                                lineNumber: 367,
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
                                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                                    lineNumber: 371,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] uppercase tracking-[0.3em] text-primary/60 font-medium",
                                                    children: "Syllabus"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                                    lineNumber: 372,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                            lineNumber: 370,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "font-display font-bold text-foreground text-2xl md:text-3xl mb-4 tracking-[-0.02em]",
                                            children: [
                                                "Complete NEET ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gradient-gold",
                                                    children: "Syllabus Coverage"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                                    lineNumber: 375,
                                                    columnNumber: 31
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                            lineNumber: 374,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground/70 text-sm sm:text-base leading-[1.8] max-w-3xl mb-10",
                                            children: "Biology receives proportionally the highest focus — matching its 360/720 mark weightage. NCERT-first principles throughout."
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                            lineNumber: 377,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid md:grid-cols-3 gap-4",
                                            children: syllabus.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FadeInView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeInView"], {
                                                    delay: i * 60,
                                                    className: "rounded-2xl border border-foreground/[0.06] bg-foreground/[0.02] p-7",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between mb-1",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-display font-semibold text-foreground text-base tracking-[-0.01em]",
                                                                children: s.subject
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/NEETCoaching.tsx",
                                                                lineNumber: 385,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                                            lineNumber: 384,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-primary/60 text-[10px] uppercase tracking-[0.15em] font-medium mb-4",
                                                            children: [
                                                                s.chapters,
                                                                " Ch · ",
                                                                s.marks
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                                            lineNumber: 387,
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
                                                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                                                            lineNumber: 391,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        topic
                                                                    ]
                                                                }, j, true, {
                                                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                                                    lineNumber: 390,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                                            lineNumber: 388,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                                    lineNumber: 382,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                            lineNumber: 380,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                    lineNumber: 369,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/views/NEETCoaching.tsx",
                                lineNumber: 368,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/NEETCoaching.tsx",
                        lineNumber: 366,
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
                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                            lineNumber: 407,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-medium",
                                            children: "Compare"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                            lineNumber: 408,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                    lineNumber: 406,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-display font-bold text-foreground text-2xl md:text-3xl mb-4 tracking-[-0.02em]",
                                    children: [
                                        "NEET Coaching ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gradient-gold",
                                            children: "Pricing Comparison"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                            lineNumber: 411,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                    lineNumber: 410,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground/70 text-sm sm:text-base leading-[1.8] max-w-3xl mb-10",
                                    children: "Compare MindPeak’s personalized NEET coaching with traditional batch coaching."
                                }, void 0, false, {
                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                    lineNumber: 413,
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
                                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                                            lineNumber: 420,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-center px-5 py-4 text-primary/70 text-[11px] uppercase tracking-[0.15em] font-medium",
                                                            children: "MindPeak"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                                            lineNumber: 421,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-center px-5 py-4 text-muted-foreground text-[11px] uppercase tracking-[0.15em] font-medium",
                                                            children: "Allen"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                                            lineNumber: 422,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-center px-5 py-4 text-muted-foreground text-[11px] uppercase tracking-[0.15em] font-medium",
                                                            children: "Aakash"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                                            lineNumber: 423,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-center px-5 py-4 text-muted-foreground text-[11px] uppercase tracking-[0.15em] font-medium",
                                                            children: "BYJU’S"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/NEETCoaching.tsx",
                                                            lineNumber: 424,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                                    lineNumber: 419,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/NEETCoaching.tsx",
                                                lineNumber: 418,
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
                                                                fileName: "[project]/src/views/NEETCoaching.tsx",
                                                                lineNumber: 430,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-5 py-3.5 text-center text-primary/80 font-medium text-xs sm:text-sm",
                                                                children: row.mindpeak
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/NEETCoaching.tsx",
                                                                lineNumber: 431,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-5 py-3.5 text-center text-muted-foreground text-xs sm:text-sm",
                                                                children: row.allen
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/NEETCoaching.tsx",
                                                                lineNumber: 432,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-5 py-3.5 text-center text-muted-foreground text-xs sm:text-sm",
                                                                children: row.aakash
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/NEETCoaching.tsx",
                                                                lineNumber: 433,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-5 py-3.5 text-center text-muted-foreground text-xs sm:text-sm",
                                                                children: row.byjus
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/NEETCoaching.tsx",
                                                                lineNumber: 434,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/src/views/NEETCoaching.tsx",
                                                        lineNumber: 429,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/NEETCoaching.tsx",
                                                lineNumber: 427,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/NEETCoaching.tsx",
                                        lineNumber: 417,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                    lineNumber: 416,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/NEETCoaching.tsx",
                            lineNumber: 405,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/NEETCoaching.tsx",
                        lineNumber: 404,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-12 sm:py-16 px-4 sm:px-6 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/src/views/NEETCoaching.tsx",
                                lineNumber: 445,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-4xl mx-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-display font-semibold text-foreground text-sm mb-5 tracking-[-0.01em]",
                                        children: "Explore More"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/NEETCoaching.tsx",
                                        lineNumber: 447,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: [
                                            {
                                                label: 'NEET Biology Preparation',
                                                to: '/neet-biology-preparation'
                                            },
                                            {
                                                label: 'NEET Chemistry Preparation',
                                                to: '/neet-chemistry-preparation'
                                            },
                                            {
                                                label: 'NEET Physics Preparation',
                                                to: '/neet-physics-preparation'
                                            },
                                            {
                                                label: 'NEET Biology Formulas',
                                                to: '/neet-biology-formulas'
                                            },
                                            {
                                                label: 'NEET Practice Questions',
                                                to: '/neet-practice'
                                            },
                                            {
                                                label: 'NEET Previous Year Questions',
                                                to: '/neet-pyq'
                                            },
                                            {
                                                label: 'NEET Rank Predictor',
                                                to: '/neet-rank-predictor'
                                            },
                                            {
                                                label: 'JEE Coaching',
                                                to: '/jee-coaching'
                                            },
                                            {
                                                label: 'All Courses & Pricing',
                                                to: '/courses'
                                            },
                                            {
                                                label: 'Kota Alternative',
                                                to: '/kota-coaching-alternative'
                                            },
                                            {
                                                label: 'Online vs Offline Coaching',
                                                to: '/online-vs-offline-jee-coaching'
                                            },
                                            {
                                                label: 'NEET Coaching in Delhi',
                                                to: '/neet-coaching-in-delhi'
                                            },
                                            {
                                                label: 'NEET Coaching in Mumbai',
                                                to: '/neet-coaching-in-mumbai'
                                            },
                                            {
                                                label: 'NEET Coaching in Bangalore',
                                                to: '/neet-coaching-in-bangalore'
                                            },
                                            {
                                                label: 'Blog — NEET Tips',
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
                                                        fileName: "[project]/src/views/NEETCoaching.tsx",
                                                        lineNumber: 467,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " ",
                                                    l.label
                                                ]
                                            }, l.to, true, {
                                                fileName: "[project]/src/views/NEETCoaching.tsx",
                                                lineNumber: 466,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/NEETCoaching.tsx",
                                        lineNumber: 448,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/NEETCoaching.tsx",
                                lineNumber: 446,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/NEETCoaching.tsx",
                        lineNumber: 444,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MonthlySuccessStory, {
                                exam: "NEET"
                            }, void 0, false, {
                                fileName: "[project]/src/views/NEETCoaching.tsx",
                                lineNumber: 476,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WeeklyTip, {
                                exam: "NEET"
                            }, void 0, false, {
                                fileName: "[project]/src/views/NEETCoaching.tsx",
                                lineNumber: 477,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/NEETCoaching.tsx",
                        lineNumber: 475,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PeopleAlsoAsk$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PeopleAlsoAsk"], {
                        questions: paaQuestions,
                        heading: "People Also Ask About NEET Coaching"
                    }, void 0, false, {
                        fileName: "[project]/src/views/NEETCoaching.tsx",
                        lineNumber: 481,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageFAQ$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageFAQ"], {
                        items: faqs,
                        heading: "NEET Coaching",
                        highlight: "FAQs"
                    }, void 0, false, {
                        fileName: "[project]/src/views/NEETCoaching.tsx",
                        lineNumber: 484,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-20 sm:py-28 px-4 sm:px-6 text-center relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/src/views/NEETCoaching.tsx",
                                lineNumber: 488,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FadeInView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeInView"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl mb-4 tracking-[-0.02em]",
                                        children: [
                                            "Your Medical Dream Starts ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gradient-gold",
                                                children: "Today"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/NEETCoaching.tsx",
                                                lineNumber: 491,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/NEETCoaching.tsx",
                                        lineNumber: 490,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground/70 text-sm sm:text-base mb-8 sm:mb-10 max-w-lg mx-auto",
                                        children: "Join 500+ students who transformed their NEET preparation with personalized 1-on-1 coaching."
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/NEETCoaching.tsx",
                                        lineNumber: 493,
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
                                                        fileName: "[project]/src/views/NEETCoaching.tsx",
                                                        lineNumber: 499,
                                                        columnNumber: 77
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/NEETCoaching.tsx",
                                                    lineNumber: 499,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/NEETCoaching.tsx",
                                                lineNumber: 498,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/NEETCoaching.tsx",
                                        lineNumber: 496,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/NEETCoaching.tsx",
                                lineNumber: 489,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/NEETCoaching.tsx",
                        lineNumber: 487,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageFooter"], {
                        extra: "NEET Online Coaching."
                    }, void 0, false, {
                        fileName: "[project]/src/views/NEETCoaching.tsx",
                        lineNumber: 505,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/NEETCoaching.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(NEETCoaching, "u1MEFAjX95KcywKZaxnBJaaQagM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DemoBookingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDemoModal"]
    ];
});
_c5 = NEETCoaching;
const __TURBOPACK__default__export__ = NEETCoaching;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "ExamCountdown");
__turbopack_context__.k.register(_c1, "SeasonalBanner");
__turbopack_context__.k.register(_c2, "StudyPlanSection");
__turbopack_context__.k.register(_c3, "MonthlySuccessStory");
__turbopack_context__.k.register(_c4, "WeeklyTip");
__turbopack_context__.k.register(_c5, "NEETCoaching");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_a997dfee._.js.map
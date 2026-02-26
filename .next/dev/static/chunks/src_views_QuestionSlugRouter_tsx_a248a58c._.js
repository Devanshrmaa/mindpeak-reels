(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/views/QuestionSlugRouter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuestionSlugRouter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * QuestionSlugRouter — prefix-based lazy router for question pages.
 *
 * Instead of registering thousands of individual routes (which forces all
 * question data to be imported eagerly), this component matches URL prefixes
 * and lazy-loads the appropriate question page component on demand.
 *
 * If the slug doesn't match any question pattern, it falls back to LocationPage.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
/** Retry wrapper matching App.tsx lazyRetry (handles chunk load failures) */ function lr(fn) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>fn().catch(()=>fn()));
}
const JEEPracticeQuestion = lr(()=>__turbopack_context__.A("[project]/src/views/JEEPracticeQuestion.tsx [app-client] (ecmascript, async loader)"));
_c = JEEPracticeQuestion;
const JEEPYQQuestion = lr(()=>__turbopack_context__.A("[project]/src/views/JEEPYQQuestion.tsx [app-client] (ecmascript, async loader)"));
_c1 = JEEPYQQuestion;
const NEETPracticeQuestion = lr(()=>__turbopack_context__.A("[project]/src/views/NEETPracticeQuestion.tsx [app-client] (ecmascript, async loader)"));
_c2 = NEETPracticeQuestion;
const NEETPYQQuestion = lr(()=>__turbopack_context__.A("[project]/src/views/NEETPYQQuestion.tsx [app-client] (ecmascript, async loader)"));
_c3 = NEETPYQQuestion;
const LocationPage = lr(()=>__turbopack_context__.A("[project]/src/views/LocationPage.tsx [app-client] (ecmascript, async loader)"));
_c4 = LocationPage;
// Regex patterns for question slug matching
const JEE_PRACTICE_RE = /^jee-(physics|chemistry|mathematics)-/;
const NEET_PRACTICE_RE = /^neet-(biology|physics|chemistry)-/;
const LazyFallback = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[hsl(225,43%,7%)] flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"
        }, void 0, false, {
            fileName: "[project]/src/views/QuestionSlugRouter.tsx",
            lineNumber: 32,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/views/QuestionSlugRouter.tsx",
        lineNumber: 31,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c5 = LazyFallback;
function QuestionSlugRouter() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const slug = pathname.replace(/^\//, '') || '';
    // Wrap lazy-loaded components in Suspense to prevent SSR crashes
    // Check most-specific prefixes first (PYQ before general practice)
    if (slug.startsWith('jee-pyq-')) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LazyFallback, {}, void 0, false, {
            fileName: "[project]/src/views/QuestionSlugRouter.tsx",
            lineNumber: 42,
            columnNumber: 63
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(JEEPYQQuestion, {}, void 0, false, {
            fileName: "[project]/src/views/QuestionSlugRouter.tsx",
            lineNumber: 42,
            columnNumber: 81
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/views/QuestionSlugRouter.tsx",
        lineNumber: 42,
        columnNumber: 43
    }, this);
    if (slug.startsWith('neet-pyq-')) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LazyFallback, {}, void 0, false, {
            fileName: "[project]/src/views/QuestionSlugRouter.tsx",
            lineNumber: 43,
            columnNumber: 64
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NEETPYQQuestion, {}, void 0, false, {
            fileName: "[project]/src/views/QuestionSlugRouter.tsx",
            lineNumber: 43,
            columnNumber: 82
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/views/QuestionSlugRouter.tsx",
        lineNumber: 43,
        columnNumber: 44
    }, this);
    if (JEE_PRACTICE_RE.test(slug)) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LazyFallback, {}, void 0, false, {
            fileName: "[project]/src/views/QuestionSlugRouter.tsx",
            lineNumber: 44,
            columnNumber: 62
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(JEEPracticeQuestion, {}, void 0, false, {
            fileName: "[project]/src/views/QuestionSlugRouter.tsx",
            lineNumber: 44,
            columnNumber: 80
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/views/QuestionSlugRouter.tsx",
        lineNumber: 44,
        columnNumber: 42
    }, this);
    if (NEET_PRACTICE_RE.test(slug)) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LazyFallback, {}, void 0, false, {
            fileName: "[project]/src/views/QuestionSlugRouter.tsx",
            lineNumber: 45,
            columnNumber: 63
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NEETPracticeQuestion, {}, void 0, false, {
            fileName: "[project]/src/views/QuestionSlugRouter.tsx",
            lineNumber: 45,
            columnNumber: 81
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/views/QuestionSlugRouter.tsx",
        lineNumber: 45,
        columnNumber: 43
    }, this);
    // Not a question slug — render LocationPage
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LazyFallback, {}, void 0, false, {
            fileName: "[project]/src/views/QuestionSlugRouter.tsx",
            lineNumber: 48,
            columnNumber: 30
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LocationPage, {}, void 0, false, {
            fileName: "[project]/src/views/QuestionSlugRouter.tsx",
            lineNumber: 48,
            columnNumber: 48
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/views/QuestionSlugRouter.tsx",
        lineNumber: 48,
        columnNumber: 10
    }, this);
}
_s(QuestionSlugRouter, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c6 = QuestionSlugRouter;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "JEEPracticeQuestion");
__turbopack_context__.k.register(_c1, "JEEPYQQuestion");
__turbopack_context__.k.register(_c2, "NEETPracticeQuestion");
__turbopack_context__.k.register(_c3, "NEETPYQQuestion");
__turbopack_context__.k.register(_c4, "LocationPage");
__turbopack_context__.k.register(_c5, "LazyFallback");
__turbopack_context__.k.register(_c6, "QuestionSlugRouter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/views/QuestionSlugRouter.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/views/QuestionSlugRouter.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_views_QuestionSlugRouter_tsx_a248a58c._.js.map
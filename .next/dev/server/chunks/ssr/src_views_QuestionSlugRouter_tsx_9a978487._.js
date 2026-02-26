module.exports = [
"[project]/src/views/QuestionSlugRouter.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuestionSlugRouter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * QuestionSlugRouter — prefix-based lazy router for question pages.
 *
 * Instead of registering thousands of individual routes (which forces all
 * question data to be imported eagerly), this component matches URL prefixes
 * and lazy-loads the appropriate question page component on demand.
 *
 * If the slug doesn't match any question pattern, it falls back to LocationPage.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
/** Retry wrapper matching App.tsx lazyRetry (handles chunk load failures) */ function lr(fn) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"])(()=>fn().catch(()=>fn()));
}
const JEEPracticeQuestion = lr(()=>__turbopack_context__.A("[project]/src/views/JEEPracticeQuestion.tsx [app-ssr] (ecmascript, async loader)"));
const JEEPYQQuestion = lr(()=>__turbopack_context__.A("[project]/src/views/JEEPYQQuestion.tsx [app-ssr] (ecmascript, async loader)"));
const NEETPracticeQuestion = lr(()=>__turbopack_context__.A("[project]/src/views/NEETPracticeQuestion.tsx [app-ssr] (ecmascript, async loader)"));
const NEETPYQQuestion = lr(()=>__turbopack_context__.A("[project]/src/views/NEETPYQQuestion.tsx [app-ssr] (ecmascript, async loader)"));
const LocationPage = lr(()=>__turbopack_context__.A("[project]/src/views/LocationPage.tsx [app-ssr] (ecmascript, async loader)"));
// Regex patterns for question slug matching
const JEE_PRACTICE_RE = /^jee-(physics|chemistry|mathematics)-/;
const NEET_PRACTICE_RE = /^neet-(biology|physics|chemistry)-/;
function QuestionSlugRouter() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const slug = pathname.replace(/^\//, '') || '';
    // Check most-specific prefixes first (PYQ before general practice)
    if (slug.startsWith('jee-pyq-')) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(JEEPYQQuestion, {}, void 0, false, {
        fileName: "[project]/src/views/QuestionSlugRouter.tsx",
        lineNumber: 35,
        columnNumber: 43
    }, this);
    if (slug.startsWith('neet-pyq-')) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NEETPYQQuestion, {}, void 0, false, {
        fileName: "[project]/src/views/QuestionSlugRouter.tsx",
        lineNumber: 36,
        columnNumber: 44
    }, this);
    if (JEE_PRACTICE_RE.test(slug)) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(JEEPracticeQuestion, {}, void 0, false, {
        fileName: "[project]/src/views/QuestionSlugRouter.tsx",
        lineNumber: 37,
        columnNumber: 42
    }, this);
    if (NEET_PRACTICE_RE.test(slug)) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NEETPracticeQuestion, {}, void 0, false, {
        fileName: "[project]/src/views/QuestionSlugRouter.tsx",
        lineNumber: 38,
        columnNumber: 43
    }, this);
    // Not a question slug — render LocationPage
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LocationPage, {}, void 0, false, {
        fileName: "[project]/src/views/QuestionSlugRouter.tsx",
        lineNumber: 41,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/views/QuestionSlugRouter.tsx [app-ssr] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/views/QuestionSlugRouter.tsx [app-ssr] (ecmascript)"));
}),
];

//# sourceMappingURL=src_views_QuestionSlugRouter_tsx_9a978487._.js.map
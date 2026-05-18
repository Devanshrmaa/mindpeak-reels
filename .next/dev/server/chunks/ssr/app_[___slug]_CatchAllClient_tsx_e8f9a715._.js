module.exports = [
"[project]/app/[...slug]/CatchAllClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CatchAllClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * CatchAllClient — Client-side slug router (moved from page.tsx).
 *
 * Dispatches to the appropriate page component based on slug patterns.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapterData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/chapterData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$SubjectPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/SubjectPage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$FormulaSheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/views/FormulaSheet.tsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$formulaSheetData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/formulaSheetData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seoPageData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/seoPageData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$examInfoData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/examInfoData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$differenceBetweenData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/differenceBetweenData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$ImportantQuestionsHub$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/ImportantQuestionsHub.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$counsellingData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/counsellingData.ts [app-ssr] (ecmascript)");
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
const SubjectPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/views/SubjectPage.tsx [app-ssr] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/views/SubjectPage.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {}, void 0, false, {
            fileName: "[project]/app/[...slug]/CatchAllClient.tsx",
            lineNumber: 20,
            columnNumber: 83
        }, ("TURBOPACK compile-time value", void 0))
});
const ChapterPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/views/ChapterPage.tsx [app-ssr] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/views/ChapterPage.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {}, void 0, false, {
            fileName: "[project]/app/[...slug]/CatchAllClient.tsx",
            lineNumber: 21,
            columnNumber: 83
        }, ("TURBOPACK compile-time value", void 0))
});
const TopicPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/views/TopicPage.tsx [app-ssr] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/views/TopicPage.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {}, void 0, false, {
            fileName: "[project]/app/[...slug]/CatchAllClient.tsx",
            lineNumber: 22,
            columnNumber: 79
        }, ("TURBOPACK compile-time value", void 0))
});
const FormulaSheet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/views/FormulaSheet.tsx [app-ssr] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/views/FormulaSheet.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {}, void 0, false, {
            fileName: "[project]/app/[...slug]/CatchAllClient.tsx",
            lineNumber: 23,
            columnNumber: 85
        }, ("TURBOPACK compile-time value", void 0))
});
const SEOLandingPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/views/SEOLandingPage.tsx [app-ssr] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/views/SEOLandingPage.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {}, void 0, false, {
            fileName: "[project]/app/[...slug]/CatchAllClient.tsx",
            lineNumber: 24,
            columnNumber: 89
        }, ("TURBOPACK compile-time value", void 0))
});
const QuestionSlugRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/views/QuestionSlugRouter.tsx [app-ssr] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/views/QuestionSlugRouter.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {}, void 0, false, {
            fileName: "[project]/app/[...slug]/CatchAllClient.tsx",
            lineNumber: 25,
            columnNumber: 97
        }, ("TURBOPACK compile-time value", void 0))
});
const ExamInfoPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/views/ExamInfoPage.tsx [app-ssr] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/views/ExamInfoPage.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {}, void 0, false, {
            fileName: "[project]/app/[...slug]/CatchAllClient.tsx",
            lineNumber: 26,
            columnNumber: 85
        }, ("TURBOPACK compile-time value", void 0))
});
const DifferenceBetweenPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/views/DifferenceBetweenPage.tsx [app-ssr] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/views/DifferenceBetweenPage.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {}, void 0, false, {
            fileName: "[project]/app/[...slug]/CatchAllClient.tsx",
            lineNumber: 27,
            columnNumber: 103
        }, ("TURBOPACK compile-time value", void 0))
});
const RevisionNotesPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/views/RevisionNotesPage.tsx [app-ssr] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/views/RevisionNotesPage.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {}, void 0, false, {
            fileName: "[project]/app/[...slug]/CatchAllClient.tsx",
            lineNumber: 28,
            columnNumber: 95
        }, ("TURBOPACK compile-time value", void 0))
});
const ImportantQuestionsHub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/views/ImportantQuestionsHub.tsx [app-ssr] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/views/ImportantQuestionsHub.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {}, void 0, false, {
            fileName: "[project]/app/[...slug]/CatchAllClient.tsx",
            lineNumber: 29,
            columnNumber: 103
        }, ("TURBOPACK compile-time value", void 0))
});
const CounsellingGuidePage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/views/CounsellingGuidePage.tsx [app-ssr] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/views/CounsellingGuidePage.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {}, void 0, false, {
            fileName: "[project]/app/[...slug]/CatchAllClient.tsx",
            lineNumber: 30,
            columnNumber: 101
        }, ("TURBOPACK compile-time value", void 0))
});
const Spinner = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[hsl(225,43%,7%)] flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"
        }, void 0, false, {
            fileName: "[project]/app/[...slug]/CatchAllClient.tsx",
            lineNumber: 34,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/[...slug]/CatchAllClient.tsx",
        lineNumber: 33,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
function resolve(slug) {
    // Two-segment paths
    if (slug.includes("/")) {
        // Revision notes: {chapter-slug}/notes
        if (slug.endsWith("/notes") && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapterData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHAPTER_SLUGS"].includes(slug.replace(/\/notes$/, ""))) return "notes";
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapterData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOPIC_PATHS"].includes(slug)) return "topic";
        return "question";
    }
    // One-segment — check static arrays first
    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$SubjectPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUBJECT_SLUGS"].includes(slug)) return "subject";
    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$formulaSheetData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORMULA_SLUGS"].includes(slug)) return "formula";
    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapterData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHAPTER_SLUGS"].includes(slug)) return "chapter";
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$examInfoData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getExamInfoPage"])(slug)) return "exam-info";
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$differenceBetweenData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDifferencePair"])(slug)) return "difference";
    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$ImportantQuestionsHub$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IMPORTANT_Q_SLUGS"].includes(slug)) return "important-q";
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$counsellingData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCounsellingPage"])(slug)) return "counselling";
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seoPageData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSEOPage"])(slug)) return "seo-landing";
    return "question";
}
function CatchAllClient() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const slug = pathname.replace(/^\//, "");
    const resolved = resolve(slug);
    switch(resolved){
        case "subject":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SubjectPage, {}, void 0, false, {
                fileName: "[project]/app/[...slug]/CatchAllClient.tsx",
                lineNumber: 67,
                columnNumber: 14
            }, this);
        case "chapter":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChapterPage, {}, void 0, false, {
                fileName: "[project]/app/[...slug]/CatchAllClient.tsx",
                lineNumber: 69,
                columnNumber: 14
            }, this);
        case "topic":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TopicPage, {}, void 0, false, {
                fileName: "[project]/app/[...slug]/CatchAllClient.tsx",
                lineNumber: 71,
                columnNumber: 14
            }, this);
        case "formula":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormulaSheet, {}, void 0, false, {
                fileName: "[project]/app/[...slug]/CatchAllClient.tsx",
                lineNumber: 73,
                columnNumber: 14
            }, this);
        case "seo-landing":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SEOLandingPage, {}, void 0, false, {
                fileName: "[project]/app/[...slug]/CatchAllClient.tsx",
                lineNumber: 75,
                columnNumber: 14
            }, this);
        case "exam-info":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ExamInfoPage, {}, void 0, false, {
                fileName: "[project]/app/[...slug]/CatchAllClient.tsx",
                lineNumber: 77,
                columnNumber: 14
            }, this);
        case "difference":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DifferenceBetweenPage, {}, void 0, false, {
                fileName: "[project]/app/[...slug]/CatchAllClient.tsx",
                lineNumber: 79,
                columnNumber: 14
            }, this);
        case "notes":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RevisionNotesPage, {}, void 0, false, {
                fileName: "[project]/app/[...slug]/CatchAllClient.tsx",
                lineNumber: 81,
                columnNumber: 14
            }, this);
        case "important-q":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ImportantQuestionsHub, {}, void 0, false, {
                fileName: "[project]/app/[...slug]/CatchAllClient.tsx",
                lineNumber: 83,
                columnNumber: 14
            }, this);
        case "counselling":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CounsellingGuidePage, {}, void 0, false, {
                fileName: "[project]/app/[...slug]/CatchAllClient.tsx",
                lineNumber: 85,
                columnNumber: 14
            }, this);
        case "question":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(QuestionSlugRouter, {}, void 0, false, {
                fileName: "[project]/app/[...slug]/CatchAllClient.tsx",
                lineNumber: 87,
                columnNumber: 14
            }, this);
    }
}
}),
];

//# sourceMappingURL=app_%5B___slug%5D_CatchAllClient_tsx_e8f9a715._.js.map
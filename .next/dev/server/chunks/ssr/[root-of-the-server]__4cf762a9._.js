module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/loading.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/loading.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/blog/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogPage,
    "metadata",
    ()=>metadata,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/examYears.ts [app-rsc] (ecmascript)");
;
;
const revalidate = 3600;
const metadata = {
    title: `JEE & NEET Study Guides ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]} — Expert Tips | MindPeak`,
    description: `Proven JEE/NEET study strategies, time management hacks, and subject-wise tips from IIT/NIT mentors. Updated for ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]}. Read free guides now.`,
    alternates: {
        canonical: "https://mindpeakinstitute.com/blog"
    },
    openGraph: {
        title: `Free JEE & NEET Study Guides ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]} by MindPeak Experts`,
        description: "100+ expert articles on JEE & NEET preparation — from subject strategies to college admission guides. Written by IIT & AIIMS alumni.",
        url: "https://mindpeakinstitute.com/blog",
        siteName: "MindPeak Institute",
        type: "website",
        locale: "en_IN",
        images: [
            {
                url: "https://mindpeakinstitute.com/images/og/coaching.jpg",
                width: 1200,
                height: 630
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: `JEE & NEET Expert Study Guides ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]} | MindPeak`,
        description: "Free expert guides on JEE & NEET preparation by IIT & AIIMS alumni mentors. Updated for the latest exam patterns.",
        images: [
            "https://mindpeakinstitute.com/images/og/coaching.jpg"
        ]
    }
};
async function BlogPage() {
    const { getAllPostsSummary } = await __turbopack_context__.A("[project]/src/lib/blogResolver.ts [app-rsc] (ecmascript, async loader)");
    const allSummaries = getAllPostsSummary();
    const posts = allSummaries.slice(0, 200).map(({ icon, ...rest })=>rest);
    const { default: BlogClient } = await __turbopack_context__.A("[project]/app/blog/BlogClient.tsx [app-rsc] (ecmascript, async loader)");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(BlogClient, {
        posts: posts
    }, void 0, false, {
        fileName: "[project]/app/blog/page.tsx",
        lineNumber: 36,
        columnNumber: 10
    }, this);
}
}),
"[project]/app/blog/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/blog/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4cf762a9._.js.map
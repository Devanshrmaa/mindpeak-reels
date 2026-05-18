module.exports = [
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/incremental-cache/tags-manifest.external.js [external] (next/dist/server/lib/incremental-cache/tags-manifest.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/tags-manifest.external.js", () => require("next/dist/server/lib/incremental-cache/tags-manifest.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/lib/removedSlugs.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Doorway-page URLs flagged in the 2026-05-18 indexing health report.
 * All 18 entries were confirmed indexed despite the noindex meta tag
 * applied on April 8 — 40+ days without recrawl under penalty throttling.
 *
 * Serving HTTP 410 Gone (via middleware) tells Google to drop these URLs
 * from the index on next crawl. This is significantly stronger than
 * noindex alone, which Google can only honour after re-fetching the page.
 *
 * Source: seo-reports/indexing-2026-05-18.md, Appendix A.
 */ __turbopack_context__.s([
    "REMOVED_DOORWAY_SLUGS",
    ()=>REMOVED_DOORWAY_SLUGS,
    "isRemovedDoorwaySlug",
    ()=>isRemovedDoorwaySlug
]);
const REMOVED_DOORWAY_SLUGS = new Set([
    /* Week 1 baseline — 6 pages, still indexed after 7 days */ 'neet-coaching-in-guwahati',
    'neet-coaching-in-chandigarh',
    'jee-coaching-in-bahrain',
    'neet-coaching-in-indirapuram',
    'jee-coaching-in-srinagar',
    'jee-physics-coaching-in-davanagere',
    /* Week 2 newly surfaced — 12 pages */ 'jee-chemistry-coaching-in-kottayam',
    'jee-mathematics-coaching-in-karnal',
    'neet-chemistry-coaching-in-bhagalpur',
    'neet-coaching-in-dehradun',
    'jee-coaching-in-dharamshala',
    'jee-coaching-in-janakpuri',
    'jee-coaching-in-rampur',
    'jee-coaching-in-hisar',
    'jee-coaching-in-katihar',
    'jee-physics-coaching-in-dharamshala',
    'neet-physics-coaching-in-hsr-layout',
    'jee-physics-coaching-in-nawada'
]);
function isRemovedDoorwaySlug(slug) {
    return REMOVED_DOORWAY_SLUGS.has(slug.replace(/^\/+|\/+$/g, ''));
}
}),
"[project]/proxy.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "proxy",
    ()=>proxy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$removedSlugs$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/removedSlugs.ts [middleware] (ecmascript)");
;
;
/**
 * Edge proxy: serve HTTP 410 Gone for confirmed-indexed doorway URLs
 * flagged in the weekly indexing health reports.
 *
 * 410 is processed by Google noticeably faster than 404 — it signals the
 * URL is permanently retired, which is exactly what we need for the
 * March 2026 Spam Update recovery. `X-Robots-Tag: noindex` is set as
 * belt-and-suspenders so any crawler that ignores the status still sees
 * the de-indexing intent.
 *
 * The global `X-Robots-Tag: index, follow` set in next.config.ts is
 * overridden here because we return a fresh NextResponse with explicit
 * headers.
 */ const GONE_BODY = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex, nofollow">
<title>Page removed | MindPeak Institute</title>
</head>
<body>
<h1>This page has been permanently removed</h1>
<p>The page you requested is no longer available. Explore our active offerings:</p>
<ul>
<li><a href="/">MindPeak Institute home</a></li>
<li><a href="/jee-coaching">JEE coaching</a></li>
<li><a href="/neet-coaching">NEET coaching</a></li>
<li><a href="/best-jee-coaching-in-india">Best JEE coaching in India</a></li>
</ul>
</body>
</html>`;
function proxy(request) {
    const slug = request.nextUrl.pathname.replace(/^\/+|\/+$/g, '');
    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$removedSlugs$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["REMOVED_DOORWAY_SLUGS"].has(slug)) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"](GONE_BODY, {
            status: 410,
            headers: {
                'Content-Type': 'text/html; charset=utf-8',
                'X-Robots-Tag': 'noindex, nofollow',
                'Cache-Control': 'public, max-age=3600, s-maxage=86400'
            }
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        '/neet-coaching-in-guwahati',
        '/neet-coaching-in-chandigarh',
        '/jee-coaching-in-bahrain',
        '/neet-coaching-in-indirapuram',
        '/jee-coaching-in-srinagar',
        '/jee-physics-coaching-in-davanagere',
        '/jee-chemistry-coaching-in-kottayam',
        '/jee-mathematics-coaching-in-karnal',
        '/neet-chemistry-coaching-in-bhagalpur',
        '/neet-coaching-in-dehradun',
        '/jee-coaching-in-dharamshala',
        '/jee-coaching-in-janakpuri',
        '/jee-coaching-in-rampur',
        '/jee-coaching-in-hisar',
        '/jee-coaching-in-katihar',
        '/jee-physics-coaching-in-dharamshala',
        '/neet-physics-coaching-in-hsr-layout',
        '/jee-physics-coaching-in-nawada'
    ]
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__584339af._.js.map
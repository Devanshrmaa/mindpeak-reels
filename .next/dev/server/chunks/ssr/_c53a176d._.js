module.exports = [
"[project]/src/lib/blogResolver.ts [app-rsc] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/src_8a8c1bed._.js",
  "server/chunks/ssr/node_modules_lucide-react_dist_esm_cd27e04c._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/src/lib/blogResolver.ts [app-rsc] (ecmascript)");
    });
});
}),
"[project]/app/blog/BlogClient.tsx [app-rsc] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/app_blog_BlogClient_tsx_faa6fbb0._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/app/blog/BlogClient.tsx [app-rsc] (ecmascript)");
    });
});
}),
];
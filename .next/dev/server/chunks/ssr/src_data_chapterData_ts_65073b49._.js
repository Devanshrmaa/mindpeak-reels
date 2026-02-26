module.exports = [
"[project]/src/data/chapterData.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$jeePhysics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/chapters/jeePhysics.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$jeeChemistry$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/chapters/jeeChemistry.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$jeeMaths$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/chapters/jeeMaths.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$neetBiology$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/chapters/neetBiology.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$neetPhysics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/chapters/neetPhysics.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$neetChemistry$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/chapters/neetChemistry.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
const chapters = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$jeePhysics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jeePhysicsChapters"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$jeeChemistry$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jeeChemistryChapters"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$jeeMaths$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jeeMathsChapters"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$neetBiology$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["neetBiologyChapters"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$neetPhysics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["neetPhysicsChapters"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$neetChemistry$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["neetChemistryChapters"]
];
const CHAPTER_SLUGS = chapters.map((c)=>c.slug);
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
const TOPIC_PATHS = allTopics.map((t)=>`${t.chapter.slug}/${t.topicSlug}`);
function getTopicInfo(chapterSlug, topicSlug) {
    return allTopics.find((t)=>t.chapter.slug === chapterSlug && t.topicSlug === topicSlug);
}
}),
];

//# sourceMappingURL=src_data_chapterData_ts_65073b49._.js.map
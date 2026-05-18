(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/lib/seoEntities.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * SEO Entity References — Wikipedia/Wikidata URIs for topical authority.
 * Used in JSON-LD `about` and `mentions` properties.
 */ __turbopack_context__.s([
    "ENTITY_IIT",
    ()=>ENTITY_IIT,
    "ENTITY_JEE_ADVANCED",
    ()=>ENTITY_JEE_ADVANCED,
    "ENTITY_JEE_MAIN",
    ()=>ENTITY_JEE_MAIN,
    "ENTITY_NCERT",
    ()=>ENTITY_NCERT,
    "ENTITY_NEET_UG",
    ()=>ENTITY_NEET_UG,
    "ENTITY_NTA",
    ()=>ENTITY_NTA,
    "getExamEntities",
    ()=>getExamEntities
]);
const ENTITY_JEE_MAIN = {
    '@type': 'Thing',
    name: 'JEE Main',
    sameAs: 'https://en.wikipedia.org/wiki/Joint_Entrance_Examination_%E2%80%93_Main'
};
const ENTITY_JEE_ADVANCED = {
    '@type': 'Thing',
    name: 'JEE Advanced',
    sameAs: 'https://en.wikipedia.org/wiki/Joint_Entrance_Examination_%E2%80%93_Advanced'
};
const ENTITY_NEET_UG = {
    '@type': 'Thing',
    name: 'NEET-UG',
    sameAs: 'https://en.wikipedia.org/wiki/National_Eligibility_cum_Entrance_Test_(Undergraduate)'
};
const ENTITY_NTA = {
    '@type': 'Thing',
    name: 'National Testing Agency',
    sameAs: 'https://en.wikipedia.org/wiki/National_Testing_Agency'
};
const ENTITY_IIT = {
    '@type': 'Thing',
    name: 'Indian Institutes of Technology',
    sameAs: 'https://en.wikipedia.org/wiki/Indian_Institutes_of_Technology'
};
const ENTITY_NCERT = {
    '@type': 'Thing',
    name: 'NCERT',
    sameAs: 'https://en.wikipedia.org/wiki/National_Council_of_Educational_Research_and_Training'
};
function getExamEntities(exam) {
    if (exam === 'JEE') {
        return [
            ENTITY_JEE_MAIN,
            ENTITY_JEE_ADVANCED,
            ENTITY_NTA,
            ENTITY_IIT
        ];
    }
    return [
        ENTITY_NEET_UG,
        ENTITY_NTA,
        ENTITY_NCERT
    ];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/slugify.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deduplicateSlugs",
    ()=>deduplicateSlugs,
    "slugifyQuestion",
    ()=>slugifyQuestion
]);
/**
 * Converts a question string into an SEO-friendly URL slug.
 *
 * Steps:
 *  1. Strip HTML tags & entities
 *  2. Replace common math / scientific symbols with readable words
 *  3. Lowercase, collapse whitespace, replace spaces → hyphens
 *  4. Remove non-alphanumeric chars (except hyphens)
 *  5. Truncate to ~60 chars at a word boundary
 *  6. Trim leading / trailing hyphens
 */ /* ── Symbol → word map ── */ const SYMBOL_MAP = [
    [
        /₀/g,
        '0'
    ],
    [
        /₁/g,
        '1'
    ],
    [
        /₂/g,
        '2'
    ],
    [
        /₃/g,
        '3'
    ],
    [
        /₄/g,
        '4'
    ],
    [
        /₅/g,
        '5'
    ],
    [
        /₆/g,
        '6'
    ],
    [
        /₇/g,
        '7'
    ],
    [
        /₈/g,
        '8'
    ],
    [
        /₉/g,
        '9'
    ],
    [
        /⁰/g,
        '0'
    ],
    [
        /¹/g,
        '1'
    ],
    [
        /²/g,
        '2'
    ],
    [
        /³/g,
        '3'
    ],
    [
        /⁴/g,
        '4'
    ],
    [
        /⁵/g,
        '5'
    ],
    [
        /⁶/g,
        '6'
    ],
    [
        /⁷/g,
        '7'
    ],
    [
        /⁸/g,
        '8'
    ],
    [
        /⁹/g,
        '9'
    ],
    [
        /⁻/g,
        '-'
    ],
    [
        /⁺/g,
        '+'
    ],
    [
        /×/g,
        'x'
    ],
    [
        /÷/g,
        'div'
    ],
    [
        /π/g,
        'pi'
    ],
    [
        /θ/g,
        'theta'
    ],
    [
        /μ/g,
        'mu'
    ],
    [
        /ε/g,
        'epsilon'
    ],
    [
        /α/g,
        'alpha'
    ],
    [
        /β/g,
        'beta'
    ],
    [
        /γ/g,
        'gamma'
    ],
    [
        /δ/g,
        'delta'
    ],
    [
        /λ/g,
        'lambda'
    ],
    [
        /ω/g,
        'omega'
    ],
    [
        /σ/g,
        'sigma'
    ],
    [
        /τ/g,
        'tau'
    ],
    [
        /ρ/g,
        'rho'
    ],
    [
        /ν/g,
        'nu'
    ],
    [
        /Σ/g,
        'sigma'
    ],
    [
        /Δ/g,
        'delta'
    ],
    [
        /∞/g,
        'infinity'
    ],
    [
        /√/g,
        'sqrt'
    ],
    [
        /∫/g,
        'integral'
    ],
    [
        /→/g,
        'to'
    ],
    [
        /←/g,
        'from'
    ],
    [
        /≈/g,
        'approx'
    ],
    [
        /≠/g,
        'not-equal'
    ],
    [
        /≥/g,
        'gte'
    ],
    [
        /≤/g,
        'lte'
    ],
    [
        /°/g,
        'deg'
    ],
    [
        /·/g,
        '-'
    ],
    [
        /±/g,
        'plus-minus'
    ]
];
/* ── Stop words to strip for conciseness ── */ const STOP_WORDS = new Set([
    'the',
    'a',
    'an',
    'of',
    'in',
    'on',
    'at',
    'to',
    'for',
    'is',
    'are',
    'was',
    'were',
    'be',
    'been',
    'being',
    'it',
    'its',
    'by',
    'with',
    'from',
    'as',
    'this',
    'that',
    'which',
    'who',
    'whom',
    'and',
    'or',
    'but',
    'if',
    'then',
    'so',
    'than',
    'too',
    'very',
    'can',
    'will',
    'just',
    'should',
    'would',
    'could',
    'has',
    'have',
    'had',
    'do',
    'does',
    'did',
    'not',
    'no',
    'nor',
    'each',
    'every',
    'all',
    'any',
    'both',
    'few',
    'more',
    'most',
    'other',
    'some',
    'such',
    'only',
    'own',
    'same',
    'also',
    'into',
    'about',
    'between',
    'through',
    'following',
    'given',
    'respectively'
]);
const MAX_SLUG_LENGTH = 60;
function slugifyQuestion(question) {
    let s = question;
    // 1. Strip HTML tags
    s = s.replace(/<[^>]*>/g, '');
    // 2. Decode common HTML entities
    s = s.replace(/&amp;/g, 'and').replace(/&lt;/g, '').replace(/&gt;/g, '').replace(/&nbsp;/g, ' ').replace(/&#?\w+;/g, '');
    // 3. Apply symbol map
    for (const [re, rep] of SYMBOL_MAP){
        s = s.replace(re, rep);
    }
    // 4. Lowercase
    s = s.toLowerCase();
    // 5. Replace non-alphanumeric (except hyphens) with spaces
    s = s.replace(/[^a-z0-9-]+/g, ' ');
    // 6. Collapse whitespace → single space → trim
    s = s.replace(/\s+/g, ' ').trim();
    // 7. Remove stop words
    const words = s.split(' ').filter((w)=>!STOP_WORDS.has(w) && w.length > 0);
    // 8. Join with hyphens
    s = words.join('-');
    // 9. Collapse multiple hyphens
    s = s.replace(/-{2,}/g, '-');
    // 10. Truncate at word boundary (hyphen boundary)
    if (s.length > MAX_SLUG_LENGTH) {
        s = s.substring(0, MAX_SLUG_LENGTH);
        const lastHyphen = s.lastIndexOf('-');
        if (lastHyphen > 20) {
            s = s.substring(0, lastHyphen);
        }
    }
    // 11. Trim leading/trailing hyphens
    s = s.replace(/^-+|-+$/g, '');
    return s || 'question';
}
function deduplicateSlugs(slugs) {
    const seen = new Map();
    return slugs.map((slug)=>{
        const count = seen.get(slug) ?? 0;
        seen.set(slug, count + 1);
        if (count === 0) return slug;
        return `${slug}-${count + 1}`;
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_lib_06a949d1._.js.map
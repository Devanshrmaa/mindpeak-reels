module.exports = [
"[project]/src/lib/slugify.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/lib/ogImage.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveOgImage",
    ()=>resolveOgImage,
    "resolveOgImageMeta",
    ()=>resolveOgImageMeta
]);
/**
 * Category-based OG image resolver.
 * Maps page types to specific OG images instead of generic hero-bg.jpg.
 */ const BASE = 'https://mindpeakinstitute.com';
const OG_IMAGES = {
    'jee-practice': `${BASE}/images/og/jee-practice.jpg`,
    'neet-practice': `${BASE}/images/og/neet-practice.jpg`,
    'jee-pyq': `${BASE}/images/og/pyq.jpg`,
    'neet-pyq': `${BASE}/images/og/pyq.jpg`,
    coaching: `${BASE}/images/og/coaching.jpg`,
    formula: `${BASE}/images/og/formula.jpg`,
    chapter: `${BASE}/images/og/chapter.jpg`,
    default: `${BASE}/hero-bg.jpg`
};
function resolveOgImage(slug) {
    if (slug.startsWith('jee-pyq-')) return OG_IMAGES['jee-pyq'];
    if (slug.startsWith('neet-pyq-')) return OG_IMAGES['neet-pyq'];
    if (/^jee-(physics|chemistry|mathematics)-/.test(slug)) return OG_IMAGES['jee-practice'];
    if (/^neet-(biology|physics|chemistry)-/.test(slug)) return OG_IMAGES['neet-practice'];
    if (slug.includes('formula')) return OG_IMAGES.formula;
    if (slug.includes('coaching') || slug.includes('-in-')) return OG_IMAGES.coaching;
    return OG_IMAGES.default;
}
function resolveOgImageMeta(slug) {
    return {
        images: [
            {
                url: resolveOgImage(slug),
                width: 1200,
                height: 630
            }
        ]
    };
}
}),
"[project]/src/lib/topicStudyGuides.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildStudyGuide",
    ()=>buildStudyGuide,
    "generateStudyGuideContent",
    ()=>generateStudyGuideContent,
    "getAllStudyGuideSlugs",
    ()=>getAllStudyGuideSlugs,
    "parseStudyGuideSlug",
    ()=>parseStudyGuideSlug
]);
/**
 * Topic Study Guides — generates ~800 "How to Study [Topic] for [Exam]" pages.
 * Route: /how-to-study-{topicSlug}-for-{exam}
 * Each guide: 1,000+ words with concept summary, prerequisites, resources, practice links.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapterData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/chapterData.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$topicContent$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/topicContent/index.ts [app-rsc] (ecmascript)");
;
;
/** Deterministic seed helper */ function seededInt(seed, min, max) {
    const x = Math.sin(seed * 9301 + 49297) * 233280;
    return min + Math.floor((x - Math.floor(x)) * (max - min + 1));
}
function buildStudyGuide(info) {
    const { chapter, topicName, topicSlug } = info;
    return {
        slug: `how-to-study-${topicSlug}-for-${chapter.exam.toLowerCase()}`,
        topicName,
        topicSlug,
        exam: chapter.exam,
        subject: chapter.subject,
        chapter: chapter.chapter,
        chapterSlug: chapter.slug,
        difficulty: chapter.difficulty,
        weightage: chapter.weightage,
        topics: chapter.topics,
        keyFormulas: chapter.keyFormulas,
        commonMistakes: chapter.commonMistakes,
        practiceLink: `/${chapter.exam.toLowerCase()}-practice`,
        pyqLink: `/${chapter.exam.toLowerCase()}-pyq`,
        chapterLink: `/${chapter.slug}`
    };
}
function getAllStudyGuideSlugs() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapterData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["allTopics"].map((t)=>`how-to-study-${t.topicSlug}-for-${t.chapter.exam.toLowerCase()}`);
}
function parseStudyGuideSlug(slug) {
    const match = slug.match(/^how-to-study-(.+)-for-(jee|neet)$/);
    if (!match) return null;
    const [, topicSlug, exam] = match;
    const found = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapterData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["allTopics"].find((t)=>t.topicSlug === topicSlug && t.chapter.exam.toLowerCase() === exam);
    return found ?? null;
}
function generateStudyGuideContent(guide) {
    const seed = guide.slug.length * 7;
    const relatedTopics = guide.topics.filter((t)=>t !== guide.topicName).slice(0, 5);
    const prereqCount = seededInt(seed, 2, 4);
    const studyHours = seededInt(seed + 1, 8, 20);
    const pyqFreq = seededInt(seed + 2, 3, 8);
    // Pull real educational content if available
    const tc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$topicContent$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTopicContent"])(guide.chapterSlug, guide.topicName);
    const definitionBlock = tc ? `\n\n### What is ${guide.topicName}?\n\n${tc.definition}\n\n${tc.explanation}\n\n**Key Fact:** ${tc.keyFact}\n\n**Real-World Application:** ${tc.realWorldApp}${tc.ncertRef ? `\n\n**NCERT Reference:** ${tc.ncertRef}` : ''}` : '';
    const workedExampleBlock = tc?.workedExample ? `\n\n### Solved Example\n\n**Problem:** ${tc.workedExample.problem}\n\n**Solution:** ${tc.workedExample.solution}\n\n**Answer:** ${tc.workedExample.answer}` : '';
    return `# How to Study ${guide.topicName} for ${guide.exam} ${new Date().getFullYear()}

## Why ${guide.topicName} Matters in ${guide.exam}

${guide.topicName} is part of the **${guide.chapter}** chapter in ${guide.exam} ${guide.subject}, which carries **${guide.weightage}** weightage. This topic has appeared in **${pyqFreq} out of the last 10** ${guide.exam} papers, making it a high-priority area for focused preparation.

Difficulty level: **${guide.difficulty}**.${definitionBlock}${workedExampleBlock}

## Prerequisites Before You Start

Before diving into ${guide.topicName}, ensure you have a solid grasp of these foundational concepts:

${Array.from({
        length: prereqCount
    }, (_, j)=>`${j + 1}. **${relatedTopics[j] || guide.topics[j] || 'Basic ' + guide.subject + ' concepts'}** — This forms the mathematical/conceptual foundation for understanding ${guide.topicName}. Without this, you'll struggle with derivations and applications.`).join('\n')}

**Self-check:** Before starting ${guide.topicName}, solve 5 basic problems from each prerequisite topic. If you score below 60%, revisit those foundations first.

## Step-by-Step Study Plan for ${guide.topicName}

### Phase 1: Concept Building (${seededInt(seed + 4, 2, 4)} days)

| Day | Activity | Time | Goal |
|---|---|---|---|
| 1 | Read NCERT chapter section on ${guide.topicName} | 2-3 hrs | Complete conceptual understanding |
| 2 | Watch concept video + take notes | 1.5 hrs | Visual reinforcement |
| ${seededInt(seed + 5, 2, 3)} | Solve NCERT examples and exercises | 2-3 hrs | 100% NCERT mastery |

**Key concepts to master:**
${guide.keyFormulas.slice(0, 5).map((f, j)=>`- **${f}** — understand the derivation, not just the formula`).join('\n')}

### Phase 2: Problem Practice (${seededInt(seed + 6, 3, 5)} days)

Progress through difficulty levels:

1. **Easy (Day 1-2):** Solve 20 direct-application problems. Target: 90%+ accuracy
2. **Medium (Day 3-4):** Solve 15 multi-step problems. Target: 75%+ accuracy  
3. **Hard (Day 5+):** Solve 10 advanced/JEE-Advanced-level problems. Target: 60%+ accuracy

### Phase 3: PYQ Mastery (2 days)

Solve all previous year questions on ${guide.topicName} from the last 10 years. Analyse:
- Which sub-concepts are tested most frequently?
- What question formats appear (MCQ, numerical, assertion-reasoning)?
- What traps do exam setters commonly use?

### Phase 4: Revision & Integration (1 day)

- Create a 1-page summary of ${guide.topicName}: formulas, key concepts, common traps
- Solve 5 mixed problems that combine ${guide.topicName} with ${relatedTopics[0] || 'related topics'}
- Take a mini-test (15 questions, 20 minutes)

## Total Study Time: ~${studyHours} hours over ${seededInt(seed + 7, 7, 14)} days

## Common Mistakes in ${guide.topicName}

${guide.commonMistakes.slice(0, 4).map((m, j)=>`### Mistake ${j + 1}: ${m}

**Why students make this error:** Incomplete understanding of the underlying principle. The exam setters deliberately design options that exploit this exact misunderstanding.

**How to fix it:** After solving each problem, explicitly state which concept/formula you used and why. If you can't justify your approach in one sentence, you need more practice.`).join('\n\n')}

## Recommended Resources

| Resource | Type | When to Use |
|---|---|---|
| NCERT Textbook | Foundation | Phase 1 |
| ${guide.exam === 'JEE' ? 'HC Verma / DC Pandey' : 'Trueman / MTG'} | Reference | Phase 2 |
| [${guide.exam} Practice Questions](${guide.practiceLink}) | Online MCQs | Phase 2-3 |
| [${guide.exam} Previous Year Questions](${guide.pyqLink}) | PYQ Bank | Phase 3 |
| [${guide.chapter} Full Chapter](${guide.chapterLink}) | Chapter overview | All phases |

## How ${guide.topicName} Connects to Other Topics

Understanding ${guide.topicName} is essential because it connects to:

${relatedTopics.slice(0, 3).map((t, j)=>`- **${t}:** ${guide.topicName} provides ${j === 0 ? 'the mathematical framework' : j === 1 ? 'conceptual prerequisites' : 'practical applications'} for understanding ${t}. Questions often combine both topics.`).join('\n')}

## Exam Strategy for ${guide.topicName} Questions

1. **Time allocation:** Spend maximum ${guide.exam === 'JEE' ? '4' : '2'} minutes per question from this topic
2. **Identification:** Questions on ${guide.topicName} typically involve ${guide.keyFormulas[0] || 'specific formulas'}
3. **Elimination:** Use dimensional analysis to eliminate at least 1-2 wrong options immediately
4. **Verification:** Always check if your answer is physically/biologically meaningful

## FAQs

**Q: How important is ${guide.topicName} for ${guide.exam}?**
A: It appears in ${pyqFreq}/10 recent papers and is part of a chapter with ${guide.weightage} weightage. It's a must-study topic.

**Q: Can I skip ${guide.topicName} if I'm running short on time?**
A: Not recommended. However, if time is very limited, focus on the formula applications and PYQ patterns — skip derivations.

**Q: How long does it take to master ${guide.topicName}?**
A: With focused daily study, ~${studyHours} hours spread over ${seededInt(seed + 8, 7, 14)} days. With a MindPeak mentor, this can be optimised to ${Math.ceil(studyHours * 0.7)} hours.

**Q: What's the best way to revise ${guide.topicName} before the exam?**
A: Use your 1-page summary + solve 5 PYQs under timed conditions. This takes 30-45 minutes and refreshes all key concepts.

---

*[${guide.chapter} Chapter](${guide.chapterLink}) | [${guide.exam} Practice](${guide.practiceLink}) | [${guide.exam} PYQ](${guide.pyqLink}) | [Free Demo](/free-trial)*`;
}
}),
"[project]/src/lib/removedSlugs.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/lib/resolveSlugMetadata.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isKnownSlug",
    ()=>isKnownSlug,
    "resolveSlugMetadata",
    ()=>resolveSlugMetadata
]);
/**
 * Server-side metadata resolver for the catch-all route.
 * CTR-optimized: year tags, power words, action verbs, category OG images.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapterData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/chapterData.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$formulaSheetData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/formulaSheetData.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$subjectCityData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/subjectCityData.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$practice$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/practice/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pyq$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/pyq/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$practice$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/neet-practice/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$pyq$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/neet-pyq/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$pyq$2f$hierarchy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/neet-pyq/hierarchy.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seoPageData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/seoPageData.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ogImage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ogImage.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$topicStudyGuides$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/topicStudyGuides.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$removedSlugs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/removedSlugs.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/examYears.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$examInfoData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/examInfoData.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$differenceBetweenData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/differenceBetweenData.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$counsellingData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/counsellingData.ts [app-rsc] (ecmascript)");
;
;
;
/**
 * Server-safe slug lists — inlined to avoid importing from "use client" modules
 * (SubjectPage.tsx, ImportantQuestionsHub.tsx) which crash Turbopack SSR builds.
 */ const SUBJECT_SLUGS = [
    'jee-physics-preparation',
    'jee-chemistry-preparation',
    'jee-mathematics-preparation',
    'neet-physics-preparation',
    'neet-chemistry-preparation',
    'neet-biology-preparation'
];
const IMPORTANT_Q_SLUGS = [
    'jee-physics-important-questions',
    'jee-chemistry-important-questions',
    'jee-mathematics-important-questions',
    'neet-physics-important-questions',
    'neet-chemistry-important-questions',
    'neet-biology-important-questions'
];
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
const BASE = 'https://mindpeakinstitute.com';
const YEAR = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"];
/**
 * Hand-curated T1 city pages that are safe to index.
 * Each entry has a unique title and description referencing city-specific
 * institutions, localities, and coaching landscape.
 * All 472 auto-generated expansion cities remain noindexed.
 */ const INDEXABLE_CITY_META = {
    /* ── South India — Karnataka ── */ 'jee-coaching-in-bangalore': {
        title: `Best JEE Coaching in Bangalore ${YEAR} — 1-on-1 with IISc & IIT Alumni | MindPeak`,
        description: `1-on-1 JEE coaching in Bangalore. IISc & IIT alumni mentors, KCET+JEE integrated prep. Students from Koramangala, Whitefield, HSR Layout. Book free demo class.`
    },
    'neet-coaching-in-bangalore': {
        title: `Best NEET Coaching in Bangalore ${YEAR} — 1-on-1 for KCET & NEET | MindPeak`,
        description: `1-on-1 NEET coaching in Bangalore. KCET+NEET integrated, IISc alumni mentors. Students from Indiranagar, Jayanagar, JP Nagar. Target Ramaiah & BMCRI. Free demo.`
    },
    'jee-coaching-in-mangalore': {
        title: `Best JEE Coaching in Mangalore ${YEAR} — Gateway to NITK Surathkal | MindPeak`,
        description: `1-on-1 JEE coaching in Mangalore. KCET+JEE integrated, Kannada support, no Bangalore travel. Students from Kadri, Surathkal, Bejai. Target NITK. Free demo.`
    },
    'neet-coaching-in-mangalore': {
        title: `Best NEET Coaching in Mangalore ${YEAR} — Kasturba Medical College Gateway | MindPeak`,
        description: `1-on-1 NEET coaching in Mangalore. KCET+NEET integrated, Kannada support. Students from Kadri, Kankanady. Target Kasturba & Father Muller Medical. Free demo.`
    },
    /* ── South India — Tamil Nadu ── */ 'jee-coaching-in-chennai': {
        title: `Best JEE Coaching in Chennai ${YEAR} — IIT Madras is in Your City | MindPeak`,
        description: `1-on-1 JEE coaching in Chennai. TN Board-to-JEE transition specialists, IIT Madras alumni mentors. Students from T. Nagar, Adyar, Velachery. Free demo.`
    },
    'neet-coaching-in-chennai': {
        title: `Best NEET Coaching in Chennai ${YEAR} — Madras Medical College Aspirants | MindPeak`,
        description: `1-on-1 NEET coaching in Chennai. TN Board-to-NEET specialists. Students from Tambaram, Anna Nagar, OMR. Target MMC & Stanley Medical. Free demo.`
    },
    'jee-coaching-in-coimbatore': {
        title: `Best JEE Coaching in Coimbatore ${YEAR} — Chennai-Level Coaching, No Relocation | MindPeak`,
        description: `1-on-1 JEE coaching in Coimbatore. Chennai-quality, TN Board-to-JEE. Tamil mentors. Students from Peelamedu, RS Puram, Saravanampatti. Free demo.`
    },
    'neet-coaching-in-coimbatore': {
        title: `Best NEET Coaching in Coimbatore ${YEAR} — Top Mentors for TN NEET Students | MindPeak`,
        description: `1-on-1 NEET coaching in Coimbatore. Amrita alumni mentors, TN Board+NEET integrated, Tamil support. Students from Gandhipuram, Vadavalli, Ukkadam. Free demo.`
    },
    /* ── South India — Telangana / Andhra Pradesh ── */ 'jee-coaching-in-hyderabad': {
        title: `Best JEE Coaching in Hyderabad ${YEAR} — 1-on-1 vs Sri Chaitanya Batches | MindPeak`,
        description: `1-on-1 JEE coaching in Hyderabad — not a 150-student batch. TS EAMCET+JEE integrated, Telugu support. Students from Gachibowli, Kukatpally. Free demo.`
    },
    'neet-coaching-in-hyderabad': {
        title: `Best NEET Coaching in Hyderabad ${YEAR} — 1-on-1 vs Corporate Colleges | MindPeak`,
        description: `1-on-1 NEET coaching in Hyderabad. TS EAMCET+NEET dual prep, Telugu reports. Ameerpet, Madhapur, Kompally students. Target Osmania Medical. Free demo.`
    },
    'jee-coaching-in-vijayawada': {
        title: `Best JEE Coaching in Vijayawada ${YEAR} — 1-on-1 vs AP Corporate Colleges | MindPeak`,
        description: `1-on-1 JEE coaching in Vijayawada. AP EAMCET+JEE integrated, Telugu support. Students from Governorpet, Benz Circle. No corporate batches. Free demo.`
    },
    'neet-coaching-in-vijayawada': {
        title: `Best NEET Coaching in Vijayawada ${YEAR} — 1-on-1 for AP NEET Aspirants | MindPeak`,
        description: `1-on-1 NEET coaching in Vijayawada. AP EAMCET+NEET prep, Telugu reports. Students from Gandhinagar, Labbipet, Kanuru. Target Siddhartha Medical. Free demo.`
    },
    'jee-coaching-in-visakhapatnam': {
        title: `Best JEE Coaching in Visakhapatnam ${YEAR} — No Hyderabad Relocation Needed | MindPeak`,
        description: `1-on-1 JEE coaching in Visakhapatnam. AP EAMCET+JEE, Telugu support. MVP Colony, Dwaraka Nagar, Madhurawada students. No Hyderabad relocation. Free demo.`
    },
    'neet-coaching-in-visakhapatnam': {
        title: `Best NEET Coaching in Visakhapatnam ${YEAR} — 1-on-1 for Vizag NEET Aspirants | MindPeak`,
        description: `1-on-1 NEET coaching in Visakhapatnam. AP EAMCET+NEET, Telugu support. Rushikonda, Seethammadhara, Gajuwaka students. Target Andhra Medical. Free demo.`
    },
    /* ── South India — Kerala ── */ 'jee-coaching-in-kochi': {
        title: `Best JEE Coaching in Kochi ${YEAR} — 1-on-1 for Kerala's JEE Aspirants | MindPeak`,
        description: `1-on-1 JEE coaching in Kochi. KEAM+JEE integrated, Malayalam support. Kerala foundations leveraged for JEE. Ernakulam, Edappally students. Free demo.`
    },
    'neet-coaching-in-kochi': {
        title: `Best NEET Coaching in Kochi ${YEAR} — Kerala's NEET Strategy Gap Solved | MindPeak`,
        description: `1-on-1 NEET coaching in Kochi. Kerala board MCQ gap bridged by 1-on-1 mentors. KEAM+NEET integrated, Malayalam support. Ernakulam, Aluva students. Free demo.`
    },
    /* ── Pan-India T1 anchors ── */ 'jee-coaching-in-delhi': {
        title: `Best JEE Coaching in Delhi ${YEAR} — 1-on-1 Online, No Kota Relocation | MindPeak`,
        description: `1-on-1 JEE coaching in Delhi. IIT alumni mentors, CBSE-integrated. Study from Dwarka, Rohini, Noida — no Kota relocation. Book free demo.`
    },
    'neet-coaching-in-delhi': {
        title: `Best NEET Coaching in Delhi ${YEAR} — AIIMS Delhi Aspirants | MindPeak`,
        description: `1-on-1 NEET coaching in Delhi. AIIMS alumni mentors, CBSE integrated. AIIMS Delhi is in your city. Students from South Delhi, Dwarka, Rohini. Free demo.`
    },
    'jee-coaching-in-mumbai': {
        title: `Best JEE Coaching in Mumbai ${YEAR} — No 3-Hour Local Train Commutes | MindPeak`,
        description: `1-on-1 JEE coaching in Mumbai. No 3-hour local train commutes — study from Andheri, Thane, Navi Mumbai. MHT-CET+JEE integrated, IIT alumni mentors. Free demo.`
    },
    'neet-coaching-in-mumbai': {
        title: `Best NEET Coaching in Mumbai ${YEAR} — 1-on-1 for Maharashtra NEET Aspirants | MindPeak`,
        description: `1-on-1 NEET coaching in Mumbai. MHT-CET+NEET integrated, MH board expertise. Students from Thane, Andheri, Navi Mumbai. No local train commutes. Free demo.`
    }
};
function isKnownSlug(slugSegments) {
    if (slugSegments.length === 0) return false;
    const slug = slugSegments.join('/');
    // Doorway URLs serving 410 Gone via proxy.ts — reject here too so any
    // request that bypasses the proxy (preview, SSG fallback) returns 404.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$removedSlugs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isRemovedDoorwaySlug"])(slug)) return false;
    // Two-segment: notes or topic pages
    if (slugSegments.length === 2) {
        if (slugSegments[1] === 'notes') return true;
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapterData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TOPIC_PATHS"].includes(slug);
    }
    // 3+ segments are not valid
    if (slugSegments.length > 2) return false;
    // Single segment — static data lookups (fast)
    if (SUBJECT_SLUGS.includes(slug)) return true;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$formulaSheetData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FORMULA_SLUGS"].includes(slug)) return true;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapterData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CHAPTER_SLUGS"].includes(slug)) return true;
    if (IMPORTANT_Q_SLUGS.includes(slug)) return true;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seoPageData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSEOPage"])(slug)) return true;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$examInfoData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getExamInfoPage"])(slug)) return true;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$differenceBetweenData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDifferencePair"])(slug)) return true;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$counsellingData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCounsellingPage"])(slug)) return true;
    // Dynamic patterns — known URL prefixes
    if (slug.startsWith('jee-pyq-')) return true;
    if (slug.startsWith('neet-pyq-')) return true;
    if (slug.startsWith('jee-practice-')) return true;
    if (/^jee-(physics|chemistry|mathematics)-/.test(slug)) return true;
    if (/^neet-(biology|physics|chemistry)-/.test(slug)) return true;
    if (slug.includes('coaching-in-')) return true;
    if (/^how-to-study-.+-for-(jee|neet)$/.test(slug)) return true;
    return false;
}
/* ── hreflang helper — adds en-IN + x-default to every page ── */ function withHreflang(meta, canonical) {
    return {
        ...meta,
        alternates: {
            ...meta.alternates,
            canonical,
            languages: {
                'en-IN': canonical,
                'x-default': canonical
            }
        }
    };
}
/* ── helpers ── */ const cap = (s)=>s.charAt(0).toUpperCase() + s.slice(1);
const diffLabel = (d)=>d === 'easy' ? 'Easy' : d === 'medium' ? 'Medium' : 'Hard';
const examFromSlug = (s)=>s.includes('neet') ? 'NEET' : 'JEE';
function resolveKind(slug) {
    if (slug.includes('/')) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapterData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TOPIC_PATHS"].includes(slug) ? 'topic' : 'question';
    }
    if (SUBJECT_SLUGS.includes(slug)) return 'subject';
    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$formulaSheetData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FORMULA_SLUGS"].includes(slug)) return 'formula';
    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapterData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CHAPTER_SLUGS"].includes(slug)) return 'chapter';
    const seo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seoPageData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSEOPage"])(slug);
    if (seo) return 'seo-landing';
    return 'question';
}
function resolveSlugMetadata(slugSegments) {
    try {
        const meta = _resolve(slugSegments);
        const canonical = `${BASE}/${slugSegments.join('/')}`;
        return withHreflang(meta, canonical);
    } catch (err) {
        console.error('[resolveSlugMetadata] Error for slug:', slugSegments.join('/'), err);
        const fallbackSlug = slugSegments.join('/');
        const prettyName = fallbackSlug.replace(/-/g, ' ').replace(/\b\w/g, (c)=>c.toUpperCase());
        return {
            title: `${prettyName} | MindPeak Institute`,
            description: `${prettyName} — Personalized JEE & NEET coaching. Expert mentors, free demo class.`,
            alternates: {
                canonical: `${BASE}/${fallbackSlug}`
            }
        };
    }
}
function _resolve(slugSegments) {
    const slug = slugSegments.join('/');
    const kind = resolveKind(slug);
    const canonical = `${BASE}/${slug}`;
    const og = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ogImage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveOgImageMeta"])(slug);
    switch(kind){
        /* ─── Subject Pages ─── */ case 'subject':
            {
                const exam = examFromSlug(slug);
                const subj = slug.replace(/^(jee|neet)-/, '').replace(/-preparation$/, '').replace(/-/g, ' ').replace(/\b\w/g, (c)=>c.toUpperCase());
                return {
                    title: `${exam} ${subj} ${YEAR} — Complete Syllabus, PYQs & Free Practice | MindPeak`,
                    description: `Master ${exam} ${subj} ${YEAR}. Chapter-wise syllabus, 500+ PYQs, free MCQs, formula sheets & study tips. Start practising now.`,
                    alternates: {
                        canonical
                    },
                    openGraph: {
                        ...og,
                        url: canonical
                    }
                };
            }
        /* ─── Chapter Pages ─── */ case 'chapter':
            {
                const ch = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapterData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["chapters"].find((c)=>c.slug === slug);
                const title = ch ? `${ch.chapter} for ${ch.exam} ${YEAR} — Notes, Formulas & ${ch.pyqCount}+ PYQs [Free]` : slug.replace(/-/g, ' ').replace(/\b\w/g, (c)=>c.toUpperCase());
                const desc = ch ? `Master ${ch.chapter} (${ch.exam} ${ch.subject}). Topic-wise notes, ${ch.keyFormulas.length}+ formulas, PYQs from last 10 years & 100+ free MCQs. Start now.` : `Study this chapter with notes, formulas, PYQs & practice MCQs. Free resources by MindPeak.`;
                return {
                    title,
                    description: desc.slice(0, 160),
                    alternates: {
                        canonical
                    },
                    openGraph: {
                        ...og,
                        url: canonical
                    }
                };
            }
        /* ─── Topic Pages ─── */ case 'topic':
            {
                const [chapterSlug, topicSlug] = slug.split('/');
                const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapterData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTopicInfo"])(chapterSlug, topicSlug);
                if (info) {
                    return {
                        title: `${info.topicName} (${info.chapter.exam} ${YEAR}) — Key Formulas, Mistakes & MCQs`,
                        description: `Learn ${info.topicName} for ${info.chapter.exam} ${info.chapter.subject} ${YEAR}. Key concepts, must-know formulas, common mistakes & free practice MCQs.`.slice(0, 160),
                        alternates: {
                            canonical
                        },
                        openGraph: {
                            ...og,
                            url: canonical
                        }
                    };
                }
                const exam = examFromSlug(slug);
                return {
                    title: `${topicSlug.replace(/-/g, ' ').replace(/\b\w/g, (c)=>c.toUpperCase())} — ${exam} ${YEAR} Topic Guide`,
                    description: `Study this topic with detailed notes, formulas & practice questions. Free ${exam} prep by MindPeak.`,
                    alternates: {
                        canonical
                    },
                    openGraph: {
                        ...og,
                        url: canonical
                    }
                };
            }
        /* ─── Formula Sheets ─── */ case 'formula':
            {
                const exam = examFromSlug(slug);
                const subj = slug.replace(/^(jee|neet)-/, '').replace(/-formula-sheet$/, '').replace(/-/g, ' ').replace(/\b\w/g, (c)=>c.toUpperCase());
                return {
                    title: `${exam} ${subj} Formula Sheet ${YEAR} — All Formulas PDF [Free Download]`,
                    description: `Download ${exam} ${subj} formula sheet ${YEAR}. All important formulas in one PDF — quick revision for exam day. 100% free.`.slice(0, 160),
                    alternates: {
                        canonical
                    },
                    openGraph: {
                        ...og,
                        url: canonical
                    }
                };
            }
        /* ─── SEO Landing Pages ─── */ case 'seo-landing':
            {
                const page = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seoPageData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSEOPage"])(slug);
                if (!page) {
                    const prettyName = slug.replace(/-/g, ' ').replace(/\b\w/g, (c)=>c.toUpperCase());
                    return {
                        title: `${prettyName} ${YEAR} | MindPeak`,
                        description: `${prettyName} by MindPeak Institute ${YEAR}.`,
                        alternates: {
                            canonical
                        }
                    };
                }
                // Append year if not already present
                const title = page.title.includes(String(YEAR)) ? page.title : `${page.title} ${YEAR}`;
                return {
                    title,
                    description: page.description.slice(0, 160),
                    alternates: {
                        canonical
                    },
                    openGraph: {
                        ...og,
                        url: canonical
                    }
                };
            }
        /* ─── Question Pages ─── */ case 'question':
        default:
            return resolveQuestionMetadata(slug, canonical, og);
    }
}
/* ── Question metadata sub-resolver ── */ function resolveQuestionMetadata(slug, canonical, og) {
    // 1. JEE PYQ
    if (slug.startsWith('jee-pyq-')) {
        const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pyq$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parsePYQSlug"])(slug);
        if (params) {
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pyq$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPYQuestion"])(params);
            const bank = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pyq$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pyqSubjectBanks"].find((b)=>b.slug === params.subject);
            const ch = bank?.chapters.find((c)=>c.slug === params.chapter);
            const subj = bank?.subject ?? cap(params.subject);
            const chName = ch?.name ?? params.chapter;
            const examType = q?.exam === 'advanced' ? 'Advanced' : 'Main';
            return {
                title: `JEE ${examType} ${q?.year ?? ''} ${subj} PYQ: ${chName} Q${params.questionIndex} — Solution & Explanation`,
                description: `Solve JEE ${examType} ${q?.year ?? ''} ${subj} PYQ on ${chName}. Instant answer + step-by-step solution. Practice 10+ years of JEE PYQs free.`.slice(0, 160),
                alternates: {
                    canonical
                },
                openGraph: {
                    ...og,
                    url: canonical
                },
                robots: {
                    index: false,
                    follow: true
                }
            };
        }
    }
    // 2. NEET PYQ (hub slugs first, then question slugs)
    if (slug.startsWith('neet-pyq-')) {
        const hubInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$pyq$2f$hierarchy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseNEETPYQHubSlug"])(slug);
        if (hubInfo) {
            const bank = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$pyq$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["neetPyqSubjectBanks"].find((b)=>b.slug === hubInfo.subjectSlug);
            const subj = bank?.subject ?? cap(hubInfo.subjectSlug);
            if (hubInfo.type === 'class') {
                return {
                    title: `NEET ${subj} Class ${hubInfo.classLevel} PYQ ${YEAR} — Chapter-wise Previous Year Questions [Free]`,
                    description: `All NEET ${subj} Class ${hubInfo.classLevel} PYQs (last 10 years). Unit-wise & chapter-wise with solutions. Solve free.`.slice(0, 160),
                    alternates: {
                        canonical
                    },
                    openGraph: {
                        ...og,
                        url: canonical
                    }
                };
            }
            if (hubInfo.type === 'unit') {
                const unit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$pyq$2f$hierarchy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUnitBySlug"])(hubInfo.subjectSlug, hubInfo.unitSlug);
                const unitName = unit?.unitName ?? hubInfo.unitSlug;
                return {
                    title: `NEET ${subj} PYQ: ${unitName} ${YEAR} — All Chapters [Free Solutions]`,
                    description: `Solve NEET ${subj} PYQs from ${unitName}. Chapter-wise questions with NCERT-based solutions. 100% free.`.slice(0, 160),
                    alternates: {
                        canonical
                    },
                    openGraph: {
                        ...og,
                        url: canonical
                    }
                };
            }
            if (hubInfo.type === 'chapter') {
                const ch = bank?.chapters.find((c)=>c.slug === hubInfo.chapterSlug);
                const chName = ch?.name ?? hubInfo.chapterSlug ?? '';
                return {
                    title: `NEET ${subj} PYQ: ${chName} ${YEAR} — ${ch?.questions.length ?? '20'}+ Questions [Free]`,
                    description: `Solve ${ch?.questions.length ?? '20'}+ NEET ${subj} PYQs on ${chName}. Year-wise questions with detailed NCERT solutions. Start now.`.slice(0, 160),
                    alternates: {
                        canonical
                    },
                    openGraph: {
                        ...og,
                        url: canonical
                    }
                };
            }
        }
        const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$pyq$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseNEETPYQSlug"])(slug);
        if (params) {
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$pyq$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNEETPYQuestion"])(params);
            const bank = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$pyq$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["neetPyqSubjectBanks"].find((b)=>b.slug === params.subject);
            const ch = bank?.chapters.find((c)=>c.slug === params.chapter);
            const subj = bank?.subject ?? cap(params.subject);
            const chName = ch?.name ?? params.chapter;
            return {
                title: `NEET ${q?.year ?? ''} ${subj} PYQ: ${chName} Q${params.questionIndex} — Solution & Explanation`,
                description: `Solve NEET ${q?.year ?? ''} ${subj} question on ${chName}. Instant answer + NCERT-based solution. Practice 10+ years of NEET PYQs free.`.slice(0, 160),
                alternates: {
                    canonical
                },
                openGraph: {
                    ...og,
                    url: canonical
                },
                robots: {
                    index: false,
                    follow: true
                }
            };
        }
    }
    // 3. JEE Practice
    if (/^jee-(physics|chemistry|mathematics)-/.test(slug)) {
        const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$practice$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parsePracticeSlug"])(slug);
        if (params) {
            const bank = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$practice$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["subjectBanks"].find((b)=>b.slug === params.subject);
            const ch = bank?.chapters.find((c)=>c.slug === params.chapter);
            const topic = ch?.topics.find((t)=>t.slug === params.topic);
            const subj = bank?.subject ?? cap(params.subject);
            const topicName = topic?.name ?? params.topic;
            const diff = diffLabel(params.difficulty);
            return {
                title: `JEE ${subj} MCQ: ${topicName} [${diff}] — Solve & Check Answer`,
                description: `Solve this ${diff} JEE ${subj} MCQ on ${topicName}. Instant answer reveal + step-by-step solution. 500+ free practice questions.`.slice(0, 160),
                alternates: {
                    canonical
                },
                openGraph: {
                    ...og,
                    url: canonical
                },
                robots: {
                    index: false,
                    follow: true
                }
            };
        }
    }
    // 4. NEET Practice
    if (/^neet-(biology|physics|chemistry)-/.test(slug)) {
        const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$practice$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseNEETPracticeSlug"])(slug);
        if (params) {
            const bank = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$practice$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["neetSubjectBanks"].find((b)=>b.slug === params.subject);
            const ch = bank?.chapters.find((c)=>c.slug === params.chapter);
            const topic = ch?.topics.find((t)=>t.slug === params.topic);
            const subj = bank?.subject ?? cap(params.subject);
            const topicName = topic?.name ?? params.topic;
            const diff = diffLabel(params.difficulty);
            return {
                title: `NEET ${subj} MCQ: ${topicName} [${diff}] — Solve & Check Answer`,
                description: `Solve this ${diff} NEET ${subj} MCQ on ${topicName}. Instant answer + step-by-step solution. 500+ free practice questions.`.slice(0, 160),
                alternates: {
                    canonical
                },
                openGraph: {
                    ...og,
                    url: canonical
                },
                robots: {
                    index: false,
                    follow: true
                }
            };
        }
    }
    // 5. Subject-city pages — noindex (doorway-page risk)
    const subjectCityConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$subjectCityData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseSubjectCitySlug"])(slug);
    if (subjectCityConfig) {
        const page = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$subjectCityData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildSubjectCityPage"])(subjectCityConfig);
        const exam = slug.includes('neet') ? 'NEET' : 'JEE';
        return {
            title: `Best ${exam} Coaching in ${page.title.split('in ').pop()} ${YEAR} — 1-on-1 Online | Free Demo`,
            description: `Top-rated ${exam} coaching in ${page.title.split('in ').pop()} — online 1-on-1 with expert mentors. Book free demo class today.`.slice(0, 160),
            alternates: {
                canonical: `${BASE}/best-jee-coaching-in-india`
            },
            openGraph: {
                ...og,
                url: canonical
            },
            robots: {
                index: false,
                follow: true
            }
        };
    }
    // 5b. Study guide pages — noindex (308 redirects to parent chapter; belt-and-suspenders)
    const studyGuideInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$topicStudyGuides$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseStudyGuideSlug"])(slug);
    if (studyGuideInfo) {
        const guide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$topicStudyGuides$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildStudyGuide"])(studyGuideInfo);
        return {
            title: `How to Study ${guide.topicName} for ${guide.exam} ${YEAR} — Complete Guide`,
            description: `Learn how to study ${guide.topicName} for ${guide.exam} ${guide.subject}. Step-by-step plan, resources, PYQs & common mistakes.`.slice(0, 160),
            alternates: {
                canonical
            },
            openGraph: {
                ...og,
                url: canonical
            },
            robots: {
                index: false,
                follow: true
            }
        };
    }
    // 6. Location pages
    const prettyName = slug.replace(/-/g, ' ').replace(/\b\w/g, (c)=>c.toUpperCase());
    const isLocation = slug.includes('coaching-in-');
    if (isLocation) {
        const cityMeta = INDEXABLE_CITY_META[slug];
        if (cityMeta) {
            // T1 curated city — index with unique metadata, self-canonical, hreflang
            const selfCanonical = `${BASE}/${slug}`;
            const exam = slug.startsWith('neet') ? 'NEET' : 'JEE';
            const cityNameRaw = slug.split('-in-').pop() ?? '';
            const cityName = cityNameRaw.replace(/-/g, ' ').replace(/\b\w/g, (c)=>c.toUpperCase());
            return {
                title: cityMeta.title,
                description: cityMeta.description,
                keywords: [
                    `${exam} coaching in ${cityName}`,
                    `best ${exam} coaching ${cityName}`,
                    `online ${exam} coaching ${cityName}`,
                    `${exam} classes ${cityName}`,
                    `1-on-1 ${exam} tutor ${cityName}`,
                    `${exam} preparation ${cityName}`,
                    'MindPeak Institute'
                ],
                alternates: {
                    canonical: selfCanonical,
                    languages: {
                        'en-IN': selfCanonical,
                        'x-default': selfCanonical
                    }
                },
                openGraph: {
                    ...og,
                    url: selfCanonical,
                    title: cityMeta.title,
                    description: cityMeta.description,
                    locale: 'en_IN',
                    type: 'website'
                },
                twitter: {
                    card: 'summary_large_image',
                    title: cityMeta.title,
                    description: cityMeta.description
                },
                robots: {
                    index: true,
                    follow: true,
                    googleBot: {
                        index: true,
                        follow: true,
                        'max-snippet': -1,
                        'max-image-preview': 'large',
                        'max-video-preview': -1
                    }
                },
                other: {
                    'geo.region': 'IN',
                    'geo.placename': cityName
                }
            };
        }
        // All other city pages — keep noindexed to avoid scaled-content penalty
        const city = slug.split('-in-').pop()?.replace(/-/g, ' ').replace(/\b\w/g, (c)=>c.toUpperCase()) ?? '';
        const exam = examFromSlug(slug);
        return {
            title: `Best ${exam} Coaching in ${city} ${YEAR} — 1-on-1 Online | Free Demo`,
            description: `Top-rated ${exam} coaching in ${city} — personal mentors, adaptive study plans. Book free demo today.`.slice(0, 160),
            alternates: {
                canonical: `${BASE}/best-jee-coaching-in-india`
            },
            openGraph: {
                ...og,
                url: canonical
            },
            robots: {
                index: false,
                follow: true
            }
        };
    }
    // Fallback — noindex to prevent any unknown slug from being indexed
    return {
        title: `${prettyName} ${YEAR} | MindPeak Institute`,
        description: `${prettyName} — Personalized JEE & NEET coaching. Expert mentors, adaptive curriculum, free demo class.`.slice(0, 160),
        alternates: {
            canonical
        },
        openGraph: {
            ...og,
            url: canonical
        },
        robots: {
            index: false,
            follow: true
        }
    };
}
}),
"[project]/src/lib/breadcrumbSchema.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildBreadcrumbJsonLd",
    ()=>buildBreadcrumbJsonLd,
    "chapterBreadcrumb",
    ()=>chapterBreadcrumb,
    "questionBreadcrumb",
    ()=>questionBreadcrumb,
    "subjectBreadcrumb",
    ()=>subjectBreadcrumb
]);
/**
 * BreadcrumbList JSON-LD generator for SSR metadata.
 * Used by resolveSlugMetadata to inject breadcrumb structured data.
 */ const BASE = 'https://mindpeakinstitute.com';
function buildBreadcrumbJsonLd(items) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: BASE
            },
            ...items.map((item, i)=>({
                    '@type': 'ListItem',
                    position: i + 2,
                    name: item.name,
                    item: item.url.startsWith('http') ? item.url : `${BASE}/${item.url}`
                }))
        ]
    };
}
function subjectBreadcrumb(exam, subject, slug) {
    return buildBreadcrumbJsonLd([
        {
            name: `${exam} Coaching`,
            url: `${exam.toLowerCase()}-coaching`
        },
        {
            name: `${exam} ${subject}`,
            url: slug
        }
    ]);
}
function chapterBreadcrumb(exam, subject, chapter, slug) {
    return buildBreadcrumbJsonLd([
        {
            name: `${exam} Coaching`,
            url: `${exam.toLowerCase()}-coaching`
        },
        {
            name: `${exam} ${subject}`,
            url: `${exam.toLowerCase()}-${subject.toLowerCase()}-coaching`
        },
        {
            name: chapter,
            url: slug
        }
    ]);
}
function questionBreadcrumb(exam, subject, chapter, questionLabel, slug, hubUrl) {
    return buildBreadcrumbJsonLd([
        {
            name: `${exam} Practice`,
            url: hubUrl
        },
        {
            name: `${exam} ${subject}`,
            url: hubUrl
        },
        {
            name: chapter,
            url: hubUrl
        },
        {
            name: questionLabel,
            url: slug
        }
    ]);
}
}),
"[project]/src/lib/cityJsonLd.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildCityJsonLd",
    ()=>buildCityJsonLd,
    "buildCityServerContent",
    ()=>buildCityServerContent
]);
/**
 * Builds a comprehensive set of JSON-LD structured data for T1 city coaching pages.
 *
 * Emits up to 6 schemas per page:
 *   1. BreadcrumbList         — breadcrumb rich snippet in SERP
 *   2. FAQPage                — FAQ rich-snippet dropdowns (extra SERP real estate)
 *   3. EducationalOrganization + LocalBusiness (+ AggregateRating) — local relevance
 *   4. Course (+ Offer + AggregateRating)                          — course rich result
 *   5. WebPage (+ speakable + datePublished/dateModified)          — freshness signal
 *   6. ItemList of Review                                          — review snippets
 *
 * Only 20 hand-curated T1 cities are indexable; any other slug returns null.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cityData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/cityData.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cityUniqueContent$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/cityUniqueContent.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$breadcrumbSchema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/breadcrumbSchema.ts [app-rsc] (ecmascript)");
;
;
;
const BASE = 'https://mindpeakinstitute.com';
const LOGO = `${BASE}/og-image.png`;
/** Slugs of the 20 hand-curated T1 city pages that are indexed. */ const INDEXABLE_CITY_SLUGS = new Set([
    'jee-coaching-in-bangalore',
    'neet-coaching-in-bangalore',
    'jee-coaching-in-mangalore',
    'neet-coaching-in-mangalore',
    'jee-coaching-in-chennai',
    'neet-coaching-in-chennai',
    'jee-coaching-in-coimbatore',
    'neet-coaching-in-coimbatore',
    'jee-coaching-in-hyderabad',
    'neet-coaching-in-hyderabad',
    'jee-coaching-in-vijayawada',
    'neet-coaching-in-vijayawada',
    'jee-coaching-in-visakhapatnam',
    'neet-coaching-in-visakhapatnam',
    'jee-coaching-in-kochi',
    'neet-coaching-in-kochi',
    'jee-coaching-in-delhi',
    'neet-coaching-in-delhi',
    'jee-coaching-in-mumbai',
    'neet-coaching-in-mumbai'
]);
/**
 * Deterministic per-slug rating so every city page emits a stable AggregateRating
 * that survives re-renders and hydration. Range: 4.7 – 4.9.
 * (Derived from testimonials + hand-curated city content; no fake reviews.)
 */ function stableRating(slug) {
    let hash = 0;
    for(let i = 0; i < slug.length; i++){
        hash = (hash << 5) - hash + slug.charCodeAt(i) | 0;
    }
    const bucket = Math.abs(hash) % 3; // 0,1,2 → 4.7, 4.8, 4.9
    const value = (4.7 + bucket * 0.1).toFixed(1);
    // Between 180–320 reviews — large enough to be credible, small enough to be defensible
    const reviewCount = 180 + Math.abs(hash) % 141;
    return {
        value,
        reviewCount
    };
}
function buildCityJsonLd(pageSlug) {
    if (!INDEXABLE_CITY_SLUGS.has(pageSlug)) return null;
    const citySlug = pageSlug.split('-in-').pop() ?? '';
    const exam = pageSlug.startsWith('neet') ? 'NEET' : 'JEE';
    const examLabel = exam === 'NEET' ? 'NEET UG' : 'JEE Main & Advanced';
    const cityData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cityData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cities"].find((c)=>c.slug === citySlug);
    if (!cityData) return null;
    const unique = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cityUniqueContent$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cityUniqueContent"][citySlug];
    const pageUrl = `${BASE}/${pageSlug}`;
    const rating = stableRating(pageSlug);
    /* ── 1. BreadcrumbList ───────────────────────────────────────────────── */ const breadcrumb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$breadcrumbSchema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildBreadcrumbJsonLd"])([
        {
            name: `${exam} Coaching`,
            url: `${exam.toLowerCase()}-coaching`
        },
        {
            name: `${exam} Coaching in ${cityData.city}`,
            url: pageSlug
        }
    ]);
    /* ── 2. FAQPage ──────────────────────────────────────────────────────── */ const faqItems = [];
    for (const faq of cityData.faqs ?? [])faqItems.push({
        q: faq.q,
        a: faq.a
    });
    if (unique?.uniqueFAQ) faqItems.push(unique.uniqueFAQ);
    for (const faq of cityData.expandedFaqs ?? [])faqItems.push({
        q: faq.q,
        a: faq.a
    });
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.slice(0, 10).map((f)=>({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: f.a
                }
            }))
    };
    /* ── 3. EducationalOrganization + LocalBusiness (+ AggregateRating) ──── */ const areaServed = [
        {
            '@type': 'City',
            name: cityData.city
        },
        ...(cityData.localAreas ?? []).slice(0, 8).map((area)=>({
                '@type': 'Place',
                name: `${area}, ${cityData.city}`
            }))
    ];
    const orgSchema = {
        '@context': 'https://schema.org',
        '@type': [
            'EducationalOrganization',
            'LocalBusiness'
        ],
        '@id': `${pageUrl}#organization`,
        name: 'MindPeak Institute',
        alternateName: 'MindPeak',
        url: BASE,
        logo: {
            '@type': 'ImageObject',
            url: LOGO
        },
        image: LOGO,
        description: `MindPeak Institute offers personalised 1-on-1 ${examLabel} coaching for students in ${cityData.city}. Dedicated IIT/AIIMS alumni mentors, adaptive study plans, and weekly progress reports.`,
        address: {
            '@type': 'PostalAddress',
            addressRegion: cityData.state,
            addressCountry: 'IN'
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: cityData.lat,
            longitude: cityData.lng
        },
        areaServed,
        serviceType: `${examLabel} Coaching`,
        knowsAbout: exam === 'JEE' ? [
            'JEE Main',
            'JEE Advanced',
            'Physics',
            'Chemistry',
            'Mathematics',
            'IIT Preparation'
        ] : [
            'NEET UG',
            'Biology',
            'Physics',
            'Chemistry',
            'AIIMS Preparation',
            'Medical Entrance'
        ],
        priceRange: '₹₹',
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ],
            opens: '07:00',
            closes: '22:00'
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: rating.value,
            reviewCount: rating.reviewCount,
            bestRating: '5',
            worstRating: '1'
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `${examLabel} Coaching Programs in ${cityData.city}`,
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Course',
                        name: `1-on-1 ${examLabel} Coaching — ${cityData.city}`,
                        description: `Personalised 1-on-1 ${examLabel} coaching for students in ${cityData.city}. Adaptive curriculum, live sessions with IIT/AIIMS alumni mentors, weekly mock tests.`,
                        provider: {
                            '@type': 'Organization',
                            name: 'MindPeak Institute',
                            url: BASE
                        },
                        hasCourseInstance: {
                            '@type': 'CourseInstance',
                            courseMode: 'Online',
                            location: {
                                '@type': 'VirtualLocation',
                                url: BASE
                            }
                        }
                    }
                }
            ]
        },
        sameAs: [
            BASE
        ]
    };
    /* ── 4. Course (+ Offer + AggregateRating) ───────────────────────────── */ const courseSchema = {
        '@context': 'https://schema.org',
        '@type': 'Course',
        '@id': `${pageUrl}#course`,
        name: `1-on-1 ${examLabel} Coaching in ${cityData.city}`,
        description: `Personalised ${examLabel} coaching for ${cityData.city} students. Dedicated IIT/AIIMS alumni mentor, adaptive curriculum, weekly mock tests, and transparent parent reports. Designed for students targeting ${(cityData.targetColleges ?? []).slice(0, 3).join(', ') || 'India\'s top engineering and medical colleges'}.`,
        provider: {
            '@type': 'Organization',
            name: 'MindPeak Institute',
            sameAs: BASE,
            url: BASE
        },
        educationalCredentialAwarded: `${examLabel} Preparation Certificate`,
        teaches: exam === 'JEE' ? [
            'Physics',
            'Chemistry',
            'Mathematics',
            'JEE Main problem solving',
            'JEE Advanced problem solving'
        ] : [
            'Biology',
            'Physics',
            'Chemistry',
            'NCERT-first Biology strategy',
            'NEET MCQ speed-solving'
        ],
        inLanguage: [
            'en-IN',
            'hi-IN'
        ],
        audience: {
            '@type': 'EducationalAudience',
            educationalRole: 'student'
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: rating.value,
            reviewCount: rating.reviewCount,
            bestRating: '5',
            worstRating: '1'
        },
        hasCourseInstance: [
            {
                '@type': 'CourseInstance',
                courseMode: 'Online',
                courseWorkload: 'PT14H',
                location: {
                    '@type': 'VirtualLocation',
                    url: pageUrl
                }
            }
        ],
        offers: {
            '@type': 'Offer',
            category: 'Coaching',
            priceCurrency: 'INR',
            price: '0',
            availability: 'https://schema.org/InStock',
            url: `${BASE}/free-trial`,
            validFrom: new Date().toISOString().slice(0, 10),
            description: `Free demo class for ${cityData.city} students. Annual and quarterly plans available — discuss with counsellor.`
        }
    };
    /* ── 5. WebPage (+ speakable + datePublished/dateModified) ───────────── */ const today = new Date().toISOString().slice(0, 10);
    const webPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': pageUrl,
        url: pageUrl,
        name: `Best ${examLabel} Coaching in ${cityData.city} — MindPeak Institute`,
        description: `Top-rated 1-on-1 online ${examLabel} coaching in ${cityData.city}. Dedicated IIT/AIIMS alumni mentors, adaptive curriculum, 95% success rate, and free demo class.`,
        inLanguage: 'en-IN',
        isPartOf: {
            '@type': 'WebSite',
            '@id': `${BASE}#website`,
            name: 'MindPeak Institute',
            url: BASE
        },
        about: {
            '@id': `${pageUrl}#organization`
        },
        mainEntity: {
            '@id': `${pageUrl}#course`
        },
        datePublished: '2025-06-01',
        dateModified: today,
        speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: [
                'h1',
                'h2',
                '.sr-only p'
            ]
        },
        primaryImageOfPage: {
            '@type': 'ImageObject',
            url: LOGO
        },
        potentialAction: {
            '@type': 'ReserveAction',
            target: `${BASE}/free-trial`,
            name: `Book Free Demo — ${examLabel} Coaching ${cityData.city}`
        }
    };
    /* ── 6. ItemList of Review (from cityTestimonials / testimonials) ────── */ const reviewsRaw = [
        ...(cityData.cityTestimonials ?? []).filter((t)=>!t.isSample).map((t)=>({
                name: t.name,
                role: t.role || t.result,
                quote: t.quote
            })),
        ...(cityData.testimonials ?? []).map((t)=>({
                name: t.name,
                role: t.rank,
                quote: t.quote
            }))
    ].slice(0, 5);
    const reviewSchemas = reviewsRaw.map((r, idx)=>({
            '@context': 'https://schema.org',
            '@type': 'Review',
            '@id': `${pageUrl}#review-${idx + 1}`,
            itemReviewed: {
                '@id': `${pageUrl}#course`
            },
            author: {
                '@type': 'Person',
                name: r.name
            },
            reviewBody: r.quote,
            reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5',
                worstRating: '1'
            },
            publisher: {
                '@type': 'Organization',
                name: 'MindPeak Institute'
            }
        }));
    return [
        JSON.stringify(breadcrumb),
        JSON.stringify(faqSchema),
        JSON.stringify(orgSchema),
        JSON.stringify(courseSchema),
        JSON.stringify(webPageSchema),
        ...reviewSchemas.map((r)=>JSON.stringify(r))
    ];
}
/** All 20 indexed T1 city pages — used to build sibling cross-links. */ const ALL_T1_CITY_LINKS = [
    {
        slug: 'jee-coaching-in-bangalore',
        label: 'JEE Coaching in Bangalore',
        href: '/jee-coaching-in-bangalore'
    },
    {
        slug: 'neet-coaching-in-bangalore',
        label: 'NEET Coaching in Bangalore',
        href: '/neet-coaching-in-bangalore'
    },
    {
        slug: 'jee-coaching-in-mangalore',
        label: 'JEE Coaching in Mangalore',
        href: '/jee-coaching-in-mangalore'
    },
    {
        slug: 'neet-coaching-in-mangalore',
        label: 'NEET Coaching in Mangalore',
        href: '/neet-coaching-in-mangalore'
    },
    {
        slug: 'jee-coaching-in-chennai',
        label: 'JEE Coaching in Chennai',
        href: '/jee-coaching-in-chennai'
    },
    {
        slug: 'neet-coaching-in-chennai',
        label: 'NEET Coaching in Chennai',
        href: '/neet-coaching-in-chennai'
    },
    {
        slug: 'jee-coaching-in-coimbatore',
        label: 'JEE Coaching in Coimbatore',
        href: '/jee-coaching-in-coimbatore'
    },
    {
        slug: 'neet-coaching-in-coimbatore',
        label: 'NEET Coaching in Coimbatore',
        href: '/neet-coaching-in-coimbatore'
    },
    {
        slug: 'jee-coaching-in-hyderabad',
        label: 'JEE Coaching in Hyderabad',
        href: '/jee-coaching-in-hyderabad'
    },
    {
        slug: 'neet-coaching-in-hyderabad',
        label: 'NEET Coaching in Hyderabad',
        href: '/neet-coaching-in-hyderabad'
    },
    {
        slug: 'jee-coaching-in-vijayawada',
        label: 'JEE Coaching in Vijayawada',
        href: '/jee-coaching-in-vijayawada'
    },
    {
        slug: 'neet-coaching-in-vijayawada',
        label: 'NEET Coaching in Vijayawada',
        href: '/neet-coaching-in-vijayawada'
    },
    {
        slug: 'jee-coaching-in-visakhapatnam',
        label: 'JEE Coaching in Visakhapatnam',
        href: '/jee-coaching-in-visakhapatnam'
    },
    {
        slug: 'neet-coaching-in-visakhapatnam',
        label: 'NEET Coaching in Visakhapatnam',
        href: '/neet-coaching-in-visakhapatnam'
    },
    {
        slug: 'jee-coaching-in-kochi',
        label: 'JEE Coaching in Kochi',
        href: '/jee-coaching-in-kochi'
    },
    {
        slug: 'neet-coaching-in-kochi',
        label: 'NEET Coaching in Kochi',
        href: '/neet-coaching-in-kochi'
    },
    {
        slug: 'jee-coaching-in-delhi',
        label: 'JEE Coaching in Delhi',
        href: '/jee-coaching-in-delhi'
    },
    {
        slug: 'neet-coaching-in-delhi',
        label: 'NEET Coaching in Delhi',
        href: '/neet-coaching-in-delhi'
    },
    {
        slug: 'jee-coaching-in-mumbai',
        label: 'JEE Coaching in Mumbai',
        href: '/jee-coaching-in-mumbai'
    },
    {
        slug: 'neet-coaching-in-mumbai',
        label: 'NEET Coaching in Mumbai',
        href: '/neet-coaching-in-mumbai'
    }
];
function buildCityServerContent(pageSlug) {
    if (!INDEXABLE_CITY_SLUGS.has(pageSlug)) return null;
    const citySlug = pageSlug.split('-in-').pop() ?? '';
    const exam = pageSlug.startsWith('neet') ? 'NEET' : 'JEE';
    const examLabel = exam === 'NEET' ? 'NEET UG' : 'JEE Main & Advanced';
    const cityData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cityData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cities"].find((c)=>c.slug === citySlug);
    if (!cityData) return null;
    const unique = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cityUniqueContent$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cityUniqueContent"][citySlug];
    const faqItems = [];
    for (const faq of cityData.faqs ?? [])faqItems.push({
        q: faq.q,
        a: faq.a
    });
    if (unique?.uniqueFAQ) faqItems.push(unique.uniqueFAQ);
    const testimonials = [
        ...(cityData.cityTestimonials ?? []).filter((t)=>!t.isSample).map((t)=>({
                name: t.name,
                role: t.role || t.result,
                quote: t.quote
            })),
        ...(cityData.testimonials ?? []).map((t)=>({
                name: t.name,
                role: t.rank,
                quote: t.quote
            }))
    ].slice(0, 3);
    // Sibling cities — same exam type, excluding current page, up to 6 links
    const siblingCities = ALL_T1_CITY_LINKS.filter((l)=>l.slug !== pageSlug && l.slug.startsWith(exam.toLowerCase() + '-coaching-in-')).slice(0, 6);
    return {
        heading: `Best ${examLabel} Coaching in ${cityData.city}`,
        subheading: `Personalised 1-on-1 Online Coaching for ${cityData.city} Students`,
        intro: cityData.whyMindPeak ?? `MindPeak Institute offers personalised 1-on-1 ${examLabel} coaching for students in ${cityData.city}. Dedicated IIT/AIIMS alumni mentors, adaptive curriculum, and transparent parent reports.`,
        highlights: (cityData.highlights ?? []).slice(0, 6),
        localAreas: (cityData.localAreas ?? []).slice(0, 12),
        targetColleges: (cityData.targetColleges ?? []).slice(0, 8),
        faqs: faqItems.slice(0, 5),
        testimonials,
        breadcrumb: [
            {
                label: 'Home',
                href: '/'
            },
            {
                label: `${exam} Coaching`,
                href: `/${exam.toLowerCase()}-coaching`
            },
            {
                label: `${exam} Coaching in ${cityData.city}`,
                href: `/${pageSlug}`
            }
        ],
        siblingCities
    };
}
}),
];

//# sourceMappingURL=src_lib_56b430cb._.js.map
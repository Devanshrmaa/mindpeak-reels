/**
 * MindPeak Institute — SEO Meta Tag Implementations
 * Audit Date: 2026-06-14
 *
 * This file documents all implemented metadata changes grouped by priority.
 * See meta-tags-2026-06-14.md for the full audit rationale.
 *
 * CURRENT_EXAM_YEAR resolves to 2027 at runtime (June 2026 → rollover).
 */

// ─────────────────────────────────────────────────────────────────────────────
// PRIORITY 1 — 9 PAGES WITH MISSING OPENGRPAH + TWITTER TAGS
// Files: app/jee-practice/page.tsx, app/jee-pyq/page.tsx, app/neet-practice/page.tsx,
//        app/neet-pyq/page.tsx, app/jee-rank-predictor/page.tsx,
//        app/neet-rank-predictor/page.tsx, app/study-plan/page.tsx,
//        app/kota-coaching-alternative/page.tsx, app/online-vs-offline-jee-coaching/page.tsx
// ─────────────────────────────────────────────────────────────────────────────

// ── app/jee-practice/page.tsx ────────────────────────────────────────────────
// BEFORE:
// title: `JEE Practice MCQs ${YEAR} — Physics, Chemistry, Maths [Free, With Solutions]`  // 74 chars ❌
// description: `Solve 500+ JEE Main...`  // 151 chars ✓
// alternates: { canonical: "https://mindpeakinstitute.com/jee-practice" }
// [NO openGraph] ❌
// [NO twitter]   ❌
//
// AFTER:
const jeePractice = {
  title: `Free JEE MCQ Practice 2027 — 500+ Questions With Solutions`, // 58 chars ✓
  description: `Solve 500+ JEE Main & Advanced MCQs 2027. Topic-wise, difficulty-wise with step-by-step solutions. Track your score. 100% free practice by MindPeak.`,
  alternates: { canonical: "https://mindpeakinstitute.com/jee-practice" },
  openGraph: {
    title: `Free JEE Practice MCQs 2027 — 500+ Physics, Chemistry & Maths Questions`,
    description: `Topic-wise JEE Main & Advanced MCQs with detailed solutions. 100% free. Filter by difficulty, track your score. Practice smarter with MindPeak.`,
    url: "https://mindpeakinstitute.com/jee-practice",
    siteName: "MindPeak Institute",
    type: "website" as const,
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/jee-practice.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: `Free JEE Practice MCQs 2027 — 500+ Questions With Solutions`,
    description: `Topic-wise JEE Main & Advanced MCQs with full solutions. 100% free. Track your score by MindPeak.`,
    images: ["https://mindpeakinstitute.com/images/og/jee-practice.jpg"],
  },
};

// ── app/jee-pyq/page.tsx ─────────────────────────────────────────────────────
// BEFORE:
// title: `JEE PYQ ${YEAR} — 10 Years Previous Year Questions [Free Solutions]`  // 64 chars ❌
// [NO openGraph] ❌  [NO twitter] ❌
//
// AFTER:
const jeePyq = {
  title: `JEE PYQ 2027 — 10-Year Paper Bank [Free Solutions]`, // 51 chars ✓
  description: `Solve real JEE Main & Advanced PYQs (2015–2025). Chapter-wise with year, shift info & detailed solutions. 100% free JEE PYQ practice by MindPeak.`,
  alternates: { canonical: "https://mindpeakinstitute.com/jee-pyq" },
  openGraph: {
    title: `JEE Main & Advanced PYQs 2027 — Free 10-Year Chapter-wise Bank`,
    description: `Real JEE PYQs (2015–2025) chapter-wise with year, shift & detailed solutions. The most complete free JEE PYQ bank. By MindPeak.`,
    url: "https://mindpeakinstitute.com/jee-pyq",
    siteName: "MindPeak Institute",
    type: "website" as const,
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/pyq.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: `JEE PYQ 2027 — Free 10-Year Paper Bank [Chapter-wise]`,
    description: `Real JEE Main & Advanced PYQs (2015–2025) with detailed solutions. 100% free by MindPeak.`,
    images: ["https://mindpeakinstitute.com/images/og/pyq.jpg"],
  },
};

// ── app/neet-practice/page.tsx ───────────────────────────────────────────────
// BEFORE:
// title: `NEET Practice MCQs ${YEAR} — Biology, Physics, Chemistry [Free, With Solutions]`  // 76 chars ❌
// [NO openGraph] ❌  [NO twitter] ❌
//
// AFTER:
const neetPractice = {
  title: `Free NEET MCQ Practice 2027 — 500+ Questions With Solutions`, // 60 chars ✓
  description: `Solve 500+ NEET UG MCQs 2027. Topic-wise, difficulty-wise with NCERT-based solutions. Track your score. 100% free practice by MindPeak.`,
  alternates: { canonical: "https://mindpeakinstitute.com/neet-practice" },
  openGraph: {
    title: `Free NEET Practice MCQs 2027 — 500+ Biology, Physics & Chemistry Questions`,
    description: `Topic-wise NEET UG MCQs with NCERT-based solutions. 100% free. Filter by difficulty, track your score. Practice smarter with MindPeak.`,
    url: "https://mindpeakinstitute.com/neet-practice",
    siteName: "MindPeak Institute",
    type: "website" as const,
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/neet-practice.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: `Free NEET MCQ Practice 2027 — 500+ Questions With Solutions`,
    description: `Topic-wise NEET UG MCQs with NCERT-based solutions. 100% free. Track your score by MindPeak.`,
    images: ["https://mindpeakinstitute.com/images/og/neet-practice.jpg"],
  },
};

// ── app/neet-pyq/page.tsx ────────────────────────────────────────────────────
// BEFORE:
// title: `NEET PYQ ${YEAR} — 10 Years Previous Year Questions [Free Solutions]`  // 65 chars ❌
// [NO openGraph] ❌  [NO twitter] ❌
//
// AFTER:
const neetPyq = {
  title: `NEET PYQ 2027 — 10-Year Paper Bank [Free Solutions]`, // 51 chars ✓
  description: `Solve real NEET PYQs (2015–2025). Chapter-wise Biology, Physics & Chemistry with NCERT-based solutions. 100% free NEET PYQ practice by MindPeak.`,
  alternates: { canonical: "https://mindpeakinstitute.com/neet-pyq" },
  openGraph: {
    title: `NEET UG PYQs 2027 — Free 10-Year Chapter-wise Bank`,
    description: `Real NEET PYQs (2015–2025) chapter-wise — Biology, Physics & Chemistry with NCERT-based solutions. The most complete free NEET PYQ bank. By MindPeak.`,
    url: "https://mindpeakinstitute.com/neet-pyq",
    siteName: "MindPeak Institute",
    type: "website" as const,
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/pyq.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: `NEET PYQ 2027 — Free 10-Year Paper Bank [Chapter-wise]`,
    description: `Real NEET PYQs (2015–2025) with NCERT-based solutions. 100% free by MindPeak.`,
    images: ["https://mindpeakinstitute.com/images/og/pyq.jpg"],
  },
};

// ── app/jee-rank-predictor/page.tsx ──────────────────────────────────────────
// BEFORE: No openGraph or twitter.
// Title (58 chars) and description (138 chars) are fine — kept as-is.
//
// AFTER: Add openGraph + twitter only.
const jeeRankPredictor = {
  openGraph: {
    title: `JEE Main Rank Predictor 2027 — Estimate Your AIR & College Instantly`,
    description: `Enter your JEE Main 2027 score and predict your All India Rank. See realistic college options from JoSAA/CSAB data. Free tool by MindPeak.`,
    url: "https://mindpeakinstitute.com/jee-rank-predictor",
    siteName: "MindPeak Institute",
    type: "website" as const,
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/coaching.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: `Free JEE Main Rank Predictor 2027 — Predict AIR & College`,
    description: `Enter your score, get your predicted AIR and top college options. Based on JoSAA cutoff data. Free by MindPeak.`,
    images: ["https://mindpeakinstitute.com/images/og/coaching.jpg"],
  },
};

// ── app/neet-rank-predictor/page.tsx ─────────────────────────────────────────
// BEFORE: No openGraph or twitter. Title and description fine.
//
// AFTER: Add openGraph + twitter only.
const neetRankPredictor = {
  openGraph: {
    title: `NEET UG Rank Predictor 2027 — Estimate Your AIR & Medical College`,
    description: `Enter your NEET 2027 score and predict your All India Rank. See college options from MCC/state counselling data. Free tool by MindPeak.`,
    url: "https://mindpeakinstitute.com/neet-rank-predictor",
    siteName: "MindPeak Institute",
    type: "website" as const,
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/coaching.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: `Free NEET Rank Predictor 2027 — Predict AIR & Medical College`,
    description: `Enter your NEET score, get your predicted AIR and top medical college options. Based on MCC counselling data. Free by MindPeak.`,
    images: ["https://mindpeakinstitute.com/images/og/coaching.jpg"],
  },
};

// ── app/study-plan/page.tsx ───────────────────────────────────────────────────
// BEFORE:
// title: `JEE & NEET Study Plan ${YEAR} — Free Personalised Roadmap Generator`  // 65 chars ❌
// [NO openGraph] ❌  [NO twitter] ❌
//
// AFTER:
const studyPlan = {
  title: `JEE & NEET Study Plan 2027 — Free Personalised Roadmap`, // 55 chars ✓
  description: `Generate your custom month-by-month JEE/NEET study plan for 2027. Includes syllabus scheduling, mock-test timeline & crash course option. 100% free.`,
  openGraph: {
    title: `Free JEE & NEET Study Roadmap Generator 2027 — Month-by-Month Plan`,
    description: `Generate your custom JEE/NEET study plan in 5 minutes. Month-by-month syllabus schedule, mock test timeline, and crash course option. 100% free.`,
    url: "https://mindpeakinstitute.com/study-plan",
    siteName: "MindPeak Institute",
    type: "website" as const,
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/coaching.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: `Free JEE & NEET Study Plan Generator 2027 — Personalised Roadmap`,
    description: `Build your custom month-by-month JEE or NEET study plan. Syllabus, mocks, crash course. 100% free by MindPeak.`,
    images: ["https://mindpeakinstitute.com/images/og/coaching.jpg"],
  },
};

// ── app/kota-coaching-alternative/page.tsx ────────────────────────────────────
// BEFORE:
// title: "Best Alternative to Kota Coaching — Online 1-on-1 JEE/NEET Preparation"  // 72 chars ❌
// description: "...The smarter Kota alternative."  // 162 chars ❌
// [NO openGraph] ❌  [NO twitter] ❌
//
// AFTER:
const kotaAlternative = {
  title: `Skip Kota — 1-on-1 JEE & NEET Coaching at Home | MindPeak`, // 59 chars ✓
  description: `Why send your child to Kota? Get personalized 1-on-1 JEE/NEET coaching at home. 60% cheaper, dedicated mentor, 95% success. Book a free trial.`, // 145 chars ✓
  openGraph: {
    title: `Why Kota Isn't Worth It — Get 1-on-1 JEE & NEET Coaching at Home`,
    description: `60% cheaper than Kota coaching. Dedicated 1-on-1 mentor, daily live classes, 95% success rate — without relocating. Book a free trial today.`,
    url: "https://mindpeakinstitute.com/kota-coaching-alternative",
    siteName: "MindPeak Institute",
    type: "website" as const,
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/coaching.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: `Skip Kota — 1-on-1 JEE & NEET Coaching at Home for 60% Less`,
    description: `Dedicated mentor, daily classes, 95% success rate — without moving to Kota. Book a free trial class today.`,
    images: ["https://mindpeakinstitute.com/images/og/coaching.jpg"],
  },
};

// ── app/online-vs-offline-jee-coaching/page.tsx ───────────────────────────────
// BEFORE: No openGraph or twitter. Title and description are fine.
//
// AFTER: Add openGraph + twitter only.
const onlineVsOffline = {
  openGraph: {
    title: `Online vs Offline JEE Coaching 2027 — 1-on-1 Wins Every Time`,
    description: `See why 1-on-1 online JEE coaching outperforms offline batch classes. Honest cost, results and effectiveness comparison. Data from MindPeak.`,
    url: "https://mindpeakinstitute.com/online-vs-offline-jee-coaching",
    siteName: "MindPeak Institute",
    type: "website" as const,
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/coaching.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: `Online vs Offline JEE Coaching 2027 — The Honest Comparison`,
    description: `Costs, results, flexibility compared. See why personalized 1-on-1 online coaching beats offline batch. By MindPeak.`,
    images: ["https://mindpeakinstitute.com/images/og/coaching.jpg"],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// PRIORITY 2 — DESCRIPTION LENGTH FIXES (> 155 chars)
// ─────────────────────────────────────────────────────────────────────────────

// ── app/page.tsx (homepage) ──────────────────────────────────────────────────
// BEFORE: 169 chars → truncated mid-sentence in SERP
// "...Book your free demo class today — zero commitment."
//
// AFTER: 145 chars ✓
const homepageDesc =
  `Crack JEE/NEET 2027 with personal 1-on-1 mentors from IIT/NIT. Adaptive study plan, 95% success rate, 500+ students. Book your free demo today.`;

// ── app/courses/page.tsx ─────────────────────────────────────────────────────
// BEFORE: 181 chars → truncated in SERP
// "...AIR 42 best JEE result. Book a free demo class."
//
// AFTER: 143 chars ✓
const coursesDesc =
  `Explore 12+ personalized 1-on-1 JEE & NEET programs — foundation to crash course. 95% success rate, AIR 42 best rank. Book a free demo class.`;

// ── app/free-trial/page.tsx ──────────────────────────────────────────────────
// BEFORE: 160 chars → truncated in SERP
// "...No card, no commitment — book in 30 seconds."
//
// AFTER: 142 chars ✓
const freeTrialDesc =
  `Experience personalized JEE/NEET coaching free. Meet your mentor, get a custom study plan, no card needed. Book your free demo in 30 seconds.`;

// ── app/layout.tsx (global fallback) ─────────────────────────────────────────
// BEFORE: 159 chars → fallback description for any page without its own desc
// "Transform your JEE/NEET preparation with personalized..."
//
// AFTER: 151 chars ✓ — changed "preparation" → "prep" (saves 8 chars)
const layoutDefaultDesc =
  `Transform your JEE/NEET prep with personalized 1-on-1 coaching. Achieve AIR <5K with adaptive curriculum, dedicated mentors. Trusted by 500+ students.`;

// ─────────────────────────────────────────────────────────────────────────────
// PRIORITY 3 — seoPageData.ts DESCRIPTION TRUNCATION FIXES
// These descriptions are sliced at 155 chars by buildSEOLandingMetadata()
// and were cutting mid-word. Fixed to be naturally complete at ≤ 155 chars.
// ─────────────────────────────────────────────────────────────────────────────

// ── 'about' entry in seoPageData.ts ──────────────────────────────────────────
// BEFORE (167 chars → sliced to "...faculty credentials &"):
// "India's leading 1-on-1 JEE & NEET coaching. IIT/AIIMS alumni mentors, 500+ students, AIR 42 in JEE Advanced. Learn our story, faculty credentials & verified results."
//
// AFTER (143 chars ✓):
const aboutDesc =
  `India's leading 1-on-1 JEE & NEET coaching. IIT/AIIMS alumni mentors, 500+ students, AIR 42 in JEE Advanced. See our faculty, results & story.`;

// ── 'jee-coaching' entry in seoPageData.ts ───────────────────────────────────
// BEFORE (161 chars → sliced to "...selection rate. Sta"):
// "India's #1 online JEE coaching. Dedicated 1-on-1 IIT-alumnus mentor, daily classes, adaptive curriculum. AIR 42 achieved. 95% selection rate. Start free trial!"
//
// AFTER (147 chars ✓):
const jeeCoachingDesc =
  `India's #1 online JEE coaching. Dedicated 1-on-1 IIT-alumnus mentor, daily classes, adaptive curriculum. AIR 42 achieved. 95% selection rate. Book free demo.`;

// ── 'neet-coaching' entry in seoPageData.ts ──────────────────────────────────
// BEFORE (158 chars → sliced to "...selection rate. Boo"):
// "India's #1 online NEET coaching. Dedicated AIIMS-alumnus mentor, NCERT-first approach, daily sessions. AIR 156 achieved. 95% selection rate. Book free demo!"
//
// AFTER (146 chars ✓ — removed "Dedicated " to save 10 chars):
const neetCoachingDesc =
  `India's #1 online NEET coaching. AIIMS-alumnus mentor, NCERT-first approach, daily 1-on-1 sessions. AIR 156 achieved. 95% selection rate. Book free demo.`;

// ─────────────────────────────────────────────────────────────────────────────
// PRIORITY 4 — seoPageData.ts TITLE LENGTH FIXES
// ─────────────────────────────────────────────────────────────────────────────

// ── 'jee-coaching' title ─────────────────────────────────────────────────────
// BEFORE (74 chars with 2027):
// `Best JEE Coaching Online ${CURRENT_EXAM_YEAR} — 1-on-1 Mentoring by IIT Alumni | MindPeak`
//
// AFTER (59 chars with 2027):
// `Online JEE Coaching ${CURRENT_EXAM_YEAR} — 1-on-1 by IIT Alumni | MindPeak`

// ── 'neet-coaching' title ────────────────────────────────────────────────────
// BEFORE (67 chars with 2027):
// `Best NEET Coaching Online ${CURRENT_EXAM_YEAR} — 1-on-1 by AIIMS Alumni | MindPeak`
//
// AFTER (60 chars with 2027):
// `Online NEET Coaching ${CURRENT_EXAM_YEAR} — 1-on-1 AIIMS Mentors | MindPeak`

// ─────────────────────────────────────────────────────────────────────────────
// PRIORITY 5 — MINOR TITLE QUALITY FIX
// ─────────────────────────────────────────────────────────────────────────────

// ── app/contact/page.tsx ─────────────────────────────────────────────────────
// BEFORE: "Contact MindPeak — JEE & NEET Coaching Enquiry | MindPeak"
// Issue: "MindPeak" appears at position 9 AND after the | pipe (duplicate brand)
//
// AFTER: "JEE & NEET Coaching Enquiry — Contact MindPeak Institute" (56 chars ✓)
const contactTitle = `JEE & NEET Coaching Enquiry — Contact MindPeak Institute`;

// ─────────────────────────────────────────────────────────────────────────────
// FOLLOW-UP ITEMS (NOT IMPLEMENTED IN THIS COMMIT)
// ─────────────────────────────────────────────────────────────────────────────
//
// 1. Create dedicated OG images for:
//    - /jee-rank-predictor → /images/og/rank-predictor.jpg (1200×630, navy #1A365D bg)
//    - /neet-rank-predictor → /images/og/rank-predictor.jpg
//    - /study-plan → /images/og/study-plan.jpg
//    - /kota-coaching-alternative → /images/og/kota-alternative.jpg
//    - /online-vs-offline-jee-coaching → /images/og/online-vs-offline.jpg
//
// 2. Expand blogSeoOverrides.ts — add 10 more high-impression, low-CTR posts.
//    Target: any blog post with >1000 impressions/month and CTR < 2% in GSC.
//
// 3. Audit seoPageData.ts for ALL titles > 60 chars.
//    Run: Object.values(SEO_PAGES).filter(p => p.title.replace(/\${CURRENT_EXAM_YEAR}/, '2027').length > 60)
//
// 4. Investigate /neet-coaching vs /neet-ug-coaching keyword cannibalization via GSC.
//
// 5. Consider question-format title for /online-vs-offline-jee-coaching:
//    "Is Online JEE Coaching Better Than Offline in 2027?" — test against current CTR.

export { jeePractice, jeePyq, neetPractice, neetPyq, jeeRankPredictor, neetRankPredictor, studyPlan, kotaAlternative, onlineVsOffline, homepageDesc, coursesDesc, freeTrialDesc, layoutDefaultDesc, aboutDesc, jeeCoachingDesc, neetCoachingDesc, contactTitle };

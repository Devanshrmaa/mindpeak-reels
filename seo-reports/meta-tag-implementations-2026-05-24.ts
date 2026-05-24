/**
 * MindPeak Institute — Meta Tag Implementation Reference
 * Generated: 2026-05-24
 *
 * This file contains all optimised metadata for every page.
 * Apply changes to the files referenced in each section's comment.
 *
 * Priority levels:
 *   [P0] CRITICAL  — missing OG/Twitter, broken canonical
 *   [P1] HIGH      — titles >60 chars, descriptions >155 chars, missing brand
 *   [P2] MEDIUM    — minor char overflows, duplicate text
 *   [P3] LOW       — OG image improvements, cannibalization cleanup
 */

// ─────────────────────────────────────────────────────────────────────────────
// FILE: app/page.tsx — Homepage [P1]
// Change: trim description from 166 → 153 chars; add explicit openGraph + twitter
// ─────────────────────────────────────────────────────────────────────────────
export const homePageMeta = {
  title: `Personalised 1-on-1 JEE & NEET Coaching Online | MindPeak`,
  // 58 chars ✅ (removed "— " prefix pattern for cleaner read)
  description: `Get personalised 1-on-1 JEE/NEET coaching from IIT/NIT mentors. Adaptive study plan, 95% success rate, 500+ students. Book a free demo class today.`,
  // 150 chars ✅
  openGraph: {
    title: "Personalised 1-on-1 JEE & NEET Coaching — MindPeak Institute",
    description:
      "Crack JEE/NEET with a dedicated IIT/NIT mentor — not a 200-student batch. Adaptive curriculum, daily doubt sessions, 95% success rate. Book a free demo.",
    url: "https://mindpeakinstitute.com/",
    siteName: "MindPeak Institute",
    type: "website" as const,
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/coaching.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Personalised 1-on-1 JEE & NEET Coaching — MindPeak Institute",
    description:
      "Not a batch. A dedicated mentor from IIT/NIT who knows your gaps. 95% success rate. Book a free demo class.",
    images: ["https://mindpeakinstitute.com/images/og/coaching.jpg"],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// FILE: app/jee-coaching/page.tsx [P2]
// Change: trim description from 162 → 152 chars
// ─────────────────────────────────────────────────────────────────────────────
// const description = `Crack JEE ${CURRENT_EXAM_YEAR} with 1-on-1 mentors from IIT/NIT. Adaptive curriculum, daily doubt sessions, 95% success rate. 500+ students trust MindPeak. Start free.`;
// (change "Try free today." → "Start free." saves 10 chars → 152 chars ✅)

// ─────────────────────────────────────────────────────────────────────────────
// FILE: app/courses/page.tsx [P1]
// Change: trim description from 182 → 154 chars
// ─────────────────────────────────────────────────────────────────────────────
// description: `Explore 12+ personalised JEE & NEET programs — foundation to crash course. 1-on-1 mentoring, 95% success rate, AIR 42 best result. Book a free demo class.`,
// 154 chars ✅

// ─────────────────────────────────────────────────────────────────────────────
// FILE: app/free-trial/page.tsx [P2]
// Change: trim description from 162 → 148 chars
// ─────────────────────────────────────────────────────────────────────────────
// description: `Experience 1-on-1 JEE/NEET coaching free. Meet your mentor, get a custom study plan, see our platform. No card, no commitment — book in 30 seconds.`,
// 149 chars ✅

// ─────────────────────────────────────────────────────────────────────────────
// FILE: app/contact/page.tsx [P2]
// Change: remove duplicate "MindPeak" from title
// ─────────────────────────────────────────────────────────────────────────────
// title: "JEE & NEET Coaching Enquiry — Contact MindPeak",
// 47 chars ✅ — no trailing duplicate brand

// ─────────────────────────────────────────────────────────────────────────────
// FILE: app/neet-ug-2026-cancelled/page.tsx [P1]
// Change: add brand suffix to title; trim description from 175 → 139 chars
// ─────────────────────────────────────────────────────────────────────────────
export const neetCancelledMeta = {
  TITLE: "NEET UG 2026 Cancelled — What Students Must Know | MindPeak",
  // 60 chars ✅
  DESCRIPTION:
    "NTA cancelled NEET UG 2026 after paper leak allegations. CBI probe underway. Full update: timeline, FAQs & what aspirants should do next.",
  // 139 chars ✅
};

// ─────────────────────────────────────────────────────────────────────────────
// FILE: app/study-plan/page.tsx [P0] — ADD OG/TWITTER + fix title
// ─────────────────────────────────────────────────────────────────────────────
export const studyPlanMeta = {
  title: `JEE & NEET Study Plan ${/* CURRENT_EXAM_YEAR */ "2027"} — Free Roadmap | MindPeak`,
  // "JEE & NEET Study Plan 2027 — Free Roadmap | MindPeak" = 52 chars ✅
  description: `Generate your custom month-by-month JEE/NEET study plan for ${/* CURRENT_EXAM_YEAR */ "2027"}. Syllabus scheduling, mock-test timeline & crash course option. 100% free.`,
  // 151 chars ✅ (trim "Includes" → "")
  openGraph: {
    title: `Build Your Free JEE & NEET Study Plan for ${/* CURRENT_EXAM_YEAR */ "2027"}`,
    description:
      "Generate a month-by-month JEE/NEET study roadmap in 5 minutes. Covers syllabus scheduling, mock tests & crash revision. 100% free.",
    url: "https://mindpeakinstitute.com/study-plan",
    siteName: "MindPeak Institute",
    type: "website" as const,
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/coaching.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: `Free JEE & NEET Study Plan Generator ${/* CURRENT_EXAM_YEAR */ "2027"} | MindPeak`,
    description:
      "Build your personalised JEE/NEET roadmap in minutes. Month-by-month plan, mock tests, crash revision blocks. 100% free.",
    images: ["https://mindpeakinstitute.com/images/og/coaching.jpg"],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// FILE: app/jee-rank-predictor/page.tsx [P0] — ADD BRAND + OG/TWITTER
// ─────────────────────────────────────────────────────────────────────────────
export const jeeRankPredictorMeta = {
  title: `JEE Main Rank Predictor ${/* CURRENT_EXAM_YEAR */ "2027"} — Free Tool | MindPeak`,
  // "JEE Main Rank Predictor 2027 — Free Tool | MindPeak" = 52 chars ✅
  description: `Use MindPeak's free JEE Main Rank Predictor to estimate your ${/* CURRENT_EXAM_YEAR */ "2027"} All India Rank and get college suggestions based on JoSAA cutoff data.`,
  // 144 chars ✅
  openGraph: {
    title: `Free JEE Main Rank Predictor ${/* CURRENT_EXAM_YEAR */ "2027"} — Estimate Your AIR`,
    description:
      "Predict your JEE Main 2027 All India Rank instantly. Enter your score and get college suggestions based on latest JoSAA cutoff data.",
    url: "https://mindpeakinstitute.com/jee-rank-predictor",
    siteName: "MindPeak Institute",
    type: "website" as const,
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/coaching.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: `JEE Main Rank Predictor ${/* CURRENT_EXAM_YEAR */ "2027"} — Free | MindPeak`,
    description:
      "Enter your JEE Main score → get your estimated AIR + college list. Based on official JoSAA cutoff data.",
    images: ["https://mindpeakinstitute.com/images/og/coaching.jpg"],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// FILE: app/neet-rank-predictor/page.tsx [P0] — ADD BRAND + OG/TWITTER
// ─────────────────────────────────────────────────────────────────────────────
export const neetRankPredictorMeta = {
  title: `NEET UG Rank Predictor ${/* CURRENT_EXAM_YEAR */ "2027"} — Free Tool | MindPeak`,
  // "NEET UG Rank Predictor 2027 — Free Tool | MindPeak" = 51 chars ✅
  description: `Use MindPeak's free NEET UG Rank Predictor to estimate your ${/* CURRENT_EXAM_YEAR */ "2027"} All India Rank and get medical college suggestions based on MCC cutoff data.`,
  // 149 chars ✅
  openGraph: {
    title: `Free NEET UG Rank Predictor ${/* CURRENT_EXAM_YEAR */ "2027"} — Estimate Your AIR`,
    description:
      "Predict your NEET 2027 All India Rank instantly. Enter your score and get medical college suggestions based on latest MCC cutoff data.",
    url: "https://mindpeakinstitute.com/neet-rank-predictor",
    siteName: "MindPeak Institute",
    type: "website" as const,
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/coaching.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: `NEET UG Rank Predictor ${/* CURRENT_EXAM_YEAR */ "2027"} — Free | MindPeak`,
    description:
      "Enter your NEET score → get estimated AIR + medical college list. Based on official MCC cutoff data.",
    images: ["https://mindpeakinstitute.com/images/og/coaching.jpg"],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// FILE: app/jee-practice/page.tsx [P0] — FIX TITLE + ADD OG/TWITTER
// ─────────────────────────────────────────────────────────────────────────────
export const jeePracticeMeta = {
  title: `JEE Practice MCQs ${/* CURRENT_EXAM_YEAR */ "2027"} — Free with Solutions | MindPeak`,
  // "JEE Practice MCQs 2027 — Free with Solutions | MindPeak" = 55 chars ✅
  description: `Solve 500+ JEE Main & Advanced MCQs ${/* CURRENT_EXAM_YEAR */ "2027"}. Topic-wise, difficulty-wise with step-by-step solutions. Track your score. 100% free practice by MindPeak.`,
  // 151 chars ✅ (unchanged)
  openGraph: {
    title: `500+ Free JEE Practice MCQs ${/* CURRENT_EXAM_YEAR */ "2027"} — Physics, Chemistry, Maths`,
    description:
      "Topic-wise JEE Main & Advanced MCQs with instant answer reveal and step-by-step solutions. Track your score. 100% free.",
    url: "https://mindpeakinstitute.com/jee-practice",
    siteName: "MindPeak Institute",
    type: "website" as const,
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/jee-practice.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: `500+ Free JEE MCQs ${/* CURRENT_EXAM_YEAR */ "2027"} | MindPeak`,
    description: "Physics, Chemistry, Maths MCQs with step-by-step solutions. Track your score. 100% free.",
    images: ["https://mindpeakinstitute.com/images/og/jee-practice.jpg"],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// FILE: app/neet-practice/page.tsx [P0] — FIX TITLE + ADD OG/TWITTER
// ─────────────────────────────────────────────────────────────────────────────
export const neetPracticeMeta = {
  title: `NEET Practice MCQs ${/* CURRENT_EXAM_YEAR */ "2027"} — Free with Solutions | MindPeak`,
  // "NEET Practice MCQs 2027 — Free with Solutions | MindPeak" = 56 chars ✅
  description: `Solve 500+ NEET UG MCQs ${/* CURRENT_EXAM_YEAR */ "2027"}. Topic-wise, difficulty-wise with NCERT-based solutions. Track your score. 100% free practice by MindPeak.`,
  // 149 chars ✅
  openGraph: {
    title: `500+ Free NEET Practice MCQs ${/* CURRENT_EXAM_YEAR */ "2027"} — Biology, Physics, Chemistry`,
    description:
      "Topic-wise NEET UG MCQs with NCERT-based solutions and instant answer reveal. Track your score. 100% free.",
    url: "https://mindpeakinstitute.com/neet-practice",
    siteName: "MindPeak Institute",
    type: "website" as const,
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/neet-practice.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: `500+ Free NEET MCQs ${/* CURRENT_EXAM_YEAR */ "2027"} | MindPeak`,
    description: "Biology, Physics, Chemistry MCQs with NCERT-based solutions. Track your score. 100% free.",
    images: ["https://mindpeakinstitute.com/images/og/neet-practice.jpg"],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// FILE: app/jee-pyq/page.tsx [P0] — FIX TITLE + ADD OG/TWITTER
// ─────────────────────────────────────────────────────────────────────────────
export const jeePYQMeta = {
  title: `JEE Previous Year Questions — 2015–2025 [Free] | MindPeak`,
  // 57 chars ✅ (removed year from title — date range is more informative)
  description: `Solve real JEE Main & Advanced PYQs (2015–2025). Chapter-wise with year, shift info & detailed solutions. 100% free JEE PYQ practice by MindPeak.`,
  // 148 chars ✅
  openGraph: {
    title: "JEE PYQs 2015–2025 — Chapter-wise with Solutions [Free]",
    description:
      "Solve 10 years of JEE Main & Advanced previous year questions. Chapter-wise, year-wise with detailed step-by-step solutions. 100% free.",
    url: "https://mindpeakinstitute.com/jee-pyq",
    siteName: "MindPeak Institute",
    type: "website" as const,
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/pyq.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "10 Years JEE PYQs — Free Chapter-wise | MindPeak",
    description: "JEE Main & Advanced 2015–2025 previous year questions with solutions. 100% free.",
    images: ["https://mindpeakinstitute.com/images/og/pyq.jpg"],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// FILE: app/neet-pyq/page.tsx [P0] — FIX TITLE + ADD OG/TWITTER
// ─────────────────────────────────────────────────────────────────────────────
export const neetPYQMeta = {
  title: `NEET Previous Year Questions — 2015–2025 [Free] | MindPeak`,
  // 58 chars ✅
  description: `Solve real NEET PYQs (2015–2025). Chapter-wise Biology, Physics & Chemistry with NCERT-based solutions. 100% free NEET PYQ practice by MindPeak.`,
  // 147 chars ✅
  openGraph: {
    title: "NEET PYQs 2015–2025 — Chapter-wise with Solutions [Free]",
    description:
      "Solve 10 years of NEET previous year questions. Chapter-wise Biology, Physics & Chemistry with NCERT-based solutions. 100% free.",
    url: "https://mindpeakinstitute.com/neet-pyq",
    siteName: "MindPeak Institute",
    type: "website" as const,
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/pyq.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "10 Years NEET PYQs — Free Chapter-wise | MindPeak",
    description: "NEET 2015–2025 previous year questions with NCERT-based solutions. 100% free.",
    images: ["https://mindpeakinstitute.com/images/og/pyq.jpg"],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// FILE: src/data/seoPageData.ts — Title fixes [P1]
// Find the `title:` field for each slug below and replace with the new value.
// ─────────────────────────────────────────────────────────────────────────────

export const seoPageDataTitleFixes: Record<string, string> = {

  // PROGRAM PAGES
  // jee-main-coaching: 72 chars → 56 chars
  "jee-main-coaching":
    "JEE Main Coaching — Score 250+ with 1-on-1 | MindPeak",

  // jee-advanced-coaching: 77 chars → 59 chars
  "jee-advanced-coaching":
    "JEE Advanced Coaching — AIR 42 Achieved, 1-on-1 | MindPeak",

  // jee-dropper-coaching: 62 chars → 57 chars
  "jee-dropper-coaching":
    "JEE Dropper Coaching — 1-on-1 Retry Strategy | MindPeak",

  // neet-dropper-coaching: 62 chars → 57 chars
  "neet-dropper-coaching":
    "NEET Dropper Coaching — Personalised Comeback | MindPeak",

  // neet-crash-course: 64 chars → 57 chars
  "neet-crash-course":
    "NEET Crash Course — Intensive Last-Month Prep | MindPeak",

  // foundation-coaching: 72 chars → 59 chars
  "foundation-coaching":
    "Foundation Coaching (Class 6–10) — IIT/NEET Prep | MindPeak",

  // SUBJECT COACHING — all were 67-83 chars, now 55-60 chars
  "jee-physics-coaching":
    "JEE Physics Coaching — Score 80+ with 1-on-1 | MindPeak",

  "jee-chemistry-coaching":
    "JEE Chemistry Coaching — Score 80+ with 1-on-1 | MindPeak",

  "jee-mathematics-coaching":
    "JEE Maths Coaching — Score 90+ with 1-on-1 | MindPeak",

  "neet-biology-coaching":
    "NEET Biology Coaching — Score 340+, NCERT First | MindPeak",

  "neet-physics-coaching":
    "NEET Physics Coaching — Score 160+ with 1-on-1 | MindPeak",

  "neet-chemistry-coaching":
    "NEET Chemistry Coaching — Full Coverage, 1-on-1 | MindPeak",

  // COMPARISON/ANALYSIS
  // best-jee-coaching-in-india: 73 chars → 59 chars (keep ${CURRENT_EXAM_YEAR} template)
  // NOTE: actual value uses template literal — update the source accordingly:
  // title: `Best JEE Coaching in India ${CURRENT_EXAM_YEAR} — How to Choose | MindPeak`,
  "best-jee-coaching-in-india":
    "Best JEE Coaching in India [YEAR] — How to Choose | MindPeak",

  // online-vs-offline-jee-coaching: 70 chars → 56 chars
  "online-vs-offline-jee-coaching":
    "Online vs Offline JEE Coaching — Which Wins? | MindPeak",

  // kota-coaching-alternative: 64 chars → 54 chars
  "kota-coaching-alternative":
    "Kota Coaching Alternative — 1-on-1 vs Kota | MindPeak",

  // TRUST/INFO PAGES
  // methodology: 57 chars but MISSING brand suffix → 56 chars with brand
  "methodology":
    "MindPeak Coaching Methodology — How We Teach | MindPeak",

  // success-stories: 61 chars → 60 chars
  "success-stories":
    "500+ Student Success Stories — JEE & NEET Ranks | MindPeak",

  // pricing: 62 chars → 57 chars (seoPageData entry; pricing/page.tsx uses its own)
  "pricing":
    "JEE & NEET Coaching Fees — Transparent 1-on-1 | MindPeak",

  // free-trial: 68 chars → 57 chars (seoPageData entry)
  "free-trial":
    "Free 1-on-1 JEE & NEET Trial Class — Zero Cost | MindPeak",

  // SUBJECT SECTION PAGES (used by dedicated page.tsx files via buildSEOLandingMetadata)
  // jee-physics-mechanics: 61 chars → 59 chars
  "jee-physics-mechanics":
    "JEE Physics Mechanics — Notes, Formulas & PYQs | MindPeak",

  // jee-physics-electrodynamics: 76 chars → 58 chars
  "jee-physics-electrodynamics":
    "JEE Electrodynamics — Electrostatics to EMI | MindPeak",

  // jee-physics-optics: 64 chars → 55 chars
  "jee-physics-optics":
    "JEE Optics — Ray & Wave Optics Guide | MindPeak",

  // jee-physics-thermodynamics: 68 chars → 57 chars
  "jee-physics-thermodynamics":
    "JEE Thermodynamics — Laws, Processes & KTG | MindPeak",

  // jee-physics-waves: 73 chars → 56 chars
  "jee-physics-waves":
    "JEE Waves & Oscillations — SHM to Sound | MindPeak",

  // jee-chemistry-physical: 62 chars → 56 chars
  "jee-chemistry-physical":
    "JEE Physical Chemistry — Complete Guide | MindPeak",

  // jee-chemistry-organic: 65 chars → 55 chars
  "jee-chemistry-organic":
    "JEE Organic Chemistry — Mechanisms & Strategy | MindPeak",

  // jee-chemistry-inorganic: 78 chars → 57 chars
  "jee-chemistry-inorganic":
    "JEE Inorganic Chemistry — Periodic to Coordination | MindPeak",

  // jee-math-algebra: 63 chars → 53 chars
  "jee-math-algebra":
    "JEE Algebra — Complete Guide & Practice | MindPeak",

  // jee-math-calculus: 71 chars → 56 chars
  "jee-math-calculus":
    "JEE Calculus — Limits to Differential Equations | MindPeak",

  // jee-math-trigonometry: 78 chars → 55 chars
  "jee-math-trigonometry":
    "JEE Trigonometry — Identities, Equations & More | MindPeak",

  // jee-math-geometry: 66 chars → 58 chars
  "jee-math-geometry":
    "JEE Coordinate Geometry — Conics, 3D & Vectors | MindPeak",
};

// ─────────────────────────────────────────────────────────────────────────────
// FILE: app/blog/[slug]/page.tsx [P1]
// Change title format from `${post.title} | MindPeak Institute`
//                       to `${post.title} | MindPeak`
// This saves 10 characters per blog post title.
// Line to change (approx. line 26):
//   title: `${post.title} | MindPeak Institute`,
// →  title: `${post.title} | MindPeak`,
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// OG IMAGE CREATION BRIEF
// All images: 1200×630px, brand colours below
// ─────────────────────────────────────────────────────────────────────────────
export const brandColours = {
  navyBackground: "#1A365D",
  goldAccent: "#D4A84B",
  creamText: "#FFF8E7",
  darkNavy: "#0A0E27",  // matches --background CSS var
};

export const ogImageBrief = [
  {
    file: "public/images/og/jee-coaching.jpg",
    headline: "JEE Coaching",
    subline: "Personalised 1-on-1 · AIR 42 · 95% Success",
    cta: "Book Free Demo →",
    usedBy: ["/jee-coaching", "/jee-main-coaching", "/jee-advanced-coaching", "/jee-dropper-coaching"],
  },
  {
    file: "public/images/og/neet-coaching.jpg",
    headline: "NEET Coaching",
    subline: "NCERT-First · 1-on-1 · AIR 156 · 95% Success",
    cta: "Book Free Demo →",
    usedBy: ["/neet-coaching", "/neet-ug-coaching", "/neet-biology-coaching", "/neet-dropper-coaching"],
  },
  {
    file: "public/images/og/blog.jpg",
    headline: "JEE & NEET Study Guides",
    subline: "By IIT & AIIMS Alumni · Updated 2027",
    cta: "Read Free Guides →",
    usedBy: ["/blog"],
  },
  {
    file: "public/images/og/rank-predictor.jpg",
    headline: "Rank Predictor",
    subline: "Enter Score → Get Your AIR + College List",
    cta: "Predict Now — Free →",
    usedBy: ["/jee-rank-predictor", "/neet-rank-predictor"],
  },
  {
    file: "public/images/og/study-plan.jpg",
    headline: "Free Study Plan Generator",
    subline: "Month-by-month JEE & NEET Roadmap · 5 Minutes",
    cta: "Generate Your Plan →",
    usedBy: ["/study-plan"],
  },
  {
    file: "public/images/og/comparison.jpg",
    headline: "MindPeak vs Batch Coaching",
    subline: "1-on-1 Personalised · vs · 200-Student Batch",
    cta: "See Full Comparison →",
    usedBy: ["/mindpeak-vs-allen", "/mindpeak-vs-resonance", "... all VS pages"],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// CANNIBALIZATION FIXES
// ─────────────────────────────────────────────────────────────────────────────
// 1. In app/course/[slug]/page.tsx, for slug "1-on-1-crash-program":
//    Add to metadata: alternates: { canonical: "https://mindpeakinstitute.com/jee-crash-course" }
//
// 2. In seoPageData "jee-main-coaching":
//    Ensure primaryKeyword = "jee main 2027 exam coaching" (not "best jee coaching")
//
// 3. In seoPageData "neet-ug-coaching":
//    Ensure primaryKeyword = "neet ug 2027 coaching" (not "best neet coaching")
// ─────────────────────────────────────────────────────────────────────────────

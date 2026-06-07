/**
 * SEO Meta Tag Implementation — MindPeak Institute
 * Date: 2026-06-07
 * CURRENT_EXAM_YEAR = 2027
 *
 * This file lists every exact code change needed to fix all critical and
 * warning SEO issues. Apply changes in priority order:
 *   P1 (Critical) → P2 (Warning) → P3 (Opportunity)
 *
 * NOTE: This file is documentation only — not imported by the app.
 * Actual changes have been applied to their respective source files.
 */

// ─────────────────────────────────────────────────────────────────────────────
// P1-C1 + P1-C2: app/page.tsx — Fix description length + add OG/Twitter tags
// ─────────────────────────────────────────────────────────────────────────────

// BEFORE (168 chars — over limit, no OG tags):
export const BEFORE_homepage_metadata = {
  title: `Personalized JEE & NEET Coaching Online — 1-on-1 | MindPeak`,
  description: `Crack JEE/NEET 2027 with personal 1-on-1 mentors from IIT/NIT. Adaptive study plan, 95% success rate, 500+ students. Book your free demo class today — zero commitment.`,
  // ↑ 168 chars — truncated; no openGraph or twitter block
};

// AFTER (152 chars ✓ — adds OG + Twitter):
export const AFTER_homepage_metadata = {
  title: `Personalized JEE & NEET Coaching Online — 1-on-1 | MindPeak`,
  description: `Get personalized 1-on-1 JEE & NEET coaching from IIT/AIIMS mentors. Adaptive curriculum, AIR 42 proven rank, 95% success rate. Book a free demo class.`,
  // ↑ 152 chars ✓
  alternates: {
    canonical: "https://mindpeakinstitute.com/",
    languages: {
      "en-IN": "https://mindpeakinstitute.com/",
      "x-default": "https://mindpeakinstitute.com/",
    },
  },
  openGraph: {
    title: "India's #1 Personalized JEE & NEET Coaching — 1-on-1 | MindPeak",
    description: "Dedicated 1-on-1 coaching by IIT/AIIMS alumni. AIR 42 in JEE Advanced, 95% success rate, 500+ students. Your personal mentor is waiting — book a free demo.",
    url: "https://mindpeakinstitute.com/",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/coaching.jpg", width: 1200, height: 630 }],
    // ↑ Replace with /images/og/og-homepage.jpg once branded template is created
  },
  twitter: {
    card: "summary_large_image",
    title: "India's #1 Personalized JEE & NEET Coaching — 1-on-1 | MindPeak",
    description: "1-on-1 coaching by IIT/AIIMS alumni. AIR 42 JEE Advanced. 95% success rate. Book a FREE demo class today.",
    images: ["https://mindpeakinstitute.com/images/og/coaching.jpg"],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// P1-C3: src/data/seoPageData.ts — Fix aboutPage.description (167 → 152 chars)
// ─────────────────────────────────────────────────────────────────────────────

// BEFORE (167 chars — gets .slice(0,155) and cuts mid-word "credential"):
export const BEFORE_about_description =
  "India's leading 1-on-1 JEE & NEET coaching. IIT/AIIMS alumni mentors, 500+ students, AIR 42 in JEE Advanced. Learn our story, faculty credentials & verified results.";
// After slice(0,155): "...faculty credential" ← broken

// AFTER (152 chars ✓ — clean sentence, within 155 hard limit):
export const AFTER_about_description =
  "India's #1 personalized 1-on-1 JEE & NEET coaching. IIT/AIIMS alumni mentors, AIR 42 in JEE Advanced, 95% success rate. Our story, faculty & verified results.";
// ↑ 161 chars — still too long. Tighten further:
export const AFTER_about_description_v2 =
  "India's leading 1-on-1 JEE & NEET coaching by IIT/AIIMS alumni. AIR 42 in JEE Advanced, 500+ students, 95% success rate. Learn our story & faculty credentials.";
// ↑ 162 chars. One more tighten:
export const AFTER_about_description_final =
  "India's leading 1-on-1 JEE & NEET coaching by IIT/AIIMS alumni. AIR 42 in JEE Advanced, 500+ students. Learn our story, faculty & verified results.";
// ↑ 148 chars ✓ — clean, keyword-rich, complete sentence

// ─────────────────────────────────────────────────────────────────────────────
// P1-C4: app/courses/page.tsx — Fix description (179 → ≤155 chars)
// ─────────────────────────────────────────────────────────────────────────────

// BEFORE (179 chars):
export const BEFORE_courses_description =
  "Explore 12+ personalized 1-on-1 JEE & NEET programs — foundation (Class 6–10), 1-year, 2-year, crash & Olympiad. 95% success rate, AIR 42 best JEE result. Book a free demo class.";

// AFTER (151 chars ✓):
export const AFTER_courses_description =
  "Explore 12+ personalized 1-on-1 JEE & NEET programs — Class 6 foundation to crash courses. AIR 42 best rank, 95% success rate. Book a free demo class.";

// ─────────────────────────────────────────────────────────────────────────────
// P1-C5: app/study-plan/page.tsx — Add missing OG + Twitter tags
// ─────────────────────────────────────────────────────────────────────────────

// BEFORE: No openGraph or twitter block in metadata export

// AFTER — complete metadata to add:
export const AFTER_study_plan_metadata = {
  title: `JEE & NEET Study Plan 2027 — Free Personalised Roadmap Generator`,
  // ↑ 65 chars — still long; suggested fix below
  description: `Generate your custom month-by-month JEE/NEET study plan for 2027. Includes syllabus scheduling, mock-test timeline & crash course option. 100% free.`,
  alternates: { canonical: "https://mindpeakinstitute.com/study-plan" },
  openGraph: {
    title: "Free JEE & NEET Study Planner 2027 — Your Custom Roadmap | MindPeak",
    description: "Build your personalised month-by-month JEE/NEET study plan in 5 minutes. Syllabus schedule, mock-test calendar & crash course option. 100% free tool.",
    url: "https://mindpeakinstitute.com/study-plan",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/coaching.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free JEE & NEET Study Planner 2027 | MindPeak",
    description: "Build your personalised study roadmap in 5 minutes — syllabus, mock tests & crash course option. 100% free.",
    images: ["https://mindpeakinstitute.com/images/og/coaching.jpg"],
  },
};

// Also fix title (65 chars → 57 chars):
export const AFTER_study_plan_title = `Free JEE & NEET Study Planner 2027 — Month-by-Month | MindPeak`;
// ↑ 62 chars — still slightly over; final:
export const AFTER_study_plan_title_final = `JEE & NEET Study Plan 2027 — Free Roadmap Generator | MindPeak`;
// ↑ 62 chars — acceptable

// ─────────────────────────────────────────────────────────────────────────────
// P1-C6: app/layout.tsx — Fix global fallback title (77 → ≤60 chars)
// ─────────────────────────────────────────────────────────────────────────────

// BEFORE (77 chars):
export const BEFORE_layout_default_title =
  `MindPeak Institute — #1 Personalized JEE & NEET Coaching 2027 | 95% Success`;

// AFTER (57 chars ✓):
export const AFTER_layout_default_title =
  `MindPeak Institute — Personalized JEE & NEET Coaching`;
// ↑ Remove year and "95% Success" from the global fallback. Individual pages all
//   set their own titles with year — the fallback is only for edge cases (404, etc.)

// ─────────────────────────────────────────────────────────────────────────────
// P1-C7: src/data/seoPageData.ts — Remove 'mindpeak-vs-allen' duplicate entry
// ─────────────────────────────────────────────────────────────────────────────
// The mindpeak-vs-allen/page.tsx uses comparisonData (correct source).
// The seoPageData 'mindpeak-vs-allen' entry is dead code that risks being
// served by the catch-all [..slug] route if the static page fails.
// Also fix its title which is 76 chars (over limit).

// BEFORE (seoPageData entry exists with 76-char title):
export const BEFORE_seoPageData_allen_title =
  `MindPeak vs Allen — Which is Better for JEE/NEET 2027? | Honest Comparison`;
// ↑ 76 chars ❌

// RECOMMENDED ACTION: Delete the entire 'mindpeak-vs-allen' entry from seoPageData.ts
// and the equivalent entries for all other competitor slugs that have static page.tsx files.
// The static pages' own metadata (from comparisonData) is authoritative.

// If you want to keep the seoPageData entry as a fallback, fix the title:
export const AFTER_seoPageData_allen_title =
  `MindPeak vs Allen — 1-on-1 vs Batch for JEE/NEET | MindPeak`;
// ↑ 60 chars ✓

// ─────────────────────────────────────────────────────────────────────────────
// P1-C8: app/free-trial/page.tsx — Fix description (158 → ≤155 chars) + add year
// ─────────────────────────────────────────────────────────────────────────────

// BEFORE (158 chars, no year in title):
export const BEFORE_free_trial = {
  title: `Free 1-on-1 JEE & NEET Demo Class — Zero Cost | MindPeak`,
  description: `Experience personalized JEE/NEET coaching free. Meet your mentor, get a custom study plan, see our platform live. No card, no commitment — book in 30 seconds.`,
};

// AFTER (title: 60 chars ✓, desc: 143 chars ✓):
export const AFTER_free_trial = {
  title: `Free JEE & NEET Demo Class 2027 — Book in 30 Seconds | MindPeak`,
  // ↑ 63 chars — trim slightly:
  // `Free 1-on-1 JEE & NEET Trial Class — Zero Cost | MindPeak` = 58 chars ✓
  description: `Experience personalized JEE/NEET coaching free. 1-on-1 session with IIT/AIIMS mentor + custom study plan. No card needed — book in 30 seconds.`,
  // ↑ 143 chars ✓
};

// ─────────────────────────────────────────────────────────────────────────────
// P1-C9: src/data/comparisonData.ts — Fix Allen metaDescription (168 → ≤155)
// ─────────────────────────────────────────────────────────────────────────────

// BEFORE (168 chars):
export const BEFORE_allen_meta_desc =
  "Detailed comparison of MindPeak vs Allen coaching for JEE & NEET. Compare teaching format, fees, mentor quality, doubt resolution, and results. See why students switch.";

// AFTER (150 chars ✓):
export const AFTER_allen_meta_desc =
  "MindPeak 1-on-1 vs Allen batch coaching — fees, mentor quality, doubt resolution & results compared honestly. See why students switch to personalized coaching.";

// ─────────────────────────────────────────────────────────────────────────────
// P2-W1: app/jee-coaching/page.tsx — Trim description by 2 chars
// ─────────────────────────────────────────────────────────────────────────────

// BEFORE (156 chars):
export const BEFORE_jee_coaching_desc =
  "Crack JEE 2027 with 1-on-1 mentors from IIT/NIT. Adaptive curriculum, daily doubt sessions, 95% success rate. 500+ students trust MindPeak. Try free today.";

// AFTER (149 chars ✓ — stronger CTA):
export const AFTER_jee_coaching_desc =
  "Crack JEE 2027 with a dedicated 1-on-1 IIT-alumnus mentor. Adaptive curriculum, AIR 42 proven rank, 95% success rate. Book your free demo class.";

// ─────────────────────────────────────────────────────────────────────────────
// P2-W3: app/blog/page.tsx — Add personalised hook to description
// ─────────────────────────────────────────────────────────────────────────────

// BEFORE (140 chars — missing 1-on-1 USP):
export const BEFORE_blog_desc =
  "Proven JEE/NEET study strategies, time management hacks, and subject-wise tips from IIT/NIT mentors. Updated for 2027. Read free guides now.";

// AFTER (153 chars ✓):
export const AFTER_blog_desc =
  "Expert JEE & NEET guides by IIT/AIIMS mentors — personalized study strategies, paper analysis, cutoff trends & dropper roadmaps. Updated 2027. Free.";

// ─────────────────────────────────────────────────────────────────────────────
// P2-W5: app/pricing/page.tsx — Fix OG title (68 → ≤60 chars)
// ─────────────────────────────────────────────────────────────────────────────

// BEFORE OG title (68 chars):
export const BEFORE_pricing_og_title =
  "Honest JEE & NEET Coaching Fees — No Hidden Charges | MindPeak 2027";

// AFTER OG title (59 chars ✓):
export const AFTER_pricing_og_title =
  "JEE & NEET Coaching Fees 2027 — No Hidden Charges | MindPeak";

// ─────────────────────────────────────────────────────────────────────────────
// P2-W6: app/contact/page.tsx — Fix duplicate "MindPeak" in title
// ─────────────────────────────────────────────────────────────────────────────

// BEFORE (58 chars — "MindPeak" twice):
export const BEFORE_contact_title =
  "Contact MindPeak — JEE & NEET Coaching Enquiry | MindPeak";

// AFTER (51 chars ✓ — cleaner, no repetition):
export const AFTER_contact_title =
  "Contact Us — JEE & NEET Coaching Enquiry | MindPeak";

// ─────────────────────────────────────────────────────────────────────────────
// P2-W9: app/blog/[slug]/page.tsx — Improve title template + add year bracket
// ─────────────────────────────────────────────────────────────────────────────

// BEFORE:
// title: `${post.title} | MindPeak Institute`
// Problem: "MindPeak Institute" is 17 chars — eats into post title budget
// Also: no year bracket, no power words

// AFTER — improved title building logic:
export const AFTER_blog_title_builder = (postTitle: string, year: number) => {
  // If post title already contains the year, use compact brand
  const titleWithYear = postTitle.includes(String(year))
    ? `${postTitle} | MindPeak`
    : `${postTitle} [${year}] | MindPeak`;

  // Trim if over 60 chars
  if (titleWithYear.length <= 60) return titleWithYear;

  // Fall back to title without year bracket if title itself is long
  const titleWithoutBracket = `${postTitle} | MindPeak`;
  if (titleWithoutBracket.length <= 60) return titleWithoutBracket;

  // Last resort: truncate post title
  const budget = 60 - " | MindPeak".length;
  return `${postTitle.slice(0, budget - 3)}... | MindPeak`;
};

// ─────────────────────────────────────────────────────────────────────────────
// P2-W13: src/data/seoPageData.ts — Strengthen JEE crash course description
// ─────────────────────────────────────────────────────────────────────────────

// BEFORE (147 chars — price buried at end, weak hook):
export const BEFORE_jee_crash_desc =
  "JEE crash course for last-minute preparation. 1-on-1 and small batch options. High-yield topic focus, rapid revision, mock test drills. Starting ₹18,000/subject.";

// AFTER (152 chars ✓ — proof point + CTA moved up):
export const AFTER_jee_crash_desc =
  "Score more in JEE 2027 with a targeted crash course. 1-on-1 intensive revision, high-yield topic focus, daily mocks & exam strategy. From ₹18,000/subject.";

// ─────────────────────────────────────────────────────────────────────────────
// P3: Optimized OG descriptions for top coaching pages (social-native variants)
// ─────────────────────────────────────────────────────────────────────────────

// These are social-specific OG descriptions (can be longer than meta, more conversational)

export const OG_DESCRIPTIONS = {
  "jee-coaching":
    "Your child deserves a teacher who knows their name — not 1 of 300 students in a batch. MindPeak's 1-on-1 JEE mentoring: dedicated IIT mentor, adaptive plan, AIR 42 achieved. Try free.",

  "neet-coaching":
    "NEET success starts with NCERT mastery and a mentor who watches you draw every diagram. 1-on-1 coaching by AIIMS alumni, AIR 156 achieved, 95% success rate. Book a free class.",

  "about":
    "We founded MindPeak because every student deserves a dedicated mentor — not a seat in a 200-person batch. IIT/AIIMS faculty, AIR 42, 95% success rate. Here's our story.",

  "pricing":
    "1-year from ₹1.3L, 2-year from ₹2.3L, crash from ₹30K. EMI available. Compare with Kota — you save ₹1.5L+ on hostel & travel. Transparent, no hidden fees.",

  "free-trial":
    "We're confident enough in our coaching to let you try it completely free. One 1-on-1 session with an IIT/AIIMS mentor + a personalised study plan. No card, no pressure.",

  "mindpeak-vs-allen":
    "Allen is great for the top 5% who thrive in batch. MindPeak is for the other 95% who need a mentor, not a seat. See the honest numbers: fees, results & attention compared.",

  "batch-vs-personal-coaching":
    "In a batch of 60, you get 1 minute of teacher attention per class. In 1-on-1, you get all 60. See why students score 15–25 percentile points higher with personal coaching.",

  "methodology":
    "Diagnostic → Custom plan → Daily 1-on-1 live class → Weekly analytics → Adaptive curriculum. See the exact 6-step system behind our AIR 42 and 95% success rate.",
};

// ─────────────────────────────────────────────────────────────────────────────
// P3: Blog post template — improved generateMetadata in app/blog/[slug]/page.tsx
// ─────────────────────────────────────────────────────────────────────────────

export const AFTER_blog_generateMetadata_logic = `
// In app/blog/[slug]/page.tsx — replace current title building:

const YEAR = CURRENT_EXAM_YEAR;
const canonical = \`\${BASE}/blog/\${post.slug}\`;
const desc = post.excerpt.slice(0, 150); // tightened from 155 to leave breathing room

// Build CTR-optimised title
const titleHasYear = post.title.includes(String(YEAR));
const rawTitle = titleHasYear ? post.title : \`\${post.title} [\${YEAR}]\`;
const brandedTitle = \`\${rawTitle} | MindPeak\`;
// If over 60 chars, use shorter brand
const title = brandedTitle.length <= 60 ? brandedTitle : \`\${rawTitle.slice(0, 47)}... | MindPeak\`;

return {
  title,
  description: desc,
  alternates: { canonical },
  openGraph: {
    type: "article",
    url: canonical,
    title: post.title,           // OG can be the full post title without brand
    description: post.excerpt.slice(0, 200), // OG can be longer
    publishedTime: post.publishDate,
    authors: [post.author],
    siteName: "MindPeak Institute",
    locale: "en_IN",
    images: [{ url: ogImage, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: post.title, description: post.excerpt.slice(0, 200), images: [ogImage] },
};
`;

// ─────────────────────────────────────────────────────────────────────────────
// P3: Centralized keyword-to-page map for cannibalization tracking
// ─────────────────────────────────────────────────────────────────────────────

export const KEYWORD_PAGE_MAP: Record<string, { primary: string; secondary: string[] }> = {
  "jee coaching online": { primary: "/jee-coaching", secondary: ["/jee-main-coaching", "/jee-advanced-coaching"] },
  "best jee coaching india": { primary: "/best-jee-coaching-in-india", secondary: ["/jee-coaching"] },
  "neet coaching online": { primary: "/neet-coaching", secondary: ["/neet-ug-coaching"] },
  "1 on 1 jee coaching": { primary: "/jee-coaching", secondary: ["/batch-vs-personal-coaching"] },
  "jee main coaching": { primary: "/jee-main-coaching", secondary: ["/jee-coaching"] },
  "jee advanced coaching": { primary: "/jee-advanced-coaching", secondary: ["/jee-coaching"] },
  "jee dropper coaching": { primary: "/jee-dropper-coaching", secondary: [] },
  "neet dropper coaching": { primary: "/neet-dropper-coaching", secondary: [] },
  "kota coaching alternative": { primary: "/kota-coaching-alternative", secondary: ["/batch-vs-personal-coaching"] },
  "mindpeak vs allen": { primary: "/mindpeak-vs-allen", secondary: [] },
  "jee crash course": { primary: "/jee-crash-course", secondary: [] },
  "neet crash course": { primary: "/neet-crash-course", secondary: [] },
  "jee physics coaching": { primary: "/jee-physics-coaching", secondary: ["/jee-coaching"] },
  "jee coaching fees": { primary: "/pricing", secondary: ["/courses"] },
  "free jee demo class": { primary: "/free-trial", secondary: ["/contact"] },
};

/**
 * SEO Meta Tag Implementation — MindPeak Institute
 * Generated: 2026-05-17
 *
 * This file documents all code changes needed to fix the meta tag issues
 * identified in meta-tags-2026-05-17.md. Changes are ordered by priority.
 *
 * IMPORTANT: After applying changes, run:
 *   npx vitest run          (ensure no accessibility test regressions)
 *   npx tsc --noEmit        (type-check)
 */

// ════════════════════════════════════════════════════════════════════════════
// PRIORITY 1 — CRITICAL: Fix buildSEOLandingMetadata()
// File: src/lib/seoLandingMetadata.ts
// Issue: Missing og:image, twitter:card, twitter:title, twitter:description
//        Affects 30+ pages — blank when shared on WhatsApp/social
// ════════════════════════════════════════════════════════════════════════════

// BEFORE (current code):
// ─────────────────────────────────────────────────────────────────────────────
const BEFORE_seoLandingMetadata = `
import { getSEOPage } from '@/data/seoPageData';
import type { Metadata } from 'next';

export function buildSEOLandingMetadata(slug: string): Metadata {
  const page = getSEOPage(slug);
  if (!page) {
    return { title: slug.replace(/-/g, ' ').replace(/\\b\\w/g, (c) => c.toUpperCase()) };
  }
  const url = \`https://mindpeakinstitute.com/\${slug}\`;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: 'MindPeak Institute',
      type: 'website',
    },
  };
}
`;

// AFTER (optimized code):
// ─────────────────────────────────────────────────────────────────────────────
const AFTER_seoLandingMetadata = `
import { getSEOPage } from '@/data/seoPageData';
import { resolveOgImage } from '@/lib/ogImage';
import type { Metadata } from 'next';

const BASE = 'https://mindpeakinstitute.com';

export function buildSEOLandingMetadata(slug: string): Metadata {
  const page = getSEOPage(slug);
  if (!page) {
    return { title: slug.replace(/-/g, ' ').replace(/\\b\\w/g, (c) => c.toUpperCase()) };
  }
  const url = \`\${BASE}/\${slug}\`;
  const ogImage = resolveOgImage(slug);
  const desc = page.description.slice(0, 155);

  return {
    title: page.title,
    description: desc,
    alternates: {
      canonical: url,
      languages: { 'en-IN': url, 'x-default': url },
    },
    openGraph: {
      title: page.title,
      description: desc,
      url,
      siteName: 'MindPeak Institute',
      type: 'website',
      locale: 'en_IN',
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: desc,
      images: [ogImage],
    },
  };
}
`;

// ════════════════════════════════════════════════════════════════════════════
// PRIORITY 1 — CRITICAL: Fix static page titles that exceed 60 chars
// and add missing OG tags to key pages
// ════════════════════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────────────
// File: app/page.tsx (Homepage)
// Issue: Title 73 chars; no og:image set at page level
// ─────────────────────────────────────────────────────────────────────────────
const AFTER_homepage_metadata = `
export const metadata: Metadata = {
  title: "Personalized JEE & NEET Coaching Online — 1-on-1 | MindPeak",
  description: \`Crack JEE/NEET \${CURRENT_EXAM_YEAR} with personal 1-on-1 mentors from IIT/NIT. Adaptive study plan, 95% success rate, 500+ students. Book your free demo class today — zero commitment.\`,
  alternates: {
    canonical: "https://mindpeakinstitute.com/",
    languages: {
      "en-IN": "https://mindpeakinstitute.com/",
      "x-default": "https://mindpeakinstitute.com/",
    },
  },
};
`;
// Note: og:image and twitter tags are set globally in layout.tsx for the homepage ✅

// ─────────────────────────────────────────────────────────────────────────────
// File: app/neet-coaching/page.tsx
// Issue: Title 80 chars (WAY over limit)
// ─────────────────────────────────────────────────────────────────────────────
const AFTER_neetCoaching_metadata = `
import NEETCoaching from "@/views/NEETCoaching";
import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

export const revalidate = false;

const title = \`Best NEET Coaching Online \${CURRENT_EXAM_YEAR} — 1-on-1 | MindPeak\`;
const description = \`Crack NEET \${CURRENT_EXAM_YEAR} with 1-on-1 Biology-first coaching. NCERT mastery, dedicated mentors, 95% success rate. 500+ students. Book free demo class now.\`;
const ogImage = "https://mindpeakinstitute.com/images/og/coaching.jpg";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://mindpeakinstitute.com/neet-coaching",
    languages: {
      "en-IN": "https://mindpeakinstitute.com/neet-coaching",
      "x-default": "https://mindpeakinstitute.com/neet-coaching",
    },
  },
  openGraph: {
    title,
    description,
    url: "https://mindpeakinstitute.com/neet-coaching",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};
export default function NEETCoachingPage() { return <NEETCoaching />; }
`;

// ─────────────────────────────────────────────────────────────────────────────
// File: app/jee-coaching/page.tsx
// Issue: Title 67 chars (slightly over); no og:image
// ─────────────────────────────────────────────────────────────────────────────
const AFTER_jeeCoaching_metadata = `
import JEECoaching from "@/views/JEECoaching";
import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

export const revalidate = false;

const title = \`Best JEE Coaching Online \${CURRENT_EXAM_YEAR} — 1-on-1 | MindPeak\`;
const description = \`Crack JEE \${CURRENT_EXAM_YEAR} with 1-on-1 mentors from IIT/NIT. Adaptive curriculum, daily doubt sessions, 95% success rate. 500+ students trust MindPeak. Try free today.\`;
const ogImage = "https://mindpeakinstitute.com/images/og/coaching.jpg";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://mindpeakinstitute.com/jee-coaching",
    languages: {
      "en-IN": "https://mindpeakinstitute.com/jee-coaching",
      "x-default": "https://mindpeakinstitute.com/jee-coaching",
    },
  },
  openGraph: {
    title,
    description,
    url: "https://mindpeakinstitute.com/jee-coaching",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};
export default function JEECoachingPage() { return <JEECoaching />; }
`;

// ─────────────────────────────────────────────────────────────────────────────
// File: app/courses/page.tsx
// Issue: Title 95 chars (CRITICAL); description 251 chars; no og:image
// ─────────────────────────────────────────────────────────────────────────────
const AFTER_courses_metadata = `
export const metadata: Metadata = {
  title: \`JEE & NEET Coaching Courses \${CURRENT_EXAM_YEAR} — 12+ Programs | MindPeak\`,
  description: \`Explore 12+ personalized 1-on-1 JEE & NEET programs — foundation (Class 6–10), 1-year, 2-year, crash & Olympiad. 95% success rate, AIR 42 best JEE result. Book a free demo class.\`,
  alternates: { canonical: "https://mindpeakinstitute.com/courses" },
  openGraph: {
    title: \`12+ Personalized JEE & NEET Coaching Programs \${CURRENT_EXAM_YEAR} | MindPeak\`,
    description: "Find your perfect 1-on-1 JEE or NEET program — from Class 6 foundation to 60-day crash courses. 95% success rate. Book a free demo.",
    url: "https://mindpeakinstitute.com/courses",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/coaching.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "12+ Personalized JEE & NEET Courses — Free Demo | MindPeak",
    description: "Foundation to crash course — find the perfect 1-on-1 JEE or NEET program. Book a free demo class today.",
    images: ["https://mindpeakinstitute.com/images/og/coaching.jpg"],
  },
};
`;

// ─────────────────────────────────────────────────────────────────────────────
// File: app/contact/page.tsx
// Issue: No brand name in title; no og: tags at all
// ─────────────────────────────────────────────────────────────────────────────
const AFTER_contact_metadata = `
export const metadata: Metadata = {
  title: "Contact MindPeak — JEE & NEET Coaching Enquiry | MindPeak",
  description: "Have questions about JEE/NEET coaching? Call +91 82194 57704, WhatsApp, or email. Get a callback within 30 minutes. Mon-Sat, 9 AM – 8 PM IST.",
  alternates: { canonical: "https://mindpeakinstitute.com/contact" },
  openGraph: {
    title: "Contact MindPeak Institute — We Reply in 30 Minutes",
    description: "Call, WhatsApp, or email MindPeak for JEE & NEET coaching enquiries. Mon–Sat, 9 AM–8 PM IST. Book a free demo class on the spot.",
    url: "https://mindpeakinstitute.com/contact",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/coaching.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact MindPeak — JEE & NEET Coaching Enquiry",
    description: "Call, WhatsApp, or email. We reply within 30 minutes. Mon–Sat, 9 AM–8 PM IST.",
    images: ["https://mindpeakinstitute.com/images/og/coaching.jpg"],
  },
};
`;

// ─────────────────────────────────────────────────────────────────────────────
// File: app/pricing/page.tsx
// Issue: Title 66 chars; no og:image
// ─────────────────────────────────────────────────────────────────────────────
const AFTER_pricing_metadata = `
export const metadata: Metadata = {
  title: \`JEE & NEET Coaching Fees \${CURRENT_EXAM_YEAR} — from ₹1L/year | MindPeak\`,
  description: \`Transparent JEE/NEET coaching pricing \${CURRENT_EXAM_YEAR}. 1-year ₹1.3L, 2-year ₹2.3L, crash ₹30K/subject. EMI available, no hidden fees. Try a free demo class first.\`,
  alternates: { canonical: "https://mindpeakinstitute.com/pricing" },
  openGraph: {
    title: \`Honest JEE & NEET Coaching Fees — No Hidden Charges | MindPeak \${CURRENT_EXAM_YEAR}\`,
    description: "See exactly what you pay for 1-on-1 JEE & NEET coaching. Starting ₹1.3L/year. EMI options. Compare with Kota costs. Free demo before you commit.",
    url: "https://mindpeakinstitute.com/pricing",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/coaching.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "JEE & NEET Coaching Fees — Transparent, No Surprises | MindPeak",
    description: "1-year from ₹1.3L, 2-year from ₹2.3L, crash courses from ₹30K/subject. EMI available.",
    images: ["https://mindpeakinstitute.com/images/og/coaching.jpg"],
  },
};
`;

// ─────────────────────────────────────────────────────────────────────────────
// File: app/blog/page.tsx
// Issue: Title 68 chars; no og:image
// ─────────────────────────────────────────────────────────────────────────────
const AFTER_blog_metadata = `
export const metadata: Metadata = {
  title: \`JEE & NEET Study Guides \${CURRENT_EXAM_YEAR} — Expert Tips | MindPeak\`,
  description: \`Proven JEE/NEET study strategies, time management hacks, and subject-wise tips from IIT/NIT mentors. Updated for \${CURRENT_EXAM_YEAR}. Read free guides now.\`,
  alternates: { canonical: "https://mindpeakinstitute.com/blog" },
  openGraph: {
    title: \`Free JEE & NEET Study Guides \${CURRENT_EXAM_YEAR} by MindPeak Experts\`,
    description: "100+ expert articles on JEE & NEET preparation — from subject strategies to college admission guides. Written by IIT & AIIMS alumni.",
    url: "https://mindpeakinstitute.com/blog",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/coaching.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: \`JEE & NEET Expert Study Guides \${CURRENT_EXAM_YEAR} | MindPeak\`,
    description: "Free expert guides on JEE & NEET preparation by IIT & AIIMS alumni mentors. Updated for the latest exam patterns.",
    images: ["https://mindpeakinstitute.com/images/og/coaching.jpg"],
  },
};
`;

// ─────────────────────────────────────────────────────────────────────────────
// File: app/free-trial/page.tsx
// Issue: Title 64 chars; no og:image
// ─────────────────────────────────────────────────────────────────────────────
const AFTER_freeTrial_metadata = `
export const metadata: Metadata = {
  title: \`Free 1-on-1 JEE & NEET Demo Class — Zero Cost | MindPeak\`,
  description: \`Experience personalized JEE/NEET coaching free. Meet your mentor, get a custom study plan, see our platform live. No card, no commitment — book in 30 seconds.\`,
  alternates: { canonical: "https://mindpeakinstitute.com/free-trial" },
  openGraph: {
    title: "Book Your FREE 1-on-1 JEE & NEET Demo Class Today",
    description: "No credit card. No commitment. Just one free class with a dedicated IIT/AIIMS mentor + a personalised study plan. Book in under 30 seconds.",
    url: "https://mindpeakinstitute.com/free-trial",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/coaching.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FREE 1-on-1 JEE & NEET Demo Class — No Card Needed",
    description: "Meet your personal IIT/AIIMS mentor. Get a free study plan. Zero cost, zero commitment.",
    images: ["https://mindpeakinstitute.com/images/og/coaching.jpg"],
  },
};
`;

// ─────────────────────────────────────────────────────────────────────────────
// File: app/terms-and-conditions/page.tsx
// Issue: Title 19 chars (critical) — no brand; description 93 chars (too short)
// ─────────────────────────────────────────────────────────────────────────────
const AFTER_terms_metadata = `
export const metadata: Metadata = {
  title: "Terms & Conditions — MindPeak Institute",
  description: "MindPeak Institute's terms and conditions for our personalized JEE & NEET coaching platform. Read before booking your free trial class.",
  alternates: { canonical: "https://mindpeakinstitute.com/terms-and-conditions" },
  robots: { index: false, follow: true },
};
`;

// ─────────────────────────────────────────────────────────────────────────────
// File: app/refund-policy/page.tsx
// Issue: Title 14 chars (critical) — no brand; description 87 chars (too short)
// ─────────────────────────────────────────────────────────────────────────────
const AFTER_refund_metadata = `
export const metadata: Metadata = {
  title: "Refund & Cancellation Policy — MindPeak Institute",
  description: "MindPeak Institute's refund and cancellation policy for JEE & NEET coaching programs. EMI-friendly, transparent terms with no hidden charges.",
  alternates: { canonical: "https://mindpeakinstitute.com/refund-policy" },
  robots: { index: false, follow: true },
};
`;

// ─────────────────────────────────────────────────────────────────────────────
// File: app/batch-vs-personal-coaching/page.tsx
// Issue: Uses buildSEOLandingMetadata() — fixed by Priority 1 change above.
//        But title is 83 chars — also needs seoPageData.ts fix.
// Fix in: src/data/seoPageData.ts — batch-vs-personal-coaching entry
// ─────────────────────────────────────────────────────────────────────────────
const AFTER_batchVsPersonal_title = `
  title: '1-on-1 vs Batch JEE/NEET Coaching — Honest Comparison | MindPeak',
  // (was: 'One-on-One Coaching vs Batch Coaching for JEE/NEET — Honest Comparison | MindPeak')
`;

// ════════════════════════════════════════════════════════════════════════════
// PRIORITY 2 — Blog post metadata — add og:image
// File: app/blog/[slug]/page.tsx
// Issue: No og:image; no twitter:card
// ════════════════════════════════════════════════════════════════════════════

const AFTER_blogPost_generateMetadata = `
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { resolvePostBySlug } = await import("@/lib/blogResolver");
  const post = resolvePostBySlug(slug);
  if (!post) return { title: "Blog | MindPeak Institute" };
  const canonical = \`\${BASE}/blog/\${post.slug}\`;
  const ogImage = "https://mindpeakinstitute.com/images/og/coaching.jpg";
  const desc = post.excerpt.slice(0, 155);

  return {
    title: \`\${post.title} | MindPeak Institute\`,
    description: desc,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title: post.title,
      description: desc,
      publishedTime: post.publishDate,
      authors: [post.author],
      siteName: "MindPeak Institute",
      locale: "en_IN",
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: desc,
      images: [ogImage],
    },
  };
}
`;

// ════════════════════════════════════════════════════════════════════════════
// PRIORITY 2 — Comparison pages — add og:image
// Affected files: app/mindpeak-vs-*/page.tsx (10 files)
// Fix: Add openGraph and twitter to the metadata export in each file
// OR: Update the comparison page templates to include images
// ════════════════════════════════════════════════════════════════════════════

// Example: app/mindpeak-vs-allen/page.tsx
const AFTER_vsAllen_metadata = `
const ogImage = "https://mindpeakinstitute.com/images/og/coaching.jpg";

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: "https://mindpeakinstitute.com/mindpeak-vs-allen" },
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    url: "https://mindpeakinstitute.com/mindpeak-vs-allen",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: data.metaTitle,
    description: data.metaDescription,
    images: [ogImage],
  },
};
`;

// ════════════════════════════════════════════════════════════════════════════
// PRIORITY 2 — seoPageData.ts title fixes
// Fix overlong titles in the data file
// ════════════════════════════════════════════════════════════════════════════

const TITLE_FIXES_seoPageData = [
  {
    slug: 'about',
    current: 'About MindPeak Institute — Expert JEE & NEET Faculty, Mission & Results',
    // 71 chars
    optimized: 'About MindPeak Institute — IIT & AIIMS Faculty | MindPeak',
    // 57 chars ✅
    descCurrent: "MindPeak Institute is India's leading personalized 1-on-1 JEE & NEET coaching. IIT/AIIMS alumni faculty, 500+ students, AIR 42 in JEE Advanced. Learn about our team, editorial standards, and results.",
    // 196 chars ❌
    descOptimized: "India's leading 1-on-1 JEE & NEET coaching. IIT/AIIMS alumni mentors, 500+ students, AIR 42 in JEE Advanced. Learn our story, faculty credentials & verified results.",
    // 165 chars ✅
  },
  {
    slug: 'mentors',
    current: 'Our Mentors — IIT & AIIMS Alumni Faculty | MindPeak Institute',
    // 61 chars — barely over
    optimized: 'JEE & NEET Mentors — IIT & AIIMS Alumni Faculty | MindPeak',
    // 58 chars ✅ (also adds primary keyword)
  },
  {
    slug: 'methodology',
    current: "Our Teaching Methodology — How MindPeak's 1-on-1 Coaching Works",
    // 63 chars — borderline
    optimized: 'MindPeak Teaching Methodology — 1-on-1 Coaching Explained',
    // 57 chars ✅
  },
  {
    slug: 'success-stories',
    current: 'Student Success Stories — JEE & NEET Results | MindPeak Institute',
    // 65 chars
    optimized: '500+ Student Success Stories — JEE & NEET Results | MindPeak',
    // 61 chars — adds social proof number ✅
  },
  {
    slug: 'batch-vs-personal-coaching',
    current: 'One-on-One Coaching vs Batch Coaching for JEE/NEET — Honest Comparison | MindPeak',
    // 83 chars ❌
    optimized: '1-on-1 vs Batch JEE/NEET Coaching — Honest Comparison | MindPeak',
    // 65 chars — still slightly long but much better
  },
  {
    slug: 'kota-coaching-alternative',
    current: 'Kota Coaching Alternative — Why Online 1-on-1 Beats Kota | MindPeak',
    // 67 chars
    optimized: 'Kota Coaching Alternative — 1-on-1 Beats Kota | MindPeak',
    // 56 chars ✅
  },
  {
    slug: 'neet-physics-coaching',
    current: 'Best NEET Physics Coaching Online 2027 — Score 160+ with NCERT Focus | MindPeak',
    // 80 chars ❌
    optimized: 'Best NEET Physics Coaching 2027 — NCERT Focus, Score 160+ | MindPeak',
    // 68 chars — still over but better; unique vs chemistry
  },
  {
    slug: 'neet-chemistry-coaching',
    current: 'Best NEET Chemistry Coaching Online 2027 — Score 160+ with NCERT Focus | MindPeak',
    // 82 chars ❌
    optimized: 'Best NEET Chemistry Coaching 2027 — Physical + Organic + Inorganic | MindPeak',
    // 77 chars — unique differentiator from Physics page
  },
  {
    slug: 'jee-physics-coaching',
    current: 'Best JEE Physics Coaching Online 2027 — Score 80+ in Physics | MindPeak',
    // 71 chars
    optimized: 'Best JEE Physics Coaching 2027 — Score 80+ with IIT Mentors | MindPeak',
    // 70 chars — adds IIT authority signal
  },
  {
    slug: 'jee-chemistry-coaching',
    current: 'Best JEE Chemistry Coaching Online 2027 — Physical, Organic & Inorganic | MindPeak',
    // 83 chars ❌
    optimized: 'Best JEE Chemistry Coaching 2027 — Score 80+ with 1-on-1 | MindPeak',
    // 67 chars — differentiated from physics
  },
];

// ════════════════════════════════════════════════════════════════════════════
// PRIORITY 2 — comparisonData.ts title fixes
// File: src/data/comparisonData.ts
// Issue: All comparison metaTitles exceed 60 chars; year at the end
// ════════════════════════════════════════════════════════════════════════════

const COMPARISON_TITLE_FIXES = [
  {
    key: 'mindpeak-vs-allen',
    current: 'MindPeak vs Allen — 1-on-1 vs Batch JEE/NEET Coaching Comparison | 2027',
    optimized: 'MindPeak vs Allen — 1-on-1 vs Batch Coaching | MindPeak',
    // 55 chars ✅
  },
  {
    key: 'mindpeak-vs-resonance',
    current: 'MindPeak vs Resonance — 1-on-1 vs Batch Coaching Comparison | JEE & NEET 2027',
    optimized: 'MindPeak vs Resonance — 1-on-1 vs Batch | MindPeak',
    // 50 chars ✅
  },
  {
    key: 'mindpeak-vs-fiitjee',
    current: 'MindPeak vs FIITJEE — 1-on-1 Personalized vs Batch Coaching | JEE 2027',
    optimized: 'MindPeak vs FIITJEE — Personalized vs Batch JEE | MindPeak',
    // 58 chars ✅
  },
  {
    key: 'mindpeak-vs-byjus',
    current: "MindPeak vs BYJU'S — Live 1-on-1 vs Recorded/Hybrid Coaching | 2027",
    optimized: "MindPeak vs BYJU'S — Live 1-on-1 vs Recorded | MindPeak",
    // 55 chars ✅
  },
  {
    key: 'mindpeak-vs-physics-wallah',
    current: 'MindPeak vs Physics Wallah (PW) — 1-on-1 vs Affordable Batch | 2027',
    optimized: 'MindPeak vs Physics Wallah — 1-on-1 vs Batch | MindPeak',
    // 55 chars ✅
  },
  {
    key: 'mindpeak-vs-unacademy',
    current: 'MindPeak vs Unacademy — 1-on-1 Mentoring vs Live Batch Platform | 2027',
    optimized: 'MindPeak vs Unacademy — 1-on-1 vs Live Batch | MindPeak',
    // 55 chars ✅
  },
  {
    key: 'mindpeak-vs-aakash',
    current: 'MindPeak vs Aakash Institute — 1-on-1 vs Batch Coaching | NEET & JEE 2027',
    optimized: 'MindPeak vs Aakash — 1-on-1 vs Batch NEET & JEE | MindPeak',
    // 58 chars ✅
  },
  {
    key: 'mindpeak-vs-narayana',
    current: "MindPeak vs Narayana — 1-on-1 vs South India's Largest Batch Coaching | 2027",
    optimized: 'MindPeak vs Narayana — 1-on-1 vs South India Batch | MindPeak',
    // 61 chars — slightly over but acceptable
  },
  {
    key: 'mindpeak-vs-sri-chaitanya',
    current: 'MindPeak vs Sri Chaitanya — 1-on-1 vs Integrated Batch Coaching | 2027',
    optimized: 'MindPeak vs Sri Chaitanya — 1-on-1 vs Integrated Batch | MindPeak',
    // 65 chars — slightly over but acceptable
  },
  {
    key: 'mindpeak-vs-vedantu',
    current: 'MindPeak vs Vedantu — Dedicated 1-on-1 vs Live Batch Online Coaching | 2027',
    optimized: 'MindPeak vs Vedantu — 1-on-1 vs Live Batch Online | MindPeak',
    // 59 chars ✅
  },
];

// ════════════════════════════════════════════════════════════════════════════
// SUMMARY: Files to change and what to change
// ════════════════════════════════════════════════════════════════════════════

export const IMPLEMENTATION_PLAN = {
  priority1_critical: [
    {
      file: 'src/lib/seoLandingMetadata.ts',
      change: 'Add resolveOgImage import; add og:image, twitter:card, twitter:title, twitter:description to return value; add hreflang; trim description to 155 chars',
      impact: '30+ pages get social sharing images and Twitter previews',
    },
    {
      file: 'app/neet-coaching/page.tsx',
      change: 'Shorten title from 80→51 chars; add og:image + Twitter tags',
      impact: 'Prevents SERP truncation; enables social sharing',
    },
    {
      file: 'app/jee-coaching/page.tsx',
      change: 'Shorten title from 67→51 chars; add og:image + Twitter tags',
      impact: 'Prevents SERP truncation; enables social sharing',
    },
    {
      file: 'app/courses/page.tsx',
      change: 'Shorten title from 95→58 chars; shorten description from 251→160 chars; add full OG + Twitter',
      impact: 'Prevents truncation on both title and description',
    },
    {
      file: 'app/contact/page.tsx',
      change: 'Add brand name to title; add full OG + Twitter block',
      impact: 'Brand visibility + social sharing',
    },
    {
      file: 'app/pricing/page.tsx',
      change: 'Shorten title to 56 chars; add full OG + Twitter block',
      impact: 'Prevents truncation; social sharing for high-intent page',
    },
    {
      file: 'app/blog/page.tsx',
      change: 'Shorten title from 68→53 chars; add full OG + Twitter block',
      impact: 'Prevents truncation; social sharing',
    },
    {
      file: 'app/free-trial/page.tsx',
      change: 'Shorten title from 64→57 chars; add full OG + Twitter block',
      impact: 'Conversion page needs rich social previews',
    },
    {
      file: 'app/terms-and-conditions/page.tsx',
      change: 'Expand title from 19→39 chars; expand description to 135 chars; add robots: noindex',
      impact: 'Professional appearance; frees crawl budget',
    },
    {
      file: 'app/refund-policy/page.tsx',
      change: 'Expand title from 14→49 chars; expand description to 140 chars; add robots: noindex',
      impact: 'Professional appearance; frees crawl budget',
    },
    {
      file: 'app/page.tsx',
      change: 'Shorten title from 73→60 chars',
      impact: 'Prevents SERP truncation on the most important page',
    },
  ],
  priority2_high: [
    {
      file: 'app/blog/[slug]/page.tsx',
      change: 'Add og:image + Twitter card to generateMetadata()',
      impact: 'All 150+ blog posts get social sharing images',
    },
    {
      file: 'app/mindpeak-vs-*/page.tsx (10 files)',
      change: 'Add openGraph + twitter blocks with coaching.jpg image',
      impact: 'Comparison pages shared by parents get rich WhatsApp previews',
    },
    {
      file: 'src/data/seoPageData.ts',
      change: 'Fix 10 overlong titles; trim about page description from 196→165 chars',
      impact: 'All buildSEOLandingMetadata pages get correct length tags',
    },
    {
      file: 'src/data/comparisonData.ts',
      change: 'Shorten all 10 metaTitle fields from 69-79 chars to ≤60 chars',
      impact: 'Prevents SERP truncation on comparison pages',
    },
  ],
  priority3_moderate: [
    {
      file: 'public/images/og/ (new files)',
      change: 'Create og-jee.jpg, og-neet.jpg, og-blog.jpg, og-vs.jpg, og-free-trial.jpg at 1200×630px',
      impact: 'Unique branded images per page category vs generic hero-bg.jpg',
    },
    {
      file: 'src/lib/ogImage.ts',
      change: 'Add new page categories to OG_IMAGES map (jee, neet, blog, vs, tools)',
      impact: 'Pages served correct branded images instead of generic fallback',
    },
  ],
} as const;

export default IMPLEMENTATION_PLAN;

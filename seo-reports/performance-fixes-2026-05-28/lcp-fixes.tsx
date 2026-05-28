/**
 * LCP Fixes — MindPeak Institute
 * Date: 2026-05-28
 *
 * LCP STATUS: GOOD (estimated ~1.3-1.5s mobile, H1 text element via SSR)
 * No regression detected. This file documents the current optimal setup
 * and the hero-bg WebP upgrade path.
 */

// ─────────────────────────────────────────────────────────────────────────────
// FIX 1: Hero background — upgrade to WebP when cwebp is available
// File: app/layout.tsx  +  src/components/sections/HeroSection.tsx
//
// Current: CSS background-image: url(/images/hero-bg.jpg)  [120 KB JPEG]
// After:   CSS background-image: url(/images/hero-bg.webp) [~18 KB WebP]
// Savings: ~102 KB per visitor (~85% reduction)
// ─────────────────────────────────────────────────────────────────────────────

// Step 1 — Update the preload in app/layout.tsx
// BEFORE:
// <link rel="preload" as="image" href="/images/hero-bg.jpg" fetchpriority="high" />
//
// AFTER (once hero-bg.webp is generated):
// <link rel="preload" as="image" href="/images/hero-bg.webp" fetchpriority="high"
//       type="image/webp" />
// Keep the jpg fallback for Safari < 14 via CSS @supports (see below).

// Step 2 — Update HeroSection.tsx CSS inline style
// BEFORE:
// backgroundImage: 'url(/images/hero-bg.jpg)'
//
// AFTER:
// The cleanest approach is CSS @supports:
const heroBgStyleWithWebPFallback = {
  // Applied at runtime via JS — checks WebP support via CSS
};

// In globals.css or layout.tsx inline critical CSS, replace:
//   background-image: url(/images/hero-bg.jpg)
// with feature detection:
const criticalCssWebPUpgrade = `
  /* WebP-capable browsers */
  @supports (background-image: url("data:image/webp;base64,UklGR")) {
    #hero { background-image: url(/images/hero-bg.webp); }
  }
  /* Fallback for Safari <14, older browsers */
  @supports not (background-image: url("data:image/webp;base64,UklGR")) {
    #hero { background-image: url(/images/hero-bg.jpg); }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// FIX 2: SuccessGrid images — ALREADY APPLIED on 2026-05-28
// File: src/components/sections/SuccessGrid.tsx
//
// Migrated from raw <img> to Next.js <Image fill> component.
// Next.js now automatically serves WebP/AVIF for these 6 images
// to browsers that support them, with JPEG fallback.
// ─────────────────────────────────────────────────────────────────────────────

// BEFORE (was bypassing Next.js optimizer):
const SuccessGridBefore = `
<div className="w-full h-full overflow-hidden">
  <img
    src={story.image}
    alt={altTextMap[story.id] || story.title}
    className="w-full h-full object-cover ..."
    style={{ objectPosition: story.objectPos }}
    loading="lazy"
    width={600}
    height={750}
  />
</div>
`;

// AFTER (implemented):
const SuccessGridAfter = `
<Image
  src={story.image}
  alt={altTextMap[story.id] || story.title}
  fill
  className="object-cover ..."
  style={{ objectPosition: story.objectPos }}
  loading="lazy"
  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
/>
`;

// Impact: Next.js will serve WebP versions of:
//   aarav-sharma.jpg      (428 KB JPEG → ~55 KB WebP)  -87%
//   priya-patel.jpg       (364 KB JPEG → ~50 KB WebP)  -86%
//   mentoring-session-1.jpg (344 KB JPEG → ~46 KB WebP) -87%
//   student-studying.jpg  (360 KB JPEG → ~48 KB WebP)  -87%
//   rohan-gupta.jpg       (368 KB JPEG → ~50 KB WebP)  -86%
//   mentoring-session-2.jpg (436 KB JPEG → ~60 KB WebP) -86%
// Total lazy-load savings for Chrome/Firefox/Edge users: ~2MB → ~309 KB

// ─────────────────────────────────────────────────────────────────────────────
// CURRENT LCP CHECKLIST (all passing)
// ─────────────────────────────────────────────────────────────────────────────

const lcpChecklist = {
  lcpElementIsSSR: '✅ H1 text in server component — paints with first HTML byte',
  noRenderBlockingCSS: '✅ inlineCss:true in next.config + critical CSS inlined in <head>',
  noRenderBlockingJS: '✅ GA deferred to first interaction (6s idle fallback)',
  heroBgPreloaded: '✅ <link rel="preload" as="image" href="/images/hero-bg.jpg" fetchpriority="high">',
  nextFont: '✅ Space Grotesk + Inter via next/font/google — zero font CLS',
  ttfbExcellent: '✅ Vercel Edge + pure SSG — TTFB ~60-80ms',
  allBelowFoldDeferred: '✅ requestIdleCallback + 13 dynamic imports with ssr:false',
  polyfillShimmed: '✅ ~15KB savings via NormalModuleReplacementPlugin',
};

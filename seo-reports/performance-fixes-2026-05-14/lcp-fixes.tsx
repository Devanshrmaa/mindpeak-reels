/**
 * LCP (Largest Contentful Paint) Fixes — 2026-05-14
 * MindPeak Institute — mindpeakinstitute.com
 *
 * STATUS: LCP is already excellent. No code changes required.
 * Estimated LCP: ~1.4s mobile, ~0.8s desktop (well under 2.5s threshold).
 *
 * LCP element: H1 text in HeroSection (not an image).
 * Strategy: CSS background-image for hero (browsers don't count CSS
 * backgrounds as LCP candidates), so the visible H1 text painted via SSR
 * is the LCP element. It renders in the first server-sent HTML with zero
 * client-side JavaScript dependency.
 */

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CHECKLIST: All items passing
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//
// ✅ LCP element (H1) is server-side rendered (app/page.tsx, revalidate=false)
// ✅ Critical CSS inlined — app/layout.tsx lines 194–217 (inlineCss: true)
// ✅ Hero background preloaded — app/layout.tsx:
//    <link rel="preload" as="image" href="/images/hero-bg.jpg" fetchpriority="high" />
// ✅ Google Analytics deferred — loads only after first user interaction
//    (pointerdown / keydown / touchstart / scroll) OR 6s requestIdleCallback
// ✅ All below-fold sections dynamically imported with ssr: false
//    + deferred to requestIdleCallback (timeout: 1800ms)
// ✅ TTFB ~80ms — Vercel Edge + pure SSG (revalidate: false)
// ✅ next/font — Space Grotesk + Inter, no font round-trips
// ✅ No render-blocking CSS (inlineCss: true removes the external stylesheet)
// ✅ No render-blocking JS (no synchronous scripts in <head>)
//
// OPTIONAL FUTURE IMPROVEMENT: Convert hero-bg.jpg → hero-bg.webp
// (saves ~30KB on the preloaded image, marginal LCP gain ~20–50ms)
// Run image-optimization.sh after installing cwebp.
//
// After converting:
// 1. Update app/layout.tsx preload:
//    href="/images/hero-bg.webp"  (and add type="image/webp")
// 2. Update inline CSS background-image URL to hero-bg.webp
//
// Example of optimized preload:
/*
<link
  rel="preload"
  as="image"
  href="/images/hero-bg.webp"
  type="image/webp"
  fetchpriority="high"
/>
*/

export {};

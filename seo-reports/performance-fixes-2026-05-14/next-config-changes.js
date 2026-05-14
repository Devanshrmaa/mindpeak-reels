/**
 * next.config.ts Recommendations — 2026-05-14
 * MindPeak Institute — mindpeakinstitute.com
 *
 * STATUS: Current config is excellent. No breaking changes needed.
 * The changes below are optional improvements for consideration.
 */

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CURRENT CONFIG AUDIT — Everything passing
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//
// ✅ images.formats: ['image/avif', 'image/webp'] — serves AVIF/WebP automatically
// ✅ images.minimumCacheTTL: 31536000 — 1-year cache on optimized images
// ✅ images.deviceSizes: [640, 750, 828, 1080, 1200, 1920] — good responsive breakpoints
// ✅ experimental.inlineCss: true — eliminates render-blocking stylesheet
// ✅ experimental.optimizePackageImports: 7 heavy libraries — tree-shaken
// ✅ compress: true — gzip on all responses
// ✅ poweredByHeader: false — minor security/header-size improvement
// ✅ removeConsole: { exclude: ['error', 'warn'] } — strips console.log in prod
// ✅ Cache-Control headers: 1-year immutable on /_next/static, /images, /fonts
// ✅ Security headers: X-Frame-Options, X-Content-Type-Options, etc.
// ✅ 30+ redirects — all 308 permanent (SEO-safe)
// ✅ NormalModuleReplacementPlugin: polyfill chunk replaced with empty shim
//
// No changes needed to next.config.ts this week.

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// OPTIONAL ADDITION 1: Bundle Analyzer
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Install: npm install --save-dev @next/bundle-analyzer
// Usage: ANALYZE=true npm run build  →  opens treemap in browser
//
// In next.config.ts:
/*
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(nextConfig);
*/

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// OPTIONAL ADDITION 2: Hero image WebP + type hint (after image conversion)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// After running image-optimization.sh and converting hero-bg.jpg to WebP:
//
// In app/layout.tsx, update the preload link to:
/*
<link
  rel="preload"
  as="image"
  href="/images/hero-bg.webp"
  type="image/webp"
  fetchpriority="high"
/>
*/
// And update the inline CSS from:
//   background-image: url(/images/hero-bg.jpg)
// to:
//   background-image: url(/images/hero-bg.webp)

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// FUTURE: Partial Prerendering (PPR) — not yet stable
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PPR allows static shell + streaming dynamic content.
// Could further improve TTFB on pages with any server-side data fetching.
// Monitor Next.js releases — add when stable (likely Next.js 16+).
/*
experimental: {
  ppr: true,
}
*/

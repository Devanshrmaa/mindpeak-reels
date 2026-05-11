/**
 * next.config.ts Recommendations — 2026-05-11
 *
 * The existing next.config.ts is already well-optimised. This file documents
 * the ONE addition that provides measurable benefit.
 *
 * VERDICT: No breaking changes needed. One optional addition below.
 */

/**
 * ADDITION 1: @next/bundle-analyzer (optional, dev-only)
 *
 * Install: npm install --save-dev @next/bundle-analyzer
 *
 * Add to next.config.ts:
 */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
});

// Wrap the default export:
// export default withBundleAnalyzer(nextConfig);

// Run: ANALYZE=true npm run build
// Opens bundle-stats.html with a visual treemap of all JS chunks.
// Use this to verify:
//   - recharts is NOT in the initial bundle (should be in a lazy chunk)
//   - framer-motion is NOT in the initial bundle (dynamically imported)
//   - @/data/practice is NOT in the initial bundle (lazy-loaded on hover)

/**
 * ADDITION 2 (FUTURE — when stable): Partial Pre-Rendering (PPR)
 *
 * PPR is experimental in Next.js 15+ and allows static shell + streaming
 * dynamic parts. For MindPeak (fully static), this adds no benefit today.
 * Revisit when any page adds user-specific dynamic content.
 */

/**
 * EXISTING CONFIG — confirmed correct, do NOT change:
 *
 * ✅ reactStrictMode: true
 * ✅ compress: true
 * ✅ poweredByHeader: false
 * ✅ images.formats: ['image/avif', 'image/webp']
 * ✅ images.minimumCacheTTL: 31536000 (1 year)
 * ✅ inlineCss: true
 * ✅ optimizePackageImports: (7 heavy libraries)
 * ✅ removeConsole in production (keeps .error and .warn)
 * ✅ NormalModuleReplacementPlugin for polyfill shim
 * ✅ Static asset Cache-Control: public, max-age=31536000, immutable
 * ✅ redirects() — 30+ proper 308 permanent redirects
 *
 * DO NOT add:
 * ❌ swcMinify: false — SWC minification is already on by default
 * ❌ output: 'export' — would disable ISR/SSR capability
 * ❌ Any additional headers that conflict with Vercel's edge cache
 */

module.exports = {};

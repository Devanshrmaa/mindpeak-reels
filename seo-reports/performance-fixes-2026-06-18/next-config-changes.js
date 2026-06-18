/**
 * Next.js Config Recommendations — 2026-06-18
 *
 * The current next.config.ts is well-configured. No breaking changes needed.
 * These are additive recommendations for future consideration.
 */

// ─── No required changes ─────────────────────────────────────────────────────
//
// Current config already has:
// ✅ images.formats: ['image/avif', 'image/webp']  — for <Image> components
// ✅ images.minimumCacheTTL: 31536000              — 1-year image cache
// ✅ compress: true                                 — gzip/brotli
// ✅ experimental.inlineCss: true                  — no render-blocking CSS
// ✅ experimental.optimizePackageImports            — tree-shaking 7 heavy libs
// ✅ 1-year cache headers on /_next/static/**
// ✅ 24-hour cache on sitemaps/robots

// ─── Optional future additions ───────────────────────────────────────────────

/**
 * 1. Bundle Analyzer — run ANALYZE=true npm run build to see chunk sizes.
 *    Install: npm install -D @next/bundle-analyzer
 *
 * // next.config.ts additions:
 * import withBundleAnalyzer from '@next/bundle-analyzer';
 * const withAnalyzer = withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' });
 * export default withAnalyzer(nextConfig);
 */

/**
 * 2. Partial Prerendering (PPR) — when it reaches stable in Next.js 16+,
 *    PPR would allow the homepage to stream the static shell instantly and
 *    fill in dynamic parts (like the demo modal context) separately.
 *    Not yet recommended as it's experimental and the homepage is currently
 *    pure static with revalidate: false.
 */

/**
 * 3. Image size limits — add a reminder check to the build that warns
 *    when any image in /public/images exceeds 200KB.
 *    This can be done with a custom webpack plugin or a simple scripts/ check.
 */

module.exports = {};

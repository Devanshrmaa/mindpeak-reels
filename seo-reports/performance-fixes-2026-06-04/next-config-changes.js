/**
 * next.config.ts Recommendations — 2026-06-04
 *
 * VERDICT: next.config.ts is already well-optimized. No required changes.
 *
 * Current configuration highlights (all correct):
 *   ✅ images.formats: ['image/avif', 'image/webp']  — serves WebP/AVIF via <Image>
 *   ✅ images.minimumCacheTTL: 31536000              — 1-year image cache
 *   ✅ compress: true                                 — Brotli/gzip on all responses
 *   ✅ inlineCss: true (experimental)                 — eliminates render-blocking CSS
 *   ✅ optimizePackageImports for 7 heavy libs        — tree-shaking
 *   ✅ 1-year Cache-Control on /_next/static/*        — immutable caching
 *   ✅ NormalModuleReplacementPlugin polyfill shim    — ~15KB bundle savings
 *   ✅ poweredByHeader: false                         — minor security hardening
 *   ✅ reactStrictMode: true                          — catches double-render issues
 *
 * OPTIONAL ENHANCEMENTS (non-breaking, implement when ready):
 */

// ─── Optional 1: Bundle Analyzer (dev only) ───────────────────────────────────
// Add to package.json devDependencies: "@next/bundle-analyzer": "^15.0.0"
// Then wrap nextConfig:
//
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });
// export default withBundleAnalyzer(nextConfig);
//
// Usage: ANALYZE=true npm run build
// Generates interactive treemap of all JS chunks.

// ─── Optional 2: Image Quality per Format ─────────────────────────────────────
// Next.js default quality is 75 for WebP. For student photos, 82 gives better
// quality with minimal size increase. This can be set per <Image> via quality={82}
// prop rather than globally. Current usage already does this in most places.

// ─── Optional 3: Partial Prerendering (future) ────────────────────────────────
// experimental: { ppr: true }
// When this becomes stable in Next.js 16+, it would further improve TTFB on
// pages with dynamic data. Not needed now since all pages are already SSG.

// ─── What NOT to change ────────────────────────────────────────────────────────
// 1. Do NOT remove inlineCss: true — this eliminates render-blocking CSS and is
//    a significant FCP improvement
// 2. Do NOT remove optimizePackageImports — framer-motion without tree-shaking
//    would add ~100KB to the initial bundle
// 3. Do NOT add revalidate times shorter than 3600s — Vercel charges per ISR write
//    and the site content doesn't change hourly
// 4. Do NOT add headers that set Cache-Control on HTML pages — Next.js manages
//    page caching via its own ISR system; overriding it breaks revalidation

module.exports = {};

/**
 * next.config.ts Recommendations — MindPeak Institute
 * Date: 2026-05-28
 *
 * STATUS: Current config is well-optimized. No breaking changes needed.
 * The recommendations below are additive enhancements for future sprints.
 */

// ─────────────────────────────────────────────────────────────────────────────
// CURRENT CONFIG STATUS
// ─────────────────────────────────────────────────────────────────────────────

const currentConfigAudit = {
  imageFormats: '✅ [avif, webp] — Next.js Image component serves modern formats',
  minimumCacheTTL: '✅ 31536000 (1 year) — optimal for immutable assets',
  inlineCss: '✅ true — eliminates render-blocking stylesheet, major FCP win',
  optimizePackageImports: '✅ lucide-react, recharts, framer-motion, date-fns, radix-ui',
  polyfillShim: '✅ NormalModuleReplacementPlugin removes 15KB polyfill chunk',
  compress: '✅ true — Brotli/gzip compression for text assets',
  strictMode: '✅ true — catches hydration issues early',
  removeConsole: '✅ production strips console.log (keeps .error, .warn)',
  securityHeaders: '✅ X-Frame-Options, X-XSS-Protection, X-Content-Type-Options',
  staticAssetCaching: '✅ 1-year immutable cache for /images/, /fonts/, /brochures/',
  wwwRedirect: '✅ 308 redirect www → non-www',
  legacyRedirects: '✅ 100+ legacy URL redirects configured',
};

// ─────────────────────────────────────────────────────────────────────────────
// RECOMMENDATION 1: Bundle Analyzer (add to dev dependencies)
// ─────────────────────────────────────────────────────────────────────────────

// Add to package.json devDependencies:
// "@next/bundle-analyzer": "^15"

// Add to next.config.ts:
/*
import withBundleAnalyzer from '@next/bundle-analyzer'
const withAnalyzer = withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })
export default withAnalyzer(nextConfig)
*/

// Usage: ANALYZE=true npm run build
// Run quarterly or after adding new heavy dependencies.

// ─────────────────────────────────────────────────────────────────────────────
// RECOMMENDATION 2: ISR revalidation times
// ─────────────────────────────────────────────────────────────────────────────

// All critical pages currently use revalidate = false (pure SSG). CORRECT.
// If dynamic pages are added later, use minimum 3600s to contain Vercel write costs:
const revalidationGuidance = {
  homepage: 'false — static, no data fetching',
  courses: 'false — static, updates deploy',
  blog_index: '3600 — hourly cache acceptable for blog list',
  blog_post: '86400 — daily revalidation for individual posts',
  ranking_pages: '3600 — hourly for rank predictor data',
};

// ─────────────────────────────────────────────────────────────────────────────
// RECOMMENDATION 3: Serve hero-bg.webp via CSS @supports
// ─────────────────────────────────────────────────────────────────────────────

// After running image-optimization.sh, update the inline critical CSS
// in app/layout.tsx from:
//   '#hero { background-image: url(/images/hero-bg.jpg) ... }'
// to:
const heroBgCssWithWebPFallback = `
  '#hero{position:relative;min-height:100vh;display:flex;align-items:center;justify-content:center;overflow:hidden;background-image:url(/images/hero-bg.jpg);background-size:cover;background-position:center top}',
  '@supports(background-image:url("data:image/webp;base64,")){#hero{background-image:url(/images/hero-bg.webp)}}',
`;
// And update the <link rel="preload"> to point to hero-bg.webp.
// Expected savings: 120KB → ~18KB (-85%)

// ─────────────────────────────────────────────────────────────────────────────
// RECOMMENDATION 4: src/assets cleanup
// ─────────────────────────────────────────────────────────────────────────────

// FINDING: src/assets/ directory contains duplicate copies of all images
// from public/images/. These are dead weight in the repository — Next.js
// does NOT serve files from src/assets/ at runtime.
//
// Safe to delete entire src/assets/ directory IF no code imports from it.
// Run this check first:
//   grep -r "from '@/assets\|src/assets\|../assets" src/ --include="*.tsx" --include="*.ts"
// If no results: rm -rf src/assets/
// Estimated repo size savings: ~8-10MB

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* ── General ── */
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  /* ── Strip console.log in production (keep .error & .warn for debugging) ── */
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
      ? { exclude: ['error', 'warn'] }
      : false,
  },

  /* ── Images ── */
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      { protocol: 'https', hostname: 'mindpeakinstitute.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },

  /* ── Headers (migrated from vercel.json) ── */
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Last-Modified', value: new Date().toUTCString() },
        ],
      },
      {
        source: '/manifest.json',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' }],
      },
      {
        source: '/_next/static/media/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' }],
      },
      /* Long cache for hashed static assets */
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      /* Long cache for images optimised by Next.js */
      {
        source: '/_next/image/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      /* Long cache for public static files (fonts, images, brochures, PDFs) */
      {
        source: '/fonts/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/brochures/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/ncert/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },

  /* ── Redirects ── */
  async redirects() {
    return [
      /* www → non-www (permanent 308) */
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.mindpeakinstitute.com' }],
        destination: 'https://mindpeakinstitute.com/:path*',
        permanent: true,
      },

      /* ── Hindi locale (never existed) → strip /hi/ prefix ── */
      { source: '/hi', destination: '/', permanent: true },
      { source: '/hi/', destination: '/', permanent: true },
      { source: '/hi/:path*', destination: '/:path*', permanent: true },

      /* ── Legacy booking/session pages → free trial ── */
      { source: '/book-your-session', destination: '/free-trial', permanent: true },
      { source: '/book-your-session-1', destination: '/free-trial', permanent: true },
      { source: '/book-your-session-2', destination: '/free-trial', permanent: true },
      { source: '/booking', destination: '/free-trial', permanent: true },

      /* ── Legacy legal/policy pages ── */
      { source: '/privacy-policy', destination: '/terms-and-conditions', permanent: true },
      { source: '/disclaimer', destination: '/terms-and-conditions', permanent: true },

      /* ── Legacy content pages → nearest equivalent ── */
      { source: '/study-material', destination: '/courses', permanent: true },
      { source: '/jee-previous-year-papers', destination: '/jee-pyq', permanent: true },
      { source: '/free-mock-test-jee', destination: '/jee-practice', permanent: true },
      { source: '/free-mock-test-neet', destination: '/neet-practice', permanent: true },

      /* ── Legacy blog post stubs ── */
      { source: '/blog-post1', destination: '/blog', permanent: true },
      { source: '/blog-post2', destination: '/blog', permanent: true },

      /* ── Non-existent blog slugs → blog index ── */
      { source: '/blog/organic-chemistry-made-easy-jee-neet', destination: '/blog', permanent: true },
      { source: '/blog/best-books-for-jee-preparation-2026', destination: '/blog', permanent: true },
      { source: '/blog/how-to-crack-jee-advanced-2026-complete-guide', destination: '/blog', permanent: true },
      { source: '/blog/complete-neet-2026-preparation-guide', destination: '/blog', permanent: true },
      { source: '/blog/time-management-tips-for-jee-aspirants', destination: '/blog', permanent: true },
      { source: '/blog/mock-test-strategy-for-jee-neet-toppers', destination: '/blog', permanent: true },
      { source: '/blog/kota-vs-online-coaching-which-is-better-2026', destination: '/blog', permanent: true },
      { source: '/blog/neet-biology-chapter-wise-strategy', destination: '/blog', permanent: true },
      { source: '/blog/why-batch-coaching-fails-jee-neet-students', destination: '/blog', permanent: true },
      { source: '/blog/jee-main-vs-jee-advanced-complete-difference', destination: '/blog', permanent: true },

      /* ── Non-existent success stories → homepage ── */
      { source: '/success-stories/:path*', destination: '/', permanent: true },

      /* ── Stale JEE PYQ question URLs (chapter changed) ── */
      { source: '/jee-pyq-physics-electrostatics-the-dimensional-formula-of-torque-is', destination: '/jee-pyq', permanent: true },

      /* ── Stale NEET practice question URLs (questions removed/moved) ── */
      { source: '/neet-biology-cell-biology-biomolecules-cell-organelles-easy-which-of-the-following-is-not-a-fundamental-si-unit', destination: '/neet-practice', permanent: true },

      /* ── Stale JEE practice question URLs ── */
      { source: '/jee-physics-units-dimensions-si-units-easy-which-of-the-following-is-not-a-fundamental-si-unit', destination: '/jee-practice', permanent: true },
      { source: '/jee-physics-units-dimensions-si-units-hard-in-a-new-system-of-units-the-unit-of-mass-is-alpha-kg-length-is-beta-m-and-time-is-gamma-s-the-value-of-1-j-in-this-new-system-is', destination: '/jee-practice', permanent: true },
    ];
  },

  /* ── Build tolerances (migration phase) ── */
  typescript: { ignoreBuildErrors: true },

  /* ── Optimise heavy barrel-export packages ── */
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'recharts',
      'framer-motion',
      '@radix-ui/react-icons',
      'date-fns',
    ],
  },

  /* ── Turbopack (Next 16 default) ── */
  turbopack: {},
};

export default nextConfig;

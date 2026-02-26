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
    minimumCacheTTL: 60,
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
    ];
  },

  /* ── Redirects ── */
  async redirects() {
    return [
      /* www → non-www (permanent 308) — fixes GSC "alternate page with proper canonical" */
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.mindpeakinstitute.com' }],
        destination: 'https://mindpeakinstitute.com/:path*',
        permanent: true,
      },
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

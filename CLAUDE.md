# CLAUDE.md — MindPeak Institute

AI assistant context for the **mindpeak-reels** codebase. Read this before making any changes.

---

## Project Overview

**MindPeak Institute** (`mindpeakinstitute.com`) is an Indian ed-tech marketing and content site for personalized JEE/NEET coaching. It is a **static/pre-rendered site** with no backend database — all data lives in TypeScript files. The site has 67+ coaching landing pages, a blog, practice question banks, PYQ (previous year question) pages, rank predictors, and study tools.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | **Next.js 16** (App Router, Turbopack in dev) |
| Language | **TypeScript 5.8** (`strict: false`, `ignoreBuildErrors: true`) |
| UI | **React 18**, **Tailwind CSS 3**, **shadcn-ui** (Radix UI primitives) |
| Animation | **Framer Motion 10** |
| Forms | **React Hook Form 7** + **Zod** |
| Testing | **Vitest 3** + **@testing-library/react** |
| Linting | **ESLint 9** with TypeScript plugin |
| Deployment | **Vercel** |
| Dev visual builder | **Lovable** |

---

## Commands

```bash
# Development (Turbopack hot reload)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint
npm run lint

# Tests
npx vitest run
```

**Sitemaps are dynamic routes, not files:** `app/sitemap.xml/route.ts` is a **sitemap index** pointing at four segmented children — `sitemap-core.xml`, `sitemap-chapters.xml`, `sitemap-blog.xml`, `sitemap-exams.xml` (~587 curated URLs total). All URL groups and the lastmod policy live in **`src/lib/sitemapUrls.ts`** (single source of truth). `lastmod` dates are STABLE, anchored to `CONTENT_ANCHOR` — bump that constant on real content releases; never stamp rolling "today" dates (fake freshness was part of the March 2026 penalty). `app/removal-sitemap.xml/route.ts` is temporary (410'd doorways). The legacy static sitemaps (`public/sitemaps/**`, `public/sitemap-topics.xml`, `public/final.xml`) were deleted during the spam-update recovery — do NOT regenerate them (the `scripts/gen-*` generators and `scripts/update-sitemap.mjs` are retained for reference only; the latter was removed from the build).

---

## Repository Structure

```
/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout: fonts, JSON-LD, GA, inline critical CSS
│   ├── page.tsx                # Homepage (renders <Index /> view)
│   ├── providers.tsx           # Client providers: DemoBookingModal, ErrorBoundary, DeferredOverlays
│   ├── scroll-to-top.tsx       # Scroll restoration
│   ├── globals.css             # Global CSS (Tailwind base + CSS variables)
│   ├── api/revalidate/         # On-demand ISR cache purge endpoint
│   ├── [slug]/                 # Catch-all dynamic route
│   ├── jee-coaching/           # 67+ static landing page directories
│   ├── blog/                   # Blog index + [slug] post pages
│   └── ...                     # (neet-*, jee-*, courses, contact, about, etc.)
│
├── src/
│   ├── components/             # Reusable React components (SEO, UI, modals, sections)
│   ├── views/                  # Page-level view components (one per page type)
│   ├── lib/                    # Utility functions (SEO helpers, content resolvers, PDF)
│   ├── data/                   # ALL static data (courses, questions, blogs, city data)
│   ├── hooks/                  # Custom React hooks
│   ├── assets/                 # Images and media
│   ├── polyfills/              # Empty shim to replace Next.js built-in polyfill chunk
│   └── test/                   # Vitest test files
│
├── public/                     # Static assets (images, fonts, PDFs, sitemaps, robots.txt)
├── scripts/                    # Build-time content/sitemap generation scripts
├── next.config.ts              # Next.js config (images, headers, redirects, webpack)
├── tailwind.config.ts          # Tailwind config with CSS variable theme
├── tsconfig.json               # TypeScript config
├── eslint.config.js            # ESLint flat config
└── components.json             # shadcn-ui config
```

---

## Key Files

| File | Purpose |
|---|---|
| `app/layout.tsx` | Root layout — inline critical CSS, JSON-LD, deferred GA, fonts |
| `app/providers.tsx` | Client-side providers wrapping all pages |
| `src/views/Index.tsx` | Homepage — lazy-loads all sections via `requestIdleCallback` |
| `src/data/seoPageData.ts` | ~309KB — SEO metadata for 100+ landing pages (slug → metadata map) |
| `src/data/cityData.ts` | ~143KB — location data for city-based landing pages |
| `src/data/cityUniqueContent.ts` | ~221KB — unique city-specific content blocks |
| `src/data/blogData.ts` | Blog post data |
| `src/lib/seoLandingMetadata.ts` | Builds metadata objects for SEO landing pages |
| `src/lib/blogResolver.ts` | Resolves blog post slugs to content |
| `next.config.ts` | Images, caching headers, 175+ redirects, webpack polyfill shim |

---

## Architecture Patterns

### App Router Pages
Each `app/<route>/page.tsx` file:
1. Exports `generateMetadata()` for SEO metadata (title, description, Open Graph, canonical)
2. Renders a view component from `src/views/`
3. Optionally exports `generateStaticParams()` for dynamic routes

### View Components (`src/views/`)
- One view per page type (e.g., `JEECoaching.tsx`, `BlogPost.tsx`, `NEETPYQQuestion.tsx`)
- Views are client or server components depending on interactivity
- The homepage `Index.tsx` defers non-critical sections with `requestIdleCallback` + dynamic imports

### Data Layer (`src/data/`)
- **No database** — all content is TypeScript data files
- Question banks: `practice/`, `pyq/`, `neet-practice/`, `neet-pyq/` directories
- Large files (`seoPageData.ts`, `cityData.ts`) are pre-computed; edit carefully

### SEO Architecture
- Every page exports `generateMetadata()` — always include `title`, `description`, `canonical`, `openGraph`
- JSON-LD structured data lives in `app/layout.tsx` (global) and per-page where needed
- Sitemaps: multiple XML files in `app/` and `public/`; updated by build scripts
- Breadcrumbs: `src/lib/breadcrumbSchema.ts`

### Performance Conventions
- Hero image preloaded in `<head>` via `<link rel="preload">`
- Critical CSS is **inlined** in `app/layout.tsx` (not a separate stylesheet)
- Google Analytics loads only after first user interaction (deferred with `requestIdleCallback` fallback)
- Heavy packages (`lucide-react`, `recharts`, `framer-motion`, `date-fns`) use `optimizePackageImports`
- Next.js built-in polyfill chunk is replaced with an empty shim (`src/polyfills/`)
- `console.log` is stripped in production builds (kept: `.error`, `.warn`)

---

## Routing Conventions

### Static Routes
Most pages under `app/` are static directories with a `page.tsx`:
```
app/jee-coaching/page.tsx   →  /jee-coaching
app/blog/page.tsx            →  /blog
app/contact/page.tsx         →  /contact
```

### Dynamic Routes
- `app/[slug]/page.tsx` — catch-all for programmatic landing pages
- `app/blog/[slug]/page.tsx` — blog post pages
- Question pages: `app/jee-practice/[chapter]/[slug]/page.tsx` pattern

### On-Demand Revalidation
```
POST /api/revalidate?secret=<REVALIDATION_SECRET>&path=<path>
```
Default secret: `mindpeak-revalidate-2026`. Returns `{ revalidated: true, path, now }`.

### Redirects
175+ redirects in `next.config.ts` `redirects()`. Add new redirects there, not in `vercel.json`.

---

## Styling

- **Tailwind CSS** with a dark theme via CSS variables (defined in `globals.css`)
- **shadcn-ui** components in `src/components/ui/` — use these before creating custom UI
- `cn()` utility from `src/lib/utils.ts` (clsx + tailwind-merge) — always use for conditional classes
- Fonts: `Space Grotesk` (headings, `--font-display`) + `Inter` (body, `--font-body`)
- Primary color: gold (`hsl(43 72% 52%)`, `--primary`)
- Background: dark navy (`hsl(225 43% 7%)`, `--background`)

---

## Testing

Tests live in `src/test/`. Run with `npx vitest run`.

### Existing Tests
- `src/test/example.test.ts` — basic smoke test
- `src/test/descriptive-links.test.ts` — **accessibility audit**: scans all `.tsx` files in `src/components/` and `src/views/` for generic link text (`"learn more"`, `"click here"`, `"read more"`, `"more"`)

### Rules
- Never add links/buttons with generic text — the test will fail
- When adding new components with links, use descriptive anchor text
- Test environment: jsdom via `src/test/setup.ts`

---

## Content & Data Conventions

### Adding a New Landing Page
1. Create `app/<slug>/page.tsx` with `generateMetadata()` and a view component
2. Add metadata entry to `src/data/seoPageData.ts` if using the programmatic SEO system
3. Add the URL to the appropriate group in `src/lib/sitemapUrls.ts` (feeds the sitemap index children)

### Adding Blog Posts
- Add entry to `src/data/blogData.ts`
- Create slug matching the blog resolver pattern in `src/lib/blogResolver.ts`
- **Indexability is governed by `src/lib/indexableBlogSlugs.ts`**: only posts listed in
  `/sitemap.xml` (kept generators + exam-event posts) are indexable and shown on `/blog`;
  every other resolvable post is served `noindex, follow`. To make a new post indexable,
  add it to the kept set that feeds the sitemap — don't bypass this rule

### Adding Practice Questions
- Questions go in `src/data/practice/` (JEE) or `src/data/neet-practice/` (NEET)
- PYQ questions: `src/data/pyq/` or `src/data/neet-pyq/`
- Each question file exports an array of question objects with `id`, `question`, `options`, `answer`, `solution`, `subject`, `chapter`, `difficulty`

### City/Location Pages
- City data in `src/data/cityData.ts` and `src/data/cityUniqueContent.ts`
- These are large files — edit cautiously, validate the TypeScript shape

---

## ESLint Rules

```javascript
// Enforced
react-hooks/rules-of-hooks: error
react-hooks/exhaustive-deps: warn
react-refresh/only-export-components: warn

// Disabled
@typescript-eslint/no-unused-vars: off
```

- TypeScript `ignoreBuildErrors: true` — the build won't fail on type errors, but ESLint will catch hook issues
- No Prettier config — use editor defaults

---

## Environment Variables

| Variable | Purpose | Default |
|---|---|---|
| `NODE_ENV` | `development` / `production` | Set by Node/Next.js |
| `REVALIDATION_SECRET` | ISR cache purge + IndexNow API auth | `mindpeak-revalidate-2026` |
| `BING_SITE_VERIFICATION` | Bing Webmaster Tools ownership (`msvalidate.01` meta) — renders the tag only when set | _(unset — tag omitted)_ |

No `.env` file in the repo. Secrets are managed via Vercel environment settings for production.

### Bing / IndexNow

Bing indexing has its own pipeline (Bing indexes normally — no Google-style suppression):
- **Verification:** set `BING_SITE_VERIFICATION` (or import from GSC in Bing Webmaster Tools).
- **Sitemap:** submit `https://mindpeakinstitute.com/bing-sitemap.xml` **only** in Bing Webmaster Tools — never add it to `robots.txt`/`sitemap.xml` (it exposes ~14k Bing-exclusive thin pages kept out of Google; see `src/lib/bingIndexing.ts` + `proxy.ts`).
- **IndexNow** (instant recrawl): key hosted at `public/c1a9e4f2b7d84f3a9c5e6d8b2f4a7c31.txt`; shared logic in `src/lib/indexNow.ts`. `/api/revalidate` auto-pings the revalidated path; `POST /api/indexnow?secret=…` submits URLs on demand; `scripts/indexnow-ping.mjs` bulk-pings the sitemap. The key must stay identical across all three — see the `INDEXNOW_KEY` comment.
- See `docs/bing-webmaster.md` for the operator checklist.

---

## What NOT To Do

- **Don't add a database or API backend** — this is intentionally a static site
- **Don't use generic link text** (`learn more`, `click here`) — the accessibility test will fail
- **Don't add redirects to `vercel.json`** — all redirects belong in `next.config.ts`
- **Don't run `npm run build` to type-check** — `ignoreBuildErrors: true` means it won't catch type errors; use `npx tsc --noEmit` instead
- **Don't modify `src/polyfills/empty-next-polyfill-module.js`** — it's an intentional empty shim for performance
- **Don't add `console.log`** — it's stripped in production; use `console.warn` or `console.error` for anything that should persist
- **Don't add new pages without updating `src/lib/sitemapUrls.ts`** — it's the single source of truth for indexable URLs (feeds the `/sitemap.xml` index and its four children)
- **Don't regenerate the legacy static sitemaps** (`public/sitemaps/**`, `sitemap-topics.xml`, `final.xml`) — they advertised thousands of redirected/noindexed URLs and were removed during penalty recovery

---

## Deployment

- **Platform:** Vercel (auto-deploy on push to `main`)
- **Build command:** `npm run build` (runs sitemap scripts + next build)
- **Output:** `.next/` directory (standard Next.js)
- Static assets cached for 1 year (`Cache-Control: public, max-age=31536000, immutable`)
- Sitemaps cached for 24 hours

---

## Branch Strategy

- `main` — production branch, deploys to `mindpeakinstitute.com`
- Feature work on separate branches, merged via PR

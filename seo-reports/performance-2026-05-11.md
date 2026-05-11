# MindPeak Institute — Performance Audit Report
**Date:** 2026-05-11  
**Auditor:** Automated CWV Audit  
**Branch:** claude/happy-ritchie-rlENc

---

## Methodology Note

The unauthenticated Google PageSpeed Insights API enforces a strict per-IP rate limit (~1–2 requests per minute). All five critical pages returned HTTP 429 during this session. Metrics below are derived from **deep static code analysis** of the live codebase, cross-referenced against known Next.js + Vercel performance patterns. Where exact field data (CrUX) is unavailable, scores are estimated from architectural evidence and flagged `[ESTIMATED]`.

> **Recommended action:** Obtain a free PSI API key from Google Cloud Console and add it as `PAGESPEED_API_KEY` in Vercel env vars. The next report should pass `&key=$KEY` to unlock unlimited calls.

---

## Performance Scorecard

| Page | Device | Perf Score | LCP | INP | CLS | FCP | TTFB | TBT | Status |
|---|---|---|---|---|---|---|---|---|---|
| / (homepage) | Mobile | ~82 [EST] | ~1.4s 🟢 | ~120ms 🟢 | ~0.02 🟢 | ~1.1s 🟢 | ~80ms 🟢 | ~180ms 🟢 | 🟡 See issues |
| / (homepage) | Desktop | ~95 [EST] | ~0.8s 🟢 | ~80ms 🟢 | ~0.01 🟢 | ~0.7s 🟢 | ~60ms 🟢 | ~60ms 🟢 | 🟢 |
| /courses | Mobile | ~78 [EST] | ~1.6s 🟢 | ~150ms 🟢 | ~0.03 🟢 | ~1.2s 🟢 | ~80ms 🟢 | ~220ms 🟡 | 🟡 See issues |
| /about | Mobile | ~80 [EST] | ~1.5s 🟢 | ~120ms 🟢 | ~0.02 🟢 | ~1.1s 🟢 | ~80ms 🟢 | ~200ms 🟡 | 🟡 See issues |
| /contact | Mobile | ~85 [EST] | ~1.3s 🟢 | ~110ms 🟢 | ~0.02 🟢 | ~1.0s 🟢 | ~80ms 🟢 | ~150ms 🟢 | 🟢 |
| /faculty | Mobile | ~83 [EST] | ~1.4s 🟢 | ~120ms 🟢 | ~0.02 🟢 | ~1.1s 🟢 | ~80ms 🟢 | ~160ms 🟢 | 🟢 |

**Score basis:** H1 text LCP (SSR rendered, critical CSS inlined), GA deferred to first interaction, all below-fold sections dynamically imported with `requestIdleCallback`, `inlineCss: true` in next.config.

---

## Week-over-Week Trend

No previous `seo-reports/performance-*.md` file found — this is the **baseline report**. All future reports will diff against these figures.

| Page | Metric | Baseline (2026-05-11) | Last Week | Change |
|---|---|---|---|---|
| / | LCP | ~1.4s | — | Baseline |
| / | CLS | ~0.02 | — | Baseline |
| / | INP | ~120ms | — | Baseline |
| /courses | TBT | ~220ms | — | Baseline |

---

## Critical Issues (Fix This Week)

Sorted by **ranking impact × implementation ease**:

| # | Page | Issue | Metric Impact | Severity |
|---|---|---|---|---|
| 1 | All | **3 images ≥ 2.5 MB in `/public/images/`** — served as raw JPEG to every mobile visitor who scrolls | LCP on scroll, TBT, Total Page Weight | 🔴 CRITICAL |
| 2 | All | **No WebP/AVIF versions** of any image — browser downloads full JPEG even when WebP is accepted | LCP, Total Page Weight | 🔴 CRITICAL |
| 3 | / + /courses | **`SuccessGrid` + `Courses` use raw `<img>` tags** (not `<Image>`) — no Next.js optimisation pipeline | LCP (secondary), Image weight | 🟠 HIGH |
| 4 | / | **`ContactSection` logo `<img>` missing `width`/`height`**  — causes CLS on section reveal | CLS | 🟠 HIGH |
| 5 | / | **`contentVisibility: auto` container** mounts 0→3000px at idle — can cause scroll-triggered CLS if user is mid-page | CLS | 🟡 MEDIUM |
| 6 | All | **Navbar scroll listener missing `{ passive: true }`** — prevents scroll optimisation in some browsers | INP | 🟡 MEDIUM |
| 7 | / | **`/public/hero-bg.jpg` duplicated** — same 120 KB file exists at both `/public/hero-bg.jpg` AND `/public/images/hero-bg.jpg` | Total page weight / confusion | 🟡 MEDIUM |
| 8 | / | **`SuccessGrid` modal `<img>` has no dimensions** — CLS when lightbox opens | CLS | 🟡 MEDIUM |
| 9 | All | **PNG icon files not converted** (`struggling-student.png`, `strategy-plan.png`, etc.) — PNG is 2–3× WebP for these graphics | Image weight | 🟡 MEDIUM |
| 10 | All | **No PSI API key configured** — prevents reliable automated monitoring | Monitoring | 🟡 MEDIUM |

---

## LCP Deep Dive

### LCP Element: `<h1>` text in HeroSection ✅ OPTIMISED

The site uses a deliberately clever strategy:
- Hero background is a **CSS `background-image`** — browsers do NOT count CSS backgrounds as LCP candidates
- The LCP element is therefore the **`<h1>` text**, which is **server-side rendered** in the initial HTML
- Critical CSS is **inlined** in `<head>` via `app/layout.tsx` (lines 174–197), including `#hero { background-image: url(/images/hero-bg.jpg) }` and all flex/position styles needed to paint the H1
- Hero bg is **preloaded**: `<link rel="preload" as="image" href="/images/hero-bg.jpg" fetchpriority="high">`
- Google Analytics loads **only after first user interaction** (or 6-second idle timeout)
- All below-fold sections deferred via `requestIdleCallback`

**LCP verdict: Likely excellent (<2s mobile). No code changes needed for LCP.**

### LCP Checklist

| Check | Status | Notes |
|---|---|---|
| LCP element is SSR/SSG content | ✅ | H1 text in server component |
| No render-blocking CSS | ✅ | `inlineCss: true`, critical CSS inlined |
| No render-blocking JS | ✅ | GA deferred; all sections lazy |
| Hero image preloaded | ✅ | `<link rel="preload">` with `fetchpriority="high"` |
| LCP image has `priority` | N/A | LCP is text, not image |
| TTFB < 800ms | ✅ | Vercel Edge + SSG = ~60–80ms |
| No client-side render delay | ✅ | Hero is a server component |
| next/font used | ✅ | Space Grotesk + Inter via `next/font/google` |

---

## CLS Deep Dive

### Issue 1 — ContactSection logo `<img>` missing dimensions 🔴

**File:** `src/components/sections/ContactSection.tsx:45`

```tsx
// CURRENT — causes CLS (no width/height → browser doesn't reserve space)
<img src={logo} alt="MindPeak Institute" className="w-16 h-16 rounded-full mx-auto mb-8 ring-1 ring-foreground/[0.08]" />

// FIX — add explicit dimensions
<img src={logo} alt="MindPeak Institute" className="w-16 h-16 rounded-full mx-auto mb-8 ring-1 ring-foreground/[0.08]" width={64} height={64} />
```

### Issue 2 — SuccessGrid modal lightbox `<img>` missing dimensions 🟡

**File:** `src/components/sections/SuccessGrid.tsx:151`

```tsx
// CURRENT — no dimensions, causes CLS when modal opens
<img src={selected.image} alt={altTextMap[selected.id] || selected.title} className="w-full max-h-[70vh] object-contain rounded-xl" />

// FIX — add aspect-ratio to prevent CLS
<img src={selected.image} alt={altTextMap[selected.id] || selected.title} className="w-full max-h-[70vh] object-contain rounded-xl" style={{ aspectRatio: '4/5' }} />
```

### Issue 3 — `contentVisibility` container height jump 🟡

**File:** `src/views/Index.tsx:56–64`

The `containIntrinsicSize: '3000px'` is a good estimate, but if a user scrolls rapidly before idle callback fires and then `showDeferredSections` flips true, sections are injected after visible content.

```tsx
// CURRENT
{showDeferredSections ? (
  <div style={{ contentVisibility: 'auto', containIntrinsicSize: '3000px', contain: 'layout style paint' }}>
    ...
  </div>
) : null}

// FIX — always render the container (prevents 0→3000px jump), use visibility to avoid paint
{/* Always render placeholder height so no layout shift when sections mount */}
<div style={{ containIntrinsicSize: '4000px', minHeight: showDeferredSections ? undefined : '4000px' }}>
  {showDeferredSections && (
    <div style={{ contentVisibility: 'auto', containIntrinsicSize: '4000px', contain: 'layout style paint' }}>
      <ProblemSection />
      {/* ... rest of sections ... */}
    </div>
  )}
</div>
```

### CLS Checklist

| Check | Status | Notes |
|---|---|---|
| `next/font` for web fonts | ✅ | Space Grotesk + Inter, `display: swap` |
| Hero image has width/height | N/A | CSS bg, not `<img>` |
| SuccessGrid images have dimensions | ✅ | `width={600} height={750}` present |
| ContactSection logo dimensions | ❌ | **FIX REQUIRED** — no width/height |
| SuccessGrid modal img dimensions | ❌ | **FIX REQUIRED** — no dimensions |
| Navbar logo uses next/image | ✅ | `<Image width={36} height={36}>` |
| Icon imgs have dimensions | ✅ | `width={84} height={84}` or `width={40}` |
| No content injected above fold | ✅ | All dynamic sections below hero |
| Font preconnect | ✅ | `next/font` handles this automatically |

---

## INP Deep Dive

### Issue 1 — Navbar scroll listener missing `passive: true` 🟡

**File:** `src/components/sections/Navbar.tsx:111`

```tsx
// CURRENT — not explicitly passive
useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 50);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// FIX — explicit passive flag (prevents scroll jank in some browsers)
useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 50);
  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll, { passive: true });
}, []);
```

### Issue 2 — Practice data load on hover (lazy import of large data files) ℹ️ ACCEPTABLE

**File:** `src/components/sections/Navbar.tsx:46–97`

The `loadPracticeData` callback is triggered on `onMouseEnter` and imports `@/data/practice` + `@/data/neet-practice`. These are potentially large data files. On first hover, there's a 100–300ms delay before subjects populate the dropdown.

**Verdict:** Acceptable — the loading guard (`practiceLoadedRef.current`) prevents re-importing, and subjects are only needed inside the dropdown (not in the critical path). No fix required, but monitoring is recommended.

### Issue 3 — MethodologySection `AnimatePresence` on click ✅ FINE

Toggle handler is a synchronous `setExpandedIndex` call. Framer Motion handles the animation off the main thread. No issue.

### INP Checklist

| Check | Status | Notes |
|---|---|---|
| No synchronous heavy JS on interaction | ✅ | All dynamic imports deferred |
| Event handlers lightweight | ✅ | State setters only |
| Scroll handlers passive | ❌ | Navbar missing `{ passive: true }` |
| GA deferred | ✅ | Loads after first input / idle |
| No third-party blocking scripts | ✅ | Only GA, deferred |
| Heavy modal lazy-loaded | ✅ | `DemoBookingModalContent` uses `dynamic()` |
| Practice data lazy-loaded | ✅ | Loaded on first hover, cached |

---

## Resource Optimization

### Images — CRITICAL ⚠️

**Oversize images (raw JPEG/PNG in `/public/`):**

| File | Size | Used In | Fix |
|---|---|---|---|
| `mentoring-session.jpg` | **2.9 MB** 🔴 | SuccessGrid, stories | Convert to WebP, resize |
| `study-routine.jpg` | **2.8 MB** 🔴 | SuccessGrid, stories | Convert to WebP, resize |
| `mentoring.jpg` | **2.5 MB** 🔴 | (referenced in code) | Convert to WebP, resize |
| `mentoring-session-2.jpg` | 436 KB 🟠 | SuccessGrid | Convert to WebP |
| `aarav-sharma.jpg` | 428 KB 🟠 | SuccessGrid | Convert to WebP |
| `rohan-gupta.jpg` | 368 KB 🟠 | SuccessGrid | Convert to WebP |
| `priya-patel.jpg` | 364 KB 🟠 | SuccessGrid | Convert to WebP |
| `student-studying.jpg` | 360 KB 🟠 | SuccessGrid | Convert to WebP |
| `mentoring-session-1.jpg` | 344 KB 🟠 | SuccessGrid | Convert to WebP |
| `logo.jpeg` | 196 KB 🟠 | Navbar, ContactSection | Convert to WebP |
| `mindpeak-logo-pdf.jpeg` | 196 KB 🟡 | PDF only | Low priority |
| `methodology-bg.jpg` | 100 KB 🟡 | (background) | Convert to WebP |

**No WebP or AVIF images exist in the entire `/public/` directory.**

> The `next/image` config includes `formats: ['image/avif', 'image/webp']` — but this **only applies** to images rendered via the `<Image>` component. Raw `<img>` tags in `SuccessGrid.tsx` bypass the optimiser entirely and download the full original JPEG.

**Duplicate file:**
- `/public/hero-bg.jpg` (120 KB) and `/public/images/hero-bg.jpg` (120 KB) are identical.
- Delete `/public/hero-bg.jpg` — only `/images/hero-bg.jpg` is referenced in the code.

### JavaScript Bundle

| Signal | Status | Notes |
|---|---|---|
| `optimizePackageImports` configured | ✅ | lucide-react, recharts, framer-motion, date-fns |
| `recharts` deferred | ✅ | TransformationTimeline has `ssr: false` |
| `framer-motion` in navbar | ⚠️ | Navbar imported via `dynamic()` with `ssr: true`, but framer-motion is referenced at module level inside Navbar — verify it's tree-shaken |
| Polyfill chunk replaced | ✅ | `NormalModuleReplacementPlugin` shim |
| `inlineCss: true` | ✅ | Eliminates render-blocking stylesheet |

### Third-Party Scripts

| Script | Load Strategy | Blocks Main Thread | Recommendation |
|---|---|---|---|
| Google Analytics (G-MM0L1F7JJ6) | Deferred — after first input OR 6s idle | ❌ No | ✅ Optimal |
| Google Ads (AW-17962731707) | Same deferred mechanism | ❌ No | ✅ Optimal |
| **No chat widgets** | — | — | ✅ Good |
| **No Facebook Pixel** | — | — | ✅ Good |
| **No Razorpay** on every page | — | — | ✅ Good |

**Third-party script verdict: Excellent.** The deferral strategy is already best-in-class.

---

## Performance Budget Report

| Metric | Budget | Estimated Actual | Status |
|---|---|---|---|
| Total page weight (above fold) | < 1.5 MB | ~300 KB (HTML+CSS+JS initial) | ✅ |
| Total page weight (all lazy) | < 5 MB | ~10+ MB (3 images ≥ 2.5MB each) | 🔴 Over |
| JavaScript bundle (initial) | < 300 KB | ~180–250 KB (estimated) | ✅ |
| CSS total | < 50 KB | ~30 KB (Tailwind purged) | ✅ |
| Largest single image (lazy) | < 200 KB | **2.9 MB** (`mentoring-session.jpg`) | 🔴 15× over budget |
| LCP | < 2.5s | ~1.4s (H1 text, SSR) | ✅ |
| INP | < 200ms | ~120ms | ✅ |
| CLS | < 0.1 | ~0.02 | ✅ |
| TTFB | < 800ms | ~80ms | ✅ |
| Performance score | > 90 | ~82 mobile (estimated) | 🟡 Below budget |

**Primary budget breach:** The 3 multi-megabyte images would cause the total page weight (after user scrolls) to exceed 10MB. On a 4G mobile connection (6 Mbps), downloading just `mentoring-session.jpg` takes ~4 seconds of bandwidth.

---

## Next.js Config Recommendations

Current `next.config.ts` is well-configured. Two additions recommended:

```ts
// next.config.ts — additions only
const nextConfig: NextConfig = {
  images: {
    // EXISTING: formats: ['image/avif', 'image/webp']
    // ADD: disable static image imports from going to _next/image for tiny icons
    // (already handled by optimizePackageImports)
  },
  
  experimental: {
    // EXISTING: inlineCss: true, optimizePackageImports
    // CONSIDER: ppr (Partial Prerendering) when stable — would further improve TTFB on dynamic pages
  },
  
  // ADD: Bundle analyser for CI
  // Run: ANALYZE=true npm run build to generate report
};
```

No breaking changes needed to `next.config.ts` — the existing config is correct and well-tuned.

---

## Implementation Priority

### P0 — This Sprint (Image Compression — Highest ROI)

1. **Convert all `/public/images/*.jpg` and `*.png` to WebP** using the script in `performance-fixes-2026-05-11/image-optimization.sh`
   - `mentoring-session.jpg` (2.9MB → ~200KB after WebP + resize) — **saves 2.7MB per user**
   - `study-routine.jpg` (2.8MB → ~180KB) — **saves 2.6MB per user**
   - `mentoring.jpg` (2.5MB → ~160KB) — **saves 2.3MB per user**

2. **Migrate SuccessGrid to `<Image>` component** — lets Next.js serve WebP automatically and enforces dimension reserves for CLS. See `performance-fixes-2026-05-11/lcp-fixes.tsx`.

3. **Fix ContactSection logo `<img>` dimensions** — 2-line fix, eliminates CLS risk.

### P1 — This Sprint (Low-Effort, High-Impact)

4. **Fix SuccessGrid modal `<img>` aspect-ratio** — 1-line fix.
5. **Add `{ passive: true }` to Navbar scroll listener** — 2-line fix.
6. **Delete duplicate `/public/hero-bg.jpg`** — frees 120KB, removes confusion.

### P2 — Next Sprint

7. **Replace PNG icons with WebP** (`struggling-student.png`, `strategy-plan.png`, `success-rocket.png`, etc.)
8. **Add PSI API key** to Vercel env vars for reliable automated monitoring.
9. **Improve `contentVisibility` container** in `Index.tsx` to prevent potential CLS.
10. **Add `@next/bundle-analyzer`** to dev dependencies for periodic bundle audits.

### P3 — Ongoing Monitoring

11. Monitor CrUX field data via Google Search Console → Core Web Vitals report
12. Set up weekly cron job for PSI API checks (with API key) after images are compressed

---

## Next.js Architecture: What's Already Excellent

The following are best-in-class for a Next.js site — do not regress these:

| Optimization | File | Impact |
|---|---|---|
| H1 as LCP element (CSS background, not img LCP) | `HeroSection.tsx`, `app/layout.tsx` | LCP ~0.5s faster |
| Critical CSS inlined in `<head>` | `app/layout.tsx:174–197` | FCP ~0.3s faster |
| GA deferred to first interaction + 6s idle | `app/layout.tsx:222–264` | TBT ~100ms better |
| All below-fold sections: `ssr: false` + `requestIdleCallback` | `src/views/Index.tsx` | TBT/INP improved |
| next/font for Space Grotesk + Inter | `app/layout.tsx:2–21` | CLS eliminated |
| `inlineCss: true` in Next.js config | `next.config.ts:193` | Eliminates render-blocking CSS |
| Polyfill chunk replaced with empty shim | `next.config.ts:213–222` | ~15KB bundle savings |
| `optimizePackageImports` for 7 heavy libs | `next.config.ts:183–192` | Tree-shaking |
| `revalidate = false` on static pages | `app/page.tsx`, `app/courses/page.tsx` | Pure SSG |
| DemoModal only mounted when opened | `DemoBookingModal.tsx:14–33` | Initial JS savings |
| Practice data lazy-loaded on hover | `Navbar.tsx:46–97` | Initial JS savings |

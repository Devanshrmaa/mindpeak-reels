/**
 * LCP Fixes — 2026-06-18
 *
 * The homepage redesign (HomeRedesign.tsx) changed the LCP element from the
 * SSR <h1> text to a 446KB raw JPEG hero image. The immediate fixes (preload,
 * fetchPriority, explicit dims) are already applied in this PR. The next step
 * is to convert the JPEG to WebP and optionally use a <picture> tag for AVIF
 * progressive enhancement.
 *
 * FILE: src/components/home-redesign/HomeTop.tsx — MpHero()
 */

// ─── APPLIED (this PR) ───────────────────────────────────────────────────────

// BEFORE
const Before = () => (
  <img
    src="/images/mentoring-session-2.jpg"
    alt="MindPeak mentor session"
    style={{
      position: "relative",
      width: "100%",
      height: 480,
      objectFit: "cover",
      borderRadius: 22,
      display: "block",
      boxShadow: "0 30px 70px rgba(19,32,63,0.22)",
    }}
  />
);

// AFTER (applied in this PR) — fetchPriority + decoding + explicit dims
const AfterStep1 = () => (
  <img
    src="/images/mentoring-session-2.jpg"
    alt="MindPeak mentor and student in a live 1-on-1 online session"
    fetchPriority="high"
    loading="eager"
    decoding="sync"
    width={720}
    height={480}
    style={{
      position: "relative",
      width: "100%",
      height: 480,
      objectFit: "cover",
      borderRadius: 22,
      display: "block",
      boxShadow: "0 30px 70px rgba(19,32,63,0.22)",
    }}
  />
);

// ─── NEXT STEP (after image conversion) ──────────────────────────────────────

/**
 * Upgrade to <picture> with AVIF + WebP + JPEG fallback.
 * Run image-optimization.sh first to generate the WebP file.
 * For AVIF: cwebp doesn't produce AVIF — use squoosh-cli or imagemin-avif.
 *
 * FILE: src/components/home-redesign/HomeTop.tsx — line ~78
 * Also update the preload in app/layout.tsx to reference the WebP.
 */
const AfterStep2WithPicture = () => (
  <picture>
    {/* AVIF — best compression, ~30KB for this image */}
    <source
      type="image/avif"
      srcSet="/images/mentoring-session-2.avif 720w, /images/mentoring-session-2-1440.avif 1440w"
      sizes="(max-width: 768px) 100vw, 720px"
    />
    {/* WebP — ~60KB, supported by all modern browsers */}
    <source
      type="image/webp"
      srcSet="/images/mentoring-session-2.webp 720w, /images/mentoring-session-2-1440.webp 1440w"
      sizes="(max-width: 768px) 100vw, 720px"
    />
    {/* JPEG fallback — 446KB, only downloaded by very old browsers */}
    <img
      src="/images/mentoring-session-2.jpg"
      alt="MindPeak mentor and student in a live 1-on-1 online session"
      fetchPriority="high"
      loading="eager"
      decoding="sync"
      width={720}
      height={480}
      style={{
        position: "relative",
        width: "100%",
        height: 480,
        objectFit: "cover",
        borderRadius: 22,
        display: "block",
        boxShadow: "0 30px 70px rgba(19,32,63,0.22)",
      }}
    />
  </picture>
);

/**
 * Also update app/layout.tsx preload to reference WebP with imagesrcset:
 *
 * <link
 *   rel="preload"
 *   as="image"
 *   href="/images/mentoring-session-2.webp"
 *   imageSrcSet="/images/mentoring-session-2.webp 720w, /images/mentoring-session-2-1440.webp 1440w"
 *   imageSizes="(max-width: 768px) 100vw, 720px"
 *   fetchpriority="high"
 * />
 *
 * Expected LCP impact:
 *   Before (446KB JPEG, no preload):   ~3.5–5.0s mobile 🔴
 *   After step 1 (preload, no WebP):   ~2.0–2.8s mobile 🟡
 *   After step 2 (WebP ~60KB):         ~1.0–1.5s mobile 🟢
 */

export { Before, AfterStep1, AfterStep2WithPicture };

/**
 * CLS Fixes — 2026-06-18
 *
 * All of these are applied in this PR. Documented here for reference.
 *
 * Root cause: The homepage redesign (HomeRedesign.tsx) uses raw <img> tags
 * with dimensions only in inline styles. CSS/inline-style dimensions do NOT
 * tell the browser how much space to reserve before the image loads. HTML
 * attributes width= and height= are what the browser reads for aspect-ratio
 * based space reservation, preventing CLS.
 */

// ─── FIX 1: Hero image (HomeTop.tsx MpHero) ──────────────────────────────────
// CLS impact: HIGH — largest element, paint-time shift would be very visible

// BEFORE
const heroImgBefore = (
  <img
    src="/images/mentoring-session-2.jpg"
    alt="MindPeak mentor session"
    style={{ position: "relative", width: "100%", height: 480, objectFit: "cover", borderRadius: 22, display: "block" }}
  />
);

// AFTER ✅ applied
const heroImgAfter = (
  <img
    src="/images/mentoring-session-2.jpg"
    alt="MindPeak mentor and student in a live 1-on-1 online session"
    fetchPriority="high"
    loading="eager"
    decoding="sync"
    width={720}
    height={480}
    style={{ position: "relative", width: "100%", height: 480, objectFit: "cover", borderRadius: 22, display: "block" }}
  />
);

// ─── FIX 2: Nav logo (HomeTop.tsx MpNav) ─────────────────────────────────────
// CLS impact: LOW — small image, but 4 copies on page

// BEFORE
const logoNavBefore = (
  <img src="/images/logo.jpeg" alt="MindPeak Institute" style={{ width: 32, height: 32, borderRadius: "50%", display: "block" }} />
);

// AFTER ✅ applied
const logoNavAfter = (
  <img src="/images/logo.jpeg" alt="MindPeak Institute" width={32} height={32} style={{ width: 32, height: 32, borderRadius: "50%", display: "block" }} />
);

// ─── FIX 3: Student avatar stack (HomeTop.tsx MpHero) ────────────────────────
// CLS impact: LOW-MEDIUM — 4 small images in a row, visible shift if late

// BEFORE
const avatarsBefore = (s: string, i: number) => (
  <img key={s} src={`/images/${s}.jpg`} alt="MindPeak student" style={{ width: 38, height: 38, objectFit: "cover", borderRadius: "50%" }} />
);

// AFTER ✅ applied
const avatarsAfter = (s: string, i: number) => (
  <img key={s} src={`/images/${s}.jpg`} alt="MindPeak student" width={38} height={38} style={{ width: 38, height: 38, objectFit: "cover", borderRadius: "50%" }} />
);

// ─── FIX 4: Ledger student photos (HomeMid.tsx MpLedger) ─────────────────────
// CLS impact: LOW — below fold, lazy-loaded, but dimensions still matter

// BEFORE
const ledgerImgBefore = (r: { img: string; name: string }) => (
  <img src={r.img} alt={r.name} style={{ width: 58, height: 58, objectFit: "cover", borderRadius: "50%" }} />
);

// AFTER ✅ applied
const ledgerImgAfter = (r: { img: string; name: string }) => (
  <img src={r.img} alt={r.name} width={58} height={58} loading="lazy" style={{ width: 58, height: 58, objectFit: "cover", borderRadius: "50%" }} />
);

// ─── FIX 5: Testimonial photos (HomeExtras.tsx MpVoices) ─────────────────────
// CLS impact: LOW — below fold

// BEFORE
const voiceImgBefore = (v: { img: string; name: string }) => (
  <img src={v.img} alt={v.name} style={{ width: 46, height: 46, objectFit: "cover", borderRadius: "50%" }} />
);

// AFTER ✅ applied
const voiceImgAfter = (v: { img: string; name: string }) => (
  <img src={v.img} alt={v.name} width={46} height={46} loading="lazy" style={{ width: 46, height: 46, objectFit: "cover", borderRadius: "50%" }} />
);

// ─── FIX 6: Footer logo (HomeBottom.tsx) ─────────────────────────────────────
// CLS impact: NEGLIGIBLE — at bottom, but good practice

// BEFORE
const footerLogoBefore = (
  <img src="/images/logo.jpeg" alt="MindPeak Institute" style={{ width: 28, height: 28, borderRadius: "50%" }} />
);

// AFTER ✅ applied
const footerLogoAfter = (
  <img src="/images/logo.jpeg" alt="MindPeak Institute" width={28} height={28} loading="lazy" style={{ width: 28, height: 28, borderRadius: "50%" }} />
);

export {};

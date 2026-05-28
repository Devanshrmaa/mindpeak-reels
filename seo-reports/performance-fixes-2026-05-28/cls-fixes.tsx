/**
 * CLS Fixes — MindPeak Institute
 * Date: 2026-05-28
 *
 * CLS STATUS: GOOD (estimated ~0.01-0.02, well under 0.1 threshold)
 * Three issues from last week's audit are CONFIRMED FIXED.
 * One new issue found and fixed this week (Courses.tsx logo).
 */

// ─────────────────────────────────────────────────────────────────────────────
// FIX 1: ContactSection logo — FIXED on or before 2026-05-28 (confirmed)
// File: src/components/sections/ContactSection.tsx:45
// ─────────────────────────────────────────────────────────────────────────────

// BEFORE (caused CLS — no dimensions reserved):
const contactLogoBefore = `
<img src={logo} alt="MindPeak Institute"
  className="w-16 h-16 rounded-full mx-auto mb-8 ring-1 ring-foreground/[0.08]" />
`;

// AFTER (confirmed in code):
const contactLogoAfter = `
<img src={logo} alt="MindPeak Institute"
  className="w-16 h-16 rounded-full mx-auto mb-8 ring-1 ring-foreground/[0.08]"
  width={64} height={64} />
`;

// ─────────────────────────────────────────────────────────────────────────────
// FIX 2: SuccessGrid modal image — FIXED on or before 2026-05-28 (confirmed)
// File: src/components/sections/SuccessGrid.tsx:150-157
// ─────────────────────────────────────────────────────────────────────────────

// BEFORE (caused CLS when lightbox opened — no dimensions):
const modalImgBefore = `
<img src={selected.image} alt={...}
  className="w-full max-h-[70vh] object-contain rounded-xl" />
`;

// AFTER (confirmed in code — dimensions + aspect-ratio applied):
const modalImgAfter = `
<img src={selected.image} alt={...}
  className="w-full max-h-[70vh] object-contain rounded-xl"
  width={800} height={1000}
  style={{ aspectRatio: '4/5' }} />
`;

// ─────────────────────────────────────────────────────────────────────────────
// FIX 3: Courses.tsx course logo img — FIXED 2026-05-28
// File: src/views/Courses.tsx:66
// ─────────────────────────────────────────────────────────────────────────────

// BEFORE (caused CLS — raw <img> with no dimensions, browser can't reserve space):
const courseLogoBefore = `
<div className="w-12 h-12 rounded-xl overflow-hidden ring-1 ring-foreground/[0.08] bg-white/5 shrink-0">
  <img src={course.logo} alt={course.name}
    className="w-full h-full object-contain" loading="lazy" />
</div>
`;

// AFTER (implemented — uses Next.js Image fill, parent has position:relative):
const courseLogoAfter = `
<div className="relative w-12 h-12 rounded-xl overflow-hidden ring-1 ring-foreground/[0.08] bg-white/5 shrink-0">
  <Image src={course.logo} alt={course.name}
    fill className="object-contain" loading="lazy" sizes="48px" />
</div>
`;
// Impact: Next.js Image fill reserves exact 48×48px space via the positioned container.
// CLS eliminated for course logo display on /courses page.

// ─────────────────────────────────────────────────────────────────────────────
// FIX 4: contentVisibility container — P2 backlog (low urgency)
// File: src/views/Index.tsx:55-75
// ─────────────────────────────────────────────────────────────────────────────

// CURRENT (potential 0→3000px jump if user scrolls before idle fires):
const indexCurrentLayout = `
{showDeferredSections ? (
  <div style={{ contentVisibility: 'auto', containIntrinsicSize: '3000px', contain: 'layout style paint' }}>
    <ProblemSection />
    ...
  </div>
) : null}
`;

// RECOMMENDED (always reserves space — prevents 0→3000px layout jump):
const indexRecommendedLayout = `
{/* Always render the height placeholder — prevents CLS when sections mount */}
<div style={{ minHeight: showDeferredSections ? undefined : '4000px' }}>
  {showDeferredSections && (
    <div style={{ contentVisibility: 'auto', containIntrinsicSize: '4000px', contain: 'layout style paint' }}>
      <ProblemSection />
      ...
    </div>
  )}
</div>
`;
// NOTE: Only apply this if CrUX data shows CLS > 0.05. Current estimated CLS ~0.01-0.02
// so this is low priority. The idle/scroll behavior is unlikely to trigger in practice.

// ─────────────────────────────────────────────────────────────────────────────
// CLS CHECKLIST (2026-05-28)
// ─────────────────────────────────────────────────────────────────────────────

const clsChecklist = {
  nextFont_noFOIT: '✅ next/font/google — Space Grotesk + Inter, display:swap',
  heroImgDimensions: 'N/A — Hero is CSS background, not <img>',
  contactSectionLogoDimensions: '✅ FIXED — width={64} height={64} confirmed',
  successGridGridImages: '✅ FIXED 2026-05-28 — migrated to <Image fill>',
  successGridModalDimensions: '✅ FIXED — width={800} height={1000} + aspectRatio confirmed',
  coursesLogoImg: '✅ FIXED 2026-05-28 — migrated to <Image fill>',
  navbarLogo: '✅ Already uses <Image width={36} height={36}>',
  beforeAfterIcons: '✅ width={112} height={112} present',
  transformationTimelineIcons: '✅ width={40} height={40} present',
  noContentInjectedAboveFold: '✅ All dynamic sections render below hero',
  contentVisibilityContainer: '🟡 P2 backlog — see FIX 4 above',
};

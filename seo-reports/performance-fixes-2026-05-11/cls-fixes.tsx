/**
 * CLS Fixes — 2026-05-11
 *
 * All fixes address layout shifts caused by images without reserved dimensions.
 * Current CLS is estimated ~0.02 (green), but these fixes prevent regressions
 * as more images / sections are added.
 */

// ─────────────────────────────────────────────────────────────────────────────
// FIX 1 (HIGH): ContactSection logo — missing width/height
// File: src/components/sections/ContactSection.tsx:45
// ─────────────────────────────────────────────────────────────────────────────

// BEFORE:
export const _contactLogoBefore = `
<img src={logo} alt="MindPeak Institute" className="w-16 h-16 rounded-full mx-auto mb-8 ring-1 ring-foreground/[0.08]" />
`;

// AFTER (2-character change — add width={64} height={64}):
export const _contactLogoAfter = `
<img src={logo} alt="MindPeak Institute" className="w-16 h-16 rounded-full mx-auto mb-8 ring-1 ring-foreground/[0.08]" width={64} height={64} />
`;

// ─────────────────────────────────────────────────────────────────────────────
// FIX 2 (MEDIUM): SuccessGrid modal lightbox — missing dimensions
// File: src/components/sections/SuccessGrid.tsx:150–154
// ─────────────────────────────────────────────────────────────────────────────

// BEFORE:
export const _modalImgBefore = `
<img
  src={selected.image}
  alt={altTextMap[selected.id] || selected.title}
  className="w-full max-h-[70vh] object-contain rounded-xl"
/>
`;

// AFTER (add aspect-ratio to prevent CLS when lightbox opens):
export const _modalImgAfter = `
<img
  src={selected.image}
  alt={altTextMap[selected.id] || selected.title}
  className="w-full max-h-[70vh] object-contain rounded-xl"
  style={{ aspectRatio: '4/5' }}
  width={800}
  height={1000}
/>
`;

// ─────────────────────────────────────────────────────────────────────────────
// FIX 3 (MEDIUM): Index.tsx — Prevent 0→height CLS when deferred sections mount
// File: src/views/Index.tsx:54–80
// ─────────────────────────────────────────────────────────────────────────────

// BEFORE — deferred sections are null until idle, then 3000px container appears:
export const _indexDeferredBefore = `
{showDeferredSections ? (
  <div
    style={{
      contentVisibility: 'auto',
      containIntrinsicSize: '3000px',
      contain: 'layout style paint',
    }}
  >
    <ProblemSection />
    <DiscoverySection />
    ...
  </div>
) : null}
`;

// AFTER — always render a placeholder with minimum height so no shift when
// content mounts. The outer div reserves space even before sections load.
// The inner div uses contentVisibility to skip paint until near viewport.
export const _indexDeferredAfter = `
{/* Always rendered: reserves space so content mounting causes no layout shift */}
<div style={{ minHeight: showDeferredSections ? undefined : '4200px' }}>
  {showDeferredSections && (
    <div
      style={{
        contentVisibility: 'auto',
        containIntrinsicSize: '4200px',
        contain: 'layout style paint',
      }}
    >
      <ProblemSection />
      <DiscoverySection />
      <TransformationTimeline />
      <BeforeAfterSection />
      <ResultSection />
      <StatsSection />
      <SuccessGrid />
      <CourseFlashcards />
      <MethodologySection />
      <FAQSection />
      <ContactSection />
    </div>
  )}
</div>
`;

// NOTE: Set minHeight to a value slightly larger than the actual rendered height.
// Monitor actual height in DevTools after the page loads, then tune accordingly.
// 4200px is a conservative estimate; adjust if sections get taller.

export {};

/**
 * CLS Fixes — MindPeak Institute Performance Audit 2026-05-21
 *
 * ALL fixes below have been applied to the codebase in this session.
 * This file documents what changed and why.
 */

// ============================================================
// FIX 1 — BlogPostClient.tsx:155 — Blog CTA logo
// ============================================================
// BEFORE: no width/height → browser didn't know 40×40 until image loaded → CLS
// <img src={logo} alt="MindPeak" className="w-10 h-10 rounded-full" />

// AFTER: explicit dimensions allow browser to pre-allocate space
// <img src={logo} alt="MindPeak" className="w-10 h-10 rounded-full" width={40} height={40} />

// ============================================================
// FIX 2 — Courses.tsx:66 — Course card logo
// ============================================================
// Container is w-12 h-12 (48×48px)
// BEFORE:
// <img src={course.logo} alt={course.name} className="w-full h-full object-contain" loading="lazy" />
// AFTER:
// <img src={course.logo} alt={course.name} className="w-full h-full object-contain" loading="lazy" width={48} height={48} />

// ============================================================
// FIX 3 — Courses.tsx:258 — Category filter card logo
// ============================================================
// Container is w-14 h-14 (56×56px)
// BEFORE:
// <img src={item.logo} alt={item.title} className="w-full h-full object-contain" loading="lazy" />
// AFTER:
// <img src={item.logo} alt={item.title} className="w-full h-full object-contain" loading="lazy" width={56} height={56} />

// ============================================================
// FIX 4 — CourseDetail.tsx:203 — Course detail hero logo
// ============================================================
// Container is w-20 h-20 (80×80px). Also added loading="lazy" since this is
// below the primary nav area.
// BEFORE:
// <img src={course.logo} alt={course.name} className="w-full h-full object-contain" />
// AFTER:
// <img src={course.logo} alt={course.name} className="w-full h-full object-contain" loading="lazy" width={80} height={80} />

// ============================================================
// FIX 5 — Index.tsx — contentVisibility height reservation
// ============================================================
// The deferred sections container was rendered as null until requestIdleCallback
// fired, causing a sudden 0→3000px height jump that could shift visible content.
//
// BEFORE:
// {showDeferredSections ? (
//   <div style={{ contentVisibility: 'auto', containIntrinsicSize: '3000px', ... }}>
//     ...
//   </div>
// ) : null}
//
// AFTER — always render a placeholder div that reserves the estimated height:
// <div style={{ minHeight: showDeferredSections ? undefined : '4000px' }}>
//   {showDeferredSections && (
//     <div style={{ contentVisibility: 'auto', containIntrinsicSize: '4000px', ... }}>
//       ...
//     </div>
//   )}
// </div>
//
// Key insight: the outer div's minHeight is 4000px when sections are hidden,
// but collapses to natural height once sections mount (undefined minHeight).
// containIntrinsicSize bumped from 3000 → 4000px to more accurately match
// the actual rendered height (17 content sections).

// ============================================================
// REMAINING CLS RISK — Large JPEGs in SuccessGrid
// ============================================================
// The SuccessGrid uses raw <img> tags for student photos (2.9 MB, 2.8 MB JPEGs).
// While these are below the fold and use loading="lazy", they will still shift
// content if the browser can't determine their dimensions before layout.
// Fix: See lcp-fixes.tsx — migrate to <Image> with explicit width/height.

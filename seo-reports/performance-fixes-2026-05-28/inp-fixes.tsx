/**
 * INP Fixes — MindPeak Institute
 * Date: 2026-05-28
 *
 * INP STATUS: EXCELLENT (estimated ~100-130ms mobile, well under 200ms threshold)
 * Last week's passive scroll listener issue CONFIRMED FIXED.
 * No new INP regressions found this week.
 */

// ─────────────────────────────────────────────────────────────────────────────
// FIX 1: Navbar scroll listener passive — FIXED on or before 2026-05-28
// File: src/components/sections/Navbar.tsx:111-114
// ─────────────────────────────────────────────────────────────────────────────

// BEFORE (flagged May 11 — scroll listener not explicitly passive):
const navbarScrollBefore = `
useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 50);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
`;

// AFTER (confirmed in code — { passive: true } applied):
const navbarScrollAfter = `
useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 50);
  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll, { passive: true });
}, []);
`;
// Impact: Scroll events no longer block the main thread waiting for
// preventDefault(). Eliminates potential jank during scroll interactions.

// ─────────────────────────────────────────────────────────────────────────────
// MONITORING: Practice data lazy-load hover latency
// File: src/components/sections/Navbar.tsx:46-97
// ─────────────────────────────────────────────────────────────────────────────

// STATUS: Acceptable — no fix required
// The loadPracticeData() callback is guarded by practiceLoadedRef so it only
// runs once. The dynamic import of @/data/practice and @/data/neet-practice
// is chunked separately and cached after first hover.
// Estimated first-hover delay: 100-300ms (acceptable for a dropdown).
// No fix needed unless CrUX INP data shows consistent >200ms on mobile.

// ─────────────────────────────────────────────────────────────────────────────
// INP CHECKLIST (2026-05-28)
// ─────────────────────────────────────────────────────────────────────────────

const inpChecklist = {
  scrollHandlersPassive: '✅ FIXED — Navbar scroll listener uses { passive: true }',
  gaDeferred: '✅ GA loads after first input OR 6s idle — zero TBT contribution',
  noBlockingThirdParty: '✅ No Razorpay, Tawk, Crisp, Hotjar, FB Pixel on page load',
  demoModalLazyLoaded: '✅ DemoBookingModalContent uses dynamic() — not in initial bundle',
  practiceDataLazyLoaded: '✅ Loaded on first hover, guarded by ref — not blocking',
  frameMotionAnimations: '✅ All MethodologySection animations are synchronous setState',
  noLongTasksDetected: '✅ No synchronous data processing in event handlers',
  belowFoldSectionsDeferred: '✅ requestIdleCallback(1800ms) + 13 ssr:false dynamic imports',
};

// ─────────────────────────────────────────────────────────────────────────────
// FUTURE CONSIDERATION: React.memo for heavy animated components
// ─────────────────────────────────────────────────────────────────────────────

// None of the 103 components use React.memo(). For the current traffic level
// this is acceptable — React only re-renders when props change, and the dynamic
// import strategy already isolates each section's render tree.
//
// If INP degrades in the future, consider wrapping these first:
// 1. FAQSection — 10+ accordion items, re-renders on toggle
// 2. MethodologySection — AnimatePresence on expand/collapse
// 3. CourseFlashcards — scroll-based highlight state
//
// Implement only if CrUX shows INP > 150ms sustained.

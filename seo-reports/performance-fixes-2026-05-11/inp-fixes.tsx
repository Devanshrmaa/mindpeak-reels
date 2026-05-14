/**
 * INP Fixes — 2026-05-11
 *
 * Current INP is estimated ~120ms (green). These fixes prevent future
 * regressions as the site grows.
 */

// ─────────────────────────────────────────────────────────────────────────────
// FIX 1 (MEDIUM): Navbar scroll listener — add { passive: true }
// File: src/components/sections/Navbar.tsx:110–115
//
// Without { passive: true }, the browser cannot optimise scroll handling
// because it doesn't know if preventDefault() will be called.
// ─────────────────────────────────────────────────────────────────────────────

// BEFORE:
export const _navbarScrollBefore = `
useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 50);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
`;

// AFTER:
export const _navbarScrollAfter = `
useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 50);
  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll, { passive: true });
}, []);
`;

// ─────────────────────────────────────────────────────────────────────────────
// FIX 2 (LOW): Add React.memo to pure presentational components
//
// The components below re-render whenever their parent re-renders.
// While not currently a problem (parent state changes are rare), wrapping
// with React.memo is zero-risk and future-proofs against parent expansions.
// ─────────────────────────────────────────────────────────────────────────────

// Candidates (read-only, no internal state, props are stable):
// - src/components/FeaturedSnippet.tsx
// - src/components/PageFAQ.tsx
// - src/components/PeopleAlsoAsk.tsx
// - src/components/RelatedPages.tsx
// - src/components/InternalLinks.tsx

// Example:
export const _memoExample = `
import React from 'react';

// BEFORE:
export const PageFAQ = ({ items }) => { ... };

// AFTER:
export const PageFAQ = React.memo(function PageFAQ({ items }) { ... });
`;

// ─────────────────────────────────────────────────────────────────────────────
// FIX 3 (INFORMATIONAL): MethodologySection accordion — current implementation
// is already optimal. No changes needed.
//
// The toggle handler calls setExpandedIndex synchronously.
// Framer Motion's AnimatePresence runs off the main thread.
// AnimatePresence uses CSS transitions — no layout thrashing.
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// FIX 4 (INFORMATIONAL): BeforeAfterSection toggle — already optimal.
//
// The Before/After toggle calls setShowAfter(true/false) synchronously.
// Motion's animate prop uses CSS vars — no re-layout.
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// FIX 5 (MONITORING): Practice mega-menu data loading
// File: src/components/sections/Navbar.tsx:46–97
//
// On first hover over "Practice", two dynamic imports fire simultaneously:
//   import('@/data/practice')
//   import('@/data/neet-practice')
//
// This is correct — Promise.all() parallelises the imports.
// The `practiceLoadedRef` guard prevents duplicate imports.
// No fix needed, but MONITOR: if these data files grow beyond 500KB each,
// consider splitting into per-subject chunks.
// ─────────────────────────────────────────────────────────────────────────────

export {};

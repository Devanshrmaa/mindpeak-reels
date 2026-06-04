/**
 * INP Fixes — 2026-06-04
 *
 * STATUS: No new INP issues found. All previously identified issues are resolved.
 *
 * The site scores ~115ms INP (estimated) — well under the 200ms green threshold.
 * No code changes required for INP this week.
 */

// ─── ALREADY FIXED (previous sprint) ─────────────────────────────────────────
//
// Navbar scroll listener — src/components/sections/Navbar.tsx:112
//
// BEFORE:
//   window.addEventListener('scroll', handleScroll);
//
// AFTER (current state ✅):
//   window.addEventListener('scroll', handleScroll, { passive: true });
//   return () => window.removeEventListener('scroll', handleScroll, { passive: true });
//
// WHY: Without `passive: true`, the browser waits to see if the handler calls
// preventDefault() before executing scroll rendering — adds latency on each scroll event.

// ─── MONITORING NOTES ─────────────────────────────────────────────────────────
//
// Watch for INP regressions if any of these are added:
// 1. synchronous heavy computation in click/scroll handlers
// 2. large React state updates triggered by user input
// 3. third-party scripts that register their own event listeners
// 4. animations that use `layout` in framer-motion (triggers layout recalculation)
//
// The current codebase avoids all of these patterns.

export {};

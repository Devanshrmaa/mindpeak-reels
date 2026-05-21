/**
 * INP Fixes — MindPeak Institute Performance Audit 2026-05-21
 *
 * All previously identified INP issues have been resolved.
 * This file documents completed fixes and new watch items.
 */

// ============================================================
// COMPLETED FIX — Navbar passive scroll listener (May 11)
// ============================================================
// File: src/components/sections/Navbar.tsx:112–113
//
// BEFORE:
// window.addEventListener('scroll', handleScroll);
// return () => window.removeEventListener('scroll', handleScroll);
//
// AFTER (confirmed applied):
// window.addEventListener('scroll', handleScroll, { passive: true });
// return () => window.removeEventListener('scroll', handleScroll, { passive: true });
//
// Impact: prevents browser from blocking scroll optimization while
// waiting to check if the handler calls preventDefault().

// ============================================================
// WATCH ITEM — FadeInView saturation in expanded pages
// ============================================================
// JEECoaching.tsx (548 lines) and NEETCoaching.tsx (518 lines) now use
// many FadeInView wrappers around individual paragraphs and section items.
// Each FadeInView registers a framer-motion useInView IntersectionObserver.
//
// IntersectionObserver callbacks are NOT on the main thread, so this is
// unlikely to cause measurable INP issues. However, if Search Console
// shows INP regression on these pages after the content expansion,
// consider consolidating FadeInView to section-level only:
//
// BEFORE (many fine-grained observers):
// <FadeInView><p>...</p></FadeInView>
// <FadeInView><p>...</p></FadeInView>
// <FadeInView><ul>...</ul></FadeInView>
//
// AFTER (one observer per section):
// <FadeInView>
//   <p>...</p>
//   <p>...</p>
//   <ul>...</ul>
// </FadeInView>

// ============================================================
// GOOD PATTERNS — Do not change
// ============================================================
//
// 1. Demo modal lazy-loading:
//    DemoBookingModal.tsx uses dynamic({ ssr: false }) — modal JS is only
//    downloaded when the user first opens it. Click-to-open feels instant
//    because the UI shows immediately while the form chunk loads in parallel.
//
// 2. Practice dropdown data:
//    Navbar.tsx loads practice/neet-practice data on first hover, then caches.
//    This is the right tradeoff: no cost on pages where user never hovers
//    the nav, and after first hover the data is instant.
//
// 3. All section components use ssr: false + requestIdleCallback:
//    Main thread is free during the critical LCP window.

/**
 * INP Fixes — 2026-06-18
 *
 * No new INP regressions introduced by the homepage redesign.
 * One carry-forward fix from the May baseline: passive scroll listener.
 *
 * Status: ⏳ Not yet applied — included here for the next dev sprint.
 */

// ─── Carry-forward: Navbar scroll listener passive flag ──────────────────────
// FILE: src/components/sections/Navbar.tsx (used on non-homepage pages)
// IMPACT: Prevents scroll jank on browsers that check for passive before optimising scroll.
// Risk: ZERO — { passive: true } just means "I promise this handler won't call preventDefault()".

// BEFORE
const navbarScrollBefore = () => {
  // Inside Navbar component:
  // useEffect(() => {
  //   const handleScroll = () => setScrolled(window.scrollY > 50);
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);
};

// AFTER — add { passive: true } to both addEventListener and removeEventListener
const navbarScrollAfter = () => {
  // useEffect(() => {
  //   const handleScroll = () => setScrolled(window.scrollY > 50);
  //   window.addEventListener('scroll', handleScroll, { passive: true });
  //   return () => window.removeEventListener('scroll', handleScroll);
  //   // Note: removeEventListener ignores the options object, so no change needed there
  // }, []);
};

// ─── Suggested improvement: Dynamic imports for HomeRedesign below-fold sections
// FILE: src/views/HomeRedesign.tsx
// IMPACT: Reduces initial JS bundle by ~30–50KB, lowers TBT on mobile.
// This mirrors the pattern from the old src/views/Index.tsx.
//
// BEFORE (current — all sections statically imported at module level):
//
// import { MpNav, MpHero, MpMarquee, MpWeek } from "@/components/home-redesign/HomeTop";
// import { MpLedger, MpReportProof, MpPrograms } from "@/components/home-redesign/HomeMid";
// import { MpFAQ, MpContact } from "@/components/home-redesign/HomeBottom";
// import { MpCompare, MpMethod, MpVoices, MpStats } from "@/components/home-redesign/HomeExtras";
//
// AFTER — keep above-fold sections as static imports, lazy-load below-fold:
//
// import { MpNav, MpHero, MpMarquee } from "@/components/home-redesign/HomeTop";
// import dynamic from "next/dynamic";
//
// const MpWeek = dynamic(() =>
//   import("@/components/home-redesign/HomeTop").then(m => ({ default: m.MpWeek })),
//   { ssr: false, loading: () => <div style={{ height: 320 }} /> }
// );
// const MpCompare = dynamic(() =>
//   import("@/components/home-redesign/HomeExtras").then(m => ({ default: m.MpCompare })),
//   { ssr: false, loading: () => <div style={{ height: 560 }} /> }
// );
// const MpLedger = dynamic(() =>
//   import("@/components/home-redesign/HomeMid").then(m => ({ default: m.MpLedger })),
//   { ssr: false, loading: () => <div style={{ height: 400 }} /> }
// );
// // ... and so on for remaining below-fold sections
//
// NOTE: The placeholder height values should match the section's rendered height
// to avoid CLS when the section hydrates. Measure in DevTools first.

export {};

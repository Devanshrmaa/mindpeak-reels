/*
 * Theme constants for the cream/light homepage redesign (v2).
 *
 * Ported from the Claude Design handoff bundle (MindPeak Homepage Redesign).
 * The redesign deliberately departs from the site-wide dark navy theme: the
 * homepage is a warm, cream-on-navy editorial layout with gold accents and
 * pill buttons. These values are scoped to the redesigned homepage only — the
 * rest of the site keeps the global dark theme.
 *
 * Display type uses the production brand font (Space Grotesk, already loaded
 * via next/font); the prototype mocked it with Bricolage Grotesque, but the
 * design system's own tokens canonicalise Space Grotesk, so we stay on-brand.
 */

export const S = {
  bg: "#FBF7EF",
  bgDeep: "#F3ECDC",
  bgTranslucent: "rgba(251,247,239,0.85)",
  cream: "#FBF7EF",
  navy: "#1B2A52",
  navyDeep: "#13203F",
  inkSoft: "#5B6478",
  gold: "#C9971F",
  goldSoft: "#F3E3B8",
  goldBtn: "#E3BE55",
  line: "rgba(27,42,82,0.14)",
  lineLight: "rgba(251,247,239,0.12)",
  creamFaint: "rgba(251,247,239,0.06)",
  creamSoft: "rgba(251,247,239,0.65)",
  gradGold: "linear-gradient(120deg, #EDCB6E 0%, #E3BE55 55%, #D2A52F 100%)",
  gradNavy: "linear-gradient(150deg, #1B2A52 0%, #13203F 100%)",
  shadowSoft: "0 18px 48px rgba(19,32,63,0.10)",
  shadowLift: "0 30px 70px rgba(19,32,63,0.16)",
  ease: "cubic-bezier(0.16, 1, 0.3, 1)",
  disp: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
  dispWeight: 700,
  body: "var(--font-inter), 'Inter', sans-serif",
  btnRadius: 999,

  /* ---- v2.2 creative extensions ----
   * Added for the "living editorial" pass: shimmer text, aurora light,
   * grain texture, pointer-spotlight and a richer accent + shadow scale.
   * Purely additive — none of the originals above changed. */
  green: "#3E8E5A",
  terracotta: "#C25B3F",
  /* moving gold gradient for shimmer headlines (animated via background-position) */
  gradGoldText: "linear-gradient(100deg, #C9971F 0%, #B5841A 18%, #F0D684 42%, #FFF6DD 50%, #F0D684 58%, #B5841A 82%, #C9971F 100%)",
  /* drifting hero "aurora" blobs */
  auroraGold: "radial-gradient(circle, rgba(227,190,85,0.30) 0%, rgba(227,190,85,0) 62%)",
  auroraNavy: "radial-gradient(circle, rgba(27,42,82,0.12) 0%, rgba(27,42,82,0) 62%)",
  auroraGoldSoft: "radial-gradient(circle, rgba(237,203,110,0.16) 0%, rgba(237,203,110,0) 62%)",
  /* pointer-spotlight tints (cream cards vs navy cards) */
  spotCream: "rgba(227,190,85,0.18)",
  spotNavy: "rgba(237,203,110,0.20)",
  /* gold glow elevation */
  shadowGold: "0 20px 52px rgba(201,151,31,0.28)",
} as const;

export type Theme = typeof S;

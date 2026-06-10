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
  disp: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
  dispWeight: 700,
  body: "var(--font-inter), 'Inter', sans-serif",
  btnRadius: 999,
} as const;

export type Theme = typeof S;

/*
 * Theme constants for the cream/light homepage redesign (v2).
 *
 * Ported from the Claude Design handoff bundle (MindPeak Homepage Redesign).
 * The redesign deliberately departs from the site-wide dark navy theme: the
 * homepage is a warm, cream-on-navy editorial layout with gold accents and
 * pill buttons. These values are scoped to the redesigned homepage only — the
 * rest of the site keeps the global dark theme.
 *
 * v3 (dark mode): every colour that must flip between the light (cream) and
 * dark (navy) themes now resolves through a `--mp-*` CSS custom property.
 * The light values live under `:root` and the dark values under `.dark` in
 * `app/globals.css`, so the whole homepage re-themes off the same `.dark`
 * class as the rest of the site. Values that read correctly on both themes
 * (gold gradients, the cream text used on navy bands) stay as literals.
 *
 * Display type uses the production brand font (Space Grotesk, already loaded
 * via next/font); the prototype mocked it with Bricolage Grotesque, but the
 * design system's own tokens canonicalise Space Grotesk, so we stay on-brand.
 */

export const S = {
  bg: "var(--mp-bg)",
  bgDeep: "var(--mp-bg-deep)",
  bgTranslucent: "var(--mp-bg-translucent)",
  /* Text on the navy feature bands — the bands stay navy in both themes. */
  cream: "#FBF7EF",
  /* Primary ink: navy on cream, flips to a pale blue-white on dark. */
  navy: "var(--mp-ink)",
  /* Always-dark navy: text/icons sitting on gold surfaces in BOTH themes. */
  navyDeep: "#13203F",
  inkSoft: "var(--mp-ink-soft)",
  gold: "var(--mp-gold)",
  goldSoft: "var(--mp-gold-soft)",
  /* Ink used on top of goldSoft chips/tags (dark gold-brown → pale gold). */
  goldInk: "var(--mp-gold-ink)",
  goldBtn: "#E3BE55",
  line: "var(--mp-line)",
  /* Lines/tints used on the navy bands — static, bands stay navy. */
  lineLight: "rgba(251,247,239,0.12)",
  creamFaint: "rgba(251,247,239,0.06)",
  creamSoft: "rgba(251,247,239,0.65)",
  /* Raised card surfaces (white on cream, raised navy on dark). */
  card: "var(--mp-card)",
  cardTint: "var(--mp-card-tint)",
  chipBg: "var(--mp-chip-bg)",
  gradGold: "linear-gradient(120deg, #EDCB6E 0%, #E3BE55 55%, #D2A52F 100%)",
  gradNavy: "var(--mp-grad-band)",
  shadowSoft: "var(--mp-shadow-soft)",
  shadowLift: "var(--mp-shadow-lift)",
  ease: "cubic-bezier(0.16, 1, 0.3, 1)",
  disp: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
  dispWeight: 700,
  body: "var(--font-inter), 'Inter', sans-serif",
  btnRadius: 999,

  /* ---- v2.2 creative extensions ----
   * Added for the "living editorial" pass: shimmer text, aurora light,
   * grain texture, pointer-spotlight and a richer accent + shadow scale. */
  green: "var(--mp-green)",
  terracotta: "var(--mp-terracotta)",
  /* moving gold gradient for shimmer headlines (animated via background-position) */
  gradGoldText: "linear-gradient(100deg, #C9971F 0%, #B5841A 18%, #F0D684 42%, #FFF6DD 50%, #F0D684 58%, #B5841A 82%, #C9971F 100%)",
  /* drifting hero "aurora" blobs */
  auroraGold: "radial-gradient(circle, rgba(227,190,85,0.30) 0%, rgba(227,190,85,0) 62%)",
  auroraNavy: "radial-gradient(circle, var(--mp-aurora-cool) 0%, transparent 62%)",
  auroraGoldSoft: "radial-gradient(circle, rgba(237,203,110,0.16) 0%, rgba(237,203,110,0) 62%)",
  /* pointer-spotlight tints (cream cards vs navy cards) */
  spotCream: "rgba(227,190,85,0.18)",
  spotNavy: "rgba(237,203,110,0.20)",
  /* gold glow elevation */
  shadowGold: "0 20px 52px rgba(201,151,31,0.28)",
} as const;

export type Theme = typeof S;

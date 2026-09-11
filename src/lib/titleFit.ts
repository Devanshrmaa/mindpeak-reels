/**
 * SERP title fitting.
 * ───────────────────
 * Google truncates result titles around 60 characters (~600px). The crawl
 * audit of 2026-07-21 found 84 pages that earn impressions but ship titles
 * over 65 chars — some over 100 — so their keywords were being cut off in
 * the SERP exactly while impressions were climbing and clicks were not.
 *
 * Templated titles are the cause: `${chapter} for ${exam} ${year} — Notes,
 * Formulas & N+ PYQs [Free]` is fine for "Kinematics" and 96 characters for
 * "General Organic Chemistry (GOC) & Hydrocarbons".
 *
 * `pickTitle` takes candidates richest-first and returns the first that
 * fits, so short names keep the full value proposition and long names
 * degrade gracefully instead of being chopped mid-word by Google.
 */

export const TITLE_MAX = 60;

/**
 * Google shows roughly 155–160 characters of a meta description before
 * truncating, so description candidates get their own budget.
 */
export const DESCRIPTION_MAX = 160;

/**
 * Returns the first candidate within `max` chars. If none fit, the last
 * (shortest) candidate is ellipsis-truncated as a final guard.
 */
export function pickTitle(candidates: string[], max: number = TITLE_MAX): string {
  for (const c of candidates) {
    if (c.length <= max) return c;
  }
  const last = candidates[candidates.length - 1] ?? '';
  return clampDescription(last, max);
}

/**
 * Word-safe clamp for a single description string.
 *
 * The crawl of 2026-09-11 found 170 of 749 indexable URLs shipping a meta
 * description cut mid-word by a bare `.slice(0, 155)` / `.slice(0, 160)` —
 * 27% of the site's impressions, including the highest-impression page on
 * the site, whose hand-written snippet ended "…compared with real numbe".
 * A snippet that stops mid-word reads as a broken page in the SERP, and
 * those pages converted at 0.56% against the site's 0.95%.
 *
 * So: retreat to the last word boundary, drop any separator left dangling
 * at the cut, and mark the truncation with an ellipsis. Text already within
 * budget is returned untouched — no ellipsis, no trailing-space surprises.
 */
export function clampDescription(text: string, max: number = DESCRIPTION_MAX): string {
  const s = String(text ?? '').trim();
  if (s.length <= max) return s;
  // Reserve the last character for the ellipsis.
  const room = max - 1;
  let cut = s.slice(0, room);
  // A non-space at the first dropped index means the cut landed inside a word.
  if (/\S/.test(s.charAt(room))) cut = cut.replace(/\s+\S*$/, '');
  cut = cut.replace(/[\s,;:—–-]+$/, '');
  // Degenerate input (a single token longer than the budget) keeps the hard cut.
  return cut ? `${cut}…` : s.slice(0, max);
}

/**
 * Same richest-first selection for meta descriptions.
 *
 * Long chapter names ("General Organic Chemistry (GOC) & Hydrocarbons") push a
 * templated description past 160 chars, where the old code hard-sliced it
 * mid-word. Candidates let the name be dropped from the sentence instead of
 * the value proposition being chopped off the end.
 */
export function pickDescription(candidates: string[], max: number = DESCRIPTION_MAX): string {
  return pickTitle(candidates, max);
}

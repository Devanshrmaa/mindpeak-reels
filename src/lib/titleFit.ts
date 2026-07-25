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
 * Returns the first candidate within `max` chars. If none fit, the last
 * (shortest) candidate is ellipsis-truncated as a final guard.
 */
export function pickTitle(candidates: string[], max: number = TITLE_MAX): string {
  for (const c of candidates) {
    if (c.length <= max) return c;
  }
  const last = candidates[candidates.length - 1] ?? '';
  if (last.length <= max) return last;
  // Trim trailing separators/partial words so we never emit "… — …".
  const cut = last.slice(0, max - 1).replace(/[\s—–-]+$/, '');
  return `${cut}…`;
}

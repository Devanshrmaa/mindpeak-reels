/**
 * Converts a question string into an SEO-friendly URL slug.
 *
 * Steps:
 *  1. Strip HTML tags & entities
 *  2. Replace common math / scientific symbols with readable words
 *  3. Lowercase, collapse whitespace, replace spaces → hyphens
 *  4. Remove non-alphanumeric chars (except hyphens)
 *  5. Truncate to ~60 chars at a word boundary
 *  6. Trim leading / trailing hyphens
 */

/* ── Symbol → word map ── */
const SYMBOL_MAP: [RegExp, string][] = [
  [/₀/g, '0'], [/₁/g, '1'], [/₂/g, '2'], [/₃/g, '3'], [/₄/g, '4'],
  [/₅/g, '5'], [/₆/g, '6'], [/₇/g, '7'], [/₈/g, '8'], [/₉/g, '9'],
  [/⁰/g, '0'], [/¹/g, '1'], [/²/g, '2'], [/³/g, '3'], [/⁴/g, '4'],
  [/⁵/g, '5'], [/⁶/g, '6'], [/⁷/g, '7'], [/⁸/g, '8'], [/⁹/g, '9'],
  [/⁻/g, '-'], [/⁺/g, '+'],
  [/×/g, 'x'], [/÷/g, 'div'],
  [/π/g, 'pi'], [/θ/g, 'theta'], [/μ/g, 'mu'], [/ε/g, 'epsilon'],
  [/α/g, 'alpha'], [/β/g, 'beta'], [/γ/g, 'gamma'], [/δ/g, 'delta'],
  [/λ/g, 'lambda'], [/ω/g, 'omega'], [/σ/g, 'sigma'], [/τ/g, 'tau'],
  [/ρ/g, 'rho'], [/ν/g, 'nu'], [/Σ/g, 'sigma'], [/Δ/g, 'delta'],
  [/∞/g, 'infinity'], [/√/g, 'sqrt'], [/∫/g, 'integral'],
  [/→/g, 'to'], [/←/g, 'from'], [/≈/g, 'approx'], [/≠/g, 'not-equal'],
  [/≥/g, 'gte'], [/≤/g, 'lte'], [/°/g, 'deg'],
  [/·/g, '-'], [/±/g, 'plus-minus'],
];

/* ── Stop words to strip for conciseness ── */
const STOP_WORDS = new Set([
  'the', 'a', 'an', 'of', 'in', 'on', 'at', 'to', 'for', 'is', 'are',
  'was', 'were', 'be', 'been', 'being', 'it', 'its', 'by', 'with',
  'from', 'as', 'this', 'that', 'which', 'who', 'whom', 'and', 'or',
  'but', 'if', 'then', 'so', 'than', 'too', 'very', 'can', 'will',
  'just', 'should', 'would', 'could', 'has', 'have', 'had', 'do',
  'does', 'did', 'not', 'no', 'nor', 'each', 'every', 'all', 'any',
  'both', 'few', 'more', 'most', 'other', 'some', 'such', 'only',
  'own', 'same', 'also', 'into', 'about', 'between', 'through',
  'following', 'given', 'respectively',
]);

const MAX_SLUG_LENGTH = 60;

export function slugifyQuestion(question: string): string {
  let s = question;

  // 1. Strip HTML tags
  s = s.replace(/<[^>]*>/g, '');

  // 2. Decode common HTML entities
  s = s.replace(/&amp;/g, 'and').replace(/&lt;/g, '').replace(/&gt;/g, '').replace(/&nbsp;/g, ' ').replace(/&#?\w+;/g, '');

  // 3. Apply symbol map
  for (const [re, rep] of SYMBOL_MAP) {
    s = s.replace(re, rep);
  }

  // 4. Lowercase
  s = s.toLowerCase();

  // 5. Replace non-alphanumeric (except hyphens) with spaces
  s = s.replace(/[^a-z0-9-]+/g, ' ');

  // 6. Collapse whitespace → single space → trim
  s = s.replace(/\s+/g, ' ').trim();

  // 7. Remove stop words
  const words = s.split(' ').filter(w => !STOP_WORDS.has(w) && w.length > 0);

  // 8. Join with hyphens
  s = words.join('-');

  // 9. Collapse multiple hyphens
  s = s.replace(/-{2,}/g, '-');

  // 10. Truncate at word boundary (hyphen boundary)
  if (s.length > MAX_SLUG_LENGTH) {
    s = s.substring(0, MAX_SLUG_LENGTH);
    const lastHyphen = s.lastIndexOf('-');
    if (lastHyphen > 20) {
      s = s.substring(0, lastHyphen);
    }
  }

  // 11. Trim leading/trailing hyphens
  s = s.replace(/^-+|-+$/g, '');

  return s || 'question';
}

/**
 * Given a list of base slugs, ensures uniqueness by appending -2, -3, etc.
 * Returns a map from index → unique slug.
 */
export function deduplicateSlugs(slugs: string[]): string[] {
  const seen = new Map<string, number>();
  return slugs.map(slug => {
    const count = seen.get(slug) ?? 0;
    seen.set(slug, count + 1);
    if (count === 0) return slug;
    return `${slug}-${count + 1}`;
  });
}

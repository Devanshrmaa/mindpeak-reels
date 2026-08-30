/**
 * Split a city hero headline around the city name so the city can be
 * gold-highlighted in place.
 *
 * The city pages used to build this heading by stripping the city out of the
 * sentence, appending it, and then re-appending a hardcoded tail. On every page
 * using the fallback headline that rendered as:
 *
 *   "Crack JEE from  — 1-on-1 mentors, a plan built around you.Coimbatore
 *    — 1-on-1 mentors, a plan built around you."
 *
 * — a mangled, duplicated H1, live on production until 2026-08-29. Splitting
 * keeps the sentence intact, works wherever the city appears, and degrades
 * cleanly when a hand-written heroVariant does not mention the city at all.
 */
export interface HeadlineParts {
  before: string;
  city: string;
  after: string;
}

export function splitHeadlineOnCity(headline: string, city: string): HeadlineParts {
  const at = city ? headline.indexOf(city) : -1;
  if (at === -1) return { before: headline, city: '', after: '' };
  return {
    before: headline.slice(0, at),
    city,
    after: headline.slice(at + city.length),
  };
}

/** The headline as the reader sees it, with the highlight applied. */
export function renderedHeadline(headline: string, city: string): string {
  const p = splitHeadlineOnCity(headline, city);
  return `${p.before}${p.city}${p.after}`;
}

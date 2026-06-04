/**
 * Doorway → hub consolidation map (recovery action #4, redirect engine).
 *
 * Decides, per city coaching slug, whether to 301-redirect it into a live
 * regional hub / metro keeper, 410 it (foreign), or leave it untouched
 * (noindexed) until its state hub is built. Consumed by proxy.ts.
 *
 * Guardrail (from the recovery research): only 301 to a destination that
 * genuinely serves the source's intent — else Google treats it as a
 * soft-404. So we ONLY 301 cities whose state has a live hub (or Delhi,
 * which has a metro keeper); everything else stays noindexed for now.
 */

import { allCities } from '@/data/cityData';
import { stateHubs } from '@/data/stateHubData';
import { INDEXABLE_CITY_SLUGS, INDEXABLE_NATIONAL_COACHING_SLUGS } from '@/lib/indexableCities';
import { STATE_HUB_SLUG_SET } from '@/data/stateHubData';

const INDIAN_STATES = new Set<string>([
  'Uttar Pradesh', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'Rajasthan', 'West Bengal',
  'Madhya Pradesh', 'Bihar', 'Gujarat', 'Andhra Pradesh', 'Telangana', 'Haryana', 'Kerala',
  'Punjab', 'Odisha', 'Delhi', 'Jharkhand', 'Chhattisgarh', 'Assam', 'Uttarakhand',
  'Himachal Pradesh', 'Jammu & Kashmir', 'Goa', 'Chandigarh', 'Manipur', 'Meghalaya',
  'Tripura', 'Mizoram', 'Nagaland', 'Arunachal Pradesh', 'Sikkim', 'Puducherry', 'Daman & Diu',
]);

/** State name → live hub slug (the 12 C1 states with built hubs). */
const HUB_SLUG_BY_STATE = new Map<string, string>(stateHubs.map(h => [h.state, h.slug]));

/** city slug (without exam prefix) → CityData.state */
const STATE_BY_CITY = new Map<string, string>(allCities.map(c => [c.slug, c.state]));

export type ConsolidationAction =
  | { action: 'keep' }
  | { action: '410' }
  | { action: '301'; target: string };

/**
 * Classify a full city coaching slug (e.g. 'jee-coaching-in-mysore').
 * Returns null if the slug isn't a recognised city coaching slug — the
 * caller then applies its normal handling.
 */
export function getCityConsolidation(slug: string): ConsolidationAction | null {
  const m = slug.match(/^(jee|neet)-coaching-in-(.+)$/);
  if (!m) return null;
  const exam = m[1];
  const city = m[2];

  // Indexable already → leave it alone.
  if (STATE_HUB_SLUG_SET.has(slug)) return { action: 'keep' };
  if (INDEXABLE_CITY_SLUGS.has(slug)) return { action: 'keep' };
  if (INDEXABLE_NATIONAL_COACHING_SLUGS.has(slug)) return { action: 'keep' };

  const state = STATE_BY_CITY.get(city);
  if (!state) return null; // unknown city — normal handling

  // Foreign → permanent removal.
  if (!INDIAN_STATES.has(state)) return { action: '410' };

  // Indian city whose state has a live hub → consolidate into it.
  const hubSlug = HUB_SLUG_BY_STATE.get(state);
  if (hubSlug) return { action: '301', target: `/${exam}-coaching-in-${hubSlug}` };

  // Delhi has no state hub but a curated metro keeper page.
  if (state === 'Delhi') return { action: '301', target: `/${exam}-coaching-in-delhi` };

  // Indian city, no hub yet (C2 states) → leave noindexed until its hub ships.
  return null;
}

/** Bare city slugs that exist in our city dataset (e.g. 'mysore', 'jaipur'). */
const CITY_SLUG_SET: ReadonlySet<string> = new Set(allCities.map(c => c.slug));

/**
 * Does this `…coaching-in-…` slug correspond to a page we actually serve?
 *
 * True for: the national flagship pages, the state regional hubs, the curated
 * T1 cities, and any `(jee|neet)-coaching-in-<city>` whose `<city>` exists in
 * our city dataset (those render as noindexed-but-real pages).
 *
 * False for arbitrary/fake city slugs (e.g. `jee-coaching-in-fakecity-xyz`).
 * The catch-all 404 gate uses this so unknown slugs return a real HTTP 404
 * instead of a soft-404 doorway page at HTTP 200 — the scaled-content pattern
 * the March 2026 Spam Update penalised and the site is still recovering from.
 */
export function isServedCityCoachingSlug(slug: string): boolean {
  if (INDEXABLE_NATIONAL_COACHING_SLUGS.has(slug)) return true;
  if (STATE_HUB_SLUG_SET.has(slug)) return true;
  if (INDEXABLE_CITY_SLUGS.has(slug)) return true;
  const m = slug.match(/^(?:jee|neet)-coaching-in-(.+)$/);
  if (m) return CITY_SLUG_SET.has(m[1]);
  return false;
}

const SUBJECT_CITY_RE = /^(jee|neet)-(physics|chemistry|mathematics|biology)-coaching-in-.+$/;

/**
 * Subject-city doorway (e.g. 'jee-physics-coaching-in-jaipur') → 301 target
 * = the genuine subject-intent page ('/jee-physics-preparation'). Returns
 * null if the slug isn't a subject-city slug.
 */
export function getSubjectCityRedirect(slug: string): string | null {
  const m = slug.match(SUBJECT_CITY_RE);
  if (!m) return null;
  return `/${m[1]}-${m[2]}-preparation`;
}

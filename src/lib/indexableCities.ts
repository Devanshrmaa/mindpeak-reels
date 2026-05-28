/**
 * Single source of truth for which `coaching-in-` URLs are allowed to be
 * indexed by Google. Imported by BOTH the metadata resolver
 * (`resolveSlugMetadata.ts`) and the request proxy (`proxy.ts`) so the
 * indexable set can never drift between the rendered `<meta robots>` tag
 * and the HTTP `X-Robots-Tag` header.
 *
 * Background: the site was hit by the March 2026 Spam Update for scaled
 * doorway pages (472 auto-generated expansion cities + subject-city combos).
 * Only the hand-curated T1 cities below — each with unique, locally-specific
 * content — are safe to index. Everything else matching `coaching-in-` must
 * be noindexed at BOTH the meta and header level to be de-indexed quickly.
 *
 * This module is edge/proxy-safe: its only dependency is `examYears`, which
 * is pure (Date-based) and imports nothing heavy.
 */

import { CURRENT_EXAM_YEAR } from '@/lib/examYears';

const YEAR = CURRENT_EXAM_YEAR;

/**
 * Hand-curated T1 city pages that are safe to index.
 * Each entry has a unique title and description referencing city-specific
 * institutions, localities, and coaching landscape.
 * All 472 auto-generated expansion cities remain noindexed.
 */
export const INDEXABLE_CITY_META: Record<string, { title: string; description: string }> = {
  /* ── South India — Karnataka ── */
  'jee-coaching-in-bangalore': {
    title: `Best JEE Coaching in Bangalore ${YEAR} — 1-on-1 with IISc & IIT Alumni | MindPeak`,
    description: `1-on-1 JEE coaching in Bangalore. IISc & IIT alumni mentors, KCET+JEE integrated prep. Students from Koramangala, Whitefield, HSR Layout. Book free demo class.`,
  },
  'neet-coaching-in-bangalore': {
    title: `Best NEET Coaching in Bangalore ${YEAR} — 1-on-1 for KCET & NEET | MindPeak`,
    description: `1-on-1 NEET coaching in Bangalore. KCET+NEET integrated, IISc alumni mentors. Students from Indiranagar, Jayanagar, JP Nagar. Target Ramaiah & BMCRI. Free demo.`,
  },
  'jee-coaching-in-mangalore': {
    title: `Best JEE Coaching in Mangalore ${YEAR} — Gateway to NITK Surathkal | MindPeak`,
    description: `1-on-1 JEE coaching in Mangalore. KCET+JEE integrated, Kannada support, no Bangalore travel. Students from Kadri, Surathkal, Bejai. Target NITK. Free demo.`,
  },
  'neet-coaching-in-mangalore': {
    title: `Best NEET Coaching in Mangalore ${YEAR} — Kasturba Medical College Gateway | MindPeak`,
    description: `1-on-1 NEET coaching in Mangalore. KCET+NEET integrated, Kannada support. Students from Kadri, Kankanady. Target Kasturba & Father Muller Medical. Free demo.`,
  },

  /* ── South India — Tamil Nadu ── */
  'jee-coaching-in-chennai': {
    title: `Best JEE Coaching in Chennai ${YEAR} — IIT Madras is in Your City | MindPeak`,
    description: `1-on-1 JEE coaching in Chennai. TN Board-to-JEE transition specialists, IIT Madras alumni mentors. Students from T. Nagar, Adyar, Velachery. Free demo.`,
  },
  'neet-coaching-in-chennai': {
    title: `Best NEET Coaching in Chennai ${YEAR} — Madras Medical College Aspirants | MindPeak`,
    description: `1-on-1 NEET coaching in Chennai. TN Board-to-NEET specialists. Students from Tambaram, Anna Nagar, OMR. Target MMC & Stanley Medical. Free demo.`,
  },
  'jee-coaching-in-coimbatore': {
    title: `Best JEE Coaching in Coimbatore ${YEAR} — Chennai-Level Coaching, No Relocation | MindPeak`,
    description: `1-on-1 JEE coaching in Coimbatore. Chennai-quality, TN Board-to-JEE. Tamil mentors. Students from Peelamedu, RS Puram, Saravanampatti. Free demo.`,
  },
  'neet-coaching-in-coimbatore': {
    title: `Best NEET Coaching in Coimbatore ${YEAR} — Top Mentors for TN NEET Students | MindPeak`,
    description: `1-on-1 NEET coaching in Coimbatore. Amrita alumni mentors, TN Board+NEET integrated, Tamil support. Students from Gandhipuram, Vadavalli, Ukkadam. Free demo.`,
  },

  /* ── South India — Telangana / Andhra Pradesh ── */
  'jee-coaching-in-hyderabad': {
    title: `Best JEE Coaching in Hyderabad ${YEAR} — 1-on-1 vs Sri Chaitanya Batches | MindPeak`,
    description: `1-on-1 JEE coaching in Hyderabad — not a 150-student batch. TS EAMCET+JEE integrated, Telugu support. Students from Gachibowli, Kukatpally. Free demo.`,
  },
  'neet-coaching-in-hyderabad': {
    title: `Best NEET Coaching in Hyderabad ${YEAR} — 1-on-1 vs Corporate Colleges | MindPeak`,
    description: `1-on-1 NEET coaching in Hyderabad. TS EAMCET+NEET dual prep, Telugu reports. Ameerpet, Madhapur, Kompally students. Target Osmania Medical. Free demo.`,
  },
  'jee-coaching-in-vijayawada': {
    title: `Best JEE Coaching in Vijayawada ${YEAR} — 1-on-1 vs AP Corporate Colleges | MindPeak`,
    description: `1-on-1 JEE coaching in Vijayawada. AP EAMCET+JEE integrated, Telugu support. Students from Governorpet, Benz Circle. No corporate batches. Free demo.`,
  },
  'neet-coaching-in-vijayawada': {
    title: `Best NEET Coaching in Vijayawada ${YEAR} — 1-on-1 for AP NEET Aspirants | MindPeak`,
    description: `1-on-1 NEET coaching in Vijayawada. AP EAMCET+NEET prep, Telugu reports. Students from Gandhinagar, Labbipet, Kanuru. Target Siddhartha Medical. Free demo.`,
  },
  'jee-coaching-in-visakhapatnam': {
    title: `Best JEE Coaching in Visakhapatnam ${YEAR} — No Hyderabad Relocation Needed | MindPeak`,
    description: `1-on-1 JEE coaching in Visakhapatnam. AP EAMCET+JEE, Telugu support. MVP Colony, Dwaraka Nagar, Madhurawada students. No Hyderabad relocation. Free demo.`,
  },
  'neet-coaching-in-visakhapatnam': {
    title: `Best NEET Coaching in Visakhapatnam ${YEAR} — 1-on-1 for Vizag NEET Aspirants | MindPeak`,
    description: `1-on-1 NEET coaching in Visakhapatnam. AP EAMCET+NEET, Telugu support. Rushikonda, Seethammadhara, Gajuwaka students. Target Andhra Medical. Free demo.`,
  },

  /* ── South India — Kerala ── */
  'jee-coaching-in-kochi': {
    title: `Best JEE Coaching in Kochi ${YEAR} — 1-on-1 for Kerala's JEE Aspirants | MindPeak`,
    description: `1-on-1 JEE coaching in Kochi. KEAM+JEE integrated, Malayalam support. Kerala foundations leveraged for JEE. Ernakulam, Edappally students. Free demo.`,
  },
  'neet-coaching-in-kochi': {
    title: `Best NEET Coaching in Kochi ${YEAR} — Kerala's NEET Strategy Gap Solved | MindPeak`,
    description: `1-on-1 NEET coaching in Kochi. Kerala board MCQ gap bridged by 1-on-1 mentors. KEAM+NEET integrated, Malayalam support. Ernakulam, Aluva students. Free demo.`,
  },

  /* ── Pan-India T1 anchors ── */
  'jee-coaching-in-delhi': {
    title: `Best JEE Coaching in Delhi ${YEAR} — 1-on-1 Online, No Kota Relocation | MindPeak`,
    description: `1-on-1 JEE coaching in Delhi. IIT alumni mentors, CBSE-integrated. Study from Dwarka, Rohini, Noida — no Kota relocation. Book free demo.`,
  },
  'neet-coaching-in-delhi': {
    title: `Best NEET Coaching in Delhi ${YEAR} — AIIMS Delhi Aspirants | MindPeak`,
    description: `1-on-1 NEET coaching in Delhi. AIIMS alumni mentors, CBSE integrated. AIIMS Delhi is in your city. Students from South Delhi, Dwarka, Rohini. Free demo.`,
  },
  'jee-coaching-in-mumbai': {
    title: `Best JEE Coaching in Mumbai ${YEAR} — No 3-Hour Local Train Commutes | MindPeak`,
    description: `1-on-1 JEE coaching in Mumbai. No 3-hour local train commutes — study from Andheri, Thane, Navi Mumbai. MHT-CET+JEE integrated, IIT alumni mentors. Free demo.`,
  },
  'neet-coaching-in-mumbai': {
    title: `Best NEET Coaching in Mumbai ${YEAR} — 1-on-1 for Maharashtra NEET Aspirants | MindPeak`,
    description: `1-on-1 NEET coaching in Mumbai. MHT-CET+NEET integrated, MH board expertise. Students from Thane, Andheri, Navi Mumbai. No local train commutes. Free demo.`,
  },
};

/** Slugs of the curated T1 cities above — the only `coaching-in-` city pages that may be indexed. */
export const INDEXABLE_CITY_SLUGS: ReadonlySet<string> = new Set(Object.keys(INDEXABLE_CITY_META));

/**
 * National flagship pages that legitimately contain the substring
 * `coaching-in-` but are NOT doorway city pages and must stay indexable.
 * (e.g. the canonical target every noindexed city page points to.)
 */
export const INDEXABLE_NATIONAL_COACHING_SLUGS: ReadonlySet<string> = new Set([
  'best-jee-coaching-in-india',
  'best-neet-coaching-in-india', // defensive — indexable if/when added
]);

/**
 * Returns true when a slug is a low-value doorway `coaching-in-` page that
 * must be noindexed (everything matching `coaching-in-` except the curated
 * T1 cities and the national flagship pages above).
 *
 * Used by `proxy.ts` to emit `X-Robots-Tag: noindex, follow` at the HTTP
 * layer so Google can drop these URLs on a plain crawl — without having to
 * fetch and render the HTML to discover the `<meta robots>` tag.
 */
export function isDoorwayCoachingSlug(slug: string): boolean {
  const clean = slug.replace(/^\/+|\/+$/g, '');
  if (!clean.includes('coaching-in-')) return false;
  if (INDEXABLE_CITY_SLUGS.has(clean)) return false;
  if (INDEXABLE_NATIONAL_COACHING_SLUGS.has(clean)) return false;
  return true;
}

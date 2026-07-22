/**
 * FacultySchema — server-compatible Person JSON-LD for key MindPeak faculty.
 *
 * Usage (server component / metadata):
 *   import { buildFacultySchemas } from '@/components/FacultySchema';
 *
 * Usage (inline in a client component tree):
 *   import { FacultySchema } from '@/components/FacultySchema';
 *   <FacultySchema />
 */

import { authors, buildAuthorPersonLd } from '@/data/authorData';

const BASE = 'https://mindpeakinstitute.com';

/** Slugs for the six featured faculty members. */
const FEATURED_SLUGS = [
  'devansh-sharma',
  'sahil-singh',
  'krishnendu-brahmachari',
  'aparna-chandra',
  'nishkresh-mishra',
  'muskan-singla',
];

/**
 * Returns an array of schema.org Person objects (no @context — wrap in @graph).
 * Each object has an @id anchor on the /mentors page.
 */
export function buildFacultySchemas() {
  return authors
    .filter(a => FEATURED_SLUGS.includes(a.slug))
    .map(author => ({
      '@type': 'Person' as const,
      '@id': `${BASE}/mentors#${author.slug}`,
      url: `${BASE}/mentors`,
      ...buildAuthorPersonLd(author),
    }));
}

/**
 * Inline server-renderable component that emits a single <script> tag
 * containing a @graph of all featured faculty Person schemas.
 * Safe to drop into any server or client component tree.
 */
export function FacultySchema() {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': buildFacultySchemas(),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

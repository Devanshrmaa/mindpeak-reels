/**
 * MentorsSchema — injects Person + ItemList JSON-LD for the /mentors page.
 * Renders server-side so Google can crawl faculty profiles immediately.
 */

import { buildMentorsJsonLd } from '@/lib/mentorsData';

export default function MentorsSchema() {
  const schemas = buildMentorsJsonLd();
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

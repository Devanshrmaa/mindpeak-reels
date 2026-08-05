/**
 * FAQPage JSON-LD for blog posts.
 * ────────────────────────────────
 * Curated posts (comparison guides, exam guides, cutoff posts…) end with a
 * "Frequently Asked Questions" section written as `**Q: …**\nA: …` markdown
 * blocks. This extracts those pairs and builds FAQPage structured data so
 * question-phrased queries ("is nsep harder than jee advanced", "difference
 * between eamcet and neet" — GSC striking-distance cluster, 2026-07-14) can
 * earn rich results. Only emitted for sitemap-indexable posts.
 */

/** Flatten inline markdown (links, bold, code) to plain text for JSON-LD. */
function stripMd(s: string): string {
  return s
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Returns serialized FAQPage JSON-LD, or null when the post has fewer than
 * two extractable Q/A pairs (schema.org requires a meaningful list).
 */
export function buildBlogFaqJsonLd(content: string): string | null {
  const faqs: { q: string; a: string }[] = [];
  // A post's Q/A pairs come from two independent layers — the templated body
  // (examRegistry FAQs) and the hand-written block in blogContentEnrichments —
  // so the same question can legitimately appear twice in the markdown. Emit
  // each question only once; duplicate Question entries are invalid FAQPage
  // markup. First occurrence wins, matching on-page reading order.
  const seen = new Set<string>();
  const re = /\*\*Q:\s*([\s\S]+?)\*\*\s*\n+\s*A:\s*([\s\S]+?)(?=\n\s*\n|\n\*\*Q:|$)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(content)) !== null && faqs.length < 8) {
    const q = stripMd(m[1]);
    const a = stripMd(m[2]);
    if (!q || !a) continue;
    const key = q.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
    if (seen.has(key)) continue;
    seen.add(key);
    faqs.push({ q, a });
  }
  if (faqs.length < 2) return null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  // <-escape so "</script>" can never break out of the inline tag.
  return JSON.stringify(jsonLd).replace(/</g, '\\u003c');
}

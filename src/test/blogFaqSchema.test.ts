import { describe, it, expect } from 'vitest';
import { buildBlogFaqJsonLd } from '@/lib/blogFaqSchema';
import { getAllProgrammaticBlogPosts } from '@/lib/programmaticBlogs';

function parse(content: string) {
  const raw = buildBlogFaqJsonLd(content);
  return raw ? JSON.parse(raw.replaceAll('\\u003c', '<')) : null;
}

describe('buildBlogFaqJsonLd', () => {
  it('extracts Q/A pairs into FAQPage schema', () => {
    const md = `## FAQ

**Q: Is NSEP harder than JEE Advanced?**
A: It depends which stage you mean.

**Q: Is NSEC harder than JEE Advanced?**
A: Same structure as physics.`;
    const d = parse(md);
    expect(d['@type']).toBe('FAQPage');
    expect(d.mainEntity).toHaveLength(2);
    expect(d.mainEntity[0].name).toBe('Is NSEP harder than JEE Advanced?');
  });

  it('returns null when fewer than two pairs exist', () => {
    expect(buildBlogFaqJsonLd('**Q: Only one?**\nA: Yes.')).toBeNull();
    expect(buildBlogFaqJsonLd('no faq section here')).toBeNull();
  });

  /**
   * Regression: a post's Q/A pairs come from two independent layers — the
   * templated body (examRegistry FAQs) and the hand-written enrichment block.
   * Before the dedupe guard, the olympiad comparison post emitted "Is NSEP
   * harder than JEE Advanced?" twice in one FAQPage.
   */
  it('emits each question only once, keeping the first occurrence', () => {
    const md = `**Q: Is NSEP harder than JEE Advanced?**
A: First answer, from the templated body.

**Q: Something else entirely?**
A: An unrelated answer.

**Q: Is NSEP harder than JEE advanced?**
A: Second answer, from the enrichment block.`;
    const d = parse(md);
    expect(d.mainEntity).toHaveLength(2);
    expect(d.mainEntity[0].acceptedAnswer.text).toContain('templated body');
  });

  it('produces no duplicate questions across any programmatic post', () => {
    const offenders: string[] = [];
    for (const post of getAllProgrammaticBlogPosts()) {
      const d = parse(post.content);
      if (!d) continue;
      const names = d.mainEntity.map((q: { name: string }) =>
        q.name.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim(),
      );
      if (new Set(names).size !== names.length) offenders.push(post.slug);
    }
    expect(offenders).toEqual([]);
  });
});

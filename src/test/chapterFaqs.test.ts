import { describe, it, expect } from 'vitest';
import { assembleChapterFaqs, faqIntent } from '@/lib/chapterFaqs';
import { chapters } from '@/data/chapterData';
import { getChapterEnrichment } from '@/data/chapters/chapterEnrichments';

const qa = (q: string, a = 'answer') => ({ q, a });

describe('faqIntent', () => {
  it('collapses differently-worded versions of the same question', () => {
    expect(faqIntent('How many questions come from GOC and Hydrocarbons in NEET?')).toBe('count');
    expect(
      faqIntent('How many questions come from General Organic Chemistry (GOC) & Hydrocarbons in NEET?'),
    ).toBe('count');
    expect(faqIntent('Is GOC hard for NEET?')).toBe('difficulty');
    expect(faqIntent('Is General Organic Chemistry easy or hard for NEET?')).toBe('difficulty');
  });

  it('returns null for questions with no templated counterpart', () => {
    expect(faqIntent('What is the full form of GOC in chemistry?')).toBeNull();
  });
});

describe('assembleChapterFaqs', () => {
  /**
   * Regression: /neet-chemistry-organic-basics shipped two different
   * weightages for the same chapter — "~6-7% (~3-4 questions)" from the
   * researched enrichment and "4-6% ... 2-5 questions" from the templated
   * FAQ — both on the page and in one FAQPage JSON-LD block.
   */
  it('drops a templated FAQ when a curated one answers the same question', () => {
    const out = assembleChapterFaqs(
      [qa('How many questions come from GOC and Hydrocarbons in NEET?', '~3-4')],
      [],
      [qa('How many questions come from General Organic Chemistry (GOC) & Hydrocarbons in NEET?', '2-5')],
    );
    expect(out).toHaveLength(1);
    expect(out[0].a).toBe('~3-4');
  });

  it('keeps templated FAQs whose question nothing curated covers', () => {
    const out = assembleChapterFaqs([qa('Is GOC hard for NEET?')], [], [qa('Can I skip GOC for NEET?')]);
    expect(out.map((f) => f.q)).toEqual(['Is GOC hard for NEET?', 'Can I skip GOC for NEET?']);
  });

  it('removes exact duplicate questions, keeping the first', () => {
    const out = assembleChapterFaqs(
      [qa('Which moment of inertia values must I memorise for JEE?', 'first')],
      [qa('Which moment of inertia values must I memorise for JEE?', 'second')],
      [],
    );
    expect(out).toHaveLength(1);
    expect(out[0].a).toBe('first');
  });

  it('preserves precedence: enrichment, then chapter, then templated', () => {
    const out = assembleChapterFaqs([qa('E')], [qa('C')], [qa('A')]);
    expect(out.map((f) => f.q)).toEqual(['E', 'C', 'A']);
  });

  /**
   * Corpus-wide: no chapter page may emit the same FAQ question twice, in the
   * rendered list or the FAQPage JSON-LD built from it.
   */
  it('emits no duplicate question on any chapter', () => {
    const offenders: string[] = [];
    for (const chapter of chapters) {
      const enrichment = getChapterEnrichment(chapter.slug);
      // The templated set's exact wording does not matter here — only that
      // assembly never yields two identical questions.
      const auto = [
        qa(`How many questions come from ${chapter.chapter} in ${chapter.exam}?`),
        qa(`Is ${chapter.chapter} easy or hard for ${chapter.exam}?`),
        qa(`How long does it take to complete ${chapter.chapter}?`),
        qa(`What are the most important topics in ${chapter.chapter} for ${chapter.exam}?`),
        qa(`Which books are best for ${chapter.chapter} preparation?`),
        qa(`Can I skip ${chapter.chapter} for ${chapter.exam}?`),
        qa(`What mistakes should I avoid while studying ${chapter.chapter}?`),
      ];
      const out = assembleChapterFaqs(enrichment?.faqs ?? [], chapter.faqs, auto);
      const keys = out.map((f) => f.q.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim());
      if (new Set(keys).size !== keys.length) offenders.push(chapter.slug);
    }
    expect(offenders).toEqual([]);
  });
});

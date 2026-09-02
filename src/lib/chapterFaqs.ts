/**
 * Assemble a chapter page's FAQ list from its three sources.
 *
 * Order of precedence: curated enrichment FAQs, then the chapter's own
 * hand-written FAQs, then the templated "auto" FAQs the page generates from
 * chapter metadata.
 *
 * Two rules keep the result honest:
 *
 * 1. INTENT SUPPRESSION. A templated FAQ is dropped when a curated FAQ already
 *    answers the same question. Without this the page answered one question
 *    twice with different numbers — /neet-chemistry-organic-basics stated both
 *    "~6-7% of the Chemistry paper (~3-4 questions)" (researched) and "4-6%
 *    weightage ... 2-5 questions per year" (templated), in the rendered list
 *    and in the same FAQPage JSON-LD. Two weightages for one chapter is worse
 *    than none, and the templated answer is the weaker wherever a curated one
 *    exists. Matching is on question shape, not exact text, because the
 *    wordings differ ("GOC and Hydrocarbons" vs the full chapter name).
 *
 * 2. EXACT DE-DUPLICATION. Duplicate Question entries are invalid FAQPage
 *    markup, and at least one curated set ships the same question twice
 *    (jee-physics-rotational-motion: "Which moment of inertia values must I
 *    memorise for JEE?"). First occurrence wins.
 */
export interface QA {
  q: string;
  a: string;
}

/** Classify a question by shape so differently-worded duplicates collapse. */
export function faqIntent(question: string): string | null {
  const s = question.toLowerCase();
  if (/how many questions/.test(s)) return 'count';
  if (/easy or hard|\bis .+\b(hard|difficult)\b/.test(s)) return 'difficulty';
  if (/how long does it take/.test(s)) return 'duration';
  if (/most important topics/.test(s)) return 'topics';
  if (/\bbooks\b/.test(s)) return 'books';
  if (/can i skip/.test(s)) return 'skip';
  if (/\bmistakes\b/.test(s)) return 'mistakes';
  return null;
}

const questionKey = (q: string): string =>
  q.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

export function assembleChapterFaqs(
  enrichmentFaqs: QA[],
  chapterFaqs: QA[],
  autoFaqs: QA[],
): QA[] {
  const curated = [...enrichmentFaqs, ...chapterFaqs];
  const coveredIntents = new Set(
    curated.map((f) => faqIntent(f.q)).filter((i): i is string => i !== null),
  );

  const seen = new Set<string>();
  return [
    ...curated,
    ...autoFaqs.filter((f) => {
      const intent = faqIntent(f.q);
      return intent === null || !coveredIntents.has(intent);
    }),
  ].filter((f) => {
    const key = questionKey(f.q);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

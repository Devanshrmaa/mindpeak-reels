import type { BlogPost } from '@/data/blogData';

export const HARD_MIN_BLOG_WORD_COUNT = 900;

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function pick<T>(items: T[], seed: number): T {
  return items[seed % items.length];
}

function normalizeParagraph(text: string): string {
  return text
    .toLowerCase()
    .replace(/[`*_>#\-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function dedupeParagraphs(markdown: string): string {
  const blocks = markdown.split(/\n\s*\n/);
  const seen = new Set<string>();
  const output: string[] = [];

  for (const block of blocks) {
    const trimmed = block.trim();
    if (!trimmed) continue;

    // Keep code blocks and tables untouched.
    if (trimmed.startsWith('```') || trimmed.includes('|---')) {
      output.push(trimmed);
      continue;
    }

    const key = normalizeParagraph(trimmed);
    if (!key) continue;
    if (seen.has(key)) continue;

    seen.add(key);
    output.push(trimmed);
  }

  return output.join('\n\n');
}

function dedupeBulletItems(markdown: string): string {
  const lines = markdown.split('\n');
  const result: string[] = [];
  let bulletSet = new Set<string>();

  for (const line of lines) {
    const isBullet = /^\s*[-*]\s+/.test(line);
    if (!isBullet) {
      // Reset list-level dedupe once list context ends.
      if (line.trim() === '') {
        bulletSet = new Set<string>();
      }
      result.push(line);
      continue;
    }

    const key = normalizeParagraph(line.replace(/^\s*[-*]\s+/, ''));
    if (bulletSet.has(key)) continue;
    bulletSet.add(key);
    result.push(line);
  }

  return result.join('\n');
}

function dedupeConsecutiveLines(markdown: string): string {
  const lines = markdown.split('\n');
  const result: string[] = [];
  let prevKey = '';

  for (const line of lines) {
    const key = normalizeParagraph(line);
    if (key && key === prevKey) {
      continue;
    }
    result.push(line);
    prevKey = key;
  }

  return result.join('\n');
}

function dedupeSentences(markdown: string): string {
  const blocks = markdown.split(/\n\s*\n/);
  const processed = blocks.map((block) => {
    const trimmed = block.trim();
    if (!trimmed) return block;

    // Skip markdown tables/code/fenced content.
    if (trimmed.startsWith('```') || trimmed.includes('|---') || /^\|.+\|$/.test(trimmed)) {
      return block;
    }

    const parts = trimmed.split(/(?<=[.!?])\s+/);
    const seen = new Set<string>();
    const out: string[] = [];
    for (const part of parts) {
      const key = normalizeParagraph(part);
      if (!key) continue;
      if (seen.has(key)) continue;
      seen.add(key);
      out.push(part.trim());
    }

    return out.join(' ');
  });

  return processed.join('\n\n');
}

function wordCount(text: string): number {
  return text
    .replace(/[`#>*_|\-]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
}

function headingCount(text: string): number {
  return text.split('\n').filter(line => /^##\s+/.test(line.trim())).length;
}

function hasSection(content: string, headingStartsWith: string): boolean {
  const rows = content.split('\n');
  return rows.some((line) => line.trim().toLowerCase().startsWith(`## ${headingStartsWith.toLowerCase()}`));
}

function hasFaqStyle(content: string): boolean {
  return /\*\*Q:\s*/.test(content) || /##\s+FAQ/i.test(content) || /##\s+Frequently Asked Questions/i.test(content);
}

function hasTable(content: string): boolean {
  return /\|\s*[-:]+\s*\|/.test(content);
}

function qualityScore(content: string): number {
  let score = 0;
  const words = wordCount(content);
  const heads = headingCount(content);

  if (words >= 900) score += 35;
  else if (words >= 700) score += 25;
  else if (words >= 500) score += 15;

  if (heads >= 6) score += 25;
  else if (heads >= 4) score += 15;

  if (hasTable(content)) score += 15;
  if (hasFaqStyle(content)) score += 15;
  if (/\b(PYQ|mock test|error log|revision)\b/i.test(content)) score += 10;

  return score;
}

function buildKeyTakeaways(post: BlogPost): string {
  const seed = hashString(post.slug + post.title + 'takeaways');
  const focusA = [
    'Build conceptual clarity before speed.',
    'Track mistakes weekly and convert them into rules.',
    'Revise through recall, not passive reading.',
    'Solve timed sets to train decision-making under pressure.',
  ];
  const focusB = [
    'Use chapter-wise PYQs to spot recurring patterns.',
    'Protect your high-accuracy topics first, then expand.',
    'Keep one-page formula/diagram sheets for rapid revision.',
    'Audit every mock test with a strict post-test review.',
  ];

  return `\n\n## Key Takeaways\n\n- ${pick(focusA, seed)}\n- ${pick(focusB, seed + 1)}\n- Turn weak chapters into manageable sub-topics with daily targets.\n- Consistency over intensity wins in long-cycle exam prep.\n`;
}

function buildChecklistSection(post: BlogPost): string {
  const exam = post.category === 'NEET' ? 'NEET' : 'JEE';
  return `\n\n## Mistake-Proof Checklist\n\n- I can solve at least 30 timed questions from this topic without rushing.\n- I have reviewed my top 10 errors and written a correction rule for each.\n- I can explain the chapter in plain language without opening notes.\n- I have attempted recent ${exam} PYQs and analyzed option traps.\n- My revision sheet is one-page and updated after each mock.\n`;
}

function buildDeepDiveSection(post: BlogPost): string {
  const seed = hashString(`${post.slug}-${post.category}-deep-dive`);
  const exam = post.category === 'NEET' ? 'NEET' : 'JEE';
  const lenses = [
    'Concept Lens',
    'Exam Lens',
    'Execution Lens',
    'Retention Lens',
  ];

  return `\n\n## ${pick(lenses, seed)}: How To Go Beyond Surface Learning\n\nMost aspirants read a chapter once and move on. High performers revisit the same chapter with a different objective each time: first for understanding, second for question mapping, third for speed, and fourth for exam temperament.\n\nFor ${exam}, use this progression on every important chapter:\n\n- Pass 1: Explain the core idea in your own words without jargon.\n- Pass 2: Solve 20-30 questions and classify each error by cause.\n- Pass 3: Re-attempt only wrong questions under stricter timing.\n- Pass 4: Teach the topic aloud in 5 minutes from memory.\n\nWhen you can teach a topic clearly, your recall under pressure becomes reliable. That is the shift from preparation to performance.\n`;
}

function buildAppliedPracticeSection(post: BlogPost): string {
  const exam = post.category === 'NEET' ? 'NEET' : 'JEE';
  return `\n\n## Applied Practice Blueprint\n\nIf your marks are not improving, the issue is usually not effort; it is feedback quality. Build a closed-loop system:\n\n- Attempt a focused set of questions with timer discipline.\n- Tag every mistake as concept, method, or attention error.\n- Write one correction rule for each recurring pattern.\n- Re-test the same pattern after 48 hours.\n\nFor ${exam}, this loop should run weekly. The goal is not just solving more questions but reducing repeated mistakes across mocks. A smaller, smarter practice loop beats blind volume every time.\n`;
}

function enforceHardMinimumWordCount(post: BlogPost, content: string): string {
  let enriched = content;
  let guard = 0;

  while (wordCount(enriched) < HARD_MIN_BLOG_WORD_COUNT && guard < 4) {
    if (!hasSection(enriched, 'Applied Practice Blueprint')) {
      enriched += buildAppliedPracticeSection(post);
    } else if (!hasSection(enriched, 'How To Go Beyond Surface Learning')) {
      enriched += buildDeepDiveSection(post);
    } else if (!hasSection(enriched, '7-Day')) {
      enriched += buildCreativeSection(post);
    } else {
      // Final deterministic extension if all structured sections already exist.
      enriched += `\n\n## Final Revision Protocol\n\nBefore the exam window, run a 3-layer revision protocol: condensed notes, timed mixed set, and reflection log. This three-step cycle improves retention and prevents repeated errors in high-pressure conditions. Keep each cycle short, track completion daily, and preserve consistency.`;
    }

    guard += 1;
  }

  return enriched;
}

function buildCreativeSection(post: BlogPost): string {
  const seed = hashString(post.slug + post.title);
  const exam = post.category === 'NEET' ? 'NEET' : 'JEE';

  const sprintNames = [
    'Momentum Sprint',
    'Precision Sprint',
    'Revision Sprint',
    'Accuracy Sprint',
  ];

  const dailyThemes = [
    'Concept compression + active recall',
    'PYQ pattern spotting + elimination drills',
    'Timed mixed practice + error tagging',
    'Weak-topic rescue + mentor checkpoint',
    'Mock test simulation + pacing fix',
    'Formula and diagram speed run',
    'Final consolidation + confidence reset',
  ];

  const challengeLine = post.category === 'NEET'
    ? 'Target 170+ in Biology blocks by maximizing NCERT recall accuracy under timer pressure.'
    : 'Target high-attempt with controlled negative marking by prioritizing solvable questions in first pass.';

  const actionRows = dailyThemes
    .map((theme, index) => `- Day ${index + 1}: ${theme}`)
    .join('\n');

  return `\n\n## 7-Day ${pick(sprintNames, seed)}\n\n${challengeLine}\n\n${actionRows}\n\n### Self-Check Before Next Week\n\n- Did your accuracy improve on the same topic set from Day 1 to Day 7?\n- Can you explain your top 5 mistakes without looking at notes?\n- Are you solving with a repeatable time strategy for ${exam} format questions?\n`;
}

export function improveBlogContent(post: BlogPost): BlogPost {
  let content = post.content || '';

  content = dedupeConsecutiveLines(content);
  content = dedupeSentences(content);
  content = dedupeParagraphs(content);
  content = dedupeBulletItems(content);

  if (!hasSection(content, 'Key Takeaways')) {
    content += buildKeyTakeaways(post);
  }

  if (!hasSection(content, 'Mistake-Proof Checklist')) {
    content += buildChecklistSection(post);
  }

  // Low-score posts get a creative sprint section to improve depth and uniqueness.
  const needsDepth = qualityScore(content) < 75;
  if (needsDepth && !content.includes('## 7-Day')) {
    content += buildCreativeSection(post);
  }

  content = enforceHardMinimumWordCount(post, content);

  return {
    ...post,
    content,
  };
}

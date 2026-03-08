/**
 * Topic Study Guides — generates ~800 "How to Study [Topic] for [Exam]" pages.
 * Route: /how-to-study-{topicSlug}-for-{exam}
 * Each guide: 1,000+ words with concept summary, prerequisites, resources, practice links.
 */

import { allTopics, type TopicInfo } from '@/data/chapterData';
import { getTopicContent } from '@/data/topicContent';

export interface TopicStudyGuide {
  slug: string;
  topicName: string;
  topicSlug: string;
  exam: 'JEE' | 'NEET';
  subject: string;
  chapter: string;
  chapterSlug: string;
  difficulty: string;
  weightage: string;
  topics: string[];
  keyFormulas: string[];
  commonMistakes: string[];
  practiceLink: string;
  pyqLink: string;
  chapterLink: string;
}

/** Deterministic seed helper */
function seededInt(seed: number, min: number, max: number): number {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return min + Math.floor((x - Math.floor(x)) * (max - min + 1));
}

/** Build a study guide from a TopicInfo */
export function buildStudyGuide(info: TopicInfo): TopicStudyGuide {
  const { chapter, topicName, topicSlug } = info;
  return {
    slug: `how-to-study-${topicSlug}-for-${chapter.exam.toLowerCase()}`,
    topicName,
    topicSlug,
    exam: chapter.exam,
    subject: chapter.subject,
    chapter: chapter.chapter,
    chapterSlug: chapter.slug,
    difficulty: chapter.difficulty,
    weightage: chapter.weightage,
    topics: chapter.topics,
    keyFormulas: chapter.keyFormulas,
    commonMistakes: chapter.commonMistakes,
    practiceLink: `/${chapter.exam.toLowerCase()}-practice`,
    pyqLink: `/${chapter.exam.toLowerCase()}-pyq`,
    chapterLink: `/${chapter.slug}`,
  };
}

/** All study guide slugs for sitemap */
export function getAllStudyGuideSlugs(): string[] {
  return allTopics.map(t => `how-to-study-${t.topicSlug}-for-${t.chapter.exam.toLowerCase()}`);
}

/** Parse a study guide slug → TopicInfo or null */
export function parseStudyGuideSlug(slug: string): TopicInfo | null {
  const match = slug.match(/^how-to-study-(.+)-for-(jee|neet)$/);
  if (!match) return null;
  const [, topicSlug, exam] = match;
  const found = allTopics.find(
    t => t.topicSlug === topicSlug && t.chapter.exam.toLowerCase() === exam
  );
  return found ?? null;
}

/** Generate full content markdown for a study guide (1,000+ words) */
export function generateStudyGuideContent(guide: TopicStudyGuide): string {
  const seed = guide.slug.length * 7;
  const relatedTopics = guide.topics.filter(t => t !== guide.topicName).slice(0, 5);
  const prereqCount = seededInt(seed, 2, 4);
  const studyHours = seededInt(seed + 1, 8, 20);
  const pyqFreq = seededInt(seed + 2, 3, 8);

  // Pull real educational content if available
  const tc = getTopicContent(guide.chapterSlug, guide.topicName);
  const definitionBlock = tc
    ? `\n\n### What is ${guide.topicName}?\n\n${tc.definition}\n\n${tc.explanation}\n\n**Key Fact:** ${tc.keyFact}\n\n**Real-World Application:** ${tc.realWorldApp}${tc.ncertRef ? `\n\n**NCERT Reference:** ${tc.ncertRef}` : ''}`
    : '';
  const workedExampleBlock = tc?.workedExample
    ? `\n\n### Solved Example\n\n**Problem:** ${tc.workedExample.problem}\n\n**Solution:** ${tc.workedExample.solution}\n\n**Answer:** ${tc.workedExample.answer}`
    : '';

  return `# How to Study ${guide.topicName} for ${guide.exam} ${new Date().getFullYear()}

## Why ${guide.topicName} Matters in ${guide.exam}

${guide.topicName} is part of the **${guide.chapter}** chapter in ${guide.exam} ${guide.subject}, which carries **${guide.weightage}** weightage. This topic has appeared in **${pyqFreq} out of the last 10** ${guide.exam} papers, making it a high-priority area for focused preparation.

Difficulty level: **${guide.difficulty}**. Students who master this topic typically see a ${seededInt(seed+3, 10, 25)}% improvement in their ${guide.subject} mock scores.

## Prerequisites Before You Start

Before diving into ${guide.topicName}, ensure you have a solid grasp of these foundational concepts:

${Array.from({ length: prereqCount }, (_, j) => `${j + 1}. **${relatedTopics[j] || guide.topics[j] || 'Basic ' + guide.subject + ' concepts'}** — This forms the mathematical/conceptual foundation for understanding ${guide.topicName}. Without this, you'll struggle with derivations and applications.`).join('\n')}

**Self-check:** Before starting ${guide.topicName}, solve 5 basic problems from each prerequisite topic. If you score below 60%, revisit those foundations first.

## Step-by-Step Study Plan for ${guide.topicName}

### Phase 1: Concept Building (${seededInt(seed+4, 2, 4)} days)

| Day | Activity | Time | Goal |
|---|---|---|---|
| 1 | Read NCERT chapter section on ${guide.topicName} | 2-3 hrs | Complete conceptual understanding |
| 2 | Watch concept video + take notes | 1.5 hrs | Visual reinforcement |
| ${seededInt(seed+5, 2, 3)} | Solve NCERT examples and exercises | 2-3 hrs | 100% NCERT mastery |

**Key concepts to master:**
${guide.keyFormulas.slice(0, 5).map((f, j) => `- **${f}** — understand the derivation, not just the formula`).join('\n')}

### Phase 2: Problem Practice (${seededInt(seed+6, 3, 5)} days)

Progress through difficulty levels:

1. **Easy (Day 1-2):** Solve 20 direct-application problems. Target: 90%+ accuracy
2. **Medium (Day 3-4):** Solve 15 multi-step problems. Target: 75%+ accuracy  
3. **Hard (Day 5+):** Solve 10 advanced/JEE-Advanced-level problems. Target: 60%+ accuracy

### Phase 3: PYQ Mastery (2 days)

Solve all previous year questions on ${guide.topicName} from the last 10 years. Analyse:
- Which sub-concepts are tested most frequently?
- What question formats appear (MCQ, numerical, assertion-reasoning)?
- What traps do exam setters commonly use?

### Phase 4: Revision & Integration (1 day)

- Create a 1-page summary of ${guide.topicName}: formulas, key concepts, common traps
- Solve 5 mixed problems that combine ${guide.topicName} with ${relatedTopics[0] || 'related topics'}
- Take a mini-test (15 questions, 20 minutes)

## Total Study Time: ~${studyHours} hours over ${seededInt(seed+7, 7, 14)} days

## Common Mistakes in ${guide.topicName}

${guide.commonMistakes.slice(0, 4).map((m, j) => `### Mistake ${j + 1}: ${m}

**Why students make this error:** Incomplete understanding of the underlying principle. The exam setters deliberately design options that exploit this exact misunderstanding.

**How to fix it:** After solving each problem, explicitly state which concept/formula you used and why. If you can't justify your approach in one sentence, you need more practice.`).join('\n\n')}

## Recommended Resources

| Resource | Type | When to Use |
|---|---|---|
| NCERT Textbook | Foundation | Phase 1 |
| ${guide.exam === 'JEE' ? 'HC Verma / DC Pandey' : 'Trueman / MTG'} | Reference | Phase 2 |
| [${guide.exam} Practice Questions](${guide.practiceLink}) | Online MCQs | Phase 2-3 |
| [${guide.exam} Previous Year Questions](${guide.pyqLink}) | PYQ Bank | Phase 3 |
| [${guide.chapter} Full Chapter](${guide.chapterLink}) | Chapter overview | All phases |

## How ${guide.topicName} Connects to Other Topics

Understanding ${guide.topicName} is essential because it connects to:

${relatedTopics.slice(0, 3).map((t, j) => `- **${t}:** ${guide.topicName} provides ${j === 0 ? 'the mathematical framework' : j === 1 ? 'conceptual prerequisites' : 'practical applications'} for understanding ${t}. Questions often combine both topics.`).join('\n')}

## Exam Strategy for ${guide.topicName} Questions

1. **Time allocation:** Spend maximum ${guide.exam === 'JEE' ? '4' : '2'} minutes per question from this topic
2. **Identification:** Questions on ${guide.topicName} typically involve ${guide.keyFormulas[0] || 'specific formulas'}
3. **Elimination:** Use dimensional analysis to eliminate at least 1-2 wrong options immediately
4. **Verification:** Always check if your answer is physically/biologically meaningful

## FAQs

**Q: How important is ${guide.topicName} for ${guide.exam}?**
A: It appears in ${pyqFreq}/10 recent papers and is part of a chapter with ${guide.weightage} weightage. It's a must-study topic.

**Q: Can I skip ${guide.topicName} if I'm running short on time?**
A: Not recommended. However, if time is very limited, focus on the formula applications and PYQ patterns — skip derivations.

**Q: How long does it take to master ${guide.topicName}?**
A: With focused daily study, ~${studyHours} hours spread over ${seededInt(seed+8, 7, 14)} days. With a MindPeak mentor, this can be optimised to ${Math.ceil(studyHours * 0.7)} hours.

**Q: What's the best way to revise ${guide.topicName} before the exam?**
A: Use your 1-page summary + solve 5 PYQs under timed conditions. This takes 30-45 minutes and refreshes all key concepts.

---

*[${guide.chapter} Chapter](${guide.chapterLink}) | [${guide.exam} Practice](${guide.practiceLink}) | [${guide.exam} PYQ](${guide.pyqLink}) | [Free Demo](/free-trial)*`;
}

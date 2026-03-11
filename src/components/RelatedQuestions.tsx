"use client";

/**
 * RelatedQuestions — renders 5-10 links to sibling questions from the same topic/chapter.
 * Critical for crawlability: ensures every question page has discoverable internal links.
 */

import { Link } from '@/components/RouterLink';
import { ArrowRight } from 'lucide-react';

interface RelatedQuestion {
  label: string;
  slug: string;
  preview: string;
}

interface RelatedQuestionsProps {
  questions: RelatedQuestion[];
  heading: string;
  accentClass?: string;
}

export function RelatedQuestions({ questions, heading, accentClass = 'text-primary' }: RelatedQuestionsProps) {
  if (questions.length === 0) return null;

  return (
    <section className="rounded-xl border border-border bg-card/50 p-6 sm:p-8">
      <h2 className={`font-display font-bold text-lg text-foreground mb-4 flex items-center gap-2`}>
        <ArrowRight className={`w-5 h-5 ${accentClass}`} /> {heading}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {questions.map((q) => (
          <Link
            key={q.slug}
            to={`/${q.slug}`}
            className="flex items-start gap-3 rounded-lg border border-border/50 bg-secondary/10 px-4 py-3 hover:border-primary/40 hover:bg-primary/5 transition-colors group"
          >
            <span className={`text-xs font-bold ${accentClass} mt-0.5 flex-shrink-0`}>{q.label}</span>
            <span className="text-xs text-muted-foreground line-clamp-2 group-hover:text-foreground transition-colors">{q.preview}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ── Helper: build related questions for JEE Practice ── */
export function buildJEEPracticeRelated(
  topicQuestions: { q: string }[],
  currentIndex: number,
  subject: string,
  chapter: string,
  topic: string,
  difficulty: string,
  getSlug: (subject: string, chapter: string, topic: string, difficulty: string, index: number) => string | null,
): RelatedQuestion[] {
  const result: RelatedQuestion[] = [];
  // Pick up to 10 questions, skipping current
  for (let i = 0; i < topicQuestions.length && result.length < 10; i++) {
    const idx = i + 1;
    if (idx === currentIndex) continue;
    const slug = getSlug(subject, chapter, topic, difficulty, idx);
    if (!slug) continue;
    result.push({
      label: `Q${idx}`,
      slug,
      preview: topicQuestions[i].q.slice(0, 80) + (topicQuestions[i].q.length > 80 ? '…' : ''),
    });
  }
  return result;
}

/* ── Helper: build related questions for PYQ ── */
export function buildPYQRelated(
  chapterQuestions: { q: string }[],
  currentIndex: number,
  subject: string,
  chapter: string,
  getSlug: (subject: string, chapter: string, index: number) => string | null,
): RelatedQuestion[] {
  const result: RelatedQuestion[] = [];
  for (let i = 0; i < chapterQuestions.length && result.length < 10; i++) {
    const idx = i + 1;
    if (idx === currentIndex) continue;
    const slug = getSlug(subject, chapter, idx);
    if (!slug) continue;
    result.push({
      label: `Q${idx}`,
      slug,
      preview: chapterQuestions[i].q.slice(0, 80) + (chapterQuestions[i].q.length > 80 ? '…' : ''),
    });
  }
  return result;
}

"use client";

/**
 * CrawlableChapterLinks — always-rendered (no accordion/JS toggle) list of chapter links
 * with first-question deep links. Critical for crawler discoverability.
 * Renders as a compact grid that's visually clean but always in the DOM.
 */

import { Link } from '@/components/RouterLink';
import { BookOpen } from 'lucide-react';

interface ChapterLink {
  name: string;
  href: string;
  questionCount: number;
}

interface CrawlableChapterLinksProps {
  heading: string;
  chapters: ChapterLink[];
  accentClass?: string;
}

export function CrawlableChapterLinks({ heading, chapters, accentClass = 'text-primary' }: CrawlableChapterLinksProps) {
  if (chapters.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="font-display font-bold text-xl text-foreground mb-6">{heading}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {chapters.map((ch) => (
          <Link
            key={ch.href}
            to={ch.href}
            className="flex items-center gap-3 rounded-xl border border-border bg-card/50 p-4 hover:border-primary/40 transition-colors group"
          >
            <BookOpen className={`w-4 h-4 ${accentClass} flex-shrink-0`} />
            <div className="min-w-0">
              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">{ch.name}</p>
              <p className="text-xs text-muted-foreground">{ch.questionCount} questions</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

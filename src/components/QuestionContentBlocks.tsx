"use client";

/**
 * QuestionContentBlocks — Reusable SEO content sections for question pages.
 * Adds 300+ words of educational content + internal linking mesh.
 */

import { motion } from 'framer-motion';
import { Link } from '@/components/RouterLink';
import { AlertTriangle, BookOpen, Calculator, TrendingUp, FileText, ArrowRight } from 'lucide-react';

const block = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

/* ── Common Mistakes Section ── */
export function CommonMistakesBlock({ chapterName, mistakes }: { chapterName: string; mistakes: string[] }) {
  return (
    <motion.div {...block} className="rounded-xl border border-border bg-card/50 p-6 sm:p-8">
      <h2 className="font-display font-bold text-lg text-foreground mb-4 flex items-center gap-2">
        <AlertTriangle className="w-5 h-5 text-amber-400" /> Common Mistakes in {chapterName}
      </h2>
      <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
        {mistakes.map((para, i) => <p key={i}>{para}</p>)}
      </div>
    </motion.div>
  );
}

/* ── Key Formulas Section ── */
export function KeyFormulasBlock({ topicName, formulas, formulaSheetLink }: { topicName: string; formulas: string[]; formulaSheetLink?: string }) {
  return (
    <motion.div {...block} className="rounded-xl border border-border bg-card/50 p-6 sm:p-8">
      <h2 className="font-display font-bold text-lg text-foreground mb-4 flex items-center gap-2">
        <Calculator className="w-5 h-5 text-blue-400" /> Key Formulas — {topicName}
      </h2>
      <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
        {formulas.map((para, i) => <p key={i}>{para}</p>)}
      </div>
      {formulaSheetLink && (
        <Link to={formulaSheetLink} className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-blue-400 hover:underline">
          <FileText className="w-4 h-4" /> View Complete Formula Sheet <ArrowRight className="w-3 h-3" />
        </Link>
      )}
    </motion.div>
  );
}

/* ── Why It Matters Section ── */
export function WhyItMattersBlock({ topicName, paragraphs }: { topicName: string; paragraphs: string[] }) {
  return (
    <motion.div {...block} className="rounded-xl border border-border bg-card/50 p-6 sm:p-8">
      <h2 className="font-display font-bold text-lg text-foreground mb-4 flex items-center gap-2">
        <TrendingUp className="w-5 h-5 text-emerald-400" /> Why {topicName} Matters for Your Exam
      </h2>
      <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
        {paragraphs.map((para, i) => <p key={i}>{para}</p>)}
      </div>
    </motion.div>
  );
}

/* ── Cross-type Links (Practice ↔ PYQ + Formula Sheet) ── */
interface CrossLink {
  label: string;
  to: string;
  description: string;
}

export function InternalLinkingMesh({ links, heading }: { links: CrossLink[]; heading: string }) {
  if (links.length === 0) return null;
  return (
    <motion.div {...block} className="rounded-xl border border-border bg-card/50 p-6">
      <h3 className="font-display font-bold text-base text-foreground mb-4 flex items-center gap-2">
        <BookOpen className="w-4 h-4 text-primary" /> {heading}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {links.map((link) => (
          <Link key={link.to} to={link.to} className="rounded-lg border border-border bg-secondary/10 p-3 hover:border-primary/50 transition-colors group">
            <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{link.label}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{link.description}</p>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

/* ── Helper: build cross-links for JEE practice pages ── */
export function buildJEEPracticeCrossLinks(subject: string, subjectSlug: string, chapterName: string): CrossLink[] {
  const links: CrossLink[] = [
    { label: `JEE ${subject} PYQ`, to: '/jee-pyq', description: `Solve previous year JEE questions on ${subject}` },
    { label: `JEE ${subject} Formula Sheet`, to: `/jee-${subjectSlug}-formula-sheet`, description: `All ${subject} formulas in one place` },
    { label: 'JEE Practice Hub', to: '/jee-practice', description: 'Browse all subjects and chapters' },
    { label: `JEE ${subject} Coaching`, to: `/jee-${subjectSlug}-coaching`, description: `1-on-1 ${subject} coaching with expert mentors` },
  ];
  return links;
}

export function buildJEEPYQCrossLinks(subject: string, subjectSlug: string, chapterName: string): CrossLink[] {
  return [
    { label: `JEE ${subject} Practice MCQs`, to: '/jee-practice', description: `500+ practice questions on ${subject}` },
    { label: `JEE ${subject} Formula Sheet`, to: `/jee-${subjectSlug}-formula-sheet`, description: `Quick-reference formulas for ${chapterName}` },
    { label: 'JEE PYQ Hub', to: '/jee-pyq', description: '10+ years of previous year questions' },
    { label: `JEE ${subject} Coaching`, to: `/jee-${subjectSlug}-coaching`, description: `Personalised ${subject} preparation` },
  ];
}

export function buildNEETPracticeCrossLinks(subject: string, subjectSlug: string, chapterName: string): CrossLink[] {
  return [
    { label: `NEET ${subject} PYQ`, to: '/neet-pyq', description: `Previous year NEET ${subject} questions` },
    { label: `NEET ${subject} Formula Sheet`, to: `/neet-${subjectSlug}-formula-sheet`, description: `All ${subject} formulas for NEET` },
    { label: 'NEET Practice Hub', to: '/neet-practice', description: 'Browse all NEET subjects' },
    { label: `NEET ${subject} Coaching`, to: `/neet-${subjectSlug}-coaching`, description: `1-on-1 NEET ${subject} coaching` },
  ];
}

export function buildNEETPYQCrossLinks(subject: string, subjectSlug: string, chapterName: string): CrossLink[] {
  return [
    { label: `NEET ${subject} Practice MCQs`, to: '/neet-practice', description: `500+ practice questions on ${subject}` },
    { label: `NEET ${subject} Formula Sheet`, to: `/neet-${subjectSlug}-formula-sheet`, description: `Quick-reference formulas for ${chapterName}` },
    { label: 'NEET PYQ Hub', to: '/neet-pyq', description: '10+ years of NEET PYQs' },
    { label: `NEET ${subject} Coaching`, to: `/neet-${subjectSlug}-coaching`, description: `Personalised NEET ${subject} preparation` },
  ];
}

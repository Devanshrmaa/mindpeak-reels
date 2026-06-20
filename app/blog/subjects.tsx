/**
 * Shared subject identity for the blog — keeps the listing tiles and the
 * article hero visually consistent. Live posts ship no imagery or per-post
 * icon, so each post is mapped to a subject (by tags first, then category)
 * that carries a gradient + a hand-drawn SVG motif.
 */
import { Target, Lightbulb, Compass, type LucideIcon } from 'lucide-react';

export const AtomMotif = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="h-full w-full">
    <circle cx="50" cy="50" r="6" fill="currentColor" stroke="none" />
    <ellipse cx="50" cy="50" rx="44" ry="16" />
    <ellipse cx="50" cy="50" rx="44" ry="16" transform="rotate(60 50 50)" />
    <ellipse cx="50" cy="50" rx="44" ry="16" transform="rotate(120 50 50)" />
    <circle cx="94" cy="50" r="4" fill="currentColor" stroke="none" />
    <circle cx="28" cy="88" r="3.5" fill="currentColor" stroke="none" />
  </svg>
);
export const HexMotif = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="h-full w-full">
    <polygon points="50,8 86,29 86,71 50,92 14,71 14,29" />
    <circle cx="50" cy="50" r="19" />
    <path d="M50 8 V29 M86 29 L68 40 M86 71 L68 60 M50 92 V71 M14 71 L32 60 M14 29 L32 40" />
  </svg>
);
export const DnaMotif = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="h-full w-full">
    <path d="M34 5 C66 22 66 36 34 50 C2 64 2 78 34 95" />
    <path d="M66 5 C34 22 34 36 66 50 C98 64 98 78 66 95" />
    <path d="M40 14 H60 M34 28 H66 M34 50 H66 M34 72 H66 M40 86 H60" strokeWidth="1.6" />
  </svg>
);
export const CurveMotif = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="h-full w-full">
    <path d="M14 90 H92" strokeWidth="1.6" />
    <path d="M16 8 V90" strokeWidth="1.6" />
    <path d="M16 78 Q50 -8 88 78" strokeWidth="2.6" />
    <circle cx="52" cy="33" r="3" fill="currentColor" stroke="none" />
  </svg>
);
const LucideMotif = (Icon: LucideIcon) => () => <Icon className="h-full w-full" strokeWidth={1.4} />;

export type Subject = { key: string; label: string; gradient: string; Motif: () => JSX.Element };

export const SUBJECTS: Record<string, Subject> = {
  physics:   { key: 'physics',   label: 'Physics',     gradient: 'from-blue-600 to-indigo-700',   Motif: AtomMotif },
  chemistry: { key: 'chemistry', label: 'Chemistry',   gradient: 'from-emerald-500 to-teal-700',  Motif: HexMotif },
  biology:   { key: 'biology',   label: 'Biology',     gradient: 'from-rose-500 to-pink-700',     Motif: DnaMotif },
  maths:     { key: 'maths',     label: 'Mathematics', gradient: 'from-violet-600 to-purple-800', Motif: CurveMotif },
  strategy:  { key: 'strategy',  label: 'Strategy',    gradient: 'from-amber-500 to-orange-700',  Motif: LucideMotif(Target) },
  tips:      { key: 'tips',      label: 'Study Tips',  gradient: 'from-yellow-500 to-amber-600',  Motif: LucideMotif(Lightbulb) },
  general:   { key: 'general',   label: 'Guides',      gradient: 'from-slate-600 to-slate-800',   Motif: LucideMotif(Compass) },
};

export const subjectFor = (post: { tags: string[]; category: string }): Subject => {
  const hay = [...post.tags, post.category].join(' ').toLowerCase();
  if (/\bphysics\b/.test(hay)) return SUBJECTS.physics;
  if (/\bchemistry\b/.test(hay)) return SUBJECTS.chemistry;
  if (/\b(biology|botany|zoology)\b/.test(hay)) return SUBJECTS.biology;
  if (/\b(maths|math|mathematics)\b/.test(hay)) return SUBJECTS.maths;
  if (post.category === 'Exam Strategy') return SUBJECTS.strategy;
  if (post.category === 'Study Tips') return SUBJECTS.tips;
  if (post.category === 'NEET') return SUBJECTS.biology;
  if (post.category === 'JEE') return SUBJECTS.physics;
  return SUBJECTS.general;
};

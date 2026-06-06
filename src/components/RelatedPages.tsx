import { Link } from '@/components/RouterLink';
import { ArrowRight } from 'lucide-react';
import { CURRENT_EXAM_YEAR } from '@/lib/examYears';

/* ═══════════════════════════════════════════════════════
   RelatedPages — internal linking component
   Renders contextually relevant links based on current page context.
   Implements Allen-style authority-passing link architecture.
   ═══════════════════════════════════════════════════════ */

export interface RelatedLink {
  href: string;
  label: string;
  tag?: string; // e.g. "Free Tool", "Guide", "City"
}

interface RelatedPagesProps {
  title?: string;
  links: RelatedLink[];
  columns?: 2 | 3;
  variant?: 'default' | 'compact' | 'sidebar';
}

export const RelatedPages = ({ title = 'You Might Also Like', links, columns = 3, variant = 'default' }: RelatedPagesProps) => {
  if (!links.length) return null;

  if (variant === 'sidebar') {
    return (
      <aside className="rounded-xl border border-border bg-card/50 p-4">
        <h3 className="font-display font-bold text-foreground text-sm mb-3">{title}</h3>
        <ul className="space-y-2">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                to={l.href}
                className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition"
              >
                <ArrowRight className="w-3 h-3 text-primary/50 group-hover:translate-x-0.5 transition-transform" />
                <span>{l.label}</span>
                {l.tag && <span className="ml-auto text-[10px] uppercase tracking-wider text-primary/60 font-semibold">{l.tag}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="flex flex-wrap gap-2">
        {links.map((l) => (
          <Link
            key={l.href}
            to={l.href}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary border border-border rounded-full px-3 py-1.5 hover:border-primary/30 transition"
          >
            {l.label}
            <ArrowRight className="w-3 h-3" />
          </Link>
        ))}
      </div>
    );
  }

  const gridCols = columns === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3';

  return (
    <section className="py-12">
      <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl text-center mb-6">{title}</h2>
      <div className={`grid grid-cols-1 ${gridCols} gap-3`}>
        {links.map((l) => (
          <Link
            key={l.href}
            to={l.href}
            className="group flex items-center justify-between gap-3 p-4 rounded-xl border border-border bg-card/40 hover:border-primary/30 hover:bg-card/70 transition-all"
          >
            <div>
              {l.tag && <span className="text-[10px] uppercase tracking-wider text-primary font-semibold">{l.tag}</span>}
              <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{l.label}</p>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0" />
          </Link>
        ))}
      </div>
    </section>
  );
};

/* ── Pre-built link sets for common contexts ── */

export const jeeRelatedLinks: RelatedLink[] = [
  { href: '/jee-coaching', label: 'JEE Coaching — 1-on-1', tag: 'Service' },
  { href: '/jee-physics-coaching', label: 'JEE Physics Coaching — IIT Alumni Mentor', tag: 'Physics' },
  { href: '/jee-chemistry-coaching', label: 'JEE Chemistry Coaching — All 3 Branches', tag: 'Chemistry' },
  { href: '/jee-mathematics-coaching', label: 'JEE Mathematics Coaching — Calculus to Algebra', tag: 'Maths' },
  { href: '/mentors', label: 'Meet Our IIT-Alumni JEE Mentors', tag: 'Faculty' },
  { href: '/jee-rank-predictor', label: `JEE Rank Predictor ${CURRENT_EXAM_YEAR}`, tag: 'Free Tool' },
  { href: '/jee-physics-mechanics', label: 'JEE Physics: Mechanics Guide', tag: 'Chapter' },
  { href: '/jee-math-calculus', label: 'JEE Maths: Calculus Guide', tag: 'Chapter' },
  { href: '/jee-chemistry-organic', label: 'JEE Chemistry: Organic Guide', tag: 'Chapter' },
  { href: '/jee-physics-preparation', label: 'JEE Physics Preparation Strategy', tag: 'Guide' },
  { href: '/jee-mock-test-strategy', label: 'JEE Mock Test Strategy', tag: 'Guide' },
  { href: '/jee-physics-formulas', label: 'JEE Physics Formula Sheet', tag: 'Formulas' },
  { href: '/jee-chemistry-formulas', label: 'JEE Chemistry Formula Sheet', tag: 'Formulas' },
  { href: '/jee-maths-formulas', label: 'JEE Maths Formula Sheet', tag: 'Formulas' },
  { href: '/jee-practice', label: 'JEE Practice Questions', tag: 'Practice' },
  { href: '/jee-pyq', label: 'JEE Previous Year Questions', tag: 'PYQ' },
  { href: '/kota-coaching-alternative', label: 'Better Than Kota Coaching', tag: 'Compare' },
  { href: '/free-trial', label: 'Book Free Demo Class', tag: 'Try Free' },
];

export const neetRelatedLinks: RelatedLink[] = [
  { href: '/neet-coaching', label: 'NEET Coaching — 1-on-1', tag: 'Service' },
  { href: '/neet-biology-coaching', label: 'NEET Biology Coaching — AIIMS Alumni', tag: 'Biology' },
  { href: '/neet-physics-coaching', label: 'NEET Physics Coaching — Concept-First', tag: 'Physics' },
  { href: '/neet-chemistry-coaching', label: 'NEET Chemistry Coaching — NCERT Deep Dive', tag: 'Chemistry' },
  { href: '/mentors', label: 'Meet Our AIIMS-Alumni NEET Mentors', tag: 'Faculty' },
  { href: '/neet-rank-predictor', label: `NEET Rank Predictor ${CURRENT_EXAM_YEAR}`, tag: 'Free Tool' },
  { href: '/neet-biology-digestion-absorption', label: 'NEET Bio: Digestion & Absorption', tag: 'Chapter' },
  { href: '/neet-biology-inheritance-variation', label: 'NEET Bio: Genetics & Inheritance', tag: 'Chapter' },
  { href: '/neet-biology-ecosystem', label: 'NEET Bio: Ecosystem Guide', tag: 'Chapter' },
  { href: '/neet-biology-preparation', label: 'NEET Biology Strategy', tag: 'Guide' },
  { href: '/neet-chemistry-organic-basics', label: 'NEET Chemistry: Organic', tag: 'Chapter' },
  { href: '/neet-biology-formulas', label: 'NEET Biology Formula Sheet', tag: 'Formulas' },
  { href: '/neet-chemistry-formulas', label: 'NEET Chemistry Formula Sheet', tag: 'Formulas' },
  { href: '/neet-practice', label: 'NEET Practice Questions', tag: 'Practice' },
  { href: '/neet-pyq', label: 'NEET Previous Year Questions', tag: 'PYQ' },
  { href: '/online-vs-offline-jee-coaching', label: 'Online vs Offline Coaching', tag: 'Compare' },
  { href: '/free-trial', label: 'Book Free Demo Class', tag: 'Try Free' },
];

export function getRelatedLinksForExam(exam: 'jee' | 'neet' | 'JEE' | 'NEET'): RelatedLink[] {
  return exam.toLowerCase() === 'jee' ? jeeRelatedLinks : neetRelatedLinks;
}

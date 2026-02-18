import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
  { href: '/jee-rank-predictor', label: 'JEE Rank Predictor 2026', tag: 'Free Tool' },
  { href: '/jee-physics-mechanics', label: 'JEE Physics: Mechanics Guide', tag: 'Chapter' },
  { href: '/jee-maths-calculus', label: 'JEE Maths: Calculus Guide', tag: 'Chapter' },
  { href: '/jee-chemistry-organic-basics', label: 'JEE Chemistry: Organic Guide', tag: 'Chapter' },
  { href: '/jee-physics-preparation', label: 'JEE Physics Preparation Strategy', tag: 'Guide' },
  { href: '/jee-mock-test-strategy', label: 'JEE Mock Test Strategy', tag: 'Guide' },
  { href: '/kota-coaching-alternative', label: 'Better Than Kota Coaching', tag: 'Compare' },
  { href: '/free-trial', label: 'Book Free Demo Class', tag: 'Try Free' },
];

export const neetRelatedLinks: RelatedLink[] = [
  { href: '/neet-coaching', label: 'NEET Coaching — 1-on-1', tag: 'Service' },
  { href: '/neet-rank-predictor', label: 'NEET Rank Predictor 2026', tag: 'Free Tool' },
  { href: '/neet-biology-human-physiology', label: 'NEET Bio: Human Physiology', tag: 'Chapter' },
  { href: '/neet-biology-genetics', label: 'NEET Bio: Genetics Guide', tag: 'Chapter' },
  { href: '/neet-biology-ecology', label: 'NEET Bio: Ecology Guide', tag: 'Chapter' },
  { href: '/neet-biology-preparation', label: 'NEET Biology Strategy', tag: 'Guide' },
  { href: '/neet-chemistry-organic', label: 'NEET Chemistry: Organic', tag: 'Chapter' },
  { href: '/online-vs-offline-jee-coaching', label: 'Online vs Offline Coaching', tag: 'Compare' },
  { href: '/free-trial', label: 'Book Free Demo Class', tag: 'Try Free' },
];

export function getRelatedLinksForExam(exam: 'jee' | 'neet' | 'JEE' | 'NEET'): RelatedLink[] {
  return exam.toLowerCase() === 'jee' ? jeeRelatedLinks : neetRelatedLinks;
}

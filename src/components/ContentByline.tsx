import { Link } from '@/components/RouterLink';
import { cn } from '@/lib/utils';
import type { Author } from '@/data/authorData';

/**
 * Compact, visible "written & reviewed by" byline for subject content pages
 * (chapters, notes, hubs, subject landings). A human-visible authorship
 * signal for E-E-A-T, linking to the author roster on /mentors.
 * Defaults to centered; pass `className="justify-start"` for left-aligned heroes.
 */
export default function ContentByline({ author, className }: { author: Author; className?: string }) {
  return (
    <p
      className={cn(
        'text-xs sm:text-sm text-muted-foreground flex flex-wrap items-center justify-center gap-x-1.5 gap-y-0.5',
        className,
      )}
    >
      <span>Written &amp; reviewed by</span>
      <Link to="/mentors" className="text-primary hover:underline font-medium">
        {author.name}
      </Link>
      <span className="hidden sm:inline">· {author.credential}</span>
    </p>
  );
}

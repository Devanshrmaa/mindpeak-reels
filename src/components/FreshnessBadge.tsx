import { CalendarDays, BadgeCheck } from 'lucide-react';

interface FreshnessBadgeProps {
  /** ISO date string, e.g. "2026-02-18" */
  lastUpdated: string;
  /** Verified label, e.g. "JEE 2026" */
  verifiedFor?: string;
}

/**
 * Content-freshness signal: displays "Last Updated" date + optional
 * verified badge.  Google values dateModified signals in conjunction
 * with visible on-page freshness indicators.
 */
export const FreshnessBadge = ({ lastUpdated, verifiedFor }: FreshnessBadgeProps) => {
  const formatted = new Date(lastUpdated).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-muted-foreground mb-4 sm:mb-6">
      <span className="inline-flex items-center gap-1 sm:gap-1.5">
        <CalendarDays className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
        Last Updated: {formatted}
      </span>
      {verifiedFor && (
        <span className="inline-flex items-center gap-1 sm:gap-1.5 text-primary font-semibold">
          <BadgeCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          Verified for {verifiedFor}
        </span>
      )}
    </div>
  );
};

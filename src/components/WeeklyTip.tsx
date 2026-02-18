import { Lightbulb } from 'lucide-react';
import { getWeeklyTip } from '@/lib/rotatingContent';

interface WeeklyTipProps {
  exam?: 'JEE' | 'NEET';
}

/**
 * Displays a rotating weekly tip that changes every ~7 days.
 * Adds micro-freshness signals to the page content.
 */
export const WeeklyTip = ({ exam = 'JEE' }: WeeklyTipProps) => {
  const tip = getWeeklyTip(exam);

  return (
    <aside className="rounded-xl border border-border bg-card p-4 sm:p-5 flex items-start gap-3">
      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
        <Lightbulb className="w-4 h-4 text-primary" />
      </div>
      <div>
        <h4 className="font-display font-bold text-foreground text-sm mb-1">
          📚 This Week's {exam} Tip
        </h4>
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
          {tip}
        </p>
      </div>
    </aside>
  );
};

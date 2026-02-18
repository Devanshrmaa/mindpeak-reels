import { motion } from 'framer-motion';
import { getCurrentSeasonalBanner } from '@/lib/rotatingContent';
import { useDemoModal } from '@/components/DemoBookingModal';

/**
 * A seasonally-aware promotional banner that rotates monthly.
 * Provides fresh, contextually relevant CTAs each month.
 */
export const SeasonalBanner = () => {
  const { openDemoModal } = useDemoModal();
  const banner = getCurrentSeasonalBanner();

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="rounded-xl border border-primary/30 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 p-4 sm:p-5"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h3 className="font-display font-bold text-foreground text-base sm:text-lg">
            {banner.headline}
          </h3>
          <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">
            {banner.subtext}
          </p>
        </div>
        <button
          onClick={openDemoModal}
          className="flex-shrink-0 px-5 py-2.5 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded hover:opacity-90 transition-opacity"
        >
          {banner.cta} →
        </button>
      </div>
    </motion.div>
  );
};

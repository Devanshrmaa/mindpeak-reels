import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Tag, Clock } from 'lucide-react';
import {
  getCurrentOffer,
  getDiscountedPrice,
  getSavingsAmount,
  formatINR,
  type MonthlyOffer,
} from '@/lib/dynamicPricing';
import { useDemoModal } from '@/components/DemoBookingModal';

/**
 * Displays the current month's promotional offer with dynamic pricing.
 * Rotates automatically — Google sees fresh offers each crawl.
 */
export const DynamicOfferBanner = () => {
  const { openDemoModal } = useDemoModal();
  const [offer, setOffer] = useState<MonthlyOffer | null>(null);

  useEffect(() => {
    setOffer(getCurrentOffer());
  }, []);

  if (!offer) return null;

  const basePrice = 199000; // 1-year plan (original price)
  const discounted = getDiscountedPrice(basePrice);
  const savings = getSavingsAmount(basePrice);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-primary/30 bg-card overflow-hidden"
    >
      {/* Badge strip */}
      <div className="bg-primary px-4 py-2 flex items-center justify-between">
        <span className="text-primary-foreground text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
          <Tag className="w-3.5 h-3.5" />
          {offer.badge} {offer.title}
        </span>
        <span className="text-primary-foreground/80 text-[10px] flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {offer.urgency}
        </span>
      </div>

      <div className="p-5 sm:p-6">
        <p className="text-muted-foreground text-sm mb-4">
          {offer.description}
        </p>

        <div className="flex items-baseline gap-3 mb-2">
          <span className="text-muted-foreground line-through text-sm">
            {formatINR(basePrice)}
          </span>
          <span className="font-display font-black text-primary text-2xl sm:text-3xl">
            {formatINR(discounted)}
          </span>
        </div>
        <p className="text-xs text-green-500 font-semibold mb-5">
          You save {formatINR(savings)} ({Math.round((savings / basePrice) * 100)}% OFF)
        </p>

        <button
          onClick={openDemoModal}
          className="w-full px-6 py-3 bg-primary text-primary-foreground font-display font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity rounded"
        >
          Claim This Offer →
        </button>
      </div>
    </motion.div>
  );
};

/**
 * Dynamic Pricing Utility
 * Rotates special offers / limited-time discounts monthly.
 * Google sees fresh offers = active promotions signal.
 */

export interface MonthlyOffer {
  id: string;
  month: number; // 0 = Jan … 11 = Dec
  discount: number; // percentage
  title: string;
  description: string;
  urgency: string;
  badge?: string;
}

const monthlyOffers: MonthlyOffer[] = [
  { id: 'jan-new-year', month: 0, discount: 20, title: 'New Year Special', description: '20% OFF on all annual plans', urgency: 'Valid till January 31st', badge: '🎉' },
  { id: 'feb-exam-prep', month: 1, discount: 15, title: 'Exam Preparation Boost', description: '15% OFF + Free mock test series', urgency: 'Limited seats available', badge: '📚' },
  { id: 'mar-early-bird', month: 2, discount: 25, title: 'Early Bird Special', description: '25% OFF for next session enrollments', urgency: 'Offer ends March 31st', badge: '🐦' },
  { id: 'apr-session2', month: 3, discount: 20, title: 'Session 2 Booster', description: '20% OFF crash course for JEE Main Session 2', urgency: 'Only 50 seats left', badge: '🚀' },
  { id: 'may-last-mile', month: 4, discount: 15, title: 'Last Mile Discount', description: '15% OFF on crash courses', urgency: 'Exam month special', badge: '🏁' },
  { id: 'jun-summer', month: 5, discount: 20, title: 'Summer Headstart', description: '20% OFF for Class 11 starters', urgency: 'Start your 2-year journey', badge: '☀️' },
  { id: 'jul-freedom', month: 6, discount: 15, title: 'Freedom Sale', description: '15% OFF all programs', urgency: 'Independence Day offer', badge: '🇮🇳' },
  { id: 'aug-earlybird', month: 7, discount: 20, title: 'Early Enrollment Offer', description: '20% OFF + free diagnostic test', urgency: 'Enroll before August 31st', badge: '📋' },
  { id: 'sep-foundation', month: 8, discount: 10, title: 'Foundation Month Offer', description: '10% OFF foundation programs', urgency: 'Build strong basics', badge: '🧱' },
  { id: 'oct-diwali', month: 9, discount: 25, title: 'Diwali Dhamaka', description: '25% OFF on all plans — biggest sale of the year', urgency: 'Limited period Diwali offer', badge: '🪔' },
  { id: 'nov-winter', month: 10, discount: 15, title: 'Winter Preparation Special', description: '15% OFF + bonus study material', urgency: 'Offer valid in November', badge: '❄️' },
  { id: 'dec-yearend', month: 11, discount: 20, title: 'Year-End Mega Offer', description: '20% OFF — New year, new goals', urgency: 'Enroll before December 31st', badge: '🎄' },
];

/**
 * Returns the current month's promotional offer.
 */
export function getCurrentOffer(): MonthlyOffer {
  const currentMonth = new Date().getMonth();
  return (
    monthlyOffers.find((o) => o.month === currentMonth) ?? monthlyOffers[0]
  );
}

/**
 * Minimum price floor — discounted price never goes below this.
 */
const MIN_PRICE = 130000;

/**
 * Returns the final discounted price — always ₹1,30,000.
 * Regular price is displayed higher; the discount brings it to MIN_PRICE.
 */
export function getDiscountedPrice(_basePrice: number): number {
  return MIN_PRICE;
}

/**
 * Returns how much the user saves.
 */
export function getSavingsAmount(basePrice: number): number {
  return basePrice - getDiscountedPrice(basePrice);
}

/**
 * Formats price in Indian Rupees.
 */
export function formatINR(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`;
}

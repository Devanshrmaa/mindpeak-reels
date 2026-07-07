/**
 * Core program pricing tiers — single source of truth.
 * Used by /pricing (full comparison) and the homepage pricing section.
 * Update prices here only; both surfaces read from this file.
 */

export interface Tier {
  name: string;
  badge?: string;
  price: string;
  originalPrice?: string;
  discountTag?: string;
  period: string;
  target: string;
  features: string[];
  highlight?: boolean;
}

export const tiers: Tier[] = [
  {
    name: 'Foundation',
    originalPrice: '₹1,30,000',
    price: '₹1,00,000',
    discountTag: '23% OFF',
    period: '/ year + GST',
    target: 'Classes 6th – 10th',
    features: [
      'Live 1-on-1 classes, 6 days/week',
      'All sessions recorded for revision',
      'Dedicated personal mentor',
      'Foundation for JEE / NEET concepts',
      'Weekly performance analytics',
      'Parent progress reports',
      'Flexible scheduling',
    ],
  },
  {
    name: 'JEE / NEET — 1 Year',
    badge: 'Most Popular',
    originalPrice: '₹1,99,000',
    price: '₹1,30,000',
    discountTag: '35% OFF',
    period: '/ year + GST',
    target: 'JEE Main + Advanced or NEET UG',
    highlight: true,
    features: [
      'Live 1-on-1 classes, 6 days/week',
      'All sessions recorded for revision',
      'Dedicated personal mentor',
      'Complete JEE or NEET syllabus coverage',
      'AI-driven adaptive curriculum',
      'Weekly mock tests (CBT format)',
      'Detailed performance analytics',
      'Weekly parent reports & mentor calls',
      'Instant doubt resolution (WhatsApp)',
    ],
  },
  {
    name: 'JEE / NEET — 2 Year',
    originalPrice: '₹2,99,000',
    price: '₹2,30,000',
    discountTag: '23% OFF',
    period: '/ 2 years + GST',
    target: 'JEE Main + Advanced or NEET UG',
    features: [
      'Everything in 1-Year plan',
      'Extended preparation from Class 11',
      'Foundation + competitive exam coverage',
      'Board exam integration (CBSE / State)',
      'Long-term mentor relationship',
      'Phased curriculum with milestones',
      'Priority scheduling',
      'Scholarship eligibility for toppers',
    ],
  },
];

/**
 * Counselling & College Guide Data
 * Covers: college predictor, rank-vs-college, top colleges
 */

import { CURRENT_EXAM_YEAR } from '@/lib/examYears';

const Y = CURRENT_EXAM_YEAR;

export interface CounsellingPage {
  slug: string;
  title: string;
  description: string;
  h1: string;
  highlight: string;
  heroSubtitle: string;
  exam: 'JEE' | 'NEET';
  sections: { heading: string; content?: string; bullets?: string[]; table?: { headers: string[]; rows: string[][] } }[];
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
}

const pages: CounsellingPage[] = [
  {
    slug: 'top-engineering-colleges-india',
    title: `Top Engineering Colleges in India ${Y} — Rankings, Cutoffs & Fees`,
    description: `Top engineering colleges in India ${Y}: IITs, NITs, IIITs ranked by NIRF. Includes cutoff ranks, fees, placements & how to get in.`,
    h1: 'Top Engineering Colleges',
    highlight: `India ${Y}`,
    heroSubtitle: `Comprehensive ranking of India's best engineering colleges with JEE cutoffs, average placements, and fee structure. Plan your college choice smartly.`,
    exam: 'JEE',
    sections: [
      { heading: 'Top 10 Engineering Colleges (NIRF Ranking)', table: { headers: ['Rank', 'College', 'JEE Cutoff (Gen)', 'Avg Package', 'Fees/Year'], rows: [['1', 'IIT Madras', 'AIR 1-500', '₹25-30 LPA', '₹2.2L'], ['2', 'IIT Delhi', 'AIR 1-600', '₹28-35 LPA', '₹2.2L'], ['3', 'IIT Bombay', 'AIR 1-400', '₹30-40 LPA', '₹2.2L'], ['4', 'IIT Kanpur', 'AIR 500-1500', '₹22-28 LPA', '₹2.2L'], ['5', 'IIT Kharagpur', 'AIR 600-2000', '₹20-25 LPA', '₹2.2L'], ['6', 'IIT Roorkee', 'AIR 800-2500', '₹18-22 LPA', '₹2.2L'], ['7', 'IIT Guwahati', 'AIR 1000-3000', '₹16-20 LPA', '₹2.2L'], ['8', 'IIT Hyderabad', 'AIR 1200-3500', '₹18-22 LPA', '₹2.2L'], ['9', 'NIT Trichy', 'JEE Main 95+ %ile', '₹12-15 LPA', '₹1.5L'], ['10', 'NIT Warangal', 'JEE Main 95+ %ile', '₹10-14 LPA', '₹1.5L']] } },
      { heading: 'How to Choose the Right College', bullets: ['Prioritize branch over college for top NITs (CSE at NIT Trichy > Mech at low-ranked IIT)', 'Check placement statistics — median package matters more than highest package', 'Consider location — proximity to tech hubs (Bangalore, Hyderabad, Chennai) helps internships', 'Research faculty and research output for IITs', 'Check industry connections and alumni network strength'] },
      { heading: 'IIT vs NIT vs IIIT — Which One?', content: 'IITs are the gold standard for engineering in India, but top NITs and IIITs offer comparable education in specific branches. IIIT Hyderabad\'s CSE is often preferred over lower-ranked IIT CSE branches.', table: { headers: ['Parameter', 'IIT', 'NIT', 'IIIT'], rows: [['Admission', 'JEE Advanced', 'JEE Main', 'JEE Main'], ['Total seats', '~17,000', '~25,000', '~5,000'], ['Avg package (CSE)', '₹25-40 LPA', '₹10-18 LPA', '₹12-20 LPA'], ['Research focus', 'Very High', 'Moderate', 'High (CS focused)'], ['Global recognition', 'Excellent', 'Good', 'Good (in CS)']] } },
    ],
    faqs: [
      { q: 'Which is the best engineering college in India?', a: `IIT Madras, IIT Delhi, and IIT Bombay consistently rank as the top 3 engineering colleges in India per NIRF ${Y} rankings.` },
      { q: 'What JEE rank is needed for top IITs?', a: 'For popular branches (CSE, ECE) at top 5 IITs, you typically need JEE Advanced AIR under 500. For other branches, AIR under 2000-3000.' },
    ],
    relatedSlugs: [`jee-main-cutoff-${Y}`, `jee-counselling-${Y}`, 'jee-coaching', 'jee-rank-predictor'],
  },
  {
    slug: 'top-medical-colleges-india',
    title: `Top Medical Colleges in India ${Y} — NEET Cutoffs, Rankings & Fees`,
    description: `Top medical colleges in India ${Y}: AIIMS, government medical colleges ranked by NIRF. NEET cutoff ranks, fees, and seat matrix.`,
    h1: 'Top Medical Colleges',
    highlight: `India ${Y}`,
    heroSubtitle: `Complete ranking of India's best medical colleges for MBBS admission. Includes NEET cutoff ranks, government vs private fees, and tips for getting your dream college.`,
    exam: 'NEET',
    sections: [
      { heading: 'Top 10 Medical Colleges (NIRF)', table: { headers: ['Rank', 'College', 'NEET Cutoff (Gen)', 'Fees/Year', 'Type'], rows: [['1', 'AIIMS New Delhi', 'AIR 1-50', '₹6,000', 'Central Govt'], ['2', 'PGIMER Chandigarh', 'AIR 50-150', '₹10,000', 'Central Govt'], ['3', 'CMC Vellore', 'AIR 100-300', '₹60,000', 'Private (aided)'], ['4', 'JIPMER Puducherry', 'AIR 50-200', '₹8,000', 'Central Govt'], ['5', 'AIIMS Jodhpur', 'AIR 200-500', '₹6,000', 'Central Govt'], ['6', 'Maulana Azad MC, Delhi', 'AIR 100-400', '₹15,000', 'State Govt'], ['7', 'King George\'s MC, Lucknow', 'AIR 300-800', '₹25,000', 'State Govt'], ['8', 'Grant MC Mumbai', 'AIR 400-1000', '₹30,000', 'State Govt'], ['9', 'Madras MC Chennai', 'AIR 500-1200', '₹20,000', 'State Govt'], ['10', 'Seth GS MC Mumbai', 'AIR 500-1500', '₹30,000', 'State Govt']] } },
      { heading: 'Government vs Private Medical Colleges', content: 'The fee difference between government and private medical colleges is enormous — ₹10K-50K/year vs ₹10-25 LPA for private colleges.', table: { headers: ['Parameter', 'Government', 'Private'], rows: [['Fees/Year', '₹10K-1L', '₹10-25L'], ['Total MBBS cost', '₹1-5L', '₹50L-1.5Cr'], ['Seats', '~45,000', '~45,000'], ['Cutoff', 'Higher NEET score needed', 'Lower score accepted'], ['Quality', 'Generally excellent', 'Varies widely'], ['Admission', 'NEET + counselling', 'NEET + management quota']] } },
      { heading: 'NEET Score vs College Tier', bullets: ['680-720: AIIMS Delhi, top central govt colleges', '650-680: Good govt medical colleges in metros', '600-650: State govt colleges in Tier 1 cities', '550-600: State govt colleges in Tier 2 cities', '500-550: Govt colleges in smaller cities or deemed universities', 'Below 500: Private medical colleges or re-attempt'] },
    ],
    faqs: [
      { q: 'Which is the best medical college in India?', a: `AIIMS New Delhi consistently ranks #1 for MBBS in India. PGIMER Chandigarh, CMC Vellore, and JIPMER Puducherry are also top-ranked.` },
      { q: 'What NEET score is needed for AIIMS Delhi?', a: 'You typically need AIR under 50 (NEET score 700+) for AIIMS New Delhi MBBS admission through AIQ counselling.' },
    ],
    relatedSlugs: [`neet-cutoff-${Y}`, `neet-counselling-${Y}`, 'neet-coaching', 'neet-rank-predictor'],
  },
  {
    slug: `jee-main-rank-vs-college`,
    title: `JEE Main Rank vs College ${Y} — Which College Can You Get?`,
    description: `JEE Main rank vs college mapping ${Y}: check which NITs, IIITs & GFTIs you can get based on your rank/percentile. Complete branch-wise analysis.`,
    h1: 'JEE Main Rank vs College',
    highlight: `${Y}`,
    heroSubtitle: `Find out which engineering college you can get based on your JEE Main ${Y} rank. Comprehensive branch-wise cutoff analysis for NITs, IIITs, and GFTIs.`,
    exam: 'JEE',
    sections: [
      { heading: 'Rank-wise College Mapping', table: { headers: ['Percentile', 'Approx Rank', 'Possible Colleges'], rows: [['99.5+', '< 5,000', 'Top 10 NITs (CSE/ECE), IIIT Hyderabad'], ['99-99.5', '5,000-10,000', 'Top NITs (most branches), all IIITs'], ['97-99', '10,000-30,000', 'Mid-tier NITs, top GFTIs'], ['95-97', '30,000-50,000', 'Lower NITs, all GFTIs'], ['90-95', '50,000-1,00,000', 'Some GFTIs, state-level colleges'], ['Below 90', '> 1,00,000', 'State colleges, private universities']] } },
      { heading: 'Branch-wise Demand (Most to Least)', bullets: ['Computer Science Engineering (CSE) — Highest demand, highest cutoff', 'Electronics & Communication (ECE)', 'Electrical Engineering (EE)', 'Mechanical Engineering (ME)', 'Civil Engineering (CE)', 'Chemical Engineering — Lower demand but good scope in R&D'] },
    ],
    faqs: [
      { q: 'Can I get NIT with 95 percentile?', a: 'With 95 percentile (~rank 50,000), you can get admission in lower-ranked NITs in branches like Civil, Chemical, or Mechanical. Top NITs require 99+ percentile.' },
    ],
    relatedSlugs: [`jee-main-cutoff-${Y}`, 'top-engineering-colleges-india', `jee-counselling-${Y}`, 'jee-rank-predictor'],
  },
  {
    slug: `neet-rank-vs-college`,
    title: `NEET Rank vs College ${Y} — Which Medical College Can You Get?`,
    description: `NEET rank vs college mapping ${Y}: find which medical colleges (AIIMS, Govt, Private) you can get based on your NEET score and AIR rank.`,
    h1: 'NEET Rank vs College',
    highlight: `${Y}`,
    heroSubtitle: `Check which medical college you can get based on your NEET ${Y} score. Comprehensive score-to-college mapping for AIQ and state quota.`,
    exam: 'NEET',
    sections: [
      { heading: 'Score-wise College Mapping', table: { headers: ['NEET Score', 'Approx AIR', 'Possible Colleges'], rows: [['700-720', '1-100', 'AIIMS Delhi, top central govt colleges'], ['680-700', '100-500', 'All AIIMS, JIPMER, top state govt colleges'], ['650-680', '500-2,000', 'Good govt medical colleges in metros'], ['600-650', '2,000-10,000', 'State govt colleges in Tier 1 cities'], ['550-600', '10,000-30,000', 'Govt colleges in smaller cities'], ['500-550', '30,000-60,000', 'Deemed universities, some private'], ['Below 500', '60,000+', 'Private medical colleges']] } },
    ],
    faqs: [
      { q: 'What NEET score is needed for a government medical college?', a: 'Generally, 550+ score (AIR under 30,000) gives a good chance at government medical colleges through AIQ counselling. State-wise cutoffs vary.' },
    ],
    relatedSlugs: [`neet-cutoff-${Y}`, 'top-medical-colleges-india', `neet-counselling-${Y}`, 'neet-rank-predictor'],
  },
];

export function getCounsellingPage(slug: string): CounsellingPage | undefined {
  return pages.find(p => p.slug === slug);
}

export function getAllCounsellingSlugs(): string[] {
  return pages.map(p => p.slug);
}

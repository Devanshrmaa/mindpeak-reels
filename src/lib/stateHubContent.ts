/**
 * State-hub content model — single source of truth for everything rendered
 * on the indexable /jee-coaching-in-<state> and /neet-coaching-in-<state>
 * pages.
 *
 * Joins the hub registry (stateHubData) with the deep per-state research
 * layer (stateEducationData: real cutoffs, aspirant counts, board-transition
 * analysis, coaching-landscape prose) so the state pages carry genuinely
 * differentiated substance — the recovery plan's hard requirement for these
 * URLs.
 *
 * Consumed by BOTH:
 *   - src/views/StateHubPage.tsx          (client view)
 *   - app/[...slug]/StateHubServerShell.tsx (server-rendered crawler shell)
 * so the crawler HTML and the hydrated page can never drift apart.
 *
 * Server-safe: pure data + string composition, no React, no browser APIs.
 */

import type { StateHub, StateHubFAQ } from '@/data/stateHubData';
import { getStateEducation } from '@/data/stateEducationData';
import { INDEXABLE_CITY_SLUGS } from '@/lib/indexableCities';
import { CURRENT_EXAM_YEAR } from '@/lib/examYears';

const BASE = 'https://mindpeakinstitute.com';
const YEAR = CURRENT_EXAM_YEAR;

export interface StateHubLink {
  label: string;
  href: string;
}

export interface StateHubCollege {
  name: string;
  cutoff?: string;
  branch?: string;
}

export interface StateHubModel {
  exam: 'JEE' | 'NEET';
  examFull: string;
  state: string;
  /** Full page slug, e.g. 'jee-coaching-in-karnataka' */
  slug: string;
  canonical: string;
  h1: string;
  intro: string;
  /** Hero stat chips — aspirant pool, exam route, board */
  stats: { label: string; value: string }[];
  /** Exam-path section */
  board: string;
  examRoute: string;
  stateExam?: { name: string; seats: string; overlap: string };
  /** Target colleges with realistic cutoffs (research layer) */
  colleges: StateHubCollege[];
  /** Board → exam transition analysis */
  boardBridge?: string;
  /** Coaching landscape: competition + regional access reality */
  competition?: string;
  regionalChallenge?: string;
  /** Unique educational fact callout */
  fact?: string;
  /** Career/outcome ecosystem */
  career?: string;
  premierInstitutes: string[];
  /** Cities served; href set for cities with their own indexable T1 page */
  cities: { name: string; href?: string }[];
  faqs: StateHubFAQ[];
  /** The same state's other-exam hub page */
  twin: StateHubLink;
  /** Exam resources: syllabus, cutoff, counselling, practice, tools */
  related: StateHubLink[];
  /** Neighbouring state hubs (same exam) for regional interlinking */
  nearbyHubs: StateHubLink[];
}

/** Neighbouring-state interlinks (geography-based, 3 per state). */
const NEARBY: Record<string, string[]> = {
  'uttar-pradesh': ['bihar', 'madhya-pradesh', 'uttarakhand'],
  'maharashtra': ['gujarat', 'madhya-pradesh', 'karnataka'],
  'karnataka': ['tamil-nadu', 'kerala', 'telangana'],
  'tamil-nadu': ['kerala', 'karnataka', 'andhra-pradesh'],
  'rajasthan': ['madhya-pradesh', 'haryana', 'gujarat'],
  'west-bengal': ['jharkhand', 'odisha', 'bihar'],
  'madhya-pradesh': ['chhattisgarh', 'rajasthan', 'uttar-pradesh'],
  'bihar': ['jharkhand', 'uttar-pradesh', 'west-bengal'],
  'gujarat': ['maharashtra', 'rajasthan', 'madhya-pradesh'],
  'andhra-pradesh': ['telangana', 'tamil-nadu', 'odisha'],
  'telangana': ['andhra-pradesh', 'karnataka', 'maharashtra'],
  'kerala': ['tamil-nadu', 'karnataka', 'andhra-pradesh'],
  'haryana': ['punjab', 'rajasthan', 'uttar-pradesh'],
  'punjab': ['haryana', 'himachal-pradesh', 'rajasthan'],
  'odisha': ['west-bengal', 'jharkhand', 'chhattisgarh'],
  'jharkhand': ['bihar', 'west-bengal', 'odisha'],
  'chhattisgarh': ['madhya-pradesh', 'odisha', 'jharkhand'],
  'assam': ['west-bengal', 'bihar', 'jharkhand'],
  'uttarakhand': ['uttar-pradesh', 'himachal-pradesh', 'haryana'],
  'himachal-pradesh': ['punjab', 'uttarakhand', 'haryana'],
};

/** States whose pages should cross-link the Kota-alternative flagship. */
const KOTA_BELT = new Set(['rajasthan', 'bihar', 'jharkhand', 'uttar-pradesh', 'madhya-pradesh']);

const STATE_NAME_BY_SLUG: Record<string, string> = {
  'uttar-pradesh': 'Uttar Pradesh',
  'maharashtra': 'Maharashtra',
  'karnataka': 'Karnataka',
  'tamil-nadu': 'Tamil Nadu',
  'rajasthan': 'Rajasthan',
  'west-bengal': 'West Bengal',
  'madhya-pradesh': 'Madhya Pradesh',
  'bihar': 'Bihar',
  'gujarat': 'Gujarat',
  'andhra-pradesh': 'Andhra Pradesh',
  'telangana': 'Telangana',
  'kerala': 'Kerala',
  'haryana': 'Haryana',
  'punjab': 'Punjab',
  'odisha': 'Odisha',
  'jharkhand': 'Jharkhand',
  'chhattisgarh': 'Chhattisgarh',
  'assam': 'Assam',
  'uttarakhand': 'Uttarakhand',
  'himachal-pradesh': 'Himachal Pradesh',
};

const citySlug = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

export function buildStateHubModel(exam: 'JEE' | 'NEET', hub: StateHub): StateHubModel {
  const isJEE = exam === 'JEE';
  const examLower = exam.toLowerCase();
  const examFull = isJEE ? 'JEE Main & Advanced' : 'NEET UG';
  const slug = `${examLower}-coaching-in-${hub.slug}`;
  const edu = getStateEducation(hub.state);

  const colleges: StateHubCollege[] = isJEE
    ? (edu?.topEnggColleges ?? hub.engColleges.map((name) => ({ name })))
    : (edu?.topMedColleges ?? hub.medColleges.map((name) => ({ name })));

  const stats: { label: string; value: string }[] = [];
  if (edu?.aspirantCount) stats.push({ label: `${hub.state} aspirant pool`, value: edu.aspirantCount });
  stats.push({ label: 'Exam route', value: isJEE ? hub.engExam : hub.medRoute });
  stats.push({ label: 'School boards covered', value: hub.board });

  const cities = hub.cities.map((name) => {
    const cs = `${examLower}-coaching-in-${citySlug(name)}`;
    return INDEXABLE_CITY_SLUGS.has(cs) ? { name, href: `/${cs}` } : { name };
  });

  const related: StateHubLink[] = isJEE
    ? [
        { label: `JEE Main Syllabus ${YEAR}`, href: `/jee-main-syllabus-${YEAR}` },
        { label: `JEE Main Cutoff ${YEAR}`, href: `/jee-main-cutoff-${YEAR}` },
        { label: `JEE Counselling Guide ${YEAR}`, href: `/jee-counselling-${YEAR}` },
        { label: 'JEE Rank Predictor', href: '/jee-rank-predictor' },
        { label: 'Free JEE Practice Questions', href: '/jee-practice' },
        { label: 'JEE Previous Year Questions', href: '/jee-pyq' },
      ]
    : [
        { label: `NEET Syllabus ${YEAR}`, href: `/neet-syllabus-${YEAR}` },
        { label: `NEET Cutoff ${YEAR}`, href: `/neet-cutoff-${YEAR}` },
        { label: `NEET Counselling Guide ${YEAR}`, href: `/neet-counselling-${YEAR}` },
        { label: 'NEET Rank Predictor', href: '/neet-rank-predictor' },
        { label: 'Free NEET Practice Questions', href: '/neet-practice' },
        { label: 'NEET Previous Year Questions', href: '/neet-pyq' },
      ];
  if (KOTA_BELT.has(hub.slug)) {
    related.push({ label: 'Kota Coaching Alternative', href: '/kota-coaching-alternative' });
  }

  const nearbyHubs: StateHubLink[] = (NEARBY[hub.slug] ?? [])
    .filter((s) => STATE_NAME_BY_SLUG[s])
    .map((s) => ({
      label: `${exam} Coaching in ${STATE_NAME_BY_SLUG[s]}`,
      href: `/${examLower}-coaching-in-${s}`,
    }));

  return {
    exam,
    examFull,
    state: hub.state,
    slug,
    canonical: `${BASE}/${slug}`,
    h1: `Best ${exam} Coaching in ${hub.state}`,
    intro: isJEE ? hub.jeeIntro : hub.neetIntro,
    stats,
    board: hub.board,
    examRoute: isJEE ? hub.engExam : hub.medRoute,
    stateExam: isJEE && edu?.stateExamDetails
      ? {
          name: edu.stateExamDetails.name,
          seats: edu.stateExamDetails.seats,
          overlap: edu.stateExamDetails.overlapWithNational,
        }
      : undefined,
    colleges,
    boardBridge: edu?.boardTransitionChallenges,
    competition: edu?.competitionContext,
    regionalChallenge: edu?.regionalChallenge,
    fact: edu?.educationFact,
    career: edu?.careerEcosystem,
    premierInstitutes: edu?.nearbyPremierInstitutes ?? [],
    cities,
    faqs: isJEE ? hub.jeeFaqs : hub.neetFaqs,
    twin: {
      label: `${isJEE ? 'NEET' : 'JEE'} Coaching in ${hub.state}`,
      href: `/${isJEE ? 'neet' : 'jee'}-coaching-in-${hub.slug}`,
    },
    related,
    nearbyHubs,
  };
}

/**
 * JSON-LD for a state hub page: Course, FAQPage, BreadcrumbList,
 * ItemList of target colleges, and a Service with areaServed covering the
 * state's cities. No fabricated ratings/reviews — these pages recovered
 * from a spam-update penalty and stay strictly factual.
 */
export function buildStateHubJsonLd(model: StateHubModel): object[] {
  const { exam, state, canonical } = model;

  const course = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: `${exam} Coaching in ${state} — MindPeak Institute`,
    description: `1-on-1 online ${exam} coaching for ${state} students: ${model.board} to ${model.examFull} bridge with ${model.examRoute} handled in one personalised plan.`,
    provider: { '@type': 'EducationalOrganization', name: 'MindPeak Institute', url: BASE },
    offers: { '@type': 'Offer', category: 'Paid', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
    hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online' },
    about: [state, model.examFull],
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: model.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: `${exam} Coaching`, item: `${BASE}/${exam.toLowerCase()}-coaching` },
      { '@type': 'ListItem', position: 3, name: `${exam} Coaching in ${state}`, item: canonical },
    ],
  };

  const collegeList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Top ${exam === 'JEE' ? 'engineering' : 'medical'} colleges ${state} students target`,
    itemListElement: model.colleges.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.cutoff ? `${c.name} (${c.cutoff})` : c.name,
    })),
  };

  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: `1-on-1 online ${exam} coaching`,
    provider: { '@type': 'EducationalOrganization', name: 'MindPeak Institute', url: BASE },
    areaServed: [
      { '@type': 'State', name: state },
      ...model.cities.map((c) => ({ '@type': 'City', name: c.name })),
    ],
    url: canonical,
  };

  return [course, faqPage, breadcrumb, collegeList, service];
}

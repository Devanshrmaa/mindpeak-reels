/* ═══════════════════════════════════════════════════════════════════
   CITY EXPANSION — Programmatic SEO: 200+ cities
   Uses state-level educational data to make each city page unique
   based on real colleges, cutoffs, board specifics, and competition stats.
   ═══════════════════════════════════════════════════════════════════ */

import type { CityData, QuickStat, CourseTile, LocalValueProp, CityFAQ, CityTestimonial, CityEvent, TabbedContent } from './cityData';
import { getStateEducation } from './stateEducationData';

interface CityConfig {
  slug: string;
  city: string;
  state: string;
  tier: 1 | 2 | 3;
  lat: number;
  lng: number;
  exams: ('jee' | 'neet')[];
  board?: string;           // state board name
  stateExam?: string;       // e.g. "MHT-CET", "KCET", "WBJEE"
  language?: string;         // regional language support
  coachingHub?: string;      // known coaching area
  nearbyInstitute?: string;  // notable nearby college/IIT/AIIMS
  localAreas?: string[];     // localities/areas in the city
}

/* ─── TEMPLATE GENERATORS ─────────────────────────────────────── */

function generateEducationLandscape(c: CityConfig): string {
  const examList = c.exams.map(e => e.toUpperCase()).join(' and ');
  const boardStr = c.board ? `${c.board} board` : 'various board';
  const hubStr = c.coachingHub ? ` Coaching centres in ${c.coachingHub} follow the traditional batch-based model with 60-100+ students per class.` : ' Most local coaching centres follow the traditional batch-based model with large class sizes.';
  const instStr = c.nearbyInstitute ? ` Proximity to ${c.nearbyInstitute} drives strong competitive exam aspirations among students.` : '';
  return `${c.city} is a growing educational hub in ${c.state} with increasing numbers of ${examList} aspirants every year. Students from ${boardStr} backgrounds face intense competition for seats in top engineering and medical colleges.${hubStr}${instStr} The one-size-fits-all approach of large batch coaching often leaves students without the personalised attention needed to crack highly competitive exams. Many ${c.city} families are now seeking smarter, technology-driven alternatives that provide individual focus.`;
}

function generateWhyMindPeak(c: CityConfig): string {
  const examFull = c.exams.map(e => e === 'jee' ? 'JEE Main & Advanced' : 'NEET UG').join(' and ');
  const stateExamStr = c.stateExam ? ` Our mentors also integrate ${c.stateExam} preparation alongside national exam coaching, efficiently leveraging syllabus overlaps.` : '';
  const langStr = c.language ? ` ${c.language}-medium concept support is available when students need conceptual clarity in their mother tongue.` : '';
  return `MindPeak Institute offers ${c.city} students a transformative 1-on-1 online coaching experience for ${examFull}. Instead of competing for a teacher's attention in a crowded classroom, every ${c.city} student receives dedicated sessions from expert faculty who understand ${c.state}'s educational ecosystem. Our adaptive curriculum uses diagnostic assessments to create a personalised learning roadmap — identifying and filling conceptual gaps systematically. Students across ${c.city} receive world-class coaching from the comfort of home, saving hours of commute time.${stateExamStr}${langStr} With 95% of our students achieving their target score improvements, MindPeak has become the trusted choice for ${c.city} families seeking results-oriented JEE/NEET preparation.`;
}

function generateMentoringAdvantage(c: CityConfig): string {
  const boardStr = c.board ? `, from ${c.board} board specifics to competitive exam patterns` : '';
  const langStr = c.language ? ` ${c.language} explanations are available when needed to ensure complete conceptual clarity.` : '';
  return `Every ${c.city} student at MindPeak is paired with a dedicated mentor who becomes their academic guide throughout the preparation journey. Your mentor conducts daily 1-on-1 classes, resolves doubts in real-time, and adjusts the teaching pace based on your comprehension level. Unlike batch coaching where doubt sessions are rushed group affairs, our mentors spend dedicated time on concepts you find challenging. They understand ${c.state}'s academic ecosystem${boardStr}. Weekly strategy sessions ensure preparation aligns with the latest exam patterns.${langStr} This personalised mentorship consistently helps students improve mock scores by 100-150+ marks within the first three months.`;
}

function generateParentTracking(c: CityConfig): string {
  return `${c.city} parents receive comprehensive weekly progress reports covering topic-wise accuracy, speed improvements, mock test percentiles, and mentor observations. Our transparent tracking system lets parents monitor attendance, homework completion, and performance trends through a dedicated parent dashboard accessible 24/7 from any device. Monthly parent-mentor calls provide deeper insights into your child's preparation health — identifying burnout signs early, suggesting study adjustments, and keeping families informed about realistic rank projections. This level of accountability and transparency ensures every rupee invested in coaching delivers measurable academic growth for ${c.city} students.`;
}

function generateHighlights(c: CityConfig): string[] {
  const highlights = [
    `Personalised 1-on-1 coaching from home in ${c.city}`,
    `Expert faculty from top IIT and AIIMS alumni network`,
  ];
  if (c.stateExam) {
    highlights.push(`${c.stateExam} + JEE/NEET integrated preparation`);
  } else {
    highlights.push(`Flexible scheduling around ${c.state} board exams`);
  }
  if (c.language) {
    highlights.push(`${c.language}-medium concept support available`);
  } else {
    highlights.push(`No commute — save 2-3 hours daily for focused study`);
  }
  return highlights;
}

function generateFAQs(c: CityConfig): { q: string; a: string }[] {
  const examFull = c.exams.map(e => e === 'jee' ? 'JEE' : 'NEET').join('/');
  const faqs: { q: string; a: string }[] = [
    {
      q: `Is online ${examFull} coaching effective for ${c.city} students?`,
      a: `Absolutely. MindPeak's 1-on-1 online coaching delivers superior results compared to batch coaching centres in ${c.city}. Personalised attention, adaptive curriculum, and dedicated mentors have helped our students secure top ranks. Our platform is optimised for all internet conditions available in ${c.city}.`,
    },
    {
      q: `What are the ${examFull} coaching fees at MindPeak for ${c.city}?`,
      a: `MindPeak offers flexible pricing with monthly, quarterly, and annual plans. Our fees are competitive with premium coaching centres in ${c.city} but deliver significantly more value through 1-on-1 attention. Book a free demo class to discuss personalised pricing.`,
    },
    {
      q: `Can ${c.city} students join MindPeak mid-year?`,
      a: `Yes! Since our coaching is 1-on-1, there are no batch constraints. ${c.city} students can join anytime — we'll create a customised preparation plan aligned with your school calendar and exam timeline, covering any syllabus gaps from the start.`,
    },
  ];
  if (c.stateExam) {
    faqs.push({
      q: `Does MindPeak cover ${c.stateExam} along with JEE/NEET?`,
      a: `Yes. Our mentors integrate ${c.stateExam} preparation alongside JEE/NEET coaching for ${c.city} students. The syllabus overlap is leveraged efficiently, and targeted ${c.stateExam}-specific practice is included closer to the exam.`,
    });
  } else {
    faqs.push({
      q: `Do you cover ${c.state} board exams along with ${examFull}?`,
      a: `Yes. Our mentors integrate board exam preparation with ${examFull} coaching for ${c.city} students. The significant syllabus overlap is leveraged, and our approach ensures students excel in both without spreading thin.`,
    });
  }
  return faqs;
}

/* ─── NEW EXPANDED SECTION GENERATORS ───────────────────────── */

function generateIntroduction(c: CityConfig): string {
  const examList = c.exams.map(e => e.toUpperCase()).join(' and ');
  const boardStr = c.board || 'CBSE and state board';
  const langStr = c.language ? `, with support in ${c.language} when needed` : '';
  return `MindPeak Institute is a premier online coaching platform that has been transforming how students in ${c.city}, ${c.state} prepare for competitive entrance examinations like ${examList}. Our mission is simple yet powerful — to provide every student in ${c.city} with access to world-class, personalised 1-on-1 mentoring that was once reserved only for students in metro coaching hubs like Delhi and Kota. We believe that a student's potential should never be limited by their geographic location, which is why MindPeak Institute in ${c.city} leverages cutting-edge online technology to deliver daily live sessions with dedicated expert mentors directly to students' homes. Whether a student comes from a ${boardStr} background${langStr}, our adaptive curriculum meets them exactly where they are and builds a customised roadmap toward their dream college. MindPeak Institute in ${c.city} has already helped hundreds of students across ${c.state} achieve ranks they once thought impossible — and our 95% success rate speaks to the effectiveness of truly personalised coaching. For families in ${c.city} who are tired of overcrowded batch coaching centres and want measurable, transparent results, MindPeak Institute offers a fundamentally better way to prepare for ${examList}.`;
}

function generateCoursesOffered(c: CityConfig): string {
  const stateExamStr = c.stateExam ? `Additionally, ${c.stateExam} preparation is integrated into our JEE and NEET programs, so ${c.city} students don't need separate coaching for the state entrance exam — the syllabus overlap is leveraged efficiently, with targeted practice modules added closer to the exam date. ` : '';
  const langStr = c.language ? `All sessions are conducted in English (the exam medium), with conceptual explanations available in ${c.language} when students need additional clarity. ` : '';
  return `MindPeak Institute in ${c.city} offers a comprehensive suite of programs designed to cover every aspect of competitive exam preparation. Our flagship JEE Main & Advanced program is a rigorous, concept-first curriculum covering Physics, Chemistry, and Mathematics at a depth that matches and exceeds the best coaching institutes in the country. Each subject is taught by specialist mentors — IIT and NIT alumni who bring real problem-solving experience to every session. For medical aspirants, our NEET UG program provides exhaustive coverage of Physics, Chemistry, and Biology with a strong NCERT-first foundation that NEET demands, supplemented by advanced application-based practice. ${stateExamStr}Beyond subject coaching, MindPeak Institute in ${c.city} provides structured test series aligned with the latest exam patterns — including full-length mock tests, chapter-wise tests, and previous year question practice with detailed performance analytics. Our Foundation programs for Class 9-10 students build early competitive readiness, giving ${c.city} students a head start over peers who begin preparation in Class 11. ${langStr}Every program includes dedicated doubt-resolution sessions, personalised study material curated by mentors, and strategic revision plans designed around each student's strengths and weaknesses. Whether a ${c.city} student needs intensive crash-course preparation or a methodical two-year program, MindPeak Institute has the right course structure to deliver results.`;
}

function generateLearningApproach(c: CityConfig): string {
  const boardStr = c.board ? `Our mentors are experienced with ${c.board} curriculum specifics and build effective bridges to competitive exam requirements. ` : '';
  return `What makes MindPeak Institute in ${c.city} fundamentally different from traditional coaching is our learning methodology. Every student begins with a comprehensive diagnostic assessment that maps their conceptual strengths and gaps across all subjects. Based on this assessment, a personalised learning roadmap is created — not a generic syllabus schedule, but a truly adaptive curriculum that evolves as the student progresses. ${boardStr}Daily 1-on-1 live sessions with dedicated mentors ensure that teaching pace matches comprehension speed — no student is left behind, and no advanced learner is held back. Our mentors use interactive digital whiteboards, real-time problem-solving demonstrations, and recorded session playback to maximise learning retention. Every session is followed by curated practice assignments calibrated to the student's current level, progressively building toward exam-level difficulty. Weekly mock tests simulate actual exam conditions, and detailed post-test analysis with mentors identifies patterns — whether a student loses marks due to conceptual gaps, calculation errors, or time management issues. MindPeak Institute in ${c.city} also incorporates project-based learning for complex topics, making abstract concepts tangible through real-world applications. This multi-layered approach — diagnostic assessment, adaptive curriculum, daily mentoring, strategic practice, and analytical feedback — creates a preparation ecosystem that consistently produces outstanding results for ${c.city} students.`;
}

function generateCareerOpportunities(c: CityConfig): string {
  const nearbyStr = c.nearbyInstitute ? `With ${c.nearbyInstitute} in proximity, ${c.city} students have excellent institutional options right in their region. ` : '';
  return `Students from ${c.city} who complete their JEE or NEET preparation with MindPeak Institute open doors to India's most prestigious institutions and rewarding career paths. JEE qualifiers gain admission to IITs, NITs, IIITs, and top private engineering colleges — launching careers in software engineering, data science, artificial intelligence, robotics, aerospace, and core engineering disciplines that offer starting packages of ₹10-50+ LPA. NEET qualifiers secure seats in top government and private medical colleges, embarking on careers in medicine, surgery, specialised healthcare, medical research, and public health — professions that offer both financial stability and societal impact. ${nearbyStr}Beyond direct career outcomes, the analytical thinking, problem-solving discipline, and time management skills built during MindPeak Institute's rigorous preparation serve students throughout their professional lives. Our alumni from ${c.state} have gone on to pursue higher education at global universities, secure competitive internships at leading companies, and establish successful careers across diverse fields. MindPeak Institute in ${c.city} doesn't just prepare students for an exam — it builds the intellectual foundation for lifelong career success. Our mentors also provide guidance on college selection, branch preferences, and career planning, ensuring that ${c.city} students make informed decisions about their academic futures based on aptitude, interest, and market demand.`;
}

function generateWhyStandsOut(c: CityConfig): string {
  const stateExamStr = c.stateExam ? `, integrated ${c.stateExam} preparation` : '';
  const langStr = c.language ? `, ${c.language}-medium concept support` : '';
  return `MindPeak Institute stands out in ${c.city} because of an unwavering commitment to personalised excellence. While batch coaching centres in ${c.city} and across ${c.state} treat students as numbers in a classroom, MindPeak pairs every student with a dedicated mentor who becomes their academic partner for the entire preparation journey. Our transparent weekly reporting system gives ${c.city} parents complete visibility into their child's progress — something no local batch centre offers. The combination of IIT/AIIMS alumni mentors, adaptive AI-driven curriculum${stateExamStr}${langStr}, and data-backed performance tracking creates a coaching experience that is genuinely unmatched in ${c.city}. Students who switch from batch coaching to MindPeak consistently report 100-150+ marks improvement within the first three months, validating that personalised attention is the single most important factor in competitive exam success.`;
}

function generateCallToAction(c: CityConfig): string {
  const examList = c.exams.map(e => e.toUpperCase()).join(' and ');
  return `Your ${examList} journey starts with a single step. MindPeak Institute in ${c.city} invites you to experience the power of personalised 1-on-1 mentoring through a completely free demo class — no commitments, no pressure. See firsthand how our dedicated mentors, adaptive curriculum, and transparent tracking system can transform your preparation. Speak with our academic counselors, get a personalised assessment of your current preparation level, and discover why hundreds of students across ${c.state} trust MindPeak Institute for their competitive exam success. Book your free demo class today or call us at +91-82194-57704.`;
}

/* ─── INTERACTIVE SECTION GENERATORS ────────────────────────── */

function generateHeroHeadline(c: CityConfig): string {
  const examList = c.exams.map(e => e.toUpperCase()).join(' & ');
  return `Crack ${examList} from ${c.city} — 1-on-1 mentors, real results.`;
}

function generateHeroSublead(c: CityConfig): string {
  const examFull = c.exams.map(e => e === 'jee' ? 'JEE Main & Advanced' : 'NEET UG').join(' and ');
  return `MindPeak Institute in ${c.city} runs personalised 1-on-1 coaching for ${examFull}, designed to get you exam-ready with daily live sessions, adaptive curriculum, and dedicated mentor support from home.`;
}

function generateSocialProofLine(_c: CityConfig): string {
  return '2,300+ students coached across India with a 95% selection rate.';
}

function generateQuickStats(c: CityConfig): QuickStat[] {
  return [
    { value: '95%', label: 'Selection Rate', source: 'Cohort outcomes report, 2024-25' },
    { value: '500+', label: `Students in ${c.state}`, source: 'Enrolment data, cumulative' },
    { value: 'AIR 42', label: 'Best Rank Achieved', source: 'JEE Advanced 2024 result' },
  ];
}

function generateCourseTiles(c: CityConfig): CourseTile[] {
  const tiles: CourseTile[] = [
    {
      title: 'JEE Main & Advanced',
      duration: '1–2 years',
      benefit: 'Master Physics, Chemistry & Maths with IIT alumni mentors and daily 1-on-1 sessions.',
      outcomes: ['Full-length mock tests with AI analytics', 'Chapter-wise PYQ practice (2015–2025)', 'Personalised weak-area recovery plans'],
      commitment: '3–4 hrs/day',
      whoFor: 'Class 11–12 & Droppers',
      icon: '🎯',
      link: '/jee-coaching',
    },
    {
      title: 'NEET UG',
      duration: '1–2 years',
      benefit: 'NCERT-first Biology, Physics & Chemistry with specialised medical entrance mentors.',
      outcomes: ['NCERT line-by-line mastery program', 'NEET PYQ bank with detailed solutions', 'Weekly full-syllabus mock tests'],
      commitment: '3–4 hrs/day',
      whoFor: 'Class 11–12 & Droppers',
      icon: '🏥',
      link: '/neet-coaching',
    },
    {
      title: 'Foundation (Class 8–10)',
      duration: '1–3 years',
      benefit: 'Build competitive exam readiness early with strong fundamentals and Olympiad exposure.',
      outcomes: ['Board + competitive dual-track preparation', 'NTSE / Olympiad problem-solving drills', 'Early habit & study-skill development'],
      commitment: '1.5–2 hrs/day',
      whoFor: 'Class 8, 9, 10 students',
      icon: '📐',
      link: '/foundation-coaching',
    },
  ];
  if (c.exams.includes('jee')) {
    tiles.push({
      title: 'Crash Course & Dropper',
      duration: '3–6 months',
      benefit: 'Intensive gap-filling and exam-strategy program for short-timeline aspirants.',
      outcomes: ['Targeted revision of high-weightage chapters', 'Daily timed practice under exam conditions', 'Mentor-guided error-log analysis'],
      commitment: '4–5 hrs/day',
      whoFor: 'Droppers & last-minute starters',
      icon: '⚡',
      link: '/jee-crash-course',
    });
  }
  return tiles;
}

function generateLocalValueProps(c: CityConfig): LocalValueProp[] {
  const stateExamStr = c.stateExam ? `${c.stateExam} + ` : '';
  return [
    {
      title: `Mentors who know ${c.state}`,
      description: `Faculty experienced with ${c.board || 'CBSE/State'} board curriculum and the ${stateExamStr}JEE/NEET transition.`,
      localExample: `Students from ${c.city}'s top schools consistently improve 100-150+ marks within 3 months.`,
      microCTA: `Meet ${c.city} mentors`,
    },
    {
      title: 'Zero commute, full access',
      description: `Study from any area in ${c.city} — no travel, no fixed batches, no compromise on quality.`,
      localExample: c.localAreas ? `Students from ${c.localAreas.slice(0, 3).join(', ')} and more study with us daily.` : `Families across ${c.city} save 2-3 hours daily with our online format.`,
      microCTA: 'See how it works',
    },
    {
      title: 'Transparent progress tracking',
      description: 'Weekly reports, parent dashboard, and monthly strategy calls — complete visibility for families.',
      localExample: `${c.city} parents receive topic-wise heat maps, mock percentiles, and mentor observations every week.`,
      microCTA: 'View sample report',
    },
  ];
}

function generateExpandedFaqs(c: CityConfig): CityFAQ[] {
  const examFull = c.exams.map(e => e === 'jee' ? 'JEE' : 'NEET').join('/');
  const faqs: CityFAQ[] = [
    {
      q: `Is online ${examFull} coaching effective for ${c.city} students?`,
      tldr: 'Yes — 95% selection rate with personalised 1-on-1 mentoring.',
      a: `MindPeak's 1-on-1 online coaching delivers superior results compared to batch coaching centres in ${c.city}. Personalised attention, adaptive curriculum, and dedicated mentors have helped our students secure top ranks including AIR 42 in JEE Advanced. Our platform works on standard internet connections available across ${c.city}.`,
    },
    {
      q: `What are the coaching fees at MindPeak for ${c.city}?`,
      tldr: 'Flexible monthly/quarterly/annual plans, competitive with premium centres.',
      a: `MindPeak offers flexible pricing with monthly, quarterly, and annual plans. Our fees are competitive with premium coaching centres in ${c.city} but deliver significantly more value through dedicated 1-on-1 attention, daily live sessions, and comprehensive study material. Book a free demo class and our counselor will discuss personalised pricing.`,
    },
    {
      q: `Can ${c.city} students join mid-year?`,
      tldr: 'Yes — no batch constraints, join anytime with a custom plan.',
      a: `Since our coaching is entirely 1-on-1, there are no batch start dates or constraints. ${c.city} students can join anytime — we create a customised preparation plan aligned with your school calendar and exam timeline, covering any syllabus gaps from the start.`,
    },
    {
      q: `How much time per week do I need?`,
      tldr: '10–25 hrs/week depending on program and year.',
      a: `Foundation programs need 10-12 hrs/week. Full JEE/NEET programs need 20-25 hrs/week including self-study. Crash courses are more intensive at 30+ hrs/week. Your mentor creates a realistic timetable that accounts for school hours and rest.`,
    },
    {
      q: `What outcomes can I expect from MindPeak in ${c.city}?`,
      tldr: 'Mock score jumps of 100-150+ marks within 3 months.',
      a: `Students typically see 100-150+ marks improvement in mock tests within the first three months. You get a personalised study roadmap, weekly mock test analytics, dedicated doubt resolution, and mentor-guided revision strategy. Our 95% selection rate across cohorts validates the approach.`,
    },
  ];
  if (c.stateExam) {
    faqs.push({
      q: `Does MindPeak cover ${c.stateExam} along with JEE/NEET?`,
      tldr: `Yes — integrated ${c.stateExam} prep leveraging syllabus overlap.`,
      a: `Our mentors integrate ${c.stateExam} preparation alongside JEE/NEET coaching for ${c.city} students. The significant syllabus overlap is leveraged efficiently, and targeted ${c.stateExam}-specific practice modules are added closer to the exam date.`,
    });
  } else {
    faqs.push({
      q: `Do you cover ${c.state} board exams along with ${examFull}?`,
      tldr: 'Yes — integrated board + competitive exam preparation.',
      a: `Our mentors integrate board exam preparation with ${examFull} coaching for ${c.city} students. The significant syllabus overlap is leveraged, and our approach ensures students excel in both without spreading thin.`,
    });
  }
  return faqs;
}

function generateTabbedContent(c: CityConfig): TabbedContent {
  const stateExamStr = c.stateExam ? `, ${c.stateExam}` : '';
  return {
    curriculum: `MindPeak's curriculum for ${c.city} students covers the complete JEE/NEET syllabus with a concept-first approach. Physics: Mechanics → Electrodynamics → Optics → Modern Physics. Chemistry: Physical → Organic → Inorganic (JEE) / NCERT-deep (NEET). Mathematics: Algebra → Calculus → Coordinate Geometry → Trigonometry. Biology (NEET): Botany → Zoology → Human Physiology → Genetics. Each topic includes theory sessions, solved examples, practice problems, and PYQ analysis.${stateExamStr ? ` ${c.stateExam} topics are woven into the main curriculum where overlap exists, with dedicated practice sessions for unique topics.` : ''}`,
    schedule: `Daily live 1-on-1 sessions (1.5–2 hrs) with your dedicated mentor, scheduled at your convenience — morning, afternoon, or evening slots available for ${c.city} students. Weekend intensive sessions for mock tests and revision. Flexible rescheduling — if you miss a session, your mentor accommodates a makeup class within 48 hours. No fixed batches, no rigid timetables.`,
    fees: `Plans start from ₹15,000/month for Foundation programs and ₹20,000/month for JEE/NEET full programs. Annual plans offer 15-20% savings. Crash courses are priced separately based on duration. All plans include: daily 1-on-1 live sessions, study material, mock test series, parent dashboard access, and mentor support.`,
    paymentNote: `EMI options available via partner banks. Early-bird discounts for ${c.city} students enrolling 6+ months before the exam. Sibling discounts applicable. Contact our counselor during your free demo class for a personalised quote.`,
  };
}

function generateCityTestimonials(c: CityConfig): CityTestimonial[] {
  return [
    {
      name: 'Student A.',
      role: c.exams.includes('jee') ? 'JEE Aspirant' : 'NEET Aspirant',
      result: 'Mock score improved 180+ marks in 4 months',
      quote: `MindPeak's 1-on-1 format from ${c.city} gave me the personalised attention I never got in batch coaching. My mentor identified my weak areas and turned them around.`,
      isSample: true,
    },
    {
      name: 'Student B.',
      role: 'Class 12 Student',
      result: 'Balanced boards + competitive exam prep',
      quote: `Studying from home in ${c.city} saved me 3 hours daily. That extra time for self-study made all the difference in my preparation quality.`,
      isSample: true,
    },
    {
      name: 'Parent C.',
      role: `Parent from ${c.city}`,
      result: 'Complete visibility into child\'s progress',
      quote: `The weekly reports and parent dashboard gave us confidence. We could see exactly how our child was improving — something no coaching centre in ${c.city} ever offered.`,
      isSample: true,
    },
  ];
}

function generateEvents(c: CityConfig): CityEvent[] {
  return [
    {
      title: `${c.city} Free Demo Day`,
      date: '[UPCOMING]',
      description: `Free 1-on-1 demo session + preparation assessment for ${c.city} students. Meet your potential mentor.`,
      ctaLabel: 'Register Free',
    },
    {
      title: 'Weekend Strategy Workshop',
      date: '[UPCOMING]',
      description: `2-hour session on exam strategy, time management, and study planning for ${c.exams.map(e => e.toUpperCase()).join('/')} aspirants.`,
      ctaLabel: 'Book Seat',
    },
    {
      title: 'Parent Information Session',
      date: '[UPCOMING]',
      description: `30-min virtual session for ${c.city} parents — learn about our coaching model, tracking system, and outcomes.`,
      ctaLabel: 'Join Session',
    },
  ];
}

function configToCity(c: CityConfig): CityData {
  return {
    slug: c.slug,
    city: c.city,
    state: c.state,
    tier: c.tier,
    lat: c.lat,
    lng: c.lng,
    exams: c.exams,
    educationLandscape: generateEducationLandscape(c),
    whyMindPeak: generateWhyMindPeak(c),
    mentoringAdvantage: generateMentoringAdvantage(c),
    parentTracking: generateParentTracking(c),
    highlights: generateHighlights(c),
    faqs: generateFAQs(c),
    introduction: generateIntroduction(c),
    coursesOffered: generateCoursesOffered(c),
    learningApproach: generateLearningApproach(c),
    careerOpportunities: generateCareerOpportunities(c),
    whyStandsOut: generateWhyStandsOut(c),
    callToActionText: generateCallToAction(c),
    heroHeadline: generateHeroHeadline(c),
    heroSublead: generateHeroSublead(c),
    socialProofLine: generateSocialProofLine(c),
    quickStats: generateQuickStats(c),
    courseTiles: generateCourseTiles(c),
    localValueProps: generateLocalValueProps(c),
    expandedFaqs: generateExpandedFaqs(c),
    tabbedContent: generateTabbedContent(c),
    cityTestimonials: generateCityTestimonials(c),
    events: generateEvents(c),
  };
}

/* ═══════════════════════════════════════════════════════════════
   170+ NEW CITIES (not in existing cityData.ts)
   Organized by state, then tier.
   ═══════════════════════════════════════════════════════════════ */

const newCityConfigs: CityConfig[] = [
  // ─── MAHARASHTRA ──────────────────────────────────────────
  { slug: 'thane', city: 'Thane', state: 'Maharashtra', tier: 2, lat: 19.2183, lng: 72.9781, exams: ['jee', 'neet'], board: 'Maharashtra State Board', stateExam: 'MHT-CET', language: 'Marathi', coachingHub: 'Thane Station area' },
  { slug: 'navi-mumbai', city: 'Navi Mumbai', state: 'Maharashtra', tier: 2, lat: 19.0330, lng: 73.0297, exams: ['jee', 'neet'], board: 'Maharashtra State Board', stateExam: 'MHT-CET', language: 'Marathi' },
  { slug: 'aurangabad', city: 'Aurangabad', state: 'Maharashtra', tier: 2, lat: 19.8762, lng: 75.3433, exams: ['jee', 'neet'], board: 'Maharashtra State Board', stateExam: 'MHT-CET', language: 'Marathi', nearbyInstitute: 'Government Medical College Aurangabad' },
  { slug: 'kolhapur', city: 'Kolhapur', state: 'Maharashtra', tier: 3, lat: 16.7050, lng: 74.2433, exams: ['jee', 'neet'], board: 'Maharashtra State Board', stateExam: 'MHT-CET', language: 'Marathi' },
  { slug: 'solapur', city: 'Solapur', state: 'Maharashtra', tier: 3, lat: 17.6599, lng: 75.9064, exams: ['jee', 'neet'], board: 'Maharashtra State Board', stateExam: 'MHT-CET', language: 'Marathi' },
  { slug: 'sangli', city: 'Sangli', state: 'Maharashtra', tier: 3, lat: 16.8524, lng: 74.5815, exams: ['jee', 'neet'], board: 'Maharashtra State Board', stateExam: 'MHT-CET', language: 'Marathi' },
  { slug: 'amravati', city: 'Amravati', state: 'Maharashtra', tier: 3, lat: 20.9374, lng: 77.7796, exams: ['jee', 'neet'], board: 'Maharashtra State Board', stateExam: 'MHT-CET', language: 'Marathi' },
  { slug: 'latur', city: 'Latur', state: 'Maharashtra', tier: 3, lat: 18.3916, lng: 76.5604, exams: ['jee', 'neet'], board: 'Maharashtra State Board', stateExam: 'MHT-CET', language: 'Marathi' },
  { slug: 'ahmednagar', city: 'Ahmednagar', state: 'Maharashtra', tier: 3, lat: 19.0948, lng: 74.7480, exams: ['jee', 'neet'], board: 'Maharashtra State Board', stateExam: 'MHT-CET', language: 'Marathi' },

  // ─── KARNATAKA ────────────────────────────────────────────
  { slug: 'hubli', city: 'Hubli', state: 'Karnataka', tier: 3, lat: 15.3647, lng: 75.1240, exams: ['jee', 'neet'], board: 'Karnataka State Board', stateExam: 'KCET', language: 'Kannada', nearbyInstitute: 'BVB College of Engineering' },
  { slug: 'belgaum', city: 'Belgaum', state: 'Karnataka', tier: 3, lat: 15.8497, lng: 74.4977, exams: ['jee', 'neet'], board: 'Karnataka State Board', stateExam: 'KCET', language: 'Kannada' },
  { slug: 'gulbarga', city: 'Gulbarga', state: 'Karnataka', tier: 3, lat: 17.3297, lng: 76.8343, exams: ['jee', 'neet'], board: 'Karnataka State Board', stateExam: 'KCET', language: 'Kannada' },
  { slug: 'davanagere', city: 'Davanagere', state: 'Karnataka', tier: 3, lat: 14.4644, lng: 75.9218, exams: ['jee', 'neet'], board: 'Karnataka State Board', stateExam: 'KCET', language: 'Kannada' },
  { slug: 'shimoga', city: 'Shimoga', state: 'Karnataka', tier: 3, lat: 13.9299, lng: 75.5681, exams: ['jee', 'neet'], board: 'Karnataka State Board', stateExam: 'KCET', language: 'Kannada' },
  { slug: 'tumkur', city: 'Tumkur', state: 'Karnataka', tier: 3, lat: 13.3379, lng: 77.1173, exams: ['jee', 'neet'], board: 'Karnataka State Board', stateExam: 'KCET', language: 'Kannada' },
  { slug: 'hassan', city: 'Hassan', state: 'Karnataka', tier: 3, lat: 13.0068, lng: 76.0996, exams: ['jee', 'neet'], board: 'Karnataka State Board', stateExam: 'KCET', language: 'Kannada' },

  // ─── TAMIL NADU ───────────────────────────────────────────
  { slug: 'madurai', city: 'Madurai', state: 'Tamil Nadu', tier: 2, lat: 9.9252, lng: 78.1198, exams: ['jee', 'neet'], board: 'TN State Board', language: 'Tamil', nearbyInstitute: 'Thiagarajar College of Engineering' },
  { slug: 'trichy', city: 'Trichy', state: 'Tamil Nadu', tier: 2, lat: 10.7905, lng: 78.7047, exams: ['jee', 'neet'], board: 'TN State Board', language: 'Tamil', nearbyInstitute: 'NIT Trichy' },
  { slug: 'salem', city: 'Salem', state: 'Tamil Nadu', tier: 3, lat: 11.6643, lng: 78.1460, exams: ['jee', 'neet'], board: 'TN State Board', language: 'Tamil' },
  { slug: 'tirunelveli', city: 'Tirunelveli', state: 'Tamil Nadu', tier: 3, lat: 8.7139, lng: 77.7567, exams: ['jee', 'neet'], board: 'TN State Board', language: 'Tamil' },
  { slug: 'erode', city: 'Erode', state: 'Tamil Nadu', tier: 3, lat: 11.3410, lng: 77.7172, exams: ['jee', 'neet'], board: 'TN State Board', language: 'Tamil' },
  { slug: 'tiruppur', city: 'Tiruppur', state: 'Tamil Nadu', tier: 3, lat: 11.1085, lng: 77.3411, exams: ['jee', 'neet'], board: 'TN State Board', language: 'Tamil' },
  { slug: 'vellore', city: 'Vellore', state: 'Tamil Nadu', tier: 3, lat: 12.9165, lng: 79.1325, exams: ['jee', 'neet'], board: 'TN State Board', language: 'Tamil', nearbyInstitute: 'VIT University' },
  { slug: 'thanjavur', city: 'Thanjavur', state: 'Tamil Nadu', tier: 3, lat: 10.7870, lng: 79.1378, exams: ['jee', 'neet'], board: 'TN State Board', language: 'Tamil' },
  { slug: 'dindigul', city: 'Dindigul', state: 'Tamil Nadu', tier: 3, lat: 10.3624, lng: 77.9695, exams: ['jee', 'neet'], board: 'TN State Board', language: 'Tamil' },
  { slug: 'nagercoil', city: 'Nagercoil', state: 'Tamil Nadu', tier: 3, lat: 8.1833, lng: 77.4119, exams: ['jee', 'neet'], board: 'TN State Board', language: 'Tamil' },

  // ─── KERALA ───────────────────────────────────────────────
  { slug: 'thiruvananthapuram', city: 'Thiruvananthapuram', state: 'Kerala', tier: 2, lat: 8.5241, lng: 76.9366, exams: ['jee', 'neet'], board: 'Kerala State Board', stateExam: 'KEAM', language: 'Malayalam', nearbyInstitute: 'CET Trivandrum' },
  { slug: 'kozhikode', city: 'Kozhikode', state: 'Kerala', tier: 2, lat: 11.2588, lng: 75.7804, exams: ['jee', 'neet'], board: 'Kerala State Board', stateExam: 'KEAM', language: 'Malayalam', nearbyInstitute: 'NIT Calicut' },
  { slug: 'thrissur', city: 'Thrissur', state: 'Kerala', tier: 3, lat: 10.5276, lng: 76.2144, exams: ['jee', 'neet'], board: 'Kerala State Board', stateExam: 'KEAM', language: 'Malayalam' },
  { slug: 'kollam', city: 'Kollam', state: 'Kerala', tier: 3, lat: 8.8932, lng: 76.6141, exams: ['jee', 'neet'], board: 'Kerala State Board', stateExam: 'KEAM', language: 'Malayalam' },
  { slug: 'palakkad', city: 'Palakkad', state: 'Kerala', tier: 3, lat: 10.7867, lng: 76.6548, exams: ['jee', 'neet'], board: 'Kerala State Board', stateExam: 'KEAM', language: 'Malayalam' },
  { slug: 'alappuzha', city: 'Alappuzha', state: 'Kerala', tier: 3, lat: 9.4981, lng: 76.3388, exams: ['jee', 'neet'], board: 'Kerala State Board', stateExam: 'KEAM', language: 'Malayalam' },
  { slug: 'kannur', city: 'Kannur', state: 'Kerala', tier: 3, lat: 11.8745, lng: 75.3704, exams: ['jee', 'neet'], board: 'Kerala State Board', stateExam: 'KEAM', language: 'Malayalam' },
  { slug: 'kottayam', city: 'Kottayam', state: 'Kerala', tier: 3, lat: 9.5916, lng: 76.5222, exams: ['jee', 'neet'], board: 'Kerala State Board', stateExam: 'KEAM', language: 'Malayalam' },

  // ─── TELANGANA ────────────────────────────────────────────
  { slug: 'warangal', city: 'Warangal', state: 'Telangana', tier: 2, lat: 17.9784, lng: 79.5941, exams: ['jee', 'neet'], board: 'Telangana State Board', stateExam: 'TS EAMCET', language: 'Telugu', nearbyInstitute: 'NIT Warangal' },
  { slug: 'nizamabad', city: 'Nizamabad', state: 'Telangana', tier: 3, lat: 18.6725, lng: 78.0940, exams: ['jee', 'neet'], board: 'Telangana State Board', stateExam: 'TS EAMCET', language: 'Telugu' },
  { slug: 'karimnagar', city: 'Karimnagar', state: 'Telangana', tier: 3, lat: 18.4386, lng: 79.1288, exams: ['jee', 'neet'], board: 'Telangana State Board', stateExam: 'TS EAMCET', language: 'Telugu' },
  { slug: 'khammam', city: 'Khammam', state: 'Telangana', tier: 3, lat: 17.2473, lng: 80.1514, exams: ['jee', 'neet'], board: 'Telangana State Board', stateExam: 'TS EAMCET', language: 'Telugu' },
  { slug: 'secunderabad', city: 'Secunderabad', state: 'Telangana', tier: 2, lat: 17.4399, lng: 78.4983, exams: ['jee', 'neet'], board: 'Telangana State Board', stateExam: 'TS EAMCET', language: 'Telugu' },

  // ─── ANDHRA PRADESH ───────────────────────────────────────
  { slug: 'tirupati', city: 'Tirupati', state: 'Andhra Pradesh', tier: 2, lat: 13.6288, lng: 79.4192, exams: ['jee', 'neet'], board: 'AP State Board', stateExam: 'AP EAMCET', language: 'Telugu', nearbyInstitute: 'IIT Tirupati' },
  { slug: 'guntur', city: 'Guntur', state: 'Andhra Pradesh', tier: 2, lat: 16.3067, lng: 80.4365, exams: ['jee', 'neet'], board: 'AP State Board', stateExam: 'AP EAMCET', language: 'Telugu' },
  { slug: 'kakinada', city: 'Kakinada', state: 'Andhra Pradesh', tier: 3, lat: 16.9891, lng: 82.2475, exams: ['jee', 'neet'], board: 'AP State Board', stateExam: 'AP EAMCET', language: 'Telugu' },
  { slug: 'nellore', city: 'Nellore', state: 'Andhra Pradesh', tier: 3, lat: 14.4426, lng: 79.9865, exams: ['jee', 'neet'], board: 'AP State Board', stateExam: 'AP EAMCET', language: 'Telugu' },
  { slug: 'rajahmundry', city: 'Rajahmundry', state: 'Andhra Pradesh', tier: 3, lat: 17.0005, lng: 81.8040, exams: ['jee', 'neet'], board: 'AP State Board', stateExam: 'AP EAMCET', language: 'Telugu' },
  { slug: 'kurnool', city: 'Kurnool', state: 'Andhra Pradesh', tier: 3, lat: 15.8281, lng: 78.0373, exams: ['jee', 'neet'], board: 'AP State Board', stateExam: 'AP EAMCET', language: 'Telugu' },
  { slug: 'anantapur', city: 'Anantapur', state: 'Andhra Pradesh', tier: 3, lat: 14.6819, lng: 77.6006, exams: ['jee', 'neet'], board: 'AP State Board', stateExam: 'AP EAMCET', language: 'Telugu' },
  { slug: 'eluru', city: 'Eluru', state: 'Andhra Pradesh', tier: 3, lat: 16.7107, lng: 81.0952, exams: ['jee', 'neet'], board: 'AP State Board', stateExam: 'AP EAMCET', language: 'Telugu' },
  { slug: 'ongole', city: 'Ongole', state: 'Andhra Pradesh', tier: 3, lat: 15.5057, lng: 80.0499, exams: ['jee', 'neet'], board: 'AP State Board', stateExam: 'AP EAMCET', language: 'Telugu' },

  // ─── RAJASTHAN ────────────────────────────────────────────
  { slug: 'jodhpur', city: 'Jodhpur', state: 'Rajasthan', tier: 2, lat: 26.2389, lng: 73.0243, exams: ['jee', 'neet'], board: 'Rajasthan Board', nearbyInstitute: 'IIT Jodhpur & AIIMS Jodhpur' },
  { slug: 'kota', city: 'Kota', state: 'Rajasthan', tier: 2, lat: 25.2138, lng: 75.8648, exams: ['jee', 'neet'], board: 'Rajasthan Board', coachingHub: 'Kota coaching district', nearbyInstitute: 'Allen/Resonance/Motion institutes' },
  { slug: 'bikaner', city: 'Bikaner', state: 'Rajasthan', tier: 3, lat: 28.0229, lng: 73.3119, exams: ['jee', 'neet'], board: 'Rajasthan Board' },
  { slug: 'ajmer', city: 'Ajmer', state: 'Rajasthan', tier: 3, lat: 26.4499, lng: 74.6399, exams: ['jee', 'neet'], board: 'Rajasthan Board' },
  { slug: 'sikar', city: 'Sikar', state: 'Rajasthan', tier: 3, lat: 27.6094, lng: 75.1398, exams: ['jee', 'neet'], board: 'Rajasthan Board' },
  { slug: 'alwar', city: 'Alwar', state: 'Rajasthan', tier: 3, lat: 27.5530, lng: 76.6346, exams: ['jee', 'neet'], board: 'Rajasthan Board' },
  { slug: 'bhilwara', city: 'Bhilwara', state: 'Rajasthan', tier: 3, lat: 25.3407, lng: 74.6313, exams: ['jee', 'neet'], board: 'Rajasthan Board' },

  // ─── MADHYA PRADESH ───────────────────────────────────────
  { slug: 'gwalior', city: 'Gwalior', state: 'Madhya Pradesh', tier: 2, lat: 26.2183, lng: 78.1828, exams: ['jee', 'neet'], board: 'MP Board', nearbyInstitute: 'IIITM Gwalior' },
  { slug: 'jabalpur', city: 'Jabalpur', state: 'Madhya Pradesh', tier: 2, lat: 23.1815, lng: 79.9864, exams: ['jee', 'neet'], board: 'MP Board', language: 'Hindi', nearbyInstitute: 'IIITDM Jabalpur' },
  { slug: 'ujjain', city: 'Ujjain', state: 'Madhya Pradesh', tier: 3, lat: 23.1765, lng: 75.7885, exams: ['jee', 'neet'], board: 'MP Board', language: 'Hindi' },
  { slug: 'sagar', city: 'Sagar', state: 'Madhya Pradesh', tier: 3, lat: 23.8388, lng: 78.7378, exams: ['jee', 'neet'], board: 'MP Board', language: 'Hindi' },
  { slug: 'satna', city: 'Satna', state: 'Madhya Pradesh', tier: 3, lat: 24.5837, lng: 80.8339, exams: ['jee', 'neet'], board: 'MP Board', language: 'Hindi' },
  { slug: 'rewa', city: 'Rewa', state: 'Madhya Pradesh', tier: 3, lat: 24.5362, lng: 81.3039, exams: ['jee', 'neet'], board: 'MP Board', language: 'Hindi' },

  // ─── UTTAR PRADESH ────────────────────────────────────────
  { slug: 'noida', city: 'Noida', state: 'Uttar Pradesh', tier: 1, lat: 28.5355, lng: 77.3910, exams: ['jee', 'neet'], board: 'CBSE/UP Board', coachingHub: 'Sector 18 and Sector 62', nearbyInstitute: 'Amity University' },
  { slug: 'ghaziabad', city: 'Ghaziabad', state: 'Uttar Pradesh', tier: 2, lat: 28.6692, lng: 77.4538, exams: ['jee', 'neet'], board: 'CBSE/UP Board' },
  { slug: 'agra', city: 'Agra', state: 'Uttar Pradesh', tier: 2, lat: 27.1767, lng: 78.0081, exams: ['jee', 'neet'], board: 'UP Board', language: 'Hindi' },
  { slug: 'varanasi', city: 'Varanasi', state: 'Uttar Pradesh', tier: 2, lat: 25.3176, lng: 82.9739, exams: ['jee', 'neet'], board: 'UP Board', language: 'Hindi', nearbyInstitute: 'IIT BHU' },
  { slug: 'kanpur', city: 'Kanpur', state: 'Uttar Pradesh', tier: 2, lat: 26.4499, lng: 80.3319, exams: ['jee', 'neet'], board: 'UP Board', language: 'Hindi', nearbyInstitute: 'IIT Kanpur' },
  { slug: 'allahabad', city: 'Prayagraj', state: 'Uttar Pradesh', tier: 2, lat: 25.4358, lng: 81.8463, exams: ['jee', 'neet'], board: 'UP Board', language: 'Hindi', nearbyInstitute: 'IIIT Allahabad & MNNIT' },
  { slug: 'meerut', city: 'Meerut', state: 'Uttar Pradesh', tier: 2, lat: 28.9845, lng: 77.7064, exams: ['jee', 'neet'], board: 'UP Board', language: 'Hindi' },
  { slug: 'bareilly', city: 'Bareilly', state: 'Uttar Pradesh', tier: 3, lat: 28.3670, lng: 79.4304, exams: ['jee', 'neet'], board: 'UP Board', language: 'Hindi' },
  { slug: 'aligarh', city: 'Aligarh', state: 'Uttar Pradesh', tier: 3, lat: 27.8974, lng: 78.0880, exams: ['jee', 'neet'], board: 'UP Board', language: 'Hindi', nearbyInstitute: 'AMU Aligarh' },
  { slug: 'moradabad', city: 'Moradabad', state: 'Uttar Pradesh', tier: 3, lat: 28.8386, lng: 78.7733, exams: ['jee', 'neet'], board: 'UP Board', language: 'Hindi' },
  { slug: 'gorakhpur', city: 'Gorakhpur', state: 'Uttar Pradesh', tier: 3, lat: 26.7606, lng: 83.3732, exams: ['jee', 'neet'], board: 'UP Board', language: 'Hindi', nearbyInstitute: 'MMMUT Gorakhpur' },
  { slug: 'mathura', city: 'Mathura', state: 'Uttar Pradesh', tier: 3, lat: 27.4924, lng: 77.6737, exams: ['jee', 'neet'], board: 'UP Board', language: 'Hindi' },
  { slug: 'saharanpur', city: 'Saharanpur', state: 'Uttar Pradesh', tier: 3, lat: 29.9680, lng: 77.5510, exams: ['jee', 'neet'], board: 'UP Board', language: 'Hindi' },
  { slug: 'firozabad', city: 'Firozabad', state: 'Uttar Pradesh', tier: 3, lat: 27.1591, lng: 78.3957, exams: ['jee', 'neet'], board: 'UP Board', language: 'Hindi' },
  { slug: 'jhansi', city: 'Jhansi', state: 'Uttar Pradesh', tier: 3, lat: 25.4484, lng: 78.5685, exams: ['jee', 'neet'], board: 'UP Board', language: 'Hindi' },

  // ─── BIHAR ────────────────────────────────────────────────
  { slug: 'gaya', city: 'Gaya', state: 'Bihar', tier: 3, lat: 24.7955, lng: 84.9994, exams: ['jee', 'neet'], board: 'Bihar Board', language: 'Hindi' },
  { slug: 'muzaffarpur', city: 'Muzaffarpur', state: 'Bihar', tier: 3, lat: 26.1209, lng: 85.3647, exams: ['jee', 'neet'], board: 'Bihar Board', language: 'Hindi' },
  { slug: 'bhagalpur', city: 'Bhagalpur', state: 'Bihar', tier: 3, lat: 25.2425, lng: 86.9842, exams: ['jee', 'neet'], board: 'Bihar Board', language: 'Hindi' },
  { slug: 'darbhanga', city: 'Darbhanga', state: 'Bihar', tier: 3, lat: 26.1542, lng: 85.8918, exams: ['jee', 'neet'], board: 'Bihar Board', language: 'Hindi' },
  { slug: 'purnia', city: 'Purnia', state: 'Bihar', tier: 3, lat: 25.7771, lng: 87.4753, exams: ['jee', 'neet'], board: 'Bihar Board', language: 'Hindi' },

  // ─── WEST BENGAL ──────────────────────────────────────────
  { slug: 'howrah', city: 'Howrah', state: 'West Bengal', tier: 2, lat: 22.5958, lng: 88.2636, exams: ['jee', 'neet'], board: 'WB Board', stateExam: 'WBJEE', language: 'Bengali' },
  { slug: 'durgapur', city: 'Durgapur', state: 'West Bengal', tier: 2, lat: 23.5204, lng: 87.3119, exams: ['jee', 'neet'], board: 'WB Board', stateExam: 'WBJEE', language: 'Bengali', nearbyInstitute: 'NIT Durgapur' },
  { slug: 'siliguri', city: 'Siliguri', state: 'West Bengal', tier: 3, lat: 26.7271, lng: 88.3953, exams: ['jee', 'neet'], board: 'WB Board', stateExam: 'WBJEE', language: 'Bengali' },
  { slug: 'asansol', city: 'Asansol', state: 'West Bengal', tier: 3, lat: 23.6739, lng: 86.9524, exams: ['jee', 'neet'], board: 'WB Board', stateExam: 'WBJEE', language: 'Bengali' },
  { slug: 'kharagpur', city: 'Kharagpur', state: 'West Bengal', tier: 3, lat: 22.3460, lng: 87.2320, exams: ['jee', 'neet'], board: 'WB Board', stateExam: 'WBJEE', language: 'Bengali', nearbyInstitute: 'IIT Kharagpur' },
  { slug: 'haldia', city: 'Haldia', state: 'West Bengal', tier: 3, lat: 22.0257, lng: 88.0583, exams: ['jee', 'neet'], board: 'WB Board', stateExam: 'WBJEE', language: 'Bengali' },
  { slug: 'bardhaman', city: 'Bardhaman', state: 'West Bengal', tier: 3, lat: 23.2324, lng: 87.8615, exams: ['jee', 'neet'], board: 'WB Board', stateExam: 'WBJEE', language: 'Bengali' },

  // ─── GUJARAT ──────────────────────────────────────────────
  { slug: 'gandhinagar', city: 'Gandhinagar', state: 'Gujarat', tier: 2, lat: 23.2156, lng: 72.6369, exams: ['jee', 'neet'], board: 'Gujarat Board', stateExam: 'GUJCET', language: 'Gujarati', nearbyInstitute: 'IIT Gandhinagar' },
  { slug: 'bhavnagar', city: 'Bhavnagar', state: 'Gujarat', tier: 3, lat: 21.7645, lng: 72.1519, exams: ['jee', 'neet'], board: 'Gujarat Board', stateExam: 'GUJCET', language: 'Gujarati' },
  { slug: 'jamnagar', city: 'Jamnagar', state: 'Gujarat', tier: 3, lat: 22.4707, lng: 70.0577, exams: ['jee', 'neet'], board: 'Gujarat Board', stateExam: 'GUJCET', language: 'Gujarati' },
  { slug: 'junagadh', city: 'Junagadh', state: 'Gujarat', tier: 3, lat: 21.5222, lng: 70.4579, exams: ['jee', 'neet'], board: 'Gujarat Board', stateExam: 'GUJCET', language: 'Gujarati' },
  { slug: 'anand', city: 'Anand', state: 'Gujarat', tier: 3, lat: 22.5645, lng: 72.9289, exams: ['jee', 'neet'], board: 'Gujarat Board', stateExam: 'GUJCET', language: 'Gujarati' },
  { slug: 'mehsana', city: 'Mehsana', state: 'Gujarat', tier: 3, lat: 23.5880, lng: 72.3693, exams: ['jee', 'neet'], board: 'Gujarat Board', stateExam: 'GUJCET', language: 'Gujarati' },
  { slug: 'bharuch', city: 'Bharuch', state: 'Gujarat', tier: 3, lat: 21.7051, lng: 73.0047, exams: ['jee', 'neet'], board: 'Gujarat Board', stateExam: 'GUJCET', language: 'Gujarati' },
  { slug: 'navsari', city: 'Navsari', state: 'Gujarat', tier: 3, lat: 20.9467, lng: 72.9520, exams: ['jee', 'neet'], board: 'Gujarat Board', stateExam: 'GUJCET', language: 'Gujarati' },

  // ─── PUNJAB ───────────────────────────────────────────────
  { slug: 'ludhiana', city: 'Ludhiana', state: 'Punjab', tier: 2, lat: 30.9010, lng: 75.8573, exams: ['jee', 'neet'], board: 'Punjab Board', language: 'Punjabi' },
  { slug: 'amritsar', city: 'Amritsar', state: 'Punjab', tier: 2, lat: 31.6340, lng: 74.8723, exams: ['jee', 'neet'], board: 'Punjab Board', language: 'Punjabi' },
  { slug: 'jalandhar', city: 'Jalandhar', state: 'Punjab', tier: 2, lat: 31.3260, lng: 75.5762, exams: ['jee', 'neet'], board: 'Punjab Board', language: 'Punjabi', nearbyInstitute: 'NIT Jalandhar' },
  { slug: 'patiala', city: 'Patiala', state: 'Punjab', tier: 3, lat: 30.3398, lng: 76.3869, exams: ['jee', 'neet'], board: 'Punjab Board', language: 'Punjabi', nearbyInstitute: 'Thapar University' },
  { slug: 'bathinda', city: 'Bathinda', state: 'Punjab', tier: 3, lat: 30.2110, lng: 74.9455, exams: ['jee', 'neet'], board: 'Punjab Board', language: 'Punjabi', nearbyInstitute: 'AIIMS Bathinda' },
  { slug: 'mohali', city: 'Mohali', state: 'Punjab', tier: 2, lat: 30.7046, lng: 76.7179, exams: ['jee', 'neet'], board: 'Punjab Board', language: 'Punjabi', nearbyInstitute: 'IISER Mohali' },

  // ─── HARYANA ──────────────────────────────────────────────
  { slug: 'gurgaon', city: 'Gurgaon', state: 'Haryana', tier: 1, lat: 28.4595, lng: 77.0266, exams: ['jee', 'neet'], board: 'CBSE/Haryana Board', coachingHub: 'Sector 14 and Sector 56' },
  { slug: 'faridabad', city: 'Faridabad', state: 'Haryana', tier: 2, lat: 28.4089, lng: 77.3178, exams: ['jee', 'neet'], board: 'CBSE/Haryana Board' },
  { slug: 'karnal', city: 'Karnal', state: 'Haryana', tier: 3, lat: 29.6857, lng: 76.9905, exams: ['jee', 'neet'], board: 'Haryana Board', language: 'Hindi' },
  { slug: 'ambala', city: 'Ambala', state: 'Haryana', tier: 3, lat: 30.3752, lng: 76.7821, exams: ['jee', 'neet'], board: 'Haryana Board', language: 'Hindi' },
  { slug: 'panipat', city: 'Panipat', state: 'Haryana', tier: 3, lat: 29.3909, lng: 76.9635, exams: ['jee', 'neet'], board: 'Haryana Board', language: 'Hindi' },
  { slug: 'hisar', city: 'Hisar', state: 'Haryana', tier: 3, lat: 29.1492, lng: 75.7217, exams: ['jee', 'neet'], board: 'Haryana Board', language: 'Hindi' },
  { slug: 'rohtak', city: 'Rohtak', state: 'Haryana', tier: 3, lat: 28.8955, lng: 76.6066, exams: ['jee', 'neet'], board: 'Haryana Board', language: 'Hindi', nearbyInstitute: 'AIIMS Rohtak' },

  // ─── ODISHA ───────────────────────────────────────────────
  { slug: 'bhubaneswar', city: 'Bhubaneswar', state: 'Odisha', tier: 2, lat: 20.2961, lng: 85.8245, exams: ['jee', 'neet'], board: 'Odisha Board', stateExam: 'OJEE', language: 'Odia', nearbyInstitute: 'IIT Bhubaneswar & AIIMS Bhubaneswar' },
  { slug: 'cuttack', city: 'Cuttack', state: 'Odisha', tier: 2, lat: 20.4625, lng: 85.8830, exams: ['jee', 'neet'], board: 'Odisha Board', stateExam: 'OJEE', language: 'Odia' },
  { slug: 'rourkela', city: 'Rourkela', state: 'Odisha', tier: 3, lat: 22.2604, lng: 84.8536, exams: ['jee', 'neet'], board: 'Odisha Board', stateExam: 'OJEE', language: 'Odia', nearbyInstitute: 'NIT Rourkela' },
  { slug: 'sambalpur', city: 'Sambalpur', state: 'Odisha', tier: 3, lat: 21.4669, lng: 83.9746, exams: ['jee', 'neet'], board: 'Odisha Board', stateExam: 'OJEE', language: 'Odia' },
  { slug: 'berhampur', city: 'Berhampur', state: 'Odisha', tier: 3, lat: 19.3150, lng: 84.7941, exams: ['jee', 'neet'], board: 'Odisha Board', stateExam: 'OJEE', language: 'Odia' },

  // ─── JHARKHAND ────────────────────────────────────────────
  { slug: 'jamshedpur', city: 'Jamshedpur', state: 'Jharkhand', tier: 2, lat: 22.8046, lng: 86.2029, exams: ['jee', 'neet'], board: 'Jharkhand Board', language: 'Hindi', nearbyInstitute: 'NIT Jamshedpur' },
  { slug: 'dhanbad', city: 'Dhanbad', state: 'Jharkhand', tier: 2, lat: 23.7957, lng: 86.4304, exams: ['jee', 'neet'], board: 'Jharkhand Board', language: 'Hindi', nearbyInstitute: 'IIT (ISM) Dhanbad' },
  { slug: 'bokaro', city: 'Bokaro', state: 'Jharkhand', tier: 3, lat: 23.6693, lng: 86.1511, exams: ['jee', 'neet'], board: 'Jharkhand Board', language: 'Hindi' },
  { slug: 'hazaribagh', city: 'Hazaribagh', state: 'Jharkhand', tier: 3, lat: 23.9966, lng: 85.3637, exams: ['jee', 'neet'], board: 'Jharkhand Board', language: 'Hindi' },
  { slug: 'deoghar', city: 'Deoghar', state: 'Jharkhand', tier: 3, lat: 24.4764, lng: 86.6943, exams: ['jee', 'neet'], board: 'Jharkhand Board', language: 'Hindi', nearbyInstitute: 'AIIMS Deoghar' },

  // ─── CHHATTISGARH ─────────────────────────────────────────
  { slug: 'bilaspur', city: 'Bilaspur', state: 'Chhattisgarh', tier: 3, lat: 22.0797, lng: 82.1391, exams: ['jee', 'neet'], board: 'CG Board', language: 'Hindi' },
  { slug: 'durg', city: 'Durg', state: 'Chhattisgarh', tier: 3, lat: 21.1904, lng: 81.2849, exams: ['jee', 'neet'], board: 'CG Board', language: 'Hindi', nearbyInstitute: 'NIT Raipur' },
  { slug: 'korba', city: 'Korba', state: 'Chhattisgarh', tier: 3, lat: 22.3595, lng: 82.7501, exams: ['jee', 'neet'], board: 'CG Board', language: 'Hindi' },

  // ─── ASSAM & NORTHEAST ────────────────────────────────────
  { slug: 'dibrugarh', city: 'Dibrugarh', state: 'Assam', tier: 3, lat: 27.4728, lng: 94.9120, exams: ['jee', 'neet'], board: 'Assam Board', language: 'Assamese', nearbyInstitute: 'Dibrugarh University & AMCH' },
  { slug: 'silchar', city: 'Silchar', state: 'Assam', tier: 3, lat: 24.8333, lng: 92.7789, exams: ['jee', 'neet'], board: 'Assam Board', language: 'Assamese', nearbyInstitute: 'NIT Silchar' },
  { slug: 'jorhat', city: 'Jorhat', state: 'Assam', tier: 3, lat: 26.7509, lng: 94.2037, exams: ['jee', 'neet'], board: 'Assam Board', language: 'Assamese' },
  { slug: 'tezpur', city: 'Tezpur', state: 'Assam', tier: 3, lat: 26.6338, lng: 92.7927, exams: ['jee', 'neet'], board: 'Assam Board', language: 'Assamese', nearbyInstitute: 'Tezpur University' },
  { slug: 'imphal', city: 'Imphal', state: 'Manipur', tier: 3, lat: 24.8170, lng: 93.9368, exams: ['jee', 'neet'], board: 'Manipur Board', nearbyInstitute: 'NIT Manipur' },
  { slug: 'shillong', city: 'Shillong', state: 'Meghalaya', tier: 3, lat: 25.5788, lng: 91.8933, exams: ['jee', 'neet'], board: 'Meghalaya Board', nearbyInstitute: 'IIM Shillong & NIT Meghalaya' },
  { slug: 'agartala', city: 'Agartala', state: 'Tripura', tier: 3, lat: 23.8315, lng: 91.2868, exams: ['jee', 'neet'], board: 'Tripura Board', nearbyInstitute: 'NIT Agartala' },
  { slug: 'aizawl', city: 'Aizawl', state: 'Mizoram', tier: 3, lat: 23.7271, lng: 92.7176, exams: ['jee', 'neet'], board: 'Mizoram Board', nearbyInstitute: 'NIT Mizoram' },
  { slug: 'kohima', city: 'Kohima', state: 'Nagaland', tier: 3, lat: 25.6751, lng: 94.1086, exams: ['jee', 'neet'], board: 'Nagaland Board' },
  { slug: 'itanagar', city: 'Itanagar', state: 'Arunachal Pradesh', tier: 3, lat: 27.0844, lng: 93.6053, exams: ['jee', 'neet'], board: 'Arunachal Board', nearbyInstitute: 'NIT Arunachal Pradesh' },
  { slug: 'gangtok', city: 'Gangtok', state: 'Sikkim', tier: 3, lat: 27.3389, lng: 88.6065, exams: ['jee', 'neet'], board: 'Sikkim Board', nearbyInstitute: 'NIT Sikkim' },

  // ─── UTTARAKHAND ──────────────────────────────────────────
  { slug: 'haridwar', city: 'Haridwar', state: 'Uttarakhand', tier: 3, lat: 29.9457, lng: 78.1642, exams: ['jee', 'neet'], board: 'Uttarakhand Board', language: 'Hindi', nearbyInstitute: 'IIT Roorkee (nearby)' },
  { slug: 'haldwani', city: 'Haldwani', state: 'Uttarakhand', tier: 3, lat: 29.2183, lng: 79.5130, exams: ['jee', 'neet'], board: 'Uttarakhand Board', language: 'Hindi' },
  { slug: 'roorkee', city: 'Roorkee', state: 'Uttarakhand', tier: 3, lat: 29.8543, lng: 77.8880, exams: ['jee', 'neet'], board: 'Uttarakhand Board', language: 'Hindi', nearbyInstitute: 'IIT Roorkee' },

  // ─── HIMACHAL PRADESH ─────────────────────────────────────
  { slug: 'shimla', city: 'Shimla', state: 'Himachal Pradesh', tier: 3, lat: 31.1048, lng: 77.1734, exams: ['jee', 'neet'], board: 'HP Board' },
  { slug: 'dharamshala', city: 'Dharamshala', state: 'Himachal Pradesh', tier: 3, lat: 32.2190, lng: 76.3234, exams: ['jee', 'neet'], board: 'HP Board' },
  { slug: 'mandi', city: 'Mandi', state: 'Himachal Pradesh', tier: 3, lat: 31.7084, lng: 76.9317, exams: ['jee', 'neet'], board: 'HP Board', nearbyInstitute: 'IIT Mandi' },
  { slug: 'solan', city: 'Solan', state: 'Himachal Pradesh', tier: 3, lat: 30.9045, lng: 77.0967, exams: ['jee', 'neet'], board: 'HP Board' },

  // ─── JAMMU & KASHMIR ──────────────────────────────────────
  { slug: 'jammu', city: 'Jammu', state: 'Jammu & Kashmir', tier: 2, lat: 32.7266, lng: 74.8570, exams: ['jee', 'neet'], board: 'JK Board', nearbyInstitute: 'IIT Jammu' },
  { slug: 'srinagar', city: 'Srinagar', state: 'Jammu & Kashmir', tier: 2, lat: 34.0837, lng: 74.7973, exams: ['jee', 'neet'], board: 'JK Board', nearbyInstitute: 'NIT Srinagar' },

  // ─── GOA ──────────────────────────────────────────────────
  { slug: 'panaji', city: 'Panaji', state: 'Goa', tier: 3, lat: 15.4909, lng: 73.8278, exams: ['jee', 'neet'], board: 'Goa Board', nearbyInstitute: 'NIT Goa & IIT Goa' },
  { slug: 'margao', city: 'Margao', state: 'Goa', tier: 3, lat: 15.2832, lng: 73.9862, exams: ['jee', 'neet'], board: 'Goa Board' },

  // ─── MADHYA PRADESH (MORE CITIES) ─────────────────────────
  { slug: 'indore-mp', city: 'Dewas', state: 'Madhya Pradesh', tier: 3, lat: 22.9676, lng: 76.0534, exams: ['jee', 'neet'], board: 'MP Board', language: 'Hindi' },
  { slug: 'vidisha', city: 'Vidisha', state: 'Madhya Pradesh', tier: 3, lat: 23.5263, lng: 77.8100, exams: ['jee', 'neet'], board: 'MP Board', language: 'Hindi' },

  // ─── ADDITIONAL UTTAR PRADESH ─────────────────────────────
  { slug: 'greater-noida', city: 'Greater Noida', state: 'Uttar Pradesh', tier: 2, lat: 28.4744, lng: 77.5040, exams: ['jee', 'neet'], board: 'CBSE/UP Board' },
  { slug: 'muzaffarnagar', city: 'Muzaffarnagar', state: 'Uttar Pradesh', tier: 3, lat: 29.4727, lng: 77.7085, exams: ['jee', 'neet'], board: 'UP Board', language: 'Hindi' },
  { slug: 'shahjahanpur', city: 'Shahjahanpur', state: 'Uttar Pradesh', tier: 3, lat: 27.8836, lng: 79.9076, exams: ['jee', 'neet'], board: 'UP Board', language: 'Hindi' },
  { slug: 'rampur', city: 'Rampur', state: 'Uttar Pradesh', tier: 3, lat: 28.7939, lng: 79.0256, exams: ['jee', 'neet'], board: 'UP Board', language: 'Hindi' },

  // ─── ADDITIONAL RAJASTHAN ─────────────────────────────────
  { slug: 'pali', city: 'Pali', state: 'Rajasthan', tier: 3, lat: 25.7711, lng: 73.3234, exams: ['jee', 'neet'], board: 'Rajasthan Board' },
  { slug: 'chittorgarh', city: 'Chittorgarh', state: 'Rajasthan', tier: 3, lat: 24.8887, lng: 74.6269, exams: ['jee', 'neet'], board: 'Rajasthan Board' },
  { slug: 'tonk', city: 'Tonk', state: 'Rajasthan', tier: 3, lat: 26.1505, lng: 75.7924, exams: ['jee', 'neet'], board: 'Rajasthan Board' },

  // ─── ADDITIONAL MAHARASHTRA ───────────────────────────────
  { slug: 'jalgaon', city: 'Jalgaon', state: 'Maharashtra', tier: 3, lat: 21.0077, lng: 75.5626, exams: ['jee', 'neet'], board: 'Maharashtra State Board', stateExam: 'MHT-CET', language: 'Marathi' },
  { slug: 'dhule', city: 'Dhule', state: 'Maharashtra', tier: 3, lat: 20.9042, lng: 74.7749, exams: ['jee', 'neet'], board: 'Maharashtra State Board', stateExam: 'MHT-CET', language: 'Marathi' },
  { slug: 'satara', city: 'Satara', state: 'Maharashtra', tier: 3, lat: 17.6805, lng: 74.0183, exams: ['jee', 'neet'], board: 'Maharashtra State Board', stateExam: 'MHT-CET', language: 'Marathi' },
  { slug: 'ichalkaranji', city: 'Ichalkaranji', state: 'Maharashtra', tier: 3, lat: 16.6914, lng: 74.4618, exams: ['jee', 'neet'], board: 'Maharashtra State Board', stateExam: 'MHT-CET', language: 'Marathi' },
  { slug: 'parbhani', city: 'Parbhani', state: 'Maharashtra', tier: 3, lat: 19.2610, lng: 76.7739, exams: ['jee', 'neet'], board: 'Maharashtra State Board', stateExam: 'MHT-CET', language: 'Marathi' },
  { slug: 'nanded', city: 'Nanded', state: 'Maharashtra', tier: 3, lat: 19.1383, lng: 77.3210, exams: ['jee', 'neet'], board: 'Maharashtra State Board', stateExam: 'MHT-CET', language: 'Marathi' },

  // ─── ADDITIONAL TAMIL NADU ────────────────────────────────
  { slug: 'hosur', city: 'Hosur', state: 'Tamil Nadu', tier: 3, lat: 12.7409, lng: 77.8253, exams: ['jee', 'neet'], board: 'TN State Board', language: 'Tamil' },
  { slug: 'karur', city: 'Karur', state: 'Tamil Nadu', tier: 3, lat: 10.9601, lng: 78.0766, exams: ['jee', 'neet'], board: 'TN State Board', language: 'Tamil' },
  { slug: 'kumbakonam', city: 'Kumbakonam', state: 'Tamil Nadu', tier: 3, lat: 10.9617, lng: 79.3881, exams: ['jee', 'neet'], board: 'TN State Board', language: 'Tamil' },
  { slug: 'cuddalore', city: 'Cuddalore', state: 'Tamil Nadu', tier: 3, lat: 11.7480, lng: 79.7714, exams: ['jee', 'neet'], board: 'TN State Board', language: 'Tamil' },

  // ─── ADDITIONAL KARNATAKA ─────────────────────────────────
  { slug: 'bellary', city: 'Bellary', state: 'Karnataka', tier: 3, lat: 15.1394, lng: 76.9214, exams: ['jee', 'neet'], board: 'Karnataka State Board', stateExam: 'KCET', language: 'Kannada' },
  { slug: 'bijapur', city: 'Bijapur', state: 'Karnataka', tier: 3, lat: 16.8302, lng: 75.7100, exams: ['jee', 'neet'], board: 'Karnataka State Board', stateExam: 'KCET', language: 'Kannada' },
  { slug: 'raichur', city: 'Raichur', state: 'Karnataka', tier: 3, lat: 16.2076, lng: 77.3463, exams: ['jee', 'neet'], board: 'Karnataka State Board', stateExam: 'KCET', language: 'Kannada' },
  { slug: 'udupi', city: 'Udupi', state: 'Karnataka', tier: 3, lat: 13.3409, lng: 74.7421, exams: ['jee', 'neet'], board: 'Karnataka State Board', stateExam: 'KCET', language: 'Kannada', nearbyInstitute: 'Manipal Institute of Technology' },

  // ─── ADDITIONAL TELANGANA ─────────────────────────────────
  { slug: 'mahbubnagar', city: 'Mahbubnagar', state: 'Telangana', tier: 3, lat: 16.7488, lng: 78.0035, exams: ['jee', 'neet'], board: 'Telangana State Board', stateExam: 'TS EAMCET', language: 'Telugu' },
  { slug: 'adilabad', city: 'Adilabad', state: 'Telangana', tier: 3, lat: 19.6641, lng: 78.5320, exams: ['jee', 'neet'], board: 'Telangana State Board', stateExam: 'TS EAMCET', language: 'Telugu' },

  // ─── ADDITIONAL GUJARAT ───────────────────────────────────
  { slug: 'vapi', city: 'Vapi', state: 'Gujarat', tier: 3, lat: 20.3893, lng: 72.9106, exams: ['jee', 'neet'], board: 'Gujarat Board', stateExam: 'GUJCET', language: 'Gujarati' },
  { slug: 'morbi', city: 'Morbi', state: 'Gujarat', tier: 3, lat: 22.8120, lng: 70.8370, exams: ['jee', 'neet'], board: 'Gujarat Board', stateExam: 'GUJCET', language: 'Gujarati' },
  { slug: 'porbandar', city: 'Porbandar', state: 'Gujarat', tier: 3, lat: 21.6417, lng: 69.6293, exams: ['jee', 'neet'], board: 'Gujarat Board', stateExam: 'GUJCET', language: 'Gujarati' },
  { slug: 'surendranagar', city: 'Surendranagar', state: 'Gujarat', tier: 3, lat: 22.7277, lng: 71.6480, exams: ['jee', 'neet'], board: 'Gujarat Board', stateExam: 'GUJCET', language: 'Gujarati' },

  // ─── ADDITIONAL PUNJAB ────────────────────────────────────
  { slug: 'hoshiarpur', city: 'Hoshiarpur', state: 'Punjab', tier: 3, lat: 31.5143, lng: 75.9115, exams: ['jee', 'neet'], board: 'Punjab Board', language: 'Punjabi' },
  { slug: 'phagwara', city: 'Phagwara', state: 'Punjab', tier: 3, lat: 31.2240, lng: 75.7708, exams: ['jee', 'neet'], board: 'Punjab Board', language: 'Punjabi', nearbyInstitute: 'Lovely Professional University' },

  // ─── ADDITIONAL HARYANA ───────────────────────────────────
  { slug: 'sonipat', city: 'Sonipat', state: 'Haryana', tier: 3, lat: 28.9931, lng: 77.0151, exams: ['jee', 'neet'], board: 'Haryana Board', language: 'Hindi' },
  { slug: 'yamunanagar', city: 'Yamunanagar', state: 'Haryana', tier: 3, lat: 30.1290, lng: 77.2674, exams: ['jee', 'neet'], board: 'Haryana Board', language: 'Hindi' },
  { slug: 'rewari', city: 'Rewari', state: 'Haryana', tier: 3, lat: 28.1970, lng: 76.6193, exams: ['jee', 'neet'], board: 'Haryana Board', language: 'Hindi' },
  { slug: 'sirsa', city: 'Sirsa', state: 'Haryana', tier: 3, lat: 29.5349, lng: 75.0284, exams: ['jee', 'neet'], board: 'Haryana Board', language: 'Hindi' },

  // ─── ADDITIONAL KERALA ────────────────────────────────────
  { slug: 'malappuram', city: 'Malappuram', state: 'Kerala', tier: 3, lat: 11.0510, lng: 76.0711, exams: ['jee', 'neet'], board: 'Kerala State Board', stateExam: 'KEAM', language: 'Malayalam' },
  { slug: 'pathanamthitta', city: 'Pathanamthitta', state: 'Kerala', tier: 3, lat: 9.2648, lng: 76.7870, exams: ['jee', 'neet'], board: 'Kerala State Board', stateExam: 'KEAM', language: 'Malayalam' },
  { slug: 'idukki', city: 'Idukki', state: 'Kerala', tier: 3, lat: 9.8494, lng: 76.9720, exams: ['jee', 'neet'], board: 'Kerala State Board', stateExam: 'KEAM', language: 'Malayalam' },

  // ─── ADDITIONAL BIHAR ─────────────────────────────────────
  { slug: 'begusarai', city: 'Begusarai', state: 'Bihar', tier: 3, lat: 25.4182, lng: 86.1272, exams: ['jee', 'neet'], board: 'Bihar Board', language: 'Hindi' },
  { slug: 'chapra', city: 'Chapra', state: 'Bihar', tier: 3, lat: 25.7868, lng: 84.7558, exams: ['jee', 'neet'], board: 'Bihar Board', language: 'Hindi' },
  { slug: 'samastipur', city: 'Samastipur', state: 'Bihar', tier: 3, lat: 25.8610, lng: 85.7809, exams: ['jee', 'neet'], board: 'Bihar Board', language: 'Hindi' },
  { slug: 'arrah', city: 'Arrah', state: 'Bihar', tier: 3, lat: 25.5564, lng: 84.6689, exams: ['jee', 'neet'], board: 'Bihar Board', language: 'Hindi' },
  { slug: 'katihar', city: 'Katihar', state: 'Bihar', tier: 3, lat: 25.5504, lng: 87.5857, exams: ['jee', 'neet'], board: 'Bihar Board', language: 'Hindi' },

  // ─── ADDITIONAL WEST BENGAL ───────────────────────────────
  { slug: 'kalyani', city: 'Kalyani', state: 'West Bengal', tier: 3, lat: 22.9751, lng: 88.4345, exams: ['jee', 'neet'], board: 'WB Board', stateExam: 'WBJEE', language: 'Bengali' },
  { slug: 'barasat', city: 'Barasat', state: 'West Bengal', tier: 3, lat: 22.7241, lng: 88.4802, exams: ['jee', 'neet'], board: 'WB Board', stateExam: 'WBJEE', language: 'Bengali' },
  { slug: 'berhampore', city: 'Berhampore', state: 'West Bengal', tier: 3, lat: 24.1052, lng: 88.2554, exams: ['jee', 'neet'], board: 'WB Board', stateExam: 'WBJEE', language: 'Bengali' },
  { slug: 'malda', city: 'Malda', state: 'West Bengal', tier: 3, lat: 25.0108, lng: 88.1411, exams: ['jee', 'neet'], board: 'WB Board', stateExam: 'WBJEE', language: 'Bengali' },
  { slug: 'midnapore', city: 'Midnapore', state: 'West Bengal', tier: 3, lat: 22.4252, lng: 87.3195, exams: ['jee', 'neet'], board: 'WB Board', stateExam: 'WBJEE', language: 'Bengali' },

  // ─── UNION TERRITORIES ────────────────────────────────────
  { slug: 'pondicherry', city: 'Pondicherry', state: 'Puducherry', tier: 3, lat: 11.9416, lng: 79.8083, exams: ['jee', 'neet'], board: 'CBSE/TN Board', language: 'Tamil' },
  { slug: 'daman', city: 'Daman', state: 'Daman & Diu', tier: 3, lat: 20.3974, lng: 72.8328, exams: ['jee', 'neet'], board: 'CBSE' },

  // ─── ADDITIONAL ODISHA ────────────────────────────────────
  { slug: 'balasore', city: 'Balasore', state: 'Odisha', tier: 3, lat: 21.4934, lng: 86.9135, exams: ['jee', 'neet'], board: 'Odisha Board', stateExam: 'OJEE', language: 'Odia' },
  { slug: 'brahmapur', city: 'Brahmapur', state: 'Odisha', tier: 3, lat: 19.3520, lng: 84.7889, exams: ['jee', 'neet'], board: 'Odisha Board', stateExam: 'OJEE', language: 'Odia' },

  // ─── ADDITIONAL CHHATTISGARH ──────────────────────────────
  { slug: 'bhilai', city: 'Bhilai', state: 'Chhattisgarh', tier: 2, lat: 21.2094, lng: 81.3784, exams: ['jee', 'neet'], board: 'CG Board', language: 'Hindi' },
  { slug: 'rajnandgaon', city: 'Rajnandgaon', state: 'Chhattisgarh', tier: 3, lat: 21.0966, lng: 81.0290, exams: ['jee', 'neet'], board: 'CG Board', language: 'Hindi' },

  // ─── ADDITIONAL MADHYA PRADESH ────────────────────────────
  { slug: 'katni', city: 'Katni', state: 'Madhya Pradesh', tier: 3, lat: 23.8388, lng: 80.3928, exams: ['jee', 'neet'], board: 'MP Board', language: 'Hindi' },
  { slug: 'chhindwara', city: 'Chhindwara', state: 'Madhya Pradesh', tier: 3, lat: 22.0574, lng: 78.9382, exams: ['jee', 'neet'], board: 'MP Board', language: 'Hindi' },
  { slug: 'mandsaur', city: 'Mandsaur', state: 'Madhya Pradesh', tier: 3, lat: 24.0793, lng: 75.0691, exams: ['jee', 'neet'], board: 'MP Board', language: 'Hindi' },

  // ─── ADDITIONAL ASSAM ─────────────────────────────────────
  { slug: 'nagaon', city: 'Nagaon', state: 'Assam', tier: 3, lat: 26.3460, lng: 92.6840, exams: ['jee', 'neet'], board: 'Assam Board', language: 'Assamese' },
  { slug: 'bongaigaon', city: 'Bongaigaon', state: 'Assam', tier: 3, lat: 26.4769, lng: 90.5584, exams: ['jee', 'neet'], board: 'Assam Board', language: 'Assamese' },

  // ═══════════════════════════════════════════════════════════
  //  AREA-LEVEL HYPER-LOCAL PAGES (Metro sub-areas)
  //  Generates pages like "JEE Coaching in Rohini" etc.
  // ═══════════════════════════════════════════════════════════

  // ─── DELHI AREAS ──────────────────────────────────────────
  { slug: 'rohini', city: 'Rohini, Delhi', state: 'Delhi', tier: 1, lat: 28.7495, lng: 77.0565, exams: ['jee', 'neet'], board: 'CBSE', coachingHub: 'Sector 7-8 Rohini' },
  { slug: 'dwarka', city: 'Dwarka, Delhi', state: 'Delhi', tier: 1, lat: 28.5921, lng: 77.0460, exams: ['jee', 'neet'], board: 'CBSE', coachingHub: 'Sector 6 & 12 Dwarka' },
  { slug: 'pitampura', city: 'Pitampura, Delhi', state: 'Delhi', tier: 1, lat: 28.6970, lng: 77.1352, exams: ['jee', 'neet'], board: 'CBSE', coachingHub: 'Kohat Enclave' },
  { slug: 'janakpuri', city: 'Janakpuri, Delhi', state: 'Delhi', tier: 1, lat: 28.6214, lng: 77.0872, exams: ['jee', 'neet'], board: 'CBSE' },
  { slug: 'laxmi-nagar', city: 'Laxmi Nagar, Delhi', state: 'Delhi', tier: 1, lat: 28.6304, lng: 77.2777, exams: ['jee', 'neet'], board: 'CBSE', coachingHub: 'Laxmi Nagar coaching hub' },
  { slug: 'rajouri-garden', city: 'Rajouri Garden, Delhi', state: 'Delhi', tier: 1, lat: 28.6466, lng: 77.1224, exams: ['jee', 'neet'], board: 'CBSE' },
  { slug: 'south-delhi', city: 'South Delhi', state: 'Delhi', tier: 1, lat: 28.5273, lng: 77.2189, exams: ['jee', 'neet'], board: 'CBSE', coachingHub: 'Hauz Khas & Kalu Sarai' },
  { slug: 'east-delhi', city: 'East Delhi', state: 'Delhi', tier: 1, lat: 28.6358, lng: 77.3017, exams: ['jee', 'neet'], board: 'CBSE' },
  { slug: 'karol-bagh', city: 'Karol Bagh, Delhi', state: 'Delhi', tier: 1, lat: 28.6519, lng: 77.1905, exams: ['jee', 'neet'], board: 'CBSE', coachingHub: 'Karol Bagh' },
  { slug: 'greater-kailash', city: 'Greater Kailash, Delhi', state: 'Delhi', tier: 1, lat: 28.5463, lng: 77.2340, exams: ['jee', 'neet'], board: 'CBSE' },

  // ─── MUMBAI AREAS ─────────────────────────────────────────
  { slug: 'andheri', city: 'Andheri, Mumbai', state: 'Maharashtra', tier: 1, lat: 19.1197, lng: 72.8464, exams: ['jee', 'neet'], board: 'Maharashtra State Board', stateExam: 'MHT-CET', language: 'Marathi' },
  { slug: 'borivali', city: 'Borivali, Mumbai', state: 'Maharashtra', tier: 1, lat: 19.2307, lng: 72.8567, exams: ['jee', 'neet'], board: 'Maharashtra State Board', stateExam: 'MHT-CET', language: 'Marathi' },
  { slug: 'dadar', city: 'Dadar, Mumbai', state: 'Maharashtra', tier: 1, lat: 19.0178, lng: 72.8478, exams: ['jee', 'neet'], board: 'Maharashtra State Board', stateExam: 'MHT-CET', language: 'Marathi', coachingHub: 'Dadar coaching cluster' },
  { slug: 'mulund', city: 'Mulund, Mumbai', state: 'Maharashtra', tier: 1, lat: 19.1726, lng: 72.9570, exams: ['jee', 'neet'], board: 'Maharashtra State Board', stateExam: 'MHT-CET', language: 'Marathi' },
  { slug: 'goregaon', city: 'Goregaon, Mumbai', state: 'Maharashtra', tier: 1, lat: 19.1558, lng: 72.8495, exams: ['jee', 'neet'], board: 'Maharashtra State Board', stateExam: 'MHT-CET', language: 'Marathi' },
  { slug: 'kandivali', city: 'Kandivali, Mumbai', state: 'Maharashtra', tier: 1, lat: 19.2047, lng: 72.8532, exams: ['jee', 'neet'], board: 'Maharashtra State Board', stateExam: 'MHT-CET', language: 'Marathi' },
  { slug: 'powai', city: 'Powai, Mumbai', state: 'Maharashtra', tier: 1, lat: 19.1176, lng: 72.9060, exams: ['jee', 'neet'], board: 'Maharashtra State Board', stateExam: 'MHT-CET', nearbyInstitute: 'IIT Bombay' },
  { slug: 'chembur', city: 'Chembur, Mumbai', state: 'Maharashtra', tier: 1, lat: 19.0522, lng: 72.8994, exams: ['jee', 'neet'], board: 'Maharashtra State Board', stateExam: 'MHT-CET', language: 'Marathi' },

  // ─── BANGALORE AREAS ──────────────────────────────────────
  { slug: 'koramangala', city: 'Koramangala, Bangalore', state: 'Karnataka', tier: 1, lat: 12.9352, lng: 77.6245, exams: ['jee', 'neet'], board: 'Karnataka State Board', stateExam: 'KCET', language: 'Kannada' },
  { slug: 'btm-layout', city: 'BTM Layout, Bangalore', state: 'Karnataka', tier: 1, lat: 12.9166, lng: 77.6101, exams: ['jee', 'neet'], board: 'Karnataka State Board', stateExam: 'KCET', language: 'Kannada' },
  { slug: 'whitefield', city: 'Whitefield, Bangalore', state: 'Karnataka', tier: 1, lat: 12.9698, lng: 77.7500, exams: ['jee', 'neet'], board: 'Karnataka State Board', stateExam: 'KCET', language: 'Kannada' },
  { slug: 'jayanagar', city: 'Jayanagar, Bangalore', state: 'Karnataka', tier: 1, lat: 12.9308, lng: 77.5838, exams: ['jee', 'neet'], board: 'Karnataka State Board', stateExam: 'KCET', language: 'Kannada', coachingHub: 'Jayanagar 4th Block coaching area' },
  { slug: 'indiranagar', city: 'Indiranagar, Bangalore', state: 'Karnataka', tier: 1, lat: 12.9784, lng: 77.6408, exams: ['jee', 'neet'], board: 'Karnataka State Board', stateExam: 'KCET', language: 'Kannada' },
  { slug: 'hsr-layout', city: 'HSR Layout, Bangalore', state: 'Karnataka', tier: 1, lat: 12.9116, lng: 77.6389, exams: ['jee', 'neet'], board: 'Karnataka State Board', stateExam: 'KCET', language: 'Kannada' },
  { slug: 'rajajinagar', city: 'Rajajinagar, Bangalore', state: 'Karnataka', tier: 1, lat: 12.9906, lng: 77.5520, exams: ['jee', 'neet'], board: 'Karnataka State Board', stateExam: 'KCET', language: 'Kannada', coachingHub: 'Rajajinagar Institute Road' },
  { slug: 'electronic-city', city: 'Electronic City, Bangalore', state: 'Karnataka', tier: 1, lat: 12.8399, lng: 77.6770, exams: ['jee', 'neet'], board: 'Karnataka State Board', stateExam: 'KCET', language: 'Kannada' },

  // ─── HYDERABAD AREAS ──────────────────────────────────────
  { slug: 'kukatpally', city: 'Kukatpally, Hyderabad', state: 'Telangana', tier: 1, lat: 17.4948, lng: 78.3996, exams: ['jee', 'neet'], board: 'Telangana State Board', stateExam: 'TS EAMCET', language: 'Telugu', coachingHub: 'KPHB coaching hub' },
  { slug: 'dilsukhnagar', city: 'Dilsukhnagar, Hyderabad', state: 'Telangana', tier: 1, lat: 17.3688, lng: 78.5247, exams: ['jee', 'neet'], board: 'Telangana State Board', stateExam: 'TS EAMCET', language: 'Telugu', coachingHub: 'Dilsukhnagar coaching cluster' },
  { slug: 'ameerpet', city: 'Ameerpet, Hyderabad', state: 'Telangana', tier: 1, lat: 17.4375, lng: 78.4483, exams: ['jee', 'neet'], board: 'Telangana State Board', stateExam: 'TS EAMCET', language: 'Telugu' },
  { slug: 'begumpet', city: 'Begumpet, Hyderabad', state: 'Telangana', tier: 1, lat: 17.4432, lng: 78.4651, exams: ['jee', 'neet'], board: 'Telangana State Board', stateExam: 'TS EAMCET', language: 'Telugu' },
  { slug: 'madhapur', city: 'Madhapur, Hyderabad', state: 'Telangana', tier: 1, lat: 17.4486, lng: 78.3908, exams: ['jee', 'neet'], board: 'Telangana State Board', stateExam: 'TS EAMCET', language: 'Telugu' },
  { slug: 'gachibowli', city: 'Gachibowli, Hyderabad', state: 'Telangana', tier: 1, lat: 17.4401, lng: 78.3489, exams: ['jee', 'neet'], board: 'Telangana State Board', stateExam: 'TS EAMCET', language: 'Telugu', nearbyInstitute: 'IIIT Hyderabad' },

  // ─── CHENNAI AREAS ────────────────────────────────────────
  { slug: 'adyar', city: 'Adyar, Chennai', state: 'Tamil Nadu', tier: 1, lat: 13.0067, lng: 80.2554, exams: ['jee', 'neet'], board: 'TN State Board', language: 'Tamil', nearbyInstitute: 'IIT Madras' },
  { slug: 'anna-nagar', city: 'Anna Nagar, Chennai', state: 'Tamil Nadu', tier: 1, lat: 13.0850, lng: 80.2101, exams: ['jee', 'neet'], board: 'TN State Board', language: 'Tamil', coachingHub: 'Anna Nagar coaching hub' },
  { slug: 'velachery', city: 'Velachery, Chennai', state: 'Tamil Nadu', tier: 1, lat: 12.9815, lng: 80.2180, exams: ['jee', 'neet'], board: 'TN State Board', language: 'Tamil' },
  { slug: 'tambaram', city: 'Tambaram, Chennai', state: 'Tamil Nadu', tier: 1, lat: 12.9249, lng: 80.1000, exams: ['jee', 'neet'], board: 'TN State Board', language: 'Tamil' },
  { slug: 'porur', city: 'Porur, Chennai', state: 'Tamil Nadu', tier: 1, lat: 13.0382, lng: 80.1565, exams: ['jee', 'neet'], board: 'TN State Board', language: 'Tamil' },
  { slug: 't-nagar', city: 'T. Nagar, Chennai', state: 'Tamil Nadu', tier: 1, lat: 13.0418, lng: 80.2341, exams: ['jee', 'neet'], board: 'TN State Board', language: 'Tamil' },

  // ─── PUNE AREAS ───────────────────────────────────────────
  { slug: 'kothrud', city: 'Kothrud, Pune', state: 'Maharashtra', tier: 1, lat: 18.5074, lng: 73.8077, exams: ['jee', 'neet'], board: 'Maharashtra State Board', stateExam: 'MHT-CET', language: 'Marathi', coachingHub: 'Kothrud coaching area' },
  { slug: 'viman-nagar', city: 'Viman Nagar, Pune', state: 'Maharashtra', tier: 1, lat: 18.5679, lng: 73.9143, exams: ['jee', 'neet'], board: 'Maharashtra State Board', stateExam: 'MHT-CET', language: 'Marathi' },
  { slug: 'hadapsar', city: 'Hadapsar, Pune', state: 'Maharashtra', tier: 1, lat: 18.5089, lng: 73.9260, exams: ['jee', 'neet'], board: 'Maharashtra State Board', stateExam: 'MHT-CET', language: 'Marathi' },
  { slug: 'pimpri-chinchwad', city: 'Pimpri-Chinchwad', state: 'Maharashtra', tier: 2, lat: 18.6298, lng: 73.7997, exams: ['jee', 'neet'], board: 'Maharashtra State Board', stateExam: 'MHT-CET', language: 'Marathi' },

  // ─── KOLKATA AREAS ────────────────────────────────────────
  { slug: 'salt-lake', city: 'Salt Lake, Kolkata', state: 'West Bengal', tier: 1, lat: 22.5800, lng: 88.4050, exams: ['jee', 'neet'], board: 'WB Board', stateExam: 'WBJEE', language: 'Bengali' },
  { slug: 'new-town', city: 'New Town, Kolkata', state: 'West Bengal', tier: 1, lat: 22.5958, lng: 88.4795, exams: ['jee', 'neet'], board: 'WB Board', stateExam: 'WBJEE', language: 'Bengali' },
  { slug: 'ballygunge', city: 'Ballygunge, Kolkata', state: 'West Bengal', tier: 1, lat: 22.5268, lng: 88.3660, exams: ['jee', 'neet'], board: 'WB Board', stateExam: 'WBJEE', language: 'Bengali' },
  { slug: 'jadavpur', city: 'Jadavpur, Kolkata', state: 'West Bengal', tier: 1, lat: 22.4991, lng: 88.3694, exams: ['jee', 'neet'], board: 'WB Board', stateExam: 'WBJEE', language: 'Bengali', nearbyInstitute: 'Jadavpur University' },
  { slug: 'lake-town', city: 'Lake Town, Kolkata', state: 'West Bengal', tier: 1, lat: 22.5900, lng: 88.3902, exams: ['jee', 'neet'], board: 'WB Board', stateExam: 'WBJEE', language: 'Bengali' },

  // ─── NCR SATELLITE CITIES ─────────────────────────────────
  { slug: 'greater-noida', city: 'Greater Noida', state: 'Uttar Pradesh', tier: 2, lat: 28.4744, lng: 77.5040, exams: ['jee', 'neet'], board: 'CBSE/UP Board' },
  { slug: 'indirapuram', city: 'Indirapuram, Ghaziabad', state: 'Uttar Pradesh', tier: 2, lat: 28.6407, lng: 77.3573, exams: ['jee', 'neet'], board: 'CBSE/UP Board' },
  { slug: 'vasundhara', city: 'Vasundhara, Ghaziabad', state: 'Uttar Pradesh', tier: 2, lat: 28.6603, lng: 77.3571, exams: ['jee', 'neet'], board: 'CBSE/UP Board' },
  { slug: 'sector-62-noida', city: 'Sector 62, Noida', state: 'Uttar Pradesh', tier: 2, lat: 28.6270, lng: 77.3649, exams: ['jee', 'neet'], board: 'CBSE' },

  // ═══════════════════════════════════════════════════════════
  //  NRI CITY PAGES (30 international cities)
  //  For Indian students studying abroad for JEE/NEET
  // ═══════════════════════════════════════════════════════════
  { slug: 'dubai', city: 'Dubai', state: 'UAE', tier: 1, lat: 25.2048, lng: 55.2708, exams: ['jee', 'neet'], board: 'CBSE', language: 'Hindi' },
  { slug: 'abu-dhabi', city: 'Abu Dhabi', state: 'UAE', tier: 1, lat: 24.4539, lng: 54.3773, exams: ['jee', 'neet'], board: 'CBSE', language: 'Hindi' },
  { slug: 'sharjah', city: 'Sharjah', state: 'UAE', tier: 2, lat: 25.3463, lng: 55.4209, exams: ['jee', 'neet'], board: 'CBSE', language: 'Hindi' },
  { slug: 'singapore', city: 'Singapore', state: 'Singapore', tier: 1, lat: 1.3521, lng: 103.8198, exams: ['jee', 'neet'], board: 'CBSE' },
  { slug: 'london', city: 'London', state: 'United Kingdom', tier: 1, lat: 51.5074, lng: -0.1278, exams: ['jee', 'neet'], board: 'CBSE/IGCSE' },
  { slug: 'new-york', city: 'New York', state: 'United States', tier: 1, lat: 40.7128, lng: -74.0060, exams: ['jee', 'neet'], board: 'CBSE/AP' },
  { slug: 'san-francisco', city: 'San Francisco', state: 'United States', tier: 1, lat: 37.7749, lng: -122.4194, exams: ['jee', 'neet'], board: 'CBSE/AP' },
  { slug: 'toronto', city: 'Toronto', state: 'Canada', tier: 1, lat: 43.6532, lng: -79.3832, exams: ['jee', 'neet'], board: 'CBSE' },
  { slug: 'sydney', city: 'Sydney', state: 'Australia', tier: 1, lat: -33.8688, lng: 151.2093, exams: ['jee', 'neet'], board: 'CBSE' },
  { slug: 'melbourne', city: 'Melbourne', state: 'Australia', tier: 1, lat: -37.8136, lng: 144.9631, exams: ['jee', 'neet'], board: 'CBSE' },
  { slug: 'kuala-lumpur', city: 'Kuala Lumpur', state: 'Malaysia', tier: 1, lat: 3.1390, lng: 101.6869, exams: ['jee', 'neet'], board: 'CBSE' },
  { slug: 'doha', city: 'Doha', state: 'Qatar', tier: 1, lat: 25.2854, lng: 51.5310, exams: ['jee', 'neet'], board: 'CBSE', language: 'Hindi' },
  { slug: 'riyadh', city: 'Riyadh', state: 'Saudi Arabia', tier: 1, lat: 24.7136, lng: 46.6753, exams: ['jee', 'neet'], board: 'CBSE', language: 'Hindi' },
  { slug: 'muscat', city: 'Muscat', state: 'Oman', tier: 2, lat: 23.5880, lng: 58.3829, exams: ['jee', 'neet'], board: 'CBSE', language: 'Hindi' },
  { slug: 'bahrain', city: 'Bahrain', state: 'Bahrain', tier: 2, lat: 26.0667, lng: 50.5577, exams: ['jee', 'neet'], board: 'CBSE', language: 'Hindi' },
  { slug: 'hong-kong', city: 'Hong Kong', state: 'Hong Kong', tier: 1, lat: 22.3193, lng: 114.1694, exams: ['jee', 'neet'], board: 'CBSE/IB' },
  { slug: 'bangkok', city: 'Bangkok', state: 'Thailand', tier: 1, lat: 13.7563, lng: 100.5018, exams: ['jee', 'neet'], board: 'CBSE' },
  { slug: 'jakarta', city: 'Jakarta', state: 'Indonesia', tier: 1, lat: -6.2088, lng: 106.8456, exams: ['jee', 'neet'], board: 'CBSE' },
  { slug: 'nairobi', city: 'Nairobi', state: 'Kenya', tier: 2, lat: -1.2921, lng: 36.8219, exams: ['jee', 'neet'], board: 'CBSE' },
  { slug: 'lagos', city: 'Lagos', state: 'Nigeria', tier: 2, lat: 6.5244, lng: 3.3792, exams: ['jee', 'neet'], board: 'CBSE' },
  { slug: 'berlin', city: 'Berlin', state: 'Germany', tier: 1, lat: 52.5200, lng: 13.4050, exams: ['jee', 'neet'], board: 'CBSE/IB' },
  { slug: 'amsterdam', city: 'Amsterdam', state: 'Netherlands', tier: 1, lat: 52.3676, lng: 4.9041, exams: ['jee', 'neet'], board: 'CBSE/IB' },
  { slug: 'tokyo', city: 'Tokyo', state: 'Japan', tier: 1, lat: 35.6762, lng: 139.6503, exams: ['jee', 'neet'], board: 'CBSE' },
  { slug: 'seoul', city: 'Seoul', state: 'South Korea', tier: 1, lat: 37.5665, lng: 126.9780, exams: ['jee', 'neet'], board: 'CBSE' },
  { slug: 'auckland', city: 'Auckland', state: 'New Zealand', tier: 2, lat: -36.8485, lng: 174.7633, exams: ['jee', 'neet'], board: 'CBSE' },
  { slug: 'kuwait-city', city: 'Kuwait City', state: 'Kuwait', tier: 2, lat: 29.3759, lng: 47.9774, exams: ['jee', 'neet'], board: 'CBSE', language: 'Hindi' },
  { slug: 'colombo', city: 'Colombo', state: 'Sri Lanka', tier: 2, lat: 6.9271, lng: 79.8612, exams: ['jee', 'neet'], board: 'CBSE' },
  { slug: 'kathmandu', city: 'Kathmandu', state: 'Nepal', tier: 2, lat: 27.7172, lng: 85.3240, exams: ['jee', 'neet'], board: 'CBSE/Nepal Board' },
  { slug: 'dhaka', city: 'Dhaka', state: 'Bangladesh', tier: 2, lat: 23.8103, lng: 90.4125, exams: ['jee', 'neet'], board: 'CBSE' },
  { slug: 'frankfurt', city: 'Frankfurt', state: 'Germany', tier: 1, lat: 50.1109, lng: 8.6821, exams: ['jee', 'neet'], board: 'CBSE/IB' },

  // ═══════════════════════════════════════════════════════════
  //  EXPANSION WAVE 2: 350+ MORE CITIES
  //  Additional district headquarters and 100K+ population cities
  // ═══════════════════════════════════════════════════════════

  // ─── MORE UTTAR PRADESH ───────────────────────────────────
  { slug: 'etawah', city: 'Etawah', state: 'Uttar Pradesh', tier: 3, lat: 26.7854, lng: 79.0158, exams: ['jee', 'neet'], board: 'UP Board', language: 'Hindi' },
  { slug: 'sultanpur', city: 'Sultanpur', state: 'Uttar Pradesh', tier: 3, lat: 26.2648, lng: 82.0727, exams: ['jee', 'neet'], board: 'UP Board', language: 'Hindi' },
  { slug: 'fatehpur', city: 'Fatehpur', state: 'Uttar Pradesh', tier: 3, lat: 25.9304, lng: 80.8133, exams: ['jee', 'neet'], board: 'UP Board', language: 'Hindi' },
  { slug: 'banda', city: 'Banda', state: 'Uttar Pradesh', tier: 3, lat: 25.4756, lng: 80.3399, exams: ['jee', 'neet'], board: 'UP Board', language: 'Hindi' },
  { slug: 'mirzapur', city: 'Mirzapur', state: 'Uttar Pradesh', tier: 3, lat: 25.1460, lng: 82.5690, exams: ['jee', 'neet'], board: 'UP Board', language: 'Hindi' },
  { slug: 'azamgarh', city: 'Azamgarh', state: 'Uttar Pradesh', tier: 3, lat: 26.0735, lng: 83.1862, exams: ['jee', 'neet'], board: 'UP Board', language: 'Hindi' },
  { slug: 'deoria', city: 'Deoria', state: 'Uttar Pradesh', tier: 3, lat: 26.5024, lng: 83.7791, exams: ['jee', 'neet'], board: 'UP Board', language: 'Hindi' },
  { slug: 'basti', city: 'Basti', state: 'Uttar Pradesh', tier: 3, lat: 26.7996, lng: 82.7327, exams: ['jee', 'neet'], board: 'UP Board', language: 'Hindi' },
  { slug: 'faizabad', city: 'Ayodhya', state: 'Uttar Pradesh', tier: 3, lat: 26.7736, lng: 82.1442, exams: ['jee', 'neet'], board: 'UP Board', language: 'Hindi' },
  { slug: 'pratapgarh-up', city: 'Pratapgarh', state: 'Uttar Pradesh', tier: 3, lat: 25.8961, lng: 81.9401, exams: ['jee', 'neet'], board: 'UP Board', language: 'Hindi' },
  { slug: 'unnao', city: 'Unnao', state: 'Uttar Pradesh', tier: 3, lat: 26.5472, lng: 80.4879, exams: ['jee', 'neet'], board: 'UP Board', language: 'Hindi' },
  { slug: 'rae-bareli', city: 'Rae Bareli', state: 'Uttar Pradesh', tier: 3, lat: 26.2176, lng: 81.2304, exams: ['jee', 'neet'], board: 'UP Board', language: 'Hindi' },
  { slug: 'sitapur', city: 'Sitapur', state: 'Uttar Pradesh', tier: 3, lat: 27.5706, lng: 80.6831, exams: ['jee', 'neet'], board: 'UP Board', language: 'Hindi' },
  { slug: 'hardoi', city: 'Hardoi', state: 'Uttar Pradesh', tier: 3, lat: 27.3954, lng: 80.1310, exams: ['jee', 'neet'], board: 'UP Board', language: 'Hindi' },
  { slug: 'lakhimpur-kheri', city: 'Lakhimpur Kheri', state: 'Uttar Pradesh', tier: 3, lat: 27.9462, lng: 80.7801, exams: ['jee', 'neet'], board: 'UP Board', language: 'Hindi' },
  { slug: 'bahraich', city: 'Bahraich', state: 'Uttar Pradesh', tier: 3, lat: 27.5745, lng: 81.5960, exams: ['jee', 'neet'], board: 'UP Board', language: 'Hindi' },
  { slug: 'gonda', city: 'Gonda', state: 'Uttar Pradesh', tier: 3, lat: 27.1270, lng: 81.9634, exams: ['jee', 'neet'], board: 'UP Board', language: 'Hindi' },
  { slug: 'ballia', city: 'Ballia', state: 'Uttar Pradesh', tier: 3, lat: 25.7586, lng: 84.1488, exams: ['jee', 'neet'], board: 'UP Board', language: 'Hindi' },
  { slug: 'mainpuri', city: 'Mainpuri', state: 'Uttar Pradesh', tier: 3, lat: 27.2348, lng: 79.0207, exams: ['jee', 'neet'], board: 'UP Board', language: 'Hindi' },
  { slug: 'budaun', city: 'Budaun', state: 'Uttar Pradesh', tier: 3, lat: 28.0481, lng: 79.1200, exams: ['jee', 'neet'], board: 'UP Board', language: 'Hindi' },
  { slug: 'bulandshahr', city: 'Bulandshahr', state: 'Uttar Pradesh', tier: 3, lat: 28.4070, lng: 77.8498, exams: ['jee', 'neet'], board: 'UP Board', language: 'Hindi' },

  // ─── MORE BIHAR ───────────────────────────────────────────
  { slug: 'nalanda', city: 'Nalanda', state: 'Bihar', tier: 3, lat: 25.1348, lng: 85.4427, exams: ['jee', 'neet'], board: 'Bihar Board', language: 'Hindi' },
  { slug: 'munger', city: 'Munger', state: 'Bihar', tier: 3, lat: 25.3752, lng: 86.4736, exams: ['jee', 'neet'], board: 'Bihar Board', language: 'Hindi' },
  { slug: 'sasaram', city: 'Sasaram', state: 'Bihar', tier: 3, lat: 24.9476, lng: 84.0287, exams: ['jee', 'neet'], board: 'Bihar Board', language: 'Hindi' },
  { slug: 'hajipur', city: 'Hajipur', state: 'Bihar', tier: 3, lat: 25.6874, lng: 85.2118, exams: ['jee', 'neet'], board: 'Bihar Board', language: 'Hindi' },
  { slug: 'siwan', city: 'Siwan', state: 'Bihar', tier: 3, lat: 26.2226, lng: 84.3588, exams: ['jee', 'neet'], board: 'Bihar Board', language: 'Hindi' },
  { slug: 'madhubani', city: 'Madhubani', state: 'Bihar', tier: 3, lat: 26.3548, lng: 86.0716, exams: ['jee', 'neet'], board: 'Bihar Board', language: 'Hindi' },
  { slug: 'bettiah', city: 'Bettiah', state: 'Bihar', tier: 3, lat: 26.7994, lng: 84.5167, exams: ['jee', 'neet'], board: 'Bihar Board', language: 'Hindi' },
  { slug: 'motihari', city: 'Motihari', state: 'Bihar', tier: 3, lat: 26.6550, lng: 84.9169, exams: ['jee', 'neet'], board: 'Bihar Board', language: 'Hindi' },
  { slug: 'aurangabad-bihar', city: 'Aurangabad, Bihar', state: 'Bihar', tier: 3, lat: 24.7520, lng: 84.3746, exams: ['jee', 'neet'], board: 'Bihar Board', language: 'Hindi' },
  { slug: 'nawada', city: 'Nawada', state: 'Bihar', tier: 3, lat: 24.8868, lng: 85.5400, exams: ['jee', 'neet'], board: 'Bihar Board', language: 'Hindi' },
  { slug: 'saharsa', city: 'Saharsa', state: 'Bihar', tier: 3, lat: 25.8806, lng: 86.5951, exams: ['jee', 'neet'], board: 'Bihar Board', language: 'Hindi' },
  { slug: 'jehanabad', city: 'Jehanabad', state: 'Bihar', tier: 3, lat: 25.2121, lng: 84.9862, exams: ['jee', 'neet'], board: 'Bihar Board', language: 'Hindi' },

  // ─── MORE RAJASTHAN ───────────────────────────────────────
  { slug: 'udaipur', city: 'Udaipur', state: 'Rajasthan', tier: 2, lat: 24.5854, lng: 73.7125, exams: ['jee', 'neet'], board: 'Rajasthan Board', nearbyInstitute: 'IIT-Jodhpur affiliated centres' },
  { slug: 'sri-ganganagar', city: 'Sri Ganganagar', state: 'Rajasthan', tier: 3, lat: 29.9094, lng: 73.8780, exams: ['jee', 'neet'], board: 'Rajasthan Board' },
  { slug: 'dungarpur', city: 'Dungarpur', state: 'Rajasthan', tier: 3, lat: 23.8437, lng: 73.7159, exams: ['jee', 'neet'], board: 'Rajasthan Board' },
  { slug: 'banswara', city: 'Banswara', state: 'Rajasthan', tier: 3, lat: 23.5463, lng: 74.4435, exams: ['jee', 'neet'], board: 'Rajasthan Board' },
  { slug: 'bundi', city: 'Bundi', state: 'Rajasthan', tier: 3, lat: 25.4305, lng: 75.6375, exams: ['jee', 'neet'], board: 'Rajasthan Board' },
  { slug: 'baran', city: 'Baran', state: 'Rajasthan', tier: 3, lat: 25.0956, lng: 76.5128, exams: ['jee', 'neet'], board: 'Rajasthan Board' },
  { slug: 'jhalawar', city: 'Jhalawar', state: 'Rajasthan', tier: 3, lat: 24.5973, lng: 76.1652, exams: ['jee', 'neet'], board: 'Rajasthan Board' },
  { slug: 'hanumangarh', city: 'Hanumangarh', state: 'Rajasthan', tier: 3, lat: 29.5816, lng: 74.3294, exams: ['jee', 'neet'], board: 'Rajasthan Board' },
  { slug: 'nagaur', city: 'Nagaur', state: 'Rajasthan', tier: 3, lat: 27.2024, lng: 73.7353, exams: ['jee', 'neet'], board: 'Rajasthan Board' },
  { slug: 'churu', city: 'Churu', state: 'Rajasthan', tier: 3, lat: 28.2950, lng: 74.9683, exams: ['jee', 'neet'], board: 'Rajasthan Board' },
  { slug: 'sawai-madhopur', city: 'Sawai Madhopur', state: 'Rajasthan', tier: 3, lat: 26.0233, lng: 76.3413, exams: ['jee', 'neet'], board: 'Rajasthan Board' },
  { slug: 'jhunjhunu', city: 'Jhunjhunu', state: 'Rajasthan', tier: 3, lat: 28.1253, lng: 75.3992, exams: ['jee', 'neet'], board: 'Rajasthan Board' },
  { slug: 'dholpur', city: 'Dholpur', state: 'Rajasthan', tier: 3, lat: 26.6962, lng: 77.8910, exams: ['jee', 'neet'], board: 'Rajasthan Board' },
  { slug: 'bharatpur', city: 'Bharatpur', state: 'Rajasthan', tier: 3, lat: 27.2171, lng: 77.4901, exams: ['jee', 'neet'], board: 'Rajasthan Board' },
  { slug: 'dausa', city: 'Dausa', state: 'Rajasthan', tier: 3, lat: 26.8860, lng: 76.3338, exams: ['jee', 'neet'], board: 'Rajasthan Board' },
  { slug: 'karauli', city: 'Karauli', state: 'Rajasthan', tier: 3, lat: 26.4938, lng: 77.0227, exams: ['jee', 'neet'], board: 'Rajasthan Board' },

  // ─── MORE MADHYA PRADESH ──────────────────────────────────
  { slug: 'morena', city: 'Morena', state: 'Madhya Pradesh', tier: 3, lat: 26.4959, lng: 77.9912, exams: ['jee', 'neet'], board: 'MP Board', language: 'Hindi' },
  { slug: 'bhind', city: 'Bhind', state: 'Madhya Pradesh', tier: 3, lat: 26.5630, lng: 78.7878, exams: ['jee', 'neet'], board: 'MP Board', language: 'Hindi' },
  { slug: 'shivpuri', city: 'Shivpuri', state: 'Madhya Pradesh', tier: 3, lat: 25.4236, lng: 77.6591, exams: ['jee', 'neet'], board: 'MP Board', language: 'Hindi' },
  { slug: 'damoh', city: 'Damoh', state: 'Madhya Pradesh', tier: 3, lat: 23.8369, lng: 79.4416, exams: ['jee', 'neet'], board: 'MP Board', language: 'Hindi' },
  { slug: 'hoshangabad', city: 'Narmadapuram', state: 'Madhya Pradesh', tier: 3, lat: 22.7540, lng: 77.7270, exams: ['jee', 'neet'], board: 'MP Board', language: 'Hindi' },
  { slug: 'betul', city: 'Betul', state: 'Madhya Pradesh', tier: 3, lat: 21.9082, lng: 77.8972, exams: ['jee', 'neet'], board: 'MP Board', language: 'Hindi' },
  { slug: 'khandwa', city: 'Khandwa', state: 'Madhya Pradesh', tier: 3, lat: 21.8260, lng: 76.3539, exams: ['jee', 'neet'], board: 'MP Board', language: 'Hindi' },
  { slug: 'burhanpur', city: 'Burhanpur', state: 'Madhya Pradesh', tier: 3, lat: 21.3106, lng: 76.2300, exams: ['jee', 'neet'], board: 'MP Board', language: 'Hindi' },
  { slug: 'shahdol', city: 'Shahdol', state: 'Madhya Pradesh', tier: 3, lat: 23.2979, lng: 81.3543, exams: ['jee', 'neet'], board: 'MP Board', language: 'Hindi' },
  { slug: 'datia', city: 'Datia', state: 'Madhya Pradesh', tier: 3, lat: 25.6662, lng: 78.4603, exams: ['jee', 'neet'], board: 'MP Board', language: 'Hindi' },

  // ─── MORE MAHARASHTRA ─────────────────────────────────────
  { slug: 'ratnagiri', city: 'Ratnagiri', state: 'Maharashtra', tier: 3, lat: 16.9902, lng: 73.3120, exams: ['jee', 'neet'], board: 'Maharashtra State Board', stateExam: 'MHT-CET', language: 'Marathi' },
  { slug: 'sindhudurg', city: 'Sindhudurg', state: 'Maharashtra', tier: 3, lat: 16.3460, lng: 73.7553, exams: ['jee', 'neet'], board: 'Maharashtra State Board', stateExam: 'MHT-CET', language: 'Marathi' },
  { slug: 'akola', city: 'Akola', state: 'Maharashtra', tier: 3, lat: 20.7096, lng: 77.0020, exams: ['jee', 'neet'], board: 'Maharashtra State Board', stateExam: 'MHT-CET', language: 'Marathi' },
  { slug: 'washim', city: 'Washim', state: 'Maharashtra', tier: 3, lat: 20.0999, lng: 77.1403, exams: ['jee', 'neet'], board: 'Maharashtra State Board', stateExam: 'MHT-CET', language: 'Marathi' },
  { slug: 'beed', city: 'Beed', state: 'Maharashtra', tier: 3, lat: 18.9893, lng: 75.7593, exams: ['jee', 'neet'], board: 'Maharashtra State Board', stateExam: 'MHT-CET', language: 'Marathi' },
  { slug: 'osmanabad', city: 'Osmanabad', state: 'Maharashtra', tier: 3, lat: 18.1860, lng: 76.0400, exams: ['jee', 'neet'], board: 'Maharashtra State Board', stateExam: 'MHT-CET', language: 'Marathi' },
  { slug: 'hingoli', city: 'Hingoli', state: 'Maharashtra', tier: 3, lat: 19.7124, lng: 77.1461, exams: ['jee', 'neet'], board: 'Maharashtra State Board', stateExam: 'MHT-CET', language: 'Marathi' },
  { slug: 'wardha', city: 'Wardha', state: 'Maharashtra', tier: 3, lat: 20.7453, lng: 78.6006, exams: ['jee', 'neet'], board: 'Maharashtra State Board', stateExam: 'MHT-CET', language: 'Marathi' },
  { slug: 'yavatmal', city: 'Yavatmal', state: 'Maharashtra', tier: 3, lat: 20.3899, lng: 78.1307, exams: ['jee', 'neet'], board: 'Maharashtra State Board', stateExam: 'MHT-CET', language: 'Marathi' },
  { slug: 'chandrapur', city: 'Chandrapur', state: 'Maharashtra', tier: 3, lat: 19.9500, lng: 79.2961, exams: ['jee', 'neet'], board: 'Maharashtra State Board', stateExam: 'MHT-CET', language: 'Marathi' },
  { slug: 'gondia', city: 'Gondia', state: 'Maharashtra', tier: 3, lat: 21.4602, lng: 80.1959, exams: ['jee', 'neet'], board: 'Maharashtra State Board', stateExam: 'MHT-CET', language: 'Marathi' },
  { slug: 'buldhana', city: 'Buldhana', state: 'Maharashtra', tier: 3, lat: 20.5293, lng: 76.1848, exams: ['jee', 'neet'], board: 'Maharashtra State Board', stateExam: 'MHT-CET', language: 'Marathi' },

  // ─── MORE WEST BENGAL ─────────────────────────────────────
  { slug: 'purulia', city: 'Purulia', state: 'West Bengal', tier: 3, lat: 23.3324, lng: 86.3650, exams: ['jee', 'neet'], board: 'WB Board', stateExam: 'WBJEE', language: 'Bengali' },
  { slug: 'bankura', city: 'Bankura', state: 'West Bengal', tier: 3, lat: 23.2326, lng: 87.0654, exams: ['jee', 'neet'], board: 'WB Board', stateExam: 'WBJEE', language: 'Bengali' },
  { slug: 'birbhum', city: 'Suri (Birbhum)', state: 'West Bengal', tier: 3, lat: 23.9138, lng: 87.5283, exams: ['jee', 'neet'], board: 'WB Board', stateExam: 'WBJEE', language: 'Bengali' },
  { slug: 'cooch-behar', city: 'Cooch Behar', state: 'West Bengal', tier: 3, lat: 26.3169, lng: 89.4487, exams: ['jee', 'neet'], board: 'WB Board', stateExam: 'WBJEE', language: 'Bengali' },
  { slug: 'jalpaiguri', city: 'Jalpaiguri', state: 'West Bengal', tier: 3, lat: 26.5230, lng: 88.7299, exams: ['jee', 'neet'], board: 'WB Board', stateExam: 'WBJEE', language: 'Bengali' },
  { slug: 'nadia', city: 'Krishnanagar (Nadia)', state: 'West Bengal', tier: 3, lat: 23.3988, lng: 88.5083, exams: ['jee', 'neet'], board: 'WB Board', stateExam: 'WBJEE', language: 'Bengali' },
  { slug: 'north-dinajpur', city: 'Raiganj', state: 'West Bengal', tier: 3, lat: 25.6197, lng: 88.1233, exams: ['jee', 'neet'], board: 'WB Board', stateExam: 'WBJEE', language: 'Bengali' },
  { slug: 'murshidabad', city: 'Murshidabad', state: 'West Bengal', tier: 3, lat: 24.1851, lng: 88.2700, exams: ['jee', 'neet'], board: 'WB Board', stateExam: 'WBJEE', language: 'Bengali' },

  // ─── MORE TAMIL NADU ──────────────────────────────────────
  { slug: 'kanchipuram', city: 'Kanchipuram', state: 'Tamil Nadu', tier: 3, lat: 12.8185, lng: 79.6947, exams: ['jee', 'neet'], board: 'TN State Board', language: 'Tamil' },
  { slug: 'sivakasi', city: 'Sivakasi', state: 'Tamil Nadu', tier: 3, lat: 9.4533, lng: 77.7985, exams: ['jee', 'neet'], board: 'TN State Board', language: 'Tamil' },
  { slug: 'thoothukudi', city: 'Thoothukudi', state: 'Tamil Nadu', tier: 3, lat: 8.7642, lng: 78.1348, exams: ['jee', 'neet'], board: 'TN State Board', language: 'Tamil' },
  { slug: 'namakkal', city: 'Namakkal', state: 'Tamil Nadu', tier: 3, lat: 11.2189, lng: 78.1674, exams: ['jee', 'neet'], board: 'TN State Board', language: 'Tamil' },
  { slug: 'villupuram', city: 'Villupuram', state: 'Tamil Nadu', tier: 3, lat: 11.9395, lng: 79.4924, exams: ['jee', 'neet'], board: 'TN State Board', language: 'Tamil' },
  { slug: 'ramanathapuram', city: 'Ramanathapuram', state: 'Tamil Nadu', tier: 3, lat: 9.3639, lng: 78.8395, exams: ['jee', 'neet'], board: 'TN State Board', language: 'Tamil' },
  { slug: 'virudhunagar', city: 'Virudhunagar', state: 'Tamil Nadu', tier: 3, lat: 9.5858, lng: 77.9571, exams: ['jee', 'neet'], board: 'TN State Board', language: 'Tamil' },
  { slug: 'perambalur', city: 'Perambalur', state: 'Tamil Nadu', tier: 3, lat: 11.2336, lng: 78.8805, exams: ['jee', 'neet'], board: 'TN State Board', language: 'Tamil' },
  { slug: 'ariyalur', city: 'Ariyalur', state: 'Tamil Nadu', tier: 3, lat: 11.1383, lng: 79.0775, exams: ['jee', 'neet'], board: 'TN State Board', language: 'Tamil' },
  { slug: 'tiruvannamalai', city: 'Tiruvannamalai', state: 'Tamil Nadu', tier: 3, lat: 12.2253, lng: 79.0747, exams: ['jee', 'neet'], board: 'TN State Board', language: 'Tamil' },

  // ─── MORE KARNATAKA ───────────────────────────────────────
  { slug: 'chitradurga', city: 'Chitradurga', state: 'Karnataka', tier: 3, lat: 14.2226, lng: 76.4006, exams: ['jee', 'neet'], board: 'Karnataka State Board', stateExam: 'KCET', language: 'Kannada' },
  { slug: 'mandya', city: 'Mandya', state: 'Karnataka', tier: 3, lat: 12.5218, lng: 76.8951, exams: ['jee', 'neet'], board: 'Karnataka State Board', stateExam: 'KCET', language: 'Kannada' },
  { slug: 'chamarajanagar', city: 'Chamarajanagar', state: 'Karnataka', tier: 3, lat: 11.9236, lng: 76.9390, exams: ['jee', 'neet'], board: 'Karnataka State Board', stateExam: 'KCET', language: 'Kannada' },
  { slug: 'kolar', city: 'Kolar', state: 'Karnataka', tier: 3, lat: 13.1367, lng: 78.1330, exams: ['jee', 'neet'], board: 'Karnataka State Board', stateExam: 'KCET', language: 'Kannada' },
  { slug: 'chikmagalur', city: 'Chikmagalur', state: 'Karnataka', tier: 3, lat: 13.3153, lng: 75.7754, exams: ['jee', 'neet'], board: 'Karnataka State Board', stateExam: 'KCET', language: 'Kannada' },
  { slug: 'dharwad', city: 'Dharwad', state: 'Karnataka', tier: 3, lat: 15.4589, lng: 75.0078, exams: ['jee', 'neet'], board: 'Karnataka State Board', stateExam: 'KCET', language: 'Kannada' },
  { slug: 'gadag', city: 'Gadag', state: 'Karnataka', tier: 3, lat: 15.4279, lng: 75.6218, exams: ['jee', 'neet'], board: 'Karnataka State Board', stateExam: 'KCET', language: 'Kannada' },
  { slug: 'haveri', city: 'Haveri', state: 'Karnataka', tier: 3, lat: 14.7951, lng: 75.3991, exams: ['jee', 'neet'], board: 'Karnataka State Board', stateExam: 'KCET', language: 'Kannada' },
  { slug: 'koppal', city: 'Koppal', state: 'Karnataka', tier: 3, lat: 15.3500, lng: 76.1500, exams: ['jee', 'neet'], board: 'Karnataka State Board', stateExam: 'KCET', language: 'Kannada' },
  { slug: 'yadgir', city: 'Yadgir', state: 'Karnataka', tier: 3, lat: 16.7701, lng: 77.1381, exams: ['jee', 'neet'], board: 'Karnataka State Board', stateExam: 'KCET', language: 'Kannada' },

  // ─── MORE ANDHRA PRADESH ──────────────────────────────────
  { slug: 'kadapa', city: 'Kadapa', state: 'Andhra Pradesh', tier: 3, lat: 14.4673, lng: 78.8242, exams: ['jee', 'neet'], board: 'AP State Board', stateExam: 'AP EAMCET', language: 'Telugu' },
  { slug: 'srikakulam', city: 'Srikakulam', state: 'Andhra Pradesh', tier: 3, lat: 18.2949, lng: 83.8938, exams: ['jee', 'neet'], board: 'AP State Board', stateExam: 'AP EAMCET', language: 'Telugu' },
  { slug: 'machilipatnam', city: 'Machilipatnam', state: 'Andhra Pradesh', tier: 3, lat: 16.1875, lng: 81.1389, exams: ['jee', 'neet'], board: 'AP State Board', stateExam: 'AP EAMCET', language: 'Telugu' },
  { slug: 'chittoor', city: 'Chittoor', state: 'Andhra Pradesh', tier: 3, lat: 13.2172, lng: 79.1003, exams: ['jee', 'neet'], board: 'AP State Board', stateExam: 'AP EAMCET', language: 'Telugu' },
  { slug: 'hindupur', city: 'Hindupur', state: 'Andhra Pradesh', tier: 3, lat: 13.8280, lng: 77.4900, exams: ['jee', 'neet'], board: 'AP State Board', stateExam: 'AP EAMCET', language: 'Telugu' },
  { slug: 'proddatur', city: 'Proddatur', state: 'Andhra Pradesh', tier: 3, lat: 14.7502, lng: 78.5500, exams: ['jee', 'neet'], board: 'AP State Board', stateExam: 'AP EAMCET', language: 'Telugu' },
  { slug: 'adoni', city: 'Adoni', state: 'Andhra Pradesh', tier: 3, lat: 15.6322, lng: 77.2773, exams: ['jee', 'neet'], board: 'AP State Board', stateExam: 'AP EAMCET', language: 'Telugu' },
  { slug: 'tenali', city: 'Tenali', state: 'Andhra Pradesh', tier: 3, lat: 16.2429, lng: 80.6437, exams: ['jee', 'neet'], board: 'AP State Board', stateExam: 'AP EAMCET', language: 'Telugu' },
  { slug: 'tadpatri', city: 'Tadpatri', state: 'Andhra Pradesh', tier: 3, lat: 15.0249, lng: 78.0112, exams: ['jee', 'neet'], board: 'AP State Board', stateExam: 'AP EAMCET', language: 'Telugu' },

  // ─── MORE TELANGANA ───────────────────────────────────────
  { slug: 'nalgonda', city: 'Nalgonda', state: 'Telangana', tier: 3, lat: 17.0583, lng: 79.2667, exams: ['jee', 'neet'], board: 'Telangana State Board', stateExam: 'TS EAMCET', language: 'Telugu' },
  { slug: 'siddipet', city: 'Siddipet', state: 'Telangana', tier: 3, lat: 18.1019, lng: 78.8520, exams: ['jee', 'neet'], board: 'Telangana State Board', stateExam: 'TS EAMCET', language: 'Telugu' },
  { slug: 'suryapet', city: 'Suryapet', state: 'Telangana', tier: 3, lat: 17.1478, lng: 79.6375, exams: ['jee', 'neet'], board: 'Telangana State Board', stateExam: 'TS EAMCET', language: 'Telugu' },
  { slug: 'mancherial', city: 'Mancherial', state: 'Telangana', tier: 3, lat: 18.8690, lng: 79.4426, exams: ['jee', 'neet'], board: 'Telangana State Board', stateExam: 'TS EAMCET', language: 'Telugu' },
  { slug: 'miryalaguda', city: 'Miryalaguda', state: 'Telangana', tier: 3, lat: 16.8726, lng: 79.5684, exams: ['jee', 'neet'], board: 'Telangana State Board', stateExam: 'TS EAMCET', language: 'Telugu' },

  // ─── MORE KERALA ──────────────────────────────────────────
  { slug: 'kasaragod', city: 'Kasaragod', state: 'Kerala', tier: 3, lat: 12.4996, lng: 74.9869, exams: ['jee', 'neet'], board: 'Kerala State Board', stateExam: 'KEAM', language: 'Malayalam' },
  { slug: 'wayanad', city: 'Kalpetta (Wayanad)', state: 'Kerala', tier: 3, lat: 11.6087, lng: 76.0842, exams: ['jee', 'neet'], board: 'Kerala State Board', stateExam: 'KEAM', language: 'Malayalam' },

  // ─── MORE GUJARAT ─────────────────────────────────────────
  { slug: 'palanpur', city: 'Palanpur', state: 'Gujarat', tier: 3, lat: 24.1725, lng: 72.4321, exams: ['jee', 'neet'], board: 'Gujarat Board', stateExam: 'GUJCET', language: 'Gujarati' },
  { slug: 'godhra', city: 'Godhra', state: 'Gujarat', tier: 3, lat: 22.7747, lng: 73.6148, exams: ['jee', 'neet'], board: 'Gujarat Board', stateExam: 'GUJCET', language: 'Gujarati' },
  { slug: 'nadiad', city: 'Nadiad', state: 'Gujarat', tier: 3, lat: 22.6916, lng: 72.8634, exams: ['jee', 'neet'], board: 'Gujarat Board', stateExam: 'GUJCET', language: 'Gujarati' },
  { slug: 'veraval', city: 'Veraval', state: 'Gujarat', tier: 3, lat: 20.9066, lng: 70.3678, exams: ['jee', 'neet'], board: 'Gujarat Board', stateExam: 'GUJCET', language: 'Gujarati' },
  { slug: 'dahod', city: 'Dahod', state: 'Gujarat', tier: 3, lat: 22.8384, lng: 74.2538, exams: ['jee', 'neet'], board: 'Gujarat Board', stateExam: 'GUJCET', language: 'Gujarati' },
  { slug: 'surendranagar-guj', city: 'Surendranagar', state: 'Gujarat', tier: 3, lat: 22.7277, lng: 71.6480, exams: ['jee', 'neet'], board: 'Gujarat Board', stateExam: 'GUJCET', language: 'Gujarati' },

  // ─── MORE ODISHA ──────────────────────────────────────────
  { slug: 'puri', city: 'Puri', state: 'Odisha', tier: 3, lat: 19.8135, lng: 85.8312, exams: ['jee', 'neet'], board: 'Odisha Board', stateExam: 'OJEE', language: 'Odia' },
  { slug: 'koraput', city: 'Koraput', state: 'Odisha', tier: 3, lat: 18.8116, lng: 82.7127, exams: ['jee', 'neet'], board: 'Odisha Board', stateExam: 'OJEE', language: 'Odia' },
  { slug: 'baripada', city: 'Baripada', state: 'Odisha', tier: 3, lat: 21.9322, lng: 86.7200, exams: ['jee', 'neet'], board: 'Odisha Board', stateExam: 'OJEE', language: 'Odia' },
  { slug: 'bhadrak', city: 'Bhadrak', state: 'Odisha', tier: 3, lat: 21.0547, lng: 86.4954, exams: ['jee', 'neet'], board: 'Odisha Board', stateExam: 'OJEE', language: 'Odia' },
  { slug: 'angul', city: 'Angul', state: 'Odisha', tier: 3, lat: 20.8380, lng: 85.0995, exams: ['jee', 'neet'], board: 'Odisha Board', stateExam: 'OJEE', language: 'Odia' },
  { slug: 'kendrapara', city: 'Kendrapara', state: 'Odisha', tier: 3, lat: 20.5028, lng: 86.4192, exams: ['jee', 'neet'], board: 'Odisha Board', stateExam: 'OJEE', language: 'Odia' },

  // ─── MORE JHARKHAND ───────────────────────────────────────
  { slug: 'dumka', city: 'Dumka', state: 'Jharkhand', tier: 3, lat: 24.2640, lng: 87.2490, exams: ['jee', 'neet'], board: 'Jharkhand Board', language: 'Hindi' },
  { slug: 'giridih', city: 'Giridih', state: 'Jharkhand', tier: 3, lat: 24.1863, lng: 86.3025, exams: ['jee', 'neet'], board: 'Jharkhand Board', language: 'Hindi' },
  { slug: 'chaibasa', city: 'Chaibasa', state: 'Jharkhand', tier: 3, lat: 22.5463, lng: 85.8110, exams: ['jee', 'neet'], board: 'Jharkhand Board', language: 'Hindi' },
  { slug: 'ramgarh', city: 'Ramgarh', state: 'Jharkhand', tier: 3, lat: 23.6310, lng: 85.5136, exams: ['jee', 'neet'], board: 'Jharkhand Board', language: 'Hindi' },

  // ─── MORE CHHATTISGARH ────────────────────────────────────
  { slug: 'raigarh', city: 'Raigarh', state: 'Chhattisgarh', tier: 3, lat: 21.8974, lng: 83.3950, exams: ['jee', 'neet'], board: 'CG Board', language: 'Hindi' },
  { slug: 'jagdalpur', city: 'Jagdalpur', state: 'Chhattisgarh', tier: 3, lat: 19.0866, lng: 82.0175, exams: ['jee', 'neet'], board: 'CG Board', language: 'Hindi' },
  { slug: 'ambikapur', city: 'Ambikapur', state: 'Chhattisgarh', tier: 3, lat: 23.1186, lng: 83.1989, exams: ['jee', 'neet'], board: 'CG Board', language: 'Hindi' },
  { slug: 'mahasamund', city: 'Mahasamund', state: 'Chhattisgarh', tier: 3, lat: 21.1106, lng: 82.0976, exams: ['jee', 'neet'], board: 'CG Board', language: 'Hindi' },

  // ─── MORE PUNJAB ──────────────────────────────────────────
  { slug: 'pathankot', city: 'Pathankot', state: 'Punjab', tier: 3, lat: 32.2747, lng: 75.6521, exams: ['jee', 'neet'], board: 'Punjab Board', language: 'Punjabi' },
  { slug: 'moga', city: 'Moga', state: 'Punjab', tier: 3, lat: 30.8096, lng: 75.1741, exams: ['jee', 'neet'], board: 'Punjab Board', language: 'Punjabi' },
  { slug: 'muktsar', city: 'Muktsar', state: 'Punjab', tier: 3, lat: 30.4766, lng: 74.5186, exams: ['jee', 'neet'], board: 'Punjab Board', language: 'Punjabi' },
  { slug: 'kapurthala', city: 'Kapurthala', state: 'Punjab', tier: 3, lat: 31.3809, lng: 75.3808, exams: ['jee', 'neet'], board: 'Punjab Board', language: 'Punjabi' },
  { slug: 'firozpur', city: 'Firozpur', state: 'Punjab', tier: 3, lat: 30.9244, lng: 74.6130, exams: ['jee', 'neet'], board: 'Punjab Board', language: 'Punjabi' },
  { slug: 'sangrur', city: 'Sangrur', state: 'Punjab', tier: 3, lat: 30.2442, lng: 75.8447, exams: ['jee', 'neet'], board: 'Punjab Board', language: 'Punjabi' },

  // ─── MORE HARYANA ─────────────────────────────────────────
  { slug: 'bhiwani', city: 'Bhiwani', state: 'Haryana', tier: 3, lat: 28.7930, lng: 76.1325, exams: ['jee', 'neet'], board: 'Haryana Board', language: 'Hindi' },
  { slug: 'jind', city: 'Jind', state: 'Haryana', tier: 3, lat: 29.3160, lng: 76.3144, exams: ['jee', 'neet'], board: 'Haryana Board', language: 'Hindi' },
  { slug: 'kaithal', city: 'Kaithal', state: 'Haryana', tier: 3, lat: 29.8015, lng: 76.3988, exams: ['jee', 'neet'], board: 'Haryana Board', language: 'Hindi' },
  { slug: 'fatehabad', city: 'Fatehabad', state: 'Haryana', tier: 3, lat: 29.5134, lng: 75.4554, exams: ['jee', 'neet'], board: 'Haryana Board', language: 'Hindi' },
  { slug: 'mahendragarh', city: 'Mahendragarh', state: 'Haryana', tier: 3, lat: 28.2800, lng: 76.1500, exams: ['jee', 'neet'], board: 'Haryana Board', language: 'Hindi' },
  { slug: 'kurukshetra', city: 'Kurukshetra', state: 'Haryana', tier: 3, lat: 29.9695, lng: 76.8783, exams: ['jee', 'neet'], board: 'Haryana Board', language: 'Hindi', nearbyInstitute: 'NIT Kurukshetra' },

  // ─── MORE NRI CITIES ──────────────────────────────────────
  { slug: 'houston', city: 'Houston', state: 'United States', tier: 1, lat: 29.7604, lng: -95.3698, exams: ['jee', 'neet'], board: 'CBSE/AP' },
  { slug: 'chicago', city: 'Chicago', state: 'United States', tier: 1, lat: 41.8781, lng: -87.6298, exams: ['jee', 'neet'], board: 'CBSE/AP' },
  { slug: 'boston', city: 'Boston', state: 'United States', tier: 1, lat: 42.3601, lng: -71.0589, exams: ['jee', 'neet'], board: 'CBSE/AP' },
  { slug: 'dallas', city: 'Dallas', state: 'United States', tier: 1, lat: 32.7767, lng: -96.7970, exams: ['jee', 'neet'], board: 'CBSE/AP' },
  { slug: 'atlanta', city: 'Atlanta', state: 'United States', tier: 1, lat: 33.7490, lng: -84.3880, exams: ['jee', 'neet'], board: 'CBSE/AP' },
  { slug: 'seattle', city: 'Seattle', state: 'United States', tier: 1, lat: 47.6062, lng: -122.3321, exams: ['jee', 'neet'], board: 'CBSE/AP' },
  { slug: 'vancouver', city: 'Vancouver', state: 'Canada', tier: 1, lat: 49.2827, lng: -123.1207, exams: ['jee', 'neet'], board: 'CBSE' },
  { slug: 'calgary', city: 'Calgary', state: 'Canada', tier: 2, lat: 51.0447, lng: -114.0719, exams: ['jee', 'neet'], board: 'CBSE' },
  { slug: 'ottawa', city: 'Ottawa', state: 'Canada', tier: 2, lat: 45.4215, lng: -75.6972, exams: ['jee', 'neet'], board: 'CBSE' },
  { slug: 'manchester', city: 'Manchester', state: 'United Kingdom', tier: 2, lat: 53.4808, lng: -2.2426, exams: ['jee', 'neet'], board: 'CBSE/IGCSE' },
  { slug: 'birmingham-uk', city: 'Birmingham', state: 'United Kingdom', tier: 2, lat: 52.4862, lng: -1.8904, exams: ['jee', 'neet'], board: 'CBSE/IGCSE' },
  { slug: 'edinburgh', city: 'Edinburgh', state: 'United Kingdom', tier: 2, lat: 55.9533, lng: -3.1883, exams: ['jee', 'neet'], board: 'CBSE/IGCSE' },
  { slug: 'perth', city: 'Perth', state: 'Australia', tier: 2, lat: -31.9505, lng: 115.8605, exams: ['jee', 'neet'], board: 'CBSE' },
  { slug: 'brisbane', city: 'Brisbane', state: 'Australia', tier: 2, lat: -27.4698, lng: 153.0251, exams: ['jee', 'neet'], board: 'CBSE' },
  { slug: 'adelaide', city: 'Adelaide', state: 'Australia', tier: 2, lat: -34.9285, lng: 138.6007, exams: ['jee', 'neet'], board: 'CBSE' },
  { slug: 'munich', city: 'Munich', state: 'Germany', tier: 1, lat: 48.1351, lng: 11.5820, exams: ['jee', 'neet'], board: 'CBSE/IB' },
  { slug: 'zurich', city: 'Zurich', state: 'Switzerland', tier: 1, lat: 47.3769, lng: 8.5417, exams: ['jee', 'neet'], board: 'CBSE/IB' },
  { slug: 'vienna', city: 'Vienna', state: 'Austria', tier: 1, lat: 48.2082, lng: 16.3738, exams: ['jee', 'neet'], board: 'CBSE/IB' },
  { slug: 'paris', city: 'Paris', state: 'France', tier: 1, lat: 48.8566, lng: 2.3522, exams: ['jee', 'neet'], board: 'CBSE/IB' },
  { slug: 'madrid', city: 'Madrid', state: 'Spain', tier: 1, lat: 40.4168, lng: -3.7038, exams: ['jee', 'neet'], board: 'CBSE/IB' },
  { slug: 'jeddah', city: 'Jeddah', state: 'Saudi Arabia', tier: 1, lat: 21.4858, lng: 39.1925, exams: ['jee', 'neet'], board: 'CBSE', language: 'Hindi' },
  { slug: 'al-khobar', city: 'Al Khobar', state: 'Saudi Arabia', tier: 2, lat: 26.2361, lng: 50.2083, exams: ['jee', 'neet'], board: 'CBSE', language: 'Hindi' },
  { slug: 'fujairah', city: 'Fujairah', state: 'UAE', tier: 3, lat: 25.1288, lng: 56.3265, exams: ['jee', 'neet'], board: 'CBSE', language: 'Hindi' },
  { slug: 'ajman', city: 'Ajman', state: 'UAE', tier: 2, lat: 25.4052, lng: 55.5136, exams: ['jee', 'neet'], board: 'CBSE', language: 'Hindi' },
  { slug: 'ras-al-khaimah', city: 'Ras Al Khaimah', state: 'UAE', tier: 2, lat: 25.7895, lng: 55.9432, exams: ['jee', 'neet'], board: 'CBSE', language: 'Hindi' },
  { slug: 'taipei', city: 'Taipei', state: 'Taiwan', tier: 1, lat: 25.0330, lng: 121.5654, exams: ['jee', 'neet'], board: 'CBSE' },
  { slug: 'manila', city: 'Manila', state: 'Philippines', tier: 1, lat: 14.5995, lng: 120.9842, exams: ['jee', 'neet'], board: 'CBSE' },
  { slug: 'ho-chi-minh', city: 'Ho Chi Minh City', state: 'Vietnam', tier: 1, lat: 10.8231, lng: 106.6297, exams: ['jee', 'neet'], board: 'CBSE' },
  { slug: 'dar-es-salaam', city: 'Dar es Salaam', state: 'Tanzania', tier: 2, lat: -6.7924, lng: 39.2083, exams: ['jee', 'neet'], board: 'CBSE' },
  { slug: 'johannesburg', city: 'Johannesburg', state: 'South Africa', tier: 1, lat: -26.2041, lng: 28.0473, exams: ['jee', 'neet'], board: 'CBSE' },
  { slug: 'cairo', city: 'Cairo', state: 'Egypt', tier: 1, lat: 30.0444, lng: 31.2357, exams: ['jee', 'neet'], board: 'CBSE' },
  { slug: 'rome', city: 'Rome', state: 'Italy', tier: 1, lat: 41.9028, lng: 12.4964, exams: ['jee', 'neet'], board: 'CBSE/IB' },
  { slug: 'lisbon', city: 'Lisbon', state: 'Portugal', tier: 2, lat: 38.7223, lng: -9.1393, exams: ['jee', 'neet'], board: 'CBSE/IB' },
  { slug: 'stockholm', city: 'Stockholm', state: 'Sweden', tier: 1, lat: 59.3293, lng: 18.0686, exams: ['jee', 'neet'], board: 'CBSE/IB' },
  { slug: 'oslo', city: 'Oslo', state: 'Norway', tier: 2, lat: 59.9139, lng: 10.7522, exams: ['jee', 'neet'], board: 'CBSE/IB' },
  { slug: 'copenhagen', city: 'Copenhagen', state: 'Denmark', tier: 1, lat: 55.6761, lng: 12.5683, exams: ['jee', 'neet'], board: 'CBSE/IB' },
  { slug: 'helsinki', city: 'Helsinki', state: 'Finland', tier: 2, lat: 60.1699, lng: 24.9384, exams: ['jee', 'neet'], board: 'CBSE/IB' },
  { slug: 'dublin', city: 'Dublin', state: 'Ireland', tier: 1, lat: 53.3498, lng: -6.2603, exams: ['jee', 'neet'], board: 'CBSE/IB' },
  { slug: 'warsaw', city: 'Warsaw', state: 'Poland', tier: 2, lat: 52.2297, lng: 21.0122, exams: ['jee', 'neet'], board: 'CBSE/IB' },
  { slug: 'prague', city: 'Prague', state: 'Czech Republic', tier: 2, lat: 50.0755, lng: 14.4378, exams: ['jee', 'neet'], board: 'CBSE/IB' },
  { slug: 'budapest', city: 'Budapest', state: 'Hungary', tier: 2, lat: 47.4979, lng: 19.0402, exams: ['jee', 'neet'], board: 'CBSE/IB' },
];

/** All 500+ new cities, auto-generated from configs */
export const expansionCities: CityData[] = newCityConfigs.map(configToCity);

/** Get all expansion city slugs */
export const EXPANSION_CITY_SLUGS = newCityConfigs.map(c => c.slug);

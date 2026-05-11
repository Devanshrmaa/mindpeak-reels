import type { SEOPageData } from './seoPageData';
import { CURRENT_EXAM_YEAR } from '@/lib/examYears';

/**
 * State-level online-coaching pages.
 *
 * These target online-intent queries ("online JEE coaching for [state] students")
 * rather than local-intent queries ("JEE coaching in [city]"). Each page surfaces
 * factually useful state-specific content: state board vs CBSE syllabus gaps,
 * state entrance exam overlap (KCET, EAMCET, MHT-CET, WBJEE), exam centers,
 * and challenges faced by students in tier-2/3 cities of that state.
 */

const himachalPradeshPage: SEOPageData = {
  slug: 'online-coaching-himachal-pradesh',
  title: `Online JEE & NEET Coaching for Himachal Pradesh Students ${CURRENT_EXAM_YEAR} | MindPeak`,
  description: `Personalized 1-on-1 online JEE & NEET coaching for HP students. Based in Dehra Gopipur, Himachal Pradesh. Daily mentor sessions, NCERT-first approach, flexible schedule. Free trial.`,
  h1: `Online JEE & NEET Coaching for Himachal Pradesh Students`,
  h1Highlight: 'Based in Dehra Gopipur — Built for HP Aspirants',
  heroSubtitle: `MindPeak Institute is headquartered in Dehra Gopipur, Himachal Pradesh. We understand the realities HP students face — long distances to coaching hubs, HPBOSE syllabus gaps, and limited access to expert JEE/NEET mentors. Our 1-on-1 online coaching brings IIT/AIIMS-mentor quality to every district of Himachal.`,
  sections: [
    {
      heading: 'Why HP Students Choose Online 1-on-1 Coaching',
      content: 'Himachal Pradesh has a strong school education system, but JEE/NEET-focused coaching infrastructure is concentrated in just a few cities. Students from Mandi, Shimla, Kangra, Hamirpur, Bilaspur, Una, Solan, and Chamba often face a difficult choice: relocate to Chandigarh, Delhi, or Kota for coaching, or accept lower-quality local options. Online 1-on-1 coaching eliminates this trade-off — the same dedicated mentor, the same adaptive curriculum, available from home.',
      bullets: [
        'No relocation costs — stay with family, save ₹2-4 lakh/year in hostel + mess fees',
        'Mentors familiar with HPBOSE-to-CBSE/NCERT transition challenges',
        'Flexible scheduling around school hours and travel constraints',
        'Reliable even on slow internet — sessions adapt to bandwidth, recordings available offline',
        'Direct WhatsApp doubt resolution under 30 minutes',
      ],
    },
    {
      heading: 'HPBOSE vs CBSE: Syllabus Gaps That Affect JEE/NEET',
      content: `HPBOSE Class 11-12 covers most of the JEE/NEET syllabus, but with key differences. Physics: HPBOSE de-emphasizes Rotational Mechanics depth, Fluid Mechanics, and Modern Physics problem-solving compared to CBSE. Chemistry: Organic reaction mechanisms and Coordination Compounds receive less rigorous treatment. Mathematics: Conic Sections, Three-Dimensional Geometry, and Vector Algebra need supplementary practice for JEE Main/Advanced standards. Biology for NEET: NCERT line-by-line mastery is non-negotiable — our mentors run targeted gap-closing sessions in Week 1-3 of every program.`,
    },
    {
      heading: 'JEE/NEET Exam Centers in Himachal Pradesh',
      content: 'NTA conducts JEE Main and NEET UG at multiple centers across HP each year. Typical exam center cities include Shimla, Solan, Una, Hamirpur, Bilaspur, Kangra, and Kullu. Students should select two preferred cities during registration based on proximity and travel logistics. Centers can change between sessions, so always confirm via the official NTA admit card. We help students prepare a contingency travel plan for the exam window.',
    },
    {
      heading: 'Programs for HP Students',
      bullets: [
        'JEE Target 2-Year Program (Class 11 entry) — strong foundations, gap-closing for HPBOSE students',
        'NEET Target 2-Year Program — NCERT-first with AIIMS-mentor track record',
        '1-Year Intensive (Class 12 / Droppers) — accelerated coverage with weekly mock tests',
        'Subject Crash Courses — single-subject revision for specific weak areas',
        'Free trial class — meet your mentor before committing',
      ],
    },
    {
      heading: 'Online Coaching vs Moving to Chandigarh or Kota',
      table: {
        headers: ['Factor', 'MindPeak Online 1-on-1', 'Chandigarh/Kota Offline'],
        rows: [
          ['Annual Cost', '₹1,30,000 - ₹2,30,000', '₹3,50,000 - ₹6,00,000 (incl. hostel)'],
          ['Attention Per Student', 'Dedicated mentor, daily', 'One teacher per 100-300 students'],
          ['Family Support', 'Live at home', 'Hostel, often first time away'],
          ['Curriculum', 'Adapted to your gaps', 'Fixed for entire batch'],
          ['Mental Health', 'Familiar environment', 'High-pressure isolation'],
          ['Doubt Resolution', '<30 min via WhatsApp', 'Weekly doubt classes only'],
        ],
      },
    },
  ],
  faqs: [
    { q: 'Is MindPeak actually based in Himachal Pradesh?', a: 'Yes. MindPeak Institute is registered in Dehra Gopipur, Himachal Pradesh under the Ministry of MSME, Government of India. Our founders chose HP deliberately to prove that world-class JEE/NEET coaching does not require relocating to Kota or Delhi.' },
    { q: 'My child is in HPBOSE board — will online coaching help close the JEE gap?', a: 'Yes. Our mentors run a diagnostic in week 1 to identify HPBOSE-to-JEE syllabus gaps. Common areas like Rotational Mechanics, Organic reaction mechanisms, and 3D Geometry get extra sessions until the student matches CBSE/JEE expectations.' },
    { q: 'Will slow internet in remote HP areas affect classes?', a: 'Classes are designed for low-bandwidth use. Audio-priority mode works on 2G/3G, video lectures are pre-downloaded for offline revision, and recordings are available indefinitely. We have students attending from villages with intermittent connectivity.' },
    { q: 'How much does online JEE coaching cost compared to going to Kota?', a: 'Our 1-year JEE program is ₹1,30,000 + GST. Comparable Kota coaching costs ₹1,80,000-2,50,000 plus ₹1,50,000-2,00,000 for hostel/mess/travel. HP students save ₹2-4 lakh per year while studying from home.' },
    { q: 'Can I prepare for HP CET alongside JEE?', a: 'Yes. HP does not currently have a separate state engineering CET — students apply through JEE Main scores for HP NITs and engineering colleges. Our JEE coaching directly prepares you for both.' },
    { q: 'Are there testimonials from HP students?', a: 'Yes — we have mentored students from Shimla, Mandi, Hamirpur, Kangra, and Bilaspur. Specific success stories with consent are available on request during the free trial call.' },
  ],
  relatedPages: [
    { label: 'JEE Coaching', href: '/jee-coaching' },
    { label: 'NEET Coaching', href: '/neet-coaching' },
    { label: 'Online vs Offline JEE Coaching', href: '/online-vs-offline-jee-coaching' },
    { label: 'Kota Coaching Alternative', href: '/kota-coaching-alternative' },
    { label: 'Pricing & Programs', href: '/pricing' },
    { label: 'Free Trial Class', href: '/free-trial' },
  ],
  schemaType: 'Course',
};

const karnatakaPage: SEOPageData = {
  slug: 'online-coaching-karnataka',
  title: `Online JEE, NEET & KCET Coaching for Karnataka Students ${CURRENT_EXAM_YEAR} | MindPeak`,
  description: `1-on-1 online coaching for Karnataka JEE, NEET, KCET & COMEDK aspirants. PUC board to JEE transition, daily mentor sessions, weekly mock tests. From Bangalore to Mangalore to Mysore. Free trial.`,
  h1: `Online JEE, NEET & KCET Coaching for Karnataka Students`,
  h1Highlight: 'PUC to JEE Transition, KCET + COMEDK Ready',
  heroSubtitle: `Whether you are aiming for IITs, AIIMS, or a top Karnataka engineering or medical college via KCET or COMEDK, MindPeak's 1-on-1 online coaching covers all three preparation tracks with one dedicated mentor. Built for PUC board students transitioning to JEE/NEET difficulty.`,
  sections: [
    {
      heading: 'Karnataka Students: Three Exam Tracks, One Mentor',
      content: 'Most Karnataka aspirants prepare for multiple entrance exams simultaneously — JEE Main for NITs and IIITs, JEE Advanced for IITs, NEET for medical, plus the state-level KCET and the private-college COMEDK. The syllabi overlap by ~70%, but each exam has its own pattern, difficulty curve, and question style. Batch coaching usually optimizes for one track and treats others as afterthoughts. Our 1-on-1 mentors build an integrated plan that hits all your target exams without sacrificing depth on any.',
      bullets: [
        'Single dedicated mentor handles JEE + KCET / NEET + KCET simultaneously',
        'Weekly mocks alternate between JEE-level, NEET-level, and KCET-level difficulty',
        'COMEDK-specific paper pattern practice in the final 8 weeks',
        'PUC-1 and PUC-2 board exam preparation integrated, not sacrificed',
      ],
    },
    {
      heading: 'Karnataka PUC vs CBSE: What JEE/NEET Aspirants Must Bridge',
      content: 'Karnataka PUC (Pre-University) syllabus aligns roughly with NCERT but diverges in depth and problem style. Physics: PUC emphasizes derivation-heavy theory; JEE/NEET demand fast numerical problem-solving. Chemistry: PUC Organic Chemistry covers fewer reaction mechanisms than NCERT/JEE expects. Mathematics: PUC question style is straightforward; JEE Advanced needs lateral thinking and multi-concept problems. Biology for NEET: PUC content is solid but needs supplementing with NCERT line-by-line mastery and high-volume MCQ practice.',
    },
    {
      heading: 'KCET 2026/27 — Exam Pattern Quick Reference',
      content: 'KCET is conducted by KEA across two days, with separate papers for Physics, Chemistry, Mathematics (engineering aspirants) or Physics, Chemistry, Biology (medical/dental aspirants). Each paper has 60 MCQs over 80 minutes. There is no negative marking. The cutoff for top Karnataka engineering colleges (RVCE, BMSCE, MSRIT) typically requires 140+ marks across PCM. Our mocks simulate this exact pattern weekly during the final 3-month sprint.',
    },
    {
      heading: 'COMEDK UGET — When and Why to Take It',
      content: 'COMEDK UGET is the entrance for private engineering and medical colleges in Karnataka (PES, BMS, MS Ramaiah, Dayananda Sagar, etc.). The exam is in May, typically before JEE Advanced. PCM-only, 180 questions in 3 hours, with negative marking unlike KCET. Students often skip COMEDK assuming KCET covers everything — but COMEDK is your safety net for private-college admission if KCET rank falls short. We schedule one COMEDK-pattern mock per fortnight during the final stretch.',
    },
    {
      heading: 'Why Online Beats Coaching Hubs in Karnataka',
      content: 'Bangalore has well-known coaching institutes, but quality varies dramatically — and the best-known centers charge ₹2.5-4 lakh annually for batch coaching with 100+ students per class. Students in Mangalore, Mysore, Hubli, Belgaum, Dharwad, Davanagere, and Bellary have even fewer high-quality options locally. Online 1-on-1 coaching equalizes access: a student in Karwar gets the same dedicated mentor as one in Indiranagar, at lower cost, without commute.',
      bullets: [
        'No daily 1-2 hour commute through Bangalore traffic',
        'Same mentor quality whether you are in Bangalore or a tier-3 town',
        '40-50% lower cost than reputed Bangalore offline coaching',
        'PUC board prep, KCET prep, and JEE/NEET prep handled by one person',
      ],
    },
  ],
  faqs: [
    { q: 'Can MindPeak prepare me for both JEE and KCET in one program?', a: 'Yes. JEE and KCET have ~80% syllabus overlap. Your mentor builds one integrated curriculum, with KCET-pattern mocks in the final 12 weeks and 2-3 dedicated KCET-style practice sessions per week. There is no separate fee — KCET prep is included in the JEE program.' },
    { q: 'Is online coaching effective for KCET given it tests speed?', a: 'KCET tests speed and accuracy across straightforward MCQs. Our weekly timed mocks, individualized weak-area drills, and mentor-led error analysis build exactly the speed and accuracy KCET rewards. Several of our Karnataka students have crossed the 150-mark threshold for top engineering colleges.' },
    { q: 'My child is in 1st PUC Science — when should we start?', a: 'First PUC (equivalent to Class 11) is the ideal start. Foundations built now in Mechanics, Physical Chemistry, and Calculus pay off across JEE, NEET, KCET, and COMEDK. Starting in 2nd PUC is still effective but requires intensive gap-closing in the first 6-8 weeks.' },
    { q: 'How do you handle PUC board exams alongside JEE prep?', a: 'PUC board exams and JEE Main are scheduled close together. From January onwards, your mentor shifts to alternating board-pattern and JEE-pattern sessions. Board prep is not sacrificed — most of our Karnataka students score 90%+ in PUC alongside JEE qualification.' },
    { q: 'Will MindPeak help with COMEDK preparation specifically?', a: 'Yes. COMEDK has its own pattern (180 questions, 3 hours, negative marking) different from KCET. We include 6-8 COMEDK-pattern full mocks in the program, scheduled in March-May before the exam. Specific topics over-tested by COMEDK get dedicated practice sessions.' },
    { q: 'What is the fee for the Karnataka-focused JEE + KCET program?', a: 'The same as our standard JEE program — ₹1,30,000 + GST for the 1-year intensive or ₹2,30,000 + GST for the 2-year program. KCET and COMEDK preparation is included; there is no separate state-exam fee.' },
  ],
  relatedPages: [
    { label: 'JEE Coaching', href: '/jee-coaching' },
    { label: 'NEET Coaching', href: '/neet-coaching' },
    { label: 'KCET Coaching', href: '/kcet-coaching' },
    { label: 'COMEDK Coaching', href: '/comedk-coaching' },
    { label: 'JEE Coaching in Bangalore', href: '/jee-coaching-in-bangalore' },
    { label: 'Free Trial Class', href: '/free-trial' },
  ],
  schemaType: 'Course',
};

export const stateLandingPages: SEOPageData[] = [
  himachalPradeshPage,
  karnatakaPage,
];

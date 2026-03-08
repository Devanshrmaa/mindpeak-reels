/**
 * Other Exam SEO Landing Pages — 1,000+ words each
 * BITSAT, CUET, WBJEE, MHT-CET, KVPY, ISI, COMEDK, VITEEE, SRMJEEE, KCET, AP EAMCET, TS EAMCET, Olympiad
 */

import { CURRENT_EXAM_YEAR } from '@/lib/examYears';
import type { SEOPageData } from './seoPageData';

const year = CURRENT_EXAM_YEAR;

export const otherExamSEOPages: SEOPageData[] = [
  // ═══════════════════════════════════════════════════
  // BITSAT — 1,200+ words
  // ═══════════════════════════════════════════════════
  {
    slug: 'bitsat-coaching',
    title: `BITSAT Coaching Online ${year} — Score 300+ with 1-on-1 Mentoring | MindPeak`,
    description: `Expert BITSAT ${year} coaching covering Physics, Chemistry, Maths, English & Logical Reasoning. Personalized 1-on-1 mentoring to score 300+ and secure BITS Pilani admission.`,
    h1: 'BITSAT Coaching',
    h1Highlight: `Score 300+ in ${year}`,
    heroSubtitle: `BITSAT demands blazing speed across 5 sections in 3 hours — 1.4 minutes per question versus JEE Main's 2.4 minutes. MindPeak's 1-on-1 mentors build the speed-accuracy balance you need while covering the English & Logical Reasoning sections that pure JEE coaching ignores.`,
    schemaType: 'Course',
    sections: [
      {
        heading: 'Why BITSAT Needs Separate Strategy From JEE',
        content: `Many students assume JEE preparation is enough for BITSAT. While 80% of the PCM syllabus overlaps, BITSAT's unique format makes it a fundamentally different exam. You face 130 questions in 180 minutes — that's roughly 83 seconds per question. Add English Proficiency (15 questions) and Logical Reasoning (10 questions) that JEE never tests, and you have a 25-question gap that can make or break your BITS Pilani dream. MindPeak's dual-track approach covers JEE-level concepts AND BITSAT-specific skills simultaneously.`,
        bullets: [
          '130 questions in 180 minutes — speed is the #1 differentiator',
          'English Proficiency & Logical Reasoning worth 45 marks (11.5% of total) — completely absent in JEE',
          'Bonus questions unlocked if you finish all 130 — can only improve your score',
          'Cutoffs for BITS Pilani CS: 310-330/390 — every mark counts',
          'Computer-based adaptive format with free navigation — practise the interface',
          'Negative marking (−1) punishes random guessing — accuracy over attempts',
        ],
      },
      {
        heading: `BITSAT ${year} Exam Pattern & Marking Scheme`,
        table: {
          headers: ['Section', 'Questions', 'Marks', 'Recommended Time', 'Difficulty vs JEE'],
          rows: [
            ['Physics', '40', '120', '35 min', 'Slightly easier than JEE Main'],
            ['Chemistry', '40', '120', '35 min', 'NCERT-heavy, slightly easier'],
            ['Mathematics', '45', '135', '45 min', 'Similar to JEE Main'],
            ['English Proficiency', '15', '45', '12 min', 'Moderate vocabulary + grammar'],
            ['Logical Reasoning', '10', '30', '10 min', 'Standard LR — practise daily'],
            ['Bonus (if time)', '12', '36', 'Extra', 'Medium-Hard'],
          ],
        },
      },
      {
        heading: 'MindPeak's 4-Phase BITSAT Preparation Strategy',
        content: 'Our mentors follow a structured 4-phase roadmap customised to your starting level:',
        bullets: [
          'Phase 1 (Months 1-3): JEE-level PCM foundation — covers 80% of BITSAT science sections',
          'Phase 2 (Months 4-5): BITSAT-specific speed training — timed drills of 130 questions in 170 minutes',
          'Phase 3 (Month 6): English & LR mastery — vocabulary building, grammar rules, analytical puzzles, series completion',
          'Phase 4 (Final 3 weeks): Full-length BITSAT mocks with bonus round practice — target 140+ attempts with 85%+ accuracy',
        ],
      },
      {
        heading: 'Subject-Wise Weightage & High-Yield Topics',
        content: `Understanding which topics carry maximum marks in BITSAT helps you allocate study time efficiently. Unlike JEE where every chapter matters equally, BITSAT has clear high-frequency zones.`,
        table: {
          headers: ['Subject', 'High-Yield Topics', 'Expected Questions', 'Priority'],
          rows: [
            ['Physics', 'Modern Physics, Electrostatics, Optics', '12-15 from these', 'Very High'],
            ['Chemistry', 'Physical Chemistry (Mole Concept, Equilibrium), Organic Named Reactions', '14-16 from these', 'Very High'],
            ['Mathematics', 'Calculus, Probability, Coordinate Geometry', '15-18 from these', 'Very High'],
            ['English', 'Vocabulary, Reading Comprehension, Grammar Rules', '15 total', 'High — easy marks'],
            ['Logical Reasoning', 'Series, Analogies, Analytical Puzzles', '10 total', 'High — easy marks'],
          ],
        },
      },
      {
        heading: 'Common Mistakes BITSAT Aspirants Make',
        content: 'Based on our analysis of 500+ student mock test patterns:',
        bullets: [
          'Ignoring English & LR until the last week — these 25 questions are the easiest 45 marks in the entire exam',
          'Spending too long on hard Maths problems — skip and return, the bonus round rewards finishing early',
          'Not practising the computer-based interface — BITSAT navigation is different from JEE Main',
          'Treating BITSAT like JEE and spending 3+ minutes per question — you have 1.4 minutes maximum',
          'Forgetting the bonus round exists — finishing 130 questions in 165 minutes unlocks 12 extra questions',
          'Over-relying on JEE Advanced material — BITSAT difficulty is JEE Main level, not Advanced',
        ],
      },
      {
        heading: 'BITSAT vs JEE Main — Key Differences',
        table: {
          headers: ['Parameter', 'BITSAT', 'JEE Main'],
          rows: [
            ['Total Questions', '130 (+12 bonus)', '90'],
            ['Duration', '3 hours', '3 hours'],
            ['Time per Question', '~1.4 min', '~2.4 min'],
            ['Subjects', 'PCM + English + LR', 'PCM only'],
            ['Question Types', 'MCQ only', 'MCQ + Integer type'],
            ['Negative Marking', '−1 for wrong', '−1 for wrong MCQ'],
            ['Mode', 'Online (CBT)', 'Online (CBT)'],
            [`Cutoff (CS, ${year})`, '310-330/390', '250-270/300'],
            ['Conducting Body', 'BITS Pilani', 'NTA'],
          ],
        },
      },
      {
        heading: 'MindPeak BITSAT Results & Success Stories',
        content: `MindPeak students have consistently outperformed batch coaching aspirants in BITSAT. Our top BITSAT score is 342/390, achieved by a student from Pune who was initially scoring 220 in mocks. The secret? Dedicated English + LR training that added 40 marks, and speed drills that unlocked the bonus round. On average, MindPeak BITSAT students improve by 80-100 marks within 3 months of focused coaching.`,
      },
      {
        heading: 'Why 1-on-1 Coaching Beats Batch for BITSAT',
        content: 'Batch coaching centres teach JEE and claim BITSAT is "covered automatically". This leaves students unprepared for:',
        bullets: [
          'The 25 English + LR questions — batch centres don\'t teach these at all',
          'Speed training specific to BITSAT\'s 1.4 min/question pace',
          'Bonus round strategy — when to rush, when to be accurate',
          'Personalised time allocation based on YOUR subject strengths',
          'Interface-specific navigation practice on the actual BITSAT CBT platform',
        ],
      },
    ],
    faqs: [
      { q: `Is BITSAT easier than JEE Main?`, a: `BITSAT questions are individually slightly easier, but the exam is harder overall because of extreme time pressure (1.4 min/question vs 2.4 min). Additionally, BITSAT includes English and Logical Reasoning which JEE Main doesn't test. Students who prepare for JEE Main are typically 70-80% prepared for BITSAT — the remaining 20% needs targeted practice.` },
      { q: `Can I prepare for BITSAT and JEE simultaneously?`, a: `Absolutely — and you should. 80% of BITSAT syllabus overlaps with JEE Main. Your JEE preparation covers Physics, Chemistry, and Mathematics. For BITSAT, you additionally need English Proficiency and Logical Reasoning preparation. MindPeak mentors build an integrated study plan that covers both exams without duplication.` },
      { q: `What BITSAT score is needed for BITS Pilani CS?`, a: `For ${year}, BITS Pilani Computer Science typically requires 310-330/390. Electronics needs 280-300, and Mechanical needs 250-270. BITS Goa and Hyderabad cutoffs are 15-30 marks lower for equivalent branches.` },
      { q: `How is BITSAT different from JEE Advanced?`, a: `BITSAT and JEE Advanced are fundamentally different. JEE Advanced tests deep conceptual understanding with multi-concept problems. BITSAT tests speed and accuracy with straightforward MCQs. Most JEE Advanced toppers also crack BITSAT, but the reverse isn't always true.` },
      { q: `Do I need separate coaching for BITSAT?`, a: `Not entirely separate, but you need BITSAT-specific preparation for English, Logical Reasoning, and speed training. MindPeak integrates this into your JEE schedule — your mentor adds 30-minute daily drills for BITSAT-unique sections starting 3 months before the exam.` },
      { q: `Is BITS Pilani worth it compared to NITs?`, a: `BITS Pilani CS/ECE is generally considered equivalent to or better than top 5 NITs. The campus culture, flexible academic structure, and strong alumni network make BITS a top choice. However, for branches like Mechanical or Civil, top NITs may offer better placement statistics.` },
      { q: `What is the bonus round in BITSAT?`, a: `If you finish all 130 questions with time remaining, BITSAT unlocks 12 bonus questions. These are medium-hard difficulty. Bonus questions can only improve your score — if you get them wrong, your score doesn't decrease. This unique feature rewards speed and is worth 36 marks.` },
      { q: `How many mock tests should I take for BITSAT?`, a: `At least 15-20 full-length BITSAT mocks over 2-3 months. Focus on completing all 130 questions under 170 minutes. Your MindPeak mentor reviews every mock, identifies speed bottlenecks, and adjusts your strategy.` },
    ],
    relatedPages: [
      { label: 'JEE Coaching Programs', href: '/jee-coaching' },
      { label: 'JEE Main Coaching', href: '/jee-main-coaching' },
      { label: 'JEE Practice Questions', href: '/jee-practice' },
      { label: 'JEE PYQ Bank', href: '/jee-pyq' },
      { label: 'VITEEE Coaching', href: '/viteee-coaching' },
      { label: 'View All Courses', href: '/courses' },
      { label: 'Book Free Demo', href: '/free-trial' },
      { label: 'Pricing & Plans', href: '/pricing' },
    ],
  },

  // ═══════════════════════════════════════════════════
  // CUET — 1,200+ words
  // ═══════════════════════════════════════════════════
  {
    slug: 'cuet-coaching',
    title: `CUET Coaching Online ${year} — Crack DU, JNU, BHU with 1-on-1 Mentoring | MindPeak`,
    description: `Personalized CUET ${year} coaching covering Domain Subjects, General Test & Language sections. Score 750+ for Delhi University, JNU, BHU and 200+ central universities.`,
    h1: 'CUET Coaching',
    h1Highlight: `Score 750+ for Top Universities`,
    heroSubtitle: `CUET is the single gateway to 200+ central universities including Delhi University, JNU, BHU, and Jamia. With 12 lakh+ applicants and 95+ percentile cutoffs for top colleges, NCERT mastery alone isn't enough — you need strategic coaching that maximises accuracy under pressure.`,
    schemaType: 'Course',
    sections: [
      {
        heading: 'Why CUET Coaching Is Essential Despite "Easy" Questions',
        content: `CUET questions are NCERT-based — so why do lakhs of students fail to score 750+? Because CUET tests NCERT comprehension at application level, not just recall. The General Test section introduces GK, current affairs, and quantitative reasoning that no textbook covers. And with 95+ percentile cutoffs for DU Hindu College, SRCC, and St. Stephen's, even one wrong answer can cost your dream college. MindPeak's NCERT-deep approach ensures you understand every line, diagram, and table — not just skim the surface.`,
        bullets: [
          '200+ central universities accept CUET scores — the broadest reach of any entrance exam',
          '12 lakh+ applicants for 2 lakh seats — fierce competition for top colleges',
          'NCERT-based but tricky — application-level MCQs from specific NCERT paragraphs',
          'General Test covers current affairs, GK, quantitative reasoning — separate preparation needed',
          'Section-wise time limits — can\'t redistribute time between sections',
          '27 domain subjects available — choose based on your target university',
        ],
      },
      {
        heading: `CUET ${year} Exam Structure`,
        table: {
          headers: ['Section', 'Content', 'Questions (Attempt)', 'Duration', 'Strategy'],
          rows: [
            ['Section IA', 'Language (13 options)', '40 out of 50', '45 min', 'English/Hindi — practise comprehension'],
            ['Section IB', 'Language (20 options)', '40 out of 50', '45 min', 'Optional — skip if not required'],
            ['Section II', 'Domain Subjects (max 6)', '35-40 out of 45-50', '45 min each', 'NCERT Class 12 — line by line'],
            ['Section III', 'General Test', '50 out of 60', '60 min', 'GK + Current Affairs + Reasoning'],
          ],
        },
      },
      {
        heading: 'MindPeak's CUET Strategy for Science Students',
        content: `If you're preparing for JEE or NEET alongside CUET, you're already 70-80% ready for CUET domain subjects. MindPeak mentors add the missing pieces:`,
        bullets: [
          'NCERT line-by-line analysis for domain subjects — identify exam-worthy sentences',
          'General Test preparation: daily 20-minute current affairs + GK quizzes',
          'Language section practice: comprehension passages, verbal ability, inference-based questions',
          'University-specific cutoff tracking — different colleges need different scores',
          'Section-wise time management under strict time limits',
          'Weekly CUET mocks with NTA-identical interface',
        ],
      },
      {
        heading: 'Domain Subject Selection Guide',
        content: `Choosing the right combination of domain subjects is critical for maximising your university options:`,
        table: {
          headers: ['Target Course', 'Recommended Domains', 'Top Universities', 'Expected Cutoff'],
          rows: [
            ['B.Sc Physics', 'Physics, Chemistry, Mathematics', 'DU (Hindu, St. Stephen\'s), BHU', '95+ percentile'],
            ['B.Sc Biology', 'Physics, Chemistry, Biology', 'DU (Miranda House), JNU', '92+ percentile'],
            ['B.Com', 'Accountancy, Business Studies, Economics', 'DU (SRCC, Hindu)', '97+ percentile'],
            ['BA Economics', 'Economics, Mathematics, English', 'DU (LSR, Hindu), JNU', '95+ percentile'],
            ['BA English', 'English, History, Political Science', 'DU (St. Stephen\'s, LSR)', '95+ percentile'],
          ],
        },
      },
      {
        heading: 'Common CUET Mistakes That Cost Admissions',
        bullets: [
          'Skipping General Test preparation — this section decides tie-breakers at top colleges',
          'Over-preparing with JEE/NEET material — CUET strictly follows NCERT, harder books waste time',
          'Ignoring section-wise time limits — you CANNOT transfer unused time between sections',
          'Not practising the NTA interface — the navigation system has quirks you must familiarise with',
          'Choosing too many domain subjects — quality over quantity; focus on 3-4 strong subjects',
          'Neglecting Language section — easy marks that many students underperform in due to zero practice',
        ],
      },
      {
        heading: 'CUET vs JEE Main vs NEET — Comparison',
        table: {
          headers: ['Parameter', 'CUET', 'JEE Main', 'NEET'],
          rows: [
            ['Difficulty Level', 'NCERT Class 12', 'Above NCERT (application)', 'NCERT + moderate application'],
            ['Total Applicants', '12+ lakh', '12+ lakh', '20+ lakh'],
            ['Subjects Tested', 'Choice of 27', 'PCM only', 'PCB only'],
            ['Negative Marking', '−1 for wrong', '−1 for wrong MCQ', '−1 for wrong'],
            ['Used For', '200+ central universities', 'NITs, IIITs, JEE Adv eligibility', 'Medical colleges nationwide'],
            ['Unique Section', 'General Test (GK/CA)', 'Integer-type questions', 'Assertion-Reason'],
          ],
        },
      },
      {
        heading: 'How MindPeak Integrates CUET with JEE/NEET Prep',
        content: `MindPeak doesn't charge extra for CUET preparation. Since our 1-on-1 JEE/NEET coaching already covers NCERT exhaustively, CUET domain subjects are automatically prepared. Your mentor adds targeted sessions for the Language and General Test sections — typically 3-4 hours per week for 2 months before CUET. This gives you a strong backup admission at DU, BHU, or JNU while pursuing your primary IIT/AIIMS goal.`,
      },
    ],
    faqs: [
      { q: 'Is CUET easier than JEE Main?', a: 'Yes, significantly. CUET tests NCERT Class 12 level concepts while JEE Main tests application-based problem-solving well beyond NCERT. However, CUET cutoffs for top DU colleges are extremely competitive (95-99 percentile), so high accuracy is essential despite easier questions.' },
      { q: 'Should JEE/NEET students also prepare for CUET?', a: 'Absolutely. CUET serves as an excellent backup for DU, BHU, and other central universities. If you\'re already preparing for JEE/NEET, you\'re 70-80% ready for CUET domain subjects. You only need additional prep for Language and General Test sections.' },
      { q: 'Which CUET subjects should a science student choose?', a: 'Choose Physics, Chemistry, and Mathematics (for engineering aspirants) or Physics, Chemistry, and Biology (for medical aspirants). Add English as your language and General Test. This combination covers top science courses at DU, BHU, and JNU.' },
      { q: `What CUET score is needed for DU ${year}?`, a: `For top DU colleges like Hindu, SRCC, and St. Stephen's, you typically need 95+ percentile. For science courses at top DU colleges, 90+ percentile is generally competitive. Cut-offs tighten every year.` },
      { q: 'Is CUET coaching necessary?', a: 'For domain subjects, thorough NCERT study is sufficient. However, the General Test and Language sections benefit from structured practice. MindPeak integrates CUET prep into JEE/NEET coaching at no extra cost.' },
      { q: 'How many attempts are allowed in CUET?', a: 'There is no limit on CUET attempts. You can appear every year as long as you meet the eligibility criteria.' },
      { q: 'Can I appear for CUET and JEE in the same year?', a: 'Yes, and MindPeak recommends it. JEE and CUET exam dates don\'t overlap. CUET acts as a safety net for excellent university placements even if JEE doesn\'t go as planned.' },
      { q: 'What is the General Test in CUET?', a: 'The General Test covers General Knowledge, Current Affairs, Quantitative Reasoning, Logical Reasoning, and Data Interpretation. It\'s required by many universities and is a tie-breaker for competitive courses. MindPeak provides daily GK updates and weekly LR practice.' },
    ],
    relatedPages: [
      { label: 'JEE Coaching', href: '/jee-coaching' },
      { label: 'NEET Coaching', href: '/neet-coaching' },
      { label: 'Free Trial Class', href: '/free-trial' },
      { label: 'View All Courses', href: '/courses' },
      { label: 'Pricing & Plans', href: '/pricing' },
      { label: 'BITSAT Coaching', href: '/bitsat-coaching' },
      { label: 'Success Stories', href: '/success-stories' },
      { label: 'Methodology', href: '/methodology' },
    ],
  },

  // ═══════════════════════════════════════════════════
  // WBJEE — 1,200+ words
  // ═══════════════════════════════════════════════════
  {
    slug: 'wbjee-coaching',
    title: `WBJEE Coaching Online ${year} — Jadavpur, IIEST & Top WB Engineering Colleges | MindPeak`,
    description: `Expert WBJEE ${year} coaching with 1-on-1 mentoring. Master the unique 3-category marking system & Math-heavy pattern. Crack Jadavpur University, IIEST Shibpur & 100+ colleges.`,
    h1: 'WBJEE Coaching',
    h1Highlight: `Jadavpur & IIEST Admission`,
    heroSubtitle: `WBJEE is West Bengal's most important engineering entrance — your ticket to Jadavpur University and IIEST Shibpur, two of India's finest engineering colleges. With Mathematics carrying 50% weightage and a unique 3-category marking system, WBJEE rewards strategic preparation over brute-force studying.`,
    schemaType: 'Course',
    sections: [
      {
        heading: 'Why WBJEE Demands Specialised Strategy',
        content: `WBJEE isn't just "easier JEE" — it's a fundamentally different exam. Mathematics carries 100 marks (50% of total) while Physics and Chemistry are 50 marks each. The 3-category question system introduces zero-negative-marking questions that change your attempt strategy completely. And it's an offline OMR-based exam, unlike JEE's computer format. Students who blindly follow JEE strategy for WBJEE leave marks on the table.`,
        bullets: [
          'Mathematics = 50% weightage — double the emphasis compared to JEE Main',
          '3-category marking: Category 1 (1 mark, −0.25), Category 2 (2 marks, no negative), Category 3 (2 marks, no negative)',
          'Offline pen-and-paper exam — OMR sheet practice essential',
          'Difficulty between CBSE boards and JEE Main — concept-focused, not trick-heavy',
          'Gateway to Jadavpur University (ranked top 15 in India) and IIEST Shibpur',
          'Class 11 syllabus carries 55-60% weightage — unlike JEE which tests both years equally',
        ],
      },
      {
        heading: `WBJEE ${year} Exam Pattern`,
        table: {
          headers: ['Paper', 'Subject', 'Cat-1 (1 mark, −0.25)', 'Cat-2 (2 marks, no neg)', 'Cat-3 (2 marks, no neg)', 'Total Marks'],
          rows: [
            ['Paper 1', 'Mathematics', '30 questions', '10 questions', '10 questions', '100 marks'],
            ['Paper 2', 'Physics', '25 questions', '5 questions', '5 questions', '50 marks'],
            ['Paper 2', 'Chemistry', '25 questions', '5 questions', '5 questions', '50 marks'],
            ['Total', 'All', '80 questions', '20 questions', '20 questions', '200 marks'],
          ],
        },
      },
      {
        heading: 'The Zero-Negative-Marking Advantage',
        content: `Category 2 and 3 questions have NO negative marking — this is WBJEE's biggest strategic differentiator. Even if you're unsure, attempting these questions gives you a statistical advantage:`,
        bullets: [
          'Category 2 & 3 combined = 80 marks with ZERO risk of losing marks',
          'Random guessing on 4-option MCQs gives 25% hit rate — that\'s potentially 20 free marks',
          'Intelligent elimination (removing 1-2 wrong options) raises success rate to 33-50%',
          'Most students from JEE coaching skip uncertain questions — WBJEE punishes this habit',
          'MindPeak trains you to attempt ALL Category 2 & 3 questions with structured elimination',
        ],
      },
      {
        heading: 'Math-Heavy Preparation Plan',
        content: 'Since Mathematics carries 50% marks, your study time allocation must reflect this:',
        table: {
          headers: ['Subject', 'High-Yield Chapters', 'Questions Expected', 'Study Time %'],
          rows: [
            ['Calculus', 'Limits, Derivatives, Integrals, Differential Equations', '15-18', '20%'],
            ['Algebra', 'Matrices, Complex Numbers, Quadratics, Progressions', '12-15', '15%'],
            ['Coordinate Geometry', 'Straight Lines, Circles, Conics', '8-10', '10%'],
            ['Trigonometry', 'Properties, Equations, Inverse Trig', '5-7', '5%'],
            ['Physics', 'Mechanics, Electrostatics, Optics', '30-35', '25%'],
            ['Chemistry', 'Physical, Organic, Inorganic', '30-35', '25%'],
          ],
        },
      },
      {
        heading: 'WBJEE vs JEE Main — Strategic Differences',
        table: {
          headers: ['Parameter', 'WBJEE', 'JEE Main'],
          rows: [
            ['Mode', 'Offline (OMR)', 'Online (CBT)'],
            ['Maths Weightage', '50% (100 marks)', '33% (100 marks)'],
            ['Negative Marking', 'Only Cat-1 (−0.25)', '−1 for all MCQs'],
            ['Difficulty', 'Board+ level', 'Above NCERT'],
            ['Time per Question', '~1.5 min', '~2.4 min'],
            ['Top College', 'Jadavpur University', 'NIT Trichy/Warangal'],
            ['Counseling', 'WBJEE Board', 'JoSAA'],
          ],
        },
      },
      {
        heading: 'Common Mistakes in WBJEE Preparation',
        bullets: [
          'Not practising OMR sheets — WBJEE is offline, your JEE online practice doesn\'t fully prepare you',
          'Treating all subjects equally — Maths is 50% of marks, give it 50% of your time',
          'Skipping Cat-2 & Cat-3 questions when unsure — there\'s NO negative marking on these',
          'Using JEE Advanced-level problems — WBJEE is closer to CBSE board difficulty',
          'Ignoring Class 11 syllabus — it carries 55-60% weightage in WBJEE, unlike JEE',
          'Not solving previous year papers — WBJEE question patterns repeat frequently',
        ],
      },
      {
        heading: 'Top Colleges Through WBJEE',
        table: {
          headers: ['College', 'Best Branch', 'Rank Needed', 'Placement Quality'],
          rows: [
            ['Jadavpur University', 'CS/IT', 'Top 100-200', 'Comparable to mid-tier IITs'],
            ['IIEST Shibpur', 'CS/IT', 'Top 200-500', 'Strong — avg 12-15 LPA'],
            ['IEM Kolkata', 'CS/IT', 'Top 1000-2000', 'Good — avg 6-8 LPA'],
            ['Heritage Institute', 'CS', 'Top 2000-3000', 'Growing placements'],
            ['Government College Kalyani', 'All branches', 'Top 3000-5000', 'Government fees advantage'],
          ],
        },
      },
      {
        heading: 'How MindPeak Mentors Optimise WBJEE Scores',
        content: 'MindPeak\'s 1-on-1 mentors create a combined JEE Main + WBJEE strategy specifically for West Bengal students:',
        bullets: [
          'Math-heavy curriculum design reflecting WBJEE\'s 50% Maths weightage',
          'OMR sheet practice sessions — simulate the offline exam experience',
          'Category-wise attempt strategy — maximise marks from zero-negative Cat-2 & Cat-3',
          'Class 11 syllabus emphasis — covering the 55-60% weightage that JEE coaching often rushes',
          'Previous year WBJEE paper solving with mentor-guided analysis',
          'Personalised weak-area targeting — your mentor knows your Maths gaps and fills them daily',
        ],
      },
    ],
    faqs: [
      { q: 'Is WBJEE easier than JEE Main?', a: 'Yes, WBJEE is generally easier than JEE Main. The questions are closer to CBSE board exam difficulty with some application-based problems. However, competition is fierce for Jadavpur University, where you need top 100-200 rank.' },
      { q: 'Can I get into Jadavpur University through WBJEE?', a: 'Yes, Jadavpur University engineering admissions are primarily through WBJEE. For CS at JU, you need rank within top 200. JU is considered among the top 15 engineering colleges in India.' },
      { q: 'Should I prepare separately for WBJEE?', a: 'Not separately, but practice WBJEE-specific mock tests (offline, OMR-based) and understand the unique 3-category marking scheme. Your JEE Main preparation covers 85% of WBJEE syllabus.' },
      { q: 'Is WBJEE only for West Bengal students?', a: 'No, WBJEE is open to students from all states. There is no domicile requirement. However, colleges accessible through WBJEE are primarily in West Bengal.' },
      { q: 'How does WBJEE negative marking work?', a: 'Only Category 1 questions (1 mark each) have −0.25 negative marking. Category 2 (2 marks) and Category 3 (2 marks) have NO negative marking — attempt all of them.' },
      { q: 'What books are best for WBJEE?', a: 'NCERT + HC Verma (Physics), Morrison Boyd (Organic Chemistry), and RD Sharma/Cengage (Mathematics). For WBJEE, you don\'t need Irodov or JEE Advanced-level books.' },
    ],
    relatedPages: [
      { label: 'JEE Coaching', href: '/jee-coaching' },
      { label: 'JEE Main Coaching', href: '/jee-main-coaching' },
      { label: 'JEE Practice Questions', href: '/jee-practice' },
      { label: 'Free Trial Class', href: '/free-trial' },
      { label: 'COMEDK Coaching', href: '/comedk-coaching' },
      { label: 'MHT-CET Coaching', href: '/mht-cet-coaching' },
      { label: 'Pricing & Plans', href: '/pricing' },
      { label: 'Success Stories', href: '/success-stories' },
    ],
  },

  // ═══════════════════════════════════════════════════
  // MHT-CET — 1,200+ words
  // ═══════════════════════════════════════════════════
  {
    slug: 'mht-cet-coaching',
    title: `MHT-CET Coaching Online ${year} — COEP, VJTI & Top Maharashtra Colleges | MindPeak`,
    description: `Expert MHT-CET ${year} coaching with 1-on-1 mentoring. Master the no-negative-marking strategy & Class 12-heavy syllabus. Target COEP Pune, VJTI Mumbai, ICT Mumbai.`,
    h1: 'MHT-CET Coaching',
    h1Highlight: `COEP & VJTI Admission`,
    heroSubtitle: `MHT-CET is Maharashtra's gateway to COEP Pune, VJTI Mumbai, ICT Mumbai, and 400+ engineering colleges. With zero negative marking and 80% weightage on Class 12 syllabus, the right strategy can add 30-40 marks to your score — MindPeak's personalised approach ensures every question attempted is a mark earned.`,
    schemaType: 'Course',
    sections: [
      {
        heading: 'Why MHT-CET Strategy Differs From JEE',
        content: `MHT-CET's three unique features create a fundamentally different exam strategy: ZERO negative marking means you attempt every question. 80% Class 12 weightage means your study time tilts heavily toward recent syllabus. And Mathematics questions are at board level (1 mark each) while Physics/Chemistry are at JEE Main level (2 marks each). Students who apply JEE strategy unchanged to MHT-CET score 30-50 marks below their potential.`,
        bullets: [
          'Zero negative marking — the single biggest scoring advantage in any entrance exam',
          '80% questions from Class 12, 20% from Class 11 — extreme Class 12 bias',
          'Mathematics at board level (1 mark/Q), Physics & Chemistry at JEE Main level (2 marks/Q)',
          'Both Engineering (PCM) and Pharmacy (PCB) use MHT-CET scores',
          'Maharashtra State Board syllabus differs from CBSE in topic organisation',
          '98.5+ percentile needed for COEP CS — every mark matters despite easier questions',
        ],
      },
      {
        heading: `MHT-CET ${year} Exam Pattern`,
        table: {
          headers: ['Subject', 'Questions', 'Marks', 'Duration', 'Difficulty Level'],
          rows: [
            ['Physics', '50', '100 (2 marks each)', '90 min', 'JEE Main level'],
            ['Chemistry', '50', '100 (2 marks each)', '90 min', 'JEE Main level'],
            ['Mathematics', '50', '50 (1 mark each)', '90 min', 'Board exam level'],
            ['Total', '150', '200', '270 min', 'Mixed'],
          ],
        },
      },
      {
        heading: 'The Zero-Negative-Marking Goldmine',
        content: 'MHT-CET\'s zero negative marking transforms your attempt strategy:',
        bullets: [
          'Attempt ALL 150 questions — there is literally zero downside',
          'Even random guessing on 4-option MCQs adds ~37 marks (25% of 150)',
          'Intelligent elimination raises this to 50-60 additional marks',
          'MindPeak trains you in systematic elimination techniques for every question type',
          'Students who attempt everything score 15-20 percentile points higher on average',
        ],
      },
      {
        heading: 'Class 12-Heavy Study Plan',
        content: `Since 80% of MHT-CET comes from Class 12, your preparation priority should reflect this:`,
        table: {
          headers: ['Priority', 'Topics', 'Weightage', 'Study Hours/Week'],
          rows: [
            ['Highest', 'Class 12 Physics (Electro, Optics, Modern)', '~40%', '8-10 hrs'],
            ['Highest', 'Class 12 Chemistry (Electrochemistry, Kinetics, Organic)', '~40%', '8-10 hrs'],
            ['Medium', 'Class 12 Mathematics (Calculus, Probability, Vectors)', '~15%', '4-5 hrs'],
            ['Lower', 'Class 11 Physics & Chemistry', '~5%', '2-3 hrs'],
          ],
        },
      },
      {
        heading: 'Maharashtra Board vs CBSE Students',
        content: 'Both Maharashtra Board and CBSE students can appear for MHT-CET, but the preparation approach differs:',
        bullets: [
          'Maharashtra Board students: Your textbooks directly align with MHT-CET syllabus — supplement with NCERT for completeness',
          'CBSE students: Most topics overlap, but review Maharashtra-specific Chemistry and Biology topics',
          'MindPeak mentors identify board-specific gaps and fill them with targeted sessions',
          'Board mark normalisation affects ranking — maintain strong board performance alongside CET prep',
        ],
      },
      {
        heading: 'Top Colleges Through MHT-CET',
        table: {
          headers: ['College', 'Branch', 'Percentile Needed', 'Avg Package'],
          rows: [
            ['COEP Pune', 'CS/IT', '99+', '15-20 LPA'],
            ['VJTI Mumbai', 'CS/IT', '99+', '14-18 LPA'],
            ['ICT Mumbai', 'Chemical/Pharma', '98.5+', '12-16 LPA'],
            ['PICT Pune', 'CS/IT', '97+', '10-14 LPA'],
            ['MIT Pune', 'CS/IT', '95+', '8-12 LPA'],
          ],
        },
      },
      {
        heading: 'MHT-CET vs JEE Main Comparison',
        table: {
          headers: ['Feature', 'MHT-CET', 'JEE Main'],
          rows: [
            ['Negative Marking', 'None', '−1 per wrong MCQ'],
            ['Class 12 Weightage', '80%', '50%'],
            ['Maths Difficulty', 'Board level', 'Above NCERT'],
            ['Duration', '270 min', '180 min'],
            ['Mode', 'Online (CBT)', 'Online (CBT)'],
            ['Top College', 'COEP Pune', 'NIT Trichy'],
            ['State Focus', 'Maharashtra only', 'All-India'],
          ],
        },
      },
      {
        heading: 'How MindPeak Maximises Your MHT-CET Score',
        content: 'MindPeak mentors design a combined JEE Main + MHT-CET strategy for Maharashtra students:',
        bullets: [
          'Class 12-first curriculum design reflecting MHT-CET\'s 80% weightage',
          'No-negative-marking strategy training — systematic elimination for every question',
          'Board-level Mathematics practice separate from JEE-level — different difficulty targets',
          'Maharashtra Board-specific topic coverage for students on the state board',
          'Weekly MHT-CET format mocks with percentile tracking',
          'COEP/VJTI cutoff analysis and realistic target setting',
        ],
      },
    ],
    faqs: [
      { q: 'Is MHT-CET easier than JEE Main?', a: 'MHT-CET Mathematics is significantly easier (board level). Physics and Chemistry are at JEE Main difficulty but with no negative marking, making the overall exam more scoring. The challenge is speed and high accuracy for competitive percentiles.' },
      { q: 'Can CBSE students appear for MHT-CET?', a: 'Yes, CBSE students can appear for MHT-CET. While the syllabus is based on Maharashtra board, 80-85% overlaps with CBSE. Review Maharashtra-specific topics in Chemistry and Biology.' },
      { q: `What MHT-CET percentile is needed for COEP CS?`, a: `For COEP Pune CS, you typically need 99+ percentile. For VJTI Mumbai CS, 99+ percentile. These are among the most competitive cutoffs in any state-level exam.` },
      { q: 'Should I focus on JEE Main or MHT-CET?', a: 'Prepare for JEE Main as your primary exam — it covers MHT-CET Physics and Chemistry. Add 3-4 weeks of MHT-CET Mathematics practice (board level) and mock tests. MindPeak balances both without separate coaching.' },
      { q: 'Is MHT-CET only for Maharashtra students?', a: 'MHT-CET is open to all Indian students. However, Maharashtra domicile students get preference in seat allocation under state quota (~85% seats). All-India students compete for the remaining seats.' },
      { q: 'Does MHT-CET have negative marking?', a: 'No, MHT-CET has absolutely no negative marking. Attempt every question — this is the single most important strategy.' },
      { q: 'How do I prepare for MHT-CET Maths separately?', a: 'MHT-CET Maths is at board level — don\'t use JEE books. Practise from Maharashtra board textbook exercises, RD Sharma, and MHT-CET previous year papers. MindPeak provides board-level Maths worksheets alongside JEE preparation.' },
    ],
    relatedPages: [
      { label: 'JEE Coaching', href: '/jee-coaching' },
      { label: 'NEET Coaching', href: '/neet-coaching' },
      { label: 'Free Trial Class', href: '/free-trial' },
      { label: 'WBJEE Coaching', href: '/wbjee-coaching' },
      { label: 'COMEDK Coaching', href: '/comedk-coaching' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'View All Courses', href: '/courses' },
      { label: 'Success Stories', href: '/success-stories' },
    ],
  },

  // ═══════════════════════════════════════════════════
  // KVPY — 1,200+ words
  // ═══════════════════════════════════════════════════
  {
    slug: 'kvpy-coaching',
    title: `KVPY / INSPIRE Coaching Online ${year} — Research Fellowship & IISc Admission | MindPeak`,
    description: `Expert KVPY/INSPIRE coaching with 1-on-1 mentoring by IISc & IISER alumni. Prepare for aptitude test + interview. Win India's most prestigious science fellowship.`,
    h1: 'KVPY / INSPIRE',
    h1Highlight: 'Research Fellowship Coaching',
    heroSubtitle: `KVPY (now INSPIRE) is India's most prestigious science fellowship — a monthly stipend from school to PhD, priority admission to IISc Bangalore and IISERs, and recognition as one of India's brightest young scientists. MindPeak's research-focused mentors (IISc & IISER alumni) prepare you for both the aptitude test and the interview round that no batch coaching covers.`,
    schemaType: 'Course',
    sections: [
      {
        heading: 'Why KVPY/INSPIRE Is Different From Every Other Exam',
        content: `KVPY doesn't test your ability to solve 300 problems in 3 hours. It tests whether you THINK like a scientist. Questions are conceptual, creative, and often require 5-10 minutes of deep reasoning — the opposite of JEE's speed-focused approach. Additionally, the interview round (unique among all Indian competitive exams) tests your scientific curiosity, ability to derive formulas from first principles, and comfort with saying "I don't know, but here's how I'd approach it."`,
        bullets: [
          'Tests scientific aptitude and reasoning — not just problem-solving speed',
          'All 4 sciences tested: Physics, Chemistry, Mathematics, AND Biology',
          'Interview round contributes to final selection — no other entrance exam has this',
          'Fellowship: ₹5,000-7,000/month from Class 11 to pre-PhD + annual contingency grant',
          'Direct pathway to IISc Bangalore (India\'s #1 research institution) and all 7 IISERs',
          'Only 55% overlap with JEE — 45% requires unique preparation',
        ],
      },
      {
        heading: 'KVPY/INSPIRE Exam Structure',
        table: {
          headers: ['Component', 'Stream SA (Class 11)', 'Stream SX (Class 12)', 'Marks'],
          rows: [
            ['Part 1 (All subjects)', '15 Q × 4 subjects = 60', '20 Q × 4 subjects = 80', '60-80'],
            ['Part 2 (Any 2 subjects)', '5 Q × 2 subjects = 10', '5 Q × 2 subjects = 10', '10-20'],
            ['Total', '70 questions', '90 questions', '100'],
            ['Duration', '3 hours', '3 hours', '—'],
            ['Negative Marking', '−0.25 for wrong', '−0.25 for wrong', '—'],
            ['Interview', 'For shortlisted students', 'For shortlisted students', 'Weighted'],
          ],
        },
      },
      {
        heading: 'How KVPY Preparation Differs From JEE',
        content: 'Students who excel in JEE often struggle with KVPY because the skills tested are fundamentally different:',
        table: {
          headers: ['Skill', 'JEE Approach', 'KVPY Approach'],
          rows: [
            ['Problem Solving', 'Speed + formula application', 'Deep reasoning + intuition'],
            ['Biology', 'Not tested', 'Compulsory (25% of marks)'],
            ['Mathematics', 'Computational', 'Number theory, combinatorics, proof-style'],
            ['Time Per Question', '2-3 minutes', '5-10 minutes'],
            ['Interview', 'Not applicable', 'Critical — tests scientific thinking'],
          ],
        },
      },
      {
        heading: 'MindPeak's KVPY Preparation Roadmap',
        bullets: [
          'Phase 1 (Months 1-3): Build JEE-level PCM foundation + introduce Biology fundamentals',
          'Phase 2 (Months 4-6): Deep conceptual preparation — derive formulas from first principles, explore "why" behind every concept',
          'Phase 3 (Month 7-8): Previous year KVPY paper practice (2010-2022) + Olympiad-style problems',
          'Phase 4 (Final month): Mock interviews with IISc/IISER alumni mentors — practise explaining concepts, handling unknown questions, and scientific curiosity demonstration',
        ],
      },
      {
        heading: 'Biology Preparation for JEE Students',
        content: 'If you\'re primarily a JEE student, Biology is your biggest KVPY gap. Here\'s how to bridge it efficiently:',
        bullets: [
          'Focus on NCERT Biology Class 11 & 12 — KVPY Biology is entirely NCERT-based',
          'Key chapters: Cell Biology, Genetics, Ecology, Evolution, Plant Physiology',
          'KVPY Biology tests understanding, not memorization — focus on "why" questions',
          'Allocate 30-45 minutes daily for Biology reading for 3-4 months before KVPY',
          'MindPeak mentors quiz you on Biology concepts in every session to build retention',
        ],
      },
      {
        heading: 'Interview Preparation — The Hidden Differentiator',
        content: 'The interview round is what makes KVPY unique. It\'s not a viva — it\'s a scientific discussion:',
        bullets: [
          'Be ready to derive any formula from first principles',
          'Practise answering "why" questions: Why is the sky blue? Why do metals conduct?',
          'It\'s okay to say "I don\'t know" — but always follow with your approach to finding out',
          'Show genuine scientific curiosity — mention research papers you\'ve read, experiments you\'ve done',
          'MindPeak conducts 5+ mock interviews with IISc alumni before the actual interview',
        ],
      },
      {
        heading: 'Fellowship Benefits',
        table: {
          headers: ['Level', 'Monthly Stipend', 'Annual Contingency', 'Duration'],
          rows: [
            ['B.Sc / B.S / Integrated M.S', '₹5,000', '₹20,000', '3-5 years'],
            ['M.Sc', '₹7,000', '₹28,000', '2 years'],
            ['Pre-PhD', '₹7,000', '₹28,000', 'Until joining PhD'],
          ],
        },
      },
    ],
    faqs: [
      { q: 'Is KVPY still conducted?', a: `KVPY in its original form was discontinued after 2022. The INSPIRE fellowship program by DST continues with similar objectives. IISc and IISERs now use JEE Advanced, NEET, and their own aptitude tests. MindPeak prepares for all these pathways.` },
      { q: 'Is KVPY harder than JEE Main?', a: 'KVPY questions are conceptually harder and more creative than JEE Main, but there are fewer questions and less time pressure. KVPY tests depth of understanding while JEE Main tests breadth and speed.' },
      { q: 'What is IISc Bangalore?', a: 'IISc is India\'s top research institution, consistently ranked #1 for research output. It offers integrated B.Sc-M.Sc programs in fundamental sciences. Very different from IITs — focused on research and academics.' },
      { q: 'Can JEE students crack KVPY without extra prep?', a: 'JEE covers about 60-65% of KVPY. You need additional preparation in Biology, Number Theory, and conceptual reasoning. 3-4 months of dedicated KVPY-specific practice alongside JEE coaching is recommended.' },
      { q: 'What is the KVPY fellowship amount?', a: '₹5,000/month during B.Sc and ₹7,000/month during M.Sc, with annual contingency grants of ₹20,000-28,000. The fellowship continues till pre-PhD level.' },
      { q: 'How to prepare for KVPY interview?', a: 'Practice explaining concepts from first principles, solve "why" questions, and demonstrate scientific curiosity. MindPeak conducts mock interviews with IISc alumni mentors.' },
    ],
    relatedPages: [
      { label: 'JEE Coaching', href: '/jee-coaching' },
      { label: 'Olympiad Coaching', href: '/olympiad-coaching' },
      { label: 'Foundation Coaching', href: '/foundation-coaching' },
      { label: 'ISI Entrance Coaching', href: '/isi-entrance-coaching' },
      { label: 'Free Trial', href: '/free-trial' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },

  // ═══════════════════════════════════════════════════
  // ISI — 1,200+ words
  // ═══════════════════════════════════════════════════
  {
    slug: 'isi-entrance-coaching',
    title: `ISI Entrance Coaching Online ${year} — Crack B.Stat & B.Math at Indian Statistical Institute | MindPeak`,
    description: `Expert ISI entrance coaching with 1-on-1 mentoring by ISI alumni & Olympiad medalists. Master proof-based problems, combinatorics & number theory for B.Stat/B.Math admission.`,
    h1: 'ISI Entrance Coaching',
    h1Highlight: 'B.Stat & B.Math',
    heroSubtitle: `ISI (Indian Statistical Institute) is among the world's most prestigious mathematics institutions. The entrance exam tests mathematical maturity — your ability to construct rigorous proofs, reason abstractly, and solve problems that have no formulaic approach. MindPeak connects you with Olympiad-trained mentors who have cracked ISI themselves.`,
    schemaType: 'Course',
    sections: [
      {
        heading: 'Why ISI Entrance Demands Specialised Mentoring',
        content: `ISI entrance is NOT a faster version of JEE Maths. It's a completely different beast. While JEE tests computational speed across 90 problems, ISI gives you 8 subjective problems where you must write complete, rigorous mathematical proofs. There are no MCQs in the subjective paper — just blank pages where the beauty and clarity of your mathematical argument determines your score. This skill cannot be developed in batch coaching where the focus is formulaic speed.`,
        bullets: [
          'Subjective paper: 8 questions requiring full mathematical proofs',
          'Topics include Olympiad-level Combinatorics, Number Theory — not in JEE syllabus at all',
          'Difficulty between JEE Advanced and International Mathematical Olympiad (IMO)',
          '70% Mathematics focus — neither Physics nor Chemistry are tested',
          'Interview for shortlisted candidates — tests mathematical thinking in person',
          'Only 50% overlap with JEE — 50% requires completely new preparation',
        ],
      },
      {
        heading: `ISI ${year} Exam Pattern`,
        table: {
          headers: ['Paper', 'Type', 'Questions', 'Duration', 'Key Focus'],
          rows: [
            ['Paper 1 (UGA)', 'Objective MCQ', '30 questions', '2 hours', 'Speed + accuracy, moderate difficulty'],
            ['Paper 2 (UGB)', 'Subjective Proofs', '8 questions', '2 hours', 'Rigour, clarity, mathematical beauty'],
            ['Interview', 'In-person', '—', '15-20 min', 'Mathematical thinking, problem approach'],
          ],
        },
      },
      {
        heading: 'How ISI Maths Differs From JEE Maths',
        table: {
          headers: ['Topic', 'JEE Treatment', 'ISI Treatment'],
          rows: [
            ['Combinatorics', 'Basic P&C, Binomial', 'Olympiad-level counting, bijections, generating functions'],
            ['Number Theory', 'Not tested', 'Divisibility, modular arithmetic, Fermat\'s little theorem'],
            ['Algebra', 'Equations, Matrices', 'Polynomial theory, inequalities, functional equations'],
            ['Geometry', 'Coordinate geometry', 'Euclidean proofs, transformations'],
            ['Calculus', 'Computational', 'ε-δ definitions, rigorous proofs'],
            ['Probability', 'Basic problems', 'Formal theory, random variables, distributions'],
          ],
        },
      },
      {
        heading: 'MindPeak's ISI Preparation Track',
        content: 'Our ISI mentors are ISI/CMI alumni or International Olympiad participants:',
        bullets: [
          'Phase 1: Build JEE Maths foundation + introduce proof-writing techniques',
          'Phase 2: Olympiad-level Combinatorics & Number Theory — Engel, Pranesachar, AoPS resources',
          'Phase 3: ISI previous year papers (15+ years) with mentor-guided solution discussions',
          'Phase 4: Subjective paper practice — write proofs, get feedback on rigour and elegance',
          'Phase 5: Mock interviews with ISI alumni mentors',
        ],
      },
      {
        heading: 'Essential ISI Preparation Resources',
        table: {
          headers: ['Book', 'Topic', 'Level', 'Usage'],
          rows: [
            ['Challenge & Thrill of Pre-College Mathematics', 'All', 'Foundation', 'Start here — gold standard'],
            ['Problem Solving Strategies (Engel)', 'All', 'Advanced', 'After completing Pranesachar'],
            ['ISI Previous Years (2008-present)', 'All', 'Exam-specific', 'Essential — solve every paper'],
            ['Art of Problem Solving (AoPS)', 'Combinatorics, NT', 'Intermediate-Advanced', 'Online community + resources'],
            ['Mathematical Circles (Fomin)', 'Problem-solving', 'Intermediate', 'Develop mathematical thinking'],
          ],
        },
      },
      {
        heading: 'Career After ISI — Why It\'s Worth the Effort',
        content: 'ISI graduates have extraordinary career prospects that rival or exceed IIT placements:',
        bullets: [
          'Quantitative finance: Goldman Sachs, Morgan Stanley, DE Shaw — packages 30-50 LPA',
          'Data science: Google, Amazon, Microsoft, Facebook — packages 25-40 LPA',
          'Research: Top PhD programs worldwide (MIT, Stanford, Princeton accept ISI graduates regularly)',
          'Government: Indian Statistical Service — prestigious and well-compensated',
          'Academia: IISc, IITs, IISERs actively recruit ISI alumni for faculty positions',
        ],
      },
      {
        heading: 'Proof-Writing — The Skill That Decides ISI Selection',
        content: 'In ISI\'s subjective paper, a correct answer with a poor proof scores less than an incomplete answer with elegant reasoning:',
        bullets: [
          'Start with a clear statement of what you\'re proving',
          'Define all variables and constraints explicitly',
          'Use logical connectives properly (if...then, for all, there exists)',
          'Each step must follow logically from the previous — no hand-waving',
          'End with a clear conclusion that directly addresses the question',
          'MindPeak mentors grade your proofs for rigour, not just correctness',
        ],
      },
    ],
    faqs: [
      { q: 'Is ISI harder than IIT?', a: 'ISI entrance is mathematically harder than JEE Advanced in conceptual depth. However, it only tests Mathematics, while JEE tests Physics and Chemistry too. A JEE Advanced topper may struggle with ISI without specific preparation.' },
      { q: 'What is ISI famous for?', a: 'ISI is the world\'s first and India\'s premier institution for Statistics and Mathematics. Founded by P.C. Mahalanobis, ISI alumni lead global companies, research institutions, and policy organizations.' },
      { q: 'Can JEE students crack ISI?', a: 'JEE covers about 40-50% of ISI syllabus. You need deep preparation in proof-based problems, Olympiad combinatorics, number theory, and formal probability — 4-6 months of dedicated ISI preparation alongside JEE.' },
      { q: 'What career options exist after ISI?', a: 'Exceptional prospects: data science at top tech companies, quantitative roles at investment banks, research at global universities, and government statistical services. Packages comparable to IIT Bombay CS.' },
      { q: 'Is there an interview for ISI admission?', a: 'Yes, shortlisted candidates are called for a personal interview at ISI Kolkata. It tests mathematical thinking, problem-solving approach, and genuine interest in statistics/mathematics.' },
      { q: 'How many seats does ISI B.Stat have?', a: 'ISI B.Stat/B.Math has approximately 45-50 seats at the Kolkata campus. This makes it one of the most selective programs in India with an acceptance rate below 1%.' },
    ],
    relatedPages: [
      { label: 'JEE Mathematics Coaching', href: '/jee-mathematics-coaching' },
      { label: 'Olympiad Coaching', href: '/olympiad-coaching' },
      { label: 'JEE Advanced Coaching', href: '/jee-advanced-coaching' },
      { label: 'KVPY Coaching', href: '/kvpy-coaching' },
      { label: 'Free Trial', href: '/free-trial' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },

  // ═══════════════════════════════════════════════════
  // COMEDK — 1,200+ words
  // ═══════════════════════════════════════════════════
  {
    slug: 'comedk-coaching',
    title: `COMEDK Coaching Online ${year} — RV College, BMS, PES & Top Bangalore Colleges | MindPeak`,
    description: `Expert COMEDK UGET ${year} coaching with 1-on-1 mentoring. No negative marking strategy. Target RV College, BMS, PES University & 190+ Karnataka engineering colleges.`,
    h1: 'COMEDK Coaching',
    h1Highlight: 'Bangalore Engineering Colleges',
    heroSubtitle: `COMEDK UGET is Karnataka's gateway to 190+ private engineering colleges — including RV College, BMS, PES University, and MS Ramaiah, all in Bangalore with excellent placement records. With zero negative marking and JEE-level difficulty, the right strategy can catapult your rank by 1000+ positions.`,
    schemaType: 'Course',
    sections: [
      {
        heading: 'Why Bangalore Engineering Through COMEDK',
        content: `Bangalore is India's Silicon Valley — and COMEDK colleges sit right in its heart. RVCE, BMS, and PES placements compete with mid-tier NITs, with companies like Google, Amazon, Microsoft, and Flipkart hiring directly from campus. COMEDK gives you access to these colleges without relocating to Kota or competing in the all-India JEE pool.`,
        bullets: [
          '190+ member engineering colleges across Karnataka',
          'Top colleges: RVCE, BMS, PES, MSRIT — all in Bangalore with 10-20 LPA avg packages',
          'No negative marking — attempt every question for maximum advantage',
          'JEE Main preparation covers 80% of COMEDK syllabus',
          'All 180 questions worth 1 mark each — every question equally important',
          'Separate counseling from JoSAA — additional admission opportunity',
        ],
      },
      {
        heading: `COMEDK ${year} Exam Pattern`,
        table: {
          headers: ['Subject', 'Questions', 'Marks', 'Difficulty', 'Time Strategy'],
          rows: [
            ['Physics', '60', '60', 'Board+ to JEE Main−', '50 min'],
            ['Chemistry', '60', '60', 'Board+ to JEE Main−', '50 min'],
            ['Mathematics', '60', '60', 'Board+ to JEE Main−', '55 min'],
            ['Total', '180', '180', 'Between Board & JEE Main', '155 min + 25 min review'],
          ],
        },
      },
      {
        heading: 'No-Negative-Marking Strategy',
        content: 'COMEDK\'s zero negative marking is your biggest scoring lever:',
        bullets: [
          'Attempt ALL 180 questions — zero downside for wrong answers',
          'Build elimination skills: remove 2 wrong options → 50% chance on remaining 2',
          'Start with easy questions in each subject — build confidence and bank marks',
          'Return to hard questions in the final 30 minutes — guess intelligently if needed',
          'MindPeak\'s mock tests train this exact strategy — attempt-everything mindset',
        ],
      },
      {
        heading: 'Subject-Wise High-Yield Topics',
        table: {
          headers: ['Subject', 'High-Yield Chapters', 'Expected Questions', 'Preparation Priority'],
          rows: [
            ['Physics', 'Mechanics, Electrostatics, Optics, Modern Physics', '25-30', 'JEE Main level practice'],
            ['Chemistry', 'Organic Named Reactions, Equilibrium, Electrochemistry', '25-30', 'NCERT + basic JEE'],
            ['Mathematics', 'Calculus, Algebra, Coordinate Geometry, Probability', '25-30', 'NCERT + JEE Main level'],
          ],
        },
      },
      {
        heading: 'Top COMEDK Colleges — Cutoffs & Placements',
        table: {
          headers: ['College', 'CS Rank Needed', 'Avg Package', 'Top Recruiters'],
          rows: [
            ['RV College (RVCE)', 'Top 300-500', '14-18 LPA', 'Google, Amazon, Microsoft'],
            ['BMS College', 'Top 600-800', '12-15 LPA', 'Flipkart, Infosys, TCS'],
            ['PES University', 'Top 800-1200', '10-14 LPA', 'Amazon, Cisco, Oracle'],
            ['MS Ramaiah (MSRIT)', 'Top 1000-1200', '8-12 LPA', 'Wipro, TCS, Cognizant'],
            ['Dayananda Sagar', 'Top 2000-3000', '6-8 LPA', 'Infosys, Wipro, HCL'],
          ],
        },
      },
      {
        heading: 'COMEDK vs KCET — Which Is More Important?',
        table: {
          headers: ['Parameter', 'COMEDK', 'KCET'],
          rows: [
            ['Colleges', 'Private only (190+)', 'Government + few private'],
            ['Mode', 'Online (CBT)', 'Offline (OMR)'],
            ['Negative Marking', 'None', 'None'],
            ['Board Marks Weightage', '0%', '50%'],
            ['Domicile Required?', 'No', 'Yes (Karnataka)'],
            ['Top College', 'RVCE (private)', 'UVCE (government)'],
          ],
        },
      },
      {
        heading: 'MindPeak's COMEDK Optimisation Strategy',
        bullets: [
          'JEE Main coaching serves as foundation — covers 80% of COMEDK syllabus',
          'COMEDK-specific mock tests with no-negative-marking strategy training',
          'Speed optimisation: target finishing 180 questions in 155 minutes, 25 min for review',
          'Previous year COMEDK paper analysis — patterns and difficulty distribution',
          'Karnataka board students: supplement board textbooks with NCERT for complete coverage',
          'Personalised rank-to-college mapping based on your mock test scores',
        ],
      },
    ],
    faqs: [
      { q: 'Is COMEDK easier than JEE Main?', a: 'Yes, COMEDK is easier than JEE Main. Questions are at intermediate level between board exams and JEE Main. The lack of negative marking makes it even more scoring with the right strategy.' },
      { q: 'Which are the best COMEDK colleges?', a: 'RV College (RVCE), BMS College, PES University, MS Ramaiah — all in Bangalore. RVCE and BMS CS placements compete with mid-tier NITs.' },
      { q: 'Is COMEDK only for Karnataka students?', a: 'No, COMEDK is open to all states. All colleges are in Karnataka (mostly Bangalore). No domicile requirement.' },
      { q: 'What COMEDK rank for RVCE CS?', a: 'Top 300-500 rank typically. For BMS CS, top 600-800. Cutoffs vary yearly.' },
      { q: 'Can I appear for both JEE Main and COMEDK?', a: 'Yes, most Karnataka aspirants appear for both. Exams are on different dates and JEE prep covers COMEDK syllabus.' },
      { q: 'Does COMEDK have negative marking?', a: 'No, COMEDK has absolutely no negative marking. Attempt all 180 questions.' },
    ],
    relatedPages: [
      { label: 'JEE Coaching', href: '/jee-coaching' },
      { label: 'KCET Coaching', href: '/kcet-coaching' },
      { label: 'VITEEE Coaching', href: '/viteee-coaching' },
      { label: 'Free Trial', href: '/free-trial' },
      { label: 'JEE Practice Questions', href: '/jee-practice' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'View All Courses', href: '/courses' },
      { label: 'Success Stories', href: '/success-stories' },
    ],
  },

  // ═══════════════════════════════════════════════════
  // VITEEE — 1,200+ words
  // ═══════════════════════════════════════════════════
  {
    slug: 'viteee-coaching',
    title: `VITEEE Coaching Online ${year} — VIT Vellore CS with 1-on-1 Mentoring | MindPeak`,
    description: `Expert VITEEE ${year} coaching. Covers PCM + Aptitude sections. Score 110+ for VIT Vellore CS admission. No negative marking. Scholarship opportunities with 115+ score.`,
    h1: 'VITEEE Coaching',
    h1Highlight: `VIT Vellore Admission ${year}`,
    heroSubtitle: `VIT Vellore is consistently ranked among India's top 15 engineering colleges with Google, Amazon, and Microsoft hiring from campus. VITEEE — the gateway exam — is easier than JEE Main but has a unique Aptitude section that catches JEE-focused students off guard. MindPeak's 1-on-1 approach covers all 5 sections for a confident 110+ score.`,
    schemaType: 'Course',
    sections: [
      {
        heading: 'Why VIT Vellore Through VITEEE',
        content: `VIT Vellore is India's top private engineering college by most rankings. CS placements include 20-40 LPA packages from top tech companies. VITEEE gives you direct access — but with 3 lakh+ applicants, scoring 110+/125 for CS requires strategic preparation, not just JEE overflow study.`,
        bullets: [
          'VIT Vellore: ranked top 15 in India, CS placements 15-40 LPA',
          '4 campuses: Vellore (flagship), Chennai, Bhopal, AP',
          'Unique Aptitude section (Verbal + Quantitative + LR) — 10 questions, 10 marks',
          'English Proficiency section — 5 questions, 5 marks',
          'No negative marking — attempt every question',
          '2-3 week exam window — choose your date for optimal performance',
          'Merit scholarships for 115+ scores — up to 100% tuition waiver',
        ],
      },
      {
        heading: `VITEEE ${year} Exam Pattern`,
        table: {
          headers: ['Section', 'Questions', 'Marks', 'Difficulty', 'Time Allocation'],
          rows: [
            ['Mathematics/Biology', '40', '40', 'NCERT to moderate', '50 min'],
            ['Physics', '35', '35', 'NCERT to moderate', '40 min'],
            ['Chemistry', '35', '35', 'NCERT-based', '40 min'],
            ['English', '5', '5', 'Basic grammar + comprehension', '5 min'],
            ['Aptitude', '10', '10', 'Standard LR/QA', '15 min'],
            ['Total', '125', '125', 'Below JEE Main', '150 min'],
          ],
        },
      },
      {
        heading: 'Aptitude & English — The 15 Easy Marks JEE Students Lose',
        content: 'VITEEE\'s Aptitude (10 marks) and English (5 marks) are gift marks for prepared students:',
        bullets: [
          'English: Basic grammar, vocabulary, reading comprehension — 10 minutes of practice daily for 2 weeks',
          'Aptitude: Series completion, analogies, coding-decoding, data sufficiency — similar to bank exam LR',
          'These 15 marks separate VIT Vellore CS (110+) from VIT Chennai CS (100+)',
          'Batch coaching NEVER covers these sections — MindPeak adds them 2-3 weeks before VITEEE',
          'Practise from RS Aggarwal Verbal and Non-Verbal Reasoning for aptitude section',
        ],
      },
      {
        heading: 'VIT Campus Comparison & Cutoffs',
        table: {
          headers: ['Campus', 'CS Cutoff', 'ECE Cutoff', 'Avg Package', 'Tier'],
          rows: [
            ['VIT Vellore', '108-115/125', '100-108/125', '15-20 LPA', 'Flagship'],
            ['VIT Chennai', '100-108/125', '92-100/125', '10-15 LPA', 'Tier 2'],
            ['VIT AP', '90-100/125', '85-92/125', '8-12 LPA', 'Tier 3'],
            ['VIT Bhopal', '85-95/125', '80-88/125', '6-10 LPA', 'Tier 3'],
          ],
        },
      },
      {
        heading: 'Scholarship Opportunities Through VITEEE Score',
        table: {
          headers: ['VITEEE Score Range', 'Scholarship', 'Approximate Savings'],
          rows: [
            ['Top rank holders', '100% tuition waiver', '~₹8 lakh over 4 years'],
            ['115+', '75% tuition waiver', '~₹6 lakh'],
            ['110+', '50% tuition waiver', '~₹4 lakh'],
            ['105+', '25% tuition waiver', '~₹2 lakh'],
          ],
        },
      },
      {
        heading: 'VITEEE vs Other Private University Exams',
        table: {
          headers: ['Parameter', 'VITEEE', 'SRMJEEE', 'BITSAT'],
          rows: [
            ['Difficulty', 'Below JEE Main', 'Board level', 'Slightly below JEE Main'],
            ['Unique Sections', 'Aptitude + English', 'English + Aptitude', 'English + LR'],
            ['Negative Marking', 'None', 'None', '−1 per wrong'],
            ['Top College Rank (NIRF)', 'Top 15', 'Top 25', 'Top 10'],
            ['Exam Window', '2-3 weeks', '3-4 phases', 'Fixed dates'],
            ['CS Cutoff', '108-115/125', '95-105/125', '310-330/390'],
          ],
        },
      },
      {
        heading: 'MindPeak's VITEEE Score Maximisation Plan',
        bullets: [
          'JEE preparation covers 80% of VITEEE PCM — no extra effort needed',
          'Targeted Aptitude + English sessions: 30 min/day for 2-3 weeks pre-exam',
          'Choose early exam date in VITEEE window for maximum seat availability',
          'No-negative-marking strategy: attempt all 125 questions, bank easy marks first',
          'Score target: 110+ for Vellore CS, 115+ for scholarship eligibility',
          'Mock tests with mentor-guided analysis focusing on time allocation per section',
        ],
      },
    ],
    faqs: [
      { q: 'Is VITEEE worth appearing for?', a: 'Absolutely. VIT Vellore CS placements include Google, Microsoft, Amazon with 20-40 LPA packages. It\'s an excellent backup to NITs and a strong choice on its own merits.' },
      { q: 'What VITEEE score for VIT Vellore CS?', a: '108-115/125 typically. For scholarship, aim for 115+. MindPeak mock tests help track your progress.' },
      { q: 'Is VITEEE easier than JEE Main?', a: 'Yes, noticeably easier. Most questions are NCERT to slightly above NCERT level. Time management is key — 1.2 minutes per question.' },
      { q: 'Does VITEEE have negative marking?', a: 'No, zero negative marking. Attempt all 125 questions.' },
      { q: 'Can I get a scholarship at VIT?', a: 'Yes, merit scholarships based on VITEEE score: 100% (top ranks), 75%, 50%, and 25% tuition waivers. Scoring 115+ usually qualifies for significant scholarships.' },
      { q: 'When is VITEEE conducted?', a: `VITEEE is typically over a 2-3 week window in April-May. Choose your preferred date during registration.` },
      { q: 'Should I prepare separately for VITEEE?', a: 'Not for PCM — JEE prep is more than sufficient. Add 2-3 weeks of Aptitude + English practice. MindPeak integrates this at no extra cost.' },
    ],
    relatedPages: [
      { label: 'JEE Coaching', href: '/jee-coaching' },
      { label: 'BITSAT Coaching', href: '/bitsat-coaching' },
      { label: 'SRMJEEE Coaching', href: '/srmjeee-coaching' },
      { label: 'COMEDK Coaching', href: '/comedk-coaching' },
      { label: 'Free Trial', href: '/free-trial' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'View All Courses', href: '/courses' },
    ],
  },

  // ═══════════════════════════════════════════════════
  // SRMJEEE — 1,200+ words (NEW)
  // ═══════════════════════════════════════════════════
  {
    slug: 'srmjeee-coaching',
    title: `SRMJEEE Coaching Online ${year} — SRM KTR CS Admission with 1-on-1 Mentoring | MindPeak`,
    description: `Expert SRMJEEE ${year} coaching. Score 100+ for SRM Kattankulathur CS. Covers PCM + English + Aptitude. No negative marking. Multiple phases available.`,
    h1: 'SRMJEEE Coaching',
    h1Highlight: `SRM Kattankulathur Admission`,
    heroSubtitle: `SRM Institute of Science and Technology (Kattankulathur) is among India's top 20-25 private engineering colleges. SRMJEEE — with CBSE-level difficulty and zero negative marking — is one of the easiest engineering entrance exams to crack with proper preparation. MindPeak ensures you don't leave easy marks on the table.`,
    schemaType: 'Course',
    sections: [
      {
        heading: 'Why SRM KTR Is a Smart Choice',
        content: `SRM KTR's CS placement record has been on a steep upward trajectory. Amazon, TCS, Infosys, Cognizant, and Zoho hire directly from campus. The Chennai location offers access to India's IT corridor. SRMJEEE gives you access to all SRM campuses — but KTR (Kattankulathur) is the flagship worth targeting.`,
        bullets: [
          'SRM KTR: India\'s top 20-25 private engineering colleges',
          'CS/IT avg packages: 6-8 LPA, top packages 15-20 LPA',
          'SRMJEEE difficulty: CBSE board to slightly above — significantly easier than JEE Main',
          'No negative marking — attempt every question',
          'Multiple exam phases: 3-4 windows over 3 weeks — choose Phase 1 for maximum seats',
          'Both PCM and PCB students can appear — engineering + biotech routes available',
        ],
      },
      {
        heading: `SRMJEEE ${year} Exam Pattern`,
        table: {
          headers: ['Section', 'Questions', 'Marks', 'Difficulty Level', 'Time'],
          rows: [
            ['Physics', '35', '35', 'CBSE board+', '40 min'],
            ['Chemistry', '35', '35', 'CBSE board+', '40 min'],
            ['Mathematics/Biology', '40', '40', 'CBSE board level', '50 min'],
            ['English & Aptitude', '15', '15', 'Basic', '20 min'],
            ['Total', '125', '125', 'Below JEE Main', '150 min'],
          ],
        },
      },
      {
        heading: 'SRMJEEE Scoring Strategy — The 100+ Blueprint',
        content: 'Scoring 100+/125 for SRM KTR CS is achievable with this structured approach:',
        bullets: [
          'PCM: Your JEE preparation makes these sections effortless — target 90+/110 in PCM',
          'English: Grammar, comprehension, sentence completion — practise 10 min/day for 2 weeks',
          'Aptitude: Quantitative reasoning, verbal ability — similar to bank exam basics',
          'Total target: 100+ for CS at KTR in Phase 1, 95+ for Phase 2',
          'No negative marking: attempt all 125 questions — even educated guesses help',
          'Time management: finish PCM in 120 min, English + Aptitude in 20 min, review in 10 min',
        ],
      },
      {
        heading: 'SRM Campus Comparison',
        table: {
          headers: ['Campus', 'Location', 'CS Cutoff', 'Avg Package', 'Strengths'],
          rows: [
            ['SRM KTR', 'Kattankulathur (Chennai)', '95-105/125', '6-8 LPA', 'Flagship, best placements'],
            ['SRM Ramapuram', 'Chennai', '85-95/125', '4-6 LPA', 'Good infrastructure'],
            ['SRM NCR', 'Ghaziabad (Delhi NCR)', '80-90/125', '4-5 LPA', 'NCR location advantage'],
            ['SRM AP', 'Amaravati', '75-85/125', '3-5 LPA', 'New campus, growing'],
          ],
        },
      },
      {
        heading: 'Phase Selection Strategy',
        content: 'SRMJEEE is conducted in 3-4 phases. Your phase choice significantly affects seat availability:',
        bullets: [
          'Phase 1: Maximum seats available for counseling — choose this if you\'re well-prepared',
          'Phase 2-3: Fewer seats remain — cutoffs may be higher for popular branches',
          'You can only appear in ONE phase — choose wisely based on your preparation level',
          'MindPeak recommends Phase 1 for students scoring 95+ in practice mocks',
          'If you need more preparation time, Phase 2 is still competitive for most branches',
        ],
      },
      {
        heading: 'SRMJEEE vs VITEEE — Choosing Between SRM and VIT',
        table: {
          headers: ['Parameter', 'SRMJEEE', 'VITEEE'],
          rows: [
            ['Difficulty', 'CBSE board+', 'Below JEE Main'],
            ['Top College Rank', 'Top 20-25 (NIRF)', 'Top 15 (NIRF)'],
            ['CS Cutoff', '95-105/125', '108-115/125'],
            ['Exam Phases', '3-4 phases', 'Single window'],
            ['Negative Marking', 'None', 'None'],
            ['Location', 'Chennai (KTR)', 'Vellore'],
            ['Placement Quality', 'Good (6-8 LPA)', 'Better (10-20 LPA)'],
          ],
        },
      },
      {
        heading: 'How MindPeak Ensures SRM KTR CS Admission',
        bullets: [
          'JEE coaching inherently over-prepares you for SRMJEEE PCM sections',
          'English & Aptitude training: 2 weeks of targeted practice before your SRMJEEE phase',
          'Mock tests calibrated to SRMJEEE difficulty — not inflated JEE-level problems',
          'Phase selection guidance based on your mock scores and CS seat availability data',
          'Previous year SRMJEEE paper solving — patterns are highly predictable',
          'Score target tracking: weekly score checks to ensure 100+ trajectory',
        ],
      },
    ],
    faqs: [
      { q: 'Is SRM a good engineering college?', a: 'SRM KTR is among India\'s top 20-25 private engineering colleges. CS placements include Amazon, TCS, Infosys, Cognizant with avg 6-8 LPA. The brand is recognized by major recruiters.' },
      { q: 'Is SRMJEEE easy?', a: 'Yes, one of the easier entrance exams. CBSE board to slightly above level. With JEE preparation, 100+/125 is very achievable.' },
      { q: 'What score for SRM KTR CS?', a: '95-105/125 in Phase 1 typically. Cutoffs may be slightly higher in later phases.' },
      { q: 'Does SRMJEEE have negative marking?', a: 'No, zero negative marking. Attempt all questions.' },
      { q: 'How many phases does SRMJEEE have?', a: '3-4 phases over 3 weeks. Appear in any one phase. Phase 1 offers maximum seat availability.' },
      { q: 'Is SRM better than VIT?', a: 'VIT Vellore is generally ranked higher. However, SRM KTR offers competitive education and placements. For CS, both are strong private university choices.' },
    ],
    relatedPages: [
      { label: 'JEE Coaching', href: '/jee-coaching' },
      { label: 'VITEEE Coaching', href: '/viteee-coaching' },
      { label: 'BITSAT Coaching', href: '/bitsat-coaching' },
      { label: 'Free Trial', href: '/free-trial' },
      { label: 'COMEDK Coaching', href: '/comedk-coaching' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },

  // ═══════════════════════════════════════════════════
  // KCET — 1,200+ words (NEW)
  // ═══════════════════════════════════════════════════
  {
    slug: 'kcet-coaching',
    title: `KCET Coaching Online ${year} — UVCE, NIE & Top Karnataka Government Colleges | MindPeak`,
    description: `Expert KCET ${year} coaching with 1-on-1 mentoring. Board marks + entrance test dual strategy. No negative marking. Target UVCE Bangalore & NIE Mysore.`,
    h1: 'KCET Coaching',
    h1Highlight: `Karnataka Government Colleges`,
    heroSubtitle: `KCET is Karnataka's most important entrance exam for government engineering and medical college admissions. Unlike any other exam, KCET gives 50% weightage to your Class 12 board marks — meaning board exam excellence is just as important as entrance test preparation. MindPeak's dual-focus approach ensures you ace both.`,
    schemaType: 'Course',
    sections: [
      {
        heading: 'Why KCET Is Unique — The 50-50 Split',
        content: `No other major entrance exam gives 50% weightage to board marks. This means a student who scores poorly in the entrance test but has excellent board marks can still get a great rank — and vice versa. MindPeak's 1-on-1 approach is ideal because your mentor balances board exam coaching WITH competitive exam preparation, something batch coaching centres fundamentally cannot do.`,
        bullets: [
          'Final Rank = 50% KCET entrance + 50% PU/CBSE board marks (normalised)',
          'No negative marking — attempt every question',
          'Offline (pen-and-paper, OMR) exam format',
          'Tests Physics, Chemistry, Mathematics (engineering) or Biology (medical)',
          'Difficulty at PU board level — significantly easier than JEE Main or NEET',
          'Karnataka domicile or 7-year study requirement',
          'Gateway to UVCE Bangalore, NIE Mysore — prestigious government engineering colleges',
        ],
      },
      {
        heading: `KCET ${year} Exam Pattern`,
        table: {
          headers: ['Subject', 'Questions', 'Marks', 'Duration', 'Difficulty'],
          rows: [
            ['Physics', '60', '60', '80 min', 'PU Board level'],
            ['Chemistry', '60', '60', '80 min', 'PU Board level'],
            ['Mathematics', '60', '60', '80 min', 'PU Board level'],
            ['Biology (Medical)', '60', '60', '80 min', 'PU Board level'],
            ['Total (Engg)', '180', '180', '240 min', 'Board level'],
          ],
        },
      },
      {
        heading: 'The Board Marks Strategy',
        content: 'Since board marks count for 50% of your KCET rank, ignoring board preparation is leaving half your rank to chance:',
        bullets: [
          'PU Board Physics, Chemistry, Maths — study from PU textbooks AND NCERT',
          'Focus on board exam scoring techniques: complete answers, diagrams, step-wise solutions',
          'Target 90%+ in PU board exams — this alone can improve your KCET rank by thousands',
          'MindPeak mentors allocate specific sessions for board exam preparation alongside competitive exam topics',
          'Board mark normalisation: CBSE and PU marks are normalised differently — understand the formula',
        ],
      },
      {
        heading: 'Top Colleges Through KCET',
        table: {
          headers: ['College', 'Best Branch', 'KCET Rank Needed', 'Type', 'Placements'],
          rows: [
            ['UVCE Bangalore', 'CS/IT', 'Top 200', 'Government', 'Strong — 10-15 LPA avg'],
            ['NIE Mysore', 'CS/IT', 'Top 1000', 'Government (Autonomous)', 'Good — 8-12 LPA'],
            ['SJCE Mysore', 'CS/IT', 'Top 1500', 'Government', 'Moderate — 6-10 LPA'],
            ['BMS College', 'All', 'Top 2000', 'Private (govt seats)', 'Good — 8-12 LPA'],
            ['Government College Raichur', 'CS', 'Top 5000', 'Government', 'Growing'],
          ],
        },
      },
      {
        heading: 'KCET vs COMEDK — Which Matters More?',
        table: {
          headers: ['Parameter', 'KCET', 'COMEDK'],
          rows: [
            ['College Type', 'Government (subsidised fees)', 'Private (higher fees)'],
            ['Board Marks', '50% weightage', '0% weightage'],
            ['Mode', 'Offline OMR', 'Online CBT'],
            ['Domicile Required?', 'Yes', 'No'],
            ['Negative Marking', 'None', 'None'],
            ['Top College', 'UVCE Bangalore', 'RVCE Bangalore'],
            ['Fees (4 years)', '₹1-2 lakh total', '₹8-12 lakh total'],
          ],
        },
      },
      {
        heading: 'Common KCET Preparation Mistakes',
        bullets: [
          'Ignoring board marks — they count 50% of your KCET rank',
          'Using JEE-level books — KCET is PU board level, JEE books waste time',
          'Not practising OMR sheets — KCET is offline, not computer-based',
          'Studying only for competitive exam and neglecting board preparation',
          'Not solving previous year KCET papers — patterns are highly repetitive',
          'CBSE students not reviewing PU-board-specific topics',
        ],
      },
      {
        heading: 'MindPeak's Dual Board + KCET Strategy',
        content: 'MindPeak mentors create the only strategy that works for KCET — simultaneous board + entrance preparation:',
        bullets: [
          'PU board syllabus coverage: every topic, every exercise, every diagram',
          'KCET entrance test practice: chapter-wise MCQs at PU board difficulty',
          'Board exam scoring techniques: presentation, step-wise marking, time allocation',
          'KCET mock tests on OMR sheets — simulate the actual offline experience',
          'For students also preparing for JEE/NEET: your competitive prep is more than sufficient for KCET entrance — we add board optimisation on top',
          'Normalisation-aware strategy: understand how your board marks convert to KCET rank',
        ],
      },
    ],
    faqs: [
      { q: 'Is KCET easier than JEE Main?', a: 'Yes, significantly easier. KCET is at PU board level. However, since 50% weightage goes to board marks, students need excellent board performance alongside a good KCET entrance score.' },
      { q: 'Do CBSE students have a disadvantage in KCET?', a: 'Not in the entrance test. However, board mark normalisation can vary. CBSE students studying in Karnataka can appear for KCET.' },
      { q: 'What KCET rank for CS in top colleges?', a: 'UVCE CS: top 200. NIE Mysore CS: top 1000. SJCE Mysore CS: top 1500. Ranks vary by category and quota.' },
      { q: 'Is KCET only for Karnataka students?', a: 'Yes, KCET requires Karnataka domicile or completion of Class 11-12 in Karnataka.' },
      { q: 'Does KCET have negative marking?', a: 'No, zero negative marking. Attempt every question.' },
      { q: 'How are KCET ranks calculated?', a: 'KCET Rank = 50% entrance test marks + 50% PU/CBSE board marks (after normalisation). Board performance is equally important.' },
    ],
    relatedPages: [
      { label: 'COMEDK Coaching', href: '/comedk-coaching' },
      { label: 'JEE Coaching', href: '/jee-coaching' },
      { label: 'NEET Coaching', href: '/neet-coaching' },
      { label: 'Free Trial', href: '/free-trial' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'VITEEE Coaching', href: '/viteee-coaching' },
    ],
  },

  // ═══════════════════════════════════════════════════
  // AP EAMCET — 1,200+ words (NEW)
  // ═══════════════════════════════════════════════════
  {
    slug: 'ap-eamcet-coaching',
    title: `AP EAMCET Coaching Online ${year} — JNTU, AU & Top AP Engineering Colleges | MindPeak`,
    description: `Expert AP EAMCET ${year} coaching with 1-on-1 mentoring. Mathematics 50% weightage strategy. No negative marking. Target JNTU, Andhra University & 400+ colleges.`,
    h1: 'AP EAMCET Coaching',
    h1Highlight: `Top Andhra Pradesh Colleges`,
    heroSubtitle: `AP EAMCET is Andhra Pradesh's largest engineering entrance — your gateway to JNTU Kakinada, Andhra University, IIIT Nuzvid, and 400+ colleges. With Mathematics carrying a whopping 50% weightage and zero negative marking, the right strategy can vault your rank by thousands of positions.`,
    schemaType: 'Course',
    sections: [
      {
        heading: 'Why AP EAMCET Rewards Math-Heavy Preparation',
        content: `AP EAMCET has the most lopsided subject distribution of any major entrance exam: Mathematics carries 80 questions (50% marks) while Physics and Chemistry get 40 questions each (25% each). This means a student who is excellent in Maths but average in Physics and Chemistry can still secure a top rank. MindPeak mentors exploit this asymmetry with a math-first preparation plan.`,
        bullets: [
          'Mathematics = 80 questions = 50% of total marks — highest of any entrance exam',
          'No negative marking — attempt all 160 questions without fear',
          'Difficulty: AP Intermediate level to slightly above — easier than JEE Main',
          'Used for engineering AND agricultural science admissions in AP',
          'Nearly identical pattern to TS EAMCET — prepare once, attempt both',
          '400+ engineering colleges accessible — largest state-level engineering entrance',
        ],
      },
      {
        heading: `AP EAMCET ${year} Exam Pattern`,
        table: {
          headers: ['Subject', 'Questions', 'Marks', 'Weightage', 'Study Time Allocation'],
          rows: [
            ['Mathematics', '80', '80', '50%', '50% of total study time'],
            ['Physics', '40', '40', '25%', '25% of study time'],
            ['Chemistry', '40', '40', '25%', '25% of study time'],
            ['Total', '160', '160', '100%', '3 hours duration'],
          ],
        },
      },
      {
        heading: 'Mathematics — The 80-Question Goldmine',
        content: 'Maximising your Maths score is the single most impactful AP EAMCET strategy:',
        table: {
          headers: ['Math Topic', 'Expected Questions', 'Difficulty', 'Quick Win?'],
          rows: [
            ['Calculus (Limits, Derivatives, Integrals)', '18-22', 'Moderate', 'Yes — formulaic'],
            ['Algebra (Matrices, Progressions, Quadratics)', '15-18', 'Moderate', 'Yes — pattern-based'],
            ['Coordinate Geometry', '12-15', 'Easy-Moderate', 'Yes — visual'],
            ['Trigonometry', '8-10', 'Easy', 'Yes — direct formulas'],
            ['Probability & Statistics', '8-10', 'Easy-Moderate', 'Yes — standard problems'],
            ['Vectors & 3D', '5-8', 'Moderate', 'Mixed'],
          ],
        },
      },
      {
        heading: 'No-Negative-Marking Power Move',
        bullets: [
          'Zero negative marking means every unattempted question is a wasted opportunity',
          'Random guessing on 4 options: 25% success rate = ~40 marks from guessing alone',
          'Intelligent elimination (remove 1-2 options): 33-50% success rate = 55-80 marks',
          'MindPeak trains systematic elimination: unit analysis, boundary conditions, sign checks',
          'Students who attempt all 160 questions score 20-30 marks more than selective attempters',
        ],
      },
      {
        heading: 'AP EAMCET vs TS EAMCET — Dual Strategy',
        content: 'AP EAMCET and TS EAMCET have nearly identical patterns. MindPeak students prepare once and attempt both:',
        table: {
          headers: ['Feature', 'AP EAMCET', 'TS EAMCET'],
          rows: [
            ['Conducting Body', 'JNTU (for APSCHE)', 'JNTU Hyderabad (for TSCHE)'],
            ['Pattern', '160 Q, 3 hrs', '160 Q, 3 hrs'],
            ['Maths Weightage', '50%', '50%'],
            ['Negative Marking', 'None', 'None'],
            ['Top College', 'JNTU Kakinada, AU', 'JNTU Hyd, Osmania'],
            ['State', 'Andhra Pradesh', 'Telangana'],
          ],
        },
      },
      {
        heading: 'Top Colleges Through AP EAMCET',
        table: {
          headers: ['College', 'Branch', 'Rank Needed', 'Avg Package'],
          rows: [
            ['JNTU Kakinada', 'CS/IT', 'Top 500-1000', '6-10 LPA'],
            ['Andhra University', 'CS/IT', 'Top 1000-2000', '5-8 LPA'],
            ['IIIT Nuzvid', 'CS/IT', 'Top 2000-3000', '6-10 LPA'],
            ['IIIT Ongole', 'CS/IT', 'Top 3000-5000', '5-8 LPA'],
            ['SVNIT (partial)', 'Select branches', 'Top 200-500', '8-12 LPA'],
          ],
        },
      },
      {
        heading: 'MindPeak's AP EAMCET Math-First Strategy',
        bullets: [
          'Mathematics gets 50% of mentoring sessions — reflecting its 50% mark weightage',
          'AP Intermediate textbook + NCERT coverage for all 3 subjects',
          'JEE Main preparation automatically covers AP EAMCET — we add exam-specific mock practice',
          'Timed mock tests: practise completing 160 questions in 170 minutes with 10 min review',
          'Previous year paper analysis: identify repeating patterns and high-frequency questions',
          'Dual-exam strategy: single preparation covering both AP EAMCET and TS EAMCET',
        ],
      },
    ],
    faqs: [
      { q: 'Is AP EAMCET easier than JEE Main?', a: 'Yes, AP EAMCET is easier — questions are at Intermediate board level. No negative marking makes it even more scoring. JEE Main preparation more than covers AP EAMCET.' },
      { q: 'What\'s the difference between AP EAMCET and TS EAMCET?', a: 'Nearly identical pattern and difficulty. AP EAMCET covers Andhra Pradesh colleges, TS EAMCET covers Telangana colleges. Both share 50% Maths weightage.' },
      { q: 'What AP EAMCET rank for JNTU CS?', a: 'JNTU Kakinada (main campus) CS: top 500-1000. Andhra University CS: top 1000-2000. Private colleges have more relaxed cutoffs.' },
      { q: 'Should I prepare separately for AP EAMCET if doing JEE?', a: 'No separate preparation needed — JEE prep more than covers it. Add 2 weeks of AP EAMCET mock tests for pattern familiarity.' },
      { q: 'Does AP EAMCET have negative marking?', a: 'No, zero negative marking. Attempt all 160 questions.' },
      { q: 'Can I appear for both AP and TS EAMCET?', a: 'Yes, if you meet domicile requirements for both states. MindPeak recommends appearing for both to maximise college options.' },
    ],
    relatedPages: [
      { label: 'TS EAMCET Coaching', href: '/ts-eamcet-coaching' },
      { label: 'JEE Coaching', href: '/jee-coaching' },
      { label: 'Free Trial', href: '/free-trial' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'WBJEE Coaching', href: '/wbjee-coaching' },
      { label: 'MHT-CET Coaching', href: '/mht-cet-coaching' },
    ],
  },

  // ═══════════════════════════════════════════════════
  // TS EAMCET — 1,200+ words (NEW)
  // ═══════════════════════════════════════════════════
  {
    slug: 'ts-eamcet-coaching',
    title: `TS EAMCET Coaching Online ${year} — JNTU Hyd, Osmania & Top Telangana Colleges | MindPeak`,
    description: `Expert TS EAMCET ${year} coaching with 1-on-1 mentoring. 50% Mathematics focus strategy. Target JNTU Hyderabad, Osmania University, CBIT & top Telangana engineering colleges.`,
    h1: 'TS EAMCET Coaching',
    h1Highlight: `Top Telangana Engineering Colleges`,
    heroSubtitle: `TS EAMCET is Telangana's primary engineering entrance — your pathway to JNTU Hyderabad, Osmania University, CBIT, and Vasavi College in India's IT capital. With 50% Mathematics weightage (identical to AP EAMCET) and zero negative marking, MindPeak's math-focused strategy maximises your rank.`,
    schemaType: 'Course',
    sections: [
      {
        heading: 'Why TS EAMCET for Hyderabad Engineering',
        content: `Hyderabad is India's second-largest IT hub after Bangalore. JNTU Hyderabad, Osmania University Engineering, CBIT, and Vasavi — all accessible through TS EAMCET — offer strong placement records with companies like TCS, Infosys, Amazon, and Microsoft hiring from campus. TS EAMCET's math-heavy pattern means strong Mathematics preparation alone can secure you a top college.`,
        bullets: [
          'Hyderabad: India\'s IT corridor — excellent placement ecosystem',
          'JNTU Hyderabad (main campus) CS among the most sought-after in South India',
          '50% Mathematics weightage — identical to AP EAMCET pattern',
          'Zero negative marking — attempt every question',
          'Less competitive than JEE Main for equivalent college quality',
          'Telangana domicile or studied in TS for 7+ years required',
        ],
      },
      {
        heading: `TS EAMCET ${year} Exam Pattern`,
        table: {
          headers: ['Subject', 'Questions', 'Marks', 'Weightage', 'Difficulty'],
          rows: [
            ['Mathematics', '80', '80', '50%', 'TS Intermediate level'],
            ['Physics', '40', '40', '25%', 'TS Intermediate level'],
            ['Chemistry', '40', '40', '25%', 'TS Intermediate level'],
            ['Total', '160', '160', '100%', 'Below JEE Main'],
          ],
        },
      },
      {
        heading: 'TS EAMCET Math Strategy — Same as AP EAMCET',
        content: 'TS EAMCET and AP EAMCET share nearly identical patterns. If you\'re preparing for one, you\'re preparing for both:',
        table: {
          headers: ['Math Topic', 'Expected Questions', 'Key Focus'],
          rows: [
            ['Calculus', '18-22', 'Limits, derivatives, integrals — most questions'],
            ['Algebra', '15-18', 'Matrices, sequences, quadratic equations'],
            ['Coordinate Geometry', '12-15', 'Straight lines, circles, conics'],
            ['Trigonometry', '8-10', 'Equations, properties, inverse functions'],
            ['Probability & Statistics', '8-10', 'Standard distributions, mean, variance'],
            ['Vectors & 3D', '5-8', 'Dot product, cross product, planes'],
          ],
        },
      },
      {
        heading: 'Top Telangana Colleges Through TS EAMCET',
        table: {
          headers: ['College', 'Branch', 'Rank Needed', 'Avg Package', 'Location'],
          rows: [
            ['JNTU Hyderabad', 'CS/IT', 'Top 300-500', '8-12 LPA', 'Hyderabad'],
            ['Osmania University Engg', 'CS/IT', 'Top 1000', '6-10 LPA', 'Hyderabad'],
            ['CBIT', 'CS/IT', 'Top 2000-3000', '6-8 LPA', 'Hyderabad'],
            ['Vasavi College', 'CS/IT', 'Top 3000-5000', '5-8 LPA', 'Hyderabad'],
            ['VNRVJIET', 'CS/IT', 'Top 3000-5000', '5-7 LPA', 'Hyderabad'],
            ['GRIET', 'CS/IT', 'Top 5000-7000', '4-6 LPA', 'Hyderabad'],
          ],
        },
      },
      {
        heading: 'Dual AP + TS EAMCET Strategy',
        content: 'Students from the AP-TS border region should appear for BOTH exams to maximise options:',
        bullets: [
          'Same preparation covers both exams — zero additional study needed',
          'AP EAMCET opens 400+ AP colleges; TS EAMCET opens 300+ TS colleges',
          'Different exam dates allow appearing for both without conflict',
          'Compare AP vs TS college options after results — choose the better offer',
          'MindPeak mentors help with counseling strategy for both states',
        ],
      },
      {
        heading: 'TS EAMCET vs JEE Main — Which to Prioritise?',
        table: {
          headers: ['Feature', 'TS EAMCET', 'JEE Main'],
          rows: [
            ['Difficulty', 'TS Intermediate level', 'Above NCERT'],
            ['Maths Weightage', '50%', '33%'],
            ['Negative Marking', 'None', '−1 per wrong MCQ'],
            ['Top College', 'JNTU Hyderabad', 'NIT Warangal'],
            ['Competition Pool', 'Telangana students', 'All-India'],
            ['Preparation Overlap', 'JEE covers 80%+', 'Base preparation'],
          ],
        },
      },
      {
        heading: 'MindPeak's Hyderabad Student Strategy',
        content: 'MindPeak mentors design a triple-exam strategy for Hyderabad students: JEE Main + AP EAMCET + TS EAMCET:',
        bullets: [
          'JEE Main preparation serves as the foundation — covers all three exams',
          'Math-heavy mentoring reflecting 50% Maths weightage in EAMCET',
          'TS Intermediate textbook review alongside NCERT for complete coverage',
          'Timed mock tests for both EAMCET formats — build speed to 160 Q in 170 min',
          'Previous year paper solving for pattern recognition',
          'State-specific counseling guidance: AP vs TS college comparison',
        ],
      },
    ],
    faqs: [
      { q: 'Is TS EAMCET different from AP EAMCET?', a: 'Pattern and difficulty are nearly identical. TS EAMCET covers Telangana colleges while AP EAMCET covers AP colleges. Prepare once, appear for both.' },
      { q: 'What TS EAMCET rank for JNTU Hyderabad CS?', a: 'JNTU Hyderabad CS: top 300-500. Osmania Engineering: top 1000. CBIT: top 2000-3000.' },
      { q: 'Can I appear for both AP and TS EAMCET?', a: 'Yes, if you meet domicile requirements for both states. Highly recommended to maximise options.' },
      { q: 'Is TS EAMCET easier than JEE Main?', a: 'Yes, significantly easier — questions at TS Intermediate level. No negative marking makes it even more scoring.' },
      { q: 'Does TS EAMCET have negative marking?', a: 'No, zero negative marking.' },
      { q: 'Should I prepare separately for TS EAMCET?', a: 'No — JEE Main preparation covers it completely. Add 2 weeks of EAMCET mock tests for familiarity.' },
    ],
    relatedPages: [
      { label: 'AP EAMCET Coaching', href: '/ap-eamcet-coaching' },
      { label: 'JEE Coaching', href: '/jee-coaching' },
      { label: 'Free Trial', href: '/free-trial' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'COMEDK Coaching', href: '/comedk-coaching' },
      { label: 'MHT-CET Coaching', href: '/mht-cet-coaching' },
    ],
  },

  // ═══════════════════════════════════════════════════
  // OLYMPIAD — 1,200+ words (NEW)
  // ═══════════════════════════════════════════════════
  {
    slug: 'olympiad-coaching',
    title: `Science Olympiad Coaching Online ${year} — NSEP, NSEC, RMO, NSEB | MindPeak`,
    description: `Expert Science Olympiad coaching with 1-on-1 mentoring by International Olympiad medalists. Prepare for NSEP, NSEC, NSEB, RMO/IOQM. Direct IISc & IISER admission pathway.`,
    h1: 'Science Olympiad Coaching',
    h1Highlight: 'NSEP · NSEC · RMO · NSEB',
    heroSubtitle: `Science Olympiads represent the pinnacle of pre-college science — testing deep understanding, creative problem-solving, and genuine scientific thinking that goes far beyond any entrance exam. Olympiad medals open doors to IISc Bangalore, IISERs, and international recognition. MindPeak connects you with mentors who've competed at the International Olympiad level.`,
    schemaType: 'Course',
    sections: [
      {
        heading: 'Why Olympiads Are the Ultimate Academic Challenge',
        content: `While JEE and NEET test your ability to solve 300 problems quickly, Olympiads test whether you can solve 5-8 problems that nobody has seen before. There's no formula to plug in, no standard approach to follow. You must invent your own method, construct your own proof, and sometimes discover mathematics that's new to you. This is what makes Olympiad preparation transformative — it doesn't just prepare you for exams, it teaches you to think like a scientist.`,
        bullets: [
          'Highest difficulty level of any pre-college science competition in India',
          'Physics (NSEP/INPhO/IPhO), Chemistry (NSEC/INChO/IChO), Mathematics (RMO/INMO/IMO), Biology (NSEB/INBiO/IBO)',
          'Medals lead to direct admission at IISc Bangalore and all 7 IISERs',
          'IOQM top performers get advantages in JEE Advanced selection',
          'India sends 4-6 students per subject to International Olympiads — representing the nation',
          'Only 55% overlap with JEE — the other 45% is completely new preparation',
        ],
      },
      {
        heading: 'Olympiad Stage Structure',
        table: {
          headers: ['Stage', 'Exam', 'Level', 'Selection', 'Timeline'],
          rows: [
            ['Stage 1', 'NSEP/NSEC/NSEB/IOQM', 'National (written)', '~5-10% of applicants', 'November-January'],
            ['Stage 2', 'INPhO/INChO/INBiO/INMO', 'National (top 300)', '~30-40 from Stage 1', 'January-February'],
            ['Stage 3', 'HBCSE Training Camp', 'Residential', 'Top 30-40 students', 'March-April'],
            ['Stage 4', 'International Team', 'Final selection', 'Top 4-6 students', 'May-June'],
            ['International', 'IPhO/IChO/IMO/IBO', 'Global competition', 'India team', 'July-August'],
          ],
        },
      },
      {
        heading: 'How Olympiad Preparation Differs From JEE/NEET',
        table: {
          headers: ['Aspect', 'JEE/NEET Approach', 'Olympiad Approach'],
          rows: [
            ['Question Style', 'MCQ, integer-type, fixed format', 'Open-ended proofs, no fixed format'],
            ['Time Per Question', '2-3 minutes', '20-45 minutes'],
            ['Skills Tested', 'Speed, accuracy, formula recall', 'Creativity, rigour, deep reasoning'],
            ['Physics', 'Formula application', 'Experimental design, derivations from first principles'],
            ['Chemistry', 'Reaction memorisation', 'Mechanism reasoning, spectroscopy, analytical chemistry'],
            ['Mathematics', 'Computational', 'Proof-based: number theory, combinatorics, inequalities'],
            ['Biology', 'NCERT recall', 'Molecular biology, biochemistry, experimental design'],
          ],
        },
      },
      {
        heading: 'Subject-Wise Olympiad Preparation Guide',
        content: 'Each Olympiad requires unique preparation beyond JEE/NEET:',
        bullets: [
          'Physics (NSEP): Irodov + Kleppner & Kolenkow → Experimental physics + error analysis → Previous INPhO papers',
          'Chemistry (NSEC): JEE foundation → Atkins Physical Chemistry + Clayden Organic → Spectroscopy + Analytical Chemistry',
          'Mathematics (IOQM/RMO): Number Theory + Combinatorics from Engel/Fomin → Euclidean Geometry proofs → Functional equations + Inequalities',
          'Biology (NSEB): NCERT deep → Campbell Biology → Molecular Biology + Biochemistry → Experimental design',
        ],
      },
      {
        heading: 'Essential Olympiad Books',
        table: {
          headers: ['Subject', 'Book', 'Level', 'For Stage'],
          rows: [
            ['Physics', 'Problems in General Physics (Irodov)', 'Advanced', '1-2'],
            ['Physics', 'Introduction to Mechanics (Kleppner)', 'Advanced', '2-3'],
            ['Chemistry', 'Atkins\' Physical Chemistry', 'Advanced', '1-2'],
            ['Chemistry', 'Organic Chemistry (Clayden)', 'Advanced', '2-3'],
            ['Mathematics', 'Problem Solving Strategies (Engel)', 'Advanced', '1-2'],
            ['Mathematics', 'Challenge & Thrill of Pre-College Mathematics', 'Foundation', '1'],
            ['Biology', 'Campbell Biology', 'Comprehensive', '1-2'],
            ['Biology', 'Molecular Biology of the Cell (Alberts)', 'Advanced', '2-3'],
          ],
        },
      },
      {
        heading: 'MindPeak's Olympiad Track',
        content: 'MindPeak connects you with mentors who have Olympiad-level experience:',
        bullets: [
          'Mentors include former INPhO/INMO/INChO qualifiers and International Olympiad participants',
          '1-on-1 format is essential for Olympiads — batch coaching cannot develop proof-writing or experimental skills',
          'Custom problem sets: your mentor creates problems at your current level, gradually increasing difficulty',
          'Weekly problem-solving sessions: discuss approaches, not just answers',
          'Mock interviews for HBCSE camp selection',
          'Parallel JEE preparation: Olympiad students automatically excel in JEE/NEET as a side benefit',
        ],
      },
      {
        heading: 'Benefits Beyond Medals',
        content: 'Even if you don\'t win an International medal, Olympiad preparation transforms your academic trajectory:',
        bullets: [
          'Clearing NSEP/NSEC/NSEB (Stage 1) is itself a significant achievement — only 5-10% pass',
          'Deep scientific understanding makes JEE Advanced and NEET significantly easier',
          'Develops problem-solving skills valued by top universities worldwide (MIT, Stanford, Cambridge)',
          'Olympiad participation strengthens college applications — both Indian and international',
          'Builds scientific maturity that benefits you throughout your career in research or industry',
        ],
      },
    ],
    faqs: [
      { q: 'Do Olympiad medals help in JEE/NEET?', a: 'Yes, significantly. INPhO/INChO/INMO medalists get direct admission to IISc and IISERs. IOQM top performers get advantages in JEE Advanced. Olympiad preparation also makes JEE/NEET much easier.' },
      { q: 'When should I start Olympiad preparation?', a: 'Ideally from Class 9-10 for Mathematics Olympiad and Class 11 for Science Olympiads. Early start builds the depth needed at each stage.' },
      { q: 'Can I prepare for Olympiads and JEE simultaneously?', a: 'Yes, but Olympiads require 1-2 extra hours daily beyond JEE coaching. The overlap is ~55%. MindPeak mentors balance both tracks effectively.' },
      { q: 'What are the Olympiad stages?', a: 'Stage 1: NSEP/NSEC/NSEB (national, November). Stage 2: INPhO/INChO/INBiO (top ~300). Stage 3: HBCSE camp (top 30-40). Stage 4: International team (top 4-6).' },
      { q: 'Is Olympiad preparation useful without medals?', a: 'Absolutely. Even Stage 1 clearance demonstrates strong fundamentals. The deep understanding developed translates to excellent JEE/NEET performance and stronger college applications.' },
      { q: 'Which Olympiad books are recommended?', a: 'Physics: Irodov, Kleppner. Chemistry: Atkins, Clayden. Mathematics: Engel, Fomin. Biology: Campbell, Alberts. All in addition to JEE/NEET material.' },
    ],
    relatedPages: [
      { label: 'JEE Advanced Coaching', href: '/jee-advanced-coaching' },
      { label: 'KVPY / INSPIRE Coaching', href: '/kvpy-coaching' },
      { label: 'ISI Entrance Coaching', href: '/isi-entrance-coaching' },
      { label: 'Foundation Coaching', href: '/foundation-coaching' },
      { label: 'Free Trial', href: '/free-trial' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
];

export interface SEOPageSection {
  heading: string;
  content: string;
  /** Optional bullet points under the section */
  bullets?: string[];
  /** Optional comparison table */
  table?: { headers: string[]; rows: string[][] };
}

export interface SEOPageData {
  slug: string;
  title: string;
  description: string;
  h1: string;
  h1Highlight: string;
  heroSubtitle: string;
  sections: SEOPageSection[];
  faqs: { q: string; a: string }[];
  relatedPages: { label: string; href: string }[];
  /** JSON-LD schema type */
  schemaType: 'EducationalOrganization' | 'Course' | 'WebPage' | 'FAQPage';
}

// ─────────────────────────────────────────────────
// CORE SERVICE PAGES
// ─────────────────────────────────────────────────

const aboutPage: SEOPageData = {
  slug: 'about',
  title: 'About MindPeak Institute — Our Mission & Story',
  description: 'MindPeak Institute is India\'s leading personalized 1-on-1 JEE & NEET coaching. Learn about our mission, founder story, and how we\'ve helped 500+ students achieve top ranks.',
  h1: 'About',
  h1Highlight: 'MindPeak Institute',
  heroSubtitle: 'We believe every student deserves a dedicated mentor — not a seat number in a 200-student batch. MindPeak Institute was founded to bring truly personalized coaching to JEE and NEET aspirants across India.',
  sections: [
    {
      heading: 'Our Mission',
      content: 'MindPeak Institute exists to democratize access to world-class JEE and NEET coaching. We saw that students in Tier 2 and Tier 3 cities were forced to relocate to Kota or Delhi for quality coaching, spending lakhs on hostel fees and enduring homesickness — often with diminishing returns. Our mission is simple: connect every aspirant with a dedicated mentor who understands their strengths, weaknesses, and learning pace. Through our online 1-on-1 model, a student in Indore receives the same quality of coaching as one in Delhi. No compromises, no batches, no wasted time.',
    },
    {
      heading: 'The MindPeak Difference',
      content: 'Unlike traditional coaching centres that rely on star teachers delivering one-way lectures to hundreds, MindPeak pairs each student with a dedicated mentor for daily 1-on-1 sessions, 6 days a week. This mentor becomes the student\'s academic guide for the entire preparation journey — adapting the curriculum, resolving doubts in real-time, and tracking progress through weekly analytics. Our 95% selection rate is a testament to the power of personalised attention.',
      bullets: [
        'Dedicated 1-on-1 mentor for every student',
        'Daily live classes, 6 days a week — all sessions recorded',
        'Adaptive curriculum that evolves with each student',
        'Weekly performance analytics shared with parents',
        'Faculty from IIT, AIIMS, and NIT alumni network',
        '500+ students mentored with 95% selection rate',
      ],
    },
    {
      heading: 'Our Founder\'s Vision',
      content: 'MindPeak Institute was born from a firsthand understanding of the coaching industry\'s flaws. Our founder witnessed bright students failing in batch coaching — not because they lacked talent, but because no one was paying attention to their individual struggles. The vision was clear: build a coaching system where every student matters. Where a struggling student isn\'t left behind and an advanced learner isn\'t held back. Where parents can see exactly how their child is progressing. This vision drives every decision at MindPeak — from how we hire mentors to how we structure each class.',
    },
    {
      heading: 'Results That Speak',
      content: 'In just a few years, MindPeak has produced remarkable results. Our best JEE Advanced rank stands at AIR 42, achieved by a student who was scoring just 120/300 when he joined MindPeak. Multiple students have secured ranks under AIR 500 in both JEE and NEET. These aren\'t exceptions — they\'re the norm when you combine talented students with dedicated mentors who refuse to let them fail.',
      bullets: [
        'AIR 42 in JEE Advanced — our best rank',
        'AIR 156 in NEET UG',
        'AIR 89 in JEE Mains',
        '95% of students achieve their target ranks',
        '500+ students coached across 20+ Indian cities',
      ],
    },
  ],
  faqs: [
    { q: 'When was MindPeak Institute founded?', a: 'MindPeak Institute was founded with the vision of bringing personalised, 1-on-1 JEE and NEET coaching to students across India. We\'ve been helping students achieve top ranks through dedicated mentoring since our inception.' },
    { q: 'Is MindPeak Institute based in Kota?', a: 'MindPeak is headquartered in Kota, Rajasthan — the coaching capital of India. However, all our coaching is delivered online in 1-on-1 format, so students from any city in India can access the same quality of teaching without relocating.' },
    { q: 'What makes MindPeak different from other coaching institutes?', a: 'Our core differentiator is truly personalised 1-on-1 coaching — not small-batch, not semi-personalised, but dedicated daily sessions with a single mentor. This model, combined with adaptive curriculum and weekly analytics, delivers consistently superior results compared to batch coaching.' },
    { q: 'How can I start with MindPeak?', a: 'Book a free demo class through our website. You\'ll be paired with a mentor for a trial session, experience our teaching methodology firsthand, and receive a personalised study plan — all at zero cost with no obligation.' },
  ],
  relatedPages: [
    { label: 'JEE Coaching Programs', href: '/jee-coaching' },
    { label: 'NEET Coaching Programs', href: '/neet-coaching' },
    { label: 'Our Methodology', href: '/methodology' },
    { label: 'View All Courses', href: '/courses' },
    { label: 'Pricing & Plans', href: '/pricing' },
  ],
  schemaType: 'EducationalOrganization',
};

const jeeCoachingPage: SEOPageData = {
  slug: 'jee-coaching',
  title: 'JEE Coaching Online — Personalized 1-on-1 Mentoring | MindPeak',
  description: 'Achieve AIR <5K with personalized 1-on-1 JEE coaching. Dedicated mentors, adaptive curriculum, daily classes 6 days/week. 95% success rate. Start free trial today!',
  h1: 'JEE Coaching Online —',
  h1Highlight: '1-on-1 Mentoring',
  heroSubtitle: 'From JEE Main to Advanced — our dedicated mentors guide you through every concept, every doubt, every mock test. Daily 1-on-1 classes, 6 days a week, with a personalised study roadmap crafted just for you.',
  sections: [
    {
      heading: 'Why Choose MindPeak for JEE Coaching?',
      content: 'JEE Main and Advanced are among the toughest exams in the world, testing not just knowledge but problem-solving speed, conceptual depth, and exam temperament. Traditional batch coaching treats every student the same — whether you\'re struggling with Calculus or breezing through Mechanics. MindPeak\'s 1-on-1 approach means your mentor knows exactly where you stand and what you need to work on. Every session is tailored to your current level and target score.',
      bullets: [
        'Dedicated mentor for daily 1-on-1 JEE classes',
        'Complete Physics, Chemistry & Mathematics coverage',
        'Adaptive curriculum — focuses on YOUR weak areas',
        'All sessions recorded for revision anytime',
        'Weekly mock tests with detailed performance analytics',
        'Exam strategy & time management coaching',
      ],
    },
    {
      heading: 'JEE Main & Advanced Syllabus Coverage',
      content: 'Our JEE coaching covers the complete syllabus for both JEE Main and JEE Advanced. The curriculum is structured in phases — starting with strong fundamentals, progressing to advanced problem-solving, and culminating in intensive revision and mock test practice. Physics covers Mechanics, Electromagnetism, Optics, Modern Physics, and Thermodynamics. Chemistry spans Physical, Organic, and Inorganic Chemistry with special focus on high-yield topics. Mathematics includes Calculus, Algebra, Coordinate Geometry, and Trigonometry with emphasis on shortcut techniques for exam conditions.',
    },
    {
      heading: 'JEE Coaching Programs at MindPeak',
      content: 'We offer multiple JEE programs to match your timeline and preparation stage:',
      bullets: [
        'JEE Target 2028 (2-Year Program) — ₹2,30,000 + GST: For students starting in Class 11, this comprehensive program builds strong foundations over two years.',
        'JEE Target 2027 (1-Year Intensive) — ₹1,30,000 + GST: For Class 12 students or droppers, this accelerated program covers the full syllabus with intensive revision.',
        '1-on-1 Crash Program (1-2 Months) — ₹30,000 + GST per subject: Last-minute intensive preparation targeting high-yield topics for maximum score improvement.',
        'Subject Crash Course (1-2 Months) — ₹18,000 per subject: Small batch (2-5 students) rapid revision for specific subjects.',
      ],
    },
    {
      heading: 'Our JEE Results',
      content: 'MindPeak students consistently achieve exceptional JEE results. Our best JEE Advanced rank is AIR 42 — achieved by a student who was scoring just 120/300 when he joined us. Multiple students have secured AIR under 500 in JEE Main. The average mock score improvement for MindPeak students is 150+ marks within the first three months. These results prove that personalised 1-on-1 mentoring outperforms even the most reputed batch coaching centres in India.',
    },
    {
      heading: 'MindPeak vs Batch JEE Coaching',
      content: 'See how our personalised approach compares to traditional batch coaching:',
      table: {
        headers: ['Feature', 'MindPeak 1-on-1', 'Batch Coaching'],
        rows: [
          ['Batch Size', '1 student', '100-300 students'],
          ['Attention', 'Dedicated mentor', 'Shared teacher'],
          ['Curriculum', 'Adaptive & personalised', 'Fixed for all'],
          ['Doubt Resolution', 'Instant, during class', 'Limited doubt sessions'],
          ['Fee (Annual)', 'From ₹1,30,000', '₹1,00,000 - ₹2,50,000'],
          ['Progress Tracking', 'Weekly analytics', 'Periodic tests only'],
          ['Schedule', 'Flexible', 'Fixed batch timings'],
        ],
      },
    },
  ],
  faqs: [
    { q: 'Is online JEE coaching as effective as offline coaching?', a: 'Yes — in fact, 1-on-1 online coaching often outperforms offline batch coaching. Our AIR 42 result in JEE Advanced demonstrates this. The personalised attention, adaptive curriculum, and daily sessions ensure deeper understanding compared to passive listening in large classrooms.' },
    { q: 'What are the fees for JEE coaching at MindPeak?', a: 'Our JEE coaching starts at ₹1,30,000 + GST for the 1-year program and ₹2,30,000 + GST for the 2-year program. Subject-wise crash courses start at ₹18,000. Scholarships are available based on diagnostic test performance.' },
    { q: 'Can I join MindPeak for JEE coaching mid-year?', a: 'Absolutely. Since all coaching is 1-on-1, there are no batch constraints. Your mentor will create a customised plan that accounts for your current preparation level and covers any syllabus gaps from the start.' },
    { q: 'Does MindPeak cover both JEE Main and JEE Advanced?', a: 'Yes. All our JEE programs cover both JEE Main and JEE Advanced comprehensively. The curriculum is structured to build JEE Main readiness first, then progressively advance to JEE Advanced-level problem solving.' },
    { q: 'How many hours of daily JEE coaching does MindPeak provide?', a: 'Students receive daily 1-on-1 sessions, 6 days a week. Sessions are kept short and focused for maximum retention. Crash course students get longer intensive sessions. All sessions are recorded for revision.' },
  ],
  relatedPages: [
    { label: 'JEE Main Coaching', href: '/jee-main-coaching' },
    { label: 'JEE Advanced Coaching', href: '/jee-advanced-coaching' },
    { label: 'JEE Dropper Program', href: '/jee-dropper-coaching' },
    { label: 'JEE Physics Coaching', href: '/jee-physics-coaching' },
    { label: 'View All Courses & Pricing', href: '/courses' },
    { label: 'MindPeak vs Allen', href: '/mindpeak-vs-allen' },
  ],
  schemaType: 'Course',
};

const neetCoachingPage: SEOPageData = {
  slug: 'neet-coaching',
  title: 'NEET Coaching Online — 1-on-1 Personalized Mentoring | MindPeak',
  description: 'Crack NEET UG with personalized 1-on-1 coaching. NCERT-first approach, dedicated biology focus, daily sessions. AIR 156 achieved. Book free demo today!',
  h1: 'NEET Coaching Online —',
  h1Highlight: 'Personalized Mentoring',
  heroSubtitle: 'Your dream of AIIMS, JIPMER, or a top government medical college starts with the right mentor. MindPeak\'s NEET coaching combines NCERT mastery, dedicated 1-on-1 sessions, and intelligent performance tracking to maximise your NEET score.',
  sections: [
    {
      heading: 'Why Choose MindPeak for NEET Coaching?',
      content: 'NEET UG tests deep conceptual understanding, NCERT mastery, and the ability to solve 180 questions in 200 minutes with near-perfect accuracy. Batch coaching centres rush through the syllabus, leaving students with surface-level understanding. MindPeak\'s dedicated mentors ensure you truly understand every concept — from enzyme kinetics to electromagnetic induction. Our NCERT-first approach, combined with extensive MCQ practice, builds the kind of exam readiness that produces top ranks.',
      bullets: [
        'Dedicated NEET mentor for daily 1-on-1 classes',
        'NCERT line-by-line analysis & concept mapping',
        'Complete Physics, Chemistry & Biology coverage',
        'Biology diagram practice & assertion-reason training',
        'Regular full-length mock tests in NEET-identical format',
        'Personalised weak-area targeting for maximum score impact',
      ],
    },
    {
      heading: 'NCERT-First Approach for NEET',
      content: 'Every NEET topper will tell you — NCERT is the bible. Over 90% of NEET questions are directly or indirectly derived from NCERT textbooks. MindPeak\'s NEET coaching starts with exhaustive NCERT analysis: line-by-line reading, concept mapping, extraction of potential questions, and deep understanding of diagrams and tables. Only after NCERT mastery is established do we layer in reference material from Trueman\'s Biology, DC Pandey Physics, and MS Chouhan Organic Chemistry. This systematic approach ensures no NCERT-based question catches you off guard.',
    },
    {
      heading: 'NEET Coaching Programs at MindPeak',
      content: 'Choose the program that matches your preparation timeline:',
      bullets: [
        'NEET Target 2028 (2-Year Program) — ₹2,30,000 + GST: Start early in Class 11 with a comprehensive 2-year preparation journey. Ideal for building an unshakeable foundation.',
        'NEET Target 2027 (1-Year Intensive) — ₹1,30,000 + GST: For Class 12 students or NEET repeaters. Accelerated syllabus coverage with intensive revision cycles.',
        '1-on-1 Crash Program (1-2 Months) — ₹30,000 + GST per subject: Targeted last-minute preparation focusing on high-yield topics for maximum score improvement.',
        'Subject Crash Course (1-2 Months) — ₹18,000 per subject: Rapid revision in small batches (2-5 students) for specific subjects.',
      ],
    },
    {
      heading: 'Our NEET Results',
      content: 'MindPeak\'s NEET track record speaks volumes. Our best NEET rank is AIR 156 — achieved through pure 1-on-1 mentoring. Multiple students have scored 650+ in NEET, securing admissions in top government medical colleges across India. The average score improvement for MindPeak NEET students is 180+ marks within the first four months. Our Biology-focused approach, combined with strong Physics and Chemistry preparation, consistently produces well-rounded NEET performers.',
    },
  ],
  faqs: [
    { q: 'Is online NEET coaching effective for Biology preparation?', a: 'Absolutely. Our online platform supports high-resolution diagrams, interactive whiteboard sessions, and recorded classes. Biology-heavy sessions include diagram practice, assertion-reason training, and NCERT line-by-line analysis — all features that work excellently in 1-on-1 online format.' },
    { q: 'What are NEET coaching fees at MindPeak?', a: 'NEET coaching starts at ₹1,30,000 + GST for the 1-year program and ₹2,30,000 + GST for the 2-year program. Subject-specific crash courses start at ₹18,000. Scholarships available based on diagnostic tests.' },
    { q: 'Does MindPeak provide NCERT-based NEET coaching?', a: 'Yes. Our entire NEET approach is NCERT-first. We cover every line, diagram, and table in NCERT Biology, Physics, and Chemistry before introducing reference material. This ensures you score maximum marks from NCERT-based questions.' },
    { q: 'Can NEET droppers join MindPeak?', a: 'Yes. We have a dedicated NEET Dropper Program designed for students who need a focused second attempt. Your mentor creates a customised plan targeting your specific weak areas from the previous attempt.' },
    { q: 'How does MindPeak compare to Kota coaching for NEET?', a: 'MindPeak\'s 1-on-1 model provides significantly more personalised attention than any Kota batch centre. Our AIR 156 result in NEET demonstrates that dedicated mentoring can outperform even the best batch coaching. You also save on hostel costs and avoid the stress of relocating.' },
  ],
  relatedPages: [
    { label: 'NEET UG Coaching Details', href: '/neet-ug-coaching' },
    { label: 'NEET Dropper Program', href: '/neet-dropper-coaching' },
    { label: 'NEET Biology Coaching', href: '/neet-biology-coaching' },
    { label: 'View All Courses & Pricing', href: '/courses' },
    { label: 'MindPeak vs Allen', href: '/mindpeak-vs-allen' },
  ],
  schemaType: 'Course',
};

const pricingPage: SEOPageData = {
  slug: 'pricing',
  title: 'JEE & NEET Coaching Fees — Affordable 1-on-1 Plans | MindPeak',
  description: 'Transparent pricing for personalized 1-on-1 JEE & NEET coaching. Starting ₹1,30,000/year. Compare with batch coaching. Scholarships available. No hidden fees.',
  h1: 'Coaching',
  h1Highlight: 'Fees & Plans',
  heroSubtitle: 'Transparent, all-inclusive pricing for personalized 1-on-1 JEE and NEET coaching. No hidden charges, no surprise fees — just world-class mentoring at a fraction of the cost of relocating to Kota.',
  sections: [
    {
      heading: 'JEE Coaching Plans',
      content: 'All JEE plans include daily 1-on-1 sessions (6 days/week), a dedicated mentor, recorded classes, weekly mock tests, and parent progress reports.',
      table: {
        headers: ['Program', 'Duration', 'Mode', 'Fee'],
        rows: [
          ['JEE Target 2028', '2 Years', '1-on-1', '₹2,30,000 + GST'],
          ['JEE Target 2027', '1 Year', '1-on-1', '₹1,30,000 + GST'],
          ['1-on-1 Crash Course', '1-2 Months', '1-on-1', '₹30,000/subject + GST'],
          ['Subject Crash Course', '1-2 Months', 'Batch (2-5)', '₹18,000/subject'],
        ],
      },
    },
    {
      heading: 'NEET Coaching Plans',
      content: 'All NEET plans include daily 1-on-1 sessions, NCERT-first curriculum, dedicated mentor, recorded classes, mock tests, and parent tracking.',
      table: {
        headers: ['Program', 'Duration', 'Mode', 'Fee'],
        rows: [
          ['NEET Target 2028', '2 Years', '1-on-1', '₹2,30,000 + GST'],
          ['NEET Target 2027', '1 Year', '1-on-1', '₹1,30,000 + GST'],
          ['1-on-1 Crash Course', '1-2 Months', '1-on-1', '₹30,000/subject + GST'],
          ['Subject Crash Course', '1-2 Months', 'Batch (2-5)', '₹18,000/subject'],
        ],
      },
    },
    {
      heading: 'Foundation Programs (Class 6-10)',
      content: 'Foundation programs build early competitive exam readiness through 1-on-1 mentoring. All sessions are recorded, and parents receive regular progress updates.',
      table: {
        headers: ['Program', 'Duration', 'Mode', 'Fee'],
        rows: [
          ['6th Foundation', '1 Year', '1-on-1', '₹1,00,000 + GST'],
          ['7th Foundation', '1 Year', '1-on-1', '₹1,00,000 + GST'],
          ['8th Foundation', '1 Year', '1-on-1', '₹1,00,000 + GST'],
          ['9th Foundation', '1 Year', '1-on-1', '₹1,00,000 + GST'],
          ['10th Foundation', '1 Year', '1-on-1', '₹1,00,000 + GST'],
        ],
      },
    },
    {
      heading: 'Test Series',
      content: 'All test series are CBT-based (Computer Based Test), replicating exact JEE/NEET exam interface with detailed solutions and performance analytics.',
      table: {
        headers: ['Test Series', 'Exam', 'Duration', 'Fee'],
        rows: [
          ['JEE Main Test Series', 'JEE Main', '3 Months', '₹1,999'],
          ['JEE Advanced Test Series', 'JEE Advanced', '3 Months', '₹2,499'],
          ['NEET Test Series', 'NEET UG', '3 Months', '₹1,999'],
          ['Foundation Test Series', 'IIT/NEET', '6 Months', '₹1,499'],
        ],
      },
    },
    {
      heading: 'MindPeak vs Traditional Coaching — Cost Comparison',
      content: 'When you factor in the total cost of coaching — including hostel, travel, food, and lost time — MindPeak\'s 1-on-1 online coaching is significantly more affordable than relocating to Kota or any metro city.',
      table: {
        headers: ['Cost Component', 'MindPeak (Online)', 'Kota Coaching (Offline)'],
        rows: [
          ['Coaching Fee (Annual)', '₹1,30,000', '₹1,50,000 - ₹2,50,000'],
          ['Hostel/PG', '₹0', '₹60,000 - ₹1,20,000'],
          ['Food & Living', '₹0', '₹48,000 - ₹72,000'],
          ['Travel (Annual)', '₹0', '₹15,000 - ₹30,000'],
          ['Study Material', 'Included', '₹10,000 - ₹25,000'],
          ['Total Annual Cost', '₹1,30,000', '₹2,83,000 - ₹4,97,000'],
        ],
      },
    },
  ],
  faqs: [
    { q: 'Are there any hidden charges at MindPeak?', a: 'No. The fees listed are all-inclusive except GST (where applicable). Study material, mock tests, recorded sessions, and parent tracking are all included. There are no registration fees, admission fees, or surprise charges.' },
    { q: 'Does MindPeak offer scholarships?', a: 'Yes. Scholarships are available based on diagnostic test performance. Students who demonstrate strong potential can receive fee reductions. Contact us for scholarship details and eligibility criteria.' },
    { q: 'Can I pay in installments?', a: 'Yes. We offer flexible payment options including monthly, quarterly, and annual plans. EMI options through select banks are also available for annual programs.' },
    { q: 'Is there a refund policy?', a: 'Yes. MindPeak has a transparent refund policy. If you\'re not satisfied with the coaching within the initial period, you can request a refund. See our full refund policy for details.' },
    { q: 'Why is MindPeak cheaper than Kota coaching?', a: 'MindPeak eliminates the overhead costs of physical infrastructure, hostel management, and large administrative staff. These savings are passed on to students. The online 1-on-1 model also means no travel, hostel, or relocation costs for families — making it 50-70% more affordable than Kota coaching overall.' },
  ],
  relatedPages: [
    { label: 'JEE Coaching Programs', href: '/jee-coaching' },
    { label: 'NEET Coaching Programs', href: '/neet-coaching' },
    { label: 'Foundation Coaching', href: '/foundation-coaching' },
    { label: 'View Detailed Course Catalog', href: '/courses' },
    { label: 'Book Free Demo', href: '/' },
  ],
  schemaType: 'WebPage',
};

const contactPage: SEOPageData = {
  slug: 'contact',
  title: 'Contact MindPeak Institute — Phone, Email, WhatsApp',
  description: 'Get in touch with MindPeak Institute for JEE & NEET coaching inquiries. Call +91 82194 57704, email mindpeak@mindpeakinstitute.com, or message us on WhatsApp.',
  h1: 'Contact',
  h1Highlight: 'MindPeak Institute',
  heroSubtitle: 'Have questions about our JEE or NEET coaching programs? Our counseling team is available to help you choose the right program and answer all your queries.',
  sections: [
    {
      heading: 'Get In Touch',
      content: 'Our counseling team is available Monday to Saturday, 9 AM to 8 PM IST. Whether you want to discuss program options, schedule a free demo class, or have questions about our methodology — we\'re here to help.',
      bullets: [
        'Phone: +91 82194 57704',
        'Email: mindpeak@mindpeakinstitute.com',
        'WhatsApp: +91 82194 57704 (Click the WhatsApp button on this page)',
        'Location: Kota, Rajasthan (Headquarters — all coaching is online)',
      ],
    },
    {
      heading: 'Book a Free Demo Class',
      content: 'The best way to experience MindPeak\'s coaching is through a free demo class. During the demo, you\'ll be paired with a mentor who will conduct a trial session, assess your current preparation level, and provide a personalised study plan recommendation. There\'s absolutely no obligation — if you\'re not convinced after the demo, no questions asked. Over 70% of students who take a free demo end up enrolling, simply because the difference in quality is that obvious.',
    },
    {
      heading: 'For Parents',
      content: 'We understand that choosing the right coaching institute is a significant investment. Our counseling team can walk you through our methodology, share detailed success stories, explain our pricing and scholarship options, and address any concerns about online coaching. We also offer parent-mentor meetings before enrollment so you can meet the mentor who will guide your child.',
    },
    {
      heading: 'Frequently Asked Questions Before Enrollment',
      content: 'Before contacting us, here are answers to our most common pre-enrollment questions to help you make an informed decision:',
    },
  ],
  faqs: [
    { q: 'How do I book a free demo class?', a: 'Click the "Book Free Demo" button on any page of our website, or call us at +91 82194 57704, or send us a WhatsApp message. Our counselor will schedule a convenient time for your demo session within 24 hours.' },
    { q: 'Is the demo class really free?', a: 'Yes, completely free with no obligation. You\'ll get a full trial session with a mentor, a diagnostic assessment of your current preparation level, and a personalised study plan recommendation — all at zero cost.' },
    { q: 'Can I talk to an existing student or parent before enrolling?', a: 'Absolutely. We can connect you with current students and parents who can share their honest experience with MindPeak coaching. Just ask our counselor during your call.' },
    { q: 'What are your operating hours?', a: 'Our counseling team is available Monday to Saturday, 9 AM to 8 PM IST. Classes can be scheduled from 6 AM to 10 PM IST based on student preference.' },
  ],
  relatedPages: [
    { label: 'About MindPeak', href: '/about' },
    { label: 'JEE Coaching Programs', href: '/jee-coaching' },
    { label: 'NEET Coaching Programs', href: '/neet-coaching' },
    { label: 'Pricing & Plans', href: '/pricing' },
    { label: 'View All Courses', href: '/courses' },
  ],
  schemaType: 'EducationalOrganization',
};

const freeTrialPage: SEOPageData = {
  slug: 'free-trial',
  title: 'Free Trial Class — Experience 1-on-1 JEE & NEET Coaching | MindPeak',
  description: 'Book a free trial class with a dedicated JEE/NEET mentor. Experience personalized 1-on-1 coaching, get a diagnostic assessment & study plan. No obligation, 100% free.',
  h1: 'Book Your',
  h1Highlight: 'Free Trial Class',
  heroSubtitle: 'Experience the MindPeak difference firsthand. Get paired with a dedicated mentor, receive a diagnostic assessment of your preparation, and walk away with a personalised study plan — all completely free.',
  sections: [
    {
      heading: 'What Happens in Your Free Trial?',
      content: 'Your free trial is a full 1-on-1 session with a dedicated mentor — not a sales pitch disguised as a class. Here\'s exactly what you\'ll experience:',
      bullets: [
        'Step 1: Book your trial through our website or phone — we\'ll schedule within 24 hours',
        'Step 2: Meet your mentor in a 1-on-1 online session — experience our teaching methodology',
        'Step 3: Take a short diagnostic assessment — identify your strengths and weak areas',
        'Step 4: Receive a personalised study plan — tailored to your target exam and timeline',
        'Step 5: Decide at your own pace — absolutely no pressure to enroll',
      ],
    },
    {
      heading: 'Why 70% of Trial Students Enroll',
      content: 'When you experience the difference between batch coaching and true 1-on-1 mentoring, the choice becomes obvious. In a trial session, students typically have their first "aha moment" — understanding a concept they\'d been struggling with for months. Parents appreciate the transparency of our tracking system and the quality of mentor interaction. The diagnostic assessment alone is worth the 30 minutes — it gives you a clear picture of where you stand and what you need to focus on.',
    },
    {
      heading: 'Who Should Book a Free Trial?',
      content: 'Our free trial is perfect for:',
      bullets: [
        'Class 11-12 students preparing for JEE Main, JEE Advanced, or NEET UG',
        'Class 6-10 students interested in foundation programs for future competitive exams',
        'Dropper students looking for a more personalised second attempt at JEE or NEET',
        'Students currently in batch coaching who feel they\'re not getting enough individual attention',
        'Parents who want to evaluate coaching quality before committing financially',
      ],
    },
    {
      heading: 'No Obligation, No Pressure',
      content: 'We believe in our coaching quality enough to offer free trials with zero strings attached. There\'s no credit card required, no auto-enrollment, and no aggressive follow-up calls. If you decide MindPeak isn\'t right for you after the trial, that\'s completely okay. We\'d rather have students who genuinely believe in our methodology than those who were pressured into enrolling.',
    },
  ],
  faqs: [
    { q: 'Is the free trial really free?', a: 'Yes, 100% free with no hidden charges and no obligation to enroll. You\'ll receive a complete trial session, diagnostic assessment, and personalised study plan at zero cost.' },
    { q: 'How long is the free trial session?', a: 'The trial session typically lasts 30-45 minutes, including the diagnostic assessment. This gives you enough time to experience our teaching methodology and interact with your potential mentor.' },
    { q: 'Can parents attend the free trial?', a: 'Absolutely. We encourage parents to observe the trial session and meet the mentor. Understanding the coaching quality firsthand helps families make informed enrollment decisions.' },
    { q: 'What do I need for the trial session?', a: 'Just a stable internet connection and a device (laptop, tablet, or phone). No special software is needed — our sessions run on a simple video call platform accessible from any browser.' },
  ],
  relatedPages: [
    { label: 'JEE Coaching Programs', href: '/jee-coaching' },
    { label: 'NEET Coaching Programs', href: '/neet-coaching' },
    { label: 'Pricing & Plans', href: '/pricing' },
    { label: 'About MindPeak', href: '/about' },
  ],
  schemaType: 'WebPage',
};

// ─────────────────────────────────────────────────
// EXAM-SPECIFIC PAGES
// ─────────────────────────────────────────────────

const jeeMainPage: SEOPageData = {
  slug: 'jee-main-coaching',
  title: 'JEE Main Coaching Online — Score 250+ with 1-on-1 Mentoring | MindPeak',
  description: 'Targeted JEE Main coaching with personalized 1-on-1 mentoring. Focus on NTA patterns, score optimization & time management. 95% students score 200+. Start free trial.',
  h1: 'JEE Main',
  h1Highlight: 'Coaching Online',
  heroSubtitle: 'JEE Main is the gateway to NITs, IIITs, and JEE Advanced eligibility. MindPeak\'s targeted 1-on-1 approach focuses on NTA exam patterns, question-type mastery, and time management strategies to help you score 250+ in JEE Main.',
  sections: [
    {
      heading: 'JEE Main 2026 — What You Need to Know',
      content: 'JEE Main is conducted by NTA and is the qualifying exam for JEE Advanced as well as the primary entrance for admissions to 31 NITs, 26 IIITs, and other centrally funded institutions. The exam has 90 questions across Physics, Chemistry, and Mathematics, with a mix of MCQs and numerical-value questions. Understanding NTA\'s question patterns, difficulty distribution, and scoring system is crucial for maximising your score.',
    },
    {
      heading: 'Our JEE Main Strategy',
      content: 'MindPeak\'s JEE Main preparation goes beyond just covering the syllabus. Our mentors focus on:',
      bullets: [
        'NTA question pattern analysis — identifying high-frequency topics and question types',
        'Numerical-value question training — mastering the unique format that batch coaching often neglects',
        'Time management coaching — 180 minutes for 90 questions requires strategic approach',
        'Mock test practice with NTA-identical interface and scoring',
        'Score optimization — strategic question selection to maximise marks',
        'Common mistake elimination through error analysis after every mock',
      ],
    },
    {
      heading: 'Subject-Wise JEE Main Approach',
      content: 'Physics: Focus on conceptual understanding, numerical problems, and Modern Physics which has high weightage. Chemistry: Balance between Physical (calculations), Organic (reactions), and Inorganic (factual) — our mentors ensure you don\'t neglect any section. Mathematics: Emphasis on Calculus, Coordinate Geometry, and Algebra which together account for 70% of marks. Each subject mentor specialises in JEE Main-level teaching.',
    },
  ],
  faqs: [
    { q: 'How is JEE Main coaching different from JEE Advanced coaching?', a: 'JEE Main focuses on breadth of knowledge and speed, while JEE Advanced tests depth and analytical thinking. Our JEE Main program emphasises pattern recognition, time management, and complete syllabus coverage. Students targeting both exams get integrated preparation.' },
    { q: 'What score can I expect after MindPeak coaching?', a: 'Based on our track record, 95% of MindPeak students score above 200 in JEE Main. Students who join our program with 6+ months before the exam typically see 100-150 mark improvement. Individual results depend on dedication and starting level.' },
    { q: 'Does MindPeak cover the JEE Main January and April sessions?', a: 'Yes. Our preparation covers both JEE Main sessions. Mock tests and revision schedules are calibrated for each session, and your mentor adjusts the study plan based on your January attempt performance if you\'re appearing in both.' },
  ],
  relatedPages: [
    { label: 'JEE Advanced Coaching', href: '/jee-advanced-coaching' },
    { label: 'JEE Physics Coaching', href: '/jee-physics-coaching' },
    { label: 'JEE Chemistry Coaching', href: '/jee-chemistry-coaching' },
    { label: 'JEE Mathematics Coaching', href: '/jee-mathematics-coaching' },
    { label: 'All JEE Programs', href: '/jee-coaching' },
  ],
  schemaType: 'Course',
};

const jeeAdvancedPage: SEOPageData = {
  slug: 'jee-advanced-coaching',
  title: 'JEE Advanced Coaching — Crack Top IIT Ranks with 1-on-1 Mentoring | MindPeak',
  description: 'JEE Advanced coaching for IIT aspirants. Our AIR 42 result proves 1-on-1 mentoring works. Advanced problem-solving, multi-concept questions, exam strategy. Free trial.',
  h1: 'JEE Advanced',
  h1Highlight: 'Coaching for IIT',
  heroSubtitle: 'JEE Advanced is the ultimate test of problem-solving ability. Our best rank — AIR 42 — was achieved through the same 1-on-1 mentoring approach that every MindPeak student receives. Deep conceptual mastery, multi-concept problem solving, and strategic exam preparation.',
  sections: [
    {
      heading: 'Why JEE Advanced Demands Personalised Coaching',
      content: 'JEE Advanced is fundamentally different from JEE Main. It tests not just knowledge but the ability to connect multiple concepts, solve unconventional problems, and think creatively under pressure. Batch coaching, by its nature, cannot develop these skills — they require 1-on-1 mentoring where a dedicated teacher understands your thought process and pushes you beyond your comfort zone. MindPeak\'s AIR 42 result is proof that personalised attention outperforms even Kota\'s best batch coaching for JEE Advanced.',
    },
    {
      heading: 'Our JEE Advanced Preparation Approach',
      content: 'Our JEE Advanced coaching focuses on building the analytical skills that separate top rankers from the rest:',
      bullets: [
        'Multi-concept problem solving — connecting Physics, Chemistry, and Maths within single problems',
        'Previous year paper deep analysis — understanding IIT\'s question-setting philosophy',
        'Paragraph-based and matrix-match question training — formats unique to JEE Advanced',
        'Integer-type question mastery — no options means no guessing, demanding exact knowledge',
        'Timed problem-solving drills to build speed without sacrificing accuracy',
        'Paper 1 vs Paper 2 strategy — different approaches for different difficulty levels',
      ],
    },
    {
      heading: 'From AIR 42 — What We Learned',
      content: 'Our AIR 42 student in JEE Advanced taught us a powerful lesson: talent without the right guidance is wasted, and average talent with exceptional guidance can achieve extraordinary results. When he joined MindPeak, he was scoring 120/300 in mock tests. His dedicated mentor identified specific gaps in his problem-solving approach, rebuilt his conceptual foundation in Physics and Mathematics, and trained him in the analytical thinking patterns that JEE Advanced demands. Six months later, he scored AIR 42. This isn\'t an anomaly — it\'s what personalised coaching can achieve.',
    },
  ],
  faqs: [
    { q: 'Can I prepare for JEE Advanced through online coaching?', a: 'Absolutely. Our AIR 42 result was achieved entirely through online 1-on-1 coaching. The personalised attention, adaptive curriculum, and intensive problem-solving practice translate perfectly to the online format — often better than offline batch coaching.' },
    { q: 'When should I start JEE Advanced preparation?', a: 'Ideally, start in Class 11 with our 2-year program. However, even 1-year and crash course students have achieved excellent JEE Advanced ranks. Your mentor will create an optimal plan based on your starting point and timeline.' },
    { q: 'Does MindPeak cover JEE Advanced-specific topics?', a: 'Yes. Our JEE Advanced curriculum includes topics and question types not covered in JEE Main — like comprehension-based questions, matrix matching, integer-type problems, and multi-concept integrations. These require specialised practice that only 1-on-1 coaching can provide effectively.' },
  ],
  relatedPages: [
    { label: 'JEE Main Coaching', href: '/jee-main-coaching' },
    { label: 'JEE Physics Coaching', href: '/jee-physics-coaching' },
    { label: 'All JEE Programs', href: '/jee-coaching' },
    { label: 'Pricing & Plans', href: '/pricing' },
  ],
  schemaType: 'Course',
};

const neetUgPage: SEOPageData = {
  slug: 'neet-ug-coaching',
  title: 'NEET UG Coaching Online — NCERT-First Approach | MindPeak',
  description: 'NEET UG preparation with NCERT-first 1-on-1 coaching. Dedicated Biology focus, daily sessions, mock tests. AIR 156 achieved. Start your free trial today.',
  h1: 'NEET UG',
  h1Highlight: 'Coaching Online',
  heroSubtitle: 'NEET UG is the only gateway to MBBS admissions in India. Our NCERT-first, Biology-focused approach with dedicated 1-on-1 mentoring has produced AIR 156 and consistently helped students score 650+ to secure government medical college seats.',
  sections: [
    {
      heading: 'NEET UG 2026 — Exam Overview',
      content: 'NEET UG is conducted by NTA for admissions to all MBBS, BDS, BAMS, and BHMS programs in India. With 20+ lakh students competing for approximately 1 lakh seats, the competition is fierce. The exam consists of 200 MCQs (180 to be attempted) across Physics, Chemistry, and Biology. Biology alone carries 50% of the total marks (360 out of 720), making it the most critical subject for NEET aspirants.',
    },
    {
      heading: 'Our NEET UG Strategy',
      content: 'MindPeak\'s NEET UG preparation is built on three pillars:',
      bullets: [
        'NCERT Mastery: Line-by-line coverage of every NCERT chapter across all three subjects',
        'Biology Excellence: Dedicated Biology sessions with diagram practice, assertion-reason training, and extensive MCQ drills',
        'Strategic Preparation: Focus on high-yield topics, time management, and score optimization for 650+ target',
      ],
    },
  ],
  faqs: [
    { q: 'How many marks do I need in NEET for a government medical college?', a: 'Typically, a score of 600+ (out of 720) puts you in a strong position for government medical colleges. For AIIMS and JIPMER, you\'ll need 650+. MindPeak\'s coaching is designed to help you hit these targets through systematic preparation.' },
    { q: 'Is NEET UG preparation different from NEET PG?', a: 'Yes, completely. NEET UG is for MBBS admissions (12th-level syllabus), while NEET PG is for postgraduate medical admissions. MindPeak focuses exclusively on NEET UG preparation.' },
  ],
  relatedPages: [
    { label: 'NEET Coaching Overview', href: '/neet-coaching' },
    { label: 'NEET Biology Coaching', href: '/neet-biology-coaching' },
    { label: 'NEET Dropper Program', href: '/neet-dropper-coaching' },
    { label: 'NEET Coaching Fees', href: '/pricing' },
  ],
  schemaType: 'Course',
};

const jeeDropperPage: SEOPageData = {
  slug: 'jee-dropper-coaching',
  title: 'JEE Dropper Coaching — Personalized Retry Strategy | MindPeak',
  description: 'Failed JEE? Don\'t give up. MindPeak\'s 1-on-1 JEE dropper program identifies YOUR specific gaps and builds a targeted comeback strategy. 90% improvement rate.',
  h1: 'JEE Dropper',
  h1Highlight: 'Coaching Program',
  heroSubtitle: 'A failed JEE attempt isn\'t the end — it\'s a data point. MindPeak\'s 1-on-1 dropper program analyses your previous attempt to build a surgical preparation strategy targeting exactly where you lost marks.',
  sections: [
    {
      heading: 'Why Droppers Need 1-on-1 Coaching',
      content: 'Taking a drop year and joining another batch coaching is the #1 mistake JEE droppers make. If batch coaching didn\'t work the first time, why would it work the second time? Droppers need targeted intervention — identifying the exact topics and question types where they lost marks, and building focused preparation around those gaps. MindPeak\'s 1-on-1 model is perfectly designed for this. Your mentor analyses your previous scorecard, identifies patterns in your errors, and creates a customised plan that focuses 80% of your effort on the 20% of topics causing 80% of your mark losses.',
    },
    {
      heading: 'Our Dropper Program Approach',
      content: 'MindPeak\'s JEE dropper program follows a structured methodology:',
      bullets: [
        'Diagnostic Analysis: Detailed review of your previous JEE attempt — subject-wise, topic-wise error analysis',
        'Gap Identification: Pinpoint conceptual gaps vs silly mistakes vs time management issues',
        'Targeted Roadmap: Customised 6-12 month plan focusing 80% effort on weak areas',
        'Confidence Rebuilding: Regular mock tests with progressive difficulty to rebuild exam confidence',
        'Exam Strategy: Fine-tune question selection, time allocation, and stress management',
        'Mental Health Support: Dedicated counseling for handling the emotional pressure of a drop year',
      ],
    },
    {
      heading: 'Common Mistakes Droppers Make',
      content: 'Most JEE droppers repeat the same mistakes because no one analyses what went wrong:',
      bullets: [
        'Joining another batch coaching — if it didn\'t work once, more of the same won\'t help',
        'Starting from scratch — you don\'t need to relearn everything; you need to fix specific gaps',
        'Neglecting weak subjects — avoiding the subjects you struggled with guarantees the same result',
        'Ignoring mock tests — many droppers study more but practice less, which doesn\'t improve exam performance',
        'Isolation — studying alone without guidance leads to blind spots and declining motivation',
      ],
    },
  ],
  faqs: [
    { q: 'Is it worth taking a drop year for JEE?', a: 'If you believe you can improve significantly with the right guidance, absolutely yes. Many of India\'s top IITians were droppers. The key is getting personalised coaching, not repeating the batch coaching approach that didn\'t work the first time.' },
    { q: 'How much can a dropper improve in one year?', a: 'With MindPeak\'s 1-on-1 coaching, droppers typically improve by 100-180 marks in JEE Main. The exact improvement depends on your starting level and the nature of your gaps. Our diagnostic assessment gives you a realistic improvement projection.' },
    { q: 'Does MindPeak offer separate dropper batches?', a: 'No — and that\'s the point. Our coaching is entirely 1-on-1, so your preparation is 100% personalised. Your mentor creates a plan specifically for your gaps, timeline, and target score. No generic batch syllabus.' },
  ],
  relatedPages: [
    { label: 'JEE Coaching Programs', href: '/jee-coaching' },
    { label: 'JEE Main Coaching', href: '/jee-main-coaching' },
    { label: 'JEE Advanced Coaching', href: '/jee-advanced-coaching' },
    { label: 'Pricing & Plans', href: '/pricing' },
  ],
  schemaType: 'Course',
};

const neetDropperPage: SEOPageData = {
  slug: 'neet-dropper-coaching',
  title: 'NEET Dropper Coaching — Targeted Comeback Strategy | MindPeak',
  description: 'NEET dropper? Get 1-on-1 coaching that analyses your previous attempt and targets your specific weak areas. NCERT-focused, Biology-strong. 90% improvement rate.',
  h1: 'NEET Dropper',
  h1Highlight: 'Coaching Program',
  heroSubtitle: 'Your first NEET attempt gave you valuable data. MindPeak\'s 1-on-1 dropper program uses that data to build a surgical preparation strategy — targeting exactly where you need to improve for a dramatically better score.',
  sections: [
    {
      heading: 'Why NEET Droppers Choose MindPeak',
      content: 'NEET droppers face a unique challenge: they have knowledge but lack the targeted guidance to convert it into marks. Rejoining a batch class means sitting through topics you already know while rushing through ones you struggle with. MindPeak\'s 1-on-1 model solves this perfectly. Your mentor conducts a detailed analysis of your previous NEET attempt, identifies whether your errors are conceptual, factual, or time-management related, and designs a focused preparation plan that maximises score improvement per hour of study.',
    },
    {
      heading: 'Our NEET Dropper Strategy',
      content: 'The MindPeak NEET dropper program is structured for maximum improvement:',
      bullets: [
        'Previous Attempt Analysis: Subject-wise, chapter-wise breakdown of where you lost marks',
        'NCERT Re-Mastery: Focus on chapters where your NCERT understanding has gaps',
        'Biology Intensification: Since Biology is 50% of NEET, extra sessions for Biology weak areas',
        'MCQ Error Pattern Analysis: Identifying if you\'re making conceptual, factual, or reading errors',
        'Mock Test Acceleration: Weekly full-length mocks from month 2 onwards',
        'Confidence & Mindset Coaching: Handling drop-year pressure and exam anxiety',
      ],
    },
  ],
  faqs: [
    { q: 'How much can a NEET dropper improve?', a: 'MindPeak NEET droppers typically improve by 120-200 marks. If your first attempt score was 400-500, a score of 600+ is achievable with focused 1-on-1 preparation. The key is targeted gap-filling, not re-covering the entire syllabus.' },
    { q: 'Is it too late to join as a NEET dropper?', a: 'It\'s never too late for 1-on-1 coaching. Even students who join 3-4 months before NEET can see significant improvement through our intensive crash programs targeting high-yield topics.' },
    { q: 'Will I get a separate NEET dropper batch?', a: 'MindPeak doesn\'t have batches — your coaching is entirely 1-on-1, customised to your specific gaps from your previous attempt. This is far more effective than sitting in a dropper batch.' },
  ],
  relatedPages: [
    { label: 'NEET Coaching Programs', href: '/neet-coaching' },
    { label: 'NEET UG Coaching', href: '/neet-ug-coaching' },
    { label: 'NEET Biology Coaching', href: '/neet-biology-coaching' },
    { label: 'Pricing & Plans', href: '/pricing' },
  ],
  schemaType: 'Course',
};

const foundationPage: SEOPageData = {
  slug: 'foundation-coaching',
  title: 'Foundation Coaching (Class 6-10) — Early IIT/NEET Prep | MindPeak',
  description: 'Start competitive exam preparation early with MindPeak\'s 1-on-1 foundation coaching for Class 6-10. Build analytical thinking, Olympiad readiness & strong Science/Math base.',
  h1: 'Foundation',
  h1Highlight: 'Coaching (Class 6-10)',
  heroSubtitle: 'The best time to start preparing for IIT-JEE and NEET is not in Class 11 — it\'s in Class 6. MindPeak\'s foundation programs build analytical thinking, problem-solving skills, and deep conceptual understanding years before the actual exam.',
  sections: [
    {
      heading: 'Why Start Early?',
      content: 'Students who begin competitive exam preparation in Class 6-10 have a massive advantage over those who start in Class 11. By the time they reach the actual JEE/NEET syllabus, their fundamentals are rock-solid, their problem-solving instincts are sharp, and they can learn faster because they already think analytically. MindPeak\'s foundation programs don\'t just teach Science and Maths — they build the thinking patterns that competitive exams test.',
    },
    {
      heading: 'Foundation Programs by Class',
      content: 'We offer personalised 1-on-1 foundation coaching for every class from 6th to 10th:',
      table: {
        headers: ['Program', 'Focus Areas', 'Fee'],
        rows: [
          ['6th Foundation', 'Science & Math foundations, logical reasoning, curiosity-driven learning', '₹1,00,000 + GST'],
          ['7th Foundation', 'Deepened PCM/PCB concepts, intro to competitive patterns', '₹1,00,000 + GST'],
          ['8th Foundation', 'Multi-concept problems, NTSE & Olympiad prep', '₹1,00,000 + GST'],
          ['9th Foundation', 'Pre-competitive rigor, advanced Science & Maths', '₹1,00,000 + GST'],
          ['10th Foundation', 'Board + competitive dual prep, JEE/NEET readiness', '₹1,00,000 + GST'],
        ],
      },
    },
    {
      heading: 'Olympiad & NTSE Integration',
      content: 'MindPeak\'s foundation programs integrate Olympiad (IMO, NSO, IPhO) and NTSE preparation alongside school curriculum. These competitive exams are excellent milestones for young students, building confidence and exam temperament before the high-stakes JEE/NEET journey. Our mentors include Olympiad-level problems in regular sessions, helping students develop the creative problem-solving ability that top JEE ranks demand.',
    },
  ],
  faqs: [
    { q: 'Is Class 6 too early to start JEE/NEET preparation?', a: 'Not at all. We don\'t teach JEE syllabus in Class 6 — we build the thinking skills that make JEE/NEET success inevitable. Students develop curiosity, analytical thinking, and problem-solving habits that give them a multi-year head start.' },
    { q: 'Will foundation coaching interfere with school studies?', a: 'Our foundation programs complement school learning. We cover the school syllabus while extending it to competitive-exam levels. Most parents report improved school performance alongside competitive readiness.' },
    { q: 'How are foundation sessions structured?', a: 'Daily 1-on-1 sessions, 6 days a week, with short focused classes designed for younger learners. Sessions include concept building, problem solving, and creative challenges. All sessions are recorded for revision.' },
  ],
  relatedPages: [
    { label: 'JEE Coaching Programs', href: '/jee-coaching' },
    { label: 'NEET Coaching Programs', href: '/neet-coaching' },
    { label: 'Pricing & Plans', href: '/pricing' },
    { label: 'Book Free Demo', href: '/free-trial' },
  ],
  schemaType: 'Course',
};

// ─────────────────────────────────────────────────
// SUBJECT PAGES
// ─────────────────────────────────────────────────

const subjectPages: SEOPageData[] = [
  {
    slug: 'jee-physics-coaching',
    title: 'JEE Physics Coaching Online — Master Mechanics to Modern | MindPeak',
    description: 'Personalized 1-on-1 JEE Physics coaching. Master Mechanics, Electromagnetism, Optics & Modern Physics with a dedicated Physics mentor. Improve by 30+ marks.',
    h1: 'JEE Physics',
    h1Highlight: 'Coaching Online',
    heroSubtitle: 'Physics is often the make-or-break subject in JEE. MindPeak\'s dedicated Physics mentors help you build deep conceptual understanding — from Newtonian Mechanics to Modern Physics — through daily 1-on-1 problem-solving sessions.',
    sections: [
      {
        heading: 'Why Physics is Critical for JEE Success',
        content: 'Physics carries equal weightage in JEE Main and Advanced, but it\'s often the most feared subject. Why? Because Physics demands genuine understanding — you can\'t memorize your way through Mechanics or Electromagnetism. MindPeak\'s 1-on-1 Physics coaching builds this understanding through guided problem-solving, where your mentor walks you through the thought process behind each solution.',
      },
      {
        heading: 'JEE Physics Syllabus — Our Coverage',
        content: 'Our Physics coaching covers every chapter in the JEE syllabus with special emphasis on high-weightage topics:',
        bullets: [
          'Mechanics: Newton\'s Laws, Work-Energy, Rotational Motion, Gravitation — 25-30% of JEE Physics',
          'Electromagnetism: Electrostatics, Current Electricity, Magnetism, EMI — 25-30% of JEE Physics',
          'Optics & Waves: Ray Optics, Wave Optics, SHM, Waves — 15-20% of JEE Physics',
          'Modern Physics: Photoelectric Effect, Nuclear Physics, Semiconductors — 10-15% of JEE Physics',
          'Thermodynamics & Kinetic Theory: Laws of Thermodynamics, Heat Transfer — 10% of JEE Physics',
        ],
      },
    ],
    faqs: [
      { q: 'Can I join just for JEE Physics coaching?', a: 'Yes. Our subject-specific crash courses and crash programs are available for Physics alone. You can get dedicated 1-on-1 Physics coaching starting at ₹18,000 for a 1-2 month course.' },
      { q: 'Which Physics topics are most important for JEE?', a: 'Mechanics and Electromagnetism together account for 50-60% of JEE Physics marks. Within these, Rotational Motion, Electrostatics, and Current Electricity are the highest-yield topics.' },
    ],
    relatedPages: [
      { label: 'JEE Chemistry Coaching', href: '/jee-chemistry-coaching' },
      { label: 'JEE Mathematics Coaching', href: '/jee-mathematics-coaching' },
      { label: 'All JEE Programs', href: '/jee-coaching' },
    ],
    schemaType: 'Course',
  },
  {
    slug: 'jee-chemistry-coaching',
    title: 'JEE Chemistry Coaching Online — Physical, Organic & Inorganic | MindPeak',
    description: 'Master JEE Chemistry with 1-on-1 coaching. Physical Chemistry calculations, Organic reaction mechanisms, Inorganic memory techniques. Score 80+ in Chemistry.',
    h1: 'JEE Chemistry',
    h1Highlight: 'Coaching Online',
    heroSubtitle: 'Chemistry is the highest-scoring subject in JEE if prepared strategically. Our dedicated Chemistry mentors help you master Physical calculations, Organic mechanisms, and Inorganic facts through 1-on-1 sessions.',
    sections: [
      {
        heading: 'Three Pillars of JEE Chemistry',
        content: 'JEE Chemistry is unique because it combines three vastly different skill sets: Physical Chemistry demands mathematical calculations, Organic Chemistry requires understanding reaction mechanisms, and Inorganic Chemistry tests factual memory. MindPeak\'s 1-on-1 approach addresses each pillar differently — calculation drills for Physical, mechanism practice for Organic, and smart memory techniques for Inorganic.',
      },
      {
        heading: 'Our Chemistry Coverage',
        content: 'Complete JEE Chemistry syllabus with strategic prioritization:',
        bullets: [
          'Physical Chemistry: Thermodynamics, Chemical Kinetics, Electrochemistry, Equilibrium — calculation-heavy topics with dedicated practice',
          'Organic Chemistry: GOC, Named Reactions, Functional Group Analysis, Biomolecules — mechanism-based understanding',
          'Inorganic Chemistry: Periodic Table Trends, Coordination Compounds, p-Block & d-Block Elements — memory techniques and pattern recognition',
        ],
      },
    ],
    faqs: [
      { q: 'Is Organic Chemistry really that difficult for JEE?', a: 'Organic Chemistry becomes manageable when you understand General Organic Chemistry (GOC) fundamentals. Our mentors build your GOC foundation first, then layer on named reactions and mechanisms systematically. Most students find Organic much easier after 2-3 months of 1-on-1 coaching.' },
    ],
    relatedPages: [
      { label: 'JEE Physics Coaching', href: '/jee-physics-coaching' },
      { label: 'JEE Mathematics Coaching', href: '/jee-mathematics-coaching' },
      { label: 'All JEE Programs', href: '/jee-coaching' },
    ],
    schemaType: 'Course',
  },
  {
    slug: 'jee-mathematics-coaching',
    title: 'JEE Mathematics Coaching Online — Calculus to Algebra | MindPeak',
    description: 'Master JEE Mathematics with personalized 1-on-1 coaching. Calculus, Algebra, Coordinate Geometry & Trigonometry with problem-solving drills. Score 90+ in Maths.',
    h1: 'JEE Mathematics',
    h1Highlight: 'Coaching Online',
    heroSubtitle: 'Mathematics is the differentiator between good and great JEE scores. MindPeak\'s 1-on-1 Maths coaching builds mathematical intuition through intensive problem-solving with a dedicated mentor.',
    sections: [
      {
        heading: 'Why Mathematics Decides JEE Ranks',
        content: 'In JEE, top rankers almost always have exceptional Mathematics scores. Why? Because Maths has the highest scoring potential — a well-prepared student can score close to full marks. But Maths also has the widest score variance, meaning weak students can lose heavily. MindPeak\'s 1-on-1 Maths coaching ensures you\'re on the right side of this equation.',
      },
      {
        heading: 'JEE Mathematics Coverage',
        content: 'Our Maths coaching follows a strategic syllabus prioritization:',
        bullets: [
          'Calculus: Limits, Derivatives, Integrals, Differential Equations — 35% of JEE Maths',
          'Algebra: Complex Numbers, Matrices, Sequences & Series, Binomial Theorem — 25% of JEE Maths',
          'Coordinate Geometry: Circles, Conics, Straight Lines — 20% of JEE Maths',
          'Trigonometry: Identities, Equations, Properties of Triangles — 10% of JEE Maths',
          'Vectors & 3D Geometry — 10% of JEE Maths',
        ],
      },
    ],
    faqs: [
      { q: 'I\'m weak in Maths. Can MindPeak help?', a: 'Absolutely. Many of our best results come from students who were weak in Maths initially. Our mentors identify exactly where your mathematical foundation has gaps and rebuild systematically. 1-on-1 coaching is the most effective format for improving Maths performance.' },
    ],
    relatedPages: [
      { label: 'JEE Physics Coaching', href: '/jee-physics-coaching' },
      { label: 'JEE Chemistry Coaching', href: '/jee-chemistry-coaching' },
      { label: 'All JEE Programs', href: '/jee-coaching' },
    ],
    schemaType: 'Course',
  },
  {
    slug: 'neet-biology-coaching',
    title: 'NEET Biology Coaching Online — Score 340+ with 1-on-1 Mentoring | MindPeak',
    description: 'NEET Biology coaching with NCERT-first approach. Dedicated Biology mentor for diagrams, assertion-reason, MCQ mastery. Biology = 50% of NEET marks. Free trial.',
    h1: 'NEET Biology',
    h1Highlight: 'Coaching Online',
    heroSubtitle: 'Biology carries 360 out of 720 marks in NEET — making it the most important subject for medical aspirants. MindPeak\'s dedicated Biology mentors use NCERT-first methodology with extensive diagram practice and MCQ drills.',
    sections: [
      {
        heading: 'Why Biology is the Key to NEET Success',
        content: 'Biology accounts for exactly 50% of NEET marks. A strong Biology score (340+/360) almost guarantees a government medical college seat. MindPeak\'s NEET Biology coaching focuses on NCERT mastery — since 95%+ of Biology questions come directly from NCERT. Our mentors conduct line-by-line NCERT analysis, visual diagram practice, and extensive assertion-reason question training.',
      },
      {
        heading: 'NEET Biology Coverage',
        content: 'Complete NCERT Biology with competitive-level extensions:',
        bullets: [
          'Botany: Plant Physiology, Plant Morphology, Cell Biology, Genetics, Ecology — every NCERT chapter covered line by line',
          'Zoology: Human Physiology, Animal Kingdom, Reproduction, Evolution, Biotechnology — with diagram practice and MCQ drills',
          'High-Yield Chapters: Genetics & Evolution, Human Physiology, Plant Physiology, Cell Biology — together account for 60%+ of Biology marks',
        ],
      },
    ],
    faqs: [
      { q: 'How many marks can I score in NEET Biology with proper preparation?', a: 'With MindPeak\'s NCERT-first approach and extensive practice, scoring 320-340 out of 360 in Biology is realistic. Our top students have scored 350+ through thorough NCERT mastery and strategic MCQ practice.' },
      { q: 'Is NCERT enough for NEET Biology?', a: 'NCERT is sufficient for 95%+ of NEET Biology questions. Our mentors supplement NCERT with Trueman\'s Biology for additional practice, but the primary focus remains NCERT mastery — which is what top scorers consistently recommend.' },
    ],
    relatedPages: [
      { label: 'NEET Physics Coaching', href: '/neet-physics-coaching' },
      { label: 'NEET Chemistry Coaching', href: '/neet-chemistry-coaching' },
      { label: 'All NEET Programs', href: '/neet-coaching' },
    ],
    schemaType: 'Course',
  },
  {
    slug: 'neet-physics-coaching',
    title: 'NEET Physics Coaching Online — Score 160+ in Physics | MindPeak',
    description: 'NEET Physics coaching with 1-on-1 mentoring. NCERT-based concepts, numerical problem practice, high-yield topic focus. Improve Physics score by 40+ marks.',
    h1: 'NEET Physics',
    h1Highlight: 'Coaching Online',
    heroSubtitle: 'Physics is often the toughest section for NEET aspirants. MindPeak\'s dedicated Physics mentors simplify complex concepts through visual explanations and daily problem-solving in 1-on-1 sessions.',
    sections: [
      {
        heading: 'Conquering NEET Physics',
        content: 'While Biology is the highest-scoring, Physics often determines the difference between getting your dream college or settling for a backup. NEET Physics tests conceptual understanding and numerical problem-solving ability. MindPeak\'s approach combines NCERT-based concept building with extensive numerical practice from DC Pandey and previous year papers.',
        bullets: [
          'Mechanics: Kinematics, Laws of Motion, Work & Energy — 20% of NEET Physics',
          'Electromagnetism: Electrostatics, Current Electricity — 20% of NEET Physics',
          'Optics & Modern Physics: Ray Optics, Dual Nature, Atoms — 25% of NEET Physics',
          'Heat & Thermodynamics — 10% of NEET Physics',
          'Waves & Oscillations — 10% of NEET Physics',
        ],
      },
    ],
    faqs: [
      { q: 'Is NEET Physics very different from JEE Physics?', a: 'NEET Physics is conceptual but less mathematically intensive than JEE. The focus is on understanding principles and applying them to straightforward numerical problems. MindPeak mentors calibrate their teaching specifically for NEET-level Physics.' },
    ],
    relatedPages: [
      { label: 'NEET Biology Coaching', href: '/neet-biology-coaching' },
      { label: 'NEET Chemistry Coaching', href: '/neet-chemistry-coaching' },
      { label: 'All NEET Programs', href: '/neet-coaching' },
    ],
    schemaType: 'Course',
  },
  {
    slug: 'neet-chemistry-coaching',
    title: 'NEET Chemistry Coaching Online — Score 160+ with NCERT Focus | MindPeak',
    description: 'NEET Chemistry coaching with 1-on-1 mentoring. NCERT-based Physical, Organic & Inorganic Chemistry. Dedicated mentor, daily sessions, MCQ mastery. Free trial.',
    h1: 'NEET Chemistry',
    h1Highlight: 'Coaching Online',
    heroSubtitle: 'Chemistry is the equalizer in NEET — well-prepared students score 150+ easily because many questions are direct NCERT. MindPeak\'s mentors ensure you extract maximum marks from Chemistry through NCERT mastery and strategic practice.',
    sections: [
      {
        heading: 'NEET Chemistry — The Scoring Subject',
        content: 'Chemistry is considered the most scoring section in NEET because a large portion of questions are directly from NCERT. Physical Chemistry requires calculation practice, Organic Chemistry needs mechanism understanding, and Inorganic Chemistry demands factual recall. MindPeak\'s 1-on-1 approach addresses each area with targeted strategies.',
        bullets: [
          'Physical Chemistry: Mole Concept, Thermodynamics, Equilibrium, Electrochemistry — practice-heavy',
          'Organic Chemistry: GOC, Biomolecules, Polymers, Named Reactions — NCERT-focused',
          'Inorganic Chemistry: Periodic Table, p-Block, d-Block, Coordination Chemistry — memory techniques',
        ],
      },
    ],
    faqs: [
      { q: 'Is NCERT enough for NEET Chemistry?', a: 'For Inorganic and Organic Chemistry, NCERT is more than enough. For Physical Chemistry, NCERT covers concepts but you need additional numerical practice. MindPeak mentors supplement NCERT with targeted problem sets for Physical Chemistry.' },
    ],
    relatedPages: [
      { label: 'NEET Biology Coaching', href: '/neet-biology-coaching' },
      { label: 'NEET Physics Coaching', href: '/neet-physics-coaching' },
      { label: 'All NEET Programs', href: '/neet-coaching' },
    ],
    schemaType: 'Course',
  },
];

// ─────────────────────────────────────────────────
// COMPARISON PAGES
// ─────────────────────────────────────────────────

const comparisonPages: SEOPageData[] = [
  {
    slug: 'kota-coaching-alternative',
    title: 'Kota Coaching Alternative — Why Online 1-on-1 Beats Kota | MindPeak',
    description: 'Looking for a Kota coaching alternative? MindPeak offers 1-on-1 personalized JEE/NEET coaching online. AIR 42 achieved. Save ₹3-5 lakhs vs Kota. No relocation needed.',
    h1: 'The Best',
    h1Highlight: 'Kota Coaching Alternative',
    heroSubtitle: 'Kota has been India\'s coaching capital for decades. But the era of batch coaching is ending. MindPeak\'s 1-on-1 online model delivers better results than Kota — our AIR 42 proves it — at a fraction of the cost and without the emotional toll of relocation.',
    sections: [
      {
        heading: 'The Problem with Kota Coaching',
        content: 'Every year, 2+ lakh students relocate to Kota for JEE/NEET coaching, spending ₹3-5 lakhs annually on fees, hostel, and living costs. The reality? Most sit in 200+ student batches where teachers can\'t possibly address individual learning gaps. The pressure cooker environment leads to homesickness, mental health issues, and burnout. Only 10-15% of Kota students achieve their target ranks — the rest return home with debt and disappointment. MindPeak offers a fundamentally better alternative.',
      },
      {
        heading: 'MindPeak vs Kota — Complete Comparison',
        content: 'See why students across India are choosing MindPeak over Kota:',
        table: {
          headers: ['Factor', 'MindPeak (Online 1-on-1)', 'Kota Coaching (Batch)'],
          rows: [
            ['Teaching Model', 'Dedicated 1-on-1 mentor', '200+ student batches'],
            ['Annual Fee', '₹1,30,000', '₹1,50,000 - ₹2,50,000'],
            ['Total Cost (with living)', '₹1,30,000', '₹3,00,000 - ₹5,00,000'],
            ['Curriculum', 'Adaptive to each student', 'Fixed for entire batch'],
            ['Doubt Resolution', 'Instant during class', 'Crowded doubt counters'],
            ['Relocation', 'Not required', 'Must move to Kota'],
            ['Mental Health', 'Study from home comfort', 'High-pressure hostel life'],
            ['Parent Involvement', 'Weekly reports + calls', 'Limited visibility'],
            ['Best Rank Achieved', 'AIR 42 (JEE Advanced)', 'Top institutes claim similar'],
            ['Success Rate', '95%', '10-15% (estimated)'],
          ],
        },
      },
      {
        heading: 'Save ₹3-5 Lakhs Compared to Kota',
        content: 'When you add up coaching fees, hostel rent, food, travel, and miscellaneous expenses, a year in Kota costs ₹3-5 lakhs. MindPeak\'s 1-on-1 coaching costs ₹1.3 lakhs for the same period — with better results. The money saved can be invested in college education, reducing the financial burden on families. And there\'s the incalculable benefit of your child studying from the comfort and safety of home.',
      },
      {
        heading: 'Why Our AIR 42 Chose MindPeak Over Kota',
        content: 'Our highest-ranking student — AIR 42 in JEE Advanced — had initially planned to go to Kota. After a free trial session with MindPeak, he realized that 1-on-1 coaching addressed his specific weaknesses far more effectively than any batch class could. Within 6 months, his mock scores jumped from 120/300 to consistently above 280/300. He achieved AIR 42 while studying from home — saving his family over ₹4 lakhs in the process.',
      },
    ],
    faqs: [
      { q: 'Is online coaching really as effective as going to Kota?', a: 'Our AIR 42 result proves that 1-on-1 online coaching can outperform Kota. The personalised attention you receive at MindPeak is something no Kota institute can match with 200+ student batches. The key isn\'t the location — it\'s the quality and personalisation of teaching.' },
      { q: 'What if my child needs the "competitive environment" of Kota?', a: 'The competitive environment of Kota is a myth for most students — it often creates stress rather than healthy competition. MindPeak creates productive competition through mock test rankings, peer benchmarking, and regular assessments without the toxic pressure.' },
      { q: 'Do students from Kota ever switch to MindPeak?', a: 'Yes. We\'ve enrolled several students who went to Kota, realized batch coaching wasn\'t working, and switched to MindPeak\'s 1-on-1 model. Many saw immediate improvement because their specific weak areas were finally being addressed.' },
    ],
    relatedPages: [
      { label: 'Online vs Offline Coaching', href: '/online-vs-offline-jee-coaching' },
      { label: 'MindPeak vs Allen', href: '/mindpeak-vs-allen' },
      { label: 'MindPeak vs Resonance', href: '/mindpeak-vs-resonance' },
      { label: 'JEE Coaching Programs', href: '/jee-coaching' },
      { label: 'Pricing Comparison', href: '/pricing' },
    ],
    schemaType: 'WebPage',
  },
  {
    slug: 'online-vs-offline-jee-coaching',
    title: 'Online vs Offline JEE Coaching — Which is Better in 2026? | MindPeak',
    description: 'Honest comparison of online vs offline JEE coaching. Pros, cons, cost analysis & results. Find which format works best for your JEE 2026 preparation.',
    h1: 'Online vs Offline',
    h1Highlight: 'JEE Coaching',
    heroSubtitle: 'The debate between online and offline coaching has never been more relevant. With AI-powered platforms and 1-on-1 mentoring, online coaching in 2026 is fundamentally different from the Zoom classes of 2020. Here\'s an honest comparison.',
    sections: [
      { heading: 'The Evolution of Online Coaching', content: 'Online coaching in 2026 is nothing like the emergency Zoom classes during COVID. Modern online coaching — especially MindPeak\'s 1-on-1 model — offers interactive whiteboard sessions, real-time doubt resolution, recorded classes for revision, and AI-powered performance analytics. The technology has matured to deliver an experience that\'s often superior to offline classroom teaching.' },
      {
        heading: 'Honest Comparison: Online vs Offline',
        content: 'Here\'s a balanced look at both formats:',
        table: {
          headers: ['Factor', 'Online 1-on-1 (MindPeak)', 'Offline Batch Coaching'],
          rows: [
            ['Personalisation', '★★★★★ — Fully customised', '★★☆☆☆ — One-size-fits-all'],
            ['Convenience', '★★★★★ — Study from home', '★★☆☆☆ — Commute required'],
            ['Doubt Resolution', '★★★★★ — Instant, 1-on-1', '★★★☆☆ — After-class sessions'],
            ['Peer Interaction', '★★★☆☆ — Mock test rankings', '★★★★★ — Daily interaction'],
            ['Cost', '★★★★★ — No hostel/travel', '★★☆☆☆ — High total cost'],
            ['Discipline', '★★★★☆ — Mentor-driven', '★★★★☆ — Environment-driven'],
            ['Study Material', '★★★★★ — Digital + recorded', '★★★★☆ — Physical books'],
          ],
        },
      },
      { heading: 'When Online Coaching is Better', content: 'Online 1-on-1 coaching is clearly superior when: you live in a city without top coaching centres, you need personalised attention for specific weak areas, your schedule requires flexibility, you want to save on hostel and travel costs, or you learn better through interactive discussions rather than passive lectures. For most students, online 1-on-1 coaching delivers better results than offline batch coaching — our AIR 42 proves this beyond doubt.' },
      { heading: 'When Offline Coaching Might Work', content: 'Offline coaching might be a reasonable choice if: you genuinely need the physical presence of peers for motivation (though this is rarer than people think), you don\'t have reliable internet access (increasingly rare in 2026), or your parents can only trust coaching they can physically visit. For everyone else, online 1-on-1 coaching is the objectively better choice in 2026.' },
    ],
    faqs: [
      { q: 'Can online coaching replace Kota for JEE?', a: 'Yes. Our AIR 42 result demonstrates that 1-on-1 online coaching produces results comparable to or better than Kota. The key differentiator is personalised attention, not physical location.' },
      { q: 'What about self-discipline in online coaching?', a: 'MindPeak\'s 1-on-1 model solves the discipline problem. Your dedicated mentor monitors attendance, tracks progress, and adjusts the pace — providing the accountability that traditional online courses lack.' },
    ],
    relatedPages: [
      { label: 'Kota Coaching Alternative', href: '/kota-coaching-alternative' },
      { label: 'Batch vs Personal Coaching', href: '/batch-vs-personal-coaching' },
      { label: 'JEE Coaching Programs', href: '/jee-coaching' },
    ],
    schemaType: 'WebPage',
  },
  {
    slug: 'batch-vs-personal-coaching',
    title: 'Batch Coaching vs Personal 1-on-1 Coaching — Honest Comparison | MindPeak',
    description: 'Batch coaching vs personal 1-on-1 coaching for JEE & NEET. Side-by-side comparison of results, costs, and learning outcomes. Find which model suits you.',
    h1: 'Batch vs Personal',
    h1Highlight: '1-on-1 Coaching',
    heroSubtitle: 'The fundamental flaw of batch coaching is treating every student the same. Personal 1-on-1 coaching adapts to YOUR pace, YOUR gaps, and YOUR learning style. Here\'s a detailed comparison to help you make the right choice.',
    sections: [
      { heading: 'Why Batch Coaching Fails Most Students', content: 'Batch coaching works for the top 5-10% of students who can keep up with the class pace, self-identify their weak areas, and resolve doubts independently. For the remaining 90%, batch coaching creates an illusion of learning — students attend classes but don\'t truly understand concepts. The teacher moves on regardless of whether 80% of the class is lost. This is why despite lakhs of students enrolling in batch coaching every year, only a small fraction achieve their target ranks.' },
      {
        heading: 'Side-by-Side Comparison',
        content: '',
        table: {
          headers: ['Aspect', '1-on-1 Coaching', 'Batch Coaching'],
          rows: [
            ['Attention', '100% on you', 'Split among 50-300 students'],
            ['Curriculum Pace', 'Adapts to your speed', 'Fixed — too fast or too slow'],
            ['Doubt Resolution', 'Instant, during class', 'After class, if time permits'],
            ['Weak Area Focus', 'Targeted intervention', 'Covered uniformly for all'],
            ['Progress Tracking', 'Weekly personalised reports', 'Periodic test results only'],
            ['Schedule', 'Flexible to your needs', 'Fixed batch timings'],
            ['Results', '95% achieve targets', '10-15% achieve targets'],
          ],
        },
      },
      { heading: 'The Data Speaks', content: 'MindPeak\'s 95% selection rate vs the industry average of 10-15% for batch coaching tells the entire story. When a mentor\'s success is tied to a single student\'s performance, the level of investment, accountability, and effort is incomparably higher than a teacher managing 200 students.' },
    ],
    faqs: [
      { q: 'Isn\'t 1-on-1 coaching more expensive than batch coaching?', a: 'The fee might be similar or slightly higher, but the total cost is lower because you don\'t need hostel/travel expenses. More importantly, the ROI is dramatically higher — 95% success rate vs 10-15% means your investment is far more likely to deliver results.' },
      { q: 'Don\'t batch coaching institutes have "star teachers"?', a: 'Star teachers deliver excellent lectures, but a lecture is only 20% of learning. The remaining 80% — practice, doubt resolution, personalised feedback — is where batch coaching fails. A good 1-on-1 mentor delivers all five components of effective learning.' },
    ],
    relatedPages: [
      { label: 'Online vs Offline Coaching', href: '/online-vs-offline-jee-coaching' },
      { label: 'Kota Coaching Alternative', href: '/kota-coaching-alternative' },
      { label: 'All Programs', href: '/courses' },
    ],
    schemaType: 'WebPage',
  },
  {
    slug: 'mindpeak-vs-allen',
    title: 'MindPeak vs Allen — Which is Better for JEE/NEET 2026? | Honest Comparison',
    description: 'Honest comparison of MindPeak vs Allen for JEE & NEET coaching. 1-on-1 vs batch, fees, results, and methodology compared. Find which suits your preparation style.',
    h1: 'MindPeak vs Allen —',
    h1Highlight: 'Honest Comparison',
    heroSubtitle: 'Allen is one of India\'s largest coaching institutes with a strong track record. But is bigger always better? Here\'s an honest comparison between MindPeak\'s 1-on-1 model and Allen\'s batch coaching to help you make the right choice.',
    sections: [
      {
        heading: 'Quick Comparison Table',
        content: '',
        table: {
          headers: ['Feature', 'MindPeak', 'Allen'],
          rows: [
            ['Teaching Model', '1-on-1 Dedicated Mentor', 'Large Batch (50-300 students)'],
            ['Format', '100% Online', 'Offline + Online options'],
            ['Annual Fee', 'From ₹1,30,000', '₹1,00,000 - ₹2,50,000'],
            ['Total Cost (with living)', '₹1,30,000', '₹3,00,000 - ₹5,00,000 (if in Kota)'],
            ['Curriculum', 'Adaptive per student', 'Fixed for batch'],
            ['Doubt Resolution', 'Instant, during class', 'Doubt counters (waiting)'],
            ['Best JEE Rank', 'AIR 42', 'AIR 1 (multiple times)'],
            ['Student Volume', '500+ (growing)', '3+ lakh students'],
            ['Progress Tracking', 'Weekly personalised reports', 'Periodic test rankings'],
          ],
        },
      },
      { heading: 'Why Students Choose MindPeak Over Allen', content: 'MindPeak\'s 1-on-1 model provides something Allen simply cannot — dedicated personal attention. In Allen, even in "top batches", you\'re one of 50-60 students. At MindPeak, your mentor knows your name, your weak chapters, your learning pace, and your emotional state. This relationship is what drives our 95% success rate. Students who switched from Allen to MindPeak consistently report that concepts they struggled with for months in batch classes became clear within weeks of 1-on-1 coaching.' },
      { heading: 'When Allen Might Be Better', content: 'We believe in honest comparisons. Allen might be a better fit if: you\'re the kind of student who thrives in competitive group environments, you want the prestige of Allen\'s brand name, or you\'re targeting AIR top 10 and want to be in the same room as other future top rankers. For the vast majority of students, however, MindPeak\'s personalised approach delivers better outcomes.' },
    ],
    faqs: [
      { q: 'Allen has produced AIR 1. Can MindPeak match that?', a: 'Allen teaches 3+ lakh students annually — AIR 1 from that volume is expected. Our focus is on maximising every individual student\'s potential. Our best rank, AIR 42, was achieved by a student who was scoring 120/300 when he joined — a transformation that batch coaching rarely delivers.' },
      { q: 'Is MindPeak cheaper than Allen?', a: 'The coaching fee is comparable, but total cost is 50-70% lower because MindPeak eliminates hostel, travel, and living expenses. If you\'re considering Allen Kota, you\'ll spend ₹3-5 lakhs annually vs ₹1.3 lakhs at MindPeak.' },
    ],
    relatedPages: [
      { label: 'MindPeak vs Resonance', href: '/mindpeak-vs-resonance' },
      { label: 'MindPeak vs FIITJEE', href: '/mindpeak-vs-fiitjee' },
      { label: 'Kota Coaching Alternative', href: '/kota-coaching-alternative' },
      { label: 'JEE Coaching Programs', href: '/jee-coaching' },
    ],
    schemaType: 'WebPage',
  },
  {
    slug: 'mindpeak-vs-resonance',
    title: 'MindPeak vs Resonance — Which is Better for JEE/NEET? | Comparison',
    description: 'MindPeak vs Resonance detailed comparison. 1-on-1 coaching vs batch model, fees, results & methodology. Find the best coaching for your JEE/NEET preparation.',
    h1: 'MindPeak vs Resonance —',
    h1Highlight: 'Detailed Comparison',
    heroSubtitle: 'Resonance is a respected name in JEE coaching with strong Kota presence. But how does their batch model compare to MindPeak\'s 1-on-1 approach? Here\'s an unbiased comparison.',
    sections: [
      {
        heading: 'Feature-by-Feature Comparison',
        content: '',
        table: {
          headers: ['Feature', 'MindPeak', 'Resonance'],
          rows: [
            ['Teaching Model', '1-on-1 Dedicated Mentor', 'Batch (40-100 students)'],
            ['Format', '100% Online', 'Offline (Kota) + Online'],
            ['Annual Fee', 'From ₹1,30,000', '₹1,20,000 - ₹2,00,000'],
            ['Curriculum', 'Adaptive per student', 'Fixed PCCP/DLPD modules'],
            ['Doubt Resolution', 'Instant, during class', 'Scheduled doubt sessions'],
            ['Study Material', 'Personalised + recorded classes', 'Resonance study material (physical)'],
          ],
        },
      },
      { heading: 'Resonance\'s Strengths', content: 'Resonance has excellent study material (DLP/DLPD) and a structured curriculum. Their Kota centre provides a competitive environment and their faculty includes experienced teachers. If you\'re the type who learns well from structured material and competitive peer pressure, Resonance is a solid choice.' },
      { heading: 'Why MindPeak Delivers Better Results for Most Students', content: 'For the majority of students, batch coaching — regardless of the brand — has the same fundamental limitation: it can\'t adapt to individual needs. MindPeak\'s 1-on-1 model eliminates this limitation entirely. Your mentor adapts every session to your current understanding, spending more time on concepts you struggle with and accelerating through topics you\'ve mastered. This efficiency translates directly into better exam performance.' },
    ],
    faqs: [
      { q: 'Can I use Resonance study material with MindPeak coaching?', a: 'Absolutely. Many students use study materials from various sources alongside MindPeak\'s 1-on-1 coaching. Your mentor can integrate Resonance\'s DLP material into your personalised study plan if you prefer their content.' },
    ],
    relatedPages: [
      { label: 'MindPeak vs Allen', href: '/mindpeak-vs-allen' },
      { label: 'MindPeak vs FIITJEE', href: '/mindpeak-vs-fiitjee' },
      { label: 'Kota Coaching Alternative', href: '/kota-coaching-alternative' },
    ],
    schemaType: 'WebPage',
  },
  {
    slug: 'mindpeak-vs-fiitjee',
    title: 'MindPeak vs FIITJEE — Which is Better for JEE 2026? | Comparison',
    description: 'MindPeak vs FIITJEE detailed comparison for JEE coaching. 1-on-1 mentoring vs classroom model, fees, results & approach compared. Make an informed choice.',
    h1: 'MindPeak vs FIITJEE —',
    h1Highlight: 'Which is Better?',
    heroSubtitle: 'FIITJEE pioneered integrated school-coaching programs and has a long track record in JEE preparation. Here\'s how their classroom model compares to MindPeak\'s 1-on-1 coaching.',
    sections: [
      {
        heading: 'Comparison Overview',
        content: '',
        table: {
          headers: ['Feature', 'MindPeak', 'FIITJEE'],
          rows: [
            ['Teaching Model', '1-on-1 Dedicated Mentor', 'Classroom (30-80 students)'],
            ['Format', '100% Online', 'Offline centres across India'],
            ['Annual Fee', 'From ₹1,30,000', '₹1,50,000 - ₹3,00,000'],
            ['Unique Feature', 'Adaptive 1-on-1 curriculum', 'Integrated school + coaching'],
            ['Doubt Resolution', 'Instant, during class', 'After-class doubt clearing'],
            ['Track Record', 'AIR 42 (growing institute)', 'Multiple top AIRs (established)'],
          ],
        },
      },
      { heading: 'FIITJEE\'s Integrated Model', content: 'FIITJEE\'s biggest innovation was integrating school education with coaching preparation. Their classroom model is better than most batch coaching centres, with smaller batch sizes and structured curriculum. However, even their "best" batches have 30-80 students — meaning individual attention is still limited.' },
      { heading: 'MindPeak\'s Advantage', content: 'Where FIITJEE uses technology for testing and material delivery, MindPeak uses it for personalised teaching. Every session is a live 1-on-1 interaction where your mentor can see your thought process, identify mistakes in real-time, and adjust explanations instantly. This level of personalisation is impossible in any classroom setting, regardless of batch size.' },
    ],
    faqs: [
      { q: 'FIITJEE has centres in my city. Why should I choose online MindPeak?', a: 'Having a centre nearby means easier access, but the fundamental limitation of batch teaching remains. MindPeak\'s 1-on-1 coaching provides dramatically more personalised attention than any FIITJEE classroom. The convenience of online coaching (no commute, flexible scheduling) is an added benefit.' },
    ],
    relatedPages: [
      { label: 'MindPeak vs Allen', href: '/mindpeak-vs-allen' },
      { label: 'MindPeak vs Resonance', href: '/mindpeak-vs-resonance' },
      { label: 'Online vs Offline Coaching', href: '/online-vs-offline-jee-coaching' },
    ],
    schemaType: 'WebPage',
  },
  {
    slug: 'mindpeak-vs-byju',
    title: 'MindPeak vs BYJU\'S — Live 1-on-1 vs Recorded Content | Comparison',
    description: 'MindPeak vs BYJU\'S for JEE/NEET prep. Compare live 1-on-1 mentoring with pre-recorded video lessons. Understanding, results & value compared honestly.',
    h1: 'MindPeak vs BYJU\'S —',
    h1Highlight: 'Live vs Recorded',
    heroSubtitle: 'BYJU\'S is India\'s most recognizable ed-tech brand. But how does their recorded-content model compare to MindPeak\'s live 1-on-1 mentoring for serious JEE/NEET preparation?',
    sections: [
      {
        heading: 'Fundamental Difference in Approach',
        content: 'BYJU\'S primarily offers pre-recorded video lessons with some live class options. MindPeak provides daily live 1-on-1 sessions with a dedicated mentor. This is a fundamental difference — watching a video is passive learning; interacting with a mentor who knows your weaknesses is active learning. For competitive exams like JEE and NEET, active learning with personalised guidance is significantly more effective.',
        table: {
          headers: ['Feature', 'MindPeak', 'BYJU\'S'],
          rows: [
            ['Teaching Format', 'Live 1-on-1 daily sessions', 'Pre-recorded videos + some live'],
            ['Personalisation', 'Fully adaptive per student', 'Same content for all'],
            ['Doubt Resolution', 'Instant, during class', 'Chat/forum based'],
            ['Mentor', 'Dedicated single mentor', 'No dedicated mentor'],
            ['Fee (Annual)', 'From ₹1,30,000', '₹30,000 - ₹1,50,000'],
            ['Accountability', 'Mentor-driven', 'Self-driven'],
            ['Best for', 'Serious JEE/NEET aspirants', 'Supplementary learning'],
          ],
        },
      },
      { heading: 'When BYJU\'S Makes Sense', content: 'BYJU\'S can be a useful supplementary resource for conceptual videos. Their animated explanations can help visualise complex topics. However, for serious JEE/NEET preparation, relying solely on recorded content is risky because it lacks personalised feedback, real-time doubt resolution, and adaptive pacing.' },
    ],
    faqs: [
      { q: 'Is MindPeak more expensive than BYJU\'S?', a: 'MindPeak costs more but delivers fundamentally different value. BYJU\'S gives you access to videos; MindPeak gives you a dedicated mentor for daily live sessions. For serious JEE/NEET preparation, the 1-on-1 model\'s results justify the investment.' },
      { q: 'Can I use BYJU\'S videos alongside MindPeak coaching?', a: 'Yes. Some students use BYJU\'S or YouTube videos as supplementary visual resources alongside their MindPeak 1-on-1 coaching. Your mentor can recommend specific videos that complement your study plan.' },
    ],
    relatedPages: [
      { label: 'MindPeak vs Allen', href: '/mindpeak-vs-allen' },
      { label: 'Online vs Offline Coaching', href: '/online-vs-offline-jee-coaching' },
      { label: 'JEE Coaching Programs', href: '/jee-coaching' },
    ],
    schemaType: 'WebPage',
  },
];

// Crash course pages
const jeeCrashPage: SEOPageData = {
  slug: 'jee-crash-course',
  title: 'JEE Crash Course — 1-2 Month Intensive Revision | MindPeak',
  description: 'JEE crash course for last-minute preparation. 1-on-1 and small batch options. High-yield topic focus, rapid revision, mock test drills. Starting ₹18,000/subject.',
  h1: 'JEE',
  h1Highlight: 'Crash Course',
  heroSubtitle: 'With only weeks left before JEE, every minute counts. MindPeak\'s crash courses deliver maximum score improvement through targeted high-yield topic revision, intensive problem-solving drills, and exam strategy coaching.',
  sections: [
    {
      heading: 'JEE Crash Course Options',
      content: 'Choose the intensity level that matches your needs:',
      table: {
        headers: ['Program', 'Mode', 'Duration', 'Fee'],
        rows: [
          ['1-on-1 Crash Program', '1-on-1 dedicated mentor', '1-2 Months', '₹30,000/subject + GST'],
          ['Subject Crash Course', 'Batch of 2-5 students', '1-2 Months', '₹18,000/subject'],
        ],
      },
    },
    {
      heading: 'What Our Crash Course Covers',
      content: 'Our JEE crash courses focus on maximum impact in minimum time:',
      bullets: [
        'High-yield topic prioritisation — focusing on chapters that carry 60% of marks',
        'Rapid formula revision — condensed formula sheets and concept maps',
        'Previous year paper solving — pattern recognition and strategic question selection',
        'Daily mock tests — building exam stamina and time management',
        'Error analysis — eliminating recurring mistakes that cost marks',
        'Exam temperament coaching — stress management and confidence building',
      ],
    },
  ],
  faqs: [
    { q: 'Can a crash course really improve my JEE score?', a: 'Yes. Students who join our crash courses typically improve by 30-60 marks in JEE Main. The key is strategic topic selection — focusing 80% of effort on the 20% of topics that carry the most marks.' },
    { q: 'Is the crash course available for single subjects?', a: 'Yes. You can enroll for Physics, Chemistry, or Mathematics individually. Many students use crash courses for their weakest subject while self-studying the others.' },
  ],
  relatedPages: [
    { label: 'NEET Crash Course', href: '/neet-crash-course' },
    { label: 'JEE Coaching Programs', href: '/jee-coaching' },
    { label: 'Pricing & Plans', href: '/pricing' },
  ],
  schemaType: 'Course',
};

const neetCrashPage: SEOPageData = {
  slug: 'neet-crash-course',
  title: 'NEET Crash Course — Last-Minute Intensive Preparation | MindPeak',
  description: 'NEET crash course for final revision. 1-on-1 and small batch options. NCERT-focused rapid revision, Biology intensive, mock test drills. Starting ₹18,000/subject.',
  h1: 'NEET',
  h1Highlight: 'Crash Course',
  heroSubtitle: 'Maximise your NEET score in the final weeks with targeted crash course preparation. High-yield NCERT revision, Biology intensification, and daily mock tests to build exam readiness.',
  sections: [
    {
      heading: 'NEET Crash Course Options',
      content: 'Select the format that works best for you:',
      table: {
        headers: ['Program', 'Mode', 'Duration', 'Fee'],
        rows: [
          ['1-on-1 Crash Program', '1-on-1 dedicated mentor', '1-2 Months', '₹30,000/subject + GST'],
          ['Subject Crash Course', 'Batch of 2-5 students', '1-2 Months', '₹18,000/subject'],
        ],
      },
    },
    {
      heading: 'Crash Course Strategy for NEET',
      content: 'Our NEET crash courses are designed around the NCERT-first principle:',
      bullets: [
        'NCERT rapid revision — key chapters covered with extraction of potential questions',
        'Biology diagram marathon — intensive practice of all important diagrams',
        'High-yield topic focus — Genetics, Human Physiology, Plant Physiology prioritised',
        'Daily full-length mock tests with detailed analysis',
        'MCQ pattern training — factual, application, assertion-reason question types',
        'Last-minute formula revision for Physics and Chemistry',
      ],
    },
  ],
  faqs: [
    { q: 'How much can I improve in a NEET crash course?', a: 'Students typically improve by 40-80 marks in NEET through our crash courses. Biology-focused students see the highest improvement since Biology has 50% weightage and responds well to targeted NCERT revision.' },
    { q: 'Is a crash course enough for NEET preparation?', a: 'A crash course is best as a final revision tool. If you have some foundation but need intensive last-minute preparation, our crash course can significantly boost your score. For comprehensive preparation, we recommend our 1-year or 2-year programs.' },
  ],
  relatedPages: [
    { label: 'JEE Crash Course', href: '/jee-crash-course' },
    { label: 'NEET Coaching Programs', href: '/neet-coaching' },
    { label: 'Pricing & Plans', href: '/pricing' },
  ],
  schemaType: 'Course',
};

// ─────────────────────────────────────────────────
// EXPORT ALL PAGES
// ─────────────────────────────────────────────────

export const allSEOPages: SEOPageData[] = [
  aboutPage,
  jeeCoachingPage,
  neetCoachingPage,
  pricingPage,
  contactPage,
  freeTrialPage,
  jeeMainPage,
  jeeAdvancedPage,
  neetUgPage,
  jeeDropperPage,
  neetDropperPage,
  foundationPage,
  jeeCrashPage,
  neetCrashPage,
  ...subjectPages,
  ...comparisonPages,
];

/** Lookup a page by slug */
export const getSEOPage = (slug: string): SEOPageData | undefined =>
  allSEOPages.find((p) => p.slug === slug);

export interface CityData {
  slug: string;
  city: string;
  state: string;
  tier: 1 | 2 | 3;
  lat: number;
  lng: number;
  /** Exam types to generate pages for */
  exams: ('jee' | 'neet')[];
  /** Unique educational landscape paragraph (100-120 words) */
  educationLandscape: string;
  /** Why MindPeak for this city (120-150 words) */
  whyMindPeak: string;
  /** Mentoring advantage paragraph (100-130 words) */
  mentoringAdvantage: string;
  /** Parent-focused tracking paragraph (100-120 words) */
  parentTracking: string;
  /** City-specific unique selling points */
  highlights: string[];
  /** 4 city-specific FAQs */
  faqs: { q: string; a: string }[];
}

export const cities: CityData[] = [
  // ─── TIER 1 ───────────────────────────────────────────
  {
    slug: 'delhi',
    city: 'Delhi',
    state: 'Delhi',
    tier: 1,
    lat: 28.7041,
    lng: 77.1025,
    exams: ['jee', 'neet'],
    educationLandscape:
      'Delhi NCR is the nerve centre of competitive exam preparation in India. With lakhs of students from across the country converging here every year, the coaching market is saturated with large-batch institutes that treat students as numbers. IIT Delhi, AIIMS Delhi, and numerous top engineering and medical colleges draw aspirants who need razor-sharp preparation. Despite the abundance of coaching centres in Rajouri Garden, Laxmi Nagar, and Kalu Sarai, most follow a rigid one-size-fits-all curriculum that leaves weaker students behind and bores advanced learners. The high-pressure environment often leads to burnout without proportional results.',
    whyMindPeak:
      'MindPeak Institute brings a fundamentally different approach to JEE and NEET coaching for Delhi students. Instead of competing for attention in a 200-student classroom, you receive dedicated 1-on-1 online sessions from expert faculty who understand the Delhi board curriculum and competitive exam overlap. Our adaptive curriculum identifies your weak areas through diagnostic tests and builds a personalised roadmap — whether you struggle with Organic Chemistry, Calculus, or Physics Mechanics. Delhi students benefit from flexible scheduling that works around school hours and board exam preparation. With 95% of our students achieving their target ranks, MindPeak eliminates the commute hassle and coaching centre chaos that Delhi students face daily.',
    mentoringAdvantage:
      'Every Delhi student at MindPeak is paired with a dedicated mentor who becomes their academic guide for the entire preparation journey. Your mentor conducts daily 1-on-1 classes, resolves doubts in real-time, and adjusts the teaching pace based on your comprehension. Unlike batch coaching where doubt sessions are rushed group affairs, our mentors spend dedicated time on concepts you find challenging. Weekly strategy sessions ensure your preparation aligns with the latest JEE/NEET exam patterns. This personalised mentorship has helped Delhi students improve mock scores by an average of 150+ marks within the first three months.',
    parentTracking:
      'Delhi parents receive comprehensive weekly progress reports covering topic-wise accuracy, speed improvements, mock test percentiles, and mentor observations. Our transparent tracking system lets parents monitor attendance, homework completion, and performance trends through a dedicated parent dashboard. Monthly parent-mentor calls provide deeper insights into your child\'s preparation health — identifying burnout signs early, suggesting lifestyle adjustments, and keeping families informed about realistic rank projections. This accountability system ensures every rupee invested in coaching delivers measurable academic growth.',
    highlights: [
      'Flexible scheduling around CBSE board exams',
      'Expert faculty from IIT Delhi and AIIMS Delhi alumni network',
      'No commute — study from South Delhi, Noida, Gurgaon, or anywhere in NCR',
      'Personalised study plans aligned with Delhi board syllabus overlap',
    ],
    faqs: [
      { q: 'Is online JEE coaching from Delhi as effective as Kota coaching?', a: 'Absolutely. MindPeak\'s 1-on-1 online coaching from Delhi delivers superior results compared to Kota batch coaching. Our personalised attention, adaptive curriculum, and dedicated mentors have produced AIR 42 in JEE Advanced — results that match or exceed top Kota institutes. You save on hostel costs, avoid homesickness, and study in a comfortable environment.' },
      { q: 'What are the JEE coaching fees in Delhi at MindPeak?', a: 'MindPeak offers flexible pricing for Delhi students with monthly, quarterly, and annual plans. Our fees are competitive with premium Delhi coaching centres but deliver significantly more value through 1-on-1 attention. Book a free demo class and our counselor will discuss personalised pricing based on your requirements.' },
      { q: 'Can Delhi students join MindPeak mid-year?', a: 'Yes! Since our coaching is 1-on-1, there are no batch constraints. Delhi students can join anytime — we\'ll create a customised schedule aligned with your school calendar and exam timeline, covering any syllabus gaps from the start.' },
      { q: 'Do you cover CBSE boards along with JEE/NEET preparation?', a: 'Yes. For Delhi students following the CBSE curriculum, our mentors integrate board exam preparation with JEE/NEET coaching. The syllabus overlap is significant, and our approach ensures you excel in both without spreading yourself too thin.' },
    ],
  },
  {
    slug: 'mumbai',
    city: 'Mumbai',
    state: 'Maharashtra',
    tier: 1,
    lat: 19.076,
    lng: 72.8777,
    exams: ['jee', 'neet'],
    educationLandscape:
      'Mumbai, India\'s financial capital, has a thriving competitive exam preparation ecosystem concentrated in areas like Andheri, Dadar, and Thane. Students from Maharashtra State Board and CBSE backgrounds compete fiercely for seats in IIT Bombay, VJTI, and top medical colleges. The city\'s intense lifestyle means students often struggle to balance school, coaching, and the long commutes that Mumbai is notorious for. Traditional coaching centres demand 3-4 hours of travel daily, eating into productive study time. The result: exhausted students who attend classes but don\'t truly absorb the material.',
    whyMindPeak:
      'MindPeak eliminates Mumbai\'s biggest preparation killer — commute time. Our online 1-on-1 coaching gives Mumbai students back 3-4 hours daily that would otherwise be wasted on local trains and auto rides. Expert mentors understand the Maharashtra State Board to JEE/NEET transition challenges and build bridges between board concepts and competitive exam demands. Whether you\'re in Borivali, Navi Mumbai, or South Mumbai, you receive identical quality of personalised attention. Our adaptive curriculum accounts for the unique challenges Maharashtra students face — including differences in board syllabus sequencing and the CET exam overlap. With flexible evening and weekend slots, working parents in Mumbai can ensure their children get premium coaching without disrupting family routines.',
    mentoringAdvantage:
      'Mumbai students at MindPeak receive a dedicated mentor who understands the city\'s unique academic pressure. Your mentor designs a study schedule that respects school commitments, board exam timelines, and even accounts for Mumbai\'s monsoon disruptions that often derail batch coaching schedules. Daily 1-on-1 sessions ensure concepts are thoroughly understood — not just superficially covered. Mentors provide targeted practice on high-weightage topics, conduct weekly mock test reviews, and build exam temperament through simulated test conditions. This focused approach has helped Mumbai students achieve 10× improvement in mock scores within six months.',
    parentTracking:
      'Mumbai parents juggling demanding careers receive concise, actionable weekly reports on their child\'s preparation progress. Our tracking system provides topic-wise heat maps showing strengths and weaknesses, attendance logs, homework completion rates, and percentile trends. The parent dashboard is accessible 24/7 from any device, making it easy for busy Mumbai professionals to stay informed. Bi-weekly parent-mentor calls discuss strategy adjustments, while monthly comprehensive reports provide a holistic view of preparation health. This transparency gives Mumbai families confidence that their investment in premium coaching is delivering tangible results.',
    highlights: [
      'Save 3-4 hours daily on Mumbai commute — study from home',
      'Maharashtra Board to JEE/NEET transition support',
      'Evening and weekend slots for working families',
      'IIT Bombay alumni mentors who understand Mumbai\'s academic ecosystem',
    ],
    faqs: [
      { q: 'How does MindPeak compare to coaching centres in Andheri and Dadar?', a: 'MindPeak offers personalised 1-on-1 coaching that Mumbai batch centres cannot match. While Andheri/Dadar centres teach 100+ students per batch, our dedicated mentors focus entirely on your child\'s learning gaps. Plus, you save 3-4 hours of daily commute — giving more time for focused practice.' },
      { q: 'Can MindPeak help with Maharashtra CET along with JEE?', a: 'Yes. Our Mumbai mentors are well-versed in MHT-CET patterns and integrate CET preparation alongside JEE coaching. The overlapping syllabus is leveraged efficiently, and targeted CET-specific practice is included closer to the exam.' },
      { q: 'What if my child is from Maharashtra State Board, not CBSE?', a: 'MindPeak\'s adaptive curriculum works with any board. Our mentors bridge the gap between Maharashtra State Board concepts and JEE/NEET requirements, identifying and filling foundational gaps early in the preparation.' },
      { q: 'Is online coaching reliable during Mumbai monsoons?', a: 'Our platform works on mobile data and low-bandwidth connections. If a session is disrupted due to connectivity issues during monsoons, your mentor will reschedule the class at no extra cost — something batch centres in Mumbai cannot offer.' },
    ],
  },
  {
    slug: 'bangalore',
    city: 'Bangalore',
    state: 'Karnataka',
    tier: 1,
    lat: 12.9716,
    lng: 77.5946,
    exams: ['jee', 'neet'],
    educationLandscape:
      'Bangalore, India\'s Silicon Valley, has an increasingly competitive JEE/NEET preparation landscape. With parents from the tech industry placing high value on quality education, demand for personalised coaching has surged. Areas like Koramangala, BTM Layout, and Whitefield are dotted with coaching centres, but most replicate the factory-model approach. Karnataka CET adds another layer of exam preparation. Students from both CBSE and Karnataka State Board need coaching that bridges curriculum differences while building competitive exam readiness. The city\'s traffic congestion makes commuting to coaching centres particularly time-consuming.',
    whyMindPeak:
      'MindPeak is the ideal choice for Bangalore\'s tech-savvy families who demand data-driven, personalised education. Our online 1-on-1 coaching eliminates Bangalore\'s notorious traffic problem — students in Electronic City, Yelahanka, or Marathahalli receive the same premium coaching experience. Our adaptive curriculum uses diagnostic assessments to create personalised roadmaps, resonating with Bangalore parents who appreciate systematic, metrics-driven approaches. Mentors understand KCET preparation requirements and integrate them with JEE/NEET coaching seamlessly. With faculty drawn from IISc and top IIT alumni, Bangalore students get access to world-class teaching without leaving their homes. Our flexible scheduling accommodates international school calendars that many Bangalore students follow.',
    mentoringAdvantage:
      'Bangalore students receive dedicated mentors who appreciate the city\'s unique academic culture — where analytical thinking is valued over rote learning. Your mentor builds conceptual understanding through problem-solving approaches favoured by tech-oriented families. Daily 1-on-1 sessions allow deep dives into complex topics, with real-time whiteboard collaboration and recorded sessions for revision. Mentors track learning patterns using data analytics, adjusting teaching methods based on performance metrics. This systematic, technology-enhanced mentoring approach has helped Bangalore students consistently achieve top percentiles in JEE and NEET.',
    parentTracking:
      'Bangalore\'s tech-savvy parents appreciate our data-rich progress tracking system. Weekly reports include topic-wise accuracy charts, improvement velocity metrics, competitive percentile rankings, and AI-generated insights on learning patterns. The parent dashboard mirrors the kind of analytics dashboards Bangalore professionals use at work — intuitive, comprehensive, and actionable. Mentors provide fortnightly video call updates, while automated alerts flag any decline in performance or attendance. This level of transparency and accountability is what sets MindPeak apart for discerning Bangalore families.',
    highlights: [
      'Data-driven coaching approach for tech-savvy Bangalore families',
      'KCET + JEE/NEET integrated preparation',
      'Flexible scheduling for international school calendars',
      'IISc and IIT alumni faculty network',
    ],
    faqs: [
      { q: 'Does MindPeak cover Karnataka CET along with JEE preparation?', a: 'Yes. Our Bangalore mentors integrate KCET preparation with JEE coaching. Since 80%+ of the syllabus overlaps, we leverage this efficiently and add targeted KCET practice modules closer to the exam date.' },
      { q: 'My child goes to an international school in Bangalore with a different calendar. Can you accommodate?', a: 'Absolutely. MindPeak\'s 1-on-1 model has no batch constraints. We create custom schedules that align with IGCSE, IB, or any international school calendar your child follows in Bangalore.' },
      { q: 'How does MindPeak\'s approach suit Bangalore students specifically?', a: 'Bangalore students typically have strong analytical foundations thanks to the tech ecosystem. Our mentors leverage this by focusing on advanced problem-solving and conceptual depth rather than rote memorisation — playing to Bangalore students\' strengths.' },
      { q: 'Can parents track progress in real-time?', a: 'Yes. Our parent dashboard provides real-time visibility into attendance, session recordings, homework completion, and performance metrics — accessible 24/7 from any device, perfect for busy Bangalore professionals.' },
    ],
  },
  {
    slug: 'hyderabad',
    city: 'Hyderabad',
    state: 'Telangana',
    tier: 1,
    lat: 17.385,
    lng: 78.4867,
    exams: ['jee', 'neet'],
    educationLandscape:
      'Hyderabad has emerged as a major coaching hub, with areas like Ameerpet and Kukatpally housing dozens of JEE/NEET institutes. The Telangana State Board curriculum creates specific bridging challenges for competitive exams. Hyderabad\'s strong medical education infrastructure — with Osmania Medical College, Gandhi Medical College, and numerous private medical colleges — drives intense NEET competition. The city\'s growing IT sector has created a parent demographic that values structured, results-oriented coaching. Traditional coaching centres here often run oversized batches of 150+ students, leaving individual learning gaps unaddressed.',
    whyMindPeak:
      'MindPeak brings personalised 1-on-1 excellence to Hyderabad students tired of overcrowded Ameerpet coaching centres. Our mentors understand Telangana State Board nuances and build effective bridges to JEE/NEET level requirements. Students in Gachibowli, Secunderabad, or ECIL area receive identical premium coaching without fighting Hyderabad\'s growing traffic congestion. Our NEET-specific programs are particularly strong, with specialised biology faculty and NCERT-aligned preparation that Hyderabad\'s medical aspirants need. The adaptive curriculum identifies weak areas unique to Telangana Board students — often in topics like Modern Physics and Electrochemistry — and provides targeted remediation. With Telugu-speaking support staff, communication with parents is seamless.',
    mentoringAdvantage:
      'Hyderabad students are paired with mentors who understand the state\'s educational ecosystem. Your dedicated mentor conducts daily sessions focused on building conceptual clarity rather than speed-covering syllabus. For NEET aspirants, biology mentors use visual learning techniques and NCERT-centric approaches that align with Hyderabad\'s medical education philosophy. JEE mentors focus on building mathematical intuition that Telangana Board students sometimes lack. Weekly doubt-resolution marathons ensure no concept remains unclear, while monthly mentorship reviews recalibrate preparation strategy based on latest mock test performance.',
    parentTracking:
      'Hyderabad parents receive detailed bilingual progress reports (English and Telugu summaries available) covering all aspects of their child\'s preparation. Topic-wise performance breakdowns, attendance records, mentor observations, and rank predictions are updated weekly. Our system flags early warning signs — drops in accuracy, reduced session engagement, or homework inconsistency — before they become problems. Monthly parent-mentor video conferences provide strategic updates, and our counseling team is available for walk-in consultations at our Hyderabad coordination office.',
    highlights: [
      'Telangana State Board to JEE/NEET bridging expertise',
      'Strong NEET program with specialised biology faculty',
      'Telugu-speaking support for seamless parent communication',
      'No Ameerpet traffic — study from Gachibowli, Secunderabad, or anywhere',
    ],
    faqs: [
      { q: 'Does MindPeak cover TS EAMCET along with JEE?', a: 'Yes. Our Hyderabad mentors integrate TS EAMCET preparation with JEE coaching. The significant syllabus overlap is leveraged efficiently, with targeted EAMCET practice added closer to the exam date.' },
      { q: 'My child is from Telangana State Board. Will the JEE syllabus gap be a problem?', a: 'Not at all. Our mentors are experienced in bridging Telangana Board to JEE/NEET gaps. We identify specific weak areas through diagnostic tests and provide targeted remediation from the start.' },
      { q: 'Is MindPeak available in Telugu?', a: 'Our teaching is primarily in English (the exam language), but our support staff speaks Telugu fluently. Parent communications and counseling are available in Telugu for Hyderabad families who prefer it.' },
      { q: 'How does MindPeak compare to Hyderabad\'s top coaching centres?', a: 'While Hyderabad centres like Sri Chaitanya and Narayana teach 150+ students per batch, MindPeak provides dedicated 1-on-1 mentoring. Our 95% success rate proves that personalised attention outperforms mass-batch approaches consistently.' },
    ],
  },
  {
    slug: 'chennai',
    city: 'Chennai',
    state: 'Tamil Nadu',
    tier: 1,
    lat: 13.0827,
    lng: 80.2707,
    exams: ['jee', 'neet'],
    educationLandscape:
      'Chennai is Tamil Nadu\'s educational powerhouse, with a strong tradition of engineering and medical excellence. IIT Madras, Anna University, and numerous top medical colleges create fierce competition among aspirants. The Tamil Nadu State Board curriculum has its own unique structure, and students preparing for NEET face the additional challenge of adapting to CBSE-pattern exams. T. Nagar, Adyar, and Anna Nagar are traditional coaching hubs, but the city\'s sprawling geography means significant commute times for students in OMR corridor, Tambaram, or Porur.',
    whyMindPeak:
      'MindPeak provides Chennai students with premium 1-on-1 coaching that transcends geographic barriers within the city. Whether you\'re in Velachery, Thoraipakkam, or Ambattur, our online platform delivers consistent, personalised attention. Our mentors are experienced with Tamil Nadu Board to NEET transition — a critical challenge since NEET follows CBSE/NCERT patterns while TN Board covers topics differently. For JEE aspirants, we build mathematical rigour that Chennai\'s engineering-focused culture demands. Our scheduling accommodates Pongal holidays, board exam periods, and the unique Tamil Nadu academic calendar. Faculty with IIT Madras connections bring research-oriented problem-solving perspectives that give Chennai students a competitive edge.',
    mentoringAdvantage:
      'Chennai students receive mentors who understand the Tamil Nadu educational philosophy — rigorous, methodical, and detail-oriented. Daily 1-on-1 sessions build on this foundation while adding the competitive exam edge. For NEET aspirants, mentors emphasise NCERT mastery with systematic chapter coverage that TN Board students sometimes miss. JEE mentors develop advanced problem-solving skills through IIT-level practice sets. Real-time doubt resolution means no concept is left unclear — a critical advantage over Chennai\'s batch coaching centres where doubt sessions are often overcrowded and rushed.',
    parentTracking:
      'Chennai parents known for their active involvement in children\'s education receive our most detailed tracking reports. Weekly performance analytics cover accuracy by topic, time management improvements, and comparison with target percentiles. Our system is particularly valued by Chennai families for its objective, data-driven approach — removing guesswork from preparation assessment. Monthly strategy reviews with mentors help parents understand exactly where their child stands and what adjustments are needed. Tamil-speaking counselors are available for parents who prefer communicating in their native language.',
    highlights: [
      'Tamil Nadu Board to NEET/JEE transition expertise',
      'IIT Madras alumni faculty network',
      'Tamil-speaking counselors for parent communication',
      'Accommodates TN academic calendar and board exam schedules',
    ],
    faqs: [
      { q: 'Does MindPeak help with Tamil Nadu Board to NEET transition?', a: 'Yes. This is one of our specialties. TN Board covers topics in a different sequence and depth compared to NCERT. Our mentors systematically bridge these gaps, ensuring Chennai students are NEET-ready without neglecting board performance.' },
      { q: 'Can Chennai students prepare for both JEE and board exams simultaneously?', a: 'Absolutely. Our adaptive curriculum integrates TN Board preparation with JEE coaching. The significant overlap is leveraged, and board-specific topics get dedicated attention before exams.' },
      { q: 'What about Anna University counseling preparation?', a: 'While our primary focus is JEE and NEET, our mentors guide Chennai students on state-level engineering admission processes including TNEA counseling strategy and college selection advice.' },
      { q: 'Is online coaching suitable for students in areas like OMR or Tambaram?', a: 'That\'s exactly where online coaching shines. Students in Chennai\'s outskirts save 2-3 hours daily on commute, getting more time for focused study while receiving the same quality of 1-on-1 mentoring as anyone in T. Nagar.' },
    ],
  },
  {
    slug: 'kolkata',
    city: 'Kolkata',
    state: 'West Bengal',
    tier: 1,
    lat: 22.5726,
    lng: 88.3639,
    exams: ['jee', 'neet'],
    educationLandscape:
      'Kolkata boasts a rich academic heritage with institutions like IIT Kharagpur (nearby), Jadavpur University, and prestigious medical colleges creating strong aspirational pull. West Bengal Board students face unique challenges adapting to CBSE-pattern competitive exams. Coaching centres in Salt Lake, Park Street, and Howrah cater to large batches, but personalised attention remains scarce. The city\'s intellectual culture values deep understanding over superficial preparation, making quality mentorship particularly important for Kolkata aspirants.',
    whyMindPeak:
      'MindPeak aligns perfectly with Kolkata\'s intellectual tradition by emphasising deep conceptual understanding over rote learning. Our 1-on-1 mentors appreciate the analytical mindset Kolkata students bring and build upon it with competitive exam strategies. Students across Salt Lake, Howrah, Dum Dum, and Barasat receive identical premium coaching experience. Our curriculum addresses West Bengal Board gaps — particularly in topics where WBBSE coverage differs from JEE/NEET requirements. Flexible scheduling works around Durga Puja holidays and Bengal\'s unique academic calendar. With competitive fees compared to Kolkata\'s premium coaching centres, MindPeak offers unmatched value for quality-conscious Bengali families.',
    mentoringAdvantage:
      'Kolkata students are matched with mentors who value intellectual depth — mirroring the city\'s academic culture. Daily sessions focus on building first-principles understanding before moving to problem-solving techniques. Mentors encourage the questioning mindset that Kolkata students are known for, turning it into a competitive advantage. Bengali students\' traditional strength in mathematics and physics is enhanced with advanced JEE-level problem sets, while weaker areas receive targeted remediation through personalised worksheets and concept videos.',
    parentTracking:
      'Kolkata parents receive weekly progress reports designed for families who value academic rigor. Our tracking covers not just scores but learning quality metrics — conceptual clarity assessments, problem-solving approach evaluations, and strategic readiness indicators. Monthly parent-mentor discussions delve into preparation philosophy, ensuring alignment between family expectations and coaching strategy. Bengali-speaking support ensures seamless communication for families who prefer it.',
    highlights: [
      'Conceptual depth approach matching Kolkata\'s intellectual tradition',
      'West Bengal Board to JEE/NEET bridging expertise',
      'Bengali-speaking support staff',
      'Competitive pricing for quality-conscious Kolkata families',
    ],
    faqs: [
      { q: 'Does MindPeak understand West Bengal Board differences?', a: 'Yes. Our mentors are experienced with WBBSE curriculum gaps relative to JEE/NEET requirements. We systematically identify and address these differences from day one, ensuring Kolkata students are fully competitive.' },
      { q: 'How does MindPeak compare to coaching in Salt Lake area?', a: 'While Salt Lake centres offer batch coaching with 80-120 students, MindPeak provides dedicated 1-on-1 mentoring with personalised study plans. Our 95% success rate speaks to the effectiveness of individualised attention.' },
      { q: 'Can WBJEE preparation be integrated?', a: 'Absolutely. Our mentors integrate WBJEE preparation alongside JEE Main coaching for Kolkata students. The significant syllabus overlap is leveraged, with state-specific practice added as needed.' },
      { q: 'What subjects do Kolkata students typically need most help with?', a: 'Based on our experience, West Bengal Board students often need targeted support in Physical Chemistry, Coordinate Geometry, and Modern Physics — areas where WBBSE coverage differs from competitive exam depth.' },
    ],
  },
  {
    slug: 'pune',
    city: 'Pune',
    state: 'Maharashtra',
    tier: 1,
    lat: 18.5204,
    lng: 73.8567,
    exams: ['jee', 'neet'],
    educationLandscape:
      'Pune, Maharashtra\'s education capital, has a dense concentration of coaching institutes in areas like FC Road, Kothrud, and Swargate. With COEP, MIT, and Symbiosis creating strong engineering aspirations, JEE preparation is highly competitive. NEET preparation has also surged with medical colleges in the region. Maharashtra Board students face the additional challenge of preparing for MHT-CET alongside national exams. Pune\'s relatively lower cost of living compared to Mumbai attracts students from across Maharashtra, but coaching quality varies significantly.',
    whyMindPeak:
      'MindPeak brings premium personalised coaching to Pune students who deserve better than crowded FC Road classrooms. Our 1-on-1 online model gives students in Hinjewadi, Wakad, Hadapsar, and rural Pune districts equal access to top-tier mentoring. Our mentors expertly handle the Maharashtra Board to JEE/NEET transition and integrate MHT-CET preparation seamlessly. Pune\'s strong mathematical tradition is leveraged by our faculty who push students toward advanced problem-solving. Flexible scheduling accommodates Pune University exam periods and state board calendars. Our fees offer excellent value compared to premium Pune coaching centres, with demonstrably better results through personalised attention.',
    mentoringAdvantage:
      'Pune students receive mentors who build on the city\'s strong STEM foundation. Your dedicated mentor conducts daily 1-on-1 sessions focused on conceptual mastery and application-based problem-solving — Pune\'s academic strength. Weekly mock test reviews provide granular feedback on time management, accuracy, and strategy. Mentors also guide students on optimal resource utilisation, helping them navigate the overwhelming amount of study material available. This curated, focused approach prevents information overload while ensuring comprehensive preparation.',
    parentTracking:
      'Pune parents receive structured weekly reports covering performance metrics, learning velocity, and strategic readiness. Our dashboard provides transparent visibility into every aspect of preparation — attendance, engagement, practice volume, and improvement trends. Quarterly strategy presentations help families plan finances and commitments around exam timelines. Pune\'s value-conscious families particularly appreciate our clear ROI-focused reporting.',
    highlights: [
      'MHT-CET + JEE/NEET integrated preparation',
      'Access for students across Pune district including Hinjewadi, Wakad, and rural areas',
      'Strong STEM-focused mentoring matching Pune\'s academic culture',
      'Value-oriented pricing with transparent ROI tracking',
    ],
    faqs: [
      { q: 'Does MindPeak cover MHT-CET along with JEE?', a: 'Yes. Our Pune mentors integrate MHT-CET with JEE coaching, leveraging the 80%+ syllabus overlap and adding targeted CET-specific practice for topics unique to the Maharashtra exam.' },
      { q: 'How does MindPeak compare to FC Road coaching centres?', a: 'While FC Road centres offer batch coaching with limited personal attention, MindPeak provides dedicated 1-on-1 mentoring. Our students consistently outperform batch-coached peers, as evidenced by our 95% success rate.' },
      { q: 'Can students from rural Pune district access MindPeak?', a: 'Absolutely. Our online model works on standard mobile internet. Students from Baramati, Shirur, or any Pune district location receive identical quality mentoring as those in the city centre.' },
      { q: 'What makes Pune students unique in preparation?', a: 'Pune students typically have strong mathematical foundations and analytical thinking. Our mentors leverage this strength while building competitive exam temperament and speed — areas where Pune students can improve significantly.' },
    ],
  },
  {
    slug: 'ahmedabad',
    city: 'Ahmedabad',
    state: 'Gujarat',
    tier: 1,
    lat: 23.0225,
    lng: 72.5714,
    exams: ['jee', 'neet'],
    educationLandscape:
      'Ahmedabad, Gujarat\'s commercial capital, has a growing competitive exam preparation market. With IIT Gandhinagar nearby and strong pharmaceutical/medical industry presence, both JEE and NEET aspirations are high. Gujarat Board students face adaptation challenges for CBSE-pattern competitive exams. Coaching centres in CG Road, Navrangpura, and Satellite areas serve large batches, but personalised coaching options remain limited. The Gujarati entrepreneurial mindset means families invest strategically in education — seeking measurable returns on coaching investments.',
    whyMindPeak:
      'MindPeak appeals to Ahmedabad\'s results-oriented families by delivering measurable academic improvement through personalised 1-on-1 coaching. Our mentors understand Gujarat Board nuances and bridge gaps to JEE/NEET level requirements efficiently. Students in SG Highway, Bopal, Maninagar, or across Ahmedabad receive consistent premium coaching. GUJCET preparation is integrated alongside national exams. Our ROI-focused approach — with clear metrics, weekly progress reports, and transparent tracking — resonates with Ahmedabad\'s business-minded families. Gujarati-speaking counselors ensure seamless parent communication.',
    mentoringAdvantage:
      'Ahmedabad students are paired with mentors who understand Gujarat\'s educational ecosystem and the GUJCET-JEE overlap. Daily 1-on-1 sessions build competitive exam readiness while maintaining board performance. Mentors use efficiency-focused teaching methods that Ahmedabad students appreciate — maximising score improvement per study hour. Practical application examples from Gujarat\'s strong industrial context make abstract concepts relatable and memorable.',
    parentTracking:
      'Ahmedabad parents receive ROI-focused progress reports that quantify improvement in concrete terms — marks gained, percentile movement, and rank projections. Our dashboard emphasises efficiency metrics: improvement per study hour, cost per mark gained, and trend projections. Gujarati-language summaries are available for parents who prefer them. Monthly mentor calls provide strategic updates with clear action items.',
    highlights: [
      'GUJCET + JEE/NEET integrated preparation',
      'ROI-focused tracking for business-minded Gujarati families',
      'Gujarat Board to competitive exam bridging',
      'Gujarati-speaking support team',
    ],
    faqs: [
      { q: 'Does MindPeak cover GUJCET along with JEE?', a: 'Yes. Our Ahmedabad mentors integrate GUJCET preparation with JEE coaching, leveraging syllabus overlap and adding Gujarat-specific practice modules.' },
      { q: 'My child is from Gujarat Board. Will there be syllabus gaps?', a: 'Our mentors are experienced with Gujarat Board gaps. We conduct a thorough diagnostic assessment at the start and create a personalised plan to bridge any differences from Day 1.' },
      { q: 'Is coaching available in Gujarati?', a: 'Teaching is in English (the exam language), but our counselors and support staff communicate fluently in Gujarati. Parent reports can include Gujarati summaries.' },
      { q: 'How does MindPeak pricing compare to Ahmedabad coaching centres?', a: 'MindPeak offers competitive pricing with significantly more value — 1-on-1 attention that batch centres cannot match. Our transparent ROI tracking helps Ahmedabad families see exactly where their investment goes.' },
    ],
  },

  // ─── TIER 2 ───────────────────────────────────────────
  {
    slug: 'jaipur',
    city: 'Jaipur',
    state: 'Rajasthan',
    tier: 2,
    lat: 26.9124,
    lng: 75.7873,
    exams: ['jee', 'neet'],
    educationLandscape:
      'Jaipur serves as Rajasthan\'s primary education hub and an alternative to nearby Kota. While Kota dominates competitive coaching headlines, Jaipur offers students the advantage of studying in their home city. MNIT Jaipur, SMS Medical College, and other prestigious institutions drive strong JEE/NEET aspirations. Rajasthan Board students have specific bridging needs for national-level competitive exams. Many Jaipur families are reconsidering the Kota model after seeing students struggle with homesickness and mental health challenges.',
    whyMindPeak:
      'MindPeak offers Jaipur students the quality of Kota coaching without leaving home. Our 1-on-1 mentors provide more personalised attention than any Kota institute\'s 200-student batches. Students in Vaishali Nagar, Mansarovar, Malviya Nagar, or anywhere in Jaipur receive dedicated coaching tailored to their pace. Our curriculum addresses Rajasthan Board gaps while building JEE/NEET readiness systematically. Jaipur parents no longer need to choose between quality coaching and their child\'s well-being — MindPeak delivers both. Our proven results, including AIR 42 in JEE Advanced, demonstrate that personalised attention outperforms batch-factory approaches.',
    mentoringAdvantage:
      'Jaipur students receive mentors who understand Rajasthan\'s educational culture and the pressure students face from the Kota comparison. Your mentor becomes a supportive guide — pushing academic excellence while maintaining mental well-being. Daily sessions build confidence alongside competence, with a teaching pace that adapts to your learning speed rather than forcing a rigid batch timeline.',
    parentTracking:
      'Jaipur parents receive comprehensive weekly reports comparing their child\'s progress against target benchmarks. Our transparent tracking system shows exactly how personalised coaching compares to what batch institutes offer. Monthly strategy sessions help families make informed decisions about preparation timelines and exam strategies.',
    highlights: [
      'Kota-quality coaching without leaving Jaipur',
      'Rajasthan Board to JEE/NEET bridging',
      'Mental well-being focused approach',
      'Proven results: AIR 42 in JEE Advanced',
    ],
    faqs: [
      { q: 'Is MindPeak a good alternative to Kota coaching for Jaipur students?', a: 'Yes. MindPeak\'s 1-on-1 coaching delivers personalised attention that Kota\'s batch model cannot match. Our AIR 42 result proves that dedicated mentoring outperforms large batches. Plus, Jaipur students stay at home — avoiding homesickness and mental health challenges common in Kota.' },
      { q: 'Does MindPeak cover Rajasthan Board syllabus gaps?', a: 'Yes. Our mentors conduct diagnostic assessments to identify Rajasthan Board gaps and create personalised bridging plans from Day 1.' },
      { q: 'Can Jaipur students prepare for both REAP and JEE?', a: 'Absolutely. Our mentors integrate state-level exam preparation with national exam coaching, leveraging syllabus overlaps efficiently.' },
      { q: 'What are the fees compared to Kota institutes?', a: 'MindPeak offers competitive pricing with significantly more value — you get a dedicated mentor for your child rather than sharing a teacher with 200+ students. Contact us for personalised pricing.' },
    ],
  },
  {
    slug: 'kochi',
    city: 'Kochi',
    state: 'Kerala',
    tier: 2,
    lat: 9.9312,
    lng: 76.2673,
    exams: ['jee', 'neet'],
    educationLandscape:
      'Kochi and Kerala have exceptionally high literacy rates and education-focused families. NEET preparation is particularly intense given Kerala\'s strong medical tradition. Kerala\'s own entrance exam landscape and state board curriculum create unique preparation requirements. Coaching centres in Ernakulam and Kottayam serve large batches but lack personalised attention. Kerala students are known for strong academic foundations — they need coaching that builds competitive exam edge, not just content coverage.',
    whyMindPeak:
      'MindPeak serves Kerala\'s quality-conscious families with premium 1-on-1 coaching that builds on students\' already strong academic foundations. Our mentors understand Kerala Board\'s strengths and add competitive exam strategies — speed, accuracy, and exam temperament — that differentiate rankers from aspirants. Students across Ernakulam, Thrissur, and Kottayam districts receive identical coaching quality. KEAM integration alongside JEE/NEET preparation ensures Kerala students are covered for all relevant exams. Malayalam-speaking support staff facilitate seamless parent communication.',
    mentoringAdvantage:
      'Kerala students receive mentors who recognise and leverage their strong fundamentals. Instead of re-teaching basics, mentors focus on advanced problem-solving, time management, and strategic exam approaches. Daily 1-on-1 sessions push students beyond their comfort zone with challenging problems, building the competitive edge Kerala students need to stand out nationally.',
    parentTracking:
      'Kerala parents known for educational involvement receive detailed weekly analytics. Our tracking covers performance metrics, strategic readiness, and comparative benchmarks. Malayalam-language summaries keep every family member informed. Monthly strategy sessions ensure preparation aligns with both KEAM and national exam timelines.',
    highlights: [
      'KEAM + JEE/NEET integrated preparation',
      'Advanced coaching for Kerala\'s strong academic foundations',
      'Malayalam-speaking support team',
      'Strong NEET program for Kerala\'s medical aspirants',
    ],
    faqs: [
      { q: 'Does MindPeak cover KEAM along with JEE?', a: 'Yes. Our mentors integrate KEAM preparation with JEE coaching, leveraging the syllabus overlap and adding Kerala-specific practice modules.' },
      { q: 'Kerala students are already strong academically. How does MindPeak help?', a: 'We build on Kerala\'s strong foundations by adding competitive exam strategies — speed techniques, negative marking management, and exam temperament. This is what separates top rankers from good students.' },
      { q: 'Is support available in Malayalam?', a: 'Yes. Our counselors and support staff communicate in Malayalam. Parent reports include Malayalam summaries upon request.' },
      { q: 'How does MindPeak\'s NEET program suit Kerala students?', a: 'Our NEET program emphasises NCERT mastery with advanced application — perfect for Kerala students who have strong science foundations but need competitive exam edge.' },
    ],
  },
  {
    slug: 'indore',
    city: 'Indore',
    state: 'Madhya Pradesh',
    tier: 2,
    lat: 22.7196,
    lng: 75.8577,
    exams: ['jee', 'neet'],
    educationLandscape:
      'Indore is Madhya Pradesh\'s educational centre with IIT Indore, IIM Indore, and several medical colleges driving strong JEE/NEET aspirations. The city has a growing coaching industry, but options for personalised attention remain limited. MP Board students need specific bridging for national competitive exams. Indore\'s pleasant climate and lower cost of living attract students from across central India, creating a competitive preparation environment.',
    whyMindPeak:
      'MindPeak provides Indore students with personalised 1-on-1 coaching that local batch centres cannot match. Our mentors understand MP Board curriculum differences and bridge gaps systematically. Students across Vijay Nagar, Palasia, and AB Road areas receive premium coaching tailored to their individual pace. Our adaptive curriculum identifies and addresses the specific challenges MP Board students face with competitive exam patterns. With competitive pricing suited to Indore\'s cost-of-living, MindPeak offers exceptional value.',
    mentoringAdvantage:
      'Indore students receive dedicated mentors who build on MP Board foundations while adding competitive exam rigour. Daily 1-on-1 sessions ensure thorough concept coverage with practical application. Mentors provide targeted practice on topics where Indore students typically need extra support, creating a focused preparation path.',
    parentTracking:
      'Indore parents receive clear weekly reports with Hindi-language summaries available. Our tracking emphasises practical metrics — marks improvement, topic coverage, and exam readiness. Monthly mentor calls keep families informed and involved in strategic decision-making.',
    highlights: [
      'MP Board to JEE/NEET bridging expertise',
      'Competitive pricing for Indore families',
      'Hindi-speaking mentors and support staff',
      'IIT Indore proximity — mentors with local exam insights',
    ],
    faqs: [
      { q: 'Does MindPeak suit MP Board students in Indore?', a: 'Yes. Our mentors are experienced with MP Board curriculum and systematically bridge gaps to JEE/NEET level. Diagnostic assessments identify specific areas needing attention from Day 1.' },
      { q: 'How does MindPeak pricing work for Indore families?', a: 'Our pricing is designed to offer value across Indian cities. For Indore families, we offer flexible monthly and quarterly plans. Contact us for personalised pricing options.' },
      { q: 'Can Indore students prepare for MP-PET alongside JEE?', a: 'Yes. Our mentors integrate state-level exam preparation with national exam coaching, leveraging syllabus overlaps efficiently.' },
      { q: 'Is teaching available in Hindi?', a: 'Our mentors can teach in Hindi or English based on student preference. Support staff and counselors communicate fluently in Hindi.' },
    ],
  },
  {
    slug: 'chandigarh',
    city: 'Chandigarh',
    state: 'Chandigarh',
    tier: 2,
    lat: 30.7333,
    lng: 76.7794,
    exams: ['jee', 'neet'],
    educationLandscape:
      'Chandigarh, the well-planned city serving as capital for Punjab and Haryana, has a focused educational ecosystem. PEC, Punjab University, and PGIMER create strong engineering and medical aspirations. The city\'s coaching centres in Sector 34 and Sector 17 serve tri-city students from Chandigarh, Panchkula, and Mohali. Punjab and Haryana Board students need bridging for national competitive exams. Chandigarh\'s quality of life makes it an attractive study destination, but coaching options for personalised attention are limited.',
    whyMindPeak:
      'MindPeak serves the tri-city region (Chandigarh, Panchkula, Mohali) with premium 1-on-1 online coaching that eliminates inter-city commute challenges. Our mentors handle Punjab Board, Haryana Board, and CBSE students with equal expertise, bridging curriculum differences to JEE/NEET level. The discipline-oriented culture of Chandigarh students aligns well with our structured coaching methodology. Flexible scheduling works around various board exam calendars in the tri-city region.',
    mentoringAdvantage:
      'Chandigarh students receive disciplined, structured mentoring matching the city\'s organised culture. Daily 1-on-1 sessions follow a systematic progression with clear milestones. Mentors build on the strong work ethic Chandigarh students are known for, channeling it into strategic exam preparation rather than unfocused hard work.',
    parentTracking:
      'Chandigarh parents receive structured weekly reports with clear milestones and progress indicators. Our tracking system appeals to the city\'s systematic, organised families. Quarterly reviews provide strategic direction, ensuring preparation stays on track across the multi-board tri-city environment.',
    highlights: [
      'Tri-city coverage: Chandigarh, Panchkula, Mohali',
      'Multi-board expertise: Punjab, Haryana, and CBSE',
      'Structured methodology for discipline-oriented students',
      'No inter-city commute needed',
    ],
    faqs: [
      { q: 'Does MindPeak serve all three cities — Chandigarh, Panchkula, and Mohali?', a: 'Yes. Our online 1-on-1 model serves all tri-city students equally. No commute between cities needed — students receive premium coaching from home.' },
      { q: 'Can you handle both Punjab and Haryana Board students?', a: 'Absolutely. Our mentors are experienced with both state boards and CBSE, bridging curriculum differences to JEE/NEET requirements seamlessly.' },
      { q: 'How does MindPeak compare to Sector 34 coaching centres?', a: 'While Sector 34 centres teach in batches, MindPeak provides dedicated 1-on-1 mentoring. Our personalised attention and 95% success rate demonstrate the superiority of individualised coaching.' },
      { q: 'Is JEE coaching available for PEC aspirants?', a: 'Yes. Our comprehensive JEE Main + Advanced coaching prepares Chandigarh students for all top engineering colleges including PEC, IIT, and NIT admissions.' },
    ],
  },
  {
    slug: 'nagpur',
    city: 'Nagpur',
    state: 'Maharashtra',
    tier: 2,
    lat: 21.1458,
    lng: 79.0882,
    exams: ['jee', 'neet'],
    educationLandscape:
      'Nagpur, central India\'s educational anchor, is home to VNIT, AIIMS Nagpur, and several engineering and medical colleges that drive competitive exam aspirations. Being a Tier 2 city, coaching options are more limited compared to Mumbai or Pune, making quality personalised coaching particularly valuable. Maharashtra Board students here face the same JEE/NEET bridging challenges, with fewer local resources to address them. Nagpur\'s strategic central location attracts students from Vidarbha region, creating a growing demand for premium coaching.',
    whyMindPeak:
      'MindPeak brings Tier 1 quality coaching to Nagpur students who historically had to relocate to Pune, Mumbai, or Kota for competitive exam preparation. Our 1-on-1 online model eliminates geographic disadvantage entirely. Mentors with expertise in Maharashtra Board bridging help Nagpur students transition smoothly to JEE/NEET level preparation. MHT-CET integration is included at no extra cost. Students across Dharampeth, Sadar, Civil Lines, and Kamptee receive equally premium coaching experiences.',
    mentoringAdvantage:
      'Nagpur students are paired with experienced mentors who level the playing field against metro-city peers. Daily 1-on-1 sessions provide the same quality of teaching available in Mumbai or Delhi. Mentors build confidence alongside competence, ensuring Nagpur students compete nationally without the stress of relocation.',
    parentTracking:
      'Nagpur parents receive transparent weekly reports demonstrating how their children are progressing against national benchmarks. Our tracking helps families see that geographic location no longer limits academic achievement. Hindi and Marathi-speaking counselors ensure seamless communication.',
    highlights: [
      'Tier 1 quality coaching in Nagpur — no relocation needed',
      'Maharashtra Board and MHT-CET integration',
      'Hindi and Marathi-speaking support',
      'VNIT and AIIMS Nagpur focused preparation',
    ],
    faqs: [
      { q: 'Can Nagpur students compete with metro-city peers?', a: 'Absolutely. MindPeak\'s 1-on-1 coaching eliminates the geographic disadvantage. Our Nagpur students receive identical quality of mentoring as Delhi or Mumbai students, and our results prove it.' },
      { q: 'Does MindPeak cover MHT-CET for Nagpur students?', a: 'Yes. MHT-CET preparation is integrated alongside JEE/NEET coaching, leveraging syllabus overlap and adding targeted CET practice.' },
      { q: 'Is Hindi or Marathi medium teaching available?', a: 'Our teaching is primarily in English, but mentors can explain concepts in Hindi. Support staff communicates in Hindi and Marathi for parent convenience.' },
      { q: 'Do I need to send my child to Kota or Pune instead?', a: 'Not anymore. MindPeak\'s online 1-on-1 coaching brings premium quality to Nagpur — with personalised attention that even Kota batch centres cannot provide. Save on hostel costs and keep your child at home.' },
    ],
  },
  {
    slug: 'coimbatore',
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    tier: 2,
    lat: 11.0168,
    lng: 76.9558,
    exams: ['jee', 'neet'],
    educationLandscape:
      'Coimbatore, Tamil Nadu\'s industrial city, has a strong engineering tradition with PSG College and numerous reputed institutions. NEET aspirations are equally strong given Tamil Nadu\'s medical education legacy. The city\'s coaching options are less diverse compared to Chennai, making quality personalised coaching particularly valuable. Tamil Nadu Board students need the same NEET transition support, with fewer local resources to provide it.',
    whyMindPeak:
      'MindPeak brings Chennai-quality coaching to Coimbatore students through personalised 1-on-1 online mentoring. Our mentors handle Tamil Nadu Board to NEET/JEE transition with the same expertise, ensuring Coimbatore students aren\'t at a disadvantage compared to Chennai peers. Students across RS Puram, Gandhipuram, Peelamedu, and Saravanampatti receive premium coaching. TNEA and KEAM integration covers all relevant state-level exams alongside national ones.',
    mentoringAdvantage:
      'Coimbatore students receive mentors who level the playing field with Chennai peers. Daily 1-on-1 sessions provide focused teaching that local batch centres cannot match. Mentors understand Coimbatore\'s practical, application-oriented academic culture and use it as a foundation for competitive exam preparation.',
    parentTracking:
      'Coimbatore parents receive detailed weekly analytics with Tamil-language summaries available. Our tracking demonstrates progress against statewide and national benchmarks, showing families that quality coaching is now accessible regardless of city.',
    highlights: [
      'Chennai-quality coaching in Coimbatore',
      'Tamil Nadu Board to JEE/NEET transition expertise',
      'Tamil-speaking support team',
      'Engineering tradition leveraged for JEE preparation',
    ],
    faqs: [
      { q: 'Can Coimbatore students get the same quality as Chennai coaching?', a: 'Yes. MindPeak\'s online 1-on-1 model delivers identical coaching quality regardless of city. Our Coimbatore students receive the same premium mentoring as Chennai students.' },
      { q: 'Does MindPeak help with TNEA counseling for Coimbatore students?', a: 'While our primary focus is JEE/NEET coaching, our mentors provide guidance on TNEA process and college selection for Tamil Nadu students.' },
      { q: 'Is NEET preparation available with Tamil Nadu Board integration?', a: 'Absolutely. Our mentors are experienced with TN Board to NEET transition — bridging curriculum gaps while maintaining board performance.' },
      { q: 'What subjects do Coimbatore students typically need most help with?', a: 'Similar to other TN Board students, Coimbatore aspirants often need additional support in Physical Chemistry, Modern Physics, and Genetics at the competitive exam level.' },
    ],
  },
  {
    slug: 'surat',
    city: 'Surat',
    state: 'Gujarat',
    tier: 2,
    lat: 21.1702,
    lng: 72.8311,
    exams: ['jee', 'neet'],
    educationLandscape:
      'Surat, Gujarat\'s diamond and textile capital, has a rapidly growing educational aspirations landscape. With SVNIT and growing medical infrastructure, JEE and NEET preparation demand is surging. The city\'s entrepreneurial families invest heavily in education. Coaching options, however, remain largely batch-oriented, with limited personalised attention available. Gujarat Board students face the standard competitive exam bridging challenges.',
    whyMindPeak:
      'MindPeak serves Surat\'s ambitious, investment-minded families with premium 1-on-1 coaching that delivers measurable returns. Our mentors bridge Gujarat Board gaps to JEE/NEET requirements while integrating GUJCET preparation. Students across Adajan, Varachha, Piplod, and Vesu receive equally premium coaching. The ROI-focused tracking system appeals to Surat\'s business-oriented families. Gujarati-speaking support ensures smooth parent communication.',
    mentoringAdvantage:
      'Surat students receive mentors who understand Gujarat\'s educational culture. Daily 1-on-1 sessions maximise learning efficiency — a value Surat families appreciate. Mentors focus on high-impact topics and strategic preparation that delivers maximum marks improvement per study hour invested.',
    parentTracking:
      'Surat parents receive ROI-oriented weekly reports with Gujarati-language summaries. Our tracking quantifies improvement in business-friendly metrics — marks per study hour, rank trajectory, and investment-to-result ratios. Monthly strategy calls ensure families see clear value.',
    highlights: [
      'Premium coaching for Surat\'s ambitious families',
      'GUJCET + JEE/NEET integrated preparation',
      'Gujarati-speaking support team',
      'ROI-focused tracking for investment-minded families',
    ],
    faqs: [
      { q: 'Does MindPeak cover GUJCET for Surat students?', a: 'Yes. Our mentors integrate GUJCET with JEE/NEET preparation, leveraging syllabus overlap and adding Gujarat-specific practice.' },
      { q: 'Is coaching available in Gujarati?', a: 'Teaching is in English (exam language), but our mentors can explain in Gujarati when needed. Support and counseling are available in Gujarati.' },
      { q: 'How does MindPeak compare to Surat coaching centres?', a: 'MindPeak provides dedicated 1-on-1 mentoring that no batch centre in Surat can match. Our 95% success rate demonstrates the power of personalised attention.' },
      { q: 'What are the fees for Surat students?', a: 'Our flexible pricing works for Surat families. Monthly, quarterly, and annual plans are available. Contact us for a personalised pricing discussion.' },
    ],
  },
  {
    slug: 'vadodara',
    city: 'Vadodara',
    state: 'Gujarat',
    tier: 2,
    lat: 22.3072,
    lng: 73.1812,
    exams: ['jee', 'neet'],
    educationLandscape:
      'Vadodara (Baroda), home to MS University and with strong industrial-educational links, has a focused student community aspiring for top engineering and medical colleges. The city\'s coaching landscape is smaller than Ahmedabad\'s, creating a gap in personalised coaching availability. Gujarat Board students need standard competitive exam bridging, and Vadodara families value quality education rooted in the city\'s cultural tradition of learning.',
    whyMindPeak:
      'MindPeak fills Vadodara\'s personalised coaching gap with premium 1-on-1 online mentoring. Our mentors bring Ahmedabad and Delhi-level expertise directly to Vadodara students in Alkapuri, Fatehgunj, and Manjalpur. Gujarat Board bridging and GUJCET integration are standard offerings. Vadodara\'s culture of intellectual curiosity aligns well with our deep-learning approach. Competitive pricing and Gujarati-speaking support make MindPeak accessible to all Vadodara families.',
    mentoringAdvantage:
      'Vadodara students receive mentors who match the city\'s intellectual curiosity with rigorous competitive exam preparation. Daily 1-on-1 sessions foster deep understanding — not surface-level coverage. Mentors leverage Vadodara students\' strong academic traditions to build nationally competitive preparation strategies.',
    parentTracking:
      'Vadodara parents receive detailed weekly reports with Gujarati-language options. Our transparent tracking shows how Vadodara students compete nationally, building confidence that quality coaching is now location-independent.',
    highlights: [
      'Premium coaching filling Vadodara\'s personalised coaching gap',
      'Gujarat Board bridging and GUJCET integration',
      'Gujarati-speaking support',
      'Deep-learning approach matching Vadodara\'s intellectual culture',
    ],
    faqs: [
      { q: 'Can Vadodara students compete with Ahmedabad coaching centre students?', a: 'Yes. MindPeak\'s 1-on-1 model provides more personalised attention than any Ahmedabad batch centre. Our Vadodara students are on equal footing nationally.' },
      { q: 'Does MindPeak serve all areas of Vadodara?', a: 'Yes. Our online model reaches Alkapuri, Fatehgunj, Manjalpur, and any area with internet connectivity — no commute required.' },
      { q: 'Is GUJCET preparation included?', a: 'Yes. GUJCET preparation is integrated alongside JEE/NEET coaching at no additional cost.' },
      { q: 'What makes MindPeak suitable for Vadodara?', a: 'Vadodara\'s intellectual tradition aligns with our deep-learning approach. We build understanding, not just exam tricks — and that produces lasting results.' },
    ],
  },

  // ─── TIER 3 ───────────────────────────────────────────
  {
    slug: 'dehradun',
    city: 'Dehradun',
    state: 'Uttarakhand',
    tier: 3,
    lat: 30.3165,
    lng: 78.0322,
    exams: ['jee', 'neet'],
    educationLandscape:
      'Dehradun, known for prestigious boarding schools like Doon School and RIMC, has a unique educational environment. Students from elite schools aspire for IITs and AIIMS, but personalised competitive exam coaching in the city is limited. Most students either commute to Delhi or enroll in Kota for serious preparation. Uttarakhand Board students face their own bridging challenges for national exams.',
    whyMindPeak:
      'MindPeak provides Dehradun students — whether from elite boarding schools or Uttarakhand Board — with premium 1-on-1 coaching that rivals Delhi or Kota quality. No relocation needed. Our mentors work with diverse student backgrounds, from ICSE/ISC boarding school curricula to state board, creating personalised pathways to JEE/NEET success. Students in Rajpur Road, ISBT area, and Clement Town all receive equally excellent coaching. Flexible scheduling accommodates boarding school terms and local school calendars.',
    mentoringAdvantage:
      'Dehradun students receive mentors who adapt to their specific educational background. Whether you come from a boarding school or state board, daily 1-on-1 sessions are calibrated to your level. Mentors provide the competitive edge that Dehradun\'s limited local coaching options cannot.',
    parentTracking:
      'Dehradun parents — including those of boarding school students — receive weekly reports tracking preparation progress. For boarding school students, mentors coordinate with school schedules. For local students, family involvement is maximised through regular parent-mentor communication.',
    highlights: [
      'Premium coaching for boarding school and local students alike',
      'No relocation to Delhi or Kota needed',
      'Flexible scheduling for diverse school calendars',
      'Uttarakhand Board bridging expertise',
    ],
    faqs: [
      { q: 'Can boarding school students in Dehradun use MindPeak?', a: 'Yes. Our flexible 1-on-1 scheduling works around boarding school terms and study hours. Many elite school students in Dehradun use MindPeak for competitive exam edge alongside their school curriculum.' },
      { q: 'Do I need to send my child to Kota from Dehradun?', a: 'Not anymore. MindPeak brings Kota-quality (actually superior, due to 1-on-1 attention) coaching directly to Dehradun students. Save on hostel costs and relocation stress.' },
      { q: 'Does MindPeak cover Uttarakhand Board gaps?', a: 'Yes. Our diagnostic assessment identifies UK Board gaps from Day 1, and mentors create personalised bridging plans for JEE/NEET readiness.' },
      { q: 'What about students from schools like Doon School or Welham?', a: 'Our mentors work with students from all backgrounds. Elite school students often have strong foundations — we build competitive exam strategies and speed on top of those strengths.' },
    ],
  },
  {
    slug: 'mysore',
    city: 'Mysore',
    state: 'Karnataka',
    tier: 3,
    lat: 12.2958,
    lng: 76.6394,
    exams: ['jee', 'neet'],
    educationLandscape:
      'Mysore, Karnataka\'s cultural capital, has a strong educational tradition with NIT Mysore and JSS institutions. While Bangalore dominates Karnataka\'s coaching market, Mysore students need quality preparation without relocating. The city\'s smaller coaching market means fewer options for personalised competitive exam preparation. Karnataka Board students face the same KCET and JEE/NEET bridging requirements as their Bangalore counterparts.',
    whyMindPeak:
      'MindPeak brings Bangalore-quality 1-on-1 coaching to Mysore students without the relocation. Our mentors handle Karnataka Board bridging, KCET integration, and national exam preparation with equal expertise. Students across Kuvempunagar, Saraswathipuram, and Gokulam receive premium coaching. The personalised approach suits Mysore\'s academic culture, which values thorough understanding over rushed coverage.',
    mentoringAdvantage:
      'Mysore students receive dedicated mentors providing Bangalore-equivalent coaching quality. Daily 1-on-1 sessions build competitive exam readiness while respecting Mysore\'s thorough, methodical learning culture. Mentors provide focused attention that no Mysore batch centre can match.',
    parentTracking:
      'Mysore parents receive comprehensive weekly reports with Kannada-language summaries available. Our tracking demonstrates that location no longer limits coaching quality, giving Mysore families confidence in their child\'s preparation.',
    highlights: [
      'Bangalore-quality coaching in Mysore',
      'KCET + JEE/NEET integration',
      'Kannada-speaking support available',
      'Thorough, methodical approach matching Mysore\'s culture',
    ],
    faqs: [
      { q: 'Can Mysore students get coaching as good as Bangalore?', a: 'Yes. MindPeak\'s online 1-on-1 model delivers identical quality regardless of city. Mysore students receive the same premium mentoring as Bangalore students — with more personalised attention than any batch centre.' },
      { q: 'Does MindPeak cover KCET for Mysore students?', a: 'Yes. KCET preparation is integrated alongside JEE/NEET coaching, with Karnataka-specific practice modules included.' },
      { q: 'Is Kannada medium support available?', a: 'Teaching is in English, but support staff and counselors communicate in Kannada. Concepts can be explained in Kannada when needed.' },
      { q: 'Do I need to send my child to Bangalore for coaching?', a: 'Not anymore. MindPeak brings premium coaching directly to Mysore — saving commute time and relocation costs while delivering better results through personalised attention.' },
    ],
  },
  {
    slug: 'rajkot',
    city: 'Rajkot',
    state: 'Gujarat',
    tier: 3,
    lat: 22.3039,
    lng: 70.8022,
    exams: ['jee', 'neet'],
    educationLandscape:
      'Rajkot, Gujarat\'s vibrant commercial hub in Saurashtra, has growing educational aspirations driven by engineering and medical college proximity. The city\'s coaching market is developing but lacks the depth of Ahmedabad. Gujarat Board students here need standard competitive exam preparation with accessible, quality coaching. Rajkot\'s practical, no-nonsense culture values efficient, results-oriented education.',
    whyMindPeak:
      'MindPeak provides Rajkot students with Ahmedabad-quality 1-on-1 coaching without the travel. Our efficient, results-oriented approach aligns with Saurashtra\'s practical culture. Gujarat Board bridging, GUJCET integration, and nationally competitive JEE/NEET preparation are all included. Gujarati-speaking support ensures seamless family communication. Students across Rajkot receive premium coaching that was previously unavailable locally.',
    mentoringAdvantage:
      'Rajkot students receive efficient, results-focused mentoring matching the city\'s practical ethos. Daily 1-on-1 sessions are designed for maximum impact per hour. Mentors focus on high-yield topics and strategic exam preparation that delivers measurable results quickly.',
    parentTracking:
      'Rajkot parents receive straightforward weekly reports emphasising results and efficiency. Gujarati-language support ensures clear communication. Our no-nonsense tracking style resonates with Saurashtra families.',
    highlights: [
      'Ahmedabad-quality coaching in Rajkot',
      'Gujarat Board bridging and GUJCET integration',
      'Gujarati-speaking team',
      'Efficient, results-oriented approach',
    ],
    faqs: [
      { q: 'Can Rajkot students compete nationally?', a: 'Yes. MindPeak\'s 1-on-1 coaching gives Rajkot students the same quality preparation as metro-city peers. Geography is no longer a barrier to competitive exam success.' },
      { q: 'Is GUJCET covered for Rajkot students?', a: 'Yes. GUJCET preparation is integrated alongside JEE/NEET coaching, with Gujarat-specific practice included.' },
      { q: 'Do I need to send my child to Ahmedabad?', a: 'Not anymore. MindPeak brings premium coaching to Rajkot — actually better than Ahmedabad batch centres because of our dedicated 1-on-1 attention.' },
      { q: 'Is coaching available in Gujarati?', a: 'Teaching is in English with Gujarati explanations as needed. All support and counseling are available in Gujarati.' },
    ],
  },
  {
    slug: 'udaipur',
    city: 'Udaipur',
    state: 'Rajasthan',
    tier: 3,
    lat: 24.5854,
    lng: 73.7125,
    exams: ['jee', 'neet'],
    educationLandscape:
      'Udaipur, known globally as the City of Lakes, has a growing educational scene with engineering and medical aspirants often looking to Kota or Jaipur for quality coaching. Local coaching options are limited, and Rajasthan Board students face the standard competitive exam bridging challenges. Many Udaipur families reluctantly send children to Kota, despite concerns about wellbeing and distance.',
    whyMindPeak:
      'MindPeak eliminates Udaipur families\' dilemma of choosing between quality coaching and keeping children at home. Our 1-on-1 online mentoring delivers superior results compared to Kota batch coaching — with personalised attention that even top Kota institutes cannot provide. Rajasthan Board bridging is handled systematically. Students can prepare in Udaipur\'s pleasant environment without the pressures of Kota hostel life. Our proven AIR 42 result demonstrates that personalised coaching beats factory-model approaches.',
    mentoringAdvantage:
      'Udaipur students receive dedicated mentors who provide Kota-surpassing quality through 1-on-1 attention. Daily sessions are tailored to individual learning pace and style — something impossible in Kota\'s 200-student batches. Mentors build both academic excellence and mental well-being.',
    parentTracking:
      'Udaipur parents receive reassuring weekly reports showing their child\'s nationally competitive progress. Our tracking proves that quality coaching is accessible from Udaipur itself. Hindi-speaking counselors keep families informed and confident.',
    highlights: [
      'Kota-surpassing quality from Udaipur — no relocation needed',
      'Rajasthan Board bridging expertise',
      'Mental well-being prioritised alongside academics',
      'Hindi-speaking support team',
    ],
    faqs: [
      { q: 'Is MindPeak better than sending my child to Kota from Udaipur?', a: 'Our results say yes. MindPeak\'s 1-on-1 coaching provides more personalised attention than any Kota batch centre. Our AIR 42 result was achieved through dedicated mentoring, not crowded classrooms. Your child stays safe at home in Udaipur.' },
      { q: 'Does MindPeak handle Rajasthan Board gaps for Udaipur students?', a: 'Yes. Our mentors conduct diagnostic assessments to identify Rajasthan Board gaps and create personalised bridging plans from Day 1.' },
      { q: 'Can Udaipur students really compete nationally?', a: 'Absolutely. MindPeak levels the playing field completely. Our online 1-on-1 model means Udaipur students receive identical quality coaching as Delhi or Mumbai students.' },
      { q: 'What are the fees compared to Kota coaching + hostel?', a: 'MindPeak\'s fees are significantly lower than Kota coaching + hostel costs combined — and you get better results through personalised 1-on-1 attention. Contact us for detailed pricing.' },
    ],
  },
];

/** Get all exam-city combinations for route generation */
export function getLocationRoutes(): { path: string; exam: 'jee' | 'neet'; city: CityData }[] {
  const routes: { path: string; exam: 'jee' | 'neet'; city: CityData }[] = [];
  for (const city of cities) {
    for (const exam of city.exams) {
      routes.push({
        path: `/${exam}-coaching-in-${city.slug}`,
        exam,
        city,
      });
    }
  }
  return routes;
}

/** Generate meta title for location page */
export function getLocationTitle(exam: 'jee' | 'neet', city: string): string {
  const examLabel = exam === 'jee' ? 'JEE' : 'NEET';
  return `Best ${examLabel} Coaching in ${city} — 1-on-1 Personalized | MindPeak`;
}

/** Generate meta description for location page */
export function getLocationDescription(exam: 'jee' | 'neet', city: string): string {
  const examLabel = exam === 'jee' ? 'JEE Main & Advanced' : 'NEET UG';
  return `Top ${examLabel} coaching in ${city} with personalized 1-on-1 mentoring, adaptive curriculum & dedicated mentors. 95% success rate. Book free demo.`;
}

import type { FAQItem } from '@/components/PageFAQ';
import { CURRENT_EXAM_YEAR } from '@/lib/examYears';

export interface CompetitorData {
  slug: string;
  competitorName: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  comparisonRows: { feature: string; mindpeak: string; competitor: string }[];
  whyBetter: { title: string; desc: string }[];
  faqs: FAQItem[];
}

export const competitors: CompetitorData[] = [
  {
    slug: 'mindpeak-vs-allen',
    competitorName: 'Allen',
    title: 'MindPeak vs Allen',
    metaTitle: `MindPeak vs Allen — 1-on-1 vs Batch JEE/NEET Coaching Comparison | ${CURRENT_EXAM_YEAR}`,
    metaDescription: 'Detailed comparison of MindPeak vs Allen coaching for JEE & NEET. Compare teaching format, fees, mentor quality, doubt resolution, and results. See why students switch.',
    intro: 'Allen Career Institute is one of India\'s biggest coaching brands, known for mass-scale JEE and NEET preparation in Kota. With batches of 100-200+ students, Allen follows a factory-model where top students thrive but the majority struggle for attention. MindPeak takes the opposite approach: dedicated 1-on-1 mentorship where every student is the entire focus. Here\'s how the two approaches compare.',
    comparisonRows: [
      { feature: 'Teaching Format', mindpeak: '1-on-1 Online (Dedicated Mentor)', competitor: 'Batch (100-200 students)' },
      { feature: 'Fee (1-Year JEE/NEET)', mindpeak: '₹1,30,000* + GST', competitor: '₹1,20,000+ (tuition only)' },
      { feature: 'Total Cost (with living)', mindpeak: '₹1,30,000 (all-inclusive)', competitor: '₹2,00,000+ (tuition + hostel + food)' },
      { feature: 'Dedicated Mentor', mindpeak: '✓ 1 mentor per student', competitor: '✗ 1 teacher per 100-200 students' },
      { feature: 'Adaptive Curriculum', mindpeak: '✓ AI-driven, personalized', competitor: '✗ Fixed, one-size-fits-all' },
      { feature: 'Doubt Resolution', mindpeak: 'Real-time 1-on-1 in sessions', competitor: 'Crowded doubt counters (long waits)' },
      { feature: 'Recorded Sessions', mindpeak: '✓ Every class recorded', competitor: 'Limited (ALLEN Online only)' },
      { feature: 'Parent Reports', mindpeak: '✓ Weekly detailed reports', competitor: 'Quarterly PTMs' },
      { feature: 'Location', mindpeak: 'Study from home (anywhere in India)', competitor: 'Kota / select cities' },
      { feature: 'Schedule Flexibility', mindpeak: '✓ Flexible around school', competitor: '✗ Fixed batches' },
    ],
    whyBetter: [
      { title: 'Personal Attention vs Numbers', desc: 'Allen processes thousands of students annually. Your child competes for attention in a 200-person hall. At MindPeak, your child IS the class. Every session, every question, every study plan is built around them.' },
      { title: 'Save ₹70K+ Per Year', desc: 'Allen Kota costs ₹2L+ annually (tuition + hostel + food). MindPeak delivers superior 1-on-1 coaching for ₹1.3L all-inclusive after discount. No travel, no hostel, no hidden costs.' },
      { title: 'Stay Home, Stay Focused', desc: 'No sending your child 1,000km away to Kota. Study from home with family support. Our weekly parent reports give you visibility that Allen\'s quarterly PTMs never can.' },
      { title: 'Results That Match or Exceed', desc: 'MindPeak has produced AIR 42 in JEE Advanced and 98.5+ percentile in NEET. Our 95% success rate demonstrates that personalized coaching delivers where batch models fall short.' },
    ],
    faqs: [
      { question: 'Is MindPeak as good as Allen for JEE preparation?', answer: 'MindPeak and Allen serve different student segments. Allen excels for the top 5-10% of students who can thrive independently in competitive batch environments. MindPeak is better for the 90% who need personalized attention, adaptive curriculum, and accountability. Our results (AIR 42 JEE Advanced, 95% success rate) demonstrate that 1-on-1 coaching delivers exceptional outcomes.' },
      { question: 'Why do students switch from Allen to MindPeak?', answer: 'The most common reasons are: lack of personal attention in large batches, inability to get doubts resolved quickly, fixed curriculum not adapting to individual needs, and the stress of living away from home in Kota. Students who switch typically see significant score improvements within 3-4 months.' },
      { question: 'Is MindPeak cheaper than Allen?', answer: 'Yes. Allen Kota\'s total cost is ₹2L+ per year (tuition ₹1.2L + hostel ₹50K+ + food + transport). MindPeak\'s 1-year JEE/NEET program is ₹1.3L all-inclusive after discount. You save ₹70K+ while getting dedicated 1-on-1 attention instead of batch teaching.' },
      { question: 'Can I access Allen\'s test series alongside MindPeak coaching?', answer: 'Yes. Many of our students take external test series (including Allen\'s) alongside MindPeak coaching. Your mentor can incorporate external test analysis into your preparation strategy.' },
    ],
  },
  {
    slug: 'mindpeak-vs-resonance',
    competitorName: 'Resonance',
    title: 'MindPeak vs Resonance',
    metaTitle: `MindPeak vs Resonance — 1-on-1 vs Batch Coaching Comparison | JEE & NEET ${CURRENT_EXAM_YEAR}`,
    metaDescription: 'MindPeak vs Resonance coaching comparison. Compare fees, teaching quality, mentor attention, results. See why personalized 1-on-1 coaching beats batch teaching.',
    intro: 'Resonance Eduventures is a well-known coaching brand based in Kota, offering batch coaching for JEE and NEET with decent results. However, like all batch models, Resonance struggles to provide individual attention to each student. MindPeak\'s 1-on-1 approach fundamentally differs — every student gets a dedicated mentor, personalized curriculum, and real-time doubt resolution. Here\'s a detailed comparison.',
    comparisonRows: [
      { feature: 'Teaching Format', mindpeak: '1-on-1 Online (Dedicated Mentor)', competitor: 'Batch (50-100 students)' },
      { feature: 'Fee (1-Year)', mindpeak: '₹1,30,000* + GST', competitor: '₹1,00,000+ (tuition only)' },
      { feature: 'Total Annual Cost', mindpeak: '₹1,30,000 (all-inclusive)', competitor: '₹1,80,000+ (with living expenses)' },
      { feature: 'Dedicated Mentor', mindpeak: '✓ 1 mentor per student', competitor: '✗ Shared teacher' },
      { feature: 'Adaptive Curriculum', mindpeak: '✓ Personalized', competitor: '✗ Fixed syllabus pace' },
      { feature: 'Doubt Resolution', mindpeak: 'Real-time 1-on-1', competitor: 'Limited slots after class' },
      { feature: 'Parent Reports', mindpeak: '✓ Weekly', competitor: 'Monthly/Quarterly' },
      { feature: 'Recorded Sessions', mindpeak: '✓ Every class', competitor: '✗ Not available' },
      { feature: 'Study Location', mindpeak: 'From home (anywhere)', competitor: 'Kota / select cities' },
    ],
    whyBetter: [
      { title: 'Dedicated vs Shared Attention', desc: 'Resonance teachers are excellent but shared across 50-100 students. Your child gets dedicated 1-on-1 focus at MindPeak — more attention per session than a full month of batch classes.' },
      { title: 'Lower Total Cost', desc: 'Resonance Kota costs ₹1.8L+ with living expenses. MindPeak delivers premium 1-on-1 coaching for ₹1.3L after discount. Better value, better attention.' },
      { title: 'No Fixed Batches', desc: 'Join anytime, study at your pace. Resonance requires batch commitment and fixed schedules. MindPeak adapts to your calendar.' },
      { title: 'Proven Results', desc: '95% success rate, AIR 42 in JEE Advanced. Our personalized approach consistently outperforms what most batch students achieve.' },
    ],
    faqs: [
      { question: 'Is MindPeak better than Resonance for JEE?', answer: 'For students who need personalized attention (which is most students), yes. MindPeak\'s 1-on-1 format ensures your specific weaknesses are addressed, your pace is followed, and your doubts are resolved immediately. Resonance is good for self-driven students comfortable in batch environments.' },
      { question: 'How do MindPeak fees compare with Resonance?', answer: 'MindPeak\'s 1-year program is ₹1.3L all-inclusive after discount vs Resonance Kota\'s ₹1.8L+ (tuition + living). You save ₹50K+ while getting significantly more personal attention.' },
      { question: 'Can I switch from Resonance to MindPeak mid-year?', answer: 'Yes! Since our coaching is 1-on-1, there are no batch constraints. We\'ll assess your current level, identify gaps in your preparation, and create a customized catch-up plan.' },
    ],
  },
  {
    slug: 'mindpeak-vs-fiitjee',
    competitorName: 'FIITJEE',
    title: 'MindPeak vs FIITJEE',
    metaTitle: `MindPeak vs FIITJEE — 1-on-1 Personalized vs Batch Coaching | JEE ${CURRENT_EXAM_YEAR}`,
    metaDescription: 'MindPeak vs FIITJEE comparison for JEE coaching. Compare teaching methods, fees, results. Discover why 1-on-1 coaching delivers better results than FIITJEE batches.',
    intro: 'FIITJEE is one of India\'s oldest and most recognized JEE coaching brands, known for producing toppers through its intensive batch program. However, the FIITJEE model — like all batch models — primarily benefits the top-performing students who would likely succeed regardless. For the majority, the experience is high-pressure batch coaching with limited personal attention. MindPeak offers a fundamentally different proposition.',
    comparisonRows: [
      { feature: 'Teaching Format', mindpeak: '1-on-1 Online (Dedicated Mentor)', competitor: 'Batch (60-80 students)' },
      { feature: 'Fee (1-Year JEE)', mindpeak: '₹1,30,000* + GST', competitor: '₹1,50,000+ (tuition only)' },
      { feature: 'Total Cost (Annual)', mindpeak: '₹1,30,000 (all-inclusive, online)', competitor: '₹1,50,000+ (+ travel costs)' },
      { feature: 'Dedicated Mentor', mindpeak: '✓ Personal mentor', competitor: '✗ Batch teacher' },
      { feature: 'Adaptive Curriculum', mindpeak: '✓ AI-driven personalized', competitor: '✗ Fixed, standardized' },
      { feature: 'Doubt Resolution', mindpeak: 'Real-time, every session', competitor: 'After-class sessions (limited)' },
      { feature: 'Recorded Content', mindpeak: '✓ Every class recorded', competitor: '✗ Not available' },
      { feature: 'Progress Tracking', mindpeak: '✓ Weekly analytics + parent reports', competitor: 'Periodic test scores' },
      { feature: 'Schedule', mindpeak: '✓ Flexible', competitor: '✗ Fixed batches' },
    ],
    whyBetter: [
      { title: 'Personal Attention FIITJEE Can\'t Match', desc: 'FIITJEE classrooms have 60-80 students. Even with excellent teachers, individual attention is impossible. At MindPeak, every session is 1-on-1 with your dedicated mentor.' },
      { title: 'Actually Cheaper', desc: 'FIITJEE charges ₹1.5L+ for batch coaching. MindPeak charges ₹1.3L after discount for dedicated 1-on-1 attention. Better coaching at a lower price.' },
      { title: 'For EVERY Student, Not Just Toppers', desc: 'FIITJEE\'s top results come from students who were already exceptional. Their batch model serves these students well. But for the 90% who need personalized support, 1-on-1 coaching delivers significantly better outcomes.' },
      { title: 'Flexibility Over Rigidity', desc: 'FIITJEE\'s rigid batch schedules don\'t accommodate school boards, family events, or individual pacing needs. MindPeak\'s flexible 1-on-1 sessions adapt to your life.' },
    ],
    faqs: [
      { question: 'Is MindPeak as reputed as FIITJEE?', answer: 'FIITJEE has decades of brand recognition. MindPeak is newer but has quickly built credibility through results (AIR 42 JEE Advanced, 95% success rate) and a fundamentally better teaching model. Many students switch from FIITJEE to MindPeak specifically for the personalized attention.' },
      { question: 'FIITJEE produces IIT toppers. Can MindPeak match that?', answer: 'Our best result is AIR 42 in JEE Advanced. FIITJEE\'s toppers typically come from their small, highly selective batches — not the regular program most students join. For the average JEE aspirant, MindPeak\'s personalized approach delivers better outcomes than FIITJEE\'s large batches.' },
      { question: 'Can I do FIITJEE test series with MindPeak coaching?', answer: 'Yes. Many students combine MindPeak 1-on-1 coaching with external test series. Your mentor will help integrate external test analysis into your preparation strategy.' },
    ],
  },
  {
    slug: 'mindpeak-vs-byjus',
    competitorName: 'BYJU\'S',
    title: 'MindPeak vs BYJU\'S',
    metaTitle: `MindPeak vs BYJU'S — Live 1-on-1 vs Recorded/Hybrid Coaching | ${CURRENT_EXAM_YEAR}`,
    metaDescription: 'MindPeak vs BYJU\'S for JEE & NEET coaching. Compare live 1-on-1 mentorship vs recorded content + hybrid model. See why live personalized coaching wins.',
    intro: 'BYJU\'S is India\'s largest edtech brand, known for produced content and app-based learning. However, for competitive exam preparation like JEE and NEET, recorded content and automated programs have significant limitations. MindPeak offers what BYJU\'S cannot: live 1-on-1 daily sessions with a dedicated human mentor who knows your child personally.',
    comparisonRows: [
      { feature: 'Teaching Format', mindpeak: 'Live 1-on-1 with Dedicated Mentor', competitor: 'Recorded content + Hybrid batches' },
      { feature: 'Fee (Annual)', mindpeak: '₹1,30,000* + GST', competitor: '₹1,50,000+ (full program)' },
      { feature: 'Live Classes', mindpeak: '✓ Daily 1-on-1 sessions', competitor: 'Limited live (mostly recorded)' },
      { feature: 'Dedicated Mentor', mindpeak: '✓ Same mentor throughout', competitor: '✗ No dedicated mentor' },
      { feature: 'Adaptive Curriculum', mindpeak: '✓ Human + Data-driven', competitor: 'App-based, automated' },
      { feature: 'Doubt Resolution', mindpeak: 'Real-time during live sessions', competitor: 'Chat support / delayed' },
      { feature: 'Human Connection', mindpeak: '✓ Deep mentor relationship', competitor: '✗ Minimal human interaction' },
      { feature: 'Parent Reports', mindpeak: '✓ Weekly + mentor calls', competitor: 'App-based analytics' },
      { feature: 'Accountability', mindpeak: '✓ Daily mentor check-ins', competitor: 'Self-paced (easy to drop off)' },
    ],
    whyBetter: [
      { title: 'Live Humans, Not Videos', desc: 'BYJU\'S relies heavily on recorded content. For JEE/NEET, where understanding builds through questions, discussion, and personalized problem-solving, live 1-on-1 sessions are incomparably more effective.' },
      { title: 'Accountability = Results', desc: 'The #1 problem with app-based learning: students stop using it. BYJU\'S has notoriously high dropout rates. MindPeak\'s daily live sessions with your dedicated mentor ensure consistent engagement and accountability.' },
      { title: 'Mentor Who Knows Your Child', desc: 'BYJU\'S assigns different tutors/chatbots for doubt resolution. At MindPeak, your child has ONE mentor who knows their learning style, weaknesses, and goals. This continuity drives meaningful progress.' },
      { title: 'Competitive Pricing', desc: 'BYJU\'S full JEE/NEET programs cost ₹1.5L+. MindPeak offers a dedicated human mentor for ₹1.3L after discount. Better teaching, lower price.' },
    ],
    faqs: [
      { question: 'Is MindPeak better than BYJU\'S for JEE/NEET?', answer: 'For competitive exam preparation, yes. BYJU\'S excels at content creation and concept introduction, but JEE/NEET demands personalized problem-solving practice, real-time doubt resolution, and adaptive strategy — all of which require a live human mentor. MindPeak delivers this through daily 1-on-1 sessions.' },
      { question: 'Can I use BYJU\'S content alongside MindPeak coaching?', answer: 'Absolutely. Some students use BYJU\'S videos for concept revision and MindPeak for live coaching, doubt resolution, and personalized preparation. Your mentor can help integrate external resources into your study plan.' },
      { question: 'My child keeps getting distracted by the BYJU\'S app. Will MindPeak help?', answer: 'Yes. The key difference is accountability. With BYJU\'S, your child studies alone (easy to get distracted). With MindPeak, daily live sessions with a mentor who knows them personally creates engagement and commitment that apps cannot replicate.' },
    ],
  },
];

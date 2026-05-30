/**
 * State-hub data — genuinely differentiated regional landing pages that
 * consolidate the per-city doorway pages (recovery action #4).
 *
 * IMPORTANT: these are indexable. Each state's content is unique by
 * substance — state board, state entrance exam, real target colleges, and
 * major in-state cities all differ — NOT a city-name-swapped template.
 * Keep it that way; thin/duplicated hubs would re-trigger the doorway
 * problem.
 *
 * Edge-safe: imports only CURRENT_EXAM_YEAR (pure).
 */

import { CURRENT_EXAM_YEAR as YEAR } from '@/lib/examYears';

export interface StateHubFAQ {
  q: string;
  a: string;
}

export interface StateHub {
  /** State slug used in URLs, e.g. 'karnataka' → /jee-coaching-in-karnataka */
  slug: string;
  state: string;
  /** State school board name */
  board: string;
  /** State engineering entrance / counselling exam(s) */
  engExam: string;
  /** Medical counselling route in-state (NEET is national) */
  medRoute: string;
  /** Top engineering targets relevant to the state's students */
  engColleges: string[];
  /** Top medical college targets */
  medColleges: string[];
  /** Major in-state cities (for "students from …") */
  cities: string[];
  /** 2-3 sentence unique intro for the JEE hub */
  jeeIntro: string;
  /** 2-3 sentence unique intro for the NEET hub */
  neetIntro: string;
  /** Shared, state-specific FAQs */
  faqs: StateHubFAQ[];
}

export const stateHubs: StateHub[] = [
  {
    slug: 'uttar-pradesh',
    state: 'Uttar Pradesh',
    board: 'UP Board (UPMSP) & CBSE',
    engExam: 'JEE Main/Advanced (UPTAC counselling for AKTU colleges)',
    medRoute: 'NEET UG + UP state counselling',
    engColleges: ['IIT Kanpur', 'IIT (BHU) Varanasi', 'MNNIT Allahabad', 'HBTU Kanpur', 'AKTU-affiliated colleges'],
    medColleges: ['KGMU Lucknow', 'IMS-BHU Varanasi', 'GSVM Kanpur', 'SGPGI Lucknow'],
    cities: ['Lucknow', 'Kanpur', 'Varanasi', 'Prayagraj', 'Agra', 'Meerut', 'Noida', 'Ghaziabad', 'Bareilly', 'Gorakhpur'],
    jeeIntro: `UP sends more JEE aspirants than almost any other state, yet outside Kanpur and Noida most students are stuck with 150-seat batch institutes built around the UP Board syllabus. MindPeak gives 1-on-1 JEE Main & Advanced coaching that bridges the UP Board → JEE gap and targets IIT Kanpur, IIT-BHU and MNNIT Allahabad — without relocating to Kota or Delhi.`,
    neetIntro: `For UP NEET aspirants, the jump from UP Board biology to NEET's NCERT-line precision is the single biggest hurdle. Our 1-on-1 mentors rebuild that foundation and drill the exact NCERT detail NTA tests, with KGMU Lucknow and IMS-BHU as the targets.`,
    faqs: [
      { q: `Is online 1-on-1 coaching better than Kota for a UP student in ${YEAR}?`, a: `For most UP students, yes — you keep your home routine and UP Board school while getting a dedicated mentor, instead of competing for attention in a 150-student Kota batch. The relocation cost and isolation of Kota rarely pay off versus focused 1-on-1 prep.` },
      { q: `Do you cover the UP Board to JEE/NEET transition?`, a: `Yes. UP Board students often have gaps in problem-solving depth and English-medium technical vocabulary. Your mentor diagnoses these in the first week and builds a bridge plan before moving to JEE/NEET-level material.` },
      { q: `Which colleges do UP MindPeak students target?`, a: `For JEE: IIT Kanpur, IIT-BHU, MNNIT Allahabad and top AKTU colleges. For NEET: KGMU Lucknow, IMS-BHU and GSVM Kanpur.` },
    ],
  },
  {
    slug: 'maharashtra',
    state: 'Maharashtra',
    board: 'Maharashtra HSC & CBSE',
    engExam: 'MHT-CET + JEE Main',
    medRoute: 'NEET UG + Maharashtra state counselling',
    engColleges: ['IIT Bombay', 'VJTI Mumbai', 'COEP Pune', 'ICT Mumbai', 'VNIT Nagpur', 'SPIT Mumbai'],
    medColleges: ['Seth GS (KEM) Mumbai', 'Grant Medical College Mumbai', 'AFMC Pune', 'BJ Medical College Pune'],
    cities: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Thane', 'Aurangabad', 'Kolhapur', 'Navi Mumbai'],
    jeeIntro: `Maharashtra students juggle two targets at once — MHT-CET for VJTI/COEP/ICT and JEE for the IITs/NITs. MindPeak's 1-on-1 plans cover the MHT-CET + JEE overlap in one integrated track, so you don't waste time in separate batches, and you skip the 2-3 hour Mumbai/Pune commutes.`,
    neetIntro: `With KEM, Grant and AFMC among the most competitive medical seats in India, Maharashtra NEET aspirants need precision, not volume. Our mentors integrate MHT-CET and NEET prep and rebuild Biology from the HSC base to the NCERT detail NTA actually tests.`,
    faqs: [
      { q: `Can I prepare for MHT-CET and JEE together in ${YEAR}?`, a: `Yes — the syllabi overlap heavily. Your mentor builds one integrated plan that covers the JEE-depth topics and the MHT-CET-specific weighting, so you sit both exams without doubling your workload.` },
      { q: `Do I need to travel to a Mumbai or Pune coaching centre?`, a: `No. MindPeak is 1-on-1 online, so students from Thane, Navi Mumbai, Nashik or Nagpur get the same mentor quality without losing hours to local-train commutes.` },
      { q: `Which colleges do Maharashtra students target?`, a: `JEE: IIT Bombay, VJTI, COEP, ICT, VNIT Nagpur. NEET: Seth GS (KEM), Grant Medical College, AFMC and BJ Medical College Pune.` },
    ],
  },
  {
    slug: 'karnataka',
    state: 'Karnataka',
    board: 'Karnataka PUC (PUE) & CBSE',
    engExam: 'KCET + COMEDK + JEE Main',
    medRoute: 'NEET UG + KCET state counselling',
    engColleges: ['IISc Bangalore', 'IIT Dharwad', 'NITK Surathkal', 'RVCE Bangalore', 'BMSCE Bangalore', 'PES University'],
    medColleges: ['Bangalore Medical College', 'KMC Manipal', 'St John\'s Medical College', 'Ramaiah Medical College'],
    cities: ['Bangalore', 'Mysore', 'Mangalore', 'Hubli', 'Belgaum', 'Davanagere', 'Shimoga', 'Udupi'],
    jeeIntro: `Karnataka students chase three doors at once — KCET, COMEDK and JEE. MindPeak runs a single 1-on-1 track that covers the KCET + JEE overlap and pushes for NITK Surathkal, IIT Dharwad and the top RVCE/BMSCE/PES seats, with Kannada-language support where it helps.`,
    neetIntro: `From Bangalore Medical College to KMC Manipal, Karnataka's medical seats are fiercely contested across KCET and all-India NEET quotas. Our 1-on-1 NEET mentors integrate KCET and NEET prep and tighten Biology recall to the NCERT line.`,
    faqs: [
      { q: `Do you cover KCET and COMEDK along with JEE in ${YEAR}?`, a: `Yes. Your mentor maps the shared syllabus once and tunes weighting for each exam, so a single plan serves KCET, COMEDK and JEE Main without three separate batches.` },
      { q: `Is Kannada-medium support available?`, a: `Yes — mentors can explain tough concepts in Kannada where it speeds up understanding, while keeping all technical work in the English used by the exams.` },
      { q: `Which colleges do Karnataka students target?`, a: `JEE/KCET: IISc, IIT Dharwad, NITK Surathkal, RVCE, BMSCE, PES. NEET: Bangalore Medical College, KMC Manipal, St John's and Ramaiah.` },
    ],
  },
  {
    slug: 'tamil-nadu',
    state: 'Tamil Nadu',
    board: 'Tamil Nadu HSC (State Board) & CBSE',
    engExam: 'TNEA (marks-based) + JEE Main',
    medRoute: 'NEET UG + TN state counselling',
    engColleges: ['IIT Madras', 'NIT Trichy', 'Anna University (CEG)', 'PSG Tech Coimbatore', 'SSN Chennai'],
    medColleges: ['Madras Medical College', 'Stanley Medical College', 'CMC Vellore', 'Madurai Medical College'],
    cities: ['Chennai', 'Coimbatore', 'Madurai', 'Trichy', 'Salem', 'Tirunelveli', 'Erode', 'Vellore'],
    jeeIntro: `Tamil Nadu's TNEA admits on Class-12 marks, so many state-board students never build true JEE problem-solving depth — then struggle when they attempt JEE for IIT Madras or NIT Trichy. MindPeak's 1-on-1 coaching closes exactly that TN-Board → JEE gap, with Tamil-medium support where needed.`,
    neetIntro: `NEET is the single gateway to TN's celebrated medical colleges — Madras Medical College, Stanley, CMC Vellore. Our 1-on-1 mentors rebuild Biology from the TN State Board base to NCERT precision and drill the question patterns NTA repeats.`,
    faqs: [
      { q: `I'm a TN State Board student — can I still crack JEE in ${YEAR}?`, a: `Yes, but it needs a deliberate bridge: TNEA's marks-based admission means most state-board students under-train on JEE-depth problems. Your mentor builds that depth from your current level rather than assuming a CBSE base.` },
      { q: `Is Tamil-medium explanation available?`, a: `Yes — concepts can be explained in Tamil to speed understanding, while all problem-solving stays in the English the exams use.` },
      { q: `Which colleges do Tamil Nadu students target?`, a: `JEE: IIT Madras, NIT Trichy, Anna University CEG, PSG Tech. NEET: Madras Medical College, Stanley, CMC Vellore, Madurai Medical College.` },
    ],
  },
  {
    slug: 'rajasthan',
    state: 'Rajasthan',
    board: 'RBSE (Rajasthan Board) & CBSE',
    engExam: 'JEE Main/Advanced (REAP counselling for state colleges)',
    medRoute: 'NEET UG + Rajasthan state counselling',
    engColleges: ['MNIT Jaipur', 'IIT Jodhpur', 'BITS Pilani', 'Government colleges via REAP'],
    medColleges: ['SMS Medical College Jaipur', 'RNT Medical College Udaipur', 'Government Medical Colleges (Rajasthan)'],
    cities: ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Ajmer', 'Bikaner', 'Sikar', 'Alwar'],
    jeeIntro: `Rajasthan is the home of Kota — but the Kota batch model means thousands of students competing for one teacher's attention, far from home. MindPeak offers the opposite: 1-on-1 JEE coaching you take from Jaipur, Jodhpur, Udaipur or anywhere in the state, targeting MNIT Jaipur, IIT Jodhpur and BITS Pilani without the relocation toll.`,
    neetIntro: `Rajasthan NEET aspirants don't need to move to Kota to compete for SMS Medical College Jaipur or RNT Udaipur. Our 1-on-1 mentors give the personal attention a Kota mega-batch can't, with a plan built around your exact weak chapters.`,
    faqs: [
      { q: `Why choose 1-on-1 over a Kota batch in ${YEAR}?`, a: `In Kota you're one of 100-200 students per teacher and away from home; with MindPeak you get a dedicated mentor, a plan built around your weak areas, and you stay with your family and school routine.` },
      { q: `Can students outside Kota get the same quality?`, a: `Yes — that's the point. Students in Jaipur, Jodhpur, Udaipur, Bikaner or any town get identical 1-on-1 mentor quality online, no relocation needed.` },
      { q: `Which colleges do Rajasthan students target?`, a: `JEE: MNIT Jaipur, IIT Jodhpur, BITS Pilani and REAP government colleges. NEET: SMS Medical College Jaipur, RNT Udaipur and other state government medical colleges.` },
    ],
  },
  {
    slug: 'west-bengal',
    state: 'West Bengal',
    board: 'WBCHSE & CBSE',
    engExam: 'WBJEE + JEE Main',
    medRoute: 'NEET UG + WB state counselling',
    engColleges: ['IIT Kharagpur', 'Jadavpur University', 'IIEST Shibpur', 'NIT Durgapur'],
    medColleges: ['Calcutta Medical College', 'NRS Medical College', 'IPGMER (SSKM) Kolkata', 'Medical College Kolkata'],
    cities: ['Kolkata', 'Howrah', 'Durgapur', 'Siliguri', 'Asansol', 'Kharagpur', 'Burdwan', 'Malda'],
    jeeIntro: `Bengal students target two exams — WBJEE for Jadavpur and IIEST, and JEE for IIT Kharagpur and the NITs. MindPeak's 1-on-1 track covers the WBJEE + JEE overlap together and bridges the WBCHSE → JEE depth gap, with Bengali-medium support where it helps.`,
    neetIntro: `For West Bengal's medical aspirants, Calcutta Medical College and NRS are the dream — and NEET is the only route. Our mentors rebuild Biology from the WBCHSE base to NCERT precision and integrate WBJEE-medical and NEET prep.`,
    faqs: [
      { q: `Do you prepare students for WBJEE and JEE together in ${YEAR}?`, a: `Yes. WBJEE and JEE share most of the syllabus; your mentor builds one plan and adjusts difficulty and weighting so you're ready for both.` },
      { q: `Is Bengali-medium support available?`, a: `Yes — tough concepts can be explained in Bengali while keeping problem-solving in exam English.` },
      { q: `Which colleges do West Bengal students target?`, a: `JEE/WBJEE: IIT Kharagpur, Jadavpur University, IIEST Shibpur, NIT Durgapur. NEET: Calcutta Medical College, NRS, IPGMER (SSKM).` },
    ],
  },
  {
    slug: 'madhya-pradesh',
    state: 'Madhya Pradesh',
    board: 'MP Board (MPBSE) & CBSE',
    engExam: 'JEE Main/Advanced (MP DTE counselling)',
    medRoute: 'NEET UG + MP state counselling',
    engColleges: ['IIT Indore', 'MANIT Bhopal', 'IIITDM Jabalpur', 'SGSITS Indore'],
    medColleges: ['Gandhi Medical College Bhopal', 'MGM Medical College Indore', 'NSCB Medical College Jabalpur'],
    cities: ['Indore', 'Bhopal', 'Gwalior', 'Jabalpur', 'Ujjain', 'Sagar', 'Satna', 'Rewa'],
    jeeIntro: `Indore and Bhopal aside, most MP students lack access to top JEE mentors and end up in generic batches. MindPeak delivers 1-on-1 JEE coaching statewide that bridges the MP Board → JEE gap and targets IIT Indore, MANIT Bhopal and IIITDM Jabalpur.`,
    neetIntro: `MP NEET aspirants target Gandhi Medical College Bhopal and MGM Indore, but the MP Board → NEET biology jump is steep. Our 1-on-1 mentors rebuild that base and drill the NCERT detail NTA tests.`,
    faqs: [
      { q: `Can students outside Indore/Bhopal get top coaching in ${YEAR}?`, a: `Yes — MindPeak is fully online and 1-on-1, so a student in Gwalior, Jabalpur, Ujjain or Rewa gets the same mentor quality as one in Indore.` },
      { q: `Do you bridge the MP Board to JEE/NEET gap?`, a: `Yes. Your mentor diagnoses the specific gaps MP Board students carry and builds a bridge plan before moving to exam-level material.` },
      { q: `Which colleges do MP students target?`, a: `JEE: IIT Indore, MANIT Bhopal, IIITDM Jabalpur. NEET: Gandhi Medical College Bhopal, MGM Indore, NSCB Jabalpur.` },
    ],
  },
  {
    slug: 'bihar',
    state: 'Bihar',
    board: 'BSEB (Bihar Board) & CBSE',
    engExam: 'JEE Main/Advanced + BCECE',
    medRoute: 'NEET UG + Bihar state counselling',
    engColleges: ['IIT Patna', 'NIT Patna', 'BCECE government colleges'],
    medColleges: ['AIIMS Patna', 'PMCH Patna', 'DMCH Darbhanga', 'NMCH Patna'],
    cities: ['Patna', 'Gaya', 'Muzaffarpur', 'Bhagalpur', 'Darbhanga', 'Purnia', 'Begusarai', 'Arrah'],
    jeeIntro: `Bihar produces huge numbers of JEE aspirants but has thin in-state coaching infrastructure, pushing students to Kota or Delhi. MindPeak brings IIT/NIT-mentor 1-on-1 coaching to students at home in Patna, Gaya or Muzaffarpur, bridging the Bihar Board → JEE gap and targeting IIT Patna and NIT Patna.`,
    neetIntro: `With AIIMS Patna and PMCH as targets, Bihar's NEET demand is enormous — but quality biology mentoring is scarce outside Patna. Our 1-on-1 mentors rebuild the Bihar Board → NEET biology foundation and drill NCERT precision.`,
    faqs: [
      { q: `Do Bihar students need to relocate to Kota in ${YEAR}?`, a: `No. MindPeak gives the same dedicated 1-on-1 mentoring online, so students in Patna, Gaya, Bhagalpur or Darbhanga prepare from home instead of relocating.` },
      { q: `Do you bridge the Bihar Board to JEE/NEET gap?`, a: `Yes — your mentor starts from your actual level, addressing the depth and English-medium gaps Bihar Board students often face, before moving to exam-level work.` },
      { q: `Which colleges do Bihar students target?`, a: `JEE: IIT Patna, NIT Patna and BCECE colleges. NEET: AIIMS Patna, PMCH, DMCH Darbhanga.` },
    ],
  },
  {
    slug: 'gujarat',
    state: 'Gujarat',
    board: 'GSEB & CBSE',
    engExam: 'GUJCET + JEE Main',
    medRoute: 'NEET UG + Gujarat state counselling',
    engColleges: ['IIT Gandhinagar', 'SVNIT Surat', 'DA-IICT Gandhinagar', 'Nirma University', 'L.D. College Ahmedabad'],
    medColleges: ['B.J. Medical College Ahmedabad', 'Government Medical College Surat', 'M.P. Shah Jamnagar'],
    cities: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Gandhinagar', 'Bhavnagar', 'Jamnagar', 'Anand'],
    jeeIntro: `Gujarat students sit GUJCET for state colleges and JEE for IIT Gandhinagar and SVNIT Surat. MindPeak's 1-on-1 track covers the GUJCET + JEE overlap together and bridges the GSEB → JEE depth gap, with Gujarati-medium support where it helps.`,
    neetIntro: `For Gujarat NEET aspirants targeting B.J. Medical College Ahmedabad or GMC Surat, the GSEB → NEET biology transition is the key hurdle. Our 1-on-1 mentors rebuild that base and tighten recall to the NCERT line.`,
    faqs: [
      { q: `Can I prepare for GUJCET and JEE together in ${YEAR}?`, a: `Yes — the syllabi overlap, so your mentor builds a single plan that serves both GUJCET and JEE Main.` },
      { q: `Is Gujarati-medium support available?`, a: `Yes — concepts can be explained in Gujarati to speed understanding while problem-solving stays in exam English.` },
      { q: `Which colleges do Gujarat students target?`, a: `JEE: IIT Gandhinagar, SVNIT Surat, DA-IICT, Nirma. NEET: B.J. Medical College Ahmedabad, GMC Surat, M.P. Shah Jamnagar.` },
    ],
  },
  {
    slug: 'andhra-pradesh',
    state: 'Andhra Pradesh',
    board: 'BIEAP (AP Board) & CBSE',
    engExam: 'AP EAPCET (EAMCET) + JEE Main',
    medRoute: 'NEET UG + AP state counselling',
    engColleges: ['IIT Tirupati', 'NIT Andhra Pradesh (Tadepalligudem)', 'Andhra University', 'JNTU colleges'],
    medColleges: ['Andhra Medical College Visakhapatnam', 'Siddhartha Medical College Vijayawada', 'SVIMS Tirupati'],
    cities: ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Tirupati', 'Nellore', 'Kakinada', 'Rajahmundry', 'Kurnool'],
    jeeIntro: `Andhra Pradesh is dominated by corporate colleges (Sri Chaitanya, Narayana) that run mega-batches and rote drills. MindPeak is the deliberate alternative: 1-on-1 JEE coaching integrating AP EAPCET and JEE, targeting IIT Tirupati and NIT AP, with Telugu-medium support.`,
    neetIntro: `AP's NEET race runs through the same corporate-college pressure cooker. Our 1-on-1 mentors give Andhra Medical College Vizag and Siddhartha Vijayawada aspirants real personal attention, integrating EAPCET and NEET prep with Telugu support.`,
    faqs: [
      { q: `How is MindPeak different from Sri Chaitanya / Narayana in ${YEAR}?`, a: `Those are 150+ student corporate batches built on rote drilling. MindPeak is 1-on-1 — a dedicated mentor, a plan built around your weak areas, and no hostel pressure-cooker environment.` },
      { q: `Do you cover AP EAPCET along with JEE/NEET?`, a: `Yes — EAPCET and JEE/NEET share most of the syllabus; your mentor builds one integrated plan, with Telugu-medium explanation where it helps.` },
      { q: `Which colleges do AP students target?`, a: `JEE: IIT Tirupati, NIT AP, Andhra University. NEET: Andhra Medical College Vizag, Siddhartha Vijayawada, SVIMS Tirupati.` },
    ],
  },
  {
    slug: 'telangana',
    state: 'Telangana',
    board: 'TSBIE (TG Board) & CBSE',
    engExam: 'TG EAPCET (EAMCET) + JEE Main',
    medRoute: 'NEET UG + Telangana state counselling',
    engColleges: ['IIT Hyderabad', 'NIT Warangal', 'IIIT Hyderabad', 'Osmania University (UCE)', 'JNTU Hyderabad'],
    medColleges: ['Osmania Medical College', 'Gandhi Medical College Hyderabad', 'Kakatiya Medical College Warangal'],
    cities: ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar', 'Khammam', 'Mahbubnagar', 'Nalgonda'],
    jeeIntro: `Telangana students aim for NIT Warangal, IIT Hyderabad and IIIT-H, but the corporate-college batch model dominates outside the capital. MindPeak's 1-on-1 track integrates TG EAPCET and JEE prep and reaches students from Warangal to Khammam with Telugu-medium support.`,
    neetIntro: `For Telangana NEET aspirants, Osmania and Gandhi Medical College are the targets. Our 1-on-1 mentors replace the corporate mega-batch with personal attention, integrating EAPCET and NEET prep and tightening Biology to the NCERT line.`,
    faqs: [
      { q: `Do you cover TG EAPCET along with JEE/NEET in ${YEAR}?`, a: `Yes — EAPCET shares most of its syllabus with JEE/NEET, so a single 1-on-1 plan serves both, with Telugu-medium support where useful.` },
      { q: `Can students outside Hyderabad get top mentors?`, a: `Yes — online 1-on-1 means a student in Warangal, Karimnagar or Khammam gets the same mentor quality as one in Hyderabad.` },
      { q: `Which colleges do Telangana students target?`, a: `JEE: IIT Hyderabad, NIT Warangal, IIIT-H, Osmania UCE. NEET: Osmania Medical College, Gandhi Medical College, Kakatiya Warangal.` },
    ],
  },
  {
    slug: 'kerala',
    state: 'Kerala',
    board: 'Kerala HSE (DHSE) & CBSE',
    engExam: 'KEAM + JEE Main',
    medRoute: 'NEET UG + Kerala state counselling',
    engColleges: ['NIT Calicut', 'CET Trivandrum', 'IIST Thiruvananthapuram', 'Government Engineering Colleges (KEAM)'],
    medColleges: ['Govt. Medical College Thiruvananthapuram', 'Govt. Medical College Kozhikode', 'Govt. Medical College Kottayam'],
    cities: ['Kochi', 'Thiruvananthapuram', 'Kozhikode', 'Thrissur', 'Kollam', 'Palakkad', 'Kannur', 'Alappuzha'],
    jeeIntro: `Kerala's strong school system gives students a solid base, but KEAM-focused coaching often under-prepares them for JEE depth. MindPeak's 1-on-1 track leverages that base and pushes for NIT Calicut, CET Trivandrum and the IITs, integrating KEAM and JEE prep with Malayalam support.`,
    neetIntro: `Kerala consistently tops NEET qualification rates, so the competition for Government Medical Colleges is brutal. Our 1-on-1 mentors close the Kerala-board MCQ-application gap and add the exam-temperament edge NEET rewards.`,
    faqs: [
      { q: `Do you integrate KEAM and JEE prep in ${YEAR}?`, a: `Yes — KEAM and JEE share most topics; your mentor builds one plan and adds JEE-depth problem-solving on top of the KEAM base.` },
      { q: `Is Malayalam-medium support available?`, a: `Yes — concepts can be explained in Malayalam while problem-solving stays in exam English.` },
      { q: `Which colleges do Kerala students target?`, a: `JEE/KEAM: NIT Calicut, CET Trivandrum, IIST. NEET: Government Medical Colleges Thiruvananthapuram, Kozhikode and Kottayam.` },
    ],
  },
  {
    slug: 'haryana',
    state: 'Haryana',
    board: 'HBSE (Haryana Board) & CBSE',
    engExam: 'JEE Main/Advanced + HSTES counselling',
    medRoute: 'NEET UG + Haryana state counselling',
    engColleges: ['NIT Kurukshetra', 'IIIT Sonepat', 'DCRUST Murthal', 'YMCA Faridabad', 'Delhi NCR colleges'],
    medColleges: ['PGIMS Rohtak', 'Kalpana Chawla GMC Karnal', 'BPS GMC Khanpur Kalan'],
    cities: ['Gurugram', 'Faridabad', 'Karnal', 'Ambala', 'Panipat', 'Hisar', 'Rohtak', 'Sonipat'],
    jeeIntro: `Haryana students sit on the edge of the Delhi-NCR coaching belt but most can't access its best mentors without a daily commute. MindPeak brings 1-on-1 JEE coaching home — bridging the Haryana Board → JEE gap and targeting NIT Kurukshetra, IIIT Sonepat and the top NCR colleges, from Gurugram to Hisar.`,
    neetIntro: `For Haryana NEET aspirants, PGIMS Rohtak and Kalpana Chawla GMC Karnal are the targets. Our 1-on-1 mentors rebuild Biology from the Haryana Board base to NCERT precision — no relocation to a Delhi coaching hub required.`,
    faqs: [
      { q: `Do Haryana students need to commute to Delhi/Gurugram for top coaching in ${YEAR}?`, a: `No. MindPeak is 1-on-1 online, so students in Karnal, Hisar, Ambala or Rohtak get the same mentor quality as someone studying in Gurugram — without the NCR commute.` },
      { q: `Do you bridge the Haryana Board to JEE/NEET gap?`, a: `Yes — your mentor diagnoses the depth and application gaps Haryana Board students often carry and builds a bridge plan before exam-level work.` },
      { q: `Which colleges do Haryana students target?`, a: `JEE: NIT Kurukshetra, IIIT Sonepat, DCRUST Murthal and top NCR colleges. NEET: PGIMS Rohtak, GMC Karnal, BPS GMC Khanpur.` },
    ],
  },
  {
    slug: 'punjab',
    state: 'Punjab',
    board: 'PSEB (Punjab Board) & CBSE',
    engExam: 'JEE Main/Advanced + state counselling',
    medRoute: 'NEET UG + Punjab state counselling',
    engColleges: ['IIT Ropar', 'NIT Jalandhar (Dr. B.R. Ambedkar)', 'Thapar Institute Patiala', 'PEC Chandigarh'],
    medColleges: ['GMC Patiala', 'GMC Amritsar', 'AIIMS Bathinda', 'DMC & CMC Ludhiana'],
    cities: ['Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Bathinda', 'Mohali', 'Hoshiarpur', 'Pathankot'],
    jeeIntro: `Punjab has strong institutions in IIT Ropar and Thapar, but outside Ludhiana and Chandigarh most students rely on batch institutes that don't bridge the PSEB → JEE gap. MindPeak's 1-on-1 coaching does exactly that, with Punjabi-medium support where it helps.`,
    neetIntro: `With GMC Patiala, GMC Amritsar and AIIMS Bathinda as targets, Punjab's NEET race is tough. Our 1-on-1 mentors rebuild Biology from the PSEB base to NCERT precision and drill the patterns NTA repeats.`,
    faqs: [
      { q: `Is Punjabi-medium support available in ${YEAR}?`, a: `Yes — concepts can be explained in Punjabi to speed understanding, while problem-solving stays in the English the exams use.` },
      { q: `Can students outside Ludhiana/Chandigarh get top mentors?`, a: `Yes — online 1-on-1 means a student in Bathinda, Patiala or Pathankot gets the same mentor quality as one in Ludhiana.` },
      { q: `Which colleges do Punjab students target?`, a: `JEE: IIT Ropar, NIT Jalandhar, Thapar Patiala, PEC Chandigarh. NEET: GMC Patiala, GMC Amritsar, AIIMS Bathinda, DMC Ludhiana.` },
    ],
  },
  {
    slug: 'odisha',
    state: 'Odisha',
    board: 'CHSE Odisha & CBSE',
    engExam: 'JEE Main + OJEE',
    medRoute: 'NEET UG + Odisha state counselling',
    engColleges: ['IIT Bhubaneswar', 'NIT Rourkela', 'IIIT Bhubaneswar', 'KIIT'],
    medColleges: ['SCB Medical College Cuttack', 'AIIMS Bhubaneswar', 'MKCG Berhampur', 'VSS Burla'],
    cities: ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Sambalpur', 'Berhampur', 'Balasore', 'Puri'],
    jeeIntro: `Odisha students target NIT Rourkela and IIT Bhubaneswar through both OJEE and JEE. MindPeak runs a single 1-on-1 track covering the OJEE + JEE overlap and bridges the CHSE → JEE gap, reaching students from Bhubaneswar to Sambalpur.`,
    neetIntro: `For Odisha NEET aspirants, SCB Medical College Cuttack and AIIMS Bhubaneswar are the goals. Our 1-on-1 mentors rebuild Biology from the CHSE base to NCERT precision with personal attention a batch can't match.`,
    faqs: [
      { q: `Do you cover OJEE along with JEE in ${YEAR}?`, a: `Yes — OJEE and JEE share most of the syllabus, so your mentor builds one plan that serves both.` },
      { q: `Can students outside Bhubaneswar get top coaching?`, a: `Yes — fully online 1-on-1 means students in Rourkela, Sambalpur or Berhampur get identical mentor quality.` },
      { q: `Which colleges do Odisha students target?`, a: `JEE: IIT Bhubaneswar, NIT Rourkela, IIIT Bhubaneswar, KIIT. NEET: SCB Cuttack, AIIMS Bhubaneswar, MKCG Berhampur.` },
    ],
  },
  {
    slug: 'jharkhand',
    state: 'Jharkhand',
    board: 'JAC (Jharkhand Board) & CBSE',
    engExam: 'JEE Main/Advanced + JCECE',
    medRoute: 'NEET UG + Jharkhand state counselling',
    engColleges: ['IIT (ISM) Dhanbad', 'NIT Jamshedpur', 'BIT Mesra'],
    medColleges: ['RIMS Ranchi', 'MGM Medical College Jamshedpur', 'PMCH Dhanbad'],
    cities: ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Hazaribagh', 'Deoghar', 'Giridih'],
    jeeIntro: `Jharkhand is home to IIT (ISM) Dhanbad and NIT Jamshedpur, yet in-state JEE coaching is thin and many students leave for Kota. MindPeak brings IIT/NIT-mentor 1-on-1 coaching to students at home in Ranchi, Jamshedpur or Dhanbad, bridging the JAC → JEE gap.`,
    neetIntro: `For Jharkhand NEET aspirants, RIMS Ranchi and MGM Jamshedpur are the targets. Our 1-on-1 mentors rebuild Biology from the JAC base to NCERT precision — without relocating to Kota or Patna.`,
    faqs: [
      { q: `Do Jharkhand students need to relocate to Kota in ${YEAR}?`, a: `No — MindPeak gives the same dedicated 1-on-1 mentoring online, so students in Ranchi, Dhanbad or Bokaro prepare from home.` },
      { q: `Do you bridge the JAC board to JEE/NEET gap?`, a: `Yes — your mentor starts from your actual level and builds the depth and vocabulary JAC students often need before exam-level work.` },
      { q: `Which colleges do Jharkhand students target?`, a: `JEE: IIT (ISM) Dhanbad, NIT Jamshedpur, BIT Mesra. NEET: RIMS Ranchi, MGM Jamshedpur, PMCH Dhanbad.` },
    ],
  },
  {
    slug: 'chhattisgarh',
    state: 'Chhattisgarh',
    board: 'CGBSE & CBSE',
    engExam: 'JEE Main + CG counselling',
    medRoute: 'NEET UG + Chhattisgarh state counselling',
    engColleges: ['IIT Bhilai', 'NIT Raipur', 'state government engineering colleges'],
    medColleges: ['Pt. JNM Medical College Raipur', 'AIIMS Raipur', 'CIMS Bilaspur'],
    cities: ['Raipur', 'Bilaspur', 'Durg', 'Bhilai', 'Korba', 'Rajnandgaon', 'Raigarh'],
    jeeIntro: `Chhattisgarh students target IIT Bhilai and NIT Raipur, but quality JEE mentoring is concentrated in Raipur and Bhilai. MindPeak delivers 1-on-1 JEE coaching statewide, bridging the CGBSE → JEE gap from Bilaspur to Korba.`,
    neetIntro: `For Chhattisgarh NEET aspirants, Pt. JNM Medical College Raipur and AIIMS Raipur are the goals. Our 1-on-1 mentors rebuild Biology from the CGBSE base to NCERT precision with personal attention.`,
    faqs: [
      { q: `Can students outside Raipur/Bhilai get top coaching in ${YEAR}?`, a: `Yes — online 1-on-1 means students in Bilaspur, Korba or Raigarh get the same mentor quality as one in Raipur.` },
      { q: `Do you bridge the CGBSE board to JEE/NEET gap?`, a: `Yes — your mentor diagnoses CGBSE-specific gaps and builds a bridge plan before exam-level material.` },
      { q: `Which colleges do Chhattisgarh students target?`, a: `JEE: IIT Bhilai, NIT Raipur. NEET: Pt. JNM Medical College Raipur, AIIMS Raipur, CIMS Bilaspur.` },
    ],
  },
  {
    slug: 'assam',
    state: 'Assam',
    board: 'AHSEC (Assam Board) & CBSE',
    engExam: 'JEE Main/Advanced + Assam CEE',
    medRoute: 'NEET UG + Assam state counselling',
    engColleges: ['IIT Guwahati', 'NIT Silchar', 'Assam Engineering College', 'Tezpur University'],
    medColleges: ['Gauhati Medical College', 'Assam Medical College Dibrugarh', 'Silchar Medical College'],
    cities: ['Guwahati', 'Dibrugarh', 'Silchar', 'Jorhat', 'Tezpur', 'Nagaon', 'Bongaigaon'],
    jeeIntro: `Assam students aim for IIT Guwahati and NIT Silchar, but the North-East has the thinnest top-tier coaching access in India. MindPeak brings 1-on-1 JEE coaching to students across Assam, bridging the AHSEC → JEE gap without leaving the region.`,
    neetIntro: `For Assam NEET aspirants, Gauhati Medical College and Assam Medical College Dibrugarh are the targets. Our 1-on-1 mentors rebuild Biology from the AHSEC base to NCERT precision and close the access gap North-East students face.`,
    faqs: [
      { q: `Is top JEE/NEET coaching accessible from Assam in ${YEAR}?`, a: `Yes — MindPeak is fully online and 1-on-1, so students in Guwahati, Dibrugarh, Silchar or Jorhat get IIT/NIT-mentor quality without relocating out of the North-East.` },
      { q: `Do you cover Assam CEE along with JEE?`, a: `Yes — Assam CEE and JEE overlap heavily; your mentor builds one plan serving both.` },
      { q: `Which colleges do Assam students target?`, a: `JEE: IIT Guwahati, NIT Silchar, Assam Engineering College. NEET: Gauhati Medical College, Assam Medical College Dibrugarh, Silchar Medical College.` },
    ],
  },
  {
    slug: 'uttarakhand',
    state: 'Uttarakhand',
    board: 'UBSE (Uttarakhand Board) & CBSE',
    engExam: 'JEE Main/Advanced + UKSEE',
    medRoute: 'NEET UG + Uttarakhand state counselling',
    engColleges: ['IIT Roorkee', 'NIT Uttarakhand (Srinagar Garhwal)', 'GB Pant University Pantnagar'],
    medColleges: ['Government Doon Medical College Dehradun', 'AIIMS Rishikesh', 'SGRRIM&HS Dehradun'],
    cities: ['Dehradun', 'Haridwar', 'Haldwani', 'Roorkee', 'Rishikesh', 'Rudrapur', 'Kashipur'],
    jeeIntro: `Uttarakhand is home to IIT Roorkee, but hill-district students have little access to top mentors. MindPeak's 1-on-1 JEE coaching reaches students from Dehradun to Haldwani, bridging the UBSE → JEE gap with no relocation to the plains.`,
    neetIntro: `For Uttarakhand NEET aspirants, Government Doon Medical College and AIIMS Rishikesh are the targets. Our 1-on-1 mentors rebuild Biology from the UBSE base to NCERT precision, reaching students across the state's hill and plains districts.`,
    faqs: [
      { q: `Can hill-district students get top coaching in ${YEAR}?`, a: `Yes — online 1-on-1 means students in Haldwani, Haridwar or the hill districts get the same mentor quality as one in Dehradun.` },
      { q: `Do you bridge the UBSE board to JEE/NEET gap?`, a: `Yes — your mentor starts from your level and builds exam-level depth from the UBSE base.` },
      { q: `Which colleges do Uttarakhand students target?`, a: `JEE: IIT Roorkee, NIT Uttarakhand, GB Pant Pantnagar. NEET: Government Doon Medical College, AIIMS Rishikesh.` },
    ],
  },
  {
    slug: 'himachal-pradesh',
    state: 'Himachal Pradesh',
    board: 'HPBOSE (HP Board) & CBSE',
    engExam: 'JEE Main/Advanced + HP counselling',
    medRoute: 'NEET UG + Himachal Pradesh state counselling',
    engColleges: ['IIT Mandi', 'NIT Hamirpur', 'state government engineering colleges'],
    medColleges: ['IGMC Shimla', 'Dr. RPGMC Tanda (Kangra)', 'AIIMS Bilaspur'],
    cities: ['Shimla', 'Dharamshala', 'Mandi', 'Solan', 'Hamirpur', 'Una', 'Kullu'],
    jeeIntro: `Himachal Pradesh has IIT Mandi and NIT Hamirpur, but its mountain geography makes access to top coaching hard. MindPeak's 1-on-1 JEE coaching reaches students across the hills, bridging the HPBOSE → JEE gap with no need to relocate to Chandigarh.`,
    neetIntro: `For Himachal NEET aspirants, IGMC Shimla and Dr. RPGMC Tanda are the targets. Our 1-on-1 mentors rebuild Biology from the HPBOSE base to NCERT precision, reaching students in even remote hill districts.`,
    faqs: [
      { q: `Can students in the hills get top coaching in ${YEAR}?`, a: `Yes — fully online 1-on-1 means students in Mandi, Dharamshala, Solan or remote districts get IIT/NIT-mentor quality without relocating to Chandigarh.` },
      { q: `Do you bridge the HPBOSE board to JEE/NEET gap?`, a: `Yes — your mentor diagnoses HPBOSE-specific gaps and builds a bridge plan before exam-level work.` },
      { q: `Which colleges do Himachal students target?`, a: `JEE: IIT Mandi, NIT Hamirpur. NEET: IGMC Shimla, Dr. RPGMC Tanda, AIIMS Bilaspur.` },
    ],
  },
];

const bySlug = new Map(stateHubs.map(h => [h.slug, h]));

/** Parse a state-hub slug like 'jee-coaching-in-karnataka' → { exam, hub }. Null if not a hub. */
export function parseStateHubSlug(slug: string): { exam: 'JEE' | 'NEET'; hub: StateHub } | null {
  const m = slug.match(/^(jee|neet)-coaching-in-(.+)$/);
  if (!m) return null;
  const hub = bySlug.get(m[2]);
  if (!hub) return null;
  return { exam: m[1] === 'neet' ? 'NEET' : 'JEE', hub };
}

/** All indexable state-hub slugs (both exams). */
export const STATE_HUB_SLUGS: string[] = stateHubs.flatMap(h => [
  `jee-coaching-in-${h.slug}`,
  `neet-coaching-in-${h.slug}`,
]);

export const STATE_HUB_SLUG_SET: ReadonlySet<string> = new Set(STATE_HUB_SLUGS);

/** State slug set (without exam prefix) — used to route /…-coaching-in-<state>. */
export const STATE_SLUGS: ReadonlySet<string> = new Set(stateHubs.map(h => h.slug));

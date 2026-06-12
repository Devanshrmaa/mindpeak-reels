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
 * FAQs are split per exam (jeeFaqs / neetFaqs): the JEE and NEET hub pages
 * of the same state are separate indexable URLs and must not emit identical
 * FAQPage schema. Cutoff/seat figures referenced in answers mirror
 * src/data/stateEducationData.ts — update both together.
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
  /**
   * Short state-entrance-exam token for titles/keywords (e.g. 'MHT-CET').
   * Only set where a genuine separate state exam exists; omitted where the
   * state's engineering counselling rides on the JEE Main rank.
   */
  stateExamName?: string;
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
  /** JEE-page-specific FAQs (unique vs the state's NEET page) */
  jeeFaqs: StateHubFAQ[];
  /** NEET-page-specific FAQs (unique vs the state's JEE page) */
  neetFaqs: StateHubFAQ[];
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
    jeeFaqs: [
      { q: `Is online 1-on-1 coaching better than Kota for a UP JEE aspirant in ${YEAR}?`, a: `For most UP students, yes — you keep your home routine and school while getting a dedicated mentor, instead of competing for attention in a 150-student Kota batch. The relocation cost and isolation of Kota rarely pay off versus focused 1-on-1 prep.` },
      { q: `What JEE Main percentile do I need for MNNIT Allahabad or HBTU Kanpur?`, a: `MNNIT Allahabad CSE/IT typically closes around the 96+ percentile band, while HBTU Kanpur is reachable around 90+. IIT Kanpur and IIT-BHU run through JEE Advanced — CSE at IIT Kanpur has historically needed an AIR under ~600. Your mentor sets a percentile target college-by-college and works backwards from it.` },
      { q: `How do UP students get into AKTU colleges — is there a separate state exam?`, a: `No separate exam: UPTAC counselling allots AKTU-affiliated colleges using your JEE Main rank. That means one well-prepared JEE Main attempt covers both the NIT/IIT route and the entire UP state college route.` },
      { q: `I studied in Hindi medium under UP Board — can I still crack JEE?`, a: `Yes. The gap is technical vocabulary and problem-solving depth, not ability. Your mentor explains concepts bilingually while training you on English-medium JEE problems from day one, so the exam language stops being a handicap within a few months.` },
      { q: `Do you cover the UP Board to JEE transition?`, a: `Yes. UP Board students often have gaps in problem-solving depth versus what JEE assumes from Class 11. Your mentor diagnoses these in the first week and builds a bridge plan before moving to JEE-level material.` },
    ],
    neetFaqs: [
      { q: `What NEET score do I need for KGMU Lucknow or GSVM Kanpur?`, a: `KGMU Lucknow has historically closed under roughly AIR 3,000 and GSVM Kanpur under ~15,000 in the state quota. 85% of seats in UP's government medical colleges are reserved for UP-domicile students, so your effective competition is the state pool, not all of India.` },
      { q: `How many government medical colleges does Uttar Pradesh have?`, a: `Around two dozen government medical colleges (and growing), allotted through UP NEET state counselling (DGME). With UP's aspirant pool also being India's largest, a precise NCERT-line preparation matters more here than anywhere else.` },
      { q: `Is NCERT enough for NEET biology if I'm from UP Board?`, a: `NCERT is the question source, but UP Board biology doesn't train the line-level precision NTA tests. Our mentors rebuild each chapter from the NCERT text itself and drill statement-based and assertion-reason questions until that precision is automatic.` },
      { q: `Do UP students need to move to Kota or Delhi for NEET coaching?`, a: `No. MindPeak's 1-on-1 online format gives students in Gorakhpur, Bareilly or Prayagraj the same dedicated mentor a Delhi student gets — without hostel costs or leaving your school.` },
      { q: `Can I prepare for NEET in Hindi medium from UP Board?`, a: `You can sit NEET in Hindi, but most UP toppers attempt it in English for cleaner terminology. Your mentor works bilingually — concepts in Hindi where it helps, exam practice in your chosen medium.` },
    ],
  },
  {
    slug: 'maharashtra',
    state: 'Maharashtra',
    board: 'Maharashtra HSC & CBSE',
    engExam: 'MHT-CET + JEE Main',
    medRoute: 'NEET UG + Maharashtra state counselling',
    stateExamName: 'MHT-CET',
    engColleges: ['IIT Bombay', 'VJTI Mumbai', 'COEP Pune', 'ICT Mumbai', 'VNIT Nagpur', 'SPIT Mumbai'],
    medColleges: ['Seth GS (KEM) Mumbai', 'Grant Medical College Mumbai', 'AFMC Pune', 'BJ Medical College Pune'],
    cities: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Thane', 'Aurangabad', 'Kolhapur', 'Navi Mumbai'],
    jeeIntro: `Maharashtra students juggle two targets at once — MHT-CET for VJTI/COEP/ICT and JEE for the IITs/NITs. MindPeak's 1-on-1 plans cover the MHT-CET + JEE overlap in one integrated track, so you don't waste time in separate batches, and you skip the 2-3 hour Mumbai/Pune commutes.`,
    neetIntro: `With KEM, Grant and AFMC among the most competitive medical seats in India, Maharashtra NEET aspirants need precision, not volume. Our mentors integrate MHT-CET and NEET prep and rebuild Biology from the HSC base to the NCERT detail NTA actually tests.`,
    jeeFaqs: [
      { q: `Can I prepare for MHT-CET and JEE together in ${YEAR}?`, a: `Yes — roughly 85% of the MHT-CET syllabus overlaps with JEE Main. Your mentor builds one integrated plan that covers JEE-depth problem solving plus MHT-CET's specific weighting (Class 12-heavy, no negative marking on Physics/Chemistry), so you sit both exams without doubling your workload.` },
      { q: `What MHT-CET percentile do I need for VJTI or COEP?`, a: `Computer Engineering at VJTI Mumbai typically closes at 99+ percentile and COEP Pune at 98+. ICT Mumbai's chemical engineering route runs on JEE Main (97+ percentile band). Your weekly plan tracks your mock percentile against the specific college you're targeting.` },
      { q: `How is the Maharashtra HSC board different from what JEE expects?`, a: `HSC sequences several topics differently — Rotational Mechanics, for instance, arrives later than in CBSE — and its descriptive-answer pattern under-trains MCQ speed. Your mentor re-sequences your plan so board topics and JEE topics land in the right order for both exams.` },
      { q: `I live in Thane / Navi Mumbai / Nashik — do I need to commute to a Mumbai or Pune coaching centre?`, a: `No. MindPeak is 1-on-1 online, so you get the same mentor quality without losing 2-3 hours daily to local trains — that recovered commute time alone is roughly 15 extra study hours a week.` },
      { q: `Which engineering colleges do Maharashtra JEE students target?`, a: `IIT Bombay through JEE Advanced; VNIT Nagpur and the NIT system through JEE Main; VJTI, COEP, ICT and SPIT through MHT-CET. One integrated 1-on-1 track keeps every one of those doors open.` },
    ],
    neetFaqs: [
      { q: `What NEET rank do I need for KEM or Grant Medical College Mumbai?`, a: `Seth GS (KEM) has historically closed under roughly AIR 4,000 and Grant Medical College under ~5,000 — among the most competitive state seats in India. BJ Medical College Pune sits near AIR 8,000. A precision-first NCERT strategy is non-negotiable at these cutoffs.` },
      { q: `How many government medical colleges does Maharashtra have?`, a: `Over 50 — the largest network in any state — with 85% of seats in state quota for Maharashtra-domicile students. That breadth means a well-prepared student has realistic targets at several cutoff levels, from KEM down to newer GMCs.` },
      { q: `Does MHT-CET matter for medical admission in Maharashtra?`, a: `No — MBBS/BDS admission runs purely on NEET through Maharashtra's state counselling (CET Cell). MHT-CET's PCB group only feeds pharmacy and allied courses, which some students keep as a fallback; your mentor can fold that in without distracting from NEET.` },
      { q: `My biology is HSC-board level — how do I reach NEET's NCERT precision?`, a: `HSC biology and NCERT differ in framing and detail-depth. Your mentor maps every HSC chapter to its NCERT counterpart, rebuilds the gaps, and drills the statement-level questions NTA repeats — typically a 10-12 week bridge before full mock cycles begin.` },
      { q: `Is online 1-on-1 NEET coaching effective for Mumbai students?`, a: `Especially so — Mumbai students routinely lose 3+ hours daily to commutes. 1-on-1 online coaching converts that into supervised practice time, with a dedicated mentor instead of a 100-student Dadar or Andheri batch.` },
    ],
  },
  {
    slug: 'karnataka',
    state: 'Karnataka',
    board: 'Karnataka PUC (PUE) & CBSE',
    engExam: 'KCET + COMEDK + JEE Main',
    medRoute: 'NEET UG + KCET state counselling',
    stateExamName: 'KCET',
    engColleges: ['IISc Bangalore', 'IIT Dharwad', 'NITK Surathkal', 'RVCE Bangalore', 'BMSCE Bangalore', 'PES University'],
    medColleges: ['Bangalore Medical College', 'KMC Manipal', 'St John\'s Medical College', 'Ramaiah Medical College'],
    cities: ['Bangalore', 'Mysore', 'Mangalore', 'Hubli', 'Belgaum', 'Davanagere', 'Shimoga', 'Udupi'],
    jeeIntro: `Karnataka students chase three doors at once — KCET, COMEDK and JEE. MindPeak runs a single 1-on-1 track that covers the KCET + JEE overlap and pushes for NITK Surathkal, IIT Dharwad and the top RVCE/BMSCE/PES seats, with Kannada-language support where it helps.`,
    neetIntro: `From Bangalore Medical College to KMC Manipal, Karnataka's medical seats are fiercely contested across KCET and all-India NEET quotas. Our 1-on-1 NEET mentors integrate KCET and NEET prep and tighten Biology recall to the NCERT line.`,
    jeeFaqs: [
      { q: `Do you cover KCET and COMEDK along with JEE in ${YEAR}?`, a: `Yes. Roughly 80% of the syllabus is shared; your mentor maps it once and tunes weighting for each exam — KCET tests only the Class 12 syllabus, COMEDK adds its own pattern quirks, and JEE adds depth. One plan, three doors.` },
      { q: `What KCET rank do I need for RVCE or BMSCE?`, a: `CSE/ISE at RVCE has typically closed inside the top ~2,000 KCET ranks and BMSCE inside ~3,000. NITK Surathkal runs on JEE Main instead. Your mock-test cycle tracks both rank ladders so you always know where you stand on each.` },
      { q: `Is Kannada-medium support available for JEE prep?`, a: `Yes — mentors can explain tough concepts in Kannada where it speeds up understanding, while keeping all problem-solving in the English used by the exams.` },
      { q: `I'm in Bangalore — why online 1-on-1 instead of a coaching centre?`, a: `Bangalore traffic makes daily physical coaching impractical: Whitefield or Electronic City to a Koramangala centre can burn 2+ hours a day. Online 1-on-1 gives you a dedicated mentor without the commute, and the same applies in Mysore, Hubli or Shimoga where top-tier centres simply don't exist.` },
      { q: `Does the PUC syllabus prepare me for JEE?`, a: `PUC covers most topics but sequences Physics and Chemistry differently (Thermodynamics and Electrochemistry land in different terms than CBSE) and trains theory-heavy answers rather than MCQ speed. Your mentor builds the bridge modules and timing drills PUC leaves out.` },
    ],
    neetFaqs: [
      { q: `What NEET rank do I need for Bangalore Medical College?`, a: `BMCRI has historically closed under roughly AIR 6,000 in the state quota. KMC Manipal and Ramaiah admit on NEET scores around the 580-600+ band through their own counselling routes. Your mentor anchors your mock-score targets to the specific college list you're chasing.` },
      { q: `How does medical admission work in Karnataka — KCET or NEET?`, a: `MBBS/BDS seats are allotted purely on NEET through KEA counselling; KCET no longer decides medical admission. That's good news: one exam, prepared deeply, covers both Karnataka state-quota and all-India seats.` },
      { q: `Is Kannada-medium support available for NEET biology?`, a: `Yes — concepts can be taught in Kannada where it helps, while recall drilling stays on the English NCERT lines NTA quotes. PUC-board students get a mapped bridge from their textbook to NCERT chapter by chapter.` },
      { q: `Can students outside Bangalore get serious NEET coaching?`, a: `That's exactly the gap we close. Hubli, Belgaum, Davanagere and Shimoga have very limited NEET-grade coaching; online 1-on-1 delivers identical mentor quality in any of them — no relocation to a Bangalore PU-college hostel.` },
      { q: `How competitive are Karnataka's medical seats?`, a: `Karnataka has one of India's densest medical-college networks (50+ colleges including private), so seats exist at many cutoff levels — but BMCRI-tier government seats remain fierce. Precision on NCERT and disciplined mock analysis is what separates the state-quota qualifiers.` },
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
    jeeFaqs: [
      { q: `I'm a TN State Board student — can I still crack JEE in ${YEAR}?`, a: `Yes, but it needs a deliberate bridge: TNEA's marks-based admission means most state-board students under-train on JEE-depth problems. Your mentor builds that depth from your current level rather than assuming a CBSE base.` },
      { q: `Should I prepare for both TNEA and JEE?`, a: `TNEA needs no separate exam — it ranks your Class-12 marks — so JEE prep costs you nothing extra on that front. The strategy is: keep board marks high for TNEA (CEG has closed inside the top ~500 ranks, PSG Tech ~3,000), while JEE opens IIT Madras, NIT Trichy and the national system on top.` },
      { q: `What do IIT Madras and NIT Trichy actually require?`, a: `IIT Madras CSE has historically needed a JEE Advanced AIR inside ~800; NIT Trichy runs on JEE Main around the 98+ percentile band. Both sit in your home state — your mentor builds the multi-year problem-solving depth those cutoffs demand.` },
      { q: `Is Tamil-medium explanation available?`, a: `Yes — concepts can be explained in Tamil to speed understanding, while all problem-solving stays in the English the exams use. TN students' strong numerical base (a real strength of the board) gets redirected into JEE-style multi-concept problems.` },
      { q: `My English scientific vocabulary is weak — will that block JEE?`, a: `It's a common TN-board hurdle and very fixable: your mentor runs every new chapter bilingually, building the English term alongside the Tamil explanation, so within months you read JEE problems at full speed.` },
    ],
    neetFaqs: [
      { q: `What NEET rank do I need for Madras Medical College or Stanley?`, a: `MMC has historically closed under roughly AIR 3,000 and Stanley under ~7,000 — but remember 85% of TN's government seats are state-quota, so your real competition is within Tamil Nadu. CMC Vellore admits around 650+ NEET scores with its own process.` },
      { q: `How many medical seats does Tamil Nadu have?`, a: `TN runs India's largest government medical network — 36+ government colleges — and also reserves 7.5% of state seats for government-school students. For a well-prepared TN aspirant, the seat math is more favourable than the headline competition suggests.` },
      { q: `Is the TN State Board biology syllabus enough for NEET?`, a: `The post-2019 TN syllabus aligns closer to NCERT, but NTA quotes NCERT lines verbatim — so we rebuild each chapter from the NCERT text itself, mapping it against what you studied, and drill the assertion-reason patterns the board never tests.` },
      { q: `Can I prepare for NEET in Tamil?`, a: `NEET is offered in Tamil, and our mentors explain concepts in Tamil where it helps — but we train the English NCERT terminology in parallel, since MBBS itself is English-medium and the English paper avoids translation ambiguities.` },
      { q: `Do I need to move to Chennai for NEET coaching?`, a: `No. Quality NEET coaching concentrates in Chennai and Coimbatore, but 1-on-1 online coaching delivers the same mentor to Madurai, Salem, Tirunelveli or Erode — without hostel fees or leaving your school.` },
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
    jeeFaqs: [
      { q: `Why choose 1-on-1 over a Kota batch in ${YEAR}?`, a: `In Kota you're one of 100-200 students per teacher, and the all-in cost of hostel plus coaching runs ₹8-12 lakh over two years. With MindPeak you get a dedicated mentor, a plan built around your weak areas, and you stay with your family and school routine — the factors Kota's own dropout data says matter most.` },
      { q: `What JEE Main percentile do I need for MNIT Jaipur?`, a: `MNIT Jaipur CSE/ECE typically closes around the 96+ percentile band; IIT Jodhpur runs through JEE Advanced (CSE near AIR ~4,000 historically). Your mentor sets the percentile ladder and reviews it against every mock.` },
      { q: `Is BITS Pilani a realistic alternative to the IITs for Rajasthan students?`, a: `Yes — BITS Pilani sits in your own state and admits through BITSAT (roughly 350+ scores for core branches). The syllabus overlaps JEE almost entirely, so your mentor adds BITSAT's speed format on top of the same preparation, no separate track needed.` },
      { q: `I'm from RBSE Hindi medium — how big is the jump to JEE?`, a: `RBSE covers most NCERT topics but at a shallower problem depth, and Hindi-medium students need the English technical vocabulary built deliberately. Your mentor does both in parallel — bilingual concept teaching, English-medium problem drills — a path hundreds of RBSE students have used successfully.` },
      { q: `How do Rajasthan students get state engineering seats?`, a: `REAP counselling allots Rajasthan government colleges using your JEE Main score — no separate state exam. So a single JEE Main preparation covers IITs, NITs, MNIT and the entire REAP ladder.` },
    ],
    neetFaqs: [
      { q: `What NEET rank do I need for SMS Medical College Jaipur?`, a: `SMS Jaipur has historically closed under roughly AIR 5,000 — Rajasthan's most competitive seat. Dr. SN Jodhpur sits near ~15,000, SP Bikaner ~20,000 and RNT Udaipur ~25,000, all in state quota where 85% of seats are reserved for Rajasthan domiciles.` },
      { q: `Do I need to move to Kota for NEET preparation?`, a: `No — and it's worth saying as the state that hosts Kota: the mega-batch model gives one teacher to 150+ students and has well-documented pressure costs. A dedicated 1-on-1 mentor from home in Jaipur, Sikar or Bikaner delivers more corrected practice per week than any batch can.` },
      { q: `How do I bridge RBSE biology to NEET's NCERT standard?`, a: `RBSE biology runs shallower than the NCERT line-level detail NTA tests, and many students study it in Hindi. Your mentor rebuilds each unit from the NCERT text bilingually, then drills English statement-pattern questions until the precision is automatic.` },
      { q: `Can I sit NEET in Hindi as a Rajasthan student?`, a: `Yes, NEET offers a Hindi paper. We still train NCERT's English terminology in parallel — MBBS is taught in English — and let you choose your exam medium from an informed position rather than by default.` },
      { q: `What does Rajasthan's NEET competition actually look like?`, a: `Roughly 1.5+ lakh Rajasthan students sit NEET each year for a few thousand state-quota MBBS seats. The differentiator at SMS/RNT cutoff levels is error-rate control — which is precisely what weekly 1-on-1 mock reviews are built to fix.` },
    ],
  },
  {
    slug: 'west-bengal',
    state: 'West Bengal',
    board: 'WBCHSE & CBSE',
    engExam: 'WBJEE + JEE Main',
    medRoute: 'NEET UG + WB state counselling',
    stateExamName: 'WBJEE',
    engColleges: ['IIT Kharagpur', 'Jadavpur University', 'IIEST Shibpur', 'NIT Durgapur'],
    medColleges: ['Calcutta Medical College', 'NRS Medical College', 'IPGMER (SSKM) Kolkata', 'Medical College Kolkata'],
    cities: ['Kolkata', 'Howrah', 'Durgapur', 'Siliguri', 'Asansol', 'Kharagpur', 'Burdwan', 'Malda'],
    jeeIntro: `Bengal students target two exams — WBJEE for Jadavpur and IIEST, and JEE for IIT Kharagpur and the NITs. MindPeak's 1-on-1 track covers the WBJEE + JEE overlap together and bridges the WBCHSE → JEE depth gap, with Bengali-medium support where it helps.`,
    neetIntro: `For West Bengal's medical aspirants, Calcutta Medical College and NRS are the dream — and NEET is the only route. Our mentors rebuild Biology from the WBCHSE base to NCERT precision and integrate WBJEE-medical and NEET prep.`,
    jeeFaqs: [
      { q: `Do you prepare students for WBJEE and JEE together in ${YEAR}?`, a: `Yes. About 70% of WBJEE overlaps JEE Main; the remainder — Statistics, Mathematical Reasoning and WBJEE's distinctive MCQ formats — gets its own modules in the same 1-on-1 plan, so you're genuinely ready for both, not just nominally enrolled for both.` },
      { q: `What WBJEE rank do I need for Jadavpur University?`, a: `JU's CSE/ECE/EE seats have historically closed inside the top ~500 WBJEE ranks — and Jadavpur remains effectively tuition-free, making it one of India's best engineering value propositions. IIEST Shibpur and NIT Durgapur run on JEE Main (95+/94+ percentile bands).` },
      { q: `Is Bengali-medium support available?`, a: `Yes — tough concepts can be explained in Bengali while keeping problem-solving in exam English. Bengal students' traditional strength in Mathematics and Physics gets channelled into JEE-style multi-step problems; Chemistry usually needs the most deliberate attention.` },
      { q: `How does WBCHSE differ from what JEE assumes?`, a: `The board gives a solid theory base but under-trains application speed, and several JEE-depth areas sit outside its emphasis. Your mentor runs a gap diagnosis in week one and sequences bridge modules before full JEE-level problem sets.` },
      { q: `I'm in Siliguri / North Bengal — is quality JEE coaching possible without moving to Kolkata?`, a: `Yes — that's a core reason MindPeak exists. North Bengal has almost no JEE-grade coaching; online 1-on-1 brings an IIT-alumni mentor to Siliguri, Malda or Asansol with zero relocation.` },
    ],
    neetFaqs: [
      { q: `What NEET rank do I need for Calcutta Medical College?`, a: `Medical College Kolkata has historically closed under roughly AIR 4,000, with RG Kar near ~10,000 and NRS near ~15,000 in state quota. 85% of WB government seats are state-quota, so disciplined preparation against the Bengal pool is what counts.` },
      { q: `Is Bengali-medium support available for NEET biology?`, a: `Yes — mentors explain concepts in Bengali where it speeds understanding, while drilling the English NCERT lines NTA quotes. NEET also offers a Bengali paper; we help you choose your medium strategically, not by default.` },
      { q: `How do I move from WBCHSE biology to NCERT precision?`, a: `WBCHSE biology is solid but framed differently from NCERT, whose exact sentences NTA tests. We map your board chapters to NCERT unit by unit, rebuild the gaps, and drill statement-level recall — typically a 10-week bridge before mock cycles.` },
      { q: `Does WBJEE matter for medical admission?`, a: `Not anymore — MBBS/BDS in West Bengal runs purely on NEET through WBMCC state counselling. That simplifies your year: one syllabus, one exam, prepared to full depth.` },
      { q: `Can students outside Kolkata prepare seriously for NEET?`, a: `Yes. Coaching concentrates in Kolkata while Durgapur, Burdwan, Siliguri and Malda are underserved — 1-on-1 online coaching erases that geography entirely, with the same mentor quality everywhere in Bengal.` },
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
    jeeFaqs: [
      { q: `Can students outside Indore/Bhopal get top JEE coaching in ${YEAR}?`, a: `Yes — MindPeak is fully online and 1-on-1, so a student in Gwalior, Jabalpur, Ujjain or Rewa gets the same mentor quality as one in Indore. MP's coaching concentration in two cities stops being your constraint.` },
      { q: `What JEE percentile do I need for MANIT Bhopal or IIT Indore?`, a: `MANIT Bhopal CSE/ECE typically closes around 94+ percentile in JEE Main; IIT Indore runs through JEE Advanced with CSE near AIR ~3,500 historically. IIITDM Jabalpur sits near the 90+ band. Your plan works backwards from whichever rung you're targeting.` },
      { q: `Do you bridge the MP Board to JEE gap?`, a: `Yes. MPBSE has been NCERT-aligned since 2018, but problem-solving depth and English terminology still lag JEE's assumptions — especially outside the big cities. Your mentor diagnoses the specific gaps in week one and clears them before exam-level material.` },
      { q: `How do MP students get state engineering seats?`, a: `MP's DTE counselling allots state colleges (SGSITS, RGPV system) on your JEE Main score — no separate state exam. One JEE Main preparation covers the national and state ladders simultaneously.` },
      { q: `I study in Hindi medium — can I prepare for JEE?`, a: `Yes. Your mentor teaches bilingually and builds English problem fluency progressively — the standard path for MPBSE students, most of whom start exactly there.` },
    ],
    neetFaqs: [
      { q: `What NEET rank do I need for Gandhi Medical College Bhopal?`, a: `GMC Bhopal has historically closed under roughly AIR 8,000, MGM Indore near ~12,000 and NSCB Jabalpur near ~20,000 in state quota. MP's cutoffs run slightly gentler than neighbouring states — preparation quality converts directly into seats here.` },
      { q: `How many government medical colleges does MP have?`, a: `Around 13-17 government colleges and expanding, plus AIIMS Bhopal at the top of the ladder. 85% of state-college seats are MP-domicile quota, allotted through MP DME counselling on your NEET rank.` },
      { q: `How steep is the MP Board → NEET biology jump?`, a: `Steep but well-mapped: MPBSE biology under-trains NCERT's line-level precision, and Hindi-medium students need the English terminology built deliberately. Your mentor rebuilds from the NCERT text bilingually and drills NTA's statement patterns.` },
      { q: `Do MP students need to relocate to Kota or Indore for NEET?`, a: `No. The whole point of 1-on-1 online coaching is that a student in Rewa, Satna or Sagar gets a dedicated mentor — something even an Indore batch can't offer at any price.` },
      { q: `Can I sit NEET in Hindi?`, a: `Yes — NEET offers a Hindi paper and many MP students take it. We train NCERT English terminology alongside, since MBBS is English-medium, and let you pick your exam language deliberately.` },
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
    jeeFaqs: [
      { q: `Do Bihar students need to relocate to Kota for JEE in ${YEAR}?`, a: `No. MindPeak gives the same dedicated 1-on-1 mentoring online, so students in Patna, Gaya, Bhagalpur or Darbhanga prepare from home — without the ₹8-12 lakh two-year cost of the Kota route or the isolation that defeats so many students there.` },
      { q: `What JEE percentile do I need for NIT Patna or IIT Patna?`, a: `NIT Patna CSE/ECE typically closes around the 93+ percentile band in JEE Main; IIT Patna runs through JEE Advanced with CSE near AIR ~4,000 historically. BIT Mesra, just across the border, sits near 92+. Your mentor tracks your mock percentile against these rungs weekly.` },
      { q: `Do you bridge the Bihar Board to JEE gap?`, a: `Yes — your mentor starts from your actual level, addressing the depth gaps (BSEB runs shallower than CBSE in Organic Chemistry and Calculus) and the English-medium vocabulary, before moving to exam-level work. Determination is never Bihar students' problem; structured guidance is.` },
      { q: `How do Bihar students get state engineering seats?`, a: `UGEAC counselling allots Bihar's government engineering colleges using your JEE Main rank, so the same preparation covers IITs, NITs and the state ladder — no separate exam to split your year over.` },
      { q: `Can students from Hindi-medium BSEB schools crack JEE?`, a: `Absolutely — Bihar's own Super 30 story proved this at scale. The method is the same one we use: bilingual concept teaching, relentless English-medium problem drills, and a mentor who tracks your specific gaps rather than a batch average.` },
    ],
    neetFaqs: [
      { q: `What NEET rank do I need for AIIMS Patna or PMCH?`, a: `AIIMS Patna has historically closed under roughly AIR 3,000 and PMCH under ~6,000; NMCH sits near ~15,000 and DMCH Darbhanga near ~30,000 in state quota. 85% of Bihar's government seats are domicile-quota, allotted via BCECEB counselling on your NEET rank.` },
      { q: `Is quality NEET coaching available outside Patna?`, a: `Almost none exists physically — Bihar has India's worst student-to-coaching-centre ratio, and serious aspirants historically relocated. Online 1-on-1 coaching reverses that: Muzaffarpur, Purnia and Begusarai students get the same dedicated mentor a Patna student does.` },
      { q: `How do I bridge BSEB biology to NEET's NCERT standard?`, a: `BSEB biology leaves real gaps against NCERT's line-level detail. Your mentor rebuilds each unit from the NCERT text — bilingually where Hindi helps — then drills the statement and assertion-reason patterns NTA repeats every year.` },
      { q: `Can I sit NEET in Hindi as a Bihar Board student?`, a: `Yes, NEET offers a Hindi paper and it's a common choice in Bihar. We build the English NCERT terminology in parallel, since MBBS itself is taught in English — you choose your exam medium with full information.` },
      { q: `What makes NEET competition from Bihar unique?`, a: `Volume with thin infrastructure: roughly 4 lakh Bihar aspirants across JEE/NEET chase guidance that mostly doesn't exist in-state. The students who clear AIIMS Patna and PMCH cutoffs are the ones who replaced 'more hours' with corrected, mentor-reviewed practice.` },
    ],
  },
  {
    slug: 'gujarat',
    state: 'Gujarat',
    board: 'GSEB & CBSE',
    engExam: 'GUJCET + JEE Main',
    medRoute: 'NEET UG + Gujarat state counselling',
    stateExamName: 'GUJCET',
    engColleges: ['IIT Gandhinagar', 'SVNIT Surat', 'DA-IICT Gandhinagar', 'Nirma University', 'L.D. College Ahmedabad'],
    medColleges: ['B.J. Medical College Ahmedabad', 'Government Medical College Surat', 'M.P. Shah Jamnagar'],
    cities: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Gandhinagar', 'Bhavnagar', 'Jamnagar', 'Anand'],
    jeeIntro: `Gujarat students sit GUJCET for state colleges and JEE for IIT Gandhinagar and SVNIT Surat. MindPeak's 1-on-1 track covers the GUJCET + JEE overlap together and bridges the GSEB → JEE depth gap, with Gujarati-medium support where it helps.`,
    neetIntro: `For Gujarat NEET aspirants targeting B.J. Medical College Ahmedabad or GMC Surat, the GSEB → NEET biology transition is the key hurdle. Our 1-on-1 mentors rebuild that base and tighten recall to the NCERT line.`,
    jeeFaqs: [
      { q: `Can I prepare for GUJCET and JEE together in ${YEAR}?`, a: `Yes — roughly 80% of GUJCET overlaps JEE Main, and GUJCET's single-sitting MCQ format is easier than JEE's depth. Your mentor builds one plan that serves both: JEE-level problem solving as the spine, GUJCET-specific weighting layered on top.` },
      { q: `What GUJCET rank do I need for L.D. College of Engineering?`, a: `LDCE's core branches have typically closed inside the top ~1,000 GUJCET ranks. On the JEE side, SVNIT Surat runs near 95+ percentile, DA-IICT near 92+ and Nirma near 85+. One integrated track keeps every rung reachable.` },
      { q: `Is Gujarati-medium support available?`, a: `Yes — concepts can be explained in Gujarati to speed understanding while problem-solving stays in exam English. Many of our Gujarat students think in Gujarati and solve in English; the bridge is built deliberately, chapter by chapter.` },
      { q: `Where does GSEB fall short of JEE's assumptions?`, a: `Mainly depth in Organic Chemistry and Calculus, plus MCQ speed — the board's pattern rewards different skills. Your mentor's week-one diagnostic finds your specific gaps and sequences bridge modules before JEE-level sets.` },
      { q: `Is IIT Gandhinagar realistic for a Gujarat student?`, a: `Yes — it's one of the strongest new-generation IITs, with CSE closing near AIR ~3,000 in JEE Advanced historically. Having an IIT in-state matters: your counselling preferences can keep you close to Gujarat's industrial job market.` },
    ],
    neetFaqs: [
      { q: `What NEET rank do I need for B.J. Medical College Ahmedabad?`, a: `BJMC has historically closed under roughly AIR 5,000; GMC Surat near ~15,000, GMC Vadodara ~18,000 and M.P. Shah Jamnagar ~20,000 in state quota. 85% of Gujarat's government seats are domicile-reserved, allotted by ACPUGMEC on NEET rank.` },
      { q: `Can I sit NEET in Gujarati?`, a: `Yes — NEET offers a Gujarati-medium paper, widely taken in the state. We coach bilingually and build NCERT's English terminology in parallel, because MBBS is English-medium and the English paper sidesteps translation ambiguity. The choice stays yours.` },
      { q: `How do I bridge GSEB biology to NCERT precision?`, a: `GSEB biology covers the ground but not the line-level NCERT detail NTA quotes. Your mentor maps each GSEB chapter to NCERT, rebuilds gaps, and drills statement-based questions — usually a 10-week bridge before full mocks.` },
      { q: `How many government medical colleges does Gujarat have?`, a: `Around 14-17 government colleges plus GMERS institutions — a wide ladder of cutoff levels. A precise NEET strategy gives Gujarat students realistic targets from BJMC down to the newer GMCs.` },
      { q: `Is online 1-on-1 NEET coaching effective in Saurashtra and smaller Gujarat cities?`, a: `That's where it matters most — Rajkot, Bhavnagar, Jamnagar and Anand have limited NEET-grade coaching. Online 1-on-1 delivers an identical mentor to every city, no Ahmedabad relocation needed.` },
    ],
  },
  {
    slug: 'andhra-pradesh',
    state: 'Andhra Pradesh',
    board: 'BIEAP (AP Board) & CBSE',
    engExam: 'AP EAPCET (EAMCET) + JEE Main',
    medRoute: 'NEET UG + AP state counselling',
    stateExamName: 'AP EAPCET',
    engColleges: ['IIT Tirupati', 'NIT Andhra Pradesh (Tadepalligudem)', 'Andhra University', 'JNTU colleges'],
    medColleges: ['Andhra Medical College Visakhapatnam', 'Siddhartha Medical College Vijayawada', 'SVIMS Tirupati'],
    cities: ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Tirupati', 'Nellore', 'Kakinada', 'Rajahmundry', 'Kurnool'],
    jeeIntro: `Andhra Pradesh is dominated by corporate colleges (Sri Chaitanya, Narayana) that run mega-batches and rote drills. MindPeak is the deliberate alternative: 1-on-1 JEE coaching integrating AP EAPCET and JEE, targeting IIT Tirupati and NIT AP, with Telugu-medium support.`,
    neetIntro: `AP's NEET race runs through the same corporate-college pressure cooker. Our 1-on-1 mentors give Andhra Medical College Vizag and Siddhartha Vijayawada aspirants real personal attention, integrating EAPCET and NEET prep with Telugu support.`,
    jeeFaqs: [
      { q: `How is MindPeak different from Sri Chaitanya / Narayana in ${YEAR}?`, a: `Those are 150+ student corporate batches built on rote drilling and residential pressure. MindPeak is 1-on-1 — a dedicated mentor, a plan built around your weak areas, and no hostel pressure-cooker. You keep the rigour, drop the factory model.` },
      { q: `Do you cover AP EAPCET along with JEE?`, a: `Yes — EAPCET shares ~80% of its syllabus with JEE Main, is offered bilingually (English/Telugu), and weighs board marks into its ranking. Your mentor runs one integrated plan covering the overlap once and each exam's quirks separately.` },
      { q: `What EAPCET rank do I need for JNTU or Andhra University?`, a: `Top JNTU campuses' CSE/IT have typically closed inside ~3,000 EAPCET ranks and Andhra University ~5,000. On the JEE side, NIT AP runs near 94+ percentile and IIT Tirupati near AIR ~5,000 in Advanced. One track, every rung tracked.` },
      { q: `I never joined an integrated coaching school in Class 8-9 — am I too late?`, a: `No. AP's early-specialisation culture (60%+ of aspirants in residential integrated programs) makes late starters feel locked out, but a 1-on-1 plan compresses what batches stretch: your mentor starts from your actual level and sequences only what you need.` },
      { q: `Is Telugu-medium support available for JEE?`, a: `Yes — concepts can be explained in Telugu where it speeds understanding, while problem-solving stays in exam English. The transition is built into the plan, not left to you.` },
    ],
    neetFaqs: [
      { q: `What NEET rank do I need for Andhra Medical College Visakhapatnam?`, a: `AMC Vizag has historically closed under roughly AIR 10,000 in state quota, Guntur Medical College near ~15,000, Rangaraya Kakinada ~20,000 and Kurnool ~25,000. 85% of AP's government seats are domicile-quota via Dr. NTR University counselling.` },
      { q: `Does EAPCET matter for MBBS in Andhra Pradesh?`, a: `No — medical admission runs purely on NEET; EAPCET's bio stream feeds agriculture and pharmacy. Some students keep the B.Pharm fallback, which your mentor can fold in without diluting NEET preparation.` },
      { q: `How is 1-on-1 NEET coaching different from a corporate college hostel program?`, a: `The corporate model is 8-10 hours of classes for 150+ students with rote test cycles — only the top batches get real attention. 1-on-1 inverts it: every session is built on your error log, with NCERT-line drilling targeted at your actual weak units.` },
      { q: `Can I prepare for NEET in Telugu?`, a: `NEET offers a Telugu paper, and our mentors teach bilingually. We build NCERT's English phrasing in parallel — NTA lifts questions from the English text, and MBBS is English-medium — so you pick your paper language strategically.` },
      { q: `Can students outside Vijayawada/Vizag get serious NEET mentoring?`, a: `Yes — Nellore, Kakinada, Rajahmundry and Kurnool students get the identical 1-on-1 mentor online. No residential campus, no relocation, same rigour.` },
    ],
  },
  {
    slug: 'telangana',
    state: 'Telangana',
    board: 'TSBIE (TG Board) & CBSE',
    engExam: 'TG EAPCET (EAMCET) + JEE Main',
    medRoute: 'NEET UG + Telangana state counselling',
    stateExamName: 'TG EAPCET',
    engColleges: ['IIT Hyderabad', 'NIT Warangal', 'IIIT Hyderabad', 'Osmania University (UCE)', 'JNTU Hyderabad'],
    medColleges: ['Osmania Medical College', 'Gandhi Medical College Hyderabad', 'Kakatiya Medical College Warangal'],
    cities: ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar', 'Khammam', 'Mahbubnagar', 'Nalgonda'],
    jeeIntro: `Telangana students aim for NIT Warangal, IIT Hyderabad and IIIT-H, but the corporate-college batch model dominates outside the capital. MindPeak's 1-on-1 track integrates TG EAPCET and JEE prep and reaches students from Warangal to Khammam with Telugu-medium support.`,
    neetIntro: `For Telangana NEET aspirants, Osmania and Gandhi Medical College are the targets. Our 1-on-1 mentors replace the corporate mega-batch with personal attention, integrating EAPCET and NEET prep and tightening Biology to the NCERT line.`,
    jeeFaqs: [
      { q: `Do you cover TG EAPCET along with JEE in ${YEAR}?`, a: `Yes — EAPCET shares ~80% of its syllabus with JEE, runs bilingual (English/Telugu) papers, and factors board marks into ranking. One 1-on-1 plan covers the shared core at JEE depth and tunes for EAPCET's pattern separately.` },
      { q: `What does NIT Warangal or IIIT Hyderabad actually require?`, a: `NIT Warangal CSE typically closes near the 96+ percentile band in JEE Main; IIIT-H is tougher still — 99+ percentile via JEE or its own UGEE route. IIT Hyderabad CSE has run near AIR ~3,000 in Advanced. Your mock cycle tracks all three ladders.` },
      { q: `Hyderabad is full of coaching institutes — why choose online 1-on-1?`, a: `Hyderabad is India's second-largest coaching hub, but the dominant model is 100-200 student batches where only top performers get attention. 1-on-1 flips that: every hour is built on your error log. And outside Hyderabad — Warangal, Karimnagar, Khammam — the choice barely exists at all.` },
      { q: `Does the TS Board's easier marking hurt JEE preparation?`, a: `It creates a calibration trap: strong board marks can mask weak JEE-level problem-solving. Your mentor benchmarks you against JEE-standard sets from week one, so you always know your real level — before the exam tells you.` },
      { q: `Is Telugu-medium support available?`, a: `Yes — tough concepts explained in Telugu where useful, with all problem-solving in exam English. The integrated school background many TG students carry adapts quickly to this format.` },
    ],
    neetFaqs: [
      { q: `What NEET rank do I need for Osmania or Gandhi Medical College?`, a: `Osmania has historically closed under roughly AIR 8,000 and Gandhi near ~12,000 in state quota, with Kakatiya Warangal near ~25,000. 85% of Telangana's government seats are domicile-quota through KNRUHS counselling.` },
      { q: `How is this different from a Sri Chaitanya / Narayana NEET program?`, a: `The corporate residential model means 8-10 hour class days, batch test cycles and burnout — with personal doubt-resolution rationed to top batches. Our 1-on-1 model gives you the mentor's full hour, an NCERT-line drilling plan built on your errors, and your home routine intact.` },
      { q: `Can I prepare for NEET in Telugu?`, a: `NEET offers a Telugu paper and our mentors teach bilingually. We drill NCERT's English statements in parallel, since NTA's questions track the English text and MBBS is English-medium — then you choose your paper language deliberately.` },
      { q: `Can students in Warangal, Nizamabad or Khammam get Hyderabad-grade NEET coaching?`, a: `Yes — that's the structural fix online 1-on-1 provides. The mentor in your living room in Khammam is the same calibre as the one a Gachibowli student gets; geography stops deciding your preparation.` },
      { q: `How do I avoid the burnout the integrated colleges are known for?`, a: `By replacing volume with precision: a sustainable weekly plan, mock analysis that targets your top three error sources, and a mentor who adjusts load when your accuracy data says so — not a fixed 10-hour grind.` },
    ],
  },
  {
    slug: 'kerala',
    state: 'Kerala',
    board: 'Kerala HSE (DHSE) & CBSE',
    engExam: 'KEAM + JEE Main',
    medRoute: 'NEET UG + Kerala state counselling',
    stateExamName: 'KEAM',
    engColleges: ['NIT Calicut', 'CET Trivandrum', 'IIST Thiruvananthapuram', 'Government Engineering Colleges (KEAM)'],
    medColleges: ['Govt. Medical College Thiruvananthapuram', 'Govt. Medical College Kozhikode', 'Govt. Medical College Kottayam'],
    cities: ['Kochi', 'Thiruvananthapuram', 'Kozhikode', 'Thrissur', 'Kollam', 'Palakkad', 'Kannur', 'Alappuzha'],
    jeeIntro: `Kerala's strong school system gives students a solid base, but KEAM-focused coaching often under-prepares them for JEE depth. MindPeak's 1-on-1 track leverages that base and pushes for NIT Calicut, CET Trivandrum and the IITs, integrating KEAM and JEE prep with Malayalam support.`,
    neetIntro: `Kerala consistently tops NEET qualification rates, so the competition for Government Medical Colleges is brutal. Our 1-on-1 mentors close the Kerala-board MCQ-application gap and add the exam-temperament edge NEET rewards.`,
    jeeFaqs: [
      { q: `Do you integrate KEAM and JEE prep in ${YEAR}?`, a: `Yes — KEAM overlaps ~75% with JEE Main and tests Class 11+12 in one sitting. Your mentor uses Kerala students' strong theory base as the foundation and layers JEE-depth problem-solving on top, so both exams ride one plan.` },
      { q: `What KEAM rank do I need for CET Trivandrum?`, a: `CET's CSE/IT seats have typically closed inside the top ~500 KEAM ranks, with GEC Thrissur near ~2,000 and Model Engineering College near ~1,500. NIT Calicut runs on JEE Main around the 97+ percentile band — both ladders tracked in your mock cycle.` },
      { q: `Kerala students score brilliantly in boards — why do JEE results lag?`, a: `Because the board rewards theory mastery while JEE rewards multi-concept numerical attack under time pressure — a genuinely different skill. We keep your conceptual edge and add the problem-volume and timing drills the Kerala system doesn't supply.` },
      { q: `Is Malayalam-medium support available?`, a: `Yes — concepts can be explained in Malayalam while problem-solving stays in exam English. For most Kerala students the language gap is small; the application gap is the real work.` },
      { q: `Is IIST Thiruvananthapuram a realistic target?`, a: `Yes — IIST admits through JEE Advanced and leads directly into ISRO-linked careers, a uniquely Kerala-relevant path. Your mentor can weight your plan toward it alongside NIT Calicut and the IIT list.` },
    ],
    neetFaqs: [
      { q: `What NEET rank do I need for GMC Thiruvananthapuram or Kozhikode?`, a: `GMC Thiruvananthapuram has historically closed under roughly AIR 10,000 and Kozhikode near ~12,000 in state quota, with Thrissur near ~20,000. Kerala's high qualification rate makes the state-quota race unusually dense — precision wins it.` },
      { q: `Why do so many Kerala students qualify NEET but miss government seats?`, a: `Kerala tops qualification rates, so clearing the bar means little — GMC seats go to students who convert strong theory into fast, error-free MCQ execution. Our mock-analysis loop attacks exactly that conversion gap.` },
      { q: `Is Malayalam-medium support available for NEET?`, a: `Yes — explanation in Malayalam where it helps, with NCERT's English lines drilled for recall. NEET also offers a Malayalam paper; we help you choose your medium based on your reading speed in each.` },
      { q: `I'm an NRI/Gulf-based Keralite student — can I prepare with you?`, a: `Yes — 1-on-1 scheduling adapts to Gulf time zones, a long-standing need for NRK families that batch institutes can't serve. Same mentor, same plan, scheduled around your school day.` },
      { q: `Do I need coaching in Kochi or Thiruvananthapuram to compete?`, a: `No — coaching concentrates there, but online 1-on-1 puts the same mentor in Kannur, Palakkad or Alappuzha. Kerala's connectivity makes it one of the best-served states for online preparation.` },
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
    jeeFaqs: [
      { q: `Do Haryana students need to commute to Delhi for top JEE coaching in ${YEAR}?`, a: `No. MindPeak is 1-on-1 online, so students in Karnal, Hisar, Ambala or Rohtak get the same mentor quality as someone in a Kalu Sarai classroom — without the NCR commute that eats 2+ hours daily.` },
      { q: `What JEE percentile do I need for NIT Kurukshetra?`, a: `NIT Kurukshetra's CSE/ECE typically closes around the 94+ percentile band, with IIIT Sonepat near 88+ and DCRUST Murthal near 82+. HSTES counselling then allots Haryana's state colleges on the same JEE Main rank — one exam, the whole ladder.` },
      { q: `Do you bridge the HBSE board to JEE gap?`, a: `Yes — HBSE is NCERT-aligned but its descriptive exam pattern under-trains MCQ speed, and rural-school students often need English terminology support. Your mentor diagnoses both in week one and clears them before exam-level work.` },
      { q: `My family is weighing SSC/government-exam prep against JEE — which path?`, a: `A real Haryana question. JEE preparation builds the maths/physics core that transfers to every technical government exam, so starting JEE-track doesn't close doors — your mentor can also speak with parents about the realistic college outcomes at your level.` },
      { q: `Is online coaching effective in rural Haryana?`, a: `Yes — and it's the only format that reaches it. The state's coaching access collapses outside Gurugram/Faridabad; 1-on-1 online delivers identical mentoring in Hisar, Panipat or a village outside Rohtak.` },
    ],
    neetFaqs: [
      { q: `What NEET rank do I need for PGIMS Rohtak?`, a: `PGIMS Rohtak has historically closed under roughly AIR 5,000 — North India's most sought state seat after the Delhi colleges. BPS GMC Khanpur Kalan sits near ~20,000 and Kalpana Chawla GMC Karnal near ~25,000, all in Haryana's 85% domicile quota.` },
      { q: `Do you bridge HBSE biology to NEET's NCERT standard?`, a: `Yes — your mentor maps HBSE chapters to NCERT, rebuilds the line-level detail the board exam never demanded, and drills NTA's statement patterns. Hindi-medium students get the bridge built bilingually.` },
      { q: `Do Haryana students need a Delhi coaching hub for NEET?`, a: `No. The Delhi institutes' real product is batch lectures — exactly what 1-on-1 replaces with mentor-reviewed practice. You compete for PGIMS from your home in Sonipat or Ambala with zero commute hours lost.` },
      { q: `How does Haryana's NEET counselling work?`, a: `On your NEET rank: 15% of government seats go to All India Quota, 85% to Haryana-domicile students through state counselling. Your mentor tracks your mock scores against both ladders so you always know your realistic college band.` },
      { q: `Can first-generation aspirants from rural Haryana really compete?`, a: `Yes — determination is rarely the gap; structured guidance is. A dedicated mentor supplies the strategy, error analysis and college-process navigation that students without family precedent otherwise miss.` },
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
    jeeFaqs: [
      { q: `What JEE percentile do I need for Thapar or NIT Jalandhar?`, a: `Thapar's CSE typically closes near the 88+ percentile band (it also runs its own counselling), NIT Jalandhar near 93+, PEC Chandigarh near 94+, and IIT Ropar through JEE Advanced near AIR ~4,500. Your mentor tracks your mocks against each rung.` },
      { q: `Is Punjabi-medium support available in ${YEAR}?`, a: `Yes — concepts can be explained in Punjabi to speed understanding, while problem-solving stays in the English the exams use. PSEB students get the English technical vocabulary built deliberately alongside.` },
      { q: `Can students outside Ludhiana/Chandigarh get top JEE mentors?`, a: `Yes — online 1-on-1 means a student in Bathinda, Hoshiarpur or Pathankot gets the same mentor quality as one in Ludhiana. Punjab's coaching concentration around Chandigarh stops being your constraint.` },
      { q: `Our family is split between the Canada/IELTS route and JEE — does JEE prep still make sense?`, a: `It's the classic Punjab dilemma. JEE-track preparation keeps both doors open: the maths/physics core raises school grades that study-abroad admissions also weigh, while a Thapar or IIT Ropar seat is a outcome worth comparing seriously against the overseas cost equation.` },
      { q: `Where does PSEB fall short of JEE's level?`, a: `Recent NCERT alignment helps, but depth gaps remain in advanced topics and MCQ speed. Your mentor's diagnostic finds your specific gaps in week one and sequences the bridge before JEE-level problem sets.` },
    ],
    neetFaqs: [
      { q: `What NEET rank do I need for GMC Patiala or GMC Amritsar?`, a: `GMC Patiala has historically closed under roughly AIR 10,000 and GMC Amritsar near ~15,000 in state quota, with GMC Faridkot near ~25,000. AIIMS Bathinda runs on the all-India ladder and closes far tighter. 85% of Punjab's government seats are domicile-quota.` },
      { q: `Is AIIMS Bathinda a realistic target for Punjab students?`, a: `It's the state's premier target and fully on the all-India ladder — historically needing a NEET AIR in the low thousands. Your mentor calibrates whether to plan for it or anchor on the GMC ladder, based on your mock trajectory, not wishful thinking.` },
      { q: `Do you bridge PSEB biology to NEET's NCERT standard?`, a: `Yes — PSEB biology under-trains NCERT's line-level precision. We rebuild each unit from the NCERT text (bilingually where Punjabi helps) and drill the statement patterns NTA repeats.` },
      { q: `Is Punjabi-medium NEET support available?`, a: `Yes — concepts in Punjabi where useful, recall drilling on NCERT's English lines, and NEET's Punjabi paper option explained so you choose your exam medium deliberately.` },
      { q: `Can students in smaller Punjab cities prepare without moving to Chandigarh?`, a: `Yes — that's the point of 1-on-1 online: Bathinda, Pathankot and Hoshiarpur students get identical mentoring at home, with the hostel budget saved for MBBS itself.` },
    ],
  },
  {
    slug: 'odisha',
    state: 'Odisha',
    board: 'CHSE Odisha & CBSE',
    engExam: 'JEE Main + OJEE',
    medRoute: 'NEET UG + Odisha state counselling',
    stateExamName: 'OJEE',
    engColleges: ['IIT Bhubaneswar', 'NIT Rourkela', 'IIIT Bhubaneswar', 'KIIT'],
    medColleges: ['SCB Medical College Cuttack', 'AIIMS Bhubaneswar', 'MKCG Berhampur', 'VSS Burla'],
    cities: ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Sambalpur', 'Berhampur', 'Balasore', 'Puri'],
    jeeIntro: `Odisha students target NIT Rourkela and IIT Bhubaneswar through both OJEE and JEE. MindPeak runs a single 1-on-1 track covering the OJEE + JEE overlap and bridges the CHSE → JEE gap, reaching students from Bhubaneswar to Sambalpur.`,
    neetIntro: `For Odisha NEET aspirants, SCB Medical College Cuttack and AIIMS Bhubaneswar are the goals. Our 1-on-1 mentors rebuild Biology from the CHSE base to NCERT precision with personal attention a batch can't match.`,
    jeeFaqs: [
      { q: `Do you cover OJEE along with JEE in ${YEAR}?`, a: `Yes — OJEE overlaps ~70% with JEE Main and tests only the Class 12 syllabus. Your mentor covers the shared core at JEE depth and adds OJEE's pattern separately, so VSSUT Burla and the state ladder stay open alongside the NITs.` },
      { q: `What JEE percentile do I need for NIT Rourkela?`, a: `NIT Rourkela — consistently a top-15 NIT — typically closes its CSE/ECE near the 95+ percentile band, with IIIT Bhubaneswar near 90+ and IIT Bhubaneswar through Advanced. Odisha students have the home-state advantage in NIT Rourkela's state quota.` },
      { q: `Where does CHSE fall short of JEE's assumptions?`, a: `Mainly 3D Geometry and Vector Calculus emphasis in Maths, plus overall MCQ speed. Your mentor's diagnostic locates your specific gaps and clears them with bridge modules before full JEE sets.` },
      { q: `Can students in western Odisha get serious JEE coaching?`, a: `Yes — Rourkela, Sambalpur and Balasore have thin local options, but online 1-on-1 delivers the identical mentor everywhere in the state. No Bhubaneswar relocation, no compromise.` },
      { q: `Is Odia-medium support available?`, a: `Yes — concepts can be explained in Odia where it helps, while problem-solving stays in exam English, with the technical vocabulary built chapter by chapter.` },
    ],
    neetFaqs: [
      { q: `What NEET rank do I need for SCB Cuttack or AIIMS Bhubaneswar?`, a: `SCB Medical College Cuttack has historically closed under roughly AIR 8,000 in state quota; AIIMS Bhubaneswar runs the all-India ladder near AIR ~2,000. MKCG Berhampur sits near ~20,000 and VIMSAR Burla ~25,000 — a wide in-state ladder.` },
      { q: `Is Odisha's NEET competition easier than other states?`, a: `Relatively, yes — Odisha's state-quota cutoffs run gentler than the southern states', so strong preparation converts to seats at better rates. The catch: aspirant numbers are growing ~20% annually, so that window is narrowing.` },
      { q: `How do I bridge CHSE biology to NCERT precision?`, a: `CHSE biology is progressively NCERT-aligned but doesn't drill the line-level detail NTA quotes. Your mentor maps your chapters to NCERT, rebuilds gaps (in Odia where that helps), and drills statement-pattern recall.` },
      { q: `Can students outside Bhubaneswar/Cuttack prepare seriously for NEET?`, a: `Yes — Berhampur, Sambalpur and Balasore students get identical 1-on-1 mentoring online. Odisha's coaching concentration in the twin cities stops deciding who gets a fair shot.` },
      { q: `What about connectivity and cyclone-season disruptions?`, a: `Sessions reschedule without loss — your plan and error log live with your mentor, not a batch calendar. Recorded sessions and asynchronous doubt-clearing cover the gaps weather creates.` },
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
    jeeFaqs: [
      { q: `Do Jharkhand students need to relocate to Kota in ${YEAR}?`, a: `No — MindPeak gives the same dedicated 1-on-1 mentoring online, so students in Ranchi, Dhanbad or Bokaro prepare from home. The Kota route's two-year cost and isolation rarely beat a mentor who works on your specific gaps weekly.` },
      { q: `What JEE percentile do I need for NIT Jamshedpur or BIT Mesra?`, a: `NIT Jamshedpur's CSE/ECE typically closes near the 93+ percentile band and BIT Mesra near 92+. IIT (ISM) Dhanbad — in your own state — runs through JEE Advanced with CSE near AIR ~3,000 historically. Three premier targets, none requiring relocation.` },
      { q: `Do you bridge the JAC board to JEE gap?`, a: `Yes — JAC is NCERT-aligned on paper but implementation varies widely between Ranchi/Jamshedpur schools and the districts. Your mentor starts from your actual level and builds the depth and English vocabulary JEE assumes.` },
      { q: `Is there an advantage to Jharkhand's industrial culture?`, a: `Genuinely — Jamshedpur's TATA-built school ecosystem and the coal-belt's engineering families produce disciplined students with realistic engineering ambitions. What's usually missing is exam-specific mentoring, which is exactly the layer we add.` },
      { q: `Can first-generation aspirants compete for IIT (ISM) Dhanbad?`, a: `Yes. The gap for first-generation students is navigation — what to study when, how counselling works — not capability. A dedicated mentor supplies that navigation week by week.` },
    ],
    neetFaqs: [
      { q: `What NEET rank do I need for RIMS Ranchi?`, a: `RIMS Ranchi has historically closed under roughly AIR 12,000 in state quota, with MGM Jamshedpur near ~25,000 and PMCH Dhanbad near ~30,000. 85% of Jharkhand's government seats are domicile-quota — your real race is in-state.` },
      { q: `Is quality NEET coaching available in Jharkhand?`, a: `Physically, it concentrates in Ranchi, Jamshedpur and Dhanbad and thins out fast beyond them. Online 1-on-1 mentoring makes Bokaro, Hazaribagh, Deoghar and Giridih equal-access — same mentor, no relocation to Patna or Kota.` },
      { q: `How do I bridge JAC biology to NEET's NCERT standard?`, a: `Your mentor rebuilds each unit from the NCERT text — bilingually where Hindi helps — and drills the statement-level patterns NTA repeats. JAC students typically need 10-12 bridge weeks before full mock cycles.` },
      { q: `Can I sit NEET in Hindi as a JAC student?`, a: `Yes — NEET's Hindi paper is a common Jharkhand choice. We build NCERT's English terminology in parallel since MBBS is English-medium, and you pick your exam language with full information.` },
      { q: `What support exists for first-generation medical aspirants?`, a: `Mentor-led navigation of the whole pipeline: NEET strategy, document-and-domicile preparation, counselling choice-filling for RIMS/MGM/PMCH — the process knowledge families without a doctor precedent otherwise have to guess at.` },
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
    jeeFaqs: [
      { q: `Can students outside Raipur/Bhilai get top JEE coaching in ${YEAR}?`, a: `Yes — online 1-on-1 means students in Bilaspur, Korba, Raigarh or Rajnandgaon get the same mentor quality as one in Raipur. CG's small coaching market stops being your ceiling.` },
      { q: `What JEE percentile do I need for NIT Raipur?`, a: `NIT Raipur's CSE/IT typically closes near the 91+ percentile band, with IIIT Naya Raipur near 88+ — and IIT Bhilai, in your own state, runs through JEE Advanced. CG's home-state quota at NIT Raipur is a real structural edge.` },
      { q: `Do you bridge the CGBSE board to JEE gap?`, a: `Yes — CGBSE is NCERT-aligned but depth varies, and Hindi-medium students need English terminology built deliberately. Your mentor diagnoses CGBSE-specific gaps and clears them before exam-level material.` },
      { q: `Is Chhattisgarh's lower competition an actual advantage?`, a: `For state-quota seats, yes — CG's young coaching ecosystem means fewer hyper-prepared rivals than Kota-belt states. A seriously mentored CG student is competing well above the local curve.` },
      { q: `Does IIT Bhilai change the calculus for CG students?`, a: `It does — an in-state IIT with growing programs means JEE Advanced has a home-ground prize. Your mentor weights your plan accordingly once your mock trajectory supports an Advanced push.` },
    ],
    neetFaqs: [
      { q: `What NEET rank do I need for Pt. JNM Medical College Raipur?`, a: `Pt. JNMC Raipur has historically closed under roughly AIR 12,000 in state quota, with CIMS Bilaspur near ~25,000 and GMC Rajnandgaon near ~35,000. AIIMS Raipur runs the tighter all-India ladder. CG's cutoffs reward thorough preparation unusually well.` },
      { q: `Is NEET coaching available outside Raipur and Bilaspur?`, a: `Physically, barely — which is why online 1-on-1 has been transformative here: Korba, Durg and Raigarh students now get the same dedicated mentor a Raipur student does, with zero relocation.` },
      { q: `How do I bridge CGBSE biology to NCERT precision?`, a: `Your mentor maps CGBSE chapters to the NCERT text, rebuilds the line-level detail (bilingually where Hindi helps), and drills NTA's statement patterns until recall is automatic.` },
      { q: `Can I sit NEET in Hindi as a CGBSE student?`, a: `Yes — the Hindi paper is a common CG choice. We train NCERT's English terminology in parallel for MBBS-readiness, and you choose your exam medium deliberately.` },
      { q: `What's the realistic strategy for a first-generation CG medical aspirant?`, a: `Anchor on the state ladder — Pt. JNMC, CIMS, the newer GMCs — where CG's gentler cutoffs convert preparation to seats, keep AIIMS Raipur as the stretch goal, and let your mentor handle counselling navigation when results land.` },
    ],
  },
  {
    slug: 'assam',
    state: 'Assam',
    board: 'AHSEC (Assam Board) & CBSE',
    engExam: 'JEE Main/Advanced + Assam CEE',
    medRoute: 'NEET UG + Assam state counselling',
    stateExamName: 'Assam CEE',
    engColleges: ['IIT Guwahati', 'NIT Silchar', 'Assam Engineering College', 'Tezpur University'],
    medColleges: ['Gauhati Medical College', 'Assam Medical College Dibrugarh', 'Silchar Medical College'],
    cities: ['Guwahati', 'Dibrugarh', 'Silchar', 'Jorhat', 'Tezpur', 'Nagaon', 'Bongaigaon'],
    jeeIntro: `Assam students aim for IIT Guwahati and NIT Silchar, but the North-East has the thinnest top-tier coaching access in India. MindPeak brings 1-on-1 JEE coaching to students across Assam, bridging the AHSEC → JEE gap without leaving the region.`,
    neetIntro: `For Assam NEET aspirants, Gauhati Medical College and Assam Medical College Dibrugarh are the targets. Our 1-on-1 mentors rebuild Biology from the AHSEC base to NCERT precision and close the access gap North-East students face.`,
    jeeFaqs: [
      { q: `Is top JEE coaching accessible from Assam in ${YEAR}?`, a: `Yes — MindPeak is fully online and 1-on-1, so students in Guwahati, Dibrugarh, Silchar or Jorhat get IIT/NIT-mentor quality without relocating out of the North-East. Coaching access, the region's biggest structural gap, stops being yours.` },
      { q: `Do you cover Assam CEE along with JEE?`, a: `Yes — Assam CEE overlaps heavily with JEE Main, so one plan covers Assam Engineering College and the state ladder alongside NIT Silchar (≈91+ percentile band) and the national system.` },
      { q: `What does IIT Guwahati actually require?`, a: `A top-10 IIT in your own state: CSE has historically closed near AIR ~2,000 in JEE Advanced. Its presence has built a real competitive-exam culture around Guwahati — your mentor channels that into a structured multi-year plan.` },
      { q: `How do monsoon and connectivity disruptions affect online prep?`, a: `Less than you'd fear: sessions reschedule without loss, recordings cover gaps, and your plan lives with your mentor rather than a batch calendar. Flood-season contingencies are built into Assam students' schedules from the start.` },
      { q: `Where does AHSEC fall short of JEE's level?`, a: `Advanced Physics and Organic Chemistry depth, plus English-medium speed for Assamese-medium students. Assam's traditional Maths strength is a real asset — your mentor builds the rest around it.` },
    ],
    neetFaqs: [
      { q: `What NEET rank do I need for Gauhati Medical College?`, a: `GMC Guwahati has historically closed under roughly AIR 10,000 in state quota, with Assam Medical College Dibrugarh near ~15,000, Silchar near ~25,000 and Jorhat near ~30,000 — a wide in-state ladder where 85% of seats are Assam-domicile.` },
      { q: `Do North-East students get any structural advantages in NEET?`, a: `Assam's state-quota cutoffs run gentler than mainland coaching-belt states, and central reservation policies add routes for eligible categories. Combined with thin local competition for top preparation, a well-mentored Assam student has genuine leverage.` },
      { q: `How do I bridge AHSEC biology to NCERT precision?`, a: `Your mentor maps AHSEC chapters to the NCERT text, rebuilds the gaps (in Assamese where that helps), and drills NTA's statement-level patterns. NEET also offers an Assamese paper — we help you choose your medium strategically.` },
      { q: `Is NEET coaching available outside Guwahati?`, a: `Physically almost none — which is why online 1-on-1 matters most here: Dibrugarh, Silchar, Nagaon and Bongaigaon students get the identical mentor with zero relocation out of the region.` },
      { q: `Does Assam offer any support schemes for aspirants?`, a: `The state has run coaching-assistance schemes for underprivileged students (e.g. fee support programs), and government college tuition remains low. Your mentor's job is making sure preparation quality — the real bottleneck — matches your ambition.` },
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
    jeeFaqs: [
      { q: `Can hill-district students get top JEE coaching in ${YEAR}?`, a: `Yes — online 1-on-1 means students in Haldwani, Haridwar or the Kumaon/Garhwal hill districts get the same mentor quality as one in Dehradun, with winter-disruption contingencies built into the schedule.` },
      { q: `What does IIT Roorkee actually require?`, a: `Asia's oldest technical institution sits in your own state: CSE has historically needed a JEE Advanced AIR inside ~1,500. NIT Uttarakhand runs on JEE Main near the 89+ percentile band — your mentor maps the ladder and tracks your mocks against it.` },
      { q: `Do you bridge the UBSE board to JEE gap?`, a: `Yes — UBSE is NCERT-aligned, which makes the content transition gentler than most state boards; the real gaps are problem-solving depth and mock-exam exposure, which your mentor supplies from week one.` },
      { q: `Is Uttarakhand's small aspirant pool an advantage?`, a: `For state-quota counselling, genuinely yes — fewer in-state rivals per seat than the big states. The constraint has always been preparation access in the hills, which is precisely what online 1-on-1 removes.` },
      { q: `Does Dehradun's boarding-school ecosystem change anything?`, a: `It produces disciplined students, and our format complements it: evening 1-on-1 sessions that fit around school timetables, with the exam-specific layer boarding schools rarely provide in-house.` },
    ],
    neetFaqs: [
      { q: `What NEET rank do I need for AIIMS Rishikesh or Doon Medical College?`, a: `AIIMS Rishikesh runs the all-India ladder — historically closing near AIR ~1,500. On the state ladder, GMC Dehradun (Doon) has closed near ~15,000 and GMC Haldwani near ~20,000, with 85% of state seats reserved for Uttarakhand domiciles.` },
      { q: `Can students in the hills prepare for NEET without moving to Dehradun?`, a: `Yes — 1-on-1 online coaching reaches Pithoragarh, Chamoli or Uttarkashi exactly as it reaches Dehradun. Sessions reschedule around winter connectivity, and your plan lives with your mentor, not a centre's timetable.` },
      { q: `How do I bridge UBSE biology to NEET's NCERT standard?`, a: `UBSE's NCERT alignment gives you a head start; the work is line-level recall precision and MCQ speed. Your mentor drills the statement and assertion-reason patterns NTA repeats until they're automatic.` },
      { q: `Is the state-quota race in Uttarakhand easier?`, a: `The domicile pool is small, which softens cutoffs relative to UP next door — but Doon and Haldwani seats still demand serious scores. Well-mentored preparation converts unusually well here.` },
      { q: `What makes AIIMS Rishikesh special as a target?`, a: `A full AIIMS in-state — world-class training without leaving Uttarakhand, and a motivating anchor for the whole preparation. Your mentor calibrates honestly whether your trajectory supports the AIIMS push or the state-ladder anchor.` },
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
    jeeFaqs: [
      { q: `Can students in the hills get top JEE coaching in ${YEAR}?`, a: `Yes — fully online 1-on-1 means students in Mandi, Dharamshala, Solan, Kullu or remote districts get IIT/NIT-mentor quality without relocating to Chandigarh. The mountain commute problem simply disappears.` },
      { q: `What JEE percentile do I need for NIT Hamirpur or IIT Mandi?`, a: `NIT Hamirpur's CSE/ECE typically closes near the 92+ percentile band; IIT Mandi runs through JEE Advanced with CSE/DS near AIR ~6,000 historically. Both sit in your own state — relocation-free premier targets.` },
      { q: `Do you bridge the HPBOSE board to JEE gap?`, a: `Yes — HPBOSE is broadly NCERT-aligned, but Physics numericals and Organic Chemistry depth lag JEE's level, and most HP students never see a full mock series locally. Your mentor supplies both, sequenced from a week-one diagnostic.` },
      { q: `There's no big coaching institute anywhere in HP — does that hurt my chances?`, a: `It used to: no national chain operates a campus in the state, so HP students historically relocated to Chandigarh or settled for school-level prep. Online 1-on-1 removes that disadvantage entirely — the mentor comes to you.` },
      { q: `How do winter connectivity issues affect preparation?`, a: `Sessions reschedule without loss and recordings bridge any gap. Upper-district students build winter contingencies into the plan from the start — your preparation calendar belongs to you, not a centre.` },
    ],
    neetFaqs: [
      { q: `What NEET rank do I need for IGMC Shimla or Tanda?`, a: `IGMC Shimla has historically closed near roughly AIR 15,000 in state quota and Dr. RPGMC Tanda near ~20,000, with AIIMS Bilaspur on the tighter all-India ladder (~AIR 8,000). 85% of HP's government seats are domicile-reserved.` },
      { q: `Is HP's small aspirant pool a real advantage for NEET?`, a: `Structurally, yes — HP's state-quota cutoffs are more attainable than equivalent seats in Punjab or Haryana because the domicile pool is small. The binding constraint is preparation quality, which is exactly what a dedicated mentor fixes.` },
      { q: `How do I bridge HPBOSE biology to NCERT precision?`, a: `Your mentor maps HPBOSE chapters to the NCERT text, rebuilds the line-level detail, and drills the statement patterns NTA repeats — with bilingual explanation where the Hindi-English mix of hill schools left terminology gaps.` },
      { q: `Do I need to relocate to Chandigarh for NEET coaching?`, a: `No — that historical default is exactly what online 1-on-1 ends. Students in Kullu, Chamba or Una get the identical mentor at home, with the relocation budget saved for MBBS.` },
      { q: `What does AIIMS Bilaspur mean for HP aspirants?`, a: `A full AIIMS inside the state — both a stretch target on the all-India ladder and a signal of HP's expanding medical ecosystem, with IGMC and Tanda anchoring the state-quota path. Your mentor calibrates which ladder your mock trajectory supports.` },
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

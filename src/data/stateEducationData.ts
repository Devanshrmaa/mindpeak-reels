/**
 * State-level educational data — unique facts, statistics, colleges, and context
 * that make each city page genuinely different based on its state.
 * 
 * This data layer provides:
 * - Real college names & cutoff ranges per state
 * - State board specifics & exam patterns
 * - Regional competition statistics
 * - State-specific coaching landscape facts
 * - Unique educational challenges per region
 */

export interface StateEducationData {
  state: string;
  /** Top engineering colleges in the state with typical JEE cutoff ranges */
  topEnggColleges: { name: string; cutoff: string; branch?: string }[];
  /** Top medical colleges with NEET cutoff info */
  topMedColleges: { name: string; cutoff: string }[];
  /** State board to JEE/NEET transition challenges */
  boardTransitionChallenges: string;
  /** Unique educational fact about this state */
  educationFact: string;
  /** Approximate number of JEE/NEET aspirants from this state */
  aspirantCount: string;
  /** State-level competition intensity description */
  competitionContext: string;
  /** Notable IIT/NIT/AIIMS in or near the state */
  nearbyPremierInstitutes: string[];
  /** State-specific study challenge (climate, language, infrastructure) */
  regionalChallenge: string;
  /** Career ecosystem in the state */
  careerEcosystem: string;
  /** State exam specifics if applicable */
  stateExamDetails?: { name: string; seats: string; overlapWithNational: string };
}

export const stateEducationData: Record<string, StateEducationData> = {
  'Maharashtra': {
    state: 'Maharashtra',
    topEnggColleges: [
      { name: 'IIT Bombay', cutoff: 'JEE Advanced AIR < 1000', branch: 'CSE/EE' },
      { name: 'VJTI Mumbai', cutoff: 'MHT-CET 99+ percentile', branch: 'Computer Engineering' },
      { name: 'COEP Pune', cutoff: 'MHT-CET 98+ percentile', branch: 'IT/CS' },
      { name: 'ICT Mumbai (UDCT)', cutoff: 'JEE Main 97+ percentile', branch: 'Chemical' },
      { name: 'VNIT Nagpur', cutoff: 'JEE Main 95+ percentile', branch: 'CSE/ECE' },
    ],
    topMedColleges: [
      { name: 'Grant Medical College (JJ Hospital)', cutoff: 'NEET AIR < 5,000' },
      { name: 'Seth GS Medical College (KEM Hospital)', cutoff: 'NEET AIR < 4,000' },
      { name: 'BJ Medical College Pune', cutoff: 'NEET AIR < 8,000' },
      { name: 'Government Medical College Nagpur', cutoff: 'NEET AIR < 15,000' },
    ],
    boardTransitionChallenges: 'Maharashtra State Board students face a significant transition to JEE/NEET because the board syllabus sequences topics differently — for example, Rotational Mechanics is covered later than in CBSE, creating a gap in Class 11 JEE prep. The board\'s emphasis on descriptive answers also means students need to adapt to MCQ-based problem-solving. MHT-CET adds another exam layer, though 85% of its syllabus overlaps with JEE Main.',
    educationFact: 'Maharashtra produces the 2nd highest number of NEET aspirants in India (~3.2 lakh annually). The state has 51 government medical colleges — the highest in any single state — making NEET competition intense but opportunities plentiful.',
    aspirantCount: '~5.5 lakh JEE + NEET aspirants combined',
    competitionContext: 'With 51 government medical colleges and 350+ engineering colleges, Maharashtra offers more seats than most states. However, the sheer volume of aspirants (5.5 lakh+) means competition is fierce. Students from Tier 2-3 Maharashtra cities often lack access to quality coaching available in Mumbai and Pune, creating an equity gap that online coaching bridges.',
    nearbyPremierInstitutes: ['IIT Bombay', 'VNIT Nagpur', 'COEP Pune', 'ICT Mumbai'],
    regionalChallenge: 'Mumbai\'s commute problem is unique in India — students lose 3-4 hours daily on local trains. In Tier 2-3 Maharashtra cities like Kolhapur, Latur, and Amravati, the challenge is the opposite: lack of quality coaching centres means students either relocate to Pune/Mumbai or rely on subpar local options.',
    careerEcosystem: 'Maharashtra\'s diverse economy (IT in Pune, finance in Mumbai, manufacturing in Nashik/Aurangabad) means JEE qualifiers have robust placement ecosystems. IIT Bombay and VJTI graduates command ₹15-50+ LPA packages. NEET qualifiers benefit from Maharashtra\'s extensive government hospital network for residency placements.',
    stateExamDetails: { name: 'MHT-CET', seats: '~1.5 lakh engineering + pharmacy seats', overlapWithNational: '85% syllabus overlap with JEE Main; separate Physics/Chemistry/Maths papers; marks-based (not percentile)' },
  },
  'Karnataka': {
    state: 'Karnataka',
    topEnggColleges: [
      { name: 'IISc Bangalore', cutoff: 'JEE Advanced AIR < 500 (BS program)', branch: 'Research' },
      { name: 'RVCE Bangalore', cutoff: 'KCET < 2,000 rank', branch: 'CSE/ISE' },
      { name: 'BMS College Bangalore', cutoff: 'KCET < 3,000 rank', branch: 'CSE/ECE' },
      { name: 'PES University', cutoff: 'KCET < 5,000 / PESSAT', branch: 'CSE' },
      { name: 'NIE Mysore', cutoff: 'KCET < 8,000 rank', branch: 'CS/IS' },
    ],
    topMedColleges: [
      { name: 'Bangalore Medical College', cutoff: 'NEET AIR < 6,000' },
      { name: 'MS Ramaiah Medical College', cutoff: 'NEET 600+ / Management quota' },
      { name: 'JSS Medical College Mysore', cutoff: 'NEET 550+' },
      { name: 'KMC Manipal', cutoff: 'NEET 580+' },
    ],
    boardTransitionChallenges: 'Karnataka State Board (PUC) follows a different topic sequence than CBSE, particularly in Physics and Chemistry. Students transitioning to JEE/NEET need bridge modules for topics like Thermodynamics and Electrochemistry which are sequenced differently. The PUC\'s emphasis on theory-heavy answers means students must develop MCQ speed and elimination techniques separately.',
    educationFact: 'Karnataka has India\'s highest concentration of engineering colleges per capita. Bangalore alone produces ~15,000 JEE aspirants annually. The state\'s IT ecosystem means parents often have tech backgrounds, leading to higher expectations for data-driven coaching approaches.',
    aspirantCount: '~3.8 lakh JEE + NEET aspirants combined',
    competitionContext: 'Karnataka\'s KCET exam adds a strategic dimension — students must prepare for both national (JEE/NEET) and state-level exams simultaneously. The good news: 80% syllabus overlap means dual preparation is efficient. Bangalore students face competition from the state\'s best, while Tier 2-3 Karnataka cities like Hubli, Belgaum, and Shimoga have limited quality coaching infrastructure.',
    nearbyPremierInstitutes: ['IISc Bangalore', 'NIT Surathkal', 'IIT Dharwad', 'NITK Surathkal'],
    regionalChallenge: 'Bangalore\'s traffic congestion makes physical coaching impractical — students in Electronic City or Whitefield cannot realistically attend coaching in Koramangala daily. In smaller Karnataka cities, the challenge is access to experienced faculty who understand competitive exam depth versus board-level preparation.',
    careerEcosystem: 'Bangalore is India\'s Silicon Valley — engineering graduates from RVCE, BMS, and PES regularly receive ₹12-40+ LPA packages from tech companies. The startup ecosystem also creates entrepreneurship opportunities. Medical graduates benefit from Karnataka\'s 59 medical colleges and Bangalore\'s world-class hospital network.',
    stateExamDetails: { name: 'KCET', seats: '~65,000 engineering + medical seats', overlapWithNational: '80% overlap with JEE/NEET; only Class 12 syllabus tested; separate Biology paper for medical' },
  },
  'Tamil Nadu': {
    state: 'Tamil Nadu',
    topEnggColleges: [
      { name: 'IIT Madras', cutoff: 'JEE Advanced AIR < 800', branch: 'CSE/EE' },
      { name: 'NIT Trichy', cutoff: 'JEE Main 98+ percentile', branch: 'CSE/ECE' },
      { name: 'Anna University CEG', cutoff: 'TNEA < 500 rank', branch: 'CSE' },
      { name: 'PSG College Coimbatore', cutoff: 'TNEA < 3,000 rank', branch: 'CS/IT' },
      { name: 'SSN College Chennai', cutoff: 'TNEA < 1,500 rank', branch: 'CSE/ECE' },
    ],
    topMedColleges: [
      { name: 'Madras Medical College', cutoff: 'NEET AIR < 3,000' },
      { name: 'Stanley Medical College', cutoff: 'NEET AIR < 7,000' },
      { name: 'Government Medical College Coimbatore', cutoff: 'NEET AIR < 20,000' },
      { name: 'CMC Vellore', cutoff: 'NEET 650+ / separate entrance' },
    ],
    boardTransitionChallenges: 'Tamil Nadu State Board has been recently revised (2019 onwards) to align closer with NCERT, but gaps remain in advanced Organic Chemistry and Modern Physics. The board\'s medium of instruction in Tamil creates an additional challenge for students attempting English-medium competitive exams. However, TN students excel at Mathematics due to the board\'s strong numerical emphasis.',
    educationFact: 'Tamil Nadu has the highest number of engineering colleges in India (over 550). The state produces ~4 lakh NEET aspirants annually — the highest in the country. TN\'s 10+2 system produces students with strong calculation skills but often weaker English scientific vocabulary.',
    aspirantCount: '~6 lakh JEE + NEET aspirants combined (highest NEET aspirants nationally)',
    competitionContext: 'Tamil Nadu leads India in NEET registrations. The state\'s 36 government medical colleges create strong NEET demand. Competition is exceptionally fierce — for every MBBS seat, there are 15+ applicants. Engineering competition is relatively less intense due to the massive number of colleges, but top institutions (IIT Madras, NIT Trichy, Anna University) remain extremely selective.',
    nearbyPremierInstitutes: ['IIT Madras', 'NIT Trichy', 'IIT Palakkad (nearby)', 'Anna University'],
    regionalChallenge: 'Tamil-medium education creates a language barrier for competitive exams conducted in English. Students from Madurai, Salem, and Tirunelveli often struggle with English scientific terminology despite strong conceptual understanding. Quality coaching is concentrated in Chennai and Coimbatore, leaving Tier 3 cities underserved.',
    careerEcosystem: 'Chennai\'s IT corridor (OMR/Sholinganallur) and Coimbatore\'s manufacturing hub provide strong engineering placement ecosystems. IIT Madras graduates command ₹20-60+ LPA. TN\'s 36 government medical colleges offer excellent residency training, and the state\'s healthcare infrastructure is among India\'s best.',
  },
  'Kerala': {
    state: 'Kerala',
    topEnggColleges: [
      { name: 'NIT Calicut', cutoff: 'JEE Main 97+ percentile', branch: 'CSE/ECE' },
      { name: 'CET Trivandrum', cutoff: 'KEAM < 500 rank', branch: 'CSE/IT' },
      { name: 'GEC Thrissur', cutoff: 'KEAM < 2,000 rank', branch: 'CS/EE' },
      { name: 'Model Engineering College', cutoff: 'KEAM < 1,500 rank', branch: 'CSE' },
    ],
    topMedColleges: [
      { name: 'Government Medical College Thiruvananthapuram', cutoff: 'NEET AIR < 10,000' },
      { name: 'Government Medical College Kozhikode', cutoff: 'NEET AIR < 12,000' },
      { name: 'Government Medical College Thrissur', cutoff: 'NEET AIR < 20,000' },
      { name: 'Amrita Medical College', cutoff: 'NEET 600+' },
    ],
    boardTransitionChallenges: 'Kerala State Board provides a strong science foundation — the board\'s Physics and Chemistry curricula are considered among the best state boards in India. However, the transition to JEE Advanced-level problem complexity requires significant uplift. Kerala students typically have excellent theoretical understanding but need intensive numerical problem-solving practice for competitive exams.',
    educationFact: 'Kerala has India\'s highest literacy rate (96.2%) and produces exceptionally well-prepared board students. However, the state ranks only 12th in JEE Advanced selections, suggesting a gap between board excellence and competitive exam readiness. KEAM (state engineering entrance) adds a dual-preparation requirement.',
    aspirantCount: '~2.5 lakh JEE + NEET aspirants combined',
    competitionContext: 'Kerala\'s high literacy rate means almost every science student attempts at least one competitive exam. The state has 9 government medical colleges, making NEET competition intense. KEAM for engineering requires separate preparation, adding to student workload. NRK (Non-Resident Keralite) students face additional challenges with timezone-adjusted coaching schedules.',
    nearbyPremierInstitutes: ['NIT Calicut', 'IIT Palakkad', 'IISER Thiruvananthapuram'],
    regionalChallenge: 'Kerala\'s educational culture emphasises board exam marks heavily, sometimes at the expense of competitive exam preparation depth. The Malayalam medium in many schools creates a language adjustment challenge. Coaching centres are concentrated in Kochi and Thiruvananthapuram, leaving northern Kerala (Kozhikode, Kannur) underserved.',
    careerEcosystem: 'Kerala\'s economy is service-oriented with strong healthcare and IT sectors. NIT Calicut graduates receive ₹10-25 LPA packages. The state\'s robust healthcare system (including Amrita and AIMS) provides excellent medical career opportunities. Many Kerala engineering graduates work in Gulf countries and the Bangalore IT ecosystem.',
    stateExamDetails: { name: 'KEAM', seats: '~40,000 engineering seats', overlapWithNational: '75% overlap with JEE Main; tests Class 11+12 combined; Physics + Chemistry + Maths in single sitting' },
  },
  'Telangana': {
    state: 'Telangana',
    topEnggColleges: [
      { name: 'IIT Hyderabad', cutoff: 'JEE Advanced AIR < 3,000', branch: 'CSE/AI' },
      { name: 'IIIT Hyderabad', cutoff: 'JEE Main 99+ percentile / UGEE', branch: 'CSE/CND' },
      { name: 'NIT Warangal', cutoff: 'JEE Main 96+ percentile', branch: 'CSE/ECE' },
      { name: 'BITS Pilani Hyderabad', cutoff: 'BITSAT 300+', branch: 'CSE/ECE' },
      { name: 'Osmania University', cutoff: 'TS EAMCET < 5,000 rank', branch: 'CSE/IT' },
    ],
    topMedColleges: [
      { name: 'Osmania Medical College', cutoff: 'NEET AIR < 8,000' },
      { name: 'Gandhi Medical College', cutoff: 'NEET AIR < 12,000' },
      { name: 'Kakatiya Medical College Warangal', cutoff: 'NEET AIR < 25,000' },
      { name: 'NIMS Hyderabad', cutoff: 'NEET 580+' },
    ],
    boardTransitionChallenges: 'Telangana State Board (BIE) closely mirrors the CBSE pattern, making the JEE/NEET transition smoother than in many other states. However, the board\'s relatively easier marking means students may overestimate their competitive readiness. TS EAMCET uses a combined ranking of board marks + entrance score, creating a unique dual-focus requirement.',
    educationFact: 'Hyderabad has emerged as India\'s 2nd largest coaching hub after Kota, with major institutes like Sri Chaitanya and Narayana headquartered here. However, the batch-model (100-200 students) dominates, creating a paradox: access to coaching is easy, but personalised attention is rare. Telangana produces ~2.5 lakh NEET aspirants annually.',
    aspirantCount: '~4 lakh JEE + NEET aspirants combined',
    competitionContext: 'Hyderabad\'s coaching ecosystem (Sri Chaitanya, Narayana) produces impressive aggregate numbers but operates on a factory model where only the top 5% students receive adequate attention. Students from Warangal, Karimnagar, and Nizamabad face the choice of relocating to Hyderabad or settling for local centres with less experienced faculty.',
    nearbyPremierInstitutes: ['IIT Hyderabad', 'IIIT Hyderabad', 'NIT Warangal', 'BITS Hyderabad'],
    regionalChallenge: 'Telangana\'s coaching culture creates a pressure-cooker environment — students attend 8-10 hours of classes daily in residential programs, often leading to burnout. Integrated school + coaching programs (Sri Chaitanya, Narayana) leave no time for self-study or doubt resolution. The Telugu-medium background of many students creates additional terminology challenges.',
    careerEcosystem: 'Hyderabad\'s IT corridor (HITEC City, Gachibowli) is India\'s 2nd largest tech hub. IIIT Hyderabad graduates command ₹25-50+ LPA. The pharmaceutical sector (Dr Reddy\'s, Hetero, Aurobindo) creates unique opportunities for Chemistry graduates. Osmania Medical College produces some of India\'s finest doctors.',
    stateExamDetails: { name: 'TS EAMCET', seats: '~70,000 engineering + medical seats', overlapWithNational: '80% overlap with JEE/NEET; combined board marks (25%) + entrance (75%); bilingual paper (English + Telugu)' },
  },
  'Andhra Pradesh': {
    state: 'Andhra Pradesh',
    topEnggColleges: [
      { name: 'IIT Tirupati', cutoff: 'JEE Advanced AIR < 5,000', branch: 'CSE/EE' },
      { name: 'NIT Andhra Pradesh', cutoff: 'JEE Main 94+ percentile', branch: 'CSE/ECE' },
      { name: 'JNTU Kakinada', cutoff: 'AP EAMCET < 3,000 rank', branch: 'CSE/IT' },
      { name: 'Andhra University Visakhapatnam', cutoff: 'AP EAMCET < 5,000 rank', branch: 'CSE/ECE' },
      { name: 'SRM AP', cutoff: 'SRMJEEE / JEE Main 90+', branch: 'CSE' },
    ],
    topMedColleges: [
      { name: 'Andhra Medical College Visakhapatnam', cutoff: 'NEET AIR < 10,000' },
      { name: 'Guntur Medical College', cutoff: 'NEET AIR < 15,000' },
      { name: 'Rangaraya Medical College Kakinada', cutoff: 'NEET AIR < 20,000' },
      { name: 'Kurnool Medical College', cutoff: 'NEET AIR < 25,000' },
    ],
    boardTransitionChallenges: 'AP State Board recently underwent curriculum reform aligned with NCERT, but implementation gaps persist in rural areas. The integrated school + coaching model (dominant in AP via Narayana/Chaitanya) means students who opt out of this model need alternative high-quality coaching. Telugu-medium students face English terminology challenges in JEE/NEET.',
    educationFact: 'Andhra Pradesh has India\'s highest density of integrated coaching schools — over 60% of JEE/NEET aspirants study in residential coaching-cum-school programs. This creates a unique market where non-residential students feel left behind. AP produces ~3 lakh NEET aspirants annually, with Guntur district historically producing the most medical professionals per capita in India.',
    aspirantCount: '~4.5 lakh JEE + NEET aspirants combined',
    competitionContext: 'AP\'s integrated coaching culture creates early specialization — students enter coaching in Class 8-9. Those who miss this window often struggle to catch up. The state\'s new capital Amaravati is still developing its educational infrastructure. IIT Tirupati\'s establishment has boosted local JEE aspirations. AP EAMCET provides a safety net with ~70,000 seats.',
    nearbyPremierInstitutes: ['IIT Tirupati', 'NIT Andhra Pradesh', 'IIIT Sri City'],
    regionalChallenge: 'AP\'s coaching ecosystem is dominated by residential integrated programs. Students who study from home lack peer competition and structured timetables. The state\'s geographic spread (Srikakulam to Anantapur) means coaching quality varies dramatically by city. Internet connectivity in rural AP areas can be inconsistent.',
    careerEcosystem: 'Visakhapatnam\'s industrial corridor (steel, shipbuilding, IT) and the emerging Amaravati tech hub create engineering opportunities. AP\'s medical college network (11 government colleges) provides good residency placements. Many AP engineering graduates work in Hyderabad and Bangalore IT sectors.',
    stateExamDetails: { name: 'AP EAMCET', seats: '~70,000 engineering + medical seats', overlapWithNational: '80% overlap with JEE/NEET; 75% entrance + 25% board marks; available in English and Telugu' },
  },
  'Delhi': {
    state: 'Delhi',
    topEnggColleges: [
      { name: 'IIT Delhi', cutoff: 'JEE Advanced AIR < 500', branch: 'CSE/EE' },
      { name: 'DTU (Delhi Technological University)', cutoff: 'JEE Main 98+ percentile', branch: 'CSE/IT' },
      { name: 'NSUT', cutoff: 'JEE Main 97+ percentile', branch: 'CSE/CSAI' },
      { name: 'IIIT Delhi', cutoff: 'JEE Main 98+ percentile / IIITD entrance', branch: 'CSE/ECE' },
      { name: 'Jamia Millia Islamia', cutoff: 'JEE Main 94+ percentile', branch: 'Civil/Mech/ECE' },
    ],
    topMedColleges: [
      { name: 'AIIMS Delhi', cutoff: 'NEET AIR < 100' },
      { name: 'Maulana Azad Medical College', cutoff: 'NEET AIR < 200' },
      { name: 'Lady Hardinge Medical College', cutoff: 'NEET AIR < 500' },
      { name: 'UCMS (University College of Medical Sciences)', cutoff: 'NEET AIR < 1,000' },
    ],
    boardTransitionChallenges: 'Delhi\'s CBSE-dominant ecosystem provides the most natural transition to JEE/NEET since competitive exams are CBSE-aligned. However, this advantage is offset by intense competition — every 3rd student in Delhi attempts JEE or NEET. The city\'s coaching hub areas (Rajouri Garden, Laxmi Nagar, Kalu Sarai, Mukherjee Nagar) are saturated with 200+ coaching centres, creating analysis paralysis for families choosing the right coaching.',
    educationFact: 'Delhi NCR produces more JEE Advanced qualifiers per capita than any other region. AIIMS Delhi remains India\'s most competitive medical seat — only 50 MBBS seats with 10+ lakh NEET applicants. DTU and NSUT have emerged as IIT-alternative choices for Delhi students with CSE packages matching older IITs.',
    aspirantCount: '~4 lakh JEE + NEET aspirants from Delhi NCR',
    competitionContext: 'Delhi\'s proximity to Kota (5 hours) means many families consider sending children there. However, increasing awareness of online coaching and mental health concerns have shifted preferences toward home-based preparation. The NCR region (including Noida, Gurgaon, Ghaziabad, Faridabad) collectively forms India\'s largest competitive exam preparation market.',
    nearbyPremierInstitutes: ['IIT Delhi', 'AIIMS Delhi', 'DTU', 'NSUT', 'IIIT Delhi', 'JNU'],
    regionalChallenge: 'Delhi students face the paradox of too many options — with 200+ coaching centres, students frequently switch between institutes, losing continuity. The city\'s high cost of living makes premium coaching (₹2-4 lakh/year) a significant financial burden. South Delhi vs Outer Delhi quality disparities exist in local coaching options.',
    careerEcosystem: 'Delhi NCR is India\'s largest job market. IIT Delhi and DTU graduates receive ₹20-60+ LPA packages. The startup ecosystem (Gurgaon/Noida) creates entrepreneurship opportunities. AIIMS Delhi offers the country\'s most prestigious medical residency. Delhi\'s diverse economy spans IT, consulting, media, finance, and government services.',
  },
  'Rajasthan': {
    state: 'Rajasthan',
    topEnggColleges: [
      { name: 'IIT Jodhpur', cutoff: 'JEE Advanced AIR < 4,000', branch: 'CSE/AI' },
      { name: 'MNIT Jaipur', cutoff: 'JEE Main 96+ percentile', branch: 'CSE/ECE' },
      { name: 'BITS Pilani', cutoff: 'BITSAT 350+', branch: 'CSE/EEE' },
      { name: 'MBM University Jodhpur', cutoff: 'JEE Main 85+ percentile', branch: 'CE/ME' },
      { name: 'LNMIIT Jaipur', cutoff: 'JEE Main 90+ percentile', branch: 'CSE/ECE' },
    ],
    topMedColleges: [
      { name: 'SMS Medical College Jaipur', cutoff: 'NEET AIR < 5,000' },
      { name: 'SP Medical College Bikaner', cutoff: 'NEET AIR < 20,000' },
      { name: 'Dr SN Medical College Jodhpur', cutoff: 'NEET AIR < 15,000' },
      { name: 'RNT Medical College Udaipur', cutoff: 'NEET AIR < 25,000' },
    ],
    boardTransitionChallenges: 'Rajasthan Board (RBSE) students face a moderate transition to JEE/NEET. The board\'s syllabus covers most NCERT topics but at a shallower depth, particularly in Organic Chemistry and Calculus. The biggest challenge: most RBSE students study in Hindi medium, creating a significant language barrier for English-medium competitive exams. Kota\'s proximity makes it a default choice, but many students fail to adapt to the residential environment.',
    educationFact: 'Rajasthan is home to Kota — India\'s undisputed coaching capital with 2+ lakh students at any given time. Ironically, students from Rajasthan itself have lower JEE Advanced selection rates compared to Delhi and Tamil Nadu, partly because the coaching ecosystem prioritises volume over personalisation. BITS Pilani, located in Rajasthan, is among India\'s top 5 private engineering institutions.',
    aspirantCount: '~3.5 lakh JEE + NEET aspirants',
    competitionContext: 'Rajasthan\'s coaching landscape is dominated by Kota\'s mass-production model. Students from Jaipur, Jodhpur, and other cities either relocate to Kota or choose local branches of Kota-based institutes. The alternative: personalised online coaching that delivers Kota-quality teaching without the relocation stress, hostel costs (₹8-12 lakh/year total), and mental health risks.',
    nearbyPremierInstitutes: ['IIT Jodhpur', 'MNIT Jaipur', 'BITS Pilani', 'AIIMS Jodhpur'],
    regionalChallenge: 'Rajasthan\'s coaching culture creates extreme pressure on teenagers — the state has faced student mental health crises in Kota that have made national headlines. Many Rajasthan families are now seeking alternatives that provide quality coaching without the toxic competitive environment. Hindi-medium students face additional challenges with English scientific terminology.',
    careerEcosystem: 'Jaipur\'s growing IT sector (Mahindra World City, Sitapura) creates engineering opportunities. MNIT Jaipur graduates receive ₹10-30 LPA packages. The state\'s tourism economy provides unique career paths for MBA graduates. SMS Medical College Jaipur is among Rajasthan\'s premier medical institutions for residency.',
  },
  'Uttar Pradesh': {
    state: 'Uttar Pradesh',
    topEnggColleges: [
      { name: 'IIT Kanpur', cutoff: 'JEE Advanced AIR < 600', branch: 'CSE/EE' },
      { name: 'IIT BHU Varanasi', cutoff: 'JEE Advanced AIR < 2,500', branch: 'CSE/ECE' },
      { name: 'MNNIT Allahabad', cutoff: 'JEE Main 96+ percentile', branch: 'CSE/IT' },
      { name: 'HBTU Kanpur', cutoff: 'JEE Main 90+ percentile', branch: 'CSE/ME' },
      { name: 'Amity University Noida', cutoff: 'JEE Main 80+ / university entrance', branch: 'CSE' },
    ],
    topMedColleges: [
      { name: 'KGMU Lucknow', cutoff: 'NEET AIR < 3,000' },
      { name: 'BHU IMS Varanasi', cutoff: 'NEET AIR < 5,000' },
      { name: 'GSVM Medical College Kanpur', cutoff: 'NEET AIR < 15,000' },
      { name: 'SN Medical College Agra', cutoff: 'NEET AIR < 20,000' },
    ],
    boardTransitionChallenges: 'UP Board students face the most significant transition to JEE/NEET among major states. The board\'s syllabus has traditionally been more theoretical and Hindi-medium dominant, creating dual challenges: content depth gaps and language barriers. Recent UP Board reforms (NCERT alignment since 2018) have improved this, but implementation varies across districts.',
    educationFact: 'Uttar Pradesh produces the highest absolute number of JEE/NEET aspirants in India (~8 lakh combined annually). However, the selection rate is below the national average, indicating a preparation quality gap. UP has 23 government medical colleges — significant but insufficient for the population. IIT Kanpur consistently produces India\'s highest-paid engineering graduates.',
    aspirantCount: '~8 lakh JEE + NEET aspirants (highest in India)',
    competitionContext: 'UP\'s massive student population creates extreme competition. Students from Lucknow, Kanpur, and Varanasi have access to reasonably good coaching, but smaller cities (Gorakhpur, Bareilly, Meerut) have significant quality gaps. The Noida-Greater Noida corridor benefits from Delhi NCR\'s coaching ecosystem, creating an uneven landscape.',
    nearbyPremierInstitutes: ['IIT Kanpur', 'IIT BHU', 'MNNIT Allahabad', 'AIIMS Gorakhpur'],
    regionalChallenge: 'UP\'s vast geographic spread means coaching quality varies dramatically. Western UP (Noida, Ghaziabad) has NCR-level access; Eastern UP (Varanasi, Gorakhpur) is relatively underserved. Hindi-medium predominance creates English terminology challenges. Economic constraints in Tier 3 cities limit coaching affordability.',
    careerEcosystem: 'Noida-Greater Noida IT corridor provides engineering placements. IIT Kanpur graduates command ₹25-60+ LPA. Lucknow\'s developing IT sector and government job ecosystem provide diverse opportunities. KGMU Lucknow and BHU IMS are among India\'s premier medical teaching institutions.',
  },
  'West Bengal': {
    state: 'West Bengal',
    topEnggColleges: [
      { name: 'IIT Kharagpur', cutoff: 'JEE Advanced AIR < 700', branch: 'CSE/EE' },
      { name: 'Jadavpur University', cutoff: 'WBJEE < 500 rank', branch: 'CSE/ECE/EE' },
      { name: 'NIT Durgapur', cutoff: 'JEE Main 94+ percentile', branch: 'CSE/ECE' },
      { name: 'IIEST Shibpur', cutoff: 'JEE Main 95+ percentile', branch: 'CSE/IT' },
      { name: 'Heritage Institute Kolkata', cutoff: 'WBJEE < 5,000 rank', branch: 'CSE' },
    ],
    topMedColleges: [
      { name: 'Medical College Kolkata', cutoff: 'NEET AIR < 4,000' },
      { name: 'RG Kar Medical College', cutoff: 'NEET AIR < 10,000' },
      { name: 'NRS Medical College', cutoff: 'NEET AIR < 15,000' },
      { name: 'Burdwan Medical College', cutoff: 'NEET AIR < 30,000' },
    ],
    boardTransitionChallenges: 'West Bengal Board students benefit from a reasonably strong science curriculum, particularly in Mathematics. However, the board\'s emphasis on Bengali-medium instruction creates language challenges for JEE/NEET. WBJEE provides an additional exam layer — while 70% overlaps with JEE Main, the remaining 30% requires separate preparation in topics like Statistics and Linear Programming.',
    educationFact: 'West Bengal has produced more Nobel laureates in science than any other Indian state. Jadavpur University is consistently ranked among India\'s top 5 engineering colleges and is tuition-free. IIT Kharagpur, India\'s first IIT, creates strong competitive exam aspirations across Bengal. Kolkata\'s Medical College is Asia\'s oldest medical institution.',
    aspirantCount: '~3 lakh JEE + NEET aspirants',
    competitionContext: 'Kolkata has a strong coaching culture concentrated in Salt Lake, Park Street, and Howrah areas. WBJEE\'s 70% overlap with JEE Main allows efficient dual preparation. Bengal students traditionally excel in Mathematics and Physics but may need additional focus on Chemistry. Districts beyond Kolkata (Siliguri, Durgapur, Asansol) have limited quality coaching.',
    nearbyPremierInstitutes: ['IIT Kharagpur', 'NIT Durgapur', 'IIEST Shibpur', 'Jadavpur University'],
    regionalChallenge: 'Bengali-medium education dominance creates a language barrier for competitive exams. Kolkata\'s aging infrastructure means some coaching centres operate in suboptimal environments. North Bengal (Siliguri, Jalpaiguri) is significantly underserved for competitive coaching. Economic constraints limit coaching access for many families.',
    careerEcosystem: 'Kolkata\'s IT sector (Salt Lake Sector V, Rajarhat) provides engineering placements. IIT Kharagpur graduates receive ₹20-50+ LPA packages. Jadavpur University alumni are highly recruited by tech companies. Medical College Kolkata offers premier residency training. Bengal\'s strong academic tradition produces researchers who excel in higher studies.',
    stateExamDetails: { name: 'WBJEE', seats: '~35,000 engineering seats', overlapWithNational: '70% overlap with JEE Main; includes Statistics, Mathematical Reasoning; only MCQ format; single sitting' },
  },
  'Gujarat': {
    state: 'Gujarat',
    topEnggColleges: [
      { name: 'IIT Gandhinagar', cutoff: 'JEE Advanced AIR < 3,000', branch: 'CSE/EE/ME' },
      { name: 'NIT Surat (SVNIT)', cutoff: 'JEE Main 95+ percentile', branch: 'CSE/ECE' },
      { name: 'DAIICT Gandhinagar', cutoff: 'JEE Main 92+ percentile', branch: 'ICT/CS' },
      { name: 'LD College Ahmedabad', cutoff: 'GUJCET < 1,000 rank', branch: 'CE/ME' },
      { name: 'Nirma University', cutoff: 'JEE Main 85+ / GUJCET', branch: 'CSE/IT' },
    ],
    topMedColleges: [
      { name: 'BJ Medical College Ahmedabad', cutoff: 'NEET AIR < 5,000' },
      { name: 'Government Medical College Surat', cutoff: 'NEET AIR < 15,000' },
      { name: 'MP Shah Medical College Jamnagar', cutoff: 'NEET AIR < 20,000' },
      { name: 'Government Medical College Vadodara', cutoff: 'NEET AIR < 18,000' },
    ],
    boardTransitionChallenges: 'Gujarat Board students face a moderate transition. The board covers most NCERT topics but with slightly less depth in Organic Chemistry and Calculus. Gujarati-medium students need additional support for English technical vocabulary. GUJCET provides a state-level engineering entrance with 80% overlap with JEE Main, allowing efficient combined preparation.',
    educationFact: 'Gujarat\'s industrial economy (Reliance, Adani, TCS in Ahmedabad) creates strong demand for engineering graduates. The state has 14 government medical colleges. IIT Gandhinagar, though newer, has rapidly risen in rankings. DAIICT is India\'s first ICT-focused university. Gujarat produces ~2.5 lakh competitive exam aspirants annually.',
    aspirantCount: '~2.5 lakh JEE + NEET aspirants',
    competitionContext: 'Ahmedabad has a growing coaching ecosystem with local and national chains. Surat and Vadodara have emerging coaching markets. Gujarat students benefit from a strong work ethic culture but may underinvest in coaching compared to South Indian states. GUJCET\'s separate exam adds a safety net for engineering aspirants.',
    nearbyPremierInstitutes: ['IIT Gandhinagar', 'SVNIT Surat', 'DAIICT', 'PDPU Gandhinagar'],
    regionalChallenge: 'Gujarat\'s business-oriented culture sometimes deprioritizes higher education in favour of commerce. Students from Saurashtra and North Gujarat regions have limited coaching access. The Gujarati-medium challenge is real — many students think in Gujarati but must solve problems in English.',
    careerEcosystem: 'Ahmedabad\'s diversified economy (pharma, textiles, IT, automobile) provides broad engineering opportunities. SVNIT Surat and DAIICT graduates receive ₹8-25 LPA packages. Gujarat\'s pharmaceutical cluster (world\'s largest) creates unique Chemistry career paths. The entrepreneurial ecosystem is among India\'s strongest.',
    stateExamDetails: { name: 'GUJCET', seats: '~50,000 engineering + medical seats', overlapWithNational: '80% overlap with JEE Main; MCQ format; Physics + Chemistry + Maths/Biology; 3-hour single sitting' },
  },
  'Madhya Pradesh': {
    state: 'Madhya Pradesh',
    topEnggColleges: [
      { name: 'IIT Indore', cutoff: 'JEE Advanced AIR < 3,500', branch: 'CSE/EE' },
      { name: 'MANIT Bhopal', cutoff: 'JEE Main 94+ percentile', branch: 'CSE/ECE' },
      { name: 'IIIT Jabalpur', cutoff: 'JEE Main 90+ percentile', branch: 'CSE/IT' },
      { name: 'RGPV Bhopal', cutoff: 'JEE Main 80+ / MP PPT', branch: 'CSE' },
    ],
    topMedColleges: [
      { name: 'Gandhi Medical College Bhopal', cutoff: 'NEET AIR < 8,000' },
      { name: 'Government Medical College Indore', cutoff: 'NEET AIR < 12,000' },
      { name: 'Government Medical College Jabalpur', cutoff: 'NEET AIR < 20,000' },
      { name: 'Gajra Raja Medical College Gwalior', cutoff: 'NEET AIR < 18,000' },
    ],
    boardTransitionChallenges: 'MP Board has been aligned with NCERT since 2018, reducing the transition gap. However, implementation quality varies significantly between Bhopal/Indore and smaller cities. Hindi-medium dominance creates English terminology challenges. The board\'s practical exam component doesn\'t directly help competitive exam preparation.',
    educationFact: 'Madhya Pradesh has 13 government medical colleges and 6 AIIMS-like institutions being developed. IIT Indore has become a top-15 IIT. Bhopal and Indore are emerging as coaching hubs with branches of major national chains. MP produces ~3 lakh competitive exam aspirants, with NEET aspirants growing 15% annually.',
    aspirantCount: '~3 lakh JEE + NEET aspirants',
    competitionContext: 'MP\'s coaching ecosystem is concentrated in Bhopal, Indore, and Gwalior. Students from smaller cities (Jabalpur, Ujjain, Sagar, Rewa) often relocate for quality coaching. The state\'s relatively lower cutoffs for state medical seats make NEET preparation particularly rewarding for MP students.',
    nearbyPremierInstitutes: ['IIT Indore', 'MANIT Bhopal', 'IIIT Jabalpur', 'AIIMS Bhopal'],
    regionalChallenge: 'MP\'s vast rural areas have minimal coaching infrastructure. The state\'s economic constraints mean many families cannot afford premium coaching. Internet connectivity in rural MP limits online learning effectiveness. The concentration of quality coaching in Bhopal-Indore creates a significant urban-rural divide.',
    careerEcosystem: 'Bhopal\'s IT sector is developing with TCS, Infosys establishing centres. Indore\'s growing commercial ecosystem provides diverse career paths. MANIT Bhopal graduates receive ₹8-20 LPA packages. Government job preparation is a significant parallel track for many MP students.',
  },
  'Bihar': {
    state: 'Bihar',
    topEnggColleges: [
      { name: 'IIT Patna', cutoff: 'JEE Advanced AIR < 4,000', branch: 'CSE/EE' },
      { name: 'NIT Patna', cutoff: 'JEE Main 93+ percentile', branch: 'CSE/ECE/EE' },
      { name: 'BIT Mesra (nearby Jharkhand)', cutoff: 'JEE Main 92+ percentile', branch: 'CSE/IT' },
    ],
    topMedColleges: [
      { name: 'PMCH Patna', cutoff: 'NEET AIR < 6,000' },
      { name: 'AIIMS Patna', cutoff: 'NEET AIR < 3,000' },
      { name: 'NMCH Patna', cutoff: 'NEET AIR < 15,000' },
      { name: 'DMC Darbhanga', cutoff: 'NEET AIR < 30,000' },
    ],
    boardTransitionChallenges: 'Bihar Board (BSEB) students face significant challenges in transitioning to JEE/NEET. The board\'s syllabus depth is below CBSE standards in several areas, particularly Organic Chemistry and Calculus. Hindi-medium predominance creates English vocabulary gaps. However, Bihar students are known for exceptional determination and hard work once given the right guidance.',
    educationFact: 'Bihar has the highest student-to-coaching-centre ratio in India — meaning less coaching access per student than any other major state. Despite this, Bihar students consistently perform well when given quality coaching, with many cracking top 1000 ranks from home-based preparation. The state\'s Super 30 program proved that Bihar students can compete with anyone given the right resources.',
    aspirantCount: '~4 lakh JEE + NEET aspirants',
    competitionContext: 'Bihar students face a unique challenge: high aspirations but limited local coaching quality. Most serious aspirants either relocate to Kota, Delhi, or Patna for coaching. The emergence of online coaching has been a game-changer for Bihar — students from Muzaffarpur, Gaya, Bhagalpur, and Darbhanga can now access tier-1 coaching from home.',
    nearbyPremierInstitutes: ['IIT Patna', 'NIT Patna', 'AIIMS Patna', 'BIT Mesra'],
    regionalChallenge: 'Bihar\'s coaching infrastructure is concentrated almost entirely in Patna. Students from 90% of Bihar\'s districts must either relocate or find online alternatives. Economic constraints are significant — many families cannot afford Kota-level coaching fees. Internet connectivity has improved but remains inconsistent in rural areas.',
    careerEcosystem: 'Bihar students traditionally excel in civil services and government exams. Engineering graduates from IIT Patna receive ₹15-40 LPA packages. AIIMS Patna and PMCH provide excellent medical training. Bihar\'s growing IT sector in Patna creates emerging opportunities, though most graduates work in Delhi NCR, Bangalore, or Hyderabad.',
  },
  'Punjab': {
    state: 'Punjab',
    topEnggColleges: [
      { name: 'IIT Ropar', cutoff: 'JEE Advanced AIR < 4,500', branch: 'CSE/EE/ME' },
      { name: 'NIT Jalandhar', cutoff: 'JEE Main 93+ percentile', branch: 'CSE/IT/ECE' },
      { name: 'Thapar University Patiala', cutoff: 'JEE Main 88+ percentile', branch: 'CSE/ECE' },
      { name: 'PEC Chandigarh', cutoff: 'JEE Main 94+ percentile', branch: 'CSE/ECE' },
    ],
    topMedColleges: [
      { name: 'Government Medical College Patiala', cutoff: 'NEET AIR < 10,000' },
      { name: 'Government Medical College Amritsar', cutoff: 'NEET AIR < 15,000' },
      { name: 'GMC Faridkot', cutoff: 'NEET AIR < 25,000' },
      { name: 'PGIMER Chandigarh (nearby)', cutoff: 'NEET AIR < 200 / separate entrance' },
    ],
    boardTransitionChallenges: 'Punjab Board (PSEB) students face a moderate transition to JEE/NEET. The board has recently aligned with NCERT, but depth gaps remain in advanced topics. Many Punjabi-medium students need English terminology support. The proximity to Chandigarh\'s coaching centres provides reasonable access for students in Mohali, Ludhiana, and Jalandhar.',
    educationFact: 'Punjab has a strong tradition of medical professionals — the state produces a disproportionately high number of NEET qualifiers relative to its population. PGIMER Chandigarh, though technically in Chandigarh UT, is the premier medical institute serving Punjab students. Thapar University and PEC Chandigarh are highly regarded engineering alternatives to IITs/NITs.',
    aspirantCount: '~1.5 lakh JEE + NEET aspirants',
    competitionContext: 'Punjab\'s coaching market is concentrated in Chandigarh, Ludhiana, and Jalandhar. The state\'s relatively smaller aspirant pool means less local competition but also less peer motivation. NRI Punjabi families often seek quality coaching for children returning for JEE/NEET preparation.',
    nearbyPremierInstitutes: ['IIT Ropar', 'NIT Jalandhar', 'PEC Chandigarh', 'PGIMER Chandigarh'],
    regionalChallenge: 'Punjab\'s agrarian economy means many families have limited awareness of competitive exam preparation strategies. The state\'s high migration to Canada/UK creates a dual focus — some families prioritise IELTS over JEE/NEET. Coaching quality in smaller Punjab cities (Bathinda, Pathankot, Hoshiarpur) is significantly below Chandigarh/Ludhiana standards.',
    careerEcosystem: 'Chandigarh IT Park and Mohali IT hub provide engineering placement opportunities. Thapar University graduates receive ₹8-25 LPA packages. Punjab\'s medical ecosystem benefits from PGIMER\'s reputation. Many Punjab engineering graduates work in Delhi NCR\'s tech sector.',
  },
  'Odisha': {
    state: 'Odisha',
    topEnggColleges: [
      { name: 'NIT Rourkela', cutoff: 'JEE Main 95+ percentile', branch: 'CSE/ECE/ME' },
      { name: 'IIIT Bhubaneswar', cutoff: 'JEE Main 90+ percentile', branch: 'CSE/IT' },
      { name: 'CET Bhubaneswar', cutoff: 'JEE Main 85+ / OJEE', branch: 'CSE' },
      { name: 'VSSUT Burla', cutoff: 'OJEE < 2,000 rank', branch: 'CSE/IT' },
    ],
    topMedColleges: [
      { name: 'SCB Medical College Cuttack', cutoff: 'NEET AIR < 8,000' },
      { name: 'MKCG Medical College Berhampur', cutoff: 'NEET AIR < 20,000' },
      { name: 'VIMSAR Burla', cutoff: 'NEET AIR < 25,000' },
      { name: 'AIIMS Bhubaneswar', cutoff: 'NEET AIR < 2,000' },
    ],
    boardTransitionChallenges: 'Odisha\'s CHSE board has been progressively aligned with NCERT, particularly in Physics and Chemistry. However, Mathematics topics like 3D Geometry and Vector Calculus receive less emphasis than in CBSE, creating gaps for JEE preparation. Odia-medium students need additional English support. OJEE (state entrance) provides a backup option with 70% JEE overlap.',
    educationFact: 'Odisha punches above its weight in competitive exams — NIT Rourkela is consistently ranked among India\'s top 15 NITs. AIIMS Bhubaneswar\'s establishment has dramatically increased NEET aspirations in the state. Odisha\'s Koel Valley (Rourkela) has traditionally produced excellent engineering talent. The state produces ~1.5 lakh NEET aspirants, growing 20% annually.',
    aspirantCount: '~2 lakh JEE + NEET aspirants',
    competitionContext: 'Coaching infrastructure is concentrated in Bhubaneswar and Cuttack. Students from western Odisha (Sambalpur, Rourkela) and southern districts (Berhampur) have limited quality coaching access. The state\'s relatively lower NEET cutoffs for state medical seats make it particularly rewarding to prepare well.',
    nearbyPremierInstitutes: ['NIT Rourkela', 'AIIMS Bhubaneswar', 'IIIT Bhubaneswar', 'IIT Bhubaneswar'],
    regionalChallenge: 'Odisha\'s geographic diversity (coastal plains to tribal highlands) creates uneven educational access. Cyclone-prone coastal areas face periodic disruption. Internet connectivity in tribal districts remains challenging. Economic constraints limit coaching access for many families, making affordable online coaching crucial.',
    careerEcosystem: 'Bhubaneswar\'s growing IT sector (Infocity, Tech Park) provides engineering placements. NIT Rourkela graduates receive ₹10-30 LPA packages. AIIMS Bhubaneswar offers world-class medical training. Odisha\'s mining and steel sector (Rourkela, Jharsuguda) creates core engineering opportunities.',
    stateExamDetails: { name: 'OJEE', seats: '~30,000 engineering seats', overlapWithNational: '70% overlap with JEE Main; Class 12 syllabus only; Physics + Chemistry + Maths; 3 hours' },
  },
  'Jharkhand': {
    state: 'Jharkhand',
    topEnggColleges: [
      { name: 'IIT (ISM) Dhanbad', cutoff: 'JEE Advanced AIR < 3,000', branch: 'CSE/Mining/EE' },
      { name: 'BIT Mesra Ranchi', cutoff: 'JEE Main 92+ percentile', branch: 'CSE/IT/ECE' },
      { name: 'NIT Jamshedpur', cutoff: 'JEE Main 93+ percentile', branch: 'CSE/ECE' },
    ],
    topMedColleges: [
      { name: 'RIMS Ranchi', cutoff: 'NEET AIR < 12,000' },
      { name: 'MGM Medical College Jamshedpur', cutoff: 'NEET AIR < 25,000' },
      { name: 'PMCH Dhanbad', cutoff: 'NEET AIR < 30,000' },
    ],
    boardTransitionChallenges: 'Jharkhand Academic Council (JAC) board is NCERT-aligned but implementation quality varies significantly between Ranchi/Jamshedpur and rural areas. Hindi-medium predominance creates English exam challenges. Students benefit from the state\'s strong industrial culture (TATA legacy in Jamshedpur) which instils discipline and work ethic.',
    educationFact: 'Jharkhand has IIT (ISM) Dhanbad — India\'s premier mining and mineral engineering institute — plus BIT Mesra and NIT Jamshedpur, giving the state 3 nationally ranked engineering institutions. This density of premier institutes creates strong local JEE aspirations. Jamshedpur\'s TATA-built educational ecosystem produces well-disciplined students.',
    aspirantCount: '~1.5 lakh JEE + NEET aspirants',
    competitionContext: 'Coaching is concentrated in Ranchi, Jamshedpur, and Dhanbad. Students from coal-belt towns (Bokaro, Hazaribagh) have access to decent coaching due to industrial employment creating middle-class demand. Tribal area students face maximum access challenges. Online coaching has been transformative for Jharkhand\'s underserved districts.',
    nearbyPremierInstitutes: ['IIT (ISM) Dhanbad', 'NIT Jamshedpur', 'BIT Mesra'],
    regionalChallenge: 'Jharkhand\'s tribal demographics mean a significant student population has first-generation college aspirations, requiring additional motivational and foundational support. Power supply inconsistency in some districts affects online learning. Coal-belt environmental challenges can impact student health during preparation.',
    careerEcosystem: 'Jamshedpur (TATA Steel, TATA Motors), Dhanbad (mining, energy), and Ranchi (IT sector) provide diverse career paths. IIT Dhanbad graduates receive ₹12-35 LPA packages. BIT Mesra has a strong alumni network in Silicon Valley. The state\'s mining sector uniquely values Geology and Mining Engineering graduates.',
  },
  'Assam': {
    state: 'Assam',
    topEnggColleges: [
      { name: 'IIT Guwahati', cutoff: 'JEE Advanced AIR < 2,000', branch: 'CSE/EE/ME' },
      { name: 'NIT Silchar', cutoff: 'JEE Main 91+ percentile', branch: 'CSE/ECE' },
      { name: 'Tezpur University', cutoff: 'JEE Main 85+ percentile / CEE', branch: 'CSE/ECE' },
      { name: 'Jorhat Engineering College', cutoff: 'CEE Assam < 2,000 rank', branch: 'CSE/CE' },
    ],
    topMedColleges: [
      { name: 'Gauhati Medical College', cutoff: 'NEET AIR < 10,000' },
      { name: 'Assam Medical College Dibrugarh', cutoff: 'NEET AIR < 15,000' },
      { name: 'Silchar Medical College', cutoff: 'NEET AIR < 25,000' },
      { name: 'Jorhat Medical College', cutoff: 'NEET AIR < 30,000' },
    ],
    boardTransitionChallenges: 'Assam\'s AHSEC board follows a syllabus that partially overlaps with NCERT but has gaps in advanced Physics and Organic Chemistry. The transition challenge is compounded by Assamese-medium instruction in many schools. However, Assam students have historically been strong in Mathematics — IIT Guwahati\'s proximity has created a strong competitive exam culture in the Guwahati region.',
    educationFact: 'IIT Guwahati is ranked among India\'s top 10 IITs and has transformed Assam\'s competitive exam landscape. The state has 7 government medical colleges — significant for the Northeast region. Assam produces ~80,000 NEET aspirants annually, the highest in Northeast India. The state government\'s Pragyan scheme provides coaching fee assistance to underprivileged students.',
    aspirantCount: '~1 lakh JEE + NEET aspirants',
    competitionContext: 'Coaching infrastructure is concentrated almost entirely in Guwahati. Students from Upper Assam (Dibrugarh, Tinsukia), Lower Assam (Bongaigaon, Kokrajhar), and Barak Valley (Silchar) face severe coaching access challenges. The emergence of online coaching has been particularly impactful for Assam\'s underserved regions.',
    nearbyPremierInstitutes: ['IIT Guwahati', 'NIT Silchar', 'Tezpur University', 'AIIMS Guwahati'],
    regionalChallenge: 'Northeast India\'s geographical isolation creates unique challenges: limited coaching centre reach, periodic internet disruptions during monsoons and floods, and fewer peer study groups. However, government reservation policies and lower cutoffs for NE states create real opportunities that motivated students can leverage.',
    careerEcosystem: 'Guwahati\'s IT sector is developing with TCS and Wipro establishing centres. IIT Guwahati graduates command ₹15-40 LPA packages. The oil and gas sector (ONGC, Oil India in Dibrugarh/Digboi) creates unique engineering careers. The healthcare sector is growing rapidly across Northeast India, making NEET increasingly attractive.',
  },
  'Chhattisgarh': {
    state: 'Chhattisgarh',
    topEnggColleges: [
      { name: 'NIT Raipur', cutoff: 'JEE Main 91+ percentile', branch: 'CSE/IT/ECE' },
      { name: 'IIIT Naya Raipur', cutoff: 'JEE Main 88+ percentile', branch: 'CSE/DS/ECE' },
      { name: 'Government Engineering College Bilaspur', cutoff: 'JEE Main 75+ / CG PET', branch: 'CSE/ME' },
    ],
    topMedColleges: [
      { name: 'Pt JNM Medical College Raipur', cutoff: 'NEET AIR < 12,000' },
      { name: 'CIMS Bilaspur', cutoff: 'NEET AIR < 25,000' },
      { name: 'Government Medical College Rajnandgaon', cutoff: 'NEET AIR < 35,000' },
    ],
    boardTransitionChallenges: 'CGBSE is NCERT-aligned but depth of coverage varies. Hindi-medium predominance creates English terminology gaps. The state\'s relatively newer educational infrastructure (formed in 2000) means fewer established coaching traditions. However, NIT Raipur and IIIT Naya Raipur are creating strong local JEE aspirations.',
    educationFact: 'Chhattisgarh is India\'s youngest state with rapidly growing educational aspirations. IIIT Naya Raipur has been ranked among India\'s top emerging tech institutions. The state\'s industrial base (steel, power, mining) creates engineering career demand. CG state medical seats offer relatively lower NEET cutoffs, making medical aspirations achievable for well-prepared students.',
    aspirantCount: '~1 lakh JEE + NEET aspirants',
    competitionContext: 'Coaching is primarily in Raipur and Bilaspur. The rest of the state is significantly underserved. Online coaching has been particularly transformative for Chhattisgarh, where students in Bastar, Korba, and Durg previously had almost no access to quality competitive coaching.',
    nearbyPremierInstitutes: ['NIT Raipur', 'IIIT Naya Raipur', 'IIT Bhilai'],
    regionalChallenge: 'Chhattisgarh\'s left-wing extremism-affected districts have severely limited educational access. Infrastructure and connectivity challenges persist in tribal areas. The state\'s small coaching market means fewer experienced faculty. However, the lower competition level creates genuine opportunities for motivated students.',
    careerEcosystem: 'Raipur\'s growing commercial sector and Bhilai\'s steel plant create engineering career paths. NIT Raipur graduates receive ₹8-20 LPA packages. The state\'s healthcare expansion plans mean increasing demand for medical professionals. Government employment remains a major career path.',
  },
  'Haryana': {
    state: 'Haryana',
    topEnggColleges: [
      { name: 'NIT Kurukshetra', cutoff: 'JEE Main 94+ percentile', branch: 'CSE/ECE' },
      { name: 'IIIT Sonepat', cutoff: 'JEE Main 88+ percentile', branch: 'CSE/AI' },
      { name: 'DCR University Murthal', cutoff: 'JEE Main 82+ / HSTES', branch: 'CSE/IT' },
    ],
    topMedColleges: [
      { name: 'PGIMS Rohtak', cutoff: 'NEET AIR < 5,000' },
      { name: 'BPS Medical College Sonepat', cutoff: 'NEET AIR < 20,000' },
      { name: 'Kalpana Chawla Government Medical College Karnal', cutoff: 'NEET AIR < 25,000' },
    ],
    boardTransitionChallenges: 'Haryana Board (HBSE) students transitioning to JEE/NEET face moderate challenges. The board is NCERT-aligned but examination patterns emphasise descriptive answers. Hindi-medium students from rural Haryana need significant English support. However, Haryana\'s proximity to Delhi NCR means Gurgaon/Faridabad students have excellent coaching access.',
    educationFact: 'Haryana\'s Gurgaon is India\'s corporate capital, creating strong engineering demand. PGIMS Rohtak is among North India\'s top medical institutions. NIT Kurukshetra is consistently top-15 nationally. The state\'s sports culture instils discipline and competitive spirit in students — qualities that transfer well to exam preparation.',
    aspirantCount: '~2 lakh JEE + NEET aspirants',
    competitionContext: 'Haryana has a stark urban-rural divide. Gurgaon and Faridabad students access Delhi NCR coaching ecosystem; Rohtak, Hisar, and Karnal have moderate coaching; rural Haryana is significantly underserved. Online coaching bridges this gap effectively.',
    nearbyPremierInstitutes: ['NIT Kurukshetra', 'IIT Delhi (nearby)', 'PGIMS Rohtak'],
    regionalChallenge: 'Rural Haryana has limited educational awareness about competitive exam strategies. The state\'s emphasis on government jobs means some families deprioritize engineering/medical in favour of SSC/bank exam preparation. However, first-generation aspirants from rural Haryana show exceptional determination.',
    careerEcosystem: 'Gurgaon\'s massive IT/corporate ecosystem (DLF Cyber City, Unitech) provides among India\'s highest engineering placement opportunities. NIT Kurukshetra graduates receive ₹10-25 LPA packages. PGIMS Rohtak offers excellent medical specialisation training. Haryana\'s proximity to Delhi ensures broad career access.',
  },
  'Uttarakhand': {
    state: 'Uttarakhand',
    topEnggColleges: [
      { name: 'IIT Roorkee', cutoff: 'JEE Advanced AIR < 1,500', branch: 'CSE/EE/CE' },
      { name: 'NIT Uttarakhand (Srinagar)', cutoff: 'JEE Main 89+ percentile', branch: 'CSE/ECE' },
      { name: 'GBPUAT Pantnagar', cutoff: 'State entrance', branch: 'Agriculture/Engineering' },
    ],
    topMedColleges: [
      { name: 'AIIMS Rishikesh', cutoff: 'NEET AIR < 1,500' },
      { name: 'Government Medical College Haldwani', cutoff: 'NEET AIR < 20,000' },
      { name: 'GMC Dehradun', cutoff: 'NEET AIR < 15,000' },
    ],
    boardTransitionChallenges: 'Uttarakhand Board is NCERT-aligned, easing the JEE/NEET transition. However, coaching infrastructure is concentrated in Dehradun and Roorkee. Mountain terrain creates access and connectivity challenges for students in Kumaon and Garhwal regions.',
    educationFact: 'IIT Roorkee (formerly University of Roorkee, est. 1847) is Asia\'s oldest technical institution. AIIMS Rishikesh is rapidly emerging as a premier medical institution. Uttarakhand\'s small population relative to its premier institutions creates favourable per-capita access to top colleges.',
    aspirantCount: '~0.8 lakh JEE + NEET aspirants',
    competitionContext: 'Dehradun\'s boarding school culture creates academically disciplined students. Coaching is available in Dehradun and Haldwani. Mountain regions (Uttarkashi, Chamoli, Pithoragarh) have virtually no coaching infrastructure. Online coaching is essential for these areas.',
    nearbyPremierInstitutes: ['IIT Roorkee', 'AIIMS Rishikesh', 'NIT Uttarakhand'],
    regionalChallenge: 'Uttarakhand\'s mountainous terrain creates connectivity and infrastructure challenges. Winter conditions in higher-altitude areas can disrupt education. However, the state\'s serene environment is conducive to focused study when coaching access is available.',
    careerEcosystem: 'IIT Roorkee graduates command ₹20-50+ LPA packages. Dehradun\'s IT sector (IT Park) is growing. AIIMS Rishikesh offers world-class medical training. The state\'s tourism and hospitality sector creates additional career paths.',
  },
};

/** Get state education data, returns undefined for states without data */
export function getStateEducation(state: string): StateEducationData | undefined {
  return stateEducationData[state];
}

/** Get all available states */
export function getAvailableStates(): string[] {
  return Object.keys(stateEducationData);
}

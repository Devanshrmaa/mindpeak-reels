module.exports = [
"[project]/src/data/chapterData.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CHAPTER_SLUGS",
    ()=>CHAPTER_SLUGS,
    "TOPIC_PATHS",
    ()=>TOPIC_PATHS,
    "allTopics",
    ()=>allTopics,
    "chapters",
    ()=>chapters,
    "getChapterBySlug",
    ()=>getChapterBySlug,
    "getTopicInfo",
    ()=>getTopicInfo,
    "topicToSlug",
    ()=>topicToSlug
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$jeePhysics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/chapters/jeePhysics.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$jeeChemistry$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/chapters/jeeChemistry.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$jeeMaths$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/chapters/jeeMaths.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$neetBiology$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/chapters/neetBiology.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$neetPhysics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/chapters/neetPhysics.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$neetChemistry$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/chapters/neetChemistry.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
const chapters = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$jeePhysics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jeePhysicsChapters"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$jeeChemistry$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jeeChemistryChapters"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$jeeMaths$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jeeMathsChapters"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$neetBiology$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["neetBiologyChapters"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$neetPhysics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["neetPhysicsChapters"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$neetChemistry$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["neetChemistryChapters"]
];
const CHAPTER_SLUGS = chapters.map((c)=>c.slug);
function getChapterBySlug(slug) {
    return chapters.find((c)=>c.slug === slug);
}
function topicToSlug(topic) {
    return topic.toLowerCase().replace(/['']/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}
const allTopics = chapters.flatMap((chapter)=>chapter.topics.map((topicName, topicIndex)=>({
            topicSlug: topicToSlug(topicName),
            topicName,
            topicIndex,
            chapter
        })));
const TOPIC_PATHS = allTopics.map((t)=>`${t.chapter.slug}/${t.topicSlug}`);
function getTopicInfo(chapterSlug, topicSlug) {
    return allTopics.find((t)=>t.chapter.slug === chapterSlug && t.topicSlug === topicSlug);
}
}),
"[project]/src/data/stateEducationData.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

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
 */ __turbopack_context__.s([
    "getAvailableStates",
    ()=>getAvailableStates,
    "getStateEducation",
    ()=>getStateEducation,
    "stateEducationData",
    ()=>stateEducationData
]);
const stateEducationData = {
    'Maharashtra': {
        state: 'Maharashtra',
        topEnggColleges: [
            {
                name: 'IIT Bombay',
                cutoff: 'JEE Advanced AIR < 1000',
                branch: 'CSE/EE'
            },
            {
                name: 'VJTI Mumbai',
                cutoff: 'MHT-CET 99+ percentile',
                branch: 'Computer Engineering'
            },
            {
                name: 'COEP Pune',
                cutoff: 'MHT-CET 98+ percentile',
                branch: 'IT/CS'
            },
            {
                name: 'ICT Mumbai (UDCT)',
                cutoff: 'JEE Main 97+ percentile',
                branch: 'Chemical'
            },
            {
                name: 'VNIT Nagpur',
                cutoff: 'JEE Main 95+ percentile',
                branch: 'CSE/ECE'
            }
        ],
        topMedColleges: [
            {
                name: 'Grant Medical College (JJ Hospital)',
                cutoff: 'NEET AIR < 5,000'
            },
            {
                name: 'Seth GS Medical College (KEM Hospital)',
                cutoff: 'NEET AIR < 4,000'
            },
            {
                name: 'BJ Medical College Pune',
                cutoff: 'NEET AIR < 8,000'
            },
            {
                name: 'Government Medical College Nagpur',
                cutoff: 'NEET AIR < 15,000'
            }
        ],
        boardTransitionChallenges: 'Maharashtra State Board students face a significant transition to JEE/NEET because the board syllabus sequences topics differently — for example, Rotational Mechanics is covered later than in CBSE, creating a gap in Class 11 JEE prep. The board\'s emphasis on descriptive answers also means students need to adapt to MCQ-based problem-solving. MHT-CET adds another exam layer, though 85% of its syllabus overlaps with JEE Main.',
        educationFact: 'Maharashtra produces the 2nd highest number of NEET aspirants in India (~3.2 lakh annually). The state has 51 government medical colleges — the highest in any single state — making NEET competition intense but opportunities plentiful.',
        aspirantCount: '~5.5 lakh JEE + NEET aspirants combined',
        competitionContext: 'With 51 government medical colleges and 350+ engineering colleges, Maharashtra offers more seats than most states. However, the sheer volume of aspirants (5.5 lakh+) means competition is fierce. Students from Tier 2-3 Maharashtra cities often lack access to quality coaching available in Mumbai and Pune, creating an equity gap that online coaching bridges.',
        nearbyPremierInstitutes: [
            'IIT Bombay',
            'VNIT Nagpur',
            'COEP Pune',
            'ICT Mumbai'
        ],
        regionalChallenge: 'Mumbai\'s commute problem is unique in India — students lose 3-4 hours daily on local trains. In Tier 2-3 Maharashtra cities like Kolhapur, Latur, and Amravati, the challenge is the opposite: lack of quality coaching centres means students either relocate to Pune/Mumbai or rely on subpar local options.',
        careerEcosystem: 'Maharashtra\'s diverse economy (IT in Pune, finance in Mumbai, manufacturing in Nashik/Aurangabad) means JEE qualifiers have robust placement ecosystems. IIT Bombay and VJTI graduates command ₹15-50+ LPA packages. NEET qualifiers benefit from Maharashtra\'s extensive government hospital network for residency placements.',
        stateExamDetails: {
            name: 'MHT-CET',
            seats: '~1.5 lakh engineering + pharmacy seats',
            overlapWithNational: '85% syllabus overlap with JEE Main; separate Physics/Chemistry/Maths papers; marks-based (not percentile)'
        }
    },
    'Karnataka': {
        state: 'Karnataka',
        topEnggColleges: [
            {
                name: 'IISc Bangalore',
                cutoff: 'JEE Advanced AIR < 500 (BS program)',
                branch: 'Research'
            },
            {
                name: 'RVCE Bangalore',
                cutoff: 'KCET < 2,000 rank',
                branch: 'CSE/ISE'
            },
            {
                name: 'BMS College Bangalore',
                cutoff: 'KCET < 3,000 rank',
                branch: 'CSE/ECE'
            },
            {
                name: 'PES University',
                cutoff: 'KCET < 5,000 / PESSAT',
                branch: 'CSE'
            },
            {
                name: 'NIE Mysore',
                cutoff: 'KCET < 8,000 rank',
                branch: 'CS/IS'
            }
        ],
        topMedColleges: [
            {
                name: 'Bangalore Medical College',
                cutoff: 'NEET AIR < 6,000'
            },
            {
                name: 'MS Ramaiah Medical College',
                cutoff: 'NEET 600+ / Management quota'
            },
            {
                name: 'JSS Medical College Mysore',
                cutoff: 'NEET 550+'
            },
            {
                name: 'KMC Manipal',
                cutoff: 'NEET 580+'
            }
        ],
        boardTransitionChallenges: 'Karnataka State Board (PUC) follows a different topic sequence than CBSE, particularly in Physics and Chemistry. Students transitioning to JEE/NEET need bridge modules for topics like Thermodynamics and Electrochemistry which are sequenced differently. The PUC\'s emphasis on theory-heavy answers means students must develop MCQ speed and elimination techniques separately.',
        educationFact: 'Karnataka has India\'s highest concentration of engineering colleges per capita. Bangalore alone produces ~15,000 JEE aspirants annually. The state\'s IT ecosystem means parents often have tech backgrounds, leading to higher expectations for data-driven coaching approaches.',
        aspirantCount: '~3.8 lakh JEE + NEET aspirants combined',
        competitionContext: 'Karnataka\'s KCET exam adds a strategic dimension — students must prepare for both national (JEE/NEET) and state-level exams simultaneously. The good news: 80% syllabus overlap means dual preparation is efficient. Bangalore students face competition from the state\'s best, while Tier 2-3 Karnataka cities like Hubli, Belgaum, and Shimoga have limited quality coaching infrastructure.',
        nearbyPremierInstitutes: [
            'IISc Bangalore',
            'NIT Surathkal',
            'IIT Dharwad',
            'NITK Surathkal'
        ],
        regionalChallenge: 'Bangalore\'s traffic congestion makes physical coaching impractical — students in Electronic City or Whitefield cannot realistically attend coaching in Koramangala daily. In smaller Karnataka cities, the challenge is access to experienced faculty who understand competitive exam depth versus board-level preparation.',
        careerEcosystem: 'Bangalore is India\'s Silicon Valley — engineering graduates from RVCE, BMS, and PES regularly receive ₹12-40+ LPA packages from tech companies. The startup ecosystem also creates entrepreneurship opportunities. Medical graduates benefit from Karnataka\'s 59 medical colleges and Bangalore\'s world-class hospital network.',
        stateExamDetails: {
            name: 'KCET',
            seats: '~65,000 engineering + medical seats',
            overlapWithNational: '80% overlap with JEE/NEET; only Class 12 syllabus tested; separate Biology paper for medical'
        }
    },
    'Tamil Nadu': {
        state: 'Tamil Nadu',
        topEnggColleges: [
            {
                name: 'IIT Madras',
                cutoff: 'JEE Advanced AIR < 800',
                branch: 'CSE/EE'
            },
            {
                name: 'NIT Trichy',
                cutoff: 'JEE Main 98+ percentile',
                branch: 'CSE/ECE'
            },
            {
                name: 'Anna University CEG',
                cutoff: 'TNEA < 500 rank',
                branch: 'CSE'
            },
            {
                name: 'PSG College Coimbatore',
                cutoff: 'TNEA < 3,000 rank',
                branch: 'CS/IT'
            },
            {
                name: 'SSN College Chennai',
                cutoff: 'TNEA < 1,500 rank',
                branch: 'CSE/ECE'
            }
        ],
        topMedColleges: [
            {
                name: 'Madras Medical College',
                cutoff: 'NEET AIR < 3,000'
            },
            {
                name: 'Stanley Medical College',
                cutoff: 'NEET AIR < 7,000'
            },
            {
                name: 'Government Medical College Coimbatore',
                cutoff: 'NEET AIR < 20,000'
            },
            {
                name: 'CMC Vellore',
                cutoff: 'NEET 650+ / separate entrance'
            }
        ],
        boardTransitionChallenges: 'Tamil Nadu State Board has been recently revised (2019 onwards) to align closer with NCERT, but gaps remain in advanced Organic Chemistry and Modern Physics. The board\'s medium of instruction in Tamil creates an additional challenge for students attempting English-medium competitive exams. However, TN students excel at Mathematics due to the board\'s strong numerical emphasis.',
        educationFact: 'Tamil Nadu has the highest number of engineering colleges in India (over 550). The state produces ~4 lakh NEET aspirants annually — the highest in the country. TN\'s 10+2 system produces students with strong calculation skills but often weaker English scientific vocabulary.',
        aspirantCount: '~6 lakh JEE + NEET aspirants combined (highest NEET aspirants nationally)',
        competitionContext: 'Tamil Nadu leads India in NEET registrations. The state\'s 36 government medical colleges create strong NEET demand. Competition is exceptionally fierce — for every MBBS seat, there are 15+ applicants. Engineering competition is relatively less intense due to the massive number of colleges, but top institutions (IIT Madras, NIT Trichy, Anna University) remain extremely selective.',
        nearbyPremierInstitutes: [
            'IIT Madras',
            'NIT Trichy',
            'IIT Palakkad (nearby)',
            'Anna University'
        ],
        regionalChallenge: 'Tamil-medium education creates a language barrier for competitive exams conducted in English. Students from Madurai, Salem, and Tirunelveli often struggle with English scientific terminology despite strong conceptual understanding. Quality coaching is concentrated in Chennai and Coimbatore, leaving Tier 3 cities underserved.',
        careerEcosystem: 'Chennai\'s IT corridor (OMR/Sholinganallur) and Coimbatore\'s manufacturing hub provide strong engineering placement ecosystems. IIT Madras graduates command ₹20-60+ LPA. TN\'s 36 government medical colleges offer excellent residency training, and the state\'s healthcare infrastructure is among India\'s best.'
    },
    'Kerala': {
        state: 'Kerala',
        topEnggColleges: [
            {
                name: 'NIT Calicut',
                cutoff: 'JEE Main 97+ percentile',
                branch: 'CSE/ECE'
            },
            {
                name: 'CET Trivandrum',
                cutoff: 'KEAM < 500 rank',
                branch: 'CSE/IT'
            },
            {
                name: 'GEC Thrissur',
                cutoff: 'KEAM < 2,000 rank',
                branch: 'CS/EE'
            },
            {
                name: 'Model Engineering College',
                cutoff: 'KEAM < 1,500 rank',
                branch: 'CSE'
            }
        ],
        topMedColleges: [
            {
                name: 'Government Medical College Thiruvananthapuram',
                cutoff: 'NEET AIR < 10,000'
            },
            {
                name: 'Government Medical College Kozhikode',
                cutoff: 'NEET AIR < 12,000'
            },
            {
                name: 'Government Medical College Thrissur',
                cutoff: 'NEET AIR < 20,000'
            },
            {
                name: 'Amrita Medical College',
                cutoff: 'NEET 600+'
            }
        ],
        boardTransitionChallenges: 'Kerala State Board provides a strong science foundation — the board\'s Physics and Chemistry curricula are considered among the best state boards in India. However, the transition to JEE Advanced-level problem complexity requires significant uplift. Kerala students typically have excellent theoretical understanding but need intensive numerical problem-solving practice for competitive exams.',
        educationFact: 'Kerala has India\'s highest literacy rate (96.2%) and produces exceptionally well-prepared board students. However, the state ranks only 12th in JEE Advanced selections, suggesting a gap between board excellence and competitive exam readiness. KEAM (state engineering entrance) adds a dual-preparation requirement.',
        aspirantCount: '~2.5 lakh JEE + NEET aspirants combined',
        competitionContext: 'Kerala\'s high literacy rate means almost every science student attempts at least one competitive exam. The state has 9 government medical colleges, making NEET competition intense. KEAM for engineering requires separate preparation, adding to student workload. NRK (Non-Resident Keralite) students face additional challenges with timezone-adjusted coaching schedules.',
        nearbyPremierInstitutes: [
            'NIT Calicut',
            'IIT Palakkad',
            'IISER Thiruvananthapuram'
        ],
        regionalChallenge: 'Kerala\'s educational culture emphasises board exam marks heavily, sometimes at the expense of competitive exam preparation depth. The Malayalam medium in many schools creates a language adjustment challenge. Coaching centres are concentrated in Kochi and Thiruvananthapuram, leaving northern Kerala (Kozhikode, Kannur) underserved.',
        careerEcosystem: 'Kerala\'s economy is service-oriented with strong healthcare and IT sectors. NIT Calicut graduates receive ₹10-25 LPA packages. The state\'s robust healthcare system (including Amrita and AIMS) provides excellent medical career opportunities. Many Kerala engineering graduates work in Gulf countries and the Bangalore IT ecosystem.',
        stateExamDetails: {
            name: 'KEAM',
            seats: '~40,000 engineering seats',
            overlapWithNational: '75% overlap with JEE Main; tests Class 11+12 combined; Physics + Chemistry + Maths in single sitting'
        }
    },
    'Telangana': {
        state: 'Telangana',
        topEnggColleges: [
            {
                name: 'IIT Hyderabad',
                cutoff: 'JEE Advanced AIR < 3,000',
                branch: 'CSE/AI'
            },
            {
                name: 'IIIT Hyderabad',
                cutoff: 'JEE Main 99+ percentile / UGEE',
                branch: 'CSE/CND'
            },
            {
                name: 'NIT Warangal',
                cutoff: 'JEE Main 96+ percentile',
                branch: 'CSE/ECE'
            },
            {
                name: 'BITS Pilani Hyderabad',
                cutoff: 'BITSAT 300+',
                branch: 'CSE/ECE'
            },
            {
                name: 'Osmania University',
                cutoff: 'TS EAMCET < 5,000 rank',
                branch: 'CSE/IT'
            }
        ],
        topMedColleges: [
            {
                name: 'Osmania Medical College',
                cutoff: 'NEET AIR < 8,000'
            },
            {
                name: 'Gandhi Medical College',
                cutoff: 'NEET AIR < 12,000'
            },
            {
                name: 'Kakatiya Medical College Warangal',
                cutoff: 'NEET AIR < 25,000'
            },
            {
                name: 'NIMS Hyderabad',
                cutoff: 'NEET 580+'
            }
        ],
        boardTransitionChallenges: 'Telangana State Board (BIE) closely mirrors the CBSE pattern, making the JEE/NEET transition smoother than in many other states. However, the board\'s relatively easier marking means students may overestimate their competitive readiness. TS EAMCET uses a combined ranking of board marks + entrance score, creating a unique dual-focus requirement.',
        educationFact: 'Hyderabad has emerged as India\'s 2nd largest coaching hub after Kota, with major institutes like Sri Chaitanya and Narayana headquartered here. However, the batch-model (100-200 students) dominates, creating a paradox: access to coaching is easy, but personalised attention is rare. Telangana produces ~2.5 lakh NEET aspirants annually.',
        aspirantCount: '~4 lakh JEE + NEET aspirants combined',
        competitionContext: 'Hyderabad\'s coaching ecosystem (Sri Chaitanya, Narayana) produces impressive aggregate numbers but operates on a factory model where only the top 5% students receive adequate attention. Students from Warangal, Karimnagar, and Nizamabad face the choice of relocating to Hyderabad or settling for local centres with less experienced faculty.',
        nearbyPremierInstitutes: [
            'IIT Hyderabad',
            'IIIT Hyderabad',
            'NIT Warangal',
            'BITS Hyderabad'
        ],
        regionalChallenge: 'Telangana\'s coaching culture creates a pressure-cooker environment — students attend 8-10 hours of classes daily in residential programs, often leading to burnout. Integrated school + coaching programs (Sri Chaitanya, Narayana) leave no time for self-study or doubt resolution. The Telugu-medium background of many students creates additional terminology challenges.',
        careerEcosystem: 'Hyderabad\'s IT corridor (HITEC City, Gachibowli) is India\'s 2nd largest tech hub. IIIT Hyderabad graduates command ₹25-50+ LPA. The pharmaceutical sector (Dr Reddy\'s, Hetero, Aurobindo) creates unique opportunities for Chemistry graduates. Osmania Medical College produces some of India\'s finest doctors.',
        stateExamDetails: {
            name: 'TS EAMCET',
            seats: '~70,000 engineering + medical seats',
            overlapWithNational: '80% overlap with JEE/NEET; combined board marks (25%) + entrance (75%); bilingual paper (English + Telugu)'
        }
    },
    'Andhra Pradesh': {
        state: 'Andhra Pradesh',
        topEnggColleges: [
            {
                name: 'IIT Tirupati',
                cutoff: 'JEE Advanced AIR < 5,000',
                branch: 'CSE/EE'
            },
            {
                name: 'NIT Andhra Pradesh',
                cutoff: 'JEE Main 94+ percentile',
                branch: 'CSE/ECE'
            },
            {
                name: 'JNTU Kakinada',
                cutoff: 'AP EAMCET < 3,000 rank',
                branch: 'CSE/IT'
            },
            {
                name: 'Andhra University Visakhapatnam',
                cutoff: 'AP EAMCET < 5,000 rank',
                branch: 'CSE/ECE'
            },
            {
                name: 'SRM AP',
                cutoff: 'SRMJEEE / JEE Main 90+',
                branch: 'CSE'
            }
        ],
        topMedColleges: [
            {
                name: 'Andhra Medical College Visakhapatnam',
                cutoff: 'NEET AIR < 10,000'
            },
            {
                name: 'Guntur Medical College',
                cutoff: 'NEET AIR < 15,000'
            },
            {
                name: 'Rangaraya Medical College Kakinada',
                cutoff: 'NEET AIR < 20,000'
            },
            {
                name: 'Kurnool Medical College',
                cutoff: 'NEET AIR < 25,000'
            }
        ],
        boardTransitionChallenges: 'AP State Board recently underwent curriculum reform aligned with NCERT, but implementation gaps persist in rural areas. The integrated school + coaching model (dominant in AP via Narayana/Chaitanya) means students who opt out of this model need alternative high-quality coaching. Telugu-medium students face English terminology challenges in JEE/NEET.',
        educationFact: 'Andhra Pradesh has India\'s highest density of integrated coaching schools — over 60% of JEE/NEET aspirants study in residential coaching-cum-school programs. This creates a unique market where non-residential students feel left behind. AP produces ~3 lakh NEET aspirants annually, with Guntur district historically producing the most medical professionals per capita in India.',
        aspirantCount: '~4.5 lakh JEE + NEET aspirants combined',
        competitionContext: 'AP\'s integrated coaching culture creates early specialization — students enter coaching in Class 8-9. Those who miss this window often struggle to catch up. The state\'s new capital Amaravati is still developing its educational infrastructure. IIT Tirupati\'s establishment has boosted local JEE aspirations. AP EAMCET provides a safety net with ~70,000 seats.',
        nearbyPremierInstitutes: [
            'IIT Tirupati',
            'NIT Andhra Pradesh',
            'IIIT Sri City'
        ],
        regionalChallenge: 'AP\'s coaching ecosystem is dominated by residential integrated programs. Students who study from home lack peer competition and structured timetables. The state\'s geographic spread (Srikakulam to Anantapur) means coaching quality varies dramatically by city. Internet connectivity in rural AP areas can be inconsistent.',
        careerEcosystem: 'Visakhapatnam\'s industrial corridor (steel, shipbuilding, IT) and the emerging Amaravati tech hub create engineering opportunities. AP\'s medical college network (11 government colleges) provides good residency placements. Many AP engineering graduates work in Hyderabad and Bangalore IT sectors.',
        stateExamDetails: {
            name: 'AP EAMCET',
            seats: '~70,000 engineering + medical seats',
            overlapWithNational: '80% overlap with JEE/NEET; 75% entrance + 25% board marks; available in English and Telugu'
        }
    },
    'Delhi': {
        state: 'Delhi',
        topEnggColleges: [
            {
                name: 'IIT Delhi',
                cutoff: 'JEE Advanced AIR < 500',
                branch: 'CSE/EE'
            },
            {
                name: 'DTU (Delhi Technological University)',
                cutoff: 'JEE Main 98+ percentile',
                branch: 'CSE/IT'
            },
            {
                name: 'NSUT',
                cutoff: 'JEE Main 97+ percentile',
                branch: 'CSE/CSAI'
            },
            {
                name: 'IIIT Delhi',
                cutoff: 'JEE Main 98+ percentile / IIITD entrance',
                branch: 'CSE/ECE'
            },
            {
                name: 'Jamia Millia Islamia',
                cutoff: 'JEE Main 94+ percentile',
                branch: 'Civil/Mech/ECE'
            }
        ],
        topMedColleges: [
            {
                name: 'AIIMS Delhi',
                cutoff: 'NEET AIR < 100'
            },
            {
                name: 'Maulana Azad Medical College',
                cutoff: 'NEET AIR < 200'
            },
            {
                name: 'Lady Hardinge Medical College',
                cutoff: 'NEET AIR < 500'
            },
            {
                name: 'UCMS (University College of Medical Sciences)',
                cutoff: 'NEET AIR < 1,000'
            }
        ],
        boardTransitionChallenges: 'Delhi\'s CBSE-dominant ecosystem provides the most natural transition to JEE/NEET since competitive exams are CBSE-aligned. However, this advantage is offset by intense competition — every 3rd student in Delhi attempts JEE or NEET. The city\'s coaching hub areas (Rajouri Garden, Laxmi Nagar, Kalu Sarai, Mukherjee Nagar) are saturated with 200+ coaching centres, creating analysis paralysis for families choosing the right coaching.',
        educationFact: 'Delhi NCR produces more JEE Advanced qualifiers per capita than any other region. AIIMS Delhi remains India\'s most competitive medical seat — only 50 MBBS seats with 10+ lakh NEET applicants. DTU and NSUT have emerged as IIT-alternative choices for Delhi students with CSE packages matching older IITs.',
        aspirantCount: '~4 lakh JEE + NEET aspirants from Delhi NCR',
        competitionContext: 'Delhi\'s proximity to Kota (5 hours) means many families consider sending children there. However, increasing awareness of online coaching and mental health concerns have shifted preferences toward home-based preparation. The NCR region (including Noida, Gurgaon, Ghaziabad, Faridabad) collectively forms India\'s largest competitive exam preparation market.',
        nearbyPremierInstitutes: [
            'IIT Delhi',
            'AIIMS Delhi',
            'DTU',
            'NSUT',
            'IIIT Delhi',
            'JNU'
        ],
        regionalChallenge: 'Delhi students face the paradox of too many options — with 200+ coaching centres, students frequently switch between institutes, losing continuity. The city\'s high cost of living makes premium coaching (₹2-4 lakh/year) a significant financial burden. South Delhi vs Outer Delhi quality disparities exist in local coaching options.',
        careerEcosystem: 'Delhi NCR is India\'s largest job market. IIT Delhi and DTU graduates receive ₹20-60+ LPA packages. The startup ecosystem (Gurgaon/Noida) creates entrepreneurship opportunities. AIIMS Delhi offers the country\'s most prestigious medical residency. Delhi\'s diverse economy spans IT, consulting, media, finance, and government services.'
    },
    'Rajasthan': {
        state: 'Rajasthan',
        topEnggColleges: [
            {
                name: 'IIT Jodhpur',
                cutoff: 'JEE Advanced AIR < 4,000',
                branch: 'CSE/AI'
            },
            {
                name: 'MNIT Jaipur',
                cutoff: 'JEE Main 96+ percentile',
                branch: 'CSE/ECE'
            },
            {
                name: 'BITS Pilani',
                cutoff: 'BITSAT 350+',
                branch: 'CSE/EEE'
            },
            {
                name: 'MBM University Jodhpur',
                cutoff: 'JEE Main 85+ percentile',
                branch: 'CE/ME'
            },
            {
                name: 'LNMIIT Jaipur',
                cutoff: 'JEE Main 90+ percentile',
                branch: 'CSE/ECE'
            }
        ],
        topMedColleges: [
            {
                name: 'SMS Medical College Jaipur',
                cutoff: 'NEET AIR < 5,000'
            },
            {
                name: 'SP Medical College Bikaner',
                cutoff: 'NEET AIR < 20,000'
            },
            {
                name: 'Dr SN Medical College Jodhpur',
                cutoff: 'NEET AIR < 15,000'
            },
            {
                name: 'RNT Medical College Udaipur',
                cutoff: 'NEET AIR < 25,000'
            }
        ],
        boardTransitionChallenges: 'Rajasthan Board (RBSE) students face a moderate transition to JEE/NEET. The board\'s syllabus covers most NCERT topics but at a shallower depth, particularly in Organic Chemistry and Calculus. The biggest challenge: most RBSE students study in Hindi medium, creating a significant language barrier for English-medium competitive exams. Kota\'s proximity makes it a default choice, but many students fail to adapt to the residential environment.',
        educationFact: 'Rajasthan is home to Kota — India\'s undisputed coaching capital with 2+ lakh students at any given time. Ironically, students from Rajasthan itself have lower JEE Advanced selection rates compared to Delhi and Tamil Nadu, partly because the coaching ecosystem prioritises volume over personalisation. BITS Pilani, located in Rajasthan, is among India\'s top 5 private engineering institutions.',
        aspirantCount: '~3.5 lakh JEE + NEET aspirants',
        competitionContext: 'Rajasthan\'s coaching landscape is dominated by Kota\'s mass-production model. Students from Jaipur, Jodhpur, and other cities either relocate to Kota or choose local branches of Kota-based institutes. The alternative: personalised online coaching that delivers Kota-quality teaching without the relocation stress, hostel costs (₹8-12 lakh/year total), and mental health risks.',
        nearbyPremierInstitutes: [
            'IIT Jodhpur',
            'MNIT Jaipur',
            'BITS Pilani',
            'AIIMS Jodhpur'
        ],
        regionalChallenge: 'Rajasthan\'s coaching culture creates extreme pressure on teenagers — the state has faced student mental health crises in Kota that have made national headlines. Many Rajasthan families are now seeking alternatives that provide quality coaching without the toxic competitive environment. Hindi-medium students face additional challenges with English scientific terminology.',
        careerEcosystem: 'Jaipur\'s growing IT sector (Mahindra World City, Sitapura) creates engineering opportunities. MNIT Jaipur graduates receive ₹10-30 LPA packages. The state\'s tourism economy provides unique career paths for MBA graduates. SMS Medical College Jaipur is among Rajasthan\'s premier medical institutions for residency.'
    },
    'Uttar Pradesh': {
        state: 'Uttar Pradesh',
        topEnggColleges: [
            {
                name: 'IIT Kanpur',
                cutoff: 'JEE Advanced AIR < 600',
                branch: 'CSE/EE'
            },
            {
                name: 'IIT BHU Varanasi',
                cutoff: 'JEE Advanced AIR < 2,500',
                branch: 'CSE/ECE'
            },
            {
                name: 'MNNIT Allahabad',
                cutoff: 'JEE Main 96+ percentile',
                branch: 'CSE/IT'
            },
            {
                name: 'HBTU Kanpur',
                cutoff: 'JEE Main 90+ percentile',
                branch: 'CSE/ME'
            },
            {
                name: 'Amity University Noida',
                cutoff: 'JEE Main 80+ / university entrance',
                branch: 'CSE'
            }
        ],
        topMedColleges: [
            {
                name: 'KGMU Lucknow',
                cutoff: 'NEET AIR < 3,000'
            },
            {
                name: 'BHU IMS Varanasi',
                cutoff: 'NEET AIR < 5,000'
            },
            {
                name: 'GSVM Medical College Kanpur',
                cutoff: 'NEET AIR < 15,000'
            },
            {
                name: 'SN Medical College Agra',
                cutoff: 'NEET AIR < 20,000'
            }
        ],
        boardTransitionChallenges: 'UP Board students face the most significant transition to JEE/NEET among major states. The board\'s syllabus has traditionally been more theoretical and Hindi-medium dominant, creating dual challenges: content depth gaps and language barriers. Recent UP Board reforms (NCERT alignment since 2018) have improved this, but implementation varies across districts.',
        educationFact: 'Uttar Pradesh produces the highest absolute number of JEE/NEET aspirants in India (~8 lakh combined annually). However, the selection rate is below the national average, indicating a preparation quality gap. UP has 23 government medical colleges — significant but insufficient for the population. IIT Kanpur consistently produces India\'s highest-paid engineering graduates.',
        aspirantCount: '~8 lakh JEE + NEET aspirants (highest in India)',
        competitionContext: 'UP\'s massive student population creates extreme competition. Students from Lucknow, Kanpur, and Varanasi have access to reasonably good coaching, but smaller cities (Gorakhpur, Bareilly, Meerut) have significant quality gaps. The Noida-Greater Noida corridor benefits from Delhi NCR\'s coaching ecosystem, creating an uneven landscape.',
        nearbyPremierInstitutes: [
            'IIT Kanpur',
            'IIT BHU',
            'MNNIT Allahabad',
            'AIIMS Gorakhpur'
        ],
        regionalChallenge: 'UP\'s vast geographic spread means coaching quality varies dramatically. Western UP (Noida, Ghaziabad) has NCR-level access; Eastern UP (Varanasi, Gorakhpur) is relatively underserved. Hindi-medium predominance creates English terminology challenges. Economic constraints in Tier 3 cities limit coaching affordability.',
        careerEcosystem: 'Noida-Greater Noida IT corridor provides engineering placements. IIT Kanpur graduates command ₹25-60+ LPA. Lucknow\'s developing IT sector and government job ecosystem provide diverse opportunities. KGMU Lucknow and BHU IMS are among India\'s premier medical teaching institutions.'
    },
    'West Bengal': {
        state: 'West Bengal',
        topEnggColleges: [
            {
                name: 'IIT Kharagpur',
                cutoff: 'JEE Advanced AIR < 700',
                branch: 'CSE/EE'
            },
            {
                name: 'Jadavpur University',
                cutoff: 'WBJEE < 500 rank',
                branch: 'CSE/ECE/EE'
            },
            {
                name: 'NIT Durgapur',
                cutoff: 'JEE Main 94+ percentile',
                branch: 'CSE/ECE'
            },
            {
                name: 'IIEST Shibpur',
                cutoff: 'JEE Main 95+ percentile',
                branch: 'CSE/IT'
            },
            {
                name: 'Heritage Institute Kolkata',
                cutoff: 'WBJEE < 5,000 rank',
                branch: 'CSE'
            }
        ],
        topMedColleges: [
            {
                name: 'Medical College Kolkata',
                cutoff: 'NEET AIR < 4,000'
            },
            {
                name: 'RG Kar Medical College',
                cutoff: 'NEET AIR < 10,000'
            },
            {
                name: 'NRS Medical College',
                cutoff: 'NEET AIR < 15,000'
            },
            {
                name: 'Burdwan Medical College',
                cutoff: 'NEET AIR < 30,000'
            }
        ],
        boardTransitionChallenges: 'West Bengal Board students benefit from a reasonably strong science curriculum, particularly in Mathematics. However, the board\'s emphasis on Bengali-medium instruction creates language challenges for JEE/NEET. WBJEE provides an additional exam layer — while 70% overlaps with JEE Main, the remaining 30% requires separate preparation in topics like Statistics and Linear Programming.',
        educationFact: 'West Bengal has produced more Nobel laureates in science than any other Indian state. Jadavpur University is consistently ranked among India\'s top 5 engineering colleges and is tuition-free. IIT Kharagpur, India\'s first IIT, creates strong competitive exam aspirations across Bengal. Kolkata\'s Medical College is Asia\'s oldest medical institution.',
        aspirantCount: '~3 lakh JEE + NEET aspirants',
        competitionContext: 'Kolkata has a strong coaching culture concentrated in Salt Lake, Park Street, and Howrah areas. WBJEE\'s 70% overlap with JEE Main allows efficient dual preparation. Bengal students traditionally excel in Mathematics and Physics but may need additional focus on Chemistry. Districts beyond Kolkata (Siliguri, Durgapur, Asansol) have limited quality coaching.',
        nearbyPremierInstitutes: [
            'IIT Kharagpur',
            'NIT Durgapur',
            'IIEST Shibpur',
            'Jadavpur University'
        ],
        regionalChallenge: 'Bengali-medium education dominance creates a language barrier for competitive exams. Kolkata\'s aging infrastructure means some coaching centres operate in suboptimal environments. North Bengal (Siliguri, Jalpaiguri) is significantly underserved for competitive coaching. Economic constraints limit coaching access for many families.',
        careerEcosystem: 'Kolkata\'s IT sector (Salt Lake Sector V, Rajarhat) provides engineering placements. IIT Kharagpur graduates receive ₹20-50+ LPA packages. Jadavpur University alumni are highly recruited by tech companies. Medical College Kolkata offers premier residency training. Bengal\'s strong academic tradition produces researchers who excel in higher studies.',
        stateExamDetails: {
            name: 'WBJEE',
            seats: '~35,000 engineering seats',
            overlapWithNational: '70% overlap with JEE Main; includes Statistics, Mathematical Reasoning; only MCQ format; single sitting'
        }
    },
    'Gujarat': {
        state: 'Gujarat',
        topEnggColleges: [
            {
                name: 'IIT Gandhinagar',
                cutoff: 'JEE Advanced AIR < 3,000',
                branch: 'CSE/EE/ME'
            },
            {
                name: 'NIT Surat (SVNIT)',
                cutoff: 'JEE Main 95+ percentile',
                branch: 'CSE/ECE'
            },
            {
                name: 'DAIICT Gandhinagar',
                cutoff: 'JEE Main 92+ percentile',
                branch: 'ICT/CS'
            },
            {
                name: 'LD College Ahmedabad',
                cutoff: 'GUJCET < 1,000 rank',
                branch: 'CE/ME'
            },
            {
                name: 'Nirma University',
                cutoff: 'JEE Main 85+ / GUJCET',
                branch: 'CSE/IT'
            }
        ],
        topMedColleges: [
            {
                name: 'BJ Medical College Ahmedabad',
                cutoff: 'NEET AIR < 5,000'
            },
            {
                name: 'Government Medical College Surat',
                cutoff: 'NEET AIR < 15,000'
            },
            {
                name: 'MP Shah Medical College Jamnagar',
                cutoff: 'NEET AIR < 20,000'
            },
            {
                name: 'Government Medical College Vadodara',
                cutoff: 'NEET AIR < 18,000'
            }
        ],
        boardTransitionChallenges: 'Gujarat Board students face a moderate transition. The board covers most NCERT topics but with slightly less depth in Organic Chemistry and Calculus. Gujarati-medium students need additional support for English technical vocabulary. GUJCET provides a state-level engineering entrance with 80% overlap with JEE Main, allowing efficient combined preparation.',
        educationFact: 'Gujarat\'s industrial economy (Reliance, Adani, TCS in Ahmedabad) creates strong demand for engineering graduates. The state has 14 government medical colleges. IIT Gandhinagar, though newer, has rapidly risen in rankings. DAIICT is India\'s first ICT-focused university. Gujarat produces ~2.5 lakh competitive exam aspirants annually.',
        aspirantCount: '~2.5 lakh JEE + NEET aspirants',
        competitionContext: 'Ahmedabad has a growing coaching ecosystem with local and national chains. Surat and Vadodara have emerging coaching markets. Gujarat students benefit from a strong work ethic culture but may underinvest in coaching compared to South Indian states. GUJCET\'s separate exam adds a safety net for engineering aspirants.',
        nearbyPremierInstitutes: [
            'IIT Gandhinagar',
            'SVNIT Surat',
            'DAIICT',
            'PDPU Gandhinagar'
        ],
        regionalChallenge: 'Gujarat\'s business-oriented culture sometimes deprioritizes higher education in favour of commerce. Students from Saurashtra and North Gujarat regions have limited coaching access. The Gujarati-medium challenge is real — many students think in Gujarati but must solve problems in English.',
        careerEcosystem: 'Ahmedabad\'s diversified economy (pharma, textiles, IT, automobile) provides broad engineering opportunities. SVNIT Surat and DAIICT graduates receive ₹8-25 LPA packages. Gujarat\'s pharmaceutical cluster (world\'s largest) creates unique Chemistry career paths. The entrepreneurial ecosystem is among India\'s strongest.',
        stateExamDetails: {
            name: 'GUJCET',
            seats: '~50,000 engineering + medical seats',
            overlapWithNational: '80% overlap with JEE Main; MCQ format; Physics + Chemistry + Maths/Biology; 3-hour single sitting'
        }
    },
    'Madhya Pradesh': {
        state: 'Madhya Pradesh',
        topEnggColleges: [
            {
                name: 'IIT Indore',
                cutoff: 'JEE Advanced AIR < 3,500',
                branch: 'CSE/EE'
            },
            {
                name: 'MANIT Bhopal',
                cutoff: 'JEE Main 94+ percentile',
                branch: 'CSE/ECE'
            },
            {
                name: 'IIIT Jabalpur',
                cutoff: 'JEE Main 90+ percentile',
                branch: 'CSE/IT'
            },
            {
                name: 'RGPV Bhopal',
                cutoff: 'JEE Main 80+ / MP PPT',
                branch: 'CSE'
            }
        ],
        topMedColleges: [
            {
                name: 'Gandhi Medical College Bhopal',
                cutoff: 'NEET AIR < 8,000'
            },
            {
                name: 'Government Medical College Indore',
                cutoff: 'NEET AIR < 12,000'
            },
            {
                name: 'Government Medical College Jabalpur',
                cutoff: 'NEET AIR < 20,000'
            },
            {
                name: 'Gajra Raja Medical College Gwalior',
                cutoff: 'NEET AIR < 18,000'
            }
        ],
        boardTransitionChallenges: 'MP Board has been aligned with NCERT since 2018, reducing the transition gap. However, implementation quality varies significantly between Bhopal/Indore and smaller cities. Hindi-medium dominance creates English terminology challenges. The board\'s practical exam component doesn\'t directly help competitive exam preparation.',
        educationFact: 'Madhya Pradesh has 13 government medical colleges and 6 AIIMS-like institutions being developed. IIT Indore has become a top-15 IIT. Bhopal and Indore are emerging as coaching hubs with branches of major national chains. MP produces ~3 lakh competitive exam aspirants, with NEET aspirants growing 15% annually.',
        aspirantCount: '~3 lakh JEE + NEET aspirants',
        competitionContext: 'MP\'s coaching ecosystem is concentrated in Bhopal, Indore, and Gwalior. Students from smaller cities (Jabalpur, Ujjain, Sagar, Rewa) often relocate for quality coaching. The state\'s relatively lower cutoffs for state medical seats make NEET preparation particularly rewarding for MP students.',
        nearbyPremierInstitutes: [
            'IIT Indore',
            'MANIT Bhopal',
            'IIIT Jabalpur',
            'AIIMS Bhopal'
        ],
        regionalChallenge: 'MP\'s vast rural areas have minimal coaching infrastructure. The state\'s economic constraints mean many families cannot afford premium coaching. Internet connectivity in rural MP limits online learning effectiveness. The concentration of quality coaching in Bhopal-Indore creates a significant urban-rural divide.',
        careerEcosystem: 'Bhopal\'s IT sector is developing with TCS, Infosys establishing centres. Indore\'s growing commercial ecosystem provides diverse career paths. MANIT Bhopal graduates receive ₹8-20 LPA packages. Government job preparation is a significant parallel track for many MP students.'
    },
    'Bihar': {
        state: 'Bihar',
        topEnggColleges: [
            {
                name: 'IIT Patna',
                cutoff: 'JEE Advanced AIR < 4,000',
                branch: 'CSE/EE'
            },
            {
                name: 'NIT Patna',
                cutoff: 'JEE Main 93+ percentile',
                branch: 'CSE/ECE/EE'
            },
            {
                name: 'BIT Mesra (nearby Jharkhand)',
                cutoff: 'JEE Main 92+ percentile',
                branch: 'CSE/IT'
            }
        ],
        topMedColleges: [
            {
                name: 'PMCH Patna',
                cutoff: 'NEET AIR < 6,000'
            },
            {
                name: 'AIIMS Patna',
                cutoff: 'NEET AIR < 3,000'
            },
            {
                name: 'NMCH Patna',
                cutoff: 'NEET AIR < 15,000'
            },
            {
                name: 'DMC Darbhanga',
                cutoff: 'NEET AIR < 30,000'
            }
        ],
        boardTransitionChallenges: 'Bihar Board (BSEB) students face significant challenges in transitioning to JEE/NEET. The board\'s syllabus depth is below CBSE standards in several areas, particularly Organic Chemistry and Calculus. Hindi-medium predominance creates English vocabulary gaps. However, Bihar students are known for exceptional determination and hard work once given the right guidance.',
        educationFact: 'Bihar has the highest student-to-coaching-centre ratio in India — meaning less coaching access per student than any other major state. Despite this, Bihar students consistently perform well when given quality coaching, with many cracking top 1000 ranks from home-based preparation. The state\'s Super 30 program proved that Bihar students can compete with anyone given the right resources.',
        aspirantCount: '~4 lakh JEE + NEET aspirants',
        competitionContext: 'Bihar students face a unique challenge: high aspirations but limited local coaching quality. Most serious aspirants either relocate to Kota, Delhi, or Patna for coaching. The emergence of online coaching has been a game-changer for Bihar — students from Muzaffarpur, Gaya, Bhagalpur, and Darbhanga can now access tier-1 coaching from home.',
        nearbyPremierInstitutes: [
            'IIT Patna',
            'NIT Patna',
            'AIIMS Patna',
            'BIT Mesra'
        ],
        regionalChallenge: 'Bihar\'s coaching infrastructure is concentrated almost entirely in Patna. Students from 90% of Bihar\'s districts must either relocate or find online alternatives. Economic constraints are significant — many families cannot afford Kota-level coaching fees. Internet connectivity has improved but remains inconsistent in rural areas.',
        careerEcosystem: 'Bihar students traditionally excel in civil services and government exams. Engineering graduates from IIT Patna receive ₹15-40 LPA packages. AIIMS Patna and PMCH provide excellent medical training. Bihar\'s growing IT sector in Patna creates emerging opportunities, though most graduates work in Delhi NCR, Bangalore, or Hyderabad.'
    },
    'Punjab': {
        state: 'Punjab',
        topEnggColleges: [
            {
                name: 'IIT Ropar',
                cutoff: 'JEE Advanced AIR < 4,500',
                branch: 'CSE/EE/ME'
            },
            {
                name: 'NIT Jalandhar',
                cutoff: 'JEE Main 93+ percentile',
                branch: 'CSE/IT/ECE'
            },
            {
                name: 'Thapar University Patiala',
                cutoff: 'JEE Main 88+ percentile',
                branch: 'CSE/ECE'
            },
            {
                name: 'PEC Chandigarh',
                cutoff: 'JEE Main 94+ percentile',
                branch: 'CSE/ECE'
            }
        ],
        topMedColleges: [
            {
                name: 'Government Medical College Patiala',
                cutoff: 'NEET AIR < 10,000'
            },
            {
                name: 'Government Medical College Amritsar',
                cutoff: 'NEET AIR < 15,000'
            },
            {
                name: 'GMC Faridkot',
                cutoff: 'NEET AIR < 25,000'
            },
            {
                name: 'PGIMER Chandigarh (nearby)',
                cutoff: 'NEET AIR < 200 / separate entrance'
            }
        ],
        boardTransitionChallenges: 'Punjab Board (PSEB) students face a moderate transition to JEE/NEET. The board has recently aligned with NCERT, but depth gaps remain in advanced topics. Many Punjabi-medium students need English terminology support. The proximity to Chandigarh\'s coaching centres provides reasonable access for students in Mohali, Ludhiana, and Jalandhar.',
        educationFact: 'Punjab has a strong tradition of medical professionals — the state produces a disproportionately high number of NEET qualifiers relative to its population. PGIMER Chandigarh, though technically in Chandigarh UT, is the premier medical institute serving Punjab students. Thapar University and PEC Chandigarh are highly regarded engineering alternatives to IITs/NITs.',
        aspirantCount: '~1.5 lakh JEE + NEET aspirants',
        competitionContext: 'Punjab\'s coaching market is concentrated in Chandigarh, Ludhiana, and Jalandhar. The state\'s relatively smaller aspirant pool means less local competition but also less peer motivation. NRI Punjabi families often seek quality coaching for children returning for JEE/NEET preparation.',
        nearbyPremierInstitutes: [
            'IIT Ropar',
            'NIT Jalandhar',
            'PEC Chandigarh',
            'PGIMER Chandigarh'
        ],
        regionalChallenge: 'Punjab\'s agrarian economy means many families have limited awareness of competitive exam preparation strategies. The state\'s high migration to Canada/UK creates a dual focus — some families prioritise IELTS over JEE/NEET. Coaching quality in smaller Punjab cities (Bathinda, Pathankot, Hoshiarpur) is significantly below Chandigarh/Ludhiana standards.',
        careerEcosystem: 'Chandigarh IT Park and Mohali IT hub provide engineering placement opportunities. Thapar University graduates receive ₹8-25 LPA packages. Punjab\'s medical ecosystem benefits from PGIMER\'s reputation. Many Punjab engineering graduates work in Delhi NCR\'s tech sector.'
    },
    'Odisha': {
        state: 'Odisha',
        topEnggColleges: [
            {
                name: 'NIT Rourkela',
                cutoff: 'JEE Main 95+ percentile',
                branch: 'CSE/ECE/ME'
            },
            {
                name: 'IIIT Bhubaneswar',
                cutoff: 'JEE Main 90+ percentile',
                branch: 'CSE/IT'
            },
            {
                name: 'CET Bhubaneswar',
                cutoff: 'JEE Main 85+ / OJEE',
                branch: 'CSE'
            },
            {
                name: 'VSSUT Burla',
                cutoff: 'OJEE < 2,000 rank',
                branch: 'CSE/IT'
            }
        ],
        topMedColleges: [
            {
                name: 'SCB Medical College Cuttack',
                cutoff: 'NEET AIR < 8,000'
            },
            {
                name: 'MKCG Medical College Berhampur',
                cutoff: 'NEET AIR < 20,000'
            },
            {
                name: 'VIMSAR Burla',
                cutoff: 'NEET AIR < 25,000'
            },
            {
                name: 'AIIMS Bhubaneswar',
                cutoff: 'NEET AIR < 2,000'
            }
        ],
        boardTransitionChallenges: 'Odisha\'s CHSE board has been progressively aligned with NCERT, particularly in Physics and Chemistry. However, Mathematics topics like 3D Geometry and Vector Calculus receive less emphasis than in CBSE, creating gaps for JEE preparation. Odia-medium students need additional English support. OJEE (state entrance) provides a backup option with 70% JEE overlap.',
        educationFact: 'Odisha punches above its weight in competitive exams — NIT Rourkela is consistently ranked among India\'s top 15 NITs. AIIMS Bhubaneswar\'s establishment has dramatically increased NEET aspirations in the state. Odisha\'s Koel Valley (Rourkela) has traditionally produced excellent engineering talent. The state produces ~1.5 lakh NEET aspirants, growing 20% annually.',
        aspirantCount: '~2 lakh JEE + NEET aspirants',
        competitionContext: 'Coaching infrastructure is concentrated in Bhubaneswar and Cuttack. Students from western Odisha (Sambalpur, Rourkela) and southern districts (Berhampur) have limited quality coaching access. The state\'s relatively lower NEET cutoffs for state medical seats make it particularly rewarding to prepare well.',
        nearbyPremierInstitutes: [
            'NIT Rourkela',
            'AIIMS Bhubaneswar',
            'IIIT Bhubaneswar',
            'IIT Bhubaneswar'
        ],
        regionalChallenge: 'Odisha\'s geographic diversity (coastal plains to tribal highlands) creates uneven educational access. Cyclone-prone coastal areas face periodic disruption. Internet connectivity in tribal districts remains challenging. Economic constraints limit coaching access for many families, making affordable online coaching crucial.',
        careerEcosystem: 'Bhubaneswar\'s growing IT sector (Infocity, Tech Park) provides engineering placements. NIT Rourkela graduates receive ₹10-30 LPA packages. AIIMS Bhubaneswar offers world-class medical training. Odisha\'s mining and steel sector (Rourkela, Jharsuguda) creates core engineering opportunities.',
        stateExamDetails: {
            name: 'OJEE',
            seats: '~30,000 engineering seats',
            overlapWithNational: '70% overlap with JEE Main; Class 12 syllabus only; Physics + Chemistry + Maths; 3 hours'
        }
    },
    'Jharkhand': {
        state: 'Jharkhand',
        topEnggColleges: [
            {
                name: 'IIT (ISM) Dhanbad',
                cutoff: 'JEE Advanced AIR < 3,000',
                branch: 'CSE/Mining/EE'
            },
            {
                name: 'BIT Mesra Ranchi',
                cutoff: 'JEE Main 92+ percentile',
                branch: 'CSE/IT/ECE'
            },
            {
                name: 'NIT Jamshedpur',
                cutoff: 'JEE Main 93+ percentile',
                branch: 'CSE/ECE'
            }
        ],
        topMedColleges: [
            {
                name: 'RIMS Ranchi',
                cutoff: 'NEET AIR < 12,000'
            },
            {
                name: 'MGM Medical College Jamshedpur',
                cutoff: 'NEET AIR < 25,000'
            },
            {
                name: 'PMCH Dhanbad',
                cutoff: 'NEET AIR < 30,000'
            }
        ],
        boardTransitionChallenges: 'Jharkhand Academic Council (JAC) board is NCERT-aligned but implementation quality varies significantly between Ranchi/Jamshedpur and rural areas. Hindi-medium predominance creates English exam challenges. Students benefit from the state\'s strong industrial culture (TATA legacy in Jamshedpur) which instils discipline and work ethic.',
        educationFact: 'Jharkhand has IIT (ISM) Dhanbad — India\'s premier mining and mineral engineering institute — plus BIT Mesra and NIT Jamshedpur, giving the state 3 nationally ranked engineering institutions. This density of premier institutes creates strong local JEE aspirations. Jamshedpur\'s TATA-built educational ecosystem produces well-disciplined students.',
        aspirantCount: '~1.5 lakh JEE + NEET aspirants',
        competitionContext: 'Coaching is concentrated in Ranchi, Jamshedpur, and Dhanbad. Students from coal-belt towns (Bokaro, Hazaribagh) have access to decent coaching due to industrial employment creating middle-class demand. Tribal area students face maximum access challenges. Online coaching has been transformative for Jharkhand\'s underserved districts.',
        nearbyPremierInstitutes: [
            'IIT (ISM) Dhanbad',
            'NIT Jamshedpur',
            'BIT Mesra'
        ],
        regionalChallenge: 'Jharkhand\'s tribal demographics mean a significant student population has first-generation college aspirations, requiring additional motivational and foundational support. Power supply inconsistency in some districts affects online learning. Coal-belt environmental challenges can impact student health during preparation.',
        careerEcosystem: 'Jamshedpur (TATA Steel, TATA Motors), Dhanbad (mining, energy), and Ranchi (IT sector) provide diverse career paths. IIT Dhanbad graduates receive ₹12-35 LPA packages. BIT Mesra has a strong alumni network in Silicon Valley. The state\'s mining sector uniquely values Geology and Mining Engineering graduates.'
    },
    'Assam': {
        state: 'Assam',
        topEnggColleges: [
            {
                name: 'IIT Guwahati',
                cutoff: 'JEE Advanced AIR < 2,000',
                branch: 'CSE/EE/ME'
            },
            {
                name: 'NIT Silchar',
                cutoff: 'JEE Main 91+ percentile',
                branch: 'CSE/ECE'
            },
            {
                name: 'Tezpur University',
                cutoff: 'JEE Main 85+ percentile / CEE',
                branch: 'CSE/ECE'
            },
            {
                name: 'Jorhat Engineering College',
                cutoff: 'CEE Assam < 2,000 rank',
                branch: 'CSE/CE'
            }
        ],
        topMedColleges: [
            {
                name: 'Gauhati Medical College',
                cutoff: 'NEET AIR < 10,000'
            },
            {
                name: 'Assam Medical College Dibrugarh',
                cutoff: 'NEET AIR < 15,000'
            },
            {
                name: 'Silchar Medical College',
                cutoff: 'NEET AIR < 25,000'
            },
            {
                name: 'Jorhat Medical College',
                cutoff: 'NEET AIR < 30,000'
            }
        ],
        boardTransitionChallenges: 'Assam\'s AHSEC board follows a syllabus that partially overlaps with NCERT but has gaps in advanced Physics and Organic Chemistry. The transition challenge is compounded by Assamese-medium instruction in many schools. However, Assam students have historically been strong in Mathematics — IIT Guwahati\'s proximity has created a strong competitive exam culture in the Guwahati region.',
        educationFact: 'IIT Guwahati is ranked among India\'s top 10 IITs and has transformed Assam\'s competitive exam landscape. The state has 7 government medical colleges — significant for the Northeast region. Assam produces ~80,000 NEET aspirants annually, the highest in Northeast India. The state government\'s Pragyan scheme provides coaching fee assistance to underprivileged students.',
        aspirantCount: '~1 lakh JEE + NEET aspirants',
        competitionContext: 'Coaching infrastructure is concentrated almost entirely in Guwahati. Students from Upper Assam (Dibrugarh, Tinsukia), Lower Assam (Bongaigaon, Kokrajhar), and Barak Valley (Silchar) face severe coaching access challenges. The emergence of online coaching has been particularly impactful for Assam\'s underserved regions.',
        nearbyPremierInstitutes: [
            'IIT Guwahati',
            'NIT Silchar',
            'Tezpur University',
            'AIIMS Guwahati'
        ],
        regionalChallenge: 'Northeast India\'s geographical isolation creates unique challenges: limited coaching centre reach, periodic internet disruptions during monsoons and floods, and fewer peer study groups. However, government reservation policies and lower cutoffs for NE states create real opportunities that motivated students can leverage.',
        careerEcosystem: 'Guwahati\'s IT sector is developing with TCS and Wipro establishing centres. IIT Guwahati graduates command ₹15-40 LPA packages. The oil and gas sector (ONGC, Oil India in Dibrugarh/Digboi) creates unique engineering careers. The healthcare sector is growing rapidly across Northeast India, making NEET increasingly attractive.'
    },
    'Chhattisgarh': {
        state: 'Chhattisgarh',
        topEnggColleges: [
            {
                name: 'NIT Raipur',
                cutoff: 'JEE Main 91+ percentile',
                branch: 'CSE/IT/ECE'
            },
            {
                name: 'IIIT Naya Raipur',
                cutoff: 'JEE Main 88+ percentile',
                branch: 'CSE/DS/ECE'
            },
            {
                name: 'Government Engineering College Bilaspur',
                cutoff: 'JEE Main 75+ / CG PET',
                branch: 'CSE/ME'
            }
        ],
        topMedColleges: [
            {
                name: 'Pt JNM Medical College Raipur',
                cutoff: 'NEET AIR < 12,000'
            },
            {
                name: 'CIMS Bilaspur',
                cutoff: 'NEET AIR < 25,000'
            },
            {
                name: 'Government Medical College Rajnandgaon',
                cutoff: 'NEET AIR < 35,000'
            }
        ],
        boardTransitionChallenges: 'CGBSE is NCERT-aligned but depth of coverage varies. Hindi-medium predominance creates English terminology gaps. The state\'s relatively newer educational infrastructure (formed in 2000) means fewer established coaching traditions. However, NIT Raipur and IIIT Naya Raipur are creating strong local JEE aspirations.',
        educationFact: 'Chhattisgarh is India\'s youngest state with rapidly growing educational aspirations. IIIT Naya Raipur has been ranked among India\'s top emerging tech institutions. The state\'s industrial base (steel, power, mining) creates engineering career demand. CG state medical seats offer relatively lower NEET cutoffs, making medical aspirations achievable for well-prepared students.',
        aspirantCount: '~1 lakh JEE + NEET aspirants',
        competitionContext: 'Coaching is primarily in Raipur and Bilaspur. The rest of the state is significantly underserved. Online coaching has been particularly transformative for Chhattisgarh, where students in Bastar, Korba, and Durg previously had almost no access to quality competitive coaching.',
        nearbyPremierInstitutes: [
            'NIT Raipur',
            'IIIT Naya Raipur',
            'IIT Bhilai'
        ],
        regionalChallenge: 'Chhattisgarh\'s left-wing extremism-affected districts have severely limited educational access. Infrastructure and connectivity challenges persist in tribal areas. The state\'s small coaching market means fewer experienced faculty. However, the lower competition level creates genuine opportunities for motivated students.',
        careerEcosystem: 'Raipur\'s growing commercial sector and Bhilai\'s steel plant create engineering career paths. NIT Raipur graduates receive ₹8-20 LPA packages. The state\'s healthcare expansion plans mean increasing demand for medical professionals. Government employment remains a major career path.'
    },
    'Haryana': {
        state: 'Haryana',
        topEnggColleges: [
            {
                name: 'NIT Kurukshetra',
                cutoff: 'JEE Main 94+ percentile',
                branch: 'CSE/ECE'
            },
            {
                name: 'IIIT Sonepat',
                cutoff: 'JEE Main 88+ percentile',
                branch: 'CSE/AI'
            },
            {
                name: 'DCR University Murthal',
                cutoff: 'JEE Main 82+ / HSTES',
                branch: 'CSE/IT'
            }
        ],
        topMedColleges: [
            {
                name: 'PGIMS Rohtak',
                cutoff: 'NEET AIR < 5,000'
            },
            {
                name: 'BPS Medical College Sonepat',
                cutoff: 'NEET AIR < 20,000'
            },
            {
                name: 'Kalpana Chawla Government Medical College Karnal',
                cutoff: 'NEET AIR < 25,000'
            }
        ],
        boardTransitionChallenges: 'Haryana Board (HBSE) students transitioning to JEE/NEET face moderate challenges. The board is NCERT-aligned but examination patterns emphasise descriptive answers. Hindi-medium students from rural Haryana need significant English support. However, Haryana\'s proximity to Delhi NCR means Gurgaon/Faridabad students have excellent coaching access.',
        educationFact: 'Haryana\'s Gurgaon is India\'s corporate capital, creating strong engineering demand. PGIMS Rohtak is among North India\'s top medical institutions. NIT Kurukshetra is consistently top-15 nationally. The state\'s sports culture instils discipline and competitive spirit in students — qualities that transfer well to exam preparation.',
        aspirantCount: '~2 lakh JEE + NEET aspirants',
        competitionContext: 'Haryana has a stark urban-rural divide. Gurgaon and Faridabad students access Delhi NCR coaching ecosystem; Rohtak, Hisar, and Karnal have moderate coaching; rural Haryana is significantly underserved. Online coaching bridges this gap effectively.',
        nearbyPremierInstitutes: [
            'NIT Kurukshetra',
            'IIT Delhi (nearby)',
            'PGIMS Rohtak'
        ],
        regionalChallenge: 'Rural Haryana has limited educational awareness about competitive exam strategies. The state\'s emphasis on government jobs means some families deprioritize engineering/medical in favour of SSC/bank exam preparation. However, first-generation aspirants from rural Haryana show exceptional determination.',
        careerEcosystem: 'Gurgaon\'s massive IT/corporate ecosystem (DLF Cyber City, Unitech) provides among India\'s highest engineering placement opportunities. NIT Kurukshetra graduates receive ₹10-25 LPA packages. PGIMS Rohtak offers excellent medical specialisation training. Haryana\'s proximity to Delhi ensures broad career access.'
    },
    'Uttarakhand': {
        state: 'Uttarakhand',
        topEnggColleges: [
            {
                name: 'IIT Roorkee',
                cutoff: 'JEE Advanced AIR < 1,500',
                branch: 'CSE/EE/CE'
            },
            {
                name: 'NIT Uttarakhand (Srinagar)',
                cutoff: 'JEE Main 89+ percentile',
                branch: 'CSE/ECE'
            },
            {
                name: 'GBPUAT Pantnagar',
                cutoff: 'State entrance',
                branch: 'Agriculture/Engineering'
            }
        ],
        topMedColleges: [
            {
                name: 'AIIMS Rishikesh',
                cutoff: 'NEET AIR < 1,500'
            },
            {
                name: 'Government Medical College Haldwani',
                cutoff: 'NEET AIR < 20,000'
            },
            {
                name: 'GMC Dehradun',
                cutoff: 'NEET AIR < 15,000'
            }
        ],
        boardTransitionChallenges: 'Uttarakhand Board is NCERT-aligned, easing the JEE/NEET transition. However, coaching infrastructure is concentrated in Dehradun and Roorkee. Mountain terrain creates access and connectivity challenges for students in Kumaon and Garhwal regions.',
        educationFact: 'IIT Roorkee (formerly University of Roorkee, est. 1847) is Asia\'s oldest technical institution. AIIMS Rishikesh is rapidly emerging as a premier medical institution. Uttarakhand\'s small population relative to its premier institutions creates favourable per-capita access to top colleges.',
        aspirantCount: '~0.8 lakh JEE + NEET aspirants',
        competitionContext: 'Dehradun\'s boarding school culture creates academically disciplined students. Coaching is available in Dehradun and Haldwani. Mountain regions (Uttarkashi, Chamoli, Pithoragarh) have virtually no coaching infrastructure. Online coaching is essential for these areas.',
        nearbyPremierInstitutes: [
            'IIT Roorkee',
            'AIIMS Rishikesh',
            'NIT Uttarakhand'
        ],
        regionalChallenge: 'Uttarakhand\'s mountainous terrain creates connectivity and infrastructure challenges. Winter conditions in higher-altitude areas can disrupt education. However, the state\'s serene environment is conducive to focused study when coaching access is available.',
        careerEcosystem: 'IIT Roorkee graduates command ₹20-50+ LPA packages. Dehradun\'s IT sector (IT Park) is growing. AIIMS Rishikesh offers world-class medical training. The state\'s tourism and hospitality sector creates additional career paths.'
    }
};
function getStateEducation(state) {
    return stateEducationData[state];
}
function getAvailableStates() {
    return Object.keys(stateEducationData);
}
}),
"[project]/src/data/subjectCityData.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildSubjectCityPage",
    ()=>buildSubjectCityPage,
    "getAllSubjectCitySlugs",
    ()=>getAllSubjectCitySlugs,
    "getSubjectCityCount",
    ()=>getSubjectCityCount,
    "parseSubjectCitySlug",
    ()=>parseSubjectCitySlug
]);
/**
 * Subject-City Data — Template generators for ~3,600+ subject-city pages
 * Route: /{exam}-{subject}-coaching-in-{city}
 * Example: /jee-physics-coaching-in-jaipur
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cityData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/cityData.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapterData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/chapterData.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stateEducationData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/stateEducationData.ts [app-rsc] (ecmascript)");
;
;
;
/* ═══ Subject definitions ═══ */ const JEE_SUBJECTS = [
    {
        subject: 'physics',
        subjectLabel: 'Physics'
    },
    {
        subject: 'chemistry',
        subjectLabel: 'Chemistry'
    },
    {
        subject: 'mathematics',
        subjectLabel: 'Mathematics'
    }
];
const NEET_SUBJECTS = [
    {
        subject: 'physics',
        subjectLabel: 'Physics'
    },
    {
        subject: 'chemistry',
        subjectLabel: 'Chemistry'
    },
    {
        subject: 'biology',
        subjectLabel: 'Biology'
    }
];
/* ═══ Subject-specific exam data ═══ */ const SUBJECT_WEIGHTAGE = {
    jee: {
        physics: [
            {
                chapter: 'Mechanics',
                weightage: '25-30%',
                difficulty: 'Hard',
                avgQuestions: '7-8'
            },
            {
                chapter: 'Electrodynamics',
                weightage: '20-25%',
                difficulty: 'Hard',
                avgQuestions: '6-7'
            },
            {
                chapter: 'Optics & Modern Physics',
                weightage: '15-18%',
                difficulty: 'Medium',
                avgQuestions: '4-5'
            },
            {
                chapter: 'Thermodynamics & Waves',
                weightage: '12-15%',
                difficulty: 'Medium',
                avgQuestions: '3-4'
            },
            {
                chapter: 'Magnetism & EMI',
                weightage: '10-12%',
                difficulty: 'Medium',
                avgQuestions: '3'
            },
            {
                chapter: 'Semiconductor & Communication',
                weightage: '5-8%',
                difficulty: 'Easy',
                avgQuestions: '2'
            }
        ],
        chemistry: [
            {
                chapter: 'Physical Chemistry',
                weightage: '30-35%',
                difficulty: 'Medium',
                avgQuestions: '8-10'
            },
            {
                chapter: 'Organic Chemistry',
                weightage: '30-35%',
                difficulty: 'Hard',
                avgQuestions: '8-10'
            },
            {
                chapter: 'Inorganic Chemistry',
                weightage: '25-30%',
                difficulty: 'Easy-Medium',
                avgQuestions: '7-8'
            },
            {
                chapter: 'Coordination Chemistry',
                weightage: '5-8%',
                difficulty: 'Medium',
                avgQuestions: '2-3'
            },
            {
                chapter: 'Environmental Chemistry',
                weightage: '2-3%',
                difficulty: 'Easy',
                avgQuestions: '1'
            }
        ],
        mathematics: [
            {
                chapter: 'Calculus',
                weightage: '25-30%',
                difficulty: 'Hard',
                avgQuestions: '7-8'
            },
            {
                chapter: 'Algebra',
                weightage: '20-25%',
                difficulty: 'Medium-Hard',
                avgQuestions: '6-7'
            },
            {
                chapter: 'Coordinate Geometry',
                weightage: '15-20%',
                difficulty: 'Medium',
                avgQuestions: '4-5'
            },
            {
                chapter: 'Trigonometry',
                weightage: '8-10%',
                difficulty: 'Medium',
                avgQuestions: '2-3'
            },
            {
                chapter: 'Vectors & 3D',
                weightage: '8-10%',
                difficulty: 'Medium',
                avgQuestions: '2-3'
            },
            {
                chapter: 'Probability & Statistics',
                weightage: '8-10%',
                difficulty: 'Easy-Medium',
                avgQuestions: '2-3'
            }
        ]
    },
    neet: {
        physics: [
            {
                chapter: 'Mechanics',
                weightage: '25-28%',
                difficulty: 'Medium-Hard',
                avgQuestions: '12-14'
            },
            {
                chapter: 'Electrodynamics',
                weightage: '18-22%',
                difficulty: 'Medium',
                avgQuestions: '9-11'
            },
            {
                chapter: 'Optics & Modern Physics',
                weightage: '15-18%',
                difficulty: 'Medium',
                avgQuestions: '7-9'
            },
            {
                chapter: 'Heat & Thermodynamics',
                weightage: '10-12%',
                difficulty: 'Medium',
                avgQuestions: '5-6'
            },
            {
                chapter: 'Waves & Oscillations',
                weightage: '8-10%',
                difficulty: 'Easy-Medium',
                avgQuestions: '4-5'
            },
            {
                chapter: 'Magnetism',
                weightage: '8-10%',
                difficulty: 'Easy',
                avgQuestions: '4-5'
            }
        ],
        chemistry: [
            {
                chapter: 'Physical Chemistry',
                weightage: '25-30%',
                difficulty: 'Medium',
                avgQuestions: '8-10'
            },
            {
                chapter: 'Organic Chemistry',
                weightage: '30-35%',
                difficulty: 'Medium-Hard',
                avgQuestions: '10-12'
            },
            {
                chapter: 'Inorganic Chemistry',
                weightage: '30-35%',
                difficulty: 'Easy-Medium',
                avgQuestions: '10-12'
            },
            {
                chapter: 'Biomolecules & Polymers',
                weightage: '5-8%',
                difficulty: 'Easy',
                avgQuestions: '2-3'
            }
        ],
        biology: [
            {
                chapter: 'Human Physiology',
                weightage: '18-20%',
                difficulty: 'Medium',
                avgQuestions: '16-18'
            },
            {
                chapter: 'Genetics & Evolution',
                weightage: '15-18%',
                difficulty: 'Hard',
                avgQuestions: '14-16'
            },
            {
                chapter: 'Plant Physiology',
                weightage: '10-12%',
                difficulty: 'Medium',
                avgQuestions: '9-11'
            },
            {
                chapter: 'Ecology & Environment',
                weightage: '10-12%',
                difficulty: 'Easy',
                avgQuestions: '9-11'
            },
            {
                chapter: 'Cell Biology & Biomolecules',
                weightage: '8-10%',
                difficulty: 'Medium',
                avgQuestions: '7-9'
            },
            {
                chapter: 'Diversity in Living World',
                weightage: '8-10%',
                difficulty: 'Easy-Medium',
                avgQuestions: '7-9'
            },
            {
                chapter: 'Reproduction',
                weightage: '8-10%',
                difficulty: 'Medium',
                avgQuestions: '7-9'
            },
            {
                chapter: 'Biotechnology',
                weightage: '5-8%',
                difficulty: 'Medium',
                avgQuestions: '4-7'
            }
        ]
    }
};
function getSubjectChapters(exam, subject) {
    const examUpper = exam.toUpperCase();
    const subjectLower = subject.toLowerCase();
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapterData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["chapters"].filter((c)=>c.exam === examUpper && c.subject.toLowerCase().includes(subjectLower)).slice(0, 8);
}
function buildChapterPlan(exam, subject, _city) {
    const subjectChapters = getSubjectChapters(exam, subject);
    const priorities = [
        'High',
        'High',
        'High',
        'Medium',
        'Medium',
        'Medium',
        'Low',
        'Low'
    ];
    const tips = [
        'Start with NCERT concepts, then solve PYQs',
        'Focus on numerical problem-solving speed',
        'Master derivations and conceptual applications',
        'Practice diagram-based questions daily',
        'Create formula sheets for quick revision',
        'Solve at least 30 MCQs daily from this chapter',
        'Use MindPeak\'s adaptive tests to identify gaps',
        'Review common mistakes from mock test analysis'
    ];
    return subjectChapters.map((ch, i)=>({
            chapter: ch.chapter,
            weeks: `${Math.ceil((i + 1) * 1.5)}-${Math.ceil((i + 1) * 1.5) + 1}`,
            priority: priorities[i] || 'Low',
            tip: tips[i] || 'Practice consistently with timed tests',
            slug: ch.slug
        }));
}
function buildCommonMistakes(subject) {
    const mistakes = {
        physics: [
            'Not drawing free body diagrams before solving mechanics problems',
            'Confusing sign conventions in optics and electrostatics',
            'Skipping dimensional analysis — it can validate 30% of answers',
            'Memorizing formulas without understanding derivations',
            'Ignoring units in final answers — costs marks in JEE',
            'Rushing through comprehension-based questions'
        ],
        chemistry: [
            'Not balancing equations before solving stoichiometry problems',
            'Confusing electrophilic and nucleophilic reactions in organic chemistry',
            'Memorizing inorganic chemistry without understanding periodic trends',
            'Ignoring NCERT for inorganic — 80% questions are NCERT-direct',
            'Not practising named reactions enough for organic chemistry',
            'Skipping environmental chemistry — easy 4-8 marks'
        ],
        mathematics: [
            'Not checking domain restrictions in functions and trigonometry',
            'Calculation errors in integration — always verify by differentiation',
            'Ignoring geometric interpretations of calculus problems',
            'Not practising enough coordinate geometry — highly scoring',
            'Rushing through probability — read questions twice',
            'Forgetting to check boundary conditions in optimization'
        ],
        biology: [
            'Not reading NCERT line-by-line — 85% NEET Biology is NCERT-direct',
            'Ignoring diagram labeling practice — costs 8-12 marks',
            'Confusing similar biological terms and processes',
            'Not memorizing classification tables systematically',
            'Skipping ecology — easiest 6-8 marks in NEET',
            'Not practising assertion-reason questions enough'
        ]
    };
    return mistakes[subject] || mistakes.physics;
}
function buildFAQs(config) {
    const { exam, subjectLabel, city } = config;
    const examLabel = exam === 'jee' ? 'JEE' : 'NEET';
    return [
        {
            q: `Is online ${examLabel} ${subjectLabel} coaching effective for ${city.city} students?`,
            a: `Yes. MindPeak's 1-on-1 ${subjectLabel} coaching delivers personalised attention that batch centres in ${city.city} cannot match. Our ${subjectLabel} mentors adapt teaching pace to each student's comprehension, resulting in 100-150+ marks improvement within 3 months.`
        },
        {
            q: `What is the ${examLabel} ${subjectLabel} syllabus weightage?`,
            a: `${subjectLabel} carries approximately 33% weightage in ${examLabel}. Key chapters include ${SUBJECT_WEIGHTAGE[exam]?.[config.subject]?.slice(0, 3).map((w)=>w.chapter).join(', ') || 'core topics'}. MindPeak's ${city.city} mentors prioritise high-weightage chapters first.`
        },
        {
            q: `How many hours should I study ${subjectLabel} daily for ${examLabel}?`,
            a: `We recommend 2-3 hours of focused ${subjectLabel} study daily for ${examLabel} preparation. This includes 1-1.5 hours of concept learning with your MindPeak mentor and 1-1.5 hours of self-practice with targeted problems. ${city.city} students following this schedule see consistent improvement.`
        },
        {
            q: `Can I join ${subjectLabel} coaching mid-year from ${city.city}?`,
            a: `Absolutely. MindPeak's 1-on-1 format has no batch constraints. ${city.city} students can join anytime — we assess your current ${subjectLabel} level and create a customised catch-up plan.`
        },
        {
            q: `What books should I use for ${examLabel} ${subjectLabel} along with MindPeak coaching?`,
            a: `Your MindPeak mentor will recommend subject-specific books based on your level. Generally: NCERT (foundation), then HC Verma/Irodov for Physics, MS Chauhan/Himanshu Pandey for Chemistry, or Trueman's for Biology. ${city.city} students get curated study material from mentors.`
        },
        {
            q: `Does MindPeak provide ${subjectLabel} formula sheets and study material?`,
            a: `Yes. Every ${city.city} student receives comprehensive ${subjectLabel} formula sheets, chapter-wise notes, PYQ compilations, and curated problem sets — all included in the coaching fee. Digital and printable formats available.`
        }
    ];
}
function buildBacklinks(config) {
    const { exam, subject, subjectLabel, city } = config;
    const examLabel = exam === 'jee' ? 'JEE' : 'NEET';
    const links = [
        {
            label: `${examLabel} Coaching in ${city.city}`,
            href: `/${exam}-coaching-in-${city.slug}`
        },
        {
            label: `${examLabel} ${subjectLabel} Coaching`,
            href: `/${exam}-${subject}-coaching`
        },
        {
            label: `${examLabel} Practice Questions`,
            href: `/${exam}-practice`
        },
        {
            label: `${examLabel} Previous Year Questions`,
            href: `/${exam}-pyq`
        }
    ];
    // Add formula sheet link
    const formulaSubj = subject === 'mathematics' ? 'maths' : subject;
    links.push({
        label: `${examLabel} ${subjectLabel} Formulas`,
        href: `/${exam}-${formulaSubj}-formulas`
    });
    // Add chapter links (top 5)
    const subjectChapters = getSubjectChapters(exam, subject).slice(0, 5);
    for (const ch of subjectChapters){
        links.push({
            label: ch.chapter,
            href: `/${ch.slug}`
        });
    }
    return links;
}
function buildSubjectCityPage(config) {
    const { exam, subject, subjectLabel, city } = config;
    const examLabel = exam === 'jee' ? 'JEE' : 'NEET';
    const examFull = exam === 'jee' ? 'JEE Main & Advanced' : 'NEET UG';
    const cityAny = city;
    const stateExamStr = cityAny.stateExam ? ` Our mentors also cover ${cityAny.stateExam} ${subjectLabel} alongside ${examLabel}.` : '';
    const langStr = cityAny.language ? ` ${cityAny.language}-medium concept explanations available.` : '';
    const slug = `${exam}-${subject}-coaching-in-${city.slug}`;
    // State-specific unique data
    const stateData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stateEducationData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStateEducation"])(city.state);
    const collegeTargets = exam === 'jee' ? stateData?.topEnggColleges?.slice(0, 3).map((c)=>`${c.name} (${c.cutoff})`).join(', ') || 'IITs, NITs' : stateData?.topMedColleges?.slice(0, 3).map((c)=>`${c.name} (${c.cutoff})`).join(', ') || 'top medical colleges';
    const boardChallenge = stateData?.boardTransitionChallenges?.split('.').slice(0, 2).join('.') || '';
    const competitionFact = stateData?.competitionContext?.split('.').slice(0, 2).join('.') || '';
    const careerInfo = stateData?.careerEcosystem?.split('.').slice(0, 2).join('.') || '';
    const stateExamDetail = stateData?.stateExamDetails ? ` ${stateData.stateExamDetails.name} offers ${stateData.stateExamDetails.seats} with ${stateData.stateExamDetails.overlapWithNational}.` : '';
    return {
        slug,
        exam,
        subject,
        subjectLabel,
        city,
        title: `Best ${examLabel} ${subjectLabel} Coaching in ${city.city} — 1-on-1 | MindPeak`,
        description: `Top ${examLabel} ${subjectLabel} coaching in ${city.city} with expert 1-on-1 mentors. Chapter-wise preparation, weightage analysis & personalised study plans. Target colleges: ${collegeTargets}.`,
        heroHeadline: `Master ${examLabel} ${subjectLabel} from ${city.city} — Expert 1-on-1 Mentors`,
        heroSubtext: `Personalised ${examFull} ${subjectLabel} coaching for ${city.city} students targeting ${collegeTargets}. Daily practice sessions and dedicated mentor support.`,
        introText: `MindPeak Institute offers ${city.city} students specialised 1-on-1 ${subjectLabel} coaching for ${examFull}. ${subjectLabel} carries significant weightage and requires both conceptual clarity and problem-solving speed. ${boardChallenge ? boardChallenge + '.' : ''} ${competitionFact ? competitionFact + '.' : ''} Our expert ${subjectLabel} mentors understand ${city.state}'s academic ecosystem and create personalised chapter-wise preparation roadmaps.${stateExamStr}${stateExamDetail}${langStr} Unlike batch coaching centres where ${subjectLabel} is taught in 60-100 student classrooms, MindPeak's dedicated mentors focus exclusively on your learning gaps, building from foundational concepts to advanced problem-solving at your pace. ${careerInfo ? 'Career targets for ' + city.city + ' students: ' + careerInfo + '.' : ''}`,
        weightageTable: SUBJECT_WEIGHTAGE[exam]?.[subject] || [],
        chapterPlan: buildChapterPlan(exam, subject, city),
        whyThisSubject: `${subjectLabel} in ${examLabel} demands a unique combination of conceptual understanding, mathematical application, and problem-solving intuition. ${city.city} students preparing for ${examLabel} ${subjectLabel} need structured chapter-wise preparation that traditional batch coaching rarely provides. At MindPeak, your dedicated ${subjectLabel} mentor creates a personalised preparation calendar — allocating more time to high-weightage chapters like ${SUBJECT_WEIGHTAGE[exam]?.[subject]?.slice(0, 2).map((w)=>w.chapter).join(' and ') || 'core topics'}, while ensuring comprehensive coverage. Daily 1-on-1 sessions allow real-time doubt resolution, concept reinforcement through worked examples, and progressive difficulty building that matches your comprehension pace. ${city.city} families choosing MindPeak for ${subjectLabel} coaching consistently report that their children develop genuine subject mastery — not just exam-cracking techniques.`,
        studyStrategy: `**Phase 1 (Months 1-3): Foundation Building** — NCERT-first approach. Complete all ${subjectLabel} NCERT chapters with solved examples. Daily 20-question practice at basic level. Weekly concept tests.\n\n**Phase 2 (Months 4-7): Advanced Problem Solving** — Move to reference books and PYQ practice. Your MindPeak mentor assigns chapter-wise problem sets calibrated to your improving level. Timed practice begins.\n\n**Phase 3 (Months 8-10): Mock Tests & Analysis** — Full-length mock tests every week. Detailed post-test analysis with mentor. Error pattern identification and targeted revision.\n\n**Phase 4 (Months 11-12): Revision & Exam Strategy** — Formula sheet revision, high-yield chapter focus, exam-day strategy rehearsal. Light practice only in final 2 weeks.`,
        commonMistakes: buildCommonMistakes(subject),
        faqs: buildFAQs(config),
        backlinks: buildBacklinks(config)
    };
}
function parseSubjectCitySlug(slug) {
    const match = slug.match(/^(jee|neet)-(physics|chemistry|mathematics|biology)-coaching-in-(.+)$/);
    if (!match) return null;
    const [, exam, subject, citySlug] = match;
    const city = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cityData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["allCities"].find((c)=>c.slug === citySlug);
    if (!city) return null;
    const subjectDefs = exam === 'jee' ? JEE_SUBJECTS : NEET_SUBJECTS;
    const subjectDef = subjectDefs.find((s)=>s.subject === subject);
    if (!subjectDef) return null;
    return {
        exam: exam,
        subject,
        subjectLabel: subjectDef.subjectLabel,
        city
    };
}
function getAllSubjectCitySlugs() {
    const slugs = [];
    for (const city of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cityData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["allCities"]){
        for (const exam of city.exams){
            const subjects = exam === 'jee' ? JEE_SUBJECTS : NEET_SUBJECTS;
            for (const subj of subjects){
                slugs.push(`${exam}-${subj.subject}-coaching-in-${city.slug}`);
            }
        }
    }
    return slugs;
}
function getSubjectCityCount() {
    let count = 0;
    for (const city of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cityData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["allCities"]){
        for (const exam of city.exams){
            count += exam === 'jee' ? 3 : 3;
        }
    }
    return count;
}
}),
"[project]/src/data/examInfoData.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllExamInfoPages",
    ()=>getAllExamInfoPages,
    "getAllExamInfoSlugs",
    ()=>getAllExamInfoSlugs,
    "getExamInfoPage",
    ()=>getExamInfoPage
]);
/**
 * Exam Info Hub Data — ~30 high-volume pages
 * Covers: syllabus, exam pattern, cutoff, eligibility, dates, admit card, answer key, result, registration, counselling
 * Year auto-updates via CURRENT_EXAM_YEAR
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/examYears.ts [app-rsc] (ecmascript)");
;
const Y = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"];
function jeeMainSyllabus() {
    return {
        slug: `jee-main-syllabus-${Y}`,
        title: `JEE Main Syllabus ${Y} — Complete Subject-wise Syllabus PDF [Latest NTA]`,
        description: `Download JEE Main ${Y} syllabus. Complete Physics, Chemistry & Maths chapter list with weightage, deleted topics & preparation tips. Updated per NTA notification.`,
        h1: `JEE Main Syllabus`,
        highlight: `${Y}`,
        heroSubtitle: `Complete NTA-approved JEE Main ${Y} syllabus with subject-wise chapter list, weightage analysis & deleted topics. Use this as your preparation blueprint.`,
        exam: 'JEE',
        category: 'syllabus',
        sections: [
            {
                heading: `JEE Main ${Y} Physics Syllabus`,
                content: `The Physics syllabus for JEE Main ${Y} covers 20 chapters from Class 11 and Class 12 NCERT. Mechanics and Electrodynamics carry the highest weightage (~35-40% combined).`,
                table: {
                    headers: [
                        'Unit',
                        'Chapters',
                        'Weightage',
                        'Difficulty'
                    ],
                    rows: [
                        [
                            'Mechanics',
                            'Kinematics, Laws of Motion, Work-Energy-Power, Rotational Motion, Gravitation',
                            '~18%',
                            'Moderate-Hard'
                        ],
                        [
                            'Electrodynamics',
                            'Electrostatics, Current Electricity, EMI, AC',
                            '~16%',
                            'Moderate'
                        ],
                        [
                            'Optics & Modern Physics',
                            'Ray Optics, Wave Optics, Dual Nature, Atoms, Nuclei, Semiconductors',
                            '~15%',
                            'Moderate'
                        ],
                        [
                            'Thermodynamics & Waves',
                            'KTG, Thermodynamics, Oscillations, Waves',
                            '~12%',
                            'Easy-Moderate'
                        ],
                        [
                            'Properties of Matter',
                            'Elasticity, Fluids, Surface Tension, Viscosity',
                            '~6%',
                            'Easy'
                        ],
                        [
                            'Magnetism',
                            'Moving Charges, Magnetism, EMI',
                            '~8%',
                            'Moderate'
                        ]
                    ]
                }
            },
            {
                heading: `JEE Main ${Y} Chemistry Syllabus`,
                content: `Chemistry is divided into Physical, Organic, and Inorganic Chemistry with roughly equal weightage (~33% each). Inorganic Chemistry is the most scoring section.`,
                table: {
                    headers: [
                        'Branch',
                        'Key Chapters',
                        'Weightage',
                        'Scoring Potential'
                    ],
                    rows: [
                        [
                            'Physical Chemistry',
                            'Mole Concept, Thermodynamics, Equilibrium, Electrochemistry, Chemical Kinetics',
                            '~33%',
                            'High (formula-based)'
                        ],
                        [
                            'Organic Chemistry',
                            'GOC, Hydrocarbons, Alcohols, Aldehydes, Amines, Biomolecules',
                            '~33%',
                            'Moderate (concept + practice)'
                        ],
                        [
                            'Inorganic Chemistry',
                            'Periodic Table, Chemical Bonding, Coordination Compounds, p-Block, d-Block',
                            '~33%',
                            'Very High (memory-based)'
                        ]
                    ]
                }
            },
            {
                heading: `JEE Main ${Y} Mathematics Syllabus`,
                content: `Mathematics carries the highest difficulty level. Algebra and Calculus dominate with ~60% combined weightage.`,
                table: {
                    headers: [
                        'Unit',
                        'Chapters',
                        'Weightage',
                        'Difficulty'
                    ],
                    rows: [
                        [
                            'Algebra',
                            'Quadratic Equations, Complex Numbers, Sequences & Series, Matrices, Permutations',
                            '~30%',
                            'Moderate-Hard'
                        ],
                        [
                            'Calculus',
                            'Limits, Continuity, Differentiability, Application of Derivatives, Integrals, Differential Equations',
                            '~30%',
                            'Hard'
                        ],
                        [
                            'Coordinate Geometry',
                            'Straight Lines, Circles, Conics (Parabola, Ellipse, Hyperbola)',
                            '~20%',
                            'Moderate'
                        ],
                        [
                            'Trigonometry & Vectors',
                            'Trigonometric Equations, Inverse Trig, Vector Algebra, 3D Geometry',
                            '~15%',
                            'Moderate'
                        ],
                        [
                            'Statistics & Probability',
                            'Mean, Median, Mode, Probability, Distributions',
                            '~5%',
                            'Easy'
                        ]
                    ]
                }
            },
            {
                heading: `Deleted Topics in JEE Main ${Y}`,
                content: `NTA periodically removes topics from the syllabus. Ensure you study the latest notification to avoid wasting time on deleted chapters. Focus your energy on high-weightage chapters that appear every year.`,
                bullets: [
                    'Check the official NTA website for the latest syllabus notification',
                    'Compare with previous year syllabus to identify changes',
                    'Focus on NCERT + standard reference books for core chapters',
                    'Use MindPeak\'s chapter-wise practice to target high-weightage topics'
                ]
            },
            {
                heading: 'How to Use This Syllabus for Preparation',
                steps: [
                    {
                        title: 'Map the Syllabus',
                        description: 'List all chapters and mark their weightage. Prioritize chapters with >5% weightage.'
                    },
                    {
                        title: 'Create a Study Plan',
                        description: 'Allocate 40% time to high-weightage, 35% to moderate, 25% to low-weightage chapters.'
                    },
                    {
                        title: 'Practice Chapter-wise',
                        description: 'Use MindPeak\'s 2500+ JEE practice questions organized by chapter and difficulty.'
                    },
                    {
                        title: 'Solve PYQs',
                        description: 'After completing each chapter, solve 10 years of PYQs to understand exam patterns.'
                    },
                    {
                        title: 'Revise with Formula Sheets',
                        description: 'Download subject-wise formula sheets for quick revision before mocks.'
                    }
                ]
            }
        ],
        faqs: [
            {
                q: `What is the JEE Main ${Y} syllabus?`,
                a: `JEE Main ${Y} syllabus covers Physics (20 chapters), Chemistry (30 chapters), and Mathematics (23 chapters) from Class 11 and 12 NCERT. NTA releases the official syllabus with the notification.`
            },
            {
                q: `Are there any changes in JEE Main ${Y} syllabus?`,
                a: `NTA may add or remove topics each year. Always check the official notification for the latest ${Y} syllabus.`
            },
            {
                q: 'Which subject has the highest weightage in JEE Main?',
                a: 'All three subjects carry equal marks (100 each, total 300). However, Chemistry is considered the most scoring due to direct NCERT questions.'
            },
            {
                q: 'Is NCERT enough for JEE Main?',
                a: 'NCERT is the foundation, especially for Chemistry. For Physics and Maths, you need additional practice from reference books and PYQs.'
            },
            {
                q: `How to cover the entire JEE Main ${Y} syllabus in 6 months?`,
                a: 'Focus on high-weightage chapters first, study 8-10 hours daily, solve 50+ MCQs per day, and take weekly mock tests. A 1-on-1 mentor can optimize your study plan.'
            }
        ],
        relatedSlugs: [
            `jee-main-exam-pattern-${Y}`,
            `jee-main-cutoff-${Y}`,
            'jee-coaching',
            'jee-practice',
            'jee-pyq'
        ]
    };
}
function jeeAdvSyllabus() {
    return {
        slug: `jee-advanced-syllabus-${Y}`,
        title: `JEE Advanced Syllabus ${Y} — Complete Topic List with Weightage [IIT]`,
        description: `JEE Advanced ${Y} syllabus: Physics, Chemistry & Maths topics with IIT-level weightage. Includes new pattern analysis & preparation roadmap.`,
        h1: `JEE Advanced Syllabus`,
        highlight: `${Y}`,
        heroSubtitle: `Complete IIT JEE Advanced ${Y} syllabus with topic-level analysis. JEE Advanced tests deeper conceptual understanding — master these topics to crack the top 10,000 ranks.`,
        exam: 'JEE',
        category: 'syllabus',
        sections: [
            {
                heading: 'JEE Advanced vs JEE Main Syllabus',
                content: `JEE Advanced ${Y} syllabus is a superset of JEE Main with additional topics like Thermal Physics (detailed), Electrochemistry (advanced), and additional Calculus concepts. The difficulty level is significantly higher with multi-concept, multi-step problems.`,
                table: {
                    headers: [
                        'Aspect',
                        'JEE Main',
                        'JEE Advanced'
                    ],
                    rows: [
                        [
                            'Total Questions',
                            '90 (75 to attempt)',
                            '54-57'
                        ],
                        [
                            'Negative Marking',
                            'Yes (-1)',
                            'Yes (varies by section)'
                        ],
                        [
                            'Difficulty',
                            'Moderate',
                            'High-Very High'
                        ],
                        [
                            'Conceptual Depth',
                            'NCERT-based',
                            'Beyond NCERT'
                        ],
                        [
                            'Question Types',
                            'MCQ only',
                            'MCQ + Integer + Matrix Match'
                        ]
                    ]
                }
            },
            {
                heading: 'Physics Syllabus — Advanced Level',
                content: 'JEE Advanced Physics emphasizes problem-solving with multi-concept questions. Mechanics, Electromagnetism, and Modern Physics carry the highest weightage.',
                bullets: [
                    'Mechanics: Rigid body dynamics, SHM, fluid mechanics (~30%)',
                    'Electromagnetism: Gauss law applications, AC circuits, EM waves (~25%)',
                    'Optics: Wave optics, interference, diffraction (~15%)',
                    'Modern Physics: Photoelectric effect, nuclear physics, X-rays (~15%)',
                    'Thermodynamics: KTG, heat engines, entropy (~15%)'
                ]
            },
            {
                heading: 'Chemistry Syllabus — Advanced Level',
                content: 'JEE Advanced Chemistry requires deeper understanding of reaction mechanisms and bonding theories.',
                bullets: [
                    'Physical: Thermodynamics, Electrochemistry, Chemical Kinetics (~35%)',
                    'Organic: Named reactions, stereochemistry, spectroscopy (~35%)',
                    'Inorganic: Coordination chemistry, metallurgy, qualitative analysis (~30%)'
                ]
            },
            {
                heading: 'Mathematics Syllabus — Advanced Level',
                content: 'Mathematics in JEE Advanced tests creative problem-solving and unconventional approaches.',
                bullets: [
                    'Calculus: Definite integrals, differential equations, area under curves (~35%)',
                    'Algebra: Matrices, complex numbers, number theory (~30%)',
                    'Coordinate Geometry: Conics, locus problems (~20%)',
                    'Vectors & 3D: Vector algebra, planes, lines in 3D (~15%)'
                ]
            }
        ],
        faqs: [
            {
                q: `What is the JEE Advanced ${Y} syllabus?`,
                a: `JEE Advanced ${Y} syllabus covers advanced-level Physics, Chemistry, and Mathematics. It includes all JEE Main topics plus additional topics like fluid dynamics details, electrochemistry (advanced), and complex calculus.`
            },
            {
                q: 'Is JEE Advanced syllabus different from JEE Main?',
                a: 'Yes, JEE Advanced has additional topics and tests deeper conceptual understanding. The question pattern and difficulty are also significantly different.'
            },
            {
                q: 'How many months are needed to prepare for JEE Advanced?',
                a: 'Ideally 12-18 months of dedicated preparation after building a strong JEE Main foundation. With a personal mentor, you can optimize this to 8-10 months.'
            }
        ],
        relatedSlugs: [
            `jee-main-syllabus-${Y}`,
            `jee-advanced-exam-pattern-${Y}`,
            'jee-advanced-coaching',
            'jee-pyq'
        ]
    };
}
function neetSyllabus() {
    return {
        slug: `neet-syllabus-${Y}`,
        title: `NEET ${Y} Syllabus — Complete Biology, Physics, Chemistry Topics [NTA Updated]`,
        description: `Download NEET ${Y} syllabus. Chapter-wise Biology, Physics & Chemistry topics with weightage, deleted topics & NCERT mapping. NTA-approved syllabus.`,
        h1: `NEET Syllabus`,
        highlight: `${Y}`,
        heroSubtitle: `Complete NTA-approved NEET ${Y} syllabus with chapter-wise analysis. Biology carries 50% weightage — use this guide to prioritize your preparation.`,
        exam: 'NEET',
        category: 'syllabus',
        sections: [
            {
                heading: `NEET ${Y} Biology Syllabus (Botany + Zoology)`,
                content: `Biology is the most important subject in NEET with 90 questions (360 marks out of 720). Class 12 chapters carry higher weightage than Class 11.`,
                table: {
                    headers: [
                        'Unit',
                        'Key Chapters',
                        'Questions/Year',
                        'Weightage'
                    ],
                    rows: [
                        [
                            'Human Physiology',
                            'Digestion, Breathing, Body Fluids, Excretion, Locomotion, Neural Control',
                            '12-15',
                            '~16%'
                        ],
                        [
                            'Genetics & Evolution',
                            'Molecular Basis of Inheritance, Principles of Inheritance, Evolution',
                            '10-12',
                            '~14%'
                        ],
                        [
                            'Plant Physiology',
                            'Photosynthesis, Respiration, Plant Growth, Mineral Nutrition',
                            '8-10',
                            '~11%'
                        ],
                        [
                            'Cell Biology',
                            'Cell Structure, Cell Division, Biomolecules',
                            '6-8',
                            '~9%'
                        ],
                        [
                            'Ecology',
                            'Organisms & Environment, Ecosystem, Biodiversity',
                            '6-8',
                            '~9%'
                        ],
                        [
                            'Diversity in Living World',
                            'Classification, Plant Kingdom, Animal Kingdom',
                            '5-7',
                            '~8%'
                        ],
                        [
                            'Reproduction',
                            'Human Reproduction, Reproductive Health, Sexual Reproduction in Plants',
                            '5-7',
                            '~8%'
                        ]
                    ]
                }
            },
            {
                heading: `NEET ${Y} Physics Syllabus`,
                content: 'NEET Physics has 45 questions (180 marks). Mechanics and Electrodynamics together contribute ~50% of Physics questions.',
                table: {
                    headers: [
                        'Unit',
                        'Chapters',
                        'Weightage'
                    ],
                    rows: [
                        [
                            'Mechanics',
                            'Laws of Motion, Work-Energy, Rotational Motion, Gravitation',
                            '~25%'
                        ],
                        [
                            'Electrodynamics',
                            'Electrostatics, Current Electricity, EMI',
                            '~22%'
                        ],
                        [
                            'Optics & Modern Physics',
                            'Ray Optics, Wave Optics, Atoms, Nuclei, Semiconductors',
                            '~20%'
                        ],
                        [
                            'Heat & Thermodynamics',
                            'KTG, Thermodynamics, Heat Transfer',
                            '~15%'
                        ],
                        [
                            'Waves & Oscillations',
                            'SHM, Mechanical Waves, Sound',
                            '~10%'
                        ],
                        [
                            'Properties of Matter',
                            'Elasticity, Fluids, Surface Tension',
                            '~8%'
                        ]
                    ]
                }
            },
            {
                heading: `NEET ${Y} Chemistry Syllabus`,
                content: 'NEET Chemistry has 45 questions (180 marks). It is the bridge subject — easier than Physics but requires more memorization than Biology.',
                table: {
                    headers: [
                        'Branch',
                        'Key Chapters',
                        'Weightage'
                    ],
                    rows: [
                        [
                            'Physical Chemistry',
                            'Chemical Equilibrium, Thermodynamics, Electrochemistry, Solutions',
                            '~30%'
                        ],
                        [
                            'Organic Chemistry',
                            'GOC, Hydrocarbons, Biomolecules, Polymers, Chemistry in Everyday Life',
                            '~35%'
                        ],
                        [
                            'Inorganic Chemistry',
                            'Periodic Table, Chemical Bonding, p-Block, d-Block, Coordination Compounds',
                            '~35%'
                        ]
                    ]
                }
            },
            {
                heading: 'NCERT Alignment',
                content: 'NEET questions are directly based on NCERT textbooks. Over 85% of Biology questions and 70% of Chemistry questions can be answered using NCERT alone. Thoroughly reading NCERT line-by-line is the single most effective preparation strategy.',
                bullets: [
                    'Read NCERT Biology line-by-line — every example, diagram, and footnote',
                    'For Chemistry, master NCERT + solve NEET PYQs for pattern recognition',
                    'For Physics, NCERT provides the foundation; practice numerical problems from additional books',
                    'Highlight and annotate your NCERT — these become your revision notes'
                ]
            }
        ],
        faqs: [
            {
                q: `What is the NEET ${Y} syllabus?`,
                a: `NEET ${Y} syllabus covers Biology (Botany & Zoology), Physics, and Chemistry from Class 11 and 12 NCERT. Biology carries 50% weightage (90 questions), while Physics and Chemistry carry 25% each (45 questions each).`
            },
            {
                q: 'Is NCERT enough for NEET?',
                a: 'For Biology, NCERT is sufficient for 85% of questions. For Chemistry, NCERT covers ~70%. For Physics, you need additional practice books alongside NCERT.'
            },
            {
                q: 'Which chapters are most important for NEET?',
                a: 'Human Physiology, Genetics & Evolution, and Plant Physiology are the highest-weightage Biology chapters. Electrodynamics and Mechanics dominate Physics. Physical and Organic Chemistry are key for Chemistry.'
            }
        ],
        relatedSlugs: [
            `neet-exam-pattern-${Y}`,
            `neet-cutoff-${Y}`,
            'neet-coaching',
            'neet-practice',
            'neet-pyq'
        ]
    };
}
function jeeMainExamPattern() {
    return {
        slug: `jee-main-exam-pattern-${Y}`,
        title: `JEE Main ${Y} Exam Pattern — Marking Scheme, Total Questions & Time [NTA]`,
        description: `JEE Main ${Y} exam pattern: total questions, marks distribution, negative marking, section-wise time, and strategic tips. Complete NTA pattern analysis.`,
        h1: `JEE Main Exam Pattern`,
        highlight: `${Y}`,
        heroSubtitle: `Understand the JEE Main ${Y} exam structure — question types, marking scheme, and time management strategy to maximize your score.`,
        exam: 'JEE',
        category: 'exam-pattern',
        sections: [
            {
                heading: 'JEE Main Paper Structure',
                table: {
                    headers: [
                        'Parameter',
                        'Details'
                    ],
                    rows: [
                        [
                            'Total Questions',
                            '90 (75 to attempt)'
                        ],
                        [
                            'Total Marks',
                            '300'
                        ],
                        [
                            'Duration',
                            '3 hours'
                        ],
                        [
                            'Sections',
                            'Physics, Chemistry, Mathematics'
                        ],
                        [
                            'Questions per Section',
                            '30 (25 to attempt: 20 MCQ + 10 Numerical, attempt 5)'
                        ],
                        [
                            'MCQ Marking',
                            '+4 for correct, -1 for wrong'
                        ],
                        [
                            'Numerical Marking',
                            '+4 for correct, 0 for wrong'
                        ],
                        [
                            'Mode',
                            'Computer-Based Test (CBT)'
                        ],
                        [
                            'Sessions',
                            'Session 1 (Jan) & Session 2 (Apr)'
                        ],
                        [
                            'Best Score',
                            'Best of two sessions considered'
                        ]
                    ]
                }
            },
            {
                heading: 'Subject-wise Time Allocation Strategy',
                content: 'With 3 hours for 75 questions, you have ~2.4 minutes per question. Strategic time allocation is crucial.',
                table: {
                    headers: [
                        'Subject',
                        'Recommended Time',
                        'Questions',
                        'Strategy'
                    ],
                    rows: [
                        [
                            'Chemistry',
                            '45-50 min',
                            '25',
                            'Attempt first — fastest to solve, highest accuracy'
                        ],
                        [
                            'Mathematics',
                            '65-70 min',
                            '25',
                            'Attempt second — needs most time for calculations'
                        ],
                        [
                            'Physics',
                            '55-60 min',
                            '25',
                            'Attempt last — moderate time, concept-heavy'
                        ]
                    ]
                }
            },
            {
                heading: 'Scoring Strategy for 250+',
                content: 'To score 250+ in JEE Main, you need ~60 correct answers out of 75 attempted. Here\'s the chapter-wise approach:',
                steps: [
                    {
                        title: 'Master 15 High-Yield Chapters',
                        description: 'These chapters contribute 60% of questions. Focus on Mechanics, Electrostatics, Mole Concept, Organic Chemistry basics, Algebra, and Calculus.'
                    },
                    {
                        title: 'Perfect Chemistry First',
                        description: 'Chemistry is the fastest to improve. NCERT + PYQs can guarantee 80+ in Chemistry within 2 months.'
                    },
                    {
                        title: 'Practice 50 Numerical Questions Daily',
                        description: 'Numerical-type questions have no negative marking — these are free marks if you practice enough.'
                    },
                    {
                        title: 'Take Weekly Full-Length Mocks',
                        description: 'Simulate exam conditions every Sunday. Analyze mistakes and weak areas after each mock.'
                    }
                ]
            }
        ],
        faqs: [
            {
                q: `What is the JEE Main ${Y} exam pattern?`,
                a: `JEE Main ${Y} has 90 questions (75 to attempt) across Physics, Chemistry, and Mathematics for 300 marks in 3 hours. Each section has 20 MCQs (+4/-1) and 10 Numerical (+4/0, attempt 5).`
            },
            {
                q: 'Is there negative marking in JEE Main?',
                a: 'Yes, -1 for wrong MCQ answers. Numerical-type questions have no negative marking.'
            },
            {
                q: 'How many sessions does JEE Main have?',
                a: `JEE Main ${Y} will have 2 sessions (January and April). The best score from both sessions is considered for ranking.`
            }
        ],
        relatedSlugs: [
            `jee-main-syllabus-${Y}`,
            `jee-main-cutoff-${Y}`,
            `jee-main-important-dates-${Y}`,
            'jee-coaching'
        ]
    };
}
function jeeAdvExamPattern() {
    return {
        slug: `jee-advanced-exam-pattern-${Y}`,
        title: `JEE Advanced ${Y} Exam Pattern — Paper 1 & 2, Question Types [IIT]`,
        description: `JEE Advanced ${Y} exam pattern: Paper 1 & 2 structure, question types (MCQ, Integer, Matrix Match), marking scheme & time strategy for IIT selection.`,
        h1: `JEE Advanced Exam Pattern`,
        highlight: `${Y}`,
        heroSubtitle: `JEE Advanced ${Y} has two papers of 3 hours each. Understanding the unique question types and marking scheme is critical for IIT selection.`,
        exam: 'JEE',
        category: 'exam-pattern',
        sections: [
            {
                heading: 'Paper Structure',
                table: {
                    headers: [
                        'Parameter',
                        'Paper 1',
                        'Paper 2'
                    ],
                    rows: [
                        [
                            'Duration',
                            '3 hours',
                            '3 hours'
                        ],
                        [
                            'Sections',
                            'Physics, Chemistry, Maths',
                            'Physics, Chemistry, Maths'
                        ],
                        [
                            'Question Types',
                            'MCQ (single/multi), Integer, Paragraph',
                            'MCQ (single/multi), Integer, Matrix Match'
                        ],
                        [
                            'Total Marks',
                            '~180',
                            '~180'
                        ],
                        [
                            'Negative Marking',
                            'Varies by section',
                            'Varies by section'
                        ]
                    ]
                }
            },
            {
                heading: 'Question Types Explained',
                bullets: [
                    'Single Correct MCQ: Standard 4-option MCQ (+3, -1)',
                    'Multi-Correct MCQ: 1-4 correct options, partial marking available',
                    'Integer Type: Answer is a single-digit integer (0-9), no negative marking',
                    'Matrix Match: Match items from Column 1 to Column 2',
                    'Paragraph Based: Read passage and answer 2-3 linked questions'
                ]
            },
            {
                heading: 'Key Differences from JEE Main',
                content: 'JEE Advanced tests deeper understanding and problem-solving ability. Questions often combine concepts from multiple chapters.',
                bullets: [
                    'Multi-concept problems are standard (e.g., Mechanics + Thermodynamics)',
                    'Lengthy calculations are common — speed and accuracy both matter',
                    'Partial marking in multi-correct questions rewards partial knowledge',
                    'No choice in questions — all questions are compulsory in each section'
                ]
            }
        ],
        faqs: [
            {
                q: `What is the JEE Advanced ${Y} exam pattern?`,
                a: `JEE Advanced ${Y} consists of 2 papers of 3 hours each, with Physics, Chemistry, and Mathematics. Question types include MCQ (single/multi correct), Integer type, and Matrix Match.`
            },
            {
                q: 'How is JEE Advanced different from JEE Main?',
                a: 'JEE Advanced has more diverse question types, deeper conceptual problems, and multi-concept questions. Both Paper 1 and Paper 2 scores are combined for the final rank.'
            }
        ],
        relatedSlugs: [
            `jee-advanced-syllabus-${Y}`,
            `jee-advanced-cutoff-${Y}`,
            'jee-advanced-coaching',
            'jee-pyq'
        ]
    };
}
function neetExamPattern() {
    return {
        slug: `neet-exam-pattern-${Y}`,
        title: `NEET ${Y} Exam Pattern — Marking Scheme, Total Questions & Sections [NTA]`,
        description: `NEET ${Y} exam pattern: 200 questions, 720 marks, section-wise distribution, marking scheme & time management tips. Complete NTA pattern guide.`,
        h1: `NEET Exam Pattern`,
        highlight: `${Y}`,
        heroSubtitle: `Understand the NEET ${Y} exam structure — 200 questions for 720 marks across Biology, Physics, and Chemistry with strategic section analysis.`,
        exam: 'NEET',
        category: 'exam-pattern',
        sections: [
            {
                heading: 'NEET Paper Structure',
                table: {
                    headers: [
                        'Parameter',
                        'Details'
                    ],
                    rows: [
                        [
                            'Total Questions',
                            '200 (180 to attempt)'
                        ],
                        [
                            'Total Marks',
                            '720'
                        ],
                        [
                            'Duration',
                            '3 hours 20 minutes'
                        ],
                        [
                            'Sections',
                            'Physics (A+B), Chemistry (A+B), Botany (A+B), Zoology (A+B)'
                        ],
                        [
                            'Section A',
                            '35 MCQs (all compulsory) per subject'
                        ],
                        [
                            'Section B',
                            '15 MCQs (attempt 10) per subject'
                        ],
                        [
                            'Marking',
                            '+4 correct, -1 wrong'
                        ],
                        [
                            'Mode',
                            'Pen and Paper (OMR-based)'
                        ],
                        [
                            'Medium',
                            'English, Hindi + 11 regional languages'
                        ]
                    ]
                }
            },
            {
                heading: 'Subject-wise Marks Distribution',
                table: {
                    headers: [
                        'Subject',
                        'Questions',
                        'Marks',
                        'Weightage'
                    ],
                    rows: [
                        [
                            'Botany',
                            '50 (45 to attempt)',
                            '180',
                            '25%'
                        ],
                        [
                            'Zoology',
                            '50 (45 to attempt)',
                            '180',
                            '25%'
                        ],
                        [
                            'Physics',
                            '50 (45 to attempt)',
                            '180',
                            '25%'
                        ],
                        [
                            'Chemistry',
                            '50 (45 to attempt)',
                            '180',
                            '25%'
                        ]
                    ]
                }
            },
            {
                heading: 'Time Management Strategy',
                content: 'With 200 minutes for 180 questions, you get ~67 seconds per question.',
                steps: [
                    {
                        title: 'Biology First (70 min)',
                        description: 'Attempt all 90 Biology questions first — fastest to solve and highest accuracy.'
                    },
                    {
                        title: 'Chemistry Next (50 min)',
                        description: 'Inorganic and Organic questions can be answered quickly from NCERT recall.'
                    },
                    {
                        title: 'Physics Last (60 min)',
                        description: 'Physics requires calculations — allocate remaining time here.'
                    },
                    {
                        title: 'Review (20 min)',
                        description: 'Use remaining time to review marked/unsure answers.'
                    }
                ]
            }
        ],
        faqs: [
            {
                q: `What is the NEET ${Y} exam pattern?`,
                a: `NEET ${Y} has 200 questions (180 to attempt) for 720 marks in 3 hours 20 minutes. Each of 4 subjects (Botany, Zoology, Physics, Chemistry) has Section A (35 compulsory) and Section B (15, attempt 10).`
            },
            {
                q: 'Is there negative marking in NEET?',
                a: 'Yes, -1 mark for each wrong answer and +4 for correct answers.'
            }
        ],
        relatedSlugs: [
            `neet-syllabus-${Y}`,
            `neet-cutoff-${Y}`,
            'neet-coaching',
            'neet-practice'
        ]
    };
}
function buildCutoffPage(exam) {
    const isJEE = exam.startsWith('jee');
    const examLabel = exam === 'jee-main' ? 'JEE Main' : exam === 'jee-advanced' ? 'JEE Advanced' : 'NEET';
    const cutoffData = exam === 'jee-main' ? {
        headers: [
            'Category',
            `${Y - 1} Cutoff`,
            `${Y - 2} Cutoff`,
            'Trend'
        ],
        rows: [
            [
                'General',
                '93.2 percentile',
                '90.8 percentile',
                '↑ Rising'
            ],
            [
                'OBC-NCL',
                '78.5 percentile',
                '75.2 percentile',
                '↑ Rising'
            ],
            [
                'SC',
                '55.3 percentile',
                '52.1 percentile',
                'Stable'
            ],
            [
                'ST',
                '44.2 percentile',
                '40.8 percentile',
                'Stable'
            ],
            [
                'EWS',
                '82.1 percentile',
                '78.8 percentile',
                '↑ Rising'
            ],
            [
                'PwD',
                '0.1 percentile',
                '0.1 percentile',
                'Stable'
            ]
        ]
    } : exam === 'jee-advanced' ? {
        headers: [
            'Category',
            `${Y - 1} Cutoff (Marks/360)`,
            `${Y - 2} Cutoff`,
            'Min Aggregate'
        ],
        rows: [
            [
                'General',
                '108',
                '101',
                '30%'
            ],
            [
                'OBC-NCL',
                '97',
                '91',
                '27%'
            ],
            [
                'SC',
                '54',
                '51',
                '15%'
            ],
            [
                'ST',
                '54',
                '51',
                '15%'
            ],
            [
                'EWS',
                '97',
                '91',
                '27%'
            ],
            [
                'PwD',
                '54',
                '51',
                '15%'
            ]
        ]
    } : {
        headers: [
            'Category',
            `${Y - 1} Cutoff (Marks/720)`,
            `${Y - 2} Cutoff`,
            'Trend'
        ],
        rows: [
            [
                'General',
                '720-137',
                '720-137',
                'Stable'
            ],
            [
                'OBC',
                '136-107',
                '136-107',
                'Stable'
            ],
            [
                'SC',
                '106-107',
                '107-93',
                'Slight ↓'
            ],
            [
                'ST',
                '106-93',
                '107-93',
                'Stable'
            ],
            [
                'EWS',
                '136-107',
                '136-107',
                'Stable'
            ]
        ]
    };
    return {
        slug: `${exam}-cutoff-${Y}`,
        title: `${examLabel} Cutoff ${Y} — Expected & Previous Year Category-wise Cutoffs`,
        description: `${examLabel} ${Y} cutoff: expected and previous year category-wise cutoff marks/percentile. Includes trend analysis and preparation tips to clear the cutoff.`,
        h1: `${examLabel} Cutoff`,
        highlight: `${Y}`,
        heroSubtitle: `Expected ${examLabel} ${Y} cutoff marks with category-wise analysis and year-on-year trends. Plan your target score to secure your dream college.`,
        exam: isJEE ? 'JEE' : 'NEET',
        category: 'cutoff',
        sections: [
            {
                heading: `${examLabel} Cutoff — Category-wise Analysis`,
                table: cutoffData
            },
            {
                heading: 'How Cutoff is Determined',
                content: `The ${examLabel} cutoff is determined by NTA based on total candidates, difficulty level, and available seats. Cutoffs generally rise when the paper is easier and fall when it\'s tougher.`,
                bullets: [
                    'Number of candidates appearing',
                    'Difficulty level of the paper',
                    'Total seats available across colleges',
                    'Category-wise seat reservation percentages'
                ]
            },
            {
                heading: `How to Score Above ${examLabel} Cutoff`,
                steps: [
                    {
                        title: 'Target 20% Above Cutoff',
                        description: 'Aim for a score well above the cutoff to get better college options.'
                    },
                    {
                        title: 'Focus on Scoring Subjects',
                        description: isJEE ? 'Chemistry is the fastest to improve. Master NCERT Chemistry for guaranteed marks.' : 'Biology carries 50% weightage. Master NCERT Biology line-by-line.'
                    },
                    {
                        title: 'Eliminate Silly Mistakes',
                        description: 'Track and categorize your mistakes in mock tests. Most students lose 20-30 marks to avoidable errors.'
                    }
                ]
            }
        ],
        faqs: [
            {
                q: `What is the expected ${examLabel} ${Y} cutoff?`,
                a: `Based on trend analysis, the ${examLabel} ${Y} cutoff for General category is expected to be similar to ${Y - 1}. Exact cutoff depends on paper difficulty and number of candidates.`
            },
            {
                q: `How is ${examLabel} cutoff calculated?`,
                a: `NTA calculates the cutoff based on normalization across sessions, total candidates, difficulty level, and available seats.`
            }
        ],
        relatedSlugs: [
            `${exam}-syllabus-${Y}`,
            `${exam}-exam-pattern-${Y}`,
            `${exam}-result-${Y}`,
            isJEE ? 'jee-coaching' : 'neet-coaching'
        ]
    };
}
function buildDatesPage(exam) {
    const isJEE = exam === 'jee-main';
    const examLabel = isJEE ? 'JEE Main' : 'NEET';
    const events = isJEE ? [
        [
            'Registration Opens',
            `Sep-Oct ${Y - 1}`,
            'Complete early to avoid last-minute issues'
        ],
        [
            'Admit Card Release',
            `Dec ${Y - 1} / Mar ${Y}`,
            'Download from jeemain.nta.nic.in'
        ],
        [
            'Session 1 Exam',
            `Jan ${Y}`,
            '2 days, CBT mode'
        ],
        [
            'Session 1 Result',
            `Feb ${Y}`,
            'Scorecard + Percentile'
        ],
        [
            'Session 2 Registration',
            `Feb-Mar ${Y}`,
            'Optional — improve your score'
        ],
        [
            'Session 2 Exam',
            `Apr ${Y}`,
            '2 days, CBT mode'
        ],
        [
            'Session 2 Result',
            `Apr-May ${Y}`,
            'Best of both sessions considered'
        ],
        [
            'JEE Advanced Registration',
            `May ${Y}`,
            'Top 2.5 lakh qualifiers eligible'
        ]
    ] : [
        [
            'Registration Opens',
            `Feb-Mar ${Y}`,
            'Complete on neet.nta.nic.in'
        ],
        [
            'Application Correction',
            `Mar-Apr ${Y}`,
            'Correct errors in application'
        ],
        [
            'Admit Card Release',
            `Apr ${Y}`,
            'Download from official website'
        ],
        [
            'NEET Exam Date',
            `May ${Y}`,
            'Pen-paper, OMR-based'
        ],
        [
            'Answer Key Release',
            `May-Jun ${Y}`,
            'Challenge window available'
        ],
        [
            'Result Declaration',
            `Jun ${Y}`,
            'Scorecard + AIR rank'
        ],
        [
            'Counselling Begins',
            `Jul ${Y}`,
            'AIQ + State quota counselling'
        ]
    ];
    return {
        slug: `${exam}-important-dates-${Y}`,
        title: `${examLabel} ${Y} Important Dates — Registration, Exam, Result Schedule`,
        description: `${examLabel} ${Y} important dates: registration, admit card, exam date, answer key, result & counselling schedule. Complete timeline with preparation milestones.`,
        h1: `${examLabel} Important Dates`,
        highlight: `${Y}`,
        heroSubtitle: `Complete timeline of ${examLabel} ${Y} events — from registration to counselling. Plan your preparation milestones around these dates.`,
        exam: isJEE ? 'JEE' : 'NEET',
        category: 'important-dates',
        sections: [
            {
                heading: `${examLabel} ${Y} Event Timeline`,
                table: {
                    headers: [
                        'Event',
                        'Expected Date',
                        'Notes'
                    ],
                    rows: events
                }
            },
            {
                heading: 'Preparation Milestones to Track',
                content: `Align your study plan with ${examLabel} ${Y} dates for maximum efficiency.`,
                steps: [
                    {
                        title: '6 Months Before Exam',
                        description: 'Complete syllabus coverage. Start revision and mock tests.'
                    },
                    {
                        title: '3 Months Before',
                        description: 'Intensive revision cycle. Solve 2-3 full mock tests weekly.'
                    },
                    {
                        title: '1 Month Before',
                        description: 'Focus on weak areas, formula revision, and PYQ solving.'
                    },
                    {
                        title: '1 Week Before',
                        description: 'Light revision only. Focus on mental health, sleep, and exam strategy.'
                    }
                ]
            }
        ],
        faqs: [
            {
                q: `When is ${examLabel} ${Y} exam?`,
                a: isJEE ? `JEE Main ${Y} Session 1 is expected in January ${Y} and Session 2 in April ${Y}. Exact dates will be announced by NTA.` : `NEET ${Y} is expected in May ${Y}. The exact date will be announced by NTA with the official notification.`
            },
            {
                q: `When does ${examLabel} ${Y} registration start?`,
                a: `${examLabel} ${Y} registration is expected to start in ${isJEE ? `September-October ${Y - 1}` : `February-March ${Y}`} on the official NTA website.`
            }
        ],
        relatedSlugs: [
            `${exam}-syllabus-${Y}`,
            `${exam}-exam-pattern-${Y}`,
            isJEE ? 'jee-coaching' : 'neet-coaching'
        ]
    };
}
function buildEligibilityPage(exam) {
    const isJEE = exam === 'jee-main';
    const examLabel = isJEE ? 'JEE Main' : 'NEET';
    return {
        slug: `${exam}-eligibility-${Y}`,
        title: `${examLabel} ${Y} Eligibility Criteria — Age, Qualification, Attempts [Complete Guide]`,
        description: `${examLabel} ${Y} eligibility: age limit, educational qualification, number of attempts, and category-wise relaxation. Complete NTA eligibility guide.`,
        h1: `${examLabel} Eligibility`,
        highlight: `${Y}`,
        heroSubtitle: `Check if you meet the ${examLabel} ${Y} eligibility criteria — age limit, educational qualification, required subjects, and attempt limits.`,
        exam: isJEE ? 'JEE' : 'NEET',
        category: 'eligibility',
        sections: [
            {
                heading: 'Eligibility Criteria',
                table: {
                    headers: [
                        'Criterion',
                        'Requirement'
                    ],
                    rows: isJEE ? [
                        [
                            'Age',
                            'No age limit (as per latest NTA notification)'
                        ],
                        [
                            'Qualification',
                            'Class 12 passed or appearing with Physics, Chemistry & Maths'
                        ],
                        [
                            'Minimum Marks',
                            '75% in Class 12 (65% for SC/ST) OR Top 20 percentile'
                        ],
                        [
                            'Attempts',
                            '3 consecutive years'
                        ],
                        [
                            'Nationality',
                            'Indian nationals, OCI, PIO, Foreign nationals'
                        ]
                    ] : [
                        [
                            'Age',
                            'Minimum 17 years as of Dec 31 of admission year; upper limit as per court orders'
                        ],
                        [
                            'Qualification',
                            'Class 12 passed or appearing with Physics, Chemistry & Biology/Biotechnology'
                        ],
                        [
                            'Minimum Marks',
                            '50% aggregate in PCB (40% for SC/ST/OBC, 45% for PwD)'
                        ],
                        [
                            'Attempts',
                            'No limit on attempts'
                        ],
                        [
                            'Nationality',
                            'Indian nationals, OCI, NRI'
                        ]
                    ]
                }
            },
            {
                heading: 'Subject Requirements',
                content: `Candidates must have studied the mandatory subjects in Class 11 and 12 from a recognized board.`,
                bullets: isJEE ? [
                    'Physics and Mathematics are compulsory',
                    'Chemistry/Biology/Biotechnology/Technical Vocational as 3rd subject',
                    'Diploma holders can also apply for JEE Main'
                ] : [
                    'Physics, Chemistry, and Biology/Biotechnology are compulsory',
                    'English is compulsory as a language subject',
                    'Candidates with Mathematics instead of Biology are NOT eligible'
                ]
            }
        ],
        faqs: [
            {
                q: `What is the age limit for ${examLabel} ${Y}?`,
                a: isJEE ? `There is no upper age limit for JEE Main ${Y}. Candidates who passed Class 12 in ${Y - 1} or ${Y - 2} or appearing in ${Y} are eligible.` : `Candidates must be at least 17 years old as of December 31 of the year of admission. Upper age limit is subject to court orders.`
            },
            {
                q: `How many times can I attempt ${examLabel}?`,
                a: isJEE ? 'You can attempt JEE Main for 3 consecutive years.' : 'There is no limit on the number of NEET attempts.'
            }
        ],
        relatedSlugs: [
            `${exam}-syllabus-${Y}`,
            `${exam}-registration-${Y}`,
            isJEE ? 'jee-coaching' : 'neet-coaching'
        ]
    };
}
function buildResultPage(exam) {
    const isJEE = exam === 'jee-main';
    const examLabel = isJEE ? 'JEE Main' : 'NEET';
    return {
        slug: `${exam}-result-${Y}`,
        title: `${examLabel} Result ${Y} — How to Check, Scorecard Download & Cutoff Analysis`,
        description: `${examLabel} ${Y} result: step-by-step guide to check result, download scorecard, understand percentile/rank, and what to do after result.`,
        h1: `${examLabel} Result`,
        highlight: `${Y}`,
        heroSubtitle: `${examLabel} ${Y} result guide — how to check your score, download scorecard, understand your rank, and plan next steps.`,
        exam: isJEE ? 'JEE' : 'NEET',
        category: 'result',
        sections: [
            {
                heading: `How to Check ${examLabel} ${Y} Result`,
                steps: [
                    {
                        title: 'Visit Official Website',
                        description: isJEE ? 'Go to jeemain.nta.nic.in' : 'Go to neet.nta.nic.in'
                    },
                    {
                        title: 'Login with Credentials',
                        description: 'Enter your Application Number and Date of Birth'
                    },
                    {
                        title: 'View & Download Scorecard',
                        description: 'Your scorecard will show raw marks, percentile (JEE) or rank (NEET), and category rank'
                    },
                    {
                        title: 'Save for Counselling',
                        description: 'Download and print the scorecard — you\'ll need it during counselling'
                    }
                ]
            },
            {
                heading: 'What After Result?',
                content: 'Your next steps depend on your score.',
                bullets: isJEE ? [
                    'Score 95+ percentile → Register for JEE Advanced',
                    'Score 85-95 percentile → Apply for NITs, IIITs via JoSAA',
                    'Score below 85 → Consider state-level counselling or improvement',
                    'Start next year\'s preparation with a personal mentor at MindPeak'
                ] : [
                    'Score 600+ → Target top government medical colleges',
                    'Score 500-600 → Apply to state government colleges',
                    'Score below 500 → Consider deemed universities or re-attempt',
                    'Start next year\'s preparation with MindPeak\'s 1-on-1 coaching'
                ]
            }
        ],
        faqs: [
            {
                q: `When will ${examLabel} ${Y} result be declared?`,
                a: isJEE ? `JEE Main ${Y} Session 1 result is expected in February ${Y}. Session 2 result in April-May ${Y}.` : `NEET ${Y} result is expected in June ${Y}, approximately 4-6 weeks after the exam.`
            },
            {
                q: `How to download ${examLabel} ${Y} scorecard?`,
                a: `Visit the official NTA website, login with your application number and date of birth, and download the scorecard.`
            }
        ],
        relatedSlugs: [
            `${exam}-cutoff-${Y}`,
            isJEE ? `jee-counselling-${Y}` : `neet-counselling-${Y}`,
            isJEE ? 'jee-coaching' : 'neet-coaching'
        ]
    };
}
function buildRegistrationPage(exam) {
    const isJEE = exam === 'jee-main';
    const examLabel = isJEE ? 'JEE Main' : 'NEET';
    return {
        slug: `${exam}-registration-${Y}`,
        title: `${examLabel} ${Y} Registration — How to Apply, Fees & Documents [Step-by-Step]`,
        description: `${examLabel} ${Y} registration guide: step-by-step application process, fees, required documents, and common mistakes to avoid. Apply on NTA website.`,
        h1: `${examLabel} Registration`,
        highlight: `${Y}`,
        heroSubtitle: `Complete guide to ${examLabel} ${Y} registration — documents needed, fees, step-by-step application process, and tips to avoid rejection.`,
        exam: isJEE ? 'JEE' : 'NEET',
        category: 'registration',
        sections: [
            {
                heading: 'Registration Steps',
                steps: [
                    {
                        title: 'Create NTA Account',
                        description: `Visit ${isJEE ? 'jeemain.nta.nic.in' : 'neet.nta.nic.in'} and register with email and phone number.`
                    },
                    {
                        title: 'Fill Application Form',
                        description: 'Enter personal details, educational qualification, exam center preferences, and category.'
                    },
                    {
                        title: 'Upload Documents',
                        description: 'Upload passport-size photo (10-200 KB, JPG), signature (4-30 KB), and category certificate if applicable.'
                    },
                    {
                        title: 'Pay Application Fee',
                        description: `General: ₹${isJEE ? '1000' : '1700'} | SC/ST/PwD: ₹${isJEE ? '500' : '1000'} | Female: ₹${isJEE ? '500' : '1000'}. Pay via UPI, Net Banking, or Credit/Debit Card.`
                    },
                    {
                        title: 'Print Confirmation',
                        description: 'Download and save the confirmation page with application number for future reference.'
                    }
                ]
            },
            {
                heading: 'Required Documents',
                bullets: [
                    'Class 10 marksheet and certificate',
                    'Class 12 marksheet (if passed)',
                    'Aadhaar card or valid ID proof',
                    'Passport-size photograph (white background)',
                    'Scanned signature',
                    'Category certificate (SC/ST/OBC/EWS if applicable)',
                    'PwD certificate (if applicable)'
                ]
            },
            {
                heading: 'Common Mistakes to Avoid',
                bullets: [
                    'Incorrect spelling of name (must match Class 10 certificate)',
                    'Wrong category selection (cannot be changed later)',
                    'Low-quality photo upload (ensure proper lighting and white background)',
                    'Missing the correction window deadline',
                    'Not saving the application number and confirmation page'
                ]
            }
        ],
        faqs: [
            {
                q: `How to register for ${examLabel} ${Y}?`,
                a: `Visit the official NTA website (${isJEE ? 'jeemain.nta.nic.in' : 'neet.nta.nic.in'}), create an account, fill the application form, upload documents, and pay the fee online.`
            },
            {
                q: `What is the ${examLabel} ${Y} registration fee?`,
                a: `General category: ₹${isJEE ? '1000' : '1700'}. SC/ST/PwD/Female candidates get reduced fees.`
            }
        ],
        relatedSlugs: [
            `${exam}-eligibility-${Y}`,
            `${exam}-important-dates-${Y}`,
            `${exam}-syllabus-${Y}`
        ]
    };
}
function buildAdmitCardPage(exam) {
    const isJEE = exam === 'jee-main';
    const examLabel = isJEE ? 'JEE Main' : 'NEET';
    return {
        slug: `${exam}-admit-card-${Y}`,
        title: `${examLabel} Admit Card ${Y} — Download Link, Steps & Important Instructions`,
        description: `Download ${examLabel} ${Y} admit card from NTA website. Step-by-step guide, important exam day instructions, and what to carry to the exam center.`,
        h1: `${examLabel} Admit Card`,
        highlight: `${Y}`,
        heroSubtitle: `Download your ${examLabel} ${Y} admit card and review exam day instructions — documents to carry, reporting time, and prohibited items.`,
        exam: isJEE ? 'JEE' : 'NEET',
        category: 'admit-card',
        sections: [
            {
                heading: 'How to Download Admit Card',
                steps: [
                    {
                        title: 'Visit NTA Website',
                        description: `Go to ${isJEE ? 'jeemain.nta.nic.in' : 'neet.nta.nic.in'}`
                    },
                    {
                        title: 'Login',
                        description: 'Enter Application Number and Date of Birth / Password'
                    },
                    {
                        title: 'Download',
                        description: 'Click "Download Admit Card" and save as PDF'
                    },
                    {
                        title: 'Print',
                        description: 'Take 2-3 color printouts on A4 paper'
                    }
                ]
            },
            {
                heading: 'What to Carry on Exam Day',
                bullets: [
                    'Printed admit card (color, A4)',
                    'Valid photo ID (Aadhaar/Passport/Voter ID)',
                    'Passport-size photographs (2 extra)',
                    'Transparent water bottle',
                    'Transparent pouch for documents',
                    isJEE ? 'Nothing else — no calculator, no phone' : 'Blue/black ballpoint pen (for OMR marking)',
                    isJEE ? '' : 'No electronic devices allowed'
                ].filter(Boolean)
            },
            {
                heading: 'Important Instructions',
                bullets: [
                    'Report 1 hour before gate closure time',
                    'Wear simple clothes — avoid items with large buttons or metallic accessories',
                    'No smartwatches, fitness bands, or Bluetooth devices',
                    'Follow COVID protocols if mandated'
                ]
            }
        ],
        faqs: [
            {
                q: `When will ${examLabel} ${Y} admit card be released?`,
                a: `${examLabel} ${Y} admit card is typically released ${isJEE ? '3-4 days before the exam date' : '2-3 weeks before the exam date'} on the official NTA website.`
            },
            {
                q: 'What if my photo on the admit card is unclear?',
                a: 'Contact the NTA helpline immediately. You may need to carry additional ID proof with a clear photograph.'
            }
        ],
        relatedSlugs: [
            `${exam}-important-dates-${Y}`,
            `${exam}-exam-pattern-${Y}`,
            isJEE ? 'jee-coaching' : 'neet-coaching'
        ]
    };
}
function buildAnswerKeyPage(exam) {
    const isJEE = exam === 'jee-main';
    const examLabel = isJEE ? 'JEE Main' : 'NEET';
    return {
        slug: `${exam}-answer-key-${Y}`,
        title: `${examLabel} Answer Key ${Y} — Official & Provisional Keys, How to Challenge`,
        description: `${examLabel} ${Y} answer key: provisional and final keys, how to check, challenge process, and score calculation method. Estimate your marks accurately.`,
        h1: `${examLabel} Answer Key`,
        highlight: `${Y}`,
        heroSubtitle: `Check the ${examLabel} ${Y} answer key — calculate your expected score, understand the challenge process, and plan your next steps.`,
        exam: isJEE ? 'JEE' : 'NEET',
        category: 'answer-key',
        sections: [
            {
                heading: 'How to Check Answer Key',
                steps: [
                    {
                        title: 'Visit NTA Website',
                        description: `Go to ${isJEE ? 'jeemain.nta.nic.in' : 'neet.nta.nic.in'}`
                    },
                    {
                        title: 'Login',
                        description: 'Enter Application Number and Password'
                    },
                    {
                        title: 'View Responses',
                        description: 'Download your recorded responses and match with the answer key'
                    },
                    {
                        title: 'Calculate Score',
                        description: isJEE ? '+4 for correct MCQ, -1 for wrong MCQ, +4 for correct numerical (no negative)' : '+4 for correct, -1 for wrong, 0 for unattempted'
                    }
                ]
            },
            {
                heading: 'How to Challenge Answer Key',
                content: `NTA allows candidates to challenge the provisional answer key by paying ₹${isJEE ? '200' : '200'} per question. If your challenge is accepted, the fee is refunded.`,
                steps: [
                    {
                        title: 'Review Provisional Key',
                        description: 'Compare your answers carefully with the provisional answer key'
                    },
                    {
                        title: 'Submit Challenge Online',
                        description: 'Login to your account and submit the challenge with supporting reference'
                    },
                    {
                        title: 'Pay Challenge Fee',
                        description: `₹200 per question challenged (refunded if accepted)`
                    },
                    {
                        title: 'Wait for Final Key',
                        description: 'NTA reviews all challenges and releases the final answer key'
                    }
                ]
            },
            {
                heading: 'Score Estimation',
                content: `Use this formula to estimate your ${examLabel} ${Y} score:`,
                bullets: [
                    `Estimated Score = (Correct × 4) - (Incorrect × 1)`,
                    'Compare with previous year cutoffs to gauge your rank',
                    'Note: NTA may change answers after reviewing challenges',
                    'Your actual percentile/rank may differ from estimated score'
                ]
            }
        ],
        faqs: [
            {
                q: `When will ${examLabel} ${Y} answer key be released?`,
                a: `${examLabel} ${Y} provisional answer key is typically released ${isJEE ? '1-2 weeks after the exam' : '1-2 weeks after the exam'} on the official NTA website.`
            },
            {
                q: 'Can I challenge the answer key?',
                a: `Yes, NTA allows challenges during a 2-3 day window after the provisional answer key release. Fee is ₹200 per question, refundable if accepted.`
            }
        ],
        relatedSlugs: [
            `${exam}-result-${Y}`,
            `${exam}-cutoff-${Y}`,
            isJEE ? 'jee-coaching' : 'neet-coaching'
        ]
    };
}
function buildCounsellingPage(exam) {
    const isJEE = exam === 'jee';
    const examLabel = isJEE ? 'JEE' : 'NEET';
    return {
        slug: `${exam}-counselling-${Y}`,
        title: `${examLabel} Counselling ${Y} — Process, Dates, Choice Filling & Seat Allotment`,
        description: `${examLabel} ${Y} counselling: complete guide to registration, choice filling, document verification, and seat allotment. Tips to get your dream college.`,
        h1: `${examLabel} Counselling`,
        highlight: `${Y}`,
        heroSubtitle: `Complete guide to ${examLabel} ${Y} counselling — step-by-step process from registration to seat allotment. Make informed choices to get your dream college.`,
        exam: isJEE ? 'JEE' : 'NEET',
        category: 'counselling',
        sections: [
            {
                heading: 'Counselling Process Overview',
                steps: isJEE ? [
                    {
                        title: 'JoSAA Registration',
                        description: 'Register on josaa.nic.in with JEE Main/Advanced roll number and score'
                    },
                    {
                        title: 'Choice Filling',
                        description: 'Fill your preferred colleges + branches in order of preference (fill 50+ choices)'
                    },
                    {
                        title: 'Seat Allotment',
                        description: '6-7 rounds of allotment based on rank, category, and choices'
                    },
                    {
                        title: 'Document Verification',
                        description: 'Report to the allotted institute with original documents for verification'
                    },
                    {
                        title: 'Fee Payment',
                        description: 'Pay seat acceptance fee to confirm admission (refundable if withdrawn in freeze/float)'
                    }
                ] : [
                    {
                        title: 'MCC Registration',
                        description: 'Register on mcc.nic.in for AIQ (All India Quota) counselling'
                    },
                    {
                        title: 'Choice Filling',
                        description: 'Fill preferred colleges and courses from the available list'
                    },
                    {
                        title: 'Seat Allotment',
                        description: '3-4 rounds of allotment for AIQ, followed by state-level counselling'
                    },
                    {
                        title: 'Document Verification',
                        description: 'Report to the allotted medical college with original documents'
                    },
                    {
                        title: 'Fee Payment',
                        description: 'Pay tuition and admission fee to confirm the seat'
                    }
                ]
            },
            {
                heading: 'Important Tips for Choice Filling',
                bullets: [
                    'Fill maximum choices (100+ if possible) to increase chances',
                    'Research college placements, faculty, and infrastructure before ranking choices',
                    'Prefer branch over college for engineering (CSE at a good NIT > Mechanical at IIT)',
                    isJEE ? 'Use JoSAA historical data to understand closing ranks for each branch' : 'Check state-wise seat matrix for colleges in your home state',
                    'Keep documents ready: Class 10, Class 12 marksheets, category certificates, scorecard'
                ]
            },
            {
                heading: 'Documents Required',
                bullets: [
                    'JEE/NEET admit card and scorecard',
                    'Class 10 marksheet and certificate',
                    'Class 12 marksheet',
                    'Category certificate (if applicable)',
                    'Income certificate (for EWS)',
                    'Domicile certificate (for state quota)',
                    'Medical fitness certificate (for NEET)',
                    '10 passport-size photographs',
                    'Aadhaar card'
                ]
            }
        ],
        faqs: [
            {
                q: `When does ${examLabel} ${Y} counselling start?`,
                a: isJEE ? `JoSAA counselling for JEE ${Y} starts approximately 1-2 weeks after JEE Advanced results, typically in June-July ${Y}.` : `NEET ${Y} AIQ counselling by MCC starts approximately 2-3 weeks after NEET result declaration, typically in July-August ${Y}.`
            },
            {
                q: 'Can I participate in both AIQ and state counselling?',
                a: isJEE ? 'JoSAA counselling covers all IITs, NITs, IIITs. State-level counselling is separate for state engineering colleges.' : 'Yes, you can participate in both MCC (AIQ) and state counselling. If allotted a seat in AIQ, you must withdraw from state counselling.'
            }
        ],
        relatedSlugs: [
            `${exam === 'jee' ? 'jee-main' : 'neet'}-result-${Y}`,
            `${exam === 'jee' ? 'jee-main' : 'neet'}-cutoff-${Y}`,
            isJEE ? 'jee-coaching' : 'neet-coaching'
        ]
    };
}
function getAllExamInfoPages() {
    return [
        jeeMainSyllabus(),
        jeeAdvSyllabus(),
        neetSyllabus(),
        jeeMainExamPattern(),
        jeeAdvExamPattern(),
        neetExamPattern(),
        buildCutoffPage('jee-main'),
        buildCutoffPage('jee-advanced'),
        buildCutoffPage('neet'),
        buildDatesPage('jee-main'),
        buildDatesPage('neet'),
        buildEligibilityPage('jee-main'),
        buildEligibilityPage('neet'),
        buildResultPage('jee-main'),
        buildResultPage('neet'),
        buildRegistrationPage('jee-main'),
        buildRegistrationPage('neet'),
        buildAdmitCardPage('jee-main'),
        buildAdmitCardPage('neet'),
        buildAnswerKeyPage('jee-main'),
        buildAnswerKeyPage('neet'),
        buildCounsellingPage('jee'),
        buildCounsellingPage('neet')
    ];
}
function getExamInfoPage(slug) {
    return getAllExamInfoPages().find((p)=>p.slug === slug);
}
function getAllExamInfoSlugs() {
    return getAllExamInfoPages().map((p)=>p.slug);
}
}),
"[project]/src/data/differenceBetweenData.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * "Difference Between" Pages Data — ~200 high-traffic comparison pages
 * Targets long-tail queries like "difference between speed and velocity"
 */ __turbopack_context__.s([
    "getAllDifferencePairs",
    ()=>getAllDifferencePairs,
    "getAllDifferenceSlugs",
    ()=>getAllDifferenceSlugs,
    "getDifferencePair",
    ()=>getDifferencePair
]);
const pairs = [
    // ── Physics ──
    {
        slug: 'difference-between-speed-and-velocity',
        term1: 'Speed',
        term2: 'Velocity',
        exam: 'Both',
        subject: 'Physics',
        chapter: 'Kinematics',
        intro: 'Speed and velocity are fundamental concepts in kinematics. While often used interchangeably in everyday language, they have distinct scientific definitions. Speed is a scalar quantity measuring how fast an object moves, while velocity is a vector quantity that includes both speed and direction.',
        rows: [
            [
                'Definition',
                'Rate of change of distance',
                'Rate of change of displacement'
            ],
            [
                'Type',
                'Scalar quantity',
                'Vector quantity'
            ],
            [
                'Direction',
                'No direction',
                'Has direction'
            ],
            [
                'Formula',
                'Speed = Distance / Time',
                'Velocity = Displacement / Time'
            ],
            [
                'Value',
                'Always positive or zero',
                'Can be positive, negative, or zero'
            ],
            [
                'SI Unit',
                'm/s',
                'm/s'
            ],
            [
                'Average',
                'Total distance / Total time',
                'Total displacement / Total time'
            ],
            [
                'Example',
                'Car travels at 60 km/h',
                'Car travels at 60 km/h North'
            ]
        ],
        keyPoints: [
            'Speed can never be negative; velocity can be negative (opposite direction)',
            'For circular motion, average velocity is zero but average speed is non-zero',
            'Instantaneous speed equals magnitude of instantaneous velocity',
            'Speed ≥ |Velocity| always holds true'
        ],
        faqs: [
            {
                q: 'Can speed be greater than velocity?',
                a: 'Yes, for any non-straight path, the total distance covered is greater than displacement, making average speed greater than the magnitude of average velocity.'
            },
            {
                q: 'Is velocity more important than speed for JEE/NEET?',
                a: 'Yes, velocity is used far more in physics problems because direction matters in force, momentum, and energy calculations.'
            }
        ],
        relatedSlugs: [
            'difference-between-distance-and-displacement',
            'jee-physics-mechanics'
        ]
    },
    {
        slug: 'difference-between-distance-and-displacement',
        term1: 'Distance',
        term2: 'Displacement',
        exam: 'Both',
        subject: 'Physics',
        chapter: 'Kinematics',
        intro: 'Distance and displacement are two ways to measure how far an object has moved. Distance measures the total path length traveled, while displacement measures the shortest straight-line distance between start and end points.',
        rows: [
            [
                'Definition',
                'Total path length traveled',
                'Shortest distance between initial and final position'
            ],
            [
                'Type',
                'Scalar',
                'Vector'
            ],
            [
                'Value',
                'Always ≥ 0',
                'Can be positive, negative, or zero'
            ],
            [
                'Path Dependent',
                'Yes',
                'No'
            ],
            [
                'SI Unit',
                'Meter (m)',
                'Meter (m)'
            ],
            [
                'For circular trip',
                'Equal to circumference',
                'Zero'
            ]
        ],
        keyPoints: [
            'Distance ≥ |Displacement| for any path',
            'For straight-line motion in one direction, Distance = |Displacement|',
            'Displacement depends only on initial and final positions',
            'Distance is always non-negative'
        ],
        faqs: [
            {
                q: 'When are distance and displacement equal?',
                a: 'They are equal only when the object moves in a straight line without changing direction.'
            }
        ],
        relatedSlugs: [
            'difference-between-speed-and-velocity',
            'jee-physics-mechanics'
        ]
    },
    {
        slug: 'difference-between-mass-and-weight',
        term1: 'Mass',
        term2: 'Weight',
        exam: 'Both',
        subject: 'Physics',
        chapter: 'Laws of Motion',
        intro: 'Mass and weight are commonly confused but are fundamentally different physical quantities. Mass is the amount of matter in an object, while weight is the gravitational force acting on that mass.',
        rows: [
            [
                'Definition',
                'Amount of matter in object',
                'Force of gravity on object'
            ],
            [
                'Type',
                'Scalar',
                'Vector (directed toward center of gravity)'
            ],
            [
                'SI Unit',
                'Kilogram (kg)',
                'Newton (N)'
            ],
            [
                'Formula',
                'Constant',
                'W = mg'
            ],
            [
                'Varies with location?',
                'No',
                'Yes (depends on g)'
            ],
            [
                'Zero gravity',
                'Remains same',
                'Becomes zero'
            ],
            [
                'Measured by',
                'Beam balance',
                'Spring balance'
            ]
        ],
        keyPoints: [
            'Mass is intrinsic; weight depends on gravitational acceleration',
            'Weight on Moon is ~1/6th of weight on Earth',
            'In space (zero-g), weight = 0 but mass remains unchanged',
            'Mass is measured in kg; weight in Newton (1 kg weight ≈ 9.8 N on Earth)'
        ],
        faqs: [
            {
                q: 'Is mass or weight used in JEE problems?',
                a: 'Both. Mass appears in F=ma, momentum, and energy equations. Weight (mg) appears in gravitational force problems, inclined planes, and projectile motion.'
            }
        ],
        relatedSlugs: [
            'difference-between-scalar-and-vector',
            'jee-physics-mechanics'
        ]
    },
    {
        slug: 'difference-between-scalar-and-vector',
        term1: 'Scalar',
        term2: 'Vector',
        exam: 'Both',
        subject: 'Physics',
        intro: 'Scalars and vectors are two types of physical quantities. Scalars have only magnitude, while vectors have both magnitude and direction. This distinction is fundamental to all of physics.',
        rows: [
            [
                'Definition',
                'Quantity with only magnitude',
                'Quantity with magnitude and direction'
            ],
            [
                'Examples',
                'Mass, Speed, Energy, Temperature',
                'Force, Velocity, Displacement, Acceleration'
            ],
            [
                'Addition',
                'Simple arithmetic addition',
                'Triangle law / Parallelogram law'
            ],
            [
                'Notation',
                'Regular letters (m, T)',
                'Arrow notation or bold (F⃗, v)'
            ],
            [
                'Components',
                'None',
                'Can be resolved into components'
            ],
            [
                'Negative value',
                'Some can be negative (temperature)',
                'Direction reverses'
            ]
        ],
        keyPoints: [
            'Vector addition follows the parallelogram or triangle law, not simple addition',
            'Dot product of two vectors gives a scalar; cross product gives a vector',
            'Work (scalar) = Force (vector) · Displacement (vector)',
            'A vector can be completely described by its components along coordinate axes'
        ],
        faqs: [
            {
                q: 'Is energy a scalar or vector?',
                a: 'Energy is a scalar quantity. It has magnitude but no direction. Both kinetic and potential energy are scalars.'
            }
        ],
        relatedSlugs: [
            'difference-between-speed-and-velocity',
            'difference-between-distance-and-displacement'
        ]
    },
    {
        slug: 'difference-between-work-and-energy',
        term1: 'Work',
        term2: 'Energy',
        exam: 'Both',
        subject: 'Physics',
        chapter: 'Work, Energy and Power',
        intro: 'Work and energy are closely related concepts in physics. Work is the transfer of energy when a force moves an object, while energy is the capacity to do work.',
        rows: [
            [
                'Definition',
                'Force × displacement × cos θ',
                'Capacity to do work'
            ],
            [
                'SI Unit',
                'Joule (J)',
                'Joule (J)'
            ],
            [
                'Type',
                'Scalar',
                'Scalar'
            ],
            [
                'Can be negative?',
                'Yes (when force opposes motion)',
                'Kinetic energy: No. Potential energy: Yes'
            ],
            [
                'Forms',
                'Only one form',
                'Multiple forms (KE, PE, thermal, etc.)'
            ],
            [
                'Transfer',
                'Mechanism of energy transfer',
                'What gets transferred'
            ]
        ],
        keyPoints: [
            'Work-Energy Theorem: Net work = Change in kinetic energy',
            'Work done by conservative forces = -ΔPE',
            'Energy is conserved in isolated systems; work is not a conserved quantity',
            'Power = Rate of doing work = Rate of energy transfer'
        ],
        faqs: [
            {
                q: 'Can work be negative?',
                a: 'Yes. When the force component is opposite to displacement (θ > 90°), work is negative. Example: friction always does negative work on a moving object.'
            }
        ],
        relatedSlugs: [
            'difference-between-kinetic-and-potential-energy',
            'jee-physics-mechanics'
        ]
    },
    {
        slug: 'difference-between-kinetic-and-potential-energy',
        term1: 'Kinetic Energy',
        term2: 'Potential Energy',
        exam: 'Both',
        subject: 'Physics',
        intro: 'Kinetic energy is the energy of motion, while potential energy is stored energy due to position or configuration. Together, they form mechanical energy.',
        rows: [
            [
                'Definition',
                'Energy due to motion',
                'Energy due to position/configuration'
            ],
            [
                'Formula',
                'KE = ½mv²',
                'PE = mgh (gravitational)'
            ],
            [
                'Depends on',
                'Mass and velocity',
                'Mass, height, or configuration'
            ],
            [
                'Zero when',
                'Object is at rest',
                'At reference level'
            ],
            [
                'Always positive?',
                'Yes',
                'No (can be negative)'
            ],
            [
                'Transfer',
                'Decreases when object decelerates',
                'Converts to KE when released'
            ]
        ],
        keyPoints: [
            'In free fall, PE converts to KE (total energy conserved)',
            'At the highest point of a projectile, KE is minimum and PE is maximum',
            'Spring PE = ½kx² (elastic potential energy)',
            'Total mechanical energy = KE + PE = constant (in absence of non-conservative forces)'
        ],
        faqs: [
            {
                q: 'Can kinetic energy be negative?',
                a: 'No, kinetic energy (½mv²) is always non-negative since mass is positive and v² is always positive.'
            }
        ],
        relatedSlugs: [
            'difference-between-work-and-energy',
            'jee-physics-mechanics'
        ]
    },
    {
        slug: 'difference-between-ac-and-dc',
        term1: 'AC (Alternating Current)',
        term2: 'DC (Direct Current)',
        exam: 'Both',
        subject: 'Physics',
        chapter: 'Current Electricity',
        intro: 'AC and DC are two types of electrical current. AC periodically reverses direction, while DC flows in one direction. Most household electricity is AC, while batteries provide DC.',
        rows: [
            [
                'Direction',
                'Reverses periodically',
                'Flows in one direction'
            ],
            [
                'Source',
                'AC generators, power grid',
                'Batteries, solar cells, DC generators'
            ],
            [
                'Waveform',
                'Sinusoidal',
                'Straight line'
            ],
            [
                'Frequency',
                '50 Hz (India) / 60 Hz (US)',
                '0 Hz (zero frequency)'
            ],
            [
                'Transmission',
                'Efficient over long distances',
                'Loses energy over long distances'
            ],
            [
                'Transformer',
                'Can step up/down voltage',
                'Cannot use transformers directly'
            ],
            [
                'Danger',
                'More dangerous at same voltage',
                'Relatively safer'
            ]
        ],
        keyPoints: [
            'AC can be transmitted over long distances with minimal loss using transformers',
            'RMS value of AC = Peak value / √2',
            'Power in AC circuits: P = Vrms × Irms × cos φ',
            'Most electronic devices internally convert AC to DC using rectifiers'
        ],
        faqs: [
            {
                q: 'Why is AC used for power transmission?',
                a: 'AC voltage can be easily stepped up using transformers for long-distance transmission (reducing I²R losses) and stepped down for safe household use.'
            }
        ],
        relatedSlugs: [
            'jee-physics-electrodynamics'
        ]
    },
    // ── Chemistry ──
    {
        slug: 'difference-between-atom-and-molecule',
        term1: 'Atom',
        term2: 'Molecule',
        exam: 'Both',
        subject: 'Chemistry',
        intro: 'Atoms are the smallest unit of an element, while molecules are formed when two or more atoms bond together. Understanding this distinction is fundamental to chemistry.',
        rows: [
            [
                'Definition',
                'Smallest unit of an element',
                'Two or more atoms bonded together'
            ],
            [
                'Existence',
                'May or may not exist independently',
                'Can exist independently'
            ],
            [
                'Composition',
                'Protons, neutrons, electrons',
                'Two or more atoms'
            ],
            [
                'Shape',
                'Spherical',
                'Various geometric shapes'
            ],
            [
                'Example',
                'H, O, Na, Fe',
                'H₂, O₂, H₂O, CO₂'
            ],
            [
                'Reactivity',
                'May be reactive',
                'Can be stable or reactive'
            ],
            [
                'Visibility',
                'Not visible even under microscope',
                'Not visible (some large ones visible via electron microscope)'
            ]
        ],
        keyPoints: [
            'Noble gases exist as single atoms (monoatomic molecules)',
            'Homonuclear molecules: same atoms (O₂, N₂)',
            'Heteronuclear molecules: different atoms (H₂O, CO₂)',
            'Molecular mass = sum of atomic masses of constituent atoms'
        ],
        faqs: [
            {
                q: 'Can an atom exist independently?',
                a: 'Most atoms cannot exist independently and tend to form molecules or ionic compounds. Noble gases (He, Ne, Ar) are exceptions that exist as single atoms.'
            }
        ],
        relatedSlugs: [
            'difference-between-element-and-compound',
            'difference-between-ionic-and-covalent-bond'
        ]
    },
    {
        slug: 'difference-between-element-and-compound',
        term1: 'Element',
        term2: 'Compound',
        exam: 'Both',
        subject: 'Chemistry',
        intro: 'Elements are pure substances made of one type of atom, while compounds are substances made of two or more elements chemically bonded in fixed ratios.',
        rows: [
            [
                'Definition',
                'Pure substance with one type of atom',
                'Substance with two or more elements in fixed ratio'
            ],
            [
                'Composition',
                'Single type of atom',
                'Multiple types of atoms'
            ],
            [
                'Total known',
                '118 elements',
                'Millions of compounds'
            ],
            [
                'Separation',
                'Cannot be broken down chemically',
                'Can be broken into elements'
            ],
            [
                'Properties',
                'Properties of constituent atoms',
                'Properties differ from constituent elements'
            ],
            [
                'Example',
                'Gold (Au), Oxygen (O₂)',
                'Water (H₂O), Salt (NaCl)'
            ]
        ],
        keyPoints: [
            'Elements are organized in the Periodic Table',
            'Compounds have fixed composition by mass (Law of Definite Proportions)',
            'Mixtures ≠ Compounds (mixtures have variable composition)',
            'Compounds can only be separated by chemical reactions'
        ],
        faqs: [
            {
                q: 'Is water an element or compound?',
                a: 'Water (H₂O) is a compound made of hydrogen and oxygen in a 2:1 ratio by number of atoms.'
            }
        ],
        relatedSlugs: [
            'difference-between-atom-and-molecule',
            'difference-between-mixture-and-compound'
        ]
    },
    {
        slug: 'difference-between-ionic-and-covalent-bond',
        term1: 'Ionic Bond',
        term2: 'Covalent Bond',
        exam: 'Both',
        subject: 'Chemistry',
        chapter: 'Chemical Bonding',
        intro: 'Ionic and covalent bonds are the two primary types of chemical bonds. Ionic bonds involve transfer of electrons, while covalent bonds involve sharing of electrons.',
        rows: [
            [
                'Formation',
                'Transfer of electrons',
                'Sharing of electrons'
            ],
            [
                'Between',
                'Metal + Non-metal',
                'Non-metal + Non-metal'
            ],
            [
                'Electronegativity diff',
                'Large (>1.7)',
                'Small (<1.7)'
            ],
            [
                'State at room temp',
                'Usually solid',
                'Solid, liquid, or gas'
            ],
            [
                'Melting point',
                'High',
                'Low to moderate'
            ],
            [
                'Conductivity',
                'Conducts in solution/molten',
                'Poor conductor'
            ],
            [
                'Solubility',
                'Soluble in water (polar)',
                'Soluble in organic solvents'
            ],
            [
                'Example',
                'NaCl, KBr, MgO',
                'H₂O, CH₄, CO₂'
            ]
        ],
        keyPoints: [
            'Ionic bonds form crystal lattice structures with high lattice energy',
            'Covalent bonds can be single (σ), double (σ+π), or triple (σ+2π)',
            'Polar covalent bonds exist when sharing is unequal (e.g., H-Cl)',
            'Bond polarity increases with electronegativity difference'
        ],
        faqs: [
            {
                q: 'Can a bond be both ionic and covalent?',
                a: 'Bonds exist on a spectrum. Polar covalent bonds have some ionic character. Fajan\'s rules describe when ionic compounds show covalent character.'
            }
        ],
        relatedSlugs: [
            'difference-between-sigma-and-pi-bond',
            'jee-chemistry-inorganic'
        ]
    },
    {
        slug: 'difference-between-sigma-and-pi-bond',
        term1: 'Sigma (σ) Bond',
        term2: 'Pi (π) Bond',
        exam: 'JEE',
        subject: 'Chemistry',
        chapter: 'Chemical Bonding',
        intro: 'Sigma and pi bonds are the two types of covalent bonds formed by orbital overlap. Understanding their differences is crucial for organic chemistry and molecular geometry.',
        rows: [
            [
                'Overlap',
                'Head-on (axial) overlap',
                'Lateral (sideways) overlap'
            ],
            [
                'Strength',
                'Stronger',
                'Weaker'
            ],
            [
                'Rotation',
                'Free rotation possible',
                'Restricts rotation'
            ],
            [
                'Formation',
                's-s, s-p, p-p head-on',
                'p-p lateral overlap'
            ],
            [
                'Number per bond',
                'Always first bond formed',
                'Second and third bonds'
            ],
            [
                'Shape',
                'Cylindrically symmetric',
                'Two lobes above and below'
            ],
            [
                'Example',
                'Single bond in H₂',
                'Second bond in O₂ (O=O)'
            ]
        ],
        keyPoints: [
            'A single bond = 1σ; double bond = 1σ + 1π; triple bond = 1σ + 2π',
            'σ bonds determine molecular geometry (VSEPR theory)',
            'π bonds are responsible for resonance and conjugation',
            'Hybridization affects σ bonds (sp, sp², sp³)'
        ],
        faqs: [
            {
                q: 'Why is a sigma bond stronger than a pi bond?',
                a: 'Sigma bonds have head-on orbital overlap with maximum overlap density along the bond axis, resulting in greater bond strength than the lateral overlap in pi bonds.'
            }
        ],
        relatedSlugs: [
            'difference-between-ionic-and-covalent-bond'
        ]
    },
    {
        slug: 'difference-between-oxidation-and-reduction',
        term1: 'Oxidation',
        term2: 'Reduction',
        exam: 'Both',
        subject: 'Chemistry',
        chapter: 'Redox Reactions',
        intro: 'Oxidation and reduction are complementary chemical processes that always occur together (redox reactions). Oxidation involves loss of electrons, while reduction involves gain of electrons.',
        rows: [
            [
                'Definition',
                'Loss of electrons',
                'Gain of electrons'
            ],
            [
                'Oxidation number',
                'Increases',
                'Decreases'
            ],
            [
                'Oxygen',
                'Gain of oxygen',
                'Loss of oxygen'
            ],
            [
                'Hydrogen',
                'Loss of hydrogen',
                'Gain of hydrogen'
            ],
            [
                'Agent',
                'Reducing agent gets oxidized',
                'Oxidizing agent gets reduced'
            ],
            [
                'Example',
                'Na → Na⁺ + e⁻',
                'Cl₂ + 2e⁻ → 2Cl⁻'
            ],
            [
                'Mnemonic',
                'OIL (Oxidation Is Loss)',
                'RIG (Reduction Is Gain)'
            ]
        ],
        keyPoints: [
            'Remember: OIL RIG — Oxidation Is Loss, Reduction Is Gain',
            'In electrochemical cells: oxidation at anode, reduction at cathode',
            'Oxidizing agents accept electrons (get reduced themselves)',
            'Common oxidizing agents: KMnO₄, K₂Cr₂O₇, HNO₃, O₂'
        ],
        faqs: [
            {
                q: 'Can a substance be both oxidized and reduced?',
                a: 'Yes, in disproportionation reactions. For example, H₂O₂ can act as both oxidizing and reducing agent: 2H₂O₂ → 2H₂O + O₂.'
            }
        ],
        relatedSlugs: [
            'jee-chemistry-physical'
        ]
    },
    {
        slug: 'difference-between-acid-and-base',
        term1: 'Acid',
        term2: 'Base',
        exam: 'Both',
        subject: 'Chemistry',
        intro: 'Acids and bases are two fundamental classes of chemical compounds. Acids donate protons (H⁺), while bases accept protons. Their reactions are central to chemistry.',
        rows: [
            [
                'Arrhenius',
                'Produces H⁺ in water',
                'Produces OH⁻ in water'
            ],
            [
                'Brønsted-Lowry',
                'Proton (H⁺) donor',
                'Proton (H⁺) acceptor'
            ],
            [
                'Lewis',
                'Electron pair acceptor',
                'Electron pair donor'
            ],
            [
                'pH',
                '< 7',
                '> 7'
            ],
            [
                'Taste',
                'Sour',
                'Bitter'
            ],
            [
                'Litmus',
                'Turns blue → red',
                'Turns red → blue'
            ],
            [
                'Example',
                'HCl, H₂SO₄, CH₃COOH',
                'NaOH, KOH, NH₃'
            ]
        ],
        keyPoints: [
            'pH scale: 0 (strongly acidic) → 7 (neutral) → 14 (strongly basic)',
            'Acid + Base → Salt + Water (neutralization)',
            'Buffer solutions resist pH changes (weak acid + conjugate base)',
            'Ka × Kb = Kw = 10⁻¹⁴ at 25°C'
        ],
        faqs: [
            {
                q: 'What is the difference between strong and weak acids?',
                a: 'Strong acids (HCl, H₂SO₄) completely dissociate in water. Weak acids (CH₃COOH, H₂CO₃) only partially dissociate, establishing an equilibrium.'
            }
        ],
        relatedSlugs: [
            'difference-between-oxidation-and-reduction'
        ]
    },
    {
        slug: 'difference-between-mixture-and-compound',
        term1: 'Mixture',
        term2: 'Compound',
        exam: 'Both',
        subject: 'Chemistry',
        intro: 'Mixtures and compounds are fundamentally different. Mixtures are physical combinations of substances, while compounds are chemical combinations with fixed ratios and new properties.',
        rows: [
            [
                'Composition',
                'Variable proportions',
                'Fixed proportions (by mass)'
            ],
            [
                'Separation',
                'Physical methods (filtration, distillation)',
                'Chemical reactions only'
            ],
            [
                'Properties',
                'Retain individual properties',
                'New properties emerge'
            ],
            [
                'Energy',
                'No energy change on mixing',
                'Energy released or absorbed on formation'
            ],
            [
                'Formula',
                'No chemical formula',
                'Has a definite chemical formula'
            ],
            [
                'Example',
                'Air, salt water, alloys',
                'H₂O, NaCl, CO₂'
            ]
        ],
        keyPoints: [
            'Mixtures can be homogeneous (solutions) or heterogeneous (suspensions)',
            'Compounds follow the Law of Definite Proportions',
            'Alloys are homogeneous mixtures of metals',
            'Solutions are homogeneous mixtures with uniform composition'
        ],
        faqs: [
            {
                q: 'Is air a mixture or compound?',
                a: 'Air is a homogeneous mixture of gases: ~78% N₂, ~21% O₂, ~1% Ar, and trace amounts of CO₂, water vapor, etc.'
            }
        ],
        relatedSlugs: [
            'difference-between-element-and-compound',
            'difference-between-atom-and-molecule'
        ]
    },
    {
        slug: 'difference-between-exothermic-and-endothermic',
        term1: 'Exothermic Reaction',
        term2: 'Endothermic Reaction',
        exam: 'Both',
        subject: 'Chemistry',
        chapter: 'Thermodynamics',
        intro: 'Chemical reactions either release or absorb energy. Exothermic reactions release heat to surroundings, while endothermic reactions absorb heat from surroundings.',
        rows: [
            [
                'Heat',
                'Released to surroundings',
                'Absorbed from surroundings'
            ],
            [
                'ΔH',
                'Negative (ΔH < 0)',
                'Positive (ΔH > 0)'
            ],
            [
                'Temperature',
                'Surroundings get warmer',
                'Surroundings get cooler'
            ],
            [
                'Energy level',
                'Products lower than reactants',
                'Products higher than reactants'
            ],
            [
                'Bond energy',
                'Bond formation > Bond breaking',
                'Bond breaking > Bond formation'
            ],
            [
                'Example',
                'Combustion, neutralization',
                'Photosynthesis, melting ice'
            ]
        ],
        keyPoints: [
            'Exothermic: combustion of fuels, acid-base neutralization, crystallization',
            'Endothermic: thermal decomposition, photosynthesis, evaporation',
            'ΔG = ΔH - TΔS determines spontaneity, not ΔH alone',
            'Hess\'s Law: ΔH is independent of the path of the reaction'
        ],
        faqs: [
            {
                q: 'Is dissolving salt in water exothermic or endothermic?',
                a: 'Dissolving NaCl in water is slightly endothermic (the solution cools slightly). However, dissolving NaOH is highly exothermic.'
            }
        ],
        relatedSlugs: [
            'jee-chemistry-physical'
        ]
    },
    // ── Biology (NEET) ──
    {
        slug: 'difference-between-mitosis-and-meiosis',
        term1: 'Mitosis',
        term2: 'Meiosis',
        exam: 'NEET',
        subject: 'Biology',
        chapter: 'Cell Division',
        intro: 'Mitosis and meiosis are the two types of cell division. Mitosis produces identical daughter cells for growth and repair, while meiosis produces genetically diverse gametes for sexual reproduction.',
        rows: [
            [
                'Purpose',
                'Growth and repair',
                'Gamete formation'
            ],
            [
                'Daughter cells',
                '2 identical cells',
                '4 genetically different cells'
            ],
            [
                'Chromosome number',
                'Maintained (2n → 2n)',
                'Halved (2n → n)'
            ],
            [
                'Divisions',
                'One division',
                'Two divisions (Meiosis I + II)'
            ],
            [
                'Crossing over',
                'Rare',
                'Occurs in Prophase I'
            ],
            [
                'Genetic variation',
                'No variation',
                'High variation'
            ],
            [
                'Where',
                'Somatic cells',
                'Reproductive cells'
            ],
            [
                'Stages',
                'Prophase, Metaphase, Anaphase, Telophase',
                'Same stages but twice (I and II)'
            ]
        ],
        keyPoints: [
            'Meiosis I is reductional (2n→n); Meiosis II is equational (n→n)',
            'Crossing over in Prophase I creates genetic diversity',
            'Mitosis maintains chromosome number; meiosis halves it',
            'Non-disjunction in meiosis leads to chromosomal disorders (Down syndrome)'
        ],
        faqs: [
            {
                q: 'Why is meiosis important for evolution?',
                a: 'Meiosis creates genetic variation through crossing over and independent assortment, providing raw material for natural selection and evolution.'
            }
        ],
        relatedSlugs: [
            'difference-between-dna-and-rna',
            'neet-biology-coaching'
        ]
    },
    {
        slug: 'difference-between-dna-and-rna',
        term1: 'DNA',
        term2: 'RNA',
        exam: 'NEET',
        subject: 'Biology',
        chapter: 'Molecular Basis of Inheritance',
        intro: 'DNA and RNA are the two types of nucleic acids essential for life. DNA stores genetic information, while RNA helps in protein synthesis.',
        rows: [
            [
                'Full form',
                'Deoxyribonucleic Acid',
                'Ribonucleic Acid'
            ],
            [
                'Sugar',
                'Deoxyribose',
                'Ribose'
            ],
            [
                'Bases',
                'A, T, G, C',
                'A, U, G, C'
            ],
            [
                'Structure',
                'Double-stranded helix',
                'Usually single-stranded'
            ],
            [
                'Location',
                'Nucleus (mainly)',
                'Nucleus and cytoplasm'
            ],
            [
                'Function',
                'Stores genetic information',
                'Protein synthesis, gene regulation'
            ],
            [
                'Stability',
                'More stable',
                'Less stable'
            ],
            [
                'Types',
                'Only one type',
                'mRNA, tRNA, rRNA, snRNA'
            ]
        ],
        keyPoints: [
            'DNA replication is semi-conservative (Meselson-Stahl experiment)',
            'Central Dogma: DNA → RNA (transcription) → Protein (translation)',
            'RNA can act as enzyme (ribozymes)',
            'DNA has thymine; RNA has uracil instead'
        ],
        faqs: [
            {
                q: 'Can RNA store genetic information?',
                a: 'Yes, some viruses (like HIV, SARS-CoV-2) use RNA as their genetic material instead of DNA.'
            }
        ],
        relatedSlugs: [
            'difference-between-mitosis-and-meiosis'
        ]
    },
    {
        slug: 'difference-between-photosynthesis-and-respiration',
        term1: 'Photosynthesis',
        term2: 'Cellular Respiration',
        exam: 'NEET',
        subject: 'Biology',
        intro: 'Photosynthesis and cellular respiration are complementary metabolic processes. Photosynthesis converts light energy to chemical energy, while respiration releases stored chemical energy.',
        rows: [
            [
                'Process',
                'Builds glucose (anabolic)',
                'Breaks down glucose (catabolic)'
            ],
            [
                'Equation',
                '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂',
                'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O'
            ],
            [
                'Energy',
                'Absorbs light energy',
                'Releases chemical energy (ATP)'
            ],
            [
                'Location',
                'Chloroplasts',
                'Mitochondria'
            ],
            [
                'Occurs in',
                'Plants, algae, some bacteria',
                'All living organisms'
            ],
            [
                'Requirement',
                'Light, CO₂, H₂O',
                'Glucose, O₂ (aerobic)'
            ],
            [
                'Products',
                'Glucose, O₂',
                'CO₂, H₂O, ATP'
            ]
        ],
        keyPoints: [
            'Photosynthesis occurs in two stages: Light reactions and Calvin cycle',
            'Respiration occurs in three stages: Glycolysis, Krebs cycle, ETC',
            'Net ATP from one glucose molecule: ~36-38 ATP',
            'Both processes involve electron transport chains'
        ],
        faqs: [
            {
                q: 'Do plants do both photosynthesis and respiration?',
                a: 'Yes, plants perform photosynthesis during the day and cellular respiration 24/7. During the day, photosynthesis rate exceeds respiration rate.'
            }
        ],
        relatedSlugs: [
            'neet-biology-coaching'
        ]
    },
    {
        slug: 'difference-between-arteries-and-veins',
        term1: 'Arteries',
        term2: 'Veins',
        exam: 'NEET',
        subject: 'Biology',
        chapter: 'Body Fluids and Circulation',
        intro: 'Arteries and veins are blood vessels with different structures and functions. Arteries carry blood away from the heart, while veins return blood to the heart.',
        rows: [
            [
                'Direction',
                'Away from heart',
                'Toward heart'
            ],
            [
                'Blood type',
                'Usually oxygenated (except pulmonary artery)',
                'Usually deoxygenated (except pulmonary vein)'
            ],
            [
                'Wall thickness',
                'Thick, muscular walls',
                'Thin walls'
            ],
            [
                'Lumen',
                'Narrow',
                'Wide'
            ],
            [
                'Valves',
                'No valves (except aortic/pulmonary)',
                'Have valves to prevent backflow'
            ],
            [
                'Pressure',
                'High pressure',
                'Low pressure'
            ],
            [
                'Pulse',
                'Pulse felt',
                'No pulse'
            ],
            [
                'Location',
                'Deep in body',
                'Superficial and deep'
            ]
        ],
        keyPoints: [
            'Pulmonary artery carries deoxygenated blood (exception)',
            'Pulmonary vein carries oxygenated blood (exception)',
            'Arterioles regulate blood pressure through vasoconstriction/vasodilation',
            'Veins have a larger total cross-sectional area than arteries'
        ],
        faqs: [
            {
                q: 'Why do arteries have thicker walls?',
                a: 'Arteries carry blood at high pressure from the heart, so they need thick, elastic, muscular walls to withstand and maintain this pressure.'
            }
        ],
        relatedSlugs: [
            'neet-biology-coaching'
        ]
    },
    // ── Exam Comparisons ──
    {
        slug: 'difference-between-jee-main-and-advanced',
        term1: 'JEE Main',
        term2: 'JEE Advanced',
        exam: 'JEE',
        subject: 'Exam',
        intro: 'JEE Main and JEE Advanced are the two stages of the Joint Entrance Examination for engineering admissions in India. JEE Main is the qualifying exam for JEE Advanced and for admission to NITs, while JEE Advanced is for IIT admission.',
        rows: [
            [
                'Purpose',
                'Admission to NITs, IIITs, GFTIs',
                'Admission to IITs'
            ],
            [
                'Conducting body',
                'NTA',
                'One of the IITs (rotational)'
            ],
            [
                'Eligibility',
                'Class 12 passed/appearing',
                'Top 2.5 lakh JEE Main qualifiers'
            ],
            [
                'Attempts',
                '3 consecutive years',
                '2 consecutive years'
            ],
            [
                'Mode',
                'Computer-based (CBT)',
                'Computer-based (CBT)'
            ],
            [
                'Papers',
                '1 paper, 3 hours',
                '2 papers, 3 hours each'
            ],
            [
                'Difficulty',
                'Moderate',
                'High to Very High'
            ],
            [
                'Total candidates',
                '~12-15 lakh',
                '~1.5-2 lakh'
            ]
        ],
        keyPoints: [
            'You must qualify JEE Main to be eligible for JEE Advanced',
            'JEE Main uses percentile-based ranking; JEE Advanced uses aggregate marks',
            'JEE Advanced has unique question types: multi-correct, matrix match, integer',
            'Top 250 ranks in JEE Advanced can choose any branch at any IIT'
        ],
        faqs: [
            {
                q: 'Can I get into IIT through JEE Main?',
                a: 'No, IIT admission requires qualifying JEE Advanced. JEE Main is for NITs, IIITs, and GFTIs. JEE Main also serves as the qualifying exam for JEE Advanced.'
            },
            {
                q: 'Is JEE Advanced harder than JEE Main?',
                a: 'Yes, significantly. JEE Advanced tests deeper conceptual understanding with multi-concept problems and unique question formats not found in JEE Main.'
            }
        ],
        relatedSlugs: [
            'jee-coaching',
            'jee-advanced-coaching',
            'jee-main-coaching'
        ]
    },
    {
        slug: 'difference-between-jee-and-neet',
        term1: 'JEE',
        term2: 'NEET',
        exam: 'Both',
        subject: 'Exam',
        intro: 'JEE and NEET are India\'s premier entrance exams for engineering and medical admissions respectively. They differ significantly in syllabus, pattern, and preparation strategy.',
        rows: [
            [
                'Purpose',
                'Engineering (IIT/NIT/IIIT)',
                'Medical (MBBS/BDS/AYUSH)'
            ],
            [
                'Subjects',
                'Physics, Chemistry, Mathematics',
                'Physics, Chemistry, Biology'
            ],
            [
                'Conducting body',
                'NTA',
                'NTA'
            ],
            [
                'Mode',
                'Computer-based',
                'Pen and paper (OMR)'
            ],
            [
                'Sessions',
                '2 per year',
                '1 per year'
            ],
            [
                'Total marks',
                '300',
                '720'
            ],
            [
                'Difficulty',
                'High (especially Maths)',
                'Moderate (NCERT-focused)'
            ],
            [
                'Attempts',
                '3 (Main) + 2 (Advanced)',
                'Unlimited'
            ]
        ],
        keyPoints: [
            'JEE tests mathematical problem-solving; NEET tests biological knowledge',
            'NCERT is sufficient for 70-80% of NEET but only 30-40% of JEE',
            'JEE Advanced is considered India\'s toughest entrance exam',
            'A student choosing between JEE and NEET should decide based on interest, not difficulty'
        ],
        faqs: [
            {
                q: 'Can I prepare for both JEE and NEET simultaneously?',
                a: 'It\'s extremely difficult because JEE requires Mathematics while NEET requires Biology. Physics and Chemistry overlap, but the depth and approach differ. Focus on one exam for best results.'
            }
        ],
        relatedSlugs: [
            'jee-coaching',
            'neet-coaching'
        ]
    },
    // ── Maths ──
    {
        slug: 'difference-between-permutation-and-combination',
        term1: 'Permutation',
        term2: 'Combination',
        exam: 'JEE',
        subject: 'Mathematics',
        chapter: 'Permutations and Combinations',
        intro: 'Permutations and combinations are counting techniques. The key difference is that permutations consider order while combinations do not.',
        rows: [
            [
                'Order',
                'Matters',
                'Does not matter'
            ],
            [
                'Formula',
                'nPr = n!/(n-r)!',
                'nCr = n!/[r!(n-r)!]'
            ],
            [
                'Meaning',
                'Arrangements',
                'Selections'
            ],
            [
                'Value',
                'nPr ≥ nCr',
                'nCr ≤ nPr'
            ],
            [
                'Example',
                'Arranging 3 books on a shelf',
                'Choosing 3 books from 5'
            ],
            [
                'Relationship',
                'nPr = nCr × r!',
                'nCr = nPr / r!'
            ]
        ],
        keyPoints: [
            'Use permutation when "arrangement" or "order" is mentioned',
            'Use combination when "selection" or "choose" is mentioned',
            'nCr = nC(n-r) — symmetry property',
            'Pascal\'s Triangle gives combination values'
        ],
        faqs: [
            {
                q: 'How to decide between permutation and combination?',
                a: 'Ask yourself: Does changing the order create a different result? If yes → Permutation. If no → Combination. Example: Lock code (order matters) = Permutation; Committee selection (order doesn\'t matter) = Combination.'
            }
        ],
        relatedSlugs: [
            'jee-math-algebra'
        ]
    },
    {
        slug: 'difference-between-arithmetic-and-geometric-progression',
        term1: 'Arithmetic Progression (AP)',
        term2: 'Geometric Progression (GP)',
        exam: 'JEE',
        subject: 'Mathematics',
        chapter: 'Sequences and Series',
        intro: 'AP and GP are fundamental sequences in mathematics. In AP, consecutive terms differ by a constant; in GP, consecutive terms have a constant ratio.',
        rows: [
            [
                'Pattern',
                'Common difference (d)',
                'Common ratio (r)'
            ],
            [
                'nth term',
                'a + (n-1)d',
                'ar^(n-1)'
            ],
            [
                'Sum of n terms',
                'n/2[2a+(n-1)d]',
                'a(r^n-1)/(r-1)'
            ],
            [
                'Example',
                '2, 5, 8, 11 (d=3)',
                '2, 6, 18, 54 (r=3)'
            ],
            [
                'Mean',
                'Arithmetic mean: (a+b)/2',
                'Geometric mean: √(ab)'
            ],
            [
                'Growth',
                'Linear growth',
                'Exponential growth'
            ]
        ],
        keyPoints: [
            'AM ≥ GM for positive numbers (AM-GM inequality)',
            'Infinite GP sum = a/(1-r) when |r| < 1',
            'If a, b, c are in AP: 2b = a + c',
            'If a, b, c are in GP: b² = ac'
        ],
        faqs: [
            {
                q: 'What is the relationship between AP and GP?',
                a: 'If terms of a GP are taken as logarithms, they form an AP. Also, AM ≥ GM ≥ HM for positive real numbers.'
            }
        ],
        relatedSlugs: [
            'jee-math-algebra'
        ]
    },
    // More physics concepts
    {
        slug: 'difference-between-reflection-and-refraction',
        term1: 'Reflection',
        term2: 'Refraction',
        exam: 'Both',
        subject: 'Physics',
        chapter: 'Optics',
        intro: 'Reflection and refraction are two fundamental behaviors of light at boundaries between media. Reflection bounces light back, while refraction bends light as it passes through.',
        rows: [
            [
                'Definition',
                'Bouncing back of light from a surface',
                'Bending of light when entering a different medium'
            ],
            [
                'Medium',
                'Light stays in same medium',
                'Light enters a different medium'
            ],
            [
                'Angle law',
                'Angle of incidence = Angle of reflection',
                'n₁sinθ₁ = n₂sinθ₂ (Snell\'s law)'
            ],
            [
                'Speed',
                'Speed unchanged',
                'Speed changes with medium'
            ],
            [
                'Wavelength',
                'Unchanged',
                'Changes with medium'
            ],
            [
                'Example',
                'Mirror',
                'Lens, prism, diamond sparkle'
            ]
        ],
        keyPoints: [
            'Total Internal Reflection occurs when light goes from denser to rarer medium at angle > critical angle',
            'Mirrors use reflection; lenses use refraction',
            'Refraction explains why a stick appears bent in water',
            'Optical fibers work on Total Internal Reflection'
        ],
        faqs: [
            {
                q: 'Does frequency change during refraction?',
                a: 'No, frequency remains constant during refraction. Only speed and wavelength change.'
            }
        ],
        relatedSlugs: [
            'jee-physics-optics'
        ]
    },
    {
        slug: 'difference-between-conductor-and-insulator',
        term1: 'Conductor',
        term2: 'Insulator',
        exam: 'Both',
        subject: 'Physics',
        chapter: 'Current Electricity',
        intro: 'Conductors allow easy flow of electric current, while insulators resist current flow. This distinction is based on the availability of free electrons.',
        rows: [
            [
                'Definition',
                'Allows current flow',
                'Resists current flow'
            ],
            [
                'Free electrons',
                'Many free electrons',
                'Very few free electrons'
            ],
            [
                'Resistivity',
                'Low (10⁻⁸ to 10⁻⁶ Ω·m)',
                'High (10⁸ to 10¹⁶ Ω·m)'
            ],
            [
                'Band gap',
                'No band gap (overlapping bands)',
                'Large band gap (>3 eV)'
            ],
            [
                'Temperature effect',
                'Resistance increases with temperature',
                'Resistance decreases with temperature'
            ],
            [
                'Examples',
                'Copper, Silver, Gold, Aluminum',
                'Rubber, Glass, Wood, Plastic'
            ]
        ],
        keyPoints: [
            'Semiconductors have intermediate conductivity (band gap ~1 eV)',
            'Superconductors have zero resistance below critical temperature',
            'Conductors follow Ohm\'s law: V = IR',
            'Electrostatic shielding uses conductors (Faraday cage)'
        ],
        faqs: [
            {
                q: 'Why does conductor resistance increase with temperature?',
                a: 'Higher temperature increases lattice vibrations, causing more collisions with free electrons, thus increasing resistance.'
            }
        ],
        relatedSlugs: [
            'difference-between-ac-and-dc',
            'jee-physics-electrodynamics'
        ]
    },
    // More bio
    {
        slug: 'difference-between-prokaryotic-and-eukaryotic-cell',
        term1: 'Prokaryotic Cell',
        term2: 'Eukaryotic Cell',
        exam: 'NEET',
        subject: 'Biology',
        chapter: 'Cell Structure',
        intro: 'Prokaryotic and eukaryotic cells are the two fundamental cell types. Prokaryotes lack a membrane-bound nucleus, while eukaryotes have a well-defined nucleus and organelles.',
        rows: [
            [
                'Nucleus',
                'No true nucleus (nucleoid)',
                'Membrane-bound nucleus'
            ],
            [
                'Size',
                'Small (1-10 μm)',
                'Large (10-100 μm)'
            ],
            [
                'Organelles',
                'No membrane-bound organelles',
                'Mitochondria, ER, Golgi, etc.'
            ],
            [
                'DNA',
                'Circular, no histones',
                'Linear, with histones'
            ],
            [
                'Ribosomes',
                '70S',
                '80S'
            ],
            [
                'Cell wall',
                'Present (peptidoglycan)',
                'Present in plants (cellulose), absent in animals'
            ],
            [
                'Reproduction',
                'Binary fission',
                'Mitosis and meiosis'
            ],
            [
                'Examples',
                'Bacteria, Archaea',
                'Plants, Animals, Fungi, Protists'
            ]
        ],
        keyPoints: [
            'Prokaryotes evolved first (~3.5 billion years ago)',
            'Endosymbiotic theory: mitochondria and chloroplasts were once prokaryotes',
            'Prokaryotes can have plasmids (extra-chromosomal DNA)',
            'Both types have plasma membranes, ribosomes, and DNA'
        ],
        faqs: [
            {
                q: 'Are viruses prokaryotic or eukaryotic?',
                a: 'Neither. Viruses are not cells — they are acellular entities with nucleic acid (DNA or RNA) enclosed in a protein coat.'
            }
        ],
        relatedSlugs: [
            'difference-between-plant-and-animal-cell',
            'neet-biology-coaching'
        ]
    },
    {
        slug: 'difference-between-plant-and-animal-cell',
        term1: 'Plant Cell',
        term2: 'Animal Cell',
        exam: 'NEET',
        subject: 'Biology',
        chapter: 'Cell Structure',
        intro: 'Plant and animal cells are both eukaryotic but have key structural differences. Plant cells have cell walls and chloroplasts, while animal cells have centrioles and are more flexible.',
        rows: [
            [
                'Cell wall',
                'Present (cellulose)',
                'Absent'
            ],
            [
                'Chloroplasts',
                'Present',
                'Absent'
            ],
            [
                'Vacuole',
                'Large central vacuole',
                'Small or absent'
            ],
            [
                'Shape',
                'Fixed rectangular shape',
                'Irregular/flexible shape'
            ],
            [
                'Centrioles',
                'Absent (usually)',
                'Present'
            ],
            [
                'Lysosomes',
                'Rare',
                'Prominent'
            ],
            [
                'Storage',
                'Starch',
                'Glycogen'
            ],
            [
                'Plasmodesmata',
                'Present',
                'Absent (gap junctions instead)'
            ]
        ],
        keyPoints: [
            'Both have nucleus, mitochondria, ER, Golgi apparatus, ribosomes',
            'Plant cells can perform photosynthesis (have chloroplasts)',
            'Animal cells have more prominent lysosomes ("suicide bags")',
            'Cell wall provides rigidity and protection to plant cells'
        ],
        faqs: [
            {
                q: 'Do plant cells have mitochondria?',
                a: 'Yes. Plant cells have both chloroplasts (for photosynthesis) and mitochondria (for cellular respiration). They perform respiration 24/7 and photosynthesis only in light.'
            }
        ],
        relatedSlugs: [
            'difference-between-prokaryotic-and-eukaryotic-cell'
        ]
    },
    {
        slug: 'difference-between-enzyme-and-hormone',
        term1: 'Enzyme',
        term2: 'Hormone',
        exam: 'NEET',
        subject: 'Biology',
        intro: 'Enzymes and hormones are both biological molecules that regulate body functions, but they work very differently. Enzymes are biological catalysts, while hormones are chemical messengers.',
        rows: [
            [
                'Nature',
                'Mostly proteins',
                'Proteins, steroids, or amines'
            ],
            [
                'Function',
                'Catalyze biochemical reactions',
                'Chemical messengers'
            ],
            [
                'Action site',
                'At the site of production',
                'At target organs (distant)'
            ],
            [
                'Consumed?',
                'Not consumed (reusable)',
                'Used up after action'
            ],
            [
                'Speed',
                'Very fast catalysis',
                'Slower, longer-lasting effects'
            ],
            [
                'Molecular weight',
                'High',
                'Variable (can be small)'
            ],
            [
                'Example',
                'Amylase, Pepsin, Lipase',
                'Insulin, Adrenaline, Thyroxine'
            ]
        ],
        keyPoints: [
            'Enzymes are highly specific (lock-and-key / induced fit model)',
            'Hormones travel through blood to reach target organs',
            'Enzyme activity depends on pH, temperature, and substrate concentration',
            'Hormones regulate growth, metabolism, reproduction, and homeostasis'
        ],
        faqs: [
            {
                q: 'Can a substance be both an enzyme and a hormone?',
                a: 'No, but they can work together. For example, insulin (hormone) regulates glucose levels, while hexokinase (enzyme) catalyzes glucose phosphorylation.'
            }
        ],
        relatedSlugs: [
            'neet-biology-coaching'
        ]
    }
];
function getAllDifferencePairs() {
    return pairs;
}
function getDifferencePair(slug) {
    return pairs.find((p)=>p.slug === slug);
}
function getAllDifferenceSlugs() {
    return pairs.map((p)=>p.slug);
}
}),
"[project]/src/data/counsellingData.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllCounsellingSlugs",
    ()=>getAllCounsellingSlugs,
    "getCounsellingPage",
    ()=>getCounsellingPage
]);
/**
 * Counselling & College Guide Data
 * Covers: college predictor, rank-vs-college, top colleges
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/examYears.ts [app-rsc] (ecmascript)");
;
const Y = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"];
const pages = [
    {
        slug: 'top-engineering-colleges-india',
        title: `Top Engineering Colleges in India ${Y} — Rankings, Cutoffs & Fees`,
        description: `Top engineering colleges in India ${Y}: IITs, NITs, IIITs ranked by NIRF. Includes cutoff ranks, fees, placements & how to get in.`,
        h1: 'Top Engineering Colleges',
        highlight: `India ${Y}`,
        heroSubtitle: `Comprehensive ranking of India's best engineering colleges with JEE cutoffs, average placements, and fee structure. Plan your college choice smartly.`,
        exam: 'JEE',
        sections: [
            {
                heading: 'Top 10 Engineering Colleges (NIRF Ranking)',
                table: {
                    headers: [
                        'Rank',
                        'College',
                        'JEE Cutoff (Gen)',
                        'Avg Package',
                        'Fees/Year'
                    ],
                    rows: [
                        [
                            '1',
                            'IIT Madras',
                            'AIR 1-500',
                            '₹25-30 LPA',
                            '₹2.2L'
                        ],
                        [
                            '2',
                            'IIT Delhi',
                            'AIR 1-600',
                            '₹28-35 LPA',
                            '₹2.2L'
                        ],
                        [
                            '3',
                            'IIT Bombay',
                            'AIR 1-400',
                            '₹30-40 LPA',
                            '₹2.2L'
                        ],
                        [
                            '4',
                            'IIT Kanpur',
                            'AIR 500-1500',
                            '₹22-28 LPA',
                            '₹2.2L'
                        ],
                        [
                            '5',
                            'IIT Kharagpur',
                            'AIR 600-2000',
                            '₹20-25 LPA',
                            '₹2.2L'
                        ],
                        [
                            '6',
                            'IIT Roorkee',
                            'AIR 800-2500',
                            '₹18-22 LPA',
                            '₹2.2L'
                        ],
                        [
                            '7',
                            'IIT Guwahati',
                            'AIR 1000-3000',
                            '₹16-20 LPA',
                            '₹2.2L'
                        ],
                        [
                            '8',
                            'IIT Hyderabad',
                            'AIR 1200-3500',
                            '₹18-22 LPA',
                            '₹2.2L'
                        ],
                        [
                            '9',
                            'NIT Trichy',
                            'JEE Main 95+ %ile',
                            '₹12-15 LPA',
                            '₹1.5L'
                        ],
                        [
                            '10',
                            'NIT Warangal',
                            'JEE Main 95+ %ile',
                            '₹10-14 LPA',
                            '₹1.5L'
                        ]
                    ]
                }
            },
            {
                heading: 'How to Choose the Right College',
                bullets: [
                    'Prioritize branch over college for top NITs (CSE at NIT Trichy > Mech at low-ranked IIT)',
                    'Check placement statistics — median package matters more than highest package',
                    'Consider location — proximity to tech hubs (Bangalore, Hyderabad, Chennai) helps internships',
                    'Research faculty and research output for IITs',
                    'Check industry connections and alumni network strength'
                ]
            },
            {
                heading: 'IIT vs NIT vs IIIT — Which One?',
                content: 'IITs are the gold standard for engineering in India, but top NITs and IIITs offer comparable education in specific branches. IIIT Hyderabad\'s CSE is often preferred over lower-ranked IIT CSE branches.',
                table: {
                    headers: [
                        'Parameter',
                        'IIT',
                        'NIT',
                        'IIIT'
                    ],
                    rows: [
                        [
                            'Admission',
                            'JEE Advanced',
                            'JEE Main',
                            'JEE Main'
                        ],
                        [
                            'Total seats',
                            '~17,000',
                            '~25,000',
                            '~5,000'
                        ],
                        [
                            'Avg package (CSE)',
                            '₹25-40 LPA',
                            '₹10-18 LPA',
                            '₹12-20 LPA'
                        ],
                        [
                            'Research focus',
                            'Very High',
                            'Moderate',
                            'High (CS focused)'
                        ],
                        [
                            'Global recognition',
                            'Excellent',
                            'Good',
                            'Good (in CS)'
                        ]
                    ]
                }
            }
        ],
        faqs: [
            {
                q: 'Which is the best engineering college in India?',
                a: `IIT Madras, IIT Delhi, and IIT Bombay consistently rank as the top 3 engineering colleges in India per NIRF ${Y} rankings.`
            },
            {
                q: 'What JEE rank is needed for top IITs?',
                a: 'For popular branches (CSE, ECE) at top 5 IITs, you typically need JEE Advanced AIR under 500. For other branches, AIR under 2000-3000.'
            }
        ],
        relatedSlugs: [
            `jee-main-cutoff-${Y}`,
            `jee-counselling-${Y}`,
            'jee-coaching',
            'jee-rank-predictor'
        ]
    },
    {
        slug: 'top-medical-colleges-india',
        title: `Top Medical Colleges in India ${Y} — NEET Cutoffs, Rankings & Fees`,
        description: `Top medical colleges in India ${Y}: AIIMS, government medical colleges ranked by NIRF. NEET cutoff ranks, fees, and seat matrix.`,
        h1: 'Top Medical Colleges',
        highlight: `India ${Y}`,
        heroSubtitle: `Complete ranking of India's best medical colleges for MBBS admission. Includes NEET cutoff ranks, government vs private fees, and tips for getting your dream college.`,
        exam: 'NEET',
        sections: [
            {
                heading: 'Top 10 Medical Colleges (NIRF)',
                table: {
                    headers: [
                        'Rank',
                        'College',
                        'NEET Cutoff (Gen)',
                        'Fees/Year',
                        'Type'
                    ],
                    rows: [
                        [
                            '1',
                            'AIIMS New Delhi',
                            'AIR 1-50',
                            '₹6,000',
                            'Central Govt'
                        ],
                        [
                            '2',
                            'PGIMER Chandigarh',
                            'AIR 50-150',
                            '₹10,000',
                            'Central Govt'
                        ],
                        [
                            '3',
                            'CMC Vellore',
                            'AIR 100-300',
                            '₹60,000',
                            'Private (aided)'
                        ],
                        [
                            '4',
                            'JIPMER Puducherry',
                            'AIR 50-200',
                            '₹8,000',
                            'Central Govt'
                        ],
                        [
                            '5',
                            'AIIMS Jodhpur',
                            'AIR 200-500',
                            '₹6,000',
                            'Central Govt'
                        ],
                        [
                            '6',
                            'Maulana Azad MC, Delhi',
                            'AIR 100-400',
                            '₹15,000',
                            'State Govt'
                        ],
                        [
                            '7',
                            'King George\'s MC, Lucknow',
                            'AIR 300-800',
                            '₹25,000',
                            'State Govt'
                        ],
                        [
                            '8',
                            'Grant MC Mumbai',
                            'AIR 400-1000',
                            '₹30,000',
                            'State Govt'
                        ],
                        [
                            '9',
                            'Madras MC Chennai',
                            'AIR 500-1200',
                            '₹20,000',
                            'State Govt'
                        ],
                        [
                            '10',
                            'Seth GS MC Mumbai',
                            'AIR 500-1500',
                            '₹30,000',
                            'State Govt'
                        ]
                    ]
                }
            },
            {
                heading: 'Government vs Private Medical Colleges',
                content: 'The fee difference between government and private medical colleges is enormous — ₹10K-50K/year vs ₹10-25 LPA for private colleges.',
                table: {
                    headers: [
                        'Parameter',
                        'Government',
                        'Private'
                    ],
                    rows: [
                        [
                            'Fees/Year',
                            '₹10K-1L',
                            '₹10-25L'
                        ],
                        [
                            'Total MBBS cost',
                            '₹1-5L',
                            '₹50L-1.5Cr'
                        ],
                        [
                            'Seats',
                            '~45,000',
                            '~45,000'
                        ],
                        [
                            'Cutoff',
                            'Higher NEET score needed',
                            'Lower score accepted'
                        ],
                        [
                            'Quality',
                            'Generally excellent',
                            'Varies widely'
                        ],
                        [
                            'Admission',
                            'NEET + counselling',
                            'NEET + management quota'
                        ]
                    ]
                }
            },
            {
                heading: 'NEET Score vs College Tier',
                bullets: [
                    '680-720: AIIMS Delhi, top central govt colleges',
                    '650-680: Good govt medical colleges in metros',
                    '600-650: State govt colleges in Tier 1 cities',
                    '550-600: State govt colleges in Tier 2 cities',
                    '500-550: Govt colleges in smaller cities or deemed universities',
                    'Below 500: Private medical colleges or re-attempt'
                ]
            }
        ],
        faqs: [
            {
                q: 'Which is the best medical college in India?',
                a: `AIIMS New Delhi consistently ranks #1 for MBBS in India. PGIMER Chandigarh, CMC Vellore, and JIPMER Puducherry are also top-ranked.`
            },
            {
                q: 'What NEET score is needed for AIIMS Delhi?',
                a: 'You typically need AIR under 50 (NEET score 700+) for AIIMS New Delhi MBBS admission through AIQ counselling.'
            }
        ],
        relatedSlugs: [
            `neet-cutoff-${Y}`,
            `neet-counselling-${Y}`,
            'neet-coaching',
            'neet-rank-predictor'
        ]
    },
    {
        slug: `jee-main-rank-vs-college`,
        title: `JEE Main Rank vs College ${Y} — Which College Can You Get?`,
        description: `JEE Main rank vs college mapping ${Y}: check which NITs, IIITs & GFTIs you can get based on your rank/percentile. Complete branch-wise analysis.`,
        h1: 'JEE Main Rank vs College',
        highlight: `${Y}`,
        heroSubtitle: `Find out which engineering college you can get based on your JEE Main ${Y} rank. Comprehensive branch-wise cutoff analysis for NITs, IIITs, and GFTIs.`,
        exam: 'JEE',
        sections: [
            {
                heading: 'Rank-wise College Mapping',
                table: {
                    headers: [
                        'Percentile',
                        'Approx Rank',
                        'Possible Colleges'
                    ],
                    rows: [
                        [
                            '99.5+',
                            '< 5,000',
                            'Top 10 NITs (CSE/ECE), IIIT Hyderabad'
                        ],
                        [
                            '99-99.5',
                            '5,000-10,000',
                            'Top NITs (most branches), all IIITs'
                        ],
                        [
                            '97-99',
                            '10,000-30,000',
                            'Mid-tier NITs, top GFTIs'
                        ],
                        [
                            '95-97',
                            '30,000-50,000',
                            'Lower NITs, all GFTIs'
                        ],
                        [
                            '90-95',
                            '50,000-1,00,000',
                            'Some GFTIs, state-level colleges'
                        ],
                        [
                            'Below 90',
                            '> 1,00,000',
                            'State colleges, private universities'
                        ]
                    ]
                }
            },
            {
                heading: 'Branch-wise Demand (Most to Least)',
                bullets: [
                    'Computer Science Engineering (CSE) — Highest demand, highest cutoff',
                    'Electronics & Communication (ECE)',
                    'Electrical Engineering (EE)',
                    'Mechanical Engineering (ME)',
                    'Civil Engineering (CE)',
                    'Chemical Engineering — Lower demand but good scope in R&D'
                ]
            }
        ],
        faqs: [
            {
                q: 'Can I get NIT with 95 percentile?',
                a: 'With 95 percentile (~rank 50,000), you can get admission in lower-ranked NITs in branches like Civil, Chemical, or Mechanical. Top NITs require 99+ percentile.'
            }
        ],
        relatedSlugs: [
            `jee-main-cutoff-${Y}`,
            'top-engineering-colleges-india',
            `jee-counselling-${Y}`,
            'jee-rank-predictor'
        ]
    },
    {
        slug: `neet-rank-vs-college`,
        title: `NEET Rank vs College ${Y} — Which Medical College Can You Get?`,
        description: `NEET rank vs college mapping ${Y}: find which medical colleges (AIIMS, Govt, Private) you can get based on your NEET score and AIR rank.`,
        h1: 'NEET Rank vs College',
        highlight: `${Y}`,
        heroSubtitle: `Check which medical college you can get based on your NEET ${Y} score. Comprehensive score-to-college mapping for AIQ and state quota.`,
        exam: 'NEET',
        sections: [
            {
                heading: 'Score-wise College Mapping',
                table: {
                    headers: [
                        'NEET Score',
                        'Approx AIR',
                        'Possible Colleges'
                    ],
                    rows: [
                        [
                            '700-720',
                            '1-100',
                            'AIIMS Delhi, top central govt colleges'
                        ],
                        [
                            '680-700',
                            '100-500',
                            'All AIIMS, JIPMER, top state govt colleges'
                        ],
                        [
                            '650-680',
                            '500-2,000',
                            'Good govt medical colleges in metros'
                        ],
                        [
                            '600-650',
                            '2,000-10,000',
                            'State govt colleges in Tier 1 cities'
                        ],
                        [
                            '550-600',
                            '10,000-30,000',
                            'Govt colleges in smaller cities'
                        ],
                        [
                            '500-550',
                            '30,000-60,000',
                            'Deemed universities, some private'
                        ],
                        [
                            'Below 500',
                            '60,000+',
                            'Private medical colleges'
                        ]
                    ]
                }
            }
        ],
        faqs: [
            {
                q: 'What NEET score is needed for a government medical college?',
                a: 'Generally, 550+ score (AIR under 30,000) gives a good chance at government medical colleges through AIQ counselling. State-wise cutoffs vary.'
            }
        ],
        relatedSlugs: [
            `neet-cutoff-${Y}`,
            'top-medical-colleges-india',
            `neet-counselling-${Y}`,
            'neet-rank-predictor'
        ]
    }
];
function getCounsellingPage(slug) {
    return pages.find((p)=>p.slug === slug);
}
function getAllCounsellingSlugs() {
    return pages.map((p)=>p.slug);
}
}),
];

//# sourceMappingURL=src_data_44ede9a3._.js.map
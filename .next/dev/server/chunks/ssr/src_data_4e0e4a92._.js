module.exports = [
"[project]/src/data/chapterData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$jeePhysics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/chapters/jeePhysics.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$jeeChemistry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/chapters/jeeChemistry.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$jeeMaths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/chapters/jeeMaths.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$neetBiology$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/chapters/neetBiology.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$neetPhysics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/chapters/neetPhysics.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$neetChemistry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/chapters/neetChemistry.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
const chapters = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$jeePhysics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jeePhysicsChapters"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$jeeChemistry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jeeChemistryChapters"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$jeeMaths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jeeMathsChapters"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$neetBiology$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["neetBiologyChapters"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$neetPhysics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["neetPhysicsChapters"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chapters$2f$neetChemistry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["neetChemistryChapters"]
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
"[project]/src/data/examInfoData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/examYears.ts [app-ssr] (ecmascript)");
;
const Y = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"];
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
"[project]/src/data/differenceBetweenData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/data/counsellingData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/examYears.ts [app-ssr] (ecmascript)");
;
const Y = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"];
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

//# sourceMappingURL=src_data_4e0e4a92._.js.map
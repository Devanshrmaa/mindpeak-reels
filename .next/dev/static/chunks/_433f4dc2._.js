(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/studyPlanGenerator.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateStudyPlan",
    ()=>generateStudyPlan,
    "getDailySchedule",
    ()=>getDailySchedule,
    "getMilestones",
    ()=>getMilestones,
    "getMonthsUntilExam",
    ()=>getMonthsUntilExam,
    "getPhaseBreakdown",
    ()=>getPhaseBreakdown,
    "getSubjectWeightage",
    ()=>getSubjectWeightage
]);
/**
 * Dynamic Study Plan Generator
 * ─────────────────────────────
 * Generates a personalised month-by-month study plan based on the
 * number of months remaining until the target exam (JEE / NEET).
 *
 * Fee is prorated from the relevant course tier:
 *   12+ months  →  2-year programme rate (prorated)
 *   3-11 months →  1-year programme rate (prorated)
 *   1-2 months  →  Crash course flat rate
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/examYears.ts [app-client] (ecmascript)");
;
/* ─── Fee constants (in ₹, excl. GST) ─── */ const FEES = {
    twoYear: 230000,
    oneYear: 130000,
    crashPerSubject: 18000,
    premiumCrashPerSubject: 30000
};
/* ─── Subject lists ─── */ const JEE_SUBJECTS = [
    'Physics',
    'Chemistry',
    'Mathematics'
];
const NEET_SUBJECTS = [
    'Physics',
    'Chemistry',
    'Biology'
];
/* ─── Curriculum topic pools ─── */ const JEE_CURRICULUM = {
    Physics: [
        'Units & Kinematics',
        'Laws of Motion & Friction',
        'Work, Energy & Power',
        'Rotational Motion',
        'Gravitation',
        'Fluid Mechanics',
        'Thermal Physics & Kinetic Theory',
        'Thermodynamics',
        'Oscillations & Waves',
        'Electrostatics',
        'Current Electricity',
        'Magnetism & EMI',
        'Optics (Ray + Wave)',
        'Modern Physics & Nuclear',
        'Semiconductors'
    ],
    Chemistry: [
        'Atomic Structure & Periodicity',
        'Chemical Bonding',
        'States of Matter & Solutions',
        'Thermodynamics & Equilibrium',
        'Redox & Electrochemistry',
        'Chemical Kinetics',
        'Surface Chemistry',
        's-block & p-block Elements',
        'd-block & f-block Elements',
        'Coordination Compounds',
        'Organic — GOC & Isomerism',
        'Organic — Hydrocarbons',
        'Organic — Haloalkanes, Alcohols, Ethers',
        'Organic — Carbonyl, Amines, Biomolecules',
        'Polymers & Chemistry in Everyday Life'
    ],
    Mathematics: [
        'Sets, Relations & Functions',
        'Trigonometry',
        'Complex Numbers & Quadratics',
        'Sequences & Series',
        'Permutations & Combinations',
        'Binomial Theorem',
        'Matrices & Determinants',
        'Limits, Continuity & Differentiability',
        'Differentiation & Applications',
        'Integration & Applications',
        'Differential Equations',
        'Coordinate Geometry (Straight Lines, Circles)',
        'Conics (Parabola, Ellipse, Hyperbola)',
        'Vectors & 3D Geometry',
        'Probability & Statistics'
    ]
};
const NEET_CURRICULUM = {
    Physics: [
        'Units, Dimensions & Motion',
        'Laws of Motion & Friction',
        'Work, Energy & Power',
        'Rotational Motion & Gravitation',
        'Mechanical Properties & Fluids',
        'Thermal Physics',
        'Thermodynamics',
        'Oscillations & Waves',
        'Electrostatics & Capacitors',
        'Current Electricity',
        'Magnetic Effects & EMI',
        'AC & EM Waves',
        'Ray Optics & Wave Optics',
        'Dual Nature & Atoms',
        'Nuclear Physics & Semiconductors'
    ],
    Chemistry: [
        'Atomic Structure & Periodic Table',
        'Chemical Bonding',
        'States of Matter & Solutions',
        'Chemical Thermodynamics & Equilibrium',
        'Redox & Electrochemistry',
        'Chemical Kinetics',
        'Surface Chemistry & Colloids',
        's-block & p-block Elements',
        'd-block & Coordination Compounds',
        'Organic — GOC & Hydrocarbons',
        'Organic — Haloalkanes, Alcohols, Ethers',
        'Organic — Aldehydes, Amines, Biomolecules',
        'Polymers & Environmental Chemistry'
    ],
    Biology: [
        'Cell Biology & Biomolecules',
        'Cell Division & Cell Cycle',
        'Morphology & Anatomy of Plants',
        'Plant Physiology (Transport, Nutrition, Growth)',
        'Photosynthesis & Respiration',
        'Animal Tissues & Structural Organisation',
        'Human Physiology — Digestion & Breathing',
        'Human Physiology — Circulation & Excretion',
        'Neural Control & Locomotion',
        'Reproduction in Organisms & Plants',
        'Human Reproduction & Reproductive Health',
        'Genetics — Mendel, Molecular Basis',
        'Evolution & Human Health',
        'Ecology — Organisms, Ecosystems, Biodiversity',
        'Biotechnology & Its Applications'
    ]
};
/* ─── Helpers ─── */ /**
 * Prorate fee with a short-duration premium.
 * Fewer months → higher per-month rate because the mentor delivers
 * the same syllabus in compressed time (more intensive sessions).
 *
 * Premium schedule:
 *   ≤ 4 months  → 40% markup
 *   ≤ 6 months  → 25% markup
 *   ≤ 8 months  → 15% markup
 *   ≤ 10 months → 5% markup
 *   > 10 months → no markup (standard rate)
 */ function prorateFee(base, fullMonths, actual) {
    const perMonth = base / fullMonths;
    let premium = 1;
    if (actual <= 4) premium = 1.4;
    else if (actual <= 6) premium = 1.25;
    else if (actual <= 8) premium = 1.15;
    else if (actual <= 10) premium = 1.05;
    return Math.round(perMonth * actual * premium / 1000) * 1000; // round to nearest 1000
}
function formatFee(n) {
    return '₹' + n.toLocaleString('en-IN') + ' + GST';
}
function distributeTopics(topics, totalMonths, reserveRevisionMonths) {
    const teachMonths = Math.max(1, totalMonths - reserveRevisionMonths);
    const perMonth = Math.ceil(topics.length / teachMonths);
    const result = [];
    for(let i = 0; i < teachMonths; i++){
        result.push(topics.slice(i * perMonth, (i + 1) * perMonth));
    }
    // Revision months — distribute all topics evenly for revision
    for(let i = 0; i < reserveRevisionMonths; i++){
        const start = Math.floor(i * topics.length / reserveRevisionMonths);
        const end = Math.floor((i + 1) * topics.length / reserveRevisionMonths);
        result.push(topics.slice(start, end).map((t)=>`Revise: ${t}`));
    }
    return result;
}
function getPhaseLabel(monthIdx, total) {
    const ratio = monthIdx / total;
    if (total <= 2) return 'Crash';
    if (ratio < 0.4) return 'Foundation';
    if (ratio < 0.7) return 'Intensive';
    if (ratio < 0.9) return 'Revision';
    return 'Mock Test & Fine-tuning';
}
function monthTips(phase) {
    switch(phase){
        case 'Crash':
            return [
                'Focus only on high-weightage chapters',
                'Solve last 3 years\' papers daily',
                'Formula revision every morning'
            ];
        case 'Foundation':
            return [
                'Build concepts from NCERT first',
                'Maintain a formula notebook',
                'Solve 20-30 problems daily per subject'
            ];
        case 'Intensive':
            return [
                'Attempt topic-wise mock tests',
                'Analyse weak areas & revisit',
                'Increase problem-solving speed'
            ];
        case 'Revision':
            return [
                'Full syllabus revision — one subject/day',
                'Attempt 2-3 full-length mocks per week',
                'Focus on accuracy over speed'
            ];
        case 'Mock Test & Fine-tuning':
            return [
                'Daily full-length mock tests',
                'Post-test error analysis (30 min)',
                'Keep a calm routine — sleep 7+ hours'
            ];
        default:
            return [
                'Stay consistent and follow the schedule'
            ];
    }
}
function generateStudyPlan(examType, monthsRemaining) {
    const totalMonths = Math.max(1, Math.min(monthsRemaining, 24));
    const subjects = examType === 'JEE' ? JEE_SUBJECTS : NEET_SUBJECTS;
    const curriculum = examType === 'JEE' ? JEE_CURRICULUM : NEET_CURRICULUM;
    /* ── Pick the actual exam cycle this plan targets ──
   * If the student has more months than the next exam allows, they're
   * preparing for a later cycle. Match the slug to the real course in
   * coursesData.ts so CTAs never 404.
   */ const monthsToNextExam = examType === 'JEE' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonthsUntilJee"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonthsUntilNeet"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]);
    const monthsToOneYearTarget = examType === 'JEE' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonthsUntilJee"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ONE_YEAR_TARGET"]) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonthsUntilNeet"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ONE_YEAR_TARGET"]);
    let examYear;
    if (totalMonths <= Math.max(2, monthsToNextExam + 1)) examYear = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"];
    else if (totalMonths <= Math.max(12, monthsToOneYearTarget + 1)) examYear = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ONE_YEAR_TARGET"];
    else examYear = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TWO_YEAR_TARGET"];
    /* ── Determine tier ── */ let tier;
    let tierLabel;
    let feeNumeric;
    let courseSlug;
    let courseName;
    // 1-year course slug uses `jee-target-` (no "main"); 2-year uses `jee-main-target-`.
    const oneYearSlug = examType === 'JEE' ? `jee-target-${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ONE_YEAR_TARGET"]}` : `neet-target-${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ONE_YEAR_TARGET"]}`;
    const twoYearSlug = examType === 'JEE' ? `jee-main-target-${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TWO_YEAR_TARGET"]}` : `neet-target-${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TWO_YEAR_TARGET"]}`;
    if (totalMonths <= 2) {
        tier = 'crash';
        tierLabel = '1-on-1 Crash Course';
        feeNumeric = FEES.premiumCrashPerSubject * subjects.length;
        courseSlug = '1-on-1-crash-program';
        courseName = `${examType} 1-on-1 Crash Programme`;
    } else if (totalMonths <= 6) {
        tier = 'intensive';
        tierLabel = 'Intensive Accelerated Programme';
        feeNumeric = prorateFee(FEES.oneYear, 12, totalMonths);
        courseSlug = oneYearSlug;
        courseName = `${examType} Intensive ${totalMonths}-Month Programme`;
    } else if (totalMonths <= 12) {
        tier = 'standard';
        tierLabel = '1-Year Programme';
        feeNumeric = prorateFee(FEES.oneYear, 12, totalMonths);
        courseSlug = oneYearSlug;
        courseName = `${examType} ${totalMonths}-Month Target Programme`;
    } else {
        tier = 'extended';
        tierLabel = '2-Year Foundation Programme';
        feeNumeric = prorateFee(FEES.twoYear, 24, totalMonths);
        courseSlug = twoYearSlug;
        courseName = `${examType} ${totalMonths}-Month Foundation Programme`;
    }
    /* ── Build month-by-month curriculum ── */ const revisionMonths = tier === 'crash' ? 0 : Math.max(1, Math.floor(totalMonths * 0.2));
    const subjectSchedules = {};
    for (const subj of subjects){
        const topics = curriculum[subj] || [];
        subjectSchedules[subj] = distributeTopics(topics, totalMonths, revisionMonths);
    }
    const months = [];
    for(let m = 0; m < totalMonths; m++){
        const phase = getPhaseLabel(m, totalMonths);
        const monthSubjects = subjects.map((subj)=>({
                name: subj,
                topics: subjectSchedules[subj][m] || []
            }));
        const mockTests = tier === 'crash' ? 3 : m >= totalMonths - revisionMonths ? Math.min(4, 2 + Math.floor((m - (totalMonths - revisionMonths)) / 1)) : m < totalMonths * 0.4 ? 1 : 2;
        months.push({
            month: m + 1,
            label: `Month ${m + 1} — ${phase}`,
            phase,
            subjects: monthSubjects,
            weeklyHours: tier === 'crash' ? 40 : tier === 'intensive' ? 30 : 20,
            mockTests,
            tips: monthTips(phase)
        });
    }
    /* ── Summary ── */ const summary = tier === 'crash' ? `With only ${totalMonths} month${totalMonths > 1 ? 's' : ''} until ${examType} ${examYear}, this crash course focuses exclusively on high-weightage chapters, rapid formula revision, and daily mock tests. Your dedicated 1-on-1 mentor will prioritise the 40-50 most important topics to maximise your score in the shortest time.` : tier === 'intensive' ? `This ${totalMonths}-month intensive plan covers the complete ${examType} syllabus at an accelerated pace. With 30+ hours/week of focused 1-on-1 sessions, weekly mocks, and targeted revision, you'll be exam-ready for ${examType} ${examYear}. Fee is prorated from the standard 1-year programme.` : tier === 'standard' ? `Your personalised ${totalMonths}-month programme provides comprehensive syllabus coverage, phased learning, and progressive mock-test intensity to ensure you peak at the right time for ${examType} ${examYear}.` : `This ${totalMonths}-month extended programme gives you the luxury of time to build unshakeable fundamentals before progressively advancing to competition-level problem-solving for ${examType} ${examYear}.`;
    return {
        examType,
        examYear,
        totalMonths,
        tier,
        tierLabel,
        fee: formatFee(feeNumeric),
        feeNumeric,
        months,
        courseSlug,
        courseName,
        summary
    };
}
function getMonthsUntilExam(examType) {
    const now = new Date();
    // JEE Main Session 1 is around Jan 20; NEET is around May 4
    const examMonth = examType === 'JEE' ? 0 : 4; // Jan or May
    const examDay = examType === 'JEE' ? 20 : 4;
    const examDate = new Date(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"], examMonth, examDay);
    const diff = examDate.getTime() - now.getTime();
    return Math.max(1, Math.round(diff / (1000 * 60 * 60 * 24 * 30.44)));
}
function getDailySchedule(tier) {
    if (tier === 'crash') {
        return [
            {
                time: '6:00 AM',
                activity: 'Formula Revision & Quick Notes',
                duration: '1 hr',
                type: 'revision'
            },
            {
                time: '7:00 AM',
                activity: 'Subject 1 — 1-on-1 Live Class',
                duration: '2 hrs',
                type: 'study'
            },
            {
                time: '9:00 AM',
                activity: 'Breakfast Break',
                duration: '30 min',
                type: 'break'
            },
            {
                time: '9:30 AM',
                activity: 'PYQ Practice (Subject 1)',
                duration: '1.5 hrs',
                type: 'self-study'
            },
            {
                time: '11:00 AM',
                activity: 'Subject 2 — 1-on-1 Live Class',
                duration: '2 hrs',
                type: 'study'
            },
            {
                time: '1:00 PM',
                activity: 'Lunch & Rest',
                duration: '1 hr',
                type: 'break'
            },
            {
                time: '2:00 PM',
                activity: 'Subject 3 — 1-on-1 Live Class',
                duration: '2 hrs',
                type: 'study'
            },
            {
                time: '4:00 PM',
                activity: 'Mock Test / Topic Test',
                duration: '2 hrs',
                type: 'test'
            },
            {
                time: '6:00 PM',
                activity: 'Break & Light Exercise',
                duration: '30 min',
                type: 'break'
            },
            {
                time: '6:30 PM',
                activity: 'Mock Test Analysis & Error Log',
                duration: '1.5 hrs',
                type: 'revision'
            },
            {
                time: '8:00 PM',
                activity: 'High-Weightage Problems',
                duration: '1.5 hrs',
                type: 'self-study'
            },
            {
                time: '9:30 PM',
                activity: 'Quick Revision & Sleep',
                duration: '30 min',
                type: 'revision'
            }
        ];
    }
    if (tier === 'intensive') {
        return [
            {
                time: '6:30 AM',
                activity: 'Morning Revision & Formulas',
                duration: '45 min',
                type: 'revision'
            },
            {
                time: '7:15 AM',
                activity: 'Subject 1 — 1-on-1 Live Class',
                duration: '1.5 hrs',
                type: 'study'
            },
            {
                time: '8:45 AM',
                activity: 'Breakfast Break',
                duration: '30 min',
                type: 'break'
            },
            {
                time: '9:15 AM',
                activity: 'Self-Practice (Subject 1)',
                duration: '1 hr',
                type: 'self-study'
            },
            {
                time: '10:15 AM',
                activity: 'Subject 2 — 1-on-1 Live Class',
                duration: '1.5 hrs',
                type: 'study'
            },
            {
                time: '11:45 AM',
                activity: 'Self-Practice (Subject 2)',
                duration: '1 hr',
                type: 'self-study'
            },
            {
                time: '12:45 PM',
                activity: 'Lunch & Rest',
                duration: '1 hr',
                type: 'break'
            },
            {
                time: '1:45 PM',
                activity: 'Subject 3 — 1-on-1 Live Class',
                duration: '1.5 hrs',
                type: 'study'
            },
            {
                time: '3:15 PM',
                activity: 'Self-Practice (Subject 3)',
                duration: '1 hr',
                type: 'self-study'
            },
            {
                time: '4:15 PM',
                activity: 'Break',
                duration: '30 min',
                type: 'break'
            },
            {
                time: '4:45 PM',
                activity: 'Mock Test / Topic Test',
                duration: '1.5 hrs',
                type: 'test'
            },
            {
                time: '6:15 PM',
                activity: 'Error Analysis & Revision',
                duration: '1 hr',
                type: 'revision'
            }
        ];
    }
    // standard / extended
    return [
        {
            time: '7:00 AM',
            activity: 'Morning Revision & NCERT Read',
            duration: '1 hr',
            type: 'revision'
        },
        {
            time: '8:00 AM',
            activity: 'Subject 1 — 1-on-1 Live Class',
            duration: '1.5 hrs',
            type: 'study'
        },
        {
            time: '9:30 AM',
            activity: 'Breakfast Break',
            duration: '30 min',
            type: 'break'
        },
        {
            time: '10:00 AM',
            activity: 'Self-Practice (Subject 1)',
            duration: '1 hr',
            type: 'self-study'
        },
        {
            time: '11:00 AM',
            activity: 'Subject 2 — 1-on-1 Live Class',
            duration: '1.5 hrs',
            type: 'study'
        },
        {
            time: '12:30 PM',
            activity: 'Lunch & Rest',
            duration: '1 hr',
            type: 'break'
        },
        {
            time: '1:30 PM',
            activity: 'Self-Practice (Subject 2)',
            duration: '1 hr',
            type: 'self-study'
        },
        {
            time: '2:30 PM',
            activity: 'Subject 3 — 1-on-1 Live Class',
            duration: '1 hr',
            type: 'study'
        },
        {
            time: '3:30 PM',
            activity: 'Break & Exercise',
            duration: '30 min',
            type: 'break'
        },
        {
            time: '4:00 PM',
            activity: 'Self-Practice (Subject 3)',
            duration: '1 hr',
            type: 'self-study'
        },
        {
            time: '5:00 PM',
            activity: 'Doubt Resolution & Revision',
            duration: '1 hr',
            type: 'revision'
        }
    ];
}
function getSubjectWeightage(examType) {
    if (examType === 'JEE') {
        return {
            subjects: [
                {
                    subject: 'Physics',
                    percentage: 33,
                    totalQuestions: 30,
                    totalMarks: 100,
                    keyTopics: [
                        'Mechanics (25%)',
                        'Electrodynamics (20%)',
                        'Modern Physics (15%)',
                        'Optics (12%)',
                        'Thermodynamics (10%)'
                    ]
                },
                {
                    subject: 'Chemistry',
                    percentage: 33,
                    totalQuestions: 30,
                    totalMarks: 100,
                    keyTopics: [
                        'Organic Chemistry (35%)',
                        'Inorganic Chemistry (30%)',
                        'Physical Chemistry (35%)'
                    ]
                },
                {
                    subject: 'Mathematics',
                    percentage: 34,
                    totalQuestions: 30,
                    totalMarks: 100,
                    keyTopics: [
                        'Calculus (30%)',
                        'Algebra (25%)',
                        'Coordinate Geometry (20%)',
                        'Trigonometry (10%)',
                        'Probability (8%)'
                    ]
                }
            ],
            totalQuestions: 90,
            totalMarks: 300,
            examDuration: '3 hours',
            examPattern: '20 MCQs + 10 Numerical per subject (5 optional)'
        };
    }
    return {
        subjects: [
            {
                subject: 'Physics',
                percentage: 25,
                totalQuestions: 50,
                totalMarks: 200,
                keyTopics: [
                    'Mechanics (30%)',
                    'Electrodynamics (22%)',
                    'Modern Physics (12%)',
                    'Optics (10%)',
                    'Heat & Thermo (10%)'
                ]
            },
            {
                subject: 'Chemistry',
                percentage: 25,
                totalQuestions: 50,
                totalMarks: 200,
                keyTopics: [
                    'Organic Chemistry (30%)',
                    'Inorganic Chemistry (35%)',
                    'Physical Chemistry (35%)'
                ]
            },
            {
                subject: 'Biology',
                percentage: 50,
                totalQuestions: 100,
                totalMarks: 400,
                keyTopics: [
                    'Human Physiology (20%)',
                    'Genetics & Evolution (18%)',
                    'Plant Physiology (12%)',
                    'Cell Biology (10%)',
                    'Ecology (10%)'
                ]
            }
        ],
        totalQuestions: 200,
        totalMarks: 800,
        examDuration: '3 hours 20 minutes',
        examPattern: '200 MCQs (attempt 180) — Biology: 100, Physics: 50, Chemistry: 50'
    };
}
function getPhaseBreakdown(plan) {
    const phaseCounts = {};
    for (const m of plan.months){
        phaseCounts[m.phase] = (phaseCounts[m.phase] || 0) + 1;
    }
    const phaseColors = {
        'Crash': '#ef4444',
        'Foundation': '#3b82f6',
        'Intensive': '#f59e0b',
        'Revision': '#22c55e',
        'Mock Test & Fine-tuning': '#a855f7'
    };
    const phaseDescriptions = {
        'Crash': 'Laser-focused on top 40-50 high-weightage chapters. Daily mocks, rapid formula revision, PYQ drills.',
        'Foundation': 'Build rock-solid fundamentals from NCERT. Concept clarity, formula derivation, basic problem-solving.',
        'Intensive': 'Full-speed syllabus coverage with advanced problems. HC Verma, Irodov, and competition-level questions.',
        'Revision': 'Comprehensive revision of all topics. Focus on weak areas identified through mock analysis.',
        'Mock Test & Fine-tuning': 'Full-length NTA-pattern mocks daily. Time management, accuracy tuning, and exam temperament building.'
    };
    const phases = [];
    const order = [
        'Foundation',
        'Crash',
        'Intensive',
        'Revision',
        'Mock Test & Fine-tuning'
    ];
    for (const name of order){
        if (phaseCounts[name]) {
            phases.push({
                name,
                color: phaseColors[name] || '#6b7280',
                months: phaseCounts[name],
                percentage: Math.round(phaseCounts[name] / plan.totalMonths * 100),
                description: phaseDescriptions[name] || ''
            });
        }
    }
    return phases;
}
function getMilestones(plan) {
    const milestones = [];
    const total = plan.totalMonths;
    if (total <= 2) {
        milestones.push({
            month: 1,
            title: 'High-Weightage Chapters Done',
            description: 'Complete top 40-50 chapters across all subjects'
        }, {
            month: total,
            title: 'Exam Ready',
            description: 'Final mock scores consistently above target cutoff'
        });
    } else {
        milestones.push({
            month: 1,
            title: 'Foundation Begins',
            description: 'NCERT mastery and basic problem-solving starts'
        });
        const mid = Math.ceil(total * 0.5);
        milestones.push({
            month: mid,
            title: '50% Syllabus Complete',
            description: 'Half the syllabus covered with concept clarity'
        });
        const revStart = Math.ceil(total * 0.7);
        milestones.push({
            month: revStart,
            title: 'Revision Phase Begins',
            description: 'Full syllabus covered — revision & mock drills start'
        });
        milestones.push({
            month: total,
            title: 'Exam Ready',
            description: 'Peak performance through intensive mock cycles'
        });
    }
    return milestones;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/StudyPlanSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StudyPlanSection",
    ()=>StudyPlanSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Embeddable Study Plan Preview Section
 * ──────────────────────────────────────
 * Compact version of the full /study-plan page.
 * Shows a dynamic study-plan preview for JEE or NEET, and links
 * to the full planner page. Designed to drop into any page.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RouterLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IndianRupee$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/indian-rupee.js [app-client] (ecmascript) <export default as IndianRupee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$studyPlanGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/studyPlanGenerator.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DemoBookingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DemoBookingModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
/* ─── Tier helpers ─── */ function tierGradient(tier) {
    switch(tier){
        case 'crash':
            return 'from-red-500/20 to-orange-500/20 border-red-500/30';
        case 'intensive':
            return 'from-orange-500/20 to-amber-500/20 border-orange-500/30';
        case 'standard':
            return 'from-blue-500/20 to-cyan-500/20 border-blue-500/30';
        case 'extended':
            return 'from-indigo-500/20 to-purple-500/20 border-indigo-500/30';
        default:
            return 'from-blue-500/20 to-cyan-500/20 border-blue-500/30';
    }
}
function tierIcon(tier) {
    switch(tier){
        case 'crash':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"];
        case 'intensive':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"];
        case 'standard':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"];
        case 'extended':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"];
        default:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"];
    }
}
const StudyPlanSection = (param)=>{
    let { examType, monthsOverride, heading, themed = false } = param;
    _s();
    const { openDemoModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DemoBookingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDemoModal"])();
    const months = monthsOverride ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$studyPlanGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonthsUntilExam"])(examType);
    const plan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StudyPlanSection.useMemo[plan]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$studyPlanGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateStudyPlan"])(examType, months)
    }["StudyPlanSection.useMemo[plan]"], [
        examType,
        months
    ]);
    const TierIcon = tierIcon(plan.tier);
    // Show first 3 months as a preview
    const previewMonths = plan.months.slice(0, 3);
    const cardBg = themed ? 'bg-secondary/40 border-border' : 'bg-white/[0.04] border-white/10';
    const text = themed ? 'text-foreground' : 'text-white';
    const textMuted = themed ? 'text-muted-foreground' : 'text-gray-400';
    const textAccent = themed ? 'text-primary' : 'text-amber-400';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-12 sm:py-16 px-4 sm:px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    className: "text-center mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: `font-display font-bold text-xl sm:text-2xl md:text-3xl ${text} mb-3`,
                            children: heading || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Your Personalised",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: themed ? 'text-gradient-gold' : 'bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent',
                                        children: [
                                            examType,
                                            " ",
                                            plan.examYear,
                                            " Study Plan"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/StudyPlanSection.tsx",
                                        lineNumber: 108,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/src/components/StudyPlanSection.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `${textMuted} text-sm sm:text-base max-w-2xl mx-auto`,
                            children: [
                                months,
                                " months until ",
                                examType,
                                " ",
                                plan.examYear,
                                " — your personalised ",
                                plan.tierLabel,
                                " is ready. Curriculum, fee, and schedule auto-adjust based on time remaining."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StudyPlanSection.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/StudyPlanSection.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    className: `bg-gradient-to-r ${tierGradient(plan.tier)} border rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-4 mb-8`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TierIcon, {
                            className: `w-10 h-10 ${textAccent} flex-shrink-0`
                        }, void 0, false, {
                            fileName: "[project]/src/components/StudyPlanSection.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 text-center sm:text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: `font-bold text-lg ${text}`,
                                    children: plan.tierLabel
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StudyPlanSection.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `${textMuted} text-sm mt-0.5`,
                                    children: [
                                        plan.summary.slice(0, 150),
                                        "…"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/StudyPlanSection.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StudyPlanSection.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center gap-1 flex-shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `${textMuted} text-xs uppercase`,
                                    children: "Prorated Fee"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StudyPlanSection.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `${text} font-bold text-xl`,
                                    children: plan.fee
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StudyPlanSection.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StudyPlanSection.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/StudyPlanSection.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-3 mb-8",
                    children: [
                        {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
                            label: 'Duration',
                            value: `${plan.totalMonths} months`
                        },
                        {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IndianRupee$3e$__["IndianRupee"],
                            label: 'Fee',
                            value: plan.fee
                        },
                        {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
                            label: 'Mock Tests',
                            value: `${plan.months.reduce((s, m)=>s + m.mockTests, 0)} total`
                        },
                        {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
                            label: 'Weekly Hours',
                            value: `${plan.months[0]?.weeklyHours ?? 20} hrs`
                        }
                    ].map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 15
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                delay: i * 0.08
                            },
                            className: `${cardBg} border rounded-xl p-3.5 text-center`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(stat.icon, {
                                    className: `w-5 h-5 mx-auto mb-1.5 ${textAccent}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StudyPlanSection.tsx",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `${textMuted} text-[10px] uppercase tracking-wider`,
                                    children: stat.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StudyPlanSection.tsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `${text} font-semibold text-sm mt-0.5`,
                                    children: stat.value
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StudyPlanSection.tsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, i, true, {
                            fileName: "[project]/src/components/StudyPlanSection.tsx",
                            lineNumber: 146,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/StudyPlanSection.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: `font-bold text-base ${text} mb-1`,
                            children: [
                                "Plan Preview — First ",
                                previewMonths.length,
                                " Months"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StudyPlanSection.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        previewMonths.map((block)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    x: -15
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    delay: block.month * 0.08
                                },
                                className: `${cardBg} border rounded-xl p-4`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `w-8 h-8 rounded-full border-2 ${textAccent} border-current flex items-center justify-center text-xs font-bold flex-shrink-0`,
                                                children: block.month
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/StudyPlanSection.tsx",
                                                lineNumber: 176,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `${text} font-semibold text-sm`,
                                                        children: block.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/StudyPlanSection.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `${textMuted} text-xs`,
                                                        children: [
                                                            block.weeklyHours,
                                                            " hrs/week · ",
                                                            block.mockTests,
                                                            " mock",
                                                            block.mockTests > 1 ? 's' : ''
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/StudyPlanSection.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/StudyPlanSection.tsx",
                                                lineNumber: 179,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/StudyPlanSection.tsx",
                                        lineNumber: 175,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid sm:grid-cols-3 gap-2",
                                        children: block.subjects.map((subj)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `${textAccent} text-xs font-medium mb-1`,
                                                        children: subj.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/StudyPlanSection.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "space-y-0.5",
                                                        children: [
                                                            subj.topics.slice(0, 3).map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: `flex items-start gap-1.5 ${textMuted} text-xs`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                            className: "w-3 h-3 mt-0.5 text-green-500 flex-shrink-0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/StudyPlanSection.tsx",
                                                                            lineNumber: 193,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "line-clamp-1",
                                                                            children: t
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/StudyPlanSection.tsx",
                                                                            lineNumber: 194,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, i, true, {
                                                                    fileName: "[project]/src/components/StudyPlanSection.tsx",
                                                                    lineNumber: 192,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))),
                                                            subj.topics.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: `${textMuted} text-xs pl-5`,
                                                                children: [
                                                                    "+",
                                                                    subj.topics.length - 3,
                                                                    " more"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/StudyPlanSection.tsx",
                                                                lineNumber: 198,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/StudyPlanSection.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, subj.name, true, {
                                                fileName: "[project]/src/components/StudyPlanSection.tsx",
                                                lineNumber: 188,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StudyPlanSection.tsx",
                                        lineNumber: 186,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, block.month, true, {
                                fileName: "[project]/src/components/StudyPlanSection.tsx",
                                lineNumber: 167,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))),
                        plan.months.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `${textMuted} text-xs text-center`,
                            children: [
                                "+ ",
                                plan.months.length - 3,
                                " more months in the full plan"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StudyPlanSection.tsx",
                            lineNumber: 209,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/StudyPlanSection.tsx",
                    lineNumber: 162,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row items-center justify-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                            to: "/study-plan",
                            className: "w-full sm:w-auto px-7 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-amber-500/20 transition flex items-center justify-center gap-2 text-sm",
                            children: [
                                "View Full ",
                                months,
                                "-Month Plan ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StudyPlanSection.tsx",
                                    lineNumber: 221,
                                    columnNumber: 43
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StudyPlanSection.tsx",
                            lineNumber: 217,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: openDemoModal,
                            className: `w-full sm:w-auto px-7 py-3 ${themed ? 'border border-border text-foreground hover:border-primary hover:text-primary' : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'} rounded-full transition flex items-center justify-center gap-2 text-sm`,
                            children: [
                                "Book Free Trial ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StudyPlanSection.tsx",
                                    lineNumber: 227,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StudyPlanSection.tsx",
                            lineNumber: 223,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/StudyPlanSection.tsx",
                    lineNumber: 216,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/StudyPlanSection.tsx",
            lineNumber: 96,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/StudyPlanSection.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(StudyPlanSection, "m3/LTI37Sk7E/KplBE3cqa2hEkc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DemoBookingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDemoModal"]
    ];
});
_c = StudyPlanSection;
var _c;
__turbopack_context__.k.register(_c, "StudyPlanSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/StudyPlanSection.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/StudyPlanSection.tsx [app-client] (ecmascript)"));
}),
"[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Calendar
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Calendar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Calendar", [
    [
        "path",
        {
            d: "M8 2v4",
            key: "1cmpym"
        }
    ],
    [
        "path",
        {
            d: "M16 2v4",
            key: "4m81vk"
        }
    ],
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            key: "1hopcy"
        }
    ],
    [
        "path",
        {
            d: "M3 10h18",
            key: "8toen8"
        }
    ]
]);
;
 //# sourceMappingURL=calendar.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Calendar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrendingUp
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const TrendingUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("TrendingUp", [
    [
        "polyline",
        {
            points: "22 7 13.5 15.5 8.5 10.5 2 17",
            key: "126l90"
        }
    ],
    [
        "polyline",
        {
            points: "16 7 22 7 22 13",
            key: "kwv8wd"
        }
    ]
]);
;
 //# sourceMappingURL=trending-up.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrendingUp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Zap
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Zap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Zap", [
    [
        "path",
        {
            d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
            key: "1xq2db"
        }
    ]
]);
;
 //# sourceMappingURL=zap.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Zap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GraduationCap
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const GraduationCap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("GraduationCap", [
    [
        "path",
        {
            d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
            key: "j76jl0"
        }
    ],
    [
        "path",
        {
            d: "M22 10v6",
            key: "1lu8f3"
        }
    ],
    [
        "path",
        {
            d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5",
            key: "1r8lef"
        }
    ]
]);
;
 //# sourceMappingURL=graduation-cap.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GraduationCap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/indian-rupee.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IndianRupee
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const IndianRupee = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("IndianRupee", [
    [
        "path",
        {
            d: "M6 3h12",
            key: "ggurg9"
        }
    ],
    [
        "path",
        {
            d: "M6 8h12",
            key: "6g4wlu"
        }
    ],
    [
        "path",
        {
            d: "m6 13 8.5 8",
            key: "u1kupk"
        }
    ],
    [
        "path",
        {
            d: "M6 13h3",
            key: "wdp6ag"
        }
    ],
    [
        "path",
        {
            d: "M9 13c6.667 0 6.667-10 0-10",
            key: "1nkvk2"
        }
    ]
]);
;
 //# sourceMappingURL=indian-rupee.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/indian-rupee.js [app-client] (ecmascript) <export default as IndianRupee>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IndianRupee",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/indian-rupee.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_433f4dc2._.js.map
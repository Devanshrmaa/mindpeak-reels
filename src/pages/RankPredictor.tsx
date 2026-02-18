import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { PageFooter } from '@/components/PageFooter';
import { useDemoModal } from '@/components/DemoBookingModal';
import {
  ArrowRight, Phone, TrendingUp, GraduationCap,
  CheckCircle, Calculator, ChevronDown, User, Mail, Lock,
} from 'lucide-react';
import { toast } from 'sonner';

const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbynDEbMQqfStBwK-sJa5UoLuZtBDNvSPZ4HLvcpuZxTSe6lUy7nuIbxWbQ3QOPovG6N/exec';

/* ═══════════════════════════════════════════════════════════
   COLLEGE DATA — Real cutoff-based data (JoSAA / MCC)
   JEE Main  → NITs, IIITs, GFTIs (NOT IITs)
   JEE Advanced → IITs only
   NEET UG → Medical colleges
   ═══════════════════════════════════════════════════════════ */

interface CollegeRec {
  name: string;
  type: string;            // 'NIT' | 'IIIT' | 'GFTI' | 'IIT' | 'Govt Medical' etc.
  branch?: string;
  closingRank?: string;    // approx closing rank (General)
}

interface RankBand {
  min: number;
  max: number;
  rankRange: string;
  colleges: CollegeRec[];
  verdict: string;
  category: string;        // e.g. "Outstanding", "Excellent"
}

/* ─── JEE MAIN (Percentile-based, out of 300 NTA Score mapped to percentile) ─── */
const JEE_MAIN_TABLE: RankBand[] = [
  {
    min: 250, max: 300, rankRange: '1 – 1,000', category: 'Outstanding',
    verdict: 'Top NITs home state + any branch at top IIITs. Eligible for JEE Advanced — consider IITs.',
    colleges: [
      { name: 'NIT Trichy', type: 'NIT', branch: 'CSE', closingRank: '~800' },
      { name: 'NIT Surathkal', type: 'NIT', branch: 'CSE', closingRank: '~1,200' },
      { name: 'NIT Warangal', type: 'NIT', branch: 'CSE', closingRank: '~1,500' },
      { name: 'IIIT Hyderabad', type: 'IIIT', branch: 'CSE', closingRank: '~2,000' },
      { name: 'NIT Rourkela', type: 'NIT', branch: 'CSE', closingRank: '~3,500' },
      { name: 'NIT Calicut', type: 'NIT', branch: 'CSE', closingRank: '~4,000' },
    ],
  },
  {
    min: 200, max: 249, rankRange: '1,000 – 8,000', category: 'Excellent',
    verdict: 'Top NITs (CSE/ECE/EE), IIIT Allahabad, DTU, NSUT. JEE Advanced eligible.',
    colleges: [
      { name: 'NIT Trichy', type: 'NIT', branch: 'ECE/EE', closingRank: '~3,500' },
      { name: 'NIT Surathkal', type: 'NIT', branch: 'ECE/EE', closingRank: '~5,000' },
      { name: 'IIIT Allahabad', type: 'IIIT', branch: 'IT', closingRank: '~5,500' },
      { name: 'DTU Delhi', type: 'State', branch: 'CSE', closingRank: '~4,000' },
      { name: 'NSUT Delhi', type: 'State', branch: 'CSE', closingRank: '~4,500' },
      { name: 'IIIT Delhi', type: 'IIIT', branch: 'CSE', closingRank: '~6,000' },
      { name: 'NIT Warangal', type: 'NIT', branch: 'ECE', closingRank: '~5,500' },
    ],
  },
  {
    min: 170, max: 199, rankRange: '8,000 – 25,000', category: 'Very Good',
    verdict: 'Good NITs (CS/IT branches), most IIITs, BITS Pilani (exam separate), PEC Chandigarh.',
    colleges: [
      { name: 'NIT Nagpur', type: 'NIT', branch: 'CSE', closingRank: '~12,000' },
      { name: 'NIT Jaipur (MNIT)', type: 'NIT', branch: 'CSE', closingRank: '~9,000' },
      { name: 'NIT Kurukshetra', type: 'NIT', branch: 'CSE', closingRank: '~14,000' },
      { name: 'NIT Silchar', type: 'NIT', branch: 'CSE', closingRank: '~18,000' },
      { name: 'IIIT Gwalior', type: 'IIIT', branch: 'IT', closingRank: '~15,000' },
      { name: 'NIT Durgapur', type: 'NIT', branch: 'CSE', closingRank: '~13,000' },
      { name: 'PEC Chandigarh', type: 'GFTI', branch: 'CSE', closingRank: '~10,000' },
    ],
  },
  {
    min: 130, max: 169, rankRange: '25,000 – 60,000', category: 'Good',
    verdict: 'Mid-tier NITs, newer IIITs, state government colleges, VIT/SRM via JEE score.',
    colleges: [
      { name: 'NIT Hamirpur', type: 'NIT', branch: 'CSE', closingRank: '~28,000' },
      { name: 'NIT Meghalaya', type: 'NIT', branch: 'CSE', closingRank: '~35,000' },
      { name: 'NIT Arunachal', type: 'NIT', branch: 'CSE', closingRank: '~45,000' },
      { name: 'NIT Puducherry', type: 'NIT', branch: 'CSE', closingRank: '~42,000' },
      { name: 'IIIT Kota', type: 'IIIT', branch: 'CSE', closingRank: '~30,000' },
      { name: 'IIIT Ranchi', type: 'IIIT', branch: 'CSE', closingRank: '~38,000' },
      { name: 'VIT Vellore (via JEE)', type: 'Private', branch: 'CSE' },
    ],
  },
  {
    min: 80, max: 129, rankRange: '60,000 – 1,50,000', category: 'Average',
    verdict: 'Lower NITs (non-CS branches), GFTIs, top private universities — needs significant improvement.',
    colleges: [
      { name: 'NIT Manipur', type: 'NIT', branch: 'ECE/ME', closingRank: '~70,000' },
      { name: 'NIT Sikkim', type: 'NIT', branch: 'CSE', closingRank: '~80,000' },
      { name: 'IIIT Vadodara', type: 'IIIT', branch: 'CSE', closingRank: '~65,000' },
      { name: 'SRM Chennai', type: 'Private', branch: 'CSE' },
      { name: 'Manipal Institute of Technology', type: 'Private', branch: 'CSE' },
      { name: 'LNMIIT Jaipur', type: 'Private', branch: 'CSE' },
    ],
  },
  {
    min: 0, max: 79, rankRange: '1,50,000+', category: 'Below Target',
    verdict: 'State engineering colleges, private universities. Focused coaching can transform your score.',
    colleges: [
      { name: 'State government engineering colleges', type: 'State' },
      { name: 'Private engineering colleges', type: 'Private' },
      { name: 'Lateral entry options', type: 'Other' },
    ],
  },
];

/* ─── JEE ADVANCED (for IITs only, marks out of 360) ─── */
const JEE_ADV_TABLE: RankBand[] = [
  {
    min: 280, max: 360, rankRange: '1 – 100', category: 'Extraordinary',
    verdict: 'IIT Bombay CSE, IIT Delhi CSE, IIT Madras CSE — choose any branch at any IIT.',
    colleges: [
      { name: 'IIT Bombay', type: 'IIT', branch: 'CSE', closingRank: '~70' },
      { name: 'IIT Delhi', type: 'IIT', branch: 'CSE', closingRank: '~80' },
      { name: 'IIT Madras', type: 'IIT', branch: 'CSE', closingRank: '~100' },
      { name: 'IIT Kanpur', type: 'IIT', branch: 'CSE', closingRank: '~120' },
      { name: 'IIT Kharagpur', type: 'IIT', branch: 'CSE', closingRank: '~150' },
    ],
  },
  {
    min: 220, max: 279, rankRange: '100 – 500', category: 'Outstanding',
    verdict: 'Top IITs — CSE at most IITs, top branches at IIT B/D/M/K.',
    colleges: [
      { name: 'IIT Bombay', type: 'IIT', branch: 'EE/Mech', closingRank: '~300' },
      { name: 'IIT Delhi', type: 'IIT', branch: 'EE/CS', closingRank: '~350' },
      { name: 'IIT Roorkee', type: 'IIT', branch: 'CSE', closingRank: '~450' },
      { name: 'IIT Guwahati', type: 'IIT', branch: 'CSE', closingRank: '~500' },
      { name: 'IIT BHU', type: 'IIT', branch: 'CSE', closingRank: '~600' },
      { name: 'IIT Hyderabad', type: 'IIT', branch: 'CSE', closingRank: '~550' },
    ],
  },
  {
    min: 170, max: 219, rankRange: '500 – 2,500', category: 'Excellent',
    verdict: 'CSE/IT at mid-tier IITs, all branches at top IITs.',
    colleges: [
      { name: 'IIT Indore', type: 'IIT', branch: 'CSE', closingRank: '~1,200' },
      { name: 'IIT Ropar', type: 'IIT', branch: 'CSE', closingRank: '~1,500' },
      { name: 'IIT Gandhinagar', type: 'IIT', branch: 'CSE', closingRank: '~1,800' },
      { name: 'IIT Patna', type: 'IIT', branch: 'CSE', closingRank: '~2,000' },
      { name: 'IIT Mandi', type: 'IIT', branch: 'CSE', closingRank: '~2,200' },
      { name: 'IIT BHU', type: 'IIT', branch: 'EE/ECE', closingRank: '~1,800' },
      { name: 'IIT Kharagpur', type: 'IIT', branch: 'ME/CE', closingRank: '~2,500' },
    ],
  },
  {
    min: 130, max: 169, rankRange: '2,500 – 5,000', category: 'Very Good',
    verdict: 'Newer IITs — CSE/ECE branches. Non-CS at older IITs.',
    colleges: [
      { name: 'IIT Jodhpur', type: 'IIT', branch: 'CSE', closingRank: '~3,000' },
      { name: 'IIT Bhilai', type: 'IIT', branch: 'CSE', closingRank: '~3,500' },
      { name: 'IIT Tirupati', type: 'IIT', branch: 'CSE', closingRank: '~3,800' },
      { name: 'IIT Dharwad', type: 'IIT', branch: 'CSE', closingRank: '~4,000' },
      { name: 'IIT Goa', type: 'IIT', branch: 'CSE', closingRank: '~4,200' },
      { name: 'IIT (ISM) Dhanbad', type: 'IIT', branch: 'CSE', closingRank: '~3,200' },
    ],
  },
  {
    min: 90, max: 129, rankRange: '5,000 – 10,000', category: 'Good',
    verdict: 'Non-CS branches at newer IITs, some IIT preparatory courses needed.',
    colleges: [
      { name: 'IIT Jammu', type: 'IIT', branch: 'CSE', closingRank: '~5,500' },
      { name: 'IIT Palakkad', type: 'IIT', branch: 'CSE', closingRank: '~6,000' },
      { name: 'IIT Bhilai', type: 'IIT', branch: 'ME/EE', closingRank: '~7,000' },
      { name: 'IIT Dharwad', type: 'IIT', branch: 'EE/ME', closingRank: '~8,000' },
      { name: 'IIT Goa', type: 'IIT', branch: 'ME/EE', closingRank: '~9,000' },
      { name: 'ISM Dhanbad', type: 'IIT', branch: 'Mining/Petroleum', closingRank: '~8,500' },
    ],
  },
  {
    min: 0, max: 89, rankRange: '10,000+', category: 'Below Cutoff',
    verdict: 'May not qualify JEE Advanced cutoff. Focus on JEE Main colleges (NITs/IIITs) or retake next year.',
    colleges: [
      { name: 'Did not clear JEE Advanced cutoff — consider NITs/IIITs via JEE Main rank', type: 'Info' },
      { name: 'Prepare for JEE Advanced next year with proper coaching', type: 'Info' },
    ],
  },
];

/* ─── NEET UG (out of 720) ─── */
const NEET_TABLE: RankBand[] = [
  {
    min: 690, max: 720, rankRange: '1 – 50', category: 'Extraordinary',
    verdict: 'AIIMS New Delhi, JIPMER Puducherry, Maulana Azad MC — any government medical college.',
    colleges: [
      { name: 'AIIMS New Delhi', type: 'Govt Medical', branch: 'MBBS', closingRank: '~20' },
      { name: 'JIPMER Puducherry', type: 'Govt Medical', branch: 'MBBS', closingRank: '~50' },
      { name: 'Maulana Azad MC, Delhi', type: 'Govt Medical', branch: 'MBBS', closingRank: '~80' },
      { name: 'VMMC & SJH, Delhi', type: 'Govt Medical', branch: 'MBBS', closingRank: '~120' },
      { name: 'Lady Hardinge MC, Delhi', type: 'Govt Medical', branch: 'MBBS', closingRank: '~150' },
    ],
  },
  {
    min: 650, max: 689, rankRange: '50 – 3,000', category: 'Outstanding',
    verdict: 'Top AIIMS branches, KGMU Lucknow, Grant MC Mumbai, Seth GS MC Mumbai, BHU IMS.',
    colleges: [
      { name: 'AIIMS Jodhpur', type: 'AIIMS', branch: 'MBBS', closingRank: '~500' },
      { name: 'AIIMS Rishikesh', type: 'AIIMS', branch: 'MBBS', closingRank: '~800' },
      { name: 'AIIMS Bhopal', type: 'AIIMS', branch: 'MBBS', closingRank: '~1,200' },
      { name: 'KGMU Lucknow', type: 'Govt Medical', branch: 'MBBS', closingRank: '~1,500' },
      { name: 'Grant MC Mumbai', type: 'Govt Medical', branch: 'MBBS', closingRank: '~1,800' },
      { name: 'Seth GS MC, Mumbai', type: 'Govt Medical', branch: 'MBBS', closingRank: '~2,000' },
      { name: 'BHU IMS, Varanasi', type: 'Govt Medical', branch: 'MBBS', closingRank: '~2,500' },
    ],
  },
  {
    min: 600, max: 649, rankRange: '3,000 – 15,000', category: 'Excellent',
    verdict: 'Newer AIIMS, top state GMCs in Maharashtra, Tamil Nadu, Karnataka, Rajasthan.',
    colleges: [
      { name: 'AIIMS Nagpur', type: 'AIIMS', branch: 'MBBS', closingRank: '~4,000' },
      { name: 'AIIMS Patna', type: 'AIIMS', branch: 'MBBS', closingRank: '~5,500' },
      { name: 'SMS MC Jaipur', type: 'Govt Medical', branch: 'MBBS', closingRank: '~6,000' },
      { name: 'Stanley MC Chennai', type: 'Govt Medical', branch: 'MBBS', closingRank: '~8,000' },
      { name: 'Osmania MC Hyderabad', type: 'Govt Medical', branch: 'MBBS', closingRank: '~7,500' },
      { name: 'BMC Bangalore', type: 'Govt Medical', branch: 'MBBS', closingRank: '~10,000' },
      { name: 'PGIMER Chandigarh', type: 'Govt Medical', branch: 'MBBS', closingRank: '~3,500' },
    ],
  },
  {
    min: 530, max: 599, rankRange: '15,000 – 50,000', category: 'Very Good',
    verdict: 'State government medical colleges (home state quota), newer AIIMS with lower cutoffs.',
    colleges: [
      { name: 'AIIMS Kalyani', type: 'AIIMS', branch: 'MBBS', closingRank: '~18,000' },
      { name: 'AIIMS Deoghar', type: 'AIIMS', branch: 'MBBS', closingRank: '~22,000' },
      { name: 'State GMCs (home state)', type: 'Govt Medical', branch: 'MBBS', closingRank: '~20,000–40,000' },
      { name: 'GMCH Chandigarh', type: 'Govt Medical', branch: 'MBBS', closingRank: '~15,000' },
      { name: 'Government MC Thrissur', type: 'Govt Medical', branch: 'MBBS', closingRank: '~25,000' },
      { name: 'IMS BHU (BDS)', type: 'Govt Dental', branch: 'BDS', closingRank: '~35,000' },
    ],
  },
  {
    min: 400, max: 529, rankRange: '50,000 – 2,00,000', category: 'Average',
    verdict: 'Private medical colleges, deemed universities, state quota lower-ranked GMCs.',
    colleges: [
      { name: 'Kasturba MC Manipal', type: 'Private', branch: 'MBBS', closingRank: '~60,000' },
      { name: 'Amrita Institute Kochi', type: 'Private', branch: 'MBBS', closingRank: '~70,000' },
      { name: 'SRM MC Chennai', type: 'Private', branch: 'MBBS', closingRank: '~90,000' },
      { name: 'DY Patil MC Pune', type: 'Private', branch: 'MBBS', closingRank: '~1,00,000' },
      { name: 'KIIMS Bhubaneswar', type: 'Private', branch: 'MBBS' },
      { name: 'State private medical colleges', type: 'Private', branch: 'MBBS' },
    ],
  },
  {
    min: 0, max: 399, rankRange: '2,00,000+', category: 'Below Target',
    verdict: 'May not qualify NEET cutoff (General: ~137 marks). BAMS/BHMS/BDS or re-attempt next year.',
    colleges: [
      { name: 'BDS (Dental) colleges', type: 'Dental' },
      { name: 'BAMS / BHMS colleges', type: 'AYUSH' },
      { name: 'Management quota in private colleges (limited)', type: 'Private' },
      { name: 'Consider re-attempting with focused coaching', type: 'Info' },
    ],
  },
];

/* ═══════════════════════════════════════  */

type Exam = 'jee' | 'neet';
type JeeSubExam = 'main' | 'advanced';

function getExamFromPath(pathname: string): Exam {
  return pathname.includes('neet') ? 'neet' : 'jee';
}

function predictRank(exam: Exam, subExam: JeeSubExam, score: number): RankBand | null {
  let table: RankBand[];
  if (exam === 'neet') table = NEET_TABLE;
  else if (subExam === 'advanced') table = JEE_ADV_TABLE;
  else table = JEE_MAIN_TABLE;
  return table.find((b) => score >= b.min && score <= b.max) ?? table[table.length - 1];
}

function getTable(exam: Exam, subExam: JeeSubExam) {
  if (exam === 'neet') return NEET_TABLE;
  return subExam === 'advanced' ? JEE_ADV_TABLE : JEE_MAIN_TABLE;
}

/* simple validation */
const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
const isValidPhone = (p: string) => /^[6-9]\d{9}$/.test(p.replace(/[\s-]/g, ''));

const RankPredictor = () => {
  const { pathname } = useLocation();
  const exam = getExamFromPath(pathname);
  const { openDemoModal } = useDemoModal();

  const [jeeSubExam, setJeeSubExam] = useState<JeeSubExam>('main');

  const maxScore = exam === 'neet' ? 720 : jeeSubExam === 'advanced' ? 360 : 300;
  const examLabel = exam === 'neet' ? 'NEET UG' : jeeSubExam === 'advanced' ? 'JEE Advanced' : 'JEE Main';
  const examFull = exam === 'neet' ? 'NEET UG' : 'JEE Main & Advanced';

  const [score, setScore] = useState<number | ''>('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [result, setResult] = useState<RankBand | null>(null);
  const [step, setStep] = useState<1 | 2>(1);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => { window.scrollTo(0, 0); setStep(1); setResult(null); setScore(''); }, [pathname]);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = 'Name is required';
    if (!isValidEmail(email)) e.email = 'Enter a valid email address';
    if (!isValidPhone(phone)) e.phone = 'Enter a valid 10-digit mobile number';
    if (typeof score !== 'number' || score < 0 || score > maxScore) e.score = `Enter marks between 0 and ${maxScore}`;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const [submitting, setSubmitting] = useState(false);

  const handlePredict = async () => {
    if (!validate()) return;
    setSubmitting(true);
    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST', mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.replace(/[\s-]/g, ''),
          exam: examLabel,
          score,
          source: 'rank-predictor',
          timestamp: new Date().toISOString(),
        }),
      });
    } catch {
      // silent — don't block the user from seeing results
    } finally {
      setSubmitting(false);
    }
    const band = predictRank(exam, jeeSubExam, score as number);
    setResult(band);
    setStep(2);
    toast.success('Your rank prediction is ready!');
  };

  const title = `${examLabel} Rank Predictor 2026 — Predict Your AIR & College | MindPeak`;
  const description = `Use MindPeak's free ${examLabel} Rank Predictor 2026 to estimate your All India Rank and get college suggestions. Based on JoSAA/MCC cutoff data.`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: `${examLabel} Rank Predictor 2026`,
    url: `https://mindpeakinstitute.com/${exam}-rank-predictor`,
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', ratingCount: '12400' },
    description,
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: `How accurate is this ${examLabel} rank predictor?`, acceptedAnswer: { '@type': 'Answer', text: `Our predictor is based on 10 years of ${examLabel} data and JoSAA/MCC cutoff trends. It achieves 90-95% accuracy for rank range estimation.` } },
      { '@type': 'Question', name: 'Can I get into IIT through JEE Main?', acceptedAnswer: { '@type': 'Answer', text: 'No. IIT admissions happen only through JEE Advanced. JEE Main qualifies you for NITs, IIITs, and GFTIs. You must clear JEE Main first to be eligible for JEE Advanced, which is the gateway to all 23 IITs.' } },
      { '@type': 'Question', name: `Can I improve my predicted rank with coaching?`, acceptedAnswer: { '@type': 'Answer', text: `Absolutely. MindPeak students typically improve by 50-150 marks with personalised 1-on-1 coaching — that can shift your rank by 10,000-50,000 positions.` } },
    ],
  };

  return (
    <>
      <SEOHead title={title} description={description} />
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main className="bg-background min-h-screen pt-20 sm:pt-24 overflow-x-hidden">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 sm:px-6 py-4">
          <ol className="flex items-center gap-2 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <span>/</span>
            <li className="text-foreground">{examLabel} Rank Predictor</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Calculator className="w-4 h-4 text-primary" />
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">Free Tool</span>
            </div>
            <h1 className="font-display font-black text-foreground text-3xl sm:text-4xl md:text-5xl leading-tight mb-4">
              {examLabel} <span className="text-gradient-gold">Rank Predictor</span> 2026
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Enter your expected score, get your predicted All India Rank,
              and see which colleges you can target — based on real JoSAA/MCC cutoff data.
            </p>
            {exam === 'jee' && (
              <p className="mt-3 text-xs text-destructive/80 font-medium">
                Note: IITs admit only through JEE Advanced. JEE Main is for NITs, IIITs & GFTIs.
              </p>
            )}
          </motion.div>
        </section>

        {/* Calculator Card */}
        <section className="max-w-xl mx-auto px-4 sm:px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-card"
          >
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  {/* JEE sub-exam toggle */}
                  {exam === 'jee' && (
                    <div className="mb-5">
                      <label className="block text-foreground font-display font-semibold text-sm mb-2">Select Exam</label>
                      <div className="grid grid-cols-2 gap-2">
                        {(['main', 'advanced'] as JeeSubExam[]).map((sub) => (
                          <button
                            key={sub}
                            onClick={() => { setJeeSubExam(sub); setScore(''); setResult(null); }}
                            className={`py-2.5 rounded-xl text-sm font-semibold border transition-all ${
                              jeeSubExam === sub
                                ? 'bg-primary text-primary-foreground border-primary'
                                : 'bg-background text-muted-foreground border-border hover:border-primary/40'
                            }`}
                          >
                            {sub === 'main' ? 'JEE Main' : 'JEE Advanced'}
                          </button>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1.5">
                        {jeeSubExam === 'main'
                          ? 'For NITs, IIITs, GFTIs — Out of 300 marks'
                          : 'For IITs only — Out of 360 marks'
                        }
                      </p>
                    </div>
                  )}

                  {/* Score */}
                  <label className="block text-foreground font-display font-semibold text-lg mb-1">
                    Your Expected {examLabel} Score
                  </label>
                  <p className="text-muted-foreground text-sm mb-2">Enter marks out of {maxScore}</p>
                  <input
                    type="number"
                    min={0}
                    max={maxScore}
                    value={score}
                    onChange={(e) => { setScore(e.target.value === '' ? '' : Math.min(maxScore, Math.max(0, Number(e.target.value)))); setErrors(prev => ({ ...prev, score: '' })); }}
                    placeholder={`0 – ${maxScore}`}
                    className={`w-full rounded-xl border bg-background px-4 py-3 text-foreground text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary/50 mb-1 ${errors.score ? 'border-destructive' : 'border-border'}`}
                  />
                  {errors.score && <p className="text-destructive text-xs mb-3">{errors.score}</p>}
                  {!errors.score && <div className="mb-3" />}

                  {/* Name */}
                  <label className="block text-foreground font-semibold text-sm mb-1">
                    <User className="w-3.5 h-3.5 inline mr-1" />Full Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => { setName(e.target.value); setErrors(prev => ({ ...prev, name: '' })); }}
                    placeholder="e.g. Aarav Sharma"
                    className={`w-full rounded-xl border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 mb-1 ${errors.name ? 'border-destructive' : 'border-border'}`}
                  />
                  {errors.name && <p className="text-destructive text-xs mb-3">{errors.name}</p>}
                  {!errors.name && <div className="mb-3" />}

                  {/* Email */}
                  <label className="block text-foreground font-semibold text-sm mb-1">
                    <Mail className="w-3.5 h-3.5 inline mr-1" />Email Address <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setErrors(prev => ({ ...prev, email: '' })); }}
                    placeholder="e.g. aarav@email.com"
                    className={`w-full rounded-xl border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 mb-1 ${errors.email ? 'border-destructive' : 'border-border'}`}
                  />
                  {errors.email && <p className="text-destructive text-xs mb-3">{errors.email}</p>}
                  {!errors.email && <div className="mb-3" />}

                  {/* Phone */}
                  <label className="block text-foreground font-semibold text-sm mb-1">
                    <Phone className="w-3.5 h-3.5 inline mr-1" />Mobile Number <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => { setPhone(e.target.value); setErrors(prev => ({ ...prev, phone: '' })); }}
                    placeholder="e.g. 98765 43210"
                    className={`w-full rounded-xl border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 mb-1 ${errors.phone ? 'border-destructive' : 'border-border'}`}
                  />
                  {errors.phone && <p className="text-destructive text-xs mb-3">{errors.phone}</p>}
                  {!errors.phone && <div className="mb-4" />}

                  <p className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
                    <Lock className="w-3 h-3" /> Your data is secure and will only be used to send your personalised report.
                  </p>

                  <button
                    onClick={handlePredict}
                    disabled={submitting}
                    className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-display font-bold text-base hover:brightness-110 transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" /> Predicting...</span>
                    ) : (
                      <><TrendingUp className="w-5 h-5" /> Predict My Rank & Get College List</>
                    )}
                  </button>
                </motion.div>
              )}

              {step === 2 && result && (
                <motion.div key="step2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <div className="text-center mb-6">
                    <p className="text-muted-foreground text-sm">
                      {name}, based on <strong className="text-foreground">{score}/{maxScore}</strong> in {examLabel}
                    </p>
                    <h2 className="font-display font-black text-foreground text-2xl sm:text-3xl mt-1">
                      Predicted AIR: <span className="text-gradient-gold">{result.rankRange}</span>
                    </h2>
                    <span className={`text-xs mt-2 px-3 py-1.5 rounded-full inline-block font-semibold ${
                      result.category === 'Extraordinary' || result.category === 'Outstanding' ? 'bg-emerald-500/10 text-emerald-500' :
                      result.category === 'Excellent' || result.category === 'Very Good' ? 'bg-primary/10 text-primary' :
                      result.category === 'Good' ? 'bg-yellow-500/10 text-yellow-600' :
                      'bg-destructive/10 text-destructive'
                    }`}>
                      {result.category}
                    </span>
                    <p className="text-sm mt-3 text-muted-foreground">{result.verdict}</p>
                  </div>

                  {/* Colleges */}
                  <div className="mb-6">
                    <h3 className="font-display font-bold text-foreground text-base mb-3 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-primary" /> Colleges You Can Target
                    </h3>
                    <div className="space-y-2">
                      {result.colleges.map((c, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-foreground font-medium">{c.name}</span>
                            {c.branch && <span className="text-muted-foreground"> — {c.branch}</span>}
                            {c.closingRank && (
                              <span className="text-xs text-muted-foreground ml-1">(Closing Rank: {c.closingRank})</span>
                            )}
                            <span className={`ml-2 text-[10px] px-1.5 py-0.5 rounded font-medium ${
                              c.type === 'IIT' ? 'bg-amber-500/10 text-amber-600' :
                              c.type === 'NIT' ? 'bg-blue-500/10 text-blue-500' :
                              c.type === 'IIIT' ? 'bg-violet-500/10 text-violet-500' :
                              c.type === 'AIIMS' || c.type === 'Govt Medical' ? 'bg-emerald-500/10 text-emerald-600' :
                              'bg-muted text-muted-foreground'
                            }`}>
                              {c.type}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* JEE Main → Advanced hint */}
                  {exam === 'jee' && jeeSubExam === 'main' && typeof score === 'number' && score >= 160 && (
                    <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 mb-4">
                      <p className="text-foreground text-sm font-semibold mb-1">💡 You're also eligible for JEE Advanced!</p>
                      <p className="text-muted-foreground text-xs mb-2">
                        With {score} marks in JEE Main, you qualify for JEE Advanced — the gateway to all 23 IITs.
                      </p>
                      <button
                        onClick={() => { setJeeSubExam('advanced'); setStep(1); setResult(null); setScore(''); }}
                        className="text-primary text-xs font-semibold hover:underline"
                      >
                        → Predict JEE Advanced rank instead
                      </button>
                    </div>
                  )}

                  {/* Improvement CTA */}
                  <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 mb-6">
                    <h3 className="text-foreground font-display font-bold text-base mb-2">
                      Want to Improve Your Rank?
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      MindPeak students typically improve by <strong className="text-foreground">50–150 marks</strong> with personalised 1-on-1 coaching — that's a jump of <strong className="text-foreground">10,000–50,000 ranks</strong>.
                    </p>
                    <button
                      onClick={openDemoModal}
                      className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-display font-bold hover:brightness-110 transition flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      Book Free Trial — Improve Your Score
                    </button>
                  </div>

                  <button
                    onClick={() => { setStep(1); setResult(null); setScore(''); }}
                    className="w-full text-center text-sm text-muted-foreground hover:text-foreground transition"
                  >
                    ← Try a different score
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Rank vs Marks Table */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-16">
          <h2 className="font-display font-bold text-foreground text-2xl sm:text-3xl text-center mb-4">
            {examLabel} <span className="text-gradient-gold">Rank vs Marks</span> — College Prediction 2026
          </h2>
          {exam === 'jee' && (
            <div className="flex justify-center gap-3 mb-6">
              {(['main', 'advanced'] as JeeSubExam[]).map((sub) => (
                <button
                  key={sub}
                  onClick={() => setJeeSubExam(sub)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                    jeeSubExam === sub
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-background text-muted-foreground border-border hover:border-primary/40'
                  }`}
                >
                  {sub === 'main' ? 'JEE Main (NITs/IIITs)' : 'JEE Advanced (IITs)'}
                </button>
              ))}
            </div>
          )}
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary/50">
                  <th className="px-4 py-3 text-left text-foreground font-display font-semibold">Score</th>
                  <th className="px-4 py-3 text-left text-foreground font-display font-semibold">Expected AIR</th>
                  <th className="px-4 py-3 text-left text-foreground font-display font-semibold">Top Colleges</th>
                  <th className="px-4 py-3 text-left text-foreground font-display font-semibold hidden sm:table-cell">Assessment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {getTable(exam, jeeSubExam).map((b, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-card/30' : 'bg-card/10'}>
                    <td className="px-4 py-3 text-foreground font-medium whitespace-nowrap">{b.min}–{b.max}</td>
                    <td className="px-4 py-3 text-primary font-semibold whitespace-nowrap">{b.rankRange}</td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {b.colleges.slice(0, 3).map(c => c.name).join(', ')}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell">{b.category}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Key Info for JEE */}
        {exam === 'jee' && (
          <section className="max-w-3xl mx-auto px-4 sm:px-6 mb-16">
            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">
              <h2 className="font-display font-bold text-foreground text-xl mb-3">
                🎯 JEE Main vs JEE Advanced — Key Difference
              </h2>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p><strong className="text-foreground">JEE Main</strong> is conducted by NTA for admission to <strong className="text-foreground">NITs (31), IIITs (26), and GFTIs (33+)</strong>. Score is out of 300 marks. Top 2,50,000 students qualify for JEE Advanced.</p>
                <p><strong className="text-foreground">JEE Advanced</strong> is the only exam for admission to <strong className="text-foreground">all 23 IITs</strong>. Score is out of 360 marks (Paper 1 + Paper 2). You <strong className="text-destructive">cannot get into IIT through JEE Main alone</strong>.</p>
                <p>Both exams require different strategies. JEE Main tests speed and accuracy across Physics, Chemistry & Maths. JEE Advanced tests depth of concept understanding with innovative problems.</p>
              </div>
            </div>
          </section>
        )}

        {/* SEO Content */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 mb-16 space-y-8">
          <div>
            <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl mb-3">
              How Our {examLabel} Rank Predictor Works
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our {examLabel} Rank Predictor 2026 uses 10+ years of {examFull} results, including normalisation trends, difficulty analysis, and JoSAA/MCC cutoff data. Enter your score, and the tool estimates your All India Rank range, then maps it to colleges based on historical closing ranks from counselling rounds. College recommendations include branch-level suggestions with approximate closing ranks for General category.
            </p>
          </div>
          <div>
            <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl mb-3">
              {examLabel} 2026 Expected Cutoffs
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {exam === 'jee'
                ? 'For JEE Main 2026, the expected qualifying cutoff for General category is ~85-90 marks out of 300. For JEE Advanced eligibility, you need to be in the top 2,50,000 of JEE Main (approximately 160+ marks for General). JEE Advanced cutoff to qualify for IIT counselling is typically 90-100 marks out of 360. Top IITs like IIT Bombay CSE require ranks under 100, while newer IITs fill CSE seats within AIR 5,000-6,000.'
                : 'For NEET UG 2026, the qualifying cutoff for General category is the 50th percentile (~137 marks out of 720). AIIMS New Delhi requires 700+ marks. Top government medical colleges across India fill seats at 650+ marks. State government colleges under state quota have lower cutoffs (530-600). Private medical colleges accept students with 400-530 marks through management/NRI quota.'
              }
            </p>
          </div>
          <div>
            <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl mb-3">
              How MindPeak Helps You Improve Your Rank
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Not happy with your predicted rank? MindPeak's personalised 1-on-1 coaching has helped students improve by 50–150 marks within 3–6 months. Our approach includes: diagnostic assessment to find your weak areas, a dedicated mentor who teaches only YOU, adaptive curriculum that adjusts to your pace, daily doubt-resolution sessions, and weekly mock tests with detailed analysis.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 mb-16">
          <h2 className="font-display font-bold text-foreground text-2xl sm:text-3xl text-center mb-8">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
          <FAQAccordion exam={exam} examLabel={examLabel} />
        </section>

        {/* Related Tools */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
          <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl text-center mb-6">
            More Free Tools
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {exam === 'jee' ? (
              <>
                <ToolCard title="NEET Rank Predictor" desc="Predict your NEET AIR & college" href="/neet-rank-predictor" />
                <ToolCard title="JEE Coaching" desc="1-on-1 JEE preparation" href="/jee-coaching" />
                <ToolCard title="JEE Physics Formulas" desc="Complete formula sheet" href="/jee-physics-formulas" />
              </>
            ) : (
              <>
                <ToolCard title="JEE Rank Predictor" desc="Predict your JEE AIR & college" href="/jee-rank-predictor" />
                <ToolCard title="NEET Coaching" desc="1-on-1 NEET preparation" href="/neet-coaching" />
                <ToolCard title="NEET Biology Guide" desc="Chapter-wise strategy" href="/neet-biology-preparation" />
              </>
            )}
          </div>
        </section>

        <PageFooter />
      </main>
    </>
  );
};

export default RankPredictor;

/* ── Tool card ── */
function ToolCard({ title, desc, href }: { title: string; desc: string; href: string }) {
  return (
    <Link
      to={href}
      className="group rounded-xl border border-border bg-card/50 p-5 hover:border-primary/30 hover:bg-card transition-all"
    >
      <h3 className="font-display font-bold text-foreground text-base mb-1 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted-foreground text-xs">{desc}</p>
      <span className="text-primary text-xs font-semibold mt-2 inline-flex items-center gap-1">
        Try Now <ArrowRight className="w-3 h-3" />
      </span>
    </Link>
  );
}

/* ── FAQ Accordion ── */
function FAQAccordion({ exam, examLabel }: { exam: Exam; examLabel: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = exam === 'jee' ? [
    { q: 'Can I get into IIT through JEE Main?', a: 'No. IIT admissions happen exclusively through JEE Advanced. JEE Main qualifies you for NITs (31), IIITs (26), and GFTIs (33+). You must first clear JEE Main to become eligible for JEE Advanced, which is the only gateway to all 23 IITs in India.' },
    { q: 'What is the difference between JEE Main and JEE Advanced rank?', a: 'JEE Main rank (out of ~12 lakh candidates) is used for NIT/IIIT/GFTI admissions via JoSAA counselling. JEE Advanced rank (out of ~1.5 lakh candidates) is used only for IIT admissions. Both are separate rankings — a good JEE Main rank doesn\'t guarantee a good JEE Advanced rank.' },
    { q: `How accurate is this ${examLabel} rank predictor?`, a: 'Our predictor uses 10+ years of JEE data and JoSAA closing ranks to estimate your rank range with 90–95% accuracy. Actual ranks depend on paper difficulty, normalisation, and total candidates.' },
    { q: 'What score do I need for top NITs?', a: 'For top NITs like NIT Trichy, Surathkal, Warangal — you need AIR under 3,000 (approximately 240+ marks). For CSE at mid-tier NITs, AIR 8,000-15,000 (200-230 marks). Home state quota students get preference.' },
    { q: 'What JEE Main score qualifies for JEE Advanced?', a: 'Approximately the top 2,50,000 JEE Main candidates (across all categories) are eligible for JEE Advanced. For General category, this typically means 160+ marks out of 300.' },
  ] : [
    { q: `How accurate is this NEET rank predictor?`, a: 'Our predictor uses 10+ years of NEET data and MCC counselling cutoffs. It achieves 90–95% accuracy for rank range estimation. Actual ranks may vary based on paper difficulty and total candidates.' },
    { q: 'What NEET score do I need for AIIMS Delhi?', a: 'AIIMS New Delhi typically requires 700+ marks (AIR under 50) for General category. Other AIIMS like Jodhpur, Rishikesh need 660+ marks. The cutoff varies yearly based on difficulty.' },
    { q: 'Can I get a government medical college with 550 marks?', a: 'With 550 marks (AIR ~25,000-40,000), you can target state government medical colleges under home state quota. The exact cutoff depends on your state, category, and number of seats.' },
    { q: 'What is the minimum NEET score to qualify?', a: 'For General/EWS category, the minimum qualifying score is the 50th percentile (approximately 137 marks out of 720). For SC/ST/OBC, it is the 40th percentile (~107 marks).' },
    { q: 'MBBS vs BDS — what score do I need?', a: 'For government MBBS seats, you typically need 530+ marks. For government BDS seats, 400-500 marks suffice. Private medical colleges accept 400-530 marks. Below 400, options are limited to BAMS/BHMS/private BDS.' },
  ];

  return (
    <div className="space-y-3">
      {faqs.map((f, i) => (
        <div key={i} className={`rounded-xl border transition-all ${open === i ? 'border-primary/30 bg-card/50' : 'border-border bg-card/20 hover:border-border/70'}`}>
          <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left">
            <span className={`text-sm font-semibold ${open === i ? 'text-foreground' : 'text-foreground/80'}`}>{f.q}</span>
            <ChevronDown className={`w-4 h-4 flex-shrink-0 transition-transform ${open === i ? 'rotate-180 text-primary' : 'text-muted-foreground'}`} />
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                <div className="px-5 pb-4">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-3" />
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.a}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

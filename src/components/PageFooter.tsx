import { Link } from '@/components/RouterLink';
import { Instagram, Facebook, Linkedin, Twitter, Youtube, MessageCircle, Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
const logo = '/images/logo.jpeg';
import { jeeRelatedLinks, neetRelatedLinks } from './RelatedPages';
import { stateHubs } from '@/data/stateHubData';
import { BRAND_FACTS } from '@/data/brandFaqData';

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/mindpeakinstitute', label: 'Instagram' },
  { icon: Youtube, href: 'https://www.youtube.com/@mindpeakinstitute', label: 'YouTube' },
  { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61584805776923', label: 'Facebook' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/mindpeak-institute/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/mindpeakins', label: 'X / Twitter' },
  { icon: MessageCircle, href: 'https://wa.me/918219457704?text=Hello!!%20MindPeak%20Institute', label: 'WhatsApp' },
];

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms & Conditions', to: '/terms-and-conditions' },
  { label: 'Refund Policy', to: '/refund-policy' },
];

type SectionLink = { label: string; to: string };
type FooterSectionData = { title: string; links: SectionLink[] };

/* Chapter guides — the same pages the old "Explore More Pages" block linked,
 * kept so the footer's site-wide crawl paths don't shrink. */
const chapterGuideLinks: SectionLink[] = [...jeeRelatedLinks, ...neetRelatedLinks]
  .filter((l) => l.tag === 'Chapter')
  .map((l) => ({ label: l.label, to: l.href }));

/* Main link columns — static, no question data needed */
const PRIMARY_SECTIONS: FooterSectionData[] = [
  {
    title: 'JEE Preparation',
    links: [
      { label: 'JEE Coaching', to: '/jee-coaching' },
      { label: 'One-to-One JEE Coaching', to: '/one-to-one-jee-coaching' },
      { label: 'JEE Mentorship by IITians', to: '/jee-mentorship-by-iitians' },
      { label: 'JEE Physics Preparation', to: '/jee-physics-preparation' },
      { label: 'JEE Chemistry Preparation', to: '/jee-chemistry-preparation' },
      { label: 'JEE Mathematics Preparation', to: '/jee-mathematics-preparation' },
      { label: 'JEE Rank Predictor', to: '/jee-rank-predictor' },
    ],
  },
  {
    title: 'NEET Preparation',
    links: [
      { label: 'NEET Coaching', to: '/neet-coaching' },
      { label: 'One-to-One NEET Coaching', to: '/one-to-one-neet-coaching' },
      { label: 'NEET Mentorship Program', to: '/neet-mentorship' },
      { label: 'NEET Physics Preparation', to: '/neet-physics-preparation' },
      { label: 'NEET Chemistry Preparation', to: '/neet-chemistry-preparation' },
      { label: 'NEET Biology Preparation', to: '/neet-biology-preparation' },
      { label: 'NEET Rank Predictor', to: '/neet-rank-predictor' },
      { label: 'NEET UG 2027 CBT Mode Guide', to: '/neet-cbt-2027-guide' },
    ],
  },
  {
    title: 'Other Exams',
    links: [
      { label: 'BITSAT Coaching', to: '/bitsat-coaching' },
      { label: 'CUET Coaching', to: '/cuet-coaching' },
      { label: 'WBJEE Coaching', to: '/wbjee-coaching' },
      { label: 'MHT-CET Coaching', to: '/mht-cet-coaching' },
      { label: 'KVPY Coaching', to: '/kvpy-coaching' },
      { label: 'ISI Entrance Coaching', to: '/isi-entrance-coaching' },
      { label: 'COMEDK Coaching', to: '/comedk-coaching' },
      { label: 'VITEEE Coaching', to: '/viteee-coaching' },
    ],
  },
  {
    title: 'Practice & PYQs',
    links: [
      { label: 'JEE Practice Questions', to: '/jee-practice' },
      { label: 'JEE Previous Year Questions', to: '/jee-pyq' },
      { label: 'NEET Practice Questions', to: '/neet-practice' },
      { label: 'NEET Previous Year Questions', to: '/neet-pyq' },
    ],
  },
  {
    // Deep links into the NEET PYQ unit hubs (previously orphaned from all
    // internal links) — gives Google a crawl path to the promoted hubs.
    title: 'NEET PYQ by Unit',
    links: [
      { label: 'Human Physiology PYQs', to: '/neet-pyq-biology-unit-human-physiology' },
      { label: 'Genetics & Evolution PYQs', to: '/neet-pyq-biology-unit-genetics-evolution' },
      { label: 'Plant Physiology PYQs', to: '/neet-pyq-biology-unit-plant-physiology' },
      { label: 'Mechanics PYQs (Physics)', to: '/neet-pyq-physics-unit-mechanics' },
      { label: 'Organic Reactions PYQs', to: '/neet-pyq-chemistry-unit-organic-reactions' },
    ],
  },
  {
    title: 'Formula Sheets',
    links: [
      { label: 'JEE Physics Formulas', to: '/jee-physics-formulas' },
      { label: 'JEE Chemistry Formulas', to: '/jee-chemistry-formulas' },
      { label: 'JEE Maths Formulas', to: '/jee-maths-formulas' },
      { label: 'NEET Biology Formulas', to: '/neet-biology-formulas' },
      { label: 'NEET Physics Formulas', to: '/neet-physics-formulas' },
      { label: 'NEET Chemistry Formulas', to: '/neet-chemistry-formulas' },
    ],
  },
  { title: 'Chapter Guides', links: chapterGuideLinks },
  {
    title: 'Courses & Plans',
    links: [
      { label: 'All Courses', to: '/courses' },
      { label: 'Pricing & Plans', to: '/pricing' },
      { label: 'Free Trial Class', to: '/free-trial' },
      { label: 'Free Study Plan', to: '/study-plan' },
      { label: '1-on-1 Exam Mentorship', to: '/one-to-one-exam-mentorship' },
      { label: 'How to Choose a 1-on-1 Mentor', to: '/how-to-choose-a-1-on-1-mentor' },
      { label: 'Kota Coaching Alternative', to: '/kota-coaching-alternative' },
    ],
  },
  {
    title: 'About MindPeak',
    links: [
      { label: 'About MindPeak Institute', to: '/about' },
      { label: 'Meet the Mentors', to: '/mentors' },
      { label: 'Teaching Methodology', to: '/methodology' },
      { label: 'MindPeak Institute FAQ', to: '/mindpeak-institute-faq' },
      { label: 'Blog', to: '/blog' },
      { label: 'Contact Us', to: '/contact' },
    ],
  },
];

/* ── T1 city JEE coaching links (hand-curated, indexed pages) ── */
const jeeCoachingCityLinks = [
  { label: 'JEE Coaching in Bangalore', to: '/jee-coaching-in-bangalore' },
  { label: 'JEE Coaching in Chennai', to: '/jee-coaching-in-chennai' },
  { label: 'JEE Coaching in Hyderabad', to: '/jee-coaching-in-hyderabad' },
  { label: 'JEE Coaching in Kochi', to: '/jee-coaching-in-kochi' },
  { label: 'JEE Coaching in Coimbatore', to: '/jee-coaching-in-coimbatore' },
  { label: 'JEE Coaching in Visakhapatnam', to: '/jee-coaching-in-visakhapatnam' },
  { label: 'JEE Coaching in Vijayawada', to: '/jee-coaching-in-vijayawada' },
  { label: 'JEE Coaching in Mangalore', to: '/jee-coaching-in-mangalore' },
  { label: 'JEE Coaching in Delhi', to: '/jee-coaching-in-delhi' },
  { label: 'JEE Coaching in Mumbai', to: '/jee-coaching-in-mumbai' },
  { label: 'Best JEE Coaching in India', to: '/best-jee-coaching-in-india' },
];

/* ── T1 city NEET coaching links (hand-curated, indexed pages) ── */
const neetCoachingCityLinks = [
  { label: 'NEET Coaching in Bangalore', to: '/neet-coaching-in-bangalore' },
  { label: 'NEET Coaching in Chennai', to: '/neet-coaching-in-chennai' },
  { label: 'NEET Coaching in Hyderabad', to: '/neet-coaching-in-hyderabad' },
  { label: 'NEET Coaching in Kochi', to: '/neet-coaching-in-kochi' },
  { label: 'NEET Coaching in Coimbatore', to: '/neet-coaching-in-coimbatore' },
  { label: 'NEET Coaching in Visakhapatnam', to: '/neet-coaching-in-visakhapatnam' },
  { label: 'NEET Coaching in Vijayawada', to: '/neet-coaching-in-vijayawada' },
  { label: 'NEET Coaching in Mangalore', to: '/neet-coaching-in-mangalore' },
  { label: 'NEET Coaching in Delhi', to: '/neet-coaching-in-delhi' },
  { label: 'NEET Coaching in Mumbai', to: '/neet-coaching-in-mumbai' },
];

/* ── State regional hub links (indexable consolidation targets) ──
 * Derived from stateHubData so the footer always links every live hub.
 * These are the canonical destinations city doorways 301 into; linking them
 * site-wide gives Googlebot a crawl path to pages that were otherwise
 * orphaned and not getting indexed during Spam Update recovery. */
const jeeStateHubLinks = stateHubs.map((h) => ({
  label: `JEE Coaching in ${h.state}`,
  to: `/jee-coaching-in-${h.slug}`,
}));
const neetStateHubLinks = stateHubs.map((h) => ({
  label: `NEET Coaching in ${h.state}`,
  to: `/neet-coaching-in-${h.slug}`,
}));

/* ── Competitor comparison links ── */
const comparisonLinks = [
  { label: 'MindPeak vs Allen', to: '/mindpeak-vs-allen' },
  { label: 'MindPeak vs FIITJEE', to: '/mindpeak-vs-fiitjee' },
  { label: 'MindPeak vs Physics Wallah', to: '/mindpeak-vs-physics-wallah' },
  { label: 'MindPeak vs Unacademy', to: '/mindpeak-vs-unacademy' },
  { label: 'MindPeak vs Vedantu', to: '/mindpeak-vs-vedantu' },
  { label: 'MindPeak vs Aakash', to: '/mindpeak-vs-aakash' },
  { label: 'Online vs Offline Coaching', to: '/online-vs-offline-jee-coaching' },
  { label: 'Batch vs Personal Coaching', to: '/batch-vs-personal-coaching' },
];

/* Location + comparison directory — kept in full for crawl paths, but shown
 * below the main columns at a quieter size so it doesn't swamp them. */
const DIRECTORY_SECTIONS: FooterSectionData[] = [
  { title: 'JEE Coaching by City', links: jeeCoachingCityLinks },
  { title: 'NEET Coaching by City', links: neetCoachingCityLinks },
  { title: 'JEE Coaching by State', links: jeeStateHubLinks },
  { title: 'NEET Coaching by State', links: neetStateHubLinks },
  { title: 'Compare Coaching', links: comparisonLinks },
];

const FooterSection = ({ title, links, compact }: FooterSectionData & { compact?: boolean }) => (
  <div>
    <h3 className="font-display font-bold text-foreground text-xs uppercase tracking-[0.15em] mb-3">{title}</h3>
    <ul className={compact ? 'space-y-2' : 'space-y-2.5'}>
      {links.map((l) => (
        <li key={l.to}>
          <Link
            to={l.to}
            className={`text-muted-foreground hover:text-primary transition-colors leading-snug ${compact ? 'text-xs' : 'text-[13px]'}`}
          >
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const contactRow = 'flex items-start gap-2.5 text-muted-foreground text-[13px] leading-snug';
const contactIcon = 'w-4 h-4 mt-px shrink-0 text-primary';

export const PageFooter = ({ extra }: { extra?: string }) => (
  <footer className="bg-background border-t border-border" role="contentinfo">
    <div className="max-w-6xl mx-auto px-6 pt-12 pb-10">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.75fr)] lg:gap-12">
        {/* Brand, CTA & contact details */}
        <div className="space-y-5">
          <Link to="/" className="inline-flex items-center gap-3">
            <img src={logo} alt="MindPeak Institute" className="w-10 h-10 rounded-full" width={40} height={40} loading="lazy" />
            <span className="font-display font-bold text-foreground text-lg tracking-wide">MINDPEAK</span>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Personalized 1-on-1 JEE &amp; NEET Coaching — Transforming Aspirants into Achievers.
          </p>
          <Link
            to="/free-trial"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Book a Free Demo Class <ArrowRight className="w-4 h-4" aria-hidden />
          </Link>
          <ul className="space-y-2.5">
            <li>
              <a href={`tel:${BRAND_FACTS.phone.replace(/\s/g, '')}`} className={`${contactRow} hover:text-primary transition-colors`}>
                <Phone className={contactIcon} aria-hidden /> {BRAND_FACTS.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${BRAND_FACTS.email}`} className={`${contactRow} hover:text-primary transition-colors break-all`}>
                <Mail className={contactIcon} aria-hidden /> {BRAND_FACTS.email}
              </a>
            </li>
            <li className={contactRow}>
              <MapPin className={contactIcon} aria-hidden /> <address className="not-italic">{BRAND_FACTS.address}</address>
            </li>
            <li className={contactRow}>
              <Clock className={contactIcon} aria-hidden /> {BRAND_FACTS.hours}
            </li>
          </ul>
          <ul className="flex flex-wrap gap-2.5" aria-label="MindPeak Institute on social media">
            {socialLinks.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/60 transition-colors"
                >
                  <s.icon className="w-4 h-4" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Main link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-9">
          {PRIMARY_SECTIONS.map((section) => (
            <FooterSection key={section.title} title={section.title} links={section.links} />
          ))}
        </div>
      </div>

      {/* Location & comparison directory */}
      <div className="mt-12 pt-10 border-t border-border">
        <p className="font-display font-bold text-foreground text-sm mb-6">
          Live 1-on-1 coaching online, across India
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-9">
          {DIRECTORY_SECTIONS.map((section) => (
            <FooterSection key={section.title} title={section.title} links={section.links} compact />
          ))}
        </div>
      </div>
    </div>

    {/* Bottom bar: legal links, copyright & registration.
        pb-24 below xl keeps the fixed WhatsApp button off the legal links. */}
    <div className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 pt-6 pb-24 xl:pb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-xs text-muted-foreground">
        <div className="space-y-1">
          <p>© {new Date().getFullYear()} MindPeak Institute. All rights reserved.{extra ? ` ${extra}` : ''}</p>
          <p>MSME registered · {BRAND_FACTS.udyam}</p>
        </div>
        <nav aria-label="Legal">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-primary transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  </footer>
);

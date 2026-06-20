import { Link } from '@/components/RouterLink';
import { Instagram, Facebook, Linkedin, Twitter, MessageCircle } from 'lucide-react';
const logo = '/images/logo.jpeg';
import { jeeRelatedLinks, neetRelatedLinks, RelatedPages } from './RelatedPages';
import { stateHubs } from '@/data/stateHubData';

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/mindpeakinstitute', label: 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61584805776923', label: 'Facebook' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/mindpeak-institute/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/mindpeakins', label: 'X / Twitter' },
  { icon: MessageCircle, href: 'https://wa.me/918219457704?text=Hello!!%20MindPeak%20Institute', label: 'WhatsApp' },
];

type SectionLink = { label: string; to: string };
type FooterSectionData = { title: string; links: SectionLink[] };

/* Static footer sections — no question data needed */
const STATIC_SECTIONS: FooterSectionData[] = [
  {
    title: 'JEE Preparation',
    links: [
      { label: 'JEE Coaching', to: '/jee-coaching' },
      { label: 'JEE Main Coaching', to: '/jee-main-coaching' },
      { label: 'JEE Advanced Coaching', to: '/jee-advanced-coaching' },
      { label: 'JEE Dropper Coaching', to: '/jee-dropper-coaching' },
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
      { label: 'NEET UG Coaching', to: '/neet-ug-coaching' },
      { label: 'NEET Dropper Coaching', to: '/neet-dropper-coaching' },
      { label: 'NEET Physics Preparation', to: '/neet-physics-preparation' },
      { label: 'NEET Chemistry Preparation', to: '/neet-chemistry-preparation' },
      { label: 'NEET Biology Preparation', to: '/neet-biology-preparation' },
      { label: 'NEET Rank Predictor', to: '/neet-rank-predictor' },
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
  {
    title: 'Quick Links',
    links: [
      { label: 'About MindPeak Institute', to: '/about' },
      { label: 'Expert Mentors', to: '/mentors' },
      { label: 'Success Stories', to: '/success-stories' },
      { label: 'Our Methodology', to: '/methodology' },
      { label: 'Courses', to: '/courses' },
      { label: 'Free Trial', to: '/free-trial' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'Study Plan', to: '/study-plan' },
      { label: 'Foundation Coaching', to: '/foundation-coaching' },
      { label: 'Blog', to: '/blog' },
      { label: 'Contact', to: '/contact' },
      { label: 'Kota Alternative', to: '/kota-coaching-alternative' },
      { label: 'Online vs Offline', to: '/online-vs-offline-jee-coaching' },
    ],
  },
];

const importantLinks = [
  { label: 'Home', to: '/' },
  { label: 'JEE Coaching', to: '/jee-coaching' },
  { label: 'NEET Coaching', to: '/neet-coaching' },
  { label: 'BITSAT Coaching', to: '/bitsat-coaching' },
  { label: 'CUET Coaching', to: '/cuet-coaching' },
  { label: 'Courses', to: '/courses' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Free Trial', to: '/free-trial' },
  { label: 'Kota Alternative', to: '/kota-coaching-alternative' },
  { label: 'JEE Rank Predictor', to: '/jee-rank-predictor' },
  { label: 'NEET Rank Predictor', to: '/neet-rank-predictor' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
  { label: 'Terms & Conditions', to: '/terms-and-conditions' },
  { label: 'Refund Policy', to: '/refund-policy' },
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
  { label: "MindPeak vs BYJU's", to: '/mindpeak-vs-byjus' },
  { label: 'MindPeak vs Narayana', to: '/mindpeak-vs-narayana' },
  { label: 'MindPeak vs Resonance', to: '/mindpeak-vs-resonance' },
  { label: 'MindPeak vs Sri Chaitanya', to: '/mindpeak-vs-sri-chaitanya' },
  { label: 'Online vs Offline Coaching', to: '/online-vs-offline-jee-coaching' },
  { label: 'Batch vs Personal Coaching', to: '/batch-vs-personal-coaching' },
];

const FooterSection = ({ title, links }: { title: string; links: { label: string; to: string }[] }) => (
  <div>
    <h3 className="font-display font-bold text-foreground text-xs uppercase tracking-[0.15em] mb-3">{title}</h3>
    <ul className="space-y-2">
      {links.map((l) => (
        <li key={l.to}>
          <Link to={l.to} className="text-muted-foreground text-xs hover:text-primary transition-colors">
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export const PageFooter = ({ extra }: { extra?: string }) => {
  /* Use static sections only — no links to noindexed individual question pages */
  const footerSections = STATIC_SECTIONS;

  return (
  <footer className="bg-background border-t border-border py-10 px-6" role="contentinfo">
    <div className="max-w-5xl mx-auto">
      {/* Logo & Tagline */}
      <div className="flex flex-col items-center gap-4 mb-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="MindPeak Institute" className="w-10 h-10 rounded-full" width={40} height={40} loading="lazy" />
          <span className="font-display font-bold text-foreground text-lg tracking-wide">MINDPEAK</span>
        </Link>
        <p className="text-muted-foreground text-sm text-center max-w-md">
          Personalized 1-on-1 JEE &amp; NEET Coaching — Transforming Aspirants into Achievers.
        </p>
      </div>

      {/* Categorized Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 max-w-5xl mx-auto">
        {footerSections.map((section) => (
          <FooterSection key={section.title} title={section.title} links={section.links} />
        ))}
        <FooterSection title="JEE Coaching by City" links={jeeCoachingCityLinks} />
        <FooterSection title="NEET Coaching by City" links={neetCoachingCityLinks} />
        <FooterSection title="JEE Coaching by State" links={jeeStateHubLinks} />
        <FooterSection title="NEET Coaching by State" links={neetStateHubLinks} />
        <FooterSection title="Compare Coaching" links={comparisonLinks} />
        <div>
          <h3 className="font-display font-bold text-foreground text-xs uppercase tracking-[0.15em] mb-3">Important Links</h3>
          <ul className="space-y-2">
            {importantLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground text-xs hover:text-primary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Socials */}
      <div className="flex justify-center gap-5 mb-8">
        {socialLinks.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="text-muted-foreground hover:text-primary transition-colors">
            <s.icon className="w-5 h-5" />
          </a>
        ))}
      </div>

      {/* Legal */}
      <div className="flex flex-col items-center gap-3 text-xs text-muted-foreground tracking-wider">
        <div className="flex items-center gap-4">
          <Link to="/terms-and-conditions" className="hover:text-primary transition-colors">Terms &amp; Conditions</Link>
          <span className="text-border">|</span>
          <Link to="/refund-policy" className="hover:text-primary transition-colors">Refund Policy</Link>
        </div>
        <p>© {new Date().getFullYear()} MindPeak Institute. All rights reserved.{extra ? ` ${extra}` : ''}</p>
      </div>

      {/* Related Pages (compact) */}
      <div className="mt-8">
        {/* Use a mix of JEE/NEET/utility links for broad relevance */}
        <RelatedPages
          title="Explore More Pages"
          links={[
            ...jeeRelatedLinks.slice(0, 3),
            ...neetRelatedLinks.slice(0, 3),
            { href: '/courses', label: 'All Courses', tag: 'Explore' },
            { href: '/pricing', label: 'Pricing Plans', tag: 'Info' },
            { href: '/blog', label: 'Blog & Tips', tag: 'Learn' },
            { href: '/contact', label: 'Contact Us', tag: 'Help' },
          ]}
          columns={2}
          variant="compact"
        />
      </div>
    </div>
  </footer>
  );
};

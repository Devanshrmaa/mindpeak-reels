import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import logo from '@/assets/logo.jpeg';
import { jeeRelatedLinks, neetRelatedLinks, RelatedPages } from './RelatedPages';

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/mindpeakinstitute', label: 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61584805776923', label: 'Facebook' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/mindpeak-institute/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/mindpeakins', label: 'X / Twitter' },
  { icon: MessageCircle, href: 'https://wa.me/918219457704?text=Hello!!%20MindPeak%20Institute', label: 'WhatsApp' },
];

const footerSections = [
  {
    title: 'JEE Preparation',
    links: [
      { label: 'JEE Coaching', to: '/jee-coaching' },
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
      { label: 'NEET Physics Preparation', to: '/neet-physics-preparation' },
      { label: 'NEET Chemistry Preparation', to: '/neet-chemistry-preparation' },
      { label: 'NEET Biology Preparation', to: '/neet-biology-preparation' },
      { label: 'NEET Rank Predictor', to: '/neet-rank-predictor' },
    ],
  },
  {
    title: 'JEE Practice Questions',
    links: [
      { label: 'All Practice Questions', to: '/jee-practice' },
      { label: 'Physics Easy Questions', to: '/jee-physics-units-dimensions-si-units-easy-which-of-the-following-is-not-a-fundamental-si-unit' },
      { label: 'Physics Medium Questions', to: '/jee-physics-units-dimensions-si-units-medium-the-dimensions-of-plancks-constant-are' },
      { label: 'Physics Hard Questions', to: '/jee-physics-units-dimensions-si-units-hard-in-a-new-system-of-units-the-unit-of-mass-is-alpha-kg-length-is-beta-m-and-time-is-gamma-s-the-value-of-1-j-in-this-new-system-is' },
      { label: 'Chemistry Easy Questions', to: '/jee-chemistry-mole-concept-mole-avogadro-easy-which-of-the-following-is-not-a-fundamental-si-unit' },
      { label: 'Chemistry Medium Questions', to: '/jee-chemistry-mole-concept-mole-avogadro-medium-the-dimensions-of-plancks-constant-are' },
      { label: 'Chemistry Hard Questions', to: '/jee-chemistry-mole-concept-mole-avogadro-hard-in-a-new-system-of-units-the-unit-of-mass-is-alpha-kg-length-is-beta-m-and-time-is-gamma-s-the-value-of-1-j-in-this-new-system-is' },
      { label: 'Maths Easy Questions', to: '/jee-mathematics-sets-relations-functions-sets-venn-easy-which-of-the-following-is-not-a-fundamental-si-unit' },
      { label: 'Maths Medium Questions', to: '/jee-mathematics-sets-relations-functions-sets-venn-medium-the-dimensions-of-plancks-constant-are' },
      { label: 'Maths Hard Questions', to: '/jee-mathematics-sets-relations-functions-sets-venn-hard-in-a-new-system-of-units-the-unit-of-mass-is-alpha-kg-length-is-beta-m-and-time-is-gamma-s-the-value-of-1-j-in-this-new-system-is' },
    ],
  },
  {
    title: 'JEE Previous Year Questions',
    links: [
      { label: 'All PYQ Questions', to: '/jee-pyq' },
      { label: 'Physics PYQ — Motion', to: '/jee-pyq-physics-motion-in-a-straight-line-a-body-of-mass-m-is-projected-vertically-upward-with-speed-u-the-time-to-reach-maximum-height-is' },
      { label: 'Physics PYQ — Electrostatics', to: '/jee-pyq-physics-electrostatics-the-dimensional-formula-of-torque-is' },
      { label: 'Chemistry PYQ — Mole Concept', to: '/jee-pyq-chemistry-mole-concept-the-density-of-a-material-in-the-shape-of-a-cube-is-determined-by-measuring-three-sides-of-the-cube-and-its-mass-if-the-relative-errors-in-measuring-the-mass-and-length-are-respectively-1-5-and-1-the-maximum-error-in-determining-the-density-is' },
      { label: 'Chemistry PYQ — Electrochemistry', to: '/jee-pyq-chemistry-electrochemistry-the-dimensional-formula-of-torque-is' },
      { label: 'Maths PYQ — Calculus', to: '/jee-pyq-mathematics-integral-calculus-a-body-of-mass-m-is-projected-vertically-upward-with-speed-u-the-time-to-reach-maximum-height-is' },
      { label: 'Maths PYQ — Probability', to: '/jee-pyq-mathematics-probability-statistics-the-dimensional-formula-of-torque-is' },
    ],
  },
  {
    title: 'NEET Practice Questions',
    links: [
      { label: 'All NEET Practice', to: '/neet-practice' },
      { label: 'Biology — Cell Biology', to: '/neet-biology-cell-biology-biomolecules-cell-organelles-easy-which-of-the-following-is-not-a-fundamental-si-unit' },
      { label: 'Biology — Genetics', to: '/neet-biology-genetics-evolution-mendelian-molecular-easy-the-dimensions-of-plancks-constant-are' },
      { label: 'Biology — Human Physiology', to: '/neet-biology-human-physiology-digestion-breathing-circulation-easy-in-a-new-system-of-units-the-unit-of-mass-is-alpha-kg-length-is-beta-m-and-time-is-gamma-s-the-value-of-1-j-in-this-new-system-is' },
      { label: 'Physics — Mechanics', to: '/neet-physics-mechanics-laws-motion-energy-easy-which-of-the-following-is-not-a-fundamental-si-unit' },
      { label: 'Physics — Optics', to: '/neet-physics-optics-modern-optics-easy-the-dimensions-of-plancks-constant-are' },
      { label: 'Chemistry — Physical', to: '/neet-chemistry-physical-chemistry-atomic-structure-bonding-easy-in-a-new-system-of-units-the-unit-of-mass-is-alpha-kg-length-is-beta-m-and-time-is-gamma-s-the-value-of-1-j-in-this-new-system-is' },
      { label: 'Chemistry — Organic', to: '/neet-chemistry-organic-chemistry-goc-hydrocarbons-easy-which-of-the-following-is-not-a-fundamental-si-unit' },
    ],
  },
  {
    title: 'NEET Previous Year Questions',
    links: [
      { label: 'All NEET PYQs', to: '/neet-pyq' },
      { label: 'Biology PYQ — Cell Biology', to: '/neet-pyq-biology-cell-biology-biomolecules-the-density-of-a-material-in-the-shape-of-a-cube-is-determined-by-measuring-three-sides-of-the-cube-and-its-mass-if-the-relative-errors-in-measuring-the-mass-and-length-are-respectively-1-5-and-1-the-maximum-error-in-determining-the-density-is' },
      { label: 'Biology PYQ — Human Reproduction', to: '/neet-pyq-biology-human-reproduction-the-dimensional-formula-of-torque-is' },
      { label: 'Biology PYQ — Genetics', to: '/neet-pyq-biology-genetics-molecular-biology-a-body-of-mass-m-is-projected-vertically-upward-with-speed-u-the-time-to-reach-maximum-height-is' },
      { label: 'Physics PYQ — Kinematics', to: '/neet-pyq-physics-kinematics-the-dimensional-formula-of-torque-is' },
      { label: 'Physics PYQ — Optics', to: '/neet-pyq-physics-optics-a-body-of-mass-m-is-projected-vertically-upward-with-speed-u-the-time-to-reach-maximum-height-is' },
      { label: 'Chemistry PYQ — Equilibrium', to: '/neet-pyq-chemistry-equilibrium-the-dimensional-formula-of-torque-is' },
      { label: 'Chemistry PYQ — GOC & Hydrocarbons', to: '/neet-pyq-chemistry-goc-hydrocarbons-a-body-of-mass-m-is-projected-vertically-upward-with-speed-u-the-time-to-reach-maximum-height-is' },
    ],
  },
  {
    title: 'Quick Links',
    links: [
      { label: 'Courses', to: '/courses' },
      { label: 'Free Trial', to: '/free-trial' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'Study Plan', to: '/study-plan' },
      { label: 'Blog', to: '/blog' },
      { label: 'Contact', to: '/contact' },
      { label: 'Kota Alternative', to: '/kota-coaching-alternative' },
    ],
  },
];

const importantLinks = [
  { label: 'Home', to: '/' },
  { label: 'JEE Coaching', to: '/jee-coaching' },
  { label: 'NEET Coaching', to: '/neet-coaching' },
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

export const PageFooter = ({ extra }: { extra?: string }) => (
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
        <p>© 2026 MindPeak Institute. All rights reserved.{extra ? ` ${extra}` : ''}</p>
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

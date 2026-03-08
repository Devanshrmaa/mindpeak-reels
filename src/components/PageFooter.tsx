import { useState, useEffect, useRef } from 'react';
import { Link } from '@/components/RouterLink';
import { Instagram, Facebook, Linkedin, Twitter, MessageCircle } from 'lucide-react';
const logo = '/images/logo.jpeg';
import { jeeRelatedLinks, neetRelatedLinks, RelatedPages } from './RelatedPages';

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
      { label: 'Online vs Offline', to: '/online-vs-offline-jee-coaching' },
    ],
  },
];

/**
 * Build full footer sections with question-specific links from lazy-loaded data.
 * Called once data modules are dynamically imported.
 */
function buildQuestionSections(
  practice: any, pyq: any, neetPractice: any, neetPyq: any,
): FooterSectionData[] {
  const jp = (label: string, subj: string, ch: string, topic: string, diff: 'easy' | 'medium' | 'hard') => ({
    label,
    to: `/${practice.getPracticeSlugByParams(subj, ch, topic, diff, 1) ?? 'jee-practice'}`,
  });

  const np = (label: string, subj: string, ch: string, topic: string, diff: 'easy' | 'medium' | 'hard') => ({
    label,
    to: `/${neetPractice.getNEETPracticeSlugByParams(subj, ch, topic, diff, 1) ?? 'neet-practice'}`,
  });

  return [
    {
      title: 'JEE Preparation',
      links: STATIC_SECTIONS[0].links,
    },
    {
      title: 'NEET Preparation',
      links: STATIC_SECTIONS[1].links,
    },
    {
      title: 'JEE Practice Questions',
      links: [
        { label: 'All Practice Questions', to: '/jee-practice' },
        ...practice.subjectBanks.flatMap((bank: any) => {
          const ch = bank.chapters[0];
          const topic = ch?.topics[0];
          if (!ch || !topic) return [];
          return (['easy', 'medium', 'hard'] as const).map(diff =>
            jp(`${bank.subject} ${diff.charAt(0).toUpperCase() + diff.slice(1)} Questions`, bank.slug, ch.slug, topic.slug, diff)
          );
        }),
      ],
    },
    {
      title: 'JEE Previous Year Questions',
      links: [
        { label: 'All PYQ Questions', to: '/jee-pyq' },
        ...pyq.pyqSubjectBanks.flatMap((bank: any) =>
          bank.chapters.slice(0, 2).map((ch: any) => ({
            label: `${bank.subject} PYQ — ${ch.name}`,
            to: `/${pyq.getPYQSlugByParams(bank.slug, ch.slug, 1) ?? 'jee-pyq'}`,
          }))
        ),
      ],
    },
    {
      title: 'NEET Practice Questions',
      links: [
        { label: 'All NEET Practice', to: '/neet-practice' },
        ...neetPractice.neetSubjectBanks.flatMap((bank: any) => {
          const chapters = bank.chapters.slice(0, bank.slug === 'biology' ? 3 : 2);
          return chapters
            .filter((ch: any) => ch.topics[0])
            .map((ch: any) =>
              np(`${bank.subject} — ${ch.name}`, bank.slug, ch.slug, ch.topics[0].slug, 'easy')
            );
        }),
      ],
    },
    {
      title: 'NEET Previous Year Questions',
      links: [
        { label: 'All NEET PYQs', to: '/neet-pyq' },
        ...neetPyq.neetPyqSubjectBanks.flatMap((bank: any) =>
          bank.chapters.slice(0, bank.slug === 'biology' ? 3 : 2).map((ch: any) => ({
            label: `${bank.subject} PYQ — ${ch.name}`,
            to: `/${neetPyq.getNEETPYQSlugByParams(bank.slug, ch.slug, 1) ?? 'neet-pyq'}`,
          }))
        ),
      ],
    },
    {
      title: 'Other Exams',
      links: STATIC_SECTIONS[2].links,
    },
    {
      title: 'Formula Sheets',
      links: STATIC_SECTIONS[4].links,
    },
    {
      title: 'Quick Links',
      links: STATIC_SECTIONS[5].links,
    },
  ];
}

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
  const [footerSections, setFooterSections] = useState<FooterSectionData[]>(STATIC_SECTIONS);
  const loadedRef = useRef(false);

  /* Lazy-load question data for enriched footer links (below the fold) */
  useEffect(() => {
    if (loadedRef.current) return;
    loadedRef.current = true;
    Promise.all([
      import('@/data/practice'),
      import('@/data/pyq'),
      import('@/data/neet-practice'),
      import('@/data/neet-pyq'),
    ]).then(([practice, pyq, neetPractice, neetPyq]) => {
      setFooterSections(buildQuestionSections(practice, pyq, neetPractice, neetPyq));
    }).catch(() => {
      loadedRef.current = false; // allow retry on next render
    });
  }, []);

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
};

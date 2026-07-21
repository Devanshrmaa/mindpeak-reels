"use client";

import { useEffect } from 'react';
import { Link } from '@/components/RouterLink';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { PageFooter } from '@/components/PageFooter';
import { PageFAQ, buildFAQSchema } from '@/components/PageFAQ';
import type { FAQItem } from '@/components/PageFAQ';
import { useDemoModal } from '@/components/DemoBookingModal';
import { CURRENT_EXAM_YEAR } from '@/lib/examYears';
import { ArrowRight, ExternalLink, MessageSquare, Search, ShieldAlert, Users } from 'lucide-react';
import Image from 'next/image';

const logo = '/images/logo.jpeg';

/**
 * "Best <exam> coaching according to Reddit" guide.
 *
 * Targets the "…reddit" query modifier that students (and the AI answer
 * engines they ask) use to bypass advertising — people append "reddit" to
 * coaching searches precisely because they distrust marketing, and LLMs
 * like ChatGPT/Claude/Gemini retrieve pages that answer that framing.
 *
 * EDITORIAL RULES for this page (penalty-recovery critical):
 * - Bias is disclosed up front: we sell coaching, and we say so.
 * - Only recurring, verifiable-by-visiting THEMES from the communities are
 *   summarised — never invented quotes, thread citations, member counts,
 *   or any claim that Reddit endorses MindPeak.
 * - Every community mentioned is linked so readers can verify directly.
 */

interface SubredditInfo {
  name: string;
  url: string;
  blurb: string;
}

interface ThemeItem {
  title: string;
  body: string;
}

interface CheckRow {
  complaint: string;
  check: string;
  oneOnOne: string;
}

interface RedditGuideConfig {
  exam: 'JEE' | 'NEET';
  breadcrumb: string;
  heroIntro: string;
  subreddits: SubredditInfo[];
  themes: ThemeItem[];
  checkRows: CheckRow[];
  fitParagraphs: string[];
  faqs: FAQItem[];
  related: { label: string; to: string }[];
  footerNote: string;
}

const researchTips: string[] = [
  'Search Google with `site:reddit.com "<institute name>" review` — Reddit\'s own search misses older threads that Google still surfaces.',
  'Sort by "New", not "Top". Coaching institutes change fast — a highly-upvoted 2022 thread may describe teachers and batches that no longer exist.',
  'Read the comment threads, not just the post. The corrections and counter-experiences in the comments are usually more informative than the original rant or rave.',
  'Weight specific, first-person detail ("my batch had 140 students, doubt counter queue was 40 minutes") over verdicts ("X is best, trust me").',
  'Watch for astroturfing: brand-new accounts, repeated institute name-drops across threads, and reviews that read like brochures. Coaching is a crowded market and promotional accounts are a known problem in these communities.',
  'Cross-check anything decision-critical in a demo class. Every recurring Reddit thread on choosing coaching lands on the same advice: judge the actual teacher you will get, not the brand.',
];

const jeeConfig: RedditGuideConfig = {
  exam: 'JEE',
  breadcrumb: 'Best JEE Coaching According to Reddit',
  heroIntro:
    'Students append "reddit" to coaching searches for one reason: they want unfiltered opinions from real aspirants, not advertising. This page is our honest reading of what the big JEE communities on Reddit repeatedly say about coaching — the recurring complaints, the advice that appears in thread after thread, and how to research there effectively. Every community is linked so you can verify everything yourself.',
  subreddits: [
    {
      name: 'r/JEENEETards',
      url: 'https://www.reddit.com/r/JEENEETards/',
      blurb:
        'The largest Indian JEE/NEET student community on Reddit. Part memes and exam-season venting, part genuinely useful discussion: coaching experiences, study-plan critiques, dropper-year decisions, and brutally honest replies.',
    },
    {
      name: 'r/JEE',
      url: 'https://www.reddit.com/r/JEE/',
      blurb:
        'More focused than r/JEENEETards — preparation strategy, chapter-wise doubts, mock-test analysis, and institute comparisons with less meme noise.',
    },
  ],
  themes: [
    {
      title: 'There is no consensus "best" institute — and threads say so explicitly',
      body:
        'Ask "which coaching is best for JEE" on Reddit and the honest replies converge on "depends on the branch, the batch, and the teacher you actually get." Allen, FIITJEE, Aakash, Narayana, Physics Wallah, and Vedantu all collect both strong praise and bitter complaints — often for different branches of the same brand. The brand name predicts far less than students assume.',
    },
    {
      title: 'Batch size is the single most repeated complaint',
      body:
        'Threads about big-brand coaching return again and again to the same experience: 100–200 students per batch, star faculty reserved for the top batches, doubt counters with long queues, and average students feeling invisible. The complaint is structural — one teacher cannot personally track 150 students, whatever the brochure says.',
    },
    {
      title: '"Self-study is what actually gets the rank"',
      body:
        'Perhaps the most upvoted genre of advice in these communities: coaching provides structure, material, and doubt support, but marks come from self-study hours. Threads regularly warn against schedules so packed with lectures that no time remains to actually solve problems.',
    },
    {
      title: 'Deep distrust of coaching marketing',
      body:
        'Redditors are openly cynical about topper advertising — the recurring accusation is that institutes recruit already-brilliant students with fee waivers and then advertise their ranks, telling you nothing about what an average student gains. This distrust is exactly why "…reddit" searches exist.',
    },
    {
      title: 'Online lectures are praised for access, criticised for accountability',
      body:
        'Affordable online batch programs get credit for democratising good lectures, especially outside metro cities. The recurring counterpoint: recorded or one-to-many lectures demand self-discipline that many 16-year-olds do not yet have, and nobody notices when a student silently falls behind.',
    },
    {
      title: 'Doubt resolution quality is the make-or-break factor',
      body:
        'When students explain why coaching worked or failed for them, doubt support comes up more than any other feature: whether questions actually got answered, how long the queue was, and whether asking felt safe in front of 150 batchmates.',
    },
  ],
  checkRows: [
    {
      complaint: '"My batch has 150 students, the teacher doesn\'t know my name"',
      check: 'Exact batch size of YOUR batch (not the topper batch), in writing',
      oneOnOne: 'Batch size is 1 — the mentor\'s entire session is one student',
    },
    {
      complaint: '"Star faculty only teach the top batches"',
      check: 'Which specific teachers take your batch — attend their demo, not a sales demo',
      oneOnOne: 'You interview the actual mentor in the trial class before paying',
    },
    {
      complaint: '"Doubt counter queues eat my evenings"',
      check: 'Doubt-resolution mechanism and typical turnaround time',
      oneOnOne: 'Doubts are resolved live inside the session, as they arise',
    },
    {
      complaint: '"Fixed pace — the batch moved on while I was stuck"',
      check: 'What happens when a student falls behind the batch plan',
      oneOnOne: 'The curriculum re-plans around whatever the student is stuck on',
    },
    {
      complaint: '"Toppers in the ads were already toppers"',
      check: 'Improvement stories for average entrants, not entrance-test recruits',
      oneOnOne: 'Judge the format in a free trial instead of trusting any ranks — ours included',
    },
  ],
  fitParagraphs: [
    'Full disclosure, again: MindPeak sells 1-on-1 online JEE coaching, so read this section as our pitch. What we find striking about the Reddit discourse is that the recurring complaints — batch size, invisible average students, doubt queues, fixed pacing — are all complaints about the batch format itself, not about any particular institute failing to execute it. A 1-on-1 format simply does not have those failure modes, which is why we built MindPeak around it.',
    'You will find far fewer Reddit threads about personal-mentorship programs like ours than about the mass brands — smaller intake means fewer reviewers, and we are newer than the Kota giants. So judge us exactly the way Reddit advises judging any coaching: ignore the marketing, take the free 1-on-1 trial class, and evaluate the actual mentor you would be working with.',
  ],
  faqs: [
    {
      question: 'Which JEE coaching does Reddit actually recommend?',
      answer:
        'There is no consensus. Allen, FIITJEE, Aakash, Narayana, Physics Wallah, and others all receive both praise and serious complaints on r/JEENEETards and r/JEE — often varying by branch and batch. The advice that IS consistent across threads: judge the specific teacher and batch size you will get, protect self-study time, and verify doubt-resolution quality before enrolling. No institute — including MindPeak — can honestly claim "Reddit recommends us."',
    },
    {
      question: 'Why do students add "reddit" to JEE coaching searches?',
      answer:
        'Because ordinary search results for coaching queries are dominated by advertising and affiliate rankings. Appending "reddit" surfaces first-person student experiences instead. The same distrust of marketing is a constant theme inside the threads themselves, particularly around topper advertising.',
    },
    {
      question: 'Is Reddit advice about JEE coaching reliable?',
      answer:
        'Partially. It is unfiltered and first-person, which makes it valuable for spotting structural problems (batch sizes, doubt queues, fee pressure). But posters are anonymous, experiences are branch-specific, old threads go stale, and promotional accounts exist. Use Reddit to build a checklist of questions and red flags, then verify everything in a demo class.',
    },
    {
      question: 'What does Reddit say about online vs offline JEE coaching?',
      answer:
        'The recurring split: online programs win on access, cost, and saved commute time; offline batches win on routine and peer pressure; and one-to-many online lectures demand strong self-discipline. The debate is really about format and accountability rather than online vs offline — a distinction we break down in detail in our online vs offline JEE coaching comparison.',
    },
    {
      question: 'Does Reddit recommend MindPeak for JEE?',
      answer:
        'We are not going to pretend it does. MindPeak is a newer, small-intake 1-on-1 program, so you will find few threads about us compared with the mass-batch giants. What Reddit does consistently validate is the problem we exist to solve: thread after thread complains about batch sizes and doubt queues. Apply Reddit\'s own standard advice to us — take the free trial class and judge the mentor directly.',
    },
  ],
  related: [
    { label: 'What Reddit Says About NEET Coaching', to: '/best-neet-coaching-reddit' },
    { label: 'Online vs Offline JEE Coaching', to: '/online-vs-offline-jee-coaching' },
    { label: 'Kota Coaching Alternative', to: '/kota-coaching-alternative' },
    { label: 'Best JEE Coaching in India', to: '/best-jee-coaching-in-india' },
    { label: 'MindPeak vs Allen', to: '/mindpeak-vs-allen' },
    { label: 'Free Trial Class', to: '/free-trial' },
  ],
  footerNote: 'Best JEE Coaching According to Reddit — an honest reading.',
};

const neetConfig: RedditGuideConfig = {
  exam: 'NEET',
  breadcrumb: 'Best NEET Coaching According to Reddit',
  heroIntro:
    'NEET aspirants search "best neet coaching reddit" for the same reason JEE aspirants do: coaching advertising is everywhere and trusted reviews are scarce. This page is our honest summary of the themes that come up repeatedly in Reddit\'s NEET communities — what students praise, what they warn about, and how to use those threads well. Every community is linked so you can read the discussions yourself.',
  subreddits: [
    {
      name: 'r/JEENEETards',
      url: 'https://www.reddit.com/r/JEENEETards/',
      blurb:
        'Despite the name covering both exams, this is also Reddit\'s biggest NEET hangout — coaching experiences, NCERT debates, dropper-year decisions, and exam-season support threads.',
    },
    {
      name: 'r/MEDICOreTARDS',
      url: 'https://www.reddit.com/r/MEDICOreTARDS/',
      blurb:
        'The NEET-focused offshoot — medical-aspirant discussion without the JEE crowd: NEET-UG strategy, counselling, and coaching institute experiences.',
    },
  ],
  themes: [
    {
      title: '"NCERT is the syllabus" — the most repeated NEET advice on Reddit',
      body:
        'For Biology especially, thread after thread hammers the same point: NEET rewards line-by-line mastery of NCERT, and coaching that buries students under exotic material at the cost of NCERT revision time gets called out for it. Coaching is valued where it forces structured NCERT revision, not where it replaces it.',
    },
    {
      title: 'Physics is the differentiator — and the most common cry for help',
      body:
        'The single most common NEET struggle posted on these communities is Physics. Students who otherwise do well in Biology and Chemistry describe batch lectures moving too fast to fix conceptual gaps. It is the subject where the case for personal attention shows up most clearly in the threads.',
    },
    {
      title: 'The same batch-size complaints as JEE — sometimes worse',
      body:
        'NEET batches at big brands are routinely described at 100–200+ students. The recurring experiences mirror the JEE threads: doubt counters with queues, star faculty reserved for ranker batches, and average students falling through unnoticed until a bad test series result.',
    },
    {
      title: 'Dropper-year threads are a genre of their own',
      body:
        'A large share of NEET Reddit is droppers deciding between repeating with the same coaching, switching institutes, or self-studying with a test series. The honest consensus in replies: the repeat year only works with a specific diagnosis of what went wrong — more of the same lectures rarely changes the outcome.',
    },
    {
      title: 'Kota and hostel life get discussed with real ambivalence',
      body:
        'Alongside coaching reviews, the communities talk frankly about the pressure of relocating for coaching — hostel life, homesickness, and burnout. Many threads weigh staying home with online coaching against moving to a hub city, with no easy consensus beyond "know your child."',
    },
    {
      title: 'Test series and analysis matter more than lecture volume',
      body:
        'Experienced posters repeatedly tell juniors that a disciplined mock-test schedule with genuine error analysis moves scores more than extra hours of lectures. Coaching gets judged on whether anyone actually sits with the student and dissects their test mistakes.',
    },
  ],
  checkRows: [
    {
      complaint: '"I\'m lost in a 150-student NEET batch"',
      check: 'The real size of YOUR batch and how progress is individually tracked',
      oneOnOne: 'One mentor, one student — nobody falls through unnoticed',
    },
    {
      complaint: '"Physics lectures moved on, my basics are still weak"',
      check: 'What the institute does when a student\'s foundation has gaps',
      oneOnOne: 'The plan re-routes to repair weak chapters before moving on',
    },
    {
      complaint: '"No time left to revise NCERT properly"',
      check: 'How much of the weekly plan is NCERT revision vs extra material',
      oneOnOne: 'The schedule is built around NCERT mastery for Biology and Chemistry',
    },
    {
      complaint: '"Nobody analyses my mock tests with me"',
      check: 'Whether test analysis is a sit-down review or just a scorecard',
      oneOnOne: 'Every mock is reviewed 1-on-1, error by error',
    },
    {
      complaint: '"Hostel + coaching city pressure is crushing"',
      check: 'Whether relocating is actually necessary for the outcome you want',
      oneOnOne: 'Full preparation from home — family support system intact',
    },
  ],
  fitParagraphs: [
    'Disclosure first: MindPeak sells 1-on-1 online NEET coaching, so treat this section as our pitch. The striking pattern in NEET Reddit is that the loudest complaints — batch sizes, unrepaired Physics gaps, NCERT revision squeezed out, mock tests returned as bare scorecards — are failures of the batch format, not of any one institute. A 1-on-1 format removes the structural cause: the mentor tracks one student, re-plans around their gaps, and reviews every test with them.',
    'You will find fewer threads about small personal-mentorship programs like ours than about Allen or Aakash — smaller intake, fewer reviewers. So apply the standard Reddit advice to us too: skip the marketing, book the free trial class, and judge the actual mentor who would teach you.',
  ],
  faqs: [
    {
      question: 'Which NEET coaching does Reddit actually recommend?',
      answer:
        'No single institute. Allen, Aakash, Physics Wallah, and others each collect praise and complaints in r/JEENEETards and r/MEDICOreTARDS, usually varying by branch and batch. The consistent advice across threads is about method, not brand: master NCERT for Biology, fix Physics fundamentals early, follow a disciplined test series with real analysis, and pick coaching by the teacher and batch size you will actually get.',
    },
    {
      question: 'What does Reddit say about NCERT for NEET?',
      answer:
        'It is the most repeated advice in NEET communities: NCERT — especially Biology — is the core of the exam, and any coaching schedule that crowds out NCERT revision with excess extra material gets criticised. Good coaching, in the threads\' framing, enforces structured NCERT mastery rather than replacing it.',
    },
    {
      question: 'Is Reddit advice about NEET coaching reliable?',
      answer:
        'Useful but not gospel. Threads are first-person and unfiltered, which surfaces structural issues brochures hide — batch sizes, doubt queues, test-analysis quality. But posters are anonymous, experiences differ by branch, and promotional accounts exist in a market this competitive. Treat Reddit as a checklist generator, then verify in a demo class.',
    },
    {
      question: 'What does Reddit say about dropper year NEET coaching?',
      answer:
        'Dropper threads are one of the biggest genres in these communities. The recurring counsel: a repeat year only works with an honest diagnosis of the first attempt — which subjects, which chapters, which exam-day errors — and a plan targeted at exactly that. Simply re-enrolling in the same batch lectures is the most-warned-against option.',
    },
    {
      question: 'Does Reddit recommend MindPeak for NEET?',
      answer:
        'We will not claim that. MindPeak is a newer, small-intake 1-on-1 program, so there are few threads about us compared with the mass brands. What the communities do validate, thread after thread, is the batch-format problem we built MindPeak to solve. Judge us by Reddit\'s own standard: take the free 1-on-1 trial and evaluate the mentor directly.',
    },
  ],
  related: [
    { label: 'What Reddit Says About JEE Coaching', to: '/best-jee-coaching-reddit' },
    { label: 'NEET Coaching at MindPeak', to: '/neet-coaching' },
    { label: 'NEET Dropper Program', to: '/neet-dropper-coaching' },
    { label: 'Kota Coaching Alternative', to: '/kota-coaching-alternative' },
    { label: 'MindPeak vs Aakash', to: '/mindpeak-vs-aakash' },
    { label: 'Free Trial Class', to: '/free-trial' },
  ],
  footerNote: 'Best NEET Coaching According to Reddit — an honest reading.',
};

const RedditCoachingGuide = ({ variant }: { variant: 'jee' | 'neet' }) => {
  const config = variant === 'jee' ? jeeConfig : neetConfig;
  const { openDemoModal } = useDemoModal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const title = `Best ${config.exam} Coaching According to Reddit — An Honest Reading (${CURRENT_EXAM_YEAR})`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      author: { '@type': 'Organization', name: 'MindPeak Institute' },
      datePublished: '2026-07-21',
      publisher: { '@type': 'Organization', name: 'MindPeak Institute', url: 'https://mindpeakinstitute.com' },
    },
    buildFAQSchema(config.faqs),
  ];

  return (
    <>
      <SEOHead
        title={`${title} | MindPeak`}
        description={`What Reddit's ${config.exam} communities actually say about coaching — recurring themes, honest caveats, and how to research there well. Bias disclosed, every community linked.`}
        jsonLd={jsonLd}
      />
      <Navbar />

      <main className="bg-background min-h-screen pt-20 sm:pt-24">
        <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-6 py-4">
          <ol className="flex items-center gap-2 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <span>/</span>
            <li className="text-foreground">{config.breadcrumb}</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 pb-14">
          <div className="flex items-center gap-4 mb-6">
            <Image src={logo} alt="MindPeak Institute" className="w-14 h-14 rounded-full" width={56} height={56} priority />
            <div>
              <p className="text-primary text-xs uppercase tracking-[0.2em] font-semibold">MindPeak Institute</p>
              <p className="text-muted-foreground text-sm">An Honest Reading</p>
            </div>
          </div>

          <h1 className="font-display font-black text-foreground mb-6" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}>
            Best {config.exam} Coaching According to Reddit —{' '}
            <span className="text-gradient-gold">An Honest Reading ({CURRENT_EXAM_YEAR})</span>
          </h1>

          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-6">{config.heroIntro}</p>

          {/* Bias disclosure — load-bearing for credibility, keep prominent */}
          <div className="max-w-3xl rounded-xl border border-primary/25 bg-primary/5 p-5 mb-8">
            <div className="flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-foreground/90 leading-relaxed">
                <strong className="text-foreground">Who is writing this:</strong> MindPeak runs a 1-on-1 online {config.exam} coaching
                program, so we have an obvious commercial interest. That is exactly why this page summarises only recurring,
                publicly visible themes, links every community so you can verify us against the source, and never claims that
                Reddit endorses MindPeak — it doesn&rsquo;t, and no institute can honestly claim that.
              </p>
            </div>
          </div>

          <button onClick={openDemoModal} className="px-10 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-[0.15em] shadow-gold-glow hover:scale-105 transition-transform">
            Try a 1-on-1 Class Free →
          </button>
        </section>

        {/* The communities */}
        <section className="bg-secondary/30 border-y border-border py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-7 h-7 text-primary" />
              <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl">
                The Communities <span className="text-gradient-gold">Worth Reading</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {config.subreddits.map((s) => (
                <div key={s.name} className="rounded-xl border border-border bg-card p-6">
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-display font-bold text-primary text-lg hover:underline"
                  >
                    {s.name} <ExternalLink className="w-4 h-4" />
                  </a>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-3">{s.blurb}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recurring themes */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="w-7 h-7 text-primary" />
            <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl">
              What the Threads <span className="text-gradient-gold">Keep Saying</span>
            </h2>
          </div>
          <p className="text-foreground/85 text-sm sm:text-base leading-relaxed max-w-3xl mb-10">
            These are the themes that recur across {config.exam} coaching discussions — not quotes from specific
            threads, and not a scientific survey. Spend an evening in the communities above and you will run into
            every one of them.
          </p>
          <div className="space-y-8 max-w-3xl">
            {config.themes.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">
                  <span className="text-primary mr-2">{String(i + 1).padStart(2, '0')}</span>
                  {t.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t.body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Complaint → checklist table */}
        <section className="max-w-5xl mx-auto px-6 pb-16">
          <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-4">
            Turning Reddit Complaints Into <span className="text-gradient-gold">A Checklist</span>
          </h2>
          <p className="text-foreground/85 text-sm sm:text-base leading-relaxed max-w-3xl mb-8">
            The practical value of these threads is not a verdict — it&rsquo;s a list of questions to ask any institute
            before you pay. The right-hand column shows how a 1-on-1 format (ours) answers each one; hold every
            institute, including us, to the middle column.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="bg-secondary/50">
                  <th className="text-left px-5 py-3 text-foreground font-display">Recurring Reddit complaint</th>
                  <th className="text-left px-5 py-3 text-foreground font-display">What to verify before enrolling</th>
                  <th className="text-left px-5 py-3 text-primary font-display font-bold">How 1-on-1 answers it</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {config.checkRows.map((row, i) => (
                  <tr key={i} className="bg-background">
                    <td className="px-5 py-3 text-muted-foreground italic">{row.complaint}</td>
                    <td className="px-5 py-3 text-foreground">{row.check}</td>
                    <td className="px-5 py-3 text-primary">{row.oneOnOne}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* How to research well */}
        <section className="bg-secondary/30 border-y border-border py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Search className="w-7 h-7 text-primary" />
              <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl">
                How to Research Coaching on Reddit <span className="text-gradient-gold">Properly</span>
              </h2>
            </div>
            <ol className="space-y-3 mt-6">
              {researchTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground/90 leading-relaxed">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/15 text-primary text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                  {tip}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Where MindPeak fits — explicitly the pitch */}
        <section className="bg-card/30 border-b border-border py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-6 text-center">
              Where MindPeak Fits <span className="text-gradient-gold">(Yes, This Is Our Pitch)</span>
            </h2>
            {config.fitParagraphs.map((p, i) => (
              <p key={i} className="text-muted-foreground text-base leading-relaxed mb-5">{p}</p>
            ))}
            <div className="text-center mt-8">
              <button onClick={openDemoModal} className="px-14 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-[0.15em] shadow-gold-glow hover:scale-105 transition-transform">
                Book the Free Trial →
              </button>
            </div>
          </div>
        </section>

        {/* Related links */}
        <section className="max-w-5xl mx-auto px-6 py-12">
          <h3 className="font-display font-bold text-foreground text-lg mb-6">Related Pages</h3>
          <div className="flex flex-wrap gap-3">
            {config.related.map((l) => (
              <Link key={l.to} to={l.to} className="px-5 py-3 rounded-lg bg-card border border-border text-foreground text-sm hover:border-primary/40 transition-colors flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" /> {l.label}
              </Link>
            ))}
          </div>
        </section>

        <PageFAQ items={config.faqs} heading={`${config.exam} Coaching & Reddit`} highlight="FAQs" />

        <PageFooter extra={config.footerNote} />
      </main>
    </>
  );
};

export default RedditCoachingGuide;

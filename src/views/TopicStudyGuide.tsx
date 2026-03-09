"use client";

import { usePathname } from 'next/navigation';
import { Navigate } from '@/components/Navigate';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { parseStudyGuideSlug, buildStudyGuide } from '@/lib/topicStudyGuides';
import { getTopicContent } from '@/data/topicContent';
import { Link } from '@/components/RouterLink';
import { useDemoModal } from '@/components/DemoBookingModal';
import {
  BookOpen, ArrowRight, ChevronRight, Target, AlertTriangle,
  CheckCircle, Clock, Brain, TrendingUp, BookMarked, Lightbulb,
  FileText, Zap, GraduationCap, BarChart3, Calendar, HelpCircle
} from 'lucide-react';

/* ── Seeded int (same logic as topicStudyGuides.ts) ── */
function seededInt(seed: number, min: number, max: number): number {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return min + Math.floor((x - Math.floor(x)) * (max - min + 1));
}

export default function TopicStudyGuide() {
  const pathname = usePathname();
  const slug = pathname.replace(/^\//, '');
  const { openDemoModal } = useDemoModal();

  const info = parseStudyGuideSlug(slug);
  if (!info) return <Navigate to="/" replace />;

  const guide = buildStudyGuide(info);
  const tc = getTopicContent(guide.chapterSlug, guide.topicName);
  const seed = guide.slug.length * 7;
  const relatedTopics = guide.topics.filter(t => t !== guide.topicName).slice(0, 5);
  const studyHours = seededInt(seed + 1, 8, 20);
  const pyqFreq = seededInt(seed + 2, 3, 8);
  const totalDays = seededInt(seed + 7, 7, 14);
  const phase1Days = seededInt(seed + 4, 2, 4);
  const phase2Days = seededInt(seed + 6, 3, 5);

  const diffColor = guide.difficulty === 'Hard'
    ? 'bg-destructive/10 text-red-400'
    : guide.difficulty === 'Medium'
      ? 'bg-yellow-500/10 text-yellow-400'
      : 'bg-green-500/10 text-green-400';

  return (
    <>
      <SEOHead
        title={`How to Study ${guide.topicName} for ${guide.exam} — Complete Guide`}
        description={`Learn how to study ${guide.topicName} for ${guide.exam}. Step-by-step plan, resources, common mistakes & practice questions.`}
        canonical={`https://mindpeakinstitute.com/${slug}`}
      />
      <Navbar />

      <main className="min-h-screen bg-background text-foreground">
        {/* Breadcrumbs */}
        <div className="max-w-4xl mx-auto px-4 pt-24 pb-2">
          <nav className="flex items-center gap-1 text-sm text-muted-foreground flex-wrap">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href={`/${guide.exam.toLowerCase()}-coaching`} className="hover:text-primary transition-colors">{guide.exam} Coaching</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href={guide.chapterLink} className="hover:text-primary transition-colors">{guide.chapter}</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground">{guide.topicName}</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 pb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <div>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">{guide.exam} {guide.subject} Study Guide</span>
              <h1 className="text-2xl md:text-3xl font-bold">How to Study {guide.topicName} for {guide.exam}</h1>
            </div>
          </div>

          {/* Stat badges */}
          <div className="flex flex-wrap gap-3 text-sm mb-6">
            <span className={`px-3 py-1 rounded-full font-medium ${diffColor}`}>{guide.difficulty}</span>
            <span className="px-3 py-1 rounded-full bg-accent/10 text-accent-foreground">{guide.weightage} weightage</span>
            <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground">{guide.chapter}</span>
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">{pyqFreq}/10 papers</span>
          </div>

          {/* Quick stats cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {[
              { icon: Clock, label: 'Study Time', value: `~${studyHours} hrs` },
              { icon: Calendar, label: 'Duration', value: `${totalDays} days` },
              { icon: BarChart3, label: 'PYQ Frequency', value: `${pyqFreq}/10 yrs` },
              { icon: Target, label: 'Weightage', value: guide.weightage },
            ].map((stat, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-4 text-center">
                <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-lg font-bold">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why it matters */}
        <section className="max-w-4xl mx-auto px-4 pb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" /> Why {guide.topicName} Matters
          </h2>
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">{guide.topicName}</strong> is part of the <Link href={guide.chapterLink} className="text-primary hover:underline">{guide.chapter}</Link> chapter
              in {guide.exam} {guide.subject}, which carries <strong className="text-primary">{guide.weightage}</strong> weightage.
              This topic has appeared in <strong className="text-foreground">{pyqFreq} out of the last 10</strong> {guide.exam} papers,
              making it a high-priority area for focused preparation.
            </p>
          </div>
        </section>

        {/* Definition (if topic content exists) */}
        {tc && (
          <section className="max-w-4xl mx-auto px-4 pb-10">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-primary" /> What is {guide.topicName}?
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <BookMarked className="w-4 h-4 text-primary" /> Definition
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{tc.definition}</p>
                {tc.explanation && (
                  <p className="text-muted-foreground text-sm leading-relaxed mt-3">{tc.explanation}</p>
                )}
              </div>
              <div className="space-y-4">
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary" /> Key Fact
                  </h3>
                  <p className="text-muted-foreground text-sm">{tc.keyFact}</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-primary" /> Real-World Application
                  </h3>
                  <p className="text-muted-foreground text-sm">{tc.realWorldApp}</p>
                </div>
              </div>
            </div>
            {tc.ncertRef && (
              <p className="text-xs text-muted-foreground mt-3 italic">📖 NCERT Reference: {tc.ncertRef}</p>
            )}
          </section>
        )}

        {/* Worked example */}
        {tc?.workedExample && (
          <section className="max-w-4xl mx-auto px-4 pb-10">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" /> Solved Example
            </h2>
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 space-y-4">
              <div>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Problem</span>
                <p className="text-foreground mt-1">{tc.workedExample.problem}</p>
              </div>
              <div>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Solution</span>
                <p className="text-muted-foreground mt-1">{tc.workedExample.solution}</p>
              </div>
              <div className="pt-2 border-t border-primary/20">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Answer</span>
                <p className="text-foreground font-bold mt-1">{tc.workedExample.answer}</p>
              </div>
            </div>
          </section>
        )}

        {/* Prerequisites */}
        <section className="max-w-4xl mx-auto px-4 pb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Brain className="w-5 h-5 text-primary" /> Prerequisites Before You Start
          </h2>
          <div className="space-y-3 mb-4">
            {Array.from({ length: seededInt(seed, 2, 4) }, (_, j) => {
              const prereq = relatedTopics[j] || guide.topics[j] || `Basic ${guide.subject} concepts`;
              return (
                <div key={j} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                  <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm font-bold">{j + 1}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{prereq}</p>
                    <p className="text-muted-foreground text-xs mt-1">Forms the conceptual foundation for understanding {guide.topicName}. Without this, you'll struggle with derivations and applications.</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              <strong className="text-yellow-400">Self-check:</strong> Solve 5 basic problems from each prerequisite topic. If you score below 60%, revisit those foundations first.
            </p>
          </div>
        </section>

        {/* Study Plan Phases */}
        <section className="max-w-4xl mx-auto px-4 pb-10">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" /> Step-by-Step Study Plan
          </h2>

          {/* Phase cards */}
          <div className="space-y-4">
            {/* Phase 1 */}
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="bg-primary/10 px-5 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Concept Building</h3>
                  <p className="text-xs text-muted-foreground">{phase1Days} days</p>
                </div>
              </div>
              <div className="p-5">
                <div className="space-y-3">
                  {[
                    { day: 'Day 1', task: `Read NCERT chapter section on ${guide.topicName}`, time: '2-3 hrs', goal: 'Complete conceptual understanding' },
                    { day: 'Day 2', task: 'Watch concept video + take notes', time: '1.5 hrs', goal: 'Visual reinforcement' },
                    { day: `Day ${phase1Days}`, task: 'Solve NCERT examples and exercises', time: '2-3 hrs', goal: '100% NCERT mastery' },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                      <span className="text-xs font-semibold text-primary min-w-[50px]">{row.day}</span>
                      <span className="text-sm text-foreground flex-1">{row.task}</span>
                      <span className="text-xs text-muted-foreground hidden sm:block">{row.time}</span>
                    </div>
                  ))}
                </div>
                {guide.keyFormulas.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-foreground mb-2">Key formulas to master:</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {guide.keyFormulas.slice(0, 5).map((f, j) => (
                        <div key={j} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Phase 2 */}
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="bg-accent/10 px-5 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                  <span className="text-accent-foreground font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Problem Practice</h3>
                  <p className="text-xs text-muted-foreground">{phase2Days} days</p>
                </div>
              </div>
              <div className="p-5 space-y-3">
                {[
                  { level: 'Easy', days: 'Day 1-2', desc: 'Solve 20 direct-application problems', target: '90%+ accuracy', color: 'text-green-400 bg-green-500/10' },
                  { level: 'Medium', days: 'Day 3-4', desc: 'Solve 15 multi-step problems', target: '75%+ accuracy', color: 'text-yellow-400 bg-yellow-500/10' },
                  { level: 'Hard', days: 'Day 5+', desc: `Solve 10 advanced/${guide.exam}-level problems`, target: '60%+ accuracy', color: 'text-red-400 bg-destructive/10' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                    <span className={`text-xs font-bold px-2 py-1 rounded-md ${item.color}`}>{item.level}</span>
                    <div className="flex-1">
                      <p className="text-sm text-foreground">{item.desc}</p>
                      <p className="text-xs text-muted-foreground">{item.days}</p>
                    </div>
                    <span className="text-xs font-semibold text-primary hidden sm:block">{item.target}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Phase 3 */}
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="bg-primary/10 px-5 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">PYQ Mastery</h3>
                  <p className="text-xs text-muted-foreground">2 days</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-muted-foreground mb-3">Solve all previous year questions on {guide.topicName} from the last 10 years. Analyse:</p>
                <div className="space-y-2">
                  {[
                    'Which sub-concepts are tested most frequently?',
                    'What question formats appear (MCQ, numerical, assertion-reasoning)?',
                    'What traps do exam setters commonly use?',
                  ].map((q, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <HelpCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{q}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="bg-accent/10 px-5 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                  <span className="text-accent-foreground font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Revision & Integration</h3>
                  <p className="text-xs text-muted-foreground">1 day</p>
                </div>
              </div>
              <div className="p-5 space-y-2">
                {[
                  `Create a 1-page summary of ${guide.topicName}: formulas, key concepts, common traps`,
                  `Solve 5 mixed problems combining ${guide.topicName} with ${relatedTopics[0] || 'related topics'}`,
                  'Take a mini-test (15 questions, 20 minutes)',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Total time banner */}
          <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-foreground font-semibold">Total Study Time</span>
            </div>
            <span className="text-primary font-bold">~{studyHours} hours over {totalDays} days</span>
          </div>
        </section>

        {/* Common Mistakes */}
        {guide.commonMistakes.length > 0 && (
          <section className="max-w-4xl mx-auto px-4 pb-10">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-destructive" /> Common Mistakes
            </h2>
            <div className="space-y-3">
              {guide.commonMistakes.slice(0, 4).map((m, j) => (
                <div key={j} className="rounded-xl border border-border bg-card p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-red-400 text-sm font-bold">{j + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm mb-1">{m}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        Exam setters deliberately design options that exploit this misunderstanding. After solving each problem, explicitly state which concept/formula you used and why.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Resources */}
        <section className="max-w-4xl mx-auto px-4 pb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <BookMarked className="w-5 h-5 text-primary" /> Recommended Resources
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { name: 'NCERT Textbook', type: 'Foundation', phase: 'Phase 1', icon: BookOpen },
              { name: guide.exam === 'JEE' ? 'HC Verma / DC Pandey' : 'Trueman / MTG', type: 'Reference', phase: 'Phase 2', icon: FileText },
              { name: `${guide.exam} Practice Questions`, type: 'Online MCQs', phase: 'Phase 2-3', icon: Target, link: guide.practiceLink },
              { name: `${guide.exam} Previous Year Questions`, type: 'PYQ Bank', phase: 'Phase 3', icon: BarChart3, link: guide.pyqLink },
              { name: `${guide.chapter} Full Chapter`, type: 'Overview', phase: 'All phases', icon: GraduationCap, link: guide.chapterLink },
            ].map((res, i) => {
              const content = (
                <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 hover:border-primary/30 transition-colors">
                  <res.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">{res.name}</p>
                    <p className="text-xs text-muted-foreground">{res.type} · {res.phase}</p>
                  </div>
                </div>
              );
              return res.link
                ? <Link key={i} href={res.link}>{content}</Link>
                : <div key={i}>{content}</div>;
            })}
          </div>
        </section>

        {/* Connected topics */}
        {relatedTopics.length > 0 && (
          <section className="max-w-4xl mx-auto px-4 pb-10">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" /> How {guide.topicName} Connects to Other Topics
            </h2>
            <div className="space-y-3">
              {relatedTopics.slice(0, 3).map((t, j) => (
                <div key={j} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{t}</p>
                    <p className="text-muted-foreground text-xs">
                      {guide.topicName} provides {j === 0 ? 'the mathematical framework' : j === 1 ? 'conceptual prerequisites' : 'practical applications'} for understanding {t}. Questions often combine both topics.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Exam Strategy */}
        <section className="max-w-4xl mx-auto px-4 pb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" /> Exam Strategy
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'Time per question', value: `Max ${guide.exam === 'JEE' ? '4' : '2'} minutes` },
              { label: 'Identification', value: `Look for ${guide.keyFormulas[0] || 'topic-specific formulas'}` },
              { label: 'Elimination', value: 'Use dimensional analysis to eliminate 1-2 options immediately' },
              { label: 'Verification', value: 'Always check if your answer is physically meaningful' },
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-sm font-bold">{i + 1}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{tip.label}</p>
                  <p className="text-muted-foreground text-xs">{tip.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-4xl mx-auto px-4 pb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-primary" /> Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {[
              { q: `How important is ${guide.topicName} for ${guide.exam}?`, a: `It appears in ${pyqFreq}/10 recent papers and is part of a chapter with ${guide.weightage} weightage. It's a must-study topic.` },
              { q: `Can I skip ${guide.topicName} if I'm running short on time?`, a: `Not recommended. If time is very limited, focus on formula applications and PYQ patterns — skip derivations.` },
              { q: `How long does it take to master ${guide.topicName}?`, a: `With focused daily study, ~${studyHours} hours over ${totalDays} days. With a MindPeak mentor, this can be optimised to ${Math.ceil(studyHours * 0.7)} hours.` },
              { q: `What's the best way to revise ${guide.topicName} before the exam?`, a: `Use your 1-page summary + solve 5 PYQs under timed conditions. Takes 30-45 minutes and refreshes all key concepts.` },
            ].map((faq, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-5">
                <p className="font-semibold text-foreground text-sm mb-2">Q: {faq.q}</p>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 pb-20">
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
            <h2 className="text-xl font-bold mb-3">Need Help With {guide.topicName}?</h2>
            <p className="text-muted-foreground mb-6">Get a dedicated mentor who will create a personalised study plan for {guide.chapter} — including {guide.topicName}.</p>
            <button onClick={openDemoModal} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
              Book Free Demo <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

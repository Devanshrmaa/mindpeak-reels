import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'Are the classes conducted online or offline?',
    a: 'All our classes are conducted online via live 1-on-1 video sessions. The best part? Every live class is recorded, so you can revisit any session anytime for revision. This means you never miss a concept — even if you couldn\'t attend a class, the recording is always available.',
  },
  {
    q: 'What makes MindPeak different from other coaching institutes?',
    a: 'We offer personalized 1-on-1 live online classes 6 days a week with dedicated mentors — not crowded batch classes. Every student gets a customized study plan, regular performance analytics, and direct access to faculty for doubt resolution. Plus, all sessions are recorded for later revision.',
  },
  {
    q: 'How are the demo classes conducted?',
    a: 'Demo classes are free, live 1-on-1 sessions with our faculty. You\'ll experience our teaching methodology firsthand, get a personalized assessment of your current level, and receive a tailored roadmap for your preparation.',
  },
  {
    q: 'What courses do you offer for JEE and NEET?',
    a: 'We offer 1-year and 2-year programs for both JEE Main + Advanced and NEET UG. Additionally, we have Subject Crash Courses, 1-on-1 Crash Programs, Computer-Based Test Series, and Foundation courses for classes 6th to 10th.',
  },
  {
    q: 'Are the test series in CBT (Computer-Based Test) format?',
    a: 'Yes! All our JEE and NEET test series are conducted in CBT format, simulating the actual exam environment so students are fully prepared on exam day.',
  },
  {
    q: 'Can I join mid-session or do I have to wait for a new batch?',
    a: 'Since our classes are 1-on-1, you can join anytime! There\'s no batch dependency. We\'ll create a customized schedule that works for you and align the curriculum to your exam timeline.',
  },
  {
    q: 'What is the fee structure?',
    a: 'Our fees vary by program and duration. Book a free demo class and our counselor will walk you through all available plans, including any ongoing scholarships or installment options.',
  },
  {
    q: 'How do you track student progress?',
    a: 'We use detailed performance analytics dashboards that track topic-wise strengths, weaknesses, test scores, and improvement trends. Parents and students receive regular progress reports.',
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 overflow-hidden" aria-label="Frequently asked questions">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-primary/3 blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-6">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">FAQ</span>
          </div>
          <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <div
                  className={`rounded-xl border transition-all duration-300 ${
                    isOpen
                      ? 'bg-background/50 backdrop-blur-xl backdrop-saturate-150 border-primary/30 shadow-[0_8px_32px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.06)]'
                      : 'bg-background/25 backdrop-blur-lg border-border/40 hover:border-border/70 hover:bg-background/35'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className={`text-sm font-semibold transition-colors ${isOpen ? 'text-foreground' : 'text-foreground/80'}`}>
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className={`w-4 h-4 transition-colors ${isOpen ? 'text-primary' : 'text-muted-foreground'}`} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-4">
                          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-3" />
                          <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

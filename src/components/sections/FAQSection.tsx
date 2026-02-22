import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <section className="relative py-24 md:py-36 px-4 sm:px-6 overflow-hidden bg-background" aria-label="Frequently asked questions">
      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-foreground/10" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground/70 font-medium">FAQ</span>
            <span className="h-px w-8 bg-foreground/10" />
          </div>
          <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl tracking-[-0.02em]">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className={`rounded-xl border transition-all duration-500 ${
                    isOpen
                      ? 'border-primary/15 bg-foreground/[0.03]'
                      : 'border-foreground/[0.04] hover:border-foreground/[0.08]'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className={`text-sm font-medium transition-colors duration-300 ${isOpen ? 'text-foreground' : 'text-foreground/70'}`}>
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="flex-shrink-0 w-6 h-6 rounded-full border border-foreground/10 grid place-items-center"
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 1V9M1 5H9" stroke={isOpen ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))'} strokeWidth="1.2" />
                      </svg>
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5">
                          <div className="w-full h-px bg-gradient-to-r from-foreground/[0.06] via-primary/10 to-foreground/[0.06] mb-4" />
                          <p className="text-muted-foreground text-sm leading-[1.8]">{faq.a}</p>
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

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent" />
    </section>
  );
};

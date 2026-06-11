import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface PageFAQProps {
  items: FAQItem[];
  heading?: string;
  highlight?: string;
}

/**
 * Reusable FAQ section that auto-generates FAQPage JSON-LD schema.
 * Matches the site's dark navy/gold design.
 */
export const PageFAQ = ({ items, heading = 'Frequently Asked', highlight = 'Questions' }: PageFAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6" aria-label="Frequently asked questions">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="eyebrow eyebrow-center mb-5">Straight answers</div>
          <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl tracking-[-0.02em]">
            {heading} <span className="text-gradient-gold">{highlight}</span>
          </h2>
        </motion.div>

        {/* Items */}
        <div className="space-y-3">
          {items.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div
                  className={`border transition-all duration-300 ${
                    isOpen
                      ? 'bg-card border-primary/25 rounded-2xl shadow-[0_12px_34px_hsl(224_40%_22%/0.08)]'
                      : 'bg-transparent border-transparent border-b-border rounded-none hover:bg-card/60'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className={`text-sm font-semibold transition-colors ${isOpen ? 'text-foreground' : 'text-foreground/80'}`}>
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`flex-shrink-0 w-7 h-7 rounded-full border grid place-items-center transition-colors ${
                        isOpen ? 'border-primary/50 bg-primary/10' : 'border-border'
                      }`}
                    >
                      <ChevronDown className={`w-3.5 h-3.5 ${isOpen ? 'text-primary' : 'text-muted-foreground'}`} />
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
                          <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
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

/**
 * Build FAQPage JSON-LD for SEOHead.
 * Filters out invalid items and trims values to prevent "Unnamed item" GSC errors.
 */
export const buildFAQSchema = (items: FAQItem[]): object => {
  const valid = (items || []).filter(
    (faq) =>
      faq &&
      typeof faq.question === 'string' &&
      faq.question.trim() !== '' &&
      typeof faq.answer === 'string' &&
      faq.answer.trim() !== '',
  );
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: valid.map((faq) => ({
      '@type': 'Question',
      name: faq.question.trim(),
      acceptedAnswer: { '@type': 'Answer', text: faq.answer.trim() },
    })),
  };
};

/**
 * Build FAQPage JSON-LD from { q, a } shaped data.
 * Filters out invalid items and trims values.
 */
export const buildFAQSchemaFromQA = (items: { q: string; a: string }[]): object => {
  const valid = (items || []).filter(
    (faq) =>
      faq &&
      typeof faq.q === 'string' &&
      faq.q.trim() !== '' &&
      typeof faq.a === 'string' &&
      faq.a.trim() !== '',
  );
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: valid.map((faq) => ({
      '@type': 'Question',
      name: faq.q.trim(),
      acceptedAnswer: { '@type': 'Answer', text: faq.a.trim() },
    })),
  };
};

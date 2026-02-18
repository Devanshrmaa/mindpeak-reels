import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface PAAQuestion {
  question: string;
  answer: string;
}

interface PAAProps {
  questions: PAAQuestion[];
  heading?: string;
}

/**
 * "People Also Ask" accordion optimized for featured snippet capture.
 * Renders clean semantic HTML that Google can parse for PAA boxes.
 */
export const PeopleAlsoAsk = ({ questions, heading = 'People Also Ask' }: PAAProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6" aria-label="Related questions">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-foreground text-xl sm:text-2xl md:text-3xl font-bold mb-5 sm:mb-8 text-center">
          {heading}
        </h2>

        <div className="space-y-2 sm:space-y-3" role="list" itemScope itemType="https://schema.org/FAQPage">
          {questions.map((q, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                role="listitem"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                className="rounded-xl border border-border bg-card/50 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-3.5 sm:px-5 py-3 sm:py-4 text-left gap-3 sm:gap-4"
                  aria-expanded={isOpen}
                >
                  <h3
                    itemProp="name"
                    className="text-foreground font-semibold text-xs sm:text-sm md:text-base leading-snug"
                  >
                    {q.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0"
                  >
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  </motion.div>
                </button>

                {isOpen && (
                  <div
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                    className="px-3.5 sm:px-5 pb-4 sm:pb-5"
                  >
                    <p
                      itemProp="text"
                      className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed"
                    >
                      {q.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/**
 * Build PAA JSON-LD schema for SEOHead injection.
 */
export function buildPAASchema(questions: PAAQuestion[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };
}

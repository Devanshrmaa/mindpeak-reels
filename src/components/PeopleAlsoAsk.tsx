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
        <div className="eyebrow eyebrow-center mb-4">From the search results</div>
        <h2 className="font-display text-foreground text-xl sm:text-2xl md:text-3xl font-bold mb-5 sm:mb-8 text-center tracking-[-0.02em]">
          {heading}
        </h2>

        <div className="space-y-2 sm:space-y-3" role="list">
          {questions.map((q, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                role="listitem"
                className={`rounded-xl border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'border-primary/25 bg-card shadow-[0_10px_28px_hsl(224_40%_22%/0.07)]'
                    : 'border-border bg-card/60 hover:border-primary/20 hover:bg-card'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-3.5 sm:px-5 py-3 sm:py-4 text-left gap-3 sm:gap-4"
                  aria-expanded={isOpen}
                >
                  <h3
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
                    className="px-3.5 sm:px-5 pb-4 sm:pb-5"
                  >
                    <p
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



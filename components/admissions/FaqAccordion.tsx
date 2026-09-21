'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="divide-y divide-stone-300 mt-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index}>
            <h3>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
                className="w-full flex items-center justify-between gap-6 py-6 text-left group"
              >
                <span className="font-display text-lg text-navy-950 group-hover:text-navy-700 transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gold-600 flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  initial={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
                  animate={prefersReducedMotion ? undefined : { height: 'auto', opacity: 1 }}
                  exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="text-charcoal-700 leading-relaxed pb-6">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

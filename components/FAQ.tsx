'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is the typical timeline for a business exit?",
    answer: "While every deal is unique, most mid-market exits take between 6 to 9 months from initial valuation to final closing. This includes preparation, marketing, due diligence, and legal finalization."
  },
  {
    question: "How do you ensure confidentiality during the process?",
    answer: "We use 'Blind Profiles' that highlight financial performance without revealing the company name or location. NDAs are required before any sensitive information is shared with pre-vetted buyers."
  },
  {
    question: "What are your fees for M&A advisory?",
    answer: "We typically work on a success-fee basis (Lehman Formula or flat percentage) combined with a small initial retainer to cover valuation and marketing costs. Our interests are fully aligned with yours."
  },
  {
    question: "Do you handle international acquisitions?",
    answer: "Yes, Atlas has a global network of institutional investors and strategic buyers across North America, Europe, and Southeast Asia, specializing in cross-border transactions."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#080808]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-semibold tracking-widest uppercase text-sm mb-4">Strategic Insights</h2>
          <h3 className="text-4xl font-bold">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-2xl glass-morphism overflow-hidden">
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-lg">{faq.question}</span>
                {activeIndex === i ? <Minus className="text-blue-500" /> : <Plus className="text-blue-500" />}
              </button>
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-gray-400 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Strategic Assessment',
    description: 'We begin with a deep dive into your business metrics, market positioning, and growth potential to establish a realistic premium valuation.'
  },
  {
    number: '02',
    title: 'Confidential Marketing',
    description: 'Our team creates a blind profile to attract qualified buyers from our exclusive network without compromising your operational privacy.'
  },
  {
    number: '03',
    title: 'Buyer Vetting',
    description: 'We filter through hundreds of inquiries to present only the top 1% of buyers who possess the capital and strategic fit for your legacy.'
  },
  {
    number: '04',
    title: 'Negotiation & Closing',
    description: 'From LOI to final SPA, we manage the complex legal and financial hurdles to ensure a seamless transition and maximum value capture.'
  }
];

const Process = () => {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-blue-500 font-semibold tracking-widest uppercase text-sm mb-4">The Atlas Method</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Our Proven Roadmap to <br /> a Successful Exit</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 rounded-3xl glass-morphism group hover:border-blue-500/50 transition-colors"
            >
              <div className="text-5xl font-black text-white/5 absolute top-4 right-6 group-hover:text-blue-500/10 transition-colors">
                {step.number}
              </div>
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mb-6">
                {step.number}
              </div>
              <h4 className="text-xl font-bold mb-4">{step.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Target, Eye } from 'lucide-react';

const values = [
  {
    icon: ShieldCheck,
    title: 'Absolute Discretion',
    description: 'We protect your legacy with ironclad confidentiality protocols at every stage of the transaction.'
  },
  {
    icon: Target,
    title: 'Precision Execution',
    description: 'Our data-driven approach ensures that every deal is structured for maximum value and minimal risk.'
  },
  {
    icon: Zap,
    title: 'Agile Advisory',
    description: 'In a fast-moving market, we provide the speed and flexibility required to capture unique opportunities.'
  },
  {
    icon: Eye,
    title: 'Visionary Strategy',
    description: 'We don’t just look at the numbers; we look at the future potential and strategic fit of every acquisition.'
  }
];

const Values = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-blue-500 font-semibold tracking-widest uppercase text-sm mb-4">Our Core Values</h2>
          <h3 className="text-4xl md:text-5xl font-bold">The Pillars of Atlas</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl glass-morphism border border-white/5 hover:border-blue-500/30 transition-all"
            >
              <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6">
                <value.icon className="text-blue-500" size={28} />
              </div>
              <h4 className="text-xl font-bold mb-4">{value.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;

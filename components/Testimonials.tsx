'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Madhyavarti handled our ₹250Cr exit with surgical precision. Their network of buyers is truly global and high-caliber.",
    author: "Rajesh Khanna",
    role: "CEO, TechFlow Systems",
  },
  {
    quote: "The most professional M&A experience I've had in 20 years of investing. They understand the nuances of high-value deals.",
    author: "Sarah D'Souza",
    role: "Managing Partner, Vista Equity",
  },
  {
    quote: "Discretion was our top priority. Madhyavarti delivered a seamless acquisition without a single leak to the market.",
    author: "Vikram Mehta",
    role: "Founder, GreenGrid Energy",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-blue-500 font-semibold tracking-widest uppercase text-sm mb-4">Success Stories</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Trusted by Industry Leaders</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-3xl glass-morphism relative"
            >
              <Quote className="text-blue-600 mb-6" size={40} />
              <p className="text-gray-300 text-lg italic mb-8 leading-relaxed">"{t.quote}"</p>
              <div>
                <div className="font-bold text-white">{t.author}</div>
                <div className="text-sm text-gray-500">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

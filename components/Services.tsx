'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, BarChart3, ShieldCheck, Users, Zap, Target } from 'lucide-react';

const services = [
  {
    title: 'Sell-Side Advisory',
    description: 'Maximize your exit value with our data-driven valuation and global buyer network.',
    icon: Briefcase,
  },
  {
    title: 'Buy-Side Strategy',
    description: 'Identify and acquire high-growth companies that align with your strategic goals.',
    icon: Target,
  },
  {
    title: 'Valuation Services',
    description: 'Precise, market-aligned business valuations using advanced financial modeling.',
    icon: BarChart3,
  },
  {
    title: 'Due Diligence',
    description: 'Comprehensive risk assessment and financial verification for seamless transitions.',
    icon: ShieldCheck,
  },
  {
    title: 'Post-Merger Integration',
    description: 'Ensuring cultural and operational synergy after the deal is closed.',
    icon: Users,
  },
  {
    title: 'Capital Raising',
    description: 'Strategic access to private equity, venture capital, and institutional debt.',
    icon: Zap,
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-blue-500 font-semibold tracking-widest uppercase text-sm mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive M&A Solutions</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We provide end-to-end advisory services tailored for high-net-worth individuals and institutional investors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl glass-morphism hover:bg-white/5 transition-all group"
            >
              <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <service.icon className="text-blue-500 group-hover:text-white transition-colors" size={28} />
              </div>
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

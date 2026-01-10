'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1">
          <h2 className="text-blue-500 font-semibold tracking-widest uppercase text-sm mb-4">Why Atlas</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            The Gold Standard in <br /> Private Acquisitions
          </h3>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            We don't just list businesses; we curate opportunities. Our platform is designed for the elite, ensuring every transaction is handled with absolute discretion and professional rigor.
          </p>
          
          <div className="space-y-6">
            {[
              'Verified ₹100Cr+ Buyer Network',
              'Proprietary AI Valuation Engine',
              'End-to-End Legal & Tax Support',
              'Strict Confidentiality Protocols',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center">
                  <CheckCircle2 className="text-blue-500" size={16} />
                </div>
                <span className="text-gray-200 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1000" 
              alt="Premium Boardroom" 
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-600/30 rounded-full blur-[100px] -z-10" />
          <div className="absolute top-1/2 right-0 w-40 h-40 glass-morphism rounded-2xl p-6 -translate-y-1/2 translate-x-1/2 hidden md:block">
            <div className="text-3xl font-bold text-white mb-1">98%</div>
            <div className="text-xs text-gray-400 uppercase tracking-tighter">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

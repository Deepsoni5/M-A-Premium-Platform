'use client';

import React from 'react';
import { motion } from 'framer-motion';

const industries = [
  { name: 'Technology & SaaS', image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg' },
  { name: 'Healthcare & Biotech', image: 'https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg' },
  { name: 'Manufacturing', image: 'https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg' },
  { name: 'Consumer Goods', image: 'https://images.pexels.com/photos/3962294/pexels-photo-3962294.jpeg' },
  { name: 'Financial Services', image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg' },
  { name: 'Renewable Energy', image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg' },
];

const Industries = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-semibold tracking-widest uppercase text-sm mb-4">Sectors of Excellence</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Industries We Transform</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="relative h-64 rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img 
                src={industry.image} 
                alt={industry.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h4 className="text-xl font-bold text-white">{industry.name}</h4>
                <div className="w-0 h-1 bg-blue-600 group-hover:w-full transition-all duration-300 mt-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;

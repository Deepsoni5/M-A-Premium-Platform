'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, MapPin, Users2, Building2 } from 'lucide-react';

const stats = [
  { icon: Globe2, label: 'Global Presence', value: '12+ Countries' },
  { icon: MapPin, label: 'Strategic Hubs', value: 'London, NY, Dubai, SG' },
  { icon: Users2, label: 'Expert Advisors', value: '150+' },
  { icon: Building2, label: 'Partner Firms', value: '45+' },
];

const GlobalNetwork = () => {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
        <img 
          src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="World Map" 
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-blue-500 font-semibold tracking-widest uppercase text-sm mb-4">Global Reach</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Connecting Capital <br /> Across Continents
            </h3>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Our network extends far beyond local borders. We leverage deep-rooted relationships with international private equity firms, sovereign wealth funds, and strategic conglomerates to find the perfect match for your business.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="space-y-2">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-500">
                    <stat.icon size={20} />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Global Strategy Meeting" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-morphism p-8 rounded-3xl hidden md:block">
              <div className="text-blue-500 font-bold text-xl mb-1">Cross-Border</div>
              <div className="text-gray-400 text-sm">Specialists in international M&A</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalNetwork;

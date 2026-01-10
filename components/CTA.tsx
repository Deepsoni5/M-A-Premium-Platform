'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[40px] overflow-hidden bg-blue-600 p-12 md:p-24 text-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Business Handshake" 
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="absolute inset-0 bg-blue-600/80 mix-blend-multiply" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Ready to Scale or Exit? <br /> Let's Talk Strategy.
            </h2>
            <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-12">
              Join the exclusive network of business owners and investors shaping the future of Indian enterprise.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact">
                <button className="bg-white text-blue-600 px-10 py-5 rounded-full text-lg font-bold hover:bg-gray-100 transition-all flex items-center gap-2">
                  Book a Consultation <ArrowRight size={20} />
                </button>
              </Link>
              <Link href="/buy">
                <button className="text-white border border-white/30 hover:bg-white/10 px-10 py-5 rounded-full text-lg font-bold transition-all">
                  View Listings
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

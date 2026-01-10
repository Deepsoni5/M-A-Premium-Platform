'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-blue-500 font-semibold tracking-widest uppercase text-sm mb-4">Confidential Inquiry</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">Start Your Strategic <br /> Journey Today</h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Whether you are looking to acquire a market leader or planning your ultimate exit, our advisors are ready to provide a confidential consultation.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass-morphism flex items-center justify-center text-blue-500">
                  <Send size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 uppercase">Response Time</div>
                  <div className="text-white font-bold">Within 24 Business Hours</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-morphism p-8 md:p-12 rounded-[40px]">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@company.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Company Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Acme Corp" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Inquiry Type</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors appearance-none">
                  <option className="bg-black">Selling a Business</option>
                  <option className="bg-black">Buying a Business</option>
                  <option className="bg-black">Valuation Services</option>
                  <option className="bg-black">Other Advisory</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Tell us about your goals..."></textarea>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

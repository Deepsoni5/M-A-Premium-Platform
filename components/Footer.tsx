'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">
                A
              </div>
              <span className="text-xl font-bold tracking-tight">ATLAS M&A</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Premium M&A advisory for high-growth enterprises. We bridge the gap between vision and value.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram size={18} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/buy" className="text-gray-400 hover:text-white transition-colors">Buy a Business</Link></li>
              <li><Link href="/sell" className="text-gray-400 hover:text-white transition-colors">Sell a Business</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/advisory" className="text-gray-400 hover:text-white transition-colors">Advisory Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-blue-500 shrink-0" size={20} />
                <span>NO:8, K.NO.13-3, 28TH CROSS, Hulimavu, Bangalore - 560076</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="text-blue-500 shrink-0" size={20} />
                <span>+91 90083 67818</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="text-blue-500 shrink-0" size={20} />
                <span>advisory@atlasmna.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ATLAS M&A ADVISORY GROUP. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Designed for the 1%.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

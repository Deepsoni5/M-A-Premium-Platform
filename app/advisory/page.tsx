import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, Filter, ArrowUpRight } from "lucide-react";

const listings = [
  { title: "Tier-1 SaaS Platform", sector: "Technology", valuation: "₹120Cr", location: "Bangalore", growth: "+24% YoY" },
  { title: "Specialty Healthcare Chain", sector: "Healthcare", valuation: "₹450Cr", location: "Mumbai", growth: "+18% YoY" },
  { title: "Precision Engineering Firm", sector: "Manufacturing", valuation: "₹85Cr", location: "Pune", growth: "+12% YoY" },
  { title: "D2C Lifestyle Brand", sector: "Consumer", valuation: "₹210Cr", location: "Delhi NCR", growth: "+45% YoY" },
];

export default function BuyPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Acquisition <span className="text-gradient">Opportunities</span></h1>
          <p className="text-gray-400 text-xl max-w-2xl">Exclusive access to pre-vetted, high-growth enterprises across India and Southeast Asia.</p>
        </div>

        <div className="flex flex-col md:row gap-4 mb-12">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input type="text" placeholder="Search by sector, location or valuation..." className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-blue-500 transition-colors" />
          </div>
          <button className="flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl hover:bg-white/10 transition-colors">
            <Filter size={20} /> Filters
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {listings.map((item, i) => (
            <div key={i} className="glass-morphism p-8 rounded-[32px] group hover:border-blue-500/50 transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-blue-500 text-xs font-bold uppercase tracking-widest">{item.sector}</span>
                  <h3 className="text-2xl font-bold mt-1">{item.title}</h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <ArrowUpRight size={20} />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                <div>
                  <div className="text-gray-500 text-xs uppercase">Valuation</div>
                  <div className="font-bold">{item.valuation}</div>
                </div>
                <div>
                  <div className="text-gray-500 text-xs uppercase">Location</div>
                  <div className="font-bold">{item.location}</div>
                </div>
                <div>
                  <div className="text-gray-500 text-xs uppercase">Growth</div>
                  <div className="font-bold text-green-500">{item.growth}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}

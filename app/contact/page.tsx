import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      <div className="pt-32 pb-12 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Get in <span className="text-gradient">Touch</span></h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Our advisors are available for confidential consultations regarding your strategic goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { icon: Phone, label: "Call Us", value: "+91 90083 67818", sub: "Mon-Fri, 9am-6pm" },
            { icon: Mail, label: "Email Us", value: "advisory@atlasmna.com", sub: "24/7 Support" },
            { icon: MapPin, label: "Visit Us", value: "Hulimavu, Bangalore", sub: "Karnataka, India" },
            { icon: Clock, label: "Response Time", value: "< 24 Hours", sub: "For all inquiries" },
          ].map((item, i) => (
            <div key={i} className="glass-morphism p-8 rounded-3xl text-center border border-white/5 hover:border-blue-500/30 transition-all">
              <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 mx-auto mb-6">
                <item.icon size={24} />
              </div>
              <div className="text-sm text-gray-500 uppercase mb-1">{item.label}</div>
              <div className="text-lg font-bold text-white mb-1">{item.value}</div>
              <div className="text-xs text-gray-500">{item.sub}</div>
            </div>
          ))}
        </div>

        <Contact />
      </div>
      <Footer />
    </main>
  );
}

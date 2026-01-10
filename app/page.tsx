import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Services from "@/components/Services";
import GlobalNetwork from "@/components/GlobalNetwork";
import Industries from "@/components/Industries";
import Values from "@/components/Values";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      <Hero />
      <Features />
      <Process />
      <Services />
      <GlobalNetwork />
      <Industries />
      <Values />
      <Testimonials />
      <FAQ />
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
}

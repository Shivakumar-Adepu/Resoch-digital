import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import ClientsSection from "@/components/ClientsSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import CTASection from "@/components/CTASection";
import TrustedBySection from "@/components/TrustedBySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ProcessSection />
        <ServicesSection />
        <ClientsSection />
        <WhatWeDoSection />
        <CTASection />
        <TrustedBySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

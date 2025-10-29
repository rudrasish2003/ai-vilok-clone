import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhatIsSection from "@/components/WhatIsSection";
import BeliefSection from "@/components/BeliefSection";
import UseCasesSection from "@/components/UseCasesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import JourneySection from "@/components/JourneySection";
import AboutSection from "@/components/AboutSection";
import VenturesSection from "@/components/VenturesSection";
import PartnerSection from "@/components/PartnerSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <WhatIsSection />
      <BeliefSection />
      <UseCasesSection />
      <WhyChooseSection />
      <JourneySection />
      <AboutSection />
      <VenturesSection />
      <PartnerSection />
      <Footer />
    </div>
  );
};

export default Index;

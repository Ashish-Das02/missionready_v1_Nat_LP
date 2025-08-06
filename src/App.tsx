import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import HowItWorksSection from './components/HowItWorksSection';
import PartnersSection from './components/PartnersSection';
import SuccessStoriesSection from './components/SuccessStoriesSection';
import FAQSection from './components/FAQSection';
import AboutUsSection from './components/AboutUsSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <PartnersSection />
      <SuccessStoriesSection />
      <FAQSection />
      <AboutUsSection />
      <FooterSection />
    </div>
  );
}

export default App;
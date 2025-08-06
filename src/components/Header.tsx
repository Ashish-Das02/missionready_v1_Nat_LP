import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToEmailForm = () => {
    const element = document.querySelector('input[type="email"]');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest'
      });
      // Focus the email input after scrolling
      setTimeout(() => {
        (element as HTMLInputElement).focus();
      }, 500);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'benefits', 'how-it-works', 'partners', 'success-stories', 'faq', 'about-us'];
      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    // Set initial state
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Account for fixed header
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const getMenuItemClass = (sectionId: string) => {
    const baseClass = "font-medium text-lg hover:text-[#FF8C00] transition-colors cursor-pointer";
    const activeClass = "text-[#2F1D1D] font-bold";
    const inactiveClass = "text-[#7F7F7F]";
    
    return `${baseClass} ${activeSection === sectionId ? activeClass : inactiveClass}`;
  };

  return (
    <header className="w-full bg-white fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/src/assets/Logo_resized.png" 
              alt="MissionReadyAI Logo" 
              className="h-12 w-auto"
            />
          </div>
          
          {/* Navigation */}
          <nav className="flex items-center space-x-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <button onClick={() => scrollToSection('hero')} className={getMenuItemClass('hero')}>
              Home
            </button>
            <button onClick={() => scrollToSection('benefits')} className={getMenuItemClass('benefits')}>
              Benefits
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className={getMenuItemClass('how-it-works')}>
              How It Works
            </button>
            <button onClick={() => scrollToSection('partners')} className={getMenuItemClass('partners')}>
              Partners
            </button>
            <button onClick={() => scrollToSection('success-stories')} className={getMenuItemClass('success-stories')}>
              Success Stories
            </button>
            <button onClick={() => scrollToSection('faq')} className={getMenuItemClass('faq')}>
              FAQ
            </button>
            <button onClick={() => scrollToSection('about-us')} className={getMenuItemClass('about-us')}>
              About Us
            </button>
          </nav>
          
          {/* Language Selection and CTA */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 cursor-pointer">
              <img 
                src="https://images.pexels.com/photos/1166643/pexels-photo-1166643.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop" 
                alt="Language Selection" 
                className="h-8 w-8"
              />
              <span className="text-[#2F1D1D] font-medium text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>EN</span>
              <ChevronDown className="h-4 w-4 text-[#7F7F7F]" />
            </div>
            
            <button 
              onClick={scrollToEmailForm}
              className="px-8 py-3 bg-[#FF8C00] text-white font-medium text-lg rounded-lg hover:bg-[#e67c00] transition-colors animate-pulse-glow" 
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Get Early Access
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
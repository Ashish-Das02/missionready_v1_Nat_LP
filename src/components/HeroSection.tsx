import React from 'react';
import { Play } from 'lucide-react';

const HeroSection: React.FC = () => {
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

  return (
    <section id="hero" className="min-h-screen bg-white flex flex-col pt-24">
      <div className="max-w-7xl mx-auto px-8 w-full">
        {/* Main Content Area */}
        <div className="pt-16">
          <div className="grid lg:grid-cols-2 gap-4 items-start w-full">
            {/* Left Content */}
            <div className="space-y-2">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold text-[#2F1D1D] leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Transforming Military Experience{' '}
                  <span className="text-[#FF8C00]">Into Civilian Success</span>
                </h1>
                
                <div className="space-y-2 mt-6">
                  <p className="text-lg text-[#2F1D1D] leading-tight font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    AI-powered <span className="font-black">career conversion</span> and <span className="font-black">empowerment support</span><br />
                    for Indian Veterans and their families
                  </p>
                </div>
                
                <p className="text-lg text-[#2F1D1D] leading-relaxed max-w-4xl mt-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  MissionReadyAI translates military skills into matching corporate roles,
                  and connects veterans and their families to real jobs and business opportunities
                </p>
              </div>
            </div>
            
            {/* Right Content - Hero Image */}
            <div className="relative flex justify-center items-start">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop" 
                  alt="Military Professional" 
                  className="w-28 h-auto rounded-2xl shadow-lg animate-hero-entrance"
                  style={{ 
                    filter: 'drop-shadow(0 8px 16px rgba(255, 140, 0, 0.3))'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements Area - Centered */}
        <div className="flex justify-center items-center mt-12">
          <div className="flex items-center space-x-6">
            {/* CTA Button */}
            <div>
              <button 
                onClick={scrollToEmailForm}
                className="px-10 py-4 bg-[#FF8C00] text-white text-xl font-medium rounded-lg hover:bg-[#e67c00] transition-all duration-300 shadow-lg animate-pulse-glow" 
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Get Early Access
              </button>
            </div>
          
            {/* Video Section */}
            <div>
              <div className="bg-[#2F1D1D] rounded-lg p-6 w-80 relative">
                <div className="absolute top-3 right-3">
                  <button 
                    onClick={() => window.open('https://youtu.be/5bW-PRQRGhY', '_blank')}
                    className="px-3 py-1 bg-[#FF8C00] text-white text-sm font-medium rounded-full hover:bg-[#e67c00] transition-colors animate-pulse-glow"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Click to Watch
                  </button>
                </div>
              
                <div className="bg-gray-800 rounded h-32 flex items-center justify-center mb-3 cursor-pointer"
                     onClick={() => window.open('https://youtu.be/5bW-PRQRGhY', '_blank')}>
                  <div className="w-16 h-16 bg-[#FF8C00] rounded-full flex items-center justify-center hover:bg-[#e67c00] transition-colors">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
              
                <div className="text-white">
                  <h3 className="font-bold text-base mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    See MissionReady.AI in Action
                  </h3>
                  <p className="text-sm text-gray-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Watch how we transform military careers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Text - Fixed at bottom of screen */}
      <div className="mt-8 w-full bg-white py-4">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-lg text-[#2F1D1D] leading-relaxed text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Your service has <span className="text-[#FF8C00] font-medium">prepared</span> you <span className="text-[#FF8C00] font-medium">for greatness</span>. Let our AI-powered platform ensure your <span className="text-[#FF8C00] font-medium">smooth transition</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
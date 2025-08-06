import React from 'react';

const HowItWorksSection: React.FC = () => {
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
    <section id="how-it-works" className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#2F1D1D] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            A Simple 5 Stages-Process to Your <span className="text-[#FF8C00]">Civilian Success</span>
          </h1>
        </div>

        {/* V-Pattern Process Flow */}
        <div className="relative max-w-7xl mx-auto mb-16" style={{ height: '600px' }}>
          {/* Stage 1 - Top Left */}
          <div className="absolute top-0 left-0">
            <div className="relative">
              {/* Step Number */}
              <div className="w-16 h-16 bg-[#FF8C00] rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6 mx-auto">
                1
              </div>
              {/* Arrow Shape Box */}
              <div className="bg-white border-2 border-[#FF8C00] rounded-lg p-6 w-72 relative arrow-box">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-green-700 italic mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Sign Up
                  </h3>
                  <h3 className="text-lg font-bold text-green-700 italic mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    & Personalize
                  </h3>
                  <h3 className="text-lg font-bold text-green-700 italic" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Your Experience
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Stage 5 - Top Right */}
          <div className="absolute top-0 right-0">
            <div className="relative">
              {/* Step Number */}
              <div className="w-16 h-16 bg-[#FF8C00] rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6 mx-auto">
                5
              </div>
              {/* Arrow Shape Box */}
              <div className="bg-white border-2 border-[#FF8C00] rounded-lg p-6 w-72 relative arrow-box">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-green-700 italic mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Thrive in
                  </h3>
                  <h3 className="text-lg font-bold text-green-700 italic" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Civilian Life
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Stage 2 - Middle Left */}
          <div className="absolute" style={{ top: '160px', left: '120px' }}>
            <div className="relative">
              {/* Step Number */}
              <div className="w-16 h-16 bg-[#FF8C00] rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6 mx-auto">
                2
              </div>
              {/* Arrow Shape Box */}
              <div className="bg-white border-2 border-[#FF8C00] rounded-lg p-6 w-72 relative arrow-box">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-green-700 italic mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Let AI Translate
                  </h3>
                  <h3 className="text-lg font-bold text-green-700 italic mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Your Military Experience
                  </h3>
                  <h3 className="text-lg font-bold text-green-700 italic" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Into Industry-Ready Roles
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Stage 4 - Middle Right */}
          <div className="absolute" style={{ top: '160px', right: '120px' }}>
            <div className="relative">
              {/* Step Number */}
              <div className="w-16 h-16 bg-[#FF8C00] rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6 mx-auto">
                4
              </div>
              {/* Arrow Shape Box */}
              <div className="bg-white border-2 border-[#FF8C00] rounded-lg p-6 w-72 relative arrow-box">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-green-700 italic mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Smart Matching
                  </h3>
                  <h3 className="text-lg font-bold text-green-700 italic mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    to Mentors, Jobs and
                  </h3>
                  <h3 className="text-lg font-bold text-green-700 italic" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Business Opportunities
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Stage 3 - Bottom Center */}
          <div className="absolute left-1/2 transform -translate-x-1/2" style={{ top: '380px' }}>
            <div className="relative">
              {/* Step Number */}
              <div className="w-16 h-16 bg-[#FF8C00] rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6 mx-auto">
                3
              </div>
              {/* Arrow Shape Box */}
              <div className="bg-white border-2 border-[#FF8C00] rounded-lg p-6 w-72 relative arrow-box">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-green-700 italic mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Receive
                  </h3>
                  <h3 className="text-lg font-bold text-green-700 italic mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Personalized Upskilling
                  </h3>
                  <h3 className="text-lg font-bold text-green-700 italic mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Matching
                  </h3>
                  <h3 className="text-lg font-bold text-green-700 italic" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Your Transition Goals
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Connecting Lines - V Pattern */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
            {/* Line from 1 to 2 */}
            <path d="M 288 120 L 360 200" stroke="#FF8C00" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
            {/* Line from 2 to 3 */}
            <path d="M 456 280 L 512 420" stroke="#FF8C00" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
            {/* Line from 3 to 4 */}
            <path d="M 568 420 L 736 280" stroke="#FF8C00" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
            {/* Line from 4 to 5 */}
            <path d="M 808 200 L 880 120" stroke="#FF8C00" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
            
            {/* Arrow marker definition */}
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                      refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#FF8C00" />
              </marker>
            </defs>
          </svg>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button 
            onClick={scrollToEmailForm}
            className="px-12 py-4 bg-[#FF8C00] text-white text-xl font-medium rounded-lg hover:bg-[#e67c00] transition-all duration-300 shadow-lg animate-pulse-glow mt-8" 
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Start Your Mission
          </button>
        </div>
      </div>

      <style jsx>{`
        .arrow-box {
          position: relative;
        }
        
        .arrow-box::after {
          content: '';
          position: absolute;
          top: 50%;
          right: -10px;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-left: 10px solid #FF8C00;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
        }
      `}</style>
    </section>
  );
};

export default HowItWorksSection;
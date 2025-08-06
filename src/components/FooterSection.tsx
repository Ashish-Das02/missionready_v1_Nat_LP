import React from 'react';

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-white">
      {/* CTA Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-4xl font-bold text-[#2F1D1D] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Ready to Begin Your <span className="text-[#FF8C00]">Next Mission?</span>
          </h1>
          <p className="text-xl text-[#2F1D1D] mb-8 max-w-4xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Join thousands of veterans who have successfully transitioned to civilian careers with MissionReadyAI
          </p>
          <button 
            onClick={() => {
              const element = document.querySelector('input[type="email"]');
              if (element) {
                element.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'center',
                  inline: 'nearest'
                });
                setTimeout(() => {
                  (element as HTMLInputElement).focus();
                }, 500);
              }
            }}
            className="px-8 py-3 bg-[#FF8C00] text-white text-lg font-medium rounded-lg hover:bg-[#e67c00] transition-all duration-300 shadow-lg animate-pulse-glow mb-6" 
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Start your journey today!
          </button>
          <p className="text-lg text-[#7F7F7F] italic" style={{ fontFamily: 'Poppins, sans-serif' }}>
            MissionReadyAI creates the momentum you need
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <div style={{ backgroundColor: '#452628' }} className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              AI with Purpose, Built by Those Who've Served
            </h2>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side - Logo and Description */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
              <div className="flex-shrink-0">
                <img 
                  src="/src/assets/Logo_MissionReady_white.png" 
                  alt="MissionReadyAI Logo" 
                  className="h-24 w-auto"
                />
              </div>
              <div className="text-center lg:text-left">
                <p className="text-lg text-white leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Empowering Indian armed forces veterans and their families<br />
                  to achieve successful civilian careers<br />
                  through AI-powered career transition and upskilling.
                </p>
              </div>
            </div>

            {/* Right Side - Contact and Newsletter */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Us */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Contact Us
                </h3>
                <div className="space-y-2">
                  <p className="text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    support@missionready.ai
                  </p>
                  <p className="text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    +91 1800-MISSION
                  </p>
                </div>
              </div>

              {/* Stay Updated */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Stay Updated
                </h3>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-4 py-2 rounded-l-lg border-0 text-gray-700"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  />
                  <button className="px-6 py-2 bg-[#FF8C00] text-white font-medium rounded-r-lg hover:bg-[#e67c00] transition-colors"
                          style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media and Footer Links */}
          <div className="flex flex-col lg:flex-row justify-between items-center pt-8 border-t border-gray-600">
            {/* Social Media */}
            <div className="mb-6 lg:mb-0">
              <h3 className="text-lg font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img src="/src/assets/Logo_Facebook.png" alt="Facebook" className="h-10 w-10" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img src="/src/assets/Logo_Instagram.png" alt="Instagram" className="h-10 w-10" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img src="/src/assets/Logo_WhatsApp.png" alt="WhatsApp" className="h-10 w-10" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img src="/src/assets/Logo_X.png" alt="X (Twitter)" className="h-10 w-10" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img src="/src/assets/Logo_Youtube.png" alt="YouTube" className="h-10 w-10" />
                </a>
              </div>
            </div>

            {/* Footer Links */}
            <div className="text-center lg:text-right">
              <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6 mb-4">
                <a href="#" className="text-white hover:text-[#FF8C00] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Privacy Policy
                </a>
                <a href="#" className="text-white hover:text-[#FF8C00] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Terms of Service
                </a>
                <a href="#" className="text-white hover:text-[#FF8C00] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Cookie Policy
                </a>
              </div>
              <p className="text-gray-400 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                © 2025 MissionReadyAI — All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
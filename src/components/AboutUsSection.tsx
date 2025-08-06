import React from 'react';

const AboutUsSection: React.FC = () => {
  return (
    <section id="about-us" className="min-h-screen bg-white py-32">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-[#2F1D1D] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            A Mission-Driven Team Inspired by <span className="text-[#FF8C00]">Veteran Experience</span>
          </h1>
        </div>

        {/* Team Members Layout */}
        <div className="relative">
          {/* Top Row - Harish (Center) */}
          <div className="flex justify-center mb-16">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-[#FF8C00] overflow-hidden">
                <img 
                  src="/src/assets/Headshot_Harish.png" 
                  alt="Harish" 
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#2F1D1D] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Harish (Veteran)
              </h3>
              <p className="text-lg text-[#2F1D1D]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Project Lead, PMP Certified
              </p>
            </div>
          </div>

          {/* Middle Row - Ashish, Shefeeque, Nathalie */}
          <div className="grid grid-cols-3 gap-16 mb-16 max-w-5xl mx-auto">
            {/* Ashish */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-[#FF8C00] overflow-hidden">
                <img 
                  src="/src/assets/Headshot_Ashish.png" 
                  alt="Ashish" 
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#2F1D1D] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Ashish
              </h3>
              <p className="text-lg text-[#2F1D1D]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Master Data Analyst
              </p>
            </div>

            {/* Shefeeque */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-[#FF8C00] overflow-hidden">
                <img 
                  src="/src/assets/Headshot_Shefeeque.png" 
                  alt="Shefeeque" 
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#2F1D1D] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Shefeeque
              </h3>
              <p className="text-lg text-[#2F1D1D] leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Seasoned OPS Leader<br />
                MBB AI Sponsor
              </p>
            </div>

            {/* Nathalie */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-[#FF8C00] overflow-hidden">
                <img 
                  src="/src/assets/Headshot_Nathalie.png" 
                  alt="Nathalie" 
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#2F1D1D] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Nathalie
              </h3>
              <p className="text-lg text-[#2F1D1D] leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Strategist, Ed Tech Founder<br />
                Exec AI Coach
              </p>
            </div>
          </div>

          {/* Bottom Row - Sudeep, Anchit */}
          <div className="grid grid-cols-2 gap-32 max-w-3xl mx-auto">
            {/* Sudeep */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-[#FF8C00] overflow-hidden">
                <img 
                  src="/src/assets/Sudeep.png" 
                  alt="Sudeep" 
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#2F1D1D] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Sudeep (Veteran)
              </h3>
              <p className="text-lg text-[#2F1D1D] leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Ex-Indian Air Force Officer<br />
                Seasoned IT Expert
              </p>
            </div>

            {/* Anchit */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-[#FF8C00] overflow-hidden">
                <img 
                  src="/src/assets/Headshot_Anchit.png" 
                  alt="Anchit" 
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#2F1D1D] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Anchit
              </h3>
              <p className="text-lg text-[#2F1D1D] leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Artist Coder &<br />
                Automation Wizard
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
import React from 'react';

const PartnersSection: React.FC = () => {
  return (
    <section id="partners" className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#2F1D1D] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Trusted by <span className="text-[#FF8C00]">leading organisations</span>
          </h1>
          <p className="text-xl text-[#2F1D1D] max-w-4xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Partnering with top Indian companies and institutions
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 gap-y-16 gap-x-32 max-w-6xl mx-auto items-center">
          {/* Row 1 */}
          {/* Indian Army */}
          <div className="flex justify-center">
            <img 
              src="/src/assets/Logo_Indian Army.png" 
              alt="Indian Army" 
              className="h-24 w-auto object-contain opacity-60"
            />
          </div>

          {/* Tech Mahindra */}
          <div className="flex justify-center">
            <img 
              src="/src/assets/Logo_TechMahindra.png" 
              alt="Tech Mahindra" 
              className="h-24 w-auto object-contain opacity-60"
            />
          </div>

          {/* Row 2 */}
          {/* TATA */}
          <div className="flex justify-center">
            <img 
              src="/src/assets/Logo_Tata.png" 
              alt="TATA" 
              className="h-24 w-auto object-contain opacity-60"
            />
          </div>

          {/* Air India */}
          <div className="flex justify-center">
            <img 
              src="/src/assets/Logo_AIr India.png" 
              alt="Air India" 
              className="h-24 w-auto object-contain opacity-60"
            />
          </div>

          {/* Row 3 */}
          {/* Infosys */}
          <div className="flex justify-center">
            <img 
              src="/src/assets/Logo_Infosys.png" 
              alt="Infosys" 
              className="h-24 w-auto object-contain opacity-60"
            />
          </div>

          {/* NSDC */}
          <div className="flex justify-center">
            <img 
              src="/src/assets/Logo_NSDC.png" 
              alt="National Skill Development Corporation" 
              className="h-24 w-auto object-contain opacity-60"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
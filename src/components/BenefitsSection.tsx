import React from 'react';

const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="min-h-screen bg-white py-8">
      <div className="max-w-7xl mx-auto px-8">
        {/* Top Section - Benefits */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#2F1D1D] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Empowering Your <span className="text-[#FF8C00]">Transition Journey</span>
          </h1>
          <p className="text-lg text-[#7F7F7F] italic max-w-4xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Our platform provides comprehensive support to help veterans, and their families succeed in civilian careers
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {/* Card 1 - Translate Military Skills */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 mb-4">
              <img 
                src="/src/assets/Icon_Target.png" 
                alt="Target Icon" 
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-[#2F1D1D] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Translate Military skills
            </h3>
            <p className="text-sm text-[#7F7F7F] leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Convert your military expertise into corporate-relevant competencies
            </p>
          </div>

          {/* Card 2 - Discover Your Civilian Purpose */}
          <div className="bg-white rounded-lg border-2 border-dashed border-[#FF8C00] p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 mb-4">
              <img 
                src="/src/assets/Icon_Purpose_North Star.png" 
                alt="Purpose North Star Icon" 
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-[#2F1D1D] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Discover Your Civilian Purpose
            </h3>
            <p className="text-sm text-[#7F7F7F] leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Leverage AI-driven insights to uncover corporate roles or entrepreneurial paths that align with your vision
            </p>
          </div>

          {/* Card 3 - Get Your Personalised Upskilling */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 mb-4">
              <img 
                src="/src/assets/Icon_Upskill.png" 
                alt="Upskilling Icon" 
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-[#2F1D1D] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Get Your Personalised Upskilling
            </h3>
            <p className="text-sm text-[#7F7F7F] leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Receive tailored training designed specifically for veterans and their families' unique career goals
            </p>
          </div>

          {/* Card 4 - Enjoy Smart Job Matching */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 mb-4">
              <img 
                src="/src/assets/Icon_Suitcase.png" 
                alt="Suitcase Icon" 
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-[#2F1D1D] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Enjoy Smart Job Matching
            </h3>
            <p className="text-sm text-[#7F7F7F] leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our AI connects you with opportunities aligning with your skills, values and career aspirations
            </p>
          </div>

          {/* Card 5 - Join A Supportive Exclusive Community */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 mb-4">
              <img 
                src="/src/assets/Icon_Community.png" 
                alt="Community Icon" 
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-[#2F1D1D] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Join A Supportive Exclusive Community
            </h3>
            <p className="text-sm text-[#7F7F7F] leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Get holistic support. Find mentors and peers. Celebrate milestones together.
            </p>
          </div>
        </div>

        {/* Bottom Section - Technology Features */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2F1D1D] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Powered by <span className="text-[#FF8C00]">Advanced Technology</span>
          </h2>
          <p className="text-lg text-[#2F1D1D] italic max-w-3xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
            MissionReadyAI includes all you need for a successful transition
          </p>
        </div>

        {/* Technology Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Smart Profile Builder */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4">
              <img 
                src="/src/assets/Icon_Smart Profile Builder.png" 
                alt="Smart Profile Builder" 
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-[#2F1D1D]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Smart Profile Builder
            </h3>
          </div>

          {/* AI Career Engine */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4">
              <img 
               src="/src/assets/Icon_AI Engine.png" 
                alt="AI Career Engine" 
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-[#2F1D1D]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              AI Career Engine
            </h3>
          </div>

          {/* Smart Matching */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4">
              <img 
                src="/src/assets/Icon_Matching.png" 
                alt="Smart Matching" 
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-[#2F1D1D] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Smart Matching
            </h3>
            <p className="text-sm text-[#7F7F7F] italic" style={{ fontFamily: 'Poppins, sans-serif' }}>
              (Mentor, Sponsor, Employers, ...)
            </p>
          </div>

          {/* Family Support */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4">
              <img 
                src="/src/assets/Family support_resized.png" 
                alt="Family Support" 
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-[#2F1D1D]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Family Support
            </h3>
          </div>

          {/* Entrepreneur Path */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 text-[#FF8C00]">
              <img 
                src="/src/assets/Icon_Bulb_Orange.png" 
                alt="Entrepreneur Path" 
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-[#2F1D1D]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Entrepreneur Path
            </h3>
          </div>

          {/* Progress Tracker */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 text-[#FF8C00]">
              <img 
                src="/src/assets/Icon_Progress Tracking.png" 
                alt="Progress Tracker" 
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-[#2F1D1D]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Progress Tracker
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
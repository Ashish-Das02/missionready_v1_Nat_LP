import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const SuccessStoriesSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

  const testimonials = [
    {
      name: "Colonel Rajesh Kumar (Retd.)",
      title: "Senior Manager at Tech Mahindra",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      quote: "MissionReady.AI helped me transition from 25 years of military service to a leadership role in the corporate world. The skill translation and upskilling programs were exactly what I needed.",
      transition: "Military Leadership → Corporate Management"
    },
    {
      name: "Mrs. Priya Sharma",
      title: "Successful Entrepreneur & Army Spouse",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      quote: "As an army spouse, I struggled with career continuity due to frequent relocations. MissionReady.AI's entrepreneurship program helped me start my own digital marketing agency.",
      transition: "Army Spouse → Digital Marketing Entrepreneur"
    },
    {
      name: "Major Vikram Singh (Retd.)",
      title: "Cybersecurity Specialist at Wipro",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      quote: "The technical upskilling program bridged the gap between my military cybersecurity experience and civilian IT requirements. Now I'm leading a team of 50+ professionals.",
      transition: "Military Cybersecurity → Corporate IT Leadership"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-xl ${i < rating ? 'text-[#FF8C00]' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <section id="success-stories" className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#2F1D1D] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            What MissionReadyAI <span className="text-[#FF8C00]">Community and Partners Say</span>
          </h1>
          <p className="text-lg text-[#7F7F7F] italic max-w-4xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Trusted by veterans, families and leading employers across India
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative mb-16">
          <div className="flex items-center justify-center">
            {/* Left Arrow */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-[#FF8C00]" />
            </button>

            {/* Testimonials Container */}
            <div className="flex space-x-8 max-w-6xl mx-auto px-16">
              {/* Show current testimonial and adjacent ones */}
              {[-1, 0, 1].map((offset) => {
                const index = (currentTestimonial + offset + testimonials.length) % testimonials.length;
                const testimonial = testimonials[index];
                const isActive = offset === 0;
                
                return (
                  <div 
                    key={index}
                    className={`flex-1 transition-all duration-300 ${
                      isActive ? 'opacity-100 scale-100' : 'opacity-60 scale-95'
                    }`}
                  >
                    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm relative">
                      {/* Quote Icon */}
                      <div className="absolute top-4 right-4">
                        <Quote className="w-8 h-8 text-[#FF8C00] opacity-30" />
                      </div>

                      {/* Profile */}
                      <div className="flex items-center mb-4">
                        <div className="w-16 h-16 bg-gray-200 rounded-full mr-4 overflow-hidden">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-[#2F1D1D]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            {testimonial.name}
                          </h3>
                          <p className="text-sm text-[#FF8C00] font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            {testimonial.title}
                          </p>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex mb-4">
                        {renderStars(testimonial.rating)}
                      </div>

                      {/* Quote */}
                      <p className="text-sm text-[#2F1D1D] leading-relaxed mb-4 italic" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        "{testimonial.quote}"
                      </p>

                      {/* Transition Path */}
                      <div className="text-center">
                        <span className="text-sm text-[#FF8C00] font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          {testimonial.transition}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Arrow */}
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-[#FF8C00]" />
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-16">
          <p className="text-lg text-[#7F7F7F] italic mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Eager to write your own success story?
          </p>
          <button 
            onClick={scrollToEmailForm}
            className="px-8 py-3 bg-[#FF8C00] text-white text-lg font-medium rounded-lg hover:bg-[#e67c00] transition-all duration-300 shadow-lg animate-pulse-glow" 
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Join Our Community →
          </button>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-[#7F7F7F] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              2,500+
            </h3>
            <p className="text-lg text-[#7F7F7F]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Active Veterans
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-[#7F7F7F] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              150+
            </h3>
            <p className="text-lg text-[#7F7F7F]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Industry Mentors
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-[#7F7F7F] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              95%
            </h3>
            <p className="text-lg text-[#7F7F7F]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Success Rate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
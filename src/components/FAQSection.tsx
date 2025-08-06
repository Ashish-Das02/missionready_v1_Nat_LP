import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

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

  const faqs = [
    {
      question: "Is the platform free for veterans?",
      answer: "Yes, MissionReadyAI offers free access to core features for all Indian military veterans including skill translation, career guidance, and community access."
    },
    {
      question: "How does the AI understand military experience?",
      answer: "Our AI analyzes your military experience, rank, and specializations using natural language processing, then maps them to equivalent civilian competencies."
    },
    {
      question: "How does AI match me to jobs?",
      answer: "Our algorithm considers your military skills, preferences, location, and salary expectations to match you with relevant opportunities."
    },
    {
      question: "What if I don't know what corporate role I want?",
      answer: "Our AI Career Engine assesses your interests, values, and experience to provide personalized career path recommendations with counselor support."
    },
    {
      question: "What types of companies hire through your platform?",
      answer: "We partner with leading companies like TCS, Infosys, TATA, Mahindra, Air India, and government organizations that value military experience."
    },
    {
      question: "What kind of upskilling program do you offer?",
      answer: "We offer personalized programs in digital marketing, project management, cybersecurity, and leadership with flexible schedules for veterans."
    },
    {
      question: "Do you help with entrepreneurship and starting a business?",
      answer: "Yes! Our program includes business plan development, funding guidance, veteran entrepreneur mentorship, and investor network access."
    },
    {
      question: "Can my spouse and children use the platform too?",
      answer: "Yes! We offer specialized programs for military spouses including remote work opportunities and entrepreneurship support for the whole family."
    },
    {
      question: "How long does the transition process typically take?",
      answer: "Timeline varies: profile setup takes 1-2 weeks, job matching 2-3 months, and upskilling programs 6-12 months with ongoing support."
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-8">
      <div className="max-w-5xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#2F1D1D] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Frequently Asked <span className="text-[#FF8C00]">Questions</span>
          </h1>
          <p className="text-lg text-[#2F1D1D] max-w-3xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Get answers to common questions about MissionReadyAI
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-2 mb-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="text-base text-[#7F7F7F] font-medium pr-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#FF8C00] transition-transform duration-200 flex-shrink-0 ${
                    openQuestion === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              {openQuestion === index && (
                <div className="px-4 pb-3 border-t border-gray-100">
                  <p className="text-sm text-[#2F1D1D] leading-relaxed pt-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-lg text-[#2F1D1D] mb-4 font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Still have questions?
          </p>
          <button 
            onClick={scrollToEmailForm}
            className="px-6 py-2 bg-[#FF8C00] text-white text-base font-medium rounded-lg hover:bg-[#e67c00] transition-all duration-300 shadow-lg"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Contact Our Support Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
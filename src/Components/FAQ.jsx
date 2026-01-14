import React, { useState, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "What are digital marketing services?",
    answer: "Digital marketing services help businesses promote their services online through SEO, paid ads, content, and conversion optimization. The goal is to attract the right audience, drive visitors to your website, and turn that traffic into enquiries or customers."
  },
  {
    question: "How can digital marketing help my business grow?",
    answer: "Digital marketing helps your business grow by increasing online visibility, attracting customers who are actively searching, and converting interest into enquiries. A clear strategy ensures consistent leads, better brand trust, and long-term online growth."
  },
  {
    question: "Is digital marketing suitable for local businesses?",
    answer: "Yes. Digital marketing for local businesses helps you reach customers in your service area who are ready to take action. It improves local visibility, builds trust online, and generates enquiries more consistently than traditional marketing methods."
  },
  {
    question: "How long does it take to see results from digital marketing?",
    answer: "Paid advertising can generate enquiries quickly, while SEO and content-based digital marketing usually take longer to build momentum. A combined approach often delivers short-term results while supporting steady, long-term growth."
  },
  {
    question: "Do I need digital marketing if I already get referrals?",
    answer: "Yes. Most referral customers still search online before contacting a business. Digital marketing supports referrals by strengthening your online presence, building credibility, and ensuring your business looks trustworthy when people research you."
  },
  {
    question: "What is the difference between SEO and paid advertising?",
    answer: "SEO focuses on improving your website’s visibility in organic search results over time. Paid advertising places your business at the top of search results instantly. Using both together creates a stronger and more reliable digital marketing strategy."
  },
  {
    question: "How do I know if digital marketing is working?",
    answer: "Digital marketing performance is measured through enquiry volume, conversion rates, user behaviour, and traffic quality. A good digital marketing company focuses on meaningful results, not just clicks or impressions."
  },
  {
    question: "Can digital marketing help generate more enquiries?",
    answer: "Yes. When your ads, website, and messaging are aligned, digital marketing helps drive customers to your website and encourages them to take action. Conversion-focused strategies are designed to increase enquiries, not just traffic."
  },
  {
    question: "Do small businesses really need a digital marketing strategy?",
    answer: "Yes. Digital marketing strategies for small businesses ensure your efforts are focused, cost-effective, and goal-driven. Without a strategy, businesses often spend money without understanding what works or why."
  },
  {
    question: "How do I choose the right digital marketing company?",
    answer: "Choose a digital marketing provider that focuses on enquiries, uses data-driven decisions, communicates clearly, and understands your business goals. Transparency, experience, and long-term thinking are key signs of a reliable partner."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    if (isOpen) {
      gsap.to(contentRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in"
      });
    }
  }, [isOpen]);

  return (
    <div className={`mt-8 border-b border-white/10 transition-colors duration-300 ${isOpen ? 'bg-white/5' : 'hover:bg-white/[0.02]'}`}>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 px-4 md:px-8 text-left outline-none"
      >
        <span className={`text-base md:text-lg font-bold tracking-tight transition-colors ${isOpen ? 'text-purple-400' : 'text-white'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 ml-4 transition-transform duration-500 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          {isOpen ? <Minus className="text-purple-500" /> : <Plus className="text-gray-500" />}
        </div>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden h-0 opacity-0"
      >
        <div className="pb-8 px-4 md:px-8 text-gray-400 leading-relaxed text-sm md:text-base max-w-4xl">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); 

  return (
    <section className="bg-[#050505] text-white py-24 md:py-40">
      <div className="max-w-4xl mx-auto px-6">
        
        
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter bg-gradient-to-r from-white via-purple-400 to-purple-500 bg-clip-text text-transparent">
            Frequently asked Questions
          </h1>
        </div>

        
        <div className="border-t border-white/10 rounded-2xl overflow-hidden">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>

        
        <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm mb-6">Still have questions? We're here to help.</p>
            <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all font-bold uppercase text-[10px] tracking-widest">
                Contact Support
            </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
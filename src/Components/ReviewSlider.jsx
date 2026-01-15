import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "CEO, TechFlow",
    content: "The service was incredible. It completely changed how we handle our daily workflows! The attention to detail is unmatched in the industry.",
    image: "https://i.pravatar.cc/150?u=1"
  },
  {
    id: 2,
    name: "Jordan Smith",
    role: "Product Designer",
    content: "Clean UI and very intuitive. I recommend this to all my colleagues in design. The integration process was seamless and fast.",
    image: "https://i.pravatar.cc/150?u=2"
  },
  {
    id: 3,
    name: "Frank",
    role: "Full-Stack Developer",
    content: "Building with these tools has improved our deployment speed by 40%. Highly recommended for any serious development team.",
    image: "https://i.pravatar.cc/150?u=4"
  }
];

const ReviewSlider = () => {
  const [index, setIndex] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    
    gsap.fromTo(slideRef.current, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  }, [index]);

  const nextStep = () => {
    gsap.to(slideRef.current, {
      opacity: 0,
      x: -30,
      duration: 0.3,
      onComplete: () => {
        setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
        gsap.set(slideRef.current, { x: 30 }); 
      }
    });
  };

  const prevStep = () => {
    gsap.to(slideRef.current, {
      opacity: 0,
      x: 30,
      duration: 0.3,
      onComplete: () => {
        setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
        gsap.set(slideRef.current, { x: -30 }); 
      }
    });
  };

  return (
    <div className="flex flex-col items-center justify-center py-20 w-full max-w-5xl mx-auto px-4">
      <div className="relative w-full bg-zinc-900/50 backdrop-blur-xl rounded-[2rem] p-8 md:p-16 border border-white/10 shadow-2xl overflow-hidden">
        
        {/* Decorative Quote Icon */}
        <div className="absolute top-10 right-10 opacity-5">
          <Quote size={120} color="#8259DA" fill="#8259DA" />
        </div>

        {/* Animated Slide Container */}
        <div ref={slideRef} className="grid md:grid-cols-12 gap-10 items-center relative z-10">
          
          {/* LEFT SIDE: User Profile */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-10">
            <div className="relative mb-6">
              <div className="absolute -inset-1 bg-[#8259DA] rounded-full blur opacity-30"></div>
              <img 
                src={reviews[index].image} 
                alt={reviews[index].name} 
                className="relative w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-[#8259DA]"
              />
            </div>
            <h4 className="text-2xl font-bold text-white mb-1 tracking-tight">
              {reviews[index].name}
            </h4>
            <p className="text-[#8259DA] font-medium uppercase tracking-widest text-sm">
              {reviews[index].role}
            </p>
          </div>

          
          <div className="md:col-span-7">
            <Quote className="text-[#8259DA] mb-6 opacity-50" size={40} />
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed italic font-light">
              {reviews[index].content}
            </p>
          </div>
        </div>

        {/* NAVIGATION BUTTONS */}
        <div className="flex justify-center md:justify-end gap-4 mt-12 md:mt-8 relative z-20">
          <button 
            onClick={prevStep}
            className="p-4 rounded-full bg-white/5 text-white hover:bg-[#8259DA] hover:shadow-[0_0_20px_rgba(130,89,218,0.4)] transition-all duration-300 active:scale-90 border border-white/10"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextStep}
            className="p-4 rounded-full bg-white/5 text-white hover:bg-[#8259DA] hover:shadow-[0_0_20px_rgba(130,89,218,0.4)] transition-all duration-300 active:scale-90 border border-white/10"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      
      <div className="flex gap-3 mt-8">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? 'w-12 bg-[#8259DA]' : 'w-3 bg-zinc-700 hover:bg-zinc-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewSlider;
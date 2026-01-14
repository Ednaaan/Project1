import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Elements entrance
      gsap.from(".about-animate", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Stats counter animation
      gsap.from(".stat-number", {
        textContent: 0,
        duration: 2,
        ease: "power1.out",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#050505] text-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7">
            <div className="about-animate mb-6 flex items-center gap-4">
              <span className="h-[1px] w-12 bg-purple-500"></span>
              <p className="uppercase text-xs md:text-sm tracking-[0.3em] text-purple-500 font-bold">
                Our Story
              </p>
            </div>

            <h2 className="about-animate text-4xl md:text-6xl font-black leading-[1.1] tracking-tighter uppercase mb-8">
              Digital Marketing <br /> 
              <span className="text-gray-500 italic font-light">That Actually</span> <br />
              <span className="bg-gradient-to-r from-white via-purple-400 to-purple-600 bg-clip-text text-transparent font-black">Drives Results.</span>
            </h2>

            {/* Stats Row */}
            <div className="about-animate grid grid-cols-3 gap-4 md:gap-4 pt-8 border-t border-white/10">
               <div>
                  <h4 className="text-2xl md:text-4xl font-black text-white"><span className="stat-number">10</span>+</h4>
                  <p className="text-[10px] uppercase tracking-widest text-purple-500 mt-1">Experience</p>
               </div>
               <div>
                  <h4 className="text-2xl md:text-4xl font-black text-white"><span className="stat-number">95</span>%</h4>
                  <p className="text-[10px] uppercase tracking-widest text-purple-500 mt-1">Retention</p>
               </div>
               <div>
                  <h4 className="text-2xl md:text-4xl font-black text-white"><span className="stat-number">4.9</span>★</h4>
                  <p className="text-[10px] uppercase tracking-widest text-purple-500 mt-1">Google Rating</p>
               </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-5">
            <div className="about-animate p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-gray-400 text-base md:text-lg leading-relaxed italic">
                "Growing a business today is no longer about being present online — it’s about being found by the right people at the right time and turning that attention into real enquiries. Many business owners know they need digital marketing services, but feel overwhelmed by confusing strategies, wasted ad spend, and agencies that focus more on vanity metrics than real resultsAt Website Design Land, we help businesses grow with digital marketing for local businesses that is practical, data-led, and focused on enquiries. Whether you’re trying to drive customers to your website, improve visibility in local searches, or finally build a marketing system that works consistently, our approach is designed to support long-term growth, not short-term hype.

              </p>
            </div>
          </div>
        </div>

        {/* --- ROW SPECIFIC SLIDING MARQUEE --- */}
        {/* <div className="w-full py-10 border-y border-white/5 overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee">
            
            <div className="flex gap-16 items-center px-8">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">10+ years of Experience</span>
              <span className="text-purple-500 text-xl">★</span>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">95% Client Retention Rate</span>
              <span className="text-purple-500 text-xl">★</span>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">4.9/5★ Rated on Google</span>
              <span className="text-purple-500 text-xl">★</span>
            </div>
            
            <div className="flex gap-16 items-center px-8">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">10+ years of Experience</span>
              <span className="text-purple-500 text-xl">★</span>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">95% Client Retention Rate</span>
              <span className="text-purple-500 text-xl">★</span>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">4.9/5★ Rated on Google</span>
              <span className="text-purple-500 text-xl">★</span>
            </div>
          </div>
        </div> */}

      </div>
    </section>
  );
};

export default About;
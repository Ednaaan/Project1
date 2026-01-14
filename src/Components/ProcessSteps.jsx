import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search,Rocket, TrendingUp, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProcessSteps = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  const steps = [
    {
      id: "01",
      title: "Understand Your Business",
      desc: "We learn your goals, audience, and current challenges to ensure everything starts with clarity.",
      icon: <Search className="text-purple-500" size={32} />
    },
    {
      id: "02",
      title: "Create a Focused Strategy",
      desc: "We analyse data and search intent to build a digital marketing strategy designed to drive enquiries.",
      icon: <CheckCircle2 className="text-purple-500" size={32} />
    },
    {
      id: "03",
      title: "Launch & Optimise",
      desc: "Campaigns go live with conversion-focused messaging and are refined using real performance data.",
      icon: <Rocket className="text-purple-500" size={32} />
    },
    {
      id: "04",
      title: "Scale for Growth",
      desc: "We expand what works to help you grow your business online consistently and sustainably.",
      icon: <TrendingUp className="text-purple-500" size={32} />
    }
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Animate the connection line
      gsap.from(lineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
        ease: "none",
        scrollTrigger: {
          trigger: ".steps-grid",
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1,
        }
      });

      // Animate steps
      gsap.from(".step-card", {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".steps-grid",
          start: "top 75%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-[#050505] text-white py-24 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20 md:mb-32">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
            What happens <span className="bg-gradient-to-r from-white via-purple-400 to-purple-500 bg-clip-text text-transparent">after I enquire?</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
            Clear. Simple. Built to generate enquiries. No confusion. No guesswork. 
            Just a proven process that works.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="steps-grid relative">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 z-0">
            <div ref={lineRef} className="h-full bg-purple-500 w-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="step-card group">
                <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl hover:border-purple-500/50 transition-all duration-500 h-full relative overflow-hidden">
                  
                  {/* Background Glow */}
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-purple-600/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-8">
                      <div className="p-3 bg-purple-500/10 rounded-2xl">
                        {step.icon}
                      </div>
                      <span className="text-4xl font-black text-white/10 group-hover:text-purple-500/20 transition-colors">
                        {step.id}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-4 group-hover:text-purple-400 transition-colors uppercase tracking-tight">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-gray-400">
               <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
               Currently Onboarding New Projects
            </div>
        </div>

      </div>
    </section>
  );
};

export default ProcessSteps;
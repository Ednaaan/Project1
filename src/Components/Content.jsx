import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import ClientSlider from './ClientSlider';

gsap.registerPlugin(ScrollTrigger);

const Content = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Animate each row as it enters the viewport
      gsap.utils.toArray('.content-row').forEach((row) => {
        gsap.from(row, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-[#050505] text-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-20 md:space-y-32">
        
        {/* ROW 1: THE PROBLEM */}
        <div className="content-row grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          <div className="md:col-span-5">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
              Tired of Traffic <br />
              <span className="text-purple-500">That Doesn’t Convert?</span>
            </h2>
          </div>
          <div className="md:col-span-7 text-gray-400 space-y-6 text-lg">
            <p>Many businesses invest in digital marketing and still struggle to see results. The problem is rarely visibility alone. The real issue is what happens after someone lands on your website.</p>
            <p className="text-white font-medium">Clicks without enquiries waste money. Impressions without action stall growth. That’s why our digital marketing strategy is built around one goal — <span className="text-purple-400 underline decoration-2 underline-offset-4">turning interest into enquiries.</span></p>
            <p>We focus on how real users behave after clicking an ad. What questions they have. What doubts stop them. What information builds trust quickly. This understanding allows us to design digital marketing for your business that works with user intent, not against it.</p>
          </div>
        </div>

        {/* ROW 2: VANITY METRICS */}
        <div className="content-row grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          <div className="md:col-span-5">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
              A Digital Marketing Company Focused <br />
              <span className="bg-gradient-to-r from-white via-purple-400 to-purple-500 bg-clip-text text-transparent">on Outcomes, Not Vanity Metrics</span>
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-gray-400 text-lg mb-8">As a digital marketing provider, our responsibility is not just to get you seen — it’s to help you grow your business online in a measurable way.
              We don’t chase meaningless numbers. Instead, we track what matters to business owners:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Quality Enquiries", icon: <CheckCircle2 className="text-purple-500" /> },
                { title: "Conversion Rates", icon: <TrendingUp className="text-purple-500" /> },
                { title: "Cost Efficiency", icon: <ShieldCheck className="text-purple-500" /> },
                { title: "Long-term Stability", icon: <Zap className="text-purple-500" /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                  {item.icon}
                  <span className="font-bold uppercase text-xs tracking-widest">{item.title}</span>
                </div>
              ))}
            </div>
             <p className="text-gray-400 text-lg mt-8">Our digital marketing services are structured to support businesses that want clarity, transparency, and consistent results. Every campaign, page, and strategy is aligned with real commercial outcomes.
            </p>
            <button onClick={() => document.getElementById("Form")?.scrollIntoView({ behavior: "smooth" })} className="mt-5 group relative px-8 py-3 md:px-12 md:py-4 bg-transparent border border-white/20 rounded-full overflow-hidden transition-all active:scale-95">
                <span className="relative z-10 text-white font-bold text-sm md:text-base transition-colors group-hover:text-black">Consult Today</span>
                <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
          </div>
        </div>

        <ClientSlider/>

       
       

        {/* ROW 3: USER INTENT */}
        <div className="content-row grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          <div className="md:col-span-5">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
              Built for Businesses Actively <br />
              <span className="text-purple-500">Looking for Digital Marketing Help</span>
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6">
            <p className="text-gray-400 text-lg">People clicking Google Ads are not browsing. They’re searching with intent. They’re ready to act — if the right signals are present.
Our entire approach, is built for high-intent visitors who:
</p>
            <ul className="space-y-4">
              {[
                "Need help marketing my business",
                "Want to grow your business with digital marketing",
                "Searching for strategies for small business growth",
                "Want to drive customers to your website and convert them"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-4 text-white font-medium">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="content-row grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          <div className="md:col-span-5">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
              Digital Marketing for Local Businesses <br />
              <span className="bg-gradient-to-r from-white via-purple-400 to-purple-500 bg-clip-text text-transparent">That Want Serious Growth</span>
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-gray-400 text-lg mb-8">Local customers search differently. They want reassurance, relevance, and quick answers. We design digital marketing for local businesses that reflects how people actually choose service providers.
This includes:

            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Clear positioning", icon: <CheckCircle2 className="text-purple-500" /> },
                { title: "Local relevance without overuse", icon: <TrendingUp className="text-purple-500" /> },
                { title: "Trust-building content", icon: <ShieldCheck className="text-purple-500" /> },
                { title: "Strong value communication", icon: <Zap className="text-purple-500" /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                  {item.icon}
                  <span className="font-bold uppercase text-xs tracking-widest">{item.title}</span>
                </div>
              ))}
            </div>
             <p className="text-gray-400 text-lg mt-8">By aligning content with local search behaviour, we help businesses attract customers who are ready to take action.
            </p>
            <button onClick={() => document.getElementById("Form")?.scrollIntoView({ behavior: "smooth" })} className="mt-5 group relative px-8 py-3 md:px-12 md:py-4 bg-transparent border border-white/20 rounded-full overflow-hidden transition-all active:scale-95">
                <span className="relative z-10 text-white font-bold text-sm md:text-base transition-colors group-hover:text-black">Consult Today</span>
                <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
          </div>
        </div>

        {/* ROW 4: LOCAL BUSINESS & TRUST */}
        <div className="content-row grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          <div className="md:col-span-5">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
              Why Choose <br />
              <span className="text-gray-500 font-light italic">Website Design Land?</span>
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-gray-400 text-lg mb-10">When visitors compare options, trust is the decider. We design marketing for local businesses that reflects how people actually choose service providers.</p>
            
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 border-y border-white/10 py-8">
              <div>
                <p className="text-3xl font-black">10+</p>
                <p className="text-[10px] text-purple-500 uppercase font-bold tracking-widest">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-black">95%</p>
                <p className="text-[10px] text-purple-500 uppercase font-bold tracking-widest">Client Retention</p>
              </div>
              <div>
                <p className="text-3xl font-black">4.9/5★</p>
                <p className="text-[10px] text-purple-500 uppercase font-bold tracking-widest">Google Rated</p>
              </div>
            </div>
            
            

            <div onClick={() => document.getElementById("Form")?.scrollIntoView({ behavior: "smooth" })} className="flex flex-wrap gap-4">
              <button className="mt-5 group relative px-8 py-3 md:px-12 md:py-4 bg-transparent border border-white/20 rounded-full overflow-hidden transition-all active:scale-95">
                <span className="relative z-10 text-white font-bold text-sm md:text-base transition-colors group-hover:text-black">Consult Today</span>
                <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Content;
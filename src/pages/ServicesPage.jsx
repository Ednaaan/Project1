import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import {
  Search,
  Monitor,
  Palette,
  PenTool,
  TrendingUp,
  Zap,
  ArrowRight
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ServicesPage = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  const allServices = [
    {
      title: "SEO Optimization",
      desc: "Dominate search results and drive organic growth with data-backed strategies.",
      icon: <Search />,
      path: "/seo",
      gridClass: "lg:col-span-2 col-span-1"
    },
    {
      title: "Web Design",
      desc: "High-performance websites that blend aesthetics with user experience.",
      icon: <Monitor />,
      path: "/website-design",
      gridClass: "col-span-1"
    },
    {
      title: "Graphic Design",
      desc: "Visual identities that capture your brand's essence and stand out.",
      icon: <Palette />,
      path: "/graphic-design",
      gridClass: "col-span-1"
    },
    {
      title: "Content Writing",
      desc: "Compelling narratives that build trust and convert readers into customers.",
      icon: <PenTool />,
      path: "/content-writing",
      gridClass: "col-span-1"
    },
    {
      title: "Digital Marketing",
      desc: "Omnichannel marketing to reach your audience wherever they are online.",
      icon: <TrendingUp />,
      path: "/digital-marketing",
      gridClass: "lg:col-span-2 col-span-1"
    },
    {
      title: "Paid Ad Management",
      desc: "Precision-targeted PPC campaigns to maximize your ROI instantly.",
      icon: <Zap />,
      path: "/paid-ads",
      gridClass: "col-span-1"
    }
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card) => {
        if (!card) return;
        gsap.from(card, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-black text-white min-h-screen pt-24 md:pt-40 pb-16 md:pb-24 relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-[#8b75f2]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-4 md:mb-6 tracking-tighter leading-tight">
            OUR <span className="text-[#8b75f2]">EXPERTISE.</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto md:mx-0">
            We offer a comprehensive suite of digital services designed to scale
            your business and elevate your brand's digital presence.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {allServices.map((service, i) => (
            <Link
              key={i}
              to={service.path}
              ref={(el) => (cardRefs.current[i] = el)}
              className={`
                group relative p-6 md:p-8 rounded-2xl md:rounded-3xl
                bg-[#0a0a0a] border border-white/5
                flex flex-col justify-between overflow-hidden
                transition-all duration-500
                shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_20px_40px_-20px_rgba(0,0,0,0.9)]
                hover:shadow-[0_0_0_1px_rgba(139,117,242,0.2),0_30px_80px_-20px_rgba(139,117,242,0.35)]
                hover:-translate-y-1
                ${service.gridClass}
              `}
            >
              {/* Glow orb */}
              <div className="absolute -right-10 -bottom-10 w-32 h-32 md:w-40 md:h-40 bg-[#8b75f2]/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                <div className="mb-6 md:mb-8 p-3 md:p-4 bg-white/5 rounded-xl md:rounded-2xl w-fit group-hover:scale-110 group-hover:bg-[#8b75f2]/20 transition-all duration-500">
                  {React.cloneElement(service.icon, {
                    className: "w-6 h-6 md:w-8 md:h-8 text-[#8b75f2]"
                  })}
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-[#8b75f2] transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6 md:mb-8">
                  {service.desc}
                </p>
              </div>

              <div className="flex items-center gap-2 text-[#8b75f2] font-semibold text-xs md:text-sm uppercase tracking-wider">
                Explore
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: "Alex Rivera",
    role: "Full-Stack Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Sarah Chen",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Marcus Thorne",
    role: "SEO Specialist",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop",
  },
];

const Team = () => {
  const componentRef = useRef(null);

  useLayoutEffect(() => {
    // Only run animation if screen width is 1024px or larger
    if (window.innerWidth < 1024) return;

    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".team-card");
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current,
          start: "top top",
          end: "+=1200",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.fromTo(
        cards,
        {
          x: 0,
          y: 0,
          rotation: (i) => i * 5 - 5,
          opacity: 0.8,
        },
        {
          x: (i) => (i - 1) * 380,
          y: 0,
          rotation: 0,
          opacity: 1,
          ease: "power2.out",
        }
      );
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={componentRef} 
      className="relative bg-black text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto min-h-screen flex flex-col items-center justify-center py-20 px-6">
        <div className="text-center mb-16 md:mb-32">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-4">
            Meet The <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Squad</span>
          </h2>
          <p className="hidden md:block text-gray-500 max-w-lg mx-auto text-sm md:text-base">
            Keep scrolling to see the team reveal.
          </p>
        </div>

        <div className="relative w-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-0 h-auto md:h-[500px]">
          {team.map((member, index) => (
            <div
              key={index}
              className="team-card relative md:absolute w-full max-w-[320px] md:w-[340px] rounded-3xl bg-zinc-900 border border-white/10 p-4 shadow-2xl transition-colors hover:border-purple-500/50"
              style={{ zIndex: team.length - index }}
            >
              <div className="relative h-72 md:h-80 w-full overflow-hidden rounded-2xl mb-6">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale"
                />
              </div>

              <div className="px-2 pb-2">
                <h3 className="text-xl md:text-2xl font-bold">{member.name}</h3>
                <p className="text-purple-500 text-xs font-bold uppercase tracking-widest mt-1">
                  {member.role}
                </p>
                
                <div className="flex gap-4 mt-5">
                  <a href="#" className="text-white/30 hover:text-purple-400 transition-colors">
                    <FaLinkedin size={18} />
                  </a>
                  <a href="#" className="text-white/30 hover:text-purple-400 transition-colors">
                    <FaTwitter size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
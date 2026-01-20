import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaReact, FaNodeJs, FaJs, FaWordpress } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiGreensock, SiFramer, SiPhp, SiHtml5 , SiCss3} from 'react-icons/si';

const techStack = [
  { icon: <FaWordpress />, color: "#ffffff", name: "WordPress" },
  { icon: <FaReact />, color: "#61DAFB", name: "React" },
  { icon: <SiGreensock />, color: "#88CE02", name: "GSAP" },
  { icon: <SiTailwindcss />, color: "#06B6D4", name: "Tailwind" },
  { icon: <FaNodeJs />, color: "#339933", name: "Node" },
  { icon: <SiMongodb />, color: "#47A248", name: "MongoDB" },
  { icon: <SiExpress />, color: "#ffffff", name: "Express" },
  { icon: <SiFramer />, color: "#E10098", name: "Framer" },
  { icon: <FaJs />, color: "#F7DF1E", name: "JS" },
  { icon: <SiPhp />, color: "#777BB4", name: "PHP" },
  { icon: <SiHtml5 />, color: "#E34F26", name: "HTML5" },
  { icon: <SiCss3 />, color: "#1572B6", name: "CSS3" },
];

const TechOrbit = () => {
  const containerRef = useRef(null);
  const orbitRef = useRef(null);
  const mainTl = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".orbit-item");
      
    
      const radius = window.innerWidth < 768 ? 110 : 190; 

      items.forEach((item, i) => {
        const angle = (i / items.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        gsap.set(item, { x, y });
      });

      mainTl.current = gsap.timeline({
        repeat: -1,
        defaults: { ease: "none", duration: 40 }
      });

      mainTl.current.to(orbitRef.current, { rotation: 360 }, 0);
      mainTl.current.to(items, { rotation: -360 }, 0); 

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = () => mainTl.current.pause();
  const handleMouseLeave = () => mainTl.current.play();

  return (
    <section ref={containerRef} className="py-24 bg-black overflow-hidden flex flex-col items-center justify-center min-h-[600px]">
      
      <div className="text-center mb-16 px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          The <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Tech Stack</span> We Trust
        </h2>
        <p className="text-gray-400 max-w-lg mx-auto">
          Hover over any technology to pause the orbit and see more details.
        </p>
      </div>

      <div className="relative flex items-center justify-center w-full h-[450px]">
        
       
        <div className="z-20 w-24 h-24 md:w-32 md:h-32 rounded-full bg-purple-600/10 border border-purple-500/30 flex items-center justify-center backdrop-blur-xl shadow-[0_0_60px_rgba(168,85,247,0.2)]">
          <div className="text-center">
            <p className="text-[10px] text-purple-400 font-black uppercase tracking-widest leading-none">Website</p>
            <p className="text-[10px] text-white font-black uppercase tracking-widest leading-none mt-1">Design Land</p>
          </div>
        </div>

        
        <div ref={orbitRef} className="absolute w-full h-full flex items-center justify-center">
          {techStack.map((tech, i) => (
            <div
              key={i}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="orbit-item absolute group cursor-pointer"
            >
              <div 
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-xl md:text-2xl transition-all duration-500 group-hover:scale-125 group-hover:border-purple-500 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
                style={{ color: tech.color }}
              >
                {tech.icon}
                
                <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-300 pointer-events-none">
                  <span className="bg-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-tighter">
                    {tech.name}
                  </span>
                  <div className="w-2 h-2 bg-purple-600 rotate-45 mx-auto -mt-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-white/5 rounded-full pointer-events-none" />
        <div className="absolute w-[380px] h-[380px] md:w-[580px] md:h-[580px] border border-white/5 rounded-full pointer-events-none opacity-30" />
      </div>
    </section>
  );
};

export default TechOrbit;
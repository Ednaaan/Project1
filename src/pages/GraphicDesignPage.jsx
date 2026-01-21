import React from 'react';
import { Palette, Layers, PenTool, Monitor, ArrowRight } from 'lucide-react';

import bentoImg from '../assets/ServicePagesPic/Graphic Design.webp'; 

const GraphicDesignPage = () => {
  const services = [
    {
      title: "Brand Identity",
      desc: "Logo design, color palettes, and typography that define your unique voice.",
      icon: <Palette className="w-6 h-6 text-[#8259DA]" />
    },
    {
      title: "UI/UX Design",
      desc: "Creating intuitive interfaces that focus on user experience and conversion.",
      icon: <Monitor className="w-6 h-6 text-[#8259DA]" />
    },
    {
      title: "Print & Media",
      desc: "High-quality brochures, business cards, and physical marketing materials.",
      icon: <Layers className="w-6 h-6 text-[#8259DA]" />
    },
    {
      title: "Social Graphics",
      desc: "Engaging content designed specifically for Instagram, LinkedIn, and more.",
      icon: <PenTool className="w-6 h-6 text-[#8259DA]" />
    }
  ];

  return (
    <section className='bg-black text-white min-h-screen pt-32 pb-16 relative overflow-hidden'>
      
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#8259DA]/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        
        {/* HERO SECTION - Two Column Layout */}
        <div className='grid lg:grid-cols-2 gap-16 items-center mb-32'>
          
          {/* LEFT CONTENT */}
          <div className='space-y-8'>
            <div>
              <h2 className='text-[#8259DA] font-bold uppercase tracking-[0.3em] text-xs mb-4 flex items-center gap-3'>
                <span className='w-8 h-[2px] bg-[#8259DA]'></span>
                Visual Storytelling
              </h2>
              <h1 className='text-5xl lg:text-7xl font-black leading-[1.05] tracking-tighter'>
                DESIGN THAT <br />
                <span className='bg-gradient-to-r from-[#8259DA] to-purple-400 bg-clip-text text-transparent uppercase'>Stands Out</span>
              </h1>
            </div>
            
            <p className='text-gray-400 text-lg leading-relaxed max-w-lg'>
              We blend art with strategy to create visuals that don't just look good—they work. Bring your vision to life through precision design and creative mastery.
            </p>

            <button className='px-10 py-4 bg-[#8259DA] text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(130,89,218,0.5)] transition-all active:scale-95 flex items-center gap-2 group'>
              Discuss Design <ArrowRight className='group-hover:translate-x-1 transition-transform' />
            </button>
          </div>

          {/* RIGHT SIDE - Masked Image Frame */}
          <div className='relative flex justify-center items-center'>
            {/* Rotating Outer Ring */}
            <div className='absolute w-[115%] h-[115%] border border-[#8259DA]/10 rounded-full animate-spin-slow pointer-events-none' />
            
            {/* The Masked Container (Asymmetric Shape) */}
            <div 
              className='relative w-full aspect-square max-w-[500px] bg-[#111] border border-white/10 p-2 shadow-2xl overflow-hidden'
              style={{
                borderRadius: '40px 180px 40px 40px', // Custom reference shape
              }}
            >
              <div 
                className='w-full h-full overflow-hidden'
                style={{ borderRadius: 'inherit' }}
              >
                <img 
                  src={bentoImg} 
                  alt="Graphic Design Portfolio" 
                  className='w-full h-full object-cover opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-700'
                />
              </div>
              
              {/* Overlay Glass Label */}
              {/* <div className='absolute inset-0 flex flex-col justify-end p-10 bg-gradient-to-t from-black/80 via-transparent to-transparent'>
                  <p className='text-2xl font-black mb-1 italic'>Creative Excellence</p>
                  <p className='text-gray-400 text-sm'>Website Design Land Art Studio</p>
                  <div className='mt-4 flex gap-2'>
                      <div className='h-1 w-12 bg-[#8259DA] rounded-full' />
                      <div className='h-1 w-4 bg-white/20 rounded-full' />
                  </div>
              </div> */}
            </div>

            {/* Floating Design Badge */}
            <div className='absolute -bottom-6 -left-6 w-36 h-36 bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-3xl flex items-center justify-center p-4 shadow-2xl hidden md:flex'>
                <div className='text-center'>
                    <p className='text-3xl font-black text-[#8259DA]'>A+</p>
                    <p className='text-[10px] uppercase font-bold text-gray-400 mt-1 tracking-widest'>Visual Quality</p>
                </div>
            </div>
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-16 border-t border-white/5'>
          {services.map((s, i) => (
            <div key={i} className='p-8 rounded-[2rem] bg-[#0c0c0c] border border-white/5 hover:border-[#8259DA]/30 hover:bg-[#111] transition-all group'>
              <div className='mb-6 p-4 bg-[#8259DA]/10 rounded-2xl w-fit group-hover:bg-[#8259DA] group-hover:text-white transition-all'>
                {s.icon}
              </div>
              <h3 className='text-xl font-bold mb-3 group-hover:text-[#8259DA] transition-colors'>{s.title}</h3>
              <p className='text-gray-500 text-sm leading-relaxed'>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA - Updated for consistency */}
        <div className='mt-24 p-1 rounded-[3rem] bg-gradient-to-r from-[#8259DA]/20 via-[#8259DA]/5 to-transparent'>
            <div className='bg-[#080808] rounded-[2.8rem] p-12 text-center border border-white/5'>
                <h2 className='text-3xl md:text-4xl font-black mb-8 tracking-tight'>READY TO START YOUR PROJECT?</h2>
                <button className='bg-white text-black px-12 py-4 rounded-full font-black hover:bg-[#8259DA] hover:text-white transition-all transform hover:scale-105'>
                    LET'S TALK DESIGN
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default GraphicDesignPage;
import React from 'react';
import { Layout, Palette, MousePointer2, Smartphone, CheckCircle2, ArrowRight } from 'lucide-react';
// Import image
import bentoImg from '../assets/ServicePagesPic/Website Design.webp'; 

const WebsiteDesignPage = () => {
  const features = [
    {
      title: "UI/UX Design",
      desc: "Creating intuitive interfaces and engaging user experiences that convert visitors.",
      icon: <Palette className="w-6 h-6 text-[#8259DA]" />
    },
    {
      title: "Responsive Layouts",
      desc: "Websites that look and perform beautifully on desktops, tablets, and smartphones.",
      icon: <Smartphone className="w-6 h-6 text-[#8259DA]" />
    },
    {
      title: "Interactive Prototypes",
      desc: "Visualizing the journey with high-fidelity mockups before moving to code.",
      icon: <MousePointer2 className="w-6 h-6 text-[#8259DA]" />
    },
    {
      title: "Brand Identity",
      desc: "Aligning your digital presence with your brand's unique voice and visual style.",
      icon: <Layout className="w-6 h-6 text-[#8259DA]" />
    }
  ];

  return (
    <section className='bg-black text-white min-h-screen pt-32 pb-16 overflow-hidden relative'>
      
      {/* Background Ambient Glows - Matching Reference */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#8259DA]/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        {/* Hero Section */}
        <div className='grid lg:grid-cols-2 gap-16 items-center mb-32'>
          
          {/* LEFT CONTENT */}
          <div className='space-y-8'>
            <div>
              <h2 className='text-[#8259DA] font-bold uppercase tracking-[0.3em] text-xs mb-4 flex items-center gap-3'>
                <span className='w-8 h-[2px] bg-[#8259DA]'></span>
                Elevate Your Brand
              </h2>
              <h1 className='text-5xl lg:text-7xl font-black leading-[1.05] tracking-tighter'>
                MODERN <br />
                <span className='bg-gradient-to-r from-[#8259DA] to-purple-400 bg-clip-text text-transparent uppercase'>Web Design</span>
              </h1>
            </div>
            
            <p className='text-gray-400 text-lg leading-relaxed max-w-lg'>
              We craft high-performance websites that blend stunning aesthetics with seamless functionality. Transform your digital presence into a powerful business tool.
            </p>

            <div className='flex flex-wrap gap-5'>
              <button className='px-10 py-4 bg-[#8259DA] text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(130,89,218,0.5)] transition-all active:scale-95 flex items-center gap-2 group'>
                Start Project <ArrowRight className='group-hover:translate-x-1 transition-transform' />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE - Masked Image Showcase */}
          <div className='relative flex justify-center items-center'>
            {/* Rotating Decorative Border */}
            <div className='absolute w-[115%] h-[115%] border border-[#8259DA]/10 rounded-full animate-spin-slow pointer-events-none' />
            
            {/* The Masked Container (Asymmetric Shape) */}
            <div 
              className='relative w-full aspect-square max-w-[500px] bg-[#111] border border-white/10 p-2 shadow-2xl overflow-hidden'
              style={{
                borderRadius: '40px 180px 40px 40px', // Asymmetric look
              }}
            >
              <div 
                className='w-full h-full overflow-hidden'
                style={{ borderRadius: 'inherit' }}
              >
                <img 
                  src={bentoImg} 
                  alt="Web Design Showcase" 
                  className='w-full h-full object-cover opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-700'
                />
              </div>
              
              {/* Overlay Glass Label */}
              {/* <div className='absolute inset-0 flex flex-col justify-end p-10 bg-gradient-to-t from-black/80 via-transparent to-transparent'>
                  <p className='text-2xl font-black mb-1'>Website Design Land</p>
                  <p className='text-gray-400 text-sm'>Crafting Digital Visions</p>
                  <div className='mt-4 flex gap-2'>
                      <div className='h-1 w-12 bg-[#8259DA] rounded-full' />
                      <div className='h-1 w-4 bg-white/20 rounded-full' />
                  </div>
              </div> */}
            </div>

            {/* Floating Accuracy/UX Badge */}
            <div className='absolute -bottom-6 -left-6 w-36 h-36 bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-3xl flex items-center justify-center p-4 shadow-2xl hidden md:flex'>
                <div className='text-center'>
                    <p className='text-3xl font-black text-[#8259DA]'>100%</p>
                    <p className='text-[10px] uppercase font-bold text-gray-400 mt-1 tracking-widest'>Responsive</p>
                </div>
            </div>
          </div>
        </div>

        {/* FEATURES GRID - Reference Style */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-16 border-t border-white/5'>
          {features.map((f, i) => (
            <div key={i} className='p-8 rounded-[2rem] bg-[#0c0c0c] border border-white/5 hover:border-[#8259DA]/30 hover:bg-[#111] transition-all group'>
              <div className='mb-6 p-4 bg-[#8259DA]/10 rounded-2xl w-fit  group-hover:text-white transition-all'>
                {f.icon}
              </div>
              <h3 className='text-xl font-bold mb-3 group-hover:text-[#8259DA] transition-colors'>{f.title}</h3>
              <p className='text-gray-500 text-sm leading-relaxed'>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Value Proposition Bar */}
        <div className='mt-24 rounded-[3rem] p-8 text-center border border-white/5 bg-[#080808]'>
          <div className='flex flex-wrap justify-center gap-8'>
            {['Custom Visuals', 'User-Centric Flow', 'SEO Ready', 'Fast Turnaround'].map((item) => (
              <div key={item} className='flex items-center gap-2 bg-white/5 px-6 py-2 rounded-full border border-white/5 hover:bg-[#8259DA]/10 transition-colors'>
                <CheckCircle2 className='text-[#8259DA] w-4 h-4' />
                <span className='font-bold text-gray-300 text-xs uppercase tracking-wider'>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteDesignPage;
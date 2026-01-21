import React from 'react';
import { Search, BarChart3, Globe, Zap, ArrowRight } from 'lucide-react';
// Apni image path confirm kar lein
import bentoImg from '../assets/ServicePagesPic/SEO.webp'; 

const SeoPage = () => {
  const features = [
    {
      title: "Keyword Research",
      desc: "Identifying high-intent terms that bring the right customers to your site.",
      icon: <Search className="w-6 h-6 text-[#8b75f2]" />
    },
    {
      title: "Technical SEO",
      desc: "Optimizing site speed and mobile-responsiveness.",
      icon: <Zap className="w-6 h-6 text-[#8b75f2]" />
    },
    {
      title: "Content Strategy",
      desc: "Creating valuable content that ranks well and engages audience.",
      icon: <Globe className="w-6 h-6 text-[#8b75f2]" />
    },
    {
      title: "Analytics",
      desc: "Transparent tracking of your rankings and conversion growth.",
      icon: <BarChart3 className="w-6 h-6 text-[#8b75f2]" />
    }
  ];

  return (
    <section className='bg-black text-white min-h-screen pt-32 pb-16 overflow-hidden'>
      
      {/* BACKGROUND AMBIENT GLOW */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#8259DA]/20 blur-[150px] rounded-full pointer-events-none" />

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center mb-32'>
          
          {/* LEFT CONTENT */}
          <div className='space-y-8'>
            <div>
              <h2 className='text-[#8259DA] font-bold uppercase tracking-[0.3em] text-sm mb-4 flex items-center gap-3'>
                <span className='w-12 h-[2px] bg-[#8259DA]'></span>
                Search Excellence
              </h2>
              <h1 className='text-5xl lg:text-7xl font-black leading-[1.05] tracking-tighter'>
                DOMINATE THE <br />
                <span className='bg-gradient-to-r from-[#8259DA] to-purple-400 bg-clip-text text-transparent'>SEARCH RESULTS</span>
              </h1>
            </div>
            
            <p className='text-gray-400 text-lg leading-relaxed max-w-lg'>
              We combine data-driven strategies with creative execution to ensure your brand stays at the top of the digital landscape.
            </p>

            <div className='flex flex-wrap gap-5'>
              <button className='px-10 py-4 bg-[#8259DA] text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(130,89,218,0.5)] transition-all active:scale-95 flex items-center gap-2 group'>
                Get Free Audit <ArrowRight className='group-hover:translate-x-1 transition-transform' />
              </button>
            </div>
          </div>

          {/* RIGHT MASKED GRAPHIC */}
          <div className='relative flex justify-center items-center'>
            {/* The Animated Glow Ring */}
            <div className='absolute w-[110%] h-[110%] border border-white/5 rounded-full animate-spin-slow pointer-events-none' />
            
            {/* The Masked Container */}
            <div 
              className='relative w-full aspect-square max-w-[500px] bg-gradient-to-br from-[#8259DA] to-purple-900 p-[2px]'
              style={{
                clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 25%)', // Example Modern Cut
                // Aap online "clippy" tool se apna manpasand shape yahan daal sakte hain
              }}
            >
              <div 
                className='w-full h-full bg-black overflow-hidden relative group'
                style={{ clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 25%)' }}
              >
                <img 
                  src={bentoImg} 
                  alt="SEO Strategy" 
                  className='w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out'
                />
                
                {/* Overlay Glass effect on image */}
                <div className='absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-transparent pointer-events-none' />
              </div>
            </div>

            {/* Small Floating Decorative Element */}
            <div className='absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center p-4 hidden md:flex'>
                <div className='text-center'>
                    <p className='text-2xl font-black text-[#8259DA]'>99%</p>
                    <p className='text-[10px] uppercase font-bold text-gray-400'>Accuracy</p>
                </div>
            </div>
          </div>

        </div>

        {/* FEATURES SECTION */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-16 border-t border-white/10'>
          {features.map((f, i) => (
            <div key={i} className='p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#8259DA]/30 hover:bg-white/[0.04] transition-all group'>
              <div className='mb-6 p-4 bg-[#8259DA]/10 rounded-2xl w-fit group-hover:bg-[#8259DA]/20 transition-all'>
                {f.icon}
              </div>
              <h3 className='text-xl font-bold mb-3'>{f.title}</h3>
              <p className='text-gray-500 text-sm leading-relaxed'>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeoPage;
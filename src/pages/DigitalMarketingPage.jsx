import React from 'react';
import { Target, TrendingUp, Mail, Share2, MousePointer2, ArrowRight, BarChart } from 'lucide-react';
// Apni image path confirm kar lein
import bentoImg from '../assets/ServicePagesPic/digital Marketing.webp'; 

const DigitalMarketingPage = () => {
  const strategies = [
    {
      title: "Social Media Ads",
      desc: "Targeted campaigns on Meta, LinkedIn, and TikTok to reach your ideal buyer.",
      icon: <Share2 className="w-6 h-6 text-[#8259DA]" />
    },
    {
      title: "Email Marketing",
      desc: "Automated funnels that nurture leads and turn them into repeat customers.",
      icon: <Mail className="w-6 h-6 text-[#8259DA]" />
    },
    {
      title: "PPC Management",
      desc: "Google Ads strategy focused on high-conversion keywords.",
      icon: <MousePointer2 className="w-6 h-6 text-[#8259DA]" />
    },
    {
      title: "Conversion Optimization",
      desc: "Data-driven tweaks to your landing pages to maximize every visitor.",
      icon: <Target className="w-6 h-6 text-[#8259DA]" />
    }
  ];

  return (
    <section className='bg-black text-white min-h-screen pt-32 pb-16 overflow-hidden relative'>
      
   
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#8259DA]/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center mb-32'>
          
       
          <div className='space-y-8'>
            <div>
              <h2 className='text-[#8259DA] font-bold uppercase tracking-[0.3em] text-xs mb-4 flex items-center gap-3'>
                <span className='w-8 h-[2px] bg-[#8259DA]'></span>
                Digital Mastery
              </h2>
              <h1 className='text-5xl lg:text-7xl font-black leading-[1.05] tracking-tighter'>
                DOMINATE THE <br />
                <span className='bg-gradient-to-r from-[#8259DA] to-purple-400 bg-clip-text text-transparent uppercase'>Marketplace</span>
              </h1>
            </div>
            
            <p className='text-gray-400 text-lg leading-relaxed max-w-lg'>
              We build high-converting marketing systems that turn browsers into buyers. Professional digital growth strategies tailored for your business.
            </p>

            <div className='flex flex-wrap gap-5'>
              <button className='px-10 py-4 bg-[#8259DA] text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(130,89,218,0.5)] transition-all active:scale-95 flex items-center gap-2 group'>
                Get Free Audit <ArrowRight className='group-hover:translate-x-1 transition-transform' />
              </button>
            </div>
          </div>

        
          <div className='relative flex justify-center items-center'>
      
            <div className='absolute w-[115%] h-[115%] border border-[#8259DA]/10 rounded-full animate-spin-slow pointer-events-none' />
            
          
            <div 
              className='relative w-full aspect-square max-w-[500px] bg-[#111] border border-white/10 p-4 shadow-2xl overflow-hidden'
              style={{
                borderRadius: '40px 180px 40px 40px', 
              }}
            >
              <img 
                src={bentoImg} 
                alt="Digital Strategy" 
                className='w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700'
              />
              
              {/* Inner Content Label */}
              <div className='absolute inset-0 flex flex-col justify-end p-10 bg-gradient-to-t from-black via-transparent to-transparent'>
                  <p className='text-2xl font-black mb-2'>Website Design Land</p>
                  <p className='text-gray-400 text-sm'>High-Converting Digital Marketing</p>
                  <div className='mt-4 flex gap-2'>
                      <div className='h-1 w-12 bg-[#8259DA] rounded-full' />
                      <div className='h-1 w-4 bg-white/20 rounded-full' />
                  </div>
              </div>
            </div>

            {/* Floating Info Card (Bottom Right) */}
            <div className='absolute -bottom-6 -right-6 w-36 h-36 bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-3xl flex items-center justify-center p-4 shadow-2xl hidden md:flex'>
                <div className='text-center'>
                    <p className='text-3xl font-black text-[#8259DA]'>99%</p>
                    <p className='text-[10px] uppercase font-bold text-gray-400 mt-1 tracking-widest'>ROI Focus</p>
                </div>
            </div>
          </div>

        </div>

        {/* BOTTOM STRATEGY CARDS - Styled like the reference bar/cards */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-16 border-t border-white/5'>
          {strategies.map((f, i) => (
            <div key={i} className='p-8 rounded-[2rem] bg-[#0c0c0c] border border-white/5 hover:border-[#8259DA]/30 hover:bg-[#111] transition-all group'>
              <div className='mb-6 p-4 bg-[#8259DA]/10 rounded-2xl w-fit  group-hover:text-white transition-all'>
                {f.icon}
              </div>
              <h3 className='text-xl font-bold mb-3 group-hover:text-[#8259DA] transition-colors'>{f.title}</h3>
              <p className='text-gray-500 text-sm leading-relaxed'>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingPage;
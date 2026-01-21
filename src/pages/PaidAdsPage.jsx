import React from 'react';
import { Target, MousePointerClick, BarChart4, PieChart, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
// Apni image import karein
import bentoImg from '../assets/ServicePagesPic/6.webp'; 

const PaidAdsPage = () => {
  const adPlatforms = [
    {
      title: "Google Search Ads",
      desc: "Capture high-intent customers exactly when they are searching for your services.",
      icon: <Target className="w-6 h-6 text-[#8259DA]" />
    },
    {
      title: "Social Media Advertising",
      desc: "Advanced audience targeting on Meta and Instagram to build brand awareness.",
      icon: <MousePointerClick className="w-6 h-6 text-[#8259DA]" />
    },
    {
      title: "Remarketing Campaigns",
      desc: "Bring back previous visitors who didn't convert with strategic follow-up ads.",
      icon: <Zap className="w-6 h-6 text-[#8259DA]" />
    },
    {
      title: "Performance Tracking",
      desc: "Deep-dive analytics to see exactly where every dollar of your budget is going.",
      icon: <PieChart className="w-6 h-6 text-[#8259DA]" />
    }
  ];

  return (
    <section className='bg-black text-white min-h-screen pt-32 pb-16 relative overflow-hidden'>
      
      {/* Laser Line Background Effect - Reference Design style */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8259DA] to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8259DA] to-transparent" />
      </div>

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        {/* Hero Section */}
        <div className='grid lg:grid-cols-2 gap-16 items-center mb-32'>
          
          {/* LEFT CONTENT */}
          <div className='space-y-8'>
            <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8259DA]/10 border border-[#8259DA]/20 text-[#8259DA] text-xs font-bold uppercase tracking-[0.2em]'>
              <ShieldCheck className='w-4 h-4' /> Certified PPC Partner
            </div>
            
            <div>
              <h1 className='text-5xl lg:text-7xl font-black leading-[1.05] tracking-tighter'>
                STOP SPENDING. <br />
                <span className='bg-gradient-to-r from-[#8259DA] to-purple-400 bg-clip-text text-transparent uppercase'>START INVESTING.</span>
              </h1>
            </div>
            
            <p className='text-gray-400 text-lg leading-relaxed max-w-lg'>
              Maximize your ROI with data-backed PPC strategies. We manage your ad spend as if it were our own, focusing on conversions, not just clicks.
            </p>

            <div className='flex flex-wrap gap-5'>
              <button className='px-10 py-4 bg-[#8259DA] text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(130,89,218,0.5)] transition-all active:scale-95 flex items-center gap-2 group'>
                Request Free Ad Audit <BarChart4 className='group-hover:translate-x-1 transition-transform' />
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
                borderRadius: '40px 180px 40px 40px', 
              }}
            >
              <div 
                className='w-full h-full overflow-hidden'
                style={{ borderRadius: 'inherit' }}
              >
                <img 
                  src={bentoImg} 
                  alt="Paid Ads Strategy" 
                  className='w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-700'
                />
              </div>
              
              {/* Overlay Glass Label */}
              {/* <div className='absolute inset-0 flex flex-col justify-end p-10 bg-gradient-to-t from-black/80 via-transparent to-transparent'>
                  <p className='text-2xl font-black mb-1'>Conversion Focused</p>
                  <p className='text-gray-400 text-sm italic'>Precision Campaigns, Maximum ROI</p>
                  <div className='mt-4 flex gap-2'>
                      <div className='h-1 w-12 bg-[#8259DA] rounded-full' />
                      <div className='h-1 w-4 bg-white/20 rounded-full' />
                  </div>
              </div> */}
            </div>

            {/* Floating ROI Badge */}
            <div className='absolute -bottom-6 -left-6 w-36 h-36 bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-3xl flex items-center justify-center p-4 shadow-2xl hidden md:flex'>
                <div className='text-center'>
                    <p className='text-3xl font-black text-[#8259DA]'>5X</p>
                    <p className='text-[10px] uppercase font-bold text-gray-400 mt-1 tracking-widest'>Avg. ROAS</p>
                </div>
            </div>
          </div>
        </div>

        {/* AD PLATFORMS GRID */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-16 border-t border-white/5'>
          {adPlatforms.map((platform, i) => (
            <div key={i} className='p-8 rounded-[2rem] bg-[#0c0c0c] border border-white/5 hover:border-[#8259DA]/30 hover:bg-[#111] transition-all group'>
              <div className='mb-6 p-4 bg-[#8259DA]/10 rounded-2xl w-fit group-hover:bg-[#8259DA] group-hover:text-white transition-all'>
                {platform.icon}
              </div>
              <h3 className='text-xl font-bold mb-3 group-hover:text-[#8259DA] transition-colors'>{platform.title}</h3>
              <p className='text-gray-500 text-sm leading-relaxed'>{platform.desc}</p>
            </div>
          ))}
        </div>

        {/* MANAGEMENT LIFECYCLE BAR */}
        <div className='mt-24 rounded-[3rem] p-12 border border-white/5 bg-[#080808] relative overflow-hidden'>
          <div className='absolute top-0 left-0 w-full h-full bg-[#8259DA]/5 blur-3xl pointer-events-none' />
          <h2 className='text-2xl font-black mb-12 text-center tracking-tight'>OUR MANAGEMENT LIFECYCLE</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10'>
            {[
              { label: "Audit & Strategy", detail: "We analyze your current spend and find the leaks." },
              { label: "Launch & Test", detail: "A/B testing creatives to find the winning formula." },
              { label: "Scale & Optimize", detail: "Doubling down on what works to lower your CPA." }
            ].map((step, idx) => (
              <div key={idx} className='text-center space-y-3'>
                <div className='text-5xl font-black text-white/5 mb-[-25px] tracking-tighter'>0{idx + 1}</div>
                <h4 className='text-[#8259DA] font-extrabold text-lg uppercase tracking-wider'>{step.label}</h4>
                <p className='text-gray-500 text-sm max-w-[250px] mx-auto'>{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaidAdsPage;
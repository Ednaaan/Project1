import React from 'react';
import { Target, MousePointerClick, BarChart4, PieChart, ShieldCheck, Zap } from 'lucide-react';
// Import the video generated for this page
import adsVideo from '../assets/Animation_Video_Generation_Complete.mp4'; 

const PaidAdsPage = () => {
  const adPlatforms = [
    {
      title: "Google Search Ads",
      desc: "Capture high-intent customers exactly when they are searching for your services.",
      icon: <Target className="w-6 h-6 text-[#8b75f2]" />
    },
    {
      title: "Social Media Advertising",
      desc: "Advanced audience targeting on Meta, Instagram, and LinkedIn to build brand awareness.",
      icon: <MousePointerClick className="w-6 h-6 text-[#8b75f2]" />
    },
    {
      title: "Remarketing Campaigns",
      desc: "Bring back previous visitors who didn't convert with strategic follow-up ads.",
      icon: <Zap className="w-6 h-6 text-[#8b75f2]" />
    },
    {
      title: "Performance Tracking",
      desc: "Deep-dive analytics to see exactly where every dollar of your budget is going.",
      icon: <PieChart className="w-6 h-6 text-[#8b75f2]" />
    }
  ];

  return (
    <section className='bg-[#080808] text-white min-h-screen pt-32 pb-16 relative overflow-hidden'>
      
      {/* Laser Line Background Effect */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8b75f2] to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8b75f2] to-transparent" />
      </div>

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        {/* Hero Section */}
        <div className='grid lg:grid-cols-2 gap-12 items-center mb-24'>
          <div className='space-y-6'>
            <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8b75f2]/10 border border-[#8b75f2]/20 text-[#8b75f2] text-xs font-bold uppercase tracking-widest'>
              <ShieldCheck className='w-3 h-3' /> Certified Partner
            </div>
            <h1 className='text-5xl md:text-6xl font-black leading-tight bg-gradient-to-r from-white via-purple-400 to-purple-600 bg-clip-text text-transparent'>
              Stop Spending. <br />
              <span >Start Investing.</span>
            </h1>
            <p className='text-gray-400 text-lg leading-relaxed max-w-lg'>
              Maximize your ROI with data-backed PPC strategies. We manage your ad spend as if it were our own, 
              focusing on conversions, not just clicks.
            </p>
            <div className='pt-4'>
              <button className='bg-[#8b75f2] hover:bg-[#5e4ab8] text-black font-bold px-8 py-4 rounded-xl transition-all flex items-center gap-3'>
                Request a Free Ad Audit <BarChart4 className='w-5 h-5' />
              </button>
            </div>
          </div>

          {/* Video / Visual Asset */}
          <div className='relative'>
            <div className='absolute -inset-4 bg-[#8b75f2]/20 blur-3xl rounded-full opacity-30 animate-pulse' />
            <div className='relative rounded-3xl border border-white/10 overflow-hidden bg-black aspect-video shadow-2xl'>
              <video 
                src={adsVideo} 
                autoPlay loop muted playsInline 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32'>
          {adPlatforms.map((platform, i) => (
            <div key={i} className='p-8 rounded-2xl bg-[#111] border border-white/5 hover:border-[#8b75f2]/30 transition-colors group'>
              <div className='w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#8b75f2]/10 transition-colors'>
                {platform.icon}
              </div>
              <h3 className='text-xl font-bold mb-3'>{platform.title}</h3>
              <p className='text-sm text-gray-500 leading-relaxed'>{platform.desc}</p>
            </div>
          ))}
        </div>

        {/* The ROI Formula Section */}
        <div className='rounded-3xl bg-gradient-to-br from-[#111] to-[#080808] border border-white/5 p-12 text-center'>
          <h2 className='text-3xl font-bold mb-12'>Our Management Lifecycle</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              { label: "Audit & Strategy", detail: "We analyze your current spend and find the leaks." },
              { label: "Launch & Test", detail: "A/B testing creatives to find the winning formula." },
              { label: "Scale & Optimize", detail: "Doubling down on what works to lower your CPA." }
            ].map((step, idx) => (
              <div key={idx} className='relative'>
                <div className='text-4xl font-black text-white/5 absolute -top-4 left-1/2 -translate-x-1/2'>0{idx + 1}</div>
                <h4 className='text-[#8b75f2] font-bold mb-2 relative z-10'>{step.label}</h4>
                <p className='text-gray-500 text-sm'>{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaidAdsPage;
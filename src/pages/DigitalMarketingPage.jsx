import React from 'react';
import { Target, TrendingUp, Mail, Share2, MousePointer2, BarChart } from 'lucide-react';

// import marketingVideo from '../assets/Animation_Video_Generation_Complete.mp4'; 
import bentoImg from '../assets/seoImage.jpg'; 

const DigitalMarketingPage = () => {
  const strategies = [
    {
      title: "Social Media Ads",
      desc: "Targeted campaigns on Meta, LinkedIn, and TikTok to reach your ideal buyer.",
      icon: <Share2 className="w-6 h-6 text-[#a855f7]" />
    },
    {
      title: "Email Marketing",
      desc: "Automated funnels that nurture leads and turn them into repeat customers.",
      icon: <Mail className="w-6 h-6 text-[#a855f7]" />
    },
    {
      title: "PPC Management",
      desc: "Google Ads strategy focused on high-conversion keywords and low cost-per-click.",
      icon: <MousePointer2 className="w-6 h-6 text-[#a855f7]" />
    },
    {
      title: "Conversion Optimization",
      desc: "Data-driven tweaks to your landing pages to maximize every visitor.",
      icon: <Target className="w-6 h-6 text-[#a855f7]" />
    }
  ];

  const sliceStyle = {
      backgroundImage: `url(${bentoImg})`,
      boxShadow: '0 0 20px rgba(99, 69, 237, 0.1)'
    };
  
    const sliceClass = "rounded-2xl bg-fixed bg-cover bg-center border border-white/10 hover:border-[#8b75f2]/40 transition-colors duration-500";

  return (
    <section className='bg-[#0a0a0a] text-white min-h-screen pt-32 pb-16 relative'>
      
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        {/* Header Section */}
        <div className='grid lg:grid-cols-2 gap-16 items-center mb-32'>
          <div>
            <h2 className='text-[#a855f7] font-mono tracking-widest mb-4'>DATA-DRIVEN GROWTH</h2>
            <h1 className='text-6xl font-extrabold mb-8 leading-[1.1] bg-gradient-to-r from-white via-purple-400 to-purple-600 bg-clip-text text-transparent'>
              Scale Your Brand <br /> 
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-400 to-purple-600'>
                Through Digital Mastery
              </span>
            </h1>
            <p className='text-gray-400 text-lg mb-8 max-w-lg'>
              We don't just "post content." We build systems that find your customers, 
              tell your story, and grow your revenue using cutting-edge marketing technology.
            </p>
            <div className='flex items-center gap-8'>
               <div>
                  <p className='text-3xl font-bold'>150%+</p>
                  <p className='text-gray-500 text-sm'>Avg. ROI Increase</p>
               </div>
               <div className='w-[1px] h-12 bg-white/10' />
               <div>
                  <p className='text-3xl font-bold'>24/7</p>
                  <p className='text-gray-500 text-sm'>Campaign Monitoring</p>
               </div>
            </div>
          </div>

          {/* Video Section */}
          {/* <div className='relative group'>
            <div className='absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000'></div>
            <div className='relative rounded-2xl overflow-hidden bg-black border border-white/10 aspect-video'>
              <video 
                src={marketingVideo} 
                autoPlay loop muted playsInline 
                className="w-full h-full object-cover"
              />
            </div>
          </div> */}
           {/* Right Side: Sliced Bento Grid */}
          <div className='grid grid-cols-4 grid-rows-3 gap-3 h-[500px] w-full'>
            {/* Big Square Slice */}
            <div 
              className={`col-span-2 row-span-2 ${sliceClass}`}
              style={sliceStyle}
            />
            {/* Top Right Slice */}
            <div 
              className={`col-span-2 row-span-1 ${sliceClass}`}
              style={sliceStyle}
            />
            {/* Mid Slices */}
            <div 
              className={`col-span-1 row-span-1 ${sliceClass}`}
              style={sliceStyle}
            />
            <div 
              className={`col-span-1 row-span-1 ${sliceClass}`}
              style={sliceStyle}
            />
            {/* Bottom Slices */}
            <div 
              className={`col-span-3 row-span-1 ${sliceClass}`}
              style={sliceStyle}
            />
            <div 
              className={`col-span-1 row-span-1 ${sliceClass}`}
              style={sliceStyle}
            />
          </div>
          
        </div>

        {/* Strategy Grid */}
        <div className='grid md:grid-cols-2 gap-6'>
          {strategies.map((s, i) => (
            <div key={i} className='p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all flex gap-6 items-start'>
              <div className='p-4 bg-purple-500/20 rounded-2xl'>
                {s.icon}
              </div>
              <div>
                <h3 className='text-2xl font-bold mb-2'>{s.title}</h3>
                <p className='text-gray-400 leading-relaxed'>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Bar */}
        <div className='mt-32 py-12 border-y border-white/5 flex flex-wrap justify-center gap-12 grayscale opacity-50'>
            {/* Replace these with actual brand logos later */}
            <span className='text-xl font-bold tracking-tighter italic'>GOOGLE PARTNER</span>
            <span className='text-xl font-bold tracking-tighter italic'>META BUSINESS</span>
            <span className='text-xl font-bold tracking-tighter italic'>HUBSPOT CERTIFIED</span>
            <span className='text-xl font-bold tracking-tighter italic'>SEM RUSH</span>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingPage;
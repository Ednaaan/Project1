import React from 'react';
import { Search, BarChart3, Globe, Zap, CheckCircle2 } from 'lucide-react';
// 1. Apni image import karein
import bentoImg from '../assets/seoImage.jpg'; 

const SeoPage = () => {
  const features = [
    {
      title: "Keyword Research",
      desc: "Identifying high-intent terms that bring the right customers to your site.",
      icon: <Search className="w-6 h-6 text-[#8b75f2]" />
    },
    {
      title: "Technical SEO",
      desc: "Optimizing site speed, mobile-responsiveness, and site architecture.",
      icon: <Zap className="w-6 h-6 text-[#8b75f2]" />
    },
    {
      title: "Content Strategy",
      desc: "Creating valuable content that ranks well and engages your audience.",
      icon: <Globe className="w-6 h-6 text-[#8b75f2]" />
    },
    {
      title: "Analytics & Reporting",
      desc: "Transparent tracking of your rankings, traffic, and conversion growth.",
      icon: <BarChart3 className="w-6 h-6 text-[#8b75f2]" />
    }
  ];

  // Common styles for all bento slices to keep code clean
  const sliceStyle = {
    backgroundImage: `url(${bentoImg})`,
    boxShadow: '0 0 20px rgba(99, 69, 237, 0.1)'
  };

  const sliceClass = "rounded-2xl bg-fixed bg-cover bg-center border border-white/10 hover:border-[#8b75f2]/40 transition-colors duration-500";

  return (
    <section className='bg-black text-white min-h-screen relative overflow-hidden pt-32 pb-16'>
      
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#6345ed]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#6345ed]/5 blur-[120px] pointer-events-none" />

      <div className='max-w-7xl mx-auto px-6 font-sans relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center mb-20'>
          
          {/* Left Side: Content */}
          <div className='flex flex-col gap-6'>
            <span className='text-[#8b75f2] font-semibold tracking-wide uppercase text-sm'>Boost Your Visibility</span>
            <h1 className='text-5xl font-extrabold leading-tight bg-gradient-to-r from-white via-purple-400 to-purple-600 bg-clip-text text-transparent'>
              Professional <span>SEO Services</span> for Modern Businesses
            </h1>
            <p className='text-lg text-gray-400 leading-relaxed'>
              In today's digital landscape, a strong online presence is crucial. We help you dominate search results, 
              drive organic traffic, and achieve sustainable growth.
            </p>
            <div className='flex gap-4 mt-2'>
              <button className="group relative px-8 py-3 md:px-12 md:py-4 bg-transparent border border-white/20 rounded-full overflow-hidden transition-all active:scale-95">
                <span className="relative z-10 text-white font-bold text-sm md:text-base transition-colors group-hover:text-black">Get Started</span>
                <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              <button className="group relative px-8 py-3 md:px-12 md:py-4 bg-transparent border border-white/20 rounded-full overflow-hidden transition-all active:scale-95">
                <span className="relative z-10 text-white font-bold text-sm md:text-base transition-colors group-hover:text-black">View Case Studies</span>
                <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>
          </div>

          {/* Right Side: Sliced Bento Grid */}
          <div className='grid grid-cols-4 grid-rows-3 gap-3 h-[450px] w-full'>
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

        <hr className='border-white/5 mb-20' />

        
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {features.map((f, i) => (
            <div key={i} className='p-8 rounded-2xl border border-white/5 hover:border-[#6345ed]/50 transition-all duration-300 bg-white/5 backdrop-blur-sm group hover:scale-105'>
              <div className='mb-4 p-3 bg-black/40 rounded-lg w-fit group-hover:shadow-[0_0_15px_rgba(99,69,237,0.4)] transition-all'>
                {f.icon}
              </div>
              <h3 className='text-xl font-bold mb-3 text-white'>{f.title}</h3>
              <p className='text-gray-400 text-sm leading-relaxed'>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeoPage;
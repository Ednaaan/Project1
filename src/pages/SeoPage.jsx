import React from 'react';
import { Search, BarChart3, Globe, Zap, CheckCircle2 } from 'lucide-react';
import seoVideo from '../assets/Animation_Video_Generation_Complete.mp4';

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

  return (
    <section className='bg-black text-white min-h-screen relative overflow-hidden pt-32 pb-16'>
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#6345ed]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#6345ed]/5 blur-[120px] pointer-events-none" />

      <div className='max-w-7xl mx-auto px-6 font-sans relative z-10'>
        {/* Hero Section */}
        <div className='grid lg:grid-cols-2 gap-12 items-center mb-20'>
          <div className='flex flex-col gap-6'>
            <span className='text-[#8b75f2] font-semibold tracking-wide uppercase text-sm'>Boost Your Visibility</span>
            <h1 className='text-5xl font-extrabold leading-tight bg-gradient-to-r from-white via-purple-400 to-purple-600 bg-clip-text text-transparent'>
              Professional <span >SEO Services</span> for Modern Businesses
            </h1>
            <p className='text-lg text-gray-400 leading-relaxed'>
              In today's digital landscape, a strong online presence is crucial. We help you dominate search results, 
              drive organic traffic, and achieve sustainable growth through proven, data-driven techniques.
            </p>
            <div className='flex gap-4 mt-2'>
              <button className='bg-[#8b75f2] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#604eac] transition shadow-[0_0_20px_rgba(99,69,237,0.4)]'>
                Get Started
              </button>
              <button className='border border-[#6345ed]/40 px-8 py-3 rounded-lg font-medium hover:bg-[#6345ed]/10 transition'>
                View Case Studies
              </button>
            </div>
          </div>

          {/* Video Container */}
          <div 
            className='relative rounded-2xl overflow-hidden bg-black/40 backdrop-blur-md border border-white/10 aspect-video flex items-center justify-center'
            style={{ boxShadow: '0 0 40px rgba(99, 69, 237, 0.15)' }}
          >
            <video 
              src={seoVideo} 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#6345ed]/5 pointer-events-none" />
          </div>
        </div> {/* End Hero Grid */}

        <hr className='border-white/5 mb-20' />

        {/* Features Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {features.map((f, i) => (
            <div 
              key={i} 
              className='p-8 rounded-2xl border border-white/5 hover:border-[#6345ed]/50 transition-all duration-300 bg-white/5 backdrop-blur-sm group hover:scale-105'
              style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
            >
              <div className='mb-4 p-3 bg-black/40 rounded-lg w-fit group-hover:shadow-[0_0_15px_rgba(99,69,237,0.4)] transition-all'>
                {f.icon}
              </div>
              <h3 className='text-xl font-bold mb-3 text-white'>{f.title}</h3>
              <p className='text-gray-400 text-sm leading-relaxed'>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Value Proposition */}
        <div 
          className='mt-24 rounded-3xl p-12 text-center border border-[#6345ed]/20 bg-gradient-to-b from-[#120d26] to-black'
          style={{ boxShadow: '0 0 50px rgba(99, 69, 237, 0.1)' }}
        >
          <h2 className='text-3xl font-bold mb-8'>Why Partner With Us?</h2>
          <div className='flex flex-wrap justify-center gap-8'>
            {['White-hat Techniques', 'Weekly Insights', 'Custom Strategy', '24/7 Support'].map((item) => (
              <div key={item} className='flex items-center gap-2 bg-black/40 px-4 py-2 rounded-full border border-white/5'>
                <CheckCircle2 className='text-[#8b75f2] w-5 h-5' />
                <span className='font-medium text-gray-200 text-sm'>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoPage;
import React from 'react';
import { Layout, Palette, MousePointer2, Smartphone, CheckCircle2 } from 'lucide-react';
import designVideo from '../assets/Animation_Video_Generation_Complete.mp4';

const WebsiteDesignPage = () => {
  const features = [
    {
      title: "UI/UX Design",
      desc: "Creating intuitive interfaces and engaging user experiences that convert visitors.",
      icon: <Palette className="w-6 h-6 text-[#8b75f2]" />
    },
    {
      title: "Responsive Layouts",
      desc: "Websites that look and perform beautifully on desktops, tablets, and smartphones.",
      icon: <Smartphone className="w-6 h-6 text-[#8b75f2]" />
    },
    {
      title: "Interactive Prototypes",
      desc: "Visualizing the journey with high-fidelity mockups before moving to code.",
      icon: <MousePointer2 className="w-6 h-6 text-[#8b75f2]" />
    },
    {
      title: "Brand Identity",
      desc: "Aligning your digital presence with your brand's unique voice and visual style.",
      icon: <Layout className="w-6 h-6 text-[#8b75f2]" />
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
            <span className='text-[#8b75f2] font-semibold tracking-wide uppercase text-sm'>Elevate Your Brand</span>
            <h1 className='text-5xl font-extrabold leading-tight'>
              Modern <span className='text-[#8b75f2]'>Web Design</span> for Digital Leaders
            </h1>
            <p className='text-lg text-gray-400 leading-relaxed'>
              We craft high-performance websites that blend stunning aesthetics with seamless functionality. 
              Transform your digital presence into a powerful business tool with our custom design solutions.
            </p>
            <div className='flex gap-4 mt-2'>
              <button className='bg-[#8b75f2] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#604eac] transition shadow-[0_0_20px_rgba(99,69,237,0.4)]'>
                Start Project
              </button>
              <button className='border border-[#6345ed]/40 px-8 py-3 rounded-lg font-medium hover:bg-[#6345ed]/10 transition'>
                Our Portfolio
              </button>
            </div>
          </div>

          {/* Video Container */}
          <div 
            className='relative rounded-2xl overflow-hidden bg-black/40 backdrop-blur-md border border-white/10 aspect-video flex items-center justify-center'
            style={{ boxShadow: '0 0 40px rgba(99, 69, 237, 0.15)' }}
          >
            <video 
              src={designVideo} 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#6345ed]/5 pointer-events-none" />
          </div>
        </div>

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
          <h2 className='text-3xl font-bold mb-8'>The Design Process</h2>
          <div className='flex flex-wrap justify-center gap-8'>
            {['Custom Visuals', 'User-Centric Flow', 'SEO Ready', 'Fast Turnaround'].map((item) => (
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

export default WebsiteDesignPage;
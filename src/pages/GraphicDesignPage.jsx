import React from 'react';
import { Palette, Layers, PenTool, Layout, CheckCircle2, Monitor } from 'lucide-react';
import designVideo from '../assets/Animation_Video_Generation_Complete.mp4'; // Placeholder for your video asset

const GraphicDesignPage = () => {
  const services = [
    {
      title: "Brand Identity",
      desc: "Logo design, color palettes, and typography that define your unique voice.",
      icon: <Palette className="w-6 h-6 text-[#8b75f2]" />,
      bg: "from-purple-500/10 to-transparent"
    },
    {
      title: "UI/UX Design",
      desc: "Creating intuitive interfaces that focus on user experience and conversion.",
      icon: <Monitor className="w-6 h-6 text-[#8b75f2]" />,
      bg: "from-purple-500/10 to-transparent"
    },
    {
      title: "Print & Media",
      desc: "High-quality brochures, business cards, and physical marketing materials.",
      icon: <Layers className="w-6 h-6 text-[#8b75f2]" />,
      bg: "from-purple-500/10 to-transparent"
    },
    {
      title: "Social Graphics",
      desc: "Engaging content designed specifically for Instagram, LinkedIn, and more.",
      icon: <PenTool className="w-6 h-6 text-[#8b75f2]" />,
      bg: "from-purple-500/10 to-transparent"
    }
  ];

  return (
    <section className='bg-[#050505] text-white min-h-screen relative overflow-hidden pt-32 pb-16'>
      
      {/* Dynamic Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#ff3e81]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#3eafff]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        {/* Hero Section */}
        <div className='flex flex-col items-center text-center mb-20'>
          <span className='px-4 py-1 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-gray-400 mb-6'>
            Visual Storytelling
          </span>
          <h1 className='text-6xl md:text-7xl font-black tracking-tighter mb-6 bg-gradient-to-r from-white via-purple-400 to-purple-600 bg-clip-text text-transparent'>
            DESIGN THAT <br /> STANDS OUT.
          </h1>
          <p className='max-w-2xl text-lg text-gray-400 leading-relaxed'>
            We blend art with strategy to create visuals that don't just look good—they work. 
            From startups to established brands, we bring your vision to life through precision design.
          </p>
        </div>

        {/* Showreel Section */}
        <div className='relative rounded-3xl overflow-hidden border border-white/10 mb-32 group'>
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8'>
                <p className='text-sm font-medium tracking-widest uppercase'>View Our 2024 Showreel</p>
            </div>
            <video 
              src={designVideo} 
              autoPlay loop muted playsInline 
              className="w-full h-[500px] object-cover"
            />
        </div>

        {/* Bento Service Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {services.map((s, i) => (
            <div key={i} className={`p-8 rounded-3xl border border-white/5 bg-gradient-to-br ${s.bg} backdrop-blur-sm hover:border-white/20 transition-all group cursor-default`}>
              <div className='mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform'>
                {s.icon}
              </div>
              <h3 className='text-2xl font-bold mb-4'>{s.title}</h3>
              <p className='text-gray-400 text-sm leading-relaxed'>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className='mt-32 p-1 rounded-[40px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500'>
            <div className='bg-[#050505] rounded-[36px] p-12 text-center'>
                <h2 className='text-4xl font-bold mb-6'>Ready to start your project?</h2>
                <button className='bg-white text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform'>
                    Let's Talk Design
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default GraphicDesignPage;
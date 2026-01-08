import React from 'react';
import { PenTool, BookOpen, FileText, Share2, CheckCircle2, Quote } from 'lucide-react';
// Import the video generated for this page
import contentVideo from '../assets/Animation_Video_Generation_Complete.mp4'; 

const ContentWritingPage = () => {
  const contentTypes = [
    {
      title: "Blog & Article Writing",
      desc: "SEO-optimized long-form content that establishes your brand as an industry leader.",
      icon: <BookOpen className="w-6 h-6 text-[#8b75f2]" />
    },
    {
      title: "Website Copywriting",
      desc: "Persuasive copy for landing pages that turns casual visitors into committed customers.",
      icon: <FileText className="w-6 h-6 text-[#8b75f2]" />
    },
    {
      title: "Product Descriptions",
      desc: "Compelling narratives for your products that highlight benefits and drive sales.",
      icon: <PenTool className="w-6 h-6 text-[#8b75f2]" />
    },
    {
      title: "Social Media Copy",
      desc: "Short, punchy, and shareable content tailored for every social platform.",
      icon: <Share2 className="w-6 h-6 text-[#8b75f2]" />
    }
  ];

  return (
    <section className='bg-[#0c0c0c] text-white min-h-screen pt-32 pb-16 relative'>
      
      {/* Soft Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-b from-[#8b75f2]/10 to-transparent pointer-events-none" />

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        {/* Editorial Hero Section */}
        <div className='max-w-4xl mb-24'>
          <h2 className='text-[#8b75f2] font-medium tracking-[0.2em] mb-4 uppercase text-sm'>Premium Copywriting</h2>
          <h1 className='text-6xl md:text-7xl font-serif font-bold mb-8 leading-tight'>
            Words that build <br /> 
            <span className='italic text-[#8b75f2]'>Authority & Trust.</span>
          </h1>
          <p className='text-xl text-gray-400 leading-relaxed max-w-2xl border-l-2 border-[#8b75f2] pl-6 italic'>
            "Content is the bridge between your brand and your audience. We build that bridge with precision, creativity, and strategic intent."
          </p>
        </div>

        {/* Video Feature - Editorial Style */}
        <div className='grid lg:grid-cols-5 gap-12 items-center mb-32'>
          <div className='lg:col-span-3 rounded-2xl overflow-hidden border border-white/10 shadow-2xl'>
             <video 
                src={contentVideo} 
                autoPlay loop muted playsInline 
                className="w-full h-full object-cover"
              />
          </div>
          <div className='lg:col-span-2 space-y-6'>
            <h3 className='text-3xl font-bold'>The Strategy Behind the Story</h3>
            <p className='text-gray-400 leading-relaxed'>
              We don't just fill pages with text. We conduct deep research into your target audience, 
              voice, and competitors to ensure every word serves a specific business goal.
            </p>
            <ul className='space-y-3'>
              {['In-depth Research', 'SEO Integration', 'Brand Voice Alignment', 'Unlimited Revisions'].map((item) => (
                <li key={item} className='flex items-center gap-3 text-sm'>
                  <CheckCircle2 className='w-4 h-4 text-[#8b75f2]' /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Content Type Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {contentTypes.map((type, i) => (
            <div key={i} className='group p-8 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500'>
              <div className='mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all'>
                {type.icon}
              </div>
              <h4 className='text-xl font-bold mb-4'>{type.title}</h4>
              <p className='text-gray-400 text-sm leading-relaxed'>{type.desc}</p>
            </div>
          ))}
        </div>

        {/* Testimonial/Quote Section */}
        <div className='mt-32 p-12 bg-white/[0.03] rounded-3xl border border-white/5 flex flex-col items-center text-center'>
            <Quote className='w-12 h-12 text-[#8b75f2] mb-6 opacity-50' />
            <p className='text-2xl font-light max-w-3xl mb-8 leading-relaxed'>
              "Their ability to capture our brand's unique voice was incredible. 
              Our blog traffic increased by 40% within the first three months."
            </p>
            <div className='font-bold uppercase tracking-widest text-sm'>— Marketing Director, TechFlow</div>
        </div>
      </div>
    </section>
  );
};

export default ContentWritingPage;
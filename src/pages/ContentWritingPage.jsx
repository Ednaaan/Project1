import React from 'react';
import { PenTool, BookOpen, FileText, Share2, Quote, ArrowRight } from 'lucide-react';
// Apni image import karein
import bentoImg from '../assets/ServicePagesPic/Content writing.webp'; 

const ContentWritingPage = () => {
  const contentTypes = [
    {
      title: "Blog & Article Writing",
      desc: "SEO-optimized long-form content that establishes your brand as an industry leader.",
      icon: <BookOpen className="w-6 h-6 text-[#8259DA]" />
    },
    {
      title: "Website Copywriting",
      desc: "Persuasive copy for landing pages that turns casual visitors into committed customers.",
      icon: <FileText className="w-6 h-6 text-[#8259DA]" />
    },
    {
      title: "Product Descriptions",
      desc: "Compelling narratives for your products that highlight benefits and drive sales.",
      icon: <PenTool className="w-6 h-6 text-[#8259DA]" />
    },
    {
      title: "Social Media Copy",
      desc: "Short, punchy, and shareable content tailored for every social platform.",
      icon: <Share2 className="w-6 h-6 text-[#8259DA]" />
    }
  ];

  return (
    <section className='bg-black text-white min-h-screen pt-32 pb-16 relative overflow-hidden'>
      
      {/* Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#8259DA]/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        
        {/* Editorial Hero Section */}
        <div className='grid lg:grid-cols-2 gap-16 items-center mb-32'>
          
          {/* LEFT CONTENT */}
          <div className='space-y-8'>
            <div>
              <h2 className='text-[#8259DA] font-bold uppercase tracking-[0.3em] text-xs mb-4 flex items-center gap-3'>
                <span className='w-8 h-[2px] bg-[#8259DA]'></span>
                Premium Copywriting
              </h2>
              <h1 className='text-5xl lg:text-7xl font-black leading-[1.05] tracking-tighter'>
                WORDS THAT BUILD <br /> 
                <span className='bg-gradient-to-r from-[#8259DA] to-purple-400 bg-clip-text text-transparent uppercase'>Authority & Trust</span>
              </h1>
            </div>
            
            <p className='text-gray-400 text-lg leading-relaxed max-w-lg italic border-l-2 border-[#8259DA] pl-6'>
              "Content is the bridge between your brand and your audience. We build that bridge with precision, creativity, and strategic intent."
            </p>

            <button className='px-10 py-4 bg-[#8259DA] text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(130,89,218,0.5)] transition-all active:scale-95 flex items-center gap-2 group'>
              Start Writing <ArrowRight className='group-hover:translate-x-1 transition-transform' />
            </button>
          </div>

          {/* RIGHT SIDE - Masked Image Showcase */}
          <div className='relative flex justify-center items-center'>
            {/* Animated Ring */}
            <div className='absolute w-[115%] h-[115%] border border-[#8259DA]/10 rounded-full animate-spin-slow pointer-events-none' />
            
            {/* Masked Container */}
            <div 
              className='relative w-full aspect-square max-w-[500px] bg-[#111] border border-white/10 p-2 shadow-2xl overflow-hidden'
              style={{
                borderRadius: '40px 180px 40px 40px', // Asymmetric Shape
              }}
            >
              <img 
                src={bentoImg} 
                alt="Editorial Writing" 
                className='w-full h-full object-cover opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-700'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent'></div>
              
              {/* Overlay Label */}
              {/* <div className='absolute inset-0 flex flex-col justify-end p-10'>
                  <p className='text-2xl font-black mb-1 italic'>Strategic Storytelling</p>
                  <p className='text-gray-400 text-sm'>Website Design Land Agency</p>
              </div> */}
            </div>
          </div>
        </div>

        {/* Content Type Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-16 border-t border-white/5'>
          {contentTypes.map((type, i) => (
            <div key={i} className='group p-8 rounded-[2rem] bg-[#0c0c0c] border border-white/5 hover:border-[#8259DA]/30 hover:bg-[#111] transition-all'>
              <div className='mb-6 p-4 bg-[#8259DA]/10 rounded-2xl w-fit group-hover:bg-[#8259DA] group-hover:text-white transition-all'>
                {type.icon}
              </div>
              <h4 className='text-xl font-bold mb-4 group-hover:text-[#8259DA] transition-colors'>{type.title}</h4>
              <p className='text-gray-500 text-sm leading-relaxed'>{type.desc}</p>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className='mt-24 p-12 bg-[#080808] rounded-[3rem] border border-white/5 flex flex-col items-center text-center relative overflow-hidden'>
           <div className='absolute top-0 left-0 w-full h-full bg-[#8259DA]/5 blur-3xl pointer-events-none' />
           <Quote className='w-12 h-12 text-[#8259DA] mb-6 opacity-40' />
           <p className='text-xl md:text-2xl font-medium max-w-3xl mb-8 leading-relaxed relative z-10'>
             "Their ability to capture our brand's unique voice was incredible. 
             Our blog traffic increased by 40% within the first three months."
           </p>
           <div className='font-bold uppercase tracking-[0.2em] text-xs text-[#8259DA]'>— Marketing Director, TechFlow</div>
        </div>
      </div>
    </section>
  );
};

export default ContentWritingPage;
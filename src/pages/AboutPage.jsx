import React from "react";
import { CheckCircle } from "lucide-react";
import ReviewSlider from "../Components/ReviewSlider";
import ClientSlider from "../Components/ClientSlider";
import ProcessSteps from "../Components/ProcessSteps";
import bentoImg from '../assets/seoImage.jpg'; 


const SlicedBento = ({ sliceClass, sliceStyle }) => (
 
  <div className='grid grid-cols-4 grid-rows-3 gap-2 md:gap-3 h-[300px] sm:h-[400px] lg:h-[450px] w-full'>
    <div className={`col-span-2 row-span-2 ${sliceClass}`} style={sliceStyle} />
    <div className={`col-span-2 row-span-1 ${sliceClass}`} style={sliceStyle} />
    <div className={`col-span-1 row-span-1 ${sliceClass}`} style={sliceStyle} />
    <div className={`col-span-1 row-span-1 ${sliceClass}`} style={sliceStyle} />
    <div className={`col-span-3 row-span-1 ${sliceClass}`} style={sliceStyle} />
    <div className={`col-span-1 row-span-1 ${sliceClass}`} style={sliceStyle} />
  </div>
);


const SectionLayout = ({ title, children, reverse = false, sliceClass, sliceStyle }) => (
  
  <section className="py-16 md:py-24 px-6 md:px-12 lg:px-28 border-b border-white/5 bg-black">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
    
      <div className={`${reverse ? "lg:order-last" : ""} text-center lg:text-left`}>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight text-white tracking-tight">
          {title}
        </h3>
        <div className="text-gray-400 text-base md:text-lg space-y-4 md:space-y-6 mb-8 md:mb-10 leading-relaxed">
          {children}
        </div>
        <button className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/20 rounded-full font-bold hover:bg-white hover:text-black transition-colors">
          Book Free Strategy Call Today
        </button>
      </div>
      <div className="w-full">
        <SlicedBento sliceClass={sliceClass} sliceStyle={sliceStyle} />
      </div>
    </div>
  </section>
);

const AboutPage = () => {
  
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const sliceStyle = {
    backgroundImage: `url(${bentoImg})`,
    backgroundAttachment: isMobile ? 'scroll' : 'fixed', 
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  const sliceClass = "rounded-xl md:rounded-2xl border border-white/10 bg-center";

  return (
    <div className="bg-black text-white overflow-x-hidden font-sans">
      
      
      <section className="pt-32 pb-20 md:pt-44 md:pb-28 px-6 bg-gradient-to-br from-black via-zinc-900 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-white via-purple-300 to-[#8259DA] bg-clip-text text-transparent tracking-tighter">
            Website Design Land
          </h1>
          <h2 className="text-lg md:text-2xl lg:text-3xl font-medium text-gray-300 mb-6 max-w-4xl mx-auto italic">
            "A Digital Marketing Company Built Around Real Business Growth"
          </h2>
          <p className="text-gray-400 text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-10 md:mb-12 px-2">
            Build your brand value with high-converting websites and AI-driven systems designed for clarity and enquiries.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-16 md:mb-20">
            <button className="group relative px-8 py-3 md:px-12 md:py-4 bg-transparent border border-white/20 rounded-full overflow-hidden transition-all active:scale-95">
                <span className="relative z-10 text-white font-bold text-sm md:text-base transition-colors group-hover:text-black">Book Free Strategy Call</span>
                <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            <button className="group relative px-8 py-3 md:px-12 md:py-4 bg-transparent border border-white/20 rounded-full overflow-hidden transition-all active:scale-95">
                <span className="relative z-10 text-white font-bold text-sm md:text-base transition-colors group-hover:text-black">See Our Portfolio</span>
                <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
          </div>
        </div>
      </section>

      
      <div className="w-full bg-purple-600/10 border-b border-t border-white/5 py-4 overflow-hidden mt-8 md:mt-12">
        <div className="animate-marquee flex gap-12 items-center">
          <div className="flex gap-12 items-center px-4 shrink-0">
            <span className="text-xl md:text-3xl font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-white via-white to-purple-500 bg-clip-text text-transparent">10+ years of Experience</span>
            <span className="text-white/20">|</span>
            <span className="text-xl md:text-3xl font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-white via-white to-purple-500 bg-clip-text text-transparent">95% Client Retention Rate</span>
            <span className="text-white/20">|</span>
            <span className="text-xl md:text-3xl font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-white via-white to-purple-500 bg-clip-text text-transparent">4.9/5★ Rated on Google</span>
          </div>
          
          <div className="flex gap-12 items-center px-4 shrink-0">
            <span className="text-xl md:text-3xl font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-white via-white to-purple-500 bg-clip-text text-transparent">10+ years of Experience</span>
            <span className="text-white/20">|</span>
            <span className="text-xl md:text-3xl font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-white via-white to-purple-500 bg-clip-text text-transparent">95% Client Retention Rate</span>
            <span className="text-white/20">|</span>
            <span className="text-xl md:text-3xl font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-white via-white to-purple-500 bg-clip-text text-transparent">4.9/5★ Rated on Google</span>
          </div>
        </div>
      </div>

     
      <SectionLayout title="How Website Design Land Began" sliceClass={sliceClass} sliceStyle={sliceStyle}>
        <p>Website Design Land was created after seeing a common problem across the digital marketing industry. Many businesses were investing time and money into marketing without truly understanding what they were getting in return. Traffic was increasing, but enquiries were not. Ads were running, but results felt unpredictable. Strategies sounded impressive but lacked clarity.
We saw businesses asking the same questions again and again:


</p>
        <p> Why isn’t my website converting?
 Why am I getting clicks but no calls?
 Why does digital marketing feel so complicated?</p>
      </SectionLayout>

      <SectionLayout title="Our Belief: Digital Marketing Should Be Clear and Measurable" reverse sliceClass={sliceClass} sliceStyle={sliceStyle}>
        <p>We believe digital marketing should never feel confusing. Business owners should understand what is happening, why it matters, and how it supports growth.
That belief shapes everything we do. Every digital marketing strategy we create is built around clarity, relevance, and performance. We focus on outcomes that matter to businesses, not vanity metrics that look good on reports but don’t move the needle.
Whether it’s SEO, paid advertising, or conversion optimisation, our role is to help businesses make informed decisions and see measurable progress.
</p>
      </SectionLayout>

      {/* --- REVIEWS --- */}
      <section className="py-20 px-6 md:px-12 lg:px-28 bg-[#050505]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 text-center lg:text-left">
            <h4 className="text-[#8259DA] font-bold uppercase tracking-widest text-xs md:text-sm mb-4">Client Love</h4>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">What Our Customers Say About Us</h3>
            <p className="text-gray-400 text-base md:text-lg">See how we've helped businesses transform their presence into a lead-generating asset.</p>
          </div>
          <div className="lg:col-span-7">
            <ReviewSlider />
          </div>
        </div>
      </section>

      <SectionLayout title="Who We Work With" sliceClass={sliceClass} sliceStyle={sliceStyle}>
        <p>We work with businesses that want to grow, improve, and build something sustainable online. Many of our clients come to us because they feel stuck, uncertain, or frustrated with previous marketing efforts.
Our clients typically want:
 More enquiries, not just more traffic
 Better use of their marketing budget
 Clear direction and honest advice
 A reliable digital marketing partner
We support service-based businesses, local companies, and growing brands across the UK, USA, Canada & India who want digital marketing for their business that feels practical and purposeful.
</p>
      </SectionLayout>

      <ClientSlider />

      
      <section className="py-20 px-6 md:px-12 lg:px-28">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h6 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Why Choose Website Design Land?</h6>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
          {[
            "10+ Years of Experience",
            "95% Client Retention Rate",
            "30+ Happy Customers",
            "4.9/5★ Rated on Google",
            "Marketing Built to Generate Enquiries, Not Just Traffic",
            "Data-Driven Decisions, Not Guesswork"
          ].map((item) => (
            <div key={item} className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl flex gap-4 items-center">
              <CheckCircle className="text-[#8259DA] shrink-0 w-5 h-5 md:w-6 h-6" />
              <span className="font-medium text-gray-200 text-sm md:text-base">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <ProcessSteps />

      
      <section className="py-28 px-6 text-center bg-zinc-950">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">Let’s Build Something That Lasts</h2>
        <p className="text-gray-500 px-4 py-0 mb-5">If you’re looking for digital marketing services that feel clear, honest, and results-focused, Website Design Land is here to help.
We work with businesses that want more than surface-level marketing. Businesses that want to build trust, generate enquiries, and grow online in a sustainable way.
When you’re ready to take the next step, we’re ready to guide you forward.
</p>
        <button className="group relative px-8 py-3 md:px-12 md:py-4 bg-transparent border border-white/20 rounded-full overflow-hidden transition-all active:scale-95">
                <span className="relative z-10 text-white font-bold text-sm md:text-base transition-colors group-hover:text-black">Book Free Strategy Call</span>
                <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
      </section>

    </div>
  );
};

export default AboutPage;
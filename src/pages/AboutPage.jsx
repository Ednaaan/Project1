import React from "react";
import { CheckCircle } from "lucide-react";
import ReviewSlider from "../Components/ReviewSlider";
import ClientSlider from "../Components/ClientSlider";
import ProcessSteps from "../Components/ProcessSteps";
import bentoImg from '../assets/seoImage.jpg'; 

// --- Sub-Component: Sliced Bento Grid (Responsive) ---
const SlicedBento = ({ sliceClass, sliceStyle }) => (
  /* Tablet aur Mobile ke liye height adjust ki gayi hai */
  <div className='grid grid-cols-4 grid-rows-3 gap-2 md:gap-3 h-[300px] sm:h-[400px] lg:h-[450px] w-full'>
    <div className={`col-span-2 row-span-2 ${sliceClass}`} style={sliceStyle} />
    <div className={`col-span-2 row-span-1 ${sliceClass}`} style={sliceStyle} />
    <div className={`col-span-1 row-span-1 ${sliceClass}`} style={sliceStyle} />
    <div className={`col-span-1 row-span-1 ${sliceClass}`} style={sliceStyle} />
    <div className={`col-span-3 row-span-1 ${sliceClass}`} style={sliceStyle} />
    <div className={`col-span-1 row-span-1 ${sliceClass}`} style={sliceStyle} />
  </div>
);

// --- Sub-Component: Reusable Section Layout (Responsive) ---
const SectionLayout = ({ title, children, reverse = false, sliceClass, sliceStyle }) => (
  /* md:px-12 aur lg:px-28 responsive padding add ki gayi hai */
  <section className="py-16 md:py-24 px-6 md:px-12 lg:px-28 border-b border-white/5 bg-black">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* lg:order-last tablet/desktop ke liye logic rakha hai */}
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
  // Mobile browsers background-attachment: fixed support nahi karte, isliye fallback
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
      
      {/* --- HERO SECTION --- */}
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
            <button className="w-full sm:w-auto px-10 py-4 bg-[#8259DA] rounded-full text-white font-bold">
              Book Free Strategy Call
            </button>
            <button className="w-full sm:w-auto px-10 py-4 border border-white/20 rounded-full font-bold hover:bg-white hover:text-black transition-all">
              See Our Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* --- MARQUEE --- */}
      <div className="w-full bg-[#8259DA]/5 border-y border-white/5 py-4 md:py-6 overflow-hidden">
        <div className="flex gap-8 md:gap-12 items-center whitespace-nowrap overflow-x-auto no-scrollbar justify-center px-4">
            <span className="text-sm md:text-xl lg:text-2xl font-bold uppercase tracking-[0.1em] md:tracking-[0.2em]">10+ Years Experience</span>
            <span className="text-[#8259DA]">•</span>
            <span className="text-sm md:text-xl lg:text-2xl font-bold uppercase tracking-[0.1em] md:tracking-[0.2em]">95% Retention Rate</span>
            <span className="text-[#8259DA]">•</span>
            <span className="text-sm md:text-xl lg:text-2xl font-bold uppercase tracking-[0.1em] md:tracking-[0.2em]">4.9/5 Google Rated</span>
        </div>
      </div>

      {/* --- CONTENT SECTIONS --- */}
      <SectionLayout title="How Website Design Land Began" sliceClass={sliceClass} sliceStyle={sliceStyle}>
        <p>In a crowded digital world, we saw businesses investing heavily without understanding the return. Traffic was up, but enquiries were not.</p>
        <p>We built this company to answer those problems with honesty and data-driven systems.</p>
      </SectionLayout>

      <SectionLayout title="Clear and Measurable Marketing" reverse sliceClass={sliceClass} sliceStyle={sliceStyle}>
        <p>We believe in outcomes that matter—not vanity metrics. Business owners should know exactly how their marketing budget supports growth.</p>
      </SectionLayout>

      {/* --- REVIEWS --- */}
      <section className="py-20 px-6 md:px-12 lg:px-28 bg-[#050505]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 text-center lg:text-left">
            <h4 className="text-[#8259DA] font-bold uppercase tracking-widest text-xs md:text-sm mb-4">Client Love</h4>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Real Reviews</h3>
            <p className="text-gray-400 text-base md:text-lg">See how we've helped businesses transform their presence into a lead-generating asset.</p>
          </div>
          <div className="lg:col-span-7">
            <ReviewSlider />
          </div>
        </div>
      </section>

      <SectionLayout title="Who We Work With" sliceClass={sliceClass} sliceStyle={sliceStyle}>
        <p>We work with businesses that want to grow, improve, and build something sustainable online across the UK, USA, Canada & India.</p>
      </SectionLayout>

      <ClientSlider />

      {/* --- WHY US GRID --- */}
      <section className="py-20 px-6 md:px-12 lg:px-28">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h6 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Why Choose Us?</h6>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
          {[
            "10+ Years of Experience",
            "95% Client Retention Rate",
            "Data-Driven Decisions",
            "AI Powered Marketing",
            "Focus on Enquiries",
            "Sustainable Growth"
          ].map((item) => (
            <div key={item} className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl flex gap-4 items-center">
              <CheckCircle className="text-[#8259DA] shrink-0 w-5 h-5 md:w-6 h-6" />
              <span className="font-medium text-gray-200 text-sm md:text-base">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <ProcessSteps />

      {/* --- FINAL CTA --- */}
      <section className="py-28 px-6 text-center bg-zinc-950">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">Ready to Scale?</h2>
        <button className="w-full sm:w-auto px-12 py-5 bg-[#8259DA] text-white font-bold rounded-full">
          Get Your Free Strategy Call
        </button>
      </section>

    </div>
  );
};

export default AboutPage;
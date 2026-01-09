import React from 'react'
import project1 from '../assets/project1.webp'
import project2 from '../assets/project2.webp'
import project3 from '../assets/project3.webp'
import project4 from '../assets/project4.webp'
import project5 from '../assets/project5.webp'

const RecentWork = () => {
  const projects = [
    { id: 1, src: project1, title: 'Bathroom Fitting' },
    { id: 2, src: project2, title: 'Removals Service' },
    { id: 3, src: project3, title: 'Beauty Clinic' },
    { id: 4, src: project4, title: 'Builder Services' },
    { id: 5, src: project5, title: 'Cleaning Services' },
  ];

  return (
    <div className='bg-black py-12 md:py-24 px-4 overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col items-center justify-center text-center  mb-16 px-4'>
            <h1 className='text-3xl md:text-5xl bg-gradient-to-r from-white via-purple-400 to-purple-600 bg-clip-text text-transparent font-bold leading-tight'>
                Our Recent Works
            </h1>
            <p className='text-gray-400 max-w-sm text-sm md:text-base'>
                Showcasing our latest digital transformations and high-performance web solutions.
            </p>
        </div>

        {/* Responsive Container */}
        {/* Mobile: Vertical Stack (Flex-Col) | Desktop: Horizontal Accordion (Flex-Row) */}
        <div className='flex flex-col md:flex-row w-full h-auto md:h-[550px] gap-4 md:gap-3'>
          {projects.map((p) => (
            <div 
              key={p.id} 
              className='
                relative 
                w-full h-[250px] md:h-full 
                flex-none md:flex-1 
                overflow-hidden rounded-2xl 
                border border-white/10 
                transition-all duration-700 ease-out 
                md:hover:flex-[5] 
                group cursor-pointer
              '
            >
              {/* Image */}
              <img 
                src={p.src} 
                alt={p.title} 
                className='absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110' 
              />
              
              {/* Overlay: Always slightly visible on mobile, clears on desktop hover */}
              <div className="absolute inset-0 bg-black/30 md:bg-black/50 md:group-hover:bg-transparent transition-all duration-500" />
              
              {/* Label: Always visible on mobile, fades in on desktop */}
              <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500">
                <p className='text-blue-400 text-[10px] md:text-xs uppercase tracking-widest mb-1'>View Project</p>
                <h2 className='text-white font-bold text-xl md:text-2xl'>{p.title}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className='text-center mt-12 md:mt-16'>
          <button className='group relative w-full md:w-auto px-12 py-5 bg-transparent border border-white/20 rounded-full overflow-hidden transition-all active:scale-95'>
            <span className='relative z-10 text-white font-bold text-sm md:text-base transition-colors group-hover:text-black uppercase'>
                Explore All Works
            </span>
            <div className='absolute inset-0 bg-white translate-y-[101%] md:group-hover:translate-y-0 transition-transform duration-300'></div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default RecentWork
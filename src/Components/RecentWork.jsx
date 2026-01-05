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
    <div className='bg-black py-16 px-4'>
      <h1 className='text-3xl text-white font-bold text-center mb-10'>Our Recent Works</h1>

      {/* Main Container */}
      <div className='flex flex-row w-full h-[550px] gap-3 max-w-6xl mx-auto'>
        {projects.map((p) => (
          <div 
            key={p.id} 
            className='relative flex-1 overflow-hidden rounded-xl border border-white/10 transition-all duration-700 ease-out hover:flex-[6] group cursor-pointer'
          >
            {/* Image: Anchored to top to show the 'Website Header' first */}
            <img 
              src={p.src} 
              alt={p.title} 
              className='absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105' 
            />
            
            {/* Dark Overlay that clears on hover */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all" />
            
            {/* Bottom Label */}
            <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <h2 className='text-white font-bold text-lg'>{p.title}</h2>
              <p className='text-blue-400 text-xs uppercase'>View Project</p>
            </div>
          </div>
        ))}
      </div>

      <div className='text-center mt-12'>
        <button className='group relative px-12 py-4 bg-transparent border border-white/20 rounded-full overflow-hidden'>
            <span className='relative z-10 text-white font-bold transition-colors group-hover:text-black'>EXPLORE ALL WORKS</span>
            <div className='absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300'></div>
          </button>
      </div>
    </div>
  )
}

export default RecentWork
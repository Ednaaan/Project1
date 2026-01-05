import React from 'react'
import project1 from '../assets/project1.webp'

const Project = () => {
  return (
    <section className='bg-black text-white py-24 px-6'>
        <div className=' max-w-7xl mx-auto mb-16'>
            <h2 className=' text-sm tracking-widest text-gray-400'>

                OUR WORK

            </h2>
        </div>
        <div className=' max-w-7xl mx-auto grid gap-16  md:grid-cols-2'>
            <div className='group cursor-pointer'>
                <div className='overflow-hidden h-64 md:h-80 lg:h-[420px]'>
                    <img src={project1} alt="Strategy&Consult" className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500'/>
                </div>
                <h3 className='mt-4 text-xl font-medium'>
                    Strategy&Consult

                </h3>
            </div>
        </div>
    </section>
  )
}

export default Project

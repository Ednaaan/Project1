import React from 'react'
import teamImg from '../assets/unnamed.jpg'

const Teams = () => {
    const teams = [
        {
            id:1,
            name: 'Shayan Tanveer',
            role: "Developer",
            image: teamImg,
            description: 'Description for Shayan Tanveer'
        },
        {
            id:2,
            name: 'Faizan Aziz',
            role: 'Developer',
            image: teamImg,
            description: 'Description for Faizan Aziz'
        },
        {
            id:3,
            name: 'Ansar Ahmed',
            role: 'Developer',
            image: teamImg,
            description: 'Description for Ansar Ahmed'
        },
        {
            id:4,
            name: 'Md Adnan Sohail',
            role: 'Developer',
            image: teamImg,
            description: 'Description for Md Adnan Sohail'
        }
    ]

  return (
    <div className='bg-black py-16'>
        <h1 className='text-5xl text-[#8259DA] text-center mb-12 font-bold'>Our Team Members</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto'>
            {teams.map((member) => (
                <div key={member.id} className='bg-black/20 backdrop-blur-md rounded-xl p-8 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-white/10 hover:border-blue-500' style={{ boxShadow: '0 0 40px rgba(255,255,255,0.3)' }}>
                    <div className='relative mb-6'>
                        <img src={member.image} alt={member.name} className='w-32 h-32 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500 border-4 border-gray-600' />
                        {/* <div className='absolute inset-0 rounded-full bg-blue-500 opacity-0 hover:opacity-20 transition-opacity duration-300'></div> */}
                    </div>
                    <h2 className='text-2xl text-white mb-3 font-semibold'>{member.name}</h2>
                    <p className='text-blue-400 mb-4 font-medium'>{member.role}</p>
                    <p className='text-gray-300 text-center leading-relaxed'>{member.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Teams


import React from 'react'
import contactImg from '../assets/named.jpg' 

const Contact = () => {
  return (
    <div className='bg-black py-16'>
      <div className='max-w-7xl mx-auto px-8'>
        <h1 className='text-5xl bg-gradient-to-r from-white via-purple-400 to-purple-600 bg-clip-text text-transparent text-center mb-12 font-bold'>Contact Us</h1>
        
        <div className='flex flex-col md:flex-row gap-12 items-center'>
          {/* Left Side: Image */}
          <div className='md:w-1/2'>
            <img 
              src={contactImg} 
              alt='Contact' 
              className='w-full h-96 object-cover rounded-xl shadow-lg' 
            />
          </div>
          
          {/* Right Side: Form */}
          <div className='md:w-1/2'>
            <div 
              className='bg-black/20 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white/10' 
              style={{ boxShadow: '0 0 40px rgba(255,255,255,0.3)' }}
            >
              <form className='space-y-6'>
                <div>
                  <label htmlFor='name' className='block text-white text-lg font-medium mb-2'>Name</label>
                  <input 
                    type='text' 
                    id='name' 
                    className='w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors' 
                    placeholder='Your Name' 
                  />
                </div>
                
                <div>
                  <label htmlFor='email' className='block text-white text-lg font-medium mb-2'>Email</label>
                  <input 
                    type='email' 
                    id='email' 
                    className='w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors' 
                    placeholder='your@email.com' 
                  />
                </div>
                
                <div>
                  <label htmlFor='message' className='block text-white text-lg font-medium mb-2'>Message</label>
                  <textarea 
                    id='message' 
                    rows='5' 
                    className='w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none' 
                    placeholder='Your message here...' 
                  ></textarea>
                </div>
                
                <button className='w-full group relative px-12 py-4 bg-transparent border border-white/20 rounded-full overflow-hidden'>
            <span className='relative z-10 text-white font-bold transition-colors group-hover:text-black'>Send Message</span>
            <div className='absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300'></div>
          </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

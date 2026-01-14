import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import teamImg from '../assets/unnamed.jpg';

gsap.registerPlugin(ScrollTrigger);

const Teams = () => {
    const mainRef = useRef(null); // Ref for the entire section

    const teams = [
        { id: 1, name: 'Shayan Tanveer', role: "Developer", image: teamImg, description: 'Expert in React and GSAP animations.' },
        { id: 2, name: 'Faizan Aziz', role: 'Developer', image: teamImg, description: 'Backend architect and systems specialist.' },
        { id: 3, name: 'Ansar Ahmed', role: 'Developer', image: teamImg, description: 'UI/UX enthusiast and frontend engineer.' },
        { id: 4, name: 'Md Adnan Sohail', role: 'Developer', image: teamImg, description: 'Full-stack wizard and cloud expert.' }
    ];

    useLayoutEffect(() => {
        // 1. Create a GSAP Context
        let ctx = gsap.context(() => {
            
            // Animation for the cards
            gsap.from(".team-card", {
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".team-grid",
                    start: "top 80%",
                    toggleActions: "play none none reverse", // Ensures it resets if you scroll back up
                }
            });

            // Subtle parallax for images
            gsap.utils.toArray('.member-img').forEach(img => {
                gsap.to(img, {
                    y: -20,
                    scrollTrigger: {
                        trigger: img,
                        scrub: true
                    }
                });
            });

        }, mainRef); // <- Scope all selectors to this ref

        // 2. Cleanup: This kills all animations and triggers automatically
        return () => ctx.revert(); 
    }, []);

    return (
        <div ref={mainRef} className='bg-[#050505] py-24 text-white overflow-hidden'>
            <div className='max-w-7xl mx-auto px-6'>
                <div className='mb-20'>
                    <h2 className='text-sm uppercase tracking-[0.3em] text-purple-500 font-bold mb-4'>Our Experts</h2>
                    <h1 className='text-5xl md:text-7xl font-bold tracking-tighter'>Meet the <span className='italic font-light text-gray-500'>Team.</span></h1>
                </div>

                <div className='team-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {teams.map((member) => (
                        <div key={member.id} className='team-card group relative overflow-hidden rounded-2xl bg-[#111] border border-white/5 hover:border-purple-500/50 transition-colors duration-500'>
                            
                            <div className='h-80 overflow-hidden relative group'> 
                                {/* Added 'group' to the parent if not already there to trigger child hover */}
                                <img 
                                    src={member.image} 
                                    alt={member.name} 
                                    className='member-img w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-110' 
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent pointer-events-none' />
                            </div>

                            {/* Content */}
                            <div className='p-6 relative -mt-16 bg-[#111]/90 backdrop-blur-md mx-4 mb-4 rounded-xl border border-white/5'>
                                <h3 className='text-xl font-bold'>{member.name}</h3>
                                <p className='text-purple-400 text-xs font-mono mb-3 uppercase tracking-widest'>{member.role}</p>
                                <p className='text-gray-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto transition-all duration-500 overflow-hidden'>
                                    {member.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Teams;
'use client'
import { workExperience } from '@/data'
import React from 'react'
import { MovingBorder, Button } from './ui/MovingBorder'

const Experience = () => {
 
    return (
        <div id='testimonials' className='py-20'>
            <h1 className='heading experince-heading'>
                My <span className="text-purple">work experience</span>
            </h1>
            <div className='w-full mt-20 grid md:grid-cols-4 grid-cols-1 gap-10'>
                {workExperience.map(card => (
                    <Button key={card.id}
                    className='flex-1 experince-cards text-white border-neutral-200 dark:border-slate-200'
                    duration={Math.floor(Math.random() * 50000)}
                    >
                        <div className='flex lg:flex-row flex-col items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                            <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-32 md:w-20 w-16'/>
                            <div className='lg:ms-5 '>
                                <h1 className='text-start text-xl md:text-2xl font-bold'>{card.title}</h1>
                                <p className='text-start text-white-100 mt-3 font-semibold'>{card.desc}</p>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default Experience
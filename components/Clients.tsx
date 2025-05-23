import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { testimonials, companies } from '@/data'

const Clients = () => {
    return (
        <div id='testimonials' className='py-20'>
            <h1 className='heading'>
                Kind word from {' '}
                <span className='text-purple'>Clients && firends</span>
            </h1>
            <div className='flex flex-col items-center mt-20 '>
                    <InfiniteMovingCards
                        items={testimonials}
                    
                        direction='right'
                        speed='slow'
                    />
            </div>
            {/* <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10'>
                {companies.map(({id,name,img,nameImg }) => (
                    <div key={id} className='flex md:max-w-60 max-w-32 gap-2 '>
                        <img src={img} alt={name} className='md:w-10 w-5'/>
                        <img src={nameImg} alt={name} className='md:w-24 w-20 '/>
                    </div>
                ))}
            </div> */}
        </div>
    )
}

export default Clients
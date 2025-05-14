'use client'
import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { FaLocationArrow } from "react-icons/fa6";

import { Spotlight } from './ui/Spotlight'
import MagicButton from './ui/MagicButton'

const Hero = () => {
    gsap.registerPlugin(useGSAP);
    useGSAP(() => {
        gsap.from('.hero-text-h1', {
            y: -100,
            opacity: 0,
            duration: 3,
        })

        gsap.from('.hero-text-h3', {
            x: -500,
            opacity: 0,
            duration: 3,
        })

        gsap.from('.hero-about-text', {
            x: 500,
            opacity: 0,
            duration: 3,
        })

        gsap.from('.hero-btn', {
            x: -500,
            opacity: 0,
            duration: 3,
        })
    })
    return (
        <div className='pb-20 pt-36 overflow-x-hidden'>
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="purple"
                />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
            </div>

            <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-black-100 absolute top-0 left-0">
                {/* Grid Background with fade on edges */}
                <div className="absolute inset-0 bg-grid-black/[0.05] dark:bg-grid-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)] [mask-repeat:no-repeat] [mask-size:100%_100%]" />

                {/* Radial Mask for overall container (optional for extra fade effect) */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
            </div>

            <div className='flex justify-center relative my-20 z-10'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <h1 className='hero-text-h1 uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                        Dynamic Web Magic with Next.js
                    </h1>
                    <h2 className='hero-text-h3 my-5 text-center text-[40px] md:text-5xl lg:text-6xl font-bold'>
                        Transforming Concepts into<br/> Seamless <span className='text-purple'>User Experiences</span>
                    </h2>
                    <p className="hero-about-text text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                        Hi! I&apos;m <span className='font-bold text-purple'>AliReza Azdast</span>, a full-stack Developer based in Iran.
                    </p>
                    <a href="#about" className='hero-btn'>
                        <MagicButton title="Show My Work"
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Hero
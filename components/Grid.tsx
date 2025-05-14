'use client'
import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data/index'

const Grid = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.from('.grid-box-iteams', {
      scrollTrigger: {
        trigger: '.grid-box-iteams',
        start: 'top 70%',
        end: 'bottom bottom',
      },
      x:600,
      opacity:0,
      duration:2,
    })
  })
  
  return (
    <section id='about'>
        <BentoGrid>
            {gridItems.map
            (({id, title,description,className,imgClassName,titleClassName,img,spareImg}) => (
                <BentoGridItem
                id={id}
                key={id}
                title={title}
                description={description}
                className={className}
                img={img}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                spareImg={spareImg}
              />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid
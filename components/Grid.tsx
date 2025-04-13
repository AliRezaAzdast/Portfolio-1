import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

const Grid = () => {
  return (
    <section id='about'>
        <BentoGrid>
            {[{title: 'title1', description:"bbb", id: 1}].map
            ((item , i) => (
                <BentoGridItem
                id={item.id}
                key={i}
                title={item.title}
                description={item.description}
  
              />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid
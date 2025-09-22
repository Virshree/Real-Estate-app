import React from 'react'

import { heroCardData } from '../services/heroCardData';
import HeroCard from './HeroCard';
function HeroSection() {
  return (
    <div className='flex text-center mt-10 mx-auto flex-col relative lg:block sm:mt-15 md:mt-14 '>
        <h3 className='text-[#1E3A8A] text-[35px]'>What we Do?</h3>
        <p className='text-[#555555] text-[20px] m-auto w-80'>Helping you find, buy, and rent the perfect property with ease.</p>
        <div className='flex flex-row m-auto flex-wrap p-2   '>
           

           {heroCardData.map((item,index)=>(
            <div className='mx-auto ' key={index}>
              <HeroCard img={item.img} title={item.title} description={item.description}/>
              </div>
           ))}
              
        </div>
    
    </div>
  )
}

export default HeroSection;
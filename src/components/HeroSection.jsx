import React from 'react'
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';
import { heroCardData } from '../services/heroCardData';
import HeroCard from './HeroCard';
function HeroSection() {
  return (
    <div className='flex text-center mt-10 m-auto flex-col'>
        <h3 className='text-[#1E3A8A] text-[35px]'>What we Do?</h3>
        <p className='text-[#555555] text-[20px] m-auto w-80'>Helping you find, buy, and rent the perfect property with ease.</p>
        <div className='flex flex-row m-auto flex-wrap p-2   '>
           

           {heroCardData.map((item,index)=>(
            <div key={index}>
              <HeroCard img={item.img} title={item.title} description={item.description}/>
              </div>
           ))}
              
        </div>
    
    </div>
  )
}

export default HeroSection;
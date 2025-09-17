import React from 'react'
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';
function Card() {
  return (
    <div className='flex text-center mt-10 m-auto flex-col'>
        <h3 className='text-[#1E3A8A] text-[35px]'>What we Do?</h3>
        <p className='text-[#555555] text-[20px] m-auto w-80'>Helping you find, buy, and rent the perfect property with ease.</p>
        <div className='flex flex-row m-auto flex-wrap p-2   '>
            <div className='bg-[#EEEEEE] text-black w-[300px] rounded-xl  m-5 p-6 h-[250px] gap-4'>
            <img src={card1} alt="logo" className='w-20 h-20   m-auto'/>
            <h3 className='leading-7 p-3 text-[25px]'>Buy & Sell Properties</h3>    
            <p className='text-[14px]'> Find verified homes for sale or list your property with ease.</p> 
            </div>

            <div className='bg-white shadow-xl  text-black w-[300px] rounded-xl m-5  p-6 h-[250px] gap-10'>
            <img src={card2} alt="logo" className='w-20 h-20 m-auto'/>
            <h3 className='leading-7 p-3 text-[28px]'>Find Rental Homes</h3>    
            <p className='text-[14px]'> Browse through thousands of rental options suited to your needs.</p> 
            </div>
            <div className='bg-[#EEEEEE] text-black w-[300px] rounded-xl m-5  p-6 h-[250px] gap-10'>
            <img src={card3} alt="logo" className='w-20 h-20 m-auto'/>
            <h3 className='leading-7 p-3 text-[25px]'>Smart AI Property Search</h3>    
            <p className='text-[14px]'> Get instant recommendations based on your budget & location.</p> 
            </div>
            <div className='bg-[#EEEEEE] text-black w-[300px] rounded-xl m-5 p-6 h-[250px] gap-10'>
            <img src={card4} alt="logo" className='w-20 h-20 m-auto'/>
            <h3 className='leading-7 p-3 text-[25px]'>Safe & Secure Transactions</h3>    
            <p className='text-[14px]'> Verified listings & secure deals to ensure a smooth experience.</p> 
            </div>
              
        </div>
    
    </div>
  )
}

export default Card
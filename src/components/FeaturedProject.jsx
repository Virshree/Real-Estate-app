import React from 'react'
import property1 from '../assets/property1.jpg';
import property2 from '../assets/property2.jpg';
import property3 from '../assets/property3.jpg';
import property4 from '../assets/property4.jpg';

function FeaturedProject() {


  return (
    <div className=' m-auto flex-col ' >
       <div className='ml-68 flex justify-between mr-65' >
       <h3 className='text-[#1E3A8A] text-[40px] font-bold '>Featured Projects</h3>
        <button className='border-4 border-[#1E3A8A] rounded-full p-2 w-[220px] '>See 268 New Projects</button>
       </div>
        
        <div className='flex flex-row ml-65 '>
            <img src={property1}alt="propertyImage" className='w-[650px] h-[470px] m-4'/>
            
            <img src={property2}alt="propertyImage" className='w-[307px] h-[478px] m-4'/>
            <div>
            <img src={property3}alt="propertyImage" className='w-[309px] h-[226px] m-4'/>
            <img src={property4}alt="propertyImage" className='w-[309px] h-[226px] m-4'/>
            </div>
      
        </div>
    </div>
  )
}

export default FeaturedProject
import React, { useContext } from 'react'
import property1 from '../assets/property1.jpg';
import property2 from '../assets/property2.jpg';
import property3 from '../assets/property3.jpg';
import property4 from '../assets/property4.jpg';
import { GlobalContext } from '../context/context';

function FeaturedProject() {

  const {properties}=useContext(GlobalContext);

  const filteredProperty=properties?.filter(item=>item.featured==true);
 

  return (
    <div className=' m-auto flex-col ' >
       <div className='ml-68 flex justify-between mr-65' >
       <h3 className='text-[#1E3A8A] text-[40px] font-bold '>Featured Projects</h3>
        <button className='border-4 border-[#1E3A8A] rounded-full p-2 w-[220px] '>See 268 New Projects</button>
       </div>
        
        <div className='flex flex-row ml-65 '>
    

            <img src={filteredProperty[0]?.propertyImage}alt="propertyImage" className='w-[650px] h-[470px] m-4'/>
            
            <img src={filteredProperty[1]?.propertyImage}alt="propertyImage" className='w-[307px] h-[478px] m-4'/>
            <div>
            <img src={filteredProperty[2]?.propertyImage}alt="propertyImage" className='w-[309px] h-[226px] m-4'/>
            <img src={filteredProperty[3]?.propertyImage}alt="propertyImage" className='w-[309px] h-[226px] m-4'/>
            </div>
      
        </div>
    </div>
  )
}

export default FeaturedProject
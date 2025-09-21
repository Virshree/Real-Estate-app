import React from 'react'

function HeroCard({img,title,description}) {
  return (
    
         <div className='bg-[#EEEEEE] cursor-pointer hover:border border-blue-500 shadow-xl   text-black w-[300px] rounded-xl  m-5 p-6 h-[250px] gap-4'>
            <img src={img} alt="logo" className='w-20 h-20   m-auto'/>
            <h3 className='leading-7 p-3 text-[25px]'>{title}</h3>    
            <p className='text-[14px]'> {description}.</p> 
        </div>
  )
}

export default HeroCard
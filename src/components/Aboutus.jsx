import React from 'react'
import client2 from '../assets/client2.jpg';
import client1 from '../assets/client1.jpg';
import budget from '../assets/budget.png';
import trust from '../assets/trust.png';
import prime from '../assets/prime.png';
function Aboutus() {
  return (
    <div className='ml-40 mr-20'>
             {/**Start your Journey Section */}
             <section id="aboutus" className="h-screen">
           <div className="ml-5 mt-10 ">
        
          <h3 className="text-[#1E3A8A] font-bold text-[32px] md:text-[40px]">
            Start Your Journey Today!
          </h3>
          <p className="text-[#555555] text-[16px] md:text-[20px] font-normal max-w-2xl">
            Create a profile in seconds and find your ideal home.
          </p>
          <div>
            <input
              className="border border-gray-200 w-[330px] m-2 p-2 text-gray-400 "
              placeholder="Enter your Name"
            />
            <select className="border border-gray-200 w-[330px] m-2 p-2 text-gray-400 ">
              <option>Select User Type</option>
            </select>
            <input
              className="border border-gray-200 w-[330px] m-2 p-2 text-gray-400 "
              placeholder="Enter your Location"
            />
            <button className="bg-[#1E3A8A] text-white w-[225px] h-[50px] rounded-full font-bold">
              Continue
            </button>
          </div>
        </div>

 {/* Latest Properties Section */}
<div className="flex flex-col lg:flex-row items-center  mt-30">
  {/* Images */}
  <div className="relative w-full lg:w-1/2 flex flex-col items-center">
    {/* Main image */}
    <img
      src={client2}
      alt="House 1"
      className="w-full max-w-[500px] rounded-lg border-4 border-white shadow-lg"
    />

    {/* Overlapping image (only overlaps on lg and above) */}
    <img
      src={client1}
      alt="House 2"
      className="w-full max-w-[400px] h-[405px]rounded-lg border-4 border-white shadow-lg mt-6
      lg:absolute lg:top-65 lg:left-65 lg:mt-0"
      
    />
  </div>

  {/* Text Content */}
  <div className="flex flex-col gap-9 lg:w-1/2">
    <h4 className="text-center lg:text-left text-[#1E3A8A] text-2xl sm:text-3xl md:text-4xl font-bold">
      We Provide Latest Properties For Our Valuable Clients
    </h4>

    {/* Feature 1 */}
    <div className="flex items-start gap-4">
      <img src={budget} alt="budget" className="w-10 h-10 sm:w-12 sm:h-12" />
      <div>
        <h4 className="text-[#1E3A8A] font-semibold text-lg sm:text-xl md:text-2xl">
          Budget Friendly
        </h4>
        <p className="text-sm sm:text-base md:text-lg text-black">
          Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean
          tempus. Lectus quis pretium varius iaculis sed.
        </p>
      </div>
    </div>

    {/* Feature 2 */}
    <div className="flex items-start gap-4">
      <img src={trust} alt="trust" className="w-10 h-10 sm:w-12 sm:h-12" />
      <div>
        <h4 className="text-[#1E3A8A] font-semibold text-lg sm:text-xl md:text-2xl">
          Trusted By Thousand
        </h4>
        <p className="text-sm sm:text-base md:text-lg text-black">
          Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean
          tempus. Lectus quis pretium varius iaculis sed.
        </p>
      </div>
    </div>

    {/* Feature 3 */}
    <div className="flex items-start gap-4">
      <img src={prime} alt="prime" className="w-10 h-10 sm:w-12 sm:h-12" />
      <div>
        <h4 className="text-[#1E3A8A] font-semibold text-lg sm:text-xl md:text-2xl">
          Prime Location
        </h4>
        <p className="text-sm sm:text-base md:text-lg text-black">
          Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean
          tempus. Lectus quis pretium varius iaculis sed.
        </p>
      </div>
    </div>
  </div>
</div>

         </section> 
    </div>
  )
}

export default Aboutus
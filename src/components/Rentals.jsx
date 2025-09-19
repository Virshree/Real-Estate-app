import React, { useContext, useState } from "react";

import client1 from "../assets/client1.jpg";
import client2 from "../assets/client2.jpg";
import budget from "../assets/budget.png";
import trust from "../assets/trust.png";
import prime from "../assets/prime.png";
import { GlobalContext } from "../context/context";
import PropertyCard from "./PropertyCard";

function Rentals() {
  const {properties}=useContext(GlobalContext);

  const[showAllRentals,setShowAllRentals]=useState(false);

  const filteredRentals=properties?.filter(item=>item?.AvailableForRent===true);
  
  const visibilePropertiesRentals=showAllRentals?filteredRentals:filteredRentals?.slice(0,4);
  return (
    <div className="max-w-[1440px] mx-auto px-4">
      {/* Header Section */}
      <div className=" flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          {/* Left side (title + description) */}
        <div>
          <h3 className="text-[#1E3A8A] text-2xl mt-5 md:text-4xl leading-snugtext-[#1E3A8A] font-bold text-[32px] md:text-[40px]">
            Find The Perfect Rental Home
          </h3>
          <p className="text-[#555555] text-base md:text-lg font-normal max-w-2xl mt-2">
            Browse our top-rated properties for sale, featuring premium listings
            tailored to your needs. Find your dream home today!
          </p>
        </div>
  {/* Right side (button) */}
        <button   onClick={()=>setShowAllRentals(!showAllRentals)}
        className=" cursor-pointer bg-[#1E3A8A] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-medium hover:bg-[#1A2F6D] transition">
{showAllRentals?"Show Less":"View More Rentals"}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6">
       
          {visibilePropertiesRentals?.map((item)=>(
           <PropertyCard key={item?.id} propertyImage={item?.propertyImage} city={item?.city} 
           country={item?.country} description={item?.description} rating={item?.rating} price={item?.price}/>
          ))}
        
       </div>
        
       

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
<div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
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
  <div className="flex flex-col gap-6 lg:w-1/2">
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
  );
}

export default Rentals;

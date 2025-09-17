import React, { useContext } from "react";
import rentals1 from "../assets/rentals1.jpg";
import rentals2 from "../assets/rentals2.jpg";
import rentals3 from "../assets/rentals3.jpg";
import rentals4 from "../assets/rentals4.jpg";
import client1 from "../assets/client1.jpg";
import client2 from "../assets/client2.jpg";
import budget from "../assets/budget.png";
import trust from "../assets/trust.png";
import prime from "../assets/prime.png";
import { GlobalContext } from "../context/context";
import PropertyCard from "./PropertyCard";

function Rentals() {
  const {properties}=useContext(GlobalContext);

  const filteredRentals=properties?.filter(item=>item?.AvailableForRent===true);
  console.log(filteredRentals)
  return (
    <div className="ml-68  mr-65 mt-5 ">
      <div className=" flex md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h3 className="text-[#1E3A8A] font-bold text-[32px] md:text-[40px]">
            Find The Perfect Rental Home
          </h3>
          <p className="text-[#555555] text-[16px] md:text-[20px] font-normal max-w-2xl">
            Browse our top-rated properties for sale, featuring premium listings
            tailored to your needs. Find your dream home today!
          </p>
        </div>

        <button className="  md:mt-0 bg-[#1E3A8A] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1A2F6D] transition">
          View all Rentals
        </button>
      </div>

      <div className="flex flex-wrap">
       
          {filteredRentals?.map((item)=>(
           <PropertyCard key={item?.id} propertyImage={item?.propertyImage} city={item?.city} 
           country={item?.country} description={item?.description} rating={item?.rating} price={item?.price}/>
          ))}
        
       
        
       

        {/**Start your Journey Section */}
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

        {/**Latest Properties Section*/}

        <div class="relative flex  gap-57 mt-10  ">
          <img
            src={client2}
            class="w-[510px] h-[513px] object-cover rounded-lg border-10 border-white"
          />
          <img
            src={client1}
            class="absolute top-45 left-65 w-[408px] h-[405px]  border-10 border-white shadow-lg"
          />

          <div className=" flex-wrap ">
            <h4 className="w-[659px] text-center  text-[#1E3A8A] text-[40px] font-bold ">
              We Provide Latest Properties For Our Valuable Clients
            </h4>
            <div className="flex flex-row mt-5 ml-15">
              <img src={budget} alt="budget" className="w-15 h-15" />
         
              <div className="flex flex-col ml-6 ">
                <h4 className="text-[#1E3A8A] font-semibold text-[28px] ">
                  Budget Friendly
                </h4>
                <p className="text-[18px] w-[440px] h-[81px] text-black">
                  Lorem ipsum dolor sit amet consectetur. Venenatis sed ac
                  aenean tempus. Lectus quis pretium varius iaculis sed.
                </p>
              </div>
              </div>
              <div className="flex flex-row mt-4 ml-15">
              <img src={trust} alt="budget" className="w-15 h-15" />
        
              <div className="flex flex-col ml-6 ">
                <h4 className="text-[#1E3A8A] font-semibold text-[28px] ">
                Trusted By Thausand
                </h4>
                <p className="text-[18px] w-[440px] h-[81px] text-black">
                  Lorem ipsum dolor sit amet consectetur. Venenatis sed ac
                  aenean tempus. Lec/tus quis pretium varius iaculis sed.
                </p>
              </div>
              </div>

              <div className="flex  flex-row mt-4 ml-15">
              <img src={prime} alt="budget" className="w-15 h-15" />
             
              <div className="flex flex-col ml-6">
                <h4 className="text-[#1E3A8A] font-semibold text-[28px] ">
                Prime Location
                </h4>
                <p className="text-[18px] w-[440px] h-[81px] text-black">
                  Lorem ipsum dolor sit amet consectetur. Venenatis sed ac
                  aenean tempus. Lectus quis pretium varius iaculis sed.
                </p>
              </div>
              </div>
        
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Rentals;

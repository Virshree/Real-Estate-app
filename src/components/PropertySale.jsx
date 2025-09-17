import React, { useContext, useEffect,useState } from "react";
import {propertyUrl} from '../services/api';
import locations from '../assets/locations.jpg';
import { GlobalContext } from "../context/context";
import PropertyCard from "./PropertyCard";

function PropertySale() {
  
  const {properties}=useContext(GlobalContext);

  const filteredSale=properties?.filter(item=>item.AvailableForRent==false)

  return (

<div className="ml-68  mr-65">
{/* Header section */}
<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
  <div>
    <h3 className="text-[#1E3A8A] font-bold text-[32px] md:text-[40px]">
      Best Properties Available For Sale
    </h3>
    <p className="text-[#555555] text-[16px] md:text-[20px] font-normal max-w-2xl">
      Browse our top-rated properties for sale, featuring premium listings
      tailored to your needs. Find your dream home today!
    </p>
  </div>

  <button className="mt-4 md:mt-0 bg-[#1E3A8A] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1A2F6D] transition">
    View More Properties
  </button>
</div>

{/* Cards section */}
<div className="flex flex-wrap gap-6">
  {filteredSale?.map((item)=>(
    <PropertyCard key={item.id} propertyImage={item?.propertyImage} city={item?.city} 
    country={item?.country} description={item?.description} rating={item?.rating} price={item?.price}/>
  ))}

</div>
</div>
  );
}

export default PropertySale;

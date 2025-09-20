import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/context";
import PropertyCard from "./PropertyCard";

function PropertySale() {
  const { properties } = useContext(GlobalContext);

  const [showAll,setShowAll]=useState(false);

  const filteredSale = properties?.filter(
    (item) => item.AvailableForRent === false
  );
  //show first 4 if not expanded
const visibileProperties=showAll?filteredSale:filteredSale?.slice(0,4);
  return (
    <div className="max-w-[1440px] mx-auto px-4">
     {/* Header Section */}
<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
  {/* Left side (title + description) */}
  <div>
    <h3 className="text-[#1E3A8A] font-bold text-2xl mt-5 md:text-4xl leading-snug">
      Best Properties Available For Sale
    </h3>
    <p className="text-[#555555] text-base md:text-lg font-normal max-w-2xl mt-2">
      Browse our top-rated properties for sale, featuring premium listings
      tailored to your needs. Find your dream home today!
    </p>
  </div>

  {/* Right side (button) */}
  <button onClick={()=>setShowAll(!showAll)} className="bg-[#1E3A8A] cursor-pointer text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-medium hover:bg-[#1A2F6D] transition">
   { showAll?"Show Less":"View More Properties"}
  </button>
</div>


      {/* Cards section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {visibileProperties?.map((item) => (
          <PropertyCard
            key={item.id}
            propertyImage={item?.propertyImage}
            countryCode={item?.countryCode}
            country={item?.country}
            description={item?.description}
            rating={item?.rating}
            price={item?.price}
            type={item?.type}
          />
        ))}
      </div>
    </div>
  );
}

export default PropertySale;

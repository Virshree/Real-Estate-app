  import React, { useContext, useState } from "react";

  import { GlobalContext } from "../context/context";
  import { Link, useLocation } from "react-router-dom";
  import PropertyCard from "../components/PropertyCard";
  function Listing() {
    const { properties } = useContext(GlobalContext);
    const [showAll,setShowAll]=useState(false);

    const location = useLocation();
    const { rentType, houseType, country } = location.state || {};

    const filteredProperties = properties?.filter((item) => {
      const matchRent =
        rentType === "rent"
          ? item.AvailableForRent
          : rentType === "sale"
          ? !item.AvailableForRent
          : true;

      const matchHouse = !houseType || item.type === houseType;
      const matchCountry = !country || item.country === country;

      return matchRent && matchHouse && matchCountry;
    });

    console.log(filteredProperties);
    const visibileProperties=showAll?filteredProperties:filteredProperties.slice(0,4);

    return (
      <div>
        <div className="mt-6 p-4">
          <Link to="/">
            <button className=" cursor-pointer flex items-center gap-2 rounded-full border px-4 py-2 text-base sm:text-lg hover:bg-gray-100 transition">
              <span className="text-2xl">&#8592;</span> Back to HomePage
            </button>
          </Link>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            <div>
              <h2 className="text-[#1E3A8A] font-bold text-2xl ml-7  mt-5 md:text-4xl leading-snug">
                {" "}
                Best Properties Available For{" "}
                {rentType == "sale" ? "Sale" : "Rent"}
              </h2>
              <p className="text-[#555555]  ml-7 text-base md:text-lg font-normal max-w-2xl mt-2">
                Browse our top-rated properties for sale, featuring premium
                listings tailored to your needs. Find your dream home today!
              </p>
            </div>
            <button onClick={()=>setShowAll(!showAll)} className=" cursor-pointer bg-[#1E3A8A] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-medium hover:bg-[#1A2F6D] transition">
              {showAll?"Show Less Properties":"View More Properties"}
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto  lg:grid-cols-3 xl:grid-cols-4 gap-6 m-4 md:ml-10">
            {visibileProperties?.length > 0 ? (
              visibileProperties.map((item) => (
                <PropertyCard
                  key={item.id}
                  propertyImage={item.propertyImage}
                  country={item.country}
                  countryCode={item?.countryCode}
                  price={item.price}
                  type={item.type}
                  rating={item.rating}
                  description={item.description}
                />
              ))
            ) : (
              <p className="text-center col-span-full">No properties found.</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  export default Listing;

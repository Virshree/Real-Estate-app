import React, { useContext } from "react";
import Rentals from "../components/Rentals";
import PropertySale from "../components/PropertySale";
import { GlobalContext } from "../context/context";
import { Link, useLocation } from "react-router-dom";
import PropertyCard from "../components/PropertyCard";
function Listing() {
  const { properties } = useContext(GlobalContext);
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
  return (
    <div>
      <div className="mt-6 p-4">
        <Link to="/">
          <button className=" cursor-pointer flex items-center gap-2 rounded-full border px-4 py-2 text-base sm:text-lg hover:bg-gray-100 transition">
            <span className="text-2xl">&#8592;</span> Back to HomePage
          </button>
        </Link>

        <h2 className="text-[#1E3A8A] font-bold text-2xl ml-7  mt-5 md:text-4xl leading-snug">
          {" "}
          Best Properties Available For {rentType == "sale" ? "Sale" : "Rent"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6 m-5">
          {filteredProperties?.length > 0 ? (
            filteredProperties.map((item) => (
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

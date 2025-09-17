import React from "react";
import locations from "../assets/locationIcon.png";

function PropertyCard({
  propertyImage,
  city,
  country,
  description,
  rating,
  price,
}) {
  return (
    <div
      className="bg-[#F1F1F1] text-black  w-[325px] h-[460px] m-2 p-2 rounded-xl"
    
    >
      <img
        src={propertyImage}
        alt="rentals"
        className="w-[300px] h-[200px] object-cover  rounded-2xl"
      />
      <div className="flex flex-row gap-15 mt-2 p-2">
        <div className="flex flex-row gap-4">
            <img src={locations} alt="locationicon" className="w-[20px] h-[26.5px]" />
            <p className="text-[#979797]">
              {city},{country}
            </p>
        </div>
        <p className="text-[#979797]"> ⭐ {rating}/5</p>
      </div>
      <p className="text-[#1E1E1E] w-[270px]">{description}</p>
      <div className="flex flex-row gap-15 mt-2 p-2">
        <button className="bg-[#1E3A8A] text-white w-[128px] h-[38.7px] rounded-full">
          Buy Now
        </button>
        <p className="text-[20px]   text-[#222222] font-normal ">
          ${price}/month
        </p>
      </div>
    </div>
  );
}

export default PropertyCard;

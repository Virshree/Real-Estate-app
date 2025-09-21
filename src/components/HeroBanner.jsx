import React, { useContext, useState } from "react";
import HomeImg from "../assets/homeImg.jpg";
import rent from "../assets/rent.png";
import home from "../assets/home.png";
import location from "../assets/location.png";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/context";

function HeroBanner() {
  const navigate = useNavigate();

  const [rentType, setRentType] = useState("rent");
  const [houseType, setHouseType] = useState("");
  const [country, setCountry] = useState("");

  const { properties } = useContext(GlobalContext);

  const countryName = properties
    ?.filter((item) => item?.country)
    .map((item) => item?.country);

  const handleFindProperty = () => {
    navigate("/listing", {
      state: {
        rentType,
        houseType,
        country,
      },
    });
  };

  return (
    <div className="relative w-full max-w-[1440px]  mx-auto text-center rounded-[24px]">
      {/* Background Image */}
      <img
        src={HomeImg}
        alt="HomeImage"
        className="w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[520px] rounded-3xl object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute top-4 left-0 w-full h-full flex flex-col items-center justify-center  ">
        <div className="w-full max-w-xl mx-auto">
          <h3 className="font-bold font-[Poppins] text-[30px]   text-white">
            Find Your Dream Home in One Click!
          </h3>
          <p className="text-[#EEEEEE] mt-2  font-normal text-xs  ">
            Discover, Buy, or Rent Verified Properties with Ease.
          </p>
        </div>
        
        {/* Search Input (Desktop only) */}
        <div className="relative hidden lg:block w-full max-w-md mt-6">
          <input
            type="text"
            placeholder="Search Location..."
            className="w-full pl-10 pr-12 py-3 border focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700 bg-white rounded-full placeholder-gray-400"
          />
          {/* Location Icon */}
          <span className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z" />
            </svg>
          </span>
          {/* Search Icon */}
          <span className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
            </svg>
          </span>
        </div>

        {/* List Property Button (Desktop only) */}
        <button className="mt-4 bg-white hidden lg:block shadow-md px-6 py-2 rounded-full text-sm sm:text-base font-medium hover:bg-gray-100">
          List Your Property
        </button>

        {/* Dropdowns + Find Button */}
        <div className="relative bg-white top-14 p-4 shadow-2xl  sm:rounded-xl ">
          <div className="flex flex-col md:flex-row gap-4">
            {/* For Rent Dropdown */}
            <div className="flex items-center gap-2 border h-12 border-gray-300 text-gray-700 text-base rounded-lg px-4 md:w-48">
              <img src={rent} alt="rent" className="w-5 h-5" />
              <select value={rentType} onChange={(e) => setRentType(e.target.value)} className="outline-none cursor-pointer w-full">
                <option value="rent">For Rent</option>
                <option value="sale">For Sale</option>
              </select>
            </div>
            {/* House Type Dropdown */}
            <div className="flex items-center gap-2 border h-12 border-gray-300 text-gray-700 text-base rounded-lg px-4 md:w-48">
              <img src={home} alt="home" className="w-5 h-5" />
              <select value={houseType} onChange={(e) => setHouseType(e.target.value)} className="outline-none cursor-pointer w-full">
                <option value="">All</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="studio">Studio</option>
              </select>
            </div>
            {/* Location Dropdown */}
            <div className="flex items-center gap-2 border h-12 border-gray-300 text-gray-700 text-base rounded-lg px-4 md:w-48">
              <img src={location} alt="location" className="w-5 h-5" />
              <select value={country} onChange={(e) => setCountry(e.target.value)} className="outline-none cursor-pointer w-full  bg-white text-gray-700">
                <option value="">All Countries</option>
                {countryName?.map((country, index) => (
                  <option key={index} value={country}>{country}</option>
                ))}
              </select>
            </div>
            {/* Find Property Button */}
            <div className="w-full md:flex-1">
              <button
                onClick={handleFindProperty}
                className="bg-[#1E3A8A] w-[320px] text-lg sm:text-xl text-white h-12 rounded-full hover:bg-[#162c6d] cursor-pointer transition"
              >
                Find Property
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;

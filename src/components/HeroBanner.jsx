import React, { useContext, useState } from "react";
import HomeImg from "../assets/homeImg.jpg";
import rent from "../assets/rent.png";
import home from "../assets/home.png";
import location from "../assets/location.png";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/context";

function HeroBanner() {
  const navigate = useNavigate();
  const { properties } = useContext(GlobalContext);

  const [rentType, setRentType] = useState("rent");
  const [houseType, setHouseType] = useState("");
  const [country, setCountry] = useState("");


  const countryName = [...new Set(
    properties?.filter((p) => p?.country).map((p) => p.country)
  )];

  const handleFindProperty = () => {
    navigate("/listing", { state: { rentType, houseType, country } });
  };

  return (
    <div className="relative w-full max-w-[1440px] mx-auto text-center rounded-[24px]   ">
      {/* Background Image */}
      <img
        src={HomeImg}
        alt="HomeImage"
        className="w-full h-[280px] sm:h-[320px] md:h-[420px] lg:h-[520px] rounded-3xl object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pb-6 sm:px-6 md:px-8">
        {/* Title */}
        <div className="w-full max-w-lg mx-auto">
          <h1 className="font-bold font-[Poppins] text-[24px] sm:text-[24px] md:text-[36px] text-white leading-snug">
            Find Your Dream Home in One Click!
          </h1>
          <p className="text-[#EEEEEE] mt-2 text-sm sm:text-base">
            Discover, Buy, or Rent Verified Properties with Ease.
          </p>
        </div>

        {/* Search Bar (Desktop only) */}
        <div className="relative hidden lg:block w-full max-w-md mt-6">
          <input
            type="text"
            placeholder="Search Location..."
            className="w-full pl-10 pr-12 py-3 border focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700 bg-white rounded-full placeholder-gray-400"
          />
          <span className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z" />
            </svg>
          </span>
          <span className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
            </svg>
          </span>
        </div>

        {/* List Property Button (Desktop only) */}
        <button className="mt-4 bg-white hidden lg:block shadow-md px-6 py-2 rounded-full text-base font-medium hover:bg-gray-100">
          List Your Property
        </button>

        {/* Dropdown Section */}
        <div className="relative bg-white top-33 shadow-lg p-4 mx-auto 
         rounded-xl z-20">
          <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:justify-between  ">
            {/* Rent Type */}
            <div className="flex items-center gap-2 border h-12 border-gray-300 text-gray-700 rounded-lg px-4 w-full md:w-[48%] lg:w-[23%]">
              <img src={rent} alt="rent" className="w-5 h-5" />
              <select
                value={rentType}
                onChange={(e) => setRentType(e.target.value)}
                className="outline-none cursor-pointer w-full bg-transparent"
              >
                <option value="rent">For Rent</option>
                <option value="sale">For Sale</option>
              </select>
            </div>

            {/* House Type */}
            <div className="flex items-center gap-2 border h-12 border-gray-300 text-gray-700 rounded-lg px-4 w-full md:w-[48%] lg:w-[23%]">
              <img src={home} alt="home" className="w-5 h-5" />
              <select
                value={houseType}
                onChange={(e) => setHouseType(e.target.value)}
                className="outline-none cursor-pointer w-full bg-transparent"
              >
                <option value="">All</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="studio">Studio</option>
              </select>
            </div>

            {/* Country */}
            <div className="flex items-center gap-2 border h-12 border-gray-300 text-gray-700 rounded-lg px-4 w-full md:w-[48%] lg:w-[23%]">
              <img src={location} alt="location" className="w-5 h-5" />
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="outline-none cursor-pointer w-full bg-transparent"
              >
                <option value="">All Countries</option>
                {countryName?.map((c, idx) => (
                  <option key={idx} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Find Button */}
            <div className="w-full md:w-[48%] lg:w-[23%]">
              <button
                onClick={handleFindProperty}
                className="bg-[#1E3A8A] w-full h-12 rounded-full text-white cursor-pointer text-base sm:text-lg hover:bg-[#162c6d] transition"
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

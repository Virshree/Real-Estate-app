import React from "react";
import HomeImg from "../assets/homeImg.jpg";
import rent from "../assets/rent.png";
import home from "../assets/home.png";
import location from "../assets/location.png";

function HeroBanner() {
  return (
    <div className="relative w-full max-w-[1440px] text-center m-auto  rounded-[30px] ">
      <img
        src={HomeImg}
        alt="HomeImage"
        className="w-[1334px] h-[520px] rounded-3xl m-auto"
      />
      <div className="w-full  absolute top-0 left-0">
        <h3 className="font-bold mt-10 font-[Poppins] text-5xl text-white">
          Find Your Dream Home in One Click!
        </h3>
        <p className="text-[#EEEEEE] mt-3 font-normal  text-[20px]">
          Discover, Buy, or Rent Verified Properties with Ease.
        </p>
        <div className="w-[480px] bg-white ml-30 mt-40  h-[45px]  rounded-2xl ">
          <div className="relative  ">
            <div className="w-full ">
              <div className="relative ">
                {/* <!-- Location Icon --> */}
                <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000//svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 22s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z"
                    />
                  </svg>
                </span>

                {/* <!-- Input Field -->/ */}
                <input
                  type="text"
                  placeholder="Search Location..."
                  className="w-full pl-10 pr-4 py-3 rounded-xl
             focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
             text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>

            {/* <!-- Search Icon --> */}
            <span className="absolute inset-y-0 right-4 mb-8 flex items-center text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                />
              </svg>
            </span>
            <button className="bg-white w-40 rounded-full p-2  mt-[-120px] ml-[980px]  ">
              List Your Property
            </button>
          </div>
        </div>

        <div className="relative bg-white w-[880px] m-auto mt-35 mb-5  h-18 p-4  shadow-2xl rounded-2xl ">
          <div className="flex flex-col md:flex-row gap-4 ">
            {/* <!-- For Rent Dropdown --> */}
            <div className="flex items-center gap-2 border h-12 border-gray-300 text-gray-700 text-base rounded-lg px-4 focus:outline-none md:w-48">
              <img src={rent} alt="rent" className="w-5 h-5" />
              <select className="outline-none cursor-pointer w-full">
                <option>For Rent</option>
                <option>For Sale</option>
              </select>
            </div>

            {/* <!-- House Type Dropdown --> */}
            <div className="flex items-center gap-2 border h-12 border-gray-300 text-gray-700 text-base rounded-lg px-4 focus:outline-none md:w-48">
              <img src={home} alt="home" className="w-5 h-5" />

              <select className="outline-none cursor-pointer w-full">
                <option>House</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Studio</option>
              </select>
            </div>

            {/* <!-- Location Dropdown --> */}
            <div class="flex items-center gap-2 border h-12 border-gray-300 text-gray-700 text-base rounded-lg px-4 focus:outline-none md:w-48">
              <img src={location} alt="home" className="w-5 h-5" />
              <select class="outline-none cursor-pointer w-full">
                <option>Indonesia</option>
                <option>India</option>
                <option>USA</option>
                <option>Canada</option>
              </select>
            </div>

            {/**Find Property Button */}
            <div className="w-full md:w-55 mb-5 ">
              <button className="bg-[#1E3A8A]  cursor-pointer  w-full text-2xl text-white h-[49px] rounded-full">
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

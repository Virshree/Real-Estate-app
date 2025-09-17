import React from "react";
import Frame7 from "../assets/Frame 7.png";

function Footer() {
  return (
    <div className="bg-[#1E3A8ACC] text-white  items-center  flex flex-col w-full h-full mt-40">
      <h2 className="font-bold text-[50px] leading-5 text-center w-[534px] h-[75px] mt-8 ">
        Get in Touch with Us
      </h2>
      <p className="text-[32px] leading-9 font-normal w-[515px] h-[86px] ml-13">
        Subscribe now for exclusive property insights and deals!
      </p>
      <div className="relative ">
        <input
          type="email"
          required
          placeholder="Enter your email"
          className="border border-gray-300 bg-[#D9D9D9] text-[#555555] w-[602px] h-[65px] leading-5 rounded-full p-7 m-2 text-xl"
        />
        <button className="bg-[#1E3A8A] cursor-pointer text-white  absolute top-1/2 right-2 -translate-y-1/2 w-[148px] h-[48px] rounded-full p-2">
          Submit
        </button>
      </div>
      <div className="flex justify-between gap-100  mt-10">
        <div>
          <div
            className="w-44 h-12 m-2 p-1  bg-white"
            style={{
              WebkitMaskImage: `url(${Frame7})`,
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              WebkitMaskSize: "contain",
              maskImage: `url(${Frame7})`, // for non-webkit browsers
              maskRepeat: "no-repeat",
              maskPosition: "center",
              maskSize: "contain",
            }}
          />
        </div>

        <div className="text-xl m-2 p-3">
          <span className="m-2">For Sale</span>
          <span className="m-2">Rentals</span>
          <span className="m-2 ">New Projects</span>
          <span className="m-2">Property News</span>
        </div>

        <p className="w-[378px] h-[43px] m-2 p-3 text-xl">
          @2025 Propbot. All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";
import Frame7 from "../assets/Frame 7.png";

function Footer() {
  return (
    <section id="contactus">

  
    <div className="bg-[#1E3A8ACC] text-white flex flex-col items-center w-full py-12 px-4 mt-40">
      {/* Heading */}
      <h2 className="font-bold text-2xl sm:text-3xl md:text-5xl text-center max-w-xl">
        Get in Touch with Us
      </h2>

      {/* Subtext */}
      <p className="text-base sm:text-lg md:text-2xl font-normal text-center mt-4 max-w-lg">
        Subscribe now for exclusive property insights and deals!
      </p>

      {/* Email input with button */}
      <div className="relative w-full max-w-2xl mt-6">
        <input
          type="email"
          required
          placeholder="Enter your email"
          className="border border-gray-300 bg-[#D9D9D9] text-[#555555] w-full h-14 rounded-full pl-6 pr-36 text-base sm:text-lg"
        />
        <button className="bg-[#1E3A8A] absolute top-1/2 right-2 cursor-pointer -translate-y-1/2 px-6 py-2 rounded-full font-medium hover:bg-[#1A2F6D] transition">
          Submit
        </button>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-16 mt-10 w-full max-w-6xl">
        {/* Logo */}
        <div
          className="w-36 h-12 bg-white"
          style={{
            WebkitMaskImage: `url(${Frame7})`,
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            WebkitMaskSize: "contain",
            maskImage: `url(${Frame7})`,
            maskRepeat: "no-repeat",
            maskPosition: "center",
            maskSize: "contain",
          }}
        />

        {/* Navigation links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base md:text-lg">
          <span className="cursor-pointer hover:text-gray-300">For Sale</span>
          <span className="cursor-pointer hover:text-gray-300">Rentals</span>
          <span className="cursor-pointer hover:text-gray-300">New Projects</span>
          <span className="cursor-pointer hover:text-gray-300">Property News</span>
        </div>

        {/* Copyright */}
        <p className="text-sm sm:text-base md:text-lg text-center">
          © 2025 Propbot. All rights reserved
        </p>
      </div>
    </div>
    </section>
  );
}

export default Footer;

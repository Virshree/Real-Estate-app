import React, { useContext } from "react";
import { GlobalContext } from "../context/context";

function FeaturedProject() {
  const { properties } = useContext(GlobalContext);

  const filteredProperty = properties?.filter((item) => item.featured === true);

  return (
    <div className="m-auto max-w-[1440px] px-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h3 className="text-[#1E3A8A] text-2xl md:text-4xl font-bold">
          Featured Projects
        </h3>
        <button className="border-2 border-[#1E3A8A] rounded-full px-6 py-2 text-sm md:text-base hover:bg-[#1E3A8A] hover:text-white transition">
          See 268 New Projects
        </button>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Big image - takes 2 columns on larger screens */}
        <div className="lg:col-span-2">
          <img
            src={filteredProperty[0]?.propertyImage}
            alt="propertyImage"
            className="w-full h-[250px] md:h-[350px] lg:h-[470px] object-cover rounded-xl"
          />
        </div>

        {/* Tall image */}
        <div>
          <img
            src={filteredProperty[1]?.propertyImage}
            alt="propertyImage"
            className="w-full h-[250px] md:h-[350px] lg:h-[478px] object-cover rounded-xl"
          />
        </div>

        {/* Two stacked images */}
        <div className="flex flex-col gap-4">
          <img
            src={filteredProperty[2]?.propertyImage}
            alt="propertyImage"
            className="w-full h-[120px] md:h-[170px] lg:h-[226px] object-cover rounded-xl"
          />
          <img
            src={filteredProperty[3]?.propertyImage}
            alt="propertyImage"
            className="w-full h-[120px] md:h-[170px] lg:h-[226px] object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default FeaturedProject;

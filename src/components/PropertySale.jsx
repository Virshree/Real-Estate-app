import React, { useEffect,useState } from "react";
import {propertyUrl} from '../services/api';
import locations from '../assets/locations.jpg';

function PropertySale() {
  
  const [properties, setProperties] = useState([]);

  async function fetchPropertyList() {
    try {
      const response = await fetch(propertyUrl);
      const result = await response.json();
      setProperties(result);
      console.log("Fetched result:", result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  useEffect(() => {
    fetchPropertyList();
  }, []);
  
  return (
//     <div className="flex ">/
//       <div className="ml-68 flex-col justify-between mr-65">
//         <h3 className="text-[#1E3A8A] font-bold text-[40px]">
//           Best Properties Available For Sale
//         </h3>
//         <p className="text-[#555555] text-[20px] font-normal w-[750px]">
//           Browse our top-rated properties for sale, featuring premium listings
//           tailored to your needs. Find your dream home today!
//         </p>
    
     
//       </div>
//       <button className="bg-[#1E3A8A] text-white w-[250px] h-[58px] rounded-full">
//         View More Properties{" "}
//       </button>


//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
//   {properties?.map((item, index) => (
//     <div
//       key={index}
//       className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
//     >
//       <img
//         src={item.image}
//         alt={item.title || "property"}
//         className="w-full h-48 object-cover"
//       />

//       <div className="p-4">
//         <h2 className="text-lg font-semibold text-gray-800">
//           {item.title || "Property Title"}
//         </h2>
//         <p className="text-sm text-gray-500">{item.location || "Location"}</p>
//         <p className="mt-2 text-indigo-600 font-bold">
//           ${item.price || "N/A"}
//         </p>
//       </div>
//     </div>
//   ))}
// </div>

//     </div>
<div className="ml-68  mr-65">
{/* Header section */}
<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
  <div>
    <h3 className="text-[#1E3A8A] font-bold text-[32px] md:text-[40px]">
      Best Properties Available For Sale
    </h3>
    <p className="text-[#555555] text-[16px] md:text-[20px] font-normal max-w-2xl">
      Browse our top-rated properties for sale, featuring premium listings
      tailored to your needs. Find your dream home today!
    </p>
  </div>

  <button className="mt-4 md:mt-0 bg-[#1E3A8A] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1A2F6D] transition">
    View More Properties
  </button>
</div>

{/* Cards section */}
<div className="flex flex-wrap gap-6">
  {properties?.map((item, index) => (
    <div
      key={index}
      className="w-[370px]  sm:w-1/2 md:w-1/3 lg:w-1/4 bg-[#f8f8f8] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <img
        src={item?.propertyImage 
        ||"https://fastly.picsum.photos/id/492/1187/320.jpg?hmac=El-q68PwlGl4Z4QHexVMppiWzmKtEh66KE-Q-L7In88"}
        alt={item.name || "property"}
        className="w-full h-48 object-cover"
      />

      <div className="p-3">
        <div className="flex  ">
        <img src={locations} alt="locationicon" className="w-5 h-5"/>
        <h2 className="text-[18px] text-[#979797]">
      
                   {item.country}, {item.state}
        </h2>

          <div>
            <p className="text-[#979797] ml-10 ">⭐ {item.rating}/5</p>
            </div>
          </div>
       
        <p className="text-sm text-gray-500">
          {item.description|| "description"}
        </p>
        <div className="flex flex-row gap-15 mt-2 p-2">
            <button className="bg-[#1E3A8A] text-white w-[128px] h-[38.7px] rounded-full">
              Buy Now
            </button>
            <p>${item.price}</p>
          </div>
        
      </div>
    </div>
  ))}
</div>
</div>
  );
}

export default PropertySale;

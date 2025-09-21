import React from 'react';
import client2 from '../assets/client2.jpg';
import client1 from '../assets/client1.jpg';
import budget from '../assets/budget.png';
import trust from '../assets/trust.png';
import prime from '../assets/prime.png';

function Aboutus() {
  return (
    <div className="px-3 sm:px-8 lg:px-20 xl:px-40 max-w-[1440px] mx-auto">
      {/** Start your Journey Section */}
      <section id="aboutus" className="py-8 sm:py-12 md:py-16">
        <div className="mt-4 sm:mt-10">
          <h3 className="text-[#1E3A8A] font-bold text-2xl sm:text-3xl md:text-[40px]">
            Start Your Journey Today!
          </h3>
          <p className="text-[#555555] text-base sm:text-lg md:text-[20px] font-normal max-w-2xl">
            Create a profile in seconds and find your ideal home.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 flex-wrap mt-5">
            <input
              className="border border-gray-200 w-full sm:w-auto sm:min-w-[220px] p-2 text-gray-400 rounded-md"
              placeholder="Enter your Name"
            />
            <select className="border border-gray-200 w-full sm:w-auto sm:min-w-[220px] p-2 text-gray-400 rounded-md">
              <option>Select User Type</option>
            </select>
            <input
              className="border border-gray-200 w-full sm:w-auto sm:min-w-[220px] p-2 text-gray-400 rounded-md"
              placeholder="Enter your Location"
            />
            <button className="bg-[#1E3A8A] mt-2 sm:mt-0 text-white w-full sm:w-auto px-5 h-[50px] rounded-full font-bold hover:bg-[#162c6d] transition">
              Continue
            </button>
          </div>
        </div>
        
        {/* Latest Properties Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mt-12">
          {/* Images */}
          <div className="relative w-full lg:w-1/2 flex flex-col items-center mb-8 lg:mb-0">
            <img
              src={client2}
              alt="House 1"
              className="w-full max-w-md rounded-lg border-4 border-white shadow-lg"
            />
            <img
              src={client1}
              alt="House 2"
              className="absolute hidden lg:block left-1/2 top-1/2 translate-x-10 -translate-y-14 w-[220px] h-[220px] rounded-lg border-4 border-white shadow-lg"
            />
            <img
              src={client1}
              alt="House 2 (mobile)"
              className="block lg:hidden w-full max-w-[300px] rounded-lg border-4 border-white shadow-lg mt-6"
            />
          </div>
          {/* Text Content */}
          <div className="flex flex-col gap-8 justify-center lg:w-1/2 px-2">
            <h4 className="text-center lg:text-left text-[#1E3A8A] text-2xl sm:text-3xl md:text-4xl font-bold">
              We Provide Latest Properties For Our Valuable Clients
            </h4>
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <img src={budget} alt="budget" className="w-10 h-10 sm:w-12 sm:h-12" />
              <div>
                <h4 className="text-[#1E3A8A] font-semibold text-lg sm:text-xl md:text-2xl">
                  Budget Friendly
                </h4>
                <p className="text-sm sm:text-base md:text-lg text-black">
                  Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean tempus. Lectus quis pretium varius iaculis sed.
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <img src={trust} alt="trust" className="w-10 h-10 sm:w-12 sm:h-12" />
              <div>
                <h4 className="text-[#1E3A8A] font-semibold text-lg sm:text-xl md:text-2xl">
                  Trusted By Thousand
                </h4>
                <p className="text-sm sm:text-base md:text-lg text-black">
                  Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean tempus. Lectus quis pretium varius iaculis sed.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <img src={prime} alt="prime" className="w-10 h-10 sm:w-12 sm:h-12" />
              <div>
                <h4 className="text-[#1E3A8A] font-semibold text-lg sm:text-xl md:text-2xl">
                  Prime Location
                </h4>
                <p className="text-sm sm:text-base md:text-lg text-black">
                  Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean tempus. Lectus quis pretium varius iaculis sed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutus;

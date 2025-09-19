import React, { useContext, useState } from "react";
import Frame7 from "../assets/Frame 7.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebaseConfig";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const {user} = useContext(AuthContext);
  const navigate=useNavigate();

  const handleLogout=async()=>{
    await signOut(auth);
    navigate("/login");

  }
  return (
    <nav className="flex items-center justify-between px-4 py-3 ">
      {/* Logo */}
      <img src={Frame7} alt="logo" className="w-[176px] h-[40.8px]" />

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <span className="cursor-pointer hover:text-blue-500 hover:underline">
          Home
        </span>
        <span className="cursor-pointer hover:text-blue-500 hover:underline">
          Buy
        </span>
        <span className="cursor-pointer hover:text-blue-500 hover:underline">
          Rent
        </span>
        <span className="cursor-pointer hover:text-blue-500 hover:underline">
          Sell
        </span>
        
       
        <a href="#aboutus" className="cursor-pointer hover:text-blue-500 hover:underline">
          About Us
        </a>
      
        <a href="#contactus" className="cursor-pointer hover:text-blue-500 hover:underline">
          Contact Us
        </a>
      </div>

      {/* Login Button */}
      <div className="hidden md:block">
            {user? <>
              
              <button  onClick={handleLogout} className="bg-[#1E3A8A] cursor-pointer text-white rounded-full px-6 py-2 text-[16px] flex items-center gap-2 hover:bg-blue-900 transition">
              {user.displayName || user.email.split("@")[0]} Logout
            <span className="text-lg border border-white rounded-full px-2">
              &#8594;
            </span>
          </button>
            </>:<>  <button     onClick={() => navigate("/login")} className="bg-[#1E3A8A] text-white  cursor-pointer rounded-full px-6 py-2 text-[16px] flex items-center gap-2 hover:bg-blue-900 transition">
            Login/Register
            <span className="text-lg border border-white rounded-full px-2">
              &#8594;
            </span>
          </button></>}
         
        
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 z-50">
          <span className="cursor-pointer hover:text-blue-500">Home</span>
          <span className="cursor-pointer hover:text-blue-500">Buy</span>
          <span className="cursor-pointer hover:text-blue-500">Rent</span>
          <span className="cursor-pointer hover:text-blue-500">Sell</span>
          <span className="cursor-pointer hover:text-blue-500">About Us</span>
          <span className="cursor-pointer hover:text-blue-500">Contact Us</span>
          <Link to="/login">
            <button className="bg-[#1E3A8A] text-white rounded-full px-6 py-2 text-[16px] flex items-center gap-2 hover:bg-blue-900 transition">
              Login/Register
              <span className="text-lg border border-white rounded-full px-2">
                &#8594;
              </span>
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

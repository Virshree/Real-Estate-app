import React, { useState } from "react";
import { Link } from "react-router-dom";
import passwordicon from "../assets/passwordicon.png";
import emailIcon from "../assets/emailIcon.jpg";
import Image from "../assets/Image1.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebaseConfig";
import { toast } from "react-hot-toast";

function Signup({ showLogin, setShowLogin }) {

  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[passwordInput,setPasswordInput]=useState("");
  const[confirmPassword,setConfirmPassword]=useState("");


  // 👁️ state for toggles
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

const handleSignup=async(e)=>{
e.preventDefault();
if(passwordInput!=confirmPassword){
  toast.error("Password do not match");
  return;
}
try{
  await createUserWithEmailAndPassword(auth,email,passwordInput);
  toast.success("Account created successfully 🎉");
  setShowLogin(true);

}
catch(err){
  toast.error(err.message)
} 
}

  return (
    <div className="px-4 py-8 sm:px-6 md:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Form Section */}
        <div className="w-full max-w-md lg:max-w-lg">
          <h3 className="font-bold text-2xl sm:text-3xl text-center mb-6">
            Create new account
          </h3>

          {/* Name */}
          <form onSubmit={handleSignup}>
          <label className="text-sm sm:text-base font-medium">Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="w-full h-12 sm:h-14 rounded-2xl border border-gray-400 pl-4 pr-12 text-gray-700 text-base sm:text-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Your Full Name"
          />

          {/* Email */}
          <label className="text-sm sm:text-base font-medium">Email</label>
          <div className="relative mb-4">
            <input
              type="email"
              required
              value={email}
            onChange={(e)=>setEmail(e.target.value)}
              className="w-full h-12 sm:h-14 rounded-2xl border border-gray-400 pl-4 pr-12 text-gray-700 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Your Email Id"
            />
            <img
              src={emailIcon}
              alt="icon"
              className="absolute top-1/2 right-4 -translate-y-1/2 w-5 h-5"
            />
          </div>

          {/* Password */}
          <label className="text-sm sm:text-base font-medium">Password</label>
          <div className="relative mb-4">
            <input
              type={showPassword?"text":"password"}
              required
              value={passwordInput}
            onChange={(e)=>setPasswordInput(e.target.value)}
              className="w-full h-12 sm:h-14 rounded-2xl border border-gray-400 pl-4 pr-12 text-gray-700 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Your Password"
            />
            <img
              src={passwordicon}
              alt="icon"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-4 -translate-y-1/2 w-5 h-5 cursor-pointer"
            />
          </div>

          {/* Confirm Password */}
          <label className="text-sm sm:text-base font-medium">Confirm Password</label>
          <div className="relative mb-6">
            <input
              type={showConfirm?"text":"password"}
              required
              value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
              className="w-full h-12 sm:h-14 rounded-2xl border border-gray-400 pl-4 pr-12 text-gray-700 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm Your Password"
            />
            <img
              src={passwordicon}
              alt="icon"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute top-1/2 right-4 -translate-y-1/2 w-5 h-5 cursor-pointer"
            />
          </div>

          {/* Button */}
          <button  type="submit" className="w-full bg-[#1E3A8A] text-white font-medium text-lg sm:text-xl h-12 sm:h-14 cursor-pointer rounded-full hover:bg-[#162c6d] transition">
            Create Account
          </button>
          </form>
          {/* Switch to Login */}
          <p className="text-center mt-5 text-gray-600 text-sm sm:text-base">
            Already have an account?{" "}
            <span
              className="text-[#1E3A8A] cursor-pointer font-medium"
              onClick={() => setShowLogin(!showLogin)}
            >
              Log In
            </span>
          </p>
        </div>

        {/* Right Image */}
        <div className="hidden lg:block lg:flex-1">
          {showLogin && (
            <img
              src={Image}
              alt="signup"
              className="w-full h-auto rounded-3xl object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Signup;

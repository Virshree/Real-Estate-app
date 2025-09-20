import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Frame7 from "../assets/Frame 7.png";
import Signup from "./Signup";
import Image from "../assets/Image1.png";
import google from "../assets/googleIcon.png";
import facebook from "../assets/facebookIcon.png";
import apple from "../assets/appleIcon.png";
import passwordicon from "../assets/passwordicon.png";
import emailIcon from "../assets/emailIcon.jpg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebaseConfig";
import { toast } from "react-hot-toast";

function Login() {
  const [showLogin, setShowLogin] = useState(true);
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  const[showPassword,setShowPassword]=useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // ✅ track login status


  const navigate=useNavigate();

  const handleLogin=async(e)=>{
    e.preventDefault();

    try{
    
      const userCrediental=  await signInWithEmailAndPassword(auth,email,password);
      const user=userCrediental.user
      toast.success(`Welcome ${user.displayName || user.email}  🎉`);
      setIsLoggedIn(true);
      //save login state
      navigate("/") //navigate to home page after login.

    }
    catch(err){
      toast.error(err.message);
    }
  }
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8 p-4 shadow-lg">
        <Link to="/">
          <button  disabled={!isLoggedIn} className=" cursor-pointer flex items-center gap-2 rounded-full border px-4 py-2 text-base sm:text-lg hover:bg-gray-100 transition">
            <span className="text-2xl">&#8592;</span> Back to HomePage
          </button>
        </Link>
        <img src={Frame7} alt="logo" className="w-[176px] h-[40.8px]" />
        <button className="flex items-center gap-2 bg-[#1E3A8A] text-white px-4 py-2 rounded-full hover:bg-[#162c6d] transition">
          About Us <span className="text-2xl">&#8594;</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-8 p-4 lg:p-10">
        {/* Form Section */}
        <div className="w-full max-w-md lg:max-w-lg">
          {showLogin ? (
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-2xl sm:text-3xl text-center cursor-pointer">
                Log In
              </h3>

              {/* Email */}
              <form onSubmit={handleLogin}>
              <label className="text-sm sm:text-base font-medium">Email</label>
              <div className="relative">
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
              <label className="text-sm sm:text-base font-medium mt-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword?"password":"text"}
                  required
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  className="w-full h-12 sm:h-14 rounded-2xl border border-gray-400 pl-4 pr-12 text-gray-700 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Your Password"
                />
                <img
                  src={passwordicon}
                  alt="icon"
                  onClick={()=>setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-4 -translate-y-1/2 w-5 h-5 cursor-pointer"
                />
              </div>

              {/* Remember & Forgot */}
              <div className="flex justify-between items-center mt-2 text-sm sm:text-base">
                <label className="flex items-center gap-1">
                  <input type="checkbox" className="w-4 h-4" /> Remember Me
                </label>
                <span className="text-red-600 cursor-pointer">Forgot Password?</span>
              </div>

              {/* Login Button */}
              <button  type="submit" className="w-full bg-[#1E3A8A] text-white font-medium text-lg sm:text-xl h-12 sm:h-14 rounded-full mt-4 hover:bg-[#162c6d] transition">
                Log In
              </button>
              </form>
              {/* OR Divider */}
              <div className="flex items-center mt-4">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="px-2 text-gray-500 text-sm sm:text-base">
                  OR CONTINUE WITH
                </span>
                <div className="flex-grow border-t border-gray-400"></div>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center gap-4 mt-4">
                <img src={apple} alt="Apple" className="w-12 h-12 cursor-pointer" />
                <img src={facebook} alt="Facebook" className="w-12 h-12 cursor-pointer" />
                <img src={google} alt="Google" className="w-12 h-12 cursor-pointer" />
              </div>

              {/* Switch to Signup */}
              <p className="text-center mt-4 text-gray-600 text-sm sm:text-base">
                Doesn’t have an account?{" "}
                <span
                  className="text-[#1E3A8A] cursor-pointer font-medium"
                  onClick={() => setShowLogin(false)}
                >
                  Create One
                </span>
              </p>
            </div>
          ) : (
            <Signup showLogin={showLogin} setShowLogin={setShowLogin} />
          )}
        </div>

        {/* Right Image */}
        <div className="hidden lg:block lg:flex-1 ">
          <img
            src={Image}
            alt="Login Visual"
            className="w-[945px] h-[738px] rounded-3xl ml-20 object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;

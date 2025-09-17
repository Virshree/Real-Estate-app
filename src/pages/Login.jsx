import React, { useState } from "react";
import Frame7 from "../assets/Frame 7.png";
import { Link } from "react-router-dom";
import Signup from "./Signup";
import Image from "../assets/Image1.png";
import google from '../assets/googleIcon.png';
import facebook from '../assets/facebookIcon.png';
import apple from '../assets/appleIcon.png';

function Login() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="m-3 ">
      <div className="flex justify-between gap-12 shadow-lg ">
        <Link to="/">
          <button className="rounded-full border w-[242px] h-[47px] p-2 cursor-pointer">
            <span className="text-2xl  border border-black  rounded-full ">
              {" "}
              &#8592;
            </span>{" "}
            Back to HomePage
          </button>
        </Link>
        <img
          src={Frame7}
          alt="logo"
          className="w-44 h-10 m-2 p-1 top-9 left-13 gap-8"
        />
        <button className="bg-[#1E3A8A] text-white w-[150px] h-[47px] cursor-pointer rounded-full p-2">
          About Us{" "}
          <span className="text-2xl  border border-white rounded-full ">
            &#8594;
          </span>{" "}
        </button>
      </div>

      <div className="flex ml-20 gap-20">
        {isLogin ? (
          <>
            <div className="mt-5 p-2 flex flex-col">
              <h3 className="font-bold text-[34px] w-[353px] h-[51px] text-center  ml-20 ">
                Create new account
              </h3>
         
          <label className="ml-3 text-[18px] font-medium w-[55px]">
                Email
              </label>
              <input
                type="email"
                required
                className=" rounded-2xl border border-black w-[453px] h-[59px] text-[#7A7A7A] m-2 p-2 text-xl "
                placeholder="Enter Your Email Id"
              />
  
             
              <label className="ml-3 text-[18px] font-medium w-[55px]">
                Password
              </label>
              <input
                type="password"
                required
                className=" rounded-2xl border border-black w-[453px] h-[59px] text-[#7A7A7A] m-2 p-2 text-xl "
                placeholder="Enter Your Password"
              />
 <div className="flex   mt-2 justify-between">
                <div><input type="checkbox" className="w-4 h-4 rounded m-2" />
                <label className="text-[#454343] text-sm">Remember Me</label></div>
                
                <div>
                  <p className="text-[#A81212] text-sm">Forgot Password?</p>
                </div>
              </div>
              <button className="bg-[#1E3A8A] text-white  w-[417px] ml-6 font-medium text-[24px] h-[62px] mt-5 p-2 rounded-full">
                Log In
              </button>

              <div className="flex items-center mt-6 ml-12 w-full max-w-sm">
  <div className="flex-grow border-t border-gray-400"></div>
  <p className="px-3 text-[12px] text-[#454343]">OR CONTINUE WITH</p>
  <div className="flex-grow border-t border-gray-400"></div>
</div>
<div className="flex flex-row ml-37 mt-7 gap-5">
  <img src={apple} alt="icon" className="w-[60px] h-[60px] cursor-pointer"/>
  <img src={facebook} alt="icon" className="w-[60px] h-[60px] cursor-pointer "/>
  <img src={google} alt="icon" className="w-[60px] h-[60px] cursor-pointer "/>
</div>
<p className="ml-15 mt-5 text-[#454343] text-[16px]">
  Doesn’t have an account?{" "}
  <span
    className="text-[#1E3A8A] cursor-pointer text-md font-medium"
    onClick={() => setIsLogin(!isLogin)}
  >
    Create One
  </span>
</p>

            </div>
          </>
        ) : (
          <>
            {" "}
            <Signup isLogin={isLogin} setIsLogin={setIsLogin} />
          </>
        )}
        <div>
          <img
            src={Image}
            alt="image"
            className="w-[945px] h-[738px] mt-4 rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;

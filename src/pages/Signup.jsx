import React from "react";
import { Link } from "react-router-dom";
// import Frame7 from "../assets/Frame 7.png";
import Image from '../assets/Image1.png';
function Signup({isLogin,setIsLogin}) {
  return (
    <div className="m-3  ">
      {/* <div className='flex justify-between gap-12 shadow-lg '>
        <Link to="/">
        <button className='rounded-full border w-[242px] h-[47px] p-2 cursor-pointer'><span className="text-2xl  border border-black  rounded-full "> &#8592;</span>{" "} Back to HomePage</button>
        </Link>
        <img
        src={Frame7}
        alt="logo"
        className="w-44 h-10 m-2 p-1 top-9 left-13 gap-8"
      />
      <button className='bg-[#1E3A8A] text-white w-[150px] h-[47px] cursor-pointer rounded-full p-2'>About Us <span className="text-2xl  border border-white rounded-full ">&#8594;</span>{" "}</button>
        </div> */}

      {/**Signup form -Create new account */}
      <div className="flex  ">
        <div className="mt-5 p-2 flex flex-col">
          <h3 className="font-bold text-[34px] w-[353px] h-[51px] text-center  ml-20 ">
            Create new account
          </h3>
          <label className="ml-3 text-[18px] font-medium w-[55px]">Name</label>
          <input
            type="name"
            required
            className=" rounded-2xl border border-black w-[453px] text-[#7A7A7A] h-[59px] m-2 p-2 text-xl "
            placeholder="Enter Your Full Name"
          />

          <label className="ml-3 text-[18px] font-medium w-[55px]">Email</label>
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

          <label className="ml-3 text-[18px] font-medium w-[55px]">
            Confirm Password
          </label>
          <input
            type="password"
            required
            className=" rounded-2xl border border-black w-[453px] h-[59px]  text-[#7A7A7A] m-2 p-2 text-xl "
            placeholder="Confirm Your Password"
          />

          <button className="bg-[#1E3A8A] text-white  w-[417px] ml-6 font-medium text-[24px] h-[62px] mt-5 p-2 rounded-full">
            Create Account
          </button>
          <p className="ml-18 w-[264px] h-[11px] mt-5 p-2 text-[#454343] text-[16px]">
            Already have an account?{" "}
            <span className="text-[#1E3A8A] cursor-pointer" onClick={()=>setIsLogin(!isLogin)}>Log In</span>
          </p>
        </div>
        <div>
         {isLogin && <img src={Image} alt="image" className="w-[945px] h-[738px] mt-4 rounded-3xl"/> }
        </div>
      </div>
    </div>
  );
}

export default Signup;

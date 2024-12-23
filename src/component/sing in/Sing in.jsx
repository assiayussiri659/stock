import React from "react";
import { MdOutlineEmail } from "react-icons/md";
const Singin = () => {
    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
      {/* <div className="relative">
          <img
            src="stock1.png"
            alt="img"
            className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
          />
          
          <div className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block">
           
          </div>
        </div> */}
        {/* left side */}
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold text-primary text-blue-700">Welcome back <span><img src="stock-market-logo.png" alt="" className="w-6 h-6 inline mr-6" /></span></span>
          <span className="font-light text-gray-400 mb-8">
            Welcome back! Please enter your <span className="text-blue-700"> Details </span>
          </span>
          <form>
            <div className="py-4">
              <span className="mb-2 text-md">Email </span>
              <MdOutlineEmail />
              <input 
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="email"
                id="email"
              />
            </div>
            <div className="py-4">
              <span className="mb-2 text-md">Password</span>
              <input
                type="password"
                name="pass"
                id="pass"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              />
            </div>
            <div className="flex justify-between w-full py-4">
              <div className="mr-24">
                <input type="checkbox" name="ch" id="ch" className="mr-2" />
                <span className="text-md">Remember for 30 days</span>
              </div>
              <span className="font-bold text-md">Forgot password</span>
            </div>
            <button
              className="w-full bg-blue-700 text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
            >
              Sign in
            </button>
          </form>
          <button
            className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-blue-700 hover:text-white"
          >
            <img src="google.png" alt="img" className="w-6 h-6 inline mr-6" />
            Sign in with Google
          </button>
         
          <div className="text-center text-gray-400">
            Don't have an account?
            <a
              href="/signup"
              className="font-bold text-black cursor-pointer"
            >
              Sign up for free
            </a>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Singin;
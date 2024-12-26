import React from "react";
const Singin = () => {
    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
      <div className="hidden md:flex flex-col items-center justify-center bg-gray-50 p-8 ">
          <img
            src="SEO.png"
            alt="Charts"
            className="mb-4 w-64"
          />
          <h2 className="text-2xl font-semibold text-gray-700">Current Balance</h2>
          <p className="text-4xl font-bold text-blue-700">$24,359</p>
          <div className="mt-8 w-64 h-64 bg-gray-100 flex items-center justify-center rounded-full">
            <p className="text-lg font-semibold text-blue-700">34% Food</p>
          </div>
        </div>
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold text-primary text-blue-700">Welcome back! <span><img src="stock-market-logo.png" alt="" className="w-7 h-7 inline mr-6 bg-blue-700 rounded-sm" /></span></span>
          <span className="font-light text-gray-400 mb-8">
            Welcome back! Unlock the Secrets to Smart  <span className="text-blue-700"> Trading</span>
          </span>
          <form>
            <div className="py-4">
              <span className="mb-2 text-md">Email</span>
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
                <input type="checkbox" name="ch" id="ch" className="mr-2"/>
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
          <div className="flex space-x-4">
            <button className="flex-1 bg-white border border-gray-300 rounded-md p-3 flex items-center justify-center hover:bg-gray-100">
              <img src="google.png" alt="Google" className="w-6 h-6 inline mr-6" />
              Google
            </button>
            <button className="flex-1 bg-white border border-gray-300 rounded-md p-3 flex items-center justify-center hover:bg-gray-100">
              <img src="facebook.png" alt="Facebook" className="w-6 h-6 inline mr-6" />
              Facebook
            </button>
          </div>
          <div className="text-center text-gray-400 mt-6">
            Don't have an account ?
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


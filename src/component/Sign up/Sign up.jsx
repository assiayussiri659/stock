import React from "react";


const Signup = () => {
    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
          <div className="flex flex-col justify-center p-8 md:p-14">
            <span className="mb-3 text-4xl font-bold text-primary text-blue-700">Create Account <span><img src="stock-market-logo.png" alt="" className="w-7 h-7 inline mr-6 bg-blue-700 rounded-sm" /></span></span>
            <span className="font-light text-gray-400 mb-8">
              Sign up with your details to create a <span className="text-blue-700"> new account</span>
            </span>
            <form>
              <div className="py-4" >
                <span className="mb-2 text-md" >Full Name</span>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  name="name"
                />
              </div>
              <div className="py-4">
                <span className="mb-2 text-md">Email</span>
                <input
                  type="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
              </div>
              <div className="py-4">
                <span className="mb-2 text-md">Password</span>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
              </div>
              <button type='submit'
                className="w-full  bg-blue-700 text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
              >
                Sign up
              </button>
            </form>
            <div className="text-center text-gray-400">
              Already have an account?
              <a href="/" className="font-bold text-black"> Sign in</a>
            </div>
          </div>
          {/* <div className="relative">
            <img
              src="stock.jpg"
              alt="img"
              className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
            />
            <div className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block">
            </div>
          </div> */}
        </div>
      </div>
    )
}


export default Signup;
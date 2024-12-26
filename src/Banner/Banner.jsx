import React from "react";
import { FaApple } from "react-icons/fa";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

function Banner() {
  const cart = [
    {
      name: "Apple",
      brandIcons: <FaApple className="w-8 h-8 text-gray-800" />, 
      totalReturn: "-1.10%",
      arrow: "down",
      graph: "stock-market-logo.png",
    },
    {
      name: "Google",
      brandIcons: <img src="google.png" alt=""  className="w-8 h-8"/>,
      totalReturn: "+0.04%",
      arrow: "up",
      graph: "stock-market-logo.png",
    },
    {
      name: "Facebook",
      brandIcons: <img src="facebook.png" alt="" className="w-8 h-8"/>, 
      totalReturn: "-0.10%",
      arrow: "down",
      graph: "stock-market-logo.png",
    },
    {
      name: "Microsoft",
      brandIcons:  <img src="microsoft.png" alt="" className="w-8 h-8"/> ,
      totalReturn: "+0.85%",
      arrow: "up",
      graph: "stock-market-logo.png",
    },
  ];

  return (
  
    <div className="min-h-screen bg-gray-200 flex items-start justify-center pt-10 rounded-xl">
      <div className="flex flex-wrap gap-10 w-full max-w-4xl">
        {cart.map((data, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-4 shadow-lg w-48 h-40 flex flex-col justify-between"
          >
            <div className="flex items-center gap-3">
              {data.brandIcons}
              <span className="text-black text-lg font-medium">{data.name}</span>
              <img
                src={data.graph}
                alt={`${data.name} Stock Graph`}
                className="w-12 h-8 ml-auto"
              />
            </div>
            <div className="mt-2">
              <h2 className="text-sm text-gray-600 font-medium">Balance:</h2>
              <p className="text-blue-700 font-bold text-lg">$24,359</p>
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
              <span>Total Return:</span>
              <span
                className={`font-bold ${
                  data.arrow === "down" ? "text-red-500" : "text-green-500"
                }`}
              >
                {data.totalReturn}
              </span>
              {data.arrow === "down" ? (
                <FaArrowDown className="text-red-500 w-4 h-4" />
              ) : (
                <FaArrowUp className="text-green-500 w-4 h-4" />
              )}
            </div>
          </div>
        ))}
        <div className='flex flex-wrap gap-10 w-full max-w-4xl'>
            <div className='bg-white rounded-xl p-4 shadow-lg w-96 h-40 flex flex-col justify-between'>
            </div>
        </div>
          <div className="bg-white rounded-xl p-4 shadow-lg w-96 h-40 flex flex-col justify-between">

          </div>
      </div>
    </div>
  );
}

export default Banner;

import React from "react";
import { FaApple } from "react-icons/fa";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { BarChart } from '@mui/x-charts/BarChart';
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
      brandIcons: <img src="google.png" alt="" className="w-8 h-8" />,
      totalReturn: "+0.04%",
      arrow: "up",
      graph: "stock-market-logo.png",
    },
    {
      name: "Facebook",
      brandIcons: <img src="facebook.png" alt="" className="w-8 h-8" />,
      totalReturn: "-0.10%",
      arrow: "down",
      graph: "stock-market-logo.png",
    },
    {
      name: "Microsoft",
      brandIcons: <img src="microsoft.png" alt="" className="w-8 h-8" />,
      totalReturn: "+0.85%",
      arrow: "up",
      graph: "stock-market-logo.png",
    },
  ];

  const stocks = [
    { name: "Spotify", ticker: "SPOT", price: "$310,40", change: "-1,10%", logo: "paypal.png", isPositive: false },
    { name: "Airbnb", ticker: "ABNB", price: "$132,72", change: "-10,29%", logo: "playstation.png", isPositive: false },
    { name: "Shopify", ticker: "SHOP", price: "$28,57", change: "-6,48%", logo: "shopify.png", isPositive: false },
    { name: "Playstation", ticker: "SONY", price: "$71,86", change: "+0,98%", logo: "spotify.png", isPositive: true },
    { name: "Dropbox Inc", ticker: "DBX", price: "$20,44", change: "-3,08%", logo: "google.png", isPositive: false },
    { name: "Paypal", ticker: "PYPL", price: "$87,66", change: "-3,86%", logo: "airbnb.png", isPositive: false },
  ];

  return (

    <div className="min-h-screen bg-slate-200 flex items-start justify-center pt-10 rounded-xl">
      <div className="flex flex-wrap gap-10 w-full max-w-4xl justify-center md:justify-start">
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
                className={`font-bold ${data.arrow === "down" ? "text-red-500" : "text-green-500"}`}
              >
                {data.totalReturn}
              </span>
              {data.arrow === "down" ? (
                <FaArrowDown className="text-red-500 w-4 h-4"/>
              ) : (
                <FaArrowUp className="text-green-500 w-4 h-4"/>
              )}
            </div>
          </div>
        ))}
        <div className="bg-white rounded-xl p-4 shadow-lg w-80 col-span-1 sm:col-span-2 lg:col-span-4">
        <div className="flex justify-between items-center mb-4">
            <h2  className="text-xl font-semibold"> <FaApple className="w-8 h-8 text-gray-800" />Apple inc</h2>
            <p className="text-blue-700 font-bold text-lg">$24,359</p>
          </div>
          <BarChart
            series={[
              { data: [35, 44, 24, 34] },
              { data: [51, 6, 49, 30] },
              { data: [15, 25, 30, 50] },
              { data: [60, 50, 15, 25] },
            ]}
            height={290}
            xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
          />
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 w-64">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">My Watchlist</h2>
            <button className="text-blue-500 font-bold text-lg">+</button>
          </div>
          <ul>
            {stocks.map((stock, index) => (
              <li
                key={index}
                className="flex items-center justify-between py-2 border-b last:border-b-0"
              >
                <div className="flex items-center">
                  <img
                    src={stock.logo}
                    alt={stock.name}
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium">{stock.ticker}</p>
                    <p className="text-sm text-gray-500">{stock.name}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{stock.price}</p>
                  <p
                    className={`text-sm ${stock.isPositive ? "text-green-500" : "text-red-500"
                      }`}
                  >
                    {stock.change}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 w-60">
        <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Portfolio</h2>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

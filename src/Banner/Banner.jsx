import React from 'react'
import Navbar from '../Dashboard/navbar/Navbar';

function Banner() {
  return (
    <>
    <div className='flex p-1 justify-center space-x-10 w-full'>
    <div className="mt-4 h-32 w-96 p-1">
        <img 
            src="stock-market-img.jpg" 
            alt="Stock Market Banner" 
            className="w-full h-auto"
        />
    </div>
    </div>
    <Navbar/>
    </>
  )
}

export default Banner;
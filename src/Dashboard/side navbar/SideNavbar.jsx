import React from 'react';
import { BiAlignJustify } from "react-icons/bi";
function SideNavbar() {
    return (
      <>
        <div className="hidden md:flex h-screen w-64 bg-gray-100 p-5 flex-col justify-between shadow-2xl">
            <div>
                <div className="text-2xl font-bold mb-8 flex items-center gap-2">
                    <img src="stock-market-logo.png" className="w-7 h-7 " alt="Logo" />
                    <span className='m-5 text-blue-700' >Stock Market</span> 
                    <button className='p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100'>
                    <BiAlignJustify className='text-blue-700' />
                    </button>
                </div>
                <div className="bg-gradient-to-r from-blue-400 to-blue-700 text-white rounded-lg p-4 mb-8">
                    <p className="text-sm">Total Investment</p>
                    <h2 className="text-2xl font-bold">$5380.90</h2>
                    <p className="text-xs mt-2">+18.10%</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default SideNavbar;

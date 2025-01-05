import React from 'react';
import { BiAlignJustify } from "react-icons/bi";
import { AiOutlinePieChart, AiOutlineStock, AiOutlineSetting } from "react-icons/ai";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoHome } from "react-icons/io5";
import { FaWallet } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoCall } from "react-icons/io5";

function SideNavbar() {
    return (
        <>
            <div className="hidden md:flex h-screen w-64 bg-gray-100 p-5 flex-col justify-between shadow-2xl rounded-2xl">
                <div>
                    <div className="text-2xl font-bold mb-8 flex items-center gap-2">
                        <img src="stock-market-logo.png" className="w-7 h-7" alt="Logo" />
                        <span className='m-5 text-blue-700'>Stock Market</span>
                        <button className='p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100'>
                            <BiAlignJustify className='text-blue-700' />
                        </button>
                    </div>
                    <div className="bg-gradient-to-r from-blue-400 to-blue-700 text-white rounded-lg p-4 mb-8">
                        <p className="text-sm">Total Investment</p>
                        <h2 className="text-2xl font-bold">$5380.90</h2>
                        <p className="text-xs mt-2">+18.10%</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-100 cursor-pointer">
                            <IoHome className="text-blue-700 text-xl group-hover:animate-bounce" />
                            <span className="text-gray-700 text-sm font-medium">Home</span>
                        </div>
                        <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-100 cursor-pointer">
                            <LuLayoutDashboard className="text-blue-700 text-xl" />
                            <span className="text-gray-700 text-sm font-medium">Dashboard</span>
                        </div>
                        <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-100 cursor-pointer">
                            <FaWallet className="text-blue-700 text-xl" />
                            <span className="text-gray-700 text-sm font-medium">Wallet</span>
                        </div>
                        <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-100 cursor-pointer">
                            <IoNewspaperOutline className="text-blue-700 text-xl" />
                            <span className="text-gray-700 text-sm font-medium">News</span>
                        </div>
                        <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-100 cursor-pointer">
                            <AiOutlinePieChart className="text-blue-700 text-xl" />
                            <span className="text-gray-700 text-sm font-medium">Reports</span>
                        </div>
                        <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-100 cursor-pointer">
                            <AiOutlineStock className="text-blue-700 text-xl" />
                            <span className="text-gray-700 text-sm font-medium">Investments</span>
                        </div>
                        <div className=' border-b text-blue-300'></div>
                        <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-100 cursor-pointer">
                            <AiOutlineSetting className="text-blue-700 text-xl" />
                            <span className="text-gray-700 text-sm font-medium">Settings</span>
                            <p className='bg-red-600 h-5 w-5 flex items-center justify-center rounded-full text-white text-xs font-bold'>6</p>
                        </div>
                        <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-100 cursor-pointer">
                            <IoCall className="text-blue-700 text-xl" />
                            <span className="text-gray-700 text-sm font-medium">Contact us</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SideNavbar;

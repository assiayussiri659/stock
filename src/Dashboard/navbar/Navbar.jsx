import React from 'react';
import { FaSearch, FaBars } from 'react-icons/fa';
import { MdOutlineMailOutline } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaGripLinesVertical } from "react-icons/fa";

const Navbar = () => {
    return (
        <header className="p-4 bg-blue-700 shadow-md flex justify-between items-center rounded-sm">
            <div className="max-w-xl hidden md:flex gap-2 border p-1 rounded-md ">
                <FaSearch className="h-5 w-5 text-white" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="outline-none bg-transparent text-white w-full"
                    aria-label="Search"
                />
            </div>
            <FaBars className="w-6 h-6 text-white md:hidden" />
            <div className="flex items-center space-x-8">
                <MdOutlineMailOutline className="w-6 h-6 text-white hidden md:flex"/>
                <IoNotifications className="w-6 h-6 text-white hidden md:flex" />
                <FaGripLinesVertical className="w-6 h-6 text-white hidden md:flex"/>
                <div className="relative">
                    <button
                        type="button"
                        className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                        <span className="absolute -inset-1.5"></span>
                        <img
                            className="h-8 w-8 rounded-full"
                            src="stock-market-logo.png"
                            alt="Profile"
                        />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

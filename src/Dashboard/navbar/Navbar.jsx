import React from 'react';
import { FaSearch, FaBars } from 'react-icons/fa';

const Navbar = () => {
    return (
        <>
            <header className="p-4 bg-blue-700 shadow-md flex justify-between items-center rounded-sm relative">
                <span>
                    <img 
                        src="stock-market-logo.png" 
                        alt="Stock Market Logo" 
                        className="w-9 h-9 inline mr-6 bg-white rounded-sm border p-2" 
                    />
                </span>
                <div className="max-w-xl hidden md:flex gap-2 border p-1 rounded-md">
                    <FaSearch className="h-5 w-5 text-white" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="outline-none bg-transparent text-white w-full"
                        aria-label="Search"
                    />
                </div>
                <FaBars className="w-6 h-6 text-white md:hidden" />
            </header>
        </>
    );
};

export default Navbar;

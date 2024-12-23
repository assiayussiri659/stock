import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
    return (
        <header className="p-4 bg-blue-700 shadow-md flex justify-between items-center rounded-sm relative">
            <div className="max-w-xl hidden md:flex gap-2 border p-2 rounded-md">
                <FaSearch className="h-5 w-5 text-white" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="outline"
                    aria-label="Search"
                />
            </div>
        </header>
    );
};

export default Navbar;

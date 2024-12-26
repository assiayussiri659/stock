import React from 'react';
import SideNavbar from '../Dashboard/side navbar/SideNavbar';
import Navbar from '../Dashboard/navbar/Navbar';
import Banner from '../Banner/Banner';

const Layout = () => {
    return (
        <div className="flex h-screen">
            <SideNavbar/>
            <div className="flex-1 flex flex-col">
                <Navbar/>
                <div className="p-4">
                    <Banner/>
                </div>
            </div>
        </div>
    );
};

export default Layout;

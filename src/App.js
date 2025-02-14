import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from "./component/Sign up/Sign up";
import Signin from "./component/sing in/Sing in";
import Navbar from './Dashboard/navbar/Navbar';
import SideNavbar from './Dashboard/side navbar/SideNavbar';
import Banner from './Banner/Banner';
import Layout from './Layout/Layout';
import Footer from './Footer/Footer'

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/sidenavbar" element={<SideNavbar />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path='/banner' element={<Banner/>}/>
          <Route path='/layout' element={<Layout/>}/>
          <Route path='/footer' element={<Footer/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from "./component/Sign up/Sign up";
import Signin from "./component/sing in/Sing in";
import Navbar from './Dashboard/navbar/Navbar';
import SideNavbar from './Dashboard/side navbar/SideNavbar';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/sidenavbar" element={<SideNavbar />} />
          <Route path="/navbar" element={<Navbar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

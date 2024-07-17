import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Sidebar from'./Sidebar';
import Registration from './Registration';
import Home from './Home';
import Search from './Search';
import AboutUs from "./AboutUs";
import './App.css';

const App = () => {
  const [isOpen,setisopen]=useState(false);
  const togglerSidebar=()=>{
    setisopen(!isOpen);};
  
  return (
    <Router>
      <div>
        <Header togglerSidebar={togglerSidebar}/>
        <Sidebar isOpen={isOpen} togglerSidebar={togglerSidebar}></Sidebar>
        <Routes>
          <Route path="/registration" element={<Registration />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

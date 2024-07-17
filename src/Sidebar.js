import React from "react";
import { Link } from "react-router-dom";
import '/.Sidebar.css';
const Sidebar=({isOpen,togglerSidebar})=>{
    return(
        <div className={isOpen? 'sidebarOpen':'sidebar'}>
            <ul>
                <li><link to="/home" onClick={togglerSidebar}>Home</link></li>
                <li><link to="/registration" onClick={togglerSidebar}>Registration</link></li>
                <li><link to="/about us" onClick={togglerSidebar}>AboutUs</link></li>

            </ul>
        </div>
    );
};

import React from 'react';
import { FaBars } from 'react-icons/fa';
import './Header.css';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="navbar">
      <FaBars className="menu-icon" onClick={toggleSidebar} />
      <nav>
        <ul className="nav-list">
          <li className="nav-item"><a href="/home">Home</a></li>
          <li className="nav-item"><a href="/about-us">About Us</a></li>
          <li className="nav-item"><a href="/registration">Registration</a></li>
          <li className="nav-item"><a href="/search">Search</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

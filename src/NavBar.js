// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from './assets/logo.png';

function NavBar() {
  return (
    <nav className="nav">
      <img src={logo} alt="Logo" className="nav-logo" />
      <h5 className="nav-title">TechPaax</h5>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#about-section">About Us</a> {/* Updated to use anchor tag */}
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

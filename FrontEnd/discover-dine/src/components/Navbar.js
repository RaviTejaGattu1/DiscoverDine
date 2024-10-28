import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure to import the CSS file for styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        {/* <li><Link to="/about">About</Link></li> */}
        {/* <li><Link to="/contact">Contact</Link></li> */}
      </ul>
    </nav>
  );
}

export default Navbar;

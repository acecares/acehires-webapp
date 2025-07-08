import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/images/main-logo.png" alt="ACE Logo" />
        </div>

        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/education">Training and Education</Link>
          </li>
          <li>
            <Link to="/apply">Apply</Link>
          </li>
        </ul>

        <div className="navbar-contact">
          <Link to="/contact" className="contact-button">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

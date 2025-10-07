import React from "react";
import { Link } from "react-router-dom";
import "./AANNavbar.css";

const AANNavbar = () => {
  return (
    <nav className="aan-navbar">
      <div className="aan-navbar-container">
        <div className="aan-navbar-logo">
          <img src="/main-logo1.png" alt="logo" />
        </div>

        <ul className="aan-navbar-links">
          <li><Link to="/apply-nursing">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/apply-nursing">Apply</Link></li>
          <li><Link to="/vision">Mission & Vision</Link></li>
          <li><Link to="/education">Training & Education</Link></li>
        </ul>

        <div className="aan-navbar-contact">
          <Link to="/contact" className="aan-contact-button">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default AANNavbar;

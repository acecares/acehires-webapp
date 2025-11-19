import React from "react";
import { Link } from "react-router-dom";
import "./AANNavbar.css";

const AANNavbar = () => {
  return (
    <nav className="aan-navbar">
      <div className="aan-navbar-container">

        {/* LOGO */}
        <div className="aan-navbar-logo">
          <Link to="/">
            <img 
              src="/all-american-medical-staffing-logo.png" 
              alt="All American Medical Staffing Logo" 
            />
          </Link>
        </div>

        {/* NAVIGATION LINKS */}
        <ul className="aan-navbar-links">

          {/* External Home & About */}
          <li>
            <a 
              href="https://www.homecarenursestaffing.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Home
            </a>
          </li>

          <li>
            <a 
              href="https://www.homecarenursestaffing.com/healthcare-staffing-about-us" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              About
            </a>
          </li>

          {/* NEW INTERNAL PAGES */}
          <li><Link to="/aan/services">Services</Link></li>
          <li><Link to="/aan/onboarding">Onboarding</Link></li>
          <li><Link to="/aan/vision">Vision & Mission</Link></li>

        </ul>

        {/* CONTACT BUTTON */}
        <div className="aan-navbar-contact">
          <a 
            href="https://www.homecarenursestaffing.com/healthcare-staffing-contact-us" 
            target="_blank" 
            rel="noopener noreferrer"
            className="aan-contact-button"
          >
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
};

export default AANNavbar;

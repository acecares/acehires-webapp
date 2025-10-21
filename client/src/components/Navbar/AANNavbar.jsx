import React from "react";
import { Link } from "react-router-dom";
import "./AANNavbar.css";

const AANNavbar = () => {
  return (
    <nav className="aan-navbar">
      <div className="aan-navbar-container">
        <div className="aan-navbar-logo">
          <img src="/all-american-medical-staffing-logo.png" alt="all-american-medical-staffing-logo.png" />
        </div>

        <ul className="aan-navbar-links">
          <li><Link to="/apply-nursing">Home</Link></li>
          <li><Link to="https://www.homecarenursestaffing.com/healthcare-staffing-about-us">About</Link></li>
          <li><Link to="https://www.homecarenursestaffing.com/healthcare-staffing-services/management-staff-placement">Services</Link></li>
          <li><Link to="https://www.homecarenursestaffing.com/healthcare-staffing-services/rapid-visit-request-form">Apply</Link></li>
          {/* <li><Link to="/vision">Mission & Vision</Link></li>
          <li><Link to="/education">Training & Education</Link></li> */}
        </ul>

        <div className="aan-navbar-contact">
          <Link to="https://www.homecarenursestaffing.com/healthcare-staffing-contact-us" className="aan-contact-button">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default AANNavbar;

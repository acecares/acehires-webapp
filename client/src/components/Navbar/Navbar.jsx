import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src="/images/main-logo.png" alt="ACE Logo" />
        </div>

        {/* Hamburger icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={menuOpen ? "bar bar1 open" : "bar bar1"}></div>
          <div className={menuOpen ? "bar bar2 open" : "bar bar2"}></div>
          <div className={menuOpen ? "bar bar3 open" : "bar bar3"}></div>
        </div>

        {/* Links */}
        <ul className={menuOpen ? "navbar-links active" : "navbar-links"}>
          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>About</Link>
          </li>
          <li>
            <Link to="/services" onClick={closeMenu}>Services</Link>
          </li>
          <li>
            <Link to="/education" onClick={closeMenu}>Training and Education</Link>
          </li>
          <li>
            <Link to="/apply" onClick={closeMenu}>Apply</Link>
          </li>
          <li className="mobile-contact">
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
          </li>
        </ul>

        {/* Desktop Contact Button */}
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

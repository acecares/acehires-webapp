import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtext">We’d love to hear from you!</p>

        <div className="contact-info">
          <p><strong className="highlight">Phone:</strong> +1 (713) 995-8146</p>
          <p><strong className="highlight">Business Hours:</strong> 9:00 AM – 5:00 PM</p>
          <p><strong className="highlight">Email:</strong> support@acehires.com</p>
          <p><strong className="highlight">Facebook:</strong> <a href="https://www.facebook.com/acecomplianceconsutling" target="_blank" rel="noreferrer">Visit Page</a></p>
          <p><strong className="highlight">Instagram:</strong> <a href="https://www.instagram.com/acecompliance/" target="_blank" rel="noreferrer">Visit Page</a></p>
        </div>

        <div className="contact-form">
          <h2>Contact Us Form</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="Your full name" />

            <label htmlFor="position">Position Applied:</label>
            <input type="text" id="position" placeholder="e.g., Consultant, Coach" />

            <label htmlFor="message">Inquiry / Comment:</label>
            <textarea id="message" rows="4" placeholder="Your message here..." />

            <button type="submit">Submit</button>
          </form>
        </div>

        <Link to="/" className="back-btn">⬅ Back to Home</Link>
      </div>
    </div>
  );
};

export default Contact;
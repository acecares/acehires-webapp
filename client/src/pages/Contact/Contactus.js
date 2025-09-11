// src/components/ContactUs.jsx
import React from "react";
import "./Contact.css";
import Navbar from "../../components/Navbar/Navbar";

const Contact = () => {
  return (
    <main>
      <Navbar />
      <section className="contact-section">
        <div className="contact-container">
          {/* Left Section */}
          <div className="contact-left">
            <img
              src="/images/contact-illustration.png"
              alt="Contact Illustration"
              className="contact-illustration"
            />
            <h2>Let’s Connect</h2>
            <p>
              Whether you're seeking expert guidance, exploring collaboration,
              or simply have a question, our team is ready to assist you
            </p>

            <div className="contact-info">
              <div>
                <span>
                  <img src="/icons/mail-icon.svg" alt="mail" />
                </span>
                support@acehires.com
              </div>
              <div>
                <span>
                  <img src="/icons/phone-icon.svg" alt="phone" />
                </span>
                1 (713) 995-8146
              </div>
              <div>
                <span>
                  <img src="/icons/time-icon.svg" alt="time" />
                </span>
                9:00 AM – 5:00 PM
              </div>
            </div>

            <div className="contact-socials">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <img src="/icons/facebook-icon.svg" alt="facebook" />
                </span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <img src="/icons/instagram-icon.svg" alt="instagram" />
                </span>
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="contact-right">
            <form className="contact-form">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                placeholder="Your full name"
                required
              />

              <label htmlFor="position">Position Applied:</label>
              <input
                type="text"
                id="position"
                placeholder="e.g., Consultant, Coach"
                required
              />

              <label htmlFor="message">Inquiry / Comment:</label>
              <textarea
                id="message"
                placeholder="Your message here..."
                rows="5"
                required
              ></textarea>

              <button type="submit">
                <span className="send-icon">
                  {" "}
                  <span>
                    <img src="/icons/rocket-icon.svg" alt="phone" />
                  </span>
                </span>{" "}
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;

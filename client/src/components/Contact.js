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
              or simply have a question, our team is ready to assist you.
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

          {/* Right Section – Embed GoHighLevel Form */}
          <div className="contact-right">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/xzCwRSRQlzjq3H2OQs1U"
              style="width:100%;height:100%;border:none;border-radius:4px"
              id="inline-xzCwRSRQlzjq3H2OQs1U" 
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="AceHires - ContactUs"
              data-height="438"
              data-layout-iframe-id="inline-xzCwRSRQlzjq3H2OQs1U"
              data-form-id="xzCwRSRQlzjq3H2OQs1U"
              title="AceHires - ContactUs"
                  >
          </iframe>
          <script src="https://link.msgsndr.com/js/form_embed.js"></script>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;

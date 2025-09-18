// src/pages/Contact.js or src/components/ContactUs.jsx
import React, { useEffect } from "react";
// import Navbar from "../../components/Navbar/Navbar";
import "./Contact.css";

const Contact = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <div className="contact-wrapper">
        <div className="contact-header">
          <img src="/main-logo.png" alt="ACE Logo" className="ace-logo" />
          <h1 className="contact-title">Contact Us</h1>
        </div>

        <div className="form-wrapper">
          <iframe
  id="inline-xzCwRSRQlzjq3H2OQs1U"
  src="https://api.leadconnectorhq.com/widget/form/xzCwRSRQlzjq3H2OQs1U"
  style={{
    width: '100%',
    height: '800px', // Adjusted height
    border: 'none',
    borderRadius: '4px',
  }}
  data-layout='{"id":"INLINE"}'
  data-trigger-type="alwaysShow"
  data-trigger-value=""
  data-activation-type="alwaysActivated"
  data-activation-value=""
  data-deactivation-type="neverDeactivate"
  data-deactivation-value=""
  data-form-name="AceHires - ContactUs"
  data-layout-iframe-id="inline-xzCwRSRQlzjq3H2OQs1U"
  data-form-id="xzCwRSRQlzjq3H2OQs1U"
  title="AceHires - ContactUs"
/>
        </div>
      </div>
    </>
  );
};



export default Contact;

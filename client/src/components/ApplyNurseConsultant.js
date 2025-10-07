import React, { useEffect } from "react";
import "./ApplyNurseConsultant.css";
import AANNavbar from "../../src/components/Navbar/AANNavbar"; // use All American Navbar

const ApplyNurseConsultant = () => {
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
    <div className="nurse-consultant-page">
      <AANNavbar />

      <div className="nurse-consultant-wrapper">
        <div className="nurse-consultant-container">
          <h1 className="nurse-consultant-title">
            Apply Now – Nurse Consultant
          </h1>
          <p className="nurse-consultant-subtitle">
            For nurse consultants or healthcare professionals looking to join our
            consulting network. Please fill out the form below to apply.
          </p>

          <iframe
            src="https://api.leadconnectorhq.com/widget/form/d9W76nxgxO5wcQZEoWDD"
            title="Apply Nurse Consultant"
            id="inline-d9W76nxgxO5wcQZEoWDD"
            style={{
              width: "100%",
              height: "1100px",
              border: "none",
              borderRadius: "10px",
            }}
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-activation-type="alwaysActivated"
            data-deactivation-type="neverDeactivate"
            data-form-name="Apply Nurse Consultant"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ApplyNurseConsultant;

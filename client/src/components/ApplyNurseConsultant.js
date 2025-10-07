import React, { useEffect } from "react";
import "./ApplyNurseConsultant.css";
import Navbar from "../../src/components/Navbar/Navbar";

const ApplyNurseConsultant = () => {
  useEffect(() => {
    // Load GoHighLevel script dynamically
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="consultant-container">
      <Navbar />

      <div className="consultant-header">
        <h1 className="apply-title">Apply as a Nurse Consultant</h1>
        <p>
          For nurse consultants or healthcare professionals looking to join our
          consulting network. Please fill out the form below to apply.
        </p>
      </div>

      <div className="form-wrapper">
        <div className="form-embed-container">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/d9W76nxgxO5wcQZEoWDD"
            style={{
              width: "100%",
              height: "987px",
              border: "none",
              borderRadius: "3px",
            }}
            id="inline-d9W76nxgxO5wcQZEoWDD"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Apply Nurse Consultant"
            data-height="987"
            data-layout-iframe-id="inline-d9W76nxgxO5wcQZEoWDD"
            data-form-id="d9W76nxgxO5wcQZEoWDD"
            title="Apply Nurse Consultant"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ApplyNurseConsultant;

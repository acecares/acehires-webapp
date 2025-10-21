import React, { useEffect } from "react";
import "./ApplyNurseApplicant.css";
import AANNavbar from "../../src/components/Navbar/AANNavbar"; // All American Navbar

const ApplyNurseApplicant = () => {
  useEffect(() => {
    // Dynamically load GoHighLevel script
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="nurse-applicant-page">
      <AANNavbar />

      <div className="nurse-applicant-wrapper">
        <div className="nurse-applicant-container">
          <h1 className="nurse-applicant-title">Apply Now – Nursing Applicant</h1>
          <p className="nurse-applicant-subtitle">
            Please fill out the form below to submit your application for nursing positions.
            Ensure that all details are accurate before submitting.
          </p>

          <div className="nurse-applicant-form">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/TQlyQnKw4wX1cp8gPK49"
              style={{
                width: "100%",
                height: "6422px",
                border: "none",
                borderRadius: "3px",
              }}
              id="inline-TQlyQnKw4wX1cp8gPK49"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Application Form"
              data-height="6422"
              data-layout-iframe-id="inline-TQlyQnKw4wX1cp8gPK49"
              data-form-id="TQlyQnKw4wX1cp8gPK49"
              title="Application Form"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyNurseApplicant;

import React, { useEffect } from "react";
import "./ApplyNurseApplicant.css"; // ✅ correct CSS file
import AANNavbar from "../../src/components/Navbar/AANNavbar"; // use your All American navbar


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
            src="https://api.leadconnectorhq.com/widget/form/AU4rp3XcgLEdebP0j8tP"
            id="inline-AU4rp3XcgLEdebP0j8tP"
            title="Apply Nursing Applicant"
            style={{
              width: "100%",
              height: "1150px",
              border: "none",
              borderRadius: "8px",
            }}
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Apply Nursing Applicant"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
);

};

export default ApplyNurseConsultant;

import React, { useEffect } from "react";
import "./ApplicantApply.css";
import Navbar from "../../src/components/Navbar/Navbar";

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
    <div className="applicant-container">
      <Navbar />

      <div className="applicant-header">
        <h1 className="apply-title">Apply Now – Nursing Applicant</h1>
        <p>
          Please fill out the form below to submit your application for nursing
          positions. Ensure that all details are accurate before submitting.
        </p>
      </div>

      <div className="form-wrapper">
        <div className="form-embed-container">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/AU4rp3XcgLEdebP0j8tP"
            style={{
              width: "100%",
              height: "1106px",
              border: "none",
              borderRadius: "8px",
            }}
            id="inline-AU4rp3XcgLEdebP0j8tP"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Apply Nursing Applicant"
            data-height="1106"
            data-layout-iframe-id="inline-AU4rp3XcgLEdebP0j8tP"
            data-form-id="AU4rp3XcgLEdebP0j8tP"
            title="Apply Nursing Applicant"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ApplyNurseApplicant;

import React from "react";
import "./ApplyNursing.css";
import { useNavigate } from "react-router-dom";
// import pdf1 from "../assets/Application_Employee_Part_1.pdf";
import pdf2 from "../assets/PERSONALITY_TEST_RVD_2023.pdf";
import AANNavbar from "../../src/components/Navbar/AANNavbar";

const ApplyNursing = () => {
  const navigate = useNavigate();

  return (
    <div className="apply-nursing-page">
      <AANNavbar />

      <div className="apply-nursing-overlay">
        <div className="apply-nursing-container">
          <h1 className="apply-nursing-title">Apply Now – Nursing Positions</h1>
          <p className="apply-nursing-intro">
            Join our growing healthcare network by completing the two simple
            steps below. Apply as a Nurse Applicant or Nurse Consultant today!
          </p>

          <h2 className="apply-nursing-section-title">Steps in Your Application</h2>

          <h3 className="apply-nursing-subtitle">
            Step 1: Download the Assessment Form
          </h3>

          <div className="apply-nursing-pdf-section">
            {/* <a href={pdf1} download className="apply-nursing-pdf-btn">
              📄 Download Application Form
            </a> */}
            <a href={pdf2} download className="apply-nursing-pdf-btn">
              📄 Download Assessment Form
            </a>
          </div>

          <h3 className="apply-nursing-subtitle">
            Step 2: Fill The Application
          </h3>

          <div className="apply-nursing-card-section">
            {/* <div
              className="apply-nursing-card"
              onClick={() => navigate("/apply/nurseapplicant")}
            >
              <h3>Apply as an Applicant</h3>
              <p>
                For direct employment or client-side positions at healthcare
                facilities across the U.S.
              </p>
            </div> */}

            <div
              className="apply-nursing-card"
              onClick={() => navigate("/apply/nurseapplicant")}
            >
              <h3>Apply as a Nurse </h3>
              <p>
                For direct employment or client-side positions at healthcare
                facilities across the U.S.
              </p>
            </div>
          </div>

          <div className="apply-nursing-note">
            <p>
              <strong>Note:</strong> Once submitted, a confirmation email will
              be sent to you with next steps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyNursing;

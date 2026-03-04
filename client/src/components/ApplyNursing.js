import React from "react";
import "./ApplyNursing.css";
import { useNavigate } from "react-router-dom";
// import pdf1 from "../assets/Application_Employee_Part_1.pdf";
// import pdf2 from "../assets/PERSONALITY_TEST_RVD_2023.pdf";
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

          

          <div className="apply-nursing-card-section">
            {/* Step 1 card (clickable) */}
            <div
              className="apply-nursing-card"
              onClick={() => navigate("/apply/nurseapplicant")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  navigate("/apply/nurseapplicant");
                }
              }}
            >
              <h3 className="apply-nursing-title-h3">
            Step 1: Fill The Application form below.
          </h3>
              <h3>Apply as a Nurse</h3>
              <p>
                For direct employment or client-side positions at healthcare
                facilities across the U.S.
              </p>
            </div>

            {/* Step 2 card (not clickable, floats) */}
            <div className="apply-nursing-card apply-nursing-card--static apply-nursing-card--float">
              <h3>Step 2: Complete the DISC and EQ Assessments</h3>
              <p>
                Use the testing links provided in step 1 to complete the DISC
                Personality Test and EQ Assessment. Once you finish each test,
                download or save your result/certificate and upload it in the
                corresponding upload fields within this form before submitting
                your application.
              </p>
            </div>

            {/* Step 3 card (not clickable, floats) */}
            <div className="apply-nursing-card apply-nursing-card--static apply-nursing-card--float apply-nursing-card--float-delay">
              <h3>Step 3: Complete the Final Quiz</h3>
              <p>
                After submitting the application form, you will be redirected to
                a final quiz. Please complete this quiz to finish the
                application process.
              </p>
            </div>
          </div>

          <div className="apply-nursing-note">
            <p>
              <strong>Note:</strong> Once submitted both Form and Quiz, a
              confirmation email will be sent to you with next steps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyNursing;
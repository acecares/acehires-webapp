import React from "react";
import "./VisionMission.css";
// import Navbar from "../../components/Navbar/Navbar";

const VisionMission = () => {
  return (
    <div className="vision-page">
      {/* ✅ Navbar */}
      {/* <Navbar /> */}

      {/* ✅ Main Content */}
      <div className="vision-container">
        <h1 className="vision-title">Our Vision & Mission</h1>
        <p className="vision-intro">
          At Ace Compliance Consulting, our vision and mission guide every step
          we take toward empowering agencies, consultants, and leaders in the
          healthcare industry to operate with excellence, compliance, and
          confidence.
        </p>

        <div className="vision-grid">
          <div className="vision-card">
            <img src="/icons/vision-icon.svg" alt="Vision" />
            <h3>Our Vision</h3>
            <p>
              We empower and inspire home care agency owners to achieve peace of
              mind and unstoppable success while staying compliant and
              profitable. Through expert guidance and innovative success
              solutions, we elevate leaders to thrive, lead with purpose, and
              change lives.
            </p>
          </div>

          <div className="vision-card">
            <img src="/icons/mission-icon.svg" alt="Mission" />
            <h3>Our Mission</h3>
            <p>
              To be the premier partner and catalyst for home care transformation —
              empowering agency owners to achieve inevitable success, lead with
              peace of mind, operate with excellence, and deliver exceptional
              patient care. Together, we elevate industry standards and build a
              thriving legacy-driven home care community that transforms lives
              across the nation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;

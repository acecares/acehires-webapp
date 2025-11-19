import React from "react";
import AANNavbar from "../../components/Navbar/AANNavbar"; 
import "./VisionMissionAAN.css";

const VisionMission = () => {
  return (
    <>
      <AANNavbar />

      <div className="vm-container">
        <div className="vm-wrapper">

          {/* Page Title */}
          <h1 className="vm-title">Vision & Mission</h1>

          {/* Welcome Section */}
          <section className="vm-section">
            <h2 className="vm-heading">Welcome & Introduction</h2>

            <div className="vm-card">
              <h3 className="vm-subheading">Welcome Letter from CEO</h3>
              <p className="vm-bold">Charlene Facia Taylor</p>

              <p>
                Welcome to All American Medical Staffing™, where excellence is not
                optional—it’s the standard. You are joining a company built on
                precision, integrity, and an unwavering commitment to raising the
                bar in home health, hospice, and home care staffing across the
                United States.
              </p>
            </div>

            <div className="vm-card">
              <h3 className="vm-subheading">Our Mission Is Simple</h3>

              <p>
                Provide elite, Survey-Ready Nurses™ who deliver impeccable care,
                flawless documentation, and compliance-driven performance—every
                single time.
              </p>

              <p>We exist to support agencies with:</p>

              <ul className="vm-list">
                <li>Immediate staffing relief</li>
                <li>Highly trained, high-performing RNs</li>
                <li>Survey-ready documentation and care delivery</li>
                <li>Zero-deficiency preparation and compliance excellence</li>
              </ul>
            </div>

            <div className="vm-card">
              <h3 className="vm-subheading">Our Core Values</h3>

              <ul className="vm-list">
                <li>
                  <strong>Integrity & Excellence in Care —</strong> Deliver
                  top-tier, survey-ready nursing services with precision.
                </li>
                <li>
                  <strong>Compassion in Action —</strong> Ensure dignity,
                  respect, and quality care for every patient.
                </li>
                <li>
                  <strong>Innovation & Efficiency —</strong> Use forward-thinking
                  systems and processes to streamline staffing.
                </li>
                <li>
                  <strong>Partnership for Success —</strong> Build long-term,
                  reliable relationships that drive agency growth.
                </li>
                <li>
                  <strong>Commitment —</strong> Survey-Ready Nurses. Every
                  Admission. Every Time.
                </li>
              </ul>

              <p>
                Every nurse who joins this team becomes part of a mission bigger
                than a shift, a visit, or a chart. You become part of the system
                that keeps agencies compliant, patients safe, and care standards
                elevated.
              </p>

              <h4 className="vm-subheading">Brand Promise</h4>
              <p className="vm-italic">
                “Excellence. Compliance. Results.”  
                <br /> Every visit. Every shift. Every chart.
              </p>

              <p>
                Compliant, survey-ready admissions that protect your agency’s
                reputation and revenue.
              </p>
            </div>
          </section>

          {/* AAMS Brand Section */}
          <section className="vm-section">
            <h2 className="vm-heading">Understanding the AAMS Brand</h2>

            <div className="vm-card">
              <h3 className="vm-subheading">Who We Serve</h3>

              <ul className="vm-list">
                <li>Home Health Agencies</li>
                <li>Hospice Agencies</li>
                <li>
                  Personal Assistance Services (PAS) / Non-Medical Home Care
                </li>
                <li>Hybrid & Multi-service organizations</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default VisionMission;

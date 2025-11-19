import React from "react";
import AANNavbar from "../../components/Navbar/AANNavbar";
import "./AANServices.css";

export default function AANServices() {
  return (
    <>
      <AANNavbar />

      <div className="services-wrapper">
        <h1 className="services-title">Our Services</h1>

        {/* SECTION 1 - SURVEY READY NURSE */}
        <div className="service-section">
          <h2 className="section-heading">What Is a Survey-Ready Nurse™?</h2>

          <div className="service-card">
            <p>
              A Survey-Ready Nurse™ is an elite RN who consistently delivers:
            </p>
            <ul>
              <li>✔ Documentation that stands up to State, Federal, and Accreditation review</li>
              <li>✔ Visits performed strictly according to the plan of care</li>
              <li>✔ Compliance with TAC 558, Medicare CoPs, CHAP, ACHC, and Joint Commission standards</li>
              <li>✔ Accurate, timely, clinically sound documentation—same day, every time</li>
              <li>✔ Zero shortcuts, zero guesswork, zero deficiencies</li>
            </ul>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="service-section">
          <div className="service-card">
            <h3 className="sub-heading">Why Survey-Ready Documentation Matters</h3>
            <p>Because agencies don’t just hire AAMS for staffing—</p>
            <p className="strong-text">They hire us for peace of mind.</p>

            <p>Survey-ready documentation protects:</p>
            <ul>
              <li>• The agency from citations</li>
              <li>• The patient from unsafe care</li>
              <li>• The nurse from liability</li>
              <li>• The organization from financial penalties</li>
            </ul>

            <p className="strong-text">
              Survey-ready nurses are the gold standard.  
              This is who you are.  
              This is who we hire.  
              This is who we send into the field to represent the AAMS brand.
            </p>
          </div>
        </div>

        {/* SECTION 3 - PRIMARY SERVICES */}
        <div className="service-section">
          <h2 className="section-heading">Our Primary Services</h2>

          <div className="service-card">
            <ul>
              <li>• RN Admissions (SOC)</li>
              <li>• RN Recertifications & Resumption of Care</li>
              <li>• RN Routine Visits & Supervisory Visits</li>
              <li>• Clinical Documentation Support</li>
              <li>• Interim Staffing (Short-Term & Long-Term)</li>
              <li>• Survey-Ready Nurse™ Support</li>
              <li>• QA Support & Documentation Review (As Assigned)</li>
            </ul>
          </div>
        </div>

        {/* SERVICE DETAILS */}
        <div className="service-section">
          <div className="service-card">
            <h3 className="sub-heading">RN Admissions (SOC)</h3>
            <p>
              Our elite RNs perform comprehensive Start of Care assessments with
              precision, accuracy, and compliance. Every SOC visit includes survey-ready
              documentation, medication reconciliation, patient education, and a strong
              clinical foundation.
            </p>

            <h3 className="sub-heading">RN Recertifications & Resumption of Care</h3>
            <p>
              We ensure seamless continuation of care with accurate Recertification and
              ROC assessments. Our evaluations support patient stability and uphold
              Medicare and agency standards.
            </p>

            <h3 className="sub-heading">RN Routine Visits & Supervisory Visits</h3>
            <p>
              Our nurses provide compassionate, clinically sound care. Every visit
              follows the plan of care with timely, compliant documentation.
            </p>

            <h3 className="sub-heading">Clinical Documentation Support</h3>
            <p>
              We assist agencies with accurate, compliant documentation to reduce errors,
              prevent delays, and improve outcomes.
            </p>

            <h3 className="sub-heading">Interim Staffing (Short-Term & Long-Term)</h3>
            <p>
              We deliver highly skilled RNs for temporary or long-term coverage, ensuring
              continuity, safety, and compliance.
            </p>

            <h3 className="sub-heading">Survey-Ready Nurse™ Support</h3>
            <p>
              Our nurses operate with impeccable documentation, regulatory awareness,
              and survey-ready clinical practice.
            </p>

            <h3 className="sub-heading">QA Support & Documentation Review</h3>
            <p>
              Our QA experts review documentation to improve compliance, accuracy, and
              audit readiness.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

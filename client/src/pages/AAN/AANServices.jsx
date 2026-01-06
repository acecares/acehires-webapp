import React, { useEffect } from "react";
import "./AANServices.css";

const AANServices = () => {

  // ⭐ Inject Favicon on Page Load
  useEffect(() => {
    const favicon = document.getElementById("dynamic-favicon");

    if (favicon) {
      favicon.href = "/All_American_heart.png"; // your new favicon
    } else {
      const link = document.createElement("link");
      link.id = "dynamic-favicon";
      link.rel = "icon";
      link.type = "image/png";
      link.href = "/All_American_heart.png";
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="services-wrapper">
      <h1 className="services-title">Our Services</h1>

      <div className="service-section">
        <h2 className="section-heading">Registered Nurse Consultant & Field RN</h2>
        <div className="service-card">
          <p>
            Our Registered Nurse Consultants and Field Nurses play a critical role in delivering
            compliant, high-quality home health care. Responsibilities include:
          </p>
          <ul>
            <li>Skilled nursing visits</li>
            <li>Start of Care (SOC)</li>
            <li>Resumption of Care (ROC)</li>
            <li>Recertification Assessments</li>
            <li>Routine and Follow-Up Visits</li>
          </ul>
          <p className="strong-text">Documentation is required the same day of the visit.</p>
        </div>
      </div>

      <div className="service-section">
        <h2 className="section-heading">Skilled Nursing Services</h2>
        <div className="service-card">
          <p>We provide a wide range of skilled nursing care, including:</p>
          <ul>
            <li>Medication management</li>
            <li>Chronic condition monitoring</li>
            <li>Wound care</li>
            <li>Post-surgical recovery support</li>
          </ul>
        </div>
      </div>

      <div className="service-section">
        <h2 className="section-heading">Patient & Family Education</h2>
        <div className="service-card">
          <p>
            Education is at the heart of every visit. Our nurses ensure patients and caregivers
            understand medications, safety measures, and care expectations.
          </p>
        </div>
      </div>

      <div className="service-section">
        <h2 className="section-heading">Compliance & Quality Oversight</h2>
        <div className="service-card">
          <p>
            Our clinical team ensures all care delivered meets federal, state, and accreditation
            standards.
          </p>
          <ul>
            <li>Chart audits</li>
            <li>Visit documentation review</li>
            <li>Ongoing performance feedback</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AANServices;

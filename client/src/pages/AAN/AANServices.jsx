import React, { useMemo, useState } from "react";
import "./AANServices.css";
import AANNavbar from "../../../src/components/Navbar/AANNavbar";

const AANServices = () => {
  const [flippedId, setFlippedId] = useState(null);

  const services = useMemo(
    () => [
      {
        id: "rn-consultant",
        title: "Registered Nurse Consultant & Field RN",
        body: (
          <>
            <p>
              Our Registered Nurse Consultants and Field Nurses play a critical role in
              delivering compliant, high-quality home health care. Responsibilities include:
            </p>
            <ul>
              <li>Skilled nursing visits</li>
              <li>Start of Care (SOC)</li>
              <li>Resumption of Care (ROC)</li>
              <li>Recertification Assessments</li>
              <li>Routine and Follow-Up Visits</li>
            </ul>
            <p className="strong-text">
              Documentation is required the same day of the visit.
            </p>
          </>
        ),
      },
      {
        id: "skilled-nursing",
        title: "Skilled Nursing Services",
        body: (
          <>
            <p>We provide a wide range of skilled nursing care, including:</p>
            <ul>
              <li>Medication management</li>
              <li>Chronic condition monitoring</li>
              <li>Wound care</li>
              <li>Post-surgical recovery support</li>
            </ul>
          </>
        ),
      },
      {
        id: "education",
        title: "Patient & Family Education",
        body: (
          <>
            <p>
              Education is at the heart of every visit. Our nurses ensure patients and
              caregivers understand medications, safety measures, and care expectations.
            </p>
          </>
        ),
      },
      {
        id: "compliance",
        title: "Compliance & Quality Oversight",
        body: (
          <>
            <p>
              Our clinical team ensures all care delivered meets federal, state, and
              accreditation standards.
            </p>
            <ul>
              <li>Chart audits</li>
              <li>Visit documentation review</li>
              <li>Ongoing performance feedback</li>
            </ul>
          </>
        ),
      },
    ],
    []
  );

  const toggleFlip = (id) => {
    setFlippedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="services-page">
      <AANNavbar />

      <div className="services-hero">
        <div className="services-wrapper">
          {/* ✅ UPDATED HERO (Vision & Mission style) */}
          <div className="services-hero-header">
            <p className="services-kicker">ALL AMERICAN MEDICAL STAFFING</p>

            <h1 className="services-hero-title">
              <span className="services-title-red">Our</span>{" "}
              <span className="services-title-dark">Clinical</span>{" "}
              <span className="services-title-blue">Services</span>
            </h1>

            <div className="services-hero-underline" />

            <p className="services-hero-subtitle">
              Excellence. Compliance. Results. Explore our nursing support services designed to
              strengthen care delivery, documentation, and quality outcomes.
            </p>
          </div>

          {/* Flip Cards */}
          <div className="services-grid">
            {services.map((s) => {
              const isFlipped = flippedId === s.id;

              return (
                <div key={s.id} className="flip-card">
                  <div className={`flip-inner ${isFlipped ? "is-flipped" : ""}`}>
                    {/* FRONT */}
                    <button
                      type="button"
                      className="flip-face flip-front"
                      onClick={() => toggleFlip(s.id)}
                      aria-expanded={isFlipped}
                      aria-controls={`svc-${s.id}`}
                    >
                      <div className="flip-front-content">
                        <h2 className="flip-title">{s.title}</h2>
                        <p className="flip-hint">
                          Click to view details <span className="flip-arrow">→</span>
                        </p>
                      </div>
                    </button>

                    {/* BACK */}
                    <div
                      id={`svc-${s.id}`}
                      className="flip-face flip-back"
                      role="region"
                      aria-label={`${s.title} details`}
                    >
                      <div className="flip-back-header">
                        <h2 className="flip-title back-title">{s.title}</h2>

                        <button
                          type="button"
                          className="flip-close"
                          onClick={() => toggleFlip(s.id)}
                          aria-label="Close details"
                        >
                          ✕
                        </button>
                      </div>

                      <div className="flip-body">{s.body}</div>

                      <div className="flip-back-footer">
                        <button
                          type="button"
                          className="flip-back-btn"
                          onClick={() => toggleFlip(s.id)}
                        >
                          Back
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* end grid */}
        </div>
      </div>
    </div>
  );
};

export default AANServices;
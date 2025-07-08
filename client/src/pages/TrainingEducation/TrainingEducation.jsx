// src/components/TrainingEducation.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./TrainingEducation.css";
import Navbar from "../../components/Navbar/Navbar";

const trainingItems = [
  {
    title: "HIPAA Compliance Training",
    description:
      "Both free and premium HIPAA courses tailored to consultants and caregivers.",
    icon: "/icons/training-icon.svg",
    link: "/training/hipaa",
  },
  {
    title: "Medicare/Medicaid Certification",
    description:
      "Online resources and checklists to prepare for your certification exam.",
    icon: "/icons/certification-icon.svg",
    link: "/training/medicare",
  },
  {
    title: "PDFs, PPTs & Videos",
    description:
      "Downloadable content to learn on your own schedule at your own pace.",
    icon: "/icons/training-icon.svg",
    link: "/training/resources",
  },
  {
    title: "GoHighLevel Modules",
    description:
      "Access internal courses and compliance workflows via our partner portal.",
    icon: "/icons/certification-icon.svg",
    link: "/training/gohighlevel",
  },
];

const TrainingEducation = () => {
  const navigate = useNavigate();

  return (
    <main>
      <Navbar />
      <section className="training-section">
        <div className="training-content">
          <div className="training-left">
            <h2>Training and Education</h2>
            <p>
              At ACE Compliance Consulting, we provide self-paced and guided
              training resources to help consultants stay compliant and
              certified in HIPAA, Medicaid/Medicare policies, and state-level
              PAS applications.
            </p>
          </div>
          <div className="training-image">
            <img
              src="/images/training-and-education.png"
              alt="Training Illustration"
            />
          </div>
        </div>

        <div className="training-grid">
          {trainingItems.map((item, idx) => (
            <div
              className="training-card clickable"
              key={idx}
              onClick={() => navigate(item.link)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && navigate(item.link)}
            >
              <img src={item.icon} alt="icon" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default TrainingEducation;

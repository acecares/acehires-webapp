import React from "react";
import "./TrainingEducation.css";
import Navbar from "../../components/Navbar/Navbar";

const trainingItems = [
  {
    title: "Ace Compliance Consulting Fundamentals",
    description:
      "Core training to understand the mission, processes, and compliance foundation of ACE.",
  },
  {
    title: "Compliance & Consulting Excellence",
    description:
      "Advance your understanding of compliance expectations and best consulting practices.",
  },
  {
    title: "Client Engagement & Professional Etiquette",
    description:
      "Master communication, ethics, and rapport-building strategies with clients.",
  },
  {
    title: "Documentation & Reporting Standards",
    description:
      "Learn proper case documentation, compliance logs, and digital reporting techniques.",
  },
  {
    title: "Consulting Training",
    description:
      "Hands-on consulting techniques tailored for mental health and behavioral healthcare.",
  },
  {
    title: "Education Consultant Training",
    description:
      "Specialized curriculum for education-focused consultants serving academic institutions.",
  },
];

const TrainingEducation = () => {
  return (
    <div className="training-page">
      {/* ✅ Navbar */}
      <Navbar />

      <div className="training-content-wrapper">
        <h1 className="training-title">Training & Education</h1>
        <p className="training-intro">
          At Ace Compliance Consulting, we provide guided and self-paced training
          programs designed to empower consultants, caregivers, and administrators
          in mastering compliance, operational excellence, and client engagement.
        </p>

        <div className="training-grid">
          {trainingItems.map((item, idx) => (
            <div className="training-card" key={idx}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingEducation;

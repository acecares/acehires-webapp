// src/components/TrainingEducation.jsx
import React from "react";
import "./TrainingEducation.css";
import Navbar from "../../components/Navbar/Navbar";

const trainingItems = [
  {
    title: "📘 Ace Compliance Consulting Fundamentals",
    description:
      "Core training to understand the mission, processes, and compliance foundation of ACE.",
  },
  {
    title: "📗 Compliance & Consulting Excellence",
    description:
      "Advance your understanding of compliance expectations and best consulting practices.",
  },
  {
    title: "🎯 Client Engagement & Professional Etiquette",
    description:
      "Master communication, ethics, and rapport-building strategies with clients.",
  },
  {
    title: "📝 Documentation & Reporting Standards",
    description:
      "Learn proper case documentation, compliance logs, and digital reporting techniques.",
  },
  {
    title: "💼 Consulting Training",
    description:
      "Hands-on consulting techniques tailored for mental health and behavioral healthcare.",
  },
  {
    title: "🎓 Education Consultant Training",
    description:
      "Specialized curriculum for education-focused consultants serving academic institutions.",
  },
];

const TrainingEducation = () => {
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
            <div className="training-card" key={idx}>
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

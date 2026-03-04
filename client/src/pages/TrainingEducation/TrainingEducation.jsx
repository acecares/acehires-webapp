// client/src/pages/TrainingEducation/TrainingEducation.jsx
import React from "react";
import "./TrainingEducation.css";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const trainingItems = [
  {
    key: "fundamentals",
    title: "Ace Compliance Consulting Fundamentals",
    description:
      "Core training to understand the mission, processes, and compliance foundation of ACE.",
    path: "/education/fundamentals",
  },
  {
    key: "compliance-excellence",
    title: "Compliance & Consulting Excellence",
    description:
      "Advance your understanding of compliance expectations and best consulting practices.",
    path: "/education/compliance-excellence",
  },
  {
    key: "client-engagement",
    title: "Client Engagement & Professional Etiquette",
    description:
      "Master communication, ethics, and rapport-building strategies with clients.",
    path: "/education/client-engagement",
  },
  {
    key: "documentation-standards",
    title: "Documentation & Reporting Standards",
    description:
      "Learn proper case documentation, compliance logs, and digital reporting techniques.",
    path: "/education/documentation-standards",
  },
  {
    key: "consulting-training",
    title: "Consulting Training",
    description:
      "Hands-on consulting techniques tailored for home healthcare services.",
    path: "/consulting-training",
  },
  {
    key: "education-consultant",
    title: "Education Consultant Training",
    description:
      "Specialized curriculum for education-focused consultants serving academic institutions.",
    path: "/education/education-consultant-training",
  },
];

const TrainingEducation = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    if (path) navigate(path);
  };

  return (
    <div className="training-page">
      <Navbar />

      {/* HERO OVERLAY (same design style as Services hero you liked) */}
      <div className="training-hero">
        <div className="training-content-wrapper">
          <p className="training-kicker">ACE SUCCESS TEAM</p>

          <h1 className="training-title">
            <span className="training-title-dark">Training</span>{" "}
            <span className="training-title-green">&amp; Education</span>
          </h1>

          <div className="training-underline" />

          <p className="training-subtitle">
            Explore structured training resources designed to build confidence, improve
            documentation, and support compliance-first consulting.
          </p>

          <div className="training-grid">
            {trainingItems.map((item) => (
              <div
                key={item.key}
                className={`training-card ${!item.path ? "is-disabled" : ""}`}
                onClick={() => handleCardClick(item.path)}
                style={{ cursor: item.path ? "pointer" : "default" }}
                aria-disabled={!item.path}
                title={item.path ? `Open ${item.title}` : "Coming soon"}
              >
                <h3 className="training-card-title">{item.title}</h3>
                <p className="training-card-desc">{item.description}</p>

                {item.path ? (
                  <span className="training-card-cta">Open ▸</span>
                ) : (
                  <span className="training-card-cta disabled">Coming soon</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingEducation;
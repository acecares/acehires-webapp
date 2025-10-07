import React from "react";
import "./WhyChooseUs.css";

const points = [
  {
    title: "Integrity-Driven Culture",
    description:
      "We uphold the highest standards of honesty, ethics, and accountability in every interaction and decision, ensuring trust and reliability.",
  },
  {
    title: "Results-Oriented Excellence",
    description:
      "We focus on producing measurable outcomes and fulfilling client goals with quality and precision in every engagement.",
  },
  {
    title: "Efficiency & Optimization",
    description:
      "We streamline processes, optimize operations, and apply strategies that save time, reduce errors, and enhance productivity.",
  },
  {
    title: "Supportive & Growth-Focused Environment",
    description:
      "Our culture encourages continuous learning, mentoring, and improvement — empowering both our team and our clients to evolve and succeed.",
  },
  {
    title: "Proactive & Hands-On Consulting",
    description:
      "Our client approach is interactive and proactive. We walk each client through every step, offering tailored guidance with clarity and care.",
  },
  {
    title: "Accountable, Empowering Leadership",
    description:
      "We foster a leadership culture that is accessible, empowering, and built on accountability — helping clients and employees thrive.",
  },
];

const WhyChooseUs = () => (
  <section className="why-choose">
    <div className="why-choose-container">
      <h2 className="why-title">Why Choose Us</h2>
      <p className="why-intro">
        Our team at Ace Compliance Consulting is dedicated to delivering excellence, integrity, and growth.
        Here's what sets us apart:
      </p>

      <div className="features-grid">
        {points.map((point, index) => (
          <div className="feature-box" key={index}>
            <img
              src="/icons/shieldCheck.svg"
              alt="Feature Icon"
              className="feature-icon"
            />
            <h4>{point.title}</h4>
            <p>{point.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;

// src/components/Services.jsx
import React from "react";
import "./Services.css";
import Navbar from "../../components/Navbar/Navbar";

const serviceItems = [
  {
    title: "QAPI",
    description:
      "Quality Assurance & Performance Improvement support for compliance and growth.",
  },
  {
    title: "Mock Survey",
    description:
      "Simulated surveys to prepare agencies for official state and federal inspections.",
  },
  {
    title: "Chart Audit",
    description:
      "Detailed chart reviews to identify compliance gaps and ensure readiness.",
  },
  {
    title: "Legal Consulting",
    description:
      "Guidance on healthcare compliance laws, policies, and documentation.",
  },
  {
    title: "Plan of Correction",
    description:
      "Strategic corrective plans to resolve deficiencies post-survey.",
  },
  {
    title: "Compliance Services",
    description:
      "Comprehensive compliance support for agencies and providers.",
  },
  {
    title: "Success Strategic Session",
    description:
      "One-on-one sessions focused on planning and operational excellence.",
  },
  {
    title: "Agency Evaluation",
    description:
      "Complete evaluation of policies, workflows, and compliance readiness.",
  },
  {
    title: "Find & Fix Solutions (Corrections)",
    description:
      "Hands-on correction services to address compliance findings quickly.",
  },
];

const Services = () => {
  return (
    <main>
      <Navbar />
      <section className="services-section">
        <h2 className="services-heading">Consulting Services</h2>
        <div className="services-grid">
          {serviceItems.map((item, idx) => (
            <div key={idx} className="service-card">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;

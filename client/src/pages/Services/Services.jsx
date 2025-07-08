// src/components/Services.jsx
import React from "react";
import "./Services.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const serviceItems = [
  {
    title: "PAS Licensing Support",
    description:
      "Expert guidance to complete and submit PAS applications for multiple U.S. states. We walk clients through each step of the process.",
    icon: "/icons/training-icon.svg",
    link: "/services/pas-licensing",
  },
  {
    title: "HIPAA Compliance Guidance",
    description:
      "Ensure your practice or business is compliant with HIPAA laws with our detailed audits, policy templates, and consultant coaching.",
    icon: "/icons/certification-icon.svg",
    link: "/services/hipaa-guidance",
  },
  {
    title: "Medicaid/Medicare Consulting",
    description:
      "We prepare documentation and assist in applying for Medicaid/Medicare provider enrollment or billing credentials.",
    icon: "/icons/training-icon.svg",
    link: "/services/medicare",
  },
  {
    title: "Training for In-Home Caregivers",
    description:
      "Ensure your practice or business is compliant with HIPAA laws with our detailed audits, policy templates, and consultant coaching.",
    icon: "/icons/certification-icon.svg",
    link: "/services/caregiver-training",
  },
  {
    title: "Admin Support & Workflow Automation",
    description:
      "We implement tools like GoHighLevel, vcita, and forms to help automate reminders, document intake, and follow-ups.",
    icon: "/icons/training-icon.svg",
    link: "/services/admin-support",
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <main>
      <Navbar />
      <section className="services-section">
        <div className="services-content">
          <div className="services-left">
            <h2>Services We Offer</h2>
            <p>
              At ACE Compliance Consulting, we provide self-paced and guided
              training resources to help consultants stay compliant and
              certified in HIPAA, Medicaid/Medicare policies, and state-level
              PAS applications.
            </p>
          </div>
          <div className="services-image">
            <img
              src="/images/services-illustration.png"
              alt="Services Illustration"
            />
          </div>
        </div>

        <h3 className="services-title">Services</h3>
        <div className="services-grid">
          {serviceItems.map((item, idx) => (
            <div
              className="service-card clickable"
              key={idx}
              onClick={() => navigate(item.link)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && navigate(item.link)}
            >
              <img src={item.icon} alt="icon" />
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

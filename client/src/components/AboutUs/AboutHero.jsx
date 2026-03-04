import React from "react";
import "./AboutUs.css";

const AboutHero = () => {
  return (
    <div className="about-page">
      {/* Banner Section */}
      <div className="about-banner">
        <img
          src="/about-banner.jpg"
          alt="Ace Compliance Consulting"
          className="about-banner-image"
        />

        {/* UPDATED HERO OVERLAY (same style as the services heading you liked) */}
        <div className="about-banner-overlay">
          <p className="about-kicker">ACE SUCCESS TEAM</p>

          <h1 className="about-hero-title">
            <span className="about-title-dark">About</span>{" "}
            <span className="about-title-green">Us</span>
          </h1>

          <div className="about-hero-underline" />

          <p className="about-hero-subtitle">
            Strategic Processes &amp; Systems for Success
          </p>
        </div>
      </div>

      {/* About Content Section */}
      <section className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            Ace Compliance Consulting assists individuals to establish a new
            home care business and offers services to existing home care
            businesses that enable compliance, legal support, and strategic
            processes for efficient and effective operation that leads to
            success.
          </p>
          <p>
            At Ace, our team is committed to leading every client to succeed in
            their business. Our start-up policies, procedure systems, and
            services provided before, during, and after the survey are
            strategically designed to ensure compliance with state and federal
            certification, accreditation, rules, and regulations.
          </p>
        </div>

        <div className="about-image">
          <img src="/CHARLENE-TAYLOR.png" alt="Ace Compliance Consulting Team" />
        </div>
      </section>

      {/* Additional Section */}
      <section className="about-difference">
        <div className="difference-text">
          <h2>Experience the Difference of Stress-Free Surveys</h2>
          <p>
            The consulting company you choose to start your business matters.
            When you choose Ace, you choose success. Make your decision today to
            partner with Ace Compliance Consulting — where we lead your vision
            with precision.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutHero;
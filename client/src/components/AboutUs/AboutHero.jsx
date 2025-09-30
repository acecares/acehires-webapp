import React from "react";
import "./AboutUs.css";

const AboutHero = () => (
  <section>
    {/* Existing Hero Section */}
    <div className="about-hero">
      <div className="about-hero-content">
        <div className="about-hero-left">
          <h2>About Us</h2>
          <p className="tagline">Succeed • Grow • Thrive</p>
          <p>
            Ace Compliance Consulting is your trusted partner for growth and
            transformation. We are a playground where professionals engage in
            meaningful, effective, and efficient work. Our focus is to help
            businesses and individuals grow into the best version of themselves
            through compliance, consulting, and operational excellence.
          </p>
        </div>
        <img src="/about_us.png" alt="Our Team" />
      </div>
    </div>

    {/* New Detailed About Section */}
    <div className="about-detailed">
      <div className="about-detailed-content">
        <h3>Strategic Processes & Systems for Success</h3>
        <p>
          Ace Compliance Consulting assists individuals to establish a new home
          care business and offer services to existing home care businesses that
          enable compliance, legal support, strategic processes, and systems for
          effective and efficient operation that leads to success.
        </p>

        <p>
          At Ace, our team is committed to leading every client to succeed in
          their business. Our start-up policies and procedure systems and
          services provided before, during, and after the survey are
          strategically designed to ensure compliance with state and federal
          certification and accreditation and rules and regulations.
        </p>

        <h3>Experience the Difference of Stress-Free Surveys</h3>
        <p>
          The consulting company you choose to start your business matters. When
          you choose Ace, you choose Success. Make your decision to choose Ace
          Compliance Consulting today.
        </p>
      </div>
    </div>
  </section>
);

export default AboutHero;

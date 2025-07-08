import React from "react";
import "./AboutUs.css";

const AboutHero = () => (
  <section className="about-hero">
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
      <img src="/images/team-illustration.png" alt="Our Team" />
    </div>
  </section>
);

export default AboutHero;

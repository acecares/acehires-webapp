import React from "react";
import "./AboutUs.css";

const VisionMission = () => (
  <section className="vision-mission">
    <div className="block">
      <img src="/icons/vision-icon.svg" alt="Vision" />
      <h3>Our Vision</h3>
      <p>
        To create a culture where growth, integrity, and success drive
        individuals and businesses to thrive in an ever-changing regulatory
        environment. We envision a community where businesses are empowered
        through ethical practices, efficient processes, and sustainable success.
      </p>
    </div>

    <div className="block">
      <img src="/icons/mission-icon.svg" alt="Mission" />
      <h3>Our Mission</h3>
      <p>
        Our mission is to empower clients by providing impactful, ethical, and
        efficient consulting services that lead to sustainable success. We are
        committed to delivering practical strategies, streamlined operations,
        and measurable results that help clients achieve compliance and
        operational excellence.
      </p>
    </div>
  </section>
);

export default VisionMission;

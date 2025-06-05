import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="title">ACE SUCCESS TEAM</h1>
      <div className="card-grid">
        <div className="card" onClick={() => window.location.href='/apply'}>
          <h2>Apply Now</h2>
        </div>
        <div className="card" onClick={() => window.location.href='/education'}>
          <h2>Trainings and Education</h2>
        </div>
        <div className="card" onClick={() => window.location.href='/onboarding'}>
          <h2>Onboarding</h2>
        </div>
        <div className="card" onClick={() => window.location.href='/services'}>
          <h2>Services </h2>
        </div>
        <div className="card" onClick={() => window.location.href='/about'}>
          <h2>About Us</h2>
        </div>
        <div className="card" onClick={() => window.location.href='/vision'}>
          <h2>Vision & Mission </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;

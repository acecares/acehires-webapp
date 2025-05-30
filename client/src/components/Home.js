import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="title">ACE HIRES</h1>
      <div className="card-grid">
        <div className="card" onClick={() => window.location.href='/apply'}>
          <h2>Apply as a Consultant</h2>
        </div>
        <div className="card" onClick={() => window.location.href='/education'}>
          <h2>Trainings and Education</h2>
        </div>
        <div className="card" onClick={() => window.location.href='/onboarding'}>
          <h2>Onboarding</h2>
        </div>
        <div className="card" onClick={() => window.location.href='/services'}>
          <h2>Services / Vision & Mission</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;

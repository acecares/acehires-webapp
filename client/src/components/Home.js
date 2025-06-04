import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/main-logo-ace.png'; // Make sure your logo is placed in src/assets/

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-hero">
      <div className="home-overlay">
        <img src={logo} alt="ACE Compliance Logo" className="home-logo" />
        <h1 className="home-title">ACE HIRES</h1>
        <div className="home-buttons">
          <button onClick={() => navigate('/apply')}>Apply as a Consultant</button>
          <button onClick={() => navigate('/education')}>Trainings and Education</button>
          <button onClick={() => navigate('/onboarding')}>Onboarding</button>
          <button onClick={() => navigate('/services')}>Services / Vision & Mission</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

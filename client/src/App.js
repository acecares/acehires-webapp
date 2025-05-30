import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ConsultantApply from './components/ConsultantApply';
import Education from './components/Education';
import Onboarding from './components/Onboarding';
import Services from './components/Services';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<ConsultantApply />} />
        <Route path="/education" element={<Education />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ConsultantApply from './components/ConsultantApply';
import Education from './components/Education';
import Onboarding from './components/Onboarding';
import Services from './components/Services';
import Apply from './components/Apply';
import ApplicantApply from './components/ApplicantApply';
import About from './components/About'
import Vision from './components/Vision'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/apply/applicant" element={<ApplicantApply />} />
        <Route path="/apply/ConsultantApply" element={<ConsultantApply />} />
        <Route path="/education" element={<Education />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/vision" element={<Vision />} />
      </Routes>
    </Router>
  );
}

export default App;

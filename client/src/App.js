import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ConsultantApply from "./components/ConsultantApply";
// import Education from "./components/Education";
import TrainingEducation from "./pages/TrainingEducation/TrainingEducation";
import Onboarding from "./components/Onboarding";
// import Services from "./components/Services";
import Services from "./pages/Services/Services";
import Apply from "./components/Apply";
import ApplicantApply from "./components/ApplicantApply";
// import About from "./components/About";
import Vision from "./components/Vision";
import About from "./pages/About";
import SuccessStrategistPage from "./pages/SuccessStrategistPage";
import ApplicationSuccessExpertPage from "./pages/ApplicationSuccessExpertPage";
import SuccessManagerPage from "./pages/SuccessManagerPage";
import SuccessSupportStaffPage from "./pages/SuccessSupportStaffPage";
import SuccessSpecialistPage from "./pages/SuccessSpecialistPage";
import SuccessConsultantPage from "./pages/SuccessConsultantPage";
import SuccessCoachesPage from "./pages/SuccessCoachesPage";
import CoachApply from "./components/CoachApply";
// import Contact from "./components/Contact";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/apply/applicant" element={<ApplicantApply />} />
        <Route path="/apply/ConsultantApply" element={<ConsultantApply />} />
        <Route path="/education" element={<TrainingEducation />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/success-strategist" element={<SuccessStrategistPage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route
          path="/application-success-expert"
          element={<ApplicationSuccessExpertPage />}
        />
        <Route path="/success-manager" element={<SuccessManagerPage />} />
        <Route
          path="/success-support-staff"
          element={<SuccessSupportStaffPage />}
        />
        <Route path="/success-specialist" element={<SuccessSpecialistPage />} />
        <Route path="/success-consultant" element={<SuccessConsultantPage />} />
        <Route path="/success-coaches" element={<SuccessCoachesPage />} />
        <Route path="/apply/CoachApply" element={<CoachApply />} />
      </Routes>
    </Router>
  );
}

export default App;

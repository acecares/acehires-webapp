// import React, { useState } from 'react';
// import './Onboarding.css';
// import { useNavigate } from 'react-router-dom';

// const contentData = {
//   mindset: `We Empower, Educate, and Execute with Excellence. We don’t make excuses, we make it happen!
//   Our team operates with positivity, high energy, and integrity.`,
//   objectives: `
//   1. Compliance Excellence
//   2. Client Empowerment
//   3. Growth and Scalability
//   4. Operational Efficiency
//   5. Continuous Improvement
//   6. Partnership and Collaboration
//   7. Leadership in Compliance Education
//   8. Innovation in Service Delivery
//   `,
//   culture: `Our culture is performance-based and growth-oriented. We prioritize honesty, results, efficiency, and a mindset focused on achievement, transparency, and improvement.`,
//   values: `ISEE:
//   • Integrity – Honest and ethical in all we do
//   • Success – Focused on client transformation
//   • Effectiveness – Real impact and results
//   • Efficiency – Time/resource optimized strategies`,
//   expectations: `We work with high energy, proactive team members who thrive in supportive, collaborative, growth-oriented environments.`,
//   philosophy: `Grow (continuous improvement)
//   Win (achieve goals fast)
//   Thrive (long-term sustainability and vision)`
// };

// const Onboarding = () => {
//   const navigate = useNavigate();
//   const [activeCard, setActiveCard] = useState(null);

//   const handleCardClick = (key) => {
//     setActiveCard(activeCard === key ? null : key);
//   };

//   return (
//     <div className="onboarding-page">
//       <div className="onboarding-overlay">
//         <h1 className="animated-heading">Welcome to ACE Consultant Onboarding</h1>
//         <p className="tagline">Empowers Profits, Compliance, and Success</p>

//         <div className="card-grid">
//           {[
//             { key: 'mindset', label: '💡 Our Mindset' },
//             { key: 'objectives', label: '🎯 Our Objectives' },
//             { key: 'culture', label: '🧱 Our Culture' },
//             { key: 'values', label: '🔑 Core Values (ISEE)' },
//             { key: 'expectations', label: '🚀 What We Expect' },
//             { key: 'philosophy', label: '🧠 Words We Live By' },
//           ].map(({ key, label }) => (
//             <div
//               key={key}
//               className={`card ${activeCard === key ? 'active' : ''}`}
//               onClick={() => handleCardClick(key)}
//             >
//               {label}
//               {activeCard === key && <div className="card-content">{contentData[key]}</div>}
//             </div>
//           ))}
//         </div>

//         <div className="next-steps">

//           <button onClick={() => navigate('/')}>⬅ Back to Home</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Onboarding;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaChalkboardTeacher,
  FaFileSignature,
  FaUserTie,
  FaHandsHelping,
  FaUserCheck,
  FaUserShield,
  FaUsers,
} from "react-icons/fa";
import "./Onboarding.css";

const roles = [
  {
    label: "SUCCESS STRATEGIST",
    icon: <FaChalkboardTeacher />,
    path: "/success-strategist",
    code: "STRATEGIST",
  },
  {
    label: "APPLICATION SUCCESS EXPERT",
    icon: <FaFileSignature />,
    path: "/application-success-expert",
    code: "EXPERT",
  },
  {
    label: "SUCCESS MANAGER",
    icon: <FaUserTie />,
    path: "/success-manager",
    code: "MANAGER",
  },
  {
    label: "SUCCESS SUPPORT STAFF",
    icon: <FaHandsHelping />,
    path: "/success-support-staff",
    code: "SUPPORT",
  },
  {
    label: "SUCCESS SPECIALIST",
    icon: <FaUserCheck />,
    path: "/success-specialist",
    code: "SPECIALIST",
  },
  {
    label: "SUCCESS CONSULTANT",
    icon: <FaUserShield />,
    path: "/success-consultant",
    code: "CONSULTANT",
  },
  {
    label: "SUCCESS COACHES",
    icon: <FaUsers />,
    path: "/success-coaches",
    code: "COACHES",
  },
];

const Onboarding = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);
  const [inputCode, setInputCode] = useState("");
  const [error, setError] = useState("");

  const handleCardClick = (role) => {
    setSelectedRole(role);
    setInputCode("");
    setError("");
  };

  const handleVerify = () => {
    if (inputCode.trim().toUpperCase() === selectedRole.code) {
      navigate(selectedRole.path);
    } else {
      setError("Incorrect code. Please try again.");
    }
  };

  const handleClose = () => {
    setSelectedRole(null);
    setInputCode("");
    setError("");
  };

  return (
    <div className="role-selection-page">
      <h1 className="title">Select Your Role</h1>
      <div className="role-grid">
        {roles.map((role) => (
          <div
            key={role.label}
            className="role-card"
            onClick={() => handleCardClick(role)}
          >
            <div className="icon">{role.icon}</div>
            <div className="label">{role.label}</div>
          </div>
        ))}
      </div>

      <div className="back-button-container">
        <button className="back-button" onClick={() => navigate("/")}>
          ⬅ Back to Home
        </button>
      </div>

      {/* Modal */}
      {selectedRole && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Enter Code for {selectedRole.label}</h2>
            <input
              type="text"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              placeholder="Enter access code"
            />
            {error && <p className="error">{error}</p>}
            <div className="modal-actions">
              <button onClick={handleVerify}>
                <p>Verify & Continue</p>
              </button>
              <button className="cancel" onClick={handleClose}>
                <p> Cancel</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Onboarding;

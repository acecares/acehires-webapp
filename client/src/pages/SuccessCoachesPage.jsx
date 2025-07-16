import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RolePage.css";
import TermsModal from "../components/TermsModal";

const SuccessCoachesPage = () => {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="role-page">
      {!agreed && <TermsModal onAgree={() => setAgreed(true)} />}
      {agreed && (
        <div className="content">
          <h1>Success Coaches</h1>
          <p className="intro-text">Welcome to the Success Coaches role onboarding page.</p>

          <div className="info-section">
            <p><strong>FINALLY, SERVICES TO SUPPORT HOME CARE AGENCY OWNERS ACHIEVE SUCCESS!</strong></p>
            <p>
              Stress and burn-out are very real problems amongst home health care agency owners and it’s often something that isn’t talked about enough throughout the industry. Whether you’ve been working in home care for 10+ years or are just getting started as an owner, it can all be tremendously overwhelming.
            </p>
            <p>
              Running a Home Care business is no easy feat and overworking yourself doesn’t just affect you – it can impact personal relationships with family and friends, your teammates, how smoothly business operation runs, clients/caregivers, your overall satisfaction, and your mental health and wellbeing.
            </p>
            <p>
              Connecting with a home care certified coach, networking with other home care agency owners, knowing your limits, intentionally investing in yourself through seminars, Home Care Masterminds, and taking time to focus on your mental, emotional, and physical wellbeing is extremely beneficial in achieving industry success and creating a life that you love.
            </p>
            <p>
              How do you cope with the mounting pressure? Do you do more with less? Yes.<br />
              Do you sacrifice your own well-being to keep up with the demands of the business? Yes.<br />
              If your answer is Yes to 1 or 2, it’s time to consider a Certified Home Care Coach!
            </p>
            <p>
              A support system to transform your agency—From Startup to Success. Implement a Success Blueprint to build the systems your agency requires to grow—and the strategic partner you desire to implement them.
            </p>
            <p>
              Let us be your strategic partner and support system to achieve success in home care with freedom, ease, and peace of mind.
            </p>
            <p><strong>Succeed in Home Care</strong></p>
            <p>
              Compliance without an operational and financial Success strategy generates a struggling agency.
            </p>
            <p>
              Growth without systems and structures can be painful. Discover how to grow and scale your business with your team to achieve success.
            </p>
          </div>

          <button onClick={() => navigate(-1)}>⬅ Go Back</button>
        </div>
      )}
    </div>
  );
};

export default SuccessCoachesPage;

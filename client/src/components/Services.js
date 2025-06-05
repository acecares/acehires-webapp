import React from 'react';
import './Services.css';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="services-container">
      <div className="overlay">
        <h1>Services & Vision</h1>
        <p className="tagline">Succeed • Grow • Thrive</p>

        {/* About, Mission, Vision, Core Values */}
        <div className="info-section">
          <div className="info-card">
            <h3>Ace Compliance Consulting's Company Culture improvement.</h3>
            <p>
              Our company's culture is performance based and growth oriented for constant and never-ending
Integrity-Driven Culture
The company would prioritize honesty, transparency, and ethical behavior in all interactions with clients, employees, and partners. This would create a trustworthy environment where employees are encouraged to act with integrity and clients feel confident in the company's commitment to high standards.
            </p>
          </div>

          <div className="info-card">
            <h3>Results-Oriented Culture</h3>
            <p>
             With a focus on Effectiveness, the culture would emphasize achieving measurable outcomes and delivering quality results. Employees would be encouraged to find practical solutions that meet client needs, ensuring that the company consistently fulfills its promises.
            </p>
          </div>

          <div className="info-card">
            <h3>Efficiency-Focused Culture</h3>
            <p>
              Emphasizing Efficiency means the company would value streamlined processes, time management, and resource optimization. There would be a strong focus on finding the most effective ways to complete tasks, reducing waste, and improving productivity across all operations.
            </p>
          </div>

          <div className="info-card">
            <h3>Culture of Achievement and Success</h3>
            <p>
              The value of Success would foster a culture that celebrates accomplishments, both individual and team-based.
The company would likely set high standards for performance and encourage a growth mindset, inspiring employees to continuously improve and excel.
            </p>
          </div>

          <div className="info-card">
            <h3>Overall Cultural Traits:</h3>
            <ul>
              <li><strong>Trustworthy and Transparent:</strong>  Built on integrity, the company is known for ethical practices and clear communication.</li>
              <li><strong>Goal-Oriented and High-Performing:</strong>Focus on achieving results and success drives employees to set ambitious goals and consistently meet them.</li>
              <li><strong>Streamlined and Effective:</strong> Efficiency as a core value, processes are optimized for productivity, making the organization agile and adaptable.</li>
            <li><strong>Supportive of Continuous Improvement:</strong> The culture encourages employees to develop skills and capabilities that align with the company's values and objectives.</li>
           <li><strong>Work Environment:</strong> Collaborative, supportive, growth-oriented and success driven</li>
             <li><strong>Employee Development:</strong> Focus on continuous learning, mentoring, and career advancement.</li>
             <li><strong> Customer Approach: </strong> Our team engagement with clients is proactive, hands-on, and results driven.</li>
              <li><strong>Leadership Style:</strong> Pressure leadership, accessible, empowering, and focused on fostering a culture of accountability.</li>
            </ul>
          </div>
        </div>

        <div className="info-card">
          <h3>Core Values for Ace Compliance Consulting: ISEE</h3>
          <ul>
              <li><strong>Integrity -</strong>We uphold the highest standards of honesty, ethics, and accountability in every interaction and decision, ensuring trust and reliability in all we do.</li>
              <li><strong>Success -</strong>We are driven by our clients' achievements, committed to transforming challenges into opportunities and fostering long-term growth and excellence.</li>
              <li><strong>Effectiveness -</strong>We deliver impactful solutions and measurable results, empowering our clients to thrive in a competitive and regulated industry.</li>
            <li><strong>Efficiency -</strong>We streamline processes, optimize operations, and provide practical strategies that save time, resources, and energy for maximum success.</li>
            </ul>
        </div>


         <div className="info-card">
          <h3>Ace Compliance Consulting Word</h3>
          <h2>Grow *Win * Thrive</h2>
          <ul>
              <li><strong>Grow (for continuous improvement)</strong></li>
              <li><strong>Win (for achieving immediate goals)</strong></li>
              <li><strong>Thrive (for sustainability and long-term vision)</strong></li>
            </ul>
         </div>

        {/* Your original service cards section stays here */}
        <div className="services-grid">
          <div className="service-card">
            <h3>📋 PAS Licensing Support</h3>
            <p>Expert guidance to complete and submit PAS applications for multiple U.S. states. We walk clients through each step of the process.</p>
          </div>
          <div className="service-card">
            <h3>📋 HIPAA Compliance Guidance</h3>
            <p>Ensure your practice or business is compliant with HIPAA laws with our detailed audits, policy templates, and consultant coaching.</p>
          </div>
          <div className="service-card">
            <h3>💼 Medicaid/Medicare Consulting</h3>
            <p>We prepare documentation and assist in applying for Medicaid/Medicare provider enrollment or billing credentials.</p>
          </div>
          <div className="service-card">
            <h3>👩‍⚕️ Training for In-Home Caregivers</h3>
            <p>Special programs for caregivers, nurses, and CNAs providing home-based medical services. Certification included.</p>
          </div>
          <div className="service-card">
            <h3>💻 Admin Support & Workflow Automation</h3>
            <p>We implement tools like GoHighLevel, vcita, and forms to help automate reminders, document intake, and follow-ups.</p>
          </div>
        </div>

        <h2>Our Vision</h2>
        <p>
          To be the most trusted partner in healthcare compliance by offering innovative, accessible, and simplified solutions
          to empower care providers and administrators across the country.
        </p>

        <button onClick={() => navigate('/')}>⬅ Back to Home</button>
      </div>
    </div>
  );
};

export default Services;

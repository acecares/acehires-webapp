import React, { useState } from 'react';
import './ApplicantApply.css';

const ApplicantApply = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    licenseNumber: '',
    licenseType: '',
    serviceAreas: '',
    certifications: '',
    experience: '',
    availability: '',
    hasBackgroundCheck: '',
    additionalInfo: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Form submitted (this is a placeholder for backend submission).');
  };

  return (
    <div className="Applicant-form-container">
      <h1>Applicant Application</h1>
      <form onSubmit={handleSubmit}>
        <input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input name="phone" type="tel" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
        <input name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
        <input name="city" placeholder="City" value={formData.city} onChange={handleChange} />
        <input name="state" placeholder="State" value={formData.state} onChange={handleChange} />
        <input name="zip" placeholder="ZIP Code" value={formData.zip} onChange={handleChange} />
        <input name="licenseNumber" placeholder="Professional License Number" value={formData.licenseNumber} onChange={handleChange} />
        <input name="licenseType" placeholder="License Type (RN, LVN, CNA, etc.)" value={formData.licenseType} onChange={handleChange} />
        <input name="serviceAreas" placeholder="Service Areas (cities or zip codes)" value={formData.serviceAreas} onChange={handleChange} />
        <input name="certifications" placeholder="Certifications (e.g., CPR, HIPAA, OSHA)" value={formData.certifications} onChange={handleChange} />
        <textarea name="experience" placeholder="Describe your experience in Medicare/Medicaid consulting or care" value={formData.experience} onChange={handleChange}></textarea>
        <input name="availability" placeholder="Availability (e.g., Weekdays, Weekends, Evenings)" value={formData.availability} onChange={handleChange} />
        <input name="hasBackgroundCheck" placeholder="Do you have a valid background check? (Yes/No)" value={formData.hasBackgroundCheck} onChange={handleChange} />
        <textarea name="additionalInfo" placeholder="Any additional information" value={formData.additionalInfo} onChange={handleChange}></textarea>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplicantApply;

// client/src/components/ConsultantForm.js
import React, { useState } from 'react';

const ConsultantForm = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', serviceType: '', experience: ''
  });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/consultants', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    alert(data.message);
    setFormData({ name: '', email: '', serviceType: '', experience: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input name="email" placeholder="Email" type="email" value={formData.email} onChange={handleChange} required />
      <input name="serviceType" placeholder="Service Type" value={formData.serviceType} onChange={handleChange} required />
      <textarea name="experience" placeholder="Experience" value={formData.experience} onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ConsultantForm;

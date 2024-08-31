import React, { useState } from 'react';
// import './PatientForm.css';


export function Admission(){
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dob: '',
    mobile: '',
    aadhar: '',
    email: '',
    address: '',
    category: '',
  });

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // For now, just log the form data to the console
    console.log('Form submitted:', formData);
    // You can add more logic here for form submission
  };

  return (
    <div id='SH'>
    <div >
      <h1>Patient Registration Form</h1>
      <div className='moveform'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
          placeholder='Enter your name'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            required
          >
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="mobile">Mobile:</label>
          <input
            placeholder='Enter your Mobile Number'
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="aadhar">Aadhar Number:</label>
          <input
            placeholder='Enter your Aadhar Number'
            type="text"
            id="aadhar"
            name="aadhar"
            value={formData.aadhar}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            placeholder='Enter your Email'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <textarea
            placeholder='Enter Address'
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
          >
            <option value="">Select...</option>
            <option value="inpatient">Inpatient</option>
            <option value="outpatient">Outpatient</option>
          </select>
        </div>
        <button id='btn' type="submit">Submit</button>
      </form>
      </div>
    </div>
    </div>
  );
};

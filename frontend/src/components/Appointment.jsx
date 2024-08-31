import React, { useState } from 'react';
import './HospitalAppointment.css';

const HospitalAppointment = () => {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        phone:' ',
        purpose: ''
    });
// Filename - App.js


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic, like sending the data to a server or processing it
        console.log('Appointment Details:', formData);
    };

    return (
        <div >
        <div className='appointment-container'>
             {/* <img src="./src/components/Appoint.jpg" />*/}
            <h2>Book an Appointment</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label></label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='Enter Your Name'
                        required
                    />
                </div>
                <div>
                    <label>Date:</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone"></label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="phone-input" // Ensures correct styling
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        pattern="[0-9]{10}" // Example pattern for a 10-digit phone number
                        
                    />
                </div>
                <div>
                    <label></label>
                    <textarea
                        name="purpose"
                        value={formData.symptoms}
                        onChange={handleChange}
                         placeholder="Enter The Purpose"
                        required
                    />
                </div>
              
                <button type="submit">Submit</button>
            </form>
        </div>
        </div>
    );
};

export default HospitalAppointment;

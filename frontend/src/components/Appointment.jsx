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
        <div id="appointment">
        <div className='appointment-container'>
             {/* <img src="./src/components/Appoint.jpg" />*/}
            <h2>Book an Appointment</h2>
            <form onSubmit={handleSubmit}>
                <div  className="form-group">
                    <label htmlFor="name"></label>
                    
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        id="name"
                        onChange={handleChange}
                        placeholder='Name'
                        required
                    />
                    <i class='bx bx-user'></i>
                </div>
                <div  className="form-group">
                    <label htmlFor="date"></label>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phone "></label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="phone-input" // Ensures correct styling
                        placeholder='Phone Number'
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        pattern="[0-9]{10}" // Example pattern for a 10-digit phone number
                        
                    />
                    <i class='bx bx-phone'></i>
                </div>
                <div  className="form-group">
                    <label></label>
                    <textarea
                        name="purpose"
                        
                        value={formData.symptoms}
                        onChange={handleChange}
                         placeholder="Purpose"
                        required
                    />
                </div>
              
                <button type="submit" className='btn'>Submit</button>
            </form>
        </div>
        </div>
    );
};

export default HospitalAppointment;

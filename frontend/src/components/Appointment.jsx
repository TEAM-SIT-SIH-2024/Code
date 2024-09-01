import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import './HospitalAppointment.css';

export function Appointment() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        phone: '',
        purpose: ''
    });
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            setIsAuthenticated(false);
            navigate('/User/signin');
        }
    }, [navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/hospital/appointment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                alert("Appointment booked successfully!");
                setFormData({
                    name: "",
                    date: "",
                    phone: "",
                    purpose: ""
                });
                navigate('/hospitals');
            } else {
                const errorData = await response.json();
                alert("Failed to book appointment: " + errorData.message);
            }
        } catch (error) {
            console.error("Error booking appointment:", error);
            alert("An error occurred while booking the appointment.");
        }
    };

    if (!isAuthenticated) {
        return null; // Or some loading indicator, if preferred
    }

    return (
        <div id="appointment">
            <div className='appointment-container'>
                <h2>Book an Appointment</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
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
                        <i className='bx bx-user'></i>
                    </div>
                    <div className="form-group">
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
                        <label htmlFor="phone"></label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="phone-input"
                            placeholder='Phone Number'
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                        <i className='bx bx-phone'></i>
                    </div>
                    <div className="form-group">
                        <label htmlFor="purpose"></label>
                        <textarea
                            name="purpose"
                            id="purpose"
                            value={formData.purpose}
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

export default Appointment;

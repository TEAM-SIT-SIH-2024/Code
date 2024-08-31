import React, { useState, useEffect } from "react";
import axios from "axios";
import "./OpdQueue.css"

const OPDQueue = () => {
    const [queue, setQueue] = useState([]);
    const [currentPatient, setCurrentPatient] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchQueueData = async () => {
            try {
                const response = await axios.get('https://randomuser.me/api/?results=10');
                const fetchedQueue = response.data.results; // Access the array of users

                if (Array.isArray(fetchedQueue)) {
                    setQueue(fetchedQueue); // Set the queue with the fetched data
                } else {
                    console.error("API response does not contain an array:", fetchedQueue);
                }

                setLoading(false);
            } catch (error) {
                console.error("Error fetching queue data", error);
                setLoading(false);
            }
        };

        fetchQueueData();
    }, []);

    const callNextPatient = () => {
        if (queue.length > 0) {
            const nextPatient = queue.shift(); // Get the first patient from the queue
            setCurrentPatient(nextPatient);
            setQueue([...queue]); // Update the queue state to reflect the removal
        } else {
            alert("No more patients in the queue.");
        }
    };

    if (loading) return <p>Loading queue...</p>;

    return (
        <div className="opd-queue-container">
        <h2 className="title">OPD Queue Management</h2>
        <div className="current-patient-info">
            <h3 className="current-patient-title">
                Current Patient: 
                <span className="current-patient-name">
                    {currentPatient ? `${currentPatient.name.first} ${currentPatient.name.last}` : "None"}
                </span>
            </h3>
            <button className="call-next-button" onClick={callNextPatient}>Call Next Patient</button>
        </div>
        <div className="queue-section">
            <h4 className="queue-title">Queue:</h4>
            <ul className="queue-list">
                {queue.map((patient, index) => (
                    <li key={index} className="queue-item">
                        {`${patient.name.first} ${patient.name.last}`}
                    </li>
                ))}
            </ul>
        </div>
    </div>
    );
};

export default OPDQueue;

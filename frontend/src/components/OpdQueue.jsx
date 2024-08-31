import React, { useState, useEffect } from "react";
import axios from "axios";

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
        <div>
            <h2>OPD Queue Management</h2>
            <h3>
                Current Patient: {currentPatient ? `${currentPatient.name.first} ${currentPatient.name.last}` : "None"}
            </h3>
            <button onClick={callNextPatient}>Call Next Patient</button>
            <h4>Queue:</h4>
            <ul>
                {queue.map((patient, index) => (
                    <li key={index}>{`${patient.name.first} ${patient.name.last}`}</li>
                ))}
            </ul>
        </div>
    );
};

export default OPDQueue;

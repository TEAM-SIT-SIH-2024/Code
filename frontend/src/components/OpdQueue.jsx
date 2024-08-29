import React, { useState, useEffect } from "react";
import axios from "axios";

const OPDQueue = () => {
   
    const [queue, setQueue] = useState([]);
    const [currentPatient, setCurrentPatient] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchQueueData = async () => {
            try {
                const response = await axios.get( '3e4da04097c609c0a1db3724f26719aa-user1'); 
                const fetchedQueue = response.data;

              
                if (Array.isArray(fetchedQueue)) {
                    setQueue(fetchedQueue);
                } else {
                    console.error("API response is not an array:", fetchedQueue);
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
            const nextPatient = queue.shift();
            setCurrentPatient(nextPatient);
            setQueue([...queue]); // Update the queue
        } else {
            alert("No more patients in the queue.");
        }
    };

    if (loading) return <p>Loading queue...</p>;

    return (
        <div>
            <h2>OPD Queue Management</h2>
            <h3>Current Patient: {currentPatient ? currentPatient.name : "None"}</h3>
            <button onClick={callNextPatient}>Call Next Patient</button>
            <h4>Queue:</h4>
            <ul>
                {queue.map((patient, index) => (
                    <li key={index}>{patient.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default OPDQueue;

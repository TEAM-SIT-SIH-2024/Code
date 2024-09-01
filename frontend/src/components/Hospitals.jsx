import { useLocation } from 'react-router-dom';
import { useRecoilValueLoadable, useRecoilState } from "recoil";
import { hospitalDetailsSelector } from "../store/selectors/HospitalDetailsSelector";
import { selectedHospitalAtom, appointmentDetailsAtom } from "../store/atoms/AppointmentAtom";

export function Hospitals() {
  const location = useLocation();
  const { requiredCity } = location.state || {}; // Access the passed state

  const [selectedHospital, setSelectedHospital] = useRecoilState(selectedHospitalAtom);
  const [appointmentDetails, setAppointmentDetails] = useRecoilState(appointmentDetailsAtom);
  const hospitalIds = requiredCity?.hospitals || [];
  const hospitalDetailsLoadable = useRecoilValueLoadable(hospitalDetailsSelector(hospitalIds));

  const handleBookAppointmentClick = (hospital) => {
    e.preventdefault();
    setSelectedHospital(hospital);
  };

  const handleInputChange = (e) => {
    setAppointmentDetails({
      ...appointmentDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleAppointmentSubmit = async () => {
    try {
      const response = await fetch("/api/hospital/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          ...appointmentDetails,
          hospitalId: selectedHospital._id,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Appointment booked successfully!");
        setAppointmentDetails({
          name: "",
          purpose: "",
          time: "",
          phone: "",
        });
        setSelectedHospital(null);
      } else {
        const errorData = await response.json();
        alert("Failed to book appointment: " + errorData.message);
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("An error occurred while booking the appointment.");
    }
  };

  const mainCardStyle = {
    border: "1px solid #ccc",           // Light gray border for the main card
    borderRadius: "10px",               // Rounded corners for the main card
    padding: "30px",                    // Space inside the main card
    margin: "20px auto",                // Center the main card with margin
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)", // More prominent shadow for the main card
    backgroundColor: "white",           // White background for the main card
    maxWidth: "800px",                  // Limit the width of the main card
    width: "100%",                      // Main card takes full width up to max width
    textAlign: "center"                 // Center-align text for readability
  };

  const cardStyle = {
    border: "1px solid #ccc",           // Light gray border for the sub-cards
    borderRadius: "8px",                // Rounded corners for the sub-cards
    padding: "20px",                    // Space inside the sub-cards
    margin: "20px 0",                   // Space between sub-cards
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for a lifted effect
    backgroundColor: "rgb(206, 206, 206)", // Light gray background for the sub-cards
    textAlign: "center"                 // Center-align text for readability
  };

  const buttonStyle = {
    backgroundColor: "rgb(90, 145, 56)",
    color: "white",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "4px",
    transition: "background-color 0.3s",
    marginTop: "10px"
  };

  const inputStyle = {
    padding: "10px",
    margin: "5px 0",
    width: "calc(100% - 22px)",
    borderRadius: "4px",
    border: "1px solid #ccc"
  };

  switch (hospitalDetailsLoadable.state) {
    case "loading":
      return <div>Loading hospital details...</div>;

    case "hasValue":
      const hospitals = hospitalDetailsLoadable.contents;
      return (
        <div style={mainCardStyle}>
          <h3>{requiredCity.name}</h3>
          <div>This city currently has {hospitals.length} hospitals</div>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {hospitals.map((hospital) => (
              <li key={hospital._id} style={cardStyle}>
                <div>Name: {hospital.username}</div>
                <div>City: {hospital.city}</div>
                <div>Beds available: {hospital.beds}</div>
                <button 
                  onClick={() => handleBookAppointmentClick(hospital)}
                  style={buttonStyle}
                >
                  OPD Appointment
                </button>
              </li>
            ))}
          </ul>

          {selectedHospital && (
            <div style={cardStyle}>
              <h4>Book Appointment at {selectedHospital.username}</h4>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={appointmentDetails.name}
                onChange={handleInputChange}
                style={inputStyle}
              />
              <input
                type="text"
                name="purpose"
                placeholder="Purpose"
                value={appointmentDetails.purpose}
                onChange={handleInputChange}
                style={inputStyle}
              />
              <input
                type="time"
                name="time"
                value={appointmentDetails.time}
                onChange={handleInputChange}
                style={inputStyle}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={appointmentDetails.phone}
                onChange={handleInputChange}
                style={inputStyle}
              />
              <button 
                onClick={handleAppointmentSubmit}
                style={buttonStyle}
              >
                Submit Appointment
              </button>
            </div>
          )}
        </div>
      );

    case "hasError":
      return <div>Error loading hospital details: {hospitalDetailsLoadable.contents.message}</div>;

    default:
      return null;
  }
}

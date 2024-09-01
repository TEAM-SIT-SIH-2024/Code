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

  switch (hospitalDetailsLoadable.state) {
    case "loading":
      return <div>Loading hospital details...</div>;

    case "hasValue":
      const hospitals = hospitalDetailsLoadable.contents;
      return (
        <div>
          <h3>{requiredCity.name}</h3>
          <div>This city currently has {hospitals.length} hospitals</div>
          <ul>
            {hospitals.map((hospital) => (
              <li key={hospital._id}>
                <div>Name: {hospital.username}</div>
                <div>City: {hospital.city}</div>
                <div>Beds available: {hospital.beds}</div>
                <button onClick={() => handleBookAppointmentClick(hospital)}>OPD Appointment</button>
              </li>
            ))}
          </ul>

          {selectedHospital && (
            <div>
              <h4>Book Appointment at {selectedHospital.username}</h4>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={appointmentDetails.name}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="purpose"
                placeholder="Purpose"
                value={appointmentDetails.purpose}
                onChange={handleInputChange}
              />
              <input
                type="time"
                name="time"
                value={appointmentDetails.time}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={appointmentDetails.phone}
                onChange={handleInputChange}
              />
              <button onClick={handleAppointmentSubmit}>Submit Appointment</button>
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

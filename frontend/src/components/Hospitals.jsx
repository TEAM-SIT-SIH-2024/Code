import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValueLoadable, useRecoilState } from "recoil";
import { hospitalDetailsSelector } from "../store/selectors/HospitalDetailsSelector";
import { selectedHospitalAtom } from "../store/atoms/AppointmentAtom";

export function Hospitals() {
  const location = useLocation();
  const navigate = useNavigate();
  const { requiredCity } = location.state || {};

  const [selectedHospital, setSelectedHospital] = useRecoilState(selectedHospitalAtom);
  const hospitalIds = requiredCity?.hospitals || [];
  const hospitalDetailsLoadable = useRecoilValueLoadable(hospitalDetailsSelector(hospitalIds));

  const handleBookAppointmentClick = (hospital) => {
    setSelectedHospital(hospital);
    navigate('/appointment');
  };

  // Inline styles
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: 'rgb(206, 206, 206)', // Updated background color for container
  };

  const cardStyle = {
    border: '2px solid #000', // Black border
    borderRadius: '12px', // Border radius
    padding: '16px',
    marginBottom: '16px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: '1000px', // Increased width of the card
    minHeight: '400px', // Increased height of the card
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', // Center content vertically
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: '2px solid #000', // Black border
    borderRadius: '8px', // Border radius
    padding: '8px 16px',
    cursor: 'pointer',
    fontSize: '14px',
    marginTop: '8px',
    transition: 'background-color 0.3s ease, border-color 0.3s ease', // Smooth transition for hover effect
  };

  const buttonHoverStyle = {
    backgroundColor: '#28a745', // Light green color for hover
    borderColor: '#218838', // Darker green border on hover
  };

  const headingStyle = {
    fontSize: '24px',
    marginBottom: '8px',
    textAlign: 'center', // Center align heading text
  };

  const subHeadingStyle = {
    fontSize: '16px',
    marginBottom: '16px',
    textAlign: 'center', // Center align subheading text
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
    e.target.style.borderColor = buttonHoverStyle.borderColor;
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = buttonStyle.backgroundColor;
    e.target.style.borderColor = buttonStyle.borderColor;
  };

  switch (hospitalDetailsLoadable.state) {
    case "loading":
      return <div>Loading hospital details...</div>;

    case "hasValue":
      const hospitals = hospitalDetailsLoadable.contents;
      return (
        <div style={containerStyle}>
          <div style={cardStyle}>
            <h3 style={headingStyle}>{requiredCity.name}</h3>
            <div style={subHeadingStyle}>This city currently has {hospitals.length} hospitals</div>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {hospitals.map((hospital) => (
                <li key={hospital._id} style={{ paddingBottom: '16px', textAlign: 'center' }}>
                  <div>Name: {hospital.username}</div>
                  <div>City: {hospital.city}</div>
                  <div>Beds available: {hospital.beds}</div>
                  <button 
                    onClick={() => handleBookAppointmentClick(hospital)}
                    style={buttonStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    OPD Appointment
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );

    case "hasError":
      return <div>Error loading hospital details: {hospitalDetailsLoadable.contents.message}</div>;

    default:
      return null;
  }
}

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
        </div>
      );

    case "hasError":
      return <div>Error loading hospital details: {hospitalDetailsLoadable.contents.message}</div>;

    default:
      return null;
  }
}

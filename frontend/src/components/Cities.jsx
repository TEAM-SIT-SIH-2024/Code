import { useState } from "react";
import { useRecoilValueLoadable } from "recoil";
import { hospitalDetailsSelector } from "../store/selectors/HospitalDetailsSelector";

export function Cities({ requiredCity }) {
  const [viewHospitals, setViewHospitals] = useState(false);
  const hospitalIds = requiredCity.hospitals;

  const hospitalDetailsLoadable = useRecoilValueLoadable(hospitalDetailsSelector(hospitalIds));

  const handleViewClick = () => {
    setViewHospitals(true);
  };

  if (!viewHospitals) {
    return (
      <div>
        <h3>{requiredCity.name}</h3>
        <div>This city currently has {requiredCity.hospitals.length} hospitals</div>
        <button onClick={handleViewClick}>View</button>
      </div>
    );
  }

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
                <button>OPD Appointment</button>
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

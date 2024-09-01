import { useState, useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";
import { citiesListAtom } from "../store/atoms/CityAtom";
import { useNavigate } from 'react-router-dom';

export function Cities({ requiredCity }) {
  const [viewHospitals, setViewHospitals] = useState(false);
  const navigate = useNavigate();
  const citiesLoadable = useRecoilValueLoadable(citiesListAtom);

  useEffect(() => {
    if (viewHospitals) {
      navigate("/cities/hospitals", { state: { requiredCity } });
    }
  }, [viewHospitals, navigate, requiredCity]);

  const handleViewClick = () => {
    setViewHospitals(true);
  };

  if (requiredCity === "") {
    switch (citiesLoadable.state) {
      case "loading":
        return <div>Loading all cities...</div>;

      case "hasValue":
        const cities = citiesLoadable.contents;
        return (
          <div>
            <h3>All Cities</h3>
            <ul>
              {cities.map((city) => (
                <li key={city._id}>
                  <h4>{city.name.toUpperCase()}</h4>
                  <div>This city currently has {city.hospitals.length} hospitals</div>
                  <button onClick={() => handleViewClick(city)}>View Hospitals</button>
                </li>
              ))}
            </ul>
          </div>
        );

      case "hasError":
        return <div>Error loading cities: {citiesLoadable.contents.message}</div>;

      default:
        return null;
    }
  }

  return (
    <div>
      <h3>{requiredCity.name.toUpperCase()}</h3>
      <div>This city currently has {requiredCity.hospitals.length} hospitals</div>
      <button onClick={handleViewClick}>View</button>
    </div>
  );
}

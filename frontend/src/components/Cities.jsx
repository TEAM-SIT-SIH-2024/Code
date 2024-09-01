import { useState, useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";
import { citiesListAtom } from "../store/atoms/CityAtom";
import { useNavigate } from 'react-router-dom';

export function Cities({ requiredCity }) {
  const [viewHospitals, setViewHospitals] = useState(false);
  const [hover, setHover] = useState(false); // State to track hover
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

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const buttonStyle = {
    backgroundColor: hover ? "rgb(90 145 56)" : "initial", // Change color on hover
    color: hover ? "white" : "initial",          // Change text color on hover for better contrast
    border: "1px solid #ccc",
    padding: "10px 15px",
    cursor: "pointer",
    borderRadius: "4px",
    transition: "background-color 0.3s, color 0.3s" // Smooth transition for hover effect
  };

  const cardStyle = {
    border: "1px solid #ccc",           // Light gray border for the card
    borderRadius: "8px",                // Rounded corners for the card
    padding: "20px",                    // Space inside the card
    margin: "20px 0",                   // Space between cards
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",  // Subtle shadow for a lifted effect
    backgroundColor: "rgb(206 206 206)",       // Light gray background for the card
    maxWidth: "600px",                  // Limit the width of the card
    width: "100%",                      // Card takes full width up to max width
    textAlign: "center"                 // Center-align text for better readability
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"                // Center all cards horizontally
  };

  if (requiredCity === "") {
    switch (citiesLoadable.state) {
      case "loading":
        return <div>Loading all cities...</div>;

      case "hasValue":
        const cities = citiesLoadable.contents;
        return (
          <div style={containerStyle}>
            <h3>All Cities</h3>
            <ul style={{ backgroundColor:"green", padding: 0 }}>
              {cities.map((city) => (
                <li key={city._id} style={cardStyle}>
                  <h4>{city.name}</h4>
                  <div>This city currently has {city.hospitals.length} hospitals</div>
                  <button
                    onClick={() => handleViewClick(city)}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={buttonStyle}
                  >
                    View Hospitals
                  </button>
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
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h3>{requiredCity.name}</h3>
        <div>This city currently has {requiredCity.hospitals.length} hospitals</div>
        <button
          onClick={handleViewClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={buttonStyle}
        >
          View
        </button>
      </div>
    </div>
  );
}

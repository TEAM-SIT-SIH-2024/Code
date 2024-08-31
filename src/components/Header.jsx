import React from 'react';
import './Header.css'; // You can create a separate CSS file for styling

const Header = () => {
  return (
    <div className="header-container">
      <h1>Oops! Something went wrong.</h1>
      <p>We couldn't find the page you were looking for.</p>
      
      <img
        src="./src/components/error3.png"
        alt="Error"
        className="error-image"
      />
    </div>
  );
};

export default Header;

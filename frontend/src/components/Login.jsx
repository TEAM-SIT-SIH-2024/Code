import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import '../../styles/index.css';
// import 'bootstrap/dist/css/bootstrap.min.css'; 
// import '../../styles/userSignUp.css';

export function AdminSignin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');

  function handleClick() {
    navigate("/Admin/signup");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/admin/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, city }), // Include city
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        navigate('/Admin'); 
      } else {
        const errorData = await response.json();
        alert('Failed to sign in: ' + errorData.message);
      }
    } catch (error) {
      console.error('Error during sign in:', error);
      alert('An error occurred during sign in.');
    }
  };

  return (
    <div className="section">
      <Helmet>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </Helmet>
      <div className="form-box">
        <div className="form-value">
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label>Username</label>
            </div>
            <div className="inputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label>Password</label>
            </div>
            <div className="inputbox">
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
              <label>City</label>
            </div>
            <div className="forget">
              <label><input type="checkbox"/>Remember Me</label>
              <a href="#">Forgot Password</a>
            </div>
            <button type="submit">Log In</button>
            <div className="register">
              <p>Don't have an account?</p>
              <button onClick={handleClick}>SignUp</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export function AdminSignup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '', 
    beds: '',
    opdTime: '',
    city: '' // Added city field
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    try {
      const response = await fetch('http://localhost:3000/admin/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Signup successful!');
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          beds: '',
          opdTime: '',
          city: '', // Reset city field
        });
      } else {
        const errorData = await response.json();
        alert('Failed to sign up: ' + errorData.message);
      }
    } catch (error) {
      console.error('Error during sign up:', error);
      alert('An error occurred during sign up.');
    }
  };

  return (
    <div className="section">
      <Helmet>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </Helmet>
      <div className="form-box">
        <div className="form-value">
          <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <div className="inputbox">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <label>Name</label>
            </div>
            <div className="inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <label>Email</label>
            </div>
            <div className="inputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <label>Password</label>
            </div>
            <div className="inputbox">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
              <label>Confirm Password</label>
            </div>
            <div className="inputbox">
              <input
                type="text"
                name="beds"
                value={formData.beds}
                onChange={handleInputChange}
                required
              />
              <label>Beds</label>
            </div>
            <div className="inputbox">
              <input
                type="text"
                name="opdTime"
                value={formData.opdTime}
                onChange={handleInputChange}
                required
              />
              <label>OPD Time</label>
            </div>
            <div className="inputbox">
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
              <label>City</label>
            </div>
            <button type="submit" className="btn btn-dark btn-block">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}
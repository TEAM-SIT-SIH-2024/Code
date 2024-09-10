import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import '../../styles/index.css';
// import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../../styles/userSignUp.css';
import '../../styles/UserSignin.css';
import '../../styles/AdminSignUp.css';
import '../../styles/AdminSignin.css';

export function AdminSignup() {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    confirmPassword: '',
    beds: '',
    opdTime: '',
    city: ''
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
        body: JSON.stringify({
          username: formData.name.toLowerCase(),
          password: formData.password,
          city: formData.city.toLowerCase(),
          beds: formData.beds,
          opdTime: formData.opdTime,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Signup successful!');
        setFormData({
          name: '',
          password: '',
          confirmPassword: '',
          beds: '',
          opdTime: '',
          city: '',
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
    <div className="AdSpsection">
    <Helmet>
      <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    </Helmet>
    <div className="AdSpform-box">
      <div className="AdSpform-value">
        <form onSubmit={handleSubmit}>
          <h2 className='AdSph2'>Sign Up</h2>
          <div className="AdSpinputbox">
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
          <div className="AdSpinputbox">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <label>Password</label>
          </div>
          <div className="AdSpinputbox">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
            <label>Confirm Password</label>
          </div>
          <div className="AdSpinputbox">
            <input
              type="text"
              name="beds"
              value={formData.beds}
              onChange={handleInputChange}
              required
            />
            <label>Beds</label>
          </div>
          <div className="AdSpinputbox">
            <input
              type="text"
              name="opdTime"
              value={formData.opdTime}
              onChange={handleInputChange}
              required
            />
            <label>OPD Time</label>
          </div>
          <div className="AdSpinputbox">
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
        body: JSON.stringify({ username, password, city }), // Ensure all fields are included
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
    <div className="Adsection">
      <Helmet>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </Helmet>
      <div className="Adform-box">
        <div className="Adform-value">
          <form onSubmit={handleSubmit}>
            <h2 className='Adh2'>Login</h2>
            <div className="Adinputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value.toLowerCase())}
                required
              />
              <label>Username</label>
            </div>
            <div className="Adinputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label>Password</label>
            </div>
            <div className="Adinputbox">
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value.toLowerCase())}
                required
              />
              <label>City</label>
            </div>
            <div className="Adforget">
              <label><input type="checkbox"/> Remember Me</label>
              <a href="#">Forgot Password</a>
            </div>
            <button type="submit">Log In</button>
            <div className="Adregister">
              <p>Don't have an account?</p>
              <button onClick={handleClick}>SignUp</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export function UserSignin() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/user/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem("token", data.token);
                navigate("/appointment");
            } else {
                const errorData = await response.json();
                setError(errorData.message);
            }
        } catch (error) {
            console.error("Error signing in:", error);
            setError("An error occurred while signing in.");
        }
    };

    return (
        <div className="Usrsection">
            <Helmet>
                <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
                <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
            </Helmet>
            <div className="Usrform-box">
                <div className="Usrform-value">
                    <form onSubmit={handleLogin}>
                        <h2 className='Usrh2'>Login</h2>
                        <div className="Usrinputbox">
                            <ion-icon name="mail-outline"></ion-icon>
                            <input
                                type="text"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value.toLowerCase())}
                                required
                            />
                            <label>Username</label>
                        </div>
                        <div className="Usrinputbox">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <label>Password</label>
                        </div>
                        <div className="Usrforget">
                            <label><input type="checkbox" /> Remember Me</label>
                            <a href="#">Forgot Password</a>
                        </div>
                        {error && <p className="error">{error}</p>}
                        <button type="submit" className='Usrbutton'>Log In</button>
                        <div className="Usrregister">
                            <p>Don't have an account?</p>
                            <button onClick={() => navigate("/user/signup")}>SignUp</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export function UserSignup() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');

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
            setError('Passwords do not match!');
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/user/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: formData.username.toLowerCase(),
                    password: formData.password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                alert("Sign up successful! Please log in.");
                setFormData({
                    username: '',
                    password: '',
                    confirmPassword: '',
                });
            } else {
                const errorData = await response.json();
                setError(errorData.msg || "Failed to sign up.");
            }
        } catch (error) {
            console.error("Error signing up:", error);
            setError("An error occurred while signing up.");
        }
    };

    return (
        <div className="UsrSpsection">
            <Helmet>
                <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
                <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
            </Helmet>
            <div className="UsrSpform-box">
                <div className="UsrSpform-value">
                    <form onSubmit={handleSubmit}>
                        <h2 className='UsrSph2'>Sign Up</h2>
                        <div className="UsrSpinputbox">
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                required
                            />
                            <label>Username</label>
                        </div>
                        <div className="UsrSpinputbox">
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                            <label>Password</label>
                        </div>
                        <div className="UsrSpinputbox">
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                required
                            />
                            <label>Confirm Password</label>
                        </div>
                        {error && <p className="error">{error}</p>}
                        <button type="submit" className="UsrSpbutton">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
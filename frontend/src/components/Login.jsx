import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import './index.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [credentials, setCredentials] = useState({ username: "", password: "" })
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:3000/user/signin`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username: credentials.username, password: credentials.password })
        }); 
        const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem('token', json.authToken);
      console.log(json.auth);
      navigate("/");
    }
    }  

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
      };
  return (
    <div className = "section">
        <Helmet>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </Helmet>
        <div className="form-box">
                <div className="form-value">
                    <form onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <div className="inputbox"> <ion-icon name="mail-outline"></ion-icon>
                        <input value={credentials.username} onChange={onChange} name="username" required />
                            <label>Username</label>
                        </div>
                        <div className="inputbox"> <ion-icon name="lock-closed-outline"></ion-icon> <input type="password"
                                required/> <label>Password</label> </div>
                        <div className="forget"> <label><input type="checkbox"/>Remember Me</label> <a href="#">Forgot
                                Password</a> </div> 
                                <button type="submit">Log In</button>
                        <div className="register">
                            <p>Don't have an account?</p><a>SignUp</a>
                        </div>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default Login

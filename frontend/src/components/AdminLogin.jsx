import React from 'react'
import { Helmet } from 'react-helmet';
import './index.css';
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate=useNavigate();
    function handleClick(){
        navigate("/SignUp");
    }
  return (
    <div className = "section">
        <Helmet>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </Helmet>
        <div className="form-box">
                <div className="form-value">
                    <form>
                        <h2>Login</h2>
                        <div className="inputbox"> <ion-icon name="mail-outline"></ion-icon>
                        <input type="text" required />
                            <label>Username</label>
                        </div>
                        
                        <div className="inputbox"> <ion-icon name="lock-closed-outline"></ion-icon> <input type="password"
                                required/> <label>Password</label> </div>
                                <div className="inputbox"> <ion-icon name="mail-outline"></ion-icon>
                        <input type="text" required />
                            <label>City</label>
                        </div>
                        <div className="forget"> <label><input type="checkbox"/>Remember Me</label> <a href="#">Forgot
                                Password</a> </div> <button>Log In</button>
                
                        <div className="register">
                            <p>Don't have an account?</p><a onClick={handleClick}>SignUp</a>
                        </div>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default Login

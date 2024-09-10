import React from 'react'
import { Helmet } from 'react-helmet';
import '../../styles/UserSignin.css';
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate=useNavigate();
    function handleClick(){
        navigate("/SignUp");
    }
  return (
    <div className = "Usrsection">
        <Helmet>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </Helmet>
        <div className="Usrform-box">
                <div className="Usrform-value">
                    <form>
                        <h2 className='Usrh2'>Login</h2>
                        <div className="Usrinputbox"> <ion-icon name="mail-outline"></ion-icon>
                        <input type="text" required />
                            <label>Username</label>
                        </div>
                        <div className="Usrinputbox"> <ion-icon name="lock-closed-outline"></ion-icon> <input type="password"
                                required/> <label>Password</label> </div>
                        <div className="Usrforget"> <label><input type="checkbox"/>Remember Me</label> <a href="#">Forgot
                                Password</a> </div> <button className='Usrbutton'>Log In</button>
                        <div className="Usrregister">
                            <p>Don't have an account?</p><a onClick={handleClick}>SignUp</a>
                        </div>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default Login

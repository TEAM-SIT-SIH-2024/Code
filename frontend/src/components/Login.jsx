import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import '../../styles/index.css';
// import 'bootstrap/dist/css/bootstrap.min.css'; 
// import '../../styles/userSignUp.css';


export function AdminSignin() {
    const navigate=useNavigate();
    function handleClick(){
        navigate("/Admin/signup");
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

export function AdminSignup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    Beds: '',
    OPDTime:'',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Form Data:', formData);
    setFormData({
      name: '',
      email: '',
      password: '',
      Beds: '',
      OPDTime:''
    });
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
              <label>City</label>
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
                name="Beds"
                value={formData.Beds}
                onChange={handleInputChange}
                required
              />
              <label>Beds</label>
              
            </div>
            <div className="inputbox">
              <input
                type="password"
                name="OPDTime"
                value={formData.OPDTime}
                onChange={handleInputChange}
                required
              />
              <label>OPD Time</label>
              
            </div>
            <button type="submit" className="btn btn-dark btn-block">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}
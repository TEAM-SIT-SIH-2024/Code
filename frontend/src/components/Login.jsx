import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../../styles/AdminSignin.css';
// import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../../styles/AdminSignUp.css';


export function AdminSignin() {
    const navigate=useNavigate();
    function handleClick(){
        navigate("/Admin/signup");
    }
  return (
    <div className = "Adsection">
        <Helmet>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </Helmet>
        <div className="Adform-box">
                <div className="form-value">
                    <form>
                        <h2 className='Adh2'>Login</h2>
                        <div className="Adinputbox"> <ion-icon name="mail-outline"></ion-icon>
                        <input type="text" required />
                            <label>Username</label>
                        </div>
                        
                        <div className="Adinputbox"> <ion-icon name="lock-closed-outline"></ion-icon> <input type="password"
                                required/> <label>Password</label> </div>
                                <div className="Adinputbox">
                        <input type="text" required />
                            <label>City</label>
                        </div>
                        <div className="Adforget"> <label><input type="checkbox"/>Remember Me</label> <a href="#">Forgot
                                Password</a> </div> <button className='Adbutton'>Log In</button>
                
                        <div className="Adregister">
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
            <div className="AdSpinputbox">
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
            <div className="AdSpinputbox">
              <input
                type="password"
                name="Beds"
                value={formData.Beds}
                onChange={handleInputChange}
                required
              />
              <label>Beds</label>
              
            </div>
            <div className="AdSpinputbox">
              <input
                type="password"
                name="OPDTime"
                value={formData.OPDTime}
                onChange={handleInputChange}
                required
              />
              <label>OPD Time</label>
              
            </div>
            <button type="submit" className="AdSpbutton">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}
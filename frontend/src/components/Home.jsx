import React from 'react'
import "./Home.css"

function Home() {
  return (
    <div>
    <div className="container">
      <nav>
        <div className="nav__first">
          <div>
      <img className="SIHimg" src="./src/components/SIH.png" id='C' />
      </div>
        <div className="nav__logo"> MediQueue</div>
        </div>
        <ul className="nav__links">
          <li className="link"><a href="#">Home</a></li>
          <li className="link"><a href="#">About Us</a></li>
          <li className="link"><a href="#">Beds</a></li>
          {/* <li className="link"><a href="#">Help & Support</a></li>
         */}
        </ul>
        <button className="btn">Help & Support</button>
      </nav>
    </div>
    <header>
      {/* <nav className="section__container nav__container">
        <div className="nav__logo">Health<span>Care</span></div>
        <ul className="nav__links">
         <li className="link"><a href="#home">Home</a></li>
          <li className="link"><a href="#about">About Us</a></li>
          <li className="link"><a href="#service">Services</a></li>
          <li className="link"><a href="#pages">Pages</a></li>
          <li className="link"><a href="#blog">Blog</a></li>
        </ul>
        <button className="btn">Contact Us</button>
      </nav> */}
      <div className="section__container header__container" id="home">
        <div className="header__content">
          <h1>Empowering Your Health with Care and Innovation</h1>
          <br></br>
          <p>
            {/* Welcome, where exceptional patient experiences are our priority.
            With compassionate care, state-of-the-art facilities, and a
            patient-centered approach, we're dedicated to your well-being. Trust
            us with your health and experience the difference. */}
             Welcome to a place where your health journey is enhanced by our 
             advanced facilities and compassionate team. We are dedicated to providing you with the best care possible.
          </p>
          <br></br>
          <button className="btn">See Services</button>
        </div>
        {/* <div className="header__form">
          <form>
            <h4>Book Now</h4>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Address" />
            <input type="text" placeholder="Phone No." />
            <button className="btn form__btn">Book Appointment</button>
          </form>
        </div> */}
      </div>
    </header>

    <section className="section__container service__container" id="service">
      <div className="service__header">
        <div className="service__header__content">
          <h2 className="section__header">Our Special service</h2>
          <p>
            Beyond simply providing medical care, our commitment lies in
            delivering unparalleled service tailored to your unique needs.
          </p>
        </div>
        <button className="service__btn">Ask A Service</button>
      </div>
      <div className="service__grid">
        <div className="service__card">
          <span><i className="ri-microscope-line"></i></span>
          <h4>OPD Queue</h4>
          <p>
          Experience hassle-free OPD services with our streamlined queue management system.
          </p>
          <a href="#">Learn More</a>
        </div>
        <div className="service__card">
          <span><i className="ri-mental-health-line"></i></span>
          <h4>Bed Availability</h4>
          <p>
          Stay informed with our accurate and timely bed availability tracking, ensuring prompt and efficient care.
          </p>
          <a href="#">Learn More</a>
        </div>
        <div className="service__card">
          <span><i className="ri-hospital-line"></i></span>
          <h4>City Module</h4>
          <p>
          Integrating city-wide healthcare services for seamless access and coordinated patient management across the region.
          </p>
          <a href="#">Learn More</a>
        </div>
      </div>
    </section>
    <section className="section__container about__container" id="about">
      <div className="about__content">
        <h2 className="section__header">About Us</h2>
        <p>
        Welcome to our healthcare system, your go-to platform for innovative solutions in hospital management and patient care. 
        We are dedicated to enhancing healthcare efficiency and ensuring that patients receive timely and effective care.


        </p>
        <p>
        Explore our cutting-edge technology designed to electronically detect bed occupancy in hospitals.
 Our system provides real-time updates, allowing healthcare providers to optimize bed management and improve patient flow, 
 ensuring that every patient receives the attention they need without delay.
        </p>
        <p>
        Stay informed with our advanced solutions for hospital operations. By integrating technology with patient care, 
we aim to streamline hospital processes, reduce wait times, and enhance the overall patient experience. 
Trust us to support your healthcare facility in delivering the highest standard of care.
        </p>
      </div>
      <div className="about__image">
        <img src="./src/components/about.jpg" alt="about" />
      </div>
    </section>

    <section className="section__container why__container" id="blog">
      <div className="why__image">
        <img src="./src/components/choose-us.jpg" alt="why choose us" />
      </div>
      <div className="why__content">
        <h2 className="section__header">Why Choose Us</h2>
        <p>
        Why Choose Us With a focus on innovation and efficiency, our advanced bed occupancy detection system ensures that hospital 
        resources are managed effectively, providing you with timely and exceptional patient care.
 

 


        </p>
        <div className="why__grid">
          <span><i className="ri-hand-heart-line"></i></span>
          <div>
            <h4>Optimized Patient Flow</h4>
            <p>
            Our system enhances patient flow by accurately detecting bed occupancy, ensuring that each patient receives prompt attention and care.
            </p>
          </div>
          <span><i className="ri-truck-line"></i></span>
          <div>
            <h4>Real-Time Bed Tracking</h4>
            <p>
            We offer real-time bed availability updates, enabling seamless coordination between departments and minimizing patient wait times.
            </p>
          </div>
          <span><i className="ri-hospital-line"></i></span>
          <div>
            <h4>Efficient Resource Management </h4>
            <p>
            Our technology-driven approach ensures that hospital beds are utilized efficiently, allowing healthcare providers to focus on delivering the best medical and surgical care.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* <section className="section__container doctors__container" id="pages">
      <div className="doctors__header">
        <div className="doctors__header__content">
          <h2 className="section__header">Our Special Doctors</h2>
          <p>
            We take pride in our exceptional team of doctors, each a specialist
            in their respective fields.
          </p>
        </div>
        <div className="doctors__nav">
          <span><i className="ri-arrow-left-line"></i></span>
          <span><i className="ri-arrow-right-line"></i></span>
        </div>
      </div>
      <div className="doctors__grid">
        <div className="doctors__card">
          <div className="doctors__card__image">
            <img src="assets/doctor-1.jpg" alt="doctor" />
            <div className="doctors__socials">
              <span><i className="ri-instagram-line"></i></span>
              <span><i className="ri-facebook-fill"></i></span>
              <span><i className="ri-heart-fill"></i></span>
              <span><i className="ri-twitter-fill"></i></span>
            </div>
          </div>
          <h4>Dr. Emily Smith</h4>
          <p>Cardiologist</p>
        </div>
        <div className="doctors__card">
          <div className="doctors__card__image">
            <img src="assets/doctor-2.jpg" alt="doctor" />
            <div className="doctors__socials">
              <span><i className="ri-instagram-line"></i></span>
              <span><i className="ri-facebook-fill"></i></span>
              <span><i className="ri-heart-fill"></i></span>
              <span><i className="ri-twitter-fill"></i></span>
            </div>
          </div>
          <h4>Dr. James Anderson</h4>
          <p>Neurosurgeon</p>
        </div>
        <div className="doctors__card">
          <div className="doctors__card__image">
            <img src="assets/doctor-3.jpg" alt="doctor" />
            <div className="doctors__socials">
              <span><i className="ri-instagram-line"></i></span>
              <span><i className="ri-facebook-fill"></i></span>
              <span><i className="ri-heart-fill"></i></span>
              <span><i className="ri-twitter-fill"></i></span>
            </div>
          </div>
          <h4>Dr. Michael Lee</h4>
          <p>Dermatologist</p>
        </div>
      </div>
    </section> */}

    <footer className="footer">
      <div className="section__container footer__container">
        <div className="footer__col">
          <h3>Medi<span>Queue</span></h3>
          <p>
            We are honored to be a part of your healthcare journey and committed
            to delivering compassionate, personalized, and top-notch care every
            step of the way.
          </p>
          <p>
            Trust us with your health, and let us work together to achieve the
            best possible outcomes for you and your loved ones.
          </p>
        </div>
        <div className="footer__col">
          <h4>About Us</h4>
          <p>Home</p>
          <p>About Us</p>
          <p>Work With Us</p>
          <p>Our Blog</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="footer__col">
          <h4>Services</h4>
          <p>Search Terms</p>
          <p>Advance Search</p>
          <p>Privacy Policy</p>
          <p>Suppliers</p>
          <p>Our Stores</p>
        </div>
        <div className="footer__col">
          <h4>Contact Us</h4>
          <p>
            <i className="ri-map-pin-2-fill"></i> 123, London Bridge Street, London
          </p>
          <p><i className="ri-mail-fill"></i> support@care.com</p>
          <p><i className="ri-phone-fill"></i> (+012) 3456 789</p>
        </div>
      </div>
      <div className="footer__bar">
        <div className="footer__bar__content">
          <p>Copyright © 2023 Web Design Mastery. All rights reserved.</p>
          <div className="footer__socials">
            <span><i className="ri-instagram-line"></i></span>
            <span><i className="ri-facebook-fill"></i></span>
            <span><i className="ri-heart-fill"></i></span>
            <span><i className="ri-twitter-fill"></i></span>
          </div>
        </div>
      </div>
    </footer>
   
    </div>
  )
}

export default Home

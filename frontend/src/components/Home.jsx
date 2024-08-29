import React from 'react'
import "./Home.css"

function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
 
    <a className="navbar-brand" href="#">MediQueue</a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Hospital</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Beds</a>
        </li>
      </ul>
      <span className="navbar-text">
        Help & Support
      </span>
    </div>
    
  </div>
</nav>
<img className="SIHimg" src="./src/SIH.jpg" id='C' />
    

  
    <section>
        <div className='first'>
    Efficient hospital operations are crucial for delivering high-quality patient care. Our innovative Hospital Queue and Bed Management Solution is designed to optimize patient flow, reduce wait times, and enhance resource utilization in hospitals. By leveraging cutting-edge technology, we provide real-time insights into OPD (Outpatient Department) queues, bed availability, and patient admissions, ensuring a seamless experience for both patients and healthcare providers.
    </div></section>
 
    <section>
        <div>
            <h1>Key Features</h1>
   <div> 1.Smart Queuing System: Minimize patient wait times with a priority-based queuing model that dynamically adjusts based on real-time data and patient needs.</div>
   <div>2.Bed Availability Management: Efficiently track and forecast bed occupancy, streamlining patient admissions and discharges to optimize bed utilization.</div>
   <div>3.Integrated Admission Process: Simplify the admission process with a digital platform that captures patient information and integrates seamlessly with electronic health records (EHR).</div>
   <div>4.City-Wide Coordination: A centralized module that connects multiple hospitals and healthcare facilities, enabling resource sharing and better coordination across the city.</div>
   <div> 5.Data-Driven Decisions: Use predictive analytics and machine learning to enhance operational efficiency, improve patient outcomes, and support healthcare decision-making.</div>
    </div></section>

    <section><div>
    Our solution is designed to scale with the needs of the healthcare system, ensuring that hospitals can provide timely and effective care to every patient. Join us in transforming healthcare operations and improving patient care with our comprehensive Hospital Queue and Bed Management Solution.
    </div></section>
   
    </div>
  )
}

export default Home

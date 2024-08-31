import React, { useState } from "react";
import "./FaqAccordion.css";
import iconPlus from './assets/icon-plus.svg';
import emailIcon from './assets/img/email.png';
import locationIcon from './assets/img/location.png';
import shapeIcon from './assets/img/shape.png';
import phoneIcon from './assets/img/phone.png';

const FaqAccordion = () => {
  const [toggle, setToggle] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const handleToggle = (id) => {
    setToggle((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="container">
    <span className="big-circle"></span>
    <img src="img/shape.png" className="square" alt="" />
    <div className="form">
      <div className="contact-info">
        <h1 className="title">Help and Support</h1>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          dolorum adipisci recusandae praesentium dicta!
        </p>

        <div className="info">
          <div className="information">
            <img src={locationIcon} className="icon" alt="" />
            <p>92 Cherry Drive Uniondale, NY 11553</p>
          </div>
          <div className="information">
            <img src={emailIcon} className="icon" alt="" />
            <p>lorem@ipsum.com</p>
          </div>
          <div className="information">
            <img src={phoneIcon} className="icon" alt="" />
            <p>123-456-789</p>
          </div>
        </div>

        <div className="social-media">
          <p>Connect with us :</p>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <span className="circle one"></span>
        <span className="circle two"></span>

        <h2>
        Frequently Asked Questions
      </h2>

      <div className="question">
        <details open={toggle[1]}>
          <summary className="drop" onClick={() => handleToggle(1)}>
            1. How can I check my position in the OPD queue?
          </summary>
          <p>
            Answer :
            To check your position in the OPD queue, you can use the patient portal or app provided by the hospital. After logging in with your patient ID or other credentials, navigate to the Queue status section. This will display your current position in the queue, estimated waiting time, and the number of patients ahead of you.
          </p>
        </details>
      </div>

      <div className="question">
        <details open={toggle[2]}>
          <summary className="drop2" onClick={() => handleToggle(2)}>
            2. What should I do if I miss my turn in the queue?
          </summary>
          <p>
            Answer: If you miss your turn, you can rejoin the queue by speaking to the reception staff or using the hospital’s patient portal. Depending on the hospital’s policy, you may be placed at the end of the current queue or given a new appointment slot. Always try to arrive on time to avoid delays in your consultation.
          </p>
        </details>
      </div>

      <div className="question">
        <details open={toggle[3]}>
          <summary className="drop3" onClick={() => handleToggle(3)}>
            3.What should I do if the OPD queue is too long and I need immediate admission?
          </summary>
          <p>
            Answer: If you require immediate medical attention and the OPD queue is long, go directly to the hospital's emergency department or contact the admissions desk. They can assess your condition and may bypass the OPD queue to provide faster admission and access to a bed, depending on the severity of your case. Always inform the hospital staff about your situation so they can provide the necessary assistance
          </p>
        </details>
      </div>

      <div className="question">
        <details open={toggle[4]}>
          <summary className="drop4" onClick={() => handleToggle(4)}>
            4. How can I find out about bed availability in the hospital
          </summary>
          <p>Answer: To check bed availability, you can use the hospital’s patient portal or app. After logging in, navigate to the "Bed Availability" section. This feature provides real-time information about the number of available beds in different wards, such as general wards, ICU, and private rooms. You can also contact the hospital's admission desk for the most up-to-date information.
          </p>
        </details>
      </div>
      </div>
    </div>
  </div>
  );
};

export default FaqAccordion;

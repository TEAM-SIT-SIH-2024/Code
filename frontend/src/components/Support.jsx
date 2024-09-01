import React, { useState } from "react";
import '../../styles/FaqAccordion.css';
import iconPlus from '../../styles/images/icon-plus.svg';
import emailIcon from '../../styles/images/email.png';
import locationIcon from '../../styles/images/location.png';
import shapeIcon from '../../styles/images/shape.png';
import phoneIcon from '../../styles/images/phone.png';


export const Support = () => {
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
    <div className="Hlpcontainer">
    <span className="Hlpbig-circle"></span>
    <img src="img/shape.png" className="square" alt="" />
    <div className="Hlpform">
      <div className="Hlpcontact-info">
        <h1 className="Hlptitle">Help and Support</h1>
        <p className="Hlptext">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          dolorum adipisci recusandae praesentium dicta!
        </p>

        <div className="Hlpinfo">
          <div className="Hlpinformation">
            <img src={locationIcon} className="Hlpicon" alt="" />
            <p>92 Cherry Drive Uniondale, NY 11553</p>
          </div>
          <div className="Hlpinformation">
            <img src={emailIcon} className="Hlpicon" alt="" />
            <p>lorem@ipsum.com</p>
          </div>
          <div className="Hlpinformation">
            <img src={phoneIcon} className="Hlpicon" alt="" />
            <p>123-456-789</p>
          </div>
        </div>

        <div className="Hlpsocial-media">
          <p>Connect with us :</p>
          <div className="Hlpsocial-icons">
            <a href="#">
              <i className="Hlpfab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="Hlpfab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="Hlpfab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="Hlpfab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="Hlpcontact-form">
        <span className="Hlpcircle Hlpone"></span>
        <span className="Hlpcircle Hltwo"></span>

        <h2>
        Frequently Asked Questions
      </h2>

      <div className="Hlpquestion">
        <details open={toggle[1]}>
          <summary className="Hlpdrop" onClick={() => handleToggle(1)}>
            1. How can I check my position in the OPD queue?
          </summary>
          <p>
            Answer :
            To check your position in the OPD queue, you can use the patient portal or app provided by the hospital. After logging in with your patient ID or other credentials, navigate to the Queue status section. This will display your current position in the queue, estimated waiting time, and the number of patients ahead of you.
          </p>
        </details>
      </div>

      <div className="Hlpquestion">
        <details open={toggle[2]}>
          <summary className="Hlpdrop2" onClick={() => handleToggle(2)}>
            2. What should I do if I miss my turn in the queue?
          </summary>
          <p>
            Answer: If you miss your turn, you can rejoin the queue by speaking to the reception staff or using the hospital’s patient portal. Depending on the hospital’s policy, you may be placed at the end of the current queue or given a new appointment slot. Always try to arrive on time to avoid delays in your consultation.
          </p>
        </details>
      </div>

      <div className="Hlpquestion">
        <details open={toggle[3]}>
          <summary className="Hlpdrop3" onClick={() => handleToggle(3)}>
            3.What should I do if the OPD queue is too long and I need immediate admission?
          </summary>
          <p>
            Answer: If you require immediate medical attention and the OPD queue is long, go directly to the hospital's emergency department or contact the admissions desk. They can assess your condition and may bypass the OPD queue to provide faster admission and access to a bed, depending on the severity of your case. Always inform the hospital staff about your situation so they can provide the necessary assistance
          </p>
        </details>
      </div>

      <div className="Hlpquestion">
        <details open={toggle[4]}>
          <summary className="Hlpdrop4" onClick={() => handleToggle(4)}>
            4. How can I find out about bed availability in the hospital
          </summary>
          <p>Answer: To check bed availability, you can use the hospital’s patient portal or app. After logging in, navigate to the "Bed Availability" section. This feature provides real-time information about the number of available beds in different wards, such as general wards, ICU, and private rooms. You can also contact the hospital's admission desk for the most up-to-date information.
          </p>
        </details>
      </div>
      </div>
    </div>
  </div>
  );
};

export default Support;
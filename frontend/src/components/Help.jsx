import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AccordionComponent from './AccordianComponents';

 function Help(){
return (
  <>
        <div className="help-support-page">
            <h1>Help and Support</h1>
            </div>
            <section className="faq-section">
             <div className='container '  >
      <h1 className='my'>Frequently Asked Questions</h1>
      </div>
      </section>
      
      <AccordionComponent></AccordionComponent>
            
            <section className="contact-support">
                <h2>Contact Support</h2>
                <p> Email: <a  href="s63069824@gmail.com">s63069824@gmail.com</a>
                 </p>
                <p>Phone: +1234567890</p>
                
            </section>
            
            
       </>
    );
};

export default Help;

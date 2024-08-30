import React, { useState } from 'react';
import  './Accordion.css'

// Renaming the component to avoid naming conflicts
const AccordionComponent = () => {
  const data = [
    { title: "1. How can I check my position in the OPD queue?", content: "Answer: To check your position in the OPD queue, you can use the patient portal or app provided by the hospital. After logging in with your patient ID or other credentials, navigate to the Queue status section. This will display your current position in the queue, estimated waiting time, and the number of patients ahead of you." },
    { title: "2. What should I do if I miss my turn in the queue?", content: "Answer: If you miss your turn, you can rejoin the queue by speaking to the reception staff or using the hospital’s patient portal. Depending on the hospital’s policy, you may be placed at the end of the current queue or given a new appointment slot. Always try to arrive on time to avoid delays in your consultation." },
    { title: "4.What should I do if the OPD queue is too long and I need immediate admission?", content: "Answer: If you require immediate medical attention and the OPD queue is long, go directly to the hospital's emergency department or contact the admissions desk. They can assess your condition and may bypass the OPD queue to provide faster admission and access to a bed, depending on the severity of your case. Always inform the hospital staff about your situation so they can provide the necessary assistance."},


  ];

  return (
    <div>
      {data.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleAccordion} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
        {title}
      </div>
      {isOpen && (
        <div style={{ padding: '10px', backgroundColor: '#f1f1f1' }}>
          {content}
        </div>
      )}
    </div>
  );
};

export default AccordionComponent; // Exporting with the new name

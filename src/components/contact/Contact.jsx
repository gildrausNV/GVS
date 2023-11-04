import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <div className="contact-info">
        <div className="contact-item">
          <h3>Contact Information</h3>
          <p>Phone: 011 2862 474</p>
          <p>Email: ko@gvs.rs</p>
          <h3>Headquarters</h3>
          <p>Voje Veljkovića 18, 11050 Belgrade, Serbia</p>
        </div>
        {/* <div className="contact-item">
          <h3>Sales and Technical Support</h3>
          <p>Sales: Email: sales@gvs.rs</p>
          <p>Technical Support: Email: support@gvs.rs</p>
        </div> */}
        <div className="contact-item">
          <h3>Niš Branch</h3>
          <p>Bulevar svetog cara Konstantina 82-86, 18106 Niš, Serbia</p>
          <p>Phone: 018 551 086</p>
          {/* <h3>Sales and Technical Support</h3>
          <p>Sales: Email: sales@gvs.rs</p>
          <p>Technical Support: Email: support@gvs.rs</p> */}
        </div>
        <div className="contact-item">
          <h3>Moscow Office</h3>
          <p>+7 499 243 05 04</p>
          <p>+7 916 564 36 60</p>
          <p>Email: minavex@mail.ru</p>
          <p>121170 Moscow, Kutuzovski Prospekt d. 9 k. 1</p>
        </div>
        {/* <div className="contact-item">
          <h3>Sales Manager in CIS</h3>
          <p>Miliyana Yovanovich</p>
          <p>Phone: +7 906 737 86 76</p>
          <p>WhatsApp: +7 985 037 86 76</p>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;

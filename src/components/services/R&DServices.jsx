// RDServices.js
import React from "react";
import "./Services.css";
import softwareDevelopment from './software-development.png';
import productDevelopment from './product-development.jpg';

const RDServices = ({ t }) => {
  return (
    <div className="rd-services">
      <h2>{t('R&D Services')}</h2>
      <div className="services-container">
        <div className="service">
          <img src={productDevelopment} alt="Product Development" />
          <div className="service-text">
            <h2>{t('Product Development')}</h2>
            <p>
              {t('We offer R&D services for electronic products and systems completely led by technical specifications from the customer.')}
            </p>
            <ul>
              <li>
                {t('Electronic hardware development, both analog and digital, microprocessor controlled systems, power converters and RF units.')}
              </li>
              <li>
                {t('IP design for FPGA, both purely digital and mixed analog-digital programmable components.')}
              </li>
              <li>
                {t('We develop firmware with optional formal verification, with a vast field-proven library of in-house developed re-usable modules.')}
              </li>
            </ul>
          </div>
        </div>

        <div className="service">
          <img src={softwareDevelopment} alt="Software Development" />
          <div className="service-text">
            <h2>{t('Software Development')}</h2>
            <p>
              {t('For purely software products, we provide software development services:')}
            </p>
            <ul>
              <li>
                {t('We specialize in the design and implementation of real-time, high reliability, and high availability software.')}
              </li>
              <li>
                {t('In software development, we champion an approach which introduces quality in the design and implementation, with strong and “omni-present” QA to prove the quality rate.')}
              </li>
              <li>
                {t('We have vast experience in HW/SW co-design and co-verification, which enables the development of highly integrated and robust products and systems.')}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RDServices;

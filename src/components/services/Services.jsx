// Services.js
import React from "react";
import "./Services.css";
import ProductRelatedServices from "./ProductRelatedServices";
import RDServices from "./R&DServices";

const Services = ({ t }) => {
  return (
    <div className="services">
      <div className="services-container">
        <h2>{t('Services')}</h2>
        <p>
          {t('GVS products are offered to customers supported by a full line of accompanying services, covering the complete product life-cycle. Our services cut expenses and shorten product startup time. GVS also provides R&D services in its areas of expertise.')}
        </p>
        <ProductRelatedServices t={t}/>
        <RDServices t={t}/>
      </div>
    </div>
  );
};

export default Services;

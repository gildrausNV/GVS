// Products.js
import React from "react";
import "./Products.css";
import powerSupplySystem from "./Power-supply-systems.jpg";
import powerSupplyModule from "./power-supply-modules.jpg";
import mobileRectifiers from "./mobile-rectifiers.jpg";
import switchingSystems from "./switching-systems.jpg";
import lawfulInterception from "./lawful-interception.png";
import softSwitches from "./soft-switches.jpg";
import { useNavigate } from "react-router";

const Products = ({ t }) => {
  const navigate = useNavigate();

  return (
    <div className="products">
      <div className="products-content">
        <h2>{t('Products')}</h2>
        <p>
          {t('GVS products are highly dependable complex electronic systems. We see Dependability as a measure of how advisable is it to depend on the system. We cherish the traditional view of dependability as a combination of:')}
        </p>
        <div className="dependability-views">
          <div className="dependability-view">
            <h3>{t('High Availability')}</h3>
            <p>
              {t('Operational anytime you need it (zero or with minimal downtime)')}
            </p>
          </div>
          <div className="dependability-view">
            <h3>{t('High Reliability')}</h3>
            <p>
              {t('Operates within specification (never fails to operate as expected)')}
            </p>
          </div>
          <div className="dependability-view">
            <h3>{t('High Maintainability')}</h3>
            <p>
              {t('Easy to repair (easy to restore the initial level of dependability)')}
            </p>
          </div>
        </div>
        <p>
          {t('Modern age extended the definition of dependability with additional requirements:')}
        </p>
        <div className="dependability-views">
          <div className="dependability-view">
            <h3>{t('High Safety')}</h3>
            <p>
              {t('Not dangerous to user(s) or environment in all conditions, including fault')}
            </p>
          </div>
          <div className="dependability-view">
            <h3>{t('High Durability')}</h3>
            <p>
              {t('Remains functional in unfavorable conditions (without or with minimal repair)')}
            </p>
          </div>
          <div className="dependability-view">
            <h3>{t('Remains functional in unfavorable conditions (without or with minimal repair)')}</h3>
            <p>{t('Resistant to malice, corruption or misuse')}</p>
          </div>
        </div>
        <p>
          {t('GVS products fulfill relevant international standards (ITU-T, ISO, IEC), European (ETSI, ECMA), and national standards. Standard options include Serbian, English, and Russian language. GVS products are designed for easy localization to other languages. GVS products are accompanied with detailed technical documentation on the highest level.')}
        </p>
        {/* <p>
          {t('Standard options include Serbian, English, and Russian language. GVS products are designed for easy localization to other languages.')}
        </p>
        <p>
          {t('GVS products are accompanied with detailed technical documentation on the highest level.')}
        </p> */}

        <div className="product-images">
          <div className="product-image" onClick={() => navigate('/product/2')}>
            <img src={powerSupplySystem} alt="Power supply systems" />
            <p>{t('Power supply systems')}</p>
          </div>
          <div className="product-image" onClick={() => navigate('/product/1')}>
            <img src={mobileRectifiers} alt="Mobile rectifiers" />
            <p>{t('Mobile rectifiers')}</p>
          </div>
          <div className="product-image" onClick={() => navigate('/product/powerSupplyModule')}>
            <img src={powerSupplyModule} alt="Power supply modules" />
            <p>{t('Power supply modules')}</p>
          </div>
          <div className="product-image" onClick={() => navigate('/product/4')}>
            <img src={switchingSystems} alt="Switching systems" />
            <p>{t('Switching systems')}</p>
          </div>
          <div className="product-image" onClick={() => navigate('/product/3')}>
            <img src={lawfulInterception} alt="Lawful Interception" />
            <p>{t('Lawful Interception')}</p>
          </div>
          <div className="product-image" onClick={() => navigate('/product/softSwitches')}>
            <img src={softSwitches} alt="Soft Switches" />
            <p>{t('Soft Switches')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

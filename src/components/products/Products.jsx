// Products.js
import React from "react";
import "./Products.css";
import powerSupplySystem from "./Power-supply-systems.jpg";
import powerSupplyModule from "./power-supply-modules.jpg";
import mobileRectifiers from "./mobile-rectifiers.jpg";
import switchingSystems from "./switching-systems.jpg";
import lawfulInterception from "./lawful-interception.png";
import softSwitches from "./soft-switches.jpg";

const Products = () => {
  return (
    <div className="products">
      <div className="products-content">
        <h2>Products</h2>
        <p>
          GVS products are highly dependable complex electronic systems. We see
          Dependability as a measure of how advisable is it to depend on the
          system. We cherish the traditional view of dependability as a
          combination of:
        </p>
        <div className="dependability-views">
          <div className="dependability-view">
            <h3>High Availability</h3>
            <p>
              Operational anytime you need it (zero or with minimal downtime)
            </p>
          </div>
          <div className="dependability-view">
            <h3>High Reliability</h3>
            <p>
              Operates within specification (never fails to operate as expected)
            </p>
          </div>
          <div className="dependability-view">
            <h3>High Maintainability</h3>
            <p>
              Easy to repair (easy to restore the initial level of
              dependability)
            </p>
          </div>
        </div>
        <p>
          Modern age extended the definition of dependability with additional
          requirements:
        </p>
        <div className="dependability-views">
          <div className="dependability-view">
            <h3>High Safety</h3>
            <p>
              Not dangerous to user(s) or environment in all conditions,
              including fault
            </p>
          </div>
          <div className="dependability-view">
            <h3>High Durability</h3>
            <p>
              Remains functional in unfavorable conditions (without or with
              minimal repair)
            </p>
          </div>
          <div className="dependability-view">
            <h3>High Security</h3>
            <p>Resistant to malice, corruption or misuse</p>
          </div>
        </div>
        <p>
          GVS products fulfill relevant international standards (ITU-T, ISO,
          IEC), European (ETSI, ECMA), and national standards.
        </p>
        <p>
          Standard options include Serbian, English, and Russian language. GVS
          products are designed for easy localization to other languages.
        </p>
        <p>
          GVS products are accompanied with detailed technical documentation on
          the highest level.
        </p>

        <div className="product-images">
          <div className="product-image">
            <img src={powerSupplySystem} alt="Power supply systems" />
            <p>Power supply systems</p>
          </div>
          <div className="product-image">
            <img src={mobileRectifiers} alt="Mobile rectifiers" />
            <p>Mobile rectifiers</p>
          </div>
          <div className="product-image">
            <img src={powerSupplyModule} alt="Power supply modules" />
            <p>Power supply modules</p>
          </div>
          <div className="product-image">
            <img src={switchingSystems} alt="Switching systems" />
            <p>Switching systems</p>
          </div>
          <div className="product-image">
            <img src={lawfulInterception} alt="Lawful Interception" />
            <p>Lawful Interception</p>
          </div>
          <div className="product-image">
            <img src={softSwitches} alt="Soft Switches" />
            <p>Soft Switches</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

// ProductRelatedServices.js
import React from "react";
import "./Services.css";
import lifeCycle from './life-cycle.png';

const ProductRelatedServices = () => {
  return (
    <div className="product-related-services">
      <h3>Product related services</h3>
      <p>
        Alongside its products, GVS provides the services which can be grouped
        into: customer support and engineering services.
      </p>

      <div className="services-container">
        <div className="product-service">
          <h4>Customer support services include:</h4>
          <ul>
            <li>Technical support</li>
            <li>Training</li>
            <li>Hardware maintenance</li>
            <li>Software maintenance</li>
          </ul>
        </div>
        <div className="product-service">
          <h4>Engineering services are:</h4>
          <ul>
            <li>Installation</li>
            <li>Putting into operation</li>
            <li>Planning</li>
            <li>Engineering</li>
            <li>Upgrading</li>
            <li>Uninstallation</li>
          </ul>
        </div>
      </div>

      <p>
        Product related services are available throughout the product
        life-cycle.
      </p>
      <img src={lifeCycle} alt="Life cycle" />
      <p>
        Product lifecycle spans from the start of product sales until the last
        product of that type is in service. Each installation of a product lives
        its own service life, which lasts from installation to deinstallation.
        Product lifecycle refers to product type, meaning all installations of a
        certain product.
      </p>

      <p>
        Service life starts at takeover. During the service life, the customer
        enjoys support services, depending on the current product lifecycle
        phase.
      </p>

      <p>
        Declaration of "End of Support" doesn't mean that the product and
        customers still using the product are forgotten. After support has
        ended, GVS makes available resources enabling the customer himself or
        third parties to continue supporting the product. This phase is thus
        referred to as "Self-support."
      </p>

      <p>There are four phases in the product lifecycle:</p>
      <div className="phases-container">
        <div className="phase phase-1">
          <span>Mainstream support phase</span>
          <p>Product is actively developed</p>
        </div>
        <div className="phase phase-2">
          <span>Extended support phase</span>
          <p>From "End of Development" until declared "End of Life"</p>
        </div>
        <div className="phase phase-3">
          <span>Maintenance phase</span>
          <p>
            Repair service and spare parts are available, software is actively
            maintained
          </p>
        </div>
        <div className="phase phase-4">
          <span>Support phase</span>
          <p>
            GVS service center does not provide repair services, but offers
            technical support to customers or third parties providing those
            services
          </p>
        </div>
      </div>

      <p>
        Warranty period usually starts at product acceptance and may be
        different for each product installation. Relating to product lifecycle,
        the warranty period is negotiable.
      </p>
    </div>
  );
};

export default ProductRelatedServices;

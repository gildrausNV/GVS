// ProductDetails.js
import React from 'react';
import './ProductInfo.css';

const ProductDetails = ({ product }) => {
  return (
    <div className="product-details">
      <div className="product-name">{product.name}</div>
      <div className="product-info">
        <div className="product-image">
            <img src={product.image} alt={product.name} />
        </div>
        <div className="product-description">
          {product.description}
        </div>
      </div>
      <div className="product-attributes">
        <div className="attribute">
          <h3>Features</h3>
          <ul>
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="attribute">
          <h3>Applications</h3>
          <ul>
            {product.applications.map((application, index) => (
              <li key={index}>{application}</li>
            ))}
          </ul>
        </div>
        <div className="attribute">
          <h3>Benefits</h3>
          <ul>
            {product.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

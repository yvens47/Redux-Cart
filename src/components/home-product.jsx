import React from "react";
const HomeProduct = ({ product }) => {
  return (
    <div className="card home-product" style={{ width: "100%" }}>
      <div className="home-product-wrapper">
        <img src={product.defaultImage} className="card-img-top" alt="..." />
      </div>

      <div className="card-body">
        <p className="card-text">{product.name}</p>
        <p className="card-text">{product.price}</p>
      </div>
    </div>
  );
};

export default HomeProduct;

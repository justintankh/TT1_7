import React from "react";

const Product = ({ product }) => {
  return (
    <div>
      <h3>{product.title}</h3>
      <h3>${product.price}</h3>
    </div>
  );
};

export default Product;

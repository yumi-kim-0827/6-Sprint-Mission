import "./ProductList.css";

import ProductAll from "./ProductAll";
import ProductBest from "./ProductBest";

import React from "react";
const ProductList = () => {
  return (
    <div className="product_container">
      <ProductBest />
      <ProductAll />
    </div>
  );
};

export default ProductList;

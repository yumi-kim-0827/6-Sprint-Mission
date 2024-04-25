import React from "react";
import ProductItems from "./ProductItem";

const BestProduct = () => {
  return (
    <div>
        {Items.map((product) => (                                     
          <ProductItems key={product.id} product={product} showLikes />
        ))}
    </div>
  );
};

export default BestProduct;

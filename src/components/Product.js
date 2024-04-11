import "./Product.css";

import ProductAll from "./ProductAll";
import ProductBest from "./ProductBest";

const Product = () => {
  return (
    <div className="product_best_container">
      <ProductBest />
      <ProductAll />
    </div>
  );
};

export default Product;

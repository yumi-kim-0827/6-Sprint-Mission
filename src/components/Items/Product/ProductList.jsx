import "./ProductList.css";

import ProductAll from "./ProductAll";
import ProductBest from "./ProductBest";

const ProductList = () => {
  return (
    <div className="product_container">
      <ProductBest />
      <ProductAll />
    </div>
  );
};

export default ProductList;

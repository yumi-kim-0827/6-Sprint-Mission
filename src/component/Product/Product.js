import "../../css/Product.css";
import BestProducts from "./BestProduct.js";
import BasicProducts from "./BasicProducts.js";

function Product() {
  return (
    <div className="product-area">
      <BestProducts />
      <BasicProducts />
    </div>
  );
}

export default Product;

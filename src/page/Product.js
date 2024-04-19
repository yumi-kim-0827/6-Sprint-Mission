import "../css/Product.css";
import BestProducts from "../component/Product/BestProduct.js";
import BasicProducts from "../component/Product/BasicProducts.js";

function Product() {
  return (
    <div className="product-area">
      <BestProducts />
      <BasicProducts />
    </div>
  );
}

export default Product;

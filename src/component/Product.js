import "../css/Product.css";
import BestProducts from "./BestProduct.js";
import BasicProducts from "./BasicProducts.js";
import Paging from "./Paging.js";

function Product() {
  return (
    <div className="product-area">
      <BestProducts />
      <BasicProducts />
      <Paging />
    </div>
  );
}

export default Product;

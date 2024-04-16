import ProductCard from "./ProductCard.js";
import "../item/BestProducts.css";
function BestProductsSection({ products }) {
  return (
    <div className="bestProductsSection">
      <h1>베스트 상품</h1>
      <div className="bestProducts">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} category="best" />
        ))}
      </div>
    </div>
  );
}

export default BestProductsSection;

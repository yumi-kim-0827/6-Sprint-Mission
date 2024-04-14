import ProductCard from "./ProductCard.js";
import "../item/BestProducts.css";
function BestProductsSection({ products }) {
  const IMG_WIDTH = "280px";
  const IMG_HEIGHT = "280px";
  const bestProducts = products.slice(0, 4);
  return (
    <div className="bestProductsSection">
      <h1>베스트 상품</h1>
      <div className="bestProducts">
        {bestProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            imgWidth={IMG_WIDTH}
            imgHeight={IMG_HEIGHT}
          />
        ))}
      </div>
    </div>
  );
}

export default BestProductsSection;

import { useState, useEffect } from "react";
import { getProducts } from "../../api/product";
import ProductCard from "../ProductCard";
import "./index.css";

function BestProducts() {
  const [products, setProducts] = useState([]);

  const loadBestProducts = async () => {
    const favoriteProducts = await getProducts("favorite");
    const bestProducts = favoriteProducts.slice(0, 4);
    setProducts(bestProducts);
  };

  useEffect(() => {
    loadBestProducts();
  }, []);

  return (
    <section className="best-product">
      <h2 className="best-product-title">베스트 상품</h2>
      <ul className="best-product-list">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard type="big" product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BestProducts;

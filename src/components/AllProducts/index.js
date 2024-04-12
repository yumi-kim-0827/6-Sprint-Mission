import { useState, useEffect } from "react";
import { getProducts } from "../../api/product";
import ProductCard from "../ProductCard";
import "./index.css";

function AllProducts() {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const allProducts = await getProducts();
    console.log(allProducts);
    const slicedProducts = allProducts.slice(0, 10);
    setProducts(slicedProducts);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <section className="all-product">
      <div>
        <h2 className="all-product-title">전체 상품</h2>
      </div>
      <ul className="all-product-list">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard type="small" product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AllProducts;

import { useState, useEffect } from "react";
import { getProducts } from "../../api/product";
import ProductCard from "../ProductCard";
import "./index.css";

function AllProducts() {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const allProducts = await getProducts();
    const slicedProducts = allProducts.slice(0, 10);
    setProducts(slicedProducts);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <section className="all-product">
      <div className="all-product-header">
        <h2 className="all-product-title">전체 상품</h2>
        <div className="all-product-controls">
          <div className="all-product-search">
            <div className="all-product-search-icon">
              <img src="images/ic_search.svg" alt="검색 아이콘" />
            </div>
            <input
              className="all-product-search-input"
              placeholder="검색할 상품을 입력해주세요"
            />
          </div>
        </div>
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

import React, { useState } from "react";
import "./AllProducts.css";
import Product from "./Product";

function getAllProducts(productsList, n, sortBy) {
  let sortedProducts = [...productsList];

  if (sortBy === "latest") {
    sortedProducts.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  } else if (sortBy === "favorites") {
    sortedProducts.sort((a, b) => b.favoriteCount - a.favoriteCount);
  }

  return sortedProducts.slice(0, n);
}

function AllProducts({ products }) {
  const [sortBy, setSortBy] = useState("latest");

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const allProducts = getAllProducts(products.list, 10);

  return (
    <div className="all-products">
      <div className="all-products-header">
        <h1>전체 상품</h1>
        <div className="products-control">
          <input
            className="search"
            type="text"
            placeholder="검색할 상품을 입력하세요"
          />
          <button className="add-product-button">상품 등록하기</button>
          <div className="dropdown">
            <select id="sort-by" onChange={handleSortChange}>
              <option value="latest">최신순</option>
              <option value="favorites">좋아요순</option>
            </select>
          </div>
        </div>
      </div>

      <div className="all-products-list">
      {allProducts.map(product => (
          <Product className="best-product-card"
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            tags={product.tags}
            images={product.images}
            ownerId={product.ownerId}
            favoriteCount={product.favoriteCount}
            updatedAt={product.updatedAt}
            isBestProduct={false}
          />
        ))}
      </div>
    </div>
  );
}

export default AllProducts;

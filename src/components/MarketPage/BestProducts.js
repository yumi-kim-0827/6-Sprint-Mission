import React from "react";
import Product from "./Product";
import "./BestProducts.css";

function getBestProducts(productsList, n) {
  const bestProducts = productsList.sort(
    (a, b) => b.favoriteCount - a.favoriteCount
  );
  return bestProducts.slice(0, n);
}

function BestProducts({ products }) {
  const bestProducts = getBestProducts(products.list, 4);

  return (
    <div className="best-products">
      <h1>베스트 상품</h1>
      <div className="best-products-list">
        {bestProducts.map(product => (
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
            isBestProduct={true}
          />
        ))}
      </div>
    </div>
  );
}

export default BestProducts;

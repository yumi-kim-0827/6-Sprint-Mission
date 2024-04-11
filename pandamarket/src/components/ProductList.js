import React from "react";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function ProductList({ products }) {
  return (
    <div className="">
      {products.map((product) => (
        <div key={product.id} className="">
          <img src={product.images[0]} alt={product.name} />
          <div>{product.name}</div>
          <div>{product.price}</div>
          <div>{product.favoriteCount}</div>
          <div>{formatDate(product.createdAt)}</div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

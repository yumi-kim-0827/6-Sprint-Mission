import React from "react";
import "../styles/Products.css";

function ProductListItem({ item }) {
  return (
    <div className="ProductListItem">
      <img className="ProductImage" src={item.images} alt={item.name} />
      <div>
        <p>{item.name}</p>
        <p>{item.price}</p>
        <p>{item.favoriteCount}</p>
      </div>
    </div>
  );
}
function Products({ items }) {
  return (
    <ul className="ProductList">
      {items.map((item) => {
        return (
          <li className="ProductListItem" key={item.id}>
            <ProductListItem item={item} />
          </li>
        );
      })}
    </ul>
  );
}

export default Products;

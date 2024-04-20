import React from "react";
import "../styles/Products.css";

function ProductListItem({ item }) {
  const { images, name, price, favoriteCount } = item;
  return (
    <div className="ProductListItem">
      <img className="ProductImage" src={images} alt={name} />
      <div>
        <p>{name}</p>
        <p>{price}</p>
        <p>{favoriteCount}</p>
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

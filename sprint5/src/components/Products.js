import React from "react";

function ProductListItem({ item }) {
  return (
    <div className="ProductListItem">
      <img src={item.images} alt={item.name} />
      <div>
        <p>{item.name}</p>
        <p>{item.description}</p>
        <p>{item.price}</p>
        <p>{item.favoriteCount}</p>
      </div>
    </div>
  );
}
function Products({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <ProductListItem item={item} />
          </li>
        );
      })}
    </ul>
  );
}

export default Products;

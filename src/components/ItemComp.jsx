import React from "react";
import "../css/ItemComp.css";

function ItemComp({ item }) {
  return (
    <div className="ItemComp">
      <img src={item.images} alt={item.name} />
      <div>{item.name}</div>
      <div>{item.price} 원</div>
      <div>♡ {item.favoriteCount}</div>
    </div>
  );
}

export default ItemComp;

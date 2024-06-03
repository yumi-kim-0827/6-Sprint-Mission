import React from "react";

const ItemCard = ({ item }) => {
  return (
    <div>
      <img src={item.images} alt={item.name} />
      <div>
        <h2>{item.name}</h2>
        <p>{item.price}</p>
        <div></div>
      </div>
    </div>
  );
};

export default ItemCard;

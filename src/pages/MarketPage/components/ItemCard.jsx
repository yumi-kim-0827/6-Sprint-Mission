import React from "react";
import { ReactComponent as HeartIcon } from "../../../imgs/icon/icon_heart.svg";

function ItemCard({ item }) {
  return (
    <div>
      <img src={item.images[0]} alt={item.name} />
      <div>
        <h2>{item.name}</h2>
        <p>{item.price.toLocaleString()}원</p>
        <div>
          <HeartIcon />
          {item.favoriteCount}
        </div>
      </div>
    </div>
  );
}

export default ItemCard;

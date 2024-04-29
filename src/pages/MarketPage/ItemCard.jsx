import React from "react";
import { ReactComponent as HeartIcon } from "../../assets/heart.svg";
import { Link } from "react-router-dom";

function ItemCard({ item }) {
  return (
    <div className="itemCard">
      <Link to={`/items/${item.id}`} className="itemLink">
        <img
          src={item.images[0]}
          alt={item.name}
          className="itemCardThumbnail"
        />
        <div className="itemSummary">
          <h2 className="itemName">{item.name}</h2>
          <p className="itemPrice">{item.price.toLocaleString()}원</p>
          <div className="favoriteCount">
            <HeartIcon />
            {item.favoriteCount}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ItemCard;

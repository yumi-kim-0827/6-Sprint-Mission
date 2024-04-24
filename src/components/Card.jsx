import React from "react";
import "./../css/Card.css";

function Card({ item }) {
  return (
    <div className="Card">
      <div className="Card__thumbnail">
        <img className="Card__img" src={item.images} alt={item.name} />
      </div>
      <div className="Card__desc">
        <div className="Card__name">{item.name}</div>
        <div className="Card__price">{item.price} 원</div>
        <div className="Card__favorite">♡ {item.favoriteCount}</div>
      </div>
    </div>
  );
}

export default Card;

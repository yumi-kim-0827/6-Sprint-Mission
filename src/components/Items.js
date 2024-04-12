import React from "react";
import favoritIcon from "../logo/favorite.png";

function Items({
  id,
  name,
  description,
  price,
  tags,
  images,
  ownerId,
  favoriteCount,
  updatedAt,
  BestItem,
}) {
  const cardStyle = BestItems ? "item-card-best" : "itemcard-all";

  return (
    <div className={cardStyle}>
      <img src={images[0]} alt={name} className="item-image" />
      <div className="item-card-description">
        <p className="item-name">{name}</p>
        <p className="item-price">{price}원</p>
        <div className="favorite-count">
          <img src={favoriteIcon} className="favorite-icon" />
          <p className="favorite-count-number">{favoriteCount}</p>
        </div>
      </div>
    </div>
  );
}

export default Items;

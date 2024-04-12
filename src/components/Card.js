import "./Card.css";
import { useState } from "react";

function Card({ item }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const { name, price, favoriteCount, images } = item;

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const handleFavoriteClassName = isFavorite
    ? "icon-heart-active"
    : "icon-heart";

  return (
    <div className="Card">
      <img className="Card__img" src={images[0]} alt="상품 이미지" />
      <p className="Card__name">{name}</p>
      <p className="Card__price">{price.toLocaleString()}원</p>
      <span className="Card__favorites">
        <button className="Card__favorites-btn" onClick={handleFavoriteClick}>
          <i className={handleFavoriteClassName}></i>
        </button>
        {isFavorite ? favoriteCount + 1 : favoriteCount}
        {/* 서버에는 반영 x */}
      </span>
    </div>
  );
}

export default Card;

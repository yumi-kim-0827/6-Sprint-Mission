import "./Card.css";
import { useState } from "react";

function Card({ item }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const { name, price, favoriteCount, images } = item;

  const previewImage = images[0];
  const formattedPrice = `${price.toLocaleString()}원`;

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const getFavoriteIconClassName = isFavorite
    ? "icon-heart-active"
    : "icon-heart";

  return (
    <div className="Card">
      <img className="Card__img" src={previewImage} alt="상품 이미지" />
      <p className="Card__name">{name}</p>
      <p className="Card__price">{formattedPrice}</p>
      <span className="Card__favorites">
        <button className="Card__favorites-btn" onClick={handleFavoriteClick}>
          <i className={getFavoriteIconClassName}></i>
        </button>
        {isFavorite ? favoriteCount + 1 : favoriteCount}
        {/* 서버에는 반영 x */}
      </span>
    </div>
  );
}

export default Card;

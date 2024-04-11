import "./Item.css";
import { useState } from "react";

function Item({ item }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const favoriteClassName = isFavorite ? "icon-heart-active" : "icon-heart";

  return (
    <div className="Item">
      <img className="Item__img" src={item.images} alt="상품 이미지" />
      <p className="Item__name">{item.name}</p>
      <p className="Item__price">{item.price.toLocaleString()}원</p>
      <span className="Item__favorites">
        <button className="Item__favorites-btn" onClick={handleFavoriteClick}>
          <i className={favoriteClassName}></i>
        </button>
        {isFavorite ? item.favoriteCount + 1 : item.favoriteCount}
        {/* 서버에는 반영 x */}
      </span>
    </div>
  );
}

export default Item;

import React from "react";
import "./Product.css";

function Product({
  id,
  name,
  description,
  price,
  tags,
  images,
  ownerId,
  favoriteCount,
  updatedAt,
  isBestProduct,
}) {
  const favoriteIconSrc = process.env.PUBLIC_URL + "/images/favorite-icon.png";

  const cardStyle = isBestProduct ? "product-card-best" : "product-card-all";

  return (
    <div className={cardStyle}>
      {/* <p>업데이트:{updatedAt}</p> */}
      <img src={images[0]} alt={name} className="product-image" />
      <div className="product-card-description">
        <p className="product-name">{name}</p>
        <p className="product-price">{price}원</p>
        <div className="favorite-count">
          <img src={favoriteIconSrc} className="favorite-icon" />
          <p className="favorite-count-number">{favoriteCount}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;

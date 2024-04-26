import React from 'react';

const ItemCard = ({ product }) => {
  return (
    <div className="item-card">
      <img src={product.images[0]} alt={product.name} className="product-image" />
      <div className="product-description">
        <h3>{product.name}</h3>
        <h2 className="price">{product.price.toLocaleString()}원</h2>
        <div className="like">
          <img src="assets/ic_heart.svg" alt="heart" className="heart-icon" />
          <span className="like-count">{product.likes}</span>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

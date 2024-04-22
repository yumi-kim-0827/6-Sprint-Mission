import React from 'react';

const ItemCard = ({ product }) => {
  return (
    <div className="item-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-description">
        <h3>{product.name}</h3>
      </div>
      <div className="product-details">
        <span className="price">{product.price}</span>
        <div className="like">
          <img src="assets/ic_heart.svg" alt="heart" className="heart-icon" />
          <span className="like-count">{product.likes}</span>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

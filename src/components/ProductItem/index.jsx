import React from 'react';
import './style.css';
import HeartIcon from 'assets/icons/Heart.svg';
import { formatNumberToWon } from 'utils/formatNumber';

const ProductItem = ({ item }) => {
  return (
    <div className="item-container">
      <div className="image-container">
        <img src={item.images[0]} alt={item.name} className="item-image" />
      </div>
      <div className="item-info">
        <div className="description-container">
          <span className="item-description">{item.description}</span>
        </div>
        <span className="item-price">{formatNumberToWon(item.price)}</span>
        <div className="favorite-container">
          <img src={HeartIcon} alt="하트아이콘" />
          <span className="item-favoriteCount">{item.favoriteCount}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

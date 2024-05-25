import React from 'react';
import './style.css';
import HeartIcon from 'assets/icons/Heart';
import { formatNumberToWon } from 'utils/formatNumber';
import { useNavigate } from 'react-router-dom';
import { ItemType } from 'types/item';

interface ProductItemProps {
  item: ItemType;
}

const ProductItem = ({ item }: ProductItemProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="item-container"
      onClick={() => navigate(`/items/${item.id}`)}
    >
      <div className="image-container">
        <img src={item.images[0]} alt={item.name} className="item-image" />
      </div>
      <div className="item-info">
        <div className="description-container">
          <span className="item-description">{item.description}</span>
        </div>
        <span className="item-price">{formatNumberToWon(item.price)}</span>
        <div className="favorite-container">
          <HeartIcon />
          <span className="item-favoriteCount">{item.favoriteCount}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

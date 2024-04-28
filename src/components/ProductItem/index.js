import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Heart from 'assets/icons/Heart.svg';
import { formatNumberToWon } from 'utils/formatNumber';

const ProductItem = ({ item }) => {
  const { id, images, name, description, price, favoriteCount } = item;
  return (
    <Link to={`/items/${id}`} className='item-link'>
      <div className='item-container'>
        <div className='image-container'>
          <img src={images[0]} alt={name} className='item-image' />
        </div>
        <div className='item-info'>
          <div className='description-container'>
            <span className='item-description'>{description}</span>
          </div>
          <span className='item-price'>{formatNumberToWon(price)}</span>
          <div className='favorite-container'>
            <img src={Heart} alt='하트아이콘' />
            <span className='item-favoriteCount'>{favoriteCount}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;

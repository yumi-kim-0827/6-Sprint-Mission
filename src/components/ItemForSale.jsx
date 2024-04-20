import React from 'react';
import './style/ItemForSale.css';

export default function ItemForSale({ price, images, favoriteCount, name }) {
  const formattedPrice = price.toLocaleString();

  return (
    <div className='item'>
      <picture className='item-for-sale__img-wrap'>
        <img className='item-for-sale__img' src={images} alt={name} />
      </picture>
      <div className='item-for-sale__description'>
        <p className='item-for-sale__title'>{name}</p>
        <p className='item-for-sale__price'>{formattedPrice}원</p>
        <div className='item-for-sale__heart'>
          <img className='item-for-sale__heart__img' src='/imgs/small_grayHeart.webp' alt='' />
          <span className='item-for-sale__heart__count'>{favoriteCount}</span>
        </div>
      </div>
    </div>
  );
}

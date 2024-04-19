import React from 'react';
import './style/BestItem.css';

export default function BestItem({ price, images, favoriteCount, name }) {
  // const { price, images, favoriteCount, name } = item;
  const formattedPrice = price.toLocaleString();

  return (
    <div className='item'>
      <picture className='item__img__wrap'>
        <source srcSet={images} />
        <img className='item__img' src={images} alt='' />
      </picture>

      <div className='item__description'>
        <p className='item__title'>{name}</p>
        <p className='item__price'>{formattedPrice}원</p>
        <div className='item__heart'>
          <img className='item__heart__img' src='/imgs/small_grayHeart.webp' alt='' />
          <span className='item__heart__count'>{favoriteCount}</span>
        </div>
      </div>
    </div>
  );
}

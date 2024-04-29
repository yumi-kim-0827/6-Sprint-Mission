import React from 'react';
import './style/BestItem.css';
import { useNavigate } from 'react-router-dom';

export default function BestItem({ price, images, favoriteCount, name, id }) {
  const formattedPrice = price.toLocaleString();
  const nav = useNavigate();

  return (
    <div className='item'>
      <div onClick={() => nav(`/items/${id}`)} className='item__img__wrap'>
        <source srcSet={images} />
        <img className='item__img' src={images} alt={name} />
      </div>

      <div className='item__description'>
        <p className='item__title' onClick={() => nav(`/items/${id}`)}>
          {name}
        </p>
        <p className='item__price'>{formattedPrice}원</p>
        <div className='item__heart'>
          <img className='item__heart__img' src='/imgs/small_grayHeart.webp' alt='좋아요 하트' />
          <span className='item__heart__count'>{favoriteCount}</span>
        </div>
      </div>
    </div>
  );
}

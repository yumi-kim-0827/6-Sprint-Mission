import React from 'react';
import './style/ItemForSale.css';

export default function ItemForSale() {
  return (
    <div className='item'>
      <picture className='item-for-sale__img-wrap'>
        <img className='item-for-sale__img' src='/imgs/image 42.png' alt='' />
      </picture>
      <div className='item-for-sale__description'>
        <p className='item-for-sale__title'>아이패드 미니 팝니다</p>
        <p className='item-for-sale__price'>500,000원</p>
        <div className='item-for-sale__heart'>
          <img className='item-for-sale__heart__img' src='/imgs/small_grayHeart.webp' alt='' />
          <span className='item-for-sale__heart__count'>240</span>
        </div>
      </div>
    </div>
  );
}

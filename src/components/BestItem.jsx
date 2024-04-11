import React from 'react';
import './style/BestItem.css';

export default function BestItem() {
  return (
    <div className='item'>
      <picture className='item__img__wrap'>
        <source srcSet='/imgs/image 42.png' />
        <img className='item__img' src='/imgs/image 42.png' alt='' />
      </picture>

      <div className='item__description'>
        <p className='item__title'>아이패드 미니 팝니다</p>
        <p className='item__price'>500,000원</p>
        <div className='item__heart'>
          <img className='item__heart__img' src='/imgs/small_grayHeart.webp' alt='' />
          <span className='item__heart__count'>240</span>
        </div>
      </div>
    </div>
  );
}

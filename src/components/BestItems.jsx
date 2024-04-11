import React from 'react';
import './style/BestItems.css';
import BestItem from './BestItem';

export default function BestItems() {
  return (
    <div className='best-items'>
      <h2 className='best-items__title'>베스트 상품</h2>
      <section className='best-items__item'>
        <BestItem />
        <BestItem />
        <BestItem />
        <BestItem />
      </section>
    </div>
  );
}

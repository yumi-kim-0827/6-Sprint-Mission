import React from 'react';
import ItemForSale from './ItemForSale';
import './style/ItemsForSale.css';
import SelectBox from './SelectBox';
import PageButton from './PageButton';

export default function ItemsForSale() {
  return (
    <div className='items-for-sale'>
      <div className='search-bar'>
        <h2 className='search-bar__title'>판매중인 상품</h2>
        <input className='search-bar__input' type='text' placeholder='검색할 상품을 입력해주세요' />
        <button className='search-bar__register'>상품 등록하기</button>
        <SelectBox className='select-box' />
      </div>
      <div className='items'>
        <ItemForSale />
        <ItemForSale />
        <ItemForSale />
        <ItemForSale />
        <ItemForSale />
      </div>
      <PageButton />
    </div>
  );
}

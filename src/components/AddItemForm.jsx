import React from 'react';
import './style/AddItemForm.css';

export default function AddItemForm() {
  return (
    <div>
      <form action='submit'>
        <label htmlFor=''>
          상품명
          <input type='text' placeholder='상품명을 입력해주세요' />
        </label>

        <label htmlFor=''>
          상품 소개
          <input className='product-description' type='text' placeholder='상품 소개를 입력해주세요' />
        </label>

        <label htmlFor=''>
          판매가격
          <input type='text' placeholder='판매 가격을 입력해주세요' />
        </label>

        <label htmlFor=''>
          태그
          <input type='text' placeholder='태그를 입력해주세요' />
        </label>
      </form>
      {/* <div className='tag'>
        <input className='tag__input' type='text' />
        <button className='tag__delete'></button>
      </div> */}
    </div>
  );
}

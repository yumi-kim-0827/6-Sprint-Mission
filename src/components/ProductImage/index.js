import React from 'react';
import './style.css';
import Plus from 'assets/icons/Plus.svg';

const UploadImage = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <label className='product-image-title'>상품 이미지</label>
        <div className='image-box'>
          <img src={Plus} alt='이미지 추가' />
          <span className='image-upload'>이미지 등록</span>
        </div>
      </div>
      <div>
        <label className='product-name'>상품명</label>
        <input
          type='text'
          name='productName'
          placeholder='상품명을 입력해주세요'
          className='product-name-input'
        />
      </div>
      <div>
        <label className='product-introduction'>상품 소개</label>
        <input
          type='text'
          name='productName'
          placeholder='상품 소개를 입력해주세요'
          className='product-introduction-input'
        />
      </div>
      <div>
        <label className='product-price'>판매가격</label>
        <input
          type='text'
          name='productName'
          placeholder='판매 가격을 입력해주세요'
          className='product-price-input'
        />
      </div>
      <div>
        <label className='product-tag'>태그</label>
        <input
          type='text'
          name='productName'
          placeholder='태그를 입력해주세요'
          className='product-tag-input'
        />
      </div>
    </form>
  );
};

export default UploadImage;

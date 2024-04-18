import React, { useState } from 'react';
import './style.css';
import Plus from 'assets/icons/Plus.svg';
import RegisterButton from 'components/RegisterButton';

const UploadImage = () => {
  const [productName, setProductName] = useState('');
  const [productIntroduction, setProductIntroduction] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productTag, setProductTag] = useState('');

  const isFormValid = () => {
    return (
      productName.trim() &&
      productIntroduction.trim() &&
      productPrice.trim() &&
      productTag.trim()
    );
  };

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
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>
      <div>
        <label className='product-introduction'>상품 소개</label>
        <input
          type='text'
          name='productIntroduction'
          placeholder='상품 소개를 입력해주세요'
          className='product-introduction-input'
          value={productIntroduction}
          onChange={(e) => setProductIntroduction(e.target.value)}
        />
      </div>
      <div>
        <label className='product-price'>판매가격</label>
        <input
          type='text'
          name='productPrice'
          placeholder='판매 가격을 입력해주세요'
          className='product-price-input'
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
      </div>
      <div>
        <label className='product-tag'>태그</label>
        <input
          type='text'
          name='productTag'
          placeholder='태그를 입력해주세요'
          className='product-tag-input'
          value={productTag}
          onChange={(e) => setProductTag(e.target.value)}
        />
      </div>
      <RegisterButton disabled={!isFormValid()} />
    </form>
  );
};

export default UploadImage;

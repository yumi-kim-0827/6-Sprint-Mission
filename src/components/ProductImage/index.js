import React, { useState } from 'react';
import './style.css';
import Plus from 'assets/icons/Plus.svg';
import RegisterButton from 'components/RegisterButton';

const UploadImage = () => {
  const [productImage, setProductImage] = useState(null);
  const [productName, setProductName] = useState('');
  const [productIntroduction, setProductIntroduction] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productTag, setProductTag] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setProductImage(URL.createObjectURL(file));
    }
  };

  const isFormValid = () => {
    return (
      productName.trim() &&
      productIntroduction.trim() &&
      productPrice.trim() &&
      productTag.trim()
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <div>
        <label className='product-label'>상품 이미지</label>
        <div className='image-box'>
          {productImage ? (
            <img
              src={productImage}
              alt='상품 이미지'
              className='uploaded-image'
            />
          ) : (
            <img src={Plus} alt='이미지 추가' />
          )}
          <input
            type='file'
            accept='image/*'
            onChange={handleImageChange}
            style={{ display: 'none' }}
            id='image-upload'
          />
          <label htmlFor='image-upload' className='image-upload-label'>
            {productImage ? '이미지 변경' : '이미지 등록'}
          </label>
        </div>
      </div>
      <div>
        <label className='product-label'>상품명</label>
        <input
          type='text'
          name='productName'
          placeholder='상품명을 입력해주세요'
          className='product-input'
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>
      <div>
        <label className='product-label'>상품 소개</label>
        <textarea
          type='text'
          name='productIntroduction'
          placeholder='상품 소개를 입력해주세요'
          className='product-input product-introduction-input'
          value={productIntroduction}
          onChange={(e) => setProductIntroduction(e.target.value)}
        />
      </div>
      <div>
        <label className='product-label'>판매가격</label>
        <input
          type='text'
          name='productPrice'
          placeholder='판매 가격을 입력해주세요'
          className='product-input'
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
      </div>
      <div>
        <label className='product-label'>태그</label>
        <input
          type='text'
          name='productTag'
          placeholder='태그를 입력해주세요'
          className='product-input'
          value={productTag}
          onChange={(e) => setProductTag(e.target.value)}
        />
      </div>
      <RegisterButton disabled={!isFormValid()} />
    </form>
  );
};

export default UploadImage;

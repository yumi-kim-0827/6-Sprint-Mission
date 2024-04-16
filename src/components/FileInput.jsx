import React, { useRef, useState } from 'react';
import './style/FileInput.css';

export default function FileInput() {
  const imageInput = useRef();
  const [imageSrc, setImageSrc] = useState('');

  const onCickImageUpload = () => {
    imageInput.current.click();
  };
  return (
    <div className='file-input__container'>
      <p className='file-input__title'>상품 이미지</p>
      <div className='file-input__wrap'>
        <input type='file' style={{ display: 'none' }} ref={imageInput} />
        <button onClick={onCickImageUpload} className='file-input'>
          <span>이미지 등록</span>
        </button>
        <div className='file-input__preview'>{imageSrc && <img src={imageSrc} alt='이미지 미리보기' />}</div>
      </div>
    </div>
  );
}

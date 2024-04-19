import React, { useEffect, useRef, useState } from 'react';
import './style/FileInput.css';
import DeleteButton from './DeleteButton';

export default function FileInput({ name, value, onChange }) {
  const [imgValue, setImgValue] = useState();
  const [preview, setPreview] = useState();
  const inputRef = useRef();

  const handleChange = e => {
    const nextValue = e.target.files[0];
    setImgValue(nextValue);
    onChange(name, nextValue);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = '';
    onChange(name, null);
  };

  useEffect(() => {
    if (!value) return;
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    return () => {
      setPreview();
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);

  const onClickImageUpload = e => {
    e.preventDefault();
    inputRef.current.click();
  };
  return (
    <div className='file-input__container'>
      <p className='file-input__title'>상품 이미지</p>
      <div className='file-input__wrap'>
        <input
          type='file' //
          accept='image/png, image/jpeg'
          style={{ display: 'none' }}
          ref={inputRef}
          onChange={handleChange}
        />
        <button onClick={onClickImageUpload} className='file-input'>
          <span>이미지 등록</span>
        </button>
        {value && <img src={preview} alt='이미지 미리보기' className='preview-img' />}
        {value && <DeleteButton deleteItem={'preview'} onClick={handleClearClick} />}
      </div>
    </div>
  );
}

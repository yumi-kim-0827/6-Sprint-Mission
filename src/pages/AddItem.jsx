import React, { useState } from 'react';
import '../styles/AddItem.css';
import FileInput from '../components/FileInput';
import TagInput from '../components/TagInput';

export default function AddItem() {
  const [values, setValues] = useState({
    imgFile: null,
    name: '',
    description: '',
    price: 0,
    tag: '',
  });

  const handleChange = (name, value) => {
    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
  };

  const textClear = e => {
    const { name } = e.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: '',
    }));
  };

  return (
    <form className='add-item-form' action='submit' onSubmit={handleSubmit}>
      <div className='register-item__title-wrap'>
        <h2 className='register-item__title'>상품 등록하기</h2>
        <button className='register-item__btn'>등록</button>
      </div>
      <FileInput
        name='imgFile' //
        value={values.imgFile}
        onChange={handleChange}
      />
      <label htmlFor=''>
        상품명
        <input
          name='name'
          value={values.name}
          type='text'
          placeholder='상품명을 입력해주세요'
          onChange={handleInputChange}
          className='add-item-form__name-input'
        />
      </label>

      <label htmlFor=''>
        상품 소개
        <textarea
          className='product-description'
          name='description'
          value={values.description}
          placeholder='상품 소개를 입력해주세요'
          onChange={handleInputChange}
          className='add-item-form__description-input'
        />
      </label>

      <label htmlFor=''>
        판매가격
        <input
          name='price'
          value={values.price}
          type='text'
          placeholder='판매 가격을 입력해주세요'
          onChange={handleInputChange}
          className='add-item-form__price-input'
        />
      </label>
      <TagInput
        onChange={handleInputChange}
        name='tag'
        value={values.tag}
        textClear={textClear}
        className='add-item-form__name-input'
      />
    </form>
  );
}

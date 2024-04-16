import React from 'react';
import FileInput from '../components/FileInput';
import AddItemForm from '../components/AddItemForm';
import '../styles/AddItem.css';

export default function AddItem() {
  return (
    <div className='register-item'>
      <div className='register-item__title-wrap'>
        <h2 className='register-item__title'>상품 등록하기</h2>
        <button className='register-item__btn'>등록</button>
      </div>
      <div className='input__wrap'>
        <FileInput />
      </div>
      <AddItemForm />
    </div>
  );
}

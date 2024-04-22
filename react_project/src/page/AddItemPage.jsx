import React from 'react';
import Button from '../components/Button';
import FileInput from '../components/FileInput';
import styles from '../styles/AddItemPage.module.css';
import plusIcon from '../assets/ic_plus.svg';

function AddItemPage() {

  const imageRegistration = () => {

  }

  const tagInput = (e) => {
    
  }

  return (
    <form className={styles.AddItemPage_wrap}>
      <div className={styles.AddItemPage_header}>
        <h1>상품 등록하기</h1>
        <Button>등록</Button>
      </div>
      <label htmlFor="product_image">상품 이미지</label>
      <div className={styles.addImage_box} id='product_imgae' onClick={imageRegistration}>
        <img src={plusIcon} alt="상품" />
        <p>이미지 등록</p>
      </div>
      <label htmlFor="product_name">상품명</label>
      <input id='product_name' type="text" placeholder='상품명을 입력해주세요 '/>
      <label htmlFor="product_introduce">상품 소개</label>
      <textarea name="product_introduce" id="product_introduce" placeholder='상품 소개를 입력해주세요' />
      <label htmlFor="product_price">판매가격</label>
      <input id='product_price' type="number" placeholder='판매 가격을 입력해주세요' />
      <label htmlFor="tag">태그</label>
      <input id='tag' type="text" placeholder='태그를 입력해주세요' onKeyDown={tagInput}/>
    </form>
  )
}

export default AddItemPage
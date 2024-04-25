import React, { useState } from 'react';
import ImageUpload from '../components/ImageUpload';
import styles from '../styles/AddItemPage.module.css';
import TagInput from '../components/TagInput';

function AddItemPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [tags, setTags] = useState([]);

  const addTag = (tag) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag])
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  }

  const isSubmitDisabled = !name || !description || !price || !tags.length;

  return (
    <form className={styles.addIteme_wrap}>
      <div className={styles.addItem_header}>
        <h1>상품 등록하기</h1>
        <button type='submit' disabled={isSubmitDisabled}>등록</button>
      </div>
      <ImageUpload title="상품 이미지" />
      <div className={styles.addItem_infoContainer}>
        <label htmlFor="product_name">상품명</label>
        <input id='product_name' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='상품명을 입력해주세요 '/>
        <label htmlFor="product_desciption">상품 소개</label>
        <textarea name="product_desciption" id="product_desciption" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='상품 소개를 입력해주세요' />
        <label htmlFor="product_price">판매가격</label>
        <input id='product_price' type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='판매 가격을 입력해주세요' />
        <TagInput tags={tags} onAddTag={addTag} onRemoveTag={removeTag} />
      </div>
    </form>
  )
}

export default AddItemPage
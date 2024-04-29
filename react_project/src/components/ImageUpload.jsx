import React, { useState } from 'react'
import PlusIcon from '../assets/ic_plus.svg';
import closeIcon from '../assets/ic_x.svg'
import styles from '../styles/ImageUpload.module.css';

function ImageUpload({ title }) {
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreviewUrl(imageUrl);
    }
  };

  const handleDelete = () => {
    setImagePreviewUrl('');
  };

  return (
    <div className={styles.ImagesUpload_wrap}>
      {title && <label className={styles.ImageUpload_title}>{title}</label>}
      <div className={styles.ImageUpload_container}>
        <label className={styles.ImageUpload_label} htmlFor='image_upload'>
          <img src={PlusIcon} alt="상품추가 버튼" />
          <p>이미지 등록</p>
        </label>

        <input
          className={styles.hiddenFileInput}
          id='image_upload' 
          type="file" 
          onChange={handleImageChange} 
          accept='image/png, image/jpeg' 
        />

        {imagePreviewUrl && (
          <div className={styles.hiddenImage_container} src={imagePreviewUrl}>
            <button className={styles.hiddenImage_closeButton} onClick={handleDelete}>
              <img className={styles.hiddenImage} src={closeIcon} alt="삭제 버튼" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ImageUpload
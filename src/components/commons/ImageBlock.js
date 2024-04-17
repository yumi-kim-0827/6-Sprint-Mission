import React, { useRef } from "react";
import styles from "styles/commons.module.scss";
import PlusIcon from "assets/icon/ic_plus.svg";
import { ReactComponent as XIcon } from "assets/icon/ic_X.svg";

export function ImageInput() {
  const imgFileRef = useRef(null);

  const handleClick = () => {
    imgFileRef.current.click();
  };

  return (
    <div className={styles.image__input} onClick={handleClick}>
      <input ref={imgFileRef} type="file" accept="image/png, image/jpeg" />
      <img className={styles.plus__icon} src={PlusIcon} alt="img-file" />
      <h1>이미지 등록</h1>
    </div>
  );
}

export function ImageBlock({ url }) {
  return (
    <div className={styles.image__block}>
      <img className={styles.product__image} src={url} alt="img-file" />
      <div className={styles.x__icon}>
        <XIcon fill="#9CA3AF" className={styles.icon} />
      </div>
    </div>
  );
}

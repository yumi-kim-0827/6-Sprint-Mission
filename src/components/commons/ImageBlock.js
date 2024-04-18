import React, { useEffect, useRef, useState } from "react";
import styles from "styles/commons.module.scss";
import PlusIcon from "assets/icon/ic_plus.svg";
import { ReactComponent as XIcon } from "assets/icon/ic_X.svg";

export function ImageInput({ name, value, onChange }) {
  const [preview, setPreview] = useState("");
  const imgFileRef = useRef(null);

  const handleClick = () => {
    imgFileRef.current.click();
  };

  const handleImgFileDelete = () => {
    const inputNode = imgFileRef.current;
    if (!inputNode) return;

    inputNode.value = "";
    onChange({ target: { name: "img-file", files: [null] } });
  };

  useEffect(() => {
    if (!value) return;

    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    return () => {
      setPreview("");
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);

  return (
    <div className={styles.image__input__container}>
      <div className={styles.image__input} onClick={handleClick}>
        <input
          name={name}
          onChange={onChange}
          ref={imgFileRef}
          type="file"
          accept="image/png, image/jpeg"
        />
        <img className={styles.plus__icon} src={PlusIcon} alt="img-file" />
        <h1>이미지 등록</h1>
      </div>
      {preview && <PreviewImage url={preview} onDelete={handleImgFileDelete} />}
    </div>
  );
}

export function PreviewImage({ url, onDelete }) {
  return (
    <div className={styles.image__preview}>
      <img className={styles.product__image} src={url} alt="img-file" />
      <div className={styles.x__icon}>
        <XIcon fill="#9CA3AF" className={styles.icon} onClick={onDelete} />
      </div>
    </div>
  );
}

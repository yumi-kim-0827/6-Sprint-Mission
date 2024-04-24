import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/fileinput.module.css";
import previewImg from '../assets/icon_placeholder.png'

function FileInput({ name, value, initialPreview, onChange }) {
  const [preview, setPreview] = useState(initialPreview);
  const inputRef = useRef();

  const handleImgChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  // 이미지 클릭 = 파일 선택 요소 클릭
  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = "";
    onChange(name, null); // 선택 해제 알리기
  };

  useEffect(() => {
    if (!value) return;
    // 선택된 파일의 URL을 생성해 미리보기 이미지로 설정
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    // 정리함수: 언마운트될 때 URL 해제하기
    return () => {
      setPreview(initialPreview);
      URL.revokeObjectURL(nextPreview);
    };
  }, [value, initialPreview]);

  return (
    <div className={styles.fileinput}>
      <div className={styles["fileinput-preview-container"]}>
        <img
          name={name}
          className={styles[`"fileinput-preview" ${preview ? "selected" : ""}`]}
          src={preview || previewImg}
          alt="이미지 미리보기"
          onClick={handleImageClick}
        />
      </div>
      <input
        className={styles["fileinput-hidden-overlay"]}
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleImgChange}
        ref={inputRef}
      />
      {value && (
        <button
          className={styles["fileinput-clear-button"]}
          onClick={handleClearClick}
        >
          <img src={require('../assets/icon_reset.png')} alt="선택해제" />
        </button>
      )}
    </div>
  );
}

export default FileInput;

import { useEffect, useRef, useState } from "react";
import Styles from "./Input.module.scss";
import icoPlus from "../../img/ic_plus.svg";
import icoX from "../../img/ic_x.svg";

export default function FileInput({ name, value, initialPreview, onChange }) {
  const [preview, setPreviews] = useState(null);
  const fileInput = useRef();

  const handleChange = (e) => {
    onChange(name, e.target.files[0]);
  };

  const handleClearClick = (e) => {
    setPreviews(null);
    onChange(name, null);
  };

  useEffect(() => {
    if (!value) return;
    const nextPreview = URL.createObjectURL(fileInput.current.files[0]);
    setPreviews(nextPreview);

    return () => {
      URL.revokeObjectURL(nextPreview);
    };
  }, [value, initialPreview]);

  return (
    <div className={Styles.fileView}>
      <label htmlFor="item-file" className={Styles.fileViewLabel}>
        <img
          src={icoPlus}
          alt="아이콘"
          aria-hidden="true"
          className={Styles.labelImg}
        />
        <span className={Styles.labelTxt}>이미지 등록</span>
      </label>
      <input
        type="file"
        accept="image/png, image/jpeg"
        ref={fileInput}
        onChange={handleChange}
        id="item-file"
        className={Styles.fileViewInput}
        multiple
      />

      {preview && (
        <div className={Styles.fileViewPreview}>
          <img
            src={preview}
            alt="이미지 미리보기"
            className={Styles.fileViewImg}
          />
          <button
            type="button"
            onClick={handleClearClick}
            className={Styles.fileViewBtn}
          >
            <img src={icoX} alt="아이콘" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}

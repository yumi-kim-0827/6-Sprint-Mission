import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react";
import plusIcon from "../assets/images/additemPage/plus-icon.svg";
import styles from "../styles/FileInput.module.css";

interface FileInputProps {
  name: string;
  value: Blob | MediaSource | null;
  onChange: (name: string, value: string | File | null) => void;
  initialPreview: string;
  validateCheck: () => void;
}

function FileInput({
  name,
  value,
  onChange,
  initialPreview,
  validateCheck,
}: FileInputProps) {
  const [preview, setPreview] = useState(initialPreview);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const nextValue = e.target.files[0];
      onChange(name, nextValue);
    }
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;
    inputNode.value = "";
    onChange(name, null);
    validateCheck();
  };

  useEffect(() => {
    if (!value) return;
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    return () => {
      setPreview(initialPreview);
      URL.revokeObjectURL(nextPreview);
    };
  }, [value, initialPreview]);

  return (
    <div className={styles.fileInputContainer}>
      <input
        id="img-upload"
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleChange}
        ref={inputRef}
        style={{
          display: "none",
        }}
      />
      <label htmlFor="img-upload" className={styles.imageAddButton}>
        <span>
          <img src={plusIcon}></img>
        </span>
        <p>이미지 등록</p>
      </label>
      <div className={styles.imagePreview}>
        {preview && (
          <img
            src={preview}
            alt="이미지 미리보기"
            className={styles.imagePreviewImage}
            onLoad={validateCheck}
          />
        )}
        {value && (
          <button
            onClick={handleClearClick}
            className={styles.imagePreviewDeleteBtn}
          >
            X
          </button>
        )}
      </div>
    </div>
  );
}

export default FileInput;

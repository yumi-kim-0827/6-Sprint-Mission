import styles from "./ImageUpload.module.css";
import skeleton from "../../assets/bg-img-skeleton.svg";
import React, { useRef } from "react";
import { FormState } from "../../utils/initialFormState";

interface ImageUploadProps {
  preview: string;
  setValues: React.Dispatch<React.SetStateAction<FormState>>;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ preview, setValues }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const isPreview = preview !== skeleton;
  const getFile = (
    inputRef: React.RefObject<HTMLInputElement>
  ): File | null => {
    return inputRef.current?.files ? inputRef.current?.files?.[0] : null;
  };

  const handleCloseClick = () =>
    setValues(prev => ({ ...prev, preview: skeleton, file: null }));

  const updatePreviewAndState = (file: File) => {
    setValues(prev => ({
      ...prev,
      preview: URL.createObjectURL(file),
      file: file,
    }));
  };

  const handleFileInputChange = () => {
    if (fileInputRef.current) {
      const file = getFile(fileInputRef);
      if (file) {
        updatePreviewAndState(file);
      }
    }
  };

  return (
    <div>
      <p className={styles.titleImg}>상품 이미지</p>
      <div className={styles.containerImg}>
        {isPreview ? (
          <div className={styles.preview}>
            <img src={preview} alt="상품 미리보기 이미지" />
            <button
              className={styles.btnCloseActive}
              onClick={handleCloseClick}
            />
          </div>
        ) : (
          <div
            className={styles.preview}
            onClick={() => fileInputRef.current?.click()}
          >
            <img src={preview} alt="상품 이미지 추가 버튼" />
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileInputChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;

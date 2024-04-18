import styles from "./ImageUpload.module.css";
import skeleton from "../../assets/bg-img-skeleton.svg";

const ImageUpload = ({
  isPreview,
  preview,
  setPreview,
  fileInputRef,
  setFile,
}) => {
  const handleCloseClick = () => setPreview(skeleton);
  const getFile = inputRef => inputRef.current.files[0];
  const updatePreviewAndState = file => {
    setPreview(URL.createObjectURL(file));
    setFile(file);
  };

  const handleFileInputChange = () => {
    if (fileInputRef.current) {
      const file = getFile(fileInputRef);
      updatePreviewAndState(file);
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
            onClick={() => fileInputRef.current.click()}
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

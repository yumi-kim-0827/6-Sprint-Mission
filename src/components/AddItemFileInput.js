import { useEffect, useRef, useState } from "react";
import "../styles/AddItemFileInput.css";

function AddItemFileInput() {
  const [preview, setPreview] = useState(null);

  const fileInputRef = useRef();

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // 파일 선택을 취소하는 경우
      const nextPreview = URL.createObjectURL(file);
      setPreview(nextPreview);
    }
  };

  useEffect(() => {
    return () => {
      // 정리함수
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  return (
    <div className="img-input-container">
      <div className="img-input-label-container">
        <label htmlFor="img" className="img-input-label">
          상품 이미지
        </label>
        <input
          type="file"
          id="img"
          accept="image/*"
          className="img-input"
          ref={fileInputRef}
          onChange={handleChange}
        />
      </div>
      {preview && (
        <img src={preview} alt="이미지 미리보기" className="preview" />
      )}
    </div>
  );
}

export default AddItemFileInput;

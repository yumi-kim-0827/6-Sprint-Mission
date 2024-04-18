import { useEffect, useRef, useState } from "react";
import "../styles/AddItemFileInput.css";

function AddItemFileInput({ onChange, name }) {
  const [preview, setPreview] = useState(null);

  const fileInputRef = useRef();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    if (nextValue) {
      onChange(name, nextValue);
      const nextPreview = URL.createObjectURL(nextValue);
      setPreview(nextPreview);
    }
  };

  const handleClearClick = () => {
    const fileInputNode = fileInputRef.current;
    if (!fileInputNode) return;
    fileInputNode.value = "";
    onChange(name, null);
    setPreview(null);
  };

  useEffect(() => {
    return () => {
      // 정리함수
      if (preview) {
        setPreview(null);
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  return (
    <div className="img-input-container">
      <div className="img-input-label-container">
        <h2 className="img-input-title">상품 이미지</h2>
        <label htmlFor="img" className="img-input-label"></label>
        <input
          type="file"
          id="img"
          accept="image/*"
          className="img-input"
          ref={fileInputRef}
          onChange={handleChange}
          name={name}
        />
      </div>
      {preview && (
        <>
          <img src={preview} alt="이미지 미리보기" className="preview" />
          <input
            type="button"
            className="preview-delete-btn"
            onClick={handleClearClick}
          />
        </>
      )}
    </div>
  );
}

export default AddItemFileInput;

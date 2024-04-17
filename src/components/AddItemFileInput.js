import { useRef, useState } from "react";
import "../styles/AddItemFileInput.css";

function AddItemFileInput({}) {
  const [preview, setPreview] = useState();

  const fileInputRef = useRef();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    console.log(nextValue);
  };

  return (
    <div className="img-input-container">
      <div className="img-input-label-container">
        <label htmlFor="img" className="img-input-label">
          상품 이미지
        </label>
        <input
          type="file"
          id="img"
          accept="image/png, image/jpeg"
          className="img-input"
          ref={fileInputRef}
          onChange={handleChange}
        />
      </div>
      <img src={preview} alt="이미지 미리보기" className="preview" />
    </div>
  );
}

export default AddItemFileInput;

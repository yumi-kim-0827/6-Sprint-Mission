import { useRef } from "react";
import { useEffect, useState } from "react";
import iconImg from "../assets/plus-icon.png";
import "./FileInput.css";

function FileInput({ name, value, onChange }) {
  const [preview, setPreview] = useState();
  const inputRef = useRef();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  useEffect(() => {
    if (!value) {
      setPreview(null);
      return;
    }
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);
  }, [value]);

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = "";
    onChange(name, null);
  };

  return (
    <div className="image-upload">
      <div className="image-upload-frame">
        <label htmlFor="file-input" className="image-upload-frame-wrapper">
          <img src={iconImg} alt="플러스 아이콘" />
          <p className="image-upload__p">이미지 등록</p>
        </label>
        <input
          id="file-input"
          type="file"
          ref={inputRef}
          onChange={handleChange}
        />
      </div>
      {preview && (
        <img className="image-upload__image" src={preview} alt="이미지" />
      )}
      {value && (
        <button className="image-delete-button" onClick={handleClearClick}>
          X
        </button>
      )}
    </div>
  );
}

export default FileInput;

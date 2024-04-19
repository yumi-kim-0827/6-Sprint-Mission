import { useEffect, useRef, useState } from "react";
import "./FileInput.css";

function FileInput({ name, value, onChange }) {
  const [preview, setPreview] = useState();
  const inputRef = useRef();

  const plusImageSrc = process.env.PUBLIC_URL + "/images/ic_plus.png";

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
    if (nextValue) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(nextValue);
    } else {
      setPreview(null);
    }
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;
    inputNode.value = "";
    onChange(name, null);
  };

  useEffect(() => {
    if (!value) return;
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    return () => {
      setPreview();
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);

  return (
    <div>
      <input
        className="file-input"
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleChange}
        ref={inputRef}
      />
      <div className="image-input-container">
        <button
          className="item-image-input-button"
          onClick={() => inputRef.current.click()}
        >
          <div className="button-inner-contents">
            <img src={plusImageSrc} />
            <span>이미지 등록</span>
          </div>
        </button>
        <img className="image-preview" src={preview} alt="이미지 미리보기" />
        {value && <button onClick={handleClearClick}>X</button>}
      </div>
    </div>
  );
}

export default FileInput;

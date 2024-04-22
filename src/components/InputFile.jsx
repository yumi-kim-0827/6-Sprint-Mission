import { useRef, useEffect, useState } from "react";
import IconX from "../assets/ic_X_active.svg";
import "./InputFile.css";

function InputFile({ name, value, onChange }) {
  const [preview, setPreview] = useState();
  const inputRef = useRef();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
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
    <>
      <input
        id="input-file"
        className="input-file"
        type="file"
        onChange={handleChange}
        ref={inputRef}
        placeholder="이미지 등록"
      />
      <div className="preview-box">
        {value && (
          <img className="preview-image" src={preview} alt="이미지 미리보기" />
        )}
        {value && (
          <button className="preview-delete-button" onClick={handleClearClick}>
            <img className="icon-x" src={IconX} alt="파일첨부취소" />
          </button>
        )}
      </div>
    </>
  );
}

export default InputFile;

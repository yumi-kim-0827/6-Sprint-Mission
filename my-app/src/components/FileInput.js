import { useState, useEffect, useRef } from "react";
import "./FileInput.css";

function FileInput({ name, value, onChange }) {
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
    <div>
      <div className="FileInputForm">
        <input
          type="file"
          onChange={handleChange}
          ref={inputRef}
          className="inputImg"
        />
        {value && <img src={preview} className="previewImg" />}
        {value && (
          <button
            type="button"
            onClick={handleClearClick}
            className="cancelButton"
          ></button>
        )}
      </div>
    </div>
  );
}
export default FileInput;

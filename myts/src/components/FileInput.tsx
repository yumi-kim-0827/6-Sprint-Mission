import { ChangeEvent, InputHTMLAttributes, useEffect, useRef, useState } from "react";
import "./FileInput.css";

interface Props extends InputHTMLAttributes<HTMLInputElement>{
  value: File | null;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function FileInput({ name, value, onChange, ...rest }: Props) {
  const [preview, setPreview] = useState("");
  const inputRef = useRef<HTMLFormElement>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nextValue: string = e.target.files[0];
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
      setPreview("");
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);

  return (
    <div className="fileInputForm">
      <input
        type="file"
        className="fileInput"
        accept="image/png, image/jpeg"
        onChange={handleChange}
        ref={inputRef}
      />
      {preview && (
        <img src={preview} className="previewImg" alt="이미지 미리보기" />
      )}
      {value && (
        <button className="deleteImageButton" onClick={handleClearClick}>
          X
        </button>
      )}
    </div>
  );
}
export default FileInput;

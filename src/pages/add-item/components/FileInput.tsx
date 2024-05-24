import { ChangeEvent } from "react";
import { useEffect, useRef, useState } from "react";

interface Props {
  name: string;
  value: File | null;
  onImageChange: (name: string, value: File | null) => void;
}

function FileInput({ name, value, onImageChange }: Props) {
  const [previewImg, setPreviewImg] = useState("");
  const inputImgRef = useRef<HTMLInputElement>(null);

  const handleImgChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newImgValue = e.target.files?.[0] || null; // undefined이면 null로 대체
    onImageChange(name, newImgValue);
  };

  const handleImgDelete = () => {
    const inputNode = inputImgRef.current;
    if (!inputNode) return;

    inputNode.value = "";
    onImageChange(name, null);
  };

  useEffect(() => {
    if (!value) return;
    const newPreviewImg = URL.createObjectURL(value);
    setPreviewImg(newPreviewImg);

    return () => {
      setPreviewImg("");
      URL.revokeObjectURL(newPreviewImg);
    };
  }, [value]);

  return (
    <div className="wrapper-img-upload">
      <label htmlFor="file">
        + <br /> 이미지 등록
      </label>
      <input
        className="input-img"
        type="file"
        id="file"
        onChange={handleImgChange}
        ref={inputImgRef}
      />
      {previewImg && (
        <div className="img-preview">
          <img src={previewImg} alt="이미지 파일 미리보기" />
          <button
            className="btn-img-delete"
            type="button"
            onClick={handleImgDelete}
          >
            x
          </button>
        </div>
      )}
    </div>
  );
}

export default FileInput;

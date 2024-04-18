import React, { useRef } from "react";
import "./AddItem";

function ImageInput({ onImageChange, onImageDelete, image }) {
  const inputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      onImageChange(file);
    }
  };

  const handleDelete = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;
    inputNode.value = "";
    onImageDelete();
  };

  return (
    <div>
      <p>상품 이미지</p>
      {image && (
        <div>
          <img
            className="imgPreview"
            src={URL.createObjectURL(image)}
            alt="상품 이미지"
          />
          <button className="deleteButton" onClick={handleDelete}>
            X
          </button>
        </div>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      ></input>
    </div>
  );
}

export default ImageInput;

import React, { useRef } from "react";
import "./AddItem";
import "../styles/ImageInput.css";
import imageDeleteIcon from "../assets/imageFile_x.svg";
import imageAddIcon from "../assets/imageFile_+.svg";

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
      <p className="addItemTitle">상품 이미지</p>
      <div className="fileInputContainer">
        <label className="imageFileInput" htmlFor="file">
          <div class="inputItems">
            <img className="imageAddButton" src={imageAddIcon} alt="Add Icon" />
            <p className="addImage"> 이미지 등록</p>
          </div>
        </label>
        <div>
          {image && (
            <div className="previewContainer">
              <img
                className="imgPreview"
                src={URL.createObjectURL(image)}
                alt="상품 이미지"
              />
              <button className="deleteButton" onClick={handleDelete}>
                <img
                  className="imgDeleteIcon"
                  src={imageDeleteIcon}
                  alt="상품 삭제"
                />
              </button>
            </div>
          )}
        </div>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        id="file"
      ></input>
    </div>
  );
}

export default ImageInput;

import { useRef, useState } from "react";
import { ImageCard } from "/src/entities/ImageCard";
import icplus from "/src/shared/asset/ic_plus.png";

import "./ImageList.scss";

export function ImageList() {
  const [images, setImages] = useState([]);

  const fileRef = useRef();

  const handleFileSelect = () => {
    const newFile = Array.from(fileRef.current.files).map((v) =>
      URL.createObjectURL(v)
    );
    setImages((prevImages) => [...prevImages, newFile]);
  };

  const handleDelete = () => {
    setImages([]);
  };

  return (
    <>
      <div>
        <h2 className="ImageList__subtitle">상품 이미지</h2>
      </div>
      <div className="ImageList__FileInput">
        <label htmlFor="fileInput" className="ImageList__plus">
          <img
            className="ImageList__placeholder"
            src={icplus}
            alt="이미지 등록"
          />
          <span className="ImageList__plus-message">이미지 등록</span>
        </label>
        <input
          type="file"
          className="ImageList__file-input"
          onChange={handleFileSelect}
          id="fileInput"
          ref={fileRef}
          accept=".png,.jpeg"
        />
      </div>
      {!!images.length &&
        images.map((v, index) => {
          return <ImageCard src={v} key={index} onClick={handleDelete} />;
        })}
    </>
  );
}

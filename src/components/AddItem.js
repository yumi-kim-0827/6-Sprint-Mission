import "../style/additem.css";
import { useState } from "react";
import ic_x_gray from "../assets/icon/ic_x_gray.svg";
import ic_x_blue from "../assets/icon/ic_x_blue.svg";

export default function AddItem() {
  const [imageSrc, setImageSrc] = useState("");
  const [filled, setFilled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // 선택한 파일
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageSrc(event.target.result); // 이미지를 URL로 변환하여 상태 업데이트
      };
      reader.readAsDataURL(file); // 파일을 읽어서 URL로 변환
    }
  };

  const handleInputChange = (e) => {
    // 모든 input과 textarea가 채워졌는지 확인
    const inputs = document.querySelectorAll(
      "input:not(#imageInput), textarea"
    );
    const isFilled = Array.from(inputs).every(
      (input) => input.value.trim() !== ""
    );
    setFilled(isFilled);
  };

  return (
    <>
      <div className="add-header flexrow margin-bottom10">
        <p>상품 등록하기</p>
        <button className={filled ? "filled" : ""}>등록</button>
      </div>
      <div className="flexcolumn margin-bottom10">
        <div>
          <p>상품 이미지</p>
          <div className="flexrow">
            <div className="add-img">
              <label className="input-img-btn" htmlFor="imageInput">
                <span style={{ fontSize: "40px" }}>+</span>
                <br />
                <span>이미지 등록</span>
                {/* 파일 선택 input */}
                <input
                  id="imageInput"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
              </label>
            </div>
            <div>
              <div className="input-img-btn">
                {imageSrc && (
                  <>
                    <img src={imageSrc} className="handleImage" alt="add img" />
                    {isHovered && (
                      <img
                        src={ic_x_blue}
                        alt="delete img"
                        onClick={() => setImageSrc("")}
                        className="delete-btn"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                      />
                    )}
                    {!isHovered && (
                      <img
                        src={ic_x_gray}
                        alt="delete img"
                        className="delete-btn"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                      />
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="add-name flexcolumn margin-bottom10">
        <p>상품명</p>
        <input
          type="text"
          placeholder="상품명을 입력해주세요."
          onChange={handleInputChange}
        />
      </div>
      <div className="add-text flexcolumn margin-bottom10">
        <p>상품 소개</p>
        <textarea
          placeholder="상품 소개를 입력해주세요."
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="add-price flexcolumn margin-bottom10">
        <p>판매가격</p>
        <input
          placeholder="판매 가격을 입력해주세요."
          onChange={handleInputChange}
        />
      </div>
      <div className="add-tag flexcolumn margin-bottom10">
        <p>태그</p>
        <input
          placeholder="태그를 입력해주세요."
          onChange={handleInputChange}
        />
      </div>
    </>
  );
}

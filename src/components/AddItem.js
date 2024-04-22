import "../style/additem.css";
import { useState } from "react";
import ic_x_gray from "../assets/icon/ic_x_gray.svg";
import ic_x_blue from "../assets/icon/ic_x_blue.svg";

export default function AddItem() {
  const [imageSrc, setImageSrc] = useState("");
  const [isAllInputFilled, setIsAllInputFilled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [inputPrice, setInputPrice] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageSrc(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const inputs = document.querySelectorAll(
      "input:not(#imageInput), textarea"
    );
    const isFilled = Array.from(inputs).every(
      (input) => input.value.trim() !== ""
    );
    setIsAllInputFilled(isFilled);
  };

  function Commas(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const handlePriceChange = (e) => {
    const price = e.target.value.replace(/,/g, "");
    const formattedPrice = Commas(price);
    console.log(formattedPrice);
    setInputPrice(formattedPrice);
  };

  return (
    <>
      <div className="add-header flexrow margin-bottom10">
        <p>상품 등록하기</p>
        <button className={isAllInputFilled ? "filled" : ""}>등록</button>
      </div>
      <div className="flexcolumn margin-bottom10">
        <div>
          <p>상품 이미지</p>
          <div className="flexrow">
            <div className="add-img">
              <label className="input-img-btn" htmlFor="imageInput">
                <span className="input-img-text">+</span>
                <br />
                <span>이미지 등록</span>
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
                    {isHovered ? (
                      <img
                        src={ic_x_blue}
                        alt="delete img"
                        onClick={() => setImageSrc("")}
                        className="delete-btn"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                      />
                    ) : (
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
          value={inputPrice}
          placeholder="판매 가격을 입력해주세요."
          onChange={(e) => {
            handleInputChange(e);
            handlePriceChange(e);
          }}
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

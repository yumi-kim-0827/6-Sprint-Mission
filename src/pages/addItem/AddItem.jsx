import { useRef, useState } from "react";
import styles from "./AddItem.module.css";
import skeleton from "../../assets/bg-img-skeleton.svg";

export default function AddItem() {
  const [preview, setPreview] = useState(skeleton);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState([]);
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);
  const isPreview = preview !== skeleton;

  const handleFileInputChange = () => {
    if (fileInputRef.current) {
      const file = fileInputRef.current.files[0];
      setPreview(URL.createObjectURL(file));
      setFile(file);
    }
  };

  const handleCloseClick = () => {
    setPreview(skeleton);
  };

  const handleTagDeleteClick = tagToDelete => {
    const newTags = tags.filter(tag => tag !== tagToDelete);
    setTags(newTags);
  };

  const handleProductNameChange = e => {
    setProductName(e.target.value);
  };

  const handleProductDescriptionChange = e => {
    setProductDescription(e.target.value);
  };

  const handlePriceChange = e => {
    setPrice(e.target.value);
  };

  const handleTagChange = e => {
    if (e.key === "Enter") {
      setTags([...tags, e.target.value]);
      e.target.value = "";
    }
  };

  const CreateTag = ({ tag, i }) => (
    <div className={styles.tag}>
      <span>{tag}</span>
      <button
        className={styles.btnClose}
        type="button"
        id={i}
        onClick={() => {
          handleTagDeleteClick(tag);
        }}
      />
    </div>
  );

  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("productDescription", productDescription);
    formData.append("price", price);
    formData.append("tags", tags.join(","));
    if (file) {
      formData.append("productImage", file);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerSubmit}>
        <p className={styles.titleSubmit}>상품 등록하기</p>
        <button className={styles.btn} onClick={handleSubmit}>
          등록
        </button>
      </div>
      <div>
        <p className={styles.titleImg}>상품 이미지</p>
        <div className={styles.containerImg}>
          {isPreview ? (
            <div className={styles.preview}>
              <img src={preview} alt="상품 미리보기 이미지" />
              <button
                className={styles.btnCloseActive}
                onClick={handleCloseClick}
              />
            </div>
          ) : (
            <div
              className={styles.preview}
              onClick={() => fileInputRef.current.click()}
            >
              <img src={preview} alt="상품 이미지 추가 버튼" />
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileInputChange}
              />
            </div>
          )}
        </div>
      </div>
      <div>
        <p className={styles.titleForms}>상품명</p>
        <input
          type="text"
          placeholder="상품명을 입력해주세요"
          onChange={handleProductNameChange}
          value={productName}
        />
      </div>
      <div>
        <p className={styles.titleForms}>상품 소개</p>
        <input
          type="text"
          placeholder="상품 소개를 입력해주세요"
          onChange={handleProductDescriptionChange}
          value={productDescription}
        />
      </div>
      <div>
        <p className={styles.titleForms}>판매 가격</p>
        <input
          placeholder="판매 가격을 입력해주세요"
          onChange={handlePriceChange}
          value={price}
        />
      </div>
      <div>
        <p className={styles.titleForms}>태그</p>
        <input placeholder="태그를 입력해주세요" onKeyUp={handleTagChange} />
      </div>
      <div className={styles.containerTags}>
        {tags.length > 0 &&
          tags.map((tag, i) => {
            return <CreateTag key={`${tag}-${i}`} tag={tag} i={i} />;
          })}
      </div>
    </div>
  );
}

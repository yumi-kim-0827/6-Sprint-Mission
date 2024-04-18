import React, { useRef, useState, useEffect } from "react";
import plusIcon from "../image/ic_plus.png";
import deleteImgButton from "../image/ic_X_for_img.png";
import deleteTagButton from "../image/ic_X_for_tag.png";

const ProductImageInput = ({ value, onChange, onDelete }) => {
  const [preview, setPreview] = useState();
  const inputRef = useRef();

  useEffect(() => {
    if (!value) return;
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    return () => {
      setPreview();
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;
    inputNode.value = null;
    onDelete();
  };

  return (
    <div className="image-input additem-input">
      <label>상품 이미지</label>
      <div className="image-input-content">
        <label htmlFor="productImage">
          <div className="btn-upload">
            <img src={plusIcon} alt="플러스 버튼" />
            <span>이미지 등록</span>
          </div>
        </label>
        <input
          id="productImage"
          type="file"
          name="images"
          ref={inputRef}
          accept="image/png, image/jpeg"
          onChange={onChange}
        />
        {value && (
          <div className="image-preview-section">
            <img
              src={preview}
              alt="이미지 미리보기"
              className="image-preview"
            />
            <img
              src={deleteImgButton}
              alt="이미지 삭제"
              className="image-preview-delete-button"
              onClick={handleClearClick}
            />
          </div>
        )}
      </div>
    </div>
  );
};
const TagInput = ({ onSubmit }) => {
  const [tag, setTag] = useState("");
  const handleTagChange = (e) => {
    setTag(e.target.value);
  };
  const handleEnterOneTag = (e) => {
    e.preventDefault();
    onSubmit(tag);
    setTag("");
  };
  return (
    <form onSubmit={handleEnterOneTag} className="one-line-input additem-input">
      <label htmlFor="ProductTag">태그</label>
      <input
        id="ProductTag"
        name="tags"
        placeholder="태그를 입력해주세요"
        value={tag}
        onChange={handleTagChange}
      />
    </form>
  );
};
const TagListElement = ({ tag, onDelete }) => {
  const handleDeleteTag = () => {
    onDelete(tag);
  };
  return (
    <div className="tag-element">
      <span>{tag}</span>
      <img
        src={deleteTagButton}
        onClick={handleDeleteTag}
        alt="태그 삭제 버튼"
      />
    </div>
  );
};

const AddItemForm = ({ setEnrollButtonDisable }) => {
  //상품 정보 담은 객체
  const [values, setValues] = useState({
    images: null,
    name: "",
    description: "",
    price: "",
    tags: [],
  });
  const [tags, setTags] = useState([]);

  //등록 버튼 활성화 검사
  const completeFormCheck =
    values.images &&
    values.name &&
    values.description &&
    values.price &&
    tags.length;
  console.log(completeFormCheck);
  if (completeFormCheck) {
    setEnrollButtonDisable(false);
  } else {
    setEnrollButtonDisable(true);
  }
  // 위 코드 올바른 코드인가요?
  //useEffect 안에 들어가야 하는 코든가요?
  // INPUT 값이 변할 때마다 실해해서 비효율적인 코드인가요? 흠....

  //입력 했을 떄 함수
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (e.target.type === "number") {
      setValues((prevValues) => ({
        ...prevValues,
        [name]: Number(value),
      }));
      return;
    }
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  //사진 올릴때 함수
  const handleImageInputChange = (e) => {
    const { name, files } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: files[0],
    }));
  };
  //사진 삭제 시 함수
  const handleDeletePreviewImage = () => {
    setValues((prevValues) => ({
      ...prevValues,
      images: null,
    }));
  };
  // 태그 리스트 추가
  const handleTagList = (tag) => {
    const duplicationCheck = tags.every((element) => {
      return element !== tag;
    });

    if (duplicationCheck) {
      setTags((prevList) => [...prevList, tag]);
    } else {
      alert("이미 존재하는 태그입니다");
    }
  };
  const handleDeleteTag = (targetTag) => {
    const newList = tags.filter((tag) => {
      return tag !== targetTag;
    });
    setTags(newList);
  };

  return (
    <div className="additem-form">
      <ProductImageInput
        name="images"
        value={values.images}
        onChange={handleImageInputChange}
        onDelete={handleDeletePreviewImage}
      />
      <div className="one-line-input additem-input">
        <label htmlFor="ProductName">상품명</label>
        <input
          id="ProductName"
          name="name"
          placeholder="상품명을 입력해주세요"
          value={values.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="textArea-input additem-input">
        <label htmlFor="ProductDescription">상품 소개</label>
        <textarea
          id="ProductDescription"
          name="description"
          placeholder="상품 소개를 입력해주세요"
          value={values.description}
          onChange={handleInputChange}
        />
      </div>
      <div className="one-line-input additem-input">
        <label htmlFor="ProductPrice">판매 가격</label>
        <input
          id="ProductPrice"
          type="number"
          name="price"
          placeholder="판매 가격을 입력해주세요"
          value={values.price}
          onChange={handleInputChange}
        />
      </div>
      <TagInput onSubmit={handleTagList} />
      <div className="tag-list-section">
        {tags.map((tag) => (
          <TagListElement key={tag} tag={tag} onDelete={handleDeleteTag} />
        ))}
      </div>
    </div>
  );
};

export default AddItemForm;

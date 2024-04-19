import styled, { css } from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus, FaTimes } from "react-icons/fa";

const AddItem = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const [tags, setTags] = useState("");
  const [currentTag, setCurrentTag] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate.push("/");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newTag = currentTag.trim();

      if (newTag !== "") {
        setTags([...tags, newTag]);
        setCurrentTag("");
      }
    }
  };

  const handleTagRemove = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  const isFormValid = () => {
    return (
      productName.trim() !== "" &&
      productDescription.trim() !== "" &&
      productPrice.trim() !== "" &&
      tags.length > 0
    );
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage instanceof Blob) {
      setProductImage(selectedImage);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    } else {
      console.error("선택한 파일이 유효하지 않습니다.");
    }
  };

  const handleCancelPreview = (e) => {
    e.preventDefault();
    setProductImage("");
    setImagePreview("");
  };

  return (
    <AddItemContainer>
      <AddItemHeader>
        <AddItemTitle>상품 등록하기</AddItemTitle>
        <AddItemsButton type="submit" disabled={!isFormValid()}>
          등록
        </AddItemsButton>
      </AddItemHeader>
      <form onSubmit={handleSubmit}>
        <AddImgContainer>
          <ItemImgTitle>상품 이미지</ItemImgTitle>
          <ImageUploadContainer>
            <ItemImgInput
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
            <PlusIcon />
            <ImageUploadText>이미지 등록</ImageUploadText>
            {imagePreview && (
              <ImagePreviewContainer>
                <img src={imagePreview} alt="미리보기" />
                <CancelButton onClick={handleCancelPreview}>
                  <FaTimes />
                </CancelButton>
              </ImagePreviewContainer>
            )}
          </ImageUploadContainer>
        </AddImgContainer>

        <ItemNameContainer>
          <ItemNameTitle>상품명</ItemNameTitle>
          <ItemNameInput
            type="text"
            placeholder="상품명을 입력해주세요"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </ItemNameContainer>

        <ItemDescriptionContainer>
          <ItemDescriptionTitle>상품 소개</ItemDescriptionTitle>
          <StyledTextarea
            placeholder="상품 소개를 입력해주세요"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            required
          />
        </ItemDescriptionContainer>

        <ItemPriceContainer>
          <ItemPriceTitle>판매가격</ItemPriceTitle>
          <ItemPriceInput
            type="text"
            placeholder="판매 가격을 입력해주세요"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
        </ItemPriceContainer>
        <ItemTagContainer>
          <ItemTagTitle>태그</ItemTagTitle>
          <ItemTagInput
            type="text"
            placeholder="태그를 입력해주세요"
            value={currentTag}
            onChange={(e) => setCurrentTag(e.target.value)}
            onKeyDown={handleKeyDown}
            required
          />
          {Array.isArray(tags) &&
            tags.map((tag, index) => (
              <TagItem key={index}>
                <TagText>{tag}</TagText>
                <CancelTagButton onClick={() => handleTagRemove(index)}>
                  <FaTimes />
                </CancelTagButton>
              </TagItem>
            ))}
        </ItemTagContainer>
      </form>
    </AddItemContainer>
  );
};

const AddItemContainer = styled.div`
  font-family: Pretendard;
  font-weight: 600;
`;

const AddItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 340px;
`;

const AddItemTitle = styled.h2`
  margin-bottom: 5px;
`;

const AddItemsButton = styled(Link)`
  width: 60px;
  height: 19px;
  padding: 12px 20px;
  border-radius: 12px;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  text-decoration: none;
  ${({ disabled }) =>
    !disabled &&
    css`
      background-color: #3691ff;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #9ca3af;
      cursor: not-allowed;
    `}
`;

const AddImgContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 200px;
  height: 200px;
  align-items: center;
  margin: 10px 340px;
`;

const PlusIcon = styled(FaPlus)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 32px;
  color: #9ca3af;
`;

const ImagePreviewContainer = styled.div`
  position: absolute;
  top: 0;
  right: -220px;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border: 1px solid #ccc;
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CancelButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  color: #fff;
  background-color: #3691ff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  padding: 3px 3.4px;
  border: none;
`;

const ItemImgTitle = styled.h3`
  margin-top: 5px;
  margin-bottom: 10px;
`;

const ImageUploadContainer = styled.label`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  input[type="file"] {
    display: none;
  }
  background-color: #f3f4f6;
`;

const ItemImgInput = styled.input`
  display: block;
`;

const ImageUploadText = styled.p`
  margin-top: 80px;
  font-size: 14px;
  color: #666;
`;

const ItemNameContainer = styled.div`
  align-items: center;
  margin: 10px 340px;
`;

const ItemNameTitle = styled.h3`
  margin-top: 60px;
  margin-bottom: 10px;
`;

const ItemNameInput = styled.input`
  width: 100%;
  background-color: #f3f4f6;
  padding: 15px;
  border-radius: 8px;
  border: none;
`;

const ItemDescriptionContainer = styled.div`
  align-items: center;
  margin: 10px 340px;
`;

const ItemDescriptionTitle = styled.h3`
  margin-bottom: 10px;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 200px;
  background-color: #f3f4f6;
  padding: 15px;
  border-radius: 8px;
  border: none;
  resize: none;
`;

const ItemPriceContainer = styled.div`
  align-items: center;
  margin: 10px 340px;
`;

const ItemPriceTitle = styled.h3`
  margin-bottom: 10px;
`;

const ItemPriceInput = styled.input`
  width: 100%;
  background-color: #f3f4f6;
  padding: 15px;
  border-radius: 8px;
  border: none;
`;

const ItemTagContainer = styled.div`
  align-items: center;
  margin: 10px 340px;
`;

const ItemTagTitle = styled.h3`
  margin-bottom: 10px;
`;

const ItemTagInput = styled.input`
  width: 100%;
  margin-bottom: 10px;
  background-color: #f3f4f6;
  padding: 15px;
  border-radius: 8px;
  border: none;
`;

const TagItem = styled.div`
  display: inline-block;
  margin-right: 5px;
  background-color: #f9fafb;
  border-radius: 25px;
  padding: 5px;
  border: none;
`;

const TagText = styled.span`
  font-weight: normal;
  font-size: 16px;
  margin-right: 8px;
`;

const CancelTagButton = styled.button`
  position: relative;
  cursor: pointer;
  color: #ffffff;
  background-color: #9ca3af;
  border-radius: 50%;
  width: 21px;
  height: 21px;
  padding: 3px 3px;
  border: none;
  margin: 1px;
`;

export default AddItem;

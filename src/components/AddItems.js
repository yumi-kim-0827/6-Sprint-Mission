import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const AddItem = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const [tags, setTags] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate.push("/");
  };

  const isFormValid = () => {
    return (
      productName.trim() !== "" &&
      productDescription.trim() !== "" &&
      productPrice.trim() !== "" &&
      tags.trim() !== ""
    );
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
              value={productImage}
              accept="image/*"
              onChange={(e) => setProductImage(e.target.files[0])}
              required
            />
            <PlusIcon />
            <ImageUploadText>이미지 등록</ImageUploadText>
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

        {/* 태그 입력 */}
        <ItemTagContainer>
          <ItemTagTitle>태그</ItemTagTitle>
          <ItemTagInput
            type="text"
            placeholder="태그를 입력해주세요"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            required
          />
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
  background-color: #3692ff;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  text-decoration: none;
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
  color: #666;
`;

const ItemImgTitle = styled.h3`
  margin-top: 5px;
  margin-bottom: 10px;
`;

const ImageUploadContainer = styled.label`
  position: relative;
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  input[type="file"] {
    display: none;
  }
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
  margin-bottom: 300px;
`;

export default AddItem;

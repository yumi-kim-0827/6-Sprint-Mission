import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import FileInput from "../components/additem/FileInput";
import Button from "../components/Button";
import TextInput from "../components/additem/TextInput";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  body {
    font-family: 'Pretendard';
    margin: 0;
  }
}`;

const StyledButton = styled(({ isCheck, ...props }) => <Button {...props} />)`
  background-color: ${(props) => (props.isCheck ? "#3692ff" : "#9ca3af")};
`;

const Layout = styled.div`
  max-width: 1200px;
  margin: 25px auto;
`;

const SubmitArea = styled.div`
  display: flex;
  justify-content: space-between;
  height: 42px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 700;
`;

const TextArea = styled(TextInput).attrs({ as: "textarea" })`
  height: 200px;
  text-indent: 24px;
  padding: 16px 0;
  &::placeholder {
    color: #9ca3af;
    font-weight: 400;
    font-size: 16px;
  }
`;

const h1 = {
  margin: "auto 0",
};

const style = {
  marginTop: "20px",
};

const INITIALPRODCUT = {
  imgFile: null,
  name: "",
  intro: "",
  price: 0,
  tag: "",
};

export default function AddItem() {
  function CustomButton({ isCheck, children, ...props }) {
    return (
      <StyledButton isCheck={isCheck} {...props}>
        {children}
      </StyledButton>
    );
  }
  const [productInfo, setProductInfo] = useState(INITIALPRODCUT);
  const [isCheck, setIsCheck] = useState(false);

  const formCheck = (obj) => {
    const value = Object.values(obj).every(
      (value) => value !== undefined && value !== null && value !== ""
    );
    setIsCheck(value);
  };

  const handleContentChange = (e) => {
    e.preventDefault();
    console.log(productInfo);
  };

  const handleChange = (name, value) => {
    setProductInfo((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };
  console.log(productInfo);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  useEffect(() => {
    formCheck(productInfo);
  }, [productInfo]);
  return (
    <>
      <GlobalStyle />
      <Layout>
        <form onSubmit={handleContentChange}>
          <SubmitArea>
            <h1 style={h1}>상품 등록하기</h1>
            <CustomButton isCheck={isCheck} type="submit" disabled={!isCheck}>
              등록
            </CustomButton>
          </SubmitArea>
          <InputContainer>
            <label htmlFor="imgFile" style={style}>
              상품 이미지
            </label>
            <FileInput
              name="imgFile"
              onChange={handleChange}
              value={productInfo.imgFile}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="name">상품명</label>
            <TextInput
              type="text"
              id="name"
              name="name"
              onChange={handleInputChange}
              placeholder="상품명을 입력해주세요"
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="intro">상품소개</label>
            <TextArea
              type="text"
              id="intro"
              name="intro"
              onChange={handleInputChange}
              placeholder="상품 소개를 입력해 주세요"
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="price">판매 가격</label>
            <TextInput
              type="number"
              id="price"
              name="price"
              onChange={handleInputChange}
              placeholder="판매 가격을 입력해주세요"
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="tag">태그</label>
            <TextInput
              type="text"
              id="tag"
              name="tag"
              onChange={handleInputChange}
              placeholder="태그를 입력해주세요"
            />
          </InputContainer>
        </form>
      </Layout>
    </>
  );
}

import React, { forwardRef, useEffect, useState } from "react";
import styled from "styled-components";

import Button from "../components/Button";
import { Input, TextAreaInput, ImageInput } from "../components/Input";
import DeleteIconButton from "../components/DeleteIconButton";

const AddItemPage = () => {
  const [tags, setTags] = useState([]);
  const [isValidation, setIsValidation] = useState(false);

  const [values, setValues] = useState({
    name: "",
    price: "",
    description: "",
    tag: "",
  });

  const handleChangeValue = (e) => {
    const { name, value } = e.target;

    let formatValue = value;
    if (name === "price") formatValue = value.replace(/\D/g, "");
    if (name === "tag") formatValue = value.replaceAll(" ", "");

    setValues((prevValues) => ({
      ...prevValues,
      [name]: formatValue,
    }));
  };

  const handleUpdateTag = (e) => {
    if (tags.length > 7) return;

    const nextValue = e.target.value;

    nextValue &&
      setTags((prevValues) => [...new Set([...prevValues, nextValue])]);

    setValues((prevValues) => ({
      ...prevValues,
      tag: "",
    }));
  };

  const handleDeleteTag = (e) => {
    e.preventDefault();
    const currentTag = e.target.parentNode.children[0];
    setTags((prevTags) =>
      prevTags.filter((tag) => tag !== currentTag.innerText)
    );
  };

  useEffect(() => {
    if (values.name && values.price && values.description && tags) {
      setIsValidation(true);
    } else {
      setIsValidation(false);
    }
  }, [values]);

  return (
    <StyledDiv>
      <div className="form-header">
        <h1>상품 등록하기</h1>
      </div>
      <form>
        <ItemFormGroup label="image" placeholder="이미지 등록" />
        <ItemFormGroup
          label="name"
          placeholder="상품명을 입력해주세요"
          value={values.name}
          onChange={handleChangeValue}
        />
        <ItemFormGroup
          label="price"
          placeholder="판매가격을 입력해주세요"
          value={values.price}
          onChange={handleChangeValue}
        />
        <ItemFormGroup
          label="description"
          placeholder="상품소개를 입력해주세요"
          value={values.description}
          onChange={handleChangeValue}
        />
        <ItemFormGroup
          label="tag"
          placeholder="태그를 입력해주세요"
          value={values.tag}
          onChange={handleChangeValue}
          onBlur={handleUpdateTag}
        />
        {tags && (
          <TagBox>
            {tags.map((tag, idx) => (
              <TagEl key={idx}>
                <p>{tag}</p>
                <DeleteIconButton onClick={handleDeleteTag} />
              </TagEl>
            ))}
          </TagBox>
        )}
        <StyledButton type="submit" size="small" disabled={!isValidation}>
          등록
        </StyledButton>
      </form>
    </StyledDiv>
  );
};

const ItemFormGroup = forwardRef(
  ({ label, placeholder = "", onChange, onBlur, value }, ref) => {
    const labelTable = {
      name: "상품명",
      price: "판매가격",
      description: "상품 소개",
      tag: "태그",
      image: "상품 이미지",
    };

    const labelName = labelTable[label];

    return (
      <StyledFormGroup>
        <label htmlFor={label}>{labelName}</label>
        <div className="form__input">
          {label === "image" ? (
            <ImageInput
              className="form__imgInput"
              label={label}
              placeholder={placeholder}
              onChange={onChange}
            />
          ) : label === "description" ? (
            <TextAreaInput
              label={label}
              placeholder={placeholder}
              onChange={onChange}
            ></TextAreaInput>
          ) : (
            <Input
              label={label}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            ></Input>
          )}
        </div>
        <p className="error-msg hidden"></p>
      </StyledFormGroup>
    );
  }
);

const TagBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
  min-height: 100px;
  height: auto;
  margin-top: 8px;
`;

const TagEl = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 4px;
  min-width: 100px;
  height: 48px;
  padding: 12px;
  border-radius: 26px;
  background-color: var(--color-cool-gray-100);
  font-weight: 400;
  font-size: 16px;
`;

const StyledFormGroup = styled.div`
  width: 100%;
  min-height: 85px;
  margin-bottom: 16px;

  > label {
    display: block;
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16.71px;
    color: var(--color-cool-gray-800);
  }

  div {
    position: relative;
  }

  @media screen and (min-width: 768px) {
    > label {
      margin-bottom: 12px;
      font-size: 18px;
      line-height: 21.48px;
    }
  }
`;

const StyledDiv = styled.div`
  position: relative;
  margin: calc(70px + 16px) 16px;
  height: auto;

  .form-header {
    display: flex;
    align-items: center;
    height: 42px;
    margin-bottom: 16px;
    font-size: 20px;
    font-weight: 700;
  }

  .form__imgInput {
    width: 168px;
    height: 168px;
  }

  @media screen and (min-width: 768px) {
    margin: calc(70px + 16px) 24px;

    > .form-header {
      margin-bottom: 20px;
      font-size: 28px;
      line-height: 33.41px;
    }
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;

    .form__imgInput {
      width: 282px;
      height: 282px;
    }
  }
`;

const StyledButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  width: 88px;
  height: 42px;
`;

export default AddItemPage;

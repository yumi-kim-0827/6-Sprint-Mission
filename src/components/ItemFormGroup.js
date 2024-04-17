import React from "react";
import styled from "styled-components";

import ImageInput from "./ImageInput";
import { Input, TextAreaInput } from "./Input";

const ItemFormGroup = ({
  label,
  placeholder = "",
  onChange,
  onBlur,
  value,
}) => {
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
};

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

export default ItemFormGroup;

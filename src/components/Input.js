import React, { forwardRef, useEffect, useState } from "react";
import styled from "styled-components";

import plusIcon from "../assets/icon/plus.svg";
import DeleteIconButton from "./DeleteIconButton";

const Input = forwardRef(
  (
    {
      label = "",
      type = "text",
      placeholder = "",
      onChange,
      onBlur,
      accept = null,
      value = "",
    },
    ref = null
  ) => {
    return (
      <>
        <InputEl
          id={label}
          name={label}
          type={type}
          placeholder={placeholder}
          ref={ref}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          accept={accept}
        />
      </>
    );
  }
);

const ImageInput = forwardRef(
  (
    { placeholder, onChange, icon = "icon-plus", className },
    ref = null,
    value
  ) => {
    const [postImg, setPostImg] = useState([]);
    const [previewImg, setPreviewImg] = useState("");

    const handleUploadFile = (e) => {
      const files = e.target.files;
      setPostImg([...files]);

      let fileURL;

      const reader = new FileReader();
      reader.onload = () => {
        fileURL = reader.result;
        setPreviewImg(fileURL);
      };

      reader.readAsDataURL(files[0]);
    };

    const handleDeleteFile = (e) => {
      e.preventDefault();
      setPreviewImg("");
    };

    return (
      <StyledImgInput className={className}>
        <label>
          <i className="icon-plus"></i>
          <p>{placeholder}</p>
          <Input
            type="file"
            accept="image/*"
            onChange={handleUploadFile}
            value={value}
          />
        </label>
        {previewImg && (
          <Preview>
            <img alt={previewImg} src={previewImg} />
            <DeleteIconButton onClick={handleDeleteFile} />
          </Preview>
        )}
      </StyledImgInput>
    );
  }
);

const Preview = styled.div`
  position: relative;

  button {
    position: absolute;
    top: 8px;
    right: 8px;
    background-color: transparent;
  }
`;

const InputEl = styled.input`
  position: relative;
  width: 100%;
  height: 56px;
  padding: 16px;
  border-radius: 12px;
  background-color: var(--color-cool-gray-100);

  &::placeholder {
    color: var(--color-cool-gray-400);
  }
  &:focus {
    outline: #3692ff solid 1.5px;
  }

  /* input 자동완성 시 자동 스타일 적용 초기화 */

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    -webkit-text-fill-color: #000;
    -webkit-box-shadow: 0 0 0px 1000px var(--color-cool-gray-100) inset;
    box-shadow: 0 0 0px 1000px var(--color-cool-gray-100) inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  :autofill,
  :autofill:hover,
  :autofill:focus,
  :autofill:active {
    -webkit-text-fill-color: #000;
    -webkit-box-shadow: 0 0 0px 1000px var(--color-cool-gray-100) inset;
    box-shadow: 0 0 0px 1000px var(--color-cool-gray-100) inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const StyledImgInput = styled.div`
  display: flex;
  gap: 8px;
  min-width: 168px;
  min-height: 168px;

  input {
    display: none;
  }

  label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    min-width: 168px;
    width: 100%;
    min-height: 168px;
    height: 100%;
    background-color: var(--color-cool-gray-100);
    border-radius: 12px;

    p {
      font-weight: 400;
      font-size: 16px;
      color: #9ca3af;
    }
  }

  i.icon-plus {
    display: block;
    width: 48px;
    height: 48px;
    background-image: url(${plusIcon});
  }

  img {
    min-width: 168px;
    min-height: 168px;
    width: 100%;
    height: 100%;
    border-radius: 12px;
  }
`;

const TextAreaInput = forwardRef(
  ({ placeholder = "", onChange, value = "", label = "" }, ref = null) => {
    return (
      <>
        <TextAreaEl
          id={label}
          name={label}
          placeholder={placeholder}
          onChange={onChange}
        >
          {value}
        </TextAreaEl>
      </>
    );
  }
);

const TextAreaEl = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 16px;
  border: none;
  border-radius: 12px;
  background-color: var(--color-cool-gray-100);
  resize: none;

  &::placeholder {
    color: var(--color-cool-gray-400);
  }
  &:focus {
    outline: #3692ff solid 1.5px;
  }
`;

export { Input, TextAreaInput, ImageInput };

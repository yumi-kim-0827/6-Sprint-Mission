import React, { useState } from "react";
import styled from "styled-components";
import BaseInput from "./BaseInput";
import DeleteButton from "./DeleteButton";
import BaseIcon from "./BaseIcon";

import plus from "../assets/icon/plus.svg";

const AddItemPageImageInput = ({
  className,
  placeholder,
  value,
  icon = { plus },
}) => {
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
    <StyledImgInput className={className} icon={icon}>
      <label>
        <ImageInputIcon src={plus} />
        <p>{placeholder}</p>
        <BaseInput
          type="file"
          accept="image/*"
          onChange={handleUploadFile}
          value={value}
        />
      </label>
      {previewImg && (
        <Preview>
          <img alt={previewImg} src={previewImg} />
          <DeleteButton onClick={handleDeleteFile} />
        </Preview>
      )}
    </StyledImgInput>
  );
};

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

  img {
    min-width: 168px;
    min-height: 168px;
    width: 100%;
    height: 100%;
    border-radius: 12px;
  }

  @media screen and (min-width: 1200px) {
    label,
    img {
      width: 282px;
      height: 282px;
    }
  }
`;

const ImageInputIcon = styled(BaseIcon)`
  width: 48px;
  height: 48px;
`;

const Preview = styled.div`
  position: relative;

  button {
    position: absolute;
    top: 8px;
    right: 8px;
    background-color: transparent;
  }
`;

export default AddItemPageImageInput;

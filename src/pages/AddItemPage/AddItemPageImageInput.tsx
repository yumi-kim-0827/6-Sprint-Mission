import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import BaseInput from "../../components/BaseInput";
import DeleteButton from "../../components/DeleteButton";
import PlusIcon from "../../assets/icon/plus.svg?react";

interface Props {
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: () => void;
  onKeyDown?: () => void;
}

const AddItemPageImageInput = ({ className, placeholder, value }: Props) => {
  const [postImg, setPostImg] = useState<File[]>([]);
  const [previewImg, setPreviewImg] = useState("");

  const handleUploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      const files = e.target.files;

      if (files) {
        setPostImg([...files]);

        let fileURL;

        const reader = new FileReader();
        reader.onload = () => {
          fileURL = reader.result as string;
          fileURL && setPreviewImg(fileURL);
        };

        files && reader.readAsDataURL(files[0]);
      }
    }
  };

  const handleDeleteFile = (e: Event) => {
    e.preventDefault();
    setPreviewImg("");
  };

  return (
    <StyledImgInput className={className}>
      <label htmlFor="itemImages">
        <PlusIcon />
        <p>{placeholder}</p>
        <BaseInput
          id="itemImages"
          name="itemImages"
          type="file"
          accept="image/*"
          onChange={handleUploadFile}
          value={value}
        />
      </label>
      {previewImg && (
        <Preview>
          <img alt={previewImg} src={previewImg} />
          <DeleteButton onClick={() => handleDeleteFile} />
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

  svg {
    width: 48px;
    height: 48px;
  }

  @media screen and (min-width: 1200px) {
    label,
    img {
      width: 282px;
      height: 282px;
    }
  }
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

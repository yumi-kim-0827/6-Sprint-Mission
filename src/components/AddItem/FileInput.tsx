import styled from "styled-components";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import PlusIcon from "../../assets/images/icon/ic_plus.svg";
import AddItemImage from "./AddItemImage";

interface FileInputProps {
  name: string;
  value: File | null;
  onChange: (name: string, value: File | null) => void;
}

const FileInput: React.FC<FileInputProps> = ({ name, value, onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [preview, setPreview] = useState<string | undefined>(undefined);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nextValue = e.target.files ? e.target.files[0] : null;
    onChange(name, nextValue);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = "";
    onChange(name, null);
    setPreview(undefined);
  };

  useEffect(() => {
    if (!value) return;

    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    return () => {
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);

  return (
    <>
      <AddImageTitle htmlFor="file_input">상품 이미지</AddImageTitle>
      <AddImageWrap>
        <AddImageLabel htmlFor="file_input">
          <img src={PlusIcon} alt="플러스" className="plus" />
          <ImagePlaceholder>이미지 등록</ImagePlaceholder>
        </AddImageLabel>
        <input
          id="file_input"
          type="file"
          onChange={handleChange}
          ref={inputRef}
          style={{ display: "none" }}
        />

        <AddItemImage
          value={value}
          preview={preview}
          onClearClick={handleClearClick}
        />
      </AddImageWrap>
    </>
  );
};

const AddImageTitle = styled.label`
  font-size: 18px;
  font-weight: 700;
  color: #1f2937;
`;

const AddImageWrap = styled.div`
  display: flex;
  gap: 10px;
`;

const AddImageLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 282px;
  height: 282px;
  border: none;
  border-radius: 12px;
  background-color: #f3f4f6;
  cursor: pointer;

  @media (max-width: 1199px) {
    width: 162px;
    height: 162px;
  }
`;

const ImagePlaceholder = styled.span`
  font-size: 16px;
  color: #9ca3af;
`;

export default FileInput;

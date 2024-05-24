import styled from "styled-components";

import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import PlusIcon from "../../assets/images/icon/ic_plus.svg";

import AddItemImage from "./AddItemImage";

// Props의 타입을 정의합니다.
interface FileInputProps {
  name: string;
  value: File | null;
  onChange: (name: string, value: File | null) => void;
}

const FileInput: React.FC<FileInputProps> = ({ name, value, onChange }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [preview, setPreview] = useState<string>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nextValue = e.target.files ? e.target.files[0] : null;
    onChange(name, nextValue);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = "";
    onChange(name, null);
  };

  useEffect(() => {
    if (!value) return;

    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    // useEffect 내부에서 생성된 URL을 cleanup 함수에서 해제합니다.
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

  & #file_input {
    &[type="file"] {
      position: absolute;
      width: 0;
      height: 0;
      padding: 0;
      overflow: hidden;
      border: 0;
    }
  }
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

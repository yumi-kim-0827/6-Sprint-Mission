import styled from "styled-components";
import closeIcon from "../../assets/images/icon/ic_X.svg";
import React from "react";

interface AddItemProps {
  value: File | null;
  preview: string | undefined;
  onClearClick?: () => void;
}

const AddItemImage = ({ value, preview, onClearClick }: AddItemProps) => {
  if (!value) return;

  return (
    <PreviewImageWrap>
      <PreviewImage src={preview} alt="이미지 미리보기" />
      <CloseIcon onClick={onClearClick}>
        <img src={closeIcon} alt="" />
      </CloseIcon>
    </PreviewImageWrap>
  );
};

const PreviewImageWrap = styled.div`
  position: relative;
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

  /* -------------------------------------------------------------------------------------------------------------------------------------------- */
  /* Tablet Size================================================================================================================================= */
  /* -------------------------------------------------------------------------------------------------------------------------------------------- */
  @media (max-width: 1199px) {
    width: 162px;
    height: 162px;
  }

  /* -------------------------------------------------------------------------------------------------------------------------------------------- */
  /* Mobile Size================================================================================================================================= */
  /* -------------------------------------------------------------------------------------------------------------------------------------------- */
  @media (max-width: 767px) {
  }
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

const CloseIcon = styled.button`
  position: absolute;
  width: 26px;
  height: 26px;
  top: 6px;
  right: 6px;
  background-color: #9ca3af;
  border: none;
  border-radius: 999999px;
  cursor: pointer;

  &:hover {
    background-color: #3692ff;
  }
`;

export default AddItemImage;

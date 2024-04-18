import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 24px;
`;

export const FileContainer = styled.label`
  display: inline-block;
  cursor: pointer;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 282px;
  height: 282px;
  border-radius: 12px;
  background-color: var(--input-background-color);
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: var(--placeholder-color);
`;

export const Input = styled.input`
  display: none;
`;

export const ImagePreviewContainer = styled.div`
  position: relative;
  width: 282px;
  height: 282px;
`;

export const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

export const DeleteIcon = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`;

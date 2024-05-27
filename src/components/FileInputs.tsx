import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

interface FileInputProps {
  name: string;
  value: File | null;
  onChange: (name: string, value: File | null) => void;
}

const FileInput: React.FC<FileInputProps> = ({ name, value, onChange }) => {
  const [previewImg, setPreviewImg] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    onChange(name, selectedFile);
  };

  const handleRemoveFile = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;
    inputNode.value = "";
    onChange(name, null);
    setPreviewImg("");
  };

  useEffect(() => {
    if (!value) {
      setPreviewImg("");
      return;
    }
    const nextPreview = URL.createObjectURL(value);
    setPreviewImg(nextPreview);
    return () => {
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);

  return (
    <FileInputContainer>
      <TotalContainer>
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleChange}
          id="file-input"
          ref={inputRef}
          style={{ display: "none" }}
        />
        <label htmlFor="file-input">
          <UploadButton>
            <Icon>+</Icon>
            <Text>이미지 등록</Text>
          </UploadButton>
        </label>
      </TotalContainer>
      {value && (
        <ImagePreview>
          <PreviewImage src={previewImg} alt="Preview" />
          <RemoveButton onClick={handleRemoveFile}>X</RemoveButton>
        </ImagePreview>
      )}
    </FileInputContainer>
  );
};

const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #ccc;
  border-radius: 12px;
  width: 282px;
  height: 282px;
  background-color: #f3f4f6;
  margin-top: 20px;
  @media (max-width: 1023px) {
    width: 162px;
    height: 162px;
  }

  @media (max-width: 767px) {
    width: 168px;
    height: 168px;
  }
`;

const FileInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const UploadButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Icon = styled.div`
  font-size: 58px;
  color: #9ca3af;
`;

const Text = styled.div`
  margin-top: 10px;
  color: #9ca3af;
`;
const ImagePreview = styled.div`
  position: relative;
  width: 282px;
  height: 282px;
  border-radius: 22px;
  margin-left: 20px;
  margin-top: 20px;
  @media (max-width: 1023px) {
    width: 162px;
    height: 162px;
  }
  @media (max-width: 767px) {
    width: 168px;
    height: 168px;
  }
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

const RemoveButton = styled.button`
  position: absolute;
  right: -1px;
  background-color: #3692ff;
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 12px;
  cursor: pointer;
`;

export default FileInput;

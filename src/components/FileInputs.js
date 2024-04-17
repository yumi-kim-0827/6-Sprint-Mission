import React, { useState } from "react";
import styled from "styled-components";

const FileInput = () => {
  const [file, setFile] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setPreviewImg(URL.createObjectURL(selectedFile));
  };

  const handleRemoveFile = () => {
    setFile(null);
    setPreviewImg(null);
  };

  return (
    <FileInputContainer>
      <TotalContainer>
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleFileChange}
          id="file-input"
          style={{ display: "none" }}
        />
        <label htmlFor="file-input">
          <UploadButton>
            <Icon>+</Icon>
            <Text>이미지 등록</Text>
          </UploadButton>
        </label>
      </TotalContainer>
      {previewImg && (
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

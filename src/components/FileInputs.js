import React, { useState, useRef } from "react";
import styled from "styled-components";

const FileInput = () => {
  const [file, setFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const inputRef = useRef(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setPreviewURL(URL.createObjectURL(selectedFile));
  };

  const handleUploadClick = () => {
    inputRef.current.click();
  };

  const handleRemoveFile = () => {
    setFile(null);
    setPreviewURL(null);
  };

  return (
    <Container>
      <UploadArea>
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleFileChange}
          ref={inputRef}
          style={{ display: "none" }}
        />
        <UploadButton onClick={handleUploadClick}>
          <Icon>+</Icon>
          <Text>이미지 등록</Text>
        </UploadButton>
        {previewURL && (
          <PreviewContainer>
            <PreviewImage src={previewURL} alt="Preview" />
            <RemoveButton onClick={handleRemoveFile}>X</RemoveButton>
          </PreviewContainer>
        )}
      </UploadArea>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #ccc;
  border-radius: 12px;
  width: 282px;
  height: 282px;
  background-color: #f3f4f6;
  margin-top: 20px;
`;

const UploadArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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

const PreviewContainer = styled.div`
  position: relative;
  margin-left: 20px;
`;

const PreviewImage = styled.img`
  max-width: 283px;
  max-height: 283px;
`;

const RemoveButton = styled.button`
  position: absolute;
  top: -10px;
  right: -10px;
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

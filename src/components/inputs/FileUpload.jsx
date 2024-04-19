import React, { useEffect, useState } from "react";
import styled from "styled-components";
import plusIcon from "../../assets/images/ic_plus.svg";

const FileUpload = (props) => {
  const { label, name, placeholder = "이미지 등록", onChange } = props;
  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
    if (imgUrl) {
      onChange(imgUrl, name);
    }
  }, [imgUrl]);

  return (
    <div key={name} className="input-wrapper">
      <label htmlFor={name}>{label}</label>
      <Wrap>
        <FileBox>
          <div>
            <Icon>
              <img src={plusIcon} alt={placeholder} />
            </Icon>
            <Text>이미지 등록</Text>
          </div>
          <Input
            onChange={(e) => {
              setImgUrl(URL.createObjectURL(e.target.files[0]));
            }}
            type="file"
            name={name}
            id={name}
          />
        </FileBox>
        {imgUrl && (
          <Box>
            <img src={imgUrl} alt="이미지 미리보기" />
          </Box>
        )}
      </Wrap>
    </div>
  );
};

const Wrap = styled.div`
  display: flex;
  gap: 2.4rem;
`;

const Box = styled.div`
  position: relative;
  width: 282px;
  height: 282px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const FileBox = styled(Box)`
  background-color: var(--gray-100);
`;

const Input = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0;
  opacity: 0;
  cursor: pointer;
`;

const Icon = styled.div`
  width: 48px;
  height: 48px;
  margin: 0 auto;
`;

const Text = styled.p`
  margin: 0.2rem 0 0;
  font-size: var(--font-16);
  color: var(--gray-400);
  line-height: 1.5;
`;

export default FileUpload;

import React from "react";
import styled from "styled-components";
import plusIcon from "../../assets/images/ic_plus.svg";

const FileUpload = (props) => {
  const { label, name, placeholder = "이미지 등록" } = props;
  return (
    <div key={name} className="input-wrapper">
      <label htmlFor={name}>{label}</label>
      <Box>
        <div>
          <Icon>
            <img src={plusIcon} alt={placeholder} />
          </Icon>
          <Text>이미지 등록</Text>
        </div>
        <Input type="file" name={name} id={name} />
      </Box>
    </div>
  );
};

const Box = styled.div`
  position: relative;
  width: 282px;
  height: 282px;
  border-radius: 12px;
  background-color: var(--gray-100);
  display: flex;
  justify-content: center;
  align-items: center;
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

import { useEffect, useRef, useState } from "react";
import fileUpLoad from "../../assets/file_upload.svg";
import styled from "styled-components";

const FileInputHide = styled.input`
  display: none;
`;

const FileInputLabel = styled.label`
  width: 280px;
  height: 280px;
  border-radius: 12px;
  background-image: url(${fileUpLoad});
  margin: 12px 0 24px;
`;

const style = {
  width: "282px",
  height: "282px",
};

function FileInput({ name, value, onChange }) {
  const inputRef = useRef();
  const [preview, setPreview] = useState();

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = "";
    onChange(name, null);
  };

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  useEffect(() => {
    if (!value) return;
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);
  }, [value]);
  return (
    <>
      {value && <img style={style} src={preview} alt="이미지 미리보기" />}
      {/* <img src={fileUpLoad} style={style} alt="이미지 등록" /> */}
      <FileInputHide
        type="file"
        ref={inputRef}
        onChange={handleChange}
        id="imgFile"
      />
      {!value && <FileInputLabel htmlFor="imgFile" />}
      {value && <button onClick={handleClearClick}>X</button>}
    </>
  );
}

export default FileInput;

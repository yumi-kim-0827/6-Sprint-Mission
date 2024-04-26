import { useEffect, useRef, useState } from "react";
import "../styles/FileInput.css";
import preImg from "../imgs/ImgAdd.png";

const FileInput = ({ name, value, inputChange }) => {
  const inputFile = useRef();
  const [preview, setPreview] = useState();

  const handleFile = (e) => {
    const fileInformation = e.target.files[0];
    inputChange(name, fileInformation);
  };
  const fileClearClick = () => {
    const inputNode = inputFile.current;
    inputNode.value = "";
    inputChange(name, null);
  };

  useEffect(() => {
    if (!value) return;

    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);
  }, [value]);

  return (
    <div className="preview_container">
      <label htmlFor="imgAdd">
        <img src={preImg} alt="이미지등록" />
      </label>
      <input id="imgAdd" type="file" onChange={handleFile} ref={inputFile} />
      {value && (
        <img src={preview} alt="이미지 미리보기" className="preview_img" />
      )}
      {value && <button onClick={fileClearClick}>X</button>}
    </div>
  );
};

export default FileInput;

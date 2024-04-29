import { useEffect, useRef, useState } from "react";

function FileInput({ name, value, onChange }) {
  const [preview, setPreview] = useState(); // 파일 미리보기 주소를 문자열로 저장
  const inputRef = useRef(); // useRef로 만든 객체를 inputRef에 할당

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
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

    return () => {
      // useEffect에서 리턴값으로 함수를 리턴하면 사이드 이펙트를 정리할 수 있다.
      setPreview(); // preview State값 초기화
      URL.revokeObjectURL(nextPreview); // 앞에서 만든 ObjectURL을 해제
    };
  }, [value]); // 파일을 선택할 때마다 미리보기 주소를 바꾼다.

  return (
    <div className="add-item-img-input-wrapper">
      <input
        type="file"
        accept="image/png, image/jpeg"
        id="img"
        placeholder="이미지 등록"
        onChange={handleChange}
        ref={inputRef}
        className="add-item-img-input"
      />
      <div className="preview-item-img-wrapper">
        {value && (
          <img
            src={preview}
            alt="미리보기 이미지"
            className="preview-item-img"
          />
        )}
        {value && (
          <button
            onClick={handleClearClick}
            className="preview-img-delete-button"
          >
            X
          </button>
        )}
      </div>
    </div>
  );
}

export default FileInput;

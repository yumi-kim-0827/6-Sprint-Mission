import { useEffect, useRef, useState } from "react"
import icoPlus from "../img/ic_plus.svg";
import icoX from "../img/ic_x.svg";

export function FileInput({ name, value, initialPreview, onChange }) {
  const [preview, setPreviews] = useState(null);
  const fileInput = useRef();

  const handleChange = (e) => {
    onChange(name, e.target.files[0]);
  }

  const handleClearClick = (e) => {
    setPreviews(null);
    onChange(name, null);
  }

  useEffect(() => {
    if (!value) return;
    const nextPreview = URL.createObjectURL(fileInput.current.files[0]);
    setPreviews(nextPreview);
    
    return () => {
      URL.revokeObjectURL(nextPreview);
    }
  }, [value, initialPreview])

  return (
    <div className="file-view"> 
      <label htmlFor="item-file" className="file-view__label">
        <img src={icoPlus} alt="아이콘" aria-hidden="true" className="label-img"/>
        <span className="label-txt">이미지 등록</span>
      </label>
      <input type="file" accept="image/png, image/jpeg" ref={fileInput} onChange={handleChange} id="item-file" className="file-view__input" multiple/>
  
      {preview && <div className="file-view__preview">
        <img src={preview} alt="이미지 미리보기" className="file-view__img" />
        <button type="button" onClick={handleClearClick} className="file-view__btn">
          <img src={icoX} alt="아이콘" aria-hidden="true"/>
        </button>
      </div>}
    </div>
  )
}
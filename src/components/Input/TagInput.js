import { useEffect, useRef, useState } from "react";
import Styles from "./Input.module.scss";
import icoX from "../../img/ic_x.svg";

export default function TagInput({ name, onChange }) {
  const [tagArr, setTagArr] = useState([]);
  const tagInput = useRef();

  const handleKeydown = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      const nextValue = e.target.value;

      setTagArr((prevArr) => [...prevArr, nextValue]);
      e.target.value = "";
    }
  };

  const handleDelete = (e) => {
    const nextTagArr = tagArr.filter(
      (el, index) => index !== Number(e.target.value)
    );

    setTagArr(nextTagArr);
    onChange(name, nextTagArr);
  };

  useEffect(() => {
    onChange(name, tagArr);
  }, [tagArr, name]);

  return (
    <div className={Styles.tagView}>
      <input
        type="text"
        onKeyDown={handleKeydown}
        ref={tagInput}
        className={Styles.input}
        placeholder="태그를 입력해주세요"
      />
      <ul className={Styles.tagContainer}>
        {tagArr.map((tag, index) => {
          return (
            <li key={index} className={Styles.tagViewList}>
              <span className={Styles.tagViewTxt}>{tag}</span>
              <button
                type="button"
                value={index}
                onClick={handleDelete}
                className={Styles.tagViewBtn}
              >
                <img src={icoX} alt="아이콘" aria-hidden="true" />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

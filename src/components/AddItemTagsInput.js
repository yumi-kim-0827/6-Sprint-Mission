import { useEffect, useState } from "react";
import "../styles/AddItemTagsInput.css";

function AddItemTagsInput() {
  const [tags, setTags] = useState([]);

  const handleTagChange = (e) => {
    if (e.key !== "Enter") return;
    e.preventDefault(); // 폼 제출 막음
    setTags([...tags, e.target.value]);
    e.target.value = ""; // 인풋 값 초기화
  };

  const handleClearClick = (i) => {
    setTags((prevTags) => prevTags.filter((tag, index) => index !== i));
  };

  useEffect(() => {}, [tags]);

  return (
    <div>
      <label className="form-label" htmlFor="tags">
        태그
      </label>
      <input
        id="tags"
        name="tags"
        className="form-input"
        placeholder="태그를 입력해주세요"
        type="text"
        onKeyDown={handleTagChange}
      />
      <div className="tags-container">
        {tags.map((tag, index) => {
          return (
            <div key={index} className="tag-container">
              <p className="tag">{tag}</p>
              <button
                className="tag-delete-button"
                type="button"
                onClick={() => handleClearClick(index)}
              ></button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AddItemTagsInput;

import "../styles/AddItemTagsInput.css";

function AddItemTagsInput({ onChange, name, value, onClearClick }) {
  const handleTagChange = (e) => {
    if (e.key !== "Enter" || !e.target.value) return;
    e.preventDefault(); // 폼 제출 막음
    onChange(name, e.target.value);
    e.target.value = ""; // 인풋 값 초기화
  };

  return (
    <section>
      <label className="form-label" htmlFor="tags">
        태그
      </label>
      <input
        id="tags"
        name={name}
        className="form-input"
        placeholder="태그를 입력해주세요"
        type="text"
        onKeyDown={handleTagChange}
      />
      <div className="tags-container">
        {value.map((tag, index, arr) => {
          return (
            <div key={index} className="tag-container">
              <p className="tag">{tag}</p>
              <button
                className="tag-delete-button"
                type="button"
                onClick={() => onClearClick(index)}
              ></button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default AddItemTagsInput;

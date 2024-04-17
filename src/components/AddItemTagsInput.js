import "../styles/AddItemTagsInput.css";

function AddItemTagsInput() {
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
      />
    </div>
  );
}

export default AddItemTagsInput;

import { KeyboardEvent } from "react";
import "../styles/AddItemTagsInput.css";

interface Props {
  onChange: (name: string, value: string | File) => void;
  name: string;
  value: string[];
  onClearClick: (index: number) => void;
}

function AddItemTagsInput({ onChange, name, value, onClearClick }: Props) {
  const handleTagChange = (e: KeyboardEvent<HTMLInputElement>) => {
    const inputElement = e.target as HTMLInputElement;
    // Enter 누르면 폼 제출되는 문제, 아무것도 입력하지 않은 경우 리턴
    if (e.key !== "Enter" || !inputElement.value.trim()) return;
    // 이미 존재하는 태그 입력하는 경우 alert 창 띄움
    if (value.includes(inputElement.value.trim())) {
      alert("이미 존재하는 태그입니다.");
      inputElement.value = "";
      return;
    }
    e.preventDefault(); // 폼 제출 막음
    onChange(name, inputElement.value);
    inputElement.value = ""; // 인풋 값 초기화
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
        {value.map((tag, index) => {
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

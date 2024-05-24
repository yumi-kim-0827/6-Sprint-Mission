import styled from "styled-components";
import closeIcon from "../../assets/images/icon/ic_X.svg";
import React from "react";

type AddTagProps = {
  tags: string[];
  setTags: (tags: string[]) => void;
};

const AddTag: React.FC<AddTagProps> = ({ tags, setTags }) => {
  const removeTags = (indexToRemove: number) => {
    const filter = tags.filter((el, index) => index !== indexToRemove);
    setTags(filter);
  };

  const addTags = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const inputVal = (e.target as HTMLInputElement).value;
    if (e.key === "Enter" && inputVal !== "" && !tags.includes(inputVal)) {
      setTags([...tags, inputVal]);
      e.preventDefault();
      (e.target as HTMLInputElement).value = "";
    }
  };

  return (
    <div className="add_tag">
      <label htmlFor="tag_input_id" className="add_tag_title">
        태그
      </label>
      <TagsInput
        id="tag_input_id"
        className="tag_input"
        type="text"
        onKeyUp={addTags}
        placeholder="태그를 입력해주세요"
        maxLength={12}
      />

      <Tags id="tags">
        {tags.map((tag, index) => (
          <Tag key={tag}>
            <span className="tag_title">{tag}</span>
            <CloseIcon onClick={() => removeTags(index)}>
              <img src={closeIcon} alt="태그 닫기" />
            </CloseIcon>
          </Tag>
        ))}
      </Tags>
    </div>
  );
};

const TagsInput = styled.input`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: 56px;
  border: none;
  border-radius: 12px;
  background-color: #f3f4f6;
  padding: 20px;
  font-size: 16px;
  font-weight: 400;

  &:focus {
    outline: 1px solid #3692ff;
  }
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 8px 0 0 0;
`;

const Tag = styled.li`
  width: auto;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  padding: 12px 12px 12px 16px;
  font-size: 14px;
  list-style: none;
  border-radius: 15px;
  margin: 0 4px 4px 4px;
  background: var(--gray-50);
`;

const CloseIcon = styled.button`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-left: 8px;
  background-color: #9ca3af;
  border: none;
  border-radius: 999999px;
  cursor: pointer;

  &:hover {
    background-color: #3692ff;
  }
`;

export default AddTag;

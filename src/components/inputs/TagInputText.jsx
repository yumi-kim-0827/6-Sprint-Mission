import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DeleteIcon from "../../assets/images/ic_X.svg";

const TagInputText = (props) => {
  const [tags, setTags] = useState([]);
  const { type = "text", label, name, placeholder = "", onChange } = props;

  const handleKeyUp = (e) => {
    const { key } = e;
    if (key === "Enter") {
      setTags((prev) => {
        return [e.target.value, ...prev];
      });
      e.target.value = "";
    }
  };

  const deleteTag = (idx) => {
    setTags((prev) =>
      prev.filter((_, index) => {
        return index !== idx;
      })
    );
  };

  useEffect(() => {
    onChange(tags, name);
  }, [tags]);

  return (
    <div key={name} className="input-wrapper">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onKeyUp={handleKeyUp}
      />
      <TagUl>
        {tags.map((tag, idx) => {
          return (
            <TagItem key={tag + idx} className="flex-center">
              <TagText>{tag}</TagText>
              <IconBox
                onClick={() => {
                  deleteTag(idx);
                }}
              >
                <img src={DeleteIcon} alt="삭제" />
              </IconBox>
            </TagItem>
          );
        })}
      </TagUl>
    </div>
  );
};

const TagUl = styled.ul`
  margin: 1.2rem 0 0;
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
`;

const TagItem = styled.li`
  padding: 1.2rem 1.2rem 1.2rem 1.6rem;
  gap: 0.8rem;
  border-radius: 26px;
  background-color: var(--gray-50);
`;

const TagText = styled.span`
  font-size: var(--font-16);
  line-height: 1.5;
  color: var(--gray-800);
`;

const IconBox = styled.div`
  width: 22px;
  height: 24px;
  cursor: pointer;
`;

export default TagInputText;

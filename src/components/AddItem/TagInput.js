import styled from "styled-components";
import { InputWrapper } from "./Input";
import XIcon from "../../assets/icon/ic_X.svg";

const Button = styled.img`
  width: 22px;
  height: 24px;
  cursor: pointer;
`;

const StyledTag = styled.li`
  padding: 12px 12px 12px 16px;
  border-radius: 26px;
  background-color: var(--cool-gray50);
  display: flex;
  gap: 8px;
`;

const StyledTagList = styled.ul`
  display: flex;
  gap: 12px;
  margin-top: 12px;
`;

function TagList({ tagList, onClick }) {
  return (
    <StyledTagList>
      {tagList &&
        tagList.map((tag) => (
          <StyledTag key={tag}>
            <p>{tag}</p>
            <Button src={XIcon} onClick={() => onClick(tag)} alt="삭제" />
          </StyledTag>
        ))}
    </StyledTagList>
  );
}

export function TagInputWrapper({
  name,
  value,
  tagList,
  onChange,
  onKeyDown,
  onClick,
}) {
  return (
    <div>
      <InputWrapper
        name={name}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <TagList tagList={tagList} onClick={onClick} />
    </div>
  );
}

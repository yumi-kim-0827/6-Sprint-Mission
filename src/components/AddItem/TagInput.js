import styled from "styled-components";
import { InputWrapper } from "./Input";
import { RoundStyledButton } from "../Common/BasicStyledComponents";
import XIcon from "../../assets/icon/ic_X.svg";

const Icon = styled.img`
  width: 22px;
  height: 24px;
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
            <RoundStyledButton type="button" onClick={() => onClick(tag)}>
              <Icon src={XIcon} alt="삭제" />
            </RoundStyledButton>
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

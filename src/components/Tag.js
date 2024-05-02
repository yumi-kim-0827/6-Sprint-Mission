import styled from "styled-components";

import xIcon from "../assets/icons/ic_X.svg";

const TagContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  height: 48px;
  padding: 0 12px 0 16px;
  border-radius: 26px;

  background-color: var(--gray50);
  color: var(--gray800);
  font-size: 16px;
  font-weight: 400;
`;

function Tag({ tag, onDelete }) {
  const handleDeleteClick = () => {
    onDelete(tag);
  };

  return (
    <TagContainer>
      {tag}
      <img src={xIcon} onClick={handleDeleteClick} alt="x-icon"></img>
    </TagContainer>
  );
}

export default Tag;

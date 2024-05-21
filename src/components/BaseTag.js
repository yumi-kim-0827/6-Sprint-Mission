import React from "react";
import styled from "styled-components";
import DeleteButton from "./DeleteButton";

const BaseTag = ({ tag, onClick, isEditable = false, className }) => {
  return (
    <TagEl className={className}>
      <p>{isEditable ? { tag } : `#${tag}`}</p>
      {isEditable && <DeleteButton key={tag} onClick={onClick} />}
    </TagEl>
  );
};

const TagEl = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 4px;
  height: 48px;
  padding: 12px;
  border-radius: 26px;
  background-color: var(--color-cool-gray-100);
  font-weight: 400;
  font-size: 16px;
`;

export default BaseTag;

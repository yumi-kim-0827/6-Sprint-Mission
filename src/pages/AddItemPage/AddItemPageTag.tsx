import React from "react";
import styled from "styled-components";
import DeleteButton from "../../components/DeleteButton";

interface BaseTagProps {
  tag: string;
  onClick: () => void;
}

const BaseTag = ({ tag, onClick }: BaseTagProps) => {
  return (
    <TagEl>
      <p>{tag}</p>
      <DeleteButton key={tag} onClick={onClick} />
    </TagEl>
  );
};

const TagEl = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 4px;
  min-width: 100px;
  height: 48px;
  padding: 12px;
  border-radius: 26px;
  background-color: var(--color-cool-gray-100);
  font-weight: 400;
  font-size: 16px;
`;

export default BaseTag;

import { MouseEventHandler } from "react";
import styled from "styled-components";
import DeleteButton from "./DeleteButton";

interface BaseTagProps {
  tag: string;
  onClick?: MouseEventHandler;
  isEditable?: boolean;
  className?: string;
}

const BaseTag = ({
  tag,
  onClick,
  isEditable = false,
  className,
}: BaseTagProps) => {
  return (
    <TagEl className={className}>
      <p>{isEditable ? tag : `#${tag}`}</p>
      {isEditable && onClick && <DeleteButton onClick={onClick} />}
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

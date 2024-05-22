import styled from "styled-components";
import { ReactComponent as XIcon } from "assets/icon/ic_X.svg";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onDelete: () => void;
}

export default function Tag({ children, onDelete }: Props) {
  return (
    <StyledTag>
      {children}
      <StyledXIcon onClick={onDelete} />
    </StyledTag>
  );
}

const StyledTag = styled.div`
  background-color: var(--cool-gray200);
  width: max-content;
  padding: 12px 12px 12px 16px;
  border-radius: 26px;
  display: flex;
  align-items: center;
  gap: 8px;
  line-height: 24px;
  font-weight: 400;
  font-size: 16px;
  color: var(--cool-gray800);
  user-select: none;
`;

const StyledXIcon = styled(XIcon)`
  cursor: pointer;
  fill: #9ca3af;

  &:hover {
    fill: var(--blue);
  }
`;

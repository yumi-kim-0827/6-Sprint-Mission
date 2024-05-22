import styled from "styled-components";

export default function ProductTag({ children }) {
  return <StyledTag>{children}</StyledTag>;
}

const StyledTag = styled.div`
  background-color: var(--cool-gray300);
  width: max-content;
  padding: 6px 16px;
  border-radius: 26px;
  line-height: 24px;
  font-weight: 400;
  font-size: 16px;
  color: var(--cool-gray800);
  user-select: none;
`;

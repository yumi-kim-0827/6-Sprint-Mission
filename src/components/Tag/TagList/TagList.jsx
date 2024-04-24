import styled from "styled-components";

export default function TagList({ children }) {
  return <StyledTagList>{children}</StyledTagList>;
}

const StyledTagList = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
`;

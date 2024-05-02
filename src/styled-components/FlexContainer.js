import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ $direction }) => $direction ?? "row"};
  justify-content: ${({ $justifyContent }) =>
    $justifyContent ?? "space-between"};
  align-items: ${({ $alignItems }) => $alignItems ?? "normal"};
  gap: ${({ $gap }) => $gap ?? "0"};
  width: 100%;
`;

export default FlexContainer;

import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || ""};
  justify-content: ${({ justify }) => justify || ""};
  gap: ${({ gap }) => gap || ""};
`;

export const FlexItem = styled.div`
  flex: ${({ flex }) => flex || ""};
`;

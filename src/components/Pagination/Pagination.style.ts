import styled from "styled-components";
import COLORS from "styles/palette";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 40px;
`;

export const PageButton = styled.div<{ $isFocus?: boolean }>`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid ${COLORS.GRAY_200};
  color: ${({ $isFocus }) => ($isFocus ? "white" : `${COLORS.COOL_GRAY_500}`)};
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  background-color: ${({ $isFocus }) =>
    $isFocus ? `${COLORS.BLUE_600}` : "white"};

  &:hover,
  &:focus {
    background-color: ${({ $isFocus }) =>
      $isFocus ? `${COLORS.BLUE_600}` : `${COLORS.GRAY_50}`};
  }
`;

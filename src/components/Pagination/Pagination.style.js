import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 40px;
`;

export const PageButton = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid var(--gray200);
  color: ${({ $isFocus }) => ($isFocus ? "white" : "var(--cool-gray500)")};
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  background-color: ${({ $isFocus }) =>
    $isFocus ? "var(--blue600)" : "white"};

  &:hover,
  &:focus {
    background-color: ${({ $isFocus }) =>
      $isFocus ? "var(--blue600)" : "var(--gray50)"};
  }
`;

import styled from "styled-components";

const SubmitButton = styled.button`
  width: 88px;
  height: 42px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  color: var(--white);
  background-color: var(--blue);
  cursor: pointer;

  &:disabled {
    background-color: var(--gray400);
    cursor: auto;
  }
`;

export default SubmitButton;

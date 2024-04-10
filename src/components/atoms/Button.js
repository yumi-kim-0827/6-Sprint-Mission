import styled from "styled-components";
import React from "react";

const StyledButton = styled.button`
  cursor: pointer;
  background-color: var(--blue);
  padding: 12px 23px;
  border-radius: 8px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 88px;
  height: 42px;
  font-size: 16px;
  font-weight: 600;
  font-family: Pretendard;
`;

export default function Button({ text }) {
  return <StyledButton>{text}</StyledButton>;
}

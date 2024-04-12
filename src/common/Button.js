import React from 'react';
import styled from "styled-components";

const StyledButton = styled.div`
  // width: 88px;
  height: 42px;
  padding: 12px 23px;
  border-radius: 8px;
  background-color: var(--main-color);
  color: #ffffff;
  font-size: 16px;
  line-height: 19.09px;
`

function Button({ children }) {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  );
}

export default Button;
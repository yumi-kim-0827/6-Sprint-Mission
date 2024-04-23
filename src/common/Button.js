import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
  height: 42px;
  padding: 12px 23px;
  border-radius: 8px;
  font-size: 16px;
  line-height: 19.09px;
  color: white;  
  background-color: var(--main-color);
`

function Button({ children }) {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  );
}

export default Button;
//import React from "react";
import styled from "styled-components";

// const StyledTextarea = styled.textarea`
//     width: 100%;
//     ${(props) =>
//         props.height &&
//         `
//         height: ${props.height}px;
//     `}
//     background-color:#F3F4F6;
//     padding: 16px;
//     font-size: 16px;
//     line-height: 20px; 
//     border-style:none;
//     ::placeholder {
//         color: white; 
//     }

// `;

// function TextInput(props) {
//     const { height, value, onChange } = props;

//     return <StyledTextarea height={height} value={value} onChange={onChange} />;
// }

// export default TextInput;



const TextInput1 = styled.TextInput1`
  border: 2px solid #eeeeee;
  border-radius: 4px;
  outline: none;
  padding: 16px;
  width: 1200px;
  height: 56px;

  &:focus {
    border-color: #7760b4;
  }
`;

export default TextInput1;

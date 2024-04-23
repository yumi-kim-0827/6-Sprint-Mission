import styled from "styled-components";

const TextInput = styled.input`
  height: 56px;
  border-radius: 12px;
  background-color: #f3f4f6;
  border: none;
  margin: 12px 0 24px;
  text-indent: 24px;

  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    color: #9ca3af;
  }
`;

export default TextInput;

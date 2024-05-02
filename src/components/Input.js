import styled from "styled-components";

import { BREAKPOINT } from "../module";

const Label = styled.label`
  display: block;
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: 700;
  color: var(--gray800);
  @media (max-width: ${BREAKPOINT.MOBILE}px) {
    font-size: 14px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 56px;
  border-radius: 12px;
  padding-left: 24px;
  background-color: var(--gray50);

  font-weight: 400;
  font-size: 16px;

  &::placeholder {
    color: var(--gray400);
  }
`;

const Textarea = styled(Input)`
  height: 200px;
  padding-top: 16px;
  resize: none;
`;

function InputContainer({
  id,
  label,
  type = "text",
  placeholder,
  onChange = null,
  onKeyUp = null,
}) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      {type === "textarea" ? (
        <Textarea
          id={id}
          name={id}
          placeholder={placeholder}
          onChange={onChange}
          as="textarea"
        ></Textarea>
      ) : (
        <Input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          onKeyUp={onKeyUp}
        ></Input>
      )}
    </div>
  );
}

export { Label, InputContainer };

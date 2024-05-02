import styled, { css } from "styled-components";

const commonStyled = css`
  width: 100%;
  font-size: 16px;
  background: #f3f4f6;
  padding: 16px 24px;
  border-radius: 12px;

  &:placeholder {
    color: val(--color-gray400);
  }
`;

const AddItemWrap = styled.section`
  padding: 29px 0;
`;

const AddItemTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
`;

const Button = styled.button`
  background: var(--color-gray400);
  color: var(--color-white);
  border-radius: 8px;
  text-align: center;
  height: 42px;
  width: 88px;
  font-size: 16px;
  font-weight: 600;
`;

const Label = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin: 24px 0 12px;
`;

const Input = styled.input`
  height: 56px;
  ${commonStyled}
`;
const Textarea = styled.textarea`
  height: 200px;
  ${commonStyled}
`;

export { AddItemWrap, AddItemTop, Title, Button, Label, Input, Textarea };

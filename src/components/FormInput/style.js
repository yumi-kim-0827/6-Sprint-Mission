import styled, { css } from 'styled-components';

const inputStyle = css`
  border-radius: 0.75rem;
  border: none;
  padding-inline: 1.5rem;
  background-color: var(--gray-100);

  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const Label = styled.label`
  font-weight: 700;
  font-size: 1.13rem;
  line-height: 1.34rem;
`;

export const Input = styled.input`
  height: 3.5rem;
  padding-block: 0;
  ${inputStyle}
`;

export const Textarea = styled.textarea`
  height: 12.5rem;
  padding-block: 1rem;
  ${inputStyle}
`;

export const InputContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

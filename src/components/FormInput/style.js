import styled from 'styled-components';

export const Label = styled.label`
  font-weight: 700;
  font-size: 1.13rem;
  line-height: 1.34rem;
`;

export const Input = styled.input`
  height: 3.5rem;
  border-radius: 0.75rem;
  border: none;
  padding-block: 0;
  padding-inline: 1.5rem;
  background-color: var(--gray-100);
`;

export const InputContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

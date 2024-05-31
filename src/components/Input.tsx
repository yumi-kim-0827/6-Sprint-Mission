import styled from 'styled-components';

type InputProps = {
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  min-width: 290px;
  padding: 9px 20px;
  border-radius: 10px;
  background-color: var(--gray-100);

  ::placeholder {
    color: var(--gray-400);
  }
  &::-webkit-input-placeholder {
    color: var(--gray-400);
  }
`;

export default function StyledInput({ value, placeholder, onChange }: InputProps) {
  return <Input value={value} placeholder={placeholder} onChange={onChange} />;
}

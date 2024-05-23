import React, { ReactNode } from 'react';
import { InputContainer, Label } from './style';

interface FormWrapperProps {
  label: string;
  id: string;
  children: ReactNode;
}

const FormWrapper = ({ label, id, children }: FormWrapperProps) => {
  return (
    <InputContainer>
      <Label htmlFor={id}>{label}</Label>
      {children}
    </InputContainer>
  );
};

export default FormWrapper;

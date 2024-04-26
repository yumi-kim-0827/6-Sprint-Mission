import React from 'react';
import { InputContainer, Label } from './style';

const FormWrapper = ({ label, id, children }) => {
  return (
    <InputContainer>
      <Label htmlFor={id}>{label}</Label>
      {children}
    </InputContainer>
  );
};

export default FormWrapper;

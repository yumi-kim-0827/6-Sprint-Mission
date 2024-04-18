import React from 'react';
import { InputContainer, Label, Input } from './style';

const FormInput = ({ label, id, type = 'text', placeholder }) => {
  return (
    <InputContainer>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} name={id} placeholder={placeholder} />
    </InputContainer>
  );
};

export default FormInput;

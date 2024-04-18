import React from 'react';
import { InputContainer, Label, Input, Textarea } from './style';

const FormInput = ({ label, id, type = 'text', placeholder }) => {
  return (
    <InputContainer>
      <Label htmlFor={id}>{label}</Label>
      {type === 'textarea' ? (
        <Textarea id={id} name={id} placeholder={placeholder} />
      ) : (
        <Input id={id} type={type} name={id} placeholder={placeholder} />
      )}
    </InputContainer>
  );
};

export default FormInput;

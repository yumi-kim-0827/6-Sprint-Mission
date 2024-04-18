import React, { forwardRef } from 'react';
import { InputContainer, Label, Input, Textarea, ImageInput } from './style';

const InputElement = forwardRef(({ id, type, placeholder }, ref) => {
  if (type === 'textarea') {
    return <Textarea id={id} name={id} placeholder={placeholder} />;
  } else if (type === 'file') {
    return (
      <ImageInput id={id} type={type} accept=".jpg, .jpeg, .png" ref={ref} />
    );
  } else {
    return <Input id={id} name={id} placeholder={placeholder} />;
  }
});

const FormInput = forwardRef(
  ({ label, id, type = 'text', placeholder }, ref) => {
    return (
      <InputContainer>
        <Label htmlFor={id}>{label}</Label>
        <InputElement id={id} type={type} placeholder={placeholder} ref={ref} />
      </InputContainer>
    );
  }
);

export default FormInput;

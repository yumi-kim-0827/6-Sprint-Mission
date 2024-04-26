import React from 'react';
import FormWrapper from './FormWrapper';
import { Textarea } from './style';

const TextareaInput = ({ label, id, placeholder, ...props }) => {
  return (
    <FormWrapper id={id} label={label}>
      <Textarea id={id} name={id} placeholder={placeholder} {...props} />
    </FormWrapper>
  );
};

export default TextareaInput;

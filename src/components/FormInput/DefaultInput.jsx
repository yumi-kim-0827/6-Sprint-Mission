import React from 'react';
import FormWrapper from './FormWrapper';
import { Input } from './style';

const DefaultInput = ({ label, id, placeholder, ...props }) => {
  return (
    <FormWrapper id={id} label={label}>
      <Input id={id} name={id} placeholder={placeholder} {...props} />
    </FormWrapper>
  );
};

export default DefaultInput;

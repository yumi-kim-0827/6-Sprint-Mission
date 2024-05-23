import React, { ComponentProps } from 'react';
import FormWrapper from './FormWrapper';
import { Input } from './style';

interface DefaultInputProps extends ComponentProps<'input'> {
  label: string;
  id: string;
  placeholder: string;
}

const DefaultInput = ({
  label,
  id,
  placeholder,
  ...props
}: DefaultInputProps) => {
  return (
    <FormWrapper id={id} label={label}>
      <Input id={id} name={id} placeholder={placeholder} {...props} />
    </FormWrapper>
  );
};

export default DefaultInput;

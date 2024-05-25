import React, { ComponentProps } from 'react';
import FormWrapper from './FormWrapper';
import { Textarea } from './style';

interface TextareaInputProps extends ComponentProps<'textarea'> {
  label: string;
  id: string;
  placeholder: string;
}

const TextareaInput = ({
  label,
  id,
  placeholder,
  ...props
}: TextareaInputProps) => {
  return (
    <FormWrapper id={id} label={label}>
      <Textarea id={id} name={id} placeholder={placeholder} {...props} />
    </FormWrapper>
  );
};

export default TextareaInput;

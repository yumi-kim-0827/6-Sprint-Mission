import React, { useRef } from 'react';
import ImageAddBox from 'components/ImageAddBox';
import { InputContainer, Label, Input, Textarea, ImageInput } from './style';

const InputElement = ({ id, type, placeholder, ...props }) => {
  const imageRef = useRef(null);

  const handleClick = () => {
    imageRef.current.click();
  };

  if (type === 'textarea') {
    return <Textarea id={id} name={id} placeholder={placeholder} {...props} />;
  } else if (type === 'file') {
    return (
      <>
        <ImageInput
          id={id}
          name={id}
          type={type}
          accept=".png, .jpg, .jpeg"
          ref={imageRef}
          {...props}
        />
        <ImageAddBox onClick={handleClick} />
      </>
    );
  } else {
    return <Input id={id} name={id} placeholder={placeholder} {...props} />;
  }
};

const FormInput = ({ label, id, type = 'text', placeholder, ...props }) => {
  return (
    <InputContainer>
      <Label htmlFor={id}>{label}</Label>
      <InputElement id={id} type={type} placeholder={placeholder} {...props} />
    </InputContainer>
  );
};

export default FormInput;

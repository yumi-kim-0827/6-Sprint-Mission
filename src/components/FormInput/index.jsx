import React, { useRef } from 'react';
import ImageAddBox from 'components/ImageAddBox';
import { InputContainer, Label, Input, Textarea, ImageInput } from './style';

const InputElement = ({ id, type, placeholder }) => {
  const imageRef = useRef(null);

  const handleClick = () => {
    imageRef.current.click();
  };

  if (type === 'textarea') {
    return <Textarea id={id} name={id} placeholder={placeholder} />;
  } else if (type === 'file') {
    return (
      <>
        <ImageInput id={id} type={type} accept="image/*" ref={imageRef} />
        <ImageAddBox
          onClick={handleClick}
          imgUrl="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg"
        />
      </>
    );
  } else {
    return <Input id={id} name={id} placeholder={placeholder} />;
  }
};

const FormInput = ({ label, id, type = 'text', placeholder }) => {
  return (
    <InputContainer>
      <Label htmlFor={id}>{label}</Label>
      <InputElement id={id} type={type} placeholder={placeholder} />
    </InputContainer>
  );
};

export default FormInput;

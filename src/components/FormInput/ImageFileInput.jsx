import React, { useRef } from 'react';
import ImageAddBox from 'components/ImageAddBox';
import FormWrapper from './FormWrapper';
import { ImageInput } from './style';

const ImageFileInput = ({ label, id, ...props }) => {
  const imageRef = useRef(null);

  const handleClick = () => {
    imageRef.current.click();
  };

  return (
    <FormWrapper id={id} label={label}>
      <ImageInput
        id={id}
        name={id}
        type="file"
        accept=".png, .jpg, .jpeg"
        ref={imageRef}
        {...props}
      />
      <ImageAddBox onClick={handleClick} />
    </FormWrapper>
  );
};

export default ImageFileInput;

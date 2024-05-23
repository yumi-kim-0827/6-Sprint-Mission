import React, { useRef, ComponentProps } from 'react';
import ImageAddBox from 'components/ImageAddBox';
import FormWrapper from './FormWrapper';
import { ImageInput } from './style';

interface ImageFileInputProps extends ComponentProps<'input'> {
  label: string;
  id: string;
}

const ImageFileInput = ({ label, id, ...props }: ImageFileInputProps) => {
  const imageRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (imageRef.current) {
      imageRef.current.click();
    }
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

import React, { ChangeEvent, useState, useEffect, useRef } from 'react';
import RegisterForm from './RegisterForm';
import { ProductData } from './RegisterForm';
const INITIAL_VALUE = {
  image: null,
  productName: '',
  productIntroduce: '',
  productPrice: '0',
  productTag: [],
};
const RegisterFormContainer = () => {
  const [productData, setProductData] = useState<ProductData>(INITIAL_VALUE);
  const [isFormFilled, setIsFillInput] = useState(false);
  const [previewImage, setPreviewImage] = useState<string>('');
  const [tagName, setTagName] = useState<string>('');
  const tagId = useRef(0);

  useEffect(() => {
    if (
      productData.productIntroduce &&
      productData.productName &&
      productData.productPrice &&
      productData.productTag.length != 0
    ) {
      return setIsFillInput(true);
    }
    setIsFillInput(false);
  }, [productData]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'file') {
      if (e.target.files) {
        const value = e.target.files[0];
        setProductData((prev) => ({ ...prev, ['image']: value }));
        const objectURL = URL.createObjectURL(value);
        setPreviewImage(objectURL);
      }
    } else if (e.target.name === 'title') {
      const value = e.target.value;
      setProductData((prev) => ({ ...prev, ['productName']: value }));
    } else if (e.target.name === 'introduce') {
      const value = e.target.value;
      setProductData((prev) => ({ ...prev, ['productIntroduce']: value }));
    } else if (e.target.name === 'price') {
      const value = e.target.value;
      setProductData((prev) => ({ ...prev, ['productPrice']: value }));
    } else if (e.target.name === 'tag') {
      const value = e.target.value;
      setTagName(value);
    }
  };

  const registerTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && tagName !== '') {
      e.preventDefault();
      setTagName('');
      setProductData((prev) => {
        const newArray = [
          ...prev.productTag,
          { name: tagName, tagId: tagId.current },
        ];
        return { ...prev, ['productTag']: newArray };
      });
      tagId.current += 1;
    }
  };

  const removeImage = () => {
    setProductData((prev) => ({ ...prev, ['image']: null }));
    URL.revokeObjectURL(previewImage);
    setPreviewImage('');
  };

  const removeTagItems = (id: number) => {
    const remainList = productData.productTag.filter(
      (element) => element.tagId !== id
    );
    setProductData((prev) => ({ ...prev, ['productTag']: remainList }));
  };

  const handleKey = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(productData);
  };

  return (
    <RegisterForm
      tagList={productData.productTag}
      tagName={tagName}
      handleKey={handleKey}
      handleSubmit={handleSubmit}
      onChange={onChange}
      isFormFilled={isFormFilled}
      previewImage={previewImage}
      removeImage={removeImage}
      removeTagItems={removeTagItems}
      registerTag={registerTag}
      productData={productData}
    />
  );
};

export default RegisterFormContainer;

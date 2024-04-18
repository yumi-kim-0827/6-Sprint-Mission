import React, { useState } from 'react';
import TopNavigation from 'components/TopNavigation';
import Button from 'components/Button';
import FormInput from 'components/FormInput';
import { FormHeader, AddItemTitle, FormContainer } from './style';
import { useImageUrl, useSetImageUrl } from 'contexts/ItemImageContext';

const AddItemPage = () => {
  const [inputData, setInputData] = useState({
    itemName: '',
    itemDescription: '',
    itemPrice: '',
    itemTag: '',
  });
  const imageUrl = useImageUrl();
  const setImageUrl = useSetImageUrl();

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', imageUrl);
    formData.append('name', inputData.itemName);
    formData.append('description', inputData.itemDescription);
    formData.append('price', inputData.itemPrice);
    formData.append('tag', inputData.itemTag);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'itemImage') {
      setImageUrl(files[0]);
    } else {
      setInputData({
        ...inputData,
        [name]: value,
      });
    }
  };

  return (
    <>
      <TopNavigation />
      <main>
        <form onSubmit={handleSubmitForm}>
          <FormHeader>
            <AddItemTitle>상품 등록하기</AddItemTitle>
            <Button title="등록" type="submit" />
          </FormHeader>
          <FormContainer>
            <FormInput
              id="itemImage"
              label="상품 이미지"
              type="file"
              onChange={handleChange}
            />
            <FormInput
              id="itemName"
              label="상품명"
              placeholder="상품명을 입력해주세요"
              onChange={handleChange}
            />
            <FormInput
              id="itemDescription"
              label="상품 소개"
              placeholder="상품 소개를 입력해주세요"
              type="textarea"
              onChange={handleChange}
            />
            <FormInput
              id="itemPrice"
              label="판매가격"
              placeholder="판매 가격을 입력해주세요"
              onChange={handleChange}
            />
            <FormInput
              id="itemTag"
              label="태그"
              placeholder="태그를 입력해주세요"
              onChange={handleChange}
            />
          </FormContainer>
        </form>
      </main>
    </>
  );
};

export default AddItemPage;

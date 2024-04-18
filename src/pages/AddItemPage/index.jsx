import React, { useState } from 'react';
import TopNavigation from 'components/TopNavigation';
import Button from 'components/Button';
import FormInput from 'components/FormInput';
import { FormHeader, AddItemTitle, FormContainer } from './style';

const AddItemPage = () => {
  const [inputData, setInputData] = useState({
    itemImage: null,
    itemName: '',
    itemDescription: '',
    itemPrice: '',
    itemTag: '',
  });

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(inputData);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'itemImage') {
      setInputData({
        ...inputData,
        [name]: files[0],
      });
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

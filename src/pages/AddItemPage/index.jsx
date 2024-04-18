import React from 'react';
import TopNavigation from 'components/TopNavigation';
import Button from 'components/Button';
import FormInput from 'components/FormInput';
import { FormHeader, AddItemTitle, FormContainer } from './style';

const AddItemPage = () => {
  return (
    <>
      <TopNavigation />
      <main>
        <form>
          <FormHeader>
            <AddItemTitle>상품 등록하기</AddItemTitle>
            <Button title="등록" />
          </FormHeader>
          <FormContainer>
            <label htmlFor="itemImage">상품 이미지</label>
            <input id="itemImage" type="file" name="itemImage" />

            <FormInput
              id="itemName"
              label="상품명"
              placeholder="상품명을 입력해주세요"
            />

            <FormInput
              id="itemDescription"
              label="상품 소개"
              placeholder="상품 소개를 입력해주세요"
              type="textarea"
            />

            {/* <label htmlFor="itemDescription">상품 소개</label>
            <input id="itemDescription" type="text" name="itemDescription" /> */}

            <label htmlFor="itemPrice">판매가격</label>
            <input id="itemPrice" type="text" name="itemPrice" />

            <label htmlFor="itemTag">태그</label>
            <input id="itemTag" type="text" name="itemTag" />
          </FormContainer>
        </form>
      </main>
    </>
  );
};

export default AddItemPage;

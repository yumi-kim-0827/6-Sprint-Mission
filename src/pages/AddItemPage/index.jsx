import React, { useState } from 'react';
import TopNavigation from 'components/TopNavigation';
import Button from 'components/Button';
import FormInput from 'components/FormInput';
import { FormHeader, AddItemTitle, FormContainer, TagList, Tag } from './style';
import { useImageUrl, useSetImageUrl } from 'contexts/ItemImageContext';
import GrayXIcon from 'assets/icons/Gray-X.svg';

const AddItemPage = () => {
  const [inputData, setInputData] = useState({
    itemName: '',
    itemDescription: '',
    itemPrice: '',
    itemTag: [],
  });
  const imageUrl = useImageUrl();
  const setImageUrl = useSetImageUrl();

  const handleSubmitForm = (e) => {
    e.preventDefault();

    console.log(inputData);

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
    } else if (name !== 'itemTag') {
      setInputData({
        ...inputData,
        [name]: value,
      });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const tag = e.target.value;
      setInputData({
        ...inputData,
        itemTag: [...inputData.itemTag, tag],
      });
      e.target.value = '';
    }
  };

  const handleKeyDownPrevent = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const handleClickTag = (index) => {
    const newTagList = inputData.itemTag.filter((_, idx) => idx !== index);
    setInputData({
      ...inputData,
      itemTag: newTagList,
    });
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
              onKeyPress={handleKeyDownPrevent}
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
              onKeyPress={handleKeyDownPrevent}
            />
            <FormInput
              id="itemTag"
              label="태그"
              placeholder="태그를 입력해주세요"
              onChange={handleChange}
              onKeyPress={handleKeyDown}
            />
            {inputData.itemTag.length !== 0 && (
              <TagList>
                {inputData.itemTag.map((item, index) => (
                  <Tag key={index}>
                    {item}
                    <img
                      src={GrayXIcon}
                      onClick={() => handleClickTag(index)}
                      alt="태그 삭제 아이콘"
                    />
                  </Tag>
                ))}
              </TagList>
            )}
          </FormContainer>
        </form>
      </main>
    </>
  );
};

export default AddItemPage;

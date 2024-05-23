import React, { ChangeEvent, FormEvent, KeyboardEvent, useState } from 'react';
import TopNavigation from 'components/TopNavigation';
import Button from 'components/Button';
import {
  DefaultInput,
  ImageFileInput,
  TextareaInput,
} from 'components/FormInput';
import { FormHeader, AddItemTitle, FormContainer, TagList, Tag } from './style';
import { useImageUrl, useSetImageUrl } from 'contexts/ItemImageContext';
import CloseXIcon from 'assets/icons/CloseX';
import { AddItemType } from 'types/item';

const AddItemPage = () => {
  const [inputData, setInputData] = useState<AddItemType>({
    itemName: '',
    itemDescription: '',
    itemPrice: '',
    itemTag: [],
  });
  const imageUrl = useImageUrl();
  const setImageUrl = useSetImageUrl();

  const isFormValid = () => {
    return (
      inputData.itemName.trim() !== '' &&
      inputData.itemDescription.trim() !== '' &&
      inputData.itemPrice.trim() !== '' &&
      inputData.itemTag.length > 0
    );
  };

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', JSON.stringify(imageUrl));
    formData.append('name', inputData.itemName);
    formData.append('description', inputData.itemDescription);
    formData.append('price', inputData.itemPrice);
    formData.append('tag', JSON.stringify(inputData.itemTag));
  };

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = target;

    if (name === 'itemImage' && files) {
      setImageUrl(files[0]);
    } else if (name !== 'itemTag') {
      setInputData({
        ...inputData,
        [name]: value,
      });
    }
  };

  const handleChangeTextarea = ({
    target,
  }: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = target;

    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const tag = target.value;
    if (e.key === 'Enter') {
      e.preventDefault();
      if (tag.trim() !== '') {
        setInputData({
          ...inputData,
          itemTag: [...inputData.itemTag, tag],
        });
        target.value = '';
      }
    }
  };

  const handleKeyDownPrevent = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const handleClickTag = (index: number) => {
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
            <Button disabled={!isFormValid()} title="등록" type="submit" />
          </FormHeader>
          <FormContainer>
            <ImageFileInput
              id="itemImage"
              label="상품 이미지"
              onChange={handleChange}
            />
            <DefaultInput
              id="itemName"
              label="상품명"
              placeholder="상품명을 입력해주세요"
              onChange={handleChange}
              onKeyPress={handleKeyDownPrevent}
            />
            <TextareaInput
              id="itemDescription"
              label="상품 소개"
              placeholder="상품 소개를 입력해주세요"
              onChange={handleChangeTextarea}
            />
            <DefaultInput
              id="itemPrice"
              label="판매가격"
              placeholder="판매 가격을 입력해주세요"
              onChange={handleChange}
              onKeyPress={handleKeyDownPrevent}
            />
            <DefaultInput
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
                    <CloseXIcon onClick={() => handleClickTag(index)} />
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

import React, { ChangeEvent, useEffect, useState } from "react";
import * as S from "./AddItemPage.style.js";
import BaseTag from "../../components/BaseTag.js";

const TAG_LIMIT = 7;

interface Values {
  name: string;
  price: string;
  description: string;
  tag: string;
}

type Tags = string[];

const AddItemPage = () => {
  const [tags, setTags] = useState<Tags>([]);
  const [isValidation, setIsValidation] = useState(false);
  const [values, setValues] = useState<Values>({
    name: "",
    price: "",
    description: "",
    tag: "",
  });

  const { name, price, description, tag } = values;
  const formatPrice = Number(price).toLocaleString();

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    let formatValue = value;
    if (name === "price") formatValue = value.replace(/\D/g, "");
    if (name === "tag") formatValue = value.replaceAll(" ", "");

    setValues((prevValues) => ({
      ...prevValues,
      [name]: formatValue,
    }));
  };

  const handleUpdateTag = (e: Event) => {
    if (tags.length > TAG_LIMIT) return;

    const target = e.target as HTMLInputElement;
    const nextValue = target?.value;

    if (nextValue) {
      setTags((prevValues) => [...new Set([...prevValues, nextValue])]);
    }

    setValues((prevValues) => ({
      ...prevValues,
      tag: "",
    }));
  };

  const handleDeleteTag = (tag: string) => {
    setTags((prevTags) => prevTags.filter((tagEl) => tagEl !== tag));
  };

  useEffect(() => {
    if (name && price && description && tags) {
      setIsValidation(true);
    } else {
      setIsValidation(false);
    }
  }, [name, price, description, tags]);

  return (
    <S.AddItemFormWrapper>
      <div>
        <h1>상품 등록하기</h1>
      </div>
      <form>
        <S.AddItemFormGroup label="image" placeholder="이미지 등록" />
        <S.AddItemFormGroup
          label="name"
          placeholder="상품명을 입력해주세요"
          value={name}
          onChange={() => handleChangeValue}
        />
        <S.AddItemFormGroup
          label="price"
          placeholder="판매가격을 입력해주세요"
          value={price && formatPrice}
          onChange={() => handleChangeValue}
        />
        <S.AddItemFormGroup
          label="description"
          placeholder="상품소개를 입력해주세요"
          value={description}
          onChange={() => handleChangeValue}
        />
        <S.AddItemFormGroup
          label="tag"
          placeholder="태그를 입력해주세요"
          value={tag}
          onChange={() => handleChangeValue}
          onBlur={() => handleUpdateTag}
        />
        {tags && (
          <S.TagBox>
            {tags.map((tag) => (
              <BaseTag
                tag={tag}
                onClick={() => handleDeleteTag(tag)}
                isEditable={true}
              />
            ))}
          </S.TagBox>
        )}
        <S.AddItemFormButton
          type="submit"
          size="small"
          disabled={!isValidation}>
          등록
        </S.AddItemFormButton>
      </form>
    </S.AddItemFormWrapper>
  );
};

export default AddItemPage;

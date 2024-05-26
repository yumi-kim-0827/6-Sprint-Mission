import React, {
  ChangeEvent,
  FocusEventHandler,
  useEffect,
  useState,
} from "react";
import * as S from "./AddItemPage.style.js";
import BaseTag from "../../components/BaseTag.js";

const TAG_LIMIT = 7;

interface Values extends Omit<ItemForPost, "price"> {
  price: number | undefined;
}

const AddItemPage = () => {
  const [tag, setTag] = useState<string>("");
  const [isValidation, setIsValidation] = useState(false);
  const [values, setValues] = useState<Values>({
    name: "",
    price: undefined,
    description: "",
    tags: [],
    images: [],
  });

  const { name, price, description, tags, images } = values;

  const formatPrice = Number(price).toLocaleString();

  const handleChangePrice = (e: ChangeEvent<HTMLInputElement>) => {
    const formatValue = e.target.value.replace(/\D/g, "");
    setValues((prevValues) => ({
      ...prevValues,
      price: Number(formatValue),
    }));
  };

  const handleChangeTag = (e: ChangeEvent<HTMLInputElement>) => {
    const formatValue = e.target.value.replaceAll(" ", "");
    setTag(formatValue);
  };

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleUpdateTag: FocusEventHandler = (e) => {
    const target = e.target as HTMLInputElement;
    const value = target?.value;
    if (value && tags.length < TAG_LIMIT && !tags.includes(value)) {
      setValues((prevValues) => ({
        ...prevValues,
        tags: [...prevValues.tags, value],
      }));
    }
    setTag("");
  };

  const handleDeleteTag = (tag: string) => {
    setValues((prevValues) => ({
      ...prevValues,
      tags: prevValues.tags.filter((tagEl) => tagEl !== tag),
    }));
  };

  useEffect(() => {
    if (name && price && description && tags && images) {
      setIsValidation(true);
    } else {
      setIsValidation(false);
    }
  }, [name, price, description, tags, images]);

  return (
    <S.AddItemFormWrapper>
      <div>
        <h1>상품 등록하기</h1>
      </div>
      <form>
        <S.AddItemFormGroup
          label="image"
          placeholder="이미지 등록"
          value={images}
        />
        <S.AddItemFormGroup
          label="name"
          placeholder="상품명을 입력해주세요"
          value={name}
          onChange={handleChangeValue}
        />
        <S.AddItemFormGroup
          label="price"
          placeholder="판매가격을 입력해주세요"
          value={price && formatPrice}
          onChange={handleChangePrice}
        />
        <S.AddItemFormGroup
          label="description"
          placeholder="상품소개를 입력해주세요"
          value={description}
          onChange={handleChangeValue}
        />
        <S.AddItemFormGroup
          label="tag"
          placeholder="태그를 입력해주세요"
          value={tag}
          onChange={handleChangeTag}
          onBlur={handleUpdateTag}
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

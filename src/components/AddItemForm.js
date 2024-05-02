import { useEffect, useState } from "react";

import FlexContainer from "../styled-components/FlexContainer";
import SubHeading from "../styled-components/SubHeading";
import SubmitButton from "../styled-components/SubmitButton";
import AddItemImage from "./AddItemImage";
import { InputContainer, Label } from "./Input";
import InputTag from "./InputTag";

function AddItemForm({ className }) {
  const [isDisabled, setIsDisabled] = useState(true);
  const [tags, setTags] = useState([]);
  const [formState, setFormState] = useState({
    name: "",
    introduction: "",
    price: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleKeyUp = (e) => {
    if (
      e.target.value &&
      e.keyCode === 13 &&
      !tags.find((tag) => tag === e.target.value)
    ) {
      setTags((prevTags) => [e.target.value, ...prevTags]);
      e.target.value = "";
    }
  };

  const handleDelete = (tagName) => {
    setTags((prevTags) => prevTags.filter((tag) => tagName !== tag));
  };

  useEffect(() => {
    formState.name && formState.introduction && formState.price && tags.length
      ? setIsDisabled(false)
      : setIsDisabled(true);
  }, [formState, tags]);

  return (
    <div className={className}>
      <FlexContainer $alignItems="center">
        <SubHeading>상품 등록하기</SubHeading>
        <SubmitButton type="button" disabled={isDisabled}>
          등록
        </SubmitButton>
      </FlexContainer>
      <div>
        <FlexContainer $direction="column" $gap="24px" as="form">
          <div>
            <Label as="div">상품 이미지</Label>
            <AddItemImage />
          </div>
          <InputContainer
            id="name"
            label="상품명"
            placeholder="상품명을 입력해주세요"
            onChange={handleChange}
          />
          <InputContainer
            id="introduction"
            label="상품 소개"
            type="textarea"
            placeholder="상품 소개를 입력해주세요"
            onChange={handleChange}
          />
          <InputContainer
            id="price"
            label="판매가격"
            placeholder="판매 가격을 입력해주세요"
            onChange={handleChange}
          />
          <InputTag
            id="tags"
            label="태그"
            placeholder="태그를 입력해주세요"
            onKeyUp={handleKeyUp}
            onDelete={handleDelete}
            tags={tags}
          />
        </FlexContainer>
      </div>
    </div>
  );
}

export default AddItemForm;

import { useState } from "react";
import styled, { css } from "styled-components";
import FileInput from "./FileInputs";
import InputTag from "./TagInput";

const AddItem = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState([]);
  const [isTagsEmpty, setIsTagsEmpty] = useState(true);

  const FormComplete =
    title.trim() !== "" &&
    description.trim() !== "" &&
    price.trim() !== "" &&
    !isTagsEmpty;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("제목:", title);
    console.log("설명:", description);
    console.log("가격:", price);
    console.log("태그:", tags);
  };

  return (
    <AddItemContainer onSubmit={handleSubmit}>
      <AddItemTitle>
        상품등록하기
        <SubmitButton type="submit" disabled={!FormComplete}>
          등록
        </SubmitButton>
      </AddItemTitle>
      <TitleText>상품이미지</TitleText>
      <FileInput />
      <InputTitleWrapper>
        <TitleText>상품명</TitleText>
        <InputText
          type="text"
          placeholder="상품명을 입력해 주세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </InputTitleWrapper>
      <IntroItemWrapper>
        <TitleText>상품소개</TitleText>
        <ItemIntroduce
          placeholder="상품소개를 입력해주세요"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </IntroItemWrapper>
      <InputTitleWrapper>
        <TitleText>판매가격</TitleText>
        <InputText
          type="text"
          placeholder="판매가격을 입력해 주세요"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </InputTitleWrapper>
      <InputTitleWrapper>
        <TitleText>태그</TitleText>
        <InputTag
          tags={tags}
          setTags={setTags}
          setIsTagsEmpty={setIsTagsEmpty}
        />
      </InputTitleWrapper>
    </AddItemContainer>
  );
};

const AddItemContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1200px;
  padding: 40px 140px;
`;

const AddItemTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 28px;
  font-weight: 700;
  line-height: 33.41px;
  text-align: left;
  margin-bottom: 20px;
`;

const SubmitButton = styled.button`
  display: inline-flex;
  width: 88px;
  height: 42px;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  background-color: #3692ff;
  color: #ffffff;

  ${(props) =>
    props.disabled &&
    css`
      background-color: #9ca3af;
      color: #ffffff;
      cursor: not-allowed;
    `}
`;

const InputText = styled.input`
  width: 100%;
  height: 56px;
  gap: 12px;
  margin-top: 20px;
  background: #f3f4f6;
  border-radius: 12px;
  border: 0.5px solid #ccc;
  padding-left: 15px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  &:focus {
    border: 1px solid #3692ff;
    outline: none;
  }
`;

const InputTitleWrapper = styled.div`
  width: 100%;
  height: 89px;
  gap: 12px;
  opacity: 0px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const TitleText = styled.label`
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.48px;
  text-align: left;
`;

const IntroItemWrapper = styled.div`
  width: 100%;
  height: 233px;
  margin-top: 25px;
  gap: 12px;
  opacity: 0px;
`;
const ItemIntroduce = styled.textarea`
  width: 100%;
  height: 200px;
  border-radius: 12px;
  border: 0.5px solid #ccc;
  background: #f3f4f6;
  resize: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  font-family: Pretendard;
  padding: 15px;
  margin-top: 20px;
  &:focus {
    border: 1px solid #3692ff;
    outline: none;
  }
`;
export default AddItem;

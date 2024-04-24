import { useState } from "react";
import FileInput from "./FileInput";
import Tag from "./Tag";
import * as S from "./Styles/AddItemPageStyles";

function AddItemPage(props) {
  const [value, setValue] = useState({
    imgFile: null,
    name: "",
    introduce: "",
    price: "",
    tag: "",
  });
  const [tags, setTags] = useState([]);

  const handleChange = (name, value) => {
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const isFormValid = () => {
    const { name, introduce, price, tag } = value;
    return (
      name.trim() !== "" &&
      introduce.trim() !== "" &&
      price.trim() !== "" &&
      tag.trim() !== ""
    );
  };

  // Tags
  const AddTags = (e) => {
    const inputValue = e.target.value;

    if (e.key === "Enter" && inputValue !== "" && !tags.includes(inputValue)) {
      setTags([...tags, inputValue]);
      e.target.value = "";
    }
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderTitle>상품 등록하기</S.HeaderTitle>
        <S.StyledButton type="button" disabled={isFormValid()}>
          등록
        </S.StyledButton>
      </S.Header>
      <S.Main>
        <div>
          <S.Title>상품 이미지</S.Title>
          <FileInput
            name="imgFile"
            value={value.imgFile}
            onChange={handleChange}
          />
        </div>

        <div>
          <S.Title>상품명</S.Title>
          <S.Input
            name="name"
            placeholder="상품명을 입력해주세요."
            onChange={handleInputChange}
          />
        </div>

        <div>
          <S.Title>상품 소개</S.Title>
          <S.Textarea
            name="introduce"
            placeholder="상품 소개를 입력해주세요."
            onChange={handleInputChange}
          />
        </div>

        <div>
          <S.Title>판매 가격</S.Title>
          <S.Input
            name="price"
            placeholder="판매 가격을 입력해주세요."
            onChange={handleInputChange}
          />
        </div>

        <div>
          <S.Title>태그</S.Title>
          <S.Input
            name="tag"
            placeholder="태그를 입력해주세요."
            onChange={handleInputChange}
            onKeyUp={(e) => AddTags(e)}
          />
        </div>
      </S.Main>
      <Tag tags={tags} setTags={setTags} />
    </S.Wrapper>
  );
}

export default AddItemPage;

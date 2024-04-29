import { useState } from "react";
import FileInput from "./FileInput";
import InputForm from "./InputForm";
import Tag from "./Tag";
import * as S from "./Styles/AddItemPageStyles";

function AddItemPage(props) {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [introduce, setIntroduce] = useState("");
  const [price, setPrice] = useState("");
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  }

  const handleChange = (name, value) => {
    switch (name) {
      case "name":
        setName(value);
        break;
      case "introduce":
        setIntroduce(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "tag":
        setTag(value);
        break;
      case "image":
        setImage(value);
        break;
      default:
        break;
    }
  };

  const isFormValid = () => {
    return (
      name.trim() !== "" &&
      introduce.trim() !== "" &&
      price.trim() !== "" &&
      tags.length > 0
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
            name="image"
            value={image}
            onChange={handleChange}
            />
        </div>

        <InputForm
          name="name"
          label="상품명"
          placeholder="상품명을 입력해주세요."
          value={name}
          onChange={handleInputChange}
        />
        <InputForm
          name="introduce"
          label="상품 소개"
          placeholder="상품 소개를 입력해주세요."
          value={introduce}
          onChange={handleInputChange}
        />
        <InputForm
          name="price"
          label="판매 가격"
          placeholder="판매 가격을 입력해주세요."
          value={price}
          onChange={handleInputChange}
        />
        <InputForm
          name="tag"
          label="태그"
          placeholder="태그를 입력해주세요."
          value={tag}
          onChange={handleInputChange}
          onKeyUp={(e) => AddTags(e)}
        />
      </S.Main>
      <Tag tags={tags} setTags={setTags} />
    </S.Wrapper>
  );
}

export default AddItemPage;

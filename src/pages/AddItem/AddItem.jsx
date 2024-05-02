import { useState } from "react";
import FileInput from "./FileInput";
import InnerContainer from "../../styles/InnerContainer";
import {
  AddItemWrap,
  AddItemTop,
  Title,
  Button,
  Label,
  Input,
  Textarea,
} from "../../styles/AddItemStyled";

function AddItem() {
  const [values, setValues] = useState({
    imgFile: null,
  });

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <InnerContainer>
      <AddItemWrap>
        <form>
          <AddItemTop>
            <Title>상품 등록하기</Title>
            <Button type="submit">등록</Button>
          </AddItemTop>

          <Label>상품 이미지</Label>
          <FileInput
            name="imgFile"
            value={values.imgFile}
            onChange={handleChange}
          />
          <Label>상품명</Label>
          <Input
            type="text"
            name="item_name"
            placeholder="상품명을 입력해주세요"
          />

          <Label>상품 소개</Label>
          <Textarea
            name="item_content"
            placeholder="상품 소개를 입력해주세요"
          ></Textarea>

          <Label>판매가격</Label>
          <Input
            type="number"
            name="item_price"
            placeholder="판매 가격을 입력해주세요"
          />

          <Label>태그</Label>
          <Input
            type="text"
            name="item_tag"
            placeholder="태그를 입력해주세요"
          />
        </form>
      </AddItemWrap>
    </InnerContainer>
  );
}

export default AddItem;

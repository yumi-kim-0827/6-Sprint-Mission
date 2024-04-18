import { useCallback, useState } from "react";
import styled from "styled-components";
import FormHeader from "../components/AddItem/FormHeader";
import {
  InputWrapper,
  ImgInputWrapper,
  TextareaWrapper,
} from "../components/AddItem/Input";
import { TagInputWrapper } from "../components/AddItem/TagInput";
import {
  IMAGE,
  NAME,
  DESCRIPTION,
  PRICE,
  TAG,
} from "../utils/constantsAddItem";

const FormContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  color: var(--cool-gray800);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`;

function AddItemPage() {
  const [productInfo, setProductInfo] = useState({
    [IMAGE]: null,
    [NAME]: "",
    [DESCRIPTION]: "",
    [PRICE]: 0,
    [TAG]: [],
  }); // 서버에게 보낼 용도
  const [priceString, setPriceString] = useState(""); // 사용자에게 보여줄 용도
  const [tagString, setTagString] = useState(""); // 사용자에게 보여줄 용도

  const handleInputChange = useCallback(({ target }) => {
    setProductInfo((prevInfo) => ({
      ...prevInfo,
      [target.id]: target.value,
    }));
  }, []);

  const handlePriceChange = useCallback(({ target: { value } }) => {
    const newPriceString = value;
    // 사용자 입력값에서 ,를 떼고 다시 적절하게 붙여서 보여줘야 함
    const newPrice = parseInt(newPriceString.replaceAll(",", ""));
    setProductInfo((prevInfo) => ({
      ...prevInfo,
      [PRICE]: newPrice,
    }));
    setPriceString(`${newPrice.toLocaleString("ko-KR")}`);
  }, []);

  const handleTagChange = useCallback((e) => {
    setTagString(e.target.value);
  }, []);

  const handleTagEnter = useCallback(
    ({ keyCode, target: { value: newTag } }) => {
      // 새로운 태그 추가
      if (keyCode === 13) {
        setTagString("");

        setProductInfo((prevInfo) => {
          if (prevInfo[TAG].includes(newTag)) {
            return prevInfo;
          }
          return {
            ...prevInfo,
            [TAG]: [...prevInfo[TAG], newTag],
          };
        });
      }
    },
    []
  );

  const handleTagDelete = useCallback((value) => {
    setProductInfo((prevInfo) => ({
      ...prevInfo,
      [TAG]: [...prevInfo[TAG].filter((tag) => tag !== value)],
    }));
  }, []);

  return (
    <main>
      <form>
        <FormHeader />
        <FormContents>
          <ImgInputWrapper name={IMAGE} />
          <InputWrapper
            name={NAME}
            value={productInfo[NAME]}
            onChange={handleInputChange}
          />
          <TextareaWrapper
            name={DESCRIPTION}
            value={productInfo[DESCRIPTION]}
            onChange={handleInputChange}
          />
          <InputWrapper
            name={PRICE}
            value={priceString}
            onChange={handlePriceChange}
          />
          <TagInputWrapper
            name={TAG}
            value={tagString}
            tagList={productInfo[TAG]}
            onChange={handleTagChange}
            onKeyDown={handleTagEnter}
            onClick={handleTagDelete}
          />
        </FormContents>
      </form>
    </main>
  );
}

export default AddItemPage;

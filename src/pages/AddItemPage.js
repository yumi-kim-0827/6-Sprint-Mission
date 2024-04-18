import { useCallback, useState } from "react";
import styled from "styled-components";
import FormHeader from "../components/AddItem/FormHeader";
import { ImgInputWrapper } from "../components/AddItem/ImgInput";
import { InputWrapper, TextareaWrapper } from "../components/AddItem/Input";
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

const Main = styled.main`
  padding-bottom: 90px;
`;

function AddItemPage() {
  // 서버에게 보낼 용도
  const [productInfo, setProductInfo] = useState({
    [IMAGE]: null,
    [NAME]: "",
    [DESCRIPTION]: "",
    [PRICE]: 0,
    [TAG]: [],
  });

  // 사용자에게 보여줄 용도
  const [priceString, setPriceString] = useState("");
  const [tagString, setTagString] = useState("");
  const [imgSrc, setImgSrc] = useState("");

  const handleImgInputChange = useCallback(({ target: { files } }) => {
    if (!files[0]) return;

    setProductInfo((prevInfo) => ({
      ...prevInfo,
      [IMAGE]: files[0],
    }));
    setImgSrc(URL.createObjectURL(files[0]));
  }, []);

  const handleImgDelete = useCallback(() => {
    setProductInfo((prevInfo) => ({
      ...prevInfo,
      [IMAGE]: null,
    }));
    setImgSrc("");
  }, []);

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

  const handleTagEnter = useCallback((e) => {
    if (e.keyCode !== 13) return; // 엔터
    e.preventDefault();
    setTagString("");

    const newTag = e.target.value;
    if (newTag.trim() === "") return; // 빈 값 아님

    setProductInfo((prevInfo) => {
      if (prevInfo[TAG].includes(newTag)) {
        return prevInfo;
      }
      // 기존에 있는 값 아님
      return {
        ...prevInfo,
        [TAG]: [...prevInfo[TAG], newTag],
      };
    });
  }, []);

  const handleTagDelete = useCallback((value) => {
    setProductInfo((prevInfo) => ({
      ...prevInfo,
      [TAG]: [...prevInfo[TAG].filter((tag) => tag !== value)],
    }));
  }, []);

  return (
    <Main>
      <form>
        <FormHeader />
        <FormContents>
          <ImgInputWrapper
            name={IMAGE}
            value={imgSrc}
            onChange={handleImgInputChange}
            onClick={handleImgDelete}
          />
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
    </Main>
  );
}

export default AddItemPage;

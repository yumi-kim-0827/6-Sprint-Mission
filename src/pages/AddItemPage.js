import styled from "styled-components";
import FormHeader from "../components/AddItem/FormHeader";
import {
  InputWrapper,
  ImgInputWrapper,
  TextareaWrapper,
  TagInputWrapper,
} from "../components/AddItem/Input";
import {
  IMAGE,
  NAME,
  DESCRIPTION,
  PRICE,
  TAG,
} from "../utils/constantsAddItem";
import { useCallback, useState } from "react";

const FormContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

function AddItemPage() {
  const [productInfo, setProductInfo] = useState({
    [IMAGE]: null,
    [NAME]: "",
    [DESCRIPTION]: "",
    [PRICE]: 0,
    [TAG]: [],
  });
  const [priceString, setPriceString] = useState("");

  const handleInputChange = useCallback((e) => {
    setProductInfo((prevInfo) => ({
      ...prevInfo,
      [e.target.id]: e.target.value,
    }));
  }, []);

  const handlePriceChange = useCallback((e) => {
    const newPriceString = e.target.value;
    const newPrice = parseInt(newPriceString.replaceAll(",", ""));
    setProductInfo((prevInfo) => ({
      ...prevInfo,
      [PRICE]: newPrice,
    }));
    setPriceString(`${newPrice.toLocaleString("ko-KR")}`);
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
          <TagInputWrapper name={TAG} />
        </FormContents>
      </form>
    </main>
  );
}

export default AddItemPage;

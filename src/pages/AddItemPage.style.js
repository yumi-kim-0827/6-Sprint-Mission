import styled from "styled-components";

import AddItemPageFormGroup from "../components/AddItemPageFormGroup";
import BaseButton from "../components/BaseButton";

export const AddItemFormWrapper = styled.div`
  position: relative;
  margin: 96px 16px;
  height: auto;

  > div:first-of-type {
    display: flex;
    align-items: center;
    height: 42px;
    margin-bottom: 16px;
    font-size: 20px;
    font-weight: 700;
  }

  @media screen and (min-width: 768px) {
    margin: 96px 24px;

    > div:first-of-type {
      margin-bottom: 20px;
      font-size: 28px;
      line-height: 33.41px;
    }
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    margin: 96px auto;
  }
`;

export const AddItemFormGroup = styled(AddItemPageFormGroup)``;

export const AddItemFormButton = styled(BaseButton)`
  position: absolute;
  top: 0;
  right: 0;
  width: 88px;
  height: 42px;
`;

export const TagBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
  min-height: 100px;
  height: auto;
  margin-top: 8px;
`;

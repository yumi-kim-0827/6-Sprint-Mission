import styled from "styled-components";
import AddItemPageImageInput from "./AddItemPageImageInput";
import BaseInput from "../../components/BaseInput";
import BaseTextArea from "../../components/BaseTextArea";

enum FormType {
  name = "상품명",
  price = "판매가격",
  description = "상품 소개",
  tag = "태그",
  image = "상품 이미지",
}
interface AddItemPageFormGroupProps {
  label: keyof typeof FormType;
  placeholder?: string;
  onChange?: React.ChangeEventHandler;
  onBlur?: React.FocusEventHandler;
  onKeyDown?: () => void;
  value?: string | number | string[];
}

const AddItemPageFormGroup = ({
  label,
  placeholder = "",
  onChange,
  onBlur,
  onKeyDown,
  value,
}: AddItemPageFormGroupProps) => {
  const labelName = FormType[label];

  let InputComponent;
  switch (label) {
    case "image":
      InputComponent = (
        <AddItemPageImageInput
          placeholder={placeholder}
          onChange={onChange}
          value={typeof value !== "number" ? value : ""}
        />
      );
      break;
    case "description":
      InputComponent = (
        <BaseTextArea
          label={label}
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      );
      break;
    default:
      InputComponent = (
        <BaseInput
          label={label}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
        />
      );
      break;
  }
  return (
    <StyledFormGroup>
      <label htmlFor={label}>{labelName}</label>
      <div>{InputComponent}</div>
      <p className="error-msg hidden"></p>
    </StyledFormGroup>
  );
};

const StyledFormGroup = styled.div`
  width: 100%;
  min-height: 85px;
  margin-bottom: 16px;

  > label {
    display: block;
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16.71px;
    color: var(--color-cool-gray-800);
  }

  div {
    position: relative;
  }

  @media screen and (min-width: 768px) {
    > label {
      margin-bottom: 12px;
      font-size: 18px;
      line-height: 21.48px;
    }
  }
`;

export default AddItemPageFormGroup;

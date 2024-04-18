import { Input, Label, Textarea } from "../Common/BasicStyledComponents";
import { INPUT_MESSAGE } from "../../utils/constantsAddItem";

export function InputWrapper({ name, value, onChange, onKeyDown }) {
  const inputMessage = INPUT_MESSAGE[name];
  return (
    <div>
      <Label htmlFor={name}>{inputMessage}</Label>
      <Input
        id={name}
        value={value}
        placeholder={`${inputMessage}을 입력해주세요`}
        type="text"
        autoComplete="off"
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}

export function ImgInputWrapper() {
  return <></>;
}

export function TextareaWrapper({ name, value, onChange }) {
  const inputMessage = INPUT_MESSAGE[name];
  return (
    <div>
      <Label htmlFor={name}>{inputMessage}</Label>
      <Textarea
        id={name}
        value={value}
        placeholder={`${inputMessage}을 입력해주세요`}
        onChange={onChange}
      />
    </div>
  );
}

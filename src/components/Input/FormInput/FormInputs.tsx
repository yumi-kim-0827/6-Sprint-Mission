import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { addCommas } from "utils/commas";
import PWEyeClose from "assets/icon/password_eye.svg";
import PWEyeOpen from "assets/icon/password_eye-open.svg";
import * as S from "./FormInputs.style";

interface InputProps {
  name: string;
  value: string | number;
  placeholder: string;
}

interface TextInputProps extends InputProps {
  error?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function FormInputMain({
  name,
  value,
  onChange,
  placeholder,
}: TextInputProps) {
  return (
    <S.FormInput
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
    />
  );
}

export function EmailInput({
  name,
  value,
  onChange,
  placeholder,
  error,
}: TextInputProps) {
  return (
    <S.FormInput
      type="email"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      $error={error}
      required
    />
  );
}

export function PasswordInput({
  name,
  value,
  onChange,
  placeholder,
  error,
}: TextInputProps) {
  const [pwClose, setPwClose] = useState(true);

  const togglePWEye = () => {
    setPwClose((prev) => !prev);
  };

  return (
    <S.PWInputBox>
      <S.FormInput
        type={pwClose ? "password" : "text"}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        $error={error}
        required
      />
      <div className="pw-eye" onClick={togglePWEye}>
        {pwClose ? (
          <img src={PWEyeClose} alt="pw-close" />
        ) : (
          <img src={PWEyeOpen} alt="pw-open" />
        )}
      </div>
    </S.PWInputBox>
  );
}

export function NumberInput({
  name,
  value,
  onChange,
  placeholder,
}: TextInputProps) {
  const number = Number(value);
  const [priceStr, setPriceStr] = useState("");

  useEffect(() => {
    if (Number.isNaN(number) || !Number.isFinite(number)) return;
    if (number === 0) setPriceStr("");
    else setPriceStr(addCommas(number));
  }, [number]);

  return (
    <S.FormInput
      type="text"
      name={name}
      placeholder={placeholder}
      value={priceStr}
      onChange={onChange}
      required
    />
  );
}

interface TextareaInputProps extends InputProps {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  height?: number;
}

export function TextareaInput({
  name,
  value,
  onChange,
  placeholder,
  height,
}: TextareaInputProps) {
  return (
    <S.TextareaInput
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      height={height}
      required
    />
  );
}

interface TagInputProps extends TextInputProps {
  onKeyUp: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export function TagInput({
  name,
  value,
  onChange,
  onKeyUp,
  placeholder,
}: TagInputProps) {
  return (
    <S.FormInput
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyUp={onKeyUp}
    />
  );
}

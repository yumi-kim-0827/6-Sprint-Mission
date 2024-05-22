import { addCommas } from "utils/commas";
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import * as S from "./FormInputs.style";

interface InputProps {
  name: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
}

export function FormInputMain({
  name,
  value,
  onChange,
  placeholder,
}: InputProps) {
  return (
    <S.FormInput
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
    />
  );
}

export function NumberInput({
  name,
  value,
  onChange,
  placeholder,
}: InputProps) {
  const number = Number(value);
  const [priceStr, setPriceStr] = useState("");

  useEffect(() => {
    if (Number.isNaN(number) || !Number.isFinite(number)) return;
    if (number === 0) setPriceStr("");
    else setPriceStr(addCommas(number));
  }, [number]);

  return (
    <S.FormInput
      name={name}
      placeholder={placeholder}
      value={priceStr}
      onChange={onChange}
      required
    />
  );
}

interface TextareaInputProps extends InputProps {
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

interface TagInputProps extends InputProps {
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
    <>
      <S.FormInput
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyUp={onKeyUp}
      />
    </>
  );
}

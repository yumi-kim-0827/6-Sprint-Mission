import { addCommas } from "utils/commas";
import { useEffect, useState } from "react";
import * as S from "./FormInputs.style";

export function FormInputMain({ name, value, onChange, placeholder }) {
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

export function NumberInput({ name, value: number, onChange, placeholder }) {
  const [priceStr, setPriceStr] = useState("");

  useEffect(() => {
    if (Number.isNaN(number) || !Number.isFinite(number)) return;
    if (number === 0) setPriceStr("");
    else setPriceStr(addCommas(String(number)));
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

export function TextareaInput({ name, content, onChange, placeholder }) {
  return (
    <S.TextareaInput
      name={name}
      placeholder={placeholder}
      value={content}
      onChange={onChange}
      required
    />
  );
}

export function TagInput({ name, value, onChange, onKeyUp, placeholder }) {
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

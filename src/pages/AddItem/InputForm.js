import React from "react";
import * as S from "./Styles/AddItemPageStyles";

function InputForm({ name, label, placeholder, onChange, onKeyUp }) {
  return (
    <div>
      <S.Title>{label}</S.Title>
      <S.Input
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onKeyUp={onKeyUp}
      />
    </div>
  );
}

export default InputForm;

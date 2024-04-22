import React from "react";

const InputText = (props) => {
  const { type = "text", label, name, placeholder = "", onChange } = props;

  return (
    <div key={name} className="input-wrapper">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e.target.value, name);
        }}
      />
    </div>
  );
};

export default InputText;

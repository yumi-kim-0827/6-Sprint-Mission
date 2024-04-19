import React from "react";

const TextArea = (props) => {
  const { label, name, placeholder = "", onChange } = props;

  return (
    <div className="input-wrapper">
      <label htmlFor={name}>{label}</label>
      <textarea
        onChange={(e) => onChange(e.target.value, name)}
        name={name}
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextArea;

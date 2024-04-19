import React from "react";

const TextArea = (props) => {
  const { label, name, placeholder = "" } = props;

  return (
    <div className="input-wrapper">
      <label htmlFor={name}>{label}</label>
      <textarea name={name} id={name} placeholder={placeholder} />
    </div>
  );
};

export default TextArea;

import React from "react";

const InputWrapper = (props) => {
  const { inputs } = props;

  return inputs?.map((input) => {
    const { type = "text", label, name, placeholder = "" } = input;

    if (type === "textarea") {
      return (
        <div key={name} className="input-wrapper">
          <label htmlFor={name}>{label}</label>
          <textarea name={name} id={name} placeholder={placeholder} />
        </div>
      );
    } else {
      return (
        <div key={name} className="input-wrapper">
          <label htmlFor={name}>{label}</label>
          <input type={type} name={name} id={name} placeholder={placeholder} />
        </div>
      );
    }
  });
};

export default InputWrapper;

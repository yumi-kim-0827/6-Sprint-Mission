import React from "react";

const ProductInfoInput = ({
  label,
  placeholder,
  value,
  onChange,
  id,
  name,
  type = "text",
  onSubmit = null,
  onKeyDown = null,
}) => {
  return (
    //일반
    <div className="one-line-input additem-input">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
      />
    </div>
  );
};

export default ProductInfoInput;

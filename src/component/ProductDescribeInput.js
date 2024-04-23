import React from "react";

const ProductDescribeInput = (
  {label,
  placeholder,
  value,
  onChange,
  id,
  name}
) => {
  return (
    <div className="textArea-input additem-input">
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default ProductDescribeInput;

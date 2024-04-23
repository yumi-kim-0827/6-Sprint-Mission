import React from "react";

const ProductTagInput = ({
  label,
  placeholder,
  value,
  onChange,
  id,
  name,
  onSubmit = null,
  onKeyDown = null,
}) => {
  return (
    <form onSubmit={onSubmit} className="one-line-input additem-input">
      <label htmlFor="ProductTag">{label}</label>
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </form>
  );
};

export default ProductTagInput;

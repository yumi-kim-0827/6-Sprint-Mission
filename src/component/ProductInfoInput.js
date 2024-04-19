import React from "react";

const ProductInfoInput = ({
  label,
  placeholder,
  value,
  onChange,
  id,
  name,
  type = "text",
  onSubmit=null
}) => {
    
    
  return id === "ProductDescription" ? (
    //TextArea
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
  ) : id === "ProductTag" ? (
    //Tag
    <form onSubmit={onSubmit} className="one-line-input additem-input">
      <label htmlFor="ProductTag">태그</label>
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </form>
  ) : (
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

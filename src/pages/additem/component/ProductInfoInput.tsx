import { ChangeEvent } from "react";

interface Props {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  id: string;
  name: string;
  type: string;
}

const ProductInfoInput = ({
  label,
  placeholder,
  value,
  onChange,
  id,
  name,
  type,
}: Props) => {
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

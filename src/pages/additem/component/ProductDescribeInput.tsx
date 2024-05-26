import { ChangeEvent } from "react";

interface Props {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  id: string;
  name: string;
}

const ProductDescribeInput = ({
  label,
  placeholder,
  value,
  onChange,
  id,
  name,
}: Props) => {
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

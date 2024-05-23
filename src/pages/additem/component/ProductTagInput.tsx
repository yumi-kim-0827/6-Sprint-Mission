import { ChangeEvent, FormEvent, KeyboardEvent } from "react";

interface Props {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  id: string;
  name: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const ProductTagInput = ({
  label,
  placeholder,
  value,
  onChange,
  id,
  name,
  onSubmit,
  onKeyDown,
}: Props) => {
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

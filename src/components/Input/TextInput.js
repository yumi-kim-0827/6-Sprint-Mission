import Styles from "./Input.module.scss";

export default function TextInput({
  name,
  value,
  onChange,
  id,
  className,
  required,
  placeholder,
}) {
  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      id={id}
      className={`${Styles.input} ${className}`}
      placeholder={placeholder}
      required={required}
    />
  );
}

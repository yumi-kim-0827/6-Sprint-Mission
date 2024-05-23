import Styles from "./Input.module.scss";

export default function TextArea({
  name,
  value,
  onChange,
  id,
  className,
  required,
  placeholder,
}) {
  return (
    <textarea
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

import Styles from "./Input.module.scss";

export default function SearchInput({
  name,
  value,
  onChange,
  id,
  className,
  required,
}) {
  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      id={id}
      className={`${Styles.input}`}
      placeholder="이메일을 입력해주세요"
      required={required}
    />
  );
}

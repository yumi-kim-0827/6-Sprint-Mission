interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const BaseInput: React.FC<BaseInputProps> = ({
  className = "",
  label,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  onKeyDown,
  accept,
  autoComplete = "off",
  ...rest
}) => {
  return (
    <input
      className={`w-full h-full p-4 text-base bg-cool-gray-100 rounded-[12px] placeholder-cool-gray-400 focus:outline-blue-500 ${className}`}
      id={label}
      name={label}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      accept={accept}
      autoComplete={autoComplete}
      {...rest}
    />
  );
};

export default BaseInput;

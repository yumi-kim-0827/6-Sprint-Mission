import { ChangeEvent, KeyboardEvent, FocusEvent } from "react";
import style from "./InputItem.module.scss";

export function Label({
  htmlFor,
  children,
}: {
  htmlFor?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={style.label} htmlFor={htmlFor}>
      {children}
    </label>
  );
}

interface InputFieldProps {
  id: string;
  value: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder: string;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
}

export function InputField({
  id,
  value,
  onChange,
  onBlur,
  onKeyDown,
  placeholder,
  type,
}: InputFieldProps) {
  return (
    <input
      id={id}
      className={style.input_field}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      type={type}
    />
  );
}

export function ErrorMessage({ children }: { children: React.ReactNode }) {
  return <span className={style.error_message}>{children}</span>;
}

interface InputItemProps {
  id: string;
  label: string;
  value: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder: string;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isTextArea?: boolean;
  errorMessage?: string;
  type?: string;
}

export default function InputItem({
  id,
  label,
  value,
  onChange,
  onBlur,
  placeholder,
  onKeyDown,
  isTextArea,
  errorMessage,
  type = "text",
}: InputItemProps) {
  return (
    <div>
      {label && (
        <label className={style.label} htmlFor={id}>
          {label}
        </label>
      )}

      {isTextArea ? (
        <textarea
          id={id}
          className={style.textarea}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
        />
      ) : (
        <InputField
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          type={type}
        />
      )}

      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}

import styled from "styled-components";
import BaseButton from "./BaseButton";
import BaseInput from "./BaseInput";
import BaseIcon from "./BaseIcon";
import eyeIcon from "../assets/icon/eye.svg";
import eyeOffIcon from "../assets/icon/eye-off.svg";

interface UserFormGroupProps {
  label: "email" | "username" | "password" | "passwordCheck";
  placeholder: string;
  className?: string;
}

const UserFormGroup = ({
  label,
  placeholder,
  className,
}: UserFormGroupProps) => {
  const labelTable = {
    email: "이메일",
    username: "닉네임",
    password: "비밀번호",
    passwordCheck: "비밀번호 확인",
  };

  const labelName = labelTable[label];

  let type;
  switch (label) {
    case "email":
      type = "email";
      break;
    case "password" || "passwordCheck":
      type = "password";
      break;
    default:
      type = "text";
      break;
  }

  return (
    <StyledUserFormGroup className={className}>
      <label htmlFor={label}>{labelName}</label>
      <StyledUserInputBox>
        <BaseInput label={label} type={type} placeholder={placeholder} />
        {label.includes("password") && (
          <button type="button">
            <BaseIcon src={eyeIcon} />
            <BaseIcon src={eyeOffIcon} />
          </button>
        )}
      </StyledUserInputBox>
      <p id={`${label}-error`} className="hidden"></p>
    </StyledUserFormGroup>
  );
};

const StyledUserFormGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px;

  label {
    font-weight: 700;
    font-size: 14px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;

    label {
      font-size: 18px;
      line-height: 21.48px;
    }
  }
`;

const StyledUserInputBox = styled.div`
  position: relative;

  > button {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 24px;
    height: 24px;
    background: transparent;

    > i:last-of-type {
      display: none;
    }
  }
`;

interface UserFormProps {
  type: "login" | "signup";
  isValidation?: boolean;
}

const UserForm = ({ type, isValidation = false }: UserFormProps) => {
  const [formAction, buttonText] =
    type === "login" ? ["", "로그인"] : ["", "회원가입"];

  return (
    <>
      <StyledUserForm action={formAction} className="user-form">
        <UserFormGroup label="email" placeholder="이메일을 입력해주세요" />
        {type === "signup" && (
          <UserFormGroup label="username" placeholder="닉네임을 입력해주세요" />
        )}
        <UserFormGroup label="password" placeholder="비밀번호를 입력해주세요" />
        {type === "signup" && (
          <UserFormGroup
            label="passwordCheck"
            placeholder="비밀번호를 다시 한 번 입력해주세요"
          />
        )}
        <StyledSubmitBtn size="large" type="submit" disabled={!isValidation}>
          {buttonText}
        </StyledSubmitBtn>
      </StyledUserForm>
    </>
  );
};

const StyledUserForm = styled.form``;

const StyledSubmitBtn = styled(BaseButton)`
  width: 100%;
  max-width: 640px;

  @media screen and (max-width: 767px) {
    max-width: 400px;
  }
`;

export default UserForm;

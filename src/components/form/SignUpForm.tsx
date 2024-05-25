import React from "react";
import styled from "styled-components";
import { signUpSchema } from "../../utils/validation/Schema";
import { SignUpUser } from "../../Api/SignUpUser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormValues {
  email: string;
  password: string;
  passwordConfirmation: string;
  nickname: string;
}

const SignUpForm = () => {
  const resolver = yupResolver(signUpSchema);
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    resolver,
    mode: "onChange",
  });

  const handleSignUp = handleSubmit(async (data: FormValues) => {
    try {
      const response = await SignUpUser(data);
      if (response) {
        console.log("회원가입 성공");
      }
    } catch (error) {
      console.error("회원가입 실패:", error);
    }
  });

  return (
    <>
      <form onSubmit={handleSignUp}>
        <InputContainer>
          <Label htmlFor="email">이메일</Label>
          <Input
            placeholder="이메일을 입력해주세요"
            type="email"
            {...register("email")}
          />
          <ErrorText>{errors.email?.message}</ErrorText>
        </InputContainer>
        <InputContainer>
          <Label htmlFor="nickname">닉네임</Label>
          <Input
            placeholder="닉네임을 입력하세요"
            type="text"
            {...register("nickname")}
          />
          <ErrorText>{errors.nickname?.message}</ErrorText>
        </InputContainer>
        <InputContainer>
          <Label htmlFor="password">비밀번호</Label>
          <Input
            placeholder="비밀번호를 입력해주세요"
            type="password"
            {...register("password")}
          />
          <ErrorText>{errors.password?.message}</ErrorText>
        </InputContainer>
        <InputContainer>
          <Label htmlFor="passwordConfirmation">비밀번호 확인</Label>
          <Input
            placeholder="비밀번호를 다시 한번 입력해주세요"
            type="password"
            {...register("passwordConfirmation")}
          />
          <ErrorText>{errors.passwordConfirmation?.message}</ErrorText>
        </InputContainer>
        <SignUpButton type="submit" disabled={!isValid}>
          회원가입
        </SignUpButton>
      </form>
    </>
  );
};

const InputContainer = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: 700;
`;

const Input = styled.input`
  padding: 16px 24px;
  background-color: #f3f4f6;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  line-height: 24px;
  width: 100%;

  &::placeholder {
    color: #9ca3af;
    font-size: 16px;
    line-height: 24px;
  }

  &:focus {
    outline-color: #3692ff;
  }
`;

const SignUpButton = styled.button`
  width: 100%;
  height: 56px;
  border: 1px;
  border-radius: 40px;
  background: ${({ disabled }) => (disabled ? "#9ca3af" : "#3692ff")};
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
  margin-top: 15px;
  cursor: pointer;
`;

const ErrorText = styled.div`
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  padding-top: 5px;
  padding-left: 15px;
  color: red;
`;
export default SignUpForm;

import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Icon from "../../../components/UI/Icon";
import CustomInput from "../components/CustomInput/CustomInput";
import { ReactComponent as logo } from "../../../assets/images/logo/logo.svg";
import EasyLogin from "../components/EasyLogin/EasyLogin";
import styles from "./SignupPage.module.css";
interface ButtonProps {
  isFormCheck: boolean;
}

const SingUpLinkStyle = styled.span`
  color: #3182f6;
  text-decoration: underline;
`;

const HelpText = styled.div`
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
  color: var(--gray-800);
  text-align: center;
`;

const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "isFormCheck",
})<ButtonProps>`
  width: 100%;
  height: 56px;
  border-radius: 40px;
  color: #fff;
  padding: 16px 124px;
  background-color: ${(props) => (props.isFormCheck ? "#3692ff" : "#9ca3af")};
  font-family: "Pretendard";
  font-weight: 600;
  font-size: 20px;
`;

const logoContainer = {
  display: "flex",
  justifyContent: "center",
};

interface Form {
  email: string | null;
  password: string | null;
  passwordVerify: string | null;
  nickName: string | null;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SignupPage = () => {
  const [form, setForm] = useState<Form>({
    email: null,
    password: null,
    passwordVerify: null,
    nickName: null,
  });
  const [isFromCheck, setIsFromCheck] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleFormCheck = () => {
      const isFormNull =
        form.email === null ||
        form.password === null ||
        form.nickName === null ||
        form.passwordVerify === null;

      const isEmailValid =
        form.email !== null && emailPattern.test(form.email.trim());

      const isPasswordValid =
        form.password !== null &&
        form.password.trim() !== "" &&
        form.password.length > 7;

      const isPasswordVerifyValid = form.password === form.passwordVerify;

      if (
        isFormNull ||
        !isEmailValid ||
        !isPasswordValid ||
        !isPasswordVerifyValid
      ) {
        setIsFromCheck(false);
        return;
      }
      setIsFromCheck(true);
    };

    handleFormCheck();
  });

  console.log(form, isFromCheck);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFromCheck) {
      alert("폼 제출");
      navigate("/login");
    } else {
      console.log("폼 제출 불가");
    }
  };
  return (
    <div className={styles.container}>
      <NavLink to="/" style={logoContainer}>
        <Icon
          iconComponent={logo}
          outlineColor="none"
          width={396}
          height={132}
        />
      </NavLink>{" "}
      <form onSubmit={handleSubmit}>
        <CustomInput
          id="email"
          type="text"
          name="email"
          placeholder="이메일을 입력해주세요"
          value={form.email}
          onChange={handleInputChange}
        >
          이메일
        </CustomInput>
        <CustomInput
          id="nickName"
          type="text"
          name="nickName"
          placeholder="닉네임을 입력해주세요"
          value={form.nickName}
          onChange={handleInputChange}
        >
          닉네임
        </CustomInput>
        <CustomInput
          id="password"
          type="password"
          name="password"
          placeholder="비밀번호를 입력해주세요"
          value={form.password}
          onChange={handleInputChange}
        >
          비밀번호
        </CustomInput>
        <CustomInput
          id="passwordVerify"
          type="password"
          name="passwordVerify"
          placeholder="비밀번호를 다시 한번 입력해주세요"
          value={form.passwordVerify}
          onChange={handleInputChange}
        >
          비밀번호 확인
        </CustomInput>
        <Button isFormCheck={isFromCheck}>회원가입</Button>
      </form>
      <EasyLogin />
      <HelpText>
        판다마켓이 처음이신가요?{" "}
        <NavLink to="/login">
          <SingUpLinkStyle>로그인</SingUpLinkStyle>
        </NavLink>
      </HelpText>
    </div>
  );
};

export default SignupPage;

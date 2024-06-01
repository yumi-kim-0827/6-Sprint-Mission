import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { ReactComponent as logo } from "../../../assets/images/logo/logo.svg";
import Icon from "../../../components/UI/Icon";
import CustomInput from "../components/CustomInput/CustomInput";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";
import EasyLogin from "../components/EasyLogin/EasyLogin";
import { useAuth } from "../../../context/AuthContext";
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
interface Form {
  email: string | null;
  password: string | null;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function LoginPage() {
  const [form, setForm] = useState<Form>({ email: null, password: null });
  const [isFromCheck, setIsFromCheck] = useState<boolean>(false);
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();

  useEffect(() => {
    const isNullCheck = form.email === null || form.password === null;
    const isValidEmail =
      form.email !== null && emailPattern.test(form.email.trim());
    const isValidPassword =
      form.password !== null &&
      form.password.trim() !== "" &&
      form.password.length > 7;

    if (isNullCheck || !isValidEmail || !isValidPassword) {
      setIsFromCheck(false);
      return;
    }
    setIsFromCheck(true);
  }, [form]);
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
      setIsLoggedIn(true);
      navigate("/items");
    } else {
      console.log("폼 제출 불가");
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <NavLink to="/">
          <Icon
            iconComponent={logo}
            outlineColor="none"
            width={396}
            height={132}
          />
        </NavLink>
      </div>
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
          id="password"
          type="password"
          name="password"
          placeholder="비밀번호를 입력해주세요"
          value={form.password}
          onChange={handleInputChange}
        >
          비밀번호
        </CustomInput>
        <Button isFormCheck={isFromCheck}>로그인</Button>
      </form>
      <EasyLogin />
      <HelpText>
        판다마켓이 처음이신가요?{" "}
        <NavLink to="/signUp">
          <SingUpLinkStyle>회원가입</SingUpLinkStyle>
        </NavLink>
      </HelpText>
    </div>
  );
}

export default LoginPage;

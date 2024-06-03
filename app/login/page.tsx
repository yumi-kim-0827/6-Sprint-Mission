"use client";
import React from "react";
import { useRouter } from "next/navigation";
import LoginForm from "./LoginForm";
import PandaLogo from "../assets/images/logo.png";
import styles from "./LoginPage.module.css";
import Image from "next/image";

const LoginPage = () => {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/");
  };

  const handleSignUpClick = () => {
    router.push("/signup");
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.logo}>
        <span onClick={handleLogoClick}>
          <Image
            src={PandaLogo}
            className="pandamarket"
            width={296}
            height={100}
            alt="판다마켓 로고"
          />
        </span>
      </div>
      <LoginForm />
      <div className={styles.goSignUp}>
        판다마켓이 처음이신가요?{" "}
        <a className={styles.signUpLink} onClick={handleSignUpClick}>
          회원가입
        </a>
      </div>
    </div>
  );
};

export default LoginPage;

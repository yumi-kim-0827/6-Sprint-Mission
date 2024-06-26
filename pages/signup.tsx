import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.scss";
import Button from "@/components/Button";

interface Input {
  email: string;
  nickName: string;
  password: string;
  passwordConfirm: string;
}
interface Message {
  emailMsg: string;
  passwordMsg: string;
  psConfirmMsg: string;
}

interface Valid {
  emailValid: boolean;
  passwordValid: boolean;
  psConfirmValid: boolean;
}

const Signup = () => {
  const [input, setInput] = useState<Input>({
    email: "",
    nickName: "",
    password: "",
    passwordConfirm: "",
  });
  const [message, setMessage] = useState<Message>({
    emailMsg: "",
    passwordMsg: "",
    psConfirmMsg: "",
  });

  const emailRegExp =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = input;
    if (emailRegExp.test(input.email) && input.password.length > 7) {
      //회원가입 로직
      alert("회원가입");
    } else {
      alert("유효한 이메일과 비밀번호를 입력해주세요.");
    }
  };

  const handleEmailError = () => {
    if (input.email.length < 1) {
      alert("이메일을 입력해주세요.");
    }
    setMessage({
      ...message,
      emailMsg: emailRegExp.test(input.email) ? "" : "잘못된 이메일입니다.",
    });
  };

  const handleNickError = () => {
    if (input.nickName.length < 1) {
      alert("닉네임을 입력해주세요");
    }
  };

  const handlePasswordError = () => {
    if (input.password.length < 1) {
      alert("비밀번호를 입력해주세요.");
    }
    setMessage({
      ...message,
      passwordMsg:
        input.password.length > 7 ? "" : "비밀번호 8글자 이상 입력해주세요.",
    });
  };

  const handlePasswordConfirmError = () => {
    if (input.passwordConfirm.length < 1) {
      alert("비밀번호 확인을 입력해주세요.");
    }
    setMessage({
      ...message,
      psConfirmMsg:
        input.password === input.passwordConfirm
          ? "일치합니다"
          : "일치하지않습니다.",
    });
  };

  return (
    <>
      <Head>
        <title>회원가입</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header className={styles.sign_header}>
          <h1>
            <Link href="/">
              <Image src="/logo.png" alt="로고" width="396" height="132" />
            </Link>
          </h1>
        </header>

        <div className={styles.sign_wrap}>
          <form onSubmit={handleSubmit}>
            <div className={styles.sign_input}>
              <label>이메일</label>
              <input
                placeholder="이메일을 입력해주세요"
                value={input.email}
                name="email"
                onChange={onChange}
                onBlur={handleEmailError}
              />
              <span>{message.emailMsg}</span>
            </div>
            <div className={styles.sign_input}>
              <label>닉네임</label>
              <input
                placeholder="닉네임을 입력해주세요"
                value={input.nickName}
                name="nickName"
                onChange={onChange}
                onBlur={handleNickError}
              />
            </div>
            <div className={styles.sign_input}>
              <label>비밀번호</label>
              <input
                type="password"
                placeholder="비밀번호를 입력해주세요"
                value={input.password}
                name="password"
                onChange={onChange}
                onBlur={handlePasswordError}
              />
              <span>{message.passwordMsg}</span>
            </div>
            <div className={styles.sign_input}>
              <label>비밀번호 확인</label>
              <input
                type="password"
                placeholder="비밀번호를 다시 한 번 입력해주세요"
                value={input.passwordConfirm}
                name="passwordConfirm"
                onChange={onChange}
                onBlur={handlePasswordConfirmError}
              />
              <span>{message.psConfirmMsg}</span>
            </div>
            <Button text={"회원가입"} className={"btn_style"} />
          </form>
        </div>
        <div className={styles.sign_notice}>
          <p>
            이미 회원이신가요? <Link href="./login">로그인</Link>
          </p>
        </div>
      </main>
    </>
  );
};

export default Signup;

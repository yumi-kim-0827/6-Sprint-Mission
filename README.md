# 💡Simple todo pwa

스프린트 쇼핑몰 실습 과제 11122

# 🖥️View web site

https://6-sprint-mission-gules.vercel.app/

<!--프로젝트 대문 이미지-->

<!--목차-->

# Table of Contents

- [[1] About the Project](#1-about-the-project)
  - [Features](#features)
  - [Technologies](#technologies)
- [[2] Getting Started](#2-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [[3] Usage](#3-usage)
- [[4] Contribution](#4-contribution)
- [[5] Acknowledgement](#5-acknowledgement)
- [[6] Contact](#6-contact)
- [[7] License](#7-license)

# [1] About the Project

스프린트 실습 과제입니다.

## Features

## Technologies

- React js
- Typescript
- Next.js
- scss

# [2] Getting Started

## Prerequisites

- npm

```bash
npm install npm@latest -g
```

## Installation

1. Repository 클론

```bash
git clone https://github.com/your-username/project-repository
```

2. NPM packages 설치

```bash
npm install
```

# [3] Usage

로그인 유효성 검사

```java
//로그인  유효성 검사
  const [input, setInput] = useState<Input>({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState<Message>({
    emailMsg: "",
    passwordMsg: "",
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
      //로극인 로직
      alert("로그인");
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
```

# [4] Contribution

버그 수정에 🐞, 아이디어 제공에 💡, 새로운 기능 구현에 ✨를 사용할 수 있습니다.\*

- (예시) 🐞 [YUMEEKIM](https://github.com/yumi-kim-0827): 메인페이지 버그 수정

# [5] Acknowledgement

- design https://www.figma.com/design/IVkRlYWHY74QlgmxqA99Ym/%EC%8A%A4%ED%94%84%EB%A6%B0%ED%8A%B8-%EB%AF%B8%EC%85%98?node-id=541-21096&t=P95cJXwaUwd214sk-0

# [6] Contact

- 📧 yumee0827@naver.com
- 📋 [https://github.com/yumi-kim-0827](https://github.com/yumi-kim-0827)

# [7] License

MIT 라이센스

<!--Url for Badges-->

[license-shield]: https://img.shields.io/github/license/dev-ujin/readme-template?labelColor=D8D8D8&color=04B4AE
[repository-size-shield]: https://img.shields.io/github/repo-size/dev-ujin/readme-template?labelColor=D8D8D8&color=BE81F7
[issue-closed-shield]: https://img.shields.io/github/issues-closed/dev-ujin/readme-template?labelColor=D8D8D8&color=FE9A2E

<!--Url for Buttons-->

[readme-eng-shield]: https://img.shields.io/badge/-readme%20in%20english-2E2E2E?style=for-the-badge
[view-demo-shield]: https://img.shields.io/badge/-%F0%9F%98%8E%20view%20demo-F3F781?style=for-the-badge
[view-demo-url]: https://dev-ujin.github.io
[report-bug-shield]: https://img.shields.io/badge/-%F0%9F%90%9E%20report%20bug-F5A9A9?style=for-the-badge
[report-bug-url]: https://github.com/dev-ujin/readme-template/issues
[request-feature-shield]: https://img.shields.io/badge/-%E2%9C%A8%20request%20feature-A9D0F5?style=for-the-badge
[request-feature-url]: https://github.com/dev-ujin/readme-template/issues

<!--URLS-->

[license-url]: LICENSE.md
[contribution-url]: CONTRIBUTION.md
[readme-eng-url]: ../README.md

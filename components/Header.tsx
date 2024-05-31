import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">
        <div>로고</div>
      </Link>
      <Link href="/boards">
        <div>자유게시판</div>
      </Link>
      <Link href="/market">
        <div>중고마켓</div>
      </Link>
      <Link href="/join">
        <div>로그인</div>
      </Link>
      <Link href="/setting">
        <div>설정</div>
      </Link>
    </header>
  );
}

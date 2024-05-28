import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <div>
        <Link href='/'>
          <picture>
            <source srcSet='/images/text_logo.webp' media='(max-width: 767px)' width={81} type='image/webp' />
            <source srcSet='/images/text_logo.png' media='(max-width: 767px)' width={81} />
            <source srcSet='/images/img_logo.webp' width={153} type='image/webp' />
            <img src='/images/img_logo.png' width={153} alt='판다마켓로고' />
          </picture>
        </Link>
        <Link href='/'>
          <button>자유게시판</button>
        </Link>
        <Link href='/'>
          <button>중고마켓</button>
        </Link>
      </div>
      <Link href='/'>
        <button>로그인</button>
      </Link>
    </nav>
  );
}

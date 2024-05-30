import IconLogo from '@/public/logo-pandamarket.svg';
import IconTitle from '@/public/title-pandamarket.svg';
import ProfileMockup from '@/public/profile.svg';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const router = useRouter();

  return (
    <>
      <header className="flex items-center justify-center fixed top-0 w-[100%] h-[70px] z-[9999] bg-white border-b border-[#DFDFDF]">
        <div className="flex justify-between items-center w-[100%] lg:mr-[200px] lg:ml-[200px] md:mr-[24px] md:ml-[24px] sm:mr-[16px] sm:ml-[16px]">
          <div className="flex items-center mr-[20px]">
            <Image
              className="mr-[10px] lg:block md:block sm:hidden"
              src={IconLogo}
              alt="판다마켓 로고"
            />
            <Image src={IconTitle} alt="판다마켓 타이틀" />
          </div>
          <nav className="flex flex-1 md:gap-[20px] sm:gap-[10px] text-[18px] text-[#4b5563] font-bold text-nowrap">
            <Link
              className={`${
                router.pathname === '/board' ? 'text-[#3692ff]' : ''
              }`}
              href="/board"
            >
              자유게시판
            </Link>
            <Link href="/">중고마켓</Link>
          </nav>
          <div>
            <Image src={ProfileMockup} alt="프로필 이미지" />
          </div>
        </div>
      </header>
    </>
  );
}

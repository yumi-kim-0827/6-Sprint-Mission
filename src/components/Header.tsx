import Link from "next/link";
import pandaLogo from "@/src/assets/icons/panda_face.svg";
import Image from "next/image";
import LinkButton from "./LinkButton";

const Header = () => {
  return (
    <header className="flex sticky top-0 py-[15px] pl-6 pr-[34px] bg-white border-b border-b-[#dfdfdf] z-10">
      <div className="w-full flex justify-between items-center flex-wrap max-w-[1520px] mx-auto">
        <div className="flex justify-center items-center">
          <Link href="/" className="flex justify-center items-center gap-2">
            <div className="hidden w-10 h-10 sm:block">
              <Image src={pandaLogo} alt="판다마켓 로고 이미지" />
            </div>
            <span className="font-ROKAFSans text-blue text-[26px] font-bold leading-14 text-left">
              판다마켓
            </span>
          </Link>
          <ul className="flex justify-center items-center ml-4 sm:ml-5 md:ml-8 gap-2">
            <li className="md:min-w-[110px] text-center">
              <Link href="/boards" className="text-gray-600 font-bold text-lg">
                자유게시판
              </Link>
            </li>
            <li className="md:min-w-[110px] text-center">
              <Link href="/items" className="text-gray-600 font-bold text-lg">
                중고마켓
              </Link>
            </li>
          </ul>
        </div>

        <LinkButton href={"/signin"}>로그인</LinkButton>
      </div>
    </header>
  );
};

export default Header;

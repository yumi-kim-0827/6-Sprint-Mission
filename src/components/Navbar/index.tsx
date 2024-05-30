import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "@/components/commons/Button";
import useResponsive from "@/hooks/useResponsive";

export default function Navbar() {
  const router = useRouter();
  const { pathname } = router;
  const [isMobile] = useResponsive();

  return (
    <nav className="sticky top-0 flex h-[70px] items-center border-b-[1px] border-b-[#dfdfdf] bg-white px-4 py-[10px] md:px-[34px] xl:px-[200px]">
      <Link href="/">
        {isMobile ? (
          <Image
            src="/icons/main_logo_small.svg"
            alt="logo"
            width={81}
            height={40}
            priority
          />
        ) : (
          <Image
            src="/icons/main_logo.svg"
            alt="logo"
            width={153}
            height={51}
            priority
          />
        )}
      </Link>

      <div className="ml-[15px] flex flex-grow items-center gap-2 font-bold text-[#4b5563] md:ml-8 md:gap-[38px] md:text-lg">
        <Link
          href="/boards"
          className={`${pathname === "/boards" && "text-main-blue"}`}
        >
          자유게시판
        </Link>
        <Link
          href="/items"
          className={`${pathname === "/items" && "text-main-blue"}`}
        >
          중고마켓
        </Link>
      </div>

      <Button.Link href="/login">로그인</Button.Link>
    </nav>
  );
}

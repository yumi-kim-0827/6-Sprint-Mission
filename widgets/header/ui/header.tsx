import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

const rokafSans = localFont({ src: "./ROKAF Sans Bold.ttf" });

export function Header() {
  return (
    <header className="px-4 md:px-6 border-b-gray border-b-[1px]">
      <section className="flex justify-between h-[70px] items-center max-w-[1520px] mx-auto">
        <section className="flex  items-center gap-4 md:gap-5 lg:gap-8">
          <div className="relative object-cover h-[70px] w-[81px] md:w-[153px] flex items-center text-blue">
            <Link
              href="/"
              className={`text-xl md:text-2xl flex gap-2 items-center font-bold
                ${rokafSans.className}`}
            >
              <Image
                src="/icons/pandaIcon.png"
                alt="pandaLogo"
                width={40}
                height={40}
                className="hidden md:inline"
              />
              판다마켓
            </Link>
          </div>
          <nav className="flex gap-2 md:gap-0 text-base md:text-lg font-bold">
            <Link
              href="/freeBoard"
              className="text-blue no-underline md:px-[15px]"
            >
              자유게시판
            </Link>
            <Link href="/market" className="no-underline  md:px-[15px]">
              중고마켓
            </Link>
          </nav>
        </section>
        <section>
          <Image
            src="/icons/profileIcon.png"
            alt="profile image"
            width={40}
            height={40}
            className="hover:cursor-pointer"
          />
        </section>
      </section>
    </header>
  );
}

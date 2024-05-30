import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const getLinkStyle = (currentPath: string, linkPath: string) => {
  return currentPath.startsWith(linkPath) ? "text-blue-500" : "text-gray-600";
};

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header className="flex justify-between items-center p-4">
      <div className="flex items-center">
        <Link
          href="/"
          className="mr-4 md:mr-8 lg:mr-12"
          aria-label="홈으로 이동"
        >
          <Image
            src={"/logo.svg"}
            alt="판다마켓 로고"
            width={153}
            height={50}
          />
        </Link>

        <nav>
          <ul className="flex list-none gap-2 font-bold text-lg text-gray-600 md:gap-9 md:text-xl">
            <li>
              <Link
                href="/boards"
                className={`hover:text-blue-500 ${getLinkStyle(
                  router.pathname,
                  "/boards"
                )}`}
              >
                자유게시판
              </Link>
            </li>
            <li>
              <Link
                href="/items"
                className={`hover:text-blue-500 ${getLinkStyle(
                  router.pathname,
                  "/items"
                )}`}
              >
                중고마켓
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* <Link href="/login" className="text-gray-600 hover:text-blue-500">
        로그인
      </Link> */}
      <Image src="/profile_icon.svg" alt="프로필" width={40} height={40} />
    </header>
  );
};

export default Header;

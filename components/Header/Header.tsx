import Image from "next/image";
import Navigator from "./Navigator";
import iconLogo from "@/public/images/icon_panda.png";
import textLogo from "@/public/images/text_panda.png";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="w-full h-16 border-b-gray-100 border-solid border-b-[1px] fixed top-0 left-0 bg-white">
        <div className="max-w-[1200px] w-full h-full mx-auto flex justify-between items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Image src={iconLogo} alt="판다마켓로고" width={40} height={40} />
            <Image src={textLogo} alt="판다마켓로고" width={103} height={25} />
          </Link>
          <Navigator />
        </div>
      </header>
    </>
  );
}

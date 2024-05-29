import testImage from "@/public/images/adam.jpeg";
import Image from "next/image";
import Link from "next/link";

export default function Navigator() {
  return (
    <>
      <nav className="flex-grow flex justify-between items-center">
        <div className="flex-grow flex">
          <Link
            className="w-28 h-16 hover:bg-hover-gray active:bg-active-gray flex justify-center items-center"
            href="/boards"
          >
            Boards
          </Link>
          <Link
            className="w-28 h-16 hover:bg-hover-gray active:bg-active-gray flex justify-center items-center"
            href="/"
          >
            Market
          </Link>
        </div>
        <div>
          <Image src={testImage} alt="testImage" className="w-6 h-6" />
        </div>
      </nav>
    </>
  );
}

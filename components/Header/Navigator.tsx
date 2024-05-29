import testImage from "@/public/images/adam.jpeg";
import Image from "next/image";

export default function Navigator() {
  return (
    <>
      <nav className="flex-grow flex justify-between items-center">
        <div className="flex-grow flex">
          <a className="w-28 h-16 hover:bg-gray-100 flex justify-center items-center">
            market
          </a>
          <a className="w-28 h-16 hover:bg-gray-100 flex justify-center items-center">
            boards
          </a>
        </div>
        <div>
          <Image src={testImage} alt="testImage" className="w-6 h-6" />
        </div>
      </nav>
    </>
  );
}

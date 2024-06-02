import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-[1200px] h-[1200px] flex flex-col items-center justify-center gap-10 bg-gray-200 rounded-box">
      <div className="text-9xl">
        <p>Wrong path</p>
      </div>
      <Link
        href="/"
        className="w-80 h-20 bg-gray-200 hover:bg-hover-blue rounded-button flex justify-center items-center text-2xl text-gray-800 border-gray-800 border-solid border-[1px]"
      >
        <p>돌아가기</p>
      </Link>
    </div>
  );
}

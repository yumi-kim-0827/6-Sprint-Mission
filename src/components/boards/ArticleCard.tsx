import Image from "next/image";
import Link from "next/link";

// TODO: href 변경
export default function ArticleCard() {
  return (
    <Link href="/">
      <div className="h-[167px] w-full min-w-[292px] rounded-lg bg-cool-gray-200 px-6 pb-4">
        <div className="flex h-[30px] w-[102px] items-center justify-center gap-1 rounded-b-[32px] bg-main-blue">
          <Image src="/icons/ic_medal.svg" alt="medal" width={16} height={16} />
          <span className="font-semibold text-white">Best</span>
        </div>

        <div className="mt-4 flex h-[72px] justify-between gap-2">
          <h1 className="line-clamp-3 h-[60px] text-lg font-semibold leading-5">
            맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야 하나요?
          </h1>
          <div className="flex size-[72px] flex-shrink-0 items-center justify-center rounded-lg border-[0.75px] border-[#e5e7eb] bg-white p-3">
            <Image
              src="/icons/image_71.png"
              alt="test"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-4 flex justify-between text-sm">
          <div className="flex items-center text-cool-gray-600">
            <span>총명한판다</span>
            <Image
              src="/icons/ic_heart.svg"
              alt="heart"
              width={16}
              height={16}
              className="ml-2"
            />
            <span className="ml-1">10</span>
          </div>

          <span className="text-cool-gray-400">2024. 04. 16</span>
        </div>
      </div>
    </Link>
  );
}

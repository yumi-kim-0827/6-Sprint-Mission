import Image from "next/image";

export default function PostPreview() {
  return (
    <div className=" mb-6 w-full border-b pb-6">
      <div className="flex justify-between gap-2">
        <h1 className="text-lg font-semibold leading-5">
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

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm">
          <Image
            src="/icons/ic_profile.svg"
            alt="profile"
            width={24}
            height={24}
          />
          <span className="line-clamp-1 max-w-[120px] text-cool-gray-600">
            총명한판다
          </span>
          <span className="text-cool-gray-400">2024. 04. 16</span>
        </div>

        <div className="flex gap-2">
          <Image src="/icons/ic_heart.svg" alt="heart" width={24} height={24} />
          <span className="text-cool-gray-500">9999+</span>
        </div>
      </div>
    </div>
  );
}

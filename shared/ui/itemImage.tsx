import Image from "next/image";
interface Props {
  imageUrl: string | null;
}
export function ItemImage({ imageUrl }: Props) {
  if (imageUrl === null) return null;
  return (
    <figure className="rounded-lg border-[#e5e7eb] border bg-white relative p-3 w-[72px] h-[72px] flex-shrink-0 flex-grow-0">
      <div className="relative z-10 h-full w-full">
        <Image
          fill
          src={imageUrl}
          alt="상품 이미지"
          className="absolute z-20"
        />
      </div>
    </figure>
  );
}

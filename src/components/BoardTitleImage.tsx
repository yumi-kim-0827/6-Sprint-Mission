import Image from "next/image";
import React from "react";

interface BoardTitleImageProps {
  title: string;
  image: string | null;
}

const BoardTitleImage = ({ title, image }: BoardTitleImageProps) => {
  return (
    <>
      <p className="flex-1 font-semibold text-lg md:text-xl leading-[1.2] truncate line-clamp-2 whitespace-normal h-fit">
        {title}
      </p>
      {image !== null ? (
        <div className="w-[72px] h-[72px] rounded-lg border border-gray-100 flex justify-center items-center">
          <Image
            src={image}
            alt="이미지 미리보기"
            width={72}
            height={72}
            objectFit="cover"
          />
        </div>
      ) : null}
    </>
  );
};

export default BoardTitleImage;

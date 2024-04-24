import { useLocation } from "react-router-dom";

import { Navbar } from "../components";
import { favoriteIcon } from "../images";
import formatNumber from "../utils/formatNumber";

export default function ItemDetails() {
  const location = useLocation();
  const postedItems = location.state?.post;

  return (
    <>
      <Navbar />
      <main className="my-6">
        <div className="mx-auto flex w-[1200px] justify-center">
          <img
            src={postedItems.images[0]}
            alt={postedItems.name}
            className="h-[486px] w-[486px] rounded-2xl object-fill"
          />
          <div className="ml-6 flex flex-grow flex-col">
            <h1 className="text-2xl font-semibold">
              {postedItems.name} 팔아요
            </h1>
            <h1 className="my-4 text-4xl font-semibold">
              {formatNumber(postedItems.price)} 원
            </h1>
            <hr className="my-4" />
            <p className="text-sm font-semibold">상품 소개</p>
            <p className="mt-2">{postedItems.description}</p>
            <p className="mt-6">상품 태그</p>
            <div className="mt-3 flex flex-wrap gap-x-3">
              {postedItems.tags?.map((tag) => {
                return (
                  <p key={tag.id}>
                    <span className="flex gap-x-2 rounded-3xl bg-[var(--cool-gray50)] px-4 py-3">
                      #{tag}
                    </span>
                  </p>
                );
              })}
            </div>
            <div className="mt-auto flex w-fit cursor-default gap-x-1 rounded-[35px] border px-3 py-1">
              <img src={favoriteIcon} alt="favoriteicon" />
              <p className="">{postedItems.favoriteCount}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

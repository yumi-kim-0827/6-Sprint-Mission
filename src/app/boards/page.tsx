"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import BestPostList from "@/components/boards/BestPostList";
import NormalPostList from "@/components/boards/NormalPostList";
import BaseButton from "@/components/BaseButton";
import SearchInput from "@/components/SearchInput";
import SortDropdown from "@/components/SortDropdown";
import Loading from "@/components/Loading";
import useDataFetch from "@/hooks/useDataFetch";
import useDeviceSize from "@/hooks/useDeviceSize";

const BEST_POST_LIMIT: { [key in DeviceSizes]: number } = {
  small: 1,
  medium: 2,
  large: 3,
};

const boards = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isLoading, error, axiosFetcher } = useDataFetch();
  const [data, setData] = useState<Post[] | null>(null);
  const [order, setOrder] = useState<SortOptions>("recent");
  const [best, setBest] = useState<Post[]>([]);
  const deviceSize = useDeviceSize();

  const keyword = searchParams.get("keyword");

  // 게시글을 받아오는 fetchPosts함수 정의
  const fetchPosts = async (order: SortOptions, searchQuery: string | null) => {
    const options = {
      method: "GET",
      url: "articles",
      params: {
        orderBy: order,
        ...(searchQuery && { keyword: searchQuery }),
      },
    };

    const response = await axiosFetcher(options);

    if (!error) {
      setData(response.data.list);
    }
  };

  // 화면 사이즈에 맞게, 좋아요순으로 베스트 게시글을 받아와서 세팅하는 useEffect
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "articles",
        params: {
          pageSize: BEST_POST_LIMIT[deviceSize],
          orderBy: "like",
        },
      };

      const response = await axiosFetcher(options);

      if (!error) {
        setBest(response.data.list);
      }
    };

    fetchData();
  }, [deviceSize, error]);

  // order, searchParams에 따라 data를 가져오는 useEffect
  useEffect(() => {
    fetchPosts(order, keyword);
  }, [order, keyword, error]);

  const handleSearch = (query: string) => {
    router.replace(`/boards?keyword=${query}`);
  };

  // 로딩, 에러에 따른 화면 표시
  if (isLoading || !data) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {data && (
        <>
          <div className="text-[20px] font-bold text-cool-gray-800">
            베스트 게시글
          </div>
          <BestPostList data={best} className="mb-[40px] mt-[16px]" />
          <div className="mb-4 flex items-center justify-between">
            <div className="text-[20px] font-bold text-cool-gray-800">
              게시글
            </div>
            <BaseButton className="h-[42px] w-[88px]">글쓰기</BaseButton>
          </div>
          <div className="flex items-center justify-between gap-[8px] md:gap-[16px]">
            <SearchInput
              placeholder="검색할 상품을 입력해주세요"
              defaultValue={keyword ? keyword : ""}
              onKeyDown={handleSearch}
            />
            <SortDropdown order={order} onClick={setOrder} />
          </div>
          <NormalPostList data={data} />
        </>
      )}
    </>
  );
};

export default boards;

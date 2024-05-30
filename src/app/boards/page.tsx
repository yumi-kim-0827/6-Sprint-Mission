"use client";

import { useEffect, useState, useMemo } from "react";
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
  const { isLoading, error, axiosFetcher } = useDataFetch();
  const [data, setData] = useState<Post[] | null>(null);
  const [order, setOrder] = useState<SortOptions>("recent");
  const [best, setBest] = useState<Post[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const deviceSize = useDeviceSize();

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

  // 기본값(최신순)으로 게시글 받아오는 useEffect
  useEffect(() => {
    const fetchData = async (order: SortOptions) => {
      const options = {
        method: "GET",
        url: "articles",
        params: {
          orderBy: order,
        },
      };

      const response = await axiosFetcher(options);

      if (!error) {
        setData(response.data.list);
      }
    };

    fetchData(order);
  }, [order]);

  // 검색어가 있을때 검색된 결과를 받아오는 useEffect
  useEffect(() => {
    if (searchQuery === "") return;

    const fetchData = async (searchQuery: string) => {
      const options = {
        method: "GET",
        url: "articles",
        params: {
          keyword: searchQuery,
        },
      };

      const response = await axiosFetcher(options);

      if (!error) {
        setData(response.data.list);
      }
    };

    fetchData(searchQuery);
  }, [searchQuery]);

  // 로딩, 에러에 따른 화면 표시
  if (isLoading || !data) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {data && data.length > 0 && (
        <>
          <div className="text-[20px] font-bold text-cool-gray-800">
            베스트 게시글
          </div>
          <BestPostList data={best} className="mt-[16px] mb-[40px]" />
          <div className="flex items-center justify-between mb-4">
            <div className="text-[20px] font-bold text-cool-gray-800">
              게시글
            </div>
            <BaseButton className="w-[88px] h-[42px]">글쓰기</BaseButton>
          </div>
          <div className="flex items-center justify-between gap-[8px] md:gap-[16px]">
            <SearchInput
              placeholder="검색할 상품을 입력해주세요"
              onKeyDown={setSearchQuery}
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

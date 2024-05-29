import { useEffect, useState } from "react";
import styled from "styled-components";
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
  const [data, setData] = useState<Post[]>([]);
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

  // 로딩중이면 로딩컴포넌트 반환
  if (isLoading) {
    return <Loading />;
  }

  // 에러나면 에러컴포넌트 반환
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <SDiv>
      {data && (
        <>
          <STitle>베스트 게시글</STitle>
          <SBestPostList data={best} />
          <SPostTitleSection>
            <STitle>게시글</STitle>
            <SButton size="small">글쓰기</SButton>
          </SPostTitleSection>
          <SPostSearchSection>
            <SearchInput
              placeholder="검색할 상품을 입력해주세요"
              onKeyDown={setSearchQuery}
            />
            <SortDropdown order={order} onClick={setOrder} />
          </SPostSearchSection>
          <NormalPostList data={data} />
        </>
      )}
    </SDiv>
  );
};

const SDiv = styled.div``;

const STitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: var(--color-cool-gray-800);
`;

const SBestPostList = styled(BestPostList)`
  margin-top: 16px;
  margin-bottom: 40px;
`;

const SPostTitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const SButton = styled(BaseButton)`
  width: 88px;
  height: 42px;
`;

const SPostSearchSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  @media (min-width: 768px) {
    gap: 16px;
  }
`;

export default boards;

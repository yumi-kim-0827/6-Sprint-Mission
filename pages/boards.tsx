import { useState, useEffect, useRef } from "react";
import Card from "components/Card";
import SearchForm from "components/SearchForm";
import Post from "components/Post";
import Button from "components/Button";
import styled from "styled-components";
import { dispatcher } from "lib/axios";
import useRequest from "hooks/useRequest";
import useInterSectionObserver from "hooks/useInterSectionObserver";
import { Article, InitialDataProps } from "types/type";

const PAGE_SIZE = 5;

export async function getStaticProps() {
  let articles: Article[];
  let totalCount: number;

  try {
    const res = await dispatcher({
      method: "get",
      url: "/articles",
      params: {
        page: 1,
        pageSize: 5,
        orderBy: "like",
      },
    });
    articles = res.data.list;
    totalCount = res.data.totalCount;
  } catch {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      initialData: articles,
      initialTotalCount: totalCount,
    },
  }
} 

export default function Boards({ initialData, initialTotalCount }: InitialDataProps) {
  const [bestArticles, setBestArticles] = useState<Article[]>(initialData);
  const [articles, setArticles] = useState<Article[]>(initialData);

  const [bestArticlesPage, setBestArticlesPage] = useState(2);
  const [articlesPage, setArticlesPage] = useState(2);

  const [totalBestArticles, setTotalBestArticles] = useState(initialTotalCount);
  const [totalArticles, setTotalArticles] = useState(initialTotalCount);

  const bestArticlesRef = useRef<HTMLDivElement>(null);
  const articlesRef = useRef<HTMLDivElement>(null);

  const isBestArticlesIntersection = useInterSectionObserver(bestArticlesRef);
  const isArticlesIntersection = useInterSectionObserver(articlesRef);

  const [orderBy, setOrderBy] = useState("like");

  const { isLoading: bestArticlesLoading, requestFunc: getBestArticlesData } =
    useRequest({
      options: {
        method: "get",
        url: "articles",
        params: {
          page: bestArticlesPage,
          pageSize: PAGE_SIZE,
          orderBy: "like",
        },
      },
    });

  const { isLoading: articlesLoading, requestFunc: getArticlesData } =
    useRequest({
      options: {
        method: "get",
        url: "articles",
        params: {
          page: articlesPage,
          pageSize: PAGE_SIZE,
          orderBy: orderBy,
        },
      },
    });

  useEffect(() => {
    (async () => {
      if (
        !isBestArticlesIntersection ||
        bestArticles.length >= totalBestArticles
      )
        return;

      const result = await getBestArticlesData();

      setBestArticles((prev) => [...prev, ...result?.data?.list]);
      setBestArticlesPage((prev) => prev + 1);
      setTotalBestArticles(result?.data?.totalCount);
    })();
  }, [isBestArticlesIntersection]);

  useEffect(() => {
    (async () => {
      if (!isArticlesIntersection || articles.length >= totalArticles) return;

      const result = await getArticlesData();
      setArticles((prev) => [...prev, ...result?.data?.list]);
      setArticlesPage((prev) => prev + 1);
      setTotalArticles(result?.data?.totalCount);
    })();
  }, [isArticlesIntersection]);

  // Sort Data
  const handleSortChange = (newOrderBy: string) => {
    setOrderBy(newOrderBy);
    setArticles([]);
    setArticlesPage(1);
  };

  return (
    <>
      <TitleContainer>
        <Title>베스트 게시글</Title>
      </TitleContainer>
      <ScrollX>
        <CardContainer>
          <Card articles={bestArticles} />
          {bestArticlesLoading && <Loading>Loading..</Loading>}
          <div ref={bestArticlesRef}></div>
        </CardContainer>
      </ScrollX>
      <TitleContainer>
        <Title>게시글</Title>
        <Button>글쓰기</Button>
      </TitleContainer>
      <SearchContainer>
        <SearchForm handleSortChange={handleSortChange} />
      </SearchContainer>
      <Post articles={articles} />
      {articlesLoading && <Loading>Loading..</Loading>}
      <div ref={articlesRef}></div>
    </>
  );
}

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 700;
  line-height: 2.3rem;
`;

const ScrollX = styled.div`
  overflow-x: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE, Edge */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

const CardContainer = styled.div`
  display: inline-flex;
  gap: 16px;
  margin-bottom: 40px;
`;

const Loading = styled.h1`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colorPalette.primary};
`;

const SearchContainer = styled.div`
  margin-bottom: 24px;
`;

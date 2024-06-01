import { GetServerSidePropsContext } from "next";
import Navbar from "@/components/commons/Navbar";
import Layout from "@/components/commons/Layout";
import { Article, DataFormat } from "@/models/api_response";
import axios from "@/libs/axios";
import BestArticles from "@/components/boards/BestArticles";
import ArticleList from "@/components/boards/ArticleList";

const PAGE_SIZE = 5;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { orderBy, keyword, page } = context.query;

  const res = await axios({
    url: "/articles",
    params: {
      orderBy,
      keyword,
      pageSize: PAGE_SIZE,
      page,
    },
  });

  const articleListData = res?.data;

  return {
    props: {
      articleListData,
    },
  };
}

export default function FreeBoard({
  articleListData,
}: {
  articleListData: DataFormat<Article>;
}) {
  return (
    <>
      <Navbar />
      <Layout.Main>
        <BestArticles />
        <ArticleList articleListData={articleListData} />
      </Layout.Main>
    </>
  );
}

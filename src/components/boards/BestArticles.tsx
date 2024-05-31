import { useEffect, useState } from "react";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Article, DataFormat } from "@/models/api_response";
import useAxiosFetch from "@/hooks/useAxiosFetch";
import ArticleCard from "@/components/boards/ArticleCard";
import useDeviceState, { Device } from "@/hooks/useDeviceState";
import dispatcher from "@/libs/dispatcher";
import axios from "@/libs/axios";

export async function getStaticProps() {
  const res = await axios.get("/articles");
  const articleList = res?.data?.list;

  return {
    props: {
      articleList,
    },
  };
}

export default function BestArticles({
  articleList,
}: {
  articleList: Article[];
}) {
  return (
    <div className="mt-6">
      <h1 className="text-xl font-bold text-cool-gray-900">베스트 게시글</h1>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 md:gap-4 xl:grid-cols-3 xl:gap-6">
        {articleList.map((article) => (
          <ArticleCard key={article.id} data={article} />
        ))}
      </div>
    </div>
  );
}

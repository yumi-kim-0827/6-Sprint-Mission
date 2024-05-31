import { useEffect, useState } from 'react';
import axios from '@/src/libs/axios';
import ArticleList from './ArticleList';
import { Article } from '../types/type';

const LIMIT = 3;

export default function BestArticleList() {
  const [bestArticles, setBestArticles] = useState<Article[]>([]);

  async function getBestArticles() {
    const res = await axios.get(`/articles?pageSize=${LIMIT}&orderBy=like`);
    setBestArticles(res.data.list);
  }

  useEffect(() => {
    getBestArticles();
  }, []);

  return (
    <>
      <div>베스트 게시글</div>
      <ArticleList articles={bestArticles} />
    </>
  );
}

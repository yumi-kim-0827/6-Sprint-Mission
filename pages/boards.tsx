import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ArticleData, ArticlesResponse } from '@/types/types';
import ArticleBoard from '@/components/ArticleBoard/ArticleBoard';
import BestArticleList from '@/components/BestArticleList/BestArticleList';

const Boards = () => {
  const [articles, setArticles] = useState<ArticleData[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);


  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get<ArticlesResponse>('https://panda-market-api.vercel.app/articles/');
        setArticles(response.data.list);
        setTotalCount(response.data.totalCount);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching articles:', err);
        setError(err as Error);
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading articles: {error.message}</div>;
  }

  return (
    <div>
      <BestArticleList articles={articles} />
      <ArticleBoard articles={articles}/>
    </div>
  );
};

export default Boards;


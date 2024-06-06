import React from 'react';
import Article from '@/components/Article/Article';
import { ArticleData } from '@/types/types';

interface ArticleListProps {
  articles: ArticleData[];
}

const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <div>
      {articles.map(article => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;

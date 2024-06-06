import React, { useState, useEffect } from 'react';
import ArticleList from '@/components/ArticleList/ArticleList';
import { ArticleData } from '@/types/types';

interface ArticleBoardProps {
  articles: ArticleData[];
}

const ArticleBoard = ({ articles }: ArticleBoardProps) => {
  const [sortedArticles, setSortedArticles] = useState<ArticleData[]>([]);
  const [sortOrder, setSortOrder] = useState('newest');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    filterAndSortArticles();
  }, [articles, sortOrder, searchTerm]);

  const filterAndSortArticles = () => {
    let filtered = articles.filter(article => 
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortOrder === 'likes') {
      filtered.sort((a, b) => b.likeCount - a.likeCount);
    } else {
      filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
    setSortedArticles(filtered);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value);
  };
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>게시글</h1>
      <button>글쓰기</button><br/><br/>
      <input
        type="text"
        placeholder="검색할 상품을 입력해주세요."
        value={searchTerm}
        onChange={handleSearchChange}
      /><br/><br/>
      <select value={sortOrder} onChange={handleSortChange}>
        <option value="newest">최신순</option>
        <option value="likes">좋아요순</option>
      </select>
      <ArticleList articles={sortedArticles} />
    </div>
  );
};

export default ArticleBoard;

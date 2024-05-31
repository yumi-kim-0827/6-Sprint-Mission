import { useState, useEffect } from 'react';
import axios from '@/src/libs/axios';
import ArticleList from '@/src/components/ArticleList';
import SearchForm from '@/src/components/SearchForm';

export default function BoardPage() {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);

  async function getArticles() {
    const res = await axios.get('/articles');
    const nextArticles = res.data.list;
    setArticles(nextArticles);
    setFilteredArticles(nextArticles);
  }

  useEffect(() => {
    getArticles();
  }, []);

  const handleSearch = (keyword) => {
    const filtered = articles.filter((article) => article.title.includes(keyword));
    setFilteredArticles(filtered);
  };

  return (
    <>
      <section>
        <h2>베스트 게시글</h2>
      </section>
      <section>
        <h2>게시글</h2>
        <SearchForm onSearch={handleSearch} />
        <ArticleList articles={filteredArticles} />
      </section>
    </>
  );
}
